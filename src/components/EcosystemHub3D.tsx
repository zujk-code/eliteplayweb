"use client"

import * as React from "react"
type ModuleId = "steam" | "denuvo" | "ea" | "ubisoft" | "rockstar" | "gamepass"

interface HubModule {
    id: ModuleId
    shortLabel: string
    title: string
    accent: string
    cx: number
    cy: number
    trace: string
    dotX: number
    dotY: number
}

const MODULES: HubModule[] = [
    {
        id: "steam",
        shortLabel: "Steam",
        title: "Add to Steam Library Pribadi",
        accent: "#38bdf8",
        cx: 256,
        cy: 132,
        trace: "M 426 246 C 378 220, 356 176, 304 156",
        dotX: 368,
        dotY: 196,
    },
    {
        id: "denuvo",
        shortLabel: "Denuvo",
        title: "Aktivasi Game Denuvo",
        accent: "#f0b429",
        cx: 744,
        cy: 132,
        trace: "M 574 246 C 622 220, 644 176, 696 156",
        dotX: 632,
        dotY: 196,
    },
    {
        id: "ea",
        shortLabel: "EA App",
        title: "Integrasi EA App",
        accent: "#fb923c",
        cx: 842,
        cy: 286,
        trace: "M 632 286 C 686 286, 704 286, 756 286",
        dotX: 694,
        dotY: 286,
    },
    {
        id: "ubisoft",
        shortLabel: "Ubisoft",
        title: "Integrasi Ubisoft Connect",
        accent: "#a78bfa",
        cx: 744,
        cy: 434,
        trace: "M 574 326 C 624 352, 646 392, 696 410",
        dotX: 635,
        dotY: 374,
    },
    {
        id: "rockstar",
        shortLabel: "Rockstar",
        title: "Integrasi Rockstar Games",
        accent: "#f59e0b",
        cx: 256,
        cy: 434,
        trace: "M 426 326 C 376 352, 354 392, 304 410",
        dotX: 365,
        dotY: 374,
    },
    {
        id: "gamepass",
        shortLabel: "Game Pass",
        title: "800+ Game Pass Offline",
        accent: "#34d399",
        cx: 158,
        cy: 286,
        trace: "M 368 286 C 314 286, 296 286, 244 286",
        dotX: 306,
        dotY: 286,
    },
]

const round2 = (n: number) => Math.round(n * 100) / 100

const DIAL_TICKS = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2
    const major = i % 6 === 0
    const r1 = major ? 96 : 103
    const r2 = 117
    return {
        x1: round2(500 + Math.cos(a) * r1),
        y1: round2(286 + Math.sin(a) * r1 * 0.49),
        x2: round2(500 + Math.cos(a) * r2),
        y2: round2(286 + Math.sin(a) * r2 * 0.49),
        major,
    }
})

const SOCKET_PINS = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2
    return {
        x: round2(500 + Math.cos(a) * 127),
        y: round2(286 + Math.sin(a) * 127 * 0.49),
        gold: i % 4 === 0,
    }
})

