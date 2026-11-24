"use client"

import * as React from "react"
import {
    motion,
    AnimatePresence,
    LayoutGroup,
    useReducedMotion,
    useInView,
} from "framer-motion"
interface FlowScene {
    id: string
    stepIndex: 0 | 1 | 2
    appName: "ElitePlay Launcher" | "Steam Library"
    isSteam?: boolean
    shortLabel: string
    stepTitle: string
    caption: string
    image: string
    dwellMs: number
    hotspot: {
        left: string
        top: string
        width: string
        height: string
        cx: number
        cy: number
        hint: string
        hintSide: "left" | "bottom" | "right"
        accent: "gold" | "steamBlue" | "steamGreen"
    }
}

const SCENES: FlowScene[] = [
    {
        id: "01-license",
        stepIndex: 0,
        appName: "ElitePlay Launcher",
        shortLabel: "Aktivasi Lisensi",
        stepTitle: "Langkah 01 · Aktivasi Lisensi",
        caption: "Buka ElitePlay Launcher di PC Windows, masukkan kode lisensi yang kamu terima, lalu klik Activate License.",
        image: "/images/hiw/step-01.png",
        dwellMs: 2400,
        hotspot: {
            left: "34.7%",
            top: "67.2%",
            width: "30.6%",
            height: "6.3%",
            cx: 50,
            cy: 70.3,
            hint: "Klik Activate License →",
            hintSide: "bottom",
            accent: "gold",
        },
    },
    {
        id: "02-search",
        stepIndex: 1,
        appName: "ElitePlay Launcher",
        shortLabel: "Cari Game",
        stepTitle: "Langkah 02 · Cari di Katalog",
        caption: "Ketik judul game favoritmu di kolom pencarian launcher—saran judul dari 211.000+ katalog Steam langsung muncul.",
        image: "/images/hiw/step-02.png",
        dwellMs: 2400,
        hotspot: {
            left: "74.6%",
            top: "17.1%",
            width: "22.9%",
            height: "7.8%",
            cx: 86.0,
            cy: 21.0,
            hint: "Klik Phantom Blade Zero →",
            hintSide: "left",
            accent: "gold",
        },
    },
    {
        id: "03a-detail",
        stepIndex: 1,
        appName: "ElitePlay Launcher",
        shortLabel: "Detail & Add",
        stepTitle: "Langkah 02 · Klik Add to Steam",
        caption: "Di halaman detail game, klik tombol emas Add to Steam untuk langsung mengirimkannya ke akun Steam pribadimu.",
        image: "/images/hiw/step-03.png",
        dwellMs: 2450,
        hotspot: {
            left: "83.1%",
            top: "42.1%",
            width: "11.5%",
            height: "5.4%",
            cx: 88.8,
            cy: 44.8,
            hint: "Klik Add to Steam →",
            hintSide: "left",
            accent: "gold",
        },
    },
    {
        id: "03b-added",
        stepIndex: 1,
        appName: "ElitePlay Launcher",
        shortLabel: "✓ Added",
        stepTitle: "Langkah 02 · Berhasil Ditambahkan",
        caption: "Dalam hitungan detik, progress mencapai 100% dan muncul notifikasi Game added to Steam library. Klik Open Steam.",
        image: "/images/hiw/step-04.png",
        dwellMs: 2400,
        hotspot: {
            left: "85.0%",
            top: "42.1%",
            width: "9.6%",
            height: "5.4%",
            cx: 89.8,
            cy: 44.8,
            hint: "Klik Open Steam →",
            hintSide: "left",
            accent: "gold",
        },
    },
    {
        id: "04a-steam-install",
        stepIndex: 2,
        appName: "Steam Library",
        isSteam: true,
        shortLabel: "Siap Instal",
        stepTitle: "Langkah 03 · Masuk ke Steam Asli",
        caption: "Buka Perpustakaan Steam pribadimu—Phantom Blade Zero sudah muncul lengkap dengan tombol Instal resmi & Pencapaian.",
        image: "/images/hiw/step-05.png",
        dwellMs: 2450,
        hotspot: {
            left: "18.0%",
            top: "37.7%",
            width: "8.8%",
            height: "4.6%",
            cx: 22.4,
            cy: 40.0,
            hint: "Klik INSTAL →",
            hintSide: "bottom",
            accent: "steamBlue",
        },
    },
    {
        id: "04b-steam-play",
        stepIndex: 2,
        appName: "Steam Library",
        isSteam: true,
        shortLabel: "▶ Main & Cloud",
        stepTitle: "Langkah 03 · Mainkan + Cloud Save",
        caption: "Setelah diunduh, klik Mainkan pada Phantom Blade Zero langsung dari Steam pribadimu—lengkap dengan Status Cloud terbaru dan Pencapaian.",
        image: "/images/hiw/step-06.png",
        dwellMs: 2900,
        hotspot: {
            left: "18.0%",
            top: "37.7%",
            width: "8.8%",
            height: "4.6%",
            cx: 22.4,
            cy: 40.0,
            hint: "Klik MAINKAN →",
            hintSide: "bottom",
            accent: "steamGreen",
        },
    },
]

const STEP_CARDS = [
    {
        num: "01",
        badge: "Windows PC",
        title: "Aktivasi Lisensi",
        summary: "Masukkan kode lisensi ElitePlay sekali di aplikasi Windows untuk membuka akses penuh.",
        sceneIndices: [0],
    },
    {
        num: "02",
        badge: "211.000+ Game",
        title: "Cari & Add to Steam",
        summary: "Cari judul favorit di katalog launcher, buka detailnya, lalu klik Add to Steam.",
        sceneIndices: [1, 2, 3],
    },
    {
        num: "03",
        badge: "Steam Asli",
        title: "Main di Steam Kamu",
        summary: "Unduh dan mainkan dari library Steam pribadi lengkap dengan Cloud Save & Achievement.",
        sceneIndices: [4, 5],
    },
]

const SPARKS = [
    { x: -30, y: -22 },
    { x: 0, y: -32 },
    { x: 30, y: -22 },
    { x: -34, y: 12 },
    { x: 34, y: 12 },
    { x: 0, y: 28 },
]

function getCardSegment(cardIdx: number, sceneIdx: number, activeStep: number) {
    const scenes = STEP_CARDS[cardIdx].sceneIndices
    const total = scenes.length
    if (activeStep > cardIdx) return { current: total, total, from: 1, to: 1 }
    if (activeStep < cardIdx) return { current: 0, total, from: 0.12, to: 0.12 }
    const pos = Math.max(0, scenes.indexOf(sceneIdx))
    return {
        current: pos + 1,
        total,
        from: pos / total,
        to: (pos + 1) / total,
    }
}

