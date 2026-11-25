"use client"

import * as React from "react"
import HowItWorksInteractive from "./HowItWorksInteractive"
import EcosystemHub3D from "./EcosystemHub3D"
import BottomSections from "./BottomSections"
import { DEFAULT_CATALOG_COUNT, formatCount } from "@/lib/steam-catalog"

const beforeProcess = `
    <header id="navigation" aria-label="Header" class="navigation-section">
      <div class="navigation-row">
        <a class="navigation-group" aria-label="Elite Play home" href="#hero">
          <div class="vector-2">
            <svg viewBox="0 0 696 169" width="100%" height="100%" aria-hidden="true" focusable="false">
              <defs><linearGradient id="epNavBrandChampagne" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FDE068"/><stop offset="52%" stop-color="#F0B429"/><stop offset="100%" stop-color="#D48814"/></linearGradient></defs>
              <path fill="url(#epNavBrandChampagne)" d="M23 0L54 0L54 14L55 14L55 16L59 16L60 0L93 0L93 16L98 16L98 1L99 0L129 0L131 49L124 48L123 52L121 53L121 55L119 57L119 62L120 62L120 69L121 69L123 90L124 90L126 111L127 111L127 119L128 120L139 119L139 121L140 121L140 136L143 136L145 138L145 140L146 140L146 142L147 142L151 152L152 152L152 169L1 169L0 152L2 151L8 137L12 136L13 119L25 120L30 79L31 79L31 72L32 72L32 65L33 65L33 56L31 55L29 49L28 48L21 49L21 45L22 45L22 21L23 21ZM29 5L28 5L28 22L27 22L27 43L74 38L74 37L126 43L124 5L103 5L103 21L88 21L88 5L65 5L64 21L50 21L49 5ZM36 14L41 14L42 30L63 30L63 31L54 31L54 32L45 32L45 33L37 33L36 34L35 33L36 32ZM75 43L74 44L65 44L65 45L56 45L56 46L34 48L39 59L38 59L38 66L37 66L35 87L34 87L30 122L63 118L63 117L70 117L70 116L84 116L84 117L91 117L91 118L98 118L98 119L123 122L121 105L120 105L120 98L119 98L119 91L118 91L118 84L117 84L117 77L116 77L116 70L115 70L115 63L114 63L114 56L115 56L118 48ZM60 53L69 53L69 61L53 63L53 71L60 71L60 70L68 70L69 69L69 79L52 81L51 82L51 90L69 88L69 108L39 112L40 105L41 105L41 98L42 98L42 90L43 90L43 83L44 83L44 76L45 76L47 55L60 54ZM180 61L227 61L228 62L228 71L194 71L194 81L208 81L208 91L194 91L194 101L195 100L227 100L228 101L228 110L179 110L179 105L174 105L174 66L179 66ZM233 61L252 61L252 100L253 101L254 100L286 100L287 101L287 110L233 110ZM292 61L340 61L340 71L326 71L326 101L327 100L340 100L340 110L291 110L291 101L292 100L306 100L306 71L291 71L291 62ZM346 61L393 61L394 62L394 71L380 71L379 72L379 110L360 110L360 71L345 71L345 62ZM404 61L452 61L453 62L453 71L419 71L418 72L418 81L433 81L433 91L418 91L418 100L419 101L420 100L452 100L453 101L453 110L404 110L404 106L399 105L399 66L404 66ZM462 61L510 61L510 66L515 66L515 86L510 86L510 91L481 91L481 110L461 110L461 62ZM521 61L539 61L540 62L540 101L541 100L573 100L574 101L574 110L520 110L520 62ZM584 61L627 61L628 66L633 67L632 68L632 109L633 110L613 110L613 91L598 91L598 110L579 110L579 66L584 66ZM638 61L656 61L657 62L657 76L662 76L662 81L672 81L672 76L676 76L676 62L677 61L695 61L696 62L696 81L691 81L691 86L686 86L686 91L676 91L676 110L657 110L657 91L647 91L647 86L642 86L642 81L637 81L637 62ZM602 69L600 70L600 81L611 81L611 69ZM484 71L483 71L483 81L499 81L499 71ZM19 124L18 124L18 130L17 130L17 140L14 140L11 142L11 144L10 144L6 154L5 154L5 163L6 164L147 164L147 153L146 153L143 145L140 141L135 140L135 125L134 124L133 125L114 126L114 127L94 128L94 129L84 129L84 130L70 130L70 129L29 126L29 125L19 125ZM25 134L35 134L35 135L46 135L46 136L56 136L56 137L69 138L69 156L15 156L15 153L16 153L18 148L25 147Z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </a>
        <button type="button" class="nav-toggle" aria-label="Navigation menu" aria-controls="elite-nav-links" aria-expanded="false"><span></span><span></span></button>
        <nav id="elite-nav-links" aria-label="Sections" class="navigation-row-2">
          <a href="#process" class="nav-link-9">How It Works</a>
          <a href="#features" class="nav-link-9">Features</a>
          <a href="/catalog" class="nav-link-9">Catalog</a>
          <a href="#pricing" class="nav-link-9">Pricing</a>
          <a href="#testimoni" class="nav-link-9">Testimoni</a>
        </nav>
        <div class="navigation-panel">
          <span role="link" aria-disabled="true" class="nav-link-10"><span class="z-roll"><span data-label="Account">Account</span></span></span>
        </div>
      </div>
    </header>
    <section id="hero" aria-label="Hero" class="hero-section">
      <div class="hero-atmosphere" aria-hidden="true"><span class="hero-ribbon ribbon-amber"></span><span class="hero-ribbon ribbon-champagne"></span><span class="hero-grain"></span></div>
      <div class="hero-layer">
        <div class="vector-3">
          <svg viewBox="0 45 690 208" width="100%" height="100%" aria-hidden="true" focusable="false">
            <defs>
              <radialGradient id="epglass1stop0">
                <stop offset="0%" stop-color="#FDE068" stop-opacity="0.72"></stop>
                <stop offset="38%" stop-color="#EDA920" stop-opacity="0.44"></stop>
                <stop offset="80%" stop-color="#B57410" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#B57410" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient id="epglass1stop1">
                <stop offset="0%" stop-color="#F0B429" stop-opacity="0.34"></stop>
                <stop offset="38%" stop-color="#BE7D14" stop-opacity="0.18"></stop>
                <stop offset="80%" stop-color="#6B440A" stop-opacity="0.03"></stop>
                <stop offset="100%" stop-color="#6B440A" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient id="epglass1stop2">
                <stop offset="0%" stop-color="#7DD3FC" stop-opacity="0.6"></stop>
                <stop offset="38%" stop-color="#38BDF8" stop-opacity="0.34"></stop>
                <stop offset="80%" stop-color="#2563EB" stop-opacity="0.06"></stop>
                <stop offset="100%" stop-color="#2563EB" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient id="epglass1stop3">
                <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3"></stop>
                <stop offset="38%" stop-color="#2563EB" stop-opacity="0.16"></stop>
                <stop offset="80%" stop-color="#1E3A8A" stop-opacity="0.03"></stop>
                <stop offset="100%" stop-color="#1E3A8A" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient id="epglass1stop4">
                <stop offset="0%" stop-color="#262836" stop-opacity="0.48"></stop>
                <stop offset="38%" stop-color="#171B28" stop-opacity="0.3"></stop>
                <stop offset="80%" stop-color="#0E1018" stop-opacity="0.05"></stop>
                <stop offset="100%" stop-color="#0E1018" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient id="epglass1stop5">
                <stop offset="0%" stop-color="#F7C948" stop-opacity="0.2"></stop>
                <stop offset="38%" stop-color="#D68A16" stop-opacity="0.1"></stop>
                <stop offset="80%" stop-color="#D68A16" stop-opacity="0.02"></stop>
                <stop offset="100%" stop-color="#D68A16" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient id="epglass1stop6">
                <stop offset="0%" stop-color="#7DD3FC" stop-opacity="0.16"></stop>
                <stop offset="38%" stop-color="#38BDF8" stop-opacity="0.09"></stop>
                <stop offset="80%" stop-color="#38BDF8" stop-opacity="0.02"></stop>
                <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
            <g class="hero-spot spot-west"><ellipse cx="23" cy="18" rx="134" ry="30" transform="rotate(55 23 18)" fill="url(#epglass1stop0)"></ellipse>
            <ellipse cx="43" cy="20" rx="172" ry="60" transform="rotate(55 43 20)" fill="url(#epglass1stop1)"></ellipse></g>
            <g class="hero-spot spot-east"><ellipse cx="664" cy="15" rx="140" ry="33" transform="rotate(-55 664 15)" fill="url(#epglass1stop2)"></ellipse>
            <ellipse cx="647" cy="14" rx="171" ry="68" transform="rotate(-55 647 14)" fill="url(#epglass1stop3)"></ellipse></g>
            <ellipse cx="339" cy="9" rx="253" ry="200" transform="rotate(0 339 9)" fill="url(#epglass1stop4)"></ellipse>
            <ellipse cx="294" cy="-20" rx="62" ry="166" transform="rotate(3 294 -20)" fill="url(#epglass1stop5)"></ellipse>
            <ellipse cx="421" cy="-16" rx="50" ry="154" transform="rotate(2 421 -16)" fill="url(#epglass1stop6)"></ellipse>
          </svg>
        </div>
      </div>
      <div class="hero-column">
        <h1 class="heading">
          <span class="text-31">Pilih di ElitePlay.</span>
          <span class="text-31">Main di Steam kamu.</span>
        </h1>
        <p class="text-11">Jelajahi 211.000+ game Steam di paket Premium<span class="hero-copy-extra"> dan temukan game favoritmu</span>.<br>Sekali bayar, akses <em>Add to Steam</em> seumur hidup<span class="hero-copy-extra"> untuk menambah koleksi di Steam</span>.</p>
        <div class="hero-row">
          <svg class="hero-route hero-route-west" viewBox="0 0 160 52" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path class="hero-route-track" d="M2 3 H24 C72 3 77 26 139 26 H158 M8 49 H24 C72 49 77 26 139 26"/>
            <path class="hero-current west" d="M2 3 H24 C72 3 77 26 139 26 H158" pathLength="100" style="--phase:0s"/>
            <path class="hero-current lower" d="M8 49 H24 C72 49 77 26 139 26 H158" pathLength="100" style="--phase:-4.5s"/>
          </svg>
          <div class="hero-actions">
            <a class="hero-panel z-action" href="/catalog"><span class="z-roll"><span class="text-10" data-label="Cek Katalog">Cek Katalog</span></span></a>
            <button class="hero-panel launcher-download" type="button" disabled title="Tautan unduhan belum tersedia">Download Launcher</button>
          </div>
          <svg class="hero-route hero-route-east" viewBox="0 0 160 52" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path class="hero-route-track" d="M2 3 H24 C72 3 77 26 139 26 H158 M8 49 H24 C72 49 77 26 139 26"/>
            <path class="hero-current east" d="M2 3 H24 C72 3 77 26 139 26 H158" pathLength="100" style="--phase:-3.2s"/>
            <path class="hero-current lower" d="M8 49 H24 C72 49 77 26 139 26 H158" pathLength="100" style="--phase:-1.8s"/>
          </svg>
        </div>

      </div>
      <div class="hero-layer-3 ep-hero-stage ep-glass-stage">
        <div class="hero-layer-4 ep-glass-orbs" aria-hidden="true">
          <span class="ep-orb ep-orb-a"></span>
          <span class="ep-orb ep-orb-b"></span>
          <span class="ep-orb ep-orb-c"></span>
        </div>
        <div class="hero-layer-15 ep-launcher ep-hero-showcase ep-glass-chassis" role="img" aria-label="Cuplikan tampilan ElitePlay Launcher: Home, Katalog, Library, Detail Game, Denuvo Activation, Free Bypass, dan Sharing Akses">
          <canvas class="ep-hero-aura-canvas" aria-hidden="true"></canvas><canvas class="ep-hero-rim-canvas" aria-hidden="true"></canvas><span class="ep-glass-sheen" aria-hidden="true"></span>
          <div class="ep-glass-head" aria-hidden="true">
            <div class="ep-glass-head-left">
              <span class="ep-glass-pearls"><i></i><i></i><i></i></span>
              <span class="ep-glass-viewpill" data-hero-viewlabel>Home</span>
            </div>
            <div class="ep-glass-head-right">
              <span class="ep-glass-spec">ELITEPLAY &middot; WINDOWS 2K</span>
              <span class="ep-glass-count" data-hero-count>01 / 07</span>
            </div>
          </div>
          <div class="ep-hero-screen-stack">
            <img class="ep-hero-slide is-on" data-hero-slide="0" data-hero-name="Home" src="/images/hero/slide-01.png" alt="ElitePlay Launcher — Home" loading="eager" decoding="sync">
            <img class="ep-hero-slide" data-hero-slide="1" data-hero-name="Katalog · 211.000+" src="/images/hero/slide-02.png" alt="ElitePlay Launcher — Katalog" loading="eager" decoding="sync">
            <img class="ep-hero-slide" data-hero-slide="2" data-hero-name="Library" src="/images/hero/slide-03.png" alt="ElitePlay Launcher — Library" loading="eager" decoding="sync">
            <img class="ep-hero-slide" data-hero-slide="3" data-hero-name="Detail Game" src="/images/hero/slide-04.png" alt="ElitePlay Launcher — Detail Game" loading="eager" decoding="sync">
            <img class="ep-hero-slide" data-hero-slide="4" data-hero-name="Denuvo Activation" src="/images/hero/slide-05.png" alt="ElitePlay Launcher — Denuvo Activation" loading="eager" decoding="sync">
            <img class="ep-hero-slide" data-hero-slide="5" data-hero-name="Free Bypass" src="/images/hero/slide-06.png" alt="ElitePlay Launcher — Free Bypass" loading="eager" decoding="sync">
            <img class="ep-hero-slide" data-hero-slide="6" data-hero-name="Sharing Akses" src="/images/hero/slide-07.png" alt="ElitePlay Launcher — Sharing Akses" loading="eager" decoding="sync">
            <span class="ep-glass-glare" aria-hidden="true"></span>
          </div>
        </div>
        <div class="ep-glass-dock" aria-hidden="true">
          <span class="ep-dock-seg is-on" data-hero-bar="0"><span class="ep-dock-lbl">Home</span><span class="ep-dock-track"><i></i></span></span>
          <span class="ep-dock-seg" data-hero-bar="1"><span class="ep-dock-lbl">Katalog</span><span class="ep-dock-track"><i></i></span></span>
          <span class="ep-dock-seg" data-hero-bar="2"><span class="ep-dock-lbl">Library</span><span class="ep-dock-track"><i></i></span></span>
          <span class="ep-dock-seg" data-hero-bar="3"><span class="ep-dock-lbl">Detail Game</span><span class="ep-dock-track"><i></i></span></span>
          <span class="ep-dock-seg" data-hero-bar="4"><span class="ep-dock-lbl">Denuvo</span><span class="ep-dock-track"><i></i></span></span>
          <span class="ep-dock-seg" data-hero-bar="5"><span class="ep-dock-lbl">Free Bypass</span><span class="ep-dock-track"><i></i></span></span>
          <span class="ep-dock-seg" data-hero-bar="6"><span class="ep-dock-lbl">Sharing Akses</span><span class="ep-dock-track"><i></i></span></span>
        </div>
      </div>
    </section>
    <section id="trusted-companies" data-backdrop="trusted-companies" aria-label="Pengguna dan penerbit game" class="trusted-companies-section">
      <div class="trusted-companies-row">
        <div class="trusted-companies-group"></div>
        <div class="trusted-companies-panel">
          <span class="text-9">3.000+ pengguna aktif</span>
        </div>
        <div class="trusted-companies-group"></div>
      </div>
      <div class="trusted-companies-group-2">
        <div class="trusted-companies-layer">
          <img class="publisher-mark publisher-emblem publisher-emblem-ea" alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxZTMgMTAwMC4wMDEiIGZpbGw9IiNmM2VkZGUiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMTUxMDgwNSwwLDAsMS4xNTEwNjY2LC03NS41NDc3MTMsLTc1LjU0NzUzNykiPjxnPjxwYXRoIGQ9Im01MDAuMDA2IDkzNC4zOTNjLTIzOS41MTYgMC00MzQuMzc0LTE5NC44NjItNDM0LjM3NC00MzQuMzc5IDAtMjM5LjUyIDE5NC44NTgtNDM0LjM4MSA0MzQuMzc0LTQzNC4zODEgMjM5LjUxMyAwIDQzNC4zNzUgMTk0Ljg2MiA0MzQuMzc1IDQzNC4zODEgMCAyMzkuNTE2LTE5NC44NjEgNDM0LjM3OS00MzQuMzc1IDQzNC4zNzl6bTczLjUyMS02MDIuMzk0aC0yNDUuNDg2bC0zNy4yNDcgNTkuODU4aDI0NS4yMDR6bTUwLjE2OCAwLjU3MS0xNTAuMDcxIDIzOC45NjNoLTE2Ni40NjRsMzguNDA1LTU5LjkwOWg5OS43NzFsMzguMTEyLTU5Ljg4aC0yMzAuNjU0bC0zOC4xMDQgNTkuODhoNTQuNjQxbC03NS44MTIgMTE5LjYxMWgzMTYuMzg5bDExNi44Ni0xODQuMjk1IDQyLjYwOSA2NC42ODRoLTM4LjQybC0zNi4zODUgNTkuOTA5aDExMy43NzNsMzkuNTA2IDU5LjcwMmg3Mi41NzZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48L2c+PC9nPjwvc3ZnPg==">
          <img class="publisher-mark publisher-wordmark publisher-wordmark-ea" alt="Electronic Arts" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMTIwIDI3MTkgMzcwIiBmaWxsPSIjZjNlZGRlIj48cGF0aCBkPSJNMjU4OC44MTEzMSwyOTkuMjEwMjM5IEMyNTg4LjgxMTMxLDI4Ni4yODY3OTQgMjYwMi42MDk5OSwyNzkuMzk2NTg3IDI2MTcuNjk3NTgsMjc5LjM5NjU4NyBDMjY0My4xMzUyNywyNzkuMzk2NTg3IDI2NjIuMTAyNTMsMjk0LjA0MjU4NCAyNjY1LjU0NjgxLDMxNi40MzU3NTggTDI3MTUuNTU1NzIsMzE2LjQzNTc1OCBDMjcxMC44MTgyMSwyNzAuMzUzMTkgMjY3MS41ODE4NSwyMzguMDU1MzQzIDI2MTguNTU1NDIsMjM4LjA1NTM0MyBDMjU3MS41NjgzNCwyMzguMDU1MzQzIDI1MzUuMzU4MTEsMjYyLjYwMTcwNyAyNTM1LjM1ODExLDMwMy45NDI5NSBDMjUzNS4zNTgxMSwzNTAuMDI1NTE4IDI1NzkuMzMxOTksMzYyLjA4MzM4MSAyNjE1Ljk3MzI5LDM3MS41NjE3MjMgQzI2NDIuMjY0NSwzNzguNDQ3NjIzIDI2NjQuNjg4OTcsMzg0LjA1MDIyMyAyNjY0LjY4ODk3LDM5OS41NTMxOSBDMjY2NC42ODg5Nyw0MTIuMDQxNjkxIDI2NTAuNDU5MjIsNDIwLjY1NDQ1IDI2MzAuNjI5ODEsNDIwLjY1NDQ1IEMyNjAzLjg5ODksNDIwLjY1NDQ1IDI1ODMuNjQyNzMsNDA1LjU4MjEyMSAyNTgwLjYyMDksMzgzLjE4ODk0NyBMMjUzMC42MTYzLDM4My4xODg5NDcgQzI1MzUuMzU4MTEsNDI5LjI2NzIwOSAyNTc1Ljg3OTA4LDQ2MiAyNjMwLjYyOTgxLDQ2MiBDMjY4MC4yMDMzMyw0NjIgMjcxOSw0MzUuNzI2Nzc4IDI3MTksMzk0LjM4MTIyOCBDMjcxOSwzNDkuNTk0ODggMjY3NS4wMzQ3NSwzMzcuNTM3MDE4IDI2MzguMzg0ODMsMzI4LjA2Mjk4MiBDMjYxMS42NjI1NCwzMjEuMTY4NDY5IDI1ODguODExMzEsMzE1LjE0Mzg0NCAyNTg4LjgxMTMxLDI5OS4yMTAyMzkgWiBNMjMxNi40MzI4MSwyNDIuNzg4MDU0IEwyMjYxLjY4MjA5LDI0Mi43ODgwNTQgTDIyNjEuNjgyMDksNDU3LjY5MzYyIEwyMzE2LjQzMjgxLDQ1Ny42OTM2MiBMMjMxNi40MzI4MSwzNDMuOTk2NTg3IEMyMzE2LjQzMjgxLDMxNC43MDg4OTkgMjM0Mi4yOTcyNiwyODQuMTMzNjA0IDIzODYuMjc1NDQsMjkxLjAyMzgxMiBMMjM4Ni4yNzU0NCwyMzguOTE2NjE5IEMyMzUzLjA3NDExLDIzNS4wMzY1NzEgMjMyOS4zNjUwNCwyNTMuNTU0MDAzIDIzMTYuNDMyODEsMjgxLjU0OTc3NyBMMjMxNi40MzI4MSwyNDIuNzg4MDU0IFogTTIxMzMuMDcxMTMsMzQ3LjQ0MTY5MSBMMjA5MS4yNTI2MywyNTkuNTg3MjQxIEwyMDUwLjczMTY2LDM0Ny40NDE2OTEgTDIxMzMuMDcxMTMsMzQ3LjQ0MTY5MSBaIE0yMDkzLjQwOCwxNDMuMzA2MzggTDIyNDguNjAzMyw0NTcuNjkzNjIgTDIxODUuNjcwNzksNDU3LjY5MzYyIEwyMTU1LjA1NTkxLDM5My41MTk5NTIgTDIwMjkuMTc3OTUsMzkzLjUxOTk1MiBMMTk5OS40Mjk1Myw0NTcuNjkzNjIgTDE5MzguMjE3LDQ1Ny42OTM2MiBMMjA5My40MDgsMTQzLjMwNjM4IFogTTE3OTMuODIwMTEsMzI3LjIwMTcwNyBMMTg0OS40MzI5OCwzMjcuMjAxNzA3IEMxODM5LjA5MTUxLDI3NS4wOTAyMDcgMTc5NC4yNTExOCwyMzguNDgxNjc1IDE3NDAuNzkzNjgsMjM4LjQ4MTY3NSBDMTY3OC43MTkwMSwyMzguNDgxNjc1IDE2MjguMjc5MDIsMjg1LjQyNTUxOCAxNjI4LjI3OTAyLDM1MC40NTYxNTYgQzE2MjguMjc5MDIsNDE1LjA1NjE1NiAxNjc4LjcxOTAxLDQ2MiAxNzQwLjc5MzY4LDQ2MiBDMTc5NC4yNTExOCw0NjIgMTgzOS4wOTE1MSw0MjcuMTE0MDE5IDE4NDkuNDMyOTgsMzc1LjAwMjUyIEwxNzkzLjgyMDExLDM3NS4wMDI1MiBDMTc4NS4xOTg2MiwzOTguMjYxMjc2IDE3NjQuOTQyNDUsNDEyLjkwMjk2NiAxNzQwLjc5MzY4LDQxMi45MDI5NjYgQzE3MDguNDYzMTIsNDEyLjkwMjk2NiAxNjgyLjU5ODY3LDM4Ny40OTUzMjcgMTY4Mi41OTg2NywzNTEuMzE3NDMyIEMxNjgyLjU5ODY3LDMxNC4yODI1NjggMTcwOC40NjMxMiwyODkuMzAxMjYgMTc0MC43OTM2OCwyODkuMzAxMjYgQzE3NjQuOTQyNDUsMjg5LjMwMTI2IDE3ODUuMTk4NjIsMzAzLjk0Mjk1IDE3OTMuODIwMTEsMzI3LjIwMTcwNyBaIE0xNTQ5LjI3NjA3LDQ1Ny42OTM2MiBMMTYwNC4wMTgxNyw0NTcuNjkzNjIgTDE2MDQuMDE4MTcsMjQyLjc5MjM2MSBMMTU0OS4yNzYwNywyNDIuNzkyMzYxIEwxNTQ5LjI3NjA3LDQ1Ny42OTM2MiBaIE0xNTQxLjUxMjQyLDE4MC43NzYxODggQzE1NDEuNTEyNDIsMjAwLjE1NDg5NiAxNTU3LjQ2NjQ4LDIxNi4wODg1MDEgMTU3Ni40MzM3NCwyMTYuMDg4NTAxIEMxNTk1LjgzMjA3LDIxNi4wODg1MDEgMTYxMS43ODE4MiwyMDAuMTU0ODk2IDE2MTEuNzgxODIsMTgwLjc3NjE4OCBDMTYxMS43ODE4MiwxNjEuMzk3NDggMTU5NS44MzIwNywxNDUuNDU5NTY5IDE1NzYuNDMzNzQsMTQ1LjQ1OTU2OSBDMTU1Ny40NjY0OCwxNDUuNDU5NTY5IDE1NDEuNTEyNDIsMTYxLjM5NzQ4IDE1NDEuNTEyNDIsMTgwLjc3NjE4OCBaIE0xMzc0LjM4NDk5LDI2OS40ODc2MDcgTDEzNzQuMzg0OTksMjQyLjc4ODA1NCBMMTMxOS42MzQyNywyNDIuNzg4MDU0IEwxMzE5LjYzNDI3LDQ1Ny42OTM2MiBMMTM3NC4zODQ5OSw0NTcuNjkzNjIgTDEzNzQuMzg0OTksMzI3LjYyODAzOCBDMTM3NC4zODQ5OSwzMDIuNjU1MzQzIDEzOTMuNzgzMzIsMjgyLjg0MTY5MSAxNDE5LjIyMTAxLDI4Mi44NDE2OTEgQzE0NDUuNTEyMjIsMjgyLjg0MTY5MSAxNDY0LjA1MjcyLDMwMS43ODk3NjEgMTQ2NC4wNTI3MiwzMjkuNzgxMjI4IEwxNDY0LjA1MjcyLDQ1Ny42OTM2MiBMMTUxOC44MDM0NCw0NTcuNjkzNjIgTDE1MTguODAzNDQsMzI1LjQ3NDg0OCBDMTUxOC44MDM0NCwyNzUuMDkwMjA3IDE0ODkuOTE3MTYsMjM4LjA1NTM0MyAxNDM4LjYxOTM0LDIzOC4wNTUzNDMgQzE0MTEuMDI2MjksMjM4LjA1NTM0MyAxMzg3LjMxNzIxLDI1MC4xMDg4OTkgMTM3NC4zODQ5OSwyNjkuNDg3NjA3IFogTTExODEuMzM3MDcsMjg4Ljg3MDYyMiBDMTE0OC4xNDQzNiwyODguODcwNjIyIDExMjEuODQ0NTMsMzEzLjg0NzYyMyAxMTIxLjg0NDUzLDM1MC44ODY3OTQgQzExMjEuODQ0NTMsMzg3LjA2MDM4MyAxMTQ4LjE0NDM2LDQxMi40NzIzMjkgMTE4MS4zMzcwNyw0MTIuNDcyMzI5IEMxMjE0LjUzNDA4LDQxMi40NzIzMjkgMTI0MC44MjUzLDM4Ny4wNjAzODMgMTI0MC44MjUzLDM1MC44ODY3OTQgQzEyNDAuODI1MywzMTMuODQ3NjIzIDEyMTQuNTM0MDgsMjg4Ljg3MDYyMiAxMTgxLjMzNzA3LDI4OC44NzA2MjIgWiBNMTE4MS4zMzcwNyw0NjIgQzExMTguMzkxNjIsNDYyIDEwNjcuNTI5MTksNDE1LjA1NjE1NiAxMDY3LjUyOTE5LDM1MC40NTYxNTYgQzEwNjcuNTI5MTksMjg1LjQyNTUxOCAxMTE4LjM5MTYyLDIzOC40ODE2NzUgMTE4MS4zMzcwNywyMzguNDgxNjc1IEMxMjQ0LjI3ODIsMjM4LjQ4MTY3NSAxMjk1LjE0OTI2LDI4NS40MjU1MTggMTI5NS4xNDkyNiwzNTAuNDU2MTU2IEMxMjk1LjE0OTI2LDQxNS4wNTYxNTYgMTI0NC4yNzgyLDQ2MiAxMTgxLjMzNzA3LDQ2MiBaIE05OTUuODAyNzY3LDI0Mi43ODgwNTQgTDk0MS4wNDc3MzIsMjQyLjc4ODA1NCBMOTQxLjA0NzczMiw0NTcuNjkzNjIgTDk5NS44MDI3NjcsNDU3LjY5MzYyIEw5OTUuODAyNzY3LDM0My45OTY1ODcgQzk5NS44MDI3NjcsMzE0LjcwODg5OSAxMDIxLjY2NzIxLDI4NC4xMzM2MDQgMTA2NS42NDEwOCwyOTEuMDIzODEyIEwxMDY1LjY0MTA4LDIzOC45MTY2MTkgQzEwMzIuNDQ0MDcsMjM1LjAzNjU3MSAxMDA4LjczNDk5LDI1My41NTQwMDMgOTk1LjgwMjc2NywyODEuNTQ5Nzc3IEw5OTUuODAyNzY3LDI0Mi43ODgwNTQgWiBNMjQ1OC44ODEyNiwxNzkuOTE0OTEyIEwyNDA0Ljk5Njk5LDE5Ny4xNDA0MzEgTDI0MDQuOTk2OTksNDAyLjEzNzAxOCBDMjQwNC45OTY5OSw0MzUuMjk2MTQgMjQyOC4yNzkzLDQ1Ny42OTM2MiAyNDY3LjkzMzgxLDQ1Ny42OTM2MiBMMjUyMS4zOTU2Miw0NTcuNjkzNjIgTDI1MjEuMzk1NjIsNDA5LjAyNzIyNSBMMjQ4My40NjExLDQwOS4wMjcyMjUgQzI0NjYuNjQ0OSw0MDkuMDI3MjI1IDI0NTguODgxMjYsNDAxLjI3NTc0MiAyNDU4Ljg4MTI2LDM4Ny4wNjAzODMgTDI0NTguODgxMjYsMjg5LjMwMTI2IEwyNTIxLjM5NTYyLDI4OS4zMDEyNiBMMjUyMS4zOTU2MiwyNDIuNzg4MDU0IEwyNDU4Ljg4MTI2LDI0Mi43ODgwNTQgTDI0NTguODgxMjYsMTc5LjkxNDkxMiBaIE04NTcuNjU2NDQ0LDE3OS45MTQ5MTIgTDgwMy43NzIxNzksMTk3LjE0MDQzMSBMODAzLjc3MjE3OSw0MDIuMTM3MDE4IEM4MDMuNzcyMTc5LDQzNS4yOTYxNCA4MjcuMDUwMTgyLDQ1Ny42OTM2MiA4NjYuNzA0NjksNDU3LjY5MzYyIEw5MjAuMTcwODEzLDQ1Ny42OTM2MiBMOTIwLjE3MDgxMyw0MDkuMDI3MjI1IEw4ODIuMjMxOTc5LDQwOS4wMjcyMjUgQzg2NS40MjAwODksNDA5LjAyNzIyNSA4NTcuNjU2NDQ0LDQwMS4yNzU3NDIgODU3LjY1NjQ0NCwzODcuMDYwMzgzIEw4NTcuNjU2NDQ0LDI4OS4zMDEyNiBMOTIwLjE3MDgxMywyODkuMzAxMjYgTDkyMC4xNzA4MTMsMjQyLjc4ODA1NCBMODU3LjY1NjQ0NCwyNDIuNzg4MDU0IEw4NTcuNjU2NDQ0LDE3OS45MTQ5MTIgWiBNNzMwLjYwMTY1OCwzMjcuMjAxNzA3IEw3ODYuMjEwMjIsMzI3LjIwMTcwNyBDNzc1Ljg2NDQ0MSwyNzUuMDkwMjA3IDczMS4wMzI3MzIsMjM4LjQ4MTY3NSA2NzcuNTc1MjMxLDIzOC40ODE2NzUgQzYxNS41MDA1NTgsMjM4LjQ4MTY3NSA1NjUuMDYwNTc2LDI4NS40MjU1MTggNTY1LjA2MDU3NiwzNTAuNDU2MTU2IEM1NjUuMDYwNTc2LDQxNS4wNTYxNTYgNjE1LjUwMDU1OCw0NjIgNjc3LjU3NTIzMSw0NjIgQzczMS4wMzI3MzIsNDYyIDc3NS44NjQ0NDEsNDI3LjExNDAxOSA3ODYuMjEwMjIsMzc1LjAwMjUyIEw3MzAuNjAxNjU4LDM3NS4wMDI1MiBDNzIxLjk4MDE3NiwzOTguMjYxMjc2IDcwMS43MTUzODIsNDEyLjkwMjk2NiA2NzcuNTc1MjMxLDQxMi45MDI5NjYgQzY0NS4yNDQ2NzIsNDEyLjkwMjk2NiA2MTkuMzgwMjI1LDM4Ny40OTUzMjcgNjE5LjM4MDIyNSwzNTEuMzE3NDMyIEM2MTkuMzgwMjI1LDMxNC4yODI1NjggNjQ1LjI0NDY3MiwyODkuMzAxMjYgNjc3LjU3NTIzMSwyODkuMzAxMjYgQzcwMS43MTUzODIsMjg5LjMwMTI2IDcyMS45ODAxNzYsMzAzLjk0Mjk1IDczMC42MDE2NTgsMzI3LjIwMTcwNyBaIE00ODcuMTM5NjE4LDMyOC45MjQyNTggQzQ4Mi4zOTc4MDMsMzAzLjUxNjYxOSA0NTkuOTc3NjM4LDI4NS44NTYxNTYgNDM0LjUzOTk1NCwyODUuODU2MTU2IEM0MDkuMTA2NTgxLDI4NS44NTYxNTYgMzg3Ljk4Mzk0OSwzMDIuNjU1MzQzIDM4MC42NTU2ODksMzI4LjkyNDI1OCBMNDg3LjEzOTYxOCwzMjguOTI0MjU4IFogTTU0Ni4yMDEwODMsMzY4LjExMjMxMyBMMzgwLjIyODkyNiwzNjguMTEyMzEzIEMzODcuNTUyODc1LDM5NS4yNDY4MSA0MTEuNjkzMDI2LDQxMy4zMzM2MDQgNDQxLjAwNjA2Niw0MTMuMzMzNjA0IEM0NTcuODIyMjY3LDQxMy4zMzM2MDQgNDczLjMzNjYyNSw0MDYuODc0MDM1IDQ4Mi4zOTc4MDMsMzkzLjUxOTk1MiBMNTQzLjE3OTI1MywzOTMuNTE5OTUyIEM1MjYuODAyNzQ4LDQzNC44NjU1MDIgNDg3Ljk5NzQ1NSw0NjIgNDQwLjE0ODIyOCw0NjIgQzM3NS40Nzg0ODksNDYyIDMyMi44OTE3NTcsNDE0LjYyNTUxOCAzMjIuODkxNzU3LDM1MC4wMjU1MTggQzMyMi44OTE3NTcsMjg0Ljk5NDg4IDM3Mi44OTYzNTUsMjM4LjA1NTM0MyA0MzQuNTM5OTU0LDIzOC4wNTUzNDMgQzQ4Ny45OTc0NTUsMjM4LjA1NTM0MyA1NDYuNjI3ODQ2LDI3Ny4yNDMzOTcgNTQ2LjYyNzg0NiwzNTkuOTMwMTkxIEM1NDYuNjI3ODQ2LDM2Mi41MTQwMTkgNTQ2LjIwMTA4MywzNjUuMTAyMTUzIDU0Ni4yMDEwODMsMzY4LjExMjMxMyBaIE0yNDMuODk3NDI1LDQ1Ny42OTM2MiBMMjk4LjY0ODE0OSw0NTcuNjkzNjIgTDI5OC42NDgxNDksMTM5IEwyNDMuODk3NDI1LDE1Ni4yMjk4MjUgTDI0My44OTc0MjUsNDU3LjY5MzYyIFogTTAsMTU2LjIyOTgyNSBMMjE5LjAwNzIwNiwxNTYuMjI5ODI1IEwyMTkuMDA3MjA2LDIwOS4xOTgyOTMgTDYwLjM1ODk5OCwyMDkuMTk4MjkzIEw2MC4zNTg5OTgsMjc5LjgyNzIyNSBMMTg4LjgyMzM5NiwyNzkuODI3MjI1IEwxODguODIzMzk2LDMzMS45MzQ0MTggTDYwLjM1ODk5OCwzMzEuOTM0NDE4IEw2MC4zNTg5OTgsNDA1LjU4MjEyMSBMMjE5LjAwNzIwNiw0MDUuNTgyMTIxIEwyMTkuMDA3MjA2LDQ1Ny42OTM2MiBMMCw0NTcuNjkzNjIgTDAsMTU2LjIyOTgyNSBaIi8+PC9zdmc+">
        </div>
        <div class="trusted-companies-layer-2">
          <img class="publisher-mark publisher-emblem publisher-emblem-rockstar" alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTYgMTk4LjgiIGZpbGw9IiNmM2VkZGUiPjxwYXRoIGQ9Im0gMjE0LjUsMTk3LjQgYyAtMSwxIC0yLjEsMS41IC0zLjUsMS41IC0xLjQsMCAtMi41LC0wLjUgLTMuNSwtMS41IC0xLC0xIC0xLjQsLTIuMSAtMS40LC0zLjUgMCwtMS40IDAuNSwtMi41IDEuNCwtMy41IDEsLTEgMi4xLC0xLjQgMy41LC0xLjQgMS40LDAgMi41LDAuNSAzLjUsMS40IDEsMSAxLjUsMi4xIDEuNSwzLjUgMCwxLjMgLTAuNSwyLjUgLTEuNSwzLjUgeiBtIC02LjUsLTYuNSBjIC0wLjgsMC44IC0xLjIsMS44IC0xLjIsMyAwLDEuMiAwLjQsMi4yIDEuMiwzIDAuOCwwLjggMS44LDEuMyAzLDEuMyAxLjIsMCAyLjIsLTAuNCAzLC0xLjMgMC44LC0wLjggMS4yLC0xLjggMS4yLC0zIDAsLTEuMiAtMC40LC0yLjIgLTEuMiwtMyAtMC44LC0wLjggLTEuOCwtMS4yIC0zLC0xLjIgLTEuMSwtMC4xIC0yLjEsMC4zIC0zLDEuMiB6IG0gMywwLjIgYyAwLjcsMCAxLjIsMC4xIDEuNSwwLjIgMC42LDAuMiAwLjgsMC43IDAuOCwxLjQgMCwwLjUgLTAuMiwwLjggLTAuNSwxLjEgLTAuMiwwLjEgLTAuNSwwLjIgLTAuOCwwLjMgMC40LDAuMSAwLjcsMC4yIDAuOSwwLjUgMC4yLDAuMyAwLjMsMC42IDAuMywwLjggbCAwLDEuMiAtMC45LDAgMCwtMC43IGMgMCwtMC42IC0wLjIsLTEgLTAuNSwtMS4yIC0wLjIsLTAuMSAtMC42LC0wLjIgLTEuMSwtMC4yIGwgLTAuNywwIDAsMi4xIC0xLDAgMCwtNS40IDIsMCB6IG0gMSwwLjkgYyAtMC4yLC0wLjEgLTAuNiwtMC4yIC0xLjIsLTAuMiBsIC0wLjgsMCAwLDEuOSAwLjksMCBjIDAuNCwwIDAuNywwIDAuOSwtMC4xIDAuNCwtMC4xIDAuNiwtMC40IDAuNiwtMC44IDAsLTAuNCAtMC4yLC0wLjYgLTAuNCwtMC44IHoiIGZpbGw9IiMyNDFjMTIiIC8+PHBhdGggZD0iTSAxNzguNCwwIDM4LjMsMCBDIDE3LjIsMCAwLDE2LjcgMCwzNy4xIGwgMCwxMjQuNSBjIDAsMjAuNyAxNi42LDM3IDM3LjksMzcgbCAxNDAuMiwwIGMgMjEuMywwIDM3LjksLTE2LjMgMzcuOSwtMzcgTCAyMTYsMzcuMSBDIDIxNiwxNi4zIDE5OS41LDAgMTc4LjQsMCBtIDMzLjMsMTYxLjYgYyAwLDE4LjQgLTE0LjgsMzIuNyAtMzMuNywzMi43IGwgLTE0MC4xLDAgQyAxOSwxOTQuNCA0LjMsMTgwIDQuMywxNjEuNiBMIDQuMywzNy4xIEMgNC4zLDE4LjcgMTkuMiw0LjIgMzguMyw0LjIgbCAxNDAuMiwwIGMgMTguNywwIDMzLjMsMTQuNCAzMy4zLDMyLjkgbCAwLDEyNC41IHoiIGZpbGw9IiMyNDFjMTIiIC8+PHBhdGggZD0ibSAyMTEuNywxNjEuNiBjIDAsMTguNCAtMTQuOCwzMi43IC0zMy43LDMyLjcgbCAtMTQwLjEsMCBDIDE5LDE5NC40IDQuMywxODAgNC4zLDE2MS42IEwgNC4zLDM3LjEgQyA0LjMsMTguNyAxOS4yLDQuMiAzOC4zLDQuMiBsIDE0MC4yLDAgYyAxOC43LDAgMzMuMywxNC40IDMzLjMsMzIuOSBsIDAsMTI0LjUgeiIgZmlsbD0iI2YzZWRkZSIgLz48cGF0aCBkPSJtIDE3MywxMjIuMSAtMTcuOSwwIC0zLjEsLTE5LjUgLTExLjUsMTkuMyAtMTguMSwwIDExLDExLjYgLTksMTkuNSAxOS44LC0xMS44IDE1LjUsMTIgLTIuOSwtMTkuNyIgZmlsbD0iI2YzZWRkZSIgLz48cGF0aCBkPSJtIDE4NS41LDExOC4yIC0yNy4xLDAgLTQuMywtMjcgLTE1LjgsMjYuOCAtMywwIGMgLTEuOCwtMy4xIC0yLjUsLTcuNiAtMi41LC0xMC40IDAsLTQuNiAwLjMsLTkuMSAwLjMsLTE1IDAsLTcuOCAtMi4zLC0xMS45IC04LjQsLTEzLjQgbCAwLC0wLjIgYyAxMi45LC0xLjggMTguOCwtMTAuNCAxOC44LC0yMi40IDAsLTE3LjEgLTExLjQsLTIwLjggLTI2LjMsLTIwLjggbCAtNDAuMSwwIC0xNyw4MC40IDIxLjMsMCA2LjIsLTI5LjMgMTQuMiwwIGMgNy42LDAgMTAuNywzLjcgMTAuNywxMC44IDAsNS40IC0wLjYsOS43IC0wLjYsMTMuOCAwLDEuNSAwLjMsNS4xIDEuNCw2LjUgbCAxNS40LDE2LjMgLTEzLjMsMjguNSAyOC40LC0xNi45IDIxLjIsMTYuMyAtMy45LC0yNi45IDI0LjQsLTE3LjEgeiBtIC03Ny4zLC00Ni4zIC0xNywwIDQuMSwtMTkuNCAxNS44LDAgYyA1LjYsMCAxMS41LDEuNSAxMS41LDguMyAwLDguNyAtNi43LDExLjEgLTE0LjQsMTEuMSBtIDM2LDY5LjMgLTE5LjgsMTEuOCA5LjEsLTE5LjQgLTExLC0xMS42IDE4LjEsMCAxMS40LC0xOS4zIDMuMSwxOS41IDE4LDAgLTE2LjIsMTEuMyAyLjksMTkuOCAtMTUuNiwtMTIuMSB6IiBmaWxsPSIjMjQxYzEyIiAvPjwvc3ZnPg==">
          <img class="publisher-mark publisher-wordmark publisher-wordmark-rockstar" alt="Rockstar Games" src="/images/bento/asset-01.png">
        </div>
        <div class="trusted-companies-layer-3">
          <img class="publisher-mark publisher-emblem publisher-emblem-ubisoft" alt="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjExNSAwIDc3MCA3MDYiIGZpbGw9IiNmM2VkZGUiPjxwYXRoIGQ9Ik00ODEuNTE2IDBjLTIwNi43OTggMC0yOTYuMDYgMTg0LjA3Mi0yOTYuMDYgMTg0LjA3MmwyNi4yNzUgMTguODFzLTMzLjA2NSA2Mi44NzktMzIuMTUgMTQzLjUzYzAgMTY0LjY0IDEzMS4wNTggMzE5LjczMiAzMjMuOTg2IDMxOS43MzIgMTc1LjI2OCAwIDMyMC4wNS0xNDIuNjU3IDMyMC4wNS0zMTkuMzI3QzgyMy42MTcgMTE2LjM5OSA2NDQuOTM1IDAgNDgxLjUxNyAwem0xLjc5NCA1Ni4xNjhjMTYxLjU3MSAwIDI4Ni45NDYgMTMwLjIgMjg2Ljk0NiAyODEuNTYzIDAgMTYwLjQ1NS0xMjAuNjggMjcyLjA0Mi0yNjEuMzA3IDI3Mi4wNDItMTAzLjQ5OCAwLTE5Ni44NjMtNzguODE2LTE5Ni44NjMtMTg2Ljg3OSAwLTYyLjQxNCAzMy4xNzQtMTA1LjkyOCA3MC4zNDgtMTI5LjExOWw1LjQ0IDUuOTAzYy0xMC4xNzMgNy45Ni0zOS4xODEgNTQuNTU3LTM5LjE4MSAxMDAuMzU2IDAgODUuMDIyIDY2LjY3NCAxNDMuOTA2IDE1MC42NzggMTQzLjkwNiAxMDcuMDA2IDAgMTc4LjM3MS05MS4yNjcgMTc4LjM3MS0xOTcuMjM4IDAtMTIzLjI5Ni0xMDguODMzLTIyNy45NzEtMjM5LjgwNi0yMjcuOTcxLTcyLjQ0MiAwLTEzMy45MjYgMzEuMTU0LTE2OS4yNTYgNTguNjU3bC01LjQ5OC00Ljk3N0MzMDkuNDAzIDEwMS4xNDQgMzg5LjQ0NiA1Ni4xNjggNDgzLjMxIDU2LjE2OHptLTQ4LjIxIDExNy45NWM4My41OCAwIDE2NS4xOCA1NS4yOTMgMTg1LjU0OCAxMzMuNzc4bC03LjQwOCAyLjgwN2MtMzYuNTcxLTQ4LjI5NC05Ni40OTYtODguMzE3LTE2Ny4yNi04OC4zMTctMTMwLjIxMiAwLTE5OC41OTYgMTE4LjMyMy0xODguNTU3IDIxNy4xNDdsLTcuNjY4IDIuODA4cy0xNC4zODItMzEuNzM0LTE0LjM4Mi02OS4zNjRjMC0xMDguOTcgODkuNDg4LTE5OC44NiAxOTkuNzI3LTE5OC44NnptNTUuMjQyIDEzNi43NThjMzkuNTcgMCA3MS4yMTYgMzIuMDczIDcxLjIxNiA3MC4xNDYgMCAzMS41MDYtMjAuMjI4IDUwLjE3OC0yMC4yMjggNTAuMTc4bDIzLjk2IDE2Ljc1NHMtMjMuNzU5IDM3LjMwMS03Mi4yNTcgMzcuMzAxYy00Ni4zOTEgMC04Ny40Mi0zNy40NDQtODcuNDItODcuNzk3IDAtNTEuODg0IDQ0LjYyOS04Ni41ODIgODQuNzMtODYuNTgyeiIvPjwvc3ZnPg==">
          <img class="publisher-mark publisher-wordmark publisher-wordmark-ubisoft" alt="Ubisoft" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgNzIxIDEwMDAgMTk0IiBmaWxsPSIjZjNlZGRlIj48cGF0aCBkPSJNMCA3MjcuNjF2MTExLjYyYzAgNDUuMzIyIDMwLjg5NSA3NC4yMSA3NS44OTEgNzQuMjEgNDcuMzMgMCA3Ni4zLTMwLjQ2NCA3Ni4zLTc3LjI2N1Y3MjcuNjFoLTQwLjA2djEwNi41MjRjMCAyNS41Mi0xMi44NTIgNDEuMzQ2LTM1LjgxMyA0MS4zNDYtMjUuMTY0IDAtMzYuMjU3LTE4LjItMzYuMjU3LTM5LjMwN1Y3MjcuNjF6TTE3MS42NjggNzI5LjE1MnYxODIuNDY3aDYzLjgwNmMzNS4zMzkgMCA2NS4zNjctMTguMDI0IDY1LjM2Ny01My43NzIgMC0zNy4zMTQtMzIuNjUyLTQ1LjU4NS0zMi42NTItNDUuNTg1czI0LjE3OC02LjcxNiAyNC4xNzgtMzguNjRjMC0zMS45MDMtMzAuNTYtNDQuNDctNTYuODkzLTQ0LjQ3aC02My44MDZ6bTQwLjM2IDM0LjY1OGgxOS4zNjljMTMuNDQyIDAgMjIuMDQzIDcuMDggMjIuMDQzIDE5LjQgMCAxMS4wMi03LjI5NyAxOS4zMzYtMjEuMDI0IDE5LjMzNmgtMjAuMzg3Vjc2My44MXptMCA2Ny4yNzloMjEuNDA3YzIwLjEzIDAgMjcuMTEgMTAuMzQgMjcuMTEgMjIuNjggMCAxNC4zNTktOS4wMjkgMjIuNzc3LTI1LjA3MSAyMi43NzdoLTIzLjQ0NVY4MzEuMDl6TTMxNi4wMDQgNzI5LjEzOWg0MC4yNjV2MTgyLjQ2N2gtNDAuMjY1ek03NTUuMzUyIDkxMS42MDZoLTQwLjI2NVY3MjkuMTM5aDEyNi40MDF2MzcuNzE3aC04Ni4xMzZ2NDEuNzk0aDc4LjQ5MXYzMC41OGgtNzguNDkxek04NTYuMjcgNzI5LjEzOXYzNy43MTdoNTEuOTg3djE0NC43NWg0MC43NzV2LTE0NC43NUgxMDAwdi0zNy43MTd6TTQwMi4yMzYgODUwLjkzNGwtMzEuOTg3IDIzLjM4N3MxMS4wNTMgNDAuNDI1IDY2LjQ2NSA0MC40MjVjMzYuOSAwIDY0LjA1My0yMS41MzQgNjQuMDUzLTU5LjM5MiAwLTYxLjAxMS04NS4zMS00OC4wNjgtODUuMzEtNzkuNDQ0IDAtOC4yNTcgNy4zNDMtMTUuNTUxIDIwLjg5NS0xNS41NTEgMjEuNzQ0IDAgMzAuMDA4IDIxLjMzIDMwLjAwOCAyMS4zM2wzMS45OTYtMjIuNDU1cy0xMi40OTctMzMuMzEzLTYwLjM5Ny0zMy4zMTNjLTM5LjM2NSAwLTYwLjI3NiAyNS4yNTUtNjAuMjc2IDUxLjMxNSAwIDYyLjE3NSA4Mi44MjYgNDguNjggODIuODI2IDgxLjMxIDAgMTEuMDExLTguNjc3IDE5LjEwMi0yMi4xOTEgMTkuMDA5LTI2Ljc3NSAwLTM2LjA4Mi0yNi42MjEtMzYuMDgyLTI2LjYyMXpNNjA0Ljc0IDcyNS44MzdjLTQ3LjQxNyAwLTY4LjU1MiAyNS43MzktNjguNTUyIDI1LjczOWw2LjExNiA2LjExNnMtMzAuNjc3IDIxLjc5LTMwLjY3NyA2OC41ODRjMCA1My44NDUgNDEuNTI3IDg4LjQzIDkzLjMzNiA4OC40MyA2MC4xOTggMCA5NC4zNTUtNDQuNDE4IDk0LjM1NS05NC4zNTUgMC01My4yNS0zOC45OTYtOTQuNTE0LTk0LjU3OC05NC41MTR6bS44NiAzNy44NzZjMzIuMTUgMCA1My4wMDcgMjQuNTczIDUzLjAwNyA1Ni40NzkgMCAzMS41NzUtMjAuNjA4IDU2LjgzLTUzLjAwNyA1Ni44My0zMi4wMDkgMC01My4wMzktMjIuMzUyLTUzLjAzOS01Mi4wMiAwLTI3LjAwMSAxOC4yODUtMzguNzY4IDE4LjI4NS0zOC43NjhsLTYuNjI2LTYuNjI2czE0LjA5OS0xNS44OTUgNDEuMzgtMTUuODk1eiIvPjwvc3ZnPg==">
        </div>
        <div class="trusted-companies-layer-4">
          <img class="publisher-mark publisher-mark-activision" alt="Activision" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMTg4IDAgMjg4MCA3MjAiIGZpbGw9IiNmM2VkZGUiPjxwYXRoIGQ9Ik0gMTU2Mi44OTI2LDU3Mi40ODk3MiBMIDE1NzAuMTYyMyw1NzIuNDg5NzIgQyAxNTcwLjE2MjMsNTg3LjQxODQ0IDE1NzYuMTMzOCw2MDAuNzg5MzggMTU4NS44Njk5LDYxMC41MjU1MSBDIDE1OTUuNjA2MCw2MjAuMjYxNjMgMTYwOC45NzcwLDYyNi4yMzMxMiAxNjIzLjkwNTcsNjI2LjIzMzEyIEMgMTYzOC43MDQ2LDYyNi4yMzMxMiAxNjUyLjIwNTQsNjIwLjI2MTYzIDE2NjEuOTQxNSw2MTAuNTI1NTEgQyAxNjcxLjY3NzYsNjAwLjc4OTM4IDE2NzcuNjQ5MSw1ODcuNDE4NDQgMTY3Ny42NDkxLDU3Mi40ODk3MiBMIDE2ODQuNzg4OSw1NzIuNDg5NzIgQyAxNjg0Ljc4ODksNjA2LjI0MTYxIDE2NTcuNTI3OCw2MzMuNTAyNzYgMTYyMy45MDU3LDYzMy41MDI3NiBMIDE2MjMuOTA1Nyw2MjkuODY3OTQgTCAxNjIzLjkwNTcsNjMzLjUwMjc2IEMgMTU5MC4yODM2LDYzMy41MDI3NiAxNTYzLjAyMjUsNjA2LjI0MTYxIDE1NjIuODkyNiw1NzIuNDg5NzIgTSAxNjc3LjY0OTEsNTcyLjQ4OTcyIEMgMTY3Ny42NDkxLDU1Ny42OTA4MSAxNjcxLjY3NzYsNTQ0LjE5MDA1IDE2NjEuOTQxNSw1MzQuNTgzNzQgQyAxNjUyLjIwNTQsNTI0Ljg0NzYyIDE2MzguNzA0Niw1MTguNzQ2MzIgMTYyMy45MDU3LDUxOC43NDYzMiBMIDE2MjMuOTA1Nyw1MTEuNjA2NDkgQyAxNjU3LjUyNzgsNTExLjYwNjQ5IDE2ODQuNzg4OSw1MzguODY3NjQgMTY4NC43ODg5LDU3Mi40ODk3MiBMIDE2NzcuNjQ5MSw1NzIuNDg5NzIgTSAxNjIzLjkwNTcsNTE1LjI0MTMxIEwgMTYyMy45MDU3LDUxMS42MDY0OSBMIDE2MjMuOTA1Nyw1MTUuMjQxMzEgTSAxNTYyLjg5MjYsNTcyLjQ4OTcyIEMgMTU2My4wMjI1LDUzOC44Njc2NCAxNTkwLjI4MzYsNTExLjYwNjQ5IDE2MjMuOTA1Nyw1MTEuNjA2NDkgTCAxNjIzLjkwNTcsNTE4Ljc0NjMyIEMgMTYwOC45NzcwLDUxOC43NDYzMiAxNTk1LjYwNjAsNTI0Ljg0NzYyIDE1ODUuODY5OSw1MzQuNTgzNzQgQyAxNTc2LjEzMzgsNTQ0LjE5MDA1IDE1NzAuMTYyMyw1NTcuNjkwODEgMTU3MC4xNjIzLDU3Mi40ODk3MiBMIDE1NjIuODkyNiw1NzIuNDg5NzIiIGZpbGwtcnVsZT0ibm9uemVybyIgLz48cGF0aCBkPSJNIC0yNDcuNTA3MDQsMjAwLjY5OTYyIEwgLTE0MC41Mzk1MCwyMDAuNjk5NjIgTCAtMTQwLjUzOTUwLDYwOC43MDgxMCBMIC0yNDcuNTA3MDQsNjA4LjcwODEwIEwgLTI0Ny41MDcwNCwyMDAuNjk5NjIgeiAiIGZpbGwtcnVsZT0ibm9uemVybyIgLz48cGF0aCBkPSJNIDEzMTcuNTQyMyw0MzQuNzU2MDIgTCAxMzE3LjU0MjMsNjA3LjE1MDMyIEwgMTIwOS45MjU3LDYwNi43NjA4NyBMIDEyMDkuOTI1NywxODguMTA3NTcgTCAxNDAzLjczOTUsMzU0LjkxOTgxIEwgMTQwMy43Mzk1LDIwMC42OTk2MiBMIDE1MTAuNDQ3NCwyMDAuNjk5NjIgTCAxNTEwLjQ0NzQsNjIzLjc2NjYzIEwgMTMxNy41NDIzLDQzNC43NTYwMiIgZmlsbC1ydWxlPSJub256ZXJvIiAvPjxwYXRoIGQ9Ik0gLTc4NS40NjAzMiw0MDMuNjAwNDMgQyAtNzg1LjQ2MDMyLDI4Ny44MDU0NyAtNjkxLjQ3NDI3LDE5My44MTk0MiAtNTc1LjY3OTMxLDE5My44MTk0MiBDIC01MjMuNDkzNjksMTkzLjgxOTQyIC00NzUuNzIxNzgsMjEzLjAzMjA0IC00MzguOTg0MTQsMjQ0LjU3NzA4IEwgLTUwOC4zMDUzNCwzMjMuMjQ0OTYgQyAtNTI2LjQ3OTQzLDMwNy45MjY3OSAtNTQ5Ljk3NTk0LDI5OC43MDk5MyAtNTc1LjY3OTMxLDI5OC43MDk5MyBDIC02MzMuNTc2NzksMjk4LjcwOTkzIC02ODAuNTY5ODEsMzQ1LjcwMjk1IC02ODAuNTY5ODEsNDAzLjYwMDQzIEMgLTY4MC41Njk4MSw0NjEuNDk3OTEgLTYzMy41NzY3OSw1MDguNDkwOTMgLTU3NS42NzkzMSw1MDguNDkwOTMgQyAtNTQ5LjU4NjUwLDUwOC40OTA5MyAtNTI1LjcwMDU0LDQ5OC44ODQ2MiAtNTA3LjI2NjgyLDQ4My4wNDcyMCBMIC00MzguMDc1NDMsNTYxLjg0NDg5IEMgLTQ3NC44MTMwNyw1OTMuOTA5MTkgLTUyMi45NzQ0Myw2MTMuMjUxNjIgLTU3NS42NzkzMSw2MTMuMjUxNjIgQyAtNjkxLjQ3NDI3LDYxMy4yNTE2MiAtNzg1LjQ2MDMyLDUxOS4zOTUzOSAtNzg1LjQ2MDMyLDQwMy42MDA0MyIgZmlsbC1ydWxlPSJub256ZXJvIiAvPjxwYXRoIGQ9Ik0gNjMuMTQwMjAwLDcwMi4wNDUwNyBMIC0xMzkuMjQxMzUsMTY0LjM1MTQyIEwgLTMwOC4zOTAyNywxNjQuMzUxNDIgTCAtMzA4LjM5MDI3LDYxMC4yNjU4OCBMIC00MTkuMTIyNDUsNjEwLjI2NTg4IEwgLTQxOS4xMjI0NSwxNjQuMzUxNDIgTCAtNjY0LjIxMzEzLDE2NC4zNTE0MiBMIC02MDcuMzU0MTYsNTcuMjU0MDY3IEwgLTYwLjE4NDAzMCw1Ny4yNTQwNjcgTCA2My4xNDAyMDAsMzc5LjQ1NDg0IEwgMTg2LjU5NDI0LDU3LjI1NDA2NyBMIDcxNi4zNjkxNyw1Ny4yNTQwNjcgTCA3NzQuNzg1OTEsMTY0LjM1MTQyIEwgMjY1LjY1MTU3LDE2NC4zNTE0MiBMIDYzLjE0MDIwMCw3MDIuMDQ1MDciIGZpbGwtcnVsZT0ibm9uemVybyIgLz48cGF0aCBkPSJNIDQwNS4wNzI4NSw2MDcuMTUwMzIgTCA0MDUuMDcyODUsNTE3LjA1ODcyIEwgNDc4LjU0ODEzLDUxNy4wNTg3MiBDIDQ5MC40OTExMSw1MTcuMDU4NzIgNTEzLjIwODczLDUxNi4xNTAwMiA1MTguOTIwNTksNDk3LjE5NzAzIEMgNTMwLjczMzc1LDQ1Ny43MzMyOCA0MDkuNzQ2MTksMzkzLjczNDQ5IDQwOS43NDYxOSwyOTUuNTk0MzcgQyA0MDkuNzQ2MTksMjIxLjM0MDIwIDQ2My40ODk1OSwxOTkuMTQxODQgNDk5Ljk2NzYwLDE5OS4xNDE4NCBMIDYxMS4zNDg4NSwxOTkuMTQxODQgTCA2MTEuMzQ4ODUsMjg3LjY3NTY1IEwgNTQyLjU0NjkyLDI4Ny42NzU2NSBDIDU0Mi41NDY5MiwyODcuNjc1NjUgNTIyLjgxNTA0LDI4Ny42NzU2NSA1MTcuMzYyODEsMjk1LjU5NDM3IEMgNDg3LjUwNTM2LDMzOC4zMDM1MCA2MjcuOTY1MTcsNDAwLjc0NDUwIDYyNy45NjUxNyw1MTUuNTAwOTQgQyA2MjcuOTY1MTcsNTc1LjQ3NTQ2IDU3Ni41NTg0NCw2MDcuMTUwMzIgNTI1LjI4MTUyLDYwNy4xNTAzMiBMIDQwNS4wNzI4NSw2MDcuMTUwMzIiIGZpbGwtcnVsZT0ibm9uemVybyIgLz48cGF0aCBkPSJNIDI2Ny4yMDkzNSwxOTkuMTQxODQgTCAzNzQuMzA2NzAsMTk5LjE0MTg0IEwgMzc0LjMwNjcwLDYwNy4xNTAzMiBMIDI2Ny4yMDkzNSw2MDcuMTUwMzIgTCAyNjcuMjA5MzUsMTk5LjE0MTg0IHogIiBmaWxsLXJ1bGU9Im5vbnplcm8iIC8+PHBhdGggZD0iTSA2NDUuMzYwMzgsMTk5LjE0MTg0IEwgNzUyLjQ1Nzc0LDE5OS4xNDE4NCBMIDc1Mi40NTc3NCw2MDcuMTUwMzIgTCA2NDUuMzYwMzgsNjA3LjE1MDMyIEwgNjQ1LjM2MDM4LDE5OS4xNDE4NCB6ICIgZmlsbC1ydWxlPSJub256ZXJvIiAvPjxwYXRoIGQ9Ik0gMTYzOS43NDMxLDYwMy42NDUzMSBDIDE2MzcuOTI1Nyw1OTkuMzYxNDIgMTYzOC4xODUzLDU5Mi44NzA2NyAxNjM3LjQwNjQsNTg3LjQxODQ0IEMgMTYzNi4zNjc5LDU4MC4yNzg2MiAxNjMzLjY0MTgsNTc3LjE2MzA2IDE2MjYuMTEyNSw1NzcuMTYzMDYgTCAxNjExLjE4MzgsNTc3LjE2MzA2IEwgMTYxMS4xODM4LDYwMy42NDUzMSBMIDE1OTYuMzg0OSw2MDMuNjQ1MzEgTCAxNTk2LjM4NDksNTM1Ljg4MTg5IEwgMTYzMi44NjI5LDUzNS44ODE4OSBDIDE2NDUuMDY1NSw1MzUuODgxODkgMTY1Mi43MjQ2LDU0NC4zMTk4NyAxNjUyLjcyNDYsNTU0LjU3NTI1IEMgMTY1Mi43MjQ2LDU2Mi42MjM3OCAxNjQ5LjQ3OTIsNTY4LjU5NTI3IDE2NDEuOTUwMCw1NzEuNTgxMDEgTCAxNjQxLjk1MDAsNTcxLjg0MDY0IEMgMTY0OS4zNDk0LDU3My42NTgwNSAxNjUxLjQyNjUsNTgwLjc5Nzg4IDE2NTEuODE1OSw1ODcuNjc4MDcgQyAxNjUyLjIwNTQsNTkxLjk2MTk2IDE2NTIuMDc1NSw1OTkuODgwNjggMTY1NC42NzE4LDYwMy42NDUzMSBMIDE2MzkuNzQzMSw2MDMuNjQ1MzEgTSAxNjExLjE4MzgsNTY2LjY0ODA0IEwgMTYyNy41NDA1LDU2Ni42NDgwNCBDIDE2MzQuMTYxMSw1NjYuNjQ4MDQgMTYzNy43OTU5LDU2My43OTIxMSAxNjM3Ljc5NTksNTU2LjkxMTkyIEMgMTYzNy43OTU5LDU1MC40MjExNyAxNjM0LjE2MTEsNTQ3LjU2NTI0IDE2MjcuNTQwNSw1NDcuNTY1MjQgTCAxNjExLjE4MzgsNTQ3LjU2NTI0IEwgMTYxMS4xODM4LDU2Ni42NDgwNCIgZmlsbC1ydWxlPSJub256ZXJvIiAvPjxwYXRoIGQ9Ik0gLTg2Ni43MjQ0OSw2MDguNzA4MTAgTCAtODk1LjE1Mzk3LDUzMi43NjYzMyBMIC0xMDI3Ljk1NDcsNTMyLjc2NjMzIEwgLTEwNTYuMzg0Miw2MDguNzA4MTAgTCAtMTE3MC4yMzE5LDYwOC43MDgxMCBMIC05NjEuNDg5NDMsMTEuMDM5OTM1IEwgLTc1Mi43NDY5NCw2MDguNzA4MTAgTCAtODY2LjcyNDQ5LDYwOC43MDgxMCBNIC05OTUuNTAwOTUsNDIzLjcyMTc1IEwgLTkzMi4yODEwNiw0MjMuNzIxNzUgTCAtOTYzLjk1NTkxLDMxOS4zNTA1MSBMIC05OTUuNTAwOTUsNDIzLjcyMTc1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIC8+PHBhdGggZD0iTSA3NzEuOTI5OTgsNDAzLjQ3MDYxIEMgNzcxLjkyOTk4LDI4Ny41NDU4NCA4NjYuMDQ1ODQsMTkzLjQyOTk4IDk4Mi4xMDA0MywxOTMuNDI5OTggQyAxMDk4LjAyNTIsMTkzLjQyOTk4IDExOTIuMTQxMSwyODcuNTQ1ODQgMTE5Mi4xNDExLDQwMy40NzA2MSBDIDExOTIuMTQxMSw1MTkuNTI1MjEgMTA5OC4wMjUyLDYxMy42NDEwNiA5ODIuMTAwNDMsNjEzLjY0MTA2IEMgODY2LjA0NTg0LDYxMy42NDEwNiA3NzEuOTI5OTgsNTE5LjUyNTIxIDc3MS45Mjk5OCw0MDMuNDcwNjEgTSA4NzcuNzI5MTksNDAzLjQ3MDYxIEMgODc3LjcyOTE5LDQ2MS4xMDg0NyA5MjQuNDYyNTgsNTA3Ljg0MTg2IDk4Mi4xMDA0Myw1MDcuODQxODYgQyAxMDM5LjYwODUsNTA3Ljg0MTg2IDEwODYuMzQxOSw0NjEuMTA4NDcgMTA4Ni4zNDE5LDQwMy40NzA2MSBDIDEwODYuMzQxOSwzNDUuOTYyNTggMTAzOS42MDg1LDI5OS4yMjkxOSA5ODIuMTAwNDMsMjk5LjIyOTE5IEMgOTI0LjQ2MjU4LDI5OS4yMjkxOSA4NzcuNzI5MTksMzQ1Ljk2MjU4IDg3Ny43MjkxOSw0MDMuNDcwNjEiIGZpbGwtcnVsZT0ibm9uemVybyIgLz48L3N2Zz4=">
        </div>
        <div class="trusted-companies-layer-5">
          <img class="publisher-mark publisher-mark-square-enix" alt="Square Enix" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjIuMDM3IDMzLjY5NyIgZmlsbD0iI2YzZWRkZSI+PGc+PGc+PGc+PHJlY3QgeD0iMjI1LjYyMSIgeT0iMTEuNjYxIiB3aWR0aD0iMTAuNjM0IiBoZWlnaHQ9IjUuNTY1IiAvPjxyZWN0IHg9IjE4Ni45MzEiIHk9IjExLjY2MSIgd2lkdGg9IjEwLjYzNCIgaGVpZ2h0PSI1LjU2NSIgLz48L2c+PGc+PGc+PHBhdGggZD0iTTYwLjMwMSwwSDQzLjM0OGMtNS4zMDcsMC03LjAwMiwxLjQzNi03LjAwMiw3LjAwOHYxNS42MjVjMCw1LjU3MiwxLjY5NSw3LjAwOCw3LjAwMiw3LjAwOGg1LjM2M3Y0LjA1NyAgICAgIGg2LjIzM1YyOS42NGg1LjM1N2M1LjMwNywwLDcuMDAyLTEuNDM2LDcuMDAyLTcuMDA4VjcuMDA4QzY3LjMwMywxLjQzNiw2NS42MDcsMCw2MC4zMDEsMHogTTYwLjczOCwyNC4wNjhoLTUuNzk1di0zLjE4SDQ4LjcxICAgICAgdjMuMThoLTUuOFY1LjA4N2gxNy44MjhWMjQuMDY4eiIgLz48cGF0aCBkPSJNOTQuNjk3LDI0LjA2OEg3OS4wNTdWMGgtNi41NjV2MjIuNjMyYzAsNS41NzIsMS42OTYsNy4wMDgsNy4wMDIsNy4wMDhIOTQuMjYgICAgICBjNS4zMDcsMCw3LjAwMy0xLjQzNiw3LjAwMy03LjAwOFYwaC02LjU2NVYyNC4wNjh6IiAvPjxwYXRoIGQ9Ik0xMTcuOTQ5LDBsLTE1LjA0LDI5LjY0aDYuMThsMy4wOTEtNi40OTFoMTYuODQzbDMuMTkzLDYuNDkxaDYuOTU0TDEyMy45MjQsMEgxMTcuOTQ5eiBNMTE0LjgwOCwxNy44MDcgICAgICBsNS45MjMtMTIuMDYzbDUuNzE3LDEyLjA2M0gxMTQuODA4eiIgLz48cGF0aCBkPSJNMTYyLjk3MywxOC40MzljNC4zMjIsMCw2LjM0Ni0xLjYwOCw2LjM0Ni01Ljc0NHYtNi45NWMwLTQuMTM2LTIuMDI0LTUuNzQ1LTYuMzQ2LTUuNzQ1aC0yMS4xMTJ2MjkuNjQgICAgICBoNi40NTVWMTguNDM5aDQuMzU4bDEwLjE4OSwxMS4yMDFoOC45MDFsLTExLjMyMi0xMS4yMDFIMTYyLjk3M3ogTTE0OC4zMTcsMTMuMzg0VjUuMTEyaDExLjcwMyAgICAgIGMyLjAyNCwwLDIuOTU0LDAuNDAyLDIuOTU0LDIuMzU1djMuNTYyYzAsMS45NTMtMC45MywyLjM1NS0yLjk1NCwyLjM1NUgxNDguMzE3eiIgLz48cG9seWdvbiBwb2ludHM9IjIyMC4xOTQsNS4wNTUgMjM4LjY4LDUuMDU1IDIzOC42OCwwIDIxMy42MjksMCAyMTMuNjI5LDI5LjY0IDIzOC45NTMsMjkuNjQgMjM4Ljk1MywyNC4wNjggICAgICAgMjIwLjE5NCwyNC4wNjggICAgICIgLz48cGF0aCBkPSJNMjY1LjcxNSwxNS41NjdjMCwwLjkxOSwwLjEwOSwyLjY0MiwwLjI3Myw1LjExMkMyNjUuMDA0LDE5LjQ3MywyNDguMjcxLDAsMjQ4LjI3MSwwaC00LjQ4NnYyOS42NCAgICAgIGg1LjkwOVYxMy42MTRjMC0wLjg2MS0wLjA1NS0yLjQxMy0wLjI3My00LjcxYzAuNzY2LDAuOTE5LDE3LjcxNiwyMC43MzYsMTcuNzE2LDIwLjczNmg0LjQ4NlYwaC01LjkwOFYxNS41Njd6IiAvPjxyZWN0IHg9IjI3Ny4wNTUiIHk9IjAiIHdpZHRoPSI2LjU2NCIgaGVpZ2h0PSIyOS42NCIgLz48cG9seWdvbiBwb2ludHM9IjMwNy41NzQsMTMuNjE0IDMxOS4yOCwwIDMxMi4xLDAgMzAzLjkzMiwxMC4wNTIgMjk1LjM0OCwwIDI4Ny4wNzYsMCAzMDAuMDMsMTQuNDE4ICAgICAgIDI4Ny4yODMsMjkuNjQgMjk0LjY3MiwyOS42NCAzMDMuNzI1LDE4LjE1MiAzMTMuNTU3LDI5LjY0IDMyMi4wMzcsMjkuNjQgICAgICIgLz48cG9seWdvbiBwb2ludHM9IjE4MS41MDQsNS4wNTUgMTk5Ljk4OCw1LjA1NSAxOTkuOTg4LDAgMTc0LjkzOSwwIDE3NC45MzksMjkuNjQgMjAwLjI2MiwyOS42NCAyMDAuMjYyLDI0LjA2OCAgICAgICAxODEuNTA0LDI0LjA2OCAgICAgIiAvPjxwYXRoIGQ9Ik0wLDI0LjA2OGMwLDQuMzU4LDIuMTcxLDUuNTcyLDYuOTkxLDUuNTcyaDE3LjYwNmM1LjMwNywwLDcuMDU3LTEuNDM2LDcuMDU3LTcuMDA4di00LjA3OCAgICAgIGMwLTUuNTcyLTEuNzUtNy4wMDgtNy4wNTctNy4wMDhINi45ODJWNS4wOTFoMTguNDkxdjIuNzI0bDUuNzk5LTAuMDAyVjYuNDkxQzMxLjI3MiwxLjM3OSwyOS4zMDMsMCwyNC4yNjksMEg4LjI0ICAgICAgQzIuOTMzLDAsMS4yMzgsMS40MzYsMS4yMzgsNy4wMDh2My4yNzRjMCw1LjU3MiwxLjY5Niw3LjAwOCw3LjAwMiw3LjAwOGgxNy42MTZ2Ni43NzdIMHoiIC8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==">
        </div>
        <div class="trusted-companies-layer-6">
          <img class="publisher-mark publisher-mark-bethesda" alt="Bethesda" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAuMDAwMDIgNTguMjA3OTk4IiBmaWxsPSIjZjNlZGRlIj48cGF0aCBkPSJNIDAsMy45Mjc3MjAzZS00IDAsMjQuOTM2MDg4IGwgMjQuNDQzNTEsMCAwLC0yNC45MzU2OTUyMjc5NyAtMjQuNDQzNTEsMCB6IE0gMTUuODI5MDQ2LDE2LjE1MzQ0IGwgLTcuMjIyMDAyMSwwIDAsLTcuMzY2Njg5OCA3LjIyMjAwMjEsMCAwLDcuMzY2Njg5OCB6IG0gMzUuODM3OTUsMTYuNzcyNjA2IDExLjAzOTUyNCwwIGMgNC4xNTg4MzQsMCA2LjE1ODQ4OCwxLjgzNTE4IDYuMTU4NDg4LDUuMjAyNTYyIDAsNC4zOTc1MDcgLTMuMTkzMDE2LDUuNDM4NzYyIC02Ljg3NTc0Miw1LjQzODc2MiBsIC0xMC4zMjIyNywwIDAsLTEwLjY0MTMyNCB6IE0gMzQuMDgxOTE1LDU3LjE2MTggbCAzMi4zODQwMDMsMCBjIDEwLjA4MTEyNCwwIDE5Ljk5NDA2NCwtNS45MjM1MjYgMTkuOTk0MDY0LC0xNy4zNTYzMDIgMCwtOC4zOTY4MTQgLTQuNzk4MTc5LC0xMi40NzI3OTQgLTkuOTEyOTQsLTE0LjIzNzQ4NSA0LjI0MTY5LC0yLjMxMjUyNSA3LjAyOTA4NiwtNS40Mzc1MjUgNy4wMjkwODYsLTExLjE5MTYzMSAwLjAwMTIsLTUuODQzMTQzOSAtMy4xODkzMDYsLTE0LjMxNDE1NzIzIC0xOC4yMjY5LC0xNC4zMTQxNTcyMyBsIC0zMS4yNjczMTMsMCAwLDU3LjA5OTU3NTIzIHogbSAxNy41ODUwODEsLTQzLjUwODg1NSA5LjI4MTAxNSwwIGMgMy41OTg2MzUsMCA1Ljk5NTI1MiwxLjAzODc4MiA1Ljk5NTI1MiwzLjkyMDE2MyAwLDMuNjc5MDE2IC0yLjMxODcwOCw0LjcyMDI3MSAtNS45OTUyNTIsNC43MjAyNzEgbCAtOS4yODEwMTUsMCAwLC04LjY0MDQzNCB6IG0gNTEuNjUwOTI0LDE4LjA3NDc5MyBjIDAuNzI0NjcsLTQuNDc2NjUyIDMuNDM3ODcsLTYuOTU2MTI0IDguMTY0MzIsLTYuOTU2MTI0IDQuMDcyMjcsMCA2Ljk0OTk0LDMuMTE2MzQzIDYuOTQ5OTQsNi45NjIzMDcgbCAtMTUuMTEzMDMsMCB6IG0gMzAuMzEyNjIsOC4yMzYwNSBjIDAsLTE2LjE1MDU3MyAtNy4xMjA2LC0yNS4zNTEyMDcgLTIzLjU5MjcsLTI1LjM1MTIwNyAtMTMuMTI0NTA0LDAgLTIxLjkxNzA0NSw5LjgzOTk3OSAtMjEuOTE3MDQ1LDIxLjkxNzA0NiAwLDEzLjgzMDYzIDkuOTk5NTA2LDIxLjY2OTcxNyAyMy4yNzg1OTUsMjEuNjY5NzE3IDkuNDI5NDEsMCAxOC4xNTM5MywtNC4xNTg4MzQgMjEuMzQ2OTUsLTEzLjEyMDc5NSBsIC0xNC43OTAyNywwIGMgLTEuMjgxMTYsMi4wMDA4OSAtNC4wODMzOSwyLjk1OTI5IC02LjY0ODIsMi45NTkyOSAtNC45NDY1NywwIC03LjY2NzE5LC0zLjM2MzY3MyAtOC4wNjkxLC04LjA3Nzc2IGwgMzAuMzg5MywtMC4wMDI1IHogbSAxOS44NDgxNCwtMzYuOTQ4NDU2NSAtMTUuODQwMTgsMCAwLDEyLjY0MDk3NzUgLTcuMDM2NSwwIDAsOS43NTM0MTMgNy4wMzY1LDAgMCwxOS44Mzk0ODQgYyAwLDExLjM1MjM5NCA3LjQzOTY2LDEyLjM5MTE3NSAxNC4xNTk1OCwxMi4zOTExNzUgMy4zNTYyNSwwIDYuOTU5ODMsLTAuNDc3MzQ0IDEwLjE1NzgsLTAuNDc3MzQ0IGwgMCwtMTIuMDA0MTA2IGMgLTEuMjAzMjYsMC4xNjk0MiAtMi4zOTkwOSwwLjI0NDg1NiAtMy42MDM1OCwwLjI0NDg1NiAtMy45OTQzNywwIC00Ljg3ODU3LC0xLjY3OTM2MyAtNC44Nzg1NywtNS41MTU0MzQgbCAwLC0xNC40ODExMDQgOC40Nzk2NywwIDAsLTkuNzUwOTQgLTguNDgzMzgsMCAwLC0xMi42NDA5Nzc1IHogbSAxMS4xMDUwNyw1NC4xNDY0Njg1IDE1LjgzMjc1LDAgMCwtMjEuOTEzMzM2IGMgMCwtNi42NDA3OCAzLjU5ODY0LC04LjAwNDc5OCA2LjMyMjk2LC04LjAwNDc5OCA0LjYzMjQ3LDAgNS4xOTM5MSwzLjM2MzY3MiA1LjE5MzkxLDguMTU5Mzc5IGwgMCwyMS43NTg3NTUgMTUuODQxNDEsMCAwLC0yOC40Nzc0NDQgYyAwLC05LjUxNTk3NyAtNi44MDc3MiwtMTQuMDczMDExIC0xNC4yNDg2MSwtMTQuMDczMDExIC02LjcxMDAzLDAgLTEwLjIzNTcxLDIuMzI0ODkxIC0xMi45NTYzMiw1LjUxNzkwNiBsIC0wLjE1NzA2LDAgMCwtMjAuMDY3MDI2MjMgLTE1LjgyOTA0LDAgMCw1Ny4wOTk1NzUyMyB6IG0gNjAuNDM0OCwtMjUuNDM0MDYyIGMgMC43MTcyNSwtNC40NzY2NTIgMy40NDI4MiwtNi45NTYxMjQgOC4xNjQzMiwtNi45NTYxMjQgNC4wODA5MywwIDYuOTQ5OTUsMy4xMTYzNDMgNi45NDk5NSw2Ljk2MjMwNyBsIC0xNS4xMTMwMywwIHogbSAzMC4zMTI2Miw4LjIzNjA1IGMgMCwtMTYuMTUwNTczIC03LjExMDcsLTI1LjM1MTIwNyAtMjMuNTkyNywtMjUuMzUxMjA3IC0xMy4xMjA3OSwwIC0yMS45MTgyOCw5LjgzOTk3OSAtMjEuOTE4MjgsMjEuOTE3MDQ2IDAsMTMuODMwNjMgMTAuMDAwNzQsMjEuNjY5NzE3IDIzLjI4NjAxLDIxLjY2OTcxNyA5LjQyMzIzLDAgMTguMTUzOTQsLTQuOTIxODQ0IDIxLjM0MDc3LC0xMy44ODAwOTQgbCAtMTQuNzg1MzIsMCBjIC0xLjI3Mzc0LDEuOTk5NjUzIC00LjA4MDkyLDMuNzE2MTE1IC02LjY0NTcyLDMuNzE2MTE1IC00Ljk1MTUzLDAgLTcuNjc1ODUsLTMuMzYzNjcyIC04LjA3MDM0LC04LjA3NTI4NiBsIDMwLjM4OTI5LDAgeiBNIDI5NS4xNzA5LDI3LjcyODQzIGMgLTAuMzkwNzgsLTEwLjYzMjY2NyAtMTEuMTkxNjMsLTEzLjExMzM3NSAtMjAuMTQ5ODgsLTEzLjExMzM3NSAtOC4zMTg5LDAgLTE5LjU5ODMzLDIuNzIwNjE3IC0xOS41OTgzMywxMy4xOTc0NjcgMCw3LjExNTY1MSA0Ljg3NjA4LDEwLjk1NjY2OCAxNi45NTQzOSwxMy4wMzQyMyA3LjM1ODAzLDEuMjc4NjkxIDguNzE4MzQsMS45OTg0MTggOC43MTgzNCw0LjQwMjQ1NCAwLDIuMzk5MDkgLTMuMjc3MTEsMy4xOTkxOTkgLTUuMzUyMiwzLjE5OTE5OSAtMS45MjI5OCwwIC0zLjQzNzg3LC0wLjQ4ODQ3NSAtNC4yNDE2OSwtMS4yMDMyNTUgLTEuMjAzMjUsLTEuMDMzODM1IC0xLjgzNTE4LC0xLjQ3MTYwNyAtMS45MTMwOSwtMi45MTg0ODEgbCAtMTUuMTExNzksMCBjIDAuMjMyNDksMTAuNzIxNzA2IDEwLjk1NjY3LDEzLjg4MTMzMiAyMC43MDM5LDEzLjg4MTMzMiAxMC4wNzg2NSwwIDIxLjEyNDM2LC0zLjEyNSAyMS4xMjQzNiwtMTQuNjQxODY4IDAsLTYuODAxNTQzIC00LjY0MjM3LC05LjkxNzg4NyAtOS45MjE2LC0xMS41OTk3MjMgLTUuMjgwNDcsLTEuNzU2MDM1IC0xMS4yNjk1NCwtMi4wNzc1NjIgLTEzLjkxMjI1LC0zLjIwMjkwOCAtMC44NzQzLC0wLjM5NTcyNyAtMS44MzUxOCwtMC45NTIyMTYgLTEuODM1MTgsLTIuMTU3OTQ1IDAsLTIuNzE0NDM0IDIuNTU0OTEsLTMuMTkzMDE1IDQuNzk4MTgsLTMuMTkzMDE1IDEuMjc4NjksMCAyLjU2MzU3LDAuMzk5NDM2IDMuNTEyMDcsMS4xOTk1NDUgMS4wNDg2OCwwLjcxNzI1NCAxLjc2MjIyLDEuNzU2MDM1IDEuODQ4NzgsMy4xMTYzNDMgbCAxNC4zODIxOCwtMC4wMDQ5IHogbSA0Ni42OTk0LC0yNy42NjYyMDUyMyAtMTUuODI5MDUsMCAwLDIwLjE0OTg4MTIzIC0wLjE2MzIzLDAgYyAtMi4zOTY2MiwtMy41MjE5NjIgLTYuNjQwNzgsLTUuNTk3MDUxIC0xMS4zNTczNCwtNS41OTcwNTEgLTEzLjkxNzIsMCAtMTcuNjc1MzYsMTEuODM5NjMyIC0xNy42NzUzNiwyMS41OTE4MDggMCwxMC40MDAxNzggNS42NzYyLDIxLjk5OTkwMSAxNy40MzY2OCwyMS45OTk5MDEgNy43NTk5NSwwIDEwLjE1Mjg1LC0yLjk2Mjk5OSAxMi4xNTYyMiwtNS42MDgxODEgbCAwLjE2NDQ3LDAgMCw0LjU2MzIxNyAxNS4yNzI1NiwwIDAsLTU3LjA5NTg2NTIzIHogTSAzMjYuNjAxNDUsMzYuMzcwMSBjIDAsNC45NTE1MjQgLTEuMjc5OTIsMTAuMzEzNjEzIC02Ljk0OTk0LDEwLjMxMzYxMyAtNS42ODIzOCwwIC02Ljk2NzI1LC01LjM2MjA4OSAtNi45NjcyNSwtMTAuMzEzNjEzIDAsLTQuODc4NTYxIDEuMjc5OTMsLTEwLjIzOTQxNCA2Ljk2MjMxLC0xMC4yMzk0MTQgNS42NjYzLDAgNi45NDk5NCw1LjM2MDg1MyA2Ljk0OTk0LDEwLjIzOTQxNCBtIDQ1LjE2MjI1LDUuOTk1MjUyIGMgLTAuMjQyMzksNC4zMTgzNjEgLTMuMDM0NzMsNi40NzI1OTYgLTYuNjQwNzgsNi40NzI1OTYgLTIuODY5MDIsMCAtNC45NTg5NSwtMS45MTMwODkgLTQuOTU4OTUsLTMuODI2MTc4IDAsLTIuODA3MTgyIDEuODM4ODksLTMuNjkwMTQ2IDUuMzU3MTUsLTQuNDgyODM1IDIuMTY5MDcsLTAuNDg5NzExIDQuMzIyMDcsLTEuMDQzNzI4IDYuMjQxMzQsLTIuMDAzMzY0IGwgMCwzLjgzOTc4MSB6IG0gMTUuMjAwODMsLTExLjUxNjg2OCBjIDAsLTcuOTk0OTA1IDAuMTQ4MzksLTE2LjIzNzEzOSAtMTkuNjg0OTEsLTE2LjIzNzEzOSAtOS44MzUwMywwIC0yMC44NjgzNywxLjkxOTI3MSAtMjEuMzQ4MTksMTMuNTk0NDMgbCAxNC43MDc0MSwwIGMgMC4wODY2LC0xLjc1MzU2MSAxLjA1NDg2LC00LjIzNzk4IDUuOTIzNTMsLTQuMjM3OTggMi41Njg1MSwwIDUuMjAxMzMsMS4wNDQ5NjUgNS4yMDEzMywzLjg0NTk2NCAwLDIuNjQxNDcyIC0yLjE2NDEzLDMuMjc3MTA3IC00LjMxNTg5LDMuNjgwMjUzIC04LjA4MjcxLDEuNTE4NTk5IC0yMy40MjgyMywxLjAzMzgzNSAtMjMuNDI4MjMsMTQuMTU5NTc3IDAsOC43MTMzOTUgNi42MjU5NCwxMi41NTE5MzkgMTQuNjMxOTgsMTIuNTUxOTM5IDUuMTI1ODksMCA5Ljk5NDU2LC0xLjEyNTM0NyAxMy4zNTU3NSwtNC45NjE0MTcgbCAwLjE2MDc3LDAgYyAtMC4wODE2LDEuMTIxNjM2IDAuMTU0NTgsMi44MDQ3MDkgMC41NjAyLDMuOTIwMTYyIGwgMTYuMTU1NTIsMCBjIC0xLjc2MzQ2LC0yLjYzODk5OSAtMS45MTMwOSwtNi4xNTg0ODggLTEuOTEzMDksLTkuMjgxMDE1IGwgMCwtMTcuMDI4NTkxIHogbSA0LjYyMjU3LC04Ljc0MDYwMiAtMS4yMDMyNSwwIDAsLTQuODk3MTExIC0xLjgzODg5LDAgMCwtMS4wMzg3ODEgNC44MjY2MiwwIDAsMS4wMzg3ODEgLTEuNzgwNzcsMCAwLDQuODk3MTExIHogbSAzLjYyMzM3LDAgLTEuMTI5MDYsMCAwLC01LjkzNTg5MiAxLjg4MzQxLDAgMS4wNzM0MSw0LjA5NzAwMiAxLjA3OTU5LC00LjA5NTc2NiAxLjg4NzEyLDAgMCw1LjkzNTg5MyAtMS4xNDUxMywwIDAsLTQuNzMzODc0IC0xLjI5MTA2LDQuNzMyNjM3IC0xLjA3OTU5LDAgLTEuMjczNzQsLTQuNzMxNDAxIDAuMDAyLDQuNzM2MzQ4IHoiIC8+PC9zdmc+">
        </div>
        <div class="trusted-companies-layer-7">
          <img class="publisher-mark publisher-mark-bandai-namco" alt="Bandai Namco" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzUgNjMiIGZpbGw9IiNmM2VkZGUiPjxwYXRoIGQ9Ik04MTIuODEyLDE3OEg1NTQuMTg4QTguMjIxLDguMjIxLDAsMCwwLDU0NiwxODYuMjQ4djI4LjI0NWE5LjMsOS4zLDAsMCwwLDIuNjk0LDYuNTUzTDU2OC40OTIsMjQxVjIzMC45MzVoMjQ0LjMyQTguMjIxLDguMjIxLDAsMCwwLDgyMSwyMjIuNjgyVjE4Ni4yNDhBOC4yMjEsOC4yMjEsMCwwLDAsODEyLjgxMiwxNzhabTEuMTExLDQ2LjIwOUg1NjguNDkydjYuNzMxTDU1My4wNzgsMjE1LjRWMTg0LjcyNkg4MTMuOTIzVjIyNC4yWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0NiAtMTc4KSIgLz48cGF0aCBkPSJNNzU2LjI3NiwxOTYuMzM0djE5LjE0N2gtNC42di0xNC4xbC01LjI0Miw3LjU1MmEyLjU5MSwyLjU5MSwwLDAsMS00LjI2NywwbC01LjI0MS03LjU1MnYxNC4xaC00LjZWMTk2LjMzNGEyLjk5MywyLjk5MywwLDAsMSwxLjI0LTIuNDU0LDIuODY0LDIuODY0LDAsMCwxLDQsLjcyMmw2LjczOSw5LjcwOCw2LjczOC05LjcwOGEyLjg2NCwyLjg2NCwwLDAsMSw0LS43MjJBMi45OTMsMi45OTMsMCwwLDEsNzU2LjI3NiwxOTYuMzM0Wm0tNTMuOSwxMS4zNS05LjA4LTEzLjA4MmEyLjg2MywyLjg2MywwLDAsMC00LjAxLS43MTMsMi45NjIsMi45NjIsMCwwLDAtMS4yMjgsMi40MDZ2MTkuMTg2aDQuNnYtMTQuMWw5LjA3NSwxMy4wNzZhMi44NjMsMi44NjMsMCwwLDAsNC4wMS43MTNoMGEyLjk1OSwyLjk1OSwwLDAsMCwxLjIyOC0yLjQwNVYxOTMuNTgyaC00LjZ2MTQuMVptNjkuNTY1LTEwLjZhNy44MTEsNy44MTEsMCwwLDEsNS42NiwyLjVsMi41OS0zLjYyMWExMi44NzksMTIuODc5LDAsMCwwLTguMjUtMi44MjFjLTYuNjcsMC0xMi40MTIsNC41MTUtMTIuNDEyLDExLjM4OHM1Ljc0MiwxMS4zODcsMTIuNDEyLDExLjM4N2ExMi44ODQsMTIuODg0LDAsMCwwLDguMjUtMi44MmwtMi41OS0zLjYyMmE3LjgxMSw3LjgxMSwwLDAsMS01LjY2LDIuNUE3LjQ1MSw3LjQ1MSwwLDAsMSw3NzEuOTM5LDE5Ny4wODZabTMzLjMyNiw3LjQ0NmMwLDYuODczLTUuNTczLDExLjM4Ny0xMi4wNDcsMTEuMzg3cy0xMi4wNDgtNC41MTQtMTIuMDQ4LTExLjM4Nyw1LjU3NC0xMS4zODgsMTIuMDQ4LTExLjM4OFM4MDUuMjY1LDE5Ny42NTksODA1LjI2NSwyMDQuNTMyWm0tNS4wOTEsMGMwLTQuMTEyLTIuODMtNy40MzctNi45NTYtNy40MzdzLTYuOTU2LDMuMzI1LTYuOTU2LDcuNDM3LDIuODMsNy40MzYsNi45NTYsNy40MzZTODAwLjE3NCwyMDguNjQ0LDgwMC4xNzQsMjA0LjUzMlptLTc3LjM4LTkuMDFjMiw0Ljk5LDcuOTk0LDE5Ljk1OSw3Ljk5NCwxOS45NTloLTQuOTE1bC0xLjk0OC01aC04Ljg1OWwtMS45NDksNWgtNC44NzFsNy45OTQtMTkuOTU5QTMuNDQ3LDMuNDQ3LDAsMCwxLDcyMi43OTQsMTk1LjUyMlptLTAuMzE5LDExLjIzNS0yLjk4LTcuNjQ5LTIuOTc5LDcuNjQ5aDUuOTU5Wm0tMTM5LjAwNiwyLjgxMWE1LjgsNS44LDAsMCwxLTYuMDMxLDUuOTEzaC0xMS44YTEuNzg2LDEuNzg2LDAsMCwxLTEuODQ1LTEuODYxVjE5NS40NDRhMS43ODYsMS43ODYsMCwwLDEsMS44NDUtMS44NjJoMTAuNWMzLjYsMCw2LjA5LDIuNDY4LDYuMDksNS40MzFhNS40Myw1LjQzLDAsMCwxLTMuOTU3LDUuMkE1LjM0OCw1LjM0OCwwLDAsMSw1ODMuNDY5LDIwOS41NjhaTTU2OC40LDIwMi40NTFoNmEyLjUxOSwyLjUxOSwwLDAsMCwyLjc0NS0yLjQ2M2gwYTIuNTE5LDIuNTE5LDAsMCwwLTIuNzQ1LTIuNDY0aC02djQuOTI3Wm0xMC4wMjksNi40MDZhMi43MzcsMi43MzcsMCwwLDAtMi45NjUtMi42ODNINTY4LjR2NS4zNjVoNy4wNjRBMi43MzcsMi43MzcsMCwwLDAsNTc4LjQyNCwyMDguODU3Wm00My45NTUtMS4xNzNMNjEzLjMsMTk0LjZhMi44NjMsMi44NjMsMCwwLDAtNC4wMS0uNzEzLDIuOTYyLDIuOTYyLDAsMCwwLTEuMjI4LDIuNDA2djE5LjE4Nmg0LjZ2LTE0LjFsOS4wNzUsMTMuMDc2YTIuODYzLDIuODYzLDAsMCwwLDQuMDEuNzEzaDBhMi45NTksMi45NTksMCwwLDAsMS4yMjgtMi40MDVWMTkzLjU4MmgtNC42djE0LjFabTUxLjc5Myw3LjhoNC43NzV2LTIxLjloLTQuNzc1djIxLjlabS0yMy41NDgtMTEuMDU5YzAsNy4yMTUtNS4yNjMsMTEuMDU5LTExLjIzNCwxMS4wNTloLTYuMTMyYTEuNzg2LDEuNzg2LDAsMCwxLTEuODQ1LTEuODYxVjE5NS40NDRhMS43ODYsMS43ODYsMCwwLDEsMS44NDUtMS44NjJoNi4xODdDNjQ1LjQxNiwxOTMuNTgyLDY1MC42MjQsMTk3LjA2MSw2NTAuNjI0LDIwNC40MjJabS01LjA1LDBjMC01LjIzMS0zLjg2My02LjktNy4xMi02LjloLTIuNDR2MTQuMDE1aDIuMzMxQzY0Mi4xODIsMjExLjUzOSw2NDUuNTc0LDIwOS41MDcsNjQ1LjU3NCwyMDQuNDIyWm0tNDcuMDQyLTguOSw3Ljk5MywxOS45NTloLTQuOTE0bC0xLjk0OC01SDU5MC44bC0xLjk0OSw1aC00Ljg3MWw3Ljk5NC0xOS45NTlBMy40NDcsMy40NDcsMCwwLDEsNTk4LjUzMiwxOTUuNTIyWm0tMC4zMiwxMS4yMzUtMi45NzktNy42NDktMi45NzksNy42NDloNS45NThabTY2LjQzLTExLjIzNSw3Ljk5NCwxOS45NTloLTQuOTE1bC0xLjk0OC01aC04Ljg1OWwtMS45NDgsNUg2NTAuMWw3Ljk5My0xOS45NTlBMy40NDcsMy40NDcsMCwwLDEsNjY0LjY0MiwxOTUuNTIyWm0tMC4zMTksMTEuMjM1LTIuOTc5LTcuNjQ5LTIuOTgsNy42NDloNS45NTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ2IC0xNzgpIiAvPjwvc3ZnPg==">
        </div>
      </div>
    </section>
    `
