import { useState, useSyncExternalStore, type CSSProperties } from 'react'
import { domMax, LazyMotion, m } from 'motion/react'
import { motion as motionTokens, primitive } from '../styles/token'
import { TestimonialsArrow } from './TestimonialsArrow'
import { Icon } from './Icon'
import { ImageReveal } from './ImageReveal'
import { Divider } from './Divider'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { WordOpacityReveal } from '../motion/WordOpacityReveal'
import './TestimonialsSection.css'

import { type Testimonials, type TestimonialIndex } from './TestimonialsSection.data'
export type { Testimonial, TestimonialImage, Testimonials, TestimonialIndex } from './TestimonialsSection.data'

export type TestimonialsSectionProps = {
  items: Testimonials
  initialIndex?: TestimonialIndex
  className?: string
  style?: CSSProperties
  id?: string
  'aria-label'?: string
}

const sourceTransition = motionTokens.transitions.testimonialsSectionDesktop1Transition.config
const transition = {
  type: sourceTransition.type,
  duration: Number.parseFloat(sourceTransition.duration),
  delay: Number.parseFloat(sourceTransition.delay),
  ease: [...sourceTransition.ease] as [number, number, number, number],
}
const bodyDelay = Number.parseFloat(primitive.motionDelay.value0Point2s.value)
const desktopQuery = '(min-width: 810px)'
function subscribeViewport(listener: () => void) {
  const query = window.matchMedia(desktopQuery)
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
function desktopSnapshot() { return window.matchMedia(desktopQuery).matches }
function serverSnapshot() { return true }

function wrap(index: number, count: number) {
  return count > 0 ? ((Number.isFinite(index) ? Math.trunc(index) : 0) % count + count) % count : 0
}

export function TestimonialsSection({ items, initialIndex = 0, className, style, id, 'aria-label': label = 'Testimonianze' }: TestimonialsSectionProps) {
  const desktop = useSyncExternalStore(subscribeViewport, desktopSnapshot, serverSnapshot)
  const [selection, setSelection] = useState(() => ({ desktop, index: wrap(initialIndex, items.length), id: items[wrap(initialIndex, items.length)]?.id }))
  // Framer changes the initial variant when crossing the Phone boundary.
  // Desktop/Tablet share that variant and therefore retain the current slide.
  const retained = selection.id === undefined ? selection.index : items.findIndex(item => item.id === selection.id)
  const index = wrap(selection.desktop !== desktop || retained < 0 ? initialIndex : retained, items.length)
  const selectedId = items[index]?.id
  if (selection.desktop !== desktop || selection.index !== index || selection.id !== selectedId) {
    setSelection({ desktop, index, id: selectedId })
  }
  const reducedMotion = useReducedMotionPreference()
  const staticContent = reducedMotion || typeof IntersectionObserver === 'undefined'
  const layoutTransition = reducedMotion ? { duration: 0 } : transition
  const testimonial = items[index]
  if (!testimonial) return null
  const slideKey = testimonial.id ?? index
  function move(delta: number) {
    setSelection(value => {
      const current = value.id === undefined ? value.index : items.findIndex(item => item.id === value.id)
      const next = wrap((current < 0 ? initialIndex : current) + delta, items.length)
      return { desktop, index: next, id: items[next]?.id }
    })
  }

  return (
    <LazyMotion features={domMax} strict>
      <m.section
        className={className ? `loruni-testimonials ${className}` : 'loruni-testimonials'}
        style={style}
        id={id}
        data-testimonial-index={index}
        data-layout={desktop ? 'desktop' : 'mobile'}
        aria-label={label}
        aria-roledescription="carosello"
        layout={!reducedMotion}
        layoutDependency={index}
        transition={layoutTransition}
      >
        {desktop && <>
          <div className="loruni-testimonials__media">
            <ImageReveal key={slideKey} image={testimonial.image} />
          </div>
          <div className="loruni-testimonials__spacer" aria-hidden="true" />
        </>}
        <div className="loruni-testimonials__content">
          <m.div className="loruni-testimonials__title-slot" layout="position" layoutDependency={index} transition={layoutTransition}>
            <div className="loruni-testimonials__title-group" data-slide={index}>
              <WordOpacityReveal key={slideKey} text={testimonial.title} className="loruni-testimonials__title text-headline-76" />
              <Divider color="var(--color-brand-primary)" className="loruni-testimonials__divider" />
            </div>
          </m.div>
          <m.div className="loruni-testimonials__text-slot" layout="position" layoutDependency={index} transition={layoutTransition}>
            <div className="loruni-testimonials__text" data-slide={index}>
              <m.p key={slideKey} className="text-text-32-p" dir="auto" initial={staticContent ? false : { opacity: 0.001 }} animate={staticContent ? { opacity: 1 } : undefined} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: primitive.effectThreshold.value0Point5.value }} transition={staticContent ? { duration: 0 } : { ...transition, delay: bodyDelay }}>{testimonial.quote}</m.p>
            </div>
          </m.div>
          <m.div className="loruni-testimonials__footer" layout="position" layoutDependency={index} transition={layoutTransition}>
            {desktop && <Icon name="quote" className="loruni-testimonials__quote" />}
            <div className="loruni-testimonials__name-slot">
              <div className="loruni-testimonials__name-group">
                <p className="loruni-testimonials__name text-headline-16" dir="auto">{testimonial.name}</p>
                <p className="loruni-testimonials__job text-headline-16" dir="auto">{testimonial.role}</p>
              </div>
            </div>
            {items.length > 1 && <div className="loruni-testimonials__nav">
              <TestimonialsArrow icon="Arrow Back" aria-label="Testimonial precedente" onClick={() => move(-1)} />
              <TestimonialsArrow icon="Arrow Forward" aria-label="Testimonial successivo" onClick={() => move(1)} />
            </div>}
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}
