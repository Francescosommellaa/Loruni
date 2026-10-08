import { useState, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m, type Transition } from 'motion/react'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import './RollingText.css'

export type RollingTextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize'
export type RollingTextProps = {
  text: string
  font?: Pick<CSSProperties, 'fontFamily' | 'fontWeight' | 'fontStyle' | 'fontSize' | 'lineHeight' | 'letterSpacing' | 'textAlign' | 'fontVariationSettings' | 'fontFeatureSettings'>
  color?: string
  transition?: Transition
  stagger?: number
  padding?: CSSProperties['padding']
  reverse?: boolean
  transform?: RollingTextTransform
  /** Compatibility with the original React port; new consumers use transform. */
  textTransform?: RollingTextTransform
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  style?: CSSProperties
}

// Independent port of the observed glyph/shadow behavior, not the external module.
export function RollingText({ text, font = { fontFamily: 'var(--font-funnel-sans)', fontWeight: 400, fontSize: '16px', fontStyle: 'normal', letterSpacing: '0px', lineHeight: 1.2 }, color = '#808080', transition = { type: 'spring', duration: 0.4, bounce: 0 }, stagger = 35, padding = '0px', reverse = false, transform, textTransform = 'none', tag: Tag = 'p', className, style }: RollingTextProps) {
  const reduced = useReducedMotionPreference()
  const [hovered, setHovered] = useState(false)
  const fontSize = String(font?.fontSize ?? '16px')
  const fontSizeNumber = parseInt(fontSize, 10) || 16
  const lineHeight = font?.lineHeight
  // Preserve the source's integer font-size parsing and unit handling.
  const offset = typeof lineHeight === 'number' ? `${fontSizeNumber * lineHeight}px`
    : typeof lineHeight === 'string' && lineHeight.includes('em') ? `${fontSizeNumber * (parseFloat(lineHeight) || 1.2)}px`
    : typeof lineHeight === 'string' ? Number.isNaN(parseFloat(lineHeight)) ? lineHeight : `${parseFloat(lineHeight)}px`
    : `${fontSizeNumber * 1.2}px`
  const duration = typeof transition.duration === 'number' ? transition.duration : 0.5
  return <div className={['loruni-rolling-text', className].filter(Boolean).join(' ')} style={{ padding, ...style }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <Tag className="loruni-rolling-text__text" style={{ fontFamily: font?.fontFamily ?? 'var(--font-funnel-sans)', fontSize, textTransform: transform ?? textTransform, textShadow: `0 ${offset} 0 ${color}` }}>
      <LazyMotion features={domAnimation} strict>
        {[...text].map((character, index) => <m.span key={index} initial={false} animate={{ y: hovered && !reduced ? `-${offset}` : '0%' }}
          transition={reduced ? { duration: 0, delay: 0 } : { ...transition, delay: text.length > 0 ? duration / text.length * (reverse ? text.length - 1 - index : index) * (stagger / 100) : 0 }}
          style={{ lineHeight: lineHeight ?? 1.2, color, ...font }}>{character === ' ' ? '\u00a0' : character}</m.span>)}
      </LazyMotion>
    </Tag>
  </div>
}