const hiwStyles = `
section.ep-hiw-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(52px, 5.8cqw, 82px) 0 clamp(56px, 6.2cqw, 88px);
  background: transparent;
  color: var(--white, #ffffff);
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 16px;
  line-height: 1.45;
  overflow: visible;
  container-type: inline-size;
  box-sizing: border-box;
}
section.ep-hiw-section *,
section.ep-hiw-section *::before,
section.ep-hiw-section *::after {
  box-sizing: border-box;
}
.ep-hiw-section .ep-hiw-head {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: min(1040px, 90%);
  max-width: 820px;
}
.ep-hiw-section .ep-hiw-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: linear-gradient(145deg, rgba(22, 24, 32, 0.92), rgba(11, 12, 16, 0.96));
  color: #f4f6fa;
  font-size: clamp(11px, 1.1cqw, 13px);
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.25;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
.ep-hiw-section .ep-hiw-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fde068, #df9918);
  box-shadow: 0 0 10px rgba(240, 180, 41, 0.65);
  flex: none;
  animation: epHiwPulse 2.2s ease-in-out infinite;
}
.ep-hiw-section h2.ep-hiw-title {
  margin: 14px 0 0;
  color: var(--glass-pearl, #f6f7fa);
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: clamp(27px, 3.62cqw, 44px);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.ep-hiw-section p.ep-hiw-subtitle {
  margin: 12px 0 0;
  color: var(--body, #9fa6b5);
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: clamp(13.5px, 1.36cqw, 16.5px);
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;
  text-wrap: balance;
}
.ep-hiw-section .ep-hiw-wrap {
  position: relative;
  z-index: 2;
  width: min(1040px, 90%);
  max-width: 1040px;
  margin-inline: auto;
  margin-top: clamp(26px, 3.2cqw, 40px);
  display: flex;
  flex-direction: column;
  gap: 22px;
}
/* Live Ultra-HD Software Stage (zero scale transform -> razor sharp at all times!) */
.ep-hiw-section .ep-hiw-stage-shell {
  position: relative;
  width: 100%;
  border-radius: 18px;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: linear-gradient(165deg, rgba(20, 22, 30, 0.96) 0%, rgba(11, 12, 17, 0.98) 62%, rgba(18, 20, 27, 0.96) 100%);
  box-shadow: 0 30px 72px rgba(0, 0, 0, 0.72), 0 0 42px rgba(245, 203, 76, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.13);
}
.ep-hiw-section .ep-hiw-stage-glow {
  position: absolute;
  inset: -34px 12% auto 12%;
  height: 70px;
  border-radius: 50%;
  background: radial-gradient(ellipse at 34% 50%, rgba(250, 218, 114, 0.24), transparent 64%), radial-gradient(ellipse at 70% 50%, rgba(56, 189, 248, 0.16), transparent 66%);
  pointer-events: none;
  z-index: -1;
}
.ep-hiw-section .ep-hiw-stage-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 2px 4px 11px;
  flex-wrap: wrap;
}
.ep-hiw-section .ep-hiw-stage-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.ep-hiw-section .ep-hiw-app-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
  border: 1px solid rgba(245, 194, 62, 0.46);
  background: linear-gradient(135deg, rgba(248, 206, 78, 0.14), rgba(212, 136, 20, 0.08));
  color: #f8d460;
  transition: border-color 0.25s, background 0.25s, color 0.25s;
}
.ep-hiw-section .ep-hiw-app-pill.is-steam {
  border-color: rgba(103, 193, 245, 0.5);
  background: rgba(26, 159, 255, 0.14);
  color: #8fd4ff;
}
.ep-hiw-section .ep-hiw-stage-label {
  font-size: 13px;
  font-weight: 600;
  color: #f1f3f8;
}
.ep-hiw-section .ep-hiw-stage-stepcount {
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #9ba3b4;
  font-variant-numeric: tabular-nums;
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(14, 16, 22, 0.8);
}
.ep-hiw-section .ep-hiw-viewport {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: #08080a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
}
/* Pre-mounted Ultra-HD PNG layers: pure opacity crossfade at native 1:1 scale (ZERO blur!) */
.ep-hiw-section .ep-hiw-screen-img {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s ease;
}
.ep-hiw-section .ep-hiw-screen-img.is-show {
  z-index: 2;
  opacity: 1;
}
.ep-hiw-section button.ep-hiw-hotspot {
  position: absolute;
  z-index: 12;
  padding: 0;
  border-radius: 9px;
  border: 2px solid #f6cf56;
  background: rgba(253, 224, 138, 0.12);
  box-shadow: 0 0 0 4px rgba(245, 203, 76, 0.18), 0 0 24px rgba(245, 203, 76, 0.42);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
}
.ep-hiw-section button.ep-hiw-hotspot:hover {
  background: rgba(253, 224, 138, 0.22);
  box-shadow: 0 0 0 6px rgba(245, 203, 76, 0.26), 0 0 30px rgba(245, 203, 76, 0.6);
}
.ep-hiw-section button.ep-hiw-hotspot.is-steamBlue {
  border-color: #4cc2ff;
  background: rgba(26, 159, 255, 0.12);
  box-shadow: 0 0 0 4px rgba(26, 159, 255, 0.22), 0 0 26px rgba(26, 159, 255, 0.55);
}
.ep-hiw-section button.ep-hiw-hotspot.is-steamGreen {
  border-color: #7ee342;
  background: rgba(98, 184, 42, 0.12);
  box-shadow: 0 0 0 4px rgba(98, 184, 42, 0.22), 0 0 26px rgba(98, 184, 42, 0.55);
}
.ep-hiw-section .ep-hiw-hotspot-ring {
  position: absolute;
  inset: -6px;
  border-radius: 13px;
  border: 1.5px solid currentColor;
  pointer-events: none;
  animation: epHiwRing 1.9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
}
.ep-hiw-section .ep-hiw-hint {
  position: absolute;
  z-index: 15;
  pointer-events: none;
  padding: 5px 11px;
  border-radius: 999px;
  background: rgba(12, 14, 20, 0.94);
  border: 1px solid rgba(245, 194, 58, 0.65);
  color: #fde068;
  font-size: 11.5px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.68);
}
.ep-hiw-section .ep-hiw-hint.side-bottom { left: 50%; top: calc(100% + 10px); transform: translateX(-50%); }
.ep-hiw-section .ep-hiw-hint.side-left { right: calc(100% + 10px); top: 50%; transform: translateY(-50%); }
.ep-hiw-section .ep-hiw-hint.side-right { left: calc(100% + 10px); top: 50%; transform: translateY(-50%); }
.ep-hiw-section .ep-hiw-cursor {
  position: absolute;
  z-index: 25;
  pointer-events: none;
  width: 24px;
  height: 24px;
  margin-left: -4px;
  margin-top: -3px;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.75));
}
.ep-hiw-section .ep-hiw-ripple {
  position: absolute;
  z-index: 22;
  pointer-events: none;
  width: 36px;
  height: 36px;
  margin-left: -18px;
  margin-top: -18px;
  border-radius: 50%;
  border: 2px solid #f7ca48;
  background: rgba(240, 180, 41, 0.24);
}
.ep-hiw-section .ep-hiw-spark {
  position: absolute;
  z-index: 23;
  pointer-events: none;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  margin-top: -3px;
  border-radius: 50%;
  background: #fde068;
  box-shadow: 0 0 10px #e09b1a;
}
.ep-hiw-section .ep-hiw-stage-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 12px 6px 2px;
  flex-wrap: wrap;
}
.ep-hiw-section p.ep-hiw-caption {
  margin: 0;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.45;
  color: #c4cad6;
  flex: 1;
  min-width: 240px;
}
.ep-hiw-section .ep-hiw-dots {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ep-hiw-section button.ep-hiw-stepdot {
  height: 7px;
  width: 18px;
  border-radius: 999px;
  padding: 0;
  border: 0;
  background: rgba(255, 255, 255, 0.16);
  cursor: pointer;
  transition: width 0.26s cubic-bezier(0.22, 1, 0.36, 1), background 0.24s ease, box-shadow 0.24s ease;
}
.ep-hiw-section button.ep-hiw-stepdot:hover {
  background: rgba(245, 194, 62, 0.62);
}
.ep-hiw-section button.ep-hiw-stepdot.is-active {
  width: 34px;
  background: linear-gradient(90deg, #38bdf8 0%, #eab024 44%, #fde068 100%);
  box-shadow: 0 0 12px rgba(240, 180, 41, 0.46);
}

/* ============================================================
   BOTTOM TIER: RAZOR-SHARP KINETIC 3-CARD PODIUM (ZERO BLUR!)
   Strictly scale: 1, NO perspective/preserve-3d/will-change blur
   ============================================================ */
.ep-hiw-section .ep-hiw-podium {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px minmax(0, 1.16fr) 34px minmax(0, 1fr);
  align-items: end;
  width: 100%;
  padding: 10px 0 8px;
}
.ep-hiw-section .ep-hiw-bridge {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 40px;
  pointer-events: none;
}
.ep-hiw-section .ep-hiw-bridge-mobile {
  display: none;
}
.ep-hiw-section .ep-hiw-bridge-dash { stroke-dasharray: 4 4; }
.ep-hiw-section .ep-hiw-bridge-dash.is-live { animation: epHiwFlowX 0.85s linear infinite; }
.ep-hiw-section .ep-hiw-bridge-dash-mob { stroke-dasharray: 4 4; }
.ep-hiw-section .ep-hiw-bridge-dash-mob.is-live { animation: epHiwFlowY 0.85s linear infinite; }

.ep-hiw-section .ep-hiw-card {
  position: relative;
  border-radius: 17px;
  padding: 1.5px;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.14), rgba(164, 174, 198, 0.05) 55%, rgba(255, 255, 255, 0.1));
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s ease, background 0.3s ease;
}
.ep-hiw-section .ep-hiw-card:not(.is-active):hover {
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.65), 0 0 22px rgba(245, 203, 76, 0.14);
}
.ep-hiw-section .ep-hiw-card.is-active {
  background: linear-gradient(135deg, rgba(245, 194, 58, 0.44), rgba(56, 189, 248, 0.26));
  box-shadow: 0 26px 56px rgba(0, 0, 0, 0.72), 0 0 34px rgba(240, 180, 41, 0.2), 0 0 0 1px rgba(245, 194, 58, 0.3);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-blue {
  background: rgba(76, 194, 255, 0.36);
  box-shadow: 0 26px 56px rgba(0, 0, 0, 0.68), 0 0 36px rgba(26, 159, 255, 0.28), 0 0 0 1px rgba(103, 193, 245, 0.3);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-green {
  background: rgba(126, 227, 66, 0.36);
  box-shadow: 0 26px 56px rgba(0, 0, 0, 0.68), 0 0 36px rgba(98, 184, 42, 0.28), 0 0 0 1px rgba(140, 232, 75, 0.3);
}
.ep-hiw-section .ep-hiw-card-edge-spot {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
  background: radial-gradient(210px circle at var(--mx, 50%) var(--my, 50%), rgba(253, 224, 104, 0.92), rgba(240, 180, 41, 0.38) 45%, transparent 72%);
}
.ep-hiw-section .ep-hiw-card:hover .ep-hiw-card-edge-spot { opacity: 1; }
.ep-hiw-section .ep-hiw-card.is-steam-blue:hover .ep-hiw-card-edge-spot {
  background: radial-gradient(210px circle at var(--mx, 50%) var(--my, 50%), rgba(132, 218, 255, 0.95), rgba(26, 159, 255, 0.4) 45%, transparent 72%);
}
.ep-hiw-section .ep-hiw-card.is-steam-green:hover .ep-hiw-card-edge-spot {
  background: radial-gradient(210px circle at var(--mx, 50%) var(--my, 50%), rgba(176, 255, 125, 0.95), rgba(98, 184, 42, 0.4) 45%, transparent 72%);
}
.ep-hiw-section .ep-hiw-card-beam {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 240%;
  aspect-ratio: 1 / 1;
  margin-left: -120%;
  margin-top: -120%;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 235deg,
    rgba(56, 189, 248, 0.26) 268deg,
    #e8a820 318deg,
    #fde068 348deg,
    transparent 360deg
  );
  transition: opacity 0.35s ease;
}
.ep-hiw-section .ep-hiw-card.is-active .ep-hiw-card-beam {
  opacity: 1;
  animation: epHiwSpin 3.4s linear infinite;
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-blue .ep-hiw-card-beam {
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 235deg,
    rgba(26, 159, 255, 0.25) 270deg,
    #1a9fff 322deg,
    #c9eeff 348deg,
    transparent 360deg
  );
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-green .ep-hiw-card-beam {
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 235deg,
    rgba(98, 184, 42, 0.25) 270deg,
    #6bc72f 322deg,
    #dcffbf 348deg,
    transparent 360deg
  );
}
.ep-hiw-section .ep-hiw-card-surface {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 194px;
  border-radius: 15.5px;
  padding: 17px 17px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  overflow: hidden;
  background-color: #0e1017;
  background-image: linear-gradient(156deg, rgba(26, 29, 40, 0.72) 0%, rgba(13, 15, 21, 0.96) 58%, rgba(20, 23, 32, 0.85) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: background-color 0.35s ease, box-shadow 0.35s ease;
}
.ep-hiw-section .ep-hiw-card.is-center .ep-hiw-card-surface {
  min-height: 214px;
  background-color: #10121a;
  background-image: radial-gradient(115% 92% at 86% 0%, rgba(248, 218, 114, 0.12) 0%, rgba(56, 189, 248, 0.06) 44%, rgba(16, 18, 26, 0) 76%);
}
.ep-hiw-section .ep-hiw-card.is-active .ep-hiw-card-surface {
  background-color: #12141d;
  background-image: radial-gradient(115% 92% at 82% 0%, rgba(242, 186, 48, 0.22) 0%, rgba(56, 189, 248, 0.09) 42%, rgba(18, 20, 29, 0) 76%);
  box-shadow: inset 0 1px 0 rgba(253, 224, 104, 0.3);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-blue .ep-hiw-card-surface {
  background-color: #0d141d;
  background-image: radial-gradient(115% 92% at 82% 0%, rgba(26, 159, 255, 0.22) 0%, rgba(26, 118, 196, 0.08) 38%, rgba(13, 20, 29, 0) 76%);
  box-shadow: inset 0 1px 0 rgba(164, 224, 255, 0.32);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-green .ep-hiw-card-surface {
  background-color: #0e170d;
  background-image: radial-gradient(115% 92% at 82% 0%, rgba(114, 214, 52, 0.22) 0%, rgba(72, 148, 32, 0.08) 38%, rgba(14, 23, 13, 0) 76%);
  box-shadow: inset 0 1px 0 rgba(196, 255, 154, 0.32);
}
.ep-hiw-section .ep-hiw-card-crown {
  position: absolute;
  top: 0;
  left: 18%;
  right: 18%;
  height: 2.5px;
  border-radius: 0 0 999px 999px;
  background: linear-gradient(90deg, transparent, #e8a820 24%, #fde068 50%, #38bdf8 78%, transparent);
  box-shadow: 0 0 15px rgba(240, 180, 41, 0.72);
  z-index: 4;
  pointer-events: none;
}
.ep-hiw-section .ep-hiw-card.is-steam-blue .ep-hiw-card-crown {
  background: linear-gradient(90deg, transparent, #67c1f5 28%, #e5f6ff 50%, #67c1f5 72%, transparent);
  box-shadow: 0 0 14px rgba(26, 159, 255, 0.9);
}
.ep-hiw-section .ep-hiw-card.is-steam-green .ep-hiw-card-crown {
  background: linear-gradient(90deg, transparent, #7ee342 28%, #ebffdb 50%, #7ee342 72%, transparent);
  box-shadow: 0 0 14px rgba(114, 214, 52, 0.9);
}
.ep-hiw-section .ep-hiw-card-spot {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.28s ease;
  background: radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(248, 218, 114, 0.15), transparent 68%);
}
.ep-hiw-section .ep-hiw-card:hover .ep-hiw-card-spot { opacity: 1; }
.ep-hiw-section .ep-hiw-card.is-steam-blue .ep-hiw-card-spot {
  background: radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(76, 194, 255, 0.18), transparent 68%);
}
.ep-hiw-section .ep-hiw-card.is-steam-green .ep-hiw-card-spot {
  background: radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(126, 227, 66, 0.18), transparent 68%);
}
.ep-hiw-section .ep-hiw-card-sheen {
  position: absolute;
  top: -30%;
  left: -60%;
  width: 54%;
  height: 160%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(105deg, transparent 22%, rgba(255, 244, 194, 0.12) 48%, rgba(255, 255, 255, 0.2) 52%, transparent 78%);
  transform: skewX(-18deg);
}
.ep-hiw-section .ep-hiw-card-top,
.ep-hiw-section .ep-hiw-card-body,
.ep-hiw-section .ep-hiw-subpills,
.ep-hiw-section .ep-hiw-bar-wrap {
  position: relative;
  z-index: 3;
}
.ep-hiw-section .ep-hiw-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.ep-hiw-section .ep-hiw-num-wrap {
  position: relative;
  width: 34px;
  height: 34px;
  flex: none;
}
.ep-hiw-section .ep-hiw-num-halo {
  position: absolute;
  inset: -4px;
  border-radius: 12px;
  border: 1.5px solid #f5cb4c;
  pointer-events: none;
}
.ep-hiw-section .ep-hiw-card.is-steam-blue .ep-hiw-num-halo { border-color: #4cc2ff; }
.ep-hiw-section .ep-hiw-card.is-steam-green .ep-hiw-num-halo { border-color: #7ee342; }
.ep-hiw-section .ep-hiw-num {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #101219, #1b1e29);
  border: 1px solid rgba(255, 255, 255, 0.13);
  color: var(--glass-pearl, #f6f7fa);
  font-size: 12.5px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  transition: border-color 0.28s, color 0.28s, box-shadow 0.28s, background 0.28s;
}
.ep-hiw-section .ep-hiw-card.is-active .ep-hiw-num {
  border-color: rgba(245, 194, 58, 0.8);
  background: linear-gradient(145deg, rgba(240, 180, 41, 0.22), rgba(18, 20, 28, 0.96));
  color: #fde068;
  box-shadow: 0 0 16px rgba(240, 180, 41, 0.3);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-blue .ep-hiw-num {
  border-color: #4cc2ff;
  background: linear-gradient(145deg, rgba(26, 159, 255, 0.26), rgba(14, 24, 34, 0.96));
  color: #a6e1ff;
  box-shadow: 0 0 16px rgba(26, 159, 255, 0.35);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-green .ep-hiw-num {
  border-color: #7ee342;
  background: linear-gradient(145deg, rgba(114, 214, 52, 0.26), rgba(16, 28, 14, 0.96));
  color: #c8ffa3;
  box-shadow: 0 0 16px rgba(114, 214, 52, 0.35);
}
.ep-hiw-section .ep-hiw-card.is-done .ep-hiw-num {
  border-color: rgba(240, 180, 41, 0.58);
  background: linear-gradient(145deg, rgba(240, 180, 41, 0.15), rgba(16, 18, 26, 0.94));
  color: #f6c944;
}
.ep-hiw-section .ep-hiw-card-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3.5px 10px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 17, 24, 0.86);
  color: #bcc3d4;
  transition: border-color 0.25s, color 0.25s, background 0.25s;
}
.ep-hiw-section .ep-hiw-card.is-active .ep-hiw-card-badge {
  border-color: rgba(245, 194, 58, 0.56);
  color: #fde068;
  background: rgba(240, 180, 41, 0.13);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-blue .ep-hiw-card-badge {
  border-color: rgba(103, 193, 245, 0.62);
  color: #b8e7ff;
  background: rgba(26, 159, 255, 0.15);
}
.ep-hiw-section .ep-hiw-card.is-active.is-steam-green .ep-hiw-card-badge {
  border-color: rgba(126, 227, 66, 0.62);
  color: #d6ffba;
  background: rgba(98, 184, 42, 0.15);
}
.ep-hiw-section .ep-hiw-live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f5cb4c;
  box-shadow: 0 0 8px #eab836;
  animation: epHiwPulse 1.6s ease-in-out infinite;
}
.ep-hiw-section .ep-hiw-card.is-steam-blue .ep-hiw-live-dot { background: #4cc2ff; box-shadow: 0 0 8px #4cc2ff; }
.ep-hiw-section .ep-hiw-card.is-steam-green .ep-hiw-live-dot { background: #7ee342; box-shadow: 0 0 8px #7ee342; }
.ep-hiw-section h3.ep-hiw-cardtitle {
  margin: 0;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
  transition: color 0.25s;
}
.ep-hiw-section .ep-hiw-card.is-active h3.ep-hiw-cardtitle { color: #ffffff; }
.ep-hiw-section p.ep-hiw-cardsum {
  margin: 5px 0 0;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 12.5px;
  font-weight: 400;
  color: #9ba3b4;
  line-height: 1.44;
}
.ep-hiw-section .ep-hiw-subpills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ep-hiw-section button.ep-hiw-subpill {
  position: relative;
  padding: 5px 11px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(15, 17, 24, 0.88);
  color: #bcc3d4;
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.25;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.22s, color 0.22s;
}
.ep-hiw-section button.ep-hiw-subpill:hover { border-color: rgba(248, 218, 114, 0.72); color: #ffffff; }
.ep-hiw-section button.ep-hiw-subpill.is-on { border-color: transparent; color: #0b0d14; font-weight: 700; }
.ep-hiw-section .ep-hiw-card.is-steam-blue button.ep-hiw-subpill.is-on { color: #061826; }
.ep-hiw-section .ep-hiw-card.is-steam-green button.ep-hiw-subpill.is-on { color: #091d04; }
.ep-hiw-section .ep-hiw-subpill-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #fde068 0%, #f0b429 54%, #d68a16 100%);
  box-shadow: 0 0 16px rgba(240, 180, 41, 0.4);
}
.ep-hiw-section .ep-hiw-card.is-steam-blue .ep-hiw-subpill-bg {
  background: linear-gradient(145deg, #8edbff, #2aa4ff);
  box-shadow: 0 0 14px rgba(26, 159, 255, 0.45);
}
.ep-hiw-section .ep-hiw-card.is-steam-green .ep-hiw-subpill-bg {
  background: linear-gradient(145deg, #b5ff7a, #65c728);
  box-shadow: 0 0 14px rgba(101, 199, 40, 0.45);
}
.ep-hiw-section .ep-hiw-subpill-txt { position: relative; z-index: 1; }
.ep-hiw-section .ep-hiw-bar-wrap { width: 100%; display: flex; flex-direction: column; gap: 6px; }
.ep-hiw-section .ep-hiw-bar-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #7c8496;
}
.ep-hiw-section .ep-hiw-card.is-active .ep-hiw-bar-meta { color: #f7ca48; }
.ep-hiw-section .ep-hiw-card.is-active.is-steam-blue .ep-hiw-bar-meta { color: #9ad8ff; }
.ep-hiw-section .ep-hiw-card.is-active.is-steam-green .ep-hiw-bar-meta { color: #b7ff8a; }
.ep-hiw-section .ep-hiw-card.is-done .ep-hiw-bar-meta { color: #d8a532; }
.ep-hiw-section .ep-hiw-frac-slot { display: inline-flex; align-items: center; height: 15px; overflow: hidden; font-variant-numeric: tabular-nums; }
.ep-hiw-section .ep-hiw-bar { position: relative; width: 100%; height: 4.5px; border-radius: 999px; background: rgba(255, 255, 255, 0.08); overflow: visible; }
.ep-hiw-section .ep-hiw-bar-fill {
  position: relative;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #38bdf8 0%, #eab024 44%, #fde068 100%);
  box-shadow: 0 0 12px rgba(240, 180, 41, 0.44);
}
.ep-hiw-section .ep-hiw-card.is-steam-blue .ep-hiw-bar-fill {
  background: linear-gradient(90deg, #1060a8, #1a9fff 68%, #b3e5ff);
  box-shadow: 0 0 10px rgba(26, 159, 255, 0.45);
}
.ep-hiw-section .ep-hiw-card.is-steam-green .ep-hiw-bar-fill {
  background: linear-gradient(90deg, #3b7d16, #6bc72f 68%, #d2ffad);
  box-shadow: 0 0 10px rgba(107, 199, 47, 0.45);
}
.ep-hiw-section .ep-hiw-bar-tip {
  position: absolute;
  right: -3px;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-radius: 50%;
  background: #fde068;
  box-shadow: 0 0 12px #eab024, 0 0 4px #fde068;
}
.ep-hiw-section .ep-hiw-card.is-steam-blue .ep-hiw-bar-tip { background: #e3f7ff; box-shadow: 0 0 12px #4cc2ff, 0 0 4px #ffffff; }
.ep-hiw-section .ep-hiw-card.is-steam-green .ep-hiw-bar-tip { background: #ebffdb; box-shadow: 0 0 12px #7ee342, 0 0 4px #ffffff; }

@keyframes epHiwPulse { 0%, 100% { opacity: 0.72; transform: scale(0.92); } 50% { opacity: 1; transform: scale(1.22); } }
@keyframes epHiwRing { 0% { opacity: 0.9; transform: scale(1); } 75%, 100% { opacity: 0; transform: scale(1.18); } }
@keyframes epHiwSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes epHiwFlowX { from { stroke-dashoffset: 16; } to { stroke-dashoffset: 0; } }
@keyframes epHiwFlowY { from { stroke-dashoffset: 16; } to { stroke-dashoffset: 0; } }

@container (max-width: 820px) {
  .ep-hiw-section .ep-hiw-podium { grid-template-columns: minmax(0, 1fr); align-items: stretch; padding: 4px 0; }
  .ep-hiw-section .ep-hiw-card-surface, .ep-hiw-section .ep-hiw-card.is-center .ep-hiw-card-surface { min-height: auto; }
  .ep-hiw-section .ep-hiw-bridge { display: none; }
  .ep-hiw-section .ep-hiw-bridge-mobile { display: flex; justify-content: center; align-items: center; height: 30px; pointer-events: none; }
}
@container (max-width: 560px) {
  section.ep-hiw-section { padding-inline: 12px; }
  .ep-hiw-section .ep-hiw-stage-shell { padding: 9px; border-radius: 14px; }
  .ep-hiw-section .ep-hiw-hint { display: none; }
  .ep-hiw-section .ep-hiw-stage-bar { flex-wrap: nowrap; }
  .ep-hiw-section .ep-hiw-stage-meta { min-width: 0; gap: 6px; }
  .ep-hiw-section .ep-hiw-stage-label { font-size: 11.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .ep-hiw-section .ep-hiw-stage-stepcount { flex: none; font-size: 10.5px; padding: 2px 7px; }
}
@media (prefers-reduced-motion: reduce) {
  .ep-hiw-section .ep-hiw-dot,
  .ep-hiw-section .ep-hiw-live-dot,
  .ep-hiw-section .ep-hiw-hotspot-ring,
  .ep-hiw-section .ep-hiw-card-beam,
  .ep-hiw-section .ep-hiw-bridge-dash,
  .ep-hiw-section .ep-hiw-bridge-dash-mob {
    animation: none !important;
  }
}
`

