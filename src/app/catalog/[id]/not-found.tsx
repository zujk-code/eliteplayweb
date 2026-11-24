import { BackToCatalogLink, CatalogFooter, CatalogHeader } from "@/components/catalog/CatalogChrome"
import "../catalog.css"

export default function GameNotFound() {
  return (
    <div className="ep-cat-root">
      <CatalogHeader active="detail" />
      <main className="ep-cat-main">
        <div className="ep-cat-wrap">
          <div className="ep-cat-state">
            <h3>Game tidak ditemukan</h3>
            <p>
              Steam App ID yang kamu buka tidak ditemukan atau belum tersedia di katalog.
            </p>
            <BackToCatalogLink className="ep-cat-cta-btn">
              ← Kembali ke Katalog Steam
            </BackToCatalogLink>
          </div>
        </div>
      </main>
      <CatalogFooter />
    </div>
  )
}
