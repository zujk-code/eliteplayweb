"use client"

import * as React from "react"

function hasScrollableAncestor(target: EventTarget | null, deltaY: number): boolean {
  let node = target instanceof Element ? target : null
  while (node && node !== document.body && node !== document.documentElement) {
    const oy = window.getComputedStyle(node).overflowY
    if ((oy === "auto" || oy === "scroll" || oy === "overlay") && node.scrollHeight > node.clientHeight + 2) {
      const atTop = node.scrollTop <= 0 && deltaY < 0
      const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1 && deltaY > 0
      if (!atTop && !atBottom) return true
    }
    node = node.parentElement
  }
  return false
}

export default function SmoothScroll({ intensity = 12 }: { intensity?: number }) {
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const win = window as Window & {
      __epSmoothActive?: boolean
      __epScrollTo?: (target: HTMLElement | number, offset?: number) => void
    }
    const clamped = Math.max(4, Math.min(30, intensity))
    const wheelLambda = 100 / clamped
    const trackpadLambda = 18

    let currentY = window.scrollY || document.documentElement.scrollTop || 0
    let targetY = currentY
    let lastWrittenY = currentY
    let activeLambda = wheelLambda
    let rafId = 0
    let lastTime = 0
    let isWriting = false

    const getMaxScroll = () =>
      Math.max(0, Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0) - window.innerHeight)

    const emitScroll = (y: number) => {
      window.dispatchEvent(new CustomEvent("ep:scroll", { detail: { y } }))
    }

    const writeScroll = (y: number) => {
      isWriting = true
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior })
      const actualY = window.scrollY || document.documentElement.scrollTop || 0
      lastWrittenY = actualY
      emitScroll(actualY)
      isWriting = false
    }

    const step = (now: number) => {
      rafId = 0
      const dt = lastTime ? Math.min(0.05, Math.max(0.001, (now - lastTime) * 0.001)) : 1 / 60
      lastTime = now

      const maxY = getMaxScroll()
      targetY = Math.max(0, Math.min(maxY, targetY))

      const diff = targetY - currentY
      if (Math.abs(diff) < 0.35) {
        currentY = targetY
        lastTime = 0
        writeScroll(currentY)
        return
      }

      currentY += diff * (1 - Math.exp(-activeLambda * dt))
      writeScroll(currentY)
      rafId = requestAnimationFrame(step)
    }

    const startLoop = () => {
      if (!rafId) {
        lastTime = 0
        rafId = requestAnimationFrame(step)
      }
    }

    const onWheel = (e: WheelEvent) => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey) return
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.deltaY === 0) return

      let dy = e.deltaY
      if (e.deltaMode === 1) dy *= 34
      else if (e.deltaMode === 2) dy *= window.innerHeight * 0.85

      if (hasScrollableAncestor(e.target, dy)) return
      e.preventDefault()

      activeLambda = e.deltaMode === 0 && Math.abs(e.deltaY) < 42 ? trackpadLambda : wheelLambda
      const actual = window.scrollY || 0
      if (!rafId && Math.abs(actual - currentY) > 2) currentY = targetY = actual

      targetY = Math.max(0, Math.min(getMaxScroll(), targetY + dy))
      startLoop()
    }

    const onNativeScroll = () => {
      if (isWriting) return
      const actual = window.scrollY || 0
      if (!rafId || Math.abs(actual - lastWrittenY) > 4) {
        currentY = targetY = lastWrittenY = actual
        if (rafId) {
          cancelAnimationFrame(rafId)
          rafId = 0
          lastTime = 0
        }
        emitScroll(actual)
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return
      const el = e.target as HTMLElement | null
      const tag = el?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el?.isContentEditable) return
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(e.key) && rafId) {
        cancelAnimationFrame(rafId)
        rafId = 0
        lastTime = 0
        currentY = targetY = lastWrittenY = window.scrollY || 0
      }
    }

    const onTouchStart = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = 0
        lastTime = 0
      }
      currentY = targetY = lastWrittenY = window.scrollY || 0
    }

    const onResize = () => {
      const maxY = getMaxScroll()
      if (targetY > maxY) targetY = maxY
      if (currentY > maxY) currentY = maxY
    }

    document.documentElement.style.scrollBehavior = "auto"
    win.__epSmoothActive = true
    win.__epScrollTo = (target, offset = 0) => {
      const rawY = typeof target === "number" ? target : target.getBoundingClientRect().top + (window.scrollY || 0) + offset
      currentY = window.scrollY || 0
      targetY = Math.max(0, Math.min(getMaxScroll(), rawY))
      activeLambda = 7.4
      startLoop()
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("scroll", onNativeScroll, { passive: true })
    window.addEventListener("keydown", onKeyDown, { passive: true })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("scroll", onNativeScroll)
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("resize", onResize)
      document.documentElement.style.removeProperty("scroll-behavior")
      delete win.__epSmoothActive
      delete win.__epScrollTo
    }
  }, [intensity])

  return null
}
