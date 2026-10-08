import { Fragment, useRef, type CSSProperties } from 'react'
import { colors, motion, primitive, typography } from '../styles/token'
import { Divider } from './Divider'
import { useLineReveal } from '../motion/useLineReveal'
import './ProcessRow.css'

type Padding = NonNullable<CSSProperties['padding']>
export type ProcessRowPadding = Padding | { phone: Padding; tablet?: Padding; desktop?: Padding }
export type ProcessRowProps = {
  title: string
  text?: string
  number: string
  padding?: ProcessRowPadding
  className?: string
  style?: CSSProperties
}

const sourceTransition = motion.transitions.processRowDesktopContentDiscoveryTextEffectStyleTransition.config
const titleReveal = {
  // The native text runtime clamps the source opacity0 to0.001.
  opacity: 0.001,
  y: Number.parseFloat(primitive.effectY.value40px.value),
  delay: Number.parseFloat(primitive.motionDelay.value0Point1s.value),
  duration: Number.parseFloat(sourceTransition.duration),
  bounce: sourceTransition.bounce,
  lineDelay: Number.parseFloat(sourceTransition.delay),
}
const graphemes = new Intl.Segmenter('it', { granularity: 'grapheme' })

function ProcessTitle({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null)
  useLineReveal(ref, title, titleReveal)
  const words = title.split(' ')
  return <h2 ref={ref} className={`loruni-process-row__title ${typography.headline108.className}`} aria-label={title} dir="auto">
    {words.map((word, index) => <Fragment key={index}>
      <span aria-hidden="true" style={{ whiteSpace: word.length <= 12 ? 'nowrap' : 'unset' }}>
        {Array.from(graphemes.segment(word), ({ segment }, glyph) => <span key={glyph} data-reveal-glyph>{segment}</span>)}
      </span>{index < words.length - 1 ? ' ' : null}
    </Fragment>)}
  </h2>
}

/** One source variant; the consumer supplies its padding at each page breakpoint. */
export function ProcessRow({ title, text, number, padding = '0px', className, style }: ProcessRowProps) {
  const values = typeof padding === 'object' ? padding : { phone: padding }
  const paddingValue = (value: Padding) => typeof value === 'number' ? `${value}px` : value
  const rowStyle = {
    '--process-row-padding-phone': paddingValue(values.phone),
    '--process-row-padding-tablet': paddingValue(values.tablet ?? values.phone),
    '--process-row-padding-desktop': paddingValue(values.desktop ?? values.tablet ?? values.phone),
    ...style,
  } as CSSProperties
  return <div className={className ? `loruni-process-row ${className}` : 'loruni-process-row'} style={rowStyle}>
    <div className="loruni-process-row__content">
      <ProcessTitle key={title} title={title} />
      <Divider className="loruni-process-row__divider" color={`var(${colors.brandAccent.cssVariable})`} />
      {text !== undefined && text !== '' && <p className={`loruni-process-row__text ${typography.text32P.className}`} dir="auto">{text}</p>}
    </div>
    <h3 className={`loruni-process-row__number ${typography.headline32.className}`} dir="auto">{number}</h3>
  </div>
}
