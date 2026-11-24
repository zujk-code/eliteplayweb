"use client"

import * as React from "react"
import { siteConfig } from "@/config/site"
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "framer-motion"
const LOGO_HORIZONTAL_GOLD = "/images/brand/footer-wordmark.png"
const MONUMENT_LOGO_URL = "/images/brand/footer-monument.png"

const GAME_COVERS = [
    {
        id: "pbz",
        title: "Phantom Blade Zero",
        meta: "Action RPG · Steam Library",
        img: "/images/cta/cover-01.jpg",
        baseRotate: -13,
        baseY: 14,
        depth: 0.7,
    },
    {
        id: "onimusha",
        title: "Onimusha: Way of the Sword",
        meta: "Action · Steam Library",
        img: "/images/cta/cover-02.jpg",
        baseRotate: -4.5,
        baseY: 2,
        depth: 1.0,
    },
    {
        id: "re",
        title: "Resident Evil Requiem",
        meta: "Survival Horror · Steam Library",
        img: "/images/cta/cover-03.jpg",
        baseRotate: 4.5,
        baseY: 3,
        depth: 1.15,
    },
    {
        id: "fc27",
        title: "EA SPORTS FC 27",
        meta: "Sports · Aktivasi Premium",
        img: "/images/cta/cover-04.jpg",
        baseRotate: 13.5,
        baseY: 16,
        depth: 0.85,
    },
]

type FaqCat = "all" | "paket" | "steam" | "teknis"

interface FaqItem {
    id: string
    cat: Exclude<FaqCat, "all">
    q: string
    a: string
}

const FAQ_TABS: { id: FaqCat; label: string }[] = [
    { id: "all", label: "Semua" },
    { id: "paket", label: "Paket" },
    { id: "steam", label: "Steam" },
    { id: "teknis", label: "Teknis" },
]

const FAQ_ITEMS: FaqItem[] = [
    {
        id: "faq-diff",
        cat: "paket",
        q: "Apa bedanya Standard (Rp99.000) dan Premium (Rp199.000)?",
        a: "Keduanya sekali bayar dengan akses Add to Steam seumur hidup, sudah termasuk DLC, Cloud Save, dan Achievement di akun Steam sendiri. Standard mencakup 60.000+ game katalog tetap untuk 1 PC Windows. Premium membuka 211.000+ game dengan penambahan game baru setiap hari, bisa dipakai di 2 PC Windows sekaligus, bonus 800+ Game Pass Offline, serta 1 bulan layanan aktivasi Denuvo & launcher pihak ketiga.",
    },
    {
        id: "faq-lifetime",
        cat: "paket",
        q: "Apakah akses Add to Steam benar-benar seumur hidup?",
        a: "Ya. Biaya Rp99.000 atau Rp199.000 cukup dibayar sekali untuk lisensi launcher dan akses Add to Steam seumur hidup, tanpa biaya bulanan wajib.",
    },
    {
        id: "faq-denuvo",
        cat: "teknis",
        q: "Bagaimana aturan aktivasi Denuvo & launcher pihak ketiga setelah 1 bulan?",
        a: "Paket Premium sudah termasuk 1 bulan layanan aktivasi untuk game Denuvo serta launcher pihak ketiga (EA, Rockstar, Ubisoft). Setelah itu, perpanjangan bersifat opsional lewat menu Subscription mulai Rp60.000/bulan. Jika tidak diperpanjang, launcher dan akses Add to Steam tetap berlaku seperti biasa.",
    },
    {
        id: "faq-cloud",
        cat: "steam",
        q: "Apakah Cloud Save dan Achievement tersimpan di akun Steam pribadi?",
        a: "Ya. Begitu kamu klik Add to Steam, game langsung masuk ke Perpustakaan akun Steam pribadimu sehingga Cloud Save dan Achievement tercatat langsung di profilmu.",
    },
    {
        id: "faq-hwid",
        cat: "teknis",
        q: "Bagaimana jika saya instal ulang Windows atau ganti PC?",
        a: "Lisensi terhubung ke perangkat Windows (1 PC untuk Standard, 2 PC untuk Premium). Jika suatu saat kamu instal ulang Windows atau pindah perangkat, cukup hubungi CS ElitePlay untuk bantuan Reset HWID.",
    },
    {
        id: "faq-req",
        cat: "steam",
        q: "Perangkat apa saja yang didukung ElitePlay Launcher?",
        a: "ElitePlay Launcher dibuat khusus untuk PC Windows (Windows 10 dan Windows 11) dengan aplikasi Steam terpasang. Spesifikasi minimum bermain mengikuti kebutuhan masing-masing game di Steam.",
    },
    {
        id: "faq-order",
        cat: "paket",
        q: "Bagaimana alur beli di Shopee sampai bisa main?",
        a: "Checkout paket pilihanmu di toko resmi Shopee ElitePlay. Setelah pesanan diproses, kamu menerima kode lisensi dan link unduh launcher. Masukkan lisensi di aplikasi Windows, cari judul favoritmu, lalu klik Add to Steam.",
    },
]

