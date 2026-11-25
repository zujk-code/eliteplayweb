import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BackToCatalogLink, CatalogFooter, CatalogHeader } from "@/components/catalog/CatalogChrome"
import {
  DetailHeroBackdrop,
  DetailPoster,
  ExpandableDescription,
  GameGallery,
} from "@/components/catalog/GameDetailMedia"
import {
  formatCompact,
  isValidSteamAppId,
  steamStoreUrl,
  stripHtmlText,
} from "@/lib/steam-catalog"
import { getSteamGameDetail } from "@/lib/steam-catalog-server"
import "../catalog.css"

export const dynamic = "force-dynamic"

type Params = Promise<{ id: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params
  if (!isValidSteamAppId(id)) return { title: "Game Tidak Ditemukan — ElitePlay" }

  const game = await getSteamGameDetail(id)
  if (!game) return { title: "Game Tidak Ditemukan — ElitePlay" }

  const description =
    game.shortDescription ||
    stripHtmlText(game.aboutHtml).slice(0, 220) ||
    `${game.title} di katalog Steam ElitePlay.`

  return {
    title: `${game.title} — Katalog Steam ElitePlay`,
    description,
    alternates: { canonical: `/catalog/${game.objectId}` },
    openGraph: {
      title: `${game.title} — ElitePlay`,
      description,
      images: [{ url: game.artwork.headerUrl, alt: game.title }],
    },
  }
}

const CONTROLLER_LABEL = {
  full: "Full Controller Support",
  partial: "Partial Controller",
  none: "Keyboard & Mouse",
} as const

const LAUNCHER_NAME = {
  ea: "EA App",
  ubisoft: "Ubisoft Connect",
  rockstar: "Rockstar Games Launcher",
} as const

