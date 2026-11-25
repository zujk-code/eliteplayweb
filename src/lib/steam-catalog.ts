// Client-safe types, constants, and helpers for the ElitePlay Steam Catalog.

export type CatalogSortKey =
  | "popularity:desc"
  | "releaseDate:desc"
  | "hydraScore:desc"
  | "alphabetical:asc"
  | "alphabetical:desc"
  | "releaseDate:asc"

export type DenuvoStatus = "uses" | "removed" | "listed"

export type ThirdPartyLauncher = "ea" | "ubisoft" | "rockstar"

export interface SteamCatalogGame {
  id: string
  objectId: string
  title: string
  shop: "steam"
  genres: string[]
  releaseYear: number | null
  portraitImageUrl: string | null
  hasSteamPortrait: boolean
  libraryImageUrl: string | null
  libraryHeaderImageUrl: string | null
  protonTier: string | null
  deckCompatibility: string | null
  denuvo: DenuvoStatus | null
  launcher: ThirdPartyLauncher | null
}

export interface SteamCatalogResponse {
  edges: SteamCatalogGame[]
  count: number
}

export interface SteamCatalogQuery {
  title: string
  sortBy: "popularity" | "releaseDate" | "alphabetical" | "hydraScore"
  sortOrder: "asc" | "desc"
  genres: string[]
  tags: number[]
  developers: string[]
  publishers: string[]
  releaseYear?: { gte?: number; lte?: number }
  take?: number
  skip?: number
}

export interface SteamSuggestion {
  objectId: string
  title: string
  iconUrl: string | null
  portraitImageUrl: string | null
}

export interface FacetOption {
  label: string
  value: string | number
}

export interface SteamCatalogFacets {
  genres: FacetOption[]
  tags: FacetOption[]
  developers: { items: string[]; total: number }
  publishers: { items: string[]; total: number }
}

export interface SteamScreenshot {
  id: number
  thumbnail: string
  full: string
}

export interface SteamMovie {
  id: number
  name: string
  thumbnail: string
  videoUrl: string | null
}

export interface SteamPrice {
  isFree: boolean
  finalFormatted: string | null
  initialFormatted: string | null
  discountPercent: number
}

export interface HowLongToBeatRow {
  title: string
  duration: string
}

export interface SteamGameDetail {
  objectId: string
  title: string
  shortDescription: string
  aboutHtml: string
  releaseDate: string
  developers: string[]
  publishers: string[]
  genres: string[]
  categories: string[]
  languages: string[]
  controllerSupport: "full" | "partial" | "none"
  price: SteamPrice
  screenshots: SteamScreenshot[]
  movies: SteamMovie[]
  pcRequirements: { minimumHtml: string; recommendedHtml: string }
  artwork: {
    portraitUrl: string
    portraitFallbackUrl: string
    heroUrl: string
    logoUrl: string | null
    headerUrl: string
  }
  stats: {
    playerCount: number
    downloadCount: number
    averageScore: number | null
    reviewCount: number
  } | null
  howLongToBeat: HowLongToBeatRow[]
  protonDb: {
    tier: string | null
    deckCompatibility: string | null
  } | null
  denuvo: {
    status: DenuvoStatus
    note: string
    reviewedOn: string | null
  } | null
  launcher: ThirdPartyLauncher | null
}

export const CATALOG_PAGE_SIZE = 30
export const MIN_RELEASE_YEAR = 1985
export const DEFAULT_CATALOG_COUNT = 218000

export const SORT_OPTIONS: { value: CatalogSortKey; label: string }[] = [
  { value: "popularity:desc", label: "Terpopuler" },
  { value: "releaseDate:desc", label: "Terbaru" },
  { value: "hydraScore:desc", label: "Rating Tertinggi" },
  { value: "alphabetical:asc", label: "Judul (A–Z)" },
  { value: "alphabetical:desc", label: "Judul (Z–A)" },
  { value: "releaseDate:asc", label: "Terlama" },
]

