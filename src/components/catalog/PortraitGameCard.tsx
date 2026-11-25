"use client"

import * as React from "react"
import Link from "next/link"
import {
  type SteamCatalogGame,
  type ThirdPartyLauncher,
  steamHeaderUrl,
  steamPortraitUrl,
} from "@/lib/steam-catalog"

type PosterStage = "portrait" | "header" | "none"

const LAUNCHER_META: Record<ThirdPartyLauncher, { label: string; className: string; title: string }> = {
  ea: {
    label: "EA",
    className: "ep-badge-launcher is-ea",
    title: "Membutuhkan EA App",
  },
  ubisoft: {
    label: "Ubisoft",
    className: "ep-badge-launcher is-ubisoft",
    title: "Membutuhkan Ubisoft Connect",
  },
  rockstar: {
    label: "Rockstar",
    className: "ep-badge-launcher is-rockstar",
    title: "Membutuhkan Rockstar Games Launcher",
  },
}

export function PortraitGameCard({
  game,
  onSelect,
}: {
  game: SteamCatalogGame
  onSelect?: () => void
}) {
  const headerSrc =
    game.libraryHeaderImageUrl || game.libraryImageUrl || steamHeaderUrl(game.objectId)
  const initialStage: PosterStage = game.hasSteamPortrait
    ? "portrait"
    : headerSrc
      ? "header"
      : "none"
  const [stage, setStage] = React.useState<PosterStage>(initialStage)
  const imgRef = React.useRef<HTMLImageElement | null>(null)

  const portraitSrc = game.portraitImageUrl || steamPortraitUrl(game.objectId)

  const handlePortraitError = React.useCallback(() => {
    setStage(headerSrc ? "header" : "none")
  }, [headerSrc])

  const handleHeaderError = React.useCallback(() => {
    setStage("none")
  }, [])

  // Catch images that already 404'd during SSR before React attached onError.
  React.useEffect(() => {
    const img = imgRef.current
    if (!img || !img.complete || img.naturalWidth > 0) return
    if (stage === "portrait") handlePortraitError()
    else if (stage === "header") handleHeaderError()
  }, [stage, handlePortraitError, handleHeaderError])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--cover-light-x", `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty("--cover-light-y", `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  const showDenuvo = game.denuvo === "uses"
  const launcherBadge = game.launcher ? LAUNCHER_META[game.launcher] : null
  const showFree = game.isFree
  const hasBadges = showFree || showDenuvo || Boolean(launcherBadge)

  return (
    <Link href={`/catalog/${game.objectId}`} className="ep-card" title={game.title} onClick={onSelect}>
      <div className="ep-card-poster" onPointerMove={handlePointerMove}>
        <div className="ep-card-poster-clip">
          {stage === "portrait" && (
            <img
              ref={imgRef}
              src={portraitSrc}
              alt={game.title}
              width={600}
              height={900}
              loading="lazy"
              decoding="async"
              onError={handlePortraitError}
              className="ep-card-img"
            />
          )}

          {stage === "header" && (
            <>
              <img
                src={headerSrc}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="ep-card-landscape-bg"
              />
              <div className="ep-card-landscape-wrap">
                <img
                  ref={imgRef}
                  src={headerSrc}
                  alt={game.title}
                  loading="lazy"
                  decoding="async"
                  onError={handleHeaderError}
                  className="ep-card-landscape-fg"
                />
              </div>
            </>
          )}

          {stage === "none" && (
            <div className="ep-card-noimg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <rect x="2" y="6" width="20" height="12" rx="4" />
                <path d="M6 12h4M8 10v4M15 11h.01M18 13h.01" strokeLinecap="round" />
              </svg>
              <span className="ep-card-fallback-title">{game.title}</span>
            </div>
          )}

          {hasBadges && (
            <div className="ep-card-badges">
              {showFree && (
                <span className="ep-badge-free" title="Gratis dimainkan di Steam">
                  Free to Play
                </span>
              )}
              {showDenuvo && (
                <span className="ep-badge-denuvo" title="Menggunakan Denuvo DRM">
                  Denuvo
                </span>
              )}
              {launcherBadge && (
                <span className={launcherBadge.className} title={launcherBadge.title}>
                  {launcherBadge.label}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <h3 className="ep-card-title">{game.title}</h3>
    </Link>
  )
}