const afterProcess = `<section id="features" class="ep-features" data-backdrop="features" aria-labelledby="ep-features-title">
<h2 id="ep-features-title">Main di akun Steam kamu</h2>
<p class="ep-features-subtitle">Lanjut dari save terakhir, kejar achievement yang belum terbuka, atau jajal cerita baru lewat DLC.</p>
<div class="ep-bento">
<article class="ef-card ef-library"><div class="ef-covers" role="group" aria-label="Pilih cover game"><button type="button" aria-pressed="false" aria-label="Phantom Blade Zero"><img src="/images/catalog/game-01.jpg" width="600" height="900" alt="" style="--card-angle:-17deg"></button><button type="button" aria-pressed="false" aria-label="Onimusha: Way of the Sword"><img src="/images/catalog/game-02.jpg" width="600" height="900" alt="" style="--card-angle:-2deg"></button><button type="button" aria-pressed="false" aria-label="Resident Evil Requiem"><img src="/images/catalog/game-03.jpg" width="600" height="900" alt="" style="--card-angle:13deg"></button></div><div><h3>Main di Steam<br>sendiri.</h3><p>Tambah game ke library pribadi dengan akses Add to Steam seumur hidup.</p></div></article>
<article class="ef-card ef-cloud" data-phase="game-1">
<h3>Cloud Save</h3>
<svg class="ep-save-stage" viewBox="0 0 220 102" fill="none" aria-hidden="true"><defs><clipPath id="ep-save-icon-clip"><rect x="-16" y="-16" width="32" height="32" rx="3"/></clipPath></defs>
<g class="ep-save-wires" stroke="#eab024" stroke-width="1.4" stroke-linecap="round">
<path pathLength="1" d="M29 69C29 51 76 65 100 48"/><path pathLength="1" d="M110 69V48"/><path pathLength="1" d="M191 69C191 51 144 65 120 48"/></g>
<g class="ep-save-slot ep-slot-1"><g class="ep-save-tile ep-game-1"><image clip-path="url(#ep-save-icon-clip)" href="/images/bento/asset-02.jpg" x="-16" y="-16" width="32" height="32"/></g></g><g class="ep-save-slot ep-slot-2"><g class="ep-save-tile ep-game-2"><image clip-path="url(#ep-save-icon-clip)" href="/images/bento/asset-03.jpg" x="-16" y="-16" width="32" height="32"/></g></g><g class="ep-save-slot ep-slot-3"><g class="ep-save-tile ep-game-3"><image clip-path="url(#ep-save-icon-clip)" href="/images/bento/asset-04.jpg" x="-16" y="-16" width="32" height="32"/></g></g>
<path class="ep-save-flight" d="M110 43Q134 17 165 21" pathLength="1" stroke="#7dd3fc" stroke-width="1.5" stroke-dasharray="2 4"/>
<g transform="translate(110 42)"><g class="ep-save-folder"><path d="M-21-10q0-3 3-3h11l4 5h20q4 0 4 4v15q0 3-4 3h-34q-4 0-4-4z" fill="#47320d" stroke="#f7ca48" stroke-width="1.4"/><path d="M-19-2h38l-3 15h-33z" fill="#f0b429"/></g></g>
<g transform="translate(177 22)"><g class="ep-save-cloudmark"><path d="M-16 11a9 9 0 0 1-2-18 13 13 0 0 1 24-3 10.5 10.5 0 1 1 3 21z" fill="#121e33" stroke="#60a5fa" stroke-width="2"/><path class="ep-save-tick" d="m-8 0 5 5 10-11" pathLength="1" stroke="#f7ca44" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g></g>
</svg>
<strong class="ep-save-caption">5 jam 12 menit</strong></article>
<article class="ef-card ef-trophy" data-award="ready">
<h3>Achievement</h3>
<button class="ep-award-demo" type="button" aria-label="Putar animasi membuka achievement">
<svg class="ep-award-art" viewBox="0 0 180 106" fill="none" aria-hidden="true">
<defs><linearGradient id="ep-cup-metal" x1="0" y1="0" x2="1" y2=".65" gradientUnits="objectBoundingBox"><stop stop-color="#ffe57a"/><stop offset=".28" stop-color="#f5be34"/><stop offset=".64" stop-color="#d89016"/><stop offset="1" stop-color="#7c4c0a"/></linearGradient></defs>
<g class="ep-award-cup">
<path d="M65 22H47v6c0 15 9 23 23 24m45-30h18v6c0 15-9 23-23 24" stroke="url(#ep-cup-metal)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M62 16h56l-3 20c-2 15-10 24-21 28v11c0 5 4 8 11 9l2 4H73l2-4c7-1 11-4 11-9V64c-11-4-19-13-21-28z" fill="url(#ep-cup-metal)"/>
<path d="M63 16h54M69 88h42" stroke="#fde068" stroke-width="4" stroke-linecap="round"/>
<path d="m90 26 3.1 6.7 7.3 1-5.3 5.1 1.3 7.2L90 42.6 83.6 46l1.3-7.2-5.3-5.1 7.3-1z" fill="#704308"/>
<path d="M69 23c0 6 1 11 3 16" stroke="#fff3bb" stroke-width="2.5" stroke-linecap="round"/>
</g>
<g class="ep-award-glint" fill="#7dd3fc"><path d="m131 5 1.9 6.1 6.1 1.9-6.1 1.9L131 21l-1.9-6.1-6.1-1.9 6.1-1.9z"/><path d="m47 53 1.5 4.5L53 59l-4.5 1.5L47 65l-1.5-4.5L41 59l4.5-1.5z"/></g>
</svg>
<span class="ep-award-status" aria-hidden="true"><span class="ep-award-score">9/10</span><span class="ep-award-unlock">Achievement Unlocked</span></span>
</button><p class="ep-award-sr">Pencapaian tercatat di profil Steam kamu.</p></article>
<article class="ef-card ef-dlc" id="fitur-dlc">
<h3>DLC termasuk</h3>
<p>Di paket Standard dan Premium.</p>
<button type="button" class="ep-dlc-fan" aria-label="Sorot contoh konten tambahan untuk game utama" aria-pressed="false">
<span class="ep-dlc-root"><svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true"><path fill="#524b40" d="M2 3h1v1h-1zM6 3h4v1h-4zM13 3h1v1h-1zM15 9h1v1h-1zM15 10h1v1h-1zM0 11h1v1h-1zM5 11h1v1h-1zM10 11h1v1h-1zM15 11h1v1h-1zM0 12h1v1h-1zM4 12h1v1h-1zM11 12h1v1h-1zM15 12h1v1h-1zM1 13h3v1h-3zM12 13h3v1h-3z"/><path fill="#aa9d83" d="M3 2h3v1h-3zM10 2h3v1h-3zM1 5h1v1h-1zM14 6h1v1h-1zM14 7h1v1h-1zM14 8h1v1h-1zM0 9h1v1h-1zM0 10h1v1h-1zM5 10h6v1h-6zM4 11h1v1h-1zM11 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM12 12h1v1h-1zM14 12h1v1h-1z"/><path fill="#e3dac4" d="M3 3h3v1h-3zM10 3h3v1h-3zM2 4h1v1h-1zM13 4h1v1h-1zM2 5h2v1h-2zM5 5h7v1h-7zM13 5h2v1h-2zM1 6h3v1h-3zM5 6h7v1h-7zM13 6h1v1h-1zM1 7h2v1h-2zM6 7h4v1h-4zM12 7h2v1h-2zM1 8h3v1h-3zM5 8h5v1h-5zM11 8h3v1h-3zM1 9h5v1h-5zM8 9h1v1h-1zM11 9h4v1h-4zM1 10h4v1h-4zM11 10h4v1h-4zM1 11h3v1h-3zM12 11h3v1h-3zM2 12h1v1h-1zM13 12h1v1h-1z"/><path fill="#fff1ce" d="M3 4h10v1h-10z"/><path fill="#302d29" d="M4 5h1v1h-1zM4 6h1v1h-1zM3 7h3v1h-3zM4 8h1v1h-1zM6 9h2v1h-2zM9 9h2v1h-2z"/><path fill="#d88b50" d="M12 5h1v1h-1zM12 6h1v1h-1zM10 7h1v1h-1z"/><path fill="#e3bd5a" d="M11 7h1v1h-1zM10 8h1v1h-1z"/></svg><strong>Game utama</strong></span>
<span class="ep-dlc-branch ep-dlc-story"><i class="ep-dlc-signal" aria-hidden="true"></i><svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true"><path fill="#6a4a32" d="M2 1h10v1h-10zM1 2h1v1h-1zM12 2h1v1h-1zM1 3h1v1h-1zM12 3h1v1h-1zM1 4h1v1h-1zM12 4h1v1h-1zM1 5h1v1h-1zM12 5h2v1h-2zM1 6h1v1h-1zM13 6h1v1h-1zM1 7h1v1h-1zM13 7h1v1h-1zM1 8h1v1h-1zM13 8h1v1h-1zM1 9h1v1h-1zM13 9h1v1h-1zM1 10h1v1h-1zM13 10h1v1h-1zM1 11h1v1h-1zM13 11h1v1h-1zM1 12h1v1h-1zM13 12h1v1h-1zM2 13h6v1h-6zM10 13h4v1h-4z"/><path fill="#a4774b" d="M2 2h9v1h-9zM2 3h1v1h-1zM2 4h1v1h-1zM2 5h10v1h-10zM2 6h11v1h-11zM2 7h1v1h-1zM11 7h2v1h-2zM2 8h1v1h-1zM11 8h2v1h-2zM2 9h1v1h-1zM8 9h2v1h-2zM11 9h2v1h-2zM2 10h11v1h-11z"/><path fill="#e5c994" d="M11 2h1v1h-1zM11 3h1v1h-1zM3 4h9v1h-9zM3 7h1v1h-1zM10 7h1v1h-1zM3 8h1v1h-1zM10 8h1v1h-1zM3 9h1v1h-1zM7 9h1v1h-1zM10 9h1v1h-1zM2 11h11v1h-11zM10 12h1v1h-1z"/><path fill="#ffedbb" d="M3 3h8v1h-8zM4 7h6v1h-6zM4 9h3v1h-3zM2 12h6v1h-6zM11 12h2v1h-2z"/><path fill="#bd6c52" d="M8 12h2v1h-2zM8 13h2v1h-2zM8 14h2v1h-2zM8 15h1v1h-1z"/><path fill="#704433" d="M4 8h6v1h-6z"/></svg><span>Cerita tambahan</span></span>
<span class="ep-dlc-branch ep-dlc-outfit"><i class="ep-dlc-signal" aria-hidden="true"></i><svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true"><path fill="#394553" d="M6 3h3v1h-3zM5 10h1v1h-1zM9 10h1v1h-1zM5 11h1v1h-1zM9 11h1v1h-1zM5 12h1v1h-1zM9 12h1v1h-1zM4 13h1v1h-1zM9 13h1v1h-1zM3 14h1v1h-1zM10 14h1v1h-1z"/><path fill="#62778a" d="M5 2h1v1h-1zM9 2h1v1h-1zM4 3h1v1h-1zM10 3h1v1h-1zM4 4h1v1h-1zM10 4h1v1h-1zM4 5h2v1h-2zM9 5h2v1h-2zM5 6h2v1h-2zM8 6h2v1h-2zM3 7h2v1h-2zM9 7h3v1h-3zM2 8h1v1h-1zM4 8h1v1h-1zM9 8h1v1h-1zM11 8h2v1h-2zM2 9h2v1h-2zM8 9h1v1h-1zM10 9h2v1h-2zM13 9h1v1h-1zM1 10h3v1h-3zM8 10h1v1h-1zM10 10h4v1h-4zM1 11h3v1h-3zM8 11h1v1h-1zM10 11h4v1h-4zM1 12h3v1h-3zM8 12h1v1h-1zM10 12h4v1h-4zM1 13h3v1h-3zM10 13h4v1h-4zM1 14h2v1h-2zM11 14h3v1h-3z"/><path fill="#9aaec0" d="M7 0h2v1h-2zM5 1h2v1h-2zM9 1h1v1h-1zM4 2h1v1h-1zM6 2h3v1h-3zM10 2h1v1h-1zM5 3h1v1h-1zM9 3h1v1h-1zM5 4h1v1h-1zM9 4h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM3 6h2v1h-2zM10 6h2v1h-2zM2 7h1v1h-1zM5 7h1v1h-1zM8 7h1v1h-1zM12 7h1v1h-1zM3 8h1v1h-1zM5 8h1v1h-1zM8 8h1v1h-1zM10 8h1v1h-1zM1 9h1v1h-1zM4 9h2v1h-2zM9 9h1v1h-1zM12 9h1v1h-1zM4 10h1v1h-1zM4 11h1v1h-1zM0 12h1v1h-1zM4 12h1v1h-1zM14 12h1v1h-1zM0 13h1v1h-1zM14 13h1v1h-1z"/><path fill="#c4d1d6" d="M7 1h2v1h-2z"/><path fill="#252b30" d="M6 4h3v1h-3zM7 5h1v1h-1zM6 8h2v1h-2zM6 9h2v1h-2zM6 10h2v1h-2zM6 11h2v1h-2zM6 12h2v1h-2zM8 13h1v1h-1zM9 14h1v1h-1z"/><path fill="#e9c470" d="M7 6h1v1h-1zM6 7h2v1h-2z"/></svg><span>Kostum karakter</span></span>
</button></article>
<article class="ef-card ef-device"><h3>2 PC sekaligus</h3><p>Satu lisensi Premium untuk dua PC Windows.</p>
<button type="button" class="ep-pair-demo" aria-label="Putar ulang animasi kedua perangkat menyala bersama">
<svg class="ep-pair-art" viewBox="0 0 280 140" fill="none" aria-hidden="true">
<defs><linearGradient id="ep-pair-night" x2="1" y2=".8"><stop stop-color="#1d2b48"/><stop offset=".55" stop-color="#58698c"/><stop offset="1" stop-color="#f0be42"/></linearGradient><linearGradient id="ep-pair-frame" x2=".8" y2="1"><stop stop-color="#686457"/><stop offset=".48" stop-color="#292a27"/><stop offset="1" stop-color="#504c43"/></linearGradient></defs>
<ellipse cx="133" cy="128" rx="117" ry="5" fill="#080807" opacity=".6"/>
<path d="m74 95-3 20-15 5v3h53v-3l-16-5-3-20z" fill="url(#ep-pair-frame)" stroke="#797363" stroke-width="1"/>
<rect x="9" y="9" width="168" height="95" rx="6" fill="#1b1b1a" stroke="#787366" stroke-width="1.4"/>
<svg class="ep-pair-screen" x="14" y="14" width="158" height="84" style="width:158px;height:84px" viewBox="0 0 120 65" preserveAspectRatio="none"><g ><g class="ep-pair-sky"><rect width="120" height="65" fill="url(#ep-pair-night)"/><circle cx="87" cy="20" r="9" fill="#fde068"/><path d="M-6 50 22 32l16 8 27-18 22 19 12-7 27 12v22H-6z" fill="#2d3b59"/><path d="m-5 43 27-3 16 11 28-15 32 8 28-9v33H-5z" fill="#1d2438"/><path d="M-4 58c25-16 38 7 68-6s39-9 61-5v23H-4z" fill="#111420"/><path d="M65 65c7-6 24-5 24-10s-8-6 0-10c-3 5 8 7 7 11s-12 6-16 9z" fill="#f0b429"/></g></g></svg>
<circle class="ep-pair-led" cx="165" cy="101" r="1.45" fill="#95ecac"/>
<path d="M141 63q0-5 5-5h106q5 0 5 5l4 56H137z" fill="#272725" stroke="#938b79" stroke-width="1.3"/>
<svg class="ep-pair-screen" x="144" y="62" width="109" height="53" style="width:109px;height:53px" viewBox="0 0 120 65" preserveAspectRatio="none"><g transform="translate(120 0) scale(-1 1)"><g class="ep-pair-sky"><rect width="120" height="65" fill="url(#ep-pair-night)"/><circle cx="87" cy="20" r="9" fill="#fde068"/><path d="M-6 50 22 32l16 8 27-18 22 19 12-7 27 12v22H-6z" fill="#2d3b59"/><path d="m-5 43 27-3 16 11 28-15 32 8 28-9v33H-5z" fill="#1d2438"/><path d="M-4 58c25-16 38 7 68-6s39-9 61-5v23H-4z" fill="#111420"/><path d="M65 65c7-6 24-5 24-10s-8-6 0-10c-3 5 8 7 7 11s-12 6-16 9z" fill="#f0b429"/></g></g></svg>
<path d="M137 119h124l12 6-2 3H128l-2-3z" fill="url(#ep-pair-frame)" stroke="#817b6c" stroke-width="1.1"/>
<path d="M185 120h28l-3 2h-22z" fill="#181916"/><circle class="ep-pair-led" cx="251" cy="125" r="1.6" fill="#95ecac"/>
</svg></button></article>
<article class="ef-card ef-count" id="jumlah-game">
<h3>Jumlah game</h3>
<div class="ep-count-value" aria-hidden="true"><strong class="ef-counter">60.000+</strong><span class="ep-count-plan">Standard</span></div>
<p class="ep-count-alt">Standard <strong>60.000+</strong><br/>Premium <strong>211.000+</strong></p>
</article>
<article class="ef-card ef-premium" id="aktivasi-premium"><div><h3>Aktivasi <span>Premium</span></h3><p>Aktifkan game Denuvo dan game yang memerlukan launcher tambahan.</p></div><div class="ef-services ef-brands"><div class="ef-brand" data-publisher="denuvo"><img class="ef-denuvo" src="/images/bento/asset-05.png" alt="Denuvo by Irdeto"></div><div class="ef-brand" data-publisher="ea"><img class="ef-emblem" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxZTMgMTAwMC4wMDEiIGZpbGw9IiNmM2VkZGUiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMTUxMDgwNSwwLDAsMS4xNTEwNjY2LC03NS41NDc3MTMsLTc1LjU0NzUzNykiPjxnPjxwYXRoIGQ9Im01MDAuMDA2IDkzNC4zOTNjLTIzOS41MTYgMC00MzQuMzc0LTE5NC44NjItNDM0LjM3NC00MzQuMzc5IDAtMjM5LjUyIDE5NC44NTgtNDM0LjM4MSA0MzQuMzc0LTQzNC4zODEgMjM5LjUxMyAwIDQzNC4zNzUgMTk0Ljg2MiA0MzQuMzc1IDQzNC4zODEgMCAyMzkuNTE2LTE5NC44NjEgNDM0LjM3OS00MzQuMzc1IDQzNC4zNzl6bTczLjUyMS02MDIuMzk0aC0yNDUuNDg2bC0zNy4yNDcgNTkuODU4aDI0NS4yMDR6bTUwLjE2OCAwLjU3MS0xNTAuMDcxIDIzOC45NjNoLTE2Ni40NjRsMzguNDA1LTU5LjkwOWg5OS43NzFsMzguMTEyLTU5Ljg4aC0yMzAuNjU0bC0zOC4xMDQgNTkuODhoNTQuNjQxbC03NS44MTIgMTE5LjYxMWgzMTYuMzg5bDExNi44Ni0xODQuMjk1IDQyLjYwOSA2NC42ODRoLTM4LjQybC0zNi4zODUgNTkuOTA5aDExMy43NzNsMzkuNTA2IDU5LjcwMmg3Mi41NzZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48L2c+PC9nPjwvc3ZnPg==" alt=""><img class="ef-word" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMTIwIDI3MTkgMzcwIiBmaWxsPSIjZjNlZGRlIj48cGF0aCBkPSJNMjU4OC44MTEzMSwyOTkuMjEwMjM5IEMyNTg4LjgxMTMxLDI4Ni4yODY3OTQgMjYwMi42MDk5OSwyNzkuMzk2NTg3IDI2MTcuNjk3NTgsMjc5LjM5NjU4NyBDMjY0My4xMzUyNywyNzkuMzk2NTg3IDI2NjIuMTAyNTMsMjk0LjA0MjU4NCAyNjY1LjU0NjgxLDMxNi40MzU3NTggTDI3MTUuNTU1NzIsMzE2LjQzNTc1OCBDMjcxMC44MTgyMSwyNzAuMzUzMTkgMjY3MS41ODE4NSwyMzguMDU1MzQzIDI2MTguNTU1NDIsMjM4LjA1NTM0MyBDMjU3MS41NjgzNCwyMzguMDU1MzQzIDI1MzUuMzU4MTEsMjYyLjYwMTcwNyAyNTM1LjM1ODExLDMwMy45NDI5NSBDMjUzNS4zNTgxMSwzNTAuMDI1NTE4IDI1NzkuMzMxOTksMzYyLjA4MzM4MSAyNjE1Ljk3MzI5LDM3MS41NjE3MjMgQzI2NDIuMjY0NSwzNzguNDQ3NjIzIDI2NjQuNjg4OTcsMzg0LjA1MDIyMyAyNjY0LjY4ODk3LDM5OS41NTMxOSBDMjY2NC42ODg5Nyw0MTIuMDQxNjkxIDI2NTAuNDU5MjIsNDIwLjY1NDQ1IDI2MzAuNjI5ODEsNDIwLjY1NDQ1IEMyNjAzLjg5ODksNDIwLjY1NDQ1IDI1ODMuNjQyNzMsNDA1LjU4MjEyMSAyNTgwLjYyMDksMzgzLjE4ODk0NyBMMjUzMC42MTYzLDM4My4xODg5NDcgQzI1MzUuMzU4MTEsNDI5LjI2NzIwOSAyNTc1Ljg3OTA4LDQ2MiAyNjMwLjYyOTgxLDQ2MiBDMjY4MC4yMDMzMyw0NjIgMjcxOSw0MzUuNzI2Nzc4IDI3MTksMzk0LjM4MTIyOCBDMjcxOSwzNDkuNTk0ODggMjY3NS4wMzQ3NSwzMzcuNTM3MDE4IDI2MzguMzg0ODMsMzI4LjA2Mjk4MiBDMjYxMS42NjI1NCwzMjEuMTY4NDY5IDI1ODguODExMzEsMzE1LjE0Mzg0NCAyNTg4LjgxMTMxLDI5OS4yMTAyMzkgWiBNMjMxNi40MzI4MSwyNDIuNzg4MDU0IEwyMjYxLjY4MjA5LDI0Mi43ODgwNTQgTDIyNjEuNjgyMDksNDU3LjY5MzYyIEwyMzE2LjQzMjgxLDQ1Ny42OTM2MiBMMjMxNi40MzI4MSwzNDMuOTk2NTg3IEMyMzE2LjQzMjgxLDMxNC43MDg4OTkgMjM0Mi4yOTcyNiwyODQuMTMzNjA0IDIzODYuMjc1NDQsMjkxLjAyMzgxMiBMMjM4Ni4yNzU0NCwyMzguOTE2NjE5IEMyMzUzLjA3NDExLDIzNS4wMzY1NzEgMjMyOS4zNjUwNCwyNTMuNTU0MDAzIDIzMTYuNDMyODEsMjgxLjU0OTc3NyBMMjMxNi40MzI4MSwyNDIuNzg4MDU0IFogTTIxMzMuMDcxMTMsMzQ3LjQ0MTY5MSBMMjA5MS4yNTI2MywyNTkuNTg3MjQxIEwyMDUwLjczMTY2LDM0Ny40NDE2OTEgTDIxMzMuMDcxMTMsMzQ3LjQ0MTY5MSBaIE0yMDkzLjQwOCwxNDMuMzA2MzggTDIyNDguNjAzMyw0NTcuNjkzNjIgTDIxODUuNjcwNzksNDU3LjY5MzYyIEwyMTU1LjA1NTkxLDM5My41MTk5NTIgTDIwMjkuMTc3OTUsMzkzLjUxOTk1MiBMMTk5OS40Mjk1Myw0NTcuNjkzNjIgTDE5MzguMjE3LDQ1Ny42OTM2MiBMMjA5My40MDgsMTQzLjMwNjM4IFogTTE3OTMuODIwMTEsMzI3LjIwMTcwNyBMMTg0OS40MzI5OCwzMjcuMjAxNzA3IEMxODM5LjA5MTUxLDI3NS4wOTAyMDcgMTc5NC4yNTExOCwyMzguNDgxNjc1IDE3NDAuNzkzNjgsMjM4LjQ4MTY3NSBDMTY3OC43MTkwMSwyMzguNDgxNjc1IDE2MjguMjc5MDIsMjg1LjQyNTUxOCAxNjI4LjI3OTAyLDM1MC40NTYxNTYgQzE2MjguMjc5MDIsNDE1LjA1NjE1NiAxNjc4LjcxOTAxLDQ2MiAxNzQwLjc5MzY4LDQ2MiBDMTc5NC4yNTExOCw0NjIgMTgzOS4wOTE1MSw0MjcuMTE0MDE5IDE4NDkuNDMyOTgsMzc1LjAwMjUyIEwxNzkzLjgyMDExLDM3NS4wMDI1MiBDMTc4NS4xOTg2MiwzOTguMjYxMjc2IDE3NjQuOTQyNDUsNDEyLjkwMjk2NiAxNzQwLjc5MzY4LDQxMi45MDI5NjYgQzE3MDguNDYzMTIsNDEyLjkwMjk2NiAxNjgyLjU5ODY3LDM4Ny40OTUzMjcgMTY4Mi41OTg2NywzNTEuMzE3NDMyIEMxNjgyLjU5ODY3LDMxNC4yODI1NjggMTcwOC40NjMxMiwyODkuMzAxMjYgMTc0MC43OTM2OCwyODkuMzAxMjYgQzE3NjQuOTQyNDUsMjg5LjMwMTI2IDE3ODUuMTk4NjIsMzAzLjk0Mjk1IDE3OTMuODIwMTEsMzI3LjIwMTcwNyBaIE0xNTQ5LjI3NjA3LDQ1Ny42OTM2MiBMMTYwNC4wMTgxNyw0NTcuNjkzNjIgTDE2MDQuMDE4MTcsMjQyLjc5MjM2MSBMMTU0OS4yNzYwNywyNDIuNzkyMzYxIEwxNTQ5LjI3NjA3LDQ1Ny42OTM2MiBaIE0xNTQxLjUxMjQyLDE4MC43NzYxODggQzE1NDEuNTEyNDIsMjAwLjE1NDg5NiAxNTU3LjQ2NjQ4LDIxNi4wODg1MDEgMTU3Ni40MzM3NCwyMTYuMDg4NTAxIEMxNTk1LjgzMjA3LDIxNi4wODg1MDEgMTYxMS43ODE4MiwyMDAuMTU0ODk2IDE2MTEuNzgxODIsMTgwLjc3NjE4OCBDMTYxMS43ODE4MiwxNjEuMzk3NDggMTU5NS44MzIwNywxNDUuNDU5NTY5IDE1NzYuNDMzNzQsMTQ1LjQ1OTU2OSBDMTU1Ny40NjY0OCwxNDUuNDU5NTY5IDE1NDEuNTEyNDIsMTYxLjM5NzQ4IDE1NDEuNTEyNDIsMTgwLjc3NjE4OCBaIE0xMzc0LjM4NDk5LDI2OS40ODc2MDcgTDEzNzQuMzg0OTksMjQyLjc4ODA1NCBMMTMxOS42MzQyNywyNDIuNzg4MDU0IEwxMzE5LjYzNDI3LDQ1Ny42OTM2MiBMMTM3NC4zODQ5OSw0NTcuNjkzNjIgTDEzNzQuMzg0OTksMzI3LjYyODAzOCBDMTM3NC4zODQ5OSwzMDIuNjU1MzQzIDEzOTMuNzgzMzIsMjgyLjg0MTY5MSAxNDE5LjIyMTAxLDI4Mi44NDE2OTEgQzE0NDUuNTEyMjIsMjgyLjg0MTY5MSAxNDY0LjA1MjcyLDMwMS43ODk3NjEgMTQ2NC4wNTI3MiwzMjkuNzgxMjI4IEwxNDY0LjA1MjcyLDQ1Ny42OTM2MiBMMTUxOC44MDM0NCw0NTcuNjkzNjIgTDE1MTguODAzNDQsMzI1LjQ3NDg0OCBDMTUxOC44MDM0NCwyNzUuMDkwMjA3IDE0ODkuOTE3MTYsMjM4LjA1NTM0MyAxNDM4LjYxOTM0LDIzOC4wNTUzNDMgQzE0MTEuMDI2MjksMjM4LjA1NTM0MyAxMzg3LjMxNzIxLDI1MC4xMDg4OTkgMTM3NC4zODQ5OSwyNjkuNDg3NjA3IFogTTExODEuMzM3MDcsMjg4Ljg3MDYyMiBDMTE0OC4xNDQzNiwyODguODcwNjIyIDExMjEuODQ0NTMsMzEzLjg0NzYyMyAxMTIxLjg0NDUzLDM1MC44ODY3OTQgQzExMjEuODQ0NTMsMzg3LjA2MDM4MyAxMTQ4LjE0NDM2LDQxMi40NzIzMjkgMTE4MS4zMzcwNyw0MTIuNDcyMzI5IEMxMjE0LjUzNDA4LDQxMi40NzIzMjkgMTI0MC44MjUzLDM4Ny4wNjAzODMgMTI0MC44MjUzLDM1MC44ODY3OTQgQzEyNDAuODI1MywzMTMuODQ3NjIzIDEyMTQuNTM0MDgsMjg4Ljg3MDYyMiAxMTgxLjMzNzA3LDI4OC44NzA2MjIgWiBNMTE4MS4zMzcwNyw0NjIgQzExMTguMzkxNjIsNDYyIDEwNjcuNTI5MTksNDE1LjA1NjE1NiAxMDY3LjUyOTE5LDM1MC40NTYxNTYgQzEwNjcuNTI5MTksMjg1LjQyNTUxOCAxMTE4LjM5MTYyLDIzOC40ODE2NzUgMTE4MS4zMzcwNywyMzguNDgxNjc1IEMxMjQ0LjI3ODIsMjM4LjQ4MTY3NSAxMjk1LjE0OTI2LDI4NS40MjU1MTggMTI5NS4xNDkyNiwzNTAuNDU2MTU2IEMxMjk1LjE0OTI2LDQxNS4wNTYxNTYgMTI0NC4yNzgyLDQ2MiAxMTgxLjMzNzA3LDQ2MiBaIE05OTUuODAyNzY3LDI0Mi43ODgwNTQgTDk0MS4wNDc3MzIsMjQyLjc4ODA1NCBMOTQxLjA0NzczMiw0NTcuNjkzNjIgTDk5NS44MDI3NjcsNDU3LjY5MzYyIEw5OTUuODAyNzY3LDM0My45OTY1ODcgQzk5NS44MDI3NjcsMzE0LjcwODg5OSAxMDIxLjY2NzIxLDI4NC4xMzM2MDQgMTA2NS42NDEwOCwyOTEuMDIzODEyIEwxMDY1LjY0MTA4LDIzOC45MTY2MTkgQzEwMzIuNDQ0MDcsMjM1LjAzNjU3MSAxMDA4LjczNDk5LDI1My41NTQwMDMgOTk1LjgwMjc2NywyODEuNTQ5Nzc3IEw5OTUuODAyNzY3LDI0Mi43ODgwNTQgWiBNMjQ1OC44ODEyNiwxNzkuOTE0OTEyIEwyNDA0Ljk5Njk5LDE5Ny4xNDA0MzEgTDI0MDQuOTk2OTksNDAyLjEzNzAxOCBDMjQwNC45OTY5OSw0MzUuMjk2MTQgMjQyOC4yNzkzLDQ1Ny42OTM2MiAyNDY3LjkzMzgxLDQ1Ny42OTM2MiBMMjUyMS4zOTU2Miw0NTcuNjkzNjIgTDI1MjEuMzk1NjIsNDA5LjAyNzIyNSBMMjQ4My40NjExLDQwOS4wMjcyMjUgQzI0NjYuNjQ0OSw0MDkuMDI3MjI1IDI0NTguODgxMjYsNDAxLjI3NTc0MiAyNDU4Ljg4MTI2LDM4Ny4wNjAzODMgTDI0NTguODgxMjYsMjg5LjMwMTI2IEwyNTIxLjM5NTYyLDI4OS4zMDEyNiBMMjUyMS4zOTU2MiwyNDIuNzg4MDU0IEwyNDU4Ljg4MTI2LDI0Mi43ODgwNTQgTDI0NTguODgxMjYsMTc5LjkxNDkxMiBaIE04NTcuNjU2NDQ0LDE3OS45MTQ5MTIgTDgwMy43NzIxNzksMTk3LjE0MDQzMSBMODAzLjc3MjE3OSw0MDIuMTM3MDE4IEM4MDMuNzcyMTc5LDQzNS4yOTYxNCA4MjcuMDUwMTgyLDQ1Ny42OTM2MiA4NjYuNzA0NjksNDU3LjY5MzYyIEw5MjAuMTcwODEzLDQ1Ny42OTM2MiBMOTIwLjE3MDgxMyw0MDkuMDI3MjI1IEw4ODIuMjMxOTc5LDQwOS4wMjcyMjUgQzg2NS40MjAwODksNDA5LjAyNzIyNSA4NTcuNjU2NDQ0LDQwMS4yNzU3NDIgODU3LjY1NjQ0NCwzODcuMDYwMzgzIEw4NTcuNjU2NDQ0LDI4OS4zMDEyNiBMOTIwLjE3MDgxMywyODkuMzAxMjYgTDkyMC4xNzA4MTMsMjQyLjc4ODA1NCBMODU3LjY1NjQ0NCwyNDIuNzg4MDU0IEw4NTcuNjU2NDQ0LDE3OS45MTQ5MTIgWiBNNzMwLjYwMTY1OCwzMjcuMjAxNzA3IEw3ODYuMjEwMjIsMzI3LjIwMTcwNyBDNzc1Ljg2NDQ0MSwyNzUuMDkwMjA3IDczMS4wMzI3MzIsMjM4LjQ4MTY3NSA2NzcuNTc1MjMxLDIzOC40ODE2NzUgQzYxNS41MDA1NTgsMjM4LjQ4MTY3NSA1NjUuMDYwNTc2LDI4NS40MjU1MTggNTY1LjA2MDU3NiwzNTAuNDU2MTU2IEM1NjUuMDYwNTc2LDQxNS4wNTYxNTYgNjE1LjUwMDU1OCw0NjIgNjc3LjU3NTIzMSw0NjIgQzczMS4wMzI3MzIsNDYyIDc3NS44NjQ0NDEsNDI3LjExNDAxOSA3ODYuMjEwMjIsMzc1LjAwMjUyIEw3MzAuNjAxNjU4LDM3NS4wMDI1MiBDNzIxLjk4MDE3NiwzOTguMjYxMjc2IDcwMS43MTUzODIsNDEyLjkwMjk2NiA2NzcuNTc1MjMxLDQxMi45MDI5NjYgQzY0NS4yNDQ2NzIsNDEyLjkwMjk2NiA2MTkuMzgwMjI1LDM4Ny40OTUzMjcgNjE5LjM4MDIyNSwzNTEuMzE3NDMyIEM2MTkuMzgwMjI1LDMxNC4yODI1NjggNjQ1LjI0NDY3MiwyODkuMzAxMjYgNjc3LjU3NTIzMSwyODkuMzAxMjYgQzcwMS43MTUzODIsMjg5LjMwMTI2IDcyMS45ODAxNzYsMzAzLjk0Mjk1IDczMC42MDE2NTgsMzI3LjIwMTcwNyBaIE00ODcuMTM5NjE4LDMyOC45MjQyNTggQzQ4Mi4zOTc4MDMsMzAzLjUxNjYxOSA0NTkuOTc3NjM4LDI4NS44NTYxNTYgNDM0LjUzOTk1NCwyODUuODU2MTU2IEM0MDkuMTA2NTgxLDI4NS44NTYxNTYgMzg3Ljk4Mzk0OSwzMDIuNjU1MzQzIDM4MC42NTU2ODksMzI4LjkyNDI1OCBMNDg3LjEzOTYxOCwzMjguOTI0MjU4IFogTTU0Ni4yMDEwODMsMzY4LjExMjMxMyBMMzgwLjIyODkyNiwzNjguMTEyMzEzIEMzODcuNTUyODc1LDM5NS4yNDY4MSA0MTEuNjkzMDI2LDQxMy4zMzM2MDQgNDQxLjAwNjA2Niw0MTMuMzMzNjA0IEM0NTcuODIyMjY3LDQxMy4zMzM2MDQgNDczLjMzNjYyNSw0MDYuODc0MDM1IDQ4Mi4zOTc4MDMsMzkzLjUxOTk1MiBMNTQzLjE3OTI1MywzOTMuNTE5OTUyIEM1MjYuODAyNzQ4LDQzNC44NjU1MDIgNDg3Ljk5NzQ1NSw0NjIgNDQwLjE0ODIyOCw0NjIgQzM3NS40Nzg0ODksNDYyIDMyMi44OTE3NTcsNDE0LjYyNTUxOCAzMjIuODkxNzU3LDM1MC4wMjU1MTggQzMyMi44OTE3NTcsMjg0Ljk5NDg4IDM3Mi44OTYzNTUsMjM4LjA1NTM0MyA0MzQuNTM5OTU0LDIzOC4wNTUzNDMgQzQ4Ny45OTc0NTUsMjM4LjA1NTM0MyA1NDYuNjI3ODQ2LDI3Ny4yNDMzOTcgNTQ2LjYyNzg0NiwzNTkuOTMwMTkxIEM1NDYuNjI3ODQ2LDM2Mi41MTQwMTkgNTQ2LjIwMTA4MywzNjUuMTAyMTUzIDU0Ni4yMDEwODMsMzY4LjExMjMxMyBaIE0yNDMuODk3NDI1LDQ1Ny42OTM2MiBMMjk4LjY0ODE0OSw0NTcuNjkzNjIgTDI5OC42NDgxNDksMTM5IEwyNDMuODk3NDI1LDE1Ni4yMjk4MjUgTDI0My44OTc0MjUsNDU3LjY5MzYyIFogTTAsMTU2LjIyOTgyNSBMMjE5LjAwNzIwNiwxNTYuMjI5ODI1IEwyMTkuMDA3MjA2LDIwOS4xOTgyOTMgTDYwLjM1ODk5OCwyMDkuMTk4MjkzIEw2MC4zNTg5OTgsMjc5LjgyNzIyNSBMMTg4LjgyMzM5NiwyNzkuODI3MjI1IEwxODguODIzMzk2LDMzMS45MzQ0MTggTDYwLjM1ODk5OCwzMzEuOTM0NDE4IEw2MC4zNTg5OTgsNDA1LjU4MjEyMSBMMjE5LjAwNzIwNiw0MDUuNTgyMTIxIEwyMTkuMDA3MjA2LDQ1Ny42OTM2MiBMMCw0NTcuNjkzNjIgTDAsMTU2LjIyOTgyNSBaIi8+PC9zdmc+" alt="Electronic Arts"></div><div class="ef-brand" data-publisher="rockstar"><img class="ef-emblem" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTYgMTk4LjgiIGZpbGw9IiNmM2VkZGUiPjxwYXRoIGQ9Im0gMjE0LjUsMTk3LjQgYyAtMSwxIC0yLjEsMS41IC0zLjUsMS41IC0xLjQsMCAtMi41LC0wLjUgLTMuNSwtMS41IC0xLC0xIC0xLjQsLTIuMSAtMS40LC0zLjUgMCwtMS40IDAuNSwtMi41IDEuNCwtMy41IDEsLTEgMi4xLC0xLjQgMy41LC0xLjQgMS40LDAgMi41LDAuNSAzLjUsMS40IDEsMSAxLjUsMi4xIDEuNSwzLjUgMCwxLjMgLTAuNSwyLjUgLTEuNSwzLjUgeiBtIC02LjUsLTYuNSBjIC0wLjgsMC44IC0xLjIsMS44IC0xLjIsMyAwLDEuMiAwLjQsMi4yIDEuMiwzIDAuOCwwLjggMS44LDEuMyAzLDEuMyAxLjIsMCAyLjIsLTAuNCAzLC0xLjMgMC44LC0wLjggMS4yLC0xLjggMS4yLC0zIDAsLTEuMiAtMC40LC0yLjIgLTEuMiwtMyAtMC44LC0wLjggLTEuOCwtMS4yIC0zLC0xLjIgLTEuMSwtMC4xIC0yLjEsMC4zIC0zLDEuMiB6IG0gMywwLjIgYyAwLjcsMCAxLjIsMC4xIDEuNSwwLjIgMC42LDAuMiAwLjgsMC43IDAuOCwxLjQgMCwwLjUgLTAuMiwwLjggLTAuNSwxLjEgLTAuMiwwLjEgLTAuNSwwLjIgLTAuOCwwLjMgMC40LDAuMSAwLjcsMC4yIDAuOSwwLjUgMC4yLDAuMyAwLjMsMC42IDAuMywwLjggbCAwLDEuMiAtMC45LDAgMCwtMC43IGMgMCwtMC42IC0wLjIsLTEgLTAuNSwtMS4yIC0wLjIsLTAuMSAtMC42LC0wLjIgLTEuMSwtMC4yIGwgLTAuNywwIDAsMi4xIC0xLDAgMCwtNS40IDIsMCB6IG0gMSwwLjkgYyAtMC4yLC0wLjEgLTAuNiwtMC4yIC0xLjIsLTAuMiBsIC0wLjgsMCAwLDEuOSAwLjksMCBjIDAuNCwwIDAuNywwIDAuOSwtMC4xIDAuNCwtMC4xIDAuNiwtMC40IDAuNiwtMC44IDAsLTAuNCAtMC4yLC0wLjYgLTAuNCwtMC44IHoiIGZpbGw9IiMyNDFjMTIiIC8+PHBhdGggZD0iTSAxNzguNCwwIDM4LjMsMCBDIDE3LjIsMCAwLDE2LjcgMCwzNy4xIGwgMCwxMjQuNSBjIDAsMjAuNyAxNi42LDM3IDM3LjksMzcgbCAxNDAuMiwwIGMgMjEuMywwIDM3LjksLTE2LjMgMzcuOSwtMzcgTCAyMTYsMzcuMSBDIDIxNiwxNi4zIDE5OS41LDAgMTc4LjQsMCBtIDMzLjMsMTYxLjYgYyAwLDE4LjQgLTE0LjgsMzIuNyAtMzMuNywzMi43IGwgLTE0MC4xLDAgQyAxOSwxOTQuNCA0LjMsMTgwIDQuMywxNjEuNiBMIDQuMywzNy4xIEMgNC4zLDE4LjcgMTkuMiw0LjIgMzguMyw0LjIgbCAxNDAuMiwwIGMgMTguNywwIDMzLjMsMTQuNCAzMy4zLDMyLjkgbCAwLDEyNC41IHoiIGZpbGw9IiMyNDFjMTIiIC8+PHBhdGggZD0ibSAyMTEuNywxNjEuNiBjIDAsMTguNCAtMTQuOCwzMi43IC0zMy43LDMyLjcgbCAtMTQwLjEsMCBDIDE5LDE5NC40IDQuMywxODAgNC4zLDE2MS42IEwgNC4zLDM3LjEgQyA0LjMsMTguNyAxOS4yLDQuMiAzOC4zLDQuMiBsIDE0MC4yLDAgYyAxOC43LDAgMzMuMywxNC40IDMzLjMsMzIuOSBsIDAsMTI0LjUgeiIgZmlsbD0iI2YzZWRkZSIgLz48cGF0aCBkPSJtIDE3MywxMjIuMSAtMTcuOSwwIC0zLjEsLTE5LjUgLTExLjUsMTkuMyAtMTguMSwwIDExLDExLjYgLTksMTkuNSAxOS44LC0xMS44IDE1LjUsMTIgLTIuOSwtMTkuNyIgZmlsbD0iI2YzZWRkZSIgLz48cGF0aCBkPSJtIDE4NS41LDExOC4yIC0yNy4xLDAgLTQuMywtMjcgLTE1LjgsMjYuOCAtMywwIGMgLTEuOCwtMy4xIC0yLjUsLTcuNiAtMi41LC0xMC40IDAsLTQuNiAwLjMsLTkuMSAwLjMsLTE1IDAsLTcuOCAtMi4zLC0xMS45IC04LjQsLTEzLjQgbCAwLC0wLjIgYyAxMi45LC0xLjggMTguOCwtMTAuNCAxOC44LC0yMi40IDAsLTE3LjEgLTExLjQsLTIwLjggLTI2LjMsLTIwLjggbCAtNDAuMSwwIC0xNyw4MC40IDIxLjMsMCA2LjIsLTI5LjMgMTQuMiwwIGMgNy42LDAgMTAuNywzLjcgMTAuNywxMC44IDAsNS40IC0wLjYsOS43IC0wLjYsMTMuOCAwLDEuNSAwLjMsNS4xIDEuNCw2LjUgbCAxNS40LDE2LjMgLTEzLjMsMjguNSAyOC40LC0xNi45IDIxLjIsMTYuMyAtMy45LC0yNi45IDI0LjQsLTE3LjEgeiBtIC03Ny4zLC00Ni4zIC0xNywwIDQuMSwtMTkuNCAxNS44LDAgYyA1LjYsMCAxMS41LDEuNSAxMS41LDguMyAwLDguNyAtNi43LDExLjEgLTE0LjQsMTEuMSBtIDM2LDY5LjMgLTE5LjgsMTEuOCA5LjEsLTE5LjQgLTExLC0xMS42IDE4LjEsMCAxMS40LC0xOS4zIDMuMSwxOS41IDE4LDAgLTE2LjIsMTEuMyAyLjksMTkuOCAtMTUuNiwtMTIuMSB6IiBmaWxsPSIjMjQxYzEyIiAvPjwvc3ZnPg==" alt=""><img class="ef-word" src="/images/bento/asset-01.png" alt="Rockstar Games"></div><div class="ef-brand" data-publisher="ubisoft"><img class="ef-emblem" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjExNSAwIDc3MCA3MDYiIGZpbGw9IiNmM2VkZGUiPjxwYXRoIGQ9Ik00ODEuNTE2IDBjLTIwNi43OTggMC0yOTYuMDYgMTg0LjA3Mi0yOTYuMDYgMTg0LjA3MmwyNi4yNzUgMTguODFzLTMzLjA2NSA2Mi44NzktMzIuMTUgMTQzLjUzYzAgMTY0LjY0IDEzMS4wNTggMzE5LjczMiAzMjMuOTg2IDMxOS43MzIgMTc1LjI2OCAwIDMyMC4wNS0xNDIuNjU3IDMyMC4wNS0zMTkuMzI3QzgyMy42MTcgMTE2LjM5OSA2NDQuOTM1IDAgNDgxLjUxNyAwem0xLjc5NCA1Ni4xNjhjMTYxLjU3MSAwIDI4Ni45NDYgMTMwLjIgMjg2Ljk0NiAyODEuNTYzIDAgMTYwLjQ1NS0xMjAuNjggMjcyLjA0Mi0yNjEuMzA3IDI3Mi4wNDItMTAzLjQ5OCAwLTE5Ni44NjMtNzguODE2LTE5Ni44NjMtMTg2Ljg3OSAwLTYyLjQxNCAzMy4xNzQtMTA1LjkyOCA3MC4zNDgtMTI5LjExOWw1LjQ0IDUuOTAzYy0xMC4xNzMgNy45Ni0zOS4xODEgNTQuNTU3LTM5LjE4MSAxMDAuMzU2IDAgODUuMDIyIDY2LjY3NCAxNDMuOTA2IDE1MC42NzggMTQzLjkwNiAxMDcuMDA2IDAgMTc4LjM3MS05MS4yNjcgMTc4LjM3MS0xOTcuMjM4IDAtMTIzLjI5Ni0xMDguODMzLTIyNy45NzEtMjM5LjgwNi0yMjcuOTcxLTcyLjQ0MiAwLTEzMy45MjYgMzEuMTU0LTE2OS4yNTYgNTguNjU3bC01LjQ5OC00Ljk3N0MzMDkuNDAzIDEwMS4xNDQgMzg5LjQ0NiA1Ni4xNjggNDgzLjMxIDU2LjE2OHptLTQ4LjIxIDExNy45NWM4My41OCAwIDE2NS4xOCA1NS4yOTMgMTg1LjU0OCAxMzMuNzc4bC03LjQwOCAyLjgwN2MtMzYuNTcxLTQ4LjI5NC05Ni40OTYtODguMzE3LTE2Ny4yNi04OC4zMTctMTMwLjIxMiAwLTE5OC41OTYgMTE4LjMyMy0xODguNTU3IDIxNy4xNDdsLTcuNjY4IDIuODA4cy0xNC4zODItMzEuNzM0LTE0LjM4Mi02OS4zNjRjMC0xMDguOTcgODkuNDg4LTE5OC44NiAxOTkuNzI3LTE5OC44NnptNTUuMjQyIDEzNi43NThjMzkuNTcgMCA3MS4yMTYgMzIuMDczIDcxLjIxNiA3MC4xNDYgMCAzMS41MDYtMjAuMjI4IDUwLjE3OC0yMC4yMjggNTAuMTc4bDIzLjk2IDE2Ljc1NHMtMjMuNzU5IDM3LjMwMS03Mi4yNTcgMzcuMzAxYy00Ni4zOTEgMC04Ny40Mi0zNy40NDQtODcuNDItODcuNzk3IDAtNTEuODg0IDQ0LjYyOS04Ni41ODIgODQuNzMtODYuNTgyeiIvPjwvc3ZnPg==" alt=""><img class="ef-word" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgNzIxIDEwMDAgMTk0IiBmaWxsPSIjZjNlZGRlIj48cGF0aCBkPSJNMCA3MjcuNjF2MTExLjYyYzAgNDUuMzIyIDMwLjg5NSA3NC4yMSA3NS44OTEgNzQuMjEgNDcuMzMgMCA3Ni4zLTMwLjQ2NCA3Ni4zLTc3LjI2N1Y3MjcuNjFoLTQwLjA2djEwNi41MjRjMCAyNS41Mi0xMi44NTIgNDEuMzQ2LTM1LjgxMyA0MS4zNDYtMjUuMTY0IDAtMzYuMjU3LTE4LjItMzYuMjU3LTM5LjMwN1Y3MjcuNjF6TTE3MS42NjggNzI5LjE1MnYxODIuNDY3aDYzLjgwNmMzNS4zMzkgMCA2NS4zNjctMTguMDI0IDY1LjM2Ny01My43NzIgMC0zNy4zMTQtMzIuNjUyLTQ1LjU4NS0zMi42NTItNDUuNTg1czI0LjE3OC02LjcxNiAyNC4xNzgtMzguNjRjMC0zMS45MDMtMzAuNTYtNDQuNDctNTYuODkzLTQ0LjQ3aC02My44MDZ6bTQwLjM2IDM0LjY1OGgxOS4zNjljMTMuNDQyIDAgMjIuMDQzIDcuMDggMjIuMDQzIDE5LjQgMCAxMS4wMi03LjI5NyAxOS4zMzYtMjEuMDI0IDE5LjMzNmgtMjAuMzg3Vjc2My44MXptMCA2Ny4yNzloMjEuNDA3YzIwLjEzIDAgMjcuMTEgMTAuMzQgMjcuMTEgMjIuNjggMCAxNC4zNTktOS4wMjkgMjIuNzc3LTI1LjA3MSAyMi43NzdoLTIzLjQ0NVY4MzEuMDl6TTMxNi4wMDQgNzI5LjEzOWg0MC4yNjV2MTgyLjQ2N2gtNDAuMjY1ek03NTUuMzUyIDkxMS42MDZoLTQwLjI2NVY3MjkuMTM5aDEyNi40MDF2MzcuNzE3aC04Ni4xMzZ2NDEuNzk0aDc4LjQ5MXYzMC41OGgtNzguNDkxek04NTYuMjcgNzI5LjEzOXYzNy43MTdoNTEuOTg3djE0NC43NWg0MC43NzV2LTE0NC43NUgxMDAwdi0zNy43MTd6TTQwMi4yMzYgODUwLjkzNGwtMzEuOTg3IDIzLjM4N3MxMS4wNTMgNDAuNDI1IDY2LjQ2NSA0MC40MjVjMzYuOSAwIDY0LjA1My0yMS41MzQgNjQuMDUzLTU5LjM5MiAwLTYxLjAxMS04NS4zMS00OC4wNjgtODUuMzEtNzkuNDQ0IDAtOC4yNTcgNy4zNDMtMTUuNTUxIDIwLjg5NS0xNS41NTEgMjEuNzQ0IDAgMzAuMDA4IDIxLjMzIDMwLjAwOCAyMS4zM2wzMS45OTYtMjIuNDU1cy0xMi40OTctMzMuMzEzLTYwLjM5Ny0zMy4zMTNjLTM5LjM2NSAwLTYwLjI3NiAyNS4yNTUtNjAuMjc2IDUxLjMxNSAwIDYyLjE3NSA4Mi44MjYgNDguNjggODIuODI2IDgxLjMxIDAgMTEuMDExLTguNjc3IDE5LjEwMi0yMi4xOTEgMTkuMDA5LTI2Ljc3NSAwLTM2LjA4Mi0yNi42MjEtMzYuMDgyLTI2LjYyMXpNNjA0Ljc0IDcyNS44MzdjLTQ3LjQxNyAwLTY4LjU1MiAyNS43MzktNjguNTUyIDI1LjczOWw2LjExNiA2LjExNnMtMzAuNjc3IDIxLjc5LTMwLjY3NyA2OC41ODRjMCA1My44NDUgNDEuNTI3IDg4LjQzIDkzLjMzNiA4OC40MyA2MC4xOTggMCA5NC4zNTUtNDQuNDE4IDk0LjM1NS05NC4zNTUgMC01My4yNS0zOC45OTYtOTQuNTE0LTk0LjU3OC05NC41MTR6bS44NiAzNy44NzZjMzIuMTUgMCA1My4wMDcgMjQuNTczIDUzLjAwNyA1Ni40NzkgMCAzMS41NzUtMjAuNjA4IDU2LjgzLTUzLjAwNyA1Ni44My0zMi4wMDkgMC01My4wMzktMjIuMzUyLTUzLjAzOS01Mi4wMiAwLTI3LjAwMSAxOC4yODUtMzguNzY4IDE4LjI4NS0zOC43NjhsLTYuNjI2LTYuNjI2czE0LjA5OS0xNS44OTUgNDEuMzgtMTUuODk1eiIvPjwvc3ZnPg==" alt="Ubisoft"></div></div></article>
</div></section>
    <section id="use-cases" class="catalog-section" aria-labelledby="catalog-title"><h2 id="catalog-title">Katalog Game</h2><div class="catalog-grid"><figure><img class="game-cover" width="600" height="900" alt="Phantom Blade Zero" src="/images/catalog/game-01.jpg"></figure><figure><img class="game-cover" width="600" height="900" alt="Onimusha: Way of the Sword" src="/images/catalog/game-02.jpg"></figure><figure><img class="game-cover" width="600" height="900" alt="Resident Evil Requiem" src="/images/catalog/game-03.jpg"></figure><figure><img class="game-cover" width="600" height="900" alt="EA SPORTS FC 27" src="/images/catalog/game-04.jpg"></figure><figure><img class="game-cover" width="600" height="900" alt="Assassin's Creed Black Flag Resynced" decoding="async" src="/images/catalog/game-05.jpg"></figure><figure><img class="game-cover" width="600" height="900" alt="Crimson Desert Enhanced" decoding="async" src="/images/catalog/game-06.jpg"></figure><figure><img class="game-cover" width="600" height="900" alt="The Blood of Dawnwalker" decoding="async" src="/images/catalog/game-07.jpg"></figure><figure><img class="game-cover" width="600" height="900" alt="FINAL FANTASY RESONANCE" decoding="async" src="/images/catalog/game-08.jpg"></figure></div><div class="catalog-invite">
        <p>Ingin menjelajahi daftar game lengkap?</p>
        <a class="catalog-browse" href="/catalog">Jelajahi daftar game <span aria-hidden="true">↗</span></a>
        <small id="catalog-availability">217.000+ game Steam — cari, filter &amp; cek detail langsung.</small>
      </div></section>
    <section id="pricing" data-backdrop="pricing" aria-labelledby="pricing-title" class="pricing-section">
      <div class="pricing-intro">
        <h2 id="pricing-title">Pilih paket ElitePlay</h2>
        <p>Sekali bayar untuk menambah game ke Steam seumur hidup. Standard untuk 1 PC Windows, Premium untuk 2 PC sekaligus.</p>
      </div>
      <div class="pricing-column" id="pricing-plans">
        <article class="pricing-panel" aria-labelledby="plan-standard">
          <div class="plan-heading">
            <h3 id="plan-standard">Standard</h3>
          </div>
          <p class="plan-price"><strong>Rp99.000</strong><span>sekali bayar</span></p>
          <ul class="plan-features">
            <li><span class="pricing-row-2" aria-hidden="true">&#10003;</span><span>60.000+ game Steam dalam katalog tetap</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Main di akun Steam sendiri</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>DLC game termasuk</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Cloud save di akun sendiri</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Achievement di profil Steam</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Main di 1 PC Windows</span></li>
            <li><span class="pricing-row-2 plan-unavailable" role="img" aria-label="Tidak termasuk">&#215;</span><span>Penambahan game baru</span></li>
            <li><span class="pricing-row-2 plan-unavailable" role="img" aria-label="Tidak termasuk">&#215;</span><span>Game Pass Offline</span></li>
            <li><span class="pricing-row-2 plan-unavailable" role="img" aria-label="Tidak termasuk">&#215;</span><span>Aktivasi game Denuvo</span></li>
            <li><span class="pricing-row-2 plan-unavailable" role="img" aria-label="Tidak termasuk">&#215;</span><span>Aktivasi EA, Rockstar &amp; Ubisoft</span></li>
          </ul>
          <button type="button" class="pick-plan z-action" data-plan="Standard" aria-pressed="false">Pilih Standard</button>
        </article>
        <article class="pricing-panel plan-premium" aria-labelledby="plan-premium">
          <div class="plan-heading">
            <h3 id="plan-premium">Premium</h3>
            <span class="plan-badge">Paling Laris</span>
          </div>
          <p class="plan-price"><strong>Rp199.000</strong><span>sekali bayar</span></p>
          <ul class="plan-features">
            <li><span class="pricing-row-2" aria-hidden="true">&#10003;</span><span>211.000+ game Steam</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Main di akun Steam sendiri</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>DLC game termasuk</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Cloud save di akun sendiri</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Achievement di profil Steam</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Main di 2 PC Windows sekaligus</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Game baru ditambahkan setiap hari</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>800+ game Game Pass Offline</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Aktivasi game Denuvo (1 bulan)</span></li>
            <li><span class="pricing-row-2" role="img" aria-label="Termasuk">&#10003;</span><span>Aktivasi EA, Rockstar &amp; Ubisoft (1 bulan)</span></li>
          </ul>
          <button type="button" class="pick-plan z-action" data-plan="Premium" aria-pressed="false">Pilih Premium</button>
        </article>
      </div>
      <p class="pricing-selection" role="status"></p>
      <p class="plan-renewal">Premium mencakup 1 bulan aktivasi Denuvo dan launcher pihak ketiga. Setelah itu, kamu bisa memperpanjang mulai Rp60.000/bulan untuk aktivasi berikutnya. Akses <em>Add to Steam</em> tetap berlaku.</p>
    </section>
<section id="testimoni" class="ep-reviews" aria-labelledby="ep-review-title"><header><div><h2 id="ep-review-title">Kata mereka yang sudah main.</h2><p>Ulasan pemain ElitePlay dari Shopee dan Discord.</p></div></header><div class="ep-review-row" data-origin="Shopee"><h3><i aria-hidden="true"></i>Shopee</h3><div class="ep-review-window" role="region" aria-label="Ulasan pembeli Shopee" tabindex="0"><div class="ep-review-track"><div class="ep-review-set"><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-01.jpg" alt="Ulasan Shopee tentang pengalaman setelah checkout" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-02.jpg" alt="Ulasan Shopee tentang pilihan game dan respons admin" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-03.jpg" alt="Ulasan Shopee tentang koleksi game paket Standard" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-04.jpg" alt="Ulasan Shopee tentang pemasangan paket Premium" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-05.jpg" alt="Ulasan Shopee tentang panduan instalasi" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-06.jpg" alt="Ulasan Shopee tentang kecepatan respons admin" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-07.jpg" alt="Ulasan Shopee tentang layanan setelah pembelian" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-08.jpg" alt="Ulasan Shopee tentang LEGO Batman dan 007 First Light" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-09.jpg" alt="Ulasan Shopee tentang pengalaman menambahkan game ke Steam" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-10.jpg" alt="Ulasan Shopee tentang kemudahan instalasi" decoding="async" loading="lazy"></figure></div></div></div></div></div><div class="ep-review-row" data-origin="Discord"><h3><i aria-hidden="true"></i>Discord</h3><div class="ep-review-window" role="region" aria-label="Testimoni anggota Discord" tabindex="0"><div class="ep-review-track"><div class="ep-review-set"><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-11.jpg" alt="Testimoni Discord tentang dukungan admin setelah pembelian" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-12.jpg" alt="Testimoni Discord tentang pengalaman bermain Assassin’s Creed Shadows" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-13.jpg" alt="Testimoni Discord tentang bantuan untuk bermain Digimon Story Time Stranger" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-14.jpg" alt="Testimoni Discord tentang bantuan admin saat bermain Construction Simulator" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-15.jpg" alt="Testimoni Discord tentang pengalaman bermain Monster Hunter Wilds" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-16.jpg" alt="Testimoni Discord tentang keberhasilan memainkan Assassin’s Creed Shadows" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-17.jpg" alt="Testimoni Discord tentang pengalaman anggota di menu game sepak bola" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-18.jpg" alt="Testimoni Discord tentang pengalaman bermain Demon Slayer" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-19.jpg" alt="Testimoni Discord tentang tampilan karier di EA Sports FC" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-20.jpg" alt="Testimoni Discord tentang pengalaman bermain Hello Kitty Island Adventure" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-21.jpg" alt="Testimoni Discord tentang pengalaman mencoba koleksi game" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-22.jpg" alt="Testimoni Discord tentang bantuan admin pada malam hari" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-23.jpg" alt="Testimoni Discord tentang keberhasilan memainkan Digimon" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-24.jpg" alt="Testimoni Discord tentang pengalaman bermain FC 26" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-25.jpg" alt="Testimoni Discord tentang bantuan admin untuk menjalankan game" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-26.jpg" alt="Testimoni Discord tentang DLC Separate Ways di Resident Evil 4" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-27.jpg" alt="Testimoni Discord tentang bantuan admin saat menemui kendala" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-28.jpg" alt="Testimoni Discord tentang bantuan saat menjalankan Demon Slayer" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-29.jpg" alt="Testimoni Discord tentang keberhasilan memainkan Anno" decoding="async" loading="lazy"></figure></div><div class="ep-review-slot"><figure class="ep-review-shot"><img src="/images/testimonials/review-30.jpg" alt="Testimoni Discord tentang layanan admin dan tampilan menu game" decoding="async" loading="lazy"></figure></div></div></div></div></div><svg aria-hidden="true" width="0" height="0" style="position:absolute"><defs><filter id="ep-review-sharpen" color-interpolation-filters="sRGB"><feConvolveMatrix order="3" kernelMatrix="0 -0.12 0 -0.12 1.48 -0.12 0 -0.12 0" preserveAlpha="true"/></filter></defs></svg></section>
    `

