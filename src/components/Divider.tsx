import type { CSSProperties } from 'react'
import './Divider.css'

export type DividerProps = {
  width?: 80 | 82
  color: string
  className?: string
  style?: CSSProperties
}

export function Divider({ width = 80, color, className, style }: DividerProps) {
  return <div aria-hidden="true" className={['loruni-divider', className].filter(Boolean).join(' ')}
    style={{ width: `var(--source-width-value${width}px)`, backgroundColor: color, ...style }} />
}
