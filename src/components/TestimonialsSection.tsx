import { Fragment, useState, useSyncExternalStore, type CSSProperties } from 'react'
import { domMax, LazyMotion, m, useReducedMotion } from 'motion/react'
import { motion as motionTokens, primitive } from '../styles/token'
import { TestimonialsArrow } from './TestimonialsArrow'
import { Icon } from './Icon'
import './TestimonialsSection.css'

import { defaultTestimonials, type TestimonialImage, type Testimonials, type TestimonialIndex } from './TestimonialsSection.data'
export type { Testimonial, TestimonialImage, Testimonials, TestimonialIndex } from './TestimonialsSection.data'

export type TestimonialsSectionProps = {
  testimonials?: Testimonials
  initialIndex?: TestimonialIndex
  className?: string
  style?: CSSProperties
}

const sourceTransition = motionTokens.transitions.testimonialsSectionDesktop1Transition.config
const transition = {
  type: sourceTransition.type,
  duration: Number.parseFloat(sourceTransition.duration),
  delay: Number.parseFloat(sourceTransition.delay),
  ease: [...sourceTransition.ease] as [number, number, number, number],
}
const sourceTitleTransition = motionTokens.transitions.eventiEventiDesktopColorContainerTestimonialContentTitleTitle1TextEffectStyleTransition.config
const titleTransition = {
  type: sourceTitleTransition.type,
  duration: Number.parseFloat(sourceTitleTransition.duration),
  bounce: sourceTitleTransition.bounce,
  restDelta: 0.001,
}
const wordDelay = Number.parseFloat(sourceTitleTransition.delay)
const revealDelay = Number.parseFloat(primitive.motionDelay.value0Point6s.value)
const bodyDelay = Number.parseFloat(primitive.motionDelay.value0Point2s.value)
const desktopQuery = '(min-width: 810px)'
function subscribeViewport(listener: () => void) {
  const query = window.matchMedia(desktopQuery)
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
function desktopSnapshot() { return window.matchMedia(desktopQuery).matches }
function serverSnapshot() { return true }

// This section's nested reveal: the cover retracts towards the left after 600ms.
// It is not an independent port of the reusable Framer Image reveal component.
function ImageReveal({ image }: { image: TestimonialImage }) {
  const reducedMotion = useReducedMotion()
  const data = typeof image === 'string' ? { src: image } : image
  return (
    <div className="loruni-testimonials__reveal">
      <img alt="" {...data} decoding="async" className="loruni-testimonials__image" />
      <m.div
        className="loruni-testimonials__cover"
        aria-hidden="true"
        initial={reducedMotion ? false : { left: 0, width: '100%' }}
        animate={{ left: '-1px', width: '1px' }}
        transition={reducedMotion ? { duration: 0 } : { ...transition, delay: revealDelay }}
      />
    </div>
  )
}

export function TestimonialsSection({ testimonials = defaultTestimonials, initialIndex = 0, className, style }: TestimonialsSectionProps) {
  const desktop = useSyncExternalStore(subscribeViewport, desktopSnapshot, serverSnapshot)
  const [selection, setSelection] = useState({ desktop, index: initialIndex })
  // Framer changes the initial variant when crossing the Phone boundary.
  // Desktop/Tablet share that variant and therefore retain the current slide.
  if (selection.desktop !== desktop) setSelection({ desktop, index: initialIndex })
  const index = selection.desktop === desktop ? selection.index : initialIndex
  const reducedMotion = useReducedMotion()
  const layoutTransition = reducedMotion ? { duration: 0 } : transition
  const testimonial = testimonials[index]
  const words = testimonial.title.split(' ')

  return (
    <LazyMotion features={domMax} strict>
      <m.section
        className={className ? `loruni-testimonials ${className}` : 'loruni-testimonials'}
        style={style}
        data-testimonial-index={index}
        data-layout={desktop ? 'desktop' : 'mobile'}
        aria-label="Testimonials"
        layout
        layoutDependency={index}
        transition={layoutTransition}
      >
        {desktop && <>
          <div className="loruni-testimonials__media">
            <ImageReveal key={index} image={testimonial.image} />
          </div>
          <div className="loruni-testimonials__spacer" aria-hidden="true" />
        </>}
        <div className="loruni-testimonials__content">
          <m.div className="loruni-testimonials__title-slot" layout="position" layoutDependency={index} transition={layoutTransition}>
            <div className="loruni-testimonials__title-group" data-slide={index}>
              <m.h3 key={index} className="loruni-testimonials__title text-headline-76" dir="auto" initial={reducedMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0 }}>
                {words.map((word, part) => {
                  const wordTransition = reducedMotion ? { duration: 0 } : { ...titleTransition, delay: part * wordDelay }
                  return <Fragment key={part}><m.span variants={{ hidden: { opacity: 0.001 }, visible: { opacity: 1, transition: wordTransition } }}>{word}</m.span>{part < words.length - 1 ? ' ' : null}</Fragment>
                })}
              </m.h3>
              <div className="loruni-testimonials__divider" aria-hidden="true" />
            </div>
          </m.div>
          <m.div className="loruni-testimonials__text-slot" layout="position" layoutDependency={index} transition={layoutTransition}>
            <div className="loruni-testimonials__text" data-slide={index}>
              <m.p key={index} className="text-text-32-p" dir="auto" initial={reducedMotion ? false : { opacity: 0.001 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: primitive.effectThreshold.value0Point5.value }} transition={reducedMotion ? { duration: 0 } : { ...transition, delay: bodyDelay }}>{testimonial.text}</m.p>
            </div>
          </m.div>
          <m.div className="loruni-testimonials__footer" layout="position" layoutDependency={index} transition={layoutTransition}>
            {desktop && <Icon name="quote" className="loruni-testimonials__quote" />}
            <div className="loruni-testimonials__name-slot" aria-live="polite" aria-atomic="true">
              <div className="loruni-testimonials__name-group">
                <p className="loruni-testimonials__name text-headline-16" dir="auto">{testimonial.name}</p>
                <p className="loruni-testimonials__job text-headline-16" dir="auto">{testimonial.jobTitle}</p>
              </div>
            </div>
            <div className="loruni-testimonials__nav">
              <TestimonialsArrow icon="Arrow Back" aria-label="Testimonial precedente" onClick={() => setSelection(value => ({ desktop, index: ((value.index + 3) % 4) as TestimonialIndex }))} />
              <TestimonialsArrow icon="Arrow Forward" aria-label="Testimonial successivo" onClick={() => setSelection(value => ({ desktop, index: ((value.index + 1) % 4) as TestimonialIndex }))} />
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}