export interface HowItWorksProps {
    style?: React.CSSProperties
    badgeText?: string
    heading?: string
    subtitle?: string
    autoLoop?: boolean
}

function EnergyBridge({
    active,
    tone = "gold",
    pulseKey,
}: {
    active: boolean
    tone?: "gold" | "steamBlue" | "steamGreen"
    pulseKey: number
}) {
    const reduced = useReducedMotion()
    const strokeMain = !active ? "#2f3545" : tone === "steamBlue" ? "#3ab3ff" : tone === "steamGreen" ? "#74d638" : "#e5a31e"
    const strokeTip = !active ? "#485168" : tone === "steamBlue" ? "#7ad4ff" : tone === "steamGreen" ? "#a8f272" : "#fde068"
    const orbFill = tone === "steamBlue" ? "#c9eeff" : tone === "steamGreen" ? "#dcffbf" : "#fde068"

    return (
        <div className="ep-hiw-bridge" aria-hidden="true">
            <svg viewBox="0 0 34 40" width="34" height="40" style={{ overflow: "visible" }}>
                <path
                    d="M1 20 H30"
                    fill="none"
                    stroke={strokeMain}
                    strokeWidth={active ? "2" : "1.6"}
                    className={`ep-hiw-bridge-dash${active ? " is-live" : ""}`}
                />
                <path
                    d="M22 14 L30 20 L22 26"
                    fill="none"
                    stroke={strokeTip}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {!reduced && active && (
                    <>
                        <motion.circle
                            key={"surge-" + pulseKey}
                            cy={20}
                            r={3.8}
                            fill={orbFill}
                            initial={{ cx: 1, opacity: 0 }}
                            animate={{ cx: [1, 30], opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 0.62, ease: "easeOut" }}
                            style={{ filter: `drop-shadow(0 0 7px ${strokeTip})` }}
                        />
                        <motion.circle
                            cy={20}
                            r={2.5}
                            fill={orbFill}
                            animate={{ cx: [1, 30], opacity: [0, 0.95, 0.95, 0] }}
                            transition={{ duration: 1.65, repeat: Infinity, repeatDelay: 0.7, ease: "easeInOut" }}
                            style={{ filter: `drop-shadow(0 0 6px ${strokeTip})` }}
                        />
                    </>
                )}
            </svg>
        </div>
    )
}