function activatePage(root: HTMLElement, isStatic = false, catalogCount = DEFAULT_CATALOG_COUNT) {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const listeners = new AbortController()
    const options = { signal: listeners.signal }
    const running = new Set<Animation>()
    const all = (selector: string) => Array.from(root.querySelectorAll<HTMLElement>(selector))
    function play(el: Element, frames: Keyframe[], duration: number, delay = 0) {
        if (motion.matches || !el.animate) return
        const animation = el.animate(frames, { duration, delay, easing: "cubic-bezier(.18,.78,.22,1)", fill: "backwards" })
        running.add(animation)
        animation.onfinish = animation.oncancel = () => { running.delete(animation) }
    }
    const fan=root.querySelector(".ep-dlc-fan")
    let fanVisible=typeof IntersectionObserver==="undefined"
    let fanTimer=0
    function setFan(open){
        window.clearTimeout(fanTimer)
        fan.setAttribute("aria-pressed",String(open))
        if(fanVisible && !motion.matches && !document.hidden){
            fanTimer=window.setTimeout(()=>setFan(!open),open?3050:650)
        }
    }
    function resetFan(){setFan(motion.matches)}
    fan.addEventListener("click",()=>setFan(fan.getAttribute("aria-pressed")!=="true"),options)
    document.addEventListener("visibilitychange",resetFan,options)
    motion.addEventListener("change",resetFan,options)
    listeners.signal.addEventListener("abort",()=>window.clearTimeout(fanTimer),{once:true})
    resetFan()
    const cloud=root.querySelector<HTMLElement>(".ef-cloud")!
    const savePhases=[
        ["game-1","5 jam 12 menit",1650],
        ["game-2","3 jam 48 menit",1650],
        ["game-3","8 jam 06 menit",1650],
        ["collect","",1600],
        ["upload","",1120],
        ["done","",1700]
    ] as const
    const saveTime=cloud.querySelector(".ep-save-caption")!
    let phaseIndex=0, phaseTimer=0, cloudVisible=false
    function advanceCloud() {
        window.clearTimeout(phaseTimer)
        if(motion.matches) phaseIndex=savePhases.length-1
        const [phase,time,duration]=savePhases[phaseIndex]
        cloud.dataset.phase=phase
        saveTime.textContent=time
        if(!motion.matches && cloudVisible && !document.hidden){
            phaseTimer=window.setTimeout(()=>{
                phaseIndex=(phaseIndex+1)%savePhases.length
                advanceCloud()
            },duration)
        }
    }
    motion.addEventListener("change",advanceCloud,options)
    document.addEventListener("visibilitychange",advanceCloud,options)
    listeners.signal.addEventListener("abort",()=>window.clearTimeout(phaseTimer),{once:true})
    const award=root.querySelector(".ef-trophy")
    const score=award.querySelector(".ep-award-score")
    let awardTimer=0
    let awardVisible=typeof IntersectionObserver==="undefined"
    function showAward(phase){
        window.clearTimeout(awardTimer)
        if(motion.matches) phase="earned"
        award.setAttribute("data-award",phase)
        score.textContent=phase==="ready"?"9/10":"10/10"
        if(!awardVisible || document.hidden || motion.matches) return
        const next=phase==="ready"?"full":phase==="full"?"earned":"ready"
        const delay=phase==="ready"?1800:phase==="full"?850:2600
        awardTimer=window.setTimeout(()=>showAward(next),delay)
    }
    function resetAward(){showAward("ready")}
    award.querySelector("button").addEventListener("click",()=>showAward("full"),options)
    motion.addEventListener("change",resetAward,options)
    document.addEventListener("visibilitychange",resetAward,options)
    listeners.signal.addEventListener("abort",()=>window.clearTimeout(awardTimer),{once:true})
    resetAward()
    const pair=root.querySelector(".ep-pair-demo")
    function lightPair(){
        if(motion.matches || document.hidden) return
        for(const view of pair.querySelectorAll(".ep-pair-sky,.ep-pair-led")){
            for(const animation of view.getAnimations()) animation.cancel()
            view.animate([{opacity:.16},{opacity:1}],{duration:760,easing:"ease-out"})
        }
    }
    pair.addEventListener("click",lightPair,options)
    const sleeves=all(".ef-covers button")
    sleeves.forEach(btn=>btn.addEventListener("click",()=>{
        sleeves.forEach(el=>el.setAttribute("aria-pressed",String(el===btn)))
    },options))
    const counter=root.querySelector<HTMLElement>(".ef-counter")!
    const countPlan=root.querySelector(".ep-count-plan")!
    const plans=[{label:"Standard",total:60000},{label:"Premium",total:catalogCount}]
    const formatGames=new Intl.NumberFormat("id-ID")
    let countVisible=typeof IntersectionObserver==="undefined",countFrame=0,countTimer=0
    function stopGameLoop(){
        cancelAnimationFrame(countFrame)
        window.clearTimeout(countTimer)
    }
    function runGamePhase(index:number){
        const plan=plans[index]
        const from=index===0?0:plans[0].total
        countPlan.textContent=plan.label
        const start=performance.now()
        let lastPaint=-100
        function tick(now:number){
            const progress=Math.min(1,Math.max(0,(now-start)/1050))
            if(progress===1 || now-lastPaint>=32){
                const value=Math.round(from+(plan.total-from)*(1-Math.pow(1-progress,2)))
                counter.textContent=formatGames.format(value)+"+"
                lastPaint=now
            }
            if(progress<1) countFrame=requestAnimationFrame(tick)
            else countTimer=window.setTimeout(()=>runGamePhase(1-index),2050)
        }
        tick(start)
    }
    function syncGameLoop(){
        stopGameLoop()
        if(countVisible && !document.hidden && !motion.matches) runGamePhase(0)
    }
    motion.addEventListener("change",syncGameLoop,options)
    document.addEventListener("visibilitychange",syncGameLoop,options)
    listeners.signal.addEventListener("abort",stopGameLoop,{once:true})
    syncGameLoop()
    const bentoMotion=typeof IntersectionObserver==="undefined"?null:new IntersectionObserver(entries=>{
        for (const entry of entries) {
            const visible = entry.isIntersecting && entry.intersectionRatio >= .18
            entry.target.classList.toggle("ef-active",visible)
            if(visible) entry.target.classList.add("ef-seen")
            if(entry.target===award && visible!==awardVisible){awardVisible=visible;resetAward()}
            if(entry.target===fan.parentElement && visible!==fanVisible){fanVisible=visible;resetFan()}
            if(entry.target===pair.parentElement && visible) lightPair()
            if(entry.target===cloud){cloudVisible=visible;advanceCloud()}
            if(entry.target.classList.contains("ef-count") && visible!==countVisible){countVisible=visible;syncGameLoop()}
        }
    },{threshold:[0,.18]})
    all(".ef-card").forEach(card=>bentoMotion?.observe(card))
    const heroSlides = all("[data-hero-slide]")
    const heroBars = all("[data-hero-bar]")
    if (heroSlides.length > 1) {
        let heroSlideIdx = 0
        let heroSlideTimer = 0
        let heroInView = true
        const heroViewLbl = root.querySelector<HTMLElement>("[data-hero-viewlabel]")
        const heroCountEl = root.querySelector<HTMLElement>("[data-hero-count]")
        const showHeroSlide = (idx: number) => {
            heroSlideIdx = ((idx % heroSlides.length) + heroSlides.length) % heroSlides.length
            heroSlides.forEach((el, i) => el.classList.toggle("is-on", i === heroSlideIdx))
            const activeSlide = heroSlides[heroSlideIdx]
            if (heroViewLbl && activeSlide?.dataset.heroName) heroViewLbl.textContent = activeSlide.dataset.heroName
            if (heroCountEl) heroCountEl.textContent = String(heroSlideIdx + 1).padStart(2, "0") + " / " + String(heroSlides.length).padStart(2, "0")
            heroBars.forEach((bar, i) => {
                bar.classList.remove("is-on")
                if (i === heroSlideIdx) {
                    void bar.offsetWidth
                    bar.classList.add("is-on")
                }
            })
        }
        const scheduleHeroSlide = () => {
            window.clearTimeout(heroSlideTimer)
            if (motion.matches || document.hidden || !heroInView) return
            heroSlideTimer = window.setTimeout(() => {
                showHeroSlide(heroSlideIdx + 1)
                scheduleHeroSlide()
            }, 3000)
        }
        const heroElForLoop = root.querySelector("#hero")
        const heroSlideIO = typeof IntersectionObserver === "undefined" || !heroElForLoop ? null : new IntersectionObserver(entries => {
            for (const entry of entries) {
                heroInView = entry.isIntersecting
                if (heroInView) scheduleHeroSlide()
                else window.clearTimeout(heroSlideTimer)
            }
        }, { threshold: 0.1 })
        if (heroElForLoop) heroSlideIO?.observe(heroElForLoop)
        document.addEventListener("visibilitychange", scheduleHeroSlide, options)
        motion.addEventListener("change", () => { showHeroSlide(0); scheduleHeroSlide() }, options)
        listeners.signal.addEventListener("abort", () => { window.clearTimeout(heroSlideTimer); heroSlideIO?.disconnect() }, { once: true })
        showHeroSlide(0)
        scheduleHeroSlide()
    }
    const pricing = root.querySelector("#pricing")
    const planButtons = all("#pricing .pick-plan")
    const pricingSelection = pricing.querySelector(".pricing-selection")

    const planCards = all("#pricing .pricing-panel")

    for (const card of planCards) {
        card.addEventListener("pointermove", event => {
            if (!pointer.matches || motion.matches) return
            const bounds = card.getBoundingClientRect()
            const x = (event.clientX - bounds.left) / bounds.width
            const y = (event.clientY - bounds.top) / bounds.height
            card.style.setProperty("--plan-light-x", x * 100 + "%")
            card.style.setProperty("--plan-light-y", y * 100 + "%")
            card.style.setProperty("--plan-tilt-x", (0.5 - y) * 4 + "deg")
            card.style.setProperty("--plan-tilt-y", (x - 0.5) * 4 + "deg")
        }, options)
        card.addEventListener("pointerleave", () => {
            for (const property of ["--plan-light-x", "--plan-light-y", "--plan-tilt-x", "--plan-tilt-y"]) {
                card.style.removeProperty(property)
            }
        }, options)
    }

    planButtons.forEach(button => button.addEventListener("click", () => {
        const plan = button.dataset.plan
        const selected = button.getAttribute("aria-pressed") !== "true"
        for (const option of planButtons) {
            option.setAttribute("aria-pressed", String(selected && option === button))
        }
        pricingSelection.textContent = selected ? "Paket " + plan + " dipilih. Tautan checkout Shopee belum tersedia." : ""
        if (!selected) return
        const card = button.closest(".pricing-panel")
        card.querySelectorAll(".pricing-row-2").forEach((mark, index) =>
            play(mark, [{transform:"scale(.55)",opacity:.4},{transform:"scale(1.23)",opacity:1},{transform:"scale(1)"}], 300, index * 40))
        play(pricingSelection, [{opacity:0,transform:"translateY(5px)"},{opacity:1,transform:"none"}], 260)
    }, options))

    const reviews=root.querySelector<HTMLElement>("#testimoni")!
    for(const port of Array.from(reviews.querySelectorAll<HTMLElement>(".ep-review-window"))){
        const track=port.querySelector<HTMLElement>(".ep-review-track")!
        const set=track.firstElementChild as HTMLElement
        const copy=set.cloneNode(true) as HTMLElement
        copy.setAttribute("aria-hidden","true")
        track.append(copy)
        const slots=Array.from(track.querySelectorAll<HTMLElement>(".ep-review-slot"))
        const count=set.childElementCount
        const reverse=port.closest<HTMLElement>(".ep-review-row")!.dataset.origin==="Discord"
        const frames=[{transform:"translate3d(0,0,0)"},{transform:"translate3d(-50%,0,0)"}]
        if(reverse)frames.reverse()
        let cycle=Math.max(1,set.getBoundingClientRect().width)/27*1000
        const glide=track.animate(frames,{duration:cycle,iterations:Infinity,easing:"linear"})
        glide.pause()
        glide.currentTime=0
        let visible=false,active=-1,pointerX=0,hoverFrame=0,lastLean=0
        function sync(){
            if(motion.matches){glide.cancel();return}
            if(!visible||document.hidden){glide.pause();return}
            glide.play()
        }
        function highlight(index:number){
            if(active===index)return
            active=index
            for(const [i,slot] of slots.entries()){
                if(index===-1){slot.removeAttribute("data-side");continue}
                const distance=(i-index+count+Math.floor(count/2))%count-Math.floor(count/2)
                slot.dataset.side=distance===0?"active":distance<0?"left":"right"
            }
            if(index===-1){
                cancelAnimationFrame(hoverFrame)
                hoverFrame=0
                lastLean=0
                track.style.removeProperty("--lean")
            }
        }
        function alignHover(){
            hoverFrame=0
            if(active<0)return
            const bounds=port.getBoundingClientRect()
            const candidates=[slots[active],slots[active+count]].map(el=>el.getBoundingClientRect())
            const rect=candidates.reduce((a,b)=>Math.abs(a.left+a.width/2-pointerX)<Math.abs(b.left+b.width/2-pointerX)?a:b)
            if(rect.right<=bounds.left||rect.left>=bounds.right){highlight(-1);return}
            const growth=rect.width*.21
            const lean=Math.min(bounds.right-rect.right-growth-2,Math.max(0,bounds.left-rect.left+growth+2))
            if(Math.abs(lean-lastLean)>.15){track.style.setProperty("--lean",lean+"px");lastLean=lean}
            if(visible&&!document.hidden&&!motion.matches)hoverFrame=requestAnimationFrame(alignHover)
        }
        port.addEventListener("pointerover",e=>{
            if(e.pointerType!=="mouse"||!(e.target instanceof Element))return
            const slot=e.target.closest<HTMLElement>(".ep-review-slot")
            if(!slot){highlight(-1);return}
            pointerX=e.clientX
            highlight(slots.indexOf(slot)%count)
            if(!hoverFrame)alignHover()
        },options)
        port.addEventListener("pointermove",e=>{if(e.pointerType==="mouse")pointerX=e.clientX},options)
        port.addEventListener("pointerleave",()=>highlight(-1),options)
        const size=new ResizeObserver(()=>{
            const updated=Math.max(1,set.getBoundingClientRect().width)/27*1000
            if(Math.abs(updated-cycle)<1)return
            const fraction=(Number(glide.currentTime)||0)/cycle
            ;(glide.effect as KeyframeEffect).updateTiming({duration:updated})
            if(!motion.matches)glide.currentTime=fraction*updated
            cycle=updated
        })
        size.observe(set)
        let touchX=0,touchY=0,touchTime=0
        port.addEventListener("touchstart",e=>{
            touchX=e.touches[0].clientX;touchY=e.touches[0].clientY
            touchTime=Number(glide.currentTime)||0
        },{...options,passive:true})
        port.addEventListener("touchmove",e=>{
            if(motion.matches||e.touches.length!==1)return
            const dx=e.touches[0].clientX-touchX,dy=e.touches[0].clientY-touchY
            if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>6)
                glide.currentTime=((touchTime+(reverse?dx:-dx)*1000/27)%cycle+cycle)%cycle
        },{...options,passive:true})
        port.addEventListener("keydown",e=>{
            if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return
            e.preventDefault()
            const step=(slots[0].offsetWidth+14)*(e.key==="ArrowLeft"?-1:1)
            if(motion.matches)port.scrollBy({left:step})
            else glide.currentTime=(((Number(glide.currentTime)||0)+(reverse?-step:step)*1000/27)%cycle+cycle)%cycle
        },options)
        const view=new IntersectionObserver(entries=>{
            visible=entries[0].isIntersecting
            if(!visible)highlight(-1)
            sync()
        })
        view.observe(port)
        motion.addEventListener("change",()=>{highlight(-1);port.scrollLeft=0;sync()},options)
        document.addEventListener("visibilitychange",()=>{if(document.hidden)highlight(-1);sync()},options)
        listeners.signal.addEventListener("abort",()=>{highlight(-1);view.disconnect();size.disconnect();glide.cancel();copy.remove()},{once:true})
    }
    const menuButton=root.querySelector<HTMLButtonElement>(".nav-toggle")
    if(menuButton){
        const closeMenu=()=>menuButton.setAttribute("aria-expanded","false")
        menuButton.addEventListener("click",()=>menuButton.setAttribute("aria-expanded",String(menuButton.getAttribute("aria-expanded")!=="true")),options)
        root.ownerDocument.addEventListener("click",event=>{
            if(event.target instanceof Element && (!event.target.closest(".navigation-row") || event.target.closest("a"))) closeMenu()
        },options)
        root.ownerDocument.addEventListener("keydown",event=>{
            if(event.key==="Escape" && menuButton.getAttribute("aria-expanded")==="true"){closeMenu();menuButton.focus()}
        },options)
    }
    // Whole-site choreographed entrance & scroll-reveal flow (Framer Canvas safe, zero permanent GPU blur)
    const flowCleanups: Array<number | (() => void)> = []
    const isCanvasEditor = false
    type FlowKind = "up" | "title" | "down" | "left" | "route-east" | "card" | "stage" | "fade"
    const flowGroups: Array<{ trigger: HTMLElement; items: Array<{ el: HTMLElement; kind: FlowKind; delay: number; dur: number }>; triggered: boolean }> = []

    const armEl = (el: HTMLElement, kind: FlowKind, delay: number, dur: number) => {
        el.dataset.epFlow = "wait"
        el.dataset.epKind = kind
        el.style.setProperty("--ep-delay", delay + "ms")
        el.style.setProperty("--ep-dur", dur + "ms")
        return { el, kind, delay, dur }
    }

    const revealItem = (item: { el: HTMLElement; delay: number; dur: number }) => {
        if (item.el.dataset.epFlow !== "wait") return
        item.el.dataset.epFlow = "in"
        const doneId = window.setTimeout(() => {
            if (item.el.dataset.epFlow === "in") {
                item.el.dataset.epFlow = "done"
                item.el.style.removeProperty("--ep-delay")
                item.el.style.removeProperty("--ep-dur")
            }
        }, item.delay + item.dur + 140)
        flowCleanups.push(doneId)
    }

    const triggerGroup = (group: typeof flowGroups[number]) => {
        if (group.triggered) return
        group.triggered = true
        for (const item of group.items) revealItem(item)
    }

    const registerSectionFlow = (sectionSel: string, specs: Array<{ sel: string; kind: FlowKind; base: number; step?: number; dur?: number }>) => {
        const trigger = root.querySelector<HTMLElement>(sectionSel)
        if (!trigger) return null
        const items: Array<{ el: HTMLElement; kind: FlowKind; delay: number; dur: number }> = []
        const seen = new Set<HTMLElement>()
        for (const sp of specs) {
            const matches = Array.from(trigger.querySelectorAll<HTMLElement>(sp.sel))
            matches.forEach((el, idx) => {
                if (seen.has(el)) return
                seen.add(el)
                items.push(armEl(el, sp.kind, sp.base + idx * (sp.step ?? 0), sp.dur ?? 820))
            })
        }
        if (!items.length) return null
        const grp = { trigger, items, triggered: false }
        flowGroups.push(grp)
        return grp
    }

    let observer: IntersectionObserver | null = null
    if (!isCanvasEditor && !isStatic && !motion.matches) {
        // Opening Hero + Navbar sequence (preserved 100% — user loves Hero pacing)
        const openingItems: Array<{ el: HTMLElement; kind: FlowKind; delay: number; dur: number }> = []
        const armHero = (el: HTMLElement, kind: FlowKind, delay: number, dur: number) => {
            el.dataset.epHero = "1"
            return armEl(el, kind, delay, dur)
        }
        const navEl = root.querySelector<HTMLElement>("#navigation")
        if (navEl) openingItems.push(armHero(navEl, "down", 0, 680))
        const heroEl = root.querySelector<HTMLElement>("#hero")
        if (heroEl) {
            Array.from(heroEl.querySelectorAll<HTMLElement>("h1 .text-31")).forEach((el, i) => {
                openingItems.push(armHero(el, "title", 90 + i * 120, 860))
            })
            const heroSub = heroEl.querySelector<HTMLElement>(".hero-column > .text-11")
            if (heroSub) openingItems.push(armHero(heroSub, "up", 340, 780))
            const heroAct = heroEl.querySelector<HTMLElement>(".hero-actions")
            if (heroAct) openingItems.push(armHero(heroAct, "card", 440, 760))
            const routeW = heroEl.querySelector<HTMLElement>(".hero-route-west")
            if (routeW) openingItems.push(armHero(routeW, "left", 500, 820))
            const routeE = heroEl.querySelector<HTMLElement>(".hero-route-east")
            if (routeE) openingItems.push(armHero(routeE, "route-east", 500, 820))
            const heroStage = heroEl.querySelector<HTMLElement>(".hero-layer-3.ep-glass-stage")
            if (heroStage) openingItems.push(armHero(heroStage, "stage", 560, 980))
            const heroDockEl = heroEl.querySelector<HTMLElement>(".ep-glass-dock")
            if (heroDockEl) openingItems.push(armHero(heroDockEl, "fade", 780, 680))
        }

        // Helper: register a sub-group anchored directly to its own visible trigger element (never fires prematurely off-screen!)
        const registerSubGroup = (trigger: HTMLElement | null, itemSpecs: Array<{ els: HTMLElement[]; kind: FlowKind; base: number; step?: number; dur?: number }>) => {
            if (!trigger) return null
            const items: Array<{ el: HTMLElement; kind: FlowKind; delay: number; dur: number }> = []
            const seen = new Set<HTMLElement>()
            for (const sp of itemSpecs) {
                sp.els.forEach((el, idx) => {
                    if (!el || seen.has(el)) return
                    seen.add(el)
                    items.push(armEl(el, sp.kind, sp.base + idx * (sp.step ?? 0), sp.dur ?? 1080))
                })
            }
            if (!items.length) return null
            const grp = { trigger, items, triggered: false }
            flowGroups.push(grp)
            return grp
        }
        const qAll = (scope: ParentNode | null, sel: string) => (scope ? Array.from(scope.querySelectorAll<HTMLElement>(sel)) : [])
        const qOne = (scope: ParentNode | null, sel: string) => (scope ? scope.querySelector<HTMLElement>(sel) : null)

        // 1. Trusted Companies
        registerSectionFlow("#trusted-companies", [
            { sel: ".trusted-companies-row", kind: "up", base: 0, dur: 1020 },
            { sel: ".trusted-companies-group-2 > div", kind: "card", base: 180, step: 95, dur: 1080 },
        ])

        // 2. How It Works (split into 3 independent reading-zone sub-groups!)
        const procSec = qOne(root, "#process")
        registerSubGroup(qOne(procSec, ".ep-hiw-head") || procSec, [
            { els: qAll(procSec, "h2.ep-hiw-title"), kind: "title", base: 0, dur: 1140 },
            { els: qAll(procSec, "p.ep-hiw-subtitle"), kind: "up", base: 190, dur: 1040 },
        ])
        const hiwStage = qOne(procSec, ".ep-hiw-stage-shell")
        registerSubGroup(hiwStage, [
            { els: hiwStage ? [hiwStage] : [], kind: "stage", base: 60, dur: 1240 },
        ])
        const hiwPodium = qOne(procSec, ".ep-hiw-podium")
        registerSubGroup(hiwPodium, [
            { els: qAll(hiwPodium, ".ep-hiw-card"), kind: "card", base: 60, step: 170, dur: 1120 },
            { els: qAll(hiwPodium, ".ep-hiw-bridge, .ep-hiw-bridge-mobile"), kind: "fade", base: 200, step: 170, dur: 880 },
        ])

        // 3. Features Bento (header + Bento cards independent!)
        const featSec = qOne(root, "#features")
        registerSubGroup(qOne(featSec, "h2") || featSec, [
            { els: qAll(featSec, "h2"), kind: "title", base: 0, dur: 1140 },
            { els: qAll(featSec, ".ep-features-subtitle"), kind: "up", base: 190, dur: 1040 },
        ])
        const bentoGrid = qOne(featSec, ".ep-bento")
        registerSubGroup(bentoGrid, [
            { els: qAll(bentoGrid, ".ef-card"), kind: "card", base: 60, step: 125, dur: 1140 },
        ])

        // 4. Catalog Game (header + row 2 + invite independent!)
        const catSec = qOne(root, "#use-cases")
        registerSubGroup(qOne(catSec, "h2") || catSec, [
            { els: qAll(catSec, "h2"), kind: "title", base: 0, dur: 1140 },
        ])
        const catRow2 = qAll(catSec, ".catalog-grid figure:nth-child(n+5)")
        registerSubGroup(catRow2[0] || null, [
            { els: catRow2, kind: "card", base: 60, step: 130, dur: 1120 },
        ])
        const catInv = qOne(catSec, ".catalog-invite")
        registerSubGroup(catInv, [
            { els: catInv ? [catInv] : [], kind: "up", base: 80, dur: 1060 },
        ])

        // 5. Pricing (header + cards independent!)
        const priceSec = qOne(root, "#pricing")
        registerSubGroup(qOne(priceSec, ".pricing-intro") || priceSec, [
            { els: qAll(priceSec, "h2"), kind: "title", base: 0, dur: 1140 },
            { els: qAll(priceSec, ".pricing-intro p"), kind: "up", base: 190, dur: 1040 },
        ])
        const pricePanels = qAll(priceSec, ".pricing-panel")
        registerSubGroup(pricePanels[0]?.parentElement || pricePanels[0] || null, [
            { els: pricePanels, kind: "card", base: 60, step: 230, dur: 1200 },
            { els: qAll(priceSec, ".plan-renewal"), kind: "fade", base: 480, dur: 960 },
        ])

        // 6. Testimoni (header + Shopee row + Discord row independent!)
        const revSec = qOne(root, "#testimoni")
        registerSubGroup(qOne(revSec, "header") || revSec, [
            { els: qAll(revSec, "h2"), kind: "title", base: 0, dur: 1140 },
            { els: qAll(revSec, "header p"), kind: "up", base: 190, dur: 1040 },
        ])
        qAll(revSec, ".ep-review-row").forEach(row => {
            registerSubGroup(row, [{ els: [row], kind: "up", base: 80, dur: 1140 }])
        })

        // 7. 3D Ecosystem Hub (header + 3D stage independent!)
        const hubSec = qOne(root, "#integrations")
        registerSubGroup(qOne(hubSec, ".ep-hub-head") || hubSec, [
            { els: qAll(hubSec, "h2.ep-hub-title"), kind: "title", base: 0, dur: 1140 },
            { els: qAll(hubSec, "p.ep-hub-sub"), kind: "up", base: 190, dur: 1040 },
        ])
        const hubStage = qOne(hubSec, ".ep-hub-stage")
        registerSubGroup(hubStage, [
            { els: hubStage ? [hubStage] : [], kind: "stage", base: 100, dur: 1280 },
        ])

        // 8. FAQ (left rail + right accordion list independent!)
        const faqSec = qOne(root, "#faq")
        registerSubGroup(qOne(faqSec, ".ep-ed-faq-rail") || faqSec, [
            { els: qAll(faqSec, "h2.ep-ed-faq-title"), kind: "title", base: 0, dur: 1140 },
            { els: qAll(faqSec, "p.ep-ed-faq-sub"), kind: "up", base: 180, dur: 1040 },
            { els: qAll(faqSec, ".ep-ed-tabs"), kind: "up", base: 320, dur: 1000 },
            { els: qAll(faqSec, ".ep-ed-cs-row"), kind: "up", base: 460, dur: 1000 },
        ])
        const faqList = qOne(faqSec, ".ep-ed-faq-list")
        registerSubGroup(faqList, [
            { els: qAll(faqList, ".ep-ed-row"), kind: "up", base: 80, step: 105, dur: 1040 },
        ])

        // 9. Bottom CTA Horizon Card (Hero-grade crescendo!)
        const ctaSec = qOne(root, "#get-started")
        registerSubGroup(qOne(ctaSec, ".ep-gold-stage") || ctaSec, [
            { els: qAll(ctaSec, ".ep-gold-stage"), kind: "card", base: 0, dur: 1180 },
            { els: qAll(ctaSec, "h2.ep-gold-title"), kind: "title", base: 220, dur: 1120 },
            { els: qAll(ctaSec, "p.ep-gold-sub"), kind: "up", base: 380, dur: 1040 },
            { els: qAll(ctaSec, ".ep-gold-actions"), kind: "up", base: 520, dur: 1020 },
            { els: qAll(ctaSec, ".ep-fan-wrap"), kind: "card", base: 400, dur: 1180 },
        ])

        // 10. Footer (columns + monumental 3K logo independent!)
        const ftSec = qOne(root, "#footer")
        registerSubGroup(qOne(ftSec, ".ep-ft-top") || ftSec, [
            { els: qAll(ftSec, ".ep-ft-brand, .ep-ft-col"), kind: "up", base: 0, step: 115, dur: 1060 },
        ])
        const ftMon = qOne(ftSec, ".ep-ft-monument")
        registerSubGroup(ftMon || ftSec, [
            { els: ftMon ? [ftMon] : [], kind: "stage", base: 120, dur: 1260 },
            { els: qAll(ftSec, ".ep-ft-bar"), kind: "fade", base: 440, dur: 960 },
        ])

        const sweepVisibleGroups = () => {
            const vh = window.innerHeight || 900
            const docH = Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0)
            const atBottom = (window.scrollY || 0) + vh >= docH - 64
            for (const grp of flowGroups) {
                if (grp.triggered) continue
                const rect = grp.trigger.getBoundingClientRect()
                if (rect.top <= vh * (atBottom ? 1.02 : 0.80)) {
                    triggerGroup(grp)
                }
            }
        }

        // Flush pre-reveal styles once then launch opening cascade smoothly on next frame
        void root.offsetHeight
        const startId = requestAnimationFrame(() => {
            for (const item of openingItems) revealItem(item)
            sweepVisibleGroups()
        })
        flowCleanups.push(startId)

        if (typeof IntersectionObserver !== "undefined") {
            const grpByEl = new Map(flowGroups.map(g => [g.trigger, g]))
            observer = new IntersectionObserver(entries => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue
                    const grp = grpByEl.get(entry.target as HTMLElement)
                    if (grp) triggerGroup(grp)
                    observer?.unobserve(entry.target)
                }
            }, { threshold: 0.08, rootMargin: "0px 0px -18% 0px" })
            for (const grp of flowGroups) observer.observe(grp.trigger)
        }
        let sweepRaf = 0
        const scheduleSweep = () => {
            if (sweepRaf) return
            sweepRaf = requestAnimationFrame(() => {
                sweepRaf = 0
                sweepVisibleGroups()
                if (flowGroups.every(g => g.triggered)) {
                    window.removeEventListener("scroll", scheduleSweep)
                    window.removeEventListener("ep:scroll", scheduleSweep)
                }
            })
        }
        flowCleanups.push(() => { if (sweepRaf) cancelAnimationFrame(sweepRaf) })
        window.addEventListener("scroll", scheduleSweep, { passive: true, signal: listeners.signal })
        window.addEventListener("ep:scroll", scheduleSweep, { passive: true, signal: listeners.signal })
    }
    listeners.signal.addEventListener("abort", () => {
        for (const id of flowCleanups) {
            if (typeof id === "function") (id as () => void)()
            else { clearTimeout(id); cancelAnimationFrame(id) }
        }
    }, { once: true })

    const coverGrid=root.querySelector<HTMLElement>(".catalog-grid")!
    coverGrid.addEventListener("pointermove",event=>{
        if(event.pointerType==="touch"||motion.matches)return
        const card=event.target instanceof Element?event.target.closest<HTMLElement>("figure"):null
        if(!card||card.hasAttribute("data-in-flight"))return
        const rect=card.getBoundingClientRect()
        card.style.setProperty("--cover-light-x",(event.clientX-rect.left)/rect.width*100+"%")
        card.style.setProperty("--cover-light-y",(event.clientY-rect.top)/rect.height*100+"%")
    },options)
    const posters = all(".catalog-grid img").slice(0,4)
    const flight = document.createElement("div")
    flight.className = "catalog-flight"
    flight.setAttribute("aria-hidden","true")
    root.querySelector("main").append(flight)
    const travelers = posters.map((poster,i) => {
        const wrapper = document.createElement("div")
        wrapper.className = "catalog-traveler"
        wrapper.append(poster.cloneNode(false))
        flight.append(wrapper)
        return wrapper
    })
    const board = root.querySelector("main")
    const guarded = all("#hero h1,#hero .text-11,#hero .hero-actions,#hero .hero-layer-3,#trusted-companies .publisher-mark,#process .ep-hiw-stage-shell,#process .ep-hiw-wrap,#process .ep-hiw-title,#process .ep-hiw-subtitle,#features .ep-bento,#features h2,#features .ep-features-subtitle")
    const phases = posters.map((_,i)=>(i+Math.random()*.55)*1.7)
    let pendingFlight = 0
    let previousTime = 0
    let dock = -1
    function measureGeometry() {
        const origin = board.getBoundingClientRect()
        const slots = posters.map(el=>el.getBoundingClientRect())
        const areas = guarded.map(el=>{
            if(el.matches("h1,h2,p,.text-10-2")){
                const range=document.createRange()
                range.selectNodeContents(el)
                return range.getBoundingClientRect()
            }
            return el.getBoundingClientRect()
        })
        const titleBox=root.querySelector("#hero h1").getBoundingClientRect()
        const buttons=root.querySelector("#hero .hero-actions").getBoundingClientRect()
        const copyBox=root.querySelector("#hero .text-11").getBoundingClientRect()
        const heroTop=root.querySelector("#hero").getBoundingClientRect().top
        const scrollAtMeasure = window.scrollY || document.documentElement.scrollTop || 0
        return { origin, slots, areas, titleBox, buttons, copyBox, heroTop, scrollAtMeasure }
    }
    let geometry = measureGeometry()
    let dirty = true
    let moved = true
    let boundsTop = geometry.origin.top
    let boundsWidth = geometry.origin.width
    let wasAirborne = false
    let syncedScrollY: number | null = null
    function invalidateGeometry() {dirty=true; scheduleFlight()}
    function trackScroll() {syncedScrollY=null; moved=true; scheduleFlight()}
    function placeCovers(nowOverride?: number) {
        pendingFlight = 0
        if (document.hidden) return
        if (dirty) {
            geometry=measureGeometry()
            boundsTop=geometry.origin.top
            boundsWidth=geometry.origin.width
            travelers.forEach((el,i)=>{el.style.width=geometry.slots[i].width+"px"})
        } else if (moved) {
            const curY = syncedScrollY !== null ? syncedScrollY : (window.scrollY || document.documentElement.scrollTop || 0)
            boundsTop = geometry.origin.top - (curY - geometry.scrollAtMeasure)
        }
        dirty=false
        moved=false
        const bounds = { top: boundsTop, width: boundsWidth }
        const { slots,areas,titleBox,buttons,copyBox }=geometry
        const offset=bounds.top-geometry.origin.top
        const heroTop=geometry.heroTop+offset
        const height=window.innerHeight
        const smooth = (v: number) => {const t=Math.min(1,Math.max(0,v));return t*t*(3-2*t)}
        const approach = root.dataset.roomy === "on" ? .99 : .83
        const slotY=(slots[0].top+offset)/height
        const target=smooth((approach-slotY)/(approach-.39))
        const flying = !motion.matches && bounds.width>=900 && height>=440
        const now = performance.now()
        const dt = Math.max(1,Math.min(64,now-previousTime))
        previousTime = now
        if (!flying || slots[0].bottom+offset < 0) dock = target
        else {
            const follow=1-Math.exp(-dt/105)
            dock=dock<0 ? target : dock+(target-dock)*follow
        }
        if(Math.abs(dock-target)<.0003) dock=target
        const airborne = flying && dock<1
        if (wasAirborne!==airborne || flight.hidden===airborne) {
            flight.hidden=!airborne
            travelers.forEach(el=>{if(airborne)el.style.willChange="transform";else el.style.removeProperty("will-change")})
            posters.forEach(el=>{el.style.opacity=airborne?"0":"1";el.parentElement?.toggleAttribute("data-in-flight",airborne)})
            wasAirborne=airborne
        }
        if(!airborne) return
        const standby=1-smooth(-heroTop/(height*.55))
        travelers.forEach((el,i)=>{
            const slot=slots[i], left=i<2, phase=phases[i], time=now/1000
            const wave=Math.sin(time*(.76+i*.04)+phase)
            const sway=Math.sin(time*(.53+i*.035)+phase)+.24*Math.sin(time*.92-phase)
            const baseY=height*[.22,.60,.59,.23][i]+wave*7
            const limit=Math.min(123,height*.16,bounds.width*.10)
            // Descend beside the content before turning inward below the catalog heading.
            const y=baseY+(slot.top+offset-baseY)*smooth(dock*1.7)
            const turn=smooth((dock-.25)/.75)
            let room=limit+44
            for(const area of areas){
                const distance=Math.max(area.top+offset-(y+limit*1.5+16),y-16-area.bottom-offset,0)
                const gap=left?area.left-geometry.origin.left:geometry.origin.right-area.right
                room=Math.min(room,Math.max(0,gap)+distance*.48)
            }
            const laneWidth=Math.max(24,Math.min(limit,room-24))
            const edge=Math.min(11,Math.max(4,(room-laneWidth)*.32))+3*sway
            const laneX=left?edge:bounds.width-edge-laneWidth
            const inner=i===0 || i===3
            const coverWidth=Math.min(148,bounds.width*.119)
            const heroWidth = 0.87 * (inner ? Math.min(coverWidth,(copyBox.top-geometry.heroTop-100)/1.5):coverWidth)
            const heroEdge=inner?Math.min((titleBox.left-geometry.origin.left)-heroWidth-20,coverWidth+42):19
            const homeX=(left?heroEdge:bounds.width-heroEdge-heroWidth)+sway*3
            const homeY=(inner?copyBox.top-heroWidth*1.5-19:buttons.top+buttons.height*.45-heroWidth*1.08)+offset+wave*6
            const size=(laneWidth+(slot.width-laneWidth)*turn)*(1-standby)+heroWidth*standby
            const x=(laneX+(slot.left-geometry.origin.left-laneX)*turn)*(1-standby)+homeX*standby
            const coverY=y*(1-standby)+homeY*standby
            const angle=((left?-2:2)+sway*4.3)*(1-turn)
            el.style.transform="translate3d("+x+"px,"+(coverY-bounds.top)+"px,0) scale("+(size/slot.width)+") rotate("+angle+"deg)"
        })
        scheduleFlight()
    }
    function scheduleFlight(){if(!pendingFlight)pendingFlight=requestAnimationFrame(placeCovers)}
    const trackEpScroll = (ev: Event) => {
        const y = (ev as CustomEvent<{ y: number }>).detail?.y
        if (typeof y === "number") syncedScrollY = y
        moved = true
        if (wasAirborne || !flight.hidden) {
            if (pendingFlight) { cancelAnimationFrame(pendingFlight); pendingFlight = 0 }
            placeCovers()
        } else {
            scheduleFlight()
        }
    }
    window.addEventListener("ep:scroll", trackEpScroll, { ...options, passive: true })
    window.addEventListener("scroll", trackScroll, { ...options, passive: true })
    window.addEventListener("resize",invalidateGeometry,options)
    motion.addEventListener("change",scheduleFlight,options)
    const catalogResize = new ResizeObserver(invalidateGeometry)
    catalogResize.observe(root)
    all("main section[id], .catalog-grid").forEach(el=>catalogResize.observe(el))
    document.fonts?.addEventListener("loadingdone",invalidateGeometry,options)
    const spacingObserver=new MutationObserver(invalidateGeometry)
    spacingObserver.observe(root,{attributes:true,attributeFilter:["data-roomy"]})
    listeners.signal.addEventListener("abort",()=>{spacingObserver.disconnect();catalogResize.disconnect();cancelAnimationFrame(pendingFlight);flight.remove();posters.forEach(el=>{el.style.removeProperty("opacity");el.parentElement?.removeAttribute("data-in-flight")})},{once:true})
    placeCovers()
    const dropTabs=all(".ep-drop-tab")
    const dropPanels=all(".ep-drop-panel")
    function selectDrop(index:number){
        dropTabs.forEach((tab,i)=>{
            const selected=i===index
            tab.setAttribute("aria-selected",String(selected))
            tab.tabIndex=selected?0:-1
            dropPanels[i].setAttribute("aria-hidden",String(!selected))
        })
    }
    dropTabs.forEach((tab,i)=>{
        tab.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")selectDrop(i)},options)
        tab.addEventListener("click",()=>selectDrop(i),options)
        tab.addEventListener("focus",()=>selectDrop(i),options)
        tab.addEventListener("keydown",e=>{
            let next=i
            if(e.key==="ArrowDown")next=(i+1)%dropTabs.length
            else if(e.key==="ArrowUp")next=(i+dropTabs.length-1)%dropTabs.length
            else if(e.key==="Home")next=0
            else if(e.key==="End")next=dropTabs.length-1
            else return
            e.preventDefault()
            dropTabs[next].focus()
        },options)
    })
    const hero = root.querySelector<HTMLElement>("#hero")
    let wakeStealthLoop: (() => void) | null = null
    const heroVisibility = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.target === hero) {
                entry.target.classList.toggle("hero-paused", !entry.isIntersecting)
                if (entry.isIntersecting && wakeStealthLoop) wakeStealthLoop()
            } else entry.target.classList.toggle("scene-live", entry.isIntersecting)
        }
    })
    heroVisibility?.observe(hero)
    all("[data-backdrop]").forEach(section => heroVisibility?.observe(section))
    const resetTilt = () => { hero.style.removeProperty("--tilt-x"); hero.style.removeProperty("--tilt-y"); const ch = root.querySelector<HTMLElement>("#hero .ep-glass-chassis"); ch?.style.removeProperty("--cx"); ch?.style.removeProperty("--cy") }
    hero.addEventListener("pointermove",event => {
        if (motion.matches || !pointer.matches) return
        const box = hero.getBoundingClientRect()
        hero.style.setProperty("--tilt-x", Math.round(((event.clientX-box.left)/box.width-.5)*5)+"px")
        hero.style.setProperty("--tilt-y", Math.round(((event.clientY-box.top)/box.height-.5)*3)+"px")
        hero.style.setProperty("--gx", Math.round(((event.clientX-box.left)/box.width)*100)+"%")
        hero.style.setProperty("--gy", Math.round(((event.clientY-box.top)/box.height)*100)+"%")
    },options)
    hero.addEventListener("pointerleave",resetTilt,options)
    const heroChassis = root.querySelector<HTMLElement>("#hero .ep-glass-chassis")
    const auraCanvas = root.querySelector<HTMLCanvasElement>("#hero .ep-hero-aura-canvas")
    const rimCanvas = root.querySelector<HTMLCanvasElement>("#hero .ep-hero-rim-canvas")
    let auraRaf = 0
    if (heroChassis && auraCanvas && rimCanvas) {
        const aCtx = auraCanvas.getContext("2d")
        const rCtx = rimCanvas.getContext("2d")
        if (aCtx && rCtx) {
            const auraDPR = 1
            const DPR = Math.min(window.devicePixelRatio || 1, 1.5)
            let cw = 0
            let ch = 0
            let rad = 24

            const sampleRoundedRect = (tNorm: number, w: number, h: number, r: number) => {
                const rr = Math.min(r, w * 0.5, h * 0.5)
                const straightH = Math.max(0, w - 2 * rr)
                const straightV = Math.max(0, h - 2 * rr)
                const arcLen = 0.5 * Math.PI * rr
                const perim = 2 * (straightH + straightV) + 4 * arcLen
                let d = (((tNorm % 1) + 1) % 1) * perim
                if (d < straightH) return { x: rr + d, y: 0, nx: 0, ny: -1, tx: 1, ty: 0 }
                d -= straightH
                if (d < arcLen) {
                    const a = -Math.PI / 2 + (d / arcLen) * (Math.PI / 2)
                    return { x: w - rr + Math.cos(a) * rr, y: rr + Math.sin(a) * rr, nx: Math.cos(a), ny: Math.sin(a), tx: -Math.sin(a), ty: Math.cos(a) }
                }
                d -= arcLen
                if (d < straightV) return { x: w, y: rr + d, nx: 1, ny: 0, tx: 0, ty: 1 }
                d -= straightV
                if (d < arcLen) {
                    const a = (d / arcLen) * (Math.PI / 2)
                    return { x: w - rr + Math.cos(a) * rr, y: h - rr + Math.sin(a) * rr, nx: Math.cos(a), ny: Math.sin(a), tx: -Math.sin(a), ty: Math.cos(a) }
                }
                d -= arcLen
                if (d < straightH) return { x: w - rr - d, y: h, nx: 0, ny: 1, tx: -1, ty: 0 }
                d -= straightH
                if (d < arcLen) {
                    const a = Math.PI / 2 + (d / arcLen) * (Math.PI / 2)
                    return { x: rr + Math.cos(a) * rr, y: h - rr + Math.sin(a) * rr, nx: Math.cos(a), ny: Math.sin(a), tx: -Math.sin(a), ty: Math.cos(a) }
                }
                d -= arcLen
                if (d < straightV) return { x: 0, y: h - rr - d, nx: -1, ny: 0, tx: 0, ty: -1 }
                d -= straightV
                const a = Math.PI + Math.min(1, d / arcLen) * (Math.PI / 2)
                return { x: rr + Math.cos(a) * rr, y: rr + Math.sin(a) * rr, nx: Math.cos(a), ny: Math.sin(a), tx: -Math.sin(a), ty: Math.cos(a) }
            }

            const traceRoundedRectPath = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
                const rr = Math.min(r, w * 0.5, h * 0.5)
                ctx.beginPath()
                ctx.moveTo(x + rr, y)
                ctx.lineTo(x + w - rr, y)
                ctx.arcTo(x + w, y, x + w, y + rr, rr)
                ctx.lineTo(x + w, y + h - rr)
                ctx.arcTo(x + w, y + h, x + w - rr, y + h, rr)
                ctx.lineTo(x + rr, y + h)
                ctx.arcTo(x, y + h, x, y + h - rr, rr)
                ctx.lineTo(x, y + rr)
                ctx.arcTo(x, y, x + rr, y, rr)
                ctx.closePath()
            }

            const syncSize = () => {
                const w = Math.max(300, Math.round(heroChassis.offsetWidth))
                const h = Math.max(200, Math.round(heroChassis.offsetHeight))
                if (w === cw && h === ch) return
                cw = w
                ch = h
                rad = w <= 680 ? 16 : 24
                const padA = w <= 680 ? 28 : 44
                const padR = w <= 680 ? 14 : 24
                auraCanvas.width = Math.round((cw + padA * 2) * auraDPR)
                auraCanvas.height = Math.round((ch + padA * 2) * auraDPR)
                rimCanvas.width = Math.round((cw + padR * 2) * DPR)
                rimCanvas.height = Math.round((ch + padR * 2) * DPR)
            }

            const drawStealthFrame = (sec: number) => {
                syncSize()
                const compact = cw <= 680
                const padA = compact ? 28 : 44
                const padR = compact ? 14 : 24

                // Two synchronized opposing laser edge heads
                const heads = [(sec * 0.13) % 1, (sec * 0.13 + 0.5) % 1]

                // --- 1. BACK CANVAS: Tight, high-contrast directional rim backlight (NO puffy fairy mist) ---
                aCtx.setTransform(auraDPR, 0, 0, auraDPR, 0, 0)
                aCtx.clearRect(0, 0, cw + padA * 2, ch + padA * 2)
                aCtx.save()
                aCtx.globalCompositeOperation = "lighter"

                // Subtle architectural edge glow (Warm Champagne top-left -> Surgical Glacier-Blue bottom-right, zero ctx.filter stall)
                traceRoundedRectPath(aCtx, padA, padA, cw, ch, rad)
                const rimShadowGrad = aCtx.createLinearGradient(padA, padA, padA + cw, padA + ch)
                rimShadowGrad.addColorStop(0, "rgba(254, 240, 166, 0.22)")
                rimShadowGrad.addColorStop(0.55, "rgba(235, 186, 56, 0.09)")
                rimShadowGrad.addColorStop(1, "rgba(56, 189, 248, 0.16)")
                aCtx.strokeStyle = rimShadowGrad
                aCtx.lineWidth = compact ? 18 : 28
                aCtx.globalAlpha = 0.28
                aCtx.stroke()
                aCtx.lineWidth = compact ? 12 : 18
                aCtx.globalAlpha = 0.45
                aCtx.stroke()
                aCtx.lineWidth = compact ? 6 : 10
                aCtx.globalAlpha = 0.7
                aCtx.stroke()
                aCtx.globalAlpha = 1

                // Dual-Polarity kinetic backlight: Blade 0 = Glacier Blue (Steam), Blade 1 = Liquid Champagne-Gold (ElitePlay)
                for (let b = 0; b < heads.length; b++) {
                    const isBlue = b === 0
                    const steps = 10
                    for (let s = 0; s < steps; s++) {
                        const frac = s / steps
                        const fade = Math.pow(1 - frac, 2.2)
                        const pt = sampleRoundedRect(heads[b] - frac * 0.16, cw, ch, rad)
                        const gx = padA + pt.x + pt.nx * 3
                        const gy = padA + pt.y + pt.ny * 3
                        const gr = (compact ? 18 : 28) * (0.65 + 0.45 * fade)
                        const grad = aCtx.createRadialGradient(gx, gy, 0, gx, gy, gr)
                        if (isBlue) {
                            grad.addColorStop(0, `rgba(224, 242, 254, ${(0.46 * fade).toFixed(3)})`)
                            grad.addColorStop(0.35, `rgba(56, 189, 248, ${(0.34 * fade).toFixed(3)})`)
                            grad.addColorStop(1, "rgba(37, 99, 235, 0)")
                        } else {
                            grad.addColorStop(0, `rgba(255, 250, 224, ${(0.5 * fade).toFixed(3)})`)
                            grad.addColorStop(0.35, `rgba(245, 203, 76, ${(0.36 * fade).toFixed(3)})`)
                            grad.addColorStop(1, "rgba(217, 155, 30, 0)")
                        }
                        aCtx.fillStyle = grad
                        aCtx.beginPath()
                        aCtx.arc(gx, gy, gr, 0, Math.PI * 2)
                        aCtx.fill()
                    }
                }

                // Cut interior strictly clean
                aCtx.globalCompositeOperation = "destination-out"
                traceRoundedRectPath(aCtx, padA + 2, padA + 2, cw - 4, ch - 4, Math.max(8, rad - 2))
                aCtx.fillStyle = "#000"
                aCtx.fill()
                aCtx.restore()

                // --- 2. FRONT CANVAS: Razor Laser Edge Blades + Anamorphic Tip Flare + Reactive Machined Corner Brackets ---
                rCtx.setTransform(DPR, 0, 0, DPR, 0, 0)
                rCtx.clearRect(0, 0, cw + padR * 2, ch + padR * 2)
                rCtx.save()
                rCtx.lineCap = "round"
                rCtx.lineJoin = "round"

                // Crisp dark-titanium precision outer rail offset cleanly outside the chassis
                const gap = compact ? 7 : 11
                const ox = padR - gap
                const oy = padR - gap
                const ow = cw + gap * 2
                const oh = ch + gap * 2
                const orad = rad + gap

                // Compute proximity boost of the 2 laser heads to each of the 4 corners (0=TL, 1=TR, 2=BR, 3=BL)
                const straightH = Math.max(0, cw - 2 * rad)
                const straightV = Math.max(0, ch - 2 * rad)
                const arcLen = 0.5 * Math.PI * rad
                const perim = 2 * (straightH + straightV) + 4 * arcLen
                const cornerTs = [
                    1 - (arcLen * 0.5) / perim,
                    (straightH + arcLen * 0.5) / perim,
                    (straightH + arcLen + straightV + arcLen * 0.5) / perim,
                    (2 * straightH + 2 * arcLen + straightV + arcLen * 0.5) / perim,
                ]
                const cornerEnergy = cornerTs.map((ct) => {
                    let best = 0
                    for (const h of heads) {
                        let dist = Math.abs(h - ct)
                        if (dist > 0.5) dist = 1 - dist
                        const e = Math.max(0, 1 - dist / 0.14)
                        if (e > best) best = e
                    }
                    return best * best
                })

                // Draw 4 machined L-shaped curved titanium-gold corner brackets + tactical tick marks
                const arm = compact ? 22 : 36
                const corners = [
                    // TL
                    { cx: ox + orad, cy: oy + orad, sa: Math.PI, ea: Math.PI * 1.5, x1: ox, y1: oy + orad + arm, x2: ox + orad + arm, y2: oy, tx: ox, ty: oy + orad + arm + 6, dx: 0, dy: 5 },
                    // TR
                    { cx: ox + ow - orad, cy: oy + orad, sa: Math.PI * 1.5, ea: Math.PI * 2, x1: ox + ow - orad - arm, y1: oy, x2: ox + ow, y2: oy + orad + arm, tx: ox + ow, ty: oy + orad + arm + 6, dx: 0, dy: 5 },
                    // BR
                    { cx: ox + ow - orad, cy: oy + oh - orad, sa: 0, ea: Math.PI * 0.5, x1: ox + ow, y1: oy + oh - orad - arm, x2: ox + ow - orad - arm, y2: oy + oh, tx: ox + ow, ty: oy + oh - orad - arm - 6, dx: 0, dy: -5 },
                    // BL
                    { cx: ox + orad, cy: oy + oh - orad, sa: Math.PI * 0.5, ea: Math.PI, x1: ox + orad + arm, y1: oy + oh, x2: ox, y2: oy + oh - orad - arm, tx: ox, ty: oy + oh - orad - arm - 6, dx: 0, dy: -5 },
                ]

                corners.forEach((c, idx) => {
                    const e = cornerEnergy[idx]
                    rCtx.save()
                    rCtx.beginPath()
                    if (idx === 0) {
                        rCtx.moveTo(c.x1, c.y1)
                        rCtx.lineTo(ox, oy + orad)
                        rCtx.arc(c.cx, c.cy, orad, c.sa, c.ea)
                        rCtx.lineTo(c.x2, c.y2)
                    } else if (idx === 1) {
                        rCtx.moveTo(c.x1, c.y1)
                        rCtx.lineTo(ox + ow - orad, oy)
                        rCtx.arc(c.cx, c.cy, orad, c.sa, c.ea)
                        rCtx.lineTo(c.x2, c.y2)
                    } else if (idx === 2) {
                        rCtx.moveTo(c.x1, c.y1)
                        rCtx.lineTo(ox + ow, oy + oh - orad)
                        rCtx.arc(c.cx, c.cy, orad, c.sa, c.ea)
                        rCtx.lineTo(c.x2, c.y2)
                    } else {
                        rCtx.moveTo(c.x1, c.y1)
                        rCtx.lineTo(ox + orad, oy + oh)
                        rCtx.arc(c.cx, c.cy, orad, c.sa, c.ea)
                        rCtx.lineTo(c.x2, c.y2)
                    }
                    let d0 = Math.abs(heads[0] - cornerTs[idx]); if (d0 > 0.5) d0 = 1 - d0
                    let d1 = Math.abs(heads[1] - cornerTs[idx]); if (d1 > 0.5) d1 = 1 - d1
                    const cornerIsBlue = d0 <= d1
                    if (e > 0.05) {
                        rCtx.strokeStyle = cornerIsBlue
                            ? `rgba(56, 189, 248, ${(0.18 * e).toFixed(3)})`
                            : `rgba(245, 203, 76, ${(0.2 * e).toFixed(3)})`
                        rCtx.lineWidth = 8.5
                        rCtx.stroke()
                        rCtx.strokeStyle = cornerIsBlue
                            ? `rgba(56, 189, 248, ${(0.38 * e).toFixed(3)})`
                            : `rgba(245, 203, 76, ${(0.42 * e).toFixed(3)})`
                        rCtx.lineWidth = 4.2
                        rCtx.stroke()
                    }
                    rCtx.strokeStyle = e > 0.05
                        ? (cornerIsBlue
                            ? `rgba(${Math.round(147 + 96 * e)}, ${Math.round(212 + 40 * e)}, 255, ${(0.36 + 0.64 * e).toFixed(3)})`
                            : `rgba(255, ${Math.round(230 + 22 * e)}, ${Math.round(148 + 82 * e)}, ${(0.36 + 0.64 * e).toFixed(3)})`)
                        : "rgba(204, 214, 232, 0.32)"
                    rCtx.lineWidth = 1.45 + e * 0.75
                    rCtx.stroke()

                    for (let k = 0; k < 3; k++) {
                        rCtx.beginPath()
                        const yy = c.ty + c.dy * k
                        rCtx.moveTo(c.tx - 2.5, yy)
                        rCtx.lineTo(c.tx + 2.5, yy)
                        rCtx.strokeStyle = e > 0.08
                            ? (cornerIsBlue
                                ? `rgba(125, 211, 252, ${((0.28 - k * 0.06) + e * 0.6).toFixed(3)})`
                                : `rgba(254, 240, 166, ${((0.28 - k * 0.06) + e * 0.62).toFixed(3)})`)
                            : `rgba(196, 208, 228, ${(0.24 - k * 0.06).toFixed(3)})`
                        rCtx.lineWidth = 1.1
                        rCtx.stroke()
                    }
                    rCtx.restore()
                })

                const barW = compact ? 54 : 96
                rCtx.strokeStyle = "rgba(204, 214, 232, 0.22)"
                rCtx.lineWidth = 1.2
                rCtx.beginPath()
                rCtx.moveTo(padR + cw * 0.5 - barW * 0.5, oy)
                rCtx.lineTo(padR + cw * 0.5 + barW * 0.5, oy)
                rCtx.moveTo(padR + cw * 0.5 - barW * 0.5, oy + oh)
                rCtx.lineTo(padR + cw * 0.5 + barW * 0.5, oy + oh)
                rCtx.stroke()

                rCtx.globalCompositeOperation = "lighter"
                traceRoundedRectPath(rCtx, padR, padR, cw, ch, rad)
                rCtx.strokeStyle = "rgba(210, 220, 238, 0.18)"
                rCtx.lineWidth = 1
                rCtx.stroke()

                for (let b = 0; b < heads.length; b++) {
                    const isBlue = b === 0
                    const headT = heads[b]
                    const segs = 34
                    const tailLen = 0.24
                    for (let s = 0; s < segs; s++) {
                        const t0 = headT - (s / segs) * tailLen
                        const t1 = headT - ((s + 1) / segs) * tailLen
                        const p0 = sampleRoundedRect(t0, cw, ch, rad)
                        const p1 = sampleRoundedRect(t1, cw, ch, rad)
                        const prog = s / segs
                        const fade = Math.pow(1 - prog, 2.0)

                        rCtx.beginPath()
                        rCtx.moveTo(padR + p0.x, padR + p0.y)
                        rCtx.lineTo(padR + p1.x, padR + p1.y)
                        if (isBlue) {
                            rCtx.strokeStyle = `rgba(${Math.round(96 - prog * 58)}, ${Math.round(205 - prog * 100)}, 252, ${(0.76 * fade).toFixed(3)})`
                        } else {
                            rCtx.strokeStyle = `rgba(254, ${Math.round(234 - prog * 68)}, ${Math.round(142 - prog * 98)}, ${(0.82 * fade).toFixed(3)})`
                        }
                        rCtx.lineWidth = 3.6 * fade + 0.6
                        rCtx.stroke()

                        rCtx.beginPath()
                        rCtx.moveTo(padR + p0.x, padR + p0.y)
                        rCtx.lineTo(padR + p1.x, padR + p1.y)
                        rCtx.strokeStyle = isBlue
                            ? `rgba(${Math.round(236 - prog * 70)}, ${Math.round(248 - prog * 30)}, 255, ${(1.0 * fade).toFixed(3)})`
                            : `rgba(255, ${Math.round(252 - prog * 28)}, ${Math.round(236 - prog * 88)}, ${(1.0 * fade).toFixed(3)})`
                        rCtx.lineWidth = 1.65 * fade + 0.25
                        rCtx.stroke()
                    }

                    const hp = sampleRoundedRect(headT, cw, ch, rad)
                    const hx = padR + hp.x
                    const hy = padR + hp.y
                    const angle = Math.atan2(hp.ty, hp.tx)
                    rCtx.save()
                    rCtx.translate(hx, hy)
                    rCtx.rotate(angle)
                    const streakX = compact ? 22 : 36
                    const streakY = compact ? 3.2 : 4.6
                    rCtx.scale(streakX, streakY)
                    const sg = rCtx.createRadialGradient(0, 0, 0, 0, 0, 1)
                    if (isBlue) {
                        sg.addColorStop(0, "rgba(255, 255, 255, 0.98)")
                        sg.addColorStop(0.28, "rgba(125, 211, 252, 0.78)")
                        sg.addColorStop(0.68, "rgba(37, 99, 235, 0.22)")
                        sg.addColorStop(1, "rgba(30, 64, 175, 0)")
                    } else {
                        sg.addColorStop(0, "rgba(255, 255, 248, 0.98)")
                        sg.addColorStop(0.28, "rgba(254, 240, 166, 0.84)")
                        sg.addColorStop(0.68, "rgba(234, 179, 54, 0.24)")
                        sg.addColorStop(1, "rgba(180, 130, 20, 0)")
                    }
                    rCtx.fillStyle = sg
                    rCtx.beginPath()
                    rCtx.arc(0, 0, 1, 0, Math.PI * 2)
                    rCtx.fill()
                    rCtx.restore()
                }

                rCtx.restore()
            }

            // Static high-impact pose right at top-right & bottom-left corners for instant wow
            drawStealthFrame(2.45)
            const auraStart = performance.now() - 2450
            const isCanvasStatic = false
            const loopStealth = (now: number) => {
                auraRaf = 0
                if (document.hidden || (hero && hero.classList.contains("hero-paused"))) return
                drawStealthFrame((now - auraStart) / 1000)
                auraRaf = requestAnimationFrame(loopStealth)
            }
            wakeStealthLoop = () => {
                if (isCanvasStatic || auraRaf || document.hidden || (hero && hero.classList.contains("hero-paused"))) return
                auraRaf = requestAnimationFrame(loopStealth)
            }
            document.addEventListener("visibilitychange", () => { if (!document.hidden && wakeStealthLoop) wakeStealthLoop() }, { passive: true, signal: listeners.signal })
            if (!isCanvasStatic) {
                auraRaf = requestAnimationFrame(loopStealth)
            }
            window.addEventListener("resize", () => { cw = 0; drawStealthFrame((performance.now() - auraStart) / 1000) }, { passive: true, signal: listeners.signal })
        }
    }
    const heroDock = root.querySelector<HTMLElement>("#hero .ep-glass-dock")
    let heroTiltRaf = 0
    let heroTiltCurrent = 0
    let heroTiltTarget = 0
    let heroTiltLast = 0
    let cachedNarrow = root.clientWidth <= 720
    let cachedRange = cachedNarrow ? 220 : Math.max(280, Math.min(440, window.innerHeight * 0.45))
    const syncTiltMetrics = () => {
        cachedNarrow = root.clientWidth <= 720
        cachedRange = cachedNarrow ? 220 : Math.max(280, Math.min(440, window.innerHeight * 0.45))
    }
    const getScrollY = (overrideY?: number) => {
        if (typeof overrideY === "number") return Math.max(0, overrideY)
        const winY = window.scrollY || document.documentElement.scrollTop || 0
        if (winY > 0) return winY
        return hero ? Math.max(0, -hero.getBoundingClientRect().top) : 0
    }
    const isDesignCanvas = false
    const getHeroTiltTarget = (overrideY?: number) => {
        if (isDesignCanvas) return 0
        const raw = Math.min(1, Math.max(0, getScrollY(overrideY) / cachedRange))
        return 1 - Math.pow(1 - raw, 2.2)
    }
    const applyHeroTilt = (p: number) => {
        if (!heroChassis) return
        if (p >= 0.996) {
            if (heroChassis.dataset.upright === "true") return
            heroChassis.dataset.upright = "true"
            heroChassis.style.removeProperty("transform")
            heroChassis.style.removeProperty("will-change")
            if (heroDock) {
                heroDock.dataset.upright = "true"
                heroDock.style.removeProperty("transform")
                heroDock.style.removeProperty("will-change")
            }
            return
        }
        delete heroChassis.dataset.upright
        const narrow = root.clientWidth <= 720
        const maxDeg = narrow ? 15 : 28
        const minScale = narrow ? 0.95 : 0.86
        const startY = narrow ? -10 : -22
        const persp = narrow ? 1000 : 1150
        const inv = 1 - p
        const deg = (maxDeg * inv).toFixed(3)
        const sc = (minScale + (1 - minScale) * p).toFixed(4)
        const ty = (startY * inv).toFixed(2)
        heroChassis.style.willChange = "transform"
        heroChassis.style.transform = `perspective(${persp}px) translateY(${ty}px) scale(${sc}) rotateX(${deg}deg)`
        if (heroDock) {
            delete heroDock.dataset.upright
            const dockY = ((narrow ? -14 : -34) * inv).toFixed(2)
            const dockSc = ((narrow ? 0.97 : 0.94) + (narrow ? 0.03 : 0.06) * p).toFixed(4)
            heroDock.style.willChange = "transform"
            heroDock.style.transform = `translateY(${dockY}px) scale(${dockSc})`
        }
    }
    const tickHeroTilt = (now: number) => {
        heroTiltRaf = 0
        heroTiltTarget = getHeroTiltTarget()
        const dt = heroTiltLast ? Math.min(64, Math.max(1, now - heroTiltLast)) : 16
        heroTiltLast = now
        const follow = motion.matches ? 1 : 1 - Math.exp(-dt / 72)
        heroTiltCurrent += (heroTiltTarget - heroTiltCurrent) * follow
        if (Math.abs(heroTiltTarget - heroTiltCurrent) < 0.0012) {
            heroTiltCurrent = heroTiltTarget
            heroTiltLast = 0
            applyHeroTilt(heroTiltCurrent)
            return
        }
        applyHeroTilt(heroTiltCurrent)
        heroTiltRaf = requestAnimationFrame(tickHeroTilt)
    }
    const onEpScrollTilt = (ev: Event) => {
        const y = (ev as CustomEvent<{ y: number }>).detail?.y
        const t = getHeroTiltTarget(y)
        if (heroTiltRaf) { cancelAnimationFrame(heroTiltRaf); heroTiltRaf = 0; heroTiltLast = 0 }
        heroTiltCurrent = t
        heroTiltTarget = t
        applyHeroTilt(t)
    }
    const scheduleHeroTilt = () => {
        if ((window as any).__epSmoothActive) return
        heroTiltTarget = getHeroTiltTarget()
        if (!heroTiltRaf) heroTiltRaf = requestAnimationFrame(tickHeroTilt)
    }
    const onResizeTilt = () => { syncTiltMetrics(); heroTiltCurrent = heroTiltTarget = getHeroTiltTarget(); applyHeroTilt(heroTiltCurrent) }
    heroTiltCurrent = getHeroTiltTarget()
    heroTiltTarget = heroTiltCurrent
    applyHeroTilt(heroTiltCurrent)
    window.addEventListener("ep:scroll", onEpScrollTilt, { passive: true, signal: listeners.signal })
    window.addEventListener("scroll", scheduleHeroTilt, { passive: true, signal: listeners.signal })
    window.addEventListener("resize", onResizeTilt, { passive: true, signal: listeners.signal })
    const stopMotion = () => { if (motion.matches) { running.forEach(a => a.cancel()); resetTilt() } scheduleHeroTilt() }
    motion.addEventListener("change",stopMotion,options)
    // Scroll within this instance, including Framer Preview and standalone HTML.
    root.addEventListener("click",event => {
        if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
        const anchor = event.target instanceof Element && event.target.closest("a[href^='#']")
        if (!anchor) return
        const target = root.querySelector<HTMLElement>(anchor.getAttribute("href"))
        if (!target) return
        event.preventDefault()
        target.setAttribute("tabindex","-1")
        target.focus({preventScroll:true})
        const epScroll = !motion.matches ? (window as any).__epScrollTo : null
        if (typeof epScroll === "function") epScroll(target)
        else target.scrollIntoView({behavior:motion.matches?"auto":"smooth",block:"start"})
    },options)
    return () => { cancelAnimationFrame(auraRaf); cancelAnimationFrame(heroTiltRaf); heroVisibility?.disconnect(); bentoMotion?.disconnect(); observer?.disconnect(); listeners.abort(); running.forEach(a => a.cancel()); resetTilt() }
}