const bottomStyles = `
/* =====================================================================
   ELITEPLAY EDITORIAL BOTTOM: FAQ + SOLID GOLD CTA + ARCHITECTURAL FOOTER
   ===================================================================== */
.ep-ed-scope {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  color: var(--white, #ffffff);
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  overflow: clip;
  container-type: inline-size;
  box-sizing: border-box;
}
.ep-ed-scope *,
.ep-ed-scope *::before,
.ep-ed-scope *::after {
  box-sizing: border-box;
}

/* ---------- 1. EDITORIAL HAIRLINE FAQ (#faq) ---------- */
section.ep-ed-faq {
  padding: clamp(64px, 7cqw, 104px) 0 clamp(56px, 6cqw, 92px);
}
.ep-ed-scope .ep-ed-faq-grid {
  width: min(1040px, 90%);
  display: grid;
  grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
  gap: clamp(32px, 5.5cqw, 80px);
  align-items: start;
}
.ep-ed-scope .ep-ed-faq-rail {
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.ep-ed-scope h2.ep-ed-faq-title {
  margin: 0;
  color: var(--glass-pearl, #f6f7fa);
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: clamp(32px, 4.1cqw, 52px);
  font-weight: 700;
  line-height: 1.03;
  letter-spacing: -0.055em;
}
.ep-ed-scope p.ep-ed-faq-sub {
  margin: 0;
  color: #9098a8;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.55;
  max-width: 28ch;
}
/* Minimal Typographic Underline Filter (NO puffy pills!) */
.ep-ed-scope .ep-ed-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.ep-ed-scope button.ep-ed-tab {
  position: relative;
  padding: 0 0 11px;
  border: 0;
  background: transparent;
  color: #7c8494;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  transition: color 0.2s ease;
}
.ep-ed-scope button.ep-ed-tab:hover {
  color: #e4e8f0;
}
.ep-ed-scope button.ep-ed-tab.is-on {
  color: #ffffff;
  font-weight: 600;
}
.ep-ed-scope .ep-ed-tab-line {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: linear-gradient(90deg, #fde068 0%, #eab024 62%, #38bdf8 100%);
  border-radius: 999px;
}
.ep-ed-scope .ep-ed-cs-row {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13.5px;
  color: #767f90;
}
.ep-ed-scope button.ep-ed-textlink {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  align-self: flex-start;
  padding: 2px 0;
  border: 0;
  border-bottom: 1px solid rgba(245, 194, 62, 0.5);
  background: transparent;
  color: #f8cf52;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, gap 0.2s;
}
.ep-ed-scope button.ep-ed-textlink:hover {
  color: #fde068;
  border-color: #38bdf8;
  gap: 8px;
}
.ep-ed-scope .ep-ed-note {
  margin-top: 4px;
  font-size: 12px;
  color: #f6c944;
  line-height: 1.45;
}

/* Hairline Accordion Rows (NO bulky boxes!) */
.ep-ed-scope .ep-ed-faq-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.ep-ed-scope .ep-ed-row {
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.ep-ed-scope .ep-ed-row-glow {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, #fde068 0%, #eab024 36%, rgba(56, 189, 248, 0.44) 70%, transparent 100%);
  transform-origin: left center;
  pointer-events: none;
}
.ep-ed-scope button.ep-ed-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 4px;
  border: 0;
  background: transparent;
  color: #d2d7e2;
  text-align: left;
  cursor: pointer;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  transition: color 0.22s ease;
}
.ep-ed-scope button.ep-ed-trigger:hover {
  color: #ffffff;
}
.ep-ed-scope .ep-ed-row.is-open button.ep-ed-trigger {
  color: #ffffff;
}
.ep-ed-scope .ep-ed-q {
  font-size: clamp(15.5px, 1.45cqw, 18px);
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: -0.02em;
  transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1);
}
.ep-ed-scope button.ep-ed-trigger:hover .ep-ed-q {
  transform: translateX(4px);
}
/* Minimal Hairline Crosshair (+ -> -) */
.ep-ed-scope .ep-ed-cross {
  position: relative;
  flex: none;
  width: 16px;
  height: 16px;
}
.ep-ed-scope .ep-ed-cross-h,
.ep-ed-scope .ep-ed-cross-v {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 999px;
  background: #7c8494;
  transition: background 0.22s ease;
}
.ep-ed-scope .ep-ed-cross-h {
  width: 14px;
  height: 1.5px;
  margin-left: -7px;
  margin-top: -0.75px;
}
.ep-ed-scope .ep-ed-cross-v {
  width: 1.5px;
  height: 14px;
  margin-left: -0.75px;
  margin-top: -7px;
}
.ep-ed-scope button.ep-ed-trigger:hover .ep-ed-cross-h,
.ep-ed-scope button.ep-ed-trigger:hover .ep-ed-cross-v {
  background: #ffffff;
}
.ep-ed-scope .ep-ed-row.is-open .ep-ed-cross-h {
  background: #f5cb4c;
}
.ep-ed-scope .ep-ed-ans-wrap {
  overflow: hidden;
}
.ep-ed-scope p.ep-ed-ans {
  margin: 0;
  padding: 0 40px 24px 4px;
  max-width: 62ch;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 14.5px;
  font-weight: 400;
  line-height: 1.66;
  color: #9098a8;
}

/* ---------- 2. SIGNATURE CHAMPAGNE-GOLD × RESTRAINED GLACIER HORIZON CTA (#get-started) ---------- */
section.ep-ed-cta {
  padding: clamp(20px, 3cqw, 40px) 0 clamp(64px, 7cqw, 100px);
}
.ep-ed-scope .ep-gold-stage {
  position: relative;
  width: min(1040px, 90%);
  border-radius: 24px;
  padding: clamp(32px, 4.4cqw, 56px) clamp(24px, 4.4cqw, 54px);
  overflow: hidden;
  border: 1px solid rgba(245, 194, 62, 0.36);
  background:
    radial-gradient(ellipse 72% 96% at 86% 18%, rgba(248, 198, 56, 0.64) 0%, rgba(218, 146, 22, 0.42) 40%, rgba(140, 86, 12, 0.18) 68%, transparent 94%),
    radial-gradient(ellipse 58% 72% at 62% 98%, rgba(56, 189, 248, 0.3) 0%, rgba(30, 64, 175, 0.22) 48%, transparent 86%),
    radial-gradient(ellipse 46% 62% at 6% 14%, rgba(56, 189, 248, 0.1) 0%, transparent 72%),
    linear-gradient(128deg, #0d0f15 0%, #13151e 44%, #201a14 74%, #291f12 100%);
  box-shadow:
    0 36px 84px rgba(0, 0, 0, 0.72),
    0 0 64px rgba(240, 180, 41, 0.14),
    inset 0 1px 0 rgba(253, 224, 104, 0.28);
  color: #f6f7fa;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
  gap: clamp(28px, 4cqw, 48px);
  align-items: center;
}
.ep-ed-scope .ep-gold-copy {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.ep-ed-scope h2.ep-gold-title {
  margin: 0;
  color: #ffffff;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: clamp(30px, 4.1cqw, 52px);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.055em;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.42);
}
.ep-ed-scope p.ep-gold-sub {
  margin: 0;
  color: #d2d7e2;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: clamp(14.5px, 1.4cqw, 16.5px);
  font-weight: 450;
  line-height: 1.52;
  max-width: 36ch;
}
.ep-ed-scope .ep-gold-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
}
.ep-ed-scope button.ep-btn-ink {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 13px 24px;
  border-radius: 999px;
  border: 1px solid rgba(253, 224, 104, 0.82);
  background: linear-gradient(135deg, #fde068 0%, #f0b429 52%, #d48814 100%);
  color: #0a0b10;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 14.5px;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
  box-shadow: 0 14px 34px rgba(10, 12, 18, 0.48), 0 0 24px rgba(240, 180, 41, 0.3), inset 0 1px 0 rgba(255, 240, 170, 0.68);
  transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), filter 0.2s, box-shadow 0.22s;
}
.ep-ed-scope button.ep-btn-ink:hover {
  filter: brightness(1.06);
  transform: translateY(-2px);
  box-shadow: 0 18px 38px rgba(10, 12, 18, 0.56), 0 0 30px rgba(245, 194, 58, 0.44), inset 0 1px 0 rgba(255, 244, 186, 0.78);
}
.ep-ed-scope button.ep-btn-ink .ep-arr {
  display: inline-block;
  transition: transform 0.22s ease;
}
.ep-ed-scope button.ep-btn-ink:hover .ep-arr {
  transform: translate(2px, -2px);
}
.ep-ed-scope button.ep-btn-ghost-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 13px 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(14, 16, 22, 0.48);
  backdrop-filter: blur(8px);
  color: #f4f6fb;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}
.ep-ed-scope button.ep-btn-ghost-dark:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.44);
  transform: translateY(-2px);
}
.ep-ed-scope .ep-gold-note {
  font-size: 12.5px;
  font-weight: 600;
  color: #f7ca48;
}

/* Interactive Tactile 4-Cover AAA Shelf */
.ep-ed-scope .ep-fan-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.ep-ed-scope .ep-fan {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px 8px 10px;
  width: 100%;
  min-height: 220px;
}
.ep-ed-scope button.ep-cover-btn {
  position: relative;
  padding: 0;
  border: 0;
  background: transparent;
  width: 28%;
  max-width: 124px;
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  cursor: pointer;
  flex: none;
  transform-origin: bottom center;
}
.ep-ed-scope button.ep-cover-btn + button.ep-cover-btn {
  margin-left: -6%;
}
.ep-ed-scope .ep-cover-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: 1.5px solid rgba(255, 246, 214, 0.48);
  box-shadow: 0 18px 34px rgba(8, 9, 14, 0.64);
  user-select: none;
  -webkit-user-drag: none;
}
.ep-ed-scope .ep-fan-caption {
  min-height: 20px;
  text-align: center;
  line-height: 1.38;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #f8f6ee;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
}
.ep-ed-scope .ep-fan-caption span.ep-fan-muted {
  font-weight: 500;
  opacity: 0.72;
  margin-left: 6px;
}

/* ---------- 3. MONUMENTAL QUIET ARCHITECTURAL FOOTER (#footer) ---------- */
footer.ep-ed-footer {
  padding: clamp(44px, 5cqw, 72px) 0 clamp(30px, 3.4cqw, 44px);
  border-top: none;
  background: transparent;
}
.ep-ed-scope .ep-ft-wrap {
  width: min(1040px, 90%);
  display: flex;
  flex-direction: column;
}
.ep-ed-scope .ep-ft-top {
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(0, 0.85fr) minmax(0, 1fr) minmax(0, 0.85fr);
  gap: clamp(26px, 4cqw, 52px);
  align-items: start;
}
.ep-ed-scope .ep-ft-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}
.ep-ed-scope .ep-ft-logo {
  height: 28px;
  width: auto;
  display: block;
  object-fit: contain;
}
.ep-ed-scope p.ep-ft-desc {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.55;
  color: #828a9a;
  max-width: 28ch;
}
.ep-ed-scope .ep-ft-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ep-ed-scope h3.ep-ft-head {
  margin: 0 0 4px;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 12px;
  font-weight: 600;
  color: #6e7686;
  letter-spacing: 0.01em;
}
.ep-ed-scope a.ep-ft-link,
.ep-ed-scope button.ep-ft-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  align-self: flex-start;
  padding: 1px 0;
  border: 0;
  background: transparent;
  color: #a5adbd;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.18s ease;
}
.ep-ed-scope a.ep-ft-link:hover,
.ep-ed-scope button.ep-ft-link:hover {
  color: #ffffff;
}
.ep-ed-scope .ep-ft-ext {
  font-size: 11px;
  opacity: 0.55;
  transition: transform 0.2s ease, opacity 0.2s ease, color 0.2s ease;
}
.ep-ed-scope button.ep-ft-link:hover .ep-ft-ext {
  opacity: 1;
  color: #f5cb4c;
  transform: translate(2px, -2px);
}

/* Monumental Cursor-Illuminated Official ELITEPLAY + Rook Asset */
.ep-ed-scope .ep-ft-monument {
  position: relative;
  display: grid;
  isolation: isolate;
  width: 100%;
  margin-top: clamp(36px, 4.8cqw, 64px);
  user-select: none;
  overflow: visible;
}
.ep-ed-scope .ep-ft-svg-base,
.ep-ed-scope .ep-ft-svg-lit {
  grid-area: 1 / 1;
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 3200 / 440;
  object-fit: contain;
  pointer-events: none;
  -webkit-user-drag: none;
}
.ep-ed-scope .ep-ft-svg-base {
  opacity: 0.15;
  filter: saturate(0.28) brightness(1.1);
  -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.32) 100%);
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.32) 100%);
}
.ep-ed-scope .ep-ft-svg-lit {
  opacity: 0;
  transition: opacity 300ms ease;
  filter: saturate(0.95) brightness(1.1) drop-shadow(0 0 22px rgba(245, 203, 76, 0.42));
  -webkit-mask-image: radial-gradient(circle 290px at var(--fx, 50%) var(--fy, 50%), black 12%, transparent 86%);
  mask-image: radial-gradient(circle 290px at var(--fx, 50%) var(--fy, 50%), black 12%, transparent 86%);
}
.ep-ed-scope .ep-ft-monument:hover .ep-ft-svg-lit {opacity: 1;}
.ep-ed-scope .ep-ft-bar {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
}
.ep-ed-scope .ep-ft-legal {
  font-size: 12px;
  color: #6e7686;
  line-height: 1.5;
}
.ep-ed-scope button.ep-ft-topbtn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 0;
  border: 0;
  background: transparent;
  color: #8f8a7e;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
}
.ep-ed-scope button.ep-ft-topbtn:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

/* Wide desktop (1440px–1920px) scale */
@media (min-width: 1180px) {
  .ep-ed-scope .ep-ed-faq-grid { width: min(1520px, 88%); gap: clamp(40px, 4.4vw, 88px); }
  .ep-ed-scope h2.ep-ed-faq-title { font-size: clamp(40px, 3.1vw, 56px); }
  .ep-ed-scope .ep-gold-stage { width: min(1520px, 88%); padding: clamp(44px, 3.6vw, 68px) clamp(38px, 3.8vw, 72px); }
  .ep-ed-scope h2.ep-gold-title { font-size: clamp(40px, 3.1vw, 58px); }
  .ep-ed-scope p.ep-gold-sub { font-size: clamp(15.5px, 1.05vw, 18.5px); max-width: 42ch; }
  .ep-ed-scope button.ep-cover-btn { max-width: 158px; }
  .ep-ed-scope .ep-ft-wrap { width: min(1520px, 88%); }
}
@container (max-width: 860px) {
  .ep-ed-scope .ep-ed-faq-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .ep-ed-scope .ep-ed-faq-rail {
    position: static;
  }
  .ep-ed-scope .ep-gold-stage {
    grid-template-columns: minmax(0, 1fr);
    text-align: center;
  }
  .ep-ed-scope .ep-gold-copy {
    align-items: center;
    order: 2;
  }
  .ep-ed-scope .ep-fan-wrap {
    order: 1;
  }
  .ep-ed-scope .ep-gold-actions {
    justify-content: center;
  }
  .ep-ed-scope .ep-ft-top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@container (max-width: 560px) {
  .ep-ed-scope .ep-ft-top {
    grid-template-columns: minmax(0, 1fr);
  }
  .ep-ed-scope button.ep-ed-trigger {
    padding: 18px 2px;
    gap: 16px;
  }
  .ep-ed-scope p.ep-ed-ans {
    padding: 0 6px 20px 2px;
  }
  .ep-ed-scope .ep-gold-actions {
    width: 100%;
  }
  .ep-ed-scope button.ep-btn-ink,
  .ep-ed-scope button.ep-btn-ghost-dark {
    width: 100%;
  }
  .ep-ed-scope .ep-fan {
    min-height: 158px;
    padding-top: 18px;
  }
}
`