function renderModuleIcon(id: ModuleId, color: string, active: boolean) {
    const f = active ? "url(#epHubLogoGlow)" : undefined
    switch (id) {
        case "steam":
            return (
                <g transform="translate(-18, -31) scale(1.5)" fill={color} filter={f}>
                    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                </g>
            )
        case "denuvo":
            return (
                <g transform="translate(-34, -28.5) scale(0.0664)" fill={color} filter={f}>
                    <path d="M175.567 465.727l12.727-20.195 33.76-53.103c14.06-21.916 30.462-47.484 48.038-74.876l55.381-85.63c18.984-29.065 37.966-58.13 55.763-85.38l48.92-74.304 34.823-52.413C473.433 7.21 478.266 0 478.266 0L465.54 20.195c-8.148 12.817-19.79 31.13-33.757 53.105-14.06 21.916-30.465 47.481-48.038 74.876l-55.384 85.627a2669295.39 2669295.39 0 0 0-55.765 85.381c-17.898 27.183-34.602 52.556-48.922 74.301-14.41 21.688-26.417 39.761-34.82 52.413l-13.287 19.829zM957.785 0L789.582 254.189a114.681 114.681 0 0 1-2.068-5.486L934.29 15.878 785.194 241.192a117.176 117.176 0 0 1-1.758-7.276L912.559 33.304 782.094 226.067c-.49-3.528-.856-7.101-1.051-10.742l-37.154 60.16V91.473H710.03v240.714h37.936l5.178-8.347zm30.366 125.535c-23.888-23.772-53.069-35.828-86.727-35.828-.08 0-.157.005-.237.005l-23.255 36.778c7.393-1.94 15.2-2.924 23.492-2.924 24.67 0 45.178 8.512 62.69 26.023 17.513 17.519 26.027 38.024 26.027 62.694s-8.512 45.178-26.028 62.694c-17.514 17.514-38.019 26.028-62.69 26.028-24.67 0-45.177-8.511-62.693-26.028-13.727-13.726-21.898-29.3-24.802-47.265l-23.517 37.193c5.904 12.284 14.05 23.624 24.421 33.949 23.783 23.892 52.917 36.008 86.592 36.008 33.67 0 62.85-12.111 86.736-35.997 23.782-23.782 35.84-52.912 35.84-86.58 0-33.66-12.056-62.84-35.85-86.75zM855.804 98.18c-14.999 5.983-28.697 15.102-40.962 27.367-23.886 23.888-35.997 53.073-35.997 86.736 0 2.485.088 4.936.219 7.373zM658.973 247.61c0 14.221-4.89 26.072-14.923 36.204-10.15 10.145-21.994 15.079-36.204 15.079-14.209 0-26.053-4.934-36.18-15.059-10.056-10.15-14.941-21.998-14.941-36.224V89.815H522.86V247.61c0 23.35 8.374 43.567 24.896 60.09 16.518 16.517 36.735 24.895 60.09 24.895 23.351 0 43.569-8.378 60.089-24.896 16.517-16.517 24.895-36.735 24.895-60.089V89.815h-33.858zM285.22 225.75v-20.943h-75.35v-82.17h95.337V101.7H188.93v227.793h55.855l13.37-20.942h-48.285v-82.802zM0 329.492V101.7h55.998c31.408 0 58.271 11.154 80.583 33.473 22.21 22.205 33.313 49.014 33.313 80.422 0 31.408-11.103 58.218-33.313 80.428-22.314 22.312-49.175 33.473-80.583 33.473zm20.781-20.779h35.217c25.699 0 47.642-9.096 65.833-27.289 18.19-18.186 27.284-40.131 27.284-65.833 0-25.699-9.094-47.64-27.284-65.833-18.19-18.185-40.134-27.282-65.833-27.282H20.78zm380.747-163.308l-20.358 31.886 91.375 152.763h32.648V89.34h-33.856v172.932zm-32.44 50.81l-33.858 53.035v80.804h33.859z" />
                </g>
            )
        case "ea":
            return (
                <g transform="translate(-24, -37) scale(2.0)" fill={color} filter={f}>
                    <path d="M16.635 6.162l-5.928 9.377H4.24l1.508-2.3h4.024l1.474-2.335H2.264L.79 13.239h2.156L0 17.84h12.072l4.563-7.259 1.652 2.66h-1.401l-1.473 2.299h4.347l1.473 2.3H24zm-11.461.107L3.7 8.604l9.52-.035 1.474-2.3z" />
                </g>
            )
        case "ubisoft":
            return (
                <g transform="translate(-18, -31) scale(1.5)" fill={color} filter={f}>
                    <path d="M23.561 11.988C23.301-.304 6.954-4.89.656 6.634c.282.206.661.477.943.672a11.747 11.747 0 00-.976 3.067 11.885 11.885 0 00-.184 2.071C.439 18.818 5.621 24 12.005 24c6.385 0 11.556-5.17 11.556-11.556v-.455zm-20.27 2.06c-.152 1.246-.054 1.636-.054 1.788l-.282.098c-.108-.206-.37-.932-.488-1.908C2.163 10.308 4.7 6.96 8.57 6.33c3.544-.52 6.937 1.68 7.728 4.758l-.282.098c-.087-.087-.228-.336-.77-.878-4.281-4.281-11.002-2.32-11.956 3.74zm11.002 2.081a3.145 3.145 0 01-2.59 1.355 3.15 3.15 0 01-3.155-3.155 3.159 3.159 0 012.927-3.144c1.018-.043 1.972.51 2.416 1.398a2.58 2.58 0 01-.455 2.95c.293.205.575.4.856.595zm6.58.12c-1.669 3.782-5.106 5.766-8.77 5.712-7.034-.347-9.083-8.466-4.38-11.393l.207.206c-.076.108-.358.325-.791 1.182-.51 1.041-.672 2.081-.607 2.732.369 5.67 8.314 6.83 11.045 1.214C21.057 8.217 11.822.401 3.626 6.374l-.184-.184C5.599 2.808 9.816 1.3 13.837 2.309c6.147 1.55 9.453 7.956 7.035 13.94z" />
                </g>
            )
        case "rockstar":
            return (
                <g transform="translate(-18, -31) scale(1.5)" fill={color} filter={f}>
                    <path d="M5.971 6.816h3.241c1.469 0 2.741-.448 2.741-2.084 0-1.3-1.117-1.576-2.19-1.576H6.748l-.777 3.66Zm12.834 8.753h5.168l-4.664 3.228.755 5.087-4.041-3.07L10.599 24l2.536-5.392s-2.95-3.075-2.947-3.075c-.198-.262-.265-.936-.265-1.226 0-.367.024-.739.049-1.134.028-.451.058-.933.058-1.476 0-1.338-.59-2.038-2.036-2.038H5.283l-1.18 5.525H.026L3.269 0h7.672c2.852 0 5.027.702 5.027 3.936 0 2.276-1.12 3.894-3.592 4.233v.045c1.162.276 1.598 1.062 1.598 2.527 0 .585-.018 1.098-.034 1.581-.015.428-.03.834-.03 1.243 0 .525.137 1.382.48 1.968h.567l3.028-5.06.82 5.096Zm-1.233-2.948-2.187 3.654h-3.457l2.103 2.189-1.73 3.672 3.777-2.218 2.976 2.263-.553-3.731 3.093-2.139h-3.43l-.592-3.69Z" />
                </g>
            )
        case "gamepass":
            return (
                <g transform="translate(-24.6, -37.6) scale(2.05)" fill={color} filter={f}>
                    <path d="M7 6h10a6 6 0 0 1 6 6a6 6 0 0 1-6 6c-1.78 0-3.37-.77-4.47-2h-1.06c-1.1 1.23-2.69 2-4.47 2a6 6 0 0 1-6-6a6 6 0 0 1 6-6M6 9v2H4v2h2v2h2v-2h2v-2H8V9zm9.5 3a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m3-3a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 18.5 9" />
                </g>
            )
    }
}

