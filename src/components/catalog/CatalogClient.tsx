"use client"

import * as React from "react"
import Link from "next/link"
import {
  CATALOG_PAGE_SIZE,
  type CatalogSortKey,
  SORT_OPTIONS,
  type SteamCatalogFacets,
  type SteamCatalogGame,
  type SteamSuggestion,
  YEAR_PRESETS,
  decodeHtmlEntities,
  formatCount,
  parseSortKey,
  steamPortraitUrl,
} from "@/lib/steam-catalog"
import { CATALOG_LAST_URL_KEY } from "./CatalogChrome"
import { PortraitGameCard } from "./PortraitGameCard"

export interface InitialCatalogState {
  q: string
  sort: CatalogSortKey
  genres: string[]
  tags: number[]
  developers: string[]
  publishers: string[]
  yearFrom?: number
  yearTo?: number
  page: number
}

interface CatalogClientProps {
  initialGames: SteamCatalogGame[]
  initialCount: number
  facets: SteamCatalogFacets
  initialState: InitialCatalogState
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages: (number | "...")[] = [1]
  if (current > 3) pages.push("...")
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)
  if (current < total - 2) pages.push("...")
  pages.push(total)
  return pages
}

export function CatalogClient({
  initialGames,
  initialCount,
  facets,
  initialState,
}: CatalogClientProps) {
  const [searchInput, setSearchInput] = React.useState(initialState.q)
  const [committedQuery, setCommittedQuery] = React.useState(initialState.q)
  const [sort, setSort] = React.useState<CatalogSortKey>(initialState.sort)
  const [genres, setGenres] = React.useState<string[]>(initialState.genres)
  const [tags, setTags] = React.useState<number[]>(initialState.tags)
  const [developers, setDevelopers] = React.useState<string[]>(initialState.developers)
  const [publishers, setPublishers] = React.useState<string[]>(initialState.publishers)
  const [yearFrom, setYearFrom] = React.useState<string>(initialState.yearFrom ? String(initialState.yearFrom) : "")
  const [yearTo, setYearTo] = React.useState<string>(initialState.yearTo ? String(initialState.yearTo) : "")
  const [page, setPage] = React.useState<number>(initialState.page)

  const [games, setGames] = React.useState<SteamCatalogGame[]>(initialGames)
  const [totalCount, setTotalCount] = React.useState<number>(initialCount)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [retryTick, setRetryTick] = React.useState(0)
  const [compactGrid, setCompactGrid] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [sortOpen, setSortOpen] = React.useState(false)
  const sortRef = React.useRef<HTMLDivElement | null>(null)

  // Live autocomplete suggestions
  const [suggestions, setSuggestions] = React.useState<SteamSuggestion[]>([])
  const [suggestOpen, setSuggestOpen] = React.useState(false)
  const searchShellRef = React.useRef<HTMLDivElement | null>(null)

  // Sidebar collapsible sections & mini search queries
  const [openGroups, setOpenGroups] = React.useState({
    genres: true,
    year: true,
    tags: false,
    developers: false,
    publishers: false,
  })
  const [genreSearch, setGenreSearch] = React.useState("")
  const [tagSearch, setTagSearch] = React.useState("")
  const [devSearch, setDevSearch] = React.useState("")
  const [pubSearch, setPubSearch] = React.useState("")
  const [devOptions, setDevOptions] = React.useState<string[]>(facets.developers.items)
  const [pubOptions, setPubOptions] = React.useState<string[]>(facets.publishers.items)

  const gridTopRef = React.useRef<HTMLDivElement | null>(null)
  const isFirstMount = React.useRef(true)

  const buildUrl = React.useCallback(
    (overrides?: { q?: string }) => {
      const params = new URLSearchParams()
      const qVal = (overrides?.q ?? committedQuery).trim()
      if (qVal) params.set("q", qVal)
      if (sort !== "popularity:desc") params.set("sort", sort)
      genres.forEach((g) => params.append("genre", g))
      tags.forEach((t) => params.append("tag", String(t)))
      developers.forEach((d) => params.append("dev", d))
      publishers.forEach((p) => params.append("pub", p))
      if (/^\d{4}$/.test(yearFrom)) params.set("from", yearFrom)
      if (/^\d{4}$/.test(yearTo)) params.set("to", yearTo)
      if (page > 1) params.set("page", String(page))
      const qs = params.toString()
      return qs ? `/catalog?${qs}` : "/catalog"
    },
    [committedQuery, sort, genres, tags, developers, publishers, yearFrom, yearTo, page],
  )

  const persistCatalogUrl = React.useCallback((url: string) => {
    try {
      window.sessionStorage.setItem(CATALOG_LAST_URL_KEY, url)
    } catch {
      // Ignore storage access errors
    }
  }, [])

  // Restore exact URL query params when browser Back hits a cached /catalog mount
  React.useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    const liveQ = (sp.get("q") ?? "").trim()
    const liveSort = parseSortKey(sp.get("sort")).key
    const liveGenres = sp.getAll("genre").filter(Boolean)
    const liveTags = sp
      .getAll("tag")
      .map(Number)
      .filter((n) => Number.isFinite(n))
    const liveDevs = sp.getAll("dev").filter(Boolean)
    const livePubs = sp.getAll("pub").filter(Boolean)
    const liveFrom = sp.get("from") ?? ""
    const liveTo = sp.get("to") ?? ""
    const livePageRaw = Number(sp.get("page"))
    const livePage = Number.isFinite(livePageRaw) && livePageRaw >= 1 ? Math.trunc(livePageRaw) : 1

    const differs =
      liveQ !== initialState.q ||
      liveSort !== initialState.sort ||
      livePage !== initialState.page ||
      liveFrom !== (initialState.yearFrom ? String(initialState.yearFrom) : "") ||
      liveTo !== (initialState.yearTo ? String(initialState.yearTo) : "") ||
      liveGenres.join("|") !== initialState.genres.join("|") ||
      liveTags.join("|") !== initialState.tags.join("|") ||
      liveDevs.join("|") !== initialState.developers.join("|") ||
      livePubs.join("|") !== initialState.publishers.join("|")

    const currentFull = window.location.search ? `/catalog${window.location.search}` : "/catalog"
    persistCatalogUrl(currentFull)

    if (differs) {
      setSearchInput(liveQ)
      setCommittedQuery(liveQ)
      setSort(liveSort)
      setGenres(liveGenres)
      setTags(liveTags)
      setDevelopers(liveDevs)
      setPublishers(livePubs)
      setYearFrom(liveFrom)
      setYearTo(liveTo)
      setPage(livePage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Close autocomplete & sort menu on outside click
  React.useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (searchShellRef.current && !searchShellRef.current.contains(e.target as Node)) {
        setSuggestOpen(false)
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false)
      }
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [])

  // Debounced live autocomplete
  React.useEffect(() => {
    const q = searchInput.trim()
    if (q.length < 2) {
      setSuggestions([])
      return
    }
    const ctrl = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/catalog/suggestions?q=${encodeURIComponent(q)}`, {
          signal: ctrl.signal,
        })
        if (!res.ok) return
        const data = (await res.json()) as SteamSuggestion[]
        setSuggestions(Array.isArray(data) ? data : [])
      } catch {
        // Ignore aborted or transient errors
      }
    }, 220)
    return () => {
      clearTimeout(timer)
      ctrl.abort()
    }
  }, [searchInput])

  // Debounced server-side search for Developers & Publishers
  React.useEffect(() => {
    if (!openGroups.developers) return
    const ctrl = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/catalog/filters?field=developers&q=${encodeURIComponent(devSearch)}`,
          { signal: ctrl.signal },
        )
        if (!res.ok) return
        const data = (await res.json()) as { items?: string[] }
        if (Array.isArray(data.items)) setDevOptions(data.items)
      } catch {
        // Ignore
      }
    }, 220)
    return () => {
      clearTimeout(timer)
      ctrl.abort()
    }
  }, [devSearch, openGroups.developers])

  React.useEffect(() => {
    if (!openGroups.publishers) return
    const ctrl = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/catalog/filters?field=publishers&q=${encodeURIComponent(pubSearch)}`,
          { signal: ctrl.signal },
        )
        if (!res.ok) return
        const data = (await res.json()) as { items?: string[] }
        if (Array.isArray(data.items)) setPubOptions(data.items)
      } catch {
        // Ignore
      }
    }, 220)
    return () => {
      clearTimeout(timer)
      ctrl.abort()
    }
  }, [pubSearch, openGroups.publishers])

  // Parse numeric year range cleanly
  const parsedYear = React.useMemo(() => {
    const gte = /^\d{4}$/.test(yearFrom) ? Number(yearFrom) : undefined
    const lte = /^\d{4}$/.test(yearTo) ? Number(yearTo) : undefined
    return gte !== undefined || lte !== undefined ? { gte, lte } : undefined
  }, [yearFrom, yearTo])

  // Sync URL query params + fetch catalog results whenever filters change
  React.useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }

    const nextUrl = buildUrl()
    window.history.replaceState(window.history.state, "", nextUrl)
    persistCatalogUrl(nextUrl)

    const ctrl = new AbortController()
    setLoading(true)
    setError(null)

    fetch("/api/catalog/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: ctrl.signal,
      body: JSON.stringify({
        title: committedQuery.trim(),
        sort,
        genres,
        tags,
        developers,
        publishers,
        releaseYear: parsedYear,
        take: CATALOG_PAGE_SIZE,
        skip: (page - 1) * CATALOG_PAGE_SIZE,
      }),
    })
      .then(async (res) => {
        const data = (await res.json()) as { edges?: SteamCatalogGame[]; count?: number; message?: string }
        if (!res.ok) throw new Error(data.message || "Gagal memuat katalog Steam")
        setGames(data.edges ?? [])
        setTotalCount(data.count ?? 0)
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return
        setError(err instanceof Error ? err.message : "Terjadi kesalahan saat memuat katalog.")
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoading(false)
      })

    return () => ctrl.abort()
  }, [committedQuery, sort, genres, tags, developers, publishers, parsedYear, page, retryTick])

  const submitSearch = (value: string) => {
    setSearchInput(value)
    setCommittedQuery(value.trim())
    setPage(1)
    setSuggestOpen(false)
  }

  const toggleString = (
    list: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    val: string,
  ) => {
    setter(list.includes(val) ? list.filter((x) => x !== val) : [...list, val])
    setPage(1)
  }

  const toggleTag = (id: number) => {
    setTags((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
    setPage(1)
  }

  const applyYearPreset = (gte?: number, lte?: number) => {
    const isSame = yearFrom === String(gte ?? "") && yearTo === String(lte ?? "")
    setYearFrom(isSame ? "" : String(gte ?? ""))
    setYearTo(isSame ? "" : String(lte ?? ""))
    setPage(1)
  }

  const resetAllFilters = () => {
    setSearchInput("")
    setCommittedQuery("")
    setGenres([])
    setTags([])
    setDevelopers([])
    setPublishers([])
    setYearFrom("")
    setYearTo("")
    setSort("popularity:desc")
    setPage(1)
  }

  const tagLabelMap = React.useMemo(() => {
    const map = new Map<number, string>()
    for (const t of facets.tags) map.set(Number(t.value), t.label)
    return map
  }, [facets.tags])

  const activeFilterCount =
    genres.length +
    tags.length +
    developers.length +
    publishers.length +
    (parsedYear ? 1 : 0)

  const totalPages = Math.max(1, Math.ceil(totalCount / CATALOG_PAGE_SIZE))
  const startIdx = totalCount === 0 ? 0 : (page - 1) * CATALOG_PAGE_SIZE + 1
  const endIdx = Math.min(totalCount, page * CATALOG_PAGE_SIZE)

  const goToPage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page) return
    setPage(nextPage)
    gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const filteredGenres = React.useMemo(() => {
    const q = genreSearch.trim().toLowerCase()
    return q ? facets.genres.filter((g) => g.label.toLowerCase().includes(q)) : facets.genres
  }, [facets.genres, genreSearch])

  const filteredTags = React.useMemo(() => {
    const q = tagSearch.trim().toLowerCase()
    const base = q ? facets.tags.filter((t) => t.label.toLowerCase().includes(q)) : facets.tags
    return base.slice(0, 80)
  }, [facets.tags, tagSearch])

  const renderFilterSections = () => (
    <>
      <div className="ep-cat-sidebar-head">
        <span className="ep-cat-sidebar-title">
          Filter Katalog {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}
        </span>
        {(activeFilterCount > 0 || committedQuery) && (
          <button type="button" className="ep-cat-reset-btn" onClick={resetAllFilters}>
            Reset
          </button>
        )}
      </div>

      {/* Genres */}
      <div className="ep-cat-filter-group">
        <button
          type="button"
          className="ep-cat-filter-trigger"
          onClick={() => setOpenGroups((s) => ({ ...s, genres: !s.genres }))}
          aria-expanded={openGroups.genres}
        >
          <span>Genre</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {genres.length > 0 && <span className="ep-cat-filter-badge">{genres.length}</span>}
            <span aria-hidden="true">{openGroups.genres ? "−" : "+"}</span>
          </span>
        </button>
        {openGroups.genres && (
          <div className="ep-cat-filter-body">
            <input
              type="search"
              className="ep-cat-mini-input"
              placeholder="Cari genre..."
              value={genreSearch}
              onChange={(e) => setGenreSearch(e.target.value)}
            />
            <div className="ep-cat-filter-list">
              {filteredGenres.map((opt) => {
                const val = String(opt.value)
                const checked = genres.includes(val)
                return (
                  <label key={val} className={`ep-cat-check-row ${checked ? "is-checked" : ""}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleString(genres, setGenres, val)}
                    />
                    <span className="ep-cat-check-label">{opt.label}</span>
                  </label>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Release Year */}
      <div className="ep-cat-filter-group">
        <button
          type="button"
          className="ep-cat-filter-trigger"
          onClick={() => setOpenGroups((s) => ({ ...s, year: !s.year }))}
          aria-expanded={openGroups.year}
        >
          <span>Tahun Rilis</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {parsedYear && <span className="ep-cat-filter-badge">1</span>}
            <span aria-hidden="true">{openGroups.year ? "−" : "+"}</span>
          </span>
        </button>
        {openGroups.year && (
          <div className="ep-cat-filter-body">
            <div className="ep-cat-year-presets">
              {YEAR_PRESETS.map((preset) => {
                const active =
                  yearFrom === String(preset.gte ?? "") && yearTo === String(preset.lte ?? "")
                return (
                  <button
                    key={preset.label}
                    type="button"
                    className={`ep-cat-year-btn ${active ? "is-active" : ""}`}
                    onClick={() => applyYearPreset(preset.gte, preset.lte)}
                  >
                    {preset.label}
                  </button>
                )
              })}
            </div>
            <div className="ep-cat-year-inputs">
              <input
                type="number"
                inputMode="numeric"
                min={1980}
                max={2030}
                className="ep-cat-mini-input"
                placeholder="Min (2020)"
                value={yearFrom}
                onChange={(e) => {
                  setYearFrom(e.target.value)
                  setPage(1)
                }}
              />
              <input
                type="number"
                inputMode="numeric"
                min={1980}
                max={2030}
                className="ep-cat-mini-input"
                placeholder="Max (2026)"
                value={yearTo}
                onChange={(e) => {
                  setYearTo(e.target.value)
                  setPage(1)
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Steam User Tags */}
      <div className="ep-cat-filter-group">
        <button
          type="button"
          className="ep-cat-filter-trigger"
          onClick={() => setOpenGroups((s) => ({ ...s, tags: !s.tags }))}
          aria-expanded={openGroups.tags}
        >
          <span>Tag Steam</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {tags.length > 0 && <span className="ep-cat-filter-badge">{tags.length}</span>}
            <span aria-hidden="true">{openGroups.tags ? "−" : "+"}</span>
          </span>
        </button>
        {openGroups.tags && (
          <div className="ep-cat-filter-body">
            <input
              type="search"
              className="ep-cat-mini-input"
              placeholder="Cari tag (Open World, Co-op...)"
              value={tagSearch}
              onChange={(e) => setTagSearch(e.target.value)}
            />
            <div className="ep-cat-filter-list">
              {filteredTags.map((opt) => {
                const id = Number(opt.value)
                const checked = tags.includes(id)
                return (
                  <label key={id} className={`ep-cat-check-row ${checked ? "is-checked" : ""}`}>
                    <input type="checkbox" checked={checked} onChange={() => toggleTag(id)} />
                    <span className="ep-cat-check-label">{opt.label}</span>
                  </label>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Developers */}
      <div className="ep-cat-filter-group">
        <button
          type="button"
          className="ep-cat-filter-trigger"
          onClick={() => setOpenGroups((s) => ({ ...s, developers: !s.developers }))}
          aria-expanded={openGroups.developers}
        >
          <span>Developer</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {developers.length > 0 && <span className="ep-cat-filter-badge">{developers.length}</span>}
            <span aria-hidden="true">{openGroups.developers ? "−" : "+"}</span>
          </span>
        </button>
        {openGroups.developers && (
          <div className="ep-cat-filter-body">
            <input
              type="search"
              className="ep-cat-mini-input"
              placeholder={`Cari dari ${formatCount(facets.developers.total)} developer...`}
              value={devSearch}
              onChange={(e) => setDevSearch(e.target.value)}
            />
            <div className="ep-cat-filter-list">
              {devOptions.map((dev) => {
                const checked = developers.includes(dev)
                return (
                  <label key={dev} className={`ep-cat-check-row ${checked ? "is-checked" : ""}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleString(developers, setDevelopers, dev)}
                    />
                    <span className="ep-cat-check-label">{dev}</span>
                  </label>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Publishers */}
      <div className="ep-cat-filter-group">
        <button
          type="button"
          className="ep-cat-filter-trigger"
          onClick={() => setOpenGroups((s) => ({ ...s, publishers: !s.publishers }))}
          aria-expanded={openGroups.publishers}
        >
          <span>Publisher</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {publishers.length > 0 && <span className="ep-cat-filter-badge">{publishers.length}</span>}
            <span aria-hidden="true">{openGroups.publishers ? "−" : "+"}</span>
          </span>
        </button>
        {openGroups.publishers && (
          <div className="ep-cat-filter-body">
            <input
              type="search"
              className="ep-cat-mini-input"
              placeholder={`Cari dari ${formatCount(facets.publishers.total)} publisher...`}
              value={pubSearch}
              onChange={(e) => setPubSearch(e.target.value)}
            />
            <div className="ep-cat-filter-list">
              {pubOptions.map((pub) => {
                const checked = publishers.includes(pub)
                return (
                  <label key={pub} className={`ep-cat-check-row ${checked ? "is-checked" : ""}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleString(publishers, setPublishers, pub)}
                    />
                    <span className="ep-cat-check-label">{decodeHtmlEntities(pub)}</span>
                  </label>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )

  return (
    <>
      {/* Hero + Command Search */}
      <section className="ep-cat-hero">
        <div className="ep-cat-wrap ep-cat-hero-inner">
          <h1 className="ep-cat-h1">
            Jelajahi <span>Katalog Steam</span>
          </h1>
          <p className="ep-cat-sub">
            Cari game favoritmu, cek spesifikasi PC dan status Denuvo, lalu tambahkan langsung ke
            library Steam pribadimu lewat ElitePlay Launcher.
          </p>

          <div className="ep-cat-search-shell" ref={searchShellRef}>
            <form
              className="ep-cat-search-box"
              onSubmit={(e) => {
                e.preventDefault()
                submitSearch(searchInput)
              }}
            >
              <svg
                className="ep-cat-search-icon"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                enterKeyHint="search"
                className="ep-cat-search-input"
                placeholder="Cari judul game Steam... (mis. Elden Ring, GTA V, Cyberpunk)"
                value={searchInput}
                onFocus={() => setSuggestOpen(true)}
                onChange={(e) => {
                  setSearchInput(e.target.value)
                  setSuggestOpen(true)
                }}
                aria-label="Cari game Steam"
              />
              {searchInput && (
                <button
                  type="button"
                  className="ep-cat-search-clear"
                  aria-label="Hapus pencarian"
                  onClick={() => submitSearch("")}
                >
                  ×
                </button>
              )}
              <button type="submit" className="ep-cat-search-submit">
                Cari
              </button>
            </form>

            {suggestOpen && suggestions.length > 0 && (
              <div className="ep-cat-suggest-menu" role="listbox" aria-label="Saran game">
                {suggestions.map((item) => (
                  <Link
                    key={item.objectId}
                    href={`/catalog/${item.objectId}`}
                    className="ep-cat-suggest-item"
                    onClick={() => {
                      const typed = searchInput.trim()
                      const savedUrl = buildUrl({ q: typed || committedQuery })
                      window.history.replaceState(window.history.state, "", savedUrl)
                      persistCatalogUrl(savedUrl)
                      setSuggestOpen(false)
                    }}
                  >
                    <img
                      src={item.portraitImageUrl || steamPortraitUrl(item.objectId)}
                      alt=""
                      className="ep-cat-suggest-thumb"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.visibility = "hidden"
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <div className="ep-cat-suggest-title">{item.title}</div>
                      <div className="ep-cat-suggest-meta">Steam · App #{item.objectId}</div>
                    </div>
                    <span className="ep-cat-suggest-arrow">Detail →</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Catalog Content */}
      <main className="ep-cat-main" ref={gridTopRef}>
        <div className="ep-cat-wrap ep-cat-layout">
          <aside className="ep-cat-sidebar" aria-label="Filter game">
            {renderFilterSections()}
          </aside>

          <section aria-label="Daftar game">
            <div className="ep-cat-toolbar">
              <div className="ep-cat-count" aria-live="polite">
                {loading ? (
                  "Memuat katalog Steam..."
                ) : totalCount > 0 ? (
                  <>
                    Menampilkan <strong>{formatCount(startIdx)}–{formatCount(endIdx)}</strong> dari{" "}
                    <strong>{formatCount(totalCount)}</strong> game
                  </>
                ) : (
                  "Tidak ada game yang cocok"
                )}
              </div>

              <div className="ep-cat-controls">
                <button
                  type="button"
                  className="ep-cat-mobile-filter-btn"
                  onClick={() => setDrawerOpen(true)}
                >
                  Filter {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}
                </button>

                <div className="ep-cat-sort-wrap" ref={sortRef}>
                  <button
                    type="button"
                    className="ep-cat-sort-btn"
                    aria-haspopup="listbox"
                    aria-expanded={sortOpen}
                    onClick={() => setSortOpen((v) => !v)}
                  >
                    <span style={{ color: "var(--ep-soft)" }}>Urutkan:</span>
                    <strong>{SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Terpopuler"}</strong>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      style={{
                        color: "var(--ep-body)",
                        transform: sortOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.16s ease",
                      }}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {sortOpen && (
                    <div className="ep-cat-sort-menu" role="listbox" aria-label="Urutkan game">
                      {SORT_OPTIONS.map((opt) => {
                        const active = opt.value === sort
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            role="option"
                            aria-selected={active}
                            className={`ep-cat-sort-opt ${active ? "is-active" : ""}`}
                            onClick={() => {
                              setSort(opt.value)
                              setPage(1)
                              setSortOpen(false)
                            }}
                          >
                            <span>{opt.label}</span>
                            {active && <span aria-hidden="true">✓</span>}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>

                <div className="ep-cat-density" role="group" aria-label="Kepadatan grid">
                  <button
                    type="button"
                    className={!compactGrid ? "is-active" : ""}
                    onClick={() => setCompactGrid(false)}
                  >
                    Nyaman
                  </button>
                  <button
                    type="button"
                    className={compactGrid ? "is-active" : ""}
                    onClick={() => setCompactGrid(true)}
                  >
                    Padat
                  </button>
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {(committedQuery || activeFilterCount > 0) && (
              <div className="ep-cat-active-pills">
                {committedQuery && (
                  <button
                    type="button"
                    className="ep-cat-active-pill"
                    onClick={() => submitSearch("")}
                  >
                    Kata kunci: “{committedQuery}” ×
                  </button>
                )}
                {genres.map((g) => (
                  <button
                    key={`g-${g}`}
                    type="button"
                    className="ep-cat-active-pill"
                    onClick={() => toggleString(genres, setGenres, g)}
                  >
                    Genre: {g} ×
                  </button>
                ))}
                {tags.map((id) => (
                  <button
                    key={`t-${id}`}
                    type="button"
                    className="ep-cat-active-pill"
                    onClick={() => toggleTag(id)}
                  >
                    Tag: {tagLabelMap.get(id) ?? `#${id}`} ×
                  </button>
                ))}
                {developers.map((d) => (
                  <button
                    key={`d-${d}`}
                    type="button"
                    className="ep-cat-active-pill"
                    onClick={() => toggleString(developers, setDevelopers, d)}
                  >
                    Dev: {d} ×
                  </button>
                ))}
                {publishers.map((p) => (
                  <button
                    key={`p-${p}`}
                    type="button"
                    className="ep-cat-active-pill"
                    onClick={() => toggleString(publishers, setPublishers, p)}
                  >
                    Pub: {decodeHtmlEntities(p)} ×
                  </button>
                ))}
                {parsedYear && (
                  <button
                    type="button"
                    className="ep-cat-active-pill"
                    onClick={() => {
                      setYearFrom("")
                      setYearTo("")
                      setPage(1)
                    }}
                  >
                    Tahun: {parsedYear.gte ?? "..."}–{parsedYear.lte ?? "..."} ×
                  </button>
                )}
              </div>
            )}

            {/* Grid / Loading / Error / Empty */}
            {error ? (
              <div className="ep-cat-state" role="alert">
                <h3>Katalog sementara tidak terjangkau</h3>
                <p>{error}</p>
                <button type="button" className="ep-cat-cta-btn" onClick={() => setRetryTick((t) => t + 1)}>
                  Coba Muat Ulang
                </button>
              </div>
            ) : loading ? (
              <div className={`ep-cat-grid ${compactGrid ? "is-compact" : ""}`} aria-busy="true">
                {Array.from({ length: CATALOG_PAGE_SIZE }).map((_, i) => (
                  <div key={i}>
                    <div className="ep-skel-poster" />
                    <div className="ep-skel-line" />
                    <div className="ep-skel-line is-short" />
                  </div>
                ))}
              </div>
            ) : games.length === 0 ? (
              <div className="ep-cat-state">
                <h3>Game tidak ditemukan</h3>
                <p>
                  Coba kata kunci yang lebih singkat atau hapus sebagian filter genre/tahun rilis.
                </p>
                <button type="button" className="ep-cat-cta-btn" onClick={resetAllFilters}>
                  Reset Semua Filter
                </button>
              </div>
            ) : (
              <div className={`ep-cat-grid ${compactGrid ? "is-compact" : ""}`}>
                {games.map((game) => (
                  <PortraitGameCard
                    key={game.id}
                    game={game}
                    onSelect={() => {
                      const savedUrl = buildUrl()
                      window.history.replaceState(window.history.state, "", savedUrl)
                      persistCatalogUrl(savedUrl)
                    }}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {!error && totalPages > 1 && (
              <nav className="ep-cat-pagination" aria-label="Halaman katalog">
                <button
                  type="button"
                  className="ep-page-btn"
                  disabled={page <= 1 || loading}
                  onClick={() => goToPage(page - 1)}
                >
                  ← Prev
                </button>
                {getPageNumbers(page, totalPages).map((item, idx) =>
                  item === "..." ? (
                    <span key={`e-${idx}`} className="ep-page-ellipsis">
                      …
                    </span>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      className={`ep-page-btn ${item === page ? "is-active" : ""}`}
                      disabled={loading}
                      onClick={() => goToPage(item)}
                      aria-current={item === page ? "page" : undefined}
                    >
                      {item}
                    </button>
                  ),
                )}
                <button
                  type="button"
                  className="ep-page-btn"
                  disabled={page >= totalPages || loading}
                  onClick={() => goToPage(page + 1)}
                >
                  Next →
                </button>
              </nav>
            )}
          </section>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      {drawerOpen && (
        <div
          className="ep-drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Filter Katalog"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDrawerOpen(false)
          }}
        >
          <div className="ep-drawer-panel">
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
              <button
                type="button"
                className="ep-cat-search-clear"
                aria-label="Tutup filter"
                onClick={() => setDrawerOpen(false)}
              >
                ×
              </button>
            </div>
            {renderFilterSections()}
          </div>
        </div>
      )}
    </>
  )
}
