import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// One integration boundary and scheduler, including horizontally moving parents.
gsap.registerPlugin(ScrollTrigger)

type Entry = {
  frame: HTMLElement
  media: HTMLElement
  x: number
  y: number
  width: number
  height: number
  lastX: number
  lastY: number
}
const entries = new Set<Entry>()
let observer: ResizeObserver | undefined
let scroll: ScrollTrigger | undefined
let dirty = true
let dimensionsDirty = true
let rangeDirty = false

function invalidate() { dirty = true; dimensionsDirty = true }
function layoutChanged() { invalidate(); rangeDirty = true }
function sample() {
  // A changed document/frame can extend the native scroll range beyond the
  // previous trigger end. Refresh it once on this shared scheduler, outside RO.
  if (rangeDirty) {
    rangeDirty = false
    scroll?.refresh()
  }
  if (!dirty && ![...entries].some(entry => entry.x !== 0)) return
  const vw = window.innerWidth
  const vh = window.innerHeight
  // Read every frame before any transform write; never read the animated media.
  const updates = [...entries].map(entry => {
    if (dimensionsDirty) {
      entry.width = entry.frame.offsetWidth
      entry.height = entry.frame.offsetHeight
    }
    const rect = entry.frame.getBoundingClientRect()
    const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + entry.height)))
    const xTravel = Math.abs(entry.x) * entry.width / 200
    const x = ((rect.left + rect.width / 2 - vw / 2) / vw) * entry.x * entry.width / 100
    // Preserve Framer's unbounded X while an entering/exiting negative-X image
    // still covers the visible crop. Limit only offsets that expose a visible edge.
    const visible = rect.width > 0 && rect.right > 0 && rect.left < vw
    const localScale = rect.width > 0 ? entry.width / rect.width : 1
    const minimumX = (Math.min(rect.right, vw) - rect.right) * localScale - xTravel
    const maximumX = (Math.max(rect.left, 0) - rect.left) * localScale + xTravel
    return { entry, x: visible ? Math.max(minimumX, Math.min(maximumX, x)) : x, y: (progress - 0.5) * entry.y * entry.height / 100 }
  })
  dirty = false
  dimensionsDirty = false
  for (const { entry, x, y } of updates) {
    if (x === entry.lastX && y === entry.lastY) continue
    entry.media.style.transform = `translate3d(${x}px, ${y}px, 0)`
    entry.lastX = x
    entry.lastY = y
  }
}

/** The caller acquires only its own registration; cleanup cannot kill another scene. */
export function registerImageParallax(frame: HTMLElement, media: HTMLElement, x: number, y: number) {
  const entry: Entry = { frame, media, x, y, width: 0, height: 0, lastX: NaN, lastY: NaN }
  entries.add(entry)
  if (entries.size === 1) {
    observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(layoutChanged)
    // Layout/media changes above a frame also invalidate its viewport geometry.
    observer?.observe(document.body)
    scroll = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: () => { dirty = true }, onRefresh: invalidate })
    ScrollTrigger.addEventListener('refresh', invalidate)
    gsap.ticker.add(sample)
  }
  observer?.observe(frame)
  invalidate()
  sample()
  return () => {
    observer?.unobserve(frame)
    entries.delete(entry)
    media.style.transform = 'translate3d(0, 0, 0)'
    if (entries.size === 0) {
      gsap.ticker.remove(sample)
      ScrollTrigger.removeEventListener('refresh', invalidate)
      scroll?.kill()
      scroll = undefined
      observer?.disconnect()
      observer = undefined
      rangeDirty = false
    }
  }
}
