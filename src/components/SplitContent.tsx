import type { CSSProperties } from 'react'
import { typography } from '../styles/token'
import './SplitContent.css'

export type SplitContentProps = { title: string; text: string; titleMaxWidth?: 480 | 640; className?: string; style?: CSSProperties }
export function SplitContent({ title, text, titleMaxWidth = 480, className, style }: SplitContentProps) {
  return <div className={['loruni-split-content', className].filter(Boolean).join(' ')} style={style}>
    <div className="loruni-split-content__headline"><h2 className={typography.headline76.className} style={{ maxWidth: `var(--source-max-width-value${titleMaxWidth}px)` }}>{title}</h2></div>
    <div className="loruni-split-content__text"><p className={typography.text32P.className}>{text}</p></div>
  </div>
}
