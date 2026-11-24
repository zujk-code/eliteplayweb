"use client"

import * as React from "react"
import Link from "next/link"

export const CATALOG_LAST_URL_KEY = "ep:catalog:last"

export function BackToCatalogLink({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const [href, setHref] = React.useState("/catalog")

  React.useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(CATALOG_LAST_URL_KEY)
      if (saved && saved.startsWith("/catalog")) {
        setHref(saved)
      }
    } catch {
      // Ignore storage access errors
    }
  }, [])

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  )
}

export function CatalogHeader({ active = "catalog" }: { active?: "catalog" | "detail" }) {
  const [navOpen, setNavOpen] = React.useState(false)

  return (
    <header className="ep-cat-header" aria-label="Header">
      <div className="ep-cat-header-inner">
        <Link href="/" className="ep-cat-brand" aria-label="Elite Play home">
          <svg viewBox="0 0 696 169" width="108" height="26" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="epCatLogoGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDE068" />
                <stop offset="52%" stopColor="#F0B429" />
                <stop offset="100%" stopColor="#D48814" />
              </linearGradient>
            </defs>
            <path
              fill="url(#epCatLogoGold)"
              fillRule="evenodd"
              d="M23 0L54 0L54 14L55 14L55 16L59 16L60 0L93 0L93 16L98 16L98 1L99 0L129 0L131 49L124 48L123 52L121 53L121 55L119 57L119 62L120 62L120 69L121 69L123 90L124 90L126 111L127 111L127 119L128 120L139 119L139 121L140 121L140 136L143 136L145 138L145 140L146 140L146 142L147 142L151 152L152 152L152 169L1 169L0 152L2 151L8 137L12 136L13 119L25 120L30 79L31 79L31 72L32 72L32 65L33 65L33 56L31 55L29 49L28 48L21 49L21 45L22 45L22 21L23 21ZM29 5L28 5L28 22L27 22L27 43L74 38L74 37L126 43L124 5L103 5L103 21L88 21L88 5L65 5L64 21L50 21L49 5ZM36 14L41 14L42 30L63 30L63 31L54 31L54 32L45 32L45 33L37 33L36 34L35 33L36 32ZM75 43L74 44L65 44L65 45L56 45L56 46L34 48L39 59L38 59L38 66L37 66L35 87L34 87L30 122L63 118L63 117L70 117L70 116L84 116L84 117L91 117L91 118L98 118L98 119L123 122L121 105L120 105L120 98L119 98L119 91L118 91L118 84L117 84L117 77L116 77L116 70L115 70L115 63L114 63L114 56L115 56L118 48ZM60 53L69 53L69 61L53 63L53 71L60 71L60 70L68 70L69 69L69 79L52 81L51 82L51 90L69 88L69 108L39 112L40 105L41 105L41 98L42 98L42 90L43 90L43 83L44 83L44 76L45 76L47 55L60 54ZM180 61L227 61L228 62L228 71L194 71L194 81L208 81L208 91L194 91L194 101L195 100L227 100L228 101L228 110L179 110L179 105L174 105L174 66L179 66ZM233 61L252 61L252 100L253 101L254 100L286 100L287 101L287 110L233 110ZM292 61L340 61L340 71L326 71L326 101L327 100L340 100L340 110L291 110L291 101L292 100L306 100L306 71L291 71L291 62ZM346 61L393 61L394 62L394 71L380 71L379 72L379 110L360 110L360 71L345 71L345 62ZM404 61L452 61L453 62L453 71L419 71L418 72L418 81L433 81L433 91L418 91L418 100L419 101L420 100L452 100L453 101L453 110L404 110L404 106L399 105L399 66L404 66ZM462 61L510 61L510 66L515 66L515 86L510 86L510 91L481 91L481 110L461 110L461 62ZM521 61L539 61L540 62L540 101L541 100L573 100L574 101L574 110L520 110L520 62ZM584 61L627 61L628 66L633 67L632 68L632 109L633 110L613 110L613 91L598 91L598 110L579 110L579 66L584 66ZM638 61L656 61L657 62L657 76L662 76L662 81L672 81L672 76L676 76L676 62L677 61L695 61L696 62L696 81L691 81L691 86L686 86L686 91L676 91L676 110L657 110L657 91L647 91L647 86L642 86L642 81L637 81L637 62ZM602 69L600 70L600 81L611 81L611 69ZM484 71L483 71L483 81L499 81L499 71ZM19 124L18 124L18 130L17 130L17 140L14 140L11 142L11 144L10 144L6 154L5 154L5 163L6 164L147 164L147 153L146 153L143 145L140 141L135 140L135 125L134 124L133 125L114 126L114 127L94 128L94 129L84 129L84 130L70 130L70 129L29 126L29 125L19 125ZM25 134L35 134L35 135L46 135L46 136L56 136L56 137L69 138L69 156L15 156L15 153L16 153L18 148L25 147Z"
            />
          </svg>
        </Link>

        <button
          type="button"
          className="ep-cat-nav-toggle"
          aria-label="Navigation menu"
          aria-controls="ep-cat-nav-links"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav
          id="ep-cat-nav-links"
          aria-label="Sections"
          className={`ep-cat-nav ${navOpen ? "is-open" : ""}`}
        >
          <Link href="/#process" className="ep-cat-nav-link" onClick={() => setNavOpen(false)}>
            How It Works
          </Link>
          <Link href="/#features" className="ep-cat-nav-link" onClick={() => setNavOpen(false)}>
            Features
          </Link>
          <Link
            href="/catalog"
            className={`ep-cat-nav-link ${active === "catalog" || active === "detail" ? "is-active" : ""}`}
            onClick={() => {
              setNavOpen(false)
              try {
                window.sessionStorage.removeItem(CATALOG_LAST_URL_KEY)
              } catch {
                // Ignore
              }
            }}
          >
            Catalog
          </Link>
          <Link href="/#pricing" className="ep-cat-nav-link" onClick={() => setNavOpen(false)}>
            Pricing
          </Link>
          <Link href="/#testimoni" className="ep-cat-nav-link" onClick={() => setNavOpen(false)}>
            Testimoni
          </Link>
        </nav>

        <div className="ep-cat-account-panel">
          <span role="link" aria-disabled="true" className="ep-cat-account-link">
            Account
          </span>
        </div>
      </div>
    </header>
  )
}

export function CatalogFooter() {
  return (
    <footer className="ep-cat-footer">
      <div className="ep-cat-wrap ep-cat-footer-inner">
        <Link href="/" aria-label="Beranda ElitePlay">
          <img
            src="/images/brand/footer-wordmark.png"
            alt="ElitePlay"
            className="ep-cat-footer-logo"
            loading="lazy"
          />
        </Link>
        <div className="ep-cat-footer-links">
          <Link href="/">Beranda</Link>
          <Link href="/catalog">Katalog Steam</Link>
          <Link href="/#pricing">Paket Harga</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div className="ep-cat-footer-legal">
          © 2026 ElitePlay · Steam dan seluruh merek dagang game adalah milik masing-masing pemegang hak cipta.
        </div>
      </div>
    </footer>
  )
}
