import { useLayoutEffect, useRef, type CSSProperties } from 'react'
import { ImageFill, type ImageFillImage } from './ImageFill'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { registerImageParallax } from '../motion/imageParallax'
import { controlDefaults } from '../styles/token'
import './ImageParallax.css'

type Border = Pick<CSSProperties, 'border' | 'borderWidth' | 'borderColor' | 'borderStyle' | 'borderTopWidth' | 'borderRightWidth' | 'borderBottomWidth' | 'borderLeftWidth'>
export type ImageParallaxProps = {
  image?: ImageFillImage
  alt?: string
  parallaxY?: number
  parallaxX?: number
  border?: CSSProperties['border'] | Border | null
  radius?: CSSProperties['borderRadius']
  shadow?: CSSProperties['boxShadow'] | readonly string[]
  className?: string
  style?: CSSProperties
}
function amount(value: number) { return Number.isFinite(value) ? Math.max(-100, Math.min(100, value)) : 0 }

/** A fill media primitive: the parent owns frame geometry, breakpoint and CMS resolution. */
export function ImageParallax({ image, alt, parallaxY = Number(controlDefaults.imageParallax.parallaxY.value), parallaxX = Number(controlDefaults.imageParallax.parallaxX.value), border, radius = 0, shadow, className, style }: ImageParallaxProps) {
  const frame = useRef<HTMLDivElement>(null)
  const media = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotionPreference()
  const x = amount(parallaxX)
  const y = amount(parallaxY)
  const hasImage = Boolean(typeof image === 'string' ? image : image?.src)
  useLayoutEffect(() => {
    if (!frame.current || !media.current || reduced || !hasImage || (x === 0 && y === 0)) return
    return registerImageParallax(frame.current, media.current, x, y)
  }, [x, y, reduced, hasImage])
  const borderStyle = typeof border === 'string' || typeof border === 'number' ? { border } : border ?? undefined
  const boxShadow = Array.isArray(shadow) ? shadow.join(', ') || undefined : shadow as CSSProperties['boxShadow']
  return <div ref={frame} className={['loruni-image-parallax', className].filter(Boolean).join(' ')} data-reduced-motion={reduced} style={{ ...style, borderRadius: radius, boxShadow }}>
    <div ref={media} className="loruni-image-parallax__media" style={{ left: `${-Math.abs(x) / 2}%`, top: `${-Math.abs(y) / 2}%`, width: `${100 + Math.abs(x)}%`, height: `${100 + Math.abs(y)}%`, willChange: !reduced && hasImage && (x !== 0 || y !== 0) ? 'transform' : undefined }}>
      <ImageFill image={image} alt={alt} />
    </div>
    {hasImage && <div className="loruni-image-parallax__border" aria-hidden="true" style={borderStyle} />}
  </div>
}
