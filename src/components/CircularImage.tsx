import type { CSSProperties } from 'react'
import './CircularImage.css'

export type CircularImageProps = {
  src: string
  alt?: string
  size?: 56 | 64
  className?: string
  style?: CSSProperties
}

export function CircularImage({ src, alt = '', size = 64, className, style }: CircularImageProps) {
  return <img src={src} alt={alt} className={['loruni-circular-image', className].filter(Boolean).join(' ')}
    style={{ width: `var(--source-width-value${size}px)`, height: `var(--source-height-value${size}px)`, ...style }} />
}