export interface BottomSectionsProps {
    style?: React.CSSProperties
    shopeeUrl?: string
    csUrl?: string
    discordUrl?: string
}

export default function ElitePlayBottomSections({
    style,
    shopeeUrl = siteConfig.links.shopee,
    csUrl = "",
    discordUrl = siteConfig.links.discord,
}: BottomSectionsProps) {
    const reduced = Boolean(useReducedMotion())
    const [activeCat, setActiveCat] = React.useState<FaqCat>("all")
    const [openFaqId, setOpenFaqId] = React.useState<string>("faq-diff")
    const [activeCover, setActiveCover] = React.useState<number>(1)
    const [hoveredCover, setHoveredCover] = React.useState<number | null>(null)
    const [parallax, setParallax] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [notice, setNotice] = React.useState<{ slot: string; text: string } | null>(null)

    const noticeTimer = React.useRef<number | null>(null)
    const showNotice = (slot: string, text: string) => {
        if (noticeTimer.current) window.clearTimeout(noticeTimer.current)
        setNotice({ slot, text })
        noticeTimer.current = window.setTimeout(() => setNotice(null), 4000)
    }

    React.useEffect(() => () => { if (noticeTimer.current) window.clearTimeout(noticeTimer.current) }, [])

    const filteredFaqs = activeCat === "all" ? FAQ_ITEMS : FAQ_ITEMS.filter((item) => item.cat === activeCat)

    const scrollToId = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        const epScroll = !reduced && typeof window !== "undefined" ? (window as any).__epScrollTo : null
        if (typeof epScroll === "function") epScroll(el)
        else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" })
    }

    const jumpToFaq = (faqId: string) => {
        setActiveCat("all")
        setOpenFaqId(faqId)
        scrollToId("faq")
    }

    const openOrNotice = (url: string, slot: string, fallbackText: string) => {
        if (url && url.trim()) {
            window.open(url.trim(), "_blank", "noopener,noreferrer")
        } else {
            showNotice(slot, fallbackText)
        }
    }

    const handleCtaPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (reduced || e.pointerType === "touch") return
        const r = e.currentTarget.getBoundingClientRect()
        const nx = (e.clientX - r.left) / r.width - 0.5
        const ny = (e.clientY - r.top) / r.height - 0.5
        setParallax({ x: nx * 12, y: ny * 8 })
    }

    const handleMonumentMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (reduced || e.pointerType === "touch") return
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--fx", `${(e.clientX - r.left).toFixed(1)}px`)
        e.currentTarget.style.setProperty("--fy", `${(e.clientY - r.top).toFixed(1)}px`)
    }

    const focusedIdx = hoveredCover !== null ? hoveredCover : activeCover
    const focusedGame = GAME_COVERS[focusedIdx]

    return (
        <div style={{ display: "contents", ...style }}>
            <style>{bottomStyles}</style>

            {/* ==================== 1. EDITORIAL HAIRLINE FAQ ==================== */}
            <section
                id="faq"
                data-backdrop="faq"
                aria-label="Pertanyaan umum"
                className="ep-ed-scope ep-ed-faq"
            >
                <div className="ep-ed-faq-grid">
                    <div className="ep-ed-faq-rail">
                        <h2 className="ep-ed-faq-title">
                            Pertanyaan
                            <br />
                            umum.
                        </h2>
                        <p className="ep-ed-faq-sub">
                            Hal yang paling sering ditanyakan soal paket, akun Steam pribadi, dan aktivasi.
                        </p>

                        <LayoutGroup id="ep-ed-faq-tabs">
                            <div className="ep-ed-tabs" role="tablist" aria-label="Kategori FAQ">
                                {FAQ_TABS.map((tab) => {
                                    const on = activeCat === tab.id
                                    return (
                                        <button
                                            key={tab.id}
                                            type="button"
                                            role="tab"
                                            aria-selected={on}
                                            className={`ep-ed-tab${on ? " is-on" : ""}`}
                                            onClick={() => {
                                                setActiveCat(tab.id)
                                                const list =
                                                    tab.id === "all"
                                                        ? FAQ_ITEMS
                                                        : FAQ_ITEMS.filter((it) => it.cat === tab.id)
                                                if (list.length && !list.some((it) => it.id === openFaqId)) {
                                                    setOpenFaqId(list[0].id)
                                                }
                                            }}
                                        >
                                            <span>{tab.label}</span>
                                            {on && (
                                                <motion.span
                                                    layoutId="epFaqLine"
                                                    className="ep-ed-tab-line"
                                                    aria-hidden="true"
                                                    transition={
                                                        reduced
                                                            ? { duration: 0 }
                                                            : { type: "spring", stiffness: 420, damping: 32 }
                                                    }
                                                />
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        </LayoutGroup>

                        <div className="ep-ed-cs-row">
                            <span>Masih ada pertanyaan khusus?</span>
                            <button
                                type="button"
                                className="ep-ed-textlink"
                                onClick={() =>
                                    openOrNotice(
                                        csUrl,
                                        "faq-cs",
                                        "Link CS ElitePlay siap dihubungkan lewat panel URL Framer."
                                    )
                                }
                            >
                                <span>Tanya CS ElitePlay</span>
                                <span aria-hidden="true">↗</span>
                            </button>
                            {notice?.slot === "faq-cs" && (
                                <span className="ep-ed-note" role="status">
                                    {notice.text}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="ep-ed-faq-list">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {filteredFaqs.map((item) => {
                                const isOpen = openFaqId === item.id
                                return (
                                    <motion.div
                                        key={item.id}
                                        layout={!reduced}
                                        initial={reduced ? false : { opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={reduced ? undefined : { opacity: 0 }}
                                        transition={{ duration: 0.22 }}
                                        className={`ep-ed-row${isOpen ? " is-open" : ""}`}
                                    >
                                        {isOpen && (
                                            <motion.span
                                                className="ep-ed-row-glow"
                                                aria-hidden="true"
                                                initial={reduced ? false : { scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        )}

                                        <button
                                            type="button"
                                            className="ep-ed-trigger"
                                            aria-expanded={isOpen}
                                            aria-controls={item.id + "-panel"}
                                            onClick={() => setOpenFaqId(isOpen ? "" : item.id)}
                                        >
                                            <span className="ep-ed-q">{item.q}</span>
                                            <span className="ep-ed-cross" aria-hidden="true">
                                                <span className="ep-ed-cross-h" />
                                                <motion.span
                                                    className="ep-ed-cross-v"
                                                    animate={{
                                                        scaleY: isOpen ? 0 : 1,
                                                        opacity: isOpen ? 0 : 1,
                                                    }}
                                                    transition={{ duration: 0.22, ease: "easeOut" }}
                                                />
                                            </span>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    id={item.id + "-panel"}
                                                    className="ep-ed-ans-wrap"
                                                    initial={reduced ? false : { height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.28, ease: [0.22, 0.8, 0.22, 1] }}
                                                >
                                                    <p className="ep-ed-ans">{item.a}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ==================== 2. SOLID PLAYER-GOLD CTA + INTERACTIVE AAA FAN ==================== */}
            <section
                id="get-started"
                data-backdrop="get-started"
                aria-label="Mulai dengan ElitePlay"
                className="ep-ed-scope ep-ed-cta"
            >
                <div
                    className="ep-gold-stage"
                    onPointerMove={handleCtaPointerMove}
                    onPointerLeave={() => setParallax({ x: 0, y: 0 })}
                >
                    <div className="ep-gold-copy">
                        <h2 className="ep-gold-title">
                            Pilih game-nya.
                            <br />
                            Main di Steam kamu.
                        </h2>
                        <p className="ep-gold-sub">
                            Sekali bayar mulai Rp99.000 untuk akses Add to Steam seumur hidup di PC Windows.
                        </p>
                        <div className="ep-gold-actions">
                            <motion.button
                                type="button"
                                className="ep-btn-ink"
                                whileTap={reduced ? undefined : { scale: 0.97 }}
                                onClick={() =>
                                    openOrNotice(
                                        shopeeUrl,
                                        "cta",
                                        "Link checkout Shopee siap dihubungkan langsung di kontrol Framer."
                                    )
                                }
                            >
                                <span>Dapatkan Lisensi</span>
                                <span className="ep-arr" aria-hidden="true">↗</span>
                            </motion.button>

                            <motion.button
                                type="button"
                                className="ep-btn-ghost-dark"
                                whileTap={reduced ? undefined : { scale: 0.97 }}
                                onClick={() => scrollToId("pricing")}
                            >
                                <span>Lihat Paket</span>
                            </motion.button>
                        </div>
                        {notice?.slot === "cta" && (
                            <span className="ep-gold-note" role="status">
                                {notice.text}
                            </span>
                        )}
                    </div>

                    <div className="ep-fan-wrap">
                        <div
                            className="ep-fan"
                            onPointerLeave={() => setHoveredCover(null)}
                        >
                            {GAME_COVERS.map((g, idx) => {
                                const isFocused = hoveredCover === idx
                                const spreadX =
                                    hoveredCover === null
                                        ? 0
                                        : idx < hoveredCover
                                        ? -14
                                        : idx > hoveredCover
                                        ? 14
                                        : 0
                                return (
                                    <motion.button
                                        key={g.id}
                                        type="button"
                                        className="ep-cover-btn"
                                        aria-label={g.title}
                                        onPointerEnter={() => {
                                            setHoveredCover(idx)
                                            setActiveCover(idx)
                                        }}
                                        onFocus={() => {
                                            setHoveredCover(idx)
                                            setActiveCover(idx)
                                        }}
                                        onBlur={() => setHoveredCover(null)}
                                        onClick={() => setActiveCover(idx)}
                                        initial={{
                                            x: 0,
                                            y: g.baseY,
                                            rotate: g.baseRotate,
                                            scale: 1,
                                        }}
                                        animate={
                                            reduced
                                                ? { x: 0, y: g.baseY, rotate: g.baseRotate, scale: 1 }
                                                : {
                                                      x: spreadX + parallax.x * g.depth,
                                                      y: isFocused ? -20 : g.baseY + parallax.y * g.depth,
                                                      rotate: isFocused ? 0 : g.baseRotate,
                                                      scale: isFocused ? 1.09 : 1,
                                                      zIndex: isFocused ? 10 : idx + 1,
                                                  }
                                        }
                                        transition={{ type: "spring", stiffness: 320, damping: 24 }}
                                    >
                                        <img
                                            src={g.img}
                                            alt={g.title}
                                            loading="eager"
                                            className="ep-cover-img"
                                        />
                                    </motion.button>
                                )
                            })}
                        </div>

                        <div className="ep-fan-caption" aria-live="polite">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={focusedGame.id}
                                    initial={reduced ? false : { opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={reduced ? undefined : { opacity: 0, y: -5 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <span>{focusedGame.title}</span>
                                    <span className="ep-fan-muted">· {focusedGame.meta}</span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== 3. QUIET ARCHITECTURAL FOOTER ==================== */}
            <footer
                id="footer"
                data-backdrop="footer"
                aria-label="Footer ElitePlay"
                className="ep-ed-scope ep-ed-footer"
            >
                <div className="ep-ft-wrap">
                    <div className="ep-ft-top">
                        <div className="ep-ft-brand">
                            <img
                                src={LOGO_HORIZONTAL_GOLD}
                                alt="ElitePlay"
                                className="ep-ft-logo"
                                loading="eager"
                            />
                            <p className="ep-ft-desc">
                                Launcher Windows untuk menambah ribuan game langsung ke library Steam pribadimu.
                            </p>
                        </div>

                        <div className="ep-ft-col">
                            <h3 className="ep-ft-head">Produk</h3>
                            <a href="#process" className="ep-ft-link">Cara Kerja</a>
                            <a href="#features" className="ep-ft-link">Fitur</a>
                            <a href="/catalog" className="ep-ft-link">Katalog Game</a>
                            <a href="#pricing" className="ep-ft-link">Harga</a>
                            <a href="#faq" className="ep-ft-link">FAQ</a>
                        </div>

                        <div className="ep-ft-col">
                            <h3 className="ep-ft-head">Bantuan</h3>
                            <button type="button" className="ep-ft-link" onClick={() => scrollToId("process")}>
                                Panduan Aktivasi
                            </button>
                            <button type="button" className="ep-ft-link" onClick={() => jumpToFaq("faq-diff")}>
                                Standard vs Premium
                            </button>
                            <button type="button" className="ep-ft-link" onClick={() => jumpToFaq("faq-denuvo")}>
                                Aktivasi Denuvo
                            </button>
                            <button type="button" className="ep-ft-link" onClick={() => jumpToFaq("faq-hwid")}>
                                Reset HWID
                            </button>
                        </div>

                        <div className="ep-ft-col">
                            <h3 className="ep-ft-head">Kontak</h3>
                            <button
                                type="button"
                                className="ep-ft-link"
                                onClick={() => openOrNotice(shopeeUrl, "ft", "Link Shopee siap dipasang lewat kontrol Framer.")}
                            >
                                <span>Shopee</span>
                                <span className="ep-ft-ext" aria-hidden="true">↗</span>
                            </button>
                            <button
                                type="button"
                                className="ep-ft-link"
                                onClick={() => openOrNotice(csUrl, "ft", "Link WhatsApp CS siap dipasang lewat kontrol Framer.")}
                            >
                                <span>WhatsApp CS</span>
                                <span className="ep-ft-ext" aria-hidden="true">↗</span>
                            </button>
                            <button
                                type="button"
                                className="ep-ft-link"
                                onClick={() => openOrNotice(discordUrl, "ft", "Link Discord siap dipasang lewat kontrol Framer.")}
                            >
                                <span>Discord</span>
                                <span className="ep-ft-ext" aria-hidden="true">↗</span>
                            </button>
                            {notice?.slot === "ft" && (
                                <span className="ep-ed-note" role="status">
                                    {notice.text}
                                </span>
                            )}
                        </div>
                    </div>

                    <div
                        className="ep-ft-monument"
                        aria-hidden="true"
                        onPointerMove={handleMonumentMove}
                    >
                        <img
                            src={MONUMENT_LOGO_URL}
                            alt=""
                            width={3200}
                            height={440}
                            draggable={false}
                            decoding="async"
                            className="ep-ft-svg-base"
                        />
                        <img
                            src={MONUMENT_LOGO_URL}
                            alt=""
                            width={3200}
                            height={440}
                            draggable={false}
                            decoding="async"
                            className="ep-ft-svg-lit"
                        />
                    </div>

                    <div className="ep-ft-bar">
                        <span className="ep-ft-legal">
                            © 2026 ElitePlay · Steam dan seluruh merek dagang game adalah milik masing-masing pemegang hak cipta.
                        </span>
                        <button
                            type="button"
                            className="ep-ft-topbtn"
                            onClick={() => scrollToId("hero")}
                        >
                            <span>Kembali ke atas</span>
                            <span aria-hidden="true">↑</span>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

