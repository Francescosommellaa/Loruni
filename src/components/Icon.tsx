import { useId, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m, useReducedMotion } from 'motion/react'
import { motion as motionTokens } from '../styles/token'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { iconRegistry, type IconName } from './Icon.registry'
import './Icon.css'

export type { IconName } from './Icon.registry'

type Integration = {
  visible?: boolean
  className?: string
  style?: CSSProperties
  /** Omit for decoration; supply only when the glyph conveys independent content. */
  label?: string
}
type ButtonArrowName = 'button-arrow' | 'button-arrow-secondary' | 'button-arrow-mobile'
type FillName = { [K in IconName]: typeof iconRegistry[K]['kind'] extends 'mask' | 'remoteMask' ? K : never }[IconName]
export type IconProps = Integration & (
  | { name: 'arrow-forward'; size?: 28 | 40; rotation?: -45 | 0 }
  | { name: 'faq'; barRotation?: 0 | 90 }
  | { name: ButtonArrowName; hovered?: boolean }
  | { name: FillName; width?: number; height?: number; fill?: string }
  | { name: Exclude<IconName, 'arrow-forward' | 'faq' | ButtonArrowName | FillName>; width?: number; height?: number }
)

const rotationSource = motionTokens.transitions.projectCardMainPageDesktopTransition.config
const arrowTransition = { type: rotationSource.type, duration: parseFloat(rotationSource.duration), delay: parseFloat(rotationSource.delay), ease: [...rotationSource.ease] as [number, number, number, number] }
const buttonSource = motionTokens.transitions.buttonPrimaryTransition.config
const buttonTransition = { type: buttonSource.type, duration: parseFloat(buttonSource.duration), delay: parseFloat(buttonSource.delay), ease: [...buttonSource.ease] as [number, number, number, number] }
const spinnerSource = motionTokens.transitions.mainFormButtonDefaultSpinnerConicLoopEffectTransition.config
const spinnerEnterSource = motionTokens.transitions.loadMoreDefaultSpinnerAppearEffectEnterTransition.config
const spinnerEnterTransition = { type: spinnerEnterSource.type, duration: parseFloat(spinnerEnterSource.duration), delay: parseFloat(spinnerEnterSource.delay), ease: [...spinnerEnterSource.ease] as [number, number, number, number] }

type MaskGlyph = { viewBox: string; path: string; transform: string; pathWidth: string; pathHeight: string }
function maskFor(glyph: MaskGlyph) {
  // Alpha masks retain the original SVG geometry; the container owns the visible fill.
  const svg = `<svg display="block" role="presentation" viewBox="${glyph.viewBox}" xmlns="http://www.w3.org/2000/svg"><path d="${glyph.path}" fill="rgb(0,0,0)" height="${glyph.pathHeight}" transform="${glyph.transform}" width="${glyph.pathWidth}"/></svg>`
  return `url('data:image/svg+xml,${svg}') alpha no-repeat center / auto`
}

function Spinner({ name, className, style, label }: Integration & { name: 'form-spinner' | 'load-more-spinner' }) {
  const reduced = useReducedMotion()
  const form = name === 'form-spinner'
  const spinnerMask = `url('${iconRegistry[name].url}') alpha no-repeat center / cover add`
  return (
    <LazyMotion features={domAnimation} strict>
      <m.span className={className} data-icon={name} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
        initial={form || reduced ? false : { opacity: 0.001 }} animate={{ opacity: 1 }}
        transition={spinnerEnterTransition}
        style={{ ...style, mask: spinnerMask, WebkitMask: spinnerMask, overflow: form ? 'hidden' : 'visible' }}>
        <m.span className="loruni-icon__conic" initial={{ rotate: 0 }} animate={{ rotate: reduced ? 0 : 360 }}
          transition={{ type: spinnerSource.type, duration: reduced ? 0 : parseFloat(spinnerSource.duration), delay: parseFloat(spinnerSource.delay), ease: [...spinnerSource.ease], repeat: reduced ? 0 : Infinity, repeatType: 'loop', repeatDelay: 0 }}
          style={{ background: form ? 'var(--source-fill-main-form-button-default-spinner-conic)' : 'var(--source-fill-load-more-default-spinner-conic)', mask: form ? spinnerMask : undefined, WebkitMask: form ? spinnerMask : undefined, overflow: form ? 'hidden' : 'visible' }}>
          <span className={form ? 'loruni-icon__round loruni-icon__round--form' : 'loruni-icon__round'} />
        </m.span>
      </m.span>
    </LazyMotion>
  )
}

