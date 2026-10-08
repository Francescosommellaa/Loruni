import { useLayoutEffect, type RefObject } from 'react'
import { animate } from 'motion/react'
import { useReducedMotionPreference } from './useReducedMotionPreference'

export type LineReveal = {
  opacity: number
  y: number
  delay: number
  duration: number
  bounce: number
  lineDelay: number
}

/** Glyph markup retains native wrapping; only glyphs on the same rendered line share a delay. */
export function useLineReveal(ref: RefObject<HTMLElement | null>, text: string, effect: LineReveal) {
  const reduced = useReducedMotionPreference()

  useLayoutEffect(() => {
    const heading = ref.current
    if (!heading) return
    const glyphs = Array.from(heading.querySelectorAll<HTMLElement>('[data-reveal-glyph]'))
    const show = () => {
      for (const glyph of glyphs) { glyph.style.opacity = '1'; glyph.style.transform = 'none' }
    }
    // Plain markup is readable before enhancement and when IntersectionObserver is unavailable.
    if (reduced || !('IntersectionObserver' in window) || heading.dataset.revealComplete === 'true') {
      show()
      return
    }
    for (const glyph of glyphs) {
      glyph.style.opacity = String(effect.opacity)
      glyph.style.transform = `translateY(${effect.y}px)`
    }
    let disposed = false
    const animations: ReturnType<typeof animate>[] = []
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer.disconnect()
      void (document.fonts?.ready ?? Promise.resolve()).then(() => {
        if (disposed) return
        // Completion belongs to this title. Resize/re-entry must not restart its reveal.
        heading.dataset.revealComplete = 'true'
        const lines = new Map<number, HTMLElement[]>()
        for (const glyph of glyphs) {
          const line = lines.get(glyph.offsetTop) ?? []
          line.push(glyph)
          lines.set(glyph.offsetTop, line)
        }
        let lineIndex = 0
        for (const line of lines.values()) {
          animations.push(animate(line, { opacity: [effect.opacity, 1], y: [effect.y, 0] }, {
            type: 'spring', duration: effect.duration, bounce: effect.bounce, restDelta: 0.001,
            delay: effect.delay + lineIndex++ * effect.lineDelay,
          }))
        }
      }).catch(show)
    }, { threshold: 0 })
    observer.observe(heading)
    return () => {
      disposed = true
      observer.disconnect()
      for (const animation of animations) animation.stop()
      show()
    }
  }, [ref, text, effect, reduced])
}