function CylinderDisc({
    cx,
    cy,
    rx,
    ry,
    h,
    sideFill,
    topFill,
    rimStroke,
    rimOpacity = 0.5,
}: {
    cx: number
    cy: number
    rx: number
    ry: number
    h: number
    sideFill: string
    topFill: string
    rimStroke: string
    rimOpacity?: number
}) {
    const xL = cx - rx
    const xR = cx + rx
    const sidePath = `M ${xL} ${cy} L ${xL} ${cy + h} A ${rx} ${ry} 0 0 0 ${xR} ${cy + h} L ${xR} ${cy} A ${rx} ${ry} 0 0 1 ${xL} ${cy} Z`
    return (
        <g>
            <path d={sidePath} fill={sideFill} />
            <ellipse
                cx={cx}
                cy={cy}
                rx={rx}
                ry={ry}
                fill={topFill}
                stroke={rimStroke}
                strokeWidth="1.15"
                strokeOpacity={rimOpacity}
            />
        </g>
    )
}

const hubStyles = `
section.ep-hub-section,
section#integrations.ep-hub-section {
  position: relative;
  width: 100%;
  height: auto !important;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(56px, 6.5cqw, 92px) 0 clamp(44px, 5.2cqw, 76px);
  background: transparent;
  color: var(--glass-pearl, #f6f7fa);
  font-family: var(--body-font, "DM Sans", Arial, sans-serif);
  overflow: visible;
  box-sizing: border-box;
}
section.ep-hub-section *,
section.ep-hub-section *::before,
section.ep-hub-section *::after {
  box-sizing: border-box;
}
.ep-hub-section .ep-hub-head {
  width: min(1040px, 90%);
  max-width: 780px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}
.ep-hub-section h2.ep-hub-title {
  margin: 0;
  color: var(--glass-pearl, #f6f7fa);
  font: 700 clamp(30px, 4.1cqw, 52px)/1.05 var(--body-font, "DM Sans", Arial, sans-serif);
  letter-spacing: -0.045em;
  text-wrap: balance;
}
.ep-hub-section p.ep-hub-sub {
  margin: 0;
  max-width: 56ch;
  color: var(--body, #9fa6b5);
  font: 400 clamp(14px, 1.42cqw, 17px)/1.52 var(--body-font, "DM Sans", Arial, sans-serif);
  text-wrap: balance;
}
.ep-hub-section .ep-hub-stage {
  position: relative;
  flex: none;
  width: min(1040px, 94%);
  margin: clamp(16px, 2.2cqw, 28px) auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
}
.ep-hub-section svg.ep-hub-svg {
  display: block;
  flex: none;
  width: 100%;
  height: auto;
  aspect-ratio: 1000 / 540;
  max-height: 580px;
  overflow: visible;
  user-select: none;
}
.ep-hub-section .ep-hub-node {
  cursor: pointer;
  transition: transform 0.36s cubic-bezier(0.22, 1, 0.36, 1);
  transform-box: fill-box;
  transform-origin: center;
}
.ep-hub-section .ep-hub-node.is-active,
.ep-hub-section .ep-hub-node:hover {
  transform: translateY(-8px);
}
.ep-hub-section .ep-hub-core-group {
  cursor: pointer;
  animation: epHubCoreFloat 4.8s ease-in-out infinite;
}
.ep-hub-section .ep-hub-core-group.is-burst {
  filter: drop-shadow(0 0 22px rgba(240, 180, 41, 0.46));
}
.ep-hub-section .ep-hub-pulse-path {
  stroke-dasharray: 22 100;
  stroke-dashoffset: 122;
  animation: epHubTraceFlow 2.1s cubic-bezier(0.35, 0, 0.25, 1) infinite;
}
.ep-hub-section .ep-hub-pulse-return {
  stroke-dasharray: 12 100;
  stroke-dashoffset: 0;
  animation: epHubTraceReturn 2.1s cubic-bezier(0.35, 0, 0.25, 1) infinite;
}
.ep-hub-section .ep-hub-idle-pulse {
  stroke-dasharray: 10 100;
  stroke-dashoffset: 110;
  animation: epHubTraceFlow 4.2s linear infinite;
}
.ep-hub-section .ep-hub-radar {
  transform-origin: 500px 286px;
  animation: epHubRadarPulse 3.6s ease-in-out infinite;
}

@keyframes epHubCoreFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
}
@keyframes epHubTraceFlow {
  0% { stroke-dashoffset: 122; opacity: 0; }
  12% { opacity: 1; }
  85% { opacity: 1; }
  100% { stroke-dashoffset: -12; opacity: 0; }
}
@keyframes epHubTraceReturn {
  0% { stroke-dashoffset: -12; opacity: 0; }
  18% { opacity: 0.75; }
  85% { opacity: 0.75; }
  100% { stroke-dashoffset: 118; opacity: 0; }
}
@keyframes epHubRadarPulse {
  0%, 100% { opacity: 0.36; }
  50% { opacity: 0.78; }
}

/* Wide desktop (1440px–1920px) scale */
@media (min-width: 1180px) {
  .ep-hub-section .ep-hub-head { width: min(1520px, 88%); max-width: 920px; }
  .ep-hub-section h2.ep-hub-title { font-size: clamp(40px, 3.1vw, 58px); }
  .ep-hub-section p.ep-hub-sub { font-size: clamp(15.5px, 1.05vw, 19px); max-width: 62ch; }
  .ep-hub-section .ep-hub-stage { width: min(1440px, 88%); }
  .ep-hub-section svg.ep-hub-svg { max-height: 760px; }
}
@container (max-width: 740px) {
  .ep-hub-section .ep-hub-head { width: 92%; }
  .ep-hub-section .ep-hub-stage { width: 96%; }
}
@media (prefers-reduced-motion: reduce) {
  .ep-hub-section .ep-hub-core-group,
  .ep-hub-section .ep-hub-pulse-path,
  .ep-hub-section .ep-hub-pulse-return,
  .ep-hub-section .ep-hub-idle-pulse,
  .ep-hub-section .ep-hub-radar {
    animation: none !important;
  }
}
`

