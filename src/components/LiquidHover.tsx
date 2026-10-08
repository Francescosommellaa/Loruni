import { useEffect, useRef, type CSSProperties } from 'react'
import { ImageFill, type ImageFillImage } from './ImageFill'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { createLiquidSurface } from '../motion/liquidSurface'
import './LiquidHover.css'

export type LiquidHoverProps = {
  image?: ImageFillImage; alt?: string; resolution?: number; cursorSize?: number;
  cursorPower?: number; distortionPower?: number; touch?: boolean; className?: string; style?: CSSProperties
}

export function LiquidHover({ image, alt, resolution = 4, cursorSize = .5, cursorPower = .6, distortionPower = .5, touch = true, className, style }: LiquidHoverProps) {
  const root = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotionPreference()
  const src = typeof image === 'string' ? image : image?.src
  const srcSet = typeof image === 'object' ? image.srcSet : undefined
  const sizes = typeof image === 'object' ? image.sizes : undefined
  useEffect(() => {
    const frame = root.current
    const canvas = frame?.querySelector('canvas')
    const media = frame?.querySelector('img')
    if (!frame || !canvas || !media || reduced) return
    return createLiquidSurface(frame, canvas, media, { resolution, cursorSize, cursorPower, distortionPower, touch })
  }, [src, srcSet, sizes, reduced, resolution, cursorSize, cursorPower, distortionPower, touch])
  return <div ref={root} className={['loruni-liquid-hover', className].filter(Boolean).join(' ')} style={style} data-reduced={reduced}>
    <ImageFill image={image} alt={alt} />
    {src && !reduced && <canvas aria-hidden="true" />}
  </div>
}
