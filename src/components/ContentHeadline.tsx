import type { CSSProperties } from 'react'
import { typography } from '../styles/token'
import { Label } from './Label'
import './ContentHeadline.css'

export type ContentHeadlineProps = {
  title: string
  variant: 'labelled' | 'centered-large' | 'centered' | 'contact'
  label?: string
  color?: string
  labelColor?: string
  className?: string
  style?: CSSProperties
}
export function ContentHeadline({ title, variant, label, color, labelColor = 'var(--color-neutral-950)', className, style }: ContentHeadlineProps) {
  const titleColor = color ?? (variant === 'contact' ? 'var(--color-neutral-950)' : undefined)
  const Tag = variant === 'centered-large' ? 'h1' : 'h2'
  const preset = variant === 'centered' ? typography.headline108 : typography.headline180
  return <div className={['loruni-content-headline', className].filter(Boolean).join(' ')} data-variant={variant} style={style}>
    {variant === 'labelled' && <div className="loruni-content-headline__label"><Label title={label} color={labelColor} /></div>}
    <Tag className={preset.className} style={{ color: titleColor }}>{title}</Tag>
  </div>
}
