import { useEffectEvent, useLayoutEffect, type RefObject } from 'react'
import { flushSync } from 'react-dom'

type Subscription = { run: () => void; width: number; height: number; watchHeight: boolean }
const subscriptions = new Map<Element, Set<Subscription>>()
const pending = new Set<() => void>()
let observer: ResizeObserver | undefined
let fontGeneration = 0
let scheduled = false

function enqueue(run: () => void) {
  pending.add(run)
  if (scheduled) return
  scheduled = true
  queueMicrotask(() => {
    scheduled = false
    const jobs = [...pending]
    pending.clear()
    // Resize/font callbacks run outside React's layout phase: commit the batch before paint.
    flushSync(() => jobs.forEach(job => job()))
  })
}
function invalidate() {
  subscriptions.forEach(group => group.forEach(item => enqueue(item.run)))
}
function connect() {
  const generation = ++fontGeneration
  if (typeof ResizeObserver !== 'undefined') observer = new ResizeObserver(entries => {
    entries.forEach(({ target, contentRect }) => subscriptions.get(target)?.forEach(item => {
      if (item.width === contentRect.width && (!item.watchHeight || item.height === contentRect.height)) return
      item.width = contentRect.width
      item.height = contentRect.height
      enqueue(item.run)
    }))
  })
  window.addEventListener('resize', invalidate)
  document.fonts?.addEventListener('loadingdone', invalidate)
  document.fonts?.addEventListener('loadingerror', invalidate)
  void document.fonts?.ready.then(() => { if (generation === fontGeneration) invalidate() })
}
function observe(element: Element, run: () => void, watchHeight: boolean) {
  if (subscriptions.size === 0) connect()
  let group = subscriptions.get(element)
  if (!group) {
    group = new Set()
    subscriptions.set(element, group)
    observer?.observe(element)
  }
  const item: Subscription = { run, watchHeight, width: -1, height: -1 }
  group.add(item)
  return () => {
    group.delete(item)
    pending.delete(run)
    if (group.size === 0) { subscriptions.delete(element); observer?.unobserve(element) }
    if (subscriptions.size === 0) {
      observer?.disconnect()
      observer = undefined
      fontGeneration++
      window.removeEventListener('resize', invalidate)
      document.fonts?.removeEventListener('loadingdone', invalidate)
      document.fonts?.removeEventListener('loadingerror', invalidate)
    }
  }
}

/** Initial layout measurement plus shared width/font invalidation, never a frame loop. */
export function useTextMeasurement(root: RefObject<HTMLElement | null>, measure: () => void, signature: string, clone?: RefObject<HTMLElement | null>) {
  const callback = useEffectEvent(measure)
  useLayoutEffect(() => {
    let active = true
    const run = () => { if (active) callback() }
    run()
    const disposeRoot = root.current ? observe(root.current, run, false) : undefined
    const disposeClone = clone?.current ? observe(clone.current, run, true) : undefined
    return () => { active = false; disposeRoot?.(); disposeClone?.() }
  }, [root, clone, signature])
}