interface Props {
    roomySpacing?: boolean
    style?: React.CSSProperties
    catalogCount?: number
}

export default function ElitePlayLanding({
    style,
    roomySpacing = true,
    catalogCount = DEFAULT_CATALOG_COUNT,
}: Props) {
    const root = React.useRef<HTMLDivElement>(null)
    const isStatic = false
    const formattedExact = formatCount(catalogCount)
    const formattedPlus = `${formattedExact}+`

    const beforeHtml = React.useMemo(
        () => beforeProcess.replaceAll("211.000+", formattedPlus),
        [formattedPlus],
    )
    const afterHtml = React.useMemo(
        () =>
            afterProcess
                .replaceAll("211.000+", formattedPlus)
                .replaceAll("217.000+", formattedExact),
        [formattedPlus, formattedExact],
    )

    React.useEffect(() => {
        if (root.current) return activatePage(root.current, isStatic, catalogCount)
    }, [isStatic, catalogCount])
    return (
        <div ref={root} data-roomy={roomySpacing ? "on" : "off"} className="zento-elite-site" style={{ ...style, width: "100%" }}>
            <main id="zento-elite-play-glass" className="artboard">
                <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: beforeHtml }} />
                <HowItWorksInteractive catalogCount={catalogCount} badgeText="" heading="Cara pakai ElitePlay" subtitle="Pilih game incaranmu di launcher, klik Add to Steam, lalu mainkan dari library pribadimu." />
                <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: afterHtml }} />
                <EcosystemHub3D />
                <BottomSections catalogCount={catalogCount} />
            </main>
        </div>
    )
}

