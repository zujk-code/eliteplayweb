import type { Metadata } from "next"
import { CatalogClient, type InitialCatalogState } from "@/components/catalog/CatalogClient"
import { CatalogFooter, CatalogHeader } from "@/components/catalog/CatalogChrome"
import { CATALOG_PAGE_SIZE, parseSortKey } from "@/lib/steam-catalog"
import { getSteamFacets, searchSteamCatalog } from "@/lib/steam-catalog-server"
import "./catalog.css"

export const metadata: Metadata = {
  title: "Katalog Game Steam — ElitePlay",
  description:
    "Jelajahi 217.000+ game Steam PC dengan tampilan poster portrait, filter genre, tag, developer, tahun rilis, dan cek status Denuvo langsung di ElitePlay.",
  alternates: { canonical: "/catalog" },
}

export const dynamic = "force-dynamic"

type RawSearchParams = Record<string, string | string[] | undefined>

const toList = (val: string | string[] | undefined): string[] => {
  if (!val) return []
  return (Array.isArray(val) ? val : [val]).map((s) => s.trim()).filter(Boolean).slice(0, 20)
}

const toFirst = (val: string | string[] | undefined): string =>
  Array.isArray(val) ? (val[0] ?? "") : (val ?? "")

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>
}) {
  const sp = await searchParams
  const q = toFirst(sp.q).trim().slice(0, 120)
  const { sortBy, sortOrder, key: sortKey } = parseSortKey(toFirst(sp.sort))
  const genres = toList(sp.genre)
  const tags = toList(sp.tag)
    .map((v) => Number(v))
    .filter((n) => Number.isFinite(n))
  const developers = toList(sp.dev)
  const publishers = toList(sp.pub)
  const yearFromRaw = Number(toFirst(sp.from))
  const yearToRaw = Number(toFirst(sp.to))
  const yearFrom = Number.isFinite(yearFromRaw) && yearFromRaw >= 1970 ? Math.trunc(yearFromRaw) : undefined
  const yearTo = Number.isFinite(yearToRaw) && yearToRaw >= 1970 ? Math.trunc(yearToRaw) : undefined
  const pageRaw = Number(toFirst(sp.page))
  const page = Number.isFinite(pageRaw) && pageRaw >= 1 ? Math.trunc(pageRaw) : 1

  const releaseYear =
    yearFrom !== undefined || yearTo !== undefined ? { gte: yearFrom, lte: yearTo } : undefined

  const [catalogResult, facets] = await Promise.all([
    searchSteamCatalog({
      title: q,
      sortBy,
      sortOrder,
      genres,
      tags,
      developers,
      publishers,
      releaseYear,
      take: CATALOG_PAGE_SIZE,
      skip: (page - 1) * CATALOG_PAGE_SIZE,
    }).catch(() => ({ edges: [], count: 0 })),
    getSteamFacets().catch(() => ({
      genres: [],
      tags: [],
      developers: { items: [], total: 0 },
      publishers: { items: [], total: 0 },
    })),
  ])

  const initialState: InitialCatalogState = {
    q,
    sort: sortKey,
    genres,
    tags,
    developers,
    publishers,
    yearFrom,
    yearTo,
    page,
  }

  return (
    <div className="ep-cat-root">
      <CatalogHeader active="catalog" />
      <CatalogClient
        key={JSON.stringify(initialState)}
        initialGames={catalogResult.edges}
        initialCount={catalogResult.count}
        facets={facets}
        initialState={initialState}
      />
      <CatalogFooter />
    </div>
  )
}
