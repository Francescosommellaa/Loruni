import { useContext, useSyncExternalStore } from 'react'
import { MotionConfigContext } from 'motion/react'

const reducedQuery = '(prefers-reduced-motion: reduce)'
function subscribeReducedMotion(listener: () => void) {
  const query = window.matchMedia(reducedQuery)
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
function reducedSnapshot() { return window.matchMedia(reducedQuery).matches }
function serverSnapshot() { return true }

/** Live OS preference and the existing root's user/always/never policy. */
export function useReducedMotionPreference() {
  const userReduced = useSyncExternalStore(subscribeReducedMotion, reducedSnapshot, serverSnapshot)
  const { reducedMotion } = useContext(MotionConfigContext)
  return reducedMotion === 'always' || (reducedMotion !== 'never' && userReduced)
}
