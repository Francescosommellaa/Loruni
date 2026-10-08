import type { CSSProperties } from 'react'
import './StatRow.css'

export type StatRowProps = { number: string; text: string; caption?: 'compact' | 'display'; className?: string; style?: CSSProperties }
export function StatRow({ number, text, caption = 'display', className, style }: StatRowProps) {
  return <div className={['loruni-stat-row', className].filter(Boolean).join(' ')} data-caption={caption} style={style}>
    <p className="loruni-stat-row__number">{number}</p>
    <p className="loruni-stat-row__text">{text}</p>
  </div>
}
