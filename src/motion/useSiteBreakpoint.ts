import { useSyncExternalStore } from 'react'

export type SiteBreakpoint = 'desktop' | 'tablet' | 'phone'
const phone = '(max-width: 809.98px)'
const desktop = '(min-width: 1200px)'
function subscribe(listener: () => void) {
  const queries = [window.matchMedia(phone), window.matchMedia(desktop)]
  queries.forEach(query => query.addEventListener('change', listener))
  return () => queries.forEach(query => query.removeEventListener('change', listener))
}
function snapshot(): SiteBreakpoint { return window.matchMedia(phone).matches ? 'phone' : window.matchMedia(desktop).matches ? 'desktop' : 'tablet' }
export function useSiteBreakpoint() { return useSyncExternalStore(subscribe, snapshot, () => 'desktop' as const) }
