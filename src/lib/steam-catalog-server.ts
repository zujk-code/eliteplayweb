// Server-only upstream transport for ElitePlay's Steam Catalog.
// Talks directly to public Steam Store & Hydra public catalog endpoints with
// server-side caching so the browser never hits CORS limits or downloads multi-MB facet files.

import {
  CATALOG_PAGE_SIZE,
  DEFAULT_CATALOG_COUNT,
  type DenuvoStatus,
  type FacetOption,
  type HowLongToBeatRow,
  type SteamCatalogFacets,
  type SteamCatalogGame,
  type SteamCatalogQuery,
  type SteamCatalogResponse,
  type SteamGameDetail,
  type SteamMovie,
  type SteamScreenshot,
  type SteamSuggestion,
  type ThirdPartyLauncher,
  buildSteamStoreAssetUrl,
  decodeHtmlEntities,
  isValidSteamAppId,
  sanitizeSteamHtml,
  steamHeaderUrl,
  steamHeroUrl,
  steamLogoUrl,
  steamPortraitUrl,
} from "./steam-catalog"

const HYDRA_API_URL = process.env.HYDRA_API_URL ?? "https://hydra-api-us-east-1.losbroxas.org"
const HYDRA_ASSETS_URL = process.env.HYDRA_EXTERNAL_RESOURCES_URL ?? "https://assets.hydralauncher.gg"
const UPSTREAM_PACKAGE_JSON =
  "https://raw.githubusercontent.com/hydralauncher/hydra/refs/heads/main/package.json"
const STEAM_DENUVO_CURATOR_BASE =
  "https://store.steampowered.com/curator/26095454-Denuvo-Games/ajaxgetfilteredrecommendations/render/"
const DENUVO_CURATOR_FALLBACK_URL =
  process.env.DENUVO_CURATOR_URL ??
  "https://gitlab.com/reonreol/misc-stuff/-/raw/main/denuvo_curator.html?ref_type=heads"

const FALLBACK_HYDRA_VERSION = "4.4.1"
const ONE_DAY = 60 * 60 * 24
const FACET_SLICE_LIMIT = 120

export class UpstreamCatalogError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message)
    this.name = "UpstreamCatalogError"
  }
}

