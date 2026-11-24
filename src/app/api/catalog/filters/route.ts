import { NextResponse } from "next/server"
import { getSteamFacets, searchFacetList } from "@/lib/steam-catalog-server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const field = searchParams.get("field")

  try {
    if (field === "developers" || field === "publishers") {
      const q = (searchParams.get("q") ?? "").slice(0, 80)
      const slice = await searchFacetList(field, q)
      return NextResponse.json(slice)
    }

    const facets = await getSteamFacets()
    return NextResponse.json(facets)
  } catch {
    return NextResponse.json({ message: "Gagal memuat daftar filter" }, { status: 502 })
  }
}