function MobileBridge({ active, tone = "gold" }: { active: boolean; tone?: "gold" | "steamBlue" | "steamGreen" }) {
    const reduced = useReducedMotion()
    const stroke = !active ? "#373f52" : tone === "steamBlue" ? "#4cc2ff" : tone === "steamGreen" ? "#7ee342" : "#f0b429"
    const orbFill = tone === "steamBlue" ? "#c9eeff" : tone === "steamGreen" ? "#dcffbf" : "#fde068"

    return (
        <div className="ep-hiw-bridge-mobile" aria-hidden="true">
            <svg viewBox="0 0 24 30" width="24" height="30" style={{ overflow: "visible" }}>
                <path
                    d="M12 1 V25"
                    fill="none"
                    stroke={stroke}
                    strokeWidth={active ? "2" : "1.6"}
                    className={`ep-hiw-bridge-dash-mob${active ? " is-live" : ""}`}
                />
                <path
                    d="M7 20 L12 26 L17 20"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {!reduced && active && (
                    <motion.circle
                        cx={12}
                        r={2.6}
                        fill={orbFill}
                        animate={{ cy: [2, 25], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
                        style={{ filter: `drop-shadow(0 0 6px ${stroke})` }}
                    />
                )}
            </svg>
        </div>
    )
}

interface KineticStepCardProps {
    card: (typeof STEP_CARDS)[number]
    idx: number
    inView: boolean
    isActive: boolean
    isDone: boolean
    sceneIdx: number
    activeStep: number
    loopActive: boolean
    dwellMs: number
    steamTone: "gold" | "steamBlue" | "steamGreen"
    reduced: boolean
    onSelectCard: () => void
    onJumpScene: (sIdx: number) => void
}

function KineticStepCard({
    card,
    idx,
    inView,
    isActive,
    isDone,
    sceneIdx,
    activeStep,
    loopActive,
    dwellMs,
    steamTone,
    reduced,
    onSelectCard,
    onJumpScene,
}: KineticStepCardProps) {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const [hovered, setHovered] = React.useState(false)
    const [sheenTick, setSheenTick] = React.useState(0)
    const prevActive = React.useRef(isActive)
    const revealedRef = React.useRef(false)

    React.useEffect(() => {
        if (inView) revealedRef.current = true
    }, [inView])

    React.useEffect(() => {
        if (isActive && !prevActive.current) {
            setSheenTick((n) => n + 1)
        }
        prevActive.current = isActive
    }, [isActive])

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (reduced || e.pointerType === "touch") return
        const el = cardRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${(e.clientX - rect.left).toFixed(1)}px`)
        el.style.setProperty("--my", `${(e.clientY - rect.top).toFixed(1)}px`)
    }

    const seg = getCardSegment(idx, sceneIdx, activeStep)
    const toneClass =
        idx === 2 && isActive
            ? steamTone === "steamBlue"
                ? " is-steam-blue"
                : steamTone === "steamGreen"
                ? " is-steam-green"
                : ""
            : ""

    const statusText = isDone
        ? "✓ Selesai"
        : isActive
        ? idx === 2
            ? steamTone === "steamGreen"
                ? "Siap Main · Cloud Aktif"
                : "Terhubung ke Steam"
            : "Sedang Aktif"
        : "Langkah Berikutnya"

    const spring = reduced
        ? { duration: 0 }
        : {
              type: "spring" as const,
              stiffness: 340,
              damping: 28,
              delay: !revealedRef.current && inView ? idx * 0.08 : 0,
          }

    // Integer Y translation ONLY (strictly NO fractional scale / 3D rotate -> 100% razor-sharp text & borders at rest AND motion!)
    const targetY = !inView && !reduced ? 20 : isActive ? (hovered ? -8 : -6) : hovered ? -4 : 0
    const targetOpacity = isActive || hovered ? 1 : 0.88

    return (
        <motion.div
            ref={cardRef}
            className={`ep-hiw-card${idx === 1 ? " is-center" : ""}${isActive ? " is-active" : ""}${isDone ? " is-done" : ""}${toneClass}`}
            onClick={onSelectCard}
            onPointerEnter={() => setHovered(true)}
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setHovered(false)}
            animate={{ opacity: targetOpacity, y: targetY }}
            transition={spring}
        >
            <div className="ep-hiw-card-edge-spot" aria-hidden="true" />
            <div className="ep-hiw-card-beam" aria-hidden="true" />

            <div className="ep-hiw-card-surface">
                {isActive && (
                    <motion.span
                        layoutId="epActiveCrown"
                        className="ep-hiw-card-crown"
                        aria-hidden="true"
                        transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 30 }}
                    />
                )}

                <div className="ep-hiw-card-spot" aria-hidden="true" />

                {!reduced && sheenTick > 0 && (
                    <motion.div
                        key={"sheen-" + sheenTick}
                        className="ep-hiw-card-sheen"
                        aria-hidden="true"
                        initial={{ x: "0%", opacity: 0.9 }}
                        animate={{ x: "340%", opacity: 0 }}
                        transition={{ duration: 0.78, ease: [0.22, 0.85, 0.28, 1] }}
                    />
                )}

                <div className="ep-hiw-card-top">
                    <div className="ep-hiw-num-wrap">
                        {!reduced && isActive && (
                            <motion.span
                                key={"halo-" + sceneIdx}
                                className="ep-hiw-num-halo"
                                aria-hidden="true"
                                initial={{ scale: 0.92, opacity: 0.85 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{ duration: 0.65, ease: "easeOut" }}
                            />
                        )}
                        <motion.span
                            className="ep-hiw-num"
                            key={isDone ? "done" : isActive ? "act" : "idle"}
                            initial={reduced ? false : { opacity: 0.7 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.22 }}
                        >
                            {isDone ? (
                                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-label="Selesai">
                                    <motion.path
                                        d="M3.2 8.4L6.5 11.6L12.8 4.6"
                                        stroke="currentColor"
                                        strokeWidth="2.1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={reduced ? false : { pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.34, ease: "easeOut" }}
                                    />
                                </svg>
                            ) : (
                                card.num
                            )}
                        </motion.span>
                    </div>

                    <span className="ep-hiw-card-badge">
                        {isActive && <span className="ep-hiw-live-dot" aria-hidden="true" />}
                        <span>{card.badge}</span>
                    </span>
                </div>

                <div className="ep-hiw-card-body">
                    <h3 className="ep-hiw-cardtitle">{card.title}</h3>
                    <p className="ep-hiw-cardsum">{card.summary}</p>
                </div>

                <div className="ep-hiw-subpills" onClick={(e) => e.stopPropagation()}>
                    {card.sceneIndices.map((sIdx) => {
                        const sc = SCENES[sIdx]
                        const on = sceneIdx === sIdx
                        return (
                            <button
                                key={sc.id}
                                type="button"
                                className={`ep-hiw-subpill${on ? " is-on" : ""}`}
                                onClick={() => onJumpScene(sIdx)}
                            >
                                {on && (
                                    <motion.span
                                        layoutId="epActiveSubPill"
                                        className="ep-hiw-subpill-bg"
                                        aria-hidden="true"
                                        transition={
                                            reduced
                                                ? { duration: 0 }
                                                : { type: "spring", stiffness: 420, damping: 32 }
                                        }
                                    />
                                )}
                                <span className="ep-hiw-subpill-txt">{sc.shortLabel}</span>
                            </button>
                        )
                    })}
                </div>

                <div className="ep-hiw-bar-wrap">
                    <div className="ep-hiw-bar-meta">
                        <span>{statusText}</span>
                        <span className="ep-hiw-frac-slot">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={`${seg.current}-${seg.total}`}
                                    initial={reduced ? false : { y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={reduced ? undefined : { y: -8, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {seg.current}/{seg.total}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </div>
                    <div className="ep-hiw-bar">
                        <motion.div
                            key={loopActive && isActive ? `loop-${sceneIdx}` : `step-${idx}`}
                            className="ep-hiw-bar-fill"
                            initial={
                                loopActive && isActive && !reduced
                                    ? { width: `${Math.round(seg.from * 100)}%` }
                                    : false
                            }
                            animate={{ width: `${Math.round(seg.to * 100)}%` }}
                            transition={
                                reduced
                                    ? { duration: 0 }
                                    : loopActive && isActive
                                    ? { duration: (dwellMs - 100) / 1000, ease: "linear" }
                                    : { type: "spring", stiffness: 260, damping: 28 }
                            }
                        >
                            {isActive && <span className="ep-hiw-bar-tip" aria-hidden="true" />}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function HowItWorksInteractive({
    style,
    badgeText = "3 Langkah Mudah",
    heading = "Dari lisensi sampai main di Steam",
    subtitle = "Lihat alur aslinya secara otomatis—atau klik langsung tombol di layar launcher dan langkah di bawah dari aktivasi sampai siap main di Steam.",
    autoLoop = true,
}: HowItWorksProps) {
    const reduced = Boolean(useReducedMotion())
    const sectionRef = React.useRef<HTMLElement>(null)
    const podiumRef = React.useRef<HTMLDivElement>(null)
    const podiumInView = useInView(podiumRef, { once: true, amount: 0.12 })
    const sectionVisible = useInView(sectionRef, { once: false, amount: 0.18 })

    const [sceneIdx, setSceneIdx] = React.useState<number>(0)
    const [clickFx, setClickFx] = React.useState<{ key: number; cx: number; cy: number; sparks: boolean } | null>(null)
    const [beamKey, setBeamKey] = React.useState<number>(1)
    const [cursorPos, setCursorPos] = React.useState<{ x: number; y: number; clicking: boolean } | null>(null)
    const [manualHold, setManualHold] = React.useState<boolean>(false)

    const holdTimerRef = React.useRef<number | null>(null)
    const clearHoldTimer = React.useCallback(() => {
        if (holdTimerRef.current !== null) {
            window.clearTimeout(holdTimerRef.current)
            holdTimerRef.current = null
        }
    }, [])

    React.useEffect(() => clearHoldTimer, [clearHoldTimer])

    const pauseForManualInspect = React.useCallback(() => {
        clearHoldTimer()
        setManualHold(true)
        setCursorPos(null)
        holdTimerRef.current = window.setTimeout(() => {
            setManualHold(false)
        }, 5500)
    }, [clearHoldTimer])

    const goToScene = React.useCallback(
        (idx: number, fromUser = true) => {
            if (fromUser) pauseForManualInspect()
            const next = ((idx % SCENES.length) + SCENES.length) % SCENES.length
            setSceneIdx(next)
            setBeamKey((k) => k + 1)
        },
        [pauseForManualInspect]
    )

    const handleHotspotClick = () => {
        pauseForManualInspect()
        const cur = SCENES[sceneIdx]
        setClickFx({
            key: Date.now(),
            cx: cur.hotspot.cx,
            cy: cur.hotspot.cy,
            sparks: cur.id === "03a-detail" || cur.id === "01-license" || cur.id === "04b-steam-play",
        })
        window.setTimeout(() => {
            setSceneIdx((prev) => (prev + 1) % SCENES.length)
            setBeamKey((k) => k + 1)
        }, 260)
    }

    const loopActive = autoLoop && !reduced && sectionVisible && !manualHold

    React.useEffect(() => {
        if (!loopActive) {
            setCursorPos(null)
            return
        }
        const cur = SCENES[sceneIdx]
        const dwell = cur.dwellMs
        const tMove = window.setTimeout(() => {
            setCursorPos({ x: cur.hotspot.cx, y: cur.hotspot.cy, clicking: false })
        }, 280)
        const tPress = window.setTimeout(() => {
            setCursorPos({ x: cur.hotspot.cx, y: cur.hotspot.cy, clicking: true })
            setClickFx({
                key: Date.now() + sceneIdx,
                cx: cur.hotspot.cx,
                cy: cur.hotspot.cy,
                sparks: cur.id === "03a-detail" || cur.id === "01-license" || cur.id === "04b-steam-play",
            })
        }, dwell - 720)
        const tRelease = window.setTimeout(() => {
            setCursorPos({ x: cur.hotspot.cx, y: cur.hotspot.cy, clicking: false })
        }, dwell - 440)
        const tNext = window.setTimeout(() => {
            setSceneIdx((prev) => (prev + 1) % SCENES.length)
            setBeamKey((k) => k + 1)
        }, dwell)

        return () => {
            window.clearTimeout(tMove)
            window.clearTimeout(tPress)
            window.clearTimeout(tRelease)
            window.clearTimeout(tNext)
        }
    }, [loopActive, sceneIdx])

    const scene = SCENES[sceneIdx]
    const activeStep = scene.stepIndex
    const steamTone = scene.hotspot.accent

    return (
        <section
            ref={sectionRef}
            id="process"
            data-backdrop="process"
            aria-label="Cara kerja ElitePlay"
            className="ep-hiw-section"
            style={style}
        >
            <style>{hiwStyles}</style>

            <div className="ep-hiw-head">
                <div className="ep-hiw-badge">
                    <span className="ep-hiw-dot" aria-hidden="true" />
                    <span>{badgeText}</span>
                </div>
                <h2 className="ep-hiw-title">{heading}</h2>
                <p className="ep-hiw-subtitle">{subtitle}</p>
            </div>

            <div className="ep-hiw-wrap">
                {/* TOP TIER: ULTRA-HD 2K/1080P LOSSLESS SOFTWARE SHOWCASE */}
                <div className="ep-hiw-stage-shell">
                    <div className="ep-hiw-stage-glow" aria-hidden="true" />

                    <div className="ep-hiw-stage-bar">
                        <div className="ep-hiw-stage-meta">
                            <span className={`ep-hiw-app-pill${scene.isSteam ? " is-steam" : ""}`}>
                                {scene.appName}
                            </span>
                            <span className="ep-hiw-stage-label">{scene.stepTitle}</span>
                        </div>
                        <span className="ep-hiw-stage-stepcount" aria-live="off">
                            {String(sceneIdx + 1).padStart(2, "0")} / 06
                        </span>
                    </div>

                    <div className="ep-hiw-viewport">
                        {/* All 6 UHD lossless PNG layers pre-mounted -> pure 1:1 opacity crossfade (zero scale blur, zero decode lag!) */}
                        {SCENES.map((sc, i) => (
                            <img
                                key={sc.id}
                                src={sc.image}
                                alt={sc.stepTitle}
                                loading="eager"
                                decoding="sync"
                                className={`ep-hiw-screen-img${i === sceneIdx ? " is-show" : ""}`}
                            />
                        ))}

                        <button
                            key={"hs-" + scene.id}
                            type="button"
                            className={`ep-hiw-hotspot${scene.hotspot.accent !== "gold" ? " is-" + scene.hotspot.accent : ""}`}
                            aria-label={scene.hotspot.hint}
                            onClick={handleHotspotClick}
                            style={{
                                left: scene.hotspot.left,
                                top: scene.hotspot.top,
                                width: scene.hotspot.width,
                                height: scene.hotspot.height,
                                color:
                                    scene.hotspot.accent === "steamBlue"
                                        ? "#4cc2ff"
                                        : scene.hotspot.accent === "steamGreen"
                                        ? "#7ee342"
                                        : "#f0b429",
                            }}
                        >
                            <span className="ep-hiw-hotspot-ring" aria-hidden="true" />
                            <span className={`ep-hiw-hint side-${scene.hotspot.hintSide}`} aria-hidden="true">
                                {scene.hotspot.hint}
                            </span>
                        </button>

                        {!reduced && clickFx && (
                            <React.Fragment key={clickFx.key}>
                                <motion.span
                                    className="ep-hiw-ripple"
                                    aria-hidden="true"
                                    style={{ left: `${clickFx.cx}%`, top: `${clickFx.cy}%` }}
                                    initial={{ scale: 0.3, opacity: 0.95 }}
                                    animate={{ scale: 2.1, opacity: 0 }}
                                    transition={{ duration: 0.52, ease: "easeOut" }}
                                />
                                {clickFx.sparks &&
                                    SPARKS.map((sp, i) => (
                                        <motion.span
                                            key={i}
                                            className="ep-hiw-spark"
                                            aria-hidden="true"
                                            style={{ left: `${clickFx.cx}%`, top: `${clickFx.cy}%` }}
                                            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                            animate={{ x: sp.x, y: sp.y, opacity: 0, scale: 0.2 }}
                                            transition={{ duration: 0.55, ease: "easeOut" }}
                                        />
                                    ))}
                            </React.Fragment>
                        )}

                        {!reduced && cursorPos && (
                            <motion.div
                                className="ep-hiw-cursor"
                                aria-hidden="true"
                                initial={{ left: "50%", top: "75%", opacity: 0 }}
                                animate={{
                                    left: `${cursorPos.x}%`,
                                    top: `${cursorPos.y}%`,
                                    opacity: 1,
                                    scale: cursorPos.clicking ? 0.84 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 170, damping: 22 }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4.5 3.5L19.5 11.2L12.6 13.1L9.8 19.8L4.5 3.5Z"
                                        fill="#F5C33B"
                                        stroke="#0b0d14"
                                        strokeWidth="1.6"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.div>
                        )}
                    </div>

                    <div className="ep-hiw-stage-foot">
                        <p id="z-step-detail" className="ep-hiw-caption" aria-live="polite">
                            {scene.caption}
                        </p>
                        <div className="ep-hiw-dots" role="tablist" aria-label="Pilih tampilan layar">
                            {SCENES.map((sc, i) => (
                                <button
                                    key={sc.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === sceneIdx}
                                    aria-label={sc.stepTitle}
                                    className={`ep-hiw-stepdot${i === sceneIdx ? " is-active" : ""}`}
                                    onClick={() => goToScene(i, true)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM TIER: RAZOR-SHARP KINETIC 3-CARD PODIUM STEPPER */}
                <LayoutGroup id="ep-hiw-podium">
                    <div ref={podiumRef} className="ep-hiw-podium">
                        {STEP_CARDS.map((card, idx) => {
                            const isActive = activeStep === idx
                            const isDone = activeStep > idx
                            const bridgeActive = activeStep > idx
                            const bridgeTone = idx === 1 && activeStep === 2 ? steamTone : "gold"
                            return (
                                <React.Fragment key={card.num}>
                                    <KineticStepCard
                                        card={card}
                                        idx={idx}
                                        inView={podiumInView}
                                        isActive={isActive}
                                        isDone={isDone}
                                        sceneIdx={sceneIdx}
                                        activeStep={activeStep}
                                        loopActive={loopActive}
                                        dwellMs={scene.dwellMs}
                                        steamTone={steamTone}
                                        reduced={reduced}
                                        onSelectCard={() => goToScene(card.sceneIndices[0], true)}
                                        onJumpScene={(sIdx) => goToScene(sIdx, true)}
                                    />

                                    {idx < 2 && (
                                        <>
                                            <EnergyBridge
                                                active={bridgeActive}
                                                tone={bridgeTone}
                                                pulseKey={beamKey + idx}
                                            />
                                            <MobileBridge active={bridgeActive} tone={bridgeTone} />
                                        </>
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </div>
                </LayoutGroup>
            </div>
        </section>
    )
}