interface Props {
    heading?: string
    subtitle?: string
    style?: React.CSSProperties
}

export default function ElitePlayEcosystemHub({
    heading = "Satu launcher. Semua ekosistem game.",
    subtitle = "Dari Steam, aktivasi Denuvo, Game Pass Offline, hingga EA App, Ubisoft, dan Rockstar — semua jalan dari satu pusat.",
    style,
}: Props) {
    const [activeIdx, setActiveIdx] = React.useState(0)
    const [paused, setPaused] = React.useState(false)
    const [coreHover, setCoreHover] = React.useState(false)

    React.useEffect(() => {
        if (paused || coreHover) return
        const timer = window.setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % MODULES.length)
        }, 3200)
        return () => window.clearInterval(timer)
    }, [paused, coreHover])

    return (
        <section
            id="integrations"
            aria-labelledby="ep-hub-heading"
            className="ep-hub-section"
            style={style}
        >
            <style>{hubStyles}</style>

            <header className="ep-hub-head">
                <h2 id="ep-hub-heading" className="ep-hub-title">
                    {heading}
                </h2>
                <p className="ep-hub-sub">{subtitle}</p>
            </header>

            <div
                className="ep-hub-stage"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                    setPaused(false)
                    setCoreHover(false)
                }}
            >
                <svg
                    className="ep-hub-svg"
                    viewBox="0 0 1000 540"
                    role="img"
                    aria-label="Diagram 3D isometrik ekosistem ElitePlay Launcher yang menghubungkan Steam, Denuvo, EA App, Ubisoft, Rockstar, dan Game Pass"
                >
                    <defs>
                        <radialGradient id="epHubFloorGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#191e2b" stopOpacity="0.64" />
                            <stop offset="48%" stopColor="#10131c" stopOpacity="0.34" />
                            <stop offset="82%" stopColor="#0a0c10" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#08090c" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="epHubCoreGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f5cb4c" stopOpacity={coreHover ? "0.38" : "0.24"} />
                            <stop offset="46%" stopColor="#38bdf8" stopOpacity="0.11" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="epHubAxisFade" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
                            <stop offset="22%" stopColor="#93c5fd" stopOpacity="0.13" />
                            <stop offset="50%" stopColor="#fde68a" stopOpacity="0.22" />
                            <stop offset="78%" stopColor="#93c5fd" stopOpacity="0.13" />
                            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="epHubBezelSide" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0e1017" />
                            <stop offset="28%" stopColor="#222634" />
                            <stop offset="52%" stopColor="#32384b" />
                            <stop offset="78%" stopColor="#191c26" />
                            <stop offset="100%" stopColor="#0a0c10" />
                        </linearGradient>
                        <radialGradient id="epHubBezelTop" cx="46%" cy="38%" r="60%">
                            <stop offset="0%" stopColor="#1d202b" />
                            <stop offset="68%" stopColor="#11131a" />
                            <stop offset="100%" stopColor="#090a0e" />
                        </radialGradient>
                        <linearGradient id="epHubGoldSide" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6e4608" />
                            <stop offset="26%" stopColor="#e8ac22" />
                            <stop offset="50%" stopColor="#fde06e" />
                            <stop offset="76%" stopColor="#c68312" />
                            <stop offset="100%" stopColor="#4f3104" />
                        </linearGradient>
                        <linearGradient id="epHubDarkDiscSide" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10121a" />
                            <stop offset="28%" stopColor="#272c3d" />
                            <stop offset="54%" stopColor="#3b4259" />
                            <stop offset="80%" stopColor="#1a1e2a" />
                            <stop offset="100%" stopColor="#0c0e14" />
                        </linearGradient>
                        <linearGradient id="epHubPearlSide" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#704b0c" />
                            <stop offset="24%" stopColor="#e2af34" />
                            <stop offset="48%" stopColor="#fbe17c" />
                            <stop offset="72%" stopColor="#c18316" />
                            <stop offset="100%" stopColor="#523508" />
                        </linearGradient>
                        <radialGradient id="epHubPearlTop" cx="38%" cy="32%" r="68%">
                            <stop offset="0%" stopColor="#fce078" />
                            <stop offset="52%" stopColor="#e9b63a" />
                            <stop offset="100%" stopColor="#b87b14" />
                        </radialGradient>
                        <radialGradient id="epHubDarkTop" cx="42%" cy="36%" r="65%">
                            <stop offset="0%" stopColor="#242938" />
                            <stop offset="100%" stopColor="#10121a" />
                        </radialGradient>
                        <linearGradient id="epHubTileTop" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1d202b" />
                            <stop offset="55%" stopColor="#13151d" />
                            <stop offset="100%" stopColor="#0d0f15" />
                        </linearGradient>
                        <linearGradient id="epHubTileTopActive" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#262b3a" />
                            <stop offset="55%" stopColor="#181b26" />
                            <stop offset="100%" stopColor="#10121a" />
                        </linearGradient>
                        <filter id="epHubGlow" x="-40%" y="-40%" width="180%" height="180%">
                            <feGaussianBlur stdDeviation="3.4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter id="epHubLogoGlow" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="1.4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <g aria-hidden="true">
                        <ellipse cx="500" cy="286" rx="456" ry="222" fill="url(#epHubFloorGrad)" />
                        <ellipse cx="500" cy="286" rx="402" ry="197" fill="none" stroke="rgba(200, 214, 240, 0.09)" strokeWidth="1" strokeDasharray="3 8" />
                        <ellipse cx="500" cy="286" rx="320" ry="156" fill="none" stroke="rgba(200, 214, 240, 0.14)" strokeWidth="1" strokeDasharray="4 7" />
                        <ellipse cx="500" cy="286" rx="172" ry="84" fill="none" stroke="rgba(248, 218, 114, 0.16)" strokeWidth="1" />
                        <line x1="112" y1="92" x2="888" y2="480" stroke="url(#epHubAxisFade)" strokeWidth="1" strokeDasharray="4 7" />
                        <line x1="112" y1="480" x2="888" y2="92" stroke="url(#epHubAxisFade)" strokeWidth="1" strokeDasharray="4 7" />
                        <line x1="80" y1="286" x2="920" y2="286" stroke="url(#epHubAxisFade)" strokeWidth="0.9" strokeDasharray="3 8" opacity="0.65" />
                        <ellipse cx="500" cy="292" rx="242" ry="116" fill="url(#epHubCoreGlow)" />
                    </g>

                    <g aria-hidden="true">
                        {MODULES.map((mod, idx) => {
                            const isLit = coreHover || idx === activeIdx
                            return (
                                <g key={mod.id}>
                                    <path d={mod.trace} fill="none" stroke={isLit ? mod.accent : "rgba(186, 198, 222, 0.2)"} strokeOpacity={isLit ? 0.48 : 0.72} strokeWidth={isLit ? 2.1 : 1.35} strokeLinecap="round" />
                                    <circle cx={mod.dotX} cy={mod.dotY} r={isLit ? 3.4 : 2.1} fill={isLit ? mod.accent : "#3e4659"} filter={isLit ? "url(#epHubGlow)" : undefined} />
                                    {isLit ? (
                                        <>
                                            <path d={mod.trace} pathLength={100} fill="none" stroke={mod.accent} strokeWidth="4.4" strokeLinecap="round" strokeOpacity="0.65" filter="url(#epHubGlow)" className="ep-hub-pulse-path" />
                                            <path d={mod.trace} pathLength={100} fill="none" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" className="ep-hub-pulse-path" />
                                            <path d={mod.trace} pathLength={100} fill="none" stroke={mod.accent} strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.72" className="ep-hub-pulse-return" />
                                        </>
                                    ) : (
                                        <path d={mod.trace} pathLength={100} fill="none" stroke="rgba(210, 224, 248, 0.36)" strokeWidth="1.4" strokeLinecap="round" className="ep-hub-idle-pulse" style={{ animationDelay: `${idx * -0.7}s` }} />
                                    )}
                                </g>
                            )
                        })}
                    </g>

                    <g aria-hidden="true">
                        <ellipse cx="500" cy="306" rx="146" ry="72" fill="rgba(0, 0, 0, 0.72)" />
                        <CylinderDisc cx={500} cy={286} rx={134} ry={65.6} h={16} sideFill="url(#epHubBezelSide)" topFill="url(#epHubBezelTop)" rimStroke="#c4d0e6" rimOpacity={0.3} />
                        <ellipse cx="500" cy="286" rx="122" ry="59.8" fill="none" stroke="rgba(200, 212, 236, 0.14)" strokeWidth="1" />
                        {DIAL_TICKS.map((t, i) => (
                            <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={t.major ? "#f5cb4c" : "rgba(196, 208, 232, 0.26)"} strokeWidth={t.major ? 1.8 : 1} strokeLinecap="round" />
                        ))}
                        {SOCKET_PINS.map((p, i) => (
                            <circle key={i} cx={p.x} cy={p.y} r={p.gold ? 1.7 : 1.1} fill={p.gold ? "#60a5fa" : "rgba(196, 208, 232, 0.26)"} />
                        ))}
                        <ellipse cx="500" cy="286" rx="86" ry="42.1" fill="#0a0c12" stroke="#38bdf8" strokeWidth="1.8" strokeOpacity={coreHover ? "0.95" : "0.58"} filter="url(#epHubGlow)" className="ep-hub-radar" />
                    </g>

                    {MODULES.map((mod, idx) => {
                        const isActive = coreHover || idx === activeIdx
                        const topStroke = isActive ? mod.accent : "rgba(210, 220, 240, 0.16)"
                        const isoMatrix = "matrix(0.894, -0.447, 0.894, 0.447, 0, 0)"
                        return (
                            <g
                                key={mod.id}
                                className={`ep-hub-node ${isActive ? "is-active" : ""}`}
                                role="button"
                                tabIndex={0}
                                aria-label={mod.title}
                                aria-pressed={idx === activeIdx}
                                onMouseEnter={() => setActiveIdx(idx)}
                                onClick={() => setActiveIdx(idx)}
                                onFocus={() => setActiveIdx(idx)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault()
                                        setActiveIdx(idx)
                                    }
                                }}
                            >
                                <g transform={`translate(${mod.cx}, ${mod.cy + 20})`}>
                                    <g transform={isoMatrix}>
                                        <rect x="-54" y="-54" width="108" height="108" rx="18" fill="rgba(0, 0, 0, 0.72)" />
                                        {isActive && (
                                            <rect x="-56" y="-56" width="112" height="112" rx="20" fill={mod.accent} fillOpacity="0.18" filter="url(#epHubGlow)" />
                                        )}
                                    </g>
                                </g>

                                {[14, 11.5, 9, 6.5, 4, 2].map((dy, layerIdx) => (
                                    <g key={dy} transform={`translate(${mod.cx}, ${mod.cy + dy})`}>
                                        <g transform={isoMatrix}>
                                            <rect
                                                x="-51"
                                                y="-51"
                                                width="102"
                                                height="102"
                                                rx="16"
                                                fill={layerIdx === 0 ? "#0a0c12" : layerIdx < 3 ? "#12151f" : layerIdx < 5 ? "#1b1f2d" : "#24293b"}
                                                stroke={layerIdx === 0 && isActive ? mod.accent : "rgba(200, 214, 238, 0.08)"}
                                                strokeOpacity={layerIdx === 0 && isActive ? 0.45 : 0.5}
                                                strokeWidth="0.9"
                                            />
                                        </g>
                                    </g>
                                ))}

                                <g transform={`translate(${mod.cx}, ${mod.cy})`}>
                                    <g transform={isoMatrix}>
                                        <rect x="-51" y="-51" width="102" height="102" rx="16" fill={isActive ? "url(#epHubTileTopActive)" : "url(#epHubTileTop)"} stroke={topStroke} strokeWidth={isActive ? 1.85 : 1.1} />
                                        <rect x="-44" y="-44" width="88" height="88" rx="12" fill="none" stroke={isActive ? mod.accent : "rgba(220, 230, 248, 0.07)"} strokeOpacity={isActive ? 0.28 : 1} strokeWidth="0.9" />
                                        {renderModuleIcon(mod.id, isActive ? mod.accent : "#e2e8f4", isActive)}
                                        <circle cx="-29" cy="24" r="3.4" fill={mod.accent} filter={isActive ? "url(#epHubGlow)" : undefined} />
                                        <text
                                            x="-20"
                                            y="28"
                                            fill={isActive ? "#ffffff" : "#cad3e2"}
                                            fontSize="12"
                                            fontWeight="700"
                                            fontFamily='var(--body-font, "DM Sans", Arial, sans-serif)'
                                            letterSpacing="-0.02em"
                                        >
                                            {mod.shortLabel}
                                        </text>
                                    </g>
                                </g>
                            </g>
                        )
                    })}

                    <g
                        className={`ep-hub-core-group ${coreHover ? "is-burst" : ""}`}
                        role="button"
                        tabIndex={0}
                        aria-label="Pusat ElitePlay Core — arahkan kursor untuk menyalakan seluruh 6 jalur ekosistem"
                        onMouseEnter={() => setCoreHover(true)}
                        onMouseLeave={() => setCoreHover(false)}
                        onClick={() => setCoreHover((v) => !v)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault()
                                setCoreHover((v) => !v)
                            }
                        }}
                    >
                        <CylinderDisc cx={500} cy={272} rx={78} ry={38.2} h={10} sideFill="url(#epHubGoldSide)" topFill="#1f1a10" rimStroke="#f7ca48" rimOpacity={0.86} />
                        <CylinderDisc cx={500} cy={261} rx={74} ry={36.3} h={10} sideFill="url(#epHubDarkDiscSide)" topFill="url(#epHubDarkTop)" rimStroke="#7dd3fc" rimOpacity={0.5} />
                        <CylinderDisc cx={500} cy={250} rx={74} ry={36.3} h={10} sideFill="url(#epHubGoldSide)" topFill="#262012" rimStroke="#fde068" rimOpacity={0.88} />
                        <CylinderDisc cx={500} cy={239} rx={74} ry={36.3} h={10} sideFill="url(#epHubDarkDiscSide)" topFill="url(#epHubDarkTop)" rimStroke="#f0b429" rimOpacity={0.82} />
                        <CylinderDisc cx={500} cy={224} rx={74} ry={36.3} h={14} sideFill="url(#epHubPearlSide)" topFill="url(#epHubPearlTop)" rimStroke="#fde068" rimOpacity={0.92} />
                        <ellipse cx="500" cy="224" rx="62" ry="30.4" fill="none" stroke="rgba(26, 18, 4, 0.24)" strokeWidth="1.2" />
                        <g transform="translate(500, 224) matrix(0.894, -0.447, 0.894, 0.447, 0, 0)">
                            <g transform="translate(-24.3, -27) scale(0.32)">
                                <path d="M23 0L54 0L54 14L55 14L55 16L59 16L60 0L93 0L93 16L98 16L98 1L99 0L129 0L131 49L124 48L123 52L121 53L121 55L119 57L119 62L120 62L120 69L121 69L123 90L124 90L126 111L127 111L127 119L128 120L139 119L139 121L140 121L140 136L143 136L145 138L145 140L146 140L146 142L147 142L151 152L152 152L152 169L1 169L0 152L2 151L8 137L12 136L13 119L25 120L30 79L31 79L31 72L32 72L32 65L33 65L33 56L31 55L29 49L28 48L21 49L21 45L22 45L22 21L23 21ZM29 5L28 5L28 22L27 22L27 43L74 38L74 37L126 43L124 5L103 5L103 21L88 21L88 5L65 5L64 21L50 21L49 5ZM36 14L41 14L42 30L63 30L63 31L54 31L54 32L45 32L45 33L37 33L36 34L35 33L36 32ZM75 43L74 44L65 44L65 45L56 45L56 46L34 48L39 59L38 59L38 66L37 66L35 87L34 87L30 122L63 118L63 117L70 117L70 116L84 116L84 117L91 117L91 118L98 118L98 119L123 122L121 105L120 105L120 98L119 98L119 91L118 91L118 84L117 84L117 77L116 77L116 70L115 70L115 63L114 63L114 56L115 56L118 48ZM60 53L69 53L69 61L53 63L53 71L60 71L60 70L68 70L69 69L69 79L52 81L51 82L51 90L69 88L69 108L39 112L40 105L41 105L41 98L42 98L42 90L43 90L43 83L44 83L44 76L45 76L47 55L60 54ZM19 124L18 124L18 130L17 130L17 140L14 140L11 142L11 144L10 144L6 154L5 154L5 163L6 164L147 164L147 153L146 153L143 145L140 141L135 140L135 125L134 124L133 125L114 126L114 127L94 128L94 129L84 129L84 130L70 130L70 129L29 126L29 125L19 125ZM25 134L35 134L35 135L46 135L46 136L56 136L56 137L69 138L69 156L15 156L15 153L16 153L18 148L25 147Z" fill="#120e05" fillRule="evenodd" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    )
}

