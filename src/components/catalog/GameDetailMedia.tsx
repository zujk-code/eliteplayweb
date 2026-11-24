"use client"

import * as React from "react"
import type { SteamMovie, SteamScreenshot } from "@/lib/steam-catalog"

export function DetailPoster({
  primaryUrl,
  fallbackUrl,
  title,
}: {
  primaryUrl: string
  fallbackUrl: string
  title: string
}) {
  const [useFallback, setUseFallback] = React.useState(primaryUrl === fallbackUrl)
  const [failed, setFailed] = React.useState(false)

  if (failed) {
    return (
      <div className="ep-det-poster-frame">
        <div className="ep-card-noimg">
          <span className="ep-card-fallback-title">{title}</span>
        </div>
      </div>
    )
  }

  if (useFallback) {
    return (
      <div className="ep-det-poster-frame">
        <img src={fallbackUrl} alt="" aria-hidden="true" className="ep-card-landscape-bg" />
        <div className="ep-card-landscape-wrap">
          <img
            src={fallbackUrl}
            alt={title}
            className="ep-card-landscape-fg"
            onError={() => setFailed(true)}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="ep-det-poster-frame">
      <img
        src={primaryUrl}
        alt={title}
        width={600}
        height={900}
        onError={() => setUseFallback(true)}
      />
    </div>
  )
}

export function DetailHeroBackdrop({
  heroUrl,
  fallbackUrl,
}: {
  heroUrl: string
  fallbackUrl: string
}) {
  const [src, setSrc] = React.useState(heroUrl)
  const [hidden, setHidden] = React.useState(false)

  if (hidden) return null

  return (
    <div className="ep-det-hero-bg" aria-hidden="true">
      <img
        src={src}
        alt=""
        onError={() => {
          if (src !== fallbackUrl && fallbackUrl) setSrc(fallbackUrl)
          else setHidden(true)
        }}
      />
    </div>
  )
}

type MediaItem =
  | { kind: "screenshot"; id: string; thumbnail: string; src: string; label: string }
  | { kind: "movie"; id: string; thumbnail: string; src: string; label: string }

export function GameGallery({
  title,
  screenshots,
  movies,
}: {
  title: string
  screenshots: SteamScreenshot[]
  movies: SteamMovie[]
}) {
  const items = React.useMemo<MediaItem[]>(() => {
    const out: MediaItem[] = []
    for (const s of screenshots) {
      out.push({
        kind: "screenshot",
        id: `s-${s.id}`,
        thumbnail: s.thumbnail,
        src: s.full,
        label: `Screenshot ${title}`,
      })
    }
    for (const m of movies) {
      if (m.videoUrl) {
        out.push({
          kind: "movie",
          id: `m-${m.id}`,
          thumbnail: m.thumbnail,
          src: m.videoUrl,
          label: m.name || `Trailer ${title}`,
        })
      }
    }
    return out
  }, [movies, screenshots, title])

  const [activeIndex, setActiveIndex] = React.useState(0)

  if (items.length === 0) return null

  const current = items[activeIndex] ?? items[0]
  const go = (delta: number) =>
    setActiveIndex((i) => (i + delta + items.length) % items.length)

  return (
    <div className="ep-det-card">
      <h2 className="ep-det-card-title">Galeri &amp; Cuplikan</h2>

      <div className="ep-gallery-stage">
        {current.kind === "movie" ? (
          <video
            key={current.id}
            src={current.src}
            poster={current.thumbnail}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            key={current.id}
            src={current.src}
            alt={current.label}
            decoding="async"
          />
        )}

        {items.length > 1 && (
          <>
            <button
              type="button"
              className="ep-gallery-nav is-prev"
              aria-label="Media sebelumnya"
              onClick={() => go(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="ep-gallery-nav is-next"
              aria-label="Media berikutnya"
              onClick={() => go(1)}
            >
              ›
            </button>
          </>
        )}
      </div>

      {items.length > 1 && (
        <div className="ep-gallery-thumbs" role="tablist" aria-label="Pilih cuplikan">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={item.label}
              className={`ep-gallery-thumb ${idx === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={item.thumbnail} alt="" loading="lazy" decoding="async" />
              {item.kind === "movie" && (
                <span className="ep-gallery-play-badge" aria-hidden="true">
                  ▶
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ExpandableDescription({ html }: { html: string }) {
  const [expanded, setExpanded] = React.useState(false)
  const isLong = html.length > 1400

  return (
    <div className="ep-det-card">
      <h2 className="ep-det-card-title">Tentang Game Ini</h2>
      <div
        style={
          isLong && !expanded
            ? {
                maxHeight: 340,
                overflow: "hidden",
                maskImage: "linear-gradient(180deg, #000 68%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, #000 68%, transparent 100%)",
              }
            : undefined
        }
      >
        <div className="ep-prose" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      {isLong && (
        <button
          type="button"
          className="ep-cat-reset-btn"
          style={{ marginTop: 12, padding: "6px 12px", border: "1px solid rgba(240,180,41,0.32)" }}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Ringkas deskripsi ↑" : "Baca selengkapnya ↓"}
        </button>
      )}
    </div>
  )
}
