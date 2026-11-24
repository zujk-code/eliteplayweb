import { NextResponse } from "next/server"
import { CATALOG_PAGE_SIZE, parseSortKey } from "@/lib/steam-catalog"
import { UpstreamCatalogError, searchSteamCatalog } from "@/lib/steam-catalog-server"

const asStrings = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0).slice(0, 20) : []

const asNumbers = (value: unknown): number[] =>
  Array.isArray(value) ? value.filter((item): item is number => typeof item === "number" && Number.isFinite(item)).slice(0, 20) : []

function parseYearRange(value: unknown): { gte?: number; lte?: number } | undefined {
  if (!value || typeof value !== "object") return undefined
  const { gte, lte } = value as { gte?: unknown; lte?: unknown }
  const out: { gte?: number; lte?: number } = {}
  if (typeof gte === "number" && Number.isFinite(gte) && gte >= 1970 && gte <= 2100) out.gte = Math.trunc(gte)
  if (typeof lte === "number" && Number.isFinite(lte) && lte >= 1970 && lte <= 2100) out.lte = Math.trunc(lte)
  return out.gte !== undefined || out.lte !== undefined ? out : undefined
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ message: "Invalid JSON body", edges: [], count: 0 }, { status: 400 })
  }

  const sortRaw =
    typeof body.sort === "string"
      ? body.sort
      : typeof body.sortBy === "string"
        ? `${body.sortBy}:${body.sortOrder === "asc" ? "asc" : "desc"}`
        : "popularity:desc"
  const { sortBy, sortOrder } = parseSortKey(sortRaw)

  const take = typeof body.take === "number" && Number.isFinite(body.take) ? Math.trunc(body.take) : CATALOG_PAGE_SIZE
  const skip = typeof body.skip === "number" && Number.isFinite(body.skip) ? Math.max(0, Math.trunc(body.skip)) : 0

  try {
    const result = await searchSteamCatalog({
      title: typeof body.title === "string" ? body.title.slice(0, 120) : "",
      sortBy,
      sortOrder,
      genres: asStrings(body.genres),
      tags: asNumbers(body.tags),
      developers: asStrings(body.developers),
      publishers: asStrings(body.publishers),
      releaseYear: parseYearRange(body.releaseYear),
      take,
      skip,
    })

    return NextResponse.json(result)
  } catch (err) {
    const status = err instanceof UpstreamCatalogError && err.status === 400 ? 400 : 502
    return NextResponse.json(
      { message: "Gagal memuat katalog Steam. Coba lagi sebentar.", edges: [], count: 0 },
      { status },
    )
  }
}
