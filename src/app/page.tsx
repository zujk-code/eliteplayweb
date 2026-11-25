import type { Metadata } from "next"
import ElitePlayLanding from "@/components/ElitePlayLanding"
import { siteConfig } from "@/config/site"
import { formatCount } from "@/lib/steam-catalog"
import { getSteamCatalogCount } from "@/lib/steam-catalog-server"

// Refresh live Steam catalog game count on the landing page every hour via ISR.
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const catalogCount = await getSteamCatalogCount()
  const description = `Jelajahi ${formatCount(catalogCount)}+ game Steam di paket Premium. Sekali bayar, akses Add to Steam seumur hidup untuk menambah koleksi langsung di akun Steam pribadimu.`

  return {
    title: siteConfig.title,
    description,
    openGraph: {
      title: siteConfig.title,
      description,
    },
    twitter: {
      title: siteConfig.title,
      description,
    },
  }
}

export default async function HomePage() {
  const catalogCount = await getSteamCatalogCount()
  return <ElitePlayLanding catalogCount={catalogCount} />
}
