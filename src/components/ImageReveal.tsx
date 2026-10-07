import { useEffect, useRef, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m, useAnimationControls, useInView } from 'motion/react'
import { motion as motionTokens, primitive, controlDefaults } from '../styles/token'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { ImageFill, type ImageFillImage } from './ImageFill'
import './ImageReveal.css'

export type ImageRevealProps = {
  image?: ImageFillImage
  backgroundColor?: CSSProperties['backgroundColor']
  /** Container integration; visibility and mount identity belong to the parent. */
  className?: string
  style?: CSSProperties
}

// Exact configuration shared by the source utility and its Section consumer.
const source = motionTokens.transitions.testimonialsSectionDesktop1Transition.config
const revealTransition = {
  type: source.type,
  duration: Number.parseFloat(source.duration),
  ease: [...source.ease] as [number, number, number, number],
  delay: Number.parseFloat(primitive.motionDelay.value0Point6s.value),
}
const uncovered = { left: '-1px', width: '1px' }

/** Source onAppear waits for the first viewport appearance of this mount.
 * Changing the image on a retained instance preserves the reveal state; remount
 * (e.g. the Section's keyed slide) starts a new appearance. */
export function ImageReveal({ image,
  backgroundColor = controlDefaults.testimonialsImageReveal.backgroundColor.value,
  className, style }: ImageRevealProps) {
  const reduced = useReducedMotionPreference()
  const root = useRef<HTMLDivElement>(null)
  const canObserve = typeof window !== 'undefined' && 'IntersectionObserver' in window
  const appeared = useInView(root, { once: true, amount: 'some' })
  const controls = useAnimationControls()
  useEffect(() => {
    if (!appeared && !reduced && canObserve) return
    void controls.start({ ...uncovered, transition: reduced || !canObserve ? { duration: 0, delay: 0 } : revealTransition })
    return () => controls.stop()
  }, [appeared, canObserve, controls, reduced])
  return <LazyMotion features={domAnimation} strict>
    <div ref={canObserve ? root : undefined} className={['loruni-image-reveal', className].filter(Boolean).join(' ')} style={style}>
      <ImageFill image={image} />
      <m.div className="loruni-image-reveal__cover" aria-hidden="true"
        style={{ backgroundColor }}
        initial={reduced || !canObserve ? uncovered : { left: '0px', width: '100%' }}
        animate={controls} />
    </div>
  </LazyMotion>
}