async function getHydraVersion(): Promise<string> {
  try {
    const res = await fetch(UPSTREAM_PACKAGE_JSON, {
      next: { revalidate: ONE_DAY },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return FALLBACK_HYDRA_VERSION
    const pkg = (await res.json()) as { version?: unknown }
    return typeof pkg?.version === "string" && pkg.version.trim()
      ? pkg.version.trim()
      : FALLBACK_HYDRA_VERSION
  } catch {
    return FALLBACK_HYDRA_VERSION
  }
}

async function fetchJson<T>(url: string, init: RequestInit & { next?: { revalidate?: number } }): Promise<T> {
  const version = await getHydraVersion()
  const res = await fetch(url, {
    ...init,
    signal: init.signal ?? AbortSignal.timeout(12000),
    headers: {
      "User-Agent": `Hydra Launcher v${version}`,
      ...init.headers,
    },
  })

  if (!res.ok) {
    throw new UpstreamCatalogError(res.status, `Upstream responded ${res.status}`)
  }

  return (await res.json()) as T
}

function buildHydraUrl(path: string, params?: Record<string, string | undefined>): string {
  const url = new URL(path.replace(/^\//, ""), `${HYDRA_API_URL.replace(/\/$/, "")}/`)
  for (const [k, v] of Object.entries(params ?? {})) {
    if (v !== undefined) url.searchParams.set(k, v)
  }
  return url.toString()
}

/* ============================================================================
   Denuvo curator index (server-cached, graceful fallback to empty map)
   ============================================================================ */

export interface DenuvoRecord {
  objectId: string
  status: DenuvoStatus
  note: string
  reviewedOn: string | null
}

let denuvoMemo: { at: number; map: Map<string, DenuvoRecord> } | null = null
const DENUVO_MEMO_TTL = 6 * 60 * 60 * 1000

const APPID_RE = /data-ds-appid="(\d+)"/
const NOTE_RE = /class="recommendation_desc"\s*>([\s\S]*?)<\/div>/
const DATE_RE = /class="curator_review_date"\s*>([\s\S]*?)<\/span>/

function classifyDenuvoNote(note: string): DenuvoStatus {
  const lower = note.toLowerCase()
  if (
    lower.includes("no longer using") ||
    lower.includes("no longer uses") ||
    lower.includes("removed denuvo") ||
    lower.includes("warning has been removed")
  ) {
    return "removed"
  }
  if (lower.includes("uses denuvo") || lower.includes("has denuvo")) return "uses"
  return "listed"
}

function parseDenuvoHtml(html: string, map: Map<string, DenuvoRecord>) {
  for (const block of html.split('class="recommendation"')) {
    const appId = APPID_RE.exec(block)?.[1]
    if (!appId || map.has(appId)) continue
    const note = decodeHtmlEntities((NOTE_RE.exec(block)?.[1] ?? "").replace(/<[^>]*>/g, "")).trim()
    const reviewedOn =
      decodeHtmlEntities((DATE_RE.exec(block)?.[1] ?? "").replace(/<[^>]*>/g, "")).trim() || null
    map.set(appId, {
      objectId: appId,
      status: classifyDenuvoNote(note),
      note,
      reviewedOn,
    })
  }
}

async function fetchLiveSteamCuratorDenuvo(): Promise<Map<string, DenuvoRecord> | null> {
  try {
    const headers = { "User-Agent": "ElitePlayWeb/1.0 (+https://eliteplay.navplay.online)" }
    const firstRes = await fetch(
      `${STEAM_DENUVO_CURATOR_BASE}?query=&start=0&count=100&tagids=&sort=recent&types=0`,
      { headers, cache: "no-store", signal: AbortSignal.timeout(8000) },
    )
    if (!firstRes.ok) return null
    const firstData = (await firstRes.json()) as { total_count?: number; results_html?: string }
    const total = Math.min(1000, Math.max(0, firstData?.total_count ?? 0))
    const map = new Map<string, DenuvoRecord>()
    if (firstData?.results_html) parseDenuvoHtml(firstData.results_html, map)

    const offsets: number[] = []
    for (let start = 100; start < total; start += 100) offsets.push(start)

    if (offsets.length > 0) {
      const restHtml = await Promise.all(
        offsets.map(async (start) => {
          try {
            const res = await fetch(
              `${STEAM_DENUVO_CURATOR_BASE}?query=&start=${start}&count=100&tagids=&sort=recent&types=0`,
              { headers, cache: "no-store", signal: AbortSignal.timeout(8000) },
            )
            if (!res.ok) return ""
            const body = (await res.json()) as { results_html?: string }
            return body?.results_html ?? ""
          } catch {
            return ""
          }
        }),
      )
      for (const html of restHtml) {
        if (html) parseDenuvoHtml(html, map)
      }
    }

    return map.size > 0 ? map : null
  } catch {
    return null
  }
}

export async function getDenuvoMap(): Promise<Map<string, DenuvoRecord>> {
  if (denuvoMemo && Date.now() - denuvoMemo.at < DENUVO_MEMO_TTL) {
    return denuvoMemo.map
  }

  // Primary: live Steam Curator directly from store.steampowered.com (always up-to-date).
  const liveMap = await fetchLiveSteamCuratorDenuvo()
  if (liveMap) {
    denuvoMemo = { at: Date.now(), map: liveMap }
    return liveMap
  }

  // Emergency fallback: static curator snapshot if store.steampowered.com is unreachable.
  try {
    const res = await fetch(DENUVO_CURATOR_FALLBACK_URL, {
      headers: { "User-Agent": "ElitePlayWeb/1.0 (+https://eliteplay.navplay.online)" },
      next: { revalidate: ONE_DAY },
      signal: AbortSignal.timeout(10000),
    })
    if (!res.ok) return denuvoMemo?.map ?? new Map()

    const map = new Map<string, DenuvoRecord>()
    parseDenuvoHtml(await res.text(), map)
    denuvoMemo = { at: Date.now(), map }
    return map
  } catch {
    return denuvoMemo?.map ?? new Map()
  }
}

/* ============================================================================
   Official Steam Store Browse Batch API (IStoreBrowseService/GetItems/v1)
   Resolves exact hashed 600x900 portrait capsule URLs (including 2025/2026
   Steam releases) and official publisher/developer metadata in 1 batch call,
   cached in memory per appId for 24 hours. No API key required.
   ============================================================================ */

interface SteamBrowseMeta {
  portraitUrl: string | null
  hasRealPortrait: boolean
  heroUrl: string | null
  logoUrl: string | null
  headerUrl: string | null
  launcher: ThirdPartyLauncher | null
  isFree: boolean
  isOnlinePvpOrMmoOnly: boolean
  fetchedAt: number
}

const STEAM_BROWSE_CACHE = new Map<string, SteamBrowseMeta>()
const STEAM_BROWSE_TTL_MS = ONE_DAY * 1000
const STEAM_BROWSE_MAX_CACHE = 4000
const AUTO_GENERATED_PORTRAIT_RE = /(?:^|\/)portrait\.png(?:\?|$)/i

let catalogCountMemo: { at: number; count: number } | null = null
const CATALOG_COUNT_TTL_MS = 60 * 60 * 1000

/**
 * Total live Steam games in the catalog (cached 1h in memory, auto-refreshed
 * whenever unfiltered /catalog searches run). Falls back safely if upstream
 * is unreachable.
 */
export async function getSteamCatalogCount(): Promise<number> {
  if (catalogCountMemo && Date.now() - catalogCountMemo.at < CATALOG_COUNT_TTL_MS) {
    return catalogCountMemo.count
  }

  try {
    const raw = await fetchJson<{ count?: number }>(buildHydraUrl("/catalogue/search"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "",
        sortBy: "popularity",
        sortOrder: "desc",
        downloadSourceFingerprints: [],
        tags: [],
        publishers: [],
        genres: [],
        developers: [],
        protondbSupportBadges: [],
        deckCompatibility: [],
        take: 5,
        skip: 0,
      }),
      cache: "no-store",
    })
    if (typeof raw?.count === "number" && raw.count > 0) {
      catalogCountMemo = { at: Date.now(), count: raw.count }
      return raw.count
    }
  } catch {
    // Fall back gracefully to last known count or default baseline
  }

  return catalogCountMemo?.count ?? DEFAULT_CATALOG_COUNT
}

const SV_EA_ELECTRONIC_RE = /'electronic':[\dA-D,]*C/
const SV_EA_ARTS_RE = /'arts':[\dA-D,]*C/
const SV_UBISOFT_RE = /'ubisoft':[\dA-D,]*C/
const SV_ROCKSTAR_RE = /'rockstar':[\dA-D,]*C/

function detectLauncherFromText(publishers: string[], developers: string[]): ThirdPartyLauncher | null {
  const joined = [...publishers, ...developers].join(" ").toLowerCase()
  if (joined.includes("electronic arts")) return "ea"
  if (joined.includes("ubisoft")) return "ubisoft"
  if (joined.includes("rockstar")) return "rockstar"
  return null
}

function detectLauncherFromSearchVector(sv: string | undefined): ThirdPartyLauncher | null {
  if (!sv) return null
  if (SV_EA_ELECTRONIC_RE.test(sv) && SV_EA_ARTS_RE.test(sv)) return "ea"
  if (SV_UBISOFT_RE.test(sv)) return "ubisoft"
  if (SV_ROCKSTAR_RE.test(sv)) return "rockstar"
  return null
}

interface RawSteamStoreAssets {
  asset_url_format?: string
  library_capsule?: string
  library_capsule_2x?: string
  library_hero?: string
  library_hero_2x?: string
  library_logo?: string
  library_logo_2x?: string
  header?: string
}

interface RawSteamStoreItem {
  appid?: number
  is_free?: boolean
  categories?: {
    supported_player_categoryids?: number[]
  }
  assets?: RawSteamStoreAssets
  assets_without_overrides?: RawSteamStoreAssets
  basic_info?: {
    publishers?: { name?: string }[]
    developers?: { name?: string }[]
  }
}

// Official Steam player category IDs
const CAT_SINGLE_PLAYER = 2
const CAT_MMO = 20
const CAT_ONLINE_PVP = 36

function isPaidOnlinePvpOrMmoOnly(isFree: boolean, playerCategoryIds: number[]): boolean {
  if (isFree || playerCategoryIds.length === 0) return false
  const hasSinglePlayer = playerCategoryIds.includes(CAT_SINGLE_PLAYER)
  const hasOnlinePvpOrMmo =
    playerCategoryIds.includes(CAT_ONLINE_PVP) || playerCategoryIds.includes(CAT_MMO)
  return !hasSinglePlayer && hasOnlinePvpOrMmo
}

async function fetchSteamStoreBatch(appIds: string[]): Promise<Map<string, SteamBrowseMeta>> {
  const now = Date.now()
  const result = new Map<string, SteamBrowseMeta>()
  const missing: number[] = []

  for (const id of appIds) {
    if (!isValidSteamAppId(id)) continue
    const cached = STEAM_BROWSE_CACHE.get(id)
    if (cached && now - cached.fetchedAt < STEAM_BROWSE_TTL_MS) {
      result.set(id, cached)
    } else {
      missing.push(Number(id))
    }
  }

  if (missing.length === 0) return result

  try {
    const input = JSON.stringify({
      ids: missing.map((appid) => ({ appid })),
      context: { language: "english", country_code: "US" },
      data_request: {
        include_assets: true,
        include_assets_without_overrides: true,
        include_basic_info: true,
      },
    })

    const url = `https://api.steampowered.com/IStoreBrowseService/GetItems/v1/?input_json=${encodeURIComponent(input)}`
    const res = await fetch(url, {
      headers: { "User-Agent": "ElitePlayWeb/1.0 (+https://eliteplay.navplay.online)" },
      cache: "no-store",
      signal: AbortSignal.timeout(7000),
    })

    if (res.ok) {
      const data = (await res.json()) as { response?: { store_items?: RawSteamStoreItem[] } }
      for (const item of data?.response?.store_items ?? []) {
        if (!item?.appid) continue
        const id = String(item.appid)
        const a = item.assets
        const aNo = item.assets_without_overrides
        const fmt = a?.asset_url_format || aNo?.asset_url_format
        const publishers = (item.basic_info?.publishers ?? [])
          .map((p) => p?.name ?? "")
          .filter(Boolean)
        const developers = (item.basic_info?.developers ?? [])
          .map((d) => d?.name ?? "")
          .filter(Boolean)

        const rawCapsule =
          a?.library_capsule_2x ||
          a?.library_capsule ||
          aNo?.library_capsule_2x ||
          aNo?.library_capsule ||
          null
        const isFakeValveBlur = Boolean(rawCapsule && AUTO_GENERATED_PORTRAIT_RE.test(rawCapsule))
        const portraitUrl =
          rawCapsule && !isFakeValveBlur ? buildSteamStoreAssetUrl(fmt, rawCapsule) : null

        const isFree = Boolean(item.is_free)
        const playerCats = item.categories?.supported_player_categoryids ?? []
        const meta: SteamBrowseMeta = {
          portraitUrl,
          hasRealPortrait: Boolean(portraitUrl),
          heroUrl: buildSteamStoreAssetUrl(
            fmt,
            a?.library_hero_2x || a?.library_hero || aNo?.library_hero_2x || aNo?.library_hero,
          ),
          logoUrl: buildSteamStoreAssetUrl(
            fmt,
            a?.library_logo_2x || a?.library_logo || aNo?.library_logo_2x || aNo?.library_logo,
          ),
          headerUrl: buildSteamStoreAssetUrl(fmt, a?.header || aNo?.header),
          launcher: detectLauncherFromText(publishers, developers),
          isFree,
          isOnlinePvpOrMmoOnly: isPaidOnlinePvpOrMmoOnly(isFree, playerCats),
          fetchedAt: now,
        }

        if (STEAM_BROWSE_CACHE.size >= STEAM_BROWSE_MAX_CACHE) {
          const oldestKey = STEAM_BROWSE_CACHE.keys().next().value
          if (oldestKey) STEAM_BROWSE_CACHE.delete(oldestKey)
        }
        STEAM_BROWSE_CACHE.set(id, meta)
        result.set(id, meta)
      }
    }
  } catch {
    // Graceful degradation: cards fall back to deterministic Steam CDN / Hydra header URLs
  }

  return result
}

/* ============================================================================
   Steam Catalog Search & Suggestions
   ============================================================================ */

interface RawCatalogEdge {
  id?: string
  objectId?: string
  title?: string
  shop?: string
  genres?: string[]
  releaseYear?: number | null
  libraryImageUrl?: string | null
  libraryHeaderImageUrl?: string | null
  searchVector?: string
  tier?: string | null
  bestReportedTier?: string | null
  protondbSupportBadge?: string | null
  deckCompatibility?: string | null
}

export async function searchSteamCatalog(query: SteamCatalogQuery): Promise<SteamCatalogResponse> {
  const take = Math.min(40, Math.max(5, query.take ?? CATALOG_PAGE_SIZE))
  const skip = Math.max(0, query.skip ?? 0)
  // Over-fetch slightly so filtering out paid Online PvP/MMO-only titles still fills a full page.
  const fetchTake = Math.min(50, take + 16)

  const payload = {
    title: query.title.trim(),
    sortBy: query.sortBy,
    sortOrder: query.sortOrder,
    downloadSourceFingerprints: [] as string[],
    tags: query.tags,
    publishers: query.publishers,
    genres: query.genres,
    developers: query.developers,
    protondbSupportBadges: [] as string[],
    deckCompatibility: [] as string[],
    releaseYear: query.releaseYear,
    take: fetchTake,
    skip,
  }

  const [raw, denuvoMap] = await Promise.all([
    fetchJson<{ edges?: RawCatalogEdge[]; count?: number }>(buildHydraUrl("/catalogue/search"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    }),
    getDenuvoMap(),
  ])

  const candidates = (raw?.edges ?? []).filter(
    (item): item is RawCatalogEdge & { objectId: string; title: string } =>
      Boolean(
        item?.objectId &&
          item?.title &&
          (!item.shop || item.shop === "steam") &&
          isValidSteamAppId(item.objectId),
      ),
  )

  const browseMap = await fetchSteamStoreBatch(candidates.map((item) => item.objectId))

  const visible = candidates.filter((item) => {
    const browse = browseMap.get(item.objectId)
    return !browse?.isOnlinePvpOrMmoOnly
  })

  const edges: SteamCatalogGame[] = visible.slice(0, take).map((item) => {
    const denuvo = denuvoMap.get(item.objectId)?.status ?? null
    const browse = browseMap.get(item.objectId)
    const launcher = browse?.launcher ?? detectLauncherFromSearchVector(item.searchVector)
    return {
      id: item.id ?? `steam:${item.objectId}`,
      objectId: item.objectId,
      title: item.title,
      shop: "steam",
      genres: Array.isArray(item.genres) ? item.genres : [],
      releaseYear: typeof item.releaseYear === "number" ? item.releaseYear : null,
      portraitImageUrl: browse?.portraitUrl ?? null,
      hasSteamPortrait: browse ? browse.hasRealPortrait : true,
      libraryImageUrl: browse?.headerUrl ?? item.libraryImageUrl ?? null,
      libraryHeaderImageUrl: item.libraryHeaderImageUrl ?? browse?.headerUrl ?? null,
      protonTier: item.tier ?? item.bestReportedTier ?? item.protondbSupportBadge ?? null,
      deckCompatibility: item.deckCompatibility ?? null,
      denuvo,
      launcher,
      isFree: Boolean(browse?.isFree),
    }
  })

  const rawTotal = typeof raw?.count === "number" ? raw.count : edges.length
  const hiddenInBatch = candidates.length - visible.length
  // When the entire result set fit inside this single batch, adjust total count accurately.
  const total =
    skip === 0 && rawTotal <= fetchTake ? Math.max(0, rawTotal - hiddenInBatch) : rawTotal

  const isUnfiltered =
    !query.title.trim() &&
    query.genres.length === 0 &&
    query.tags.length === 0 &&
    query.developers.length === 0 &&
    query.publishers.length === 0 &&
    !query.releaseYear
  if (isUnfiltered && rawTotal > 0) {
    catalogCountMemo = { at: Date.now(), count: rawTotal }
  }

  return {
    edges,
    count: total,
  }
}

export async function getSteamSuggestions(query: string, limit = 6): Promise<SteamSuggestion[]> {
  const clean = query.trim().slice(0, 120)
  if (clean.length < 2) return []

  const clampedLimit = Math.min(10, Math.max(1, limit))
  const fetchLimit = Math.min(10, clampedLimit + 4)
  const rows = await fetchJson<
    { title?: string; objectId?: string; shop?: string; iconUrl?: string | null }[]
  >(
    buildHydraUrl("/catalogue/search/suggestions", {
      query: clean,
      limit: String(fetchLimit),
      shop: "steam",
    }),
    { next: { revalidate: 60 * 30 } },
  )

  const valid = (rows ?? []).filter(
    (r): r is { title: string; objectId: string; iconUrl?: string | null } =>
      Boolean(r?.objectId && r?.title && isValidSteamAppId(r.objectId)),
  )

  const browseMap = await fetchSteamStoreBatch(valid.map((r) => r.objectId))

  return valid
    .filter((r) => !browseMap.get(r.objectId)?.isOnlinePvpOrMmoOnly)
    .slice(0, clampedLimit)
    .map((r) => ({
      objectId: r.objectId,
      title: r.title,
      iconUrl: r.iconUrl ?? null,
      portraitImageUrl: browseMap.get(r.objectId)?.portraitUrl ?? null,
    }))
}

/* ============================================================================
   Facets (Genres, Tags, Developers, Publishers)
   Cached in-process for 24h (avoids Next.js 2MB fetch-cache rejection on the
   ~2.2MB steam-developers.json file and makes SSR instant).
   ============================================================================ */

const ASSET_MEMO = new Map<string, { at: number; data: unknown }>()
const ASSET_MEMO_TTL = ONE_DAY * 1000

async function fetchAssetJson<T>(fileName: string): Promise<T> {
  const cached = ASSET_MEMO.get(fileName)
  if (cached && Date.now() - cached.at < ASSET_MEMO_TTL) {
    return cached.data as T
  }
  const data = await fetchJson<T>(`${HYDRA_ASSETS_URL.replace(/\/$/, "")}/${fileName}`, {
    cache: "no-store",
  })
  ASSET_MEMO.set(fileName, { at: Date.now(), data })
  return data
}

export async function getSteamFacets(): Promise<SteamCatalogFacets> {
  const [genresRaw, tagsRaw, developers, publishers] = await Promise.all([
    fetchAssetJson<Record<string, string[]>>("steam-genres.json").catch(
      (): Record<string, string[]> => ({ en: [] }),
    ),
    fetchAssetJson<Record<string, Record<string, number>>>("steam-user-tags.json").catch(
      (): Record<string, Record<string, number>> => ({ en: {} }),
    ),
    fetchAssetJson<string[]>("steam-developers.json").catch((): string[] => []),
    fetchAssetJson<string[]>("steam-publishers.json").catch((): string[] => []),
  ])

  const genres: FacetOption[] = (genresRaw.en ?? [])
    .map((value) => ({ label: value, value }))
    .sort((a, b) => a.label.localeCompare(b.label))

  const tags: FacetOption[] = Object.entries(tagsRaw.en ?? {})
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => a.label.localeCompare(b.label))

  return {
    genres,
    tags,
    developers: { items: developers.slice(0, FACET_SLICE_LIMIT), total: developers.length },
    publishers: { items: publishers.slice(0, FACET_SLICE_LIMIT), total: publishers.length },
  }
}

export async function searchFacetList(
  field: "developers" | "publishers",
  query: string,
): Promise<{ items: string[]; total: number }> {
  const list = await fetchAssetJson<string[]>(
    field === "developers" ? "steam-developers.json" : "steam-publishers.json",
  )
  const q = query.trim().toLowerCase()
  const filtered = q
    ? list.filter((item) => (field === "publishers" ? decodeHtmlEntities(item) : item).toLowerCase().includes(q))
    : list

  return {
    items: filtered.slice(0, FACET_SLICE_LIMIT),
    total: filtered.length,
  }
}

/* ============================================================================
   Single Steam Game Details
   ============================================================================ */

interface SteamStoreAppData {
  name?: string
  short_description?: string
  about_the_game?: string
  detailed_description?: string
  developers?: string[]
  publishers?: string[]
  genres?: { id: string; description: string }[]
  categories?: { id: number; description: string }[]
  supported_languages?: string
  controller_support?: "full" | "partial"
  is_free?: boolean
  price_overview?: {
    initial_formatted?: string
    final_formatted?: string
    discount_percent?: number
  }
  screenshots?: { id: number; path_thumbnail: string; path_full: string }[]
  movies?: {
    id: number
    name: string
    thumbnail: string
    mp4?: { max?: string; "480"?: string }
    webm?: { max?: string; "480"?: string }
  }[]
  pc_requirements?: { minimum?: string; recommended?: string } | unknown[]
  release_date?: { coming_soon?: boolean; date?: string }
  header_image?: string
  drm_notice?: string
}

interface HydraAssetsResponse {
  title?: string
  iconUrl?: string | null
  libraryHeroImageUrl?: string | null
  libraryImageUrl?: string | null
  logoImageUrl?: string | null
  coverImageUrl?: string | null
}

interface HydraStatsResponse {
  downloadCount?: number
  playerCount?: number
  averageScore?: number | null
  reviewCount?: number
}

interface HydraProtonResponse {
  tier?: string | null
  deckCompatibility?: string | null
}

async function fetchSteamStoreDetails(appId: string): Promise<SteamStoreAppData | null> {
  try {
    const params = new URLSearchParams({ appids: appId, l: "english", cc: "id" })
    const res = await fetch(`https://store.steampowered.com/api/appdetails?${params}`, {
      headers: { "User-Agent": "ElitePlayWeb/1.0 (+https://eliteplay.navplay.online)" },
      next: { revalidate: 60 * 60 * 6 },
      signal: AbortSignal.timeout(10000),
    })
    if (!res.ok) return null
    const body = (await res.json()) as Record<string, { success?: boolean; data?: SteamStoreAppData }>
    const entry = body?.[appId]
    return entry?.success && entry.data ? entry.data : null
  } catch {
    return null
  }
}

function parseLanguages(raw: string | undefined): string[] {
  if (!raw) return []
  const [table] = raw.split("<br>")
  return (table?.split(",") ?? [])
    .map((item) => item.replace(/<[^>]*>/g, "").replace(/\*/g, "").trim())
    .filter(Boolean)
    .slice(0, 20)
}

function resolveController(data: SteamStoreAppData): "full" | "partial" | "none" {
  if (data.controller_support === "full") return "full"
  if (data.controller_support === "partial") return "partial"
  const ids = new Set((data.categories ?? []).map((c) => c.id))
  if (ids.has(28)) return "full"
  if (ids.has(18)) return "partial"
  return "none"
}

export async function getSteamGameDetail(appId: string): Promise<SteamGameDetail | null> {
  if (!isValidSteamAppId(appId)) return null

  const [store, assets, stats, hltb, protonDb, denuvoMap, browseMap] = await Promise.all([
    fetchSteamStoreDetails(appId),
    fetchJson<HydraAssetsResponse>(buildHydraUrl(`/games/steam/${appId}/assets`), {
      next: { revalidate: 60 * 60 * 8 },
    }).catch(() => null),
    fetchJson<HydraStatsResponse>(buildHydraUrl(`/games/steam/${appId}/stats`), {
      next: { revalidate: 60 * 30 },
    }).catch(() => null),
    fetchJson<{ title?: string; duration?: string }[]>(
      buildHydraUrl(`/games/steam/${appId}/how-long-to-beat`),
      { next: { revalidate: ONE_DAY } },
    ).catch(() => null),
    fetchJson<HydraProtonResponse>(buildHydraUrl(`/games/steam/${appId}/protondb`), {
      next: { revalidate: 60 * 60 * 6 },
    }).catch(() => null),
    getDenuvoMap(),
    fetchSteamStoreBatch([appId]),
  ])

  const browse = browseMap.get(appId)
  if (!store && !assets && !browse) return null

  const title = assets?.title || store?.name || `Steam App #${appId}`
  const pcReqObj =
    store?.pc_requirements && !Array.isArray(store.pc_requirements) ? store.pc_requirements : {}

  const screenshots: SteamScreenshot[] = (store?.screenshots ?? []).slice(0, 12).map((s) => ({
    id: s.id,
    thumbnail: s.path_thumbnail,
    full: s.path_full,
  }))

  const movies: SteamMovie[] = (store?.movies ?? []).slice(0, 4).map((m) => ({
    id: m.id,
    name: m.name,
    thumbnail: m.thumbnail,
    videoUrl: m.mp4?.["480"] ?? m.mp4?.max ?? m.webm?.["480"] ?? m.webm?.max ?? null,
  }))

  const howLongToBeat: HowLongToBeatRow[] = (Array.isArray(hltb) ? hltb : [])
    .filter((row): row is { title: string; duration: string } => Boolean(row?.title && row?.duration))
    .slice(0, 4)

  const curatorDenuvo = denuvoMap.get(appId) ?? null
  const steamDrmRaw = store?.drm_notice ?? ""
  const steamHasDenuvo = Boolean(steamDrmRaw && /denuvo/i.test(steamDrmRaw))

  // Official Steam Store `drm_notice` is authoritative in real time:
  // if Steam Store currently lists Denuvo -> "uses"; if Steam Store loaded and
  // does NOT list Denuvo -> no longer active (marked "removed" if previously curated).
  let denuvo: SteamGameDetail["denuvo"] = null
  if (steamHasDenuvo) {
    const cleanNote = decodeHtmlEntities(steamDrmRaw.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim()
    denuvo = { status: "uses", note: cleanNote, reviewedOn: null }
    denuvoMemo?.map.set(appId, { objectId: appId, status: "uses", note: cleanNote, reviewedOn: null })
  } else if (store) {
    if (curatorDenuvo) {
      denuvo = {
        status: "removed",
        note: curatorDenuvo.note,
        reviewedOn: curatorDenuvo.reviewedOn,
      }
      if (curatorDenuvo.status !== "removed") {
        denuvoMemo?.map.set(appId, { ...curatorDenuvo, status: "removed" })
      }
    }
  } else if (curatorDenuvo) {
    denuvo = {
      status: curatorDenuvo.status,
      note: curatorDenuvo.note,
      reviewedOn: curatorDenuvo.reviewedOn,
    }
  }

  const storeCatIds = (store?.categories ?? []).map((c) => c.id)
  const isFree = Boolean(store?.is_free || browse?.isFree)
  const onlineOnly =
    storeCatIds.length > 0
      ? isPaidOnlinePvpOrMmoOnly(isFree, storeCatIds)
      : Boolean(browse?.isOnlinePvpOrMmoOnly)

  return {
    objectId: appId,
    title,
    shortDescription: decodeHtmlEntities(store?.short_description ?? ""),
    aboutHtml: sanitizeSteamHtml(store?.about_the_game || store?.detailed_description || ""),
    releaseDate: store?.release_date?.date || "",
    developers: store?.developers ?? [],
    publishers: store?.publishers ?? [],
    genres: Array.from(new Set((store?.genres ?? []).map((g) => g.description).filter(Boolean))),
    categories: Array.from(
      new Set((store?.categories ?? []).map((c) => c.description).filter(Boolean)),
    ).slice(0, 10),
    languages: parseLanguages(store?.supported_languages),
    controllerSupport: store ? resolveController(store) : "none",
    price: {
      isFree,
      finalFormatted: store?.price_overview?.final_formatted ?? null,
      initialFormatted: store?.price_overview?.initial_formatted ?? null,
      discountPercent: store?.price_overview?.discount_percent ?? 0,
    },
    screenshots,
    movies,
    pcRequirements: {
      minimumHtml: sanitizeSteamHtml(pcReqObj.minimum),
      recommendedHtml: sanitizeSteamHtml(pcReqObj.recommended),
    },
    artwork: {
      portraitUrl:
        browse?.portraitUrl ||
        (browse && !browse.hasRealPortrait
          ? browse.headerUrl || store?.header_image || assets?.libraryImageUrl || steamHeaderUrl(appId)
          : assets?.coverImageUrl || steamPortraitUrl(appId)),
      portraitFallbackUrl:
        browse?.headerUrl || assets?.libraryImageUrl || store?.header_image || steamHeaderUrl(appId),
      heroUrl: browse?.heroUrl || assets?.libraryHeroImageUrl || steamHeroUrl(appId),
      logoUrl: browse?.logoUrl || assets?.logoImageUrl || steamLogoUrl(appId),
      headerUrl:
        browse?.headerUrl || store?.header_image || assets?.libraryImageUrl || steamHeaderUrl(appId),
    },
    stats:
      stats && (stats.playerCount || stats.downloadCount || stats.reviewCount)
        ? {
            playerCount: stats.playerCount ?? 0,
            downloadCount: stats.downloadCount ?? 0,
            averageScore: typeof stats.averageScore === "number" ? stats.averageScore : null,
            reviewCount: stats.reviewCount ?? 0,
          }
        : null,
    howLongToBeat,
    protonDb:
      protonDb && (protonDb.tier || protonDb.deckCompatibility)
        ? {
            tier: protonDb.tier ?? null,
            deckCompatibility: protonDb.deckCompatibility ?? null,
          }
        : null,
    denuvo,
    launcher:
      detectLauncherFromText(store?.publishers ?? [], store?.developers ?? []) ??
      browse?.launcher ??
      null,
    onlineOnly,
  }
}
