import { NextResponse } from "next/server"
import { getSteamSuggestions } from "@/lib/steam-catalog-server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = (searchParams.get("q") ?? "").trim()
  if (q.length < 2) return NextResponse.json([])

  try {
    const suggestions = await getSteamSuggestions(q, 6)
    return NextResponse.json(suggestions)
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