export function Icon(props: IconProps) {
  const maskId = `loruni-icon-mask-${useId()}`
  const reduced = useReducedMotionPreference()
  if (props.visible === false) return null
  const glyph = iconRegistry[props.name]
  const width = 'size' in props ? props.size ?? glyph.width : 'width' in props ? props.width ?? glyph.width : glyph.width
  const height = 'size' in props ? props.size ?? glyph.height : 'height' in props ? props.height ?? glyph.height : glyph.height
  const className = ['loruni-icon', props.className].filter(Boolean).join(' ')
  const accessibility = { role: props.label ? 'img' as const : undefined, 'aria-label': props.label, 'aria-hidden': props.label ? undefined : true as const }
  // Framer's Quote module discards height props and uses its intrinsic aspect ratio.
  // Canvas instance rectangles such as 55×52.5 are consumer frames, not glyph bounds.
  const style = { width, height: props.name === 'quote' && !('height' in props) ? 'auto' : height, ...(props.name === 'quote' ? { aspectRatio: 1.125 } : {}), ...props.style }
  const fill = 'fill' in props ? props.fill : undefined

  if (glyph.kind === 'image') return <img className={className} data-icon={props.name} src={glyph.url} width={width} height={height} alt={props.label ?? ''} aria-hidden={props.label ? undefined : true} style={{ ...('filter' in glyph ? { filter: glyph.filter } : {}), ...('objectFit' in glyph ? { objectFit: glyph.objectFit } : {}), ...style }} />
  if (glyph.kind === 'spinner') return <Spinner name={props.name as 'form-spinner' | 'load-more-spinner'} className={className} style={style} label={props.label} />
  if (glyph.kind === 'mask' || glyph.kind === 'remoteMask') {
    const mask = glyph.kind === 'mask' ? maskFor(glyph) : `url('${glyph.url}') alpha no-repeat center / contain`
    return <span className={className} data-icon={props.name} {...accessibility} style={{ ...style, ...(glyph.kind === 'remoteMask' ? { overflow: 'clip' } : {}), backgroundColor: fill ?? glyph.fill, mask, WebkitMask: mask }} />
  }
  if (glyph.kind === 'faq') {
    const bar = <svg viewBox="0 0 17 1.5" width="100%" height="100%" overflow="visible" preserveAspectRatio="none"><path d={glyph.path} fill="var(--faq-foreground, var(--color-neutral-950))" /></svg>
    return <span className={`${className} loruni-icon--faq`} data-icon={props.name} {...accessibility} style={style}>
      <LazyMotion features={domAnimation} strict>
        <m.span className="loruni-icon__bar loruni-icon__bar--growing" initial={false}
          animate={{ scaleY: props.name === 'faq' && props.barRotation === 90 ? 0 : 1 }}
          transition={{ duration: reduced ? 0 : 0.32, ease: [0.4, 0, 0.2, 1] }}><span className="loruni-icon__vertical-glyph">{bar}</span></m.span>
        <span className="loruni-icon__bar loruni-icon__bar--fixed">{bar}</span>
      </LazyMotion>
    </span>
  }
  if (glyph.kind === 'buttonArrow') {
    const rotate = props.name === 'button-arrow-mobile' ? 0 : 'hovered' in props && props.hovered ? props.name === 'button-arrow-secondary' ? 45 : 135 : 0
    return <span className={className} data-icon={props.name} {...accessibility} style={style}>
      <LazyMotion features={domAnimation} strict><m.span className="loruni-icon__button-arrow" initial={false} animate={{ rotate }} transition={buttonTransition} style={{ width: glyph.glyphSize, height: glyph.glyphSize, left: props.name === 'button-arrow-secondary' ? 0 : 1, top: props.name === 'button-arrow-secondary' ? 0 : 1 }}>
        <svg viewBox={glyph.viewBox} overflow="visible" preserveAspectRatio="none" width="100%" height="100%"><g><path d={glyph.path} fill={glyph.fill} /></g></svg>
      </m.span></LazyMotion>
    </span>
  }
  return <LazyMotion features={domAnimation} strict><m.div className={`${className} loruni-icon--arrow-forward`} data-icon={props.name} {...accessibility} initial={false} animate={{ rotate: props.name === 'arrow-forward' ? props.rotation ?? -45 : -45 }} transition={arrowTransition} style={style}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <mask id={maskId} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><rect width="40" height="40" fill="#D9D9D9" /></mask>
      <g mask={`url(#${maskId})`}><path d={glyph.path} fill={glyph.fill} /></g>
    </svg>
  </m.div></LazyMotion>
}