export const YEAR_PRESETS: { label: string; gte?: number; lte?: number }[] = [
  { label: "2025–2026", gte: 2025, lte: 2026 },
  { label: "2020–2024", gte: 2020, lte: 2024 },
  { label: "2015–2019", gte: 2015, lte: 2019 },
  { label: "< 2015", gte: 1985, lte: 2014 },
]

export function isValidSteamAppId(value: string): boolean {
  return /^\d{1,10}$/.test(value)
}

export function buildSteamStoreAssetUrl(
  assetUrlFormat: string | null | undefined,
  fileName: string | null | undefined,
): string | null {
  if (!assetUrlFormat || !fileName) return null
  const rel = assetUrlFormat.replace("${FILENAME}", fileName).replace(/^\/+/, "")
  return `https://shared.fastly.steamstatic.com/store_item_assets/${rel}`
}

export function steamPortraitUrl(appId: string): string {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg`
}

export function steamPortrait2xUrl(appId: string): string {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900_2x.jpg`
}

export function steamHeaderUrl(appId: string): string {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
}

export function steamHeroUrl(appId: string): string {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/library_hero.jpg`
}

export function steamLogoUrl(appId: string): string {
  return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/logo.png`
}

export function steamStoreUrl(appId: string): string {
  return `https://store.steampowered.com/app/${appId}`
}

export function decodeHtmlEntities(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&nbsp;", " ")
}

export function formatCount(value: number): string {
  return value.toLocaleString("id-ID")
}

export function formatCompact(value: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value)
}

export function parseSortKey(raw: string | null | undefined): {
  sortBy: SteamCatalogQuery["sortBy"]
  sortOrder: SteamCatalogQuery["sortOrder"]
  key: CatalogSortKey
} {
  const valid = SORT_OPTIONS.find((item) => item.value === raw)?.value ?? "popularity:desc"
  const [sortBy, sortOrder] = valid.split(":") as [
    SteamCatalogQuery["sortBy"],
    SteamCatalogQuery["sortOrder"],
  ]
  return { sortBy, sortOrder, key: valid }
}

const ALLOWED_TAGS = new Set([
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "ul",
  "ol",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "blockquote",
  "hr",
  "a",
  "img",
  "span",
  "div",
])

/**
 * Lightweight allow-list HTML sanitizer for Steam's store descriptions and PC
 * requirements. Removes script/style/iframe blocks, event handlers, and unsafe
 * URL schemes without pulling in heavy HTML-parser packages.
 */
export function sanitizeSteamHtml(raw: string | null | undefined): string {
  if (!raw) return ""
  const withoutDangerousBlocks = raw
    .replace(/<(script|style|iframe|object|embed|svg|math|form)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(script|style|iframe|object|embed|svg|math|form|meta|link)[^>]*\/?>/gi, "")

  return withoutDangerousBlocks.replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (full, tagRaw: string, attrs: string) => {
    const tag = tagRaw.toLowerCase()
    if (!ALLOWED_TAGS.has(tag)) return ""
    if (full.startsWith("</")) return `</${tag}>`
    if (tag === "br" || tag === "hr") return `<${tag} />`

    if (tag === "a") {
      const hrefMatch = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(attrs)
      const href = (hrefMatch?.[1] ?? hrefMatch?.[2] ?? "").trim()
      if (!/^https?:\/\//i.test(href)) return "<span>"
      const safeHref = href.replaceAll('"', "&quot;")
      return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">`
    }

    if (tag === "img") {
      const srcMatch = /\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(attrs)
      const src = (srcMatch?.[1] ?? srcMatch?.[2] ?? "").trim()
      if (!/^https?:\/\//i.test(src)) return ""
      const altMatch = /\balt\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(attrs)
      const safeSrc = src.replaceAll('"', "&quot;")
      const safeAlt = (altMatch?.[1] ?? altMatch?.[2] ?? "").replaceAll('"', "&quot;")
      return `<img src="${safeSrc}" alt="${safeAlt}" loading="lazy" decoding="async" />`
    }

    return `<${tag}>`
  })
}

export function stripHtmlText(html: string | null | undefined): string {
  if (!html) return ""
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim()
}