export default async function GameDetailPage({ params }: { params: Params }) {
  const { id } = await params
  if (!isValidSteamAppId(id)) notFound()

  const game = await getSteamGameDetail(id)
  if (!game) notFound()

  const hasReq = Boolean(game.pcRequirements.minimumHtml || game.pcRequirements.recommendedHtml)

  return (
    <div className="ep-cat-root">
      <CatalogHeader active="detail" />

      {/* Hero Banner */}
      <section className="ep-det-hero">
        <DetailHeroBackdrop
          heroUrl={game.artwork.heroUrl}
          fallbackUrl={game.artwork.headerUrl}
        />

        <div className="ep-cat-wrap ep-det-hero-inner">
          <nav className="ep-det-crumb" aria-label="Breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="ep-det-crumb-sep">/</span>
            <BackToCatalogLink>Catalog</BackToCatalogLink>
            <span className="ep-det-crumb-sep">/</span>
            <span style={{ color: "var(--ep-gold-hi)" }}>{game.title}</span>
          </nav>

          <div className="ep-det-hero-grid">
            <DetailPoster
              primaryUrl={game.artwork.portraitUrl}
              fallbackUrl={game.artwork.portraitFallbackUrl}
              title={game.title}
            />

            <div className="ep-det-hero-copy">
              <h1 className="ep-det-title">{game.title}</h1>

              {game.shortDescription && (
                <p className="ep-det-short">{game.shortDescription}</p>
              )}

              {game.genres.length > 0 && (
                <div className="ep-det-tags">
                  {game.genres.map((genre) => (
                    <Link
                      key={genre}
                      href={`/catalog?genre=${encodeURIComponent(genre)}`}
                      className="ep-det-tag"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              )}

              <div className="ep-det-actions">
                <Link href="/#pricing" className="ep-cat-cta-btn" style={{ height: 44, padding: "0 22px" }}>
                  Mainkan via ElitePlay
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href={steamStoreUrl(game.objectId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ep-det-btn-secondary"
                >
                  Halaman Steam
                  <span aria-hidden="true">↗</span>
                </a>

                {(game.price.isFree || game.price.finalFormatted) && (
                  <span className="ep-det-price-chip" title="Harga resmi di Steam Store Indonesia">
                    <span>Steam:</span>
                    {game.price.isFree ? (
                      <strong>Gratis</strong>
                    ) : (
                      <>
                        {game.price.discountPercent > 0 && game.price.initialFormatted && (
                          <s>{game.price.initialFormatted}</s>
                        )}
                        <strong>{game.price.finalFormatted}</strong>
                      </>
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <main className="ep-det-body">
        <div className="ep-cat-wrap ep-det-body-grid">
          {/* Left Main Column */}
          <div className="ep-det-col">
            {/* Denuvo / Third-Party Launcher / ElitePlay Compatibility Banner */}
            {game.denuvo?.status === "uses" || game.launcher ? (
              <div className="ep-denuvo-banner is-uses">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flex: "none", marginTop: 2 }} aria-hidden="true">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
                </svg>
                <div>
                  <strong>
                    {game.denuvo?.status === "uses" && game.launcher
                      ? `Membutuhkan Denuvo & ${LAUNCHER_NAME[game.launcher]}.`
                      : game.denuvo?.status === "uses"
                        ? "Menggunakan Denuvo DRM."
                        : `Membutuhkan ${LAUNCHER_NAME[game.launcher!]}.`}
                  </strong>{" "}
                  Game ini memerlukan aktivasi tambahan — sudah termasuk 1 bulan layanan aktivasi
                  Denuvo &amp; launcher pihak ketiga di paket{" "}
                  <Link href="/#pricing" style={{ textDecoration: "underline", fontWeight: 700 }}>
                    ElitePlay Premium
                  </Link>
                  .
                </div>
              </div>
            ) : game.denuvo?.status === "removed" ? (
              <div className="ep-denuvo-banner is-removed">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ flex: "none", marginTop: 2 }} aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <strong>Bebas Denuvo (Sudah Dicabut).</strong> Game ini sebelumnya memakai Denuvo
                  dan kini sudah dilepas — bisa langsung Add to Steam lewat ElitePlay Launcher.
                </div>
              </div>
            ) : (
              <div className="ep-denuvo-banner is-standard">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flex: "none", marginTop: 2 }} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <strong>Steam PC Standard.</strong> Mendukung Cloud Save, DLC, dan Achievement di
                  akun Steam pribadimu melalui ElitePlay Launcher.
                </div>
              </div>
            )}

            <GameGallery
              title={game.title}
              screenshots={game.screenshots}
              movies={game.movies}
            />

            {game.aboutHtml && <ExpandableDescription html={game.aboutHtml} />}

            {hasReq && (
              <div className="ep-det-card">
                <h2 className="ep-det-card-title">Spesifikasi PC (Windows)</h2>
                <div className="ep-req-grid">
                  {game.pcRequirements.minimumHtml && (
                    <div className="ep-req-box">
                      <div
                        className="ep-prose"
                        dangerouslySetInnerHTML={{ __html: game.pcRequirements.minimumHtml }}
                      />
                    </div>
                  )}
                  {game.pcRequirements.recommendedHtml && (
                    <div className="ep-req-box">
                      <div
                        className="ep-prose"
                        dangerouslySetInnerHTML={{ __html: game.pcRequirements.recommendedHtml }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="ep-det-col" aria-label="Informasi game">
            {/* ElitePlay Highlight Card */}
            <div className="ep-det-card is-gold">
              <h2 className="ep-det-card-title">Akses di ElitePlay</h2>
              <p style={{ margin: "0 0 14px", fontSize: 13.5, lineHeight: 1.6, color: "var(--ep-body)" }}>
                Sekali bayar, tambah langsung ke library Steam pribadimu lengkap dengan DLC, Cloud
                Save, dan Achievement.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link href="/#pricing" className="ep-cat-cta-outline" style={{ height: 42 }}>
                  Lihat Paket Mulai Rp99.000
                </Link>
                <BackToCatalogLink
                  className="ep-det-btn-secondary"
                  style={{ justifyContent: "center", height: 40, fontSize: 13.5 }}
                >
                  ← Kembali ke Katalog
                </BackToCatalogLink>
              </div>
            </div>

            {/* Metadata Card */}
            <div className="ep-det-card">
              <h2 className="ep-det-card-title">Detail Informasi</h2>
              <dl className="ep-det-dl">
                <div className="ep-det-dl-row">
                  <dt>Steam App ID</dt>
                  <dd>#{game.objectId}</dd>
                </div>
                {game.releaseDate && (
                  <div className="ep-det-dl-row">
                    <dt>Tanggal Rilis</dt>
                    <dd>{game.releaseDate}</dd>
                  </div>
                )}
                {game.developers.length > 0 && (
                  <div className="ep-det-dl-row">
                    <dt>Developer</dt>
                    <dd>
                      <Link href={`/catalog?dev=${encodeURIComponent(game.developers[0])}`}>
                        {game.developers[0]}
                      </Link>
                    </dd>
                  </div>
                )}
                {game.publishers.length > 0 && (
                  <div className="ep-det-dl-row">
                    <dt>Publisher</dt>
                    <dd>
                      <Link href={`/catalog?pub=${encodeURIComponent(game.publishers[0])}`}>
                        {game.publishers[0]}
                      </Link>
                    </dd>
                  </div>
                )}
                <div className="ep-det-dl-row">
                  <dt>Kontroler</dt>
                  <dd>{CONTROLLER_LABEL[game.controllerSupport]}</dd>
                </div>
                {game.protonDb?.tier && (
                  <div className="ep-det-dl-row">
                    <dt>ProtonDB</dt>
                    <dd style={{ textTransform: "capitalize" }}>{game.protonDb.tier}</dd>
                  </div>
                )}
                {game.stats && game.stats.playerCount > 0 && (
                  <div className="ep-det-dl-row">
                    <dt>Pemain Terlacak</dt>
                    <dd>{formatCompact(game.stats.playerCount)}</dd>
                  </div>
                )}
                {game.stats?.averageScore ? (
                  <div className="ep-det-dl-row">
                    <dt>Skor Komunitas</dt>
                    <dd style={{ color: "var(--ep-gold-hi)" }}>
                      ★ {game.stats.averageScore.toFixed(1)} / 5
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>

            {/* HowLongToBeat */}
            {game.howLongToBeat.length > 0 && (
              <div className="ep-det-card">
                <h2 className="ep-det-card-title">Estimasi Durasi Main</h2>
                <div className="ep-hltb-grid">
                  {game.howLongToBeat.map((row) => (
                    <div key={row.title} className="ep-hltb-cell">
                      <div className="ep-hltb-val">{row.duration}</div>
                      <div className="ep-hltb-lbl">{row.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features / Categories */}
            {game.categories.length > 0 && (
              <div className="ep-det-card">
                <h2 className="ep-det-card-title">Fitur Game</h2>
                <div className="ep-det-tags">
                  {game.categories.map((cat) => (
                    <span key={cat} className="ep-det-tag" style={{ cursor: "default" }}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {game.languages.length > 0 && (
              <div className="ep-det-card">
                <h2 className="ep-det-card-title">Bahasa Didukung</h2>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--ep-body)" }}>
                  {game.languages.join(", ")}
                </p>
              </div>
            )}
          </aside>
        </div>
      </main>

      <CatalogFooter />
    </div>
  )
}
