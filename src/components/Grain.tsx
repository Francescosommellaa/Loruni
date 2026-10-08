import type { CSSProperties } from 'react'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import './Grain.css'

export type GrainProps = { opacity?: number; className?: string; style?: CSSProperties }

/** Internal texture intensity. The consumer owns layer opacity, mask and stacking. */
export function Grain({ opacity = 0.5, className, style }: GrainProps) {
  const reduced = useReducedMotionPreference()
  return <div className={['loruni-grain', className].filter(Boolean).join(' ')} aria-hidden="true" data-reduced={reduced} style={{ ...style, pointerEvents: 'none' }}>
    <div className="loruni-grain-texture" style={{ opacity }} />
  </div>
}
