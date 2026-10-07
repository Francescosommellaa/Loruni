import type { CSSProperties } from 'react'
import './ImageFill.css'

export type ImageFillImage = string | { src: string; srcSet?: string; sizes?: string; alt?: string; positionX?: string; positionY?: string; width?: number; height?: number; loading?: 'lazy' | 'eager' }
export type ImageFillProps = { image?: ImageFillImage; alt?: string; fit?: 'cover' | 'contain'; clip?: boolean; hidden?: boolean; className?: string; style?: CSSProperties }
// The parent owns frame dimensions, breakpoint visibility and hero positioning.
export function ImageFill({ image, alt, fit = 'cover', clip = false, hidden, className, style }: ImageFillProps) {
  const media = typeof image === 'string' ? { src: image } : image
  const { positionX, positionY, ...attributes } = media ?? {}
  return <div className={['loruni-image-fill', className].filter(Boolean).join(' ')} data-clip={clip} hidden={hidden} style={style}>
    {media?.src && <img {...attributes} alt={alt ?? media.alt ?? ''} decoding="async" style={{ objectFit: fit, objectPosition: positionX && positionY ? `${positionX} ${positionY}` : undefined }} />}
  </div>
}
