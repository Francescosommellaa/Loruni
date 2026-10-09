import type { CSSProperties } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { motion, primitive } from '../styles/token'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { WordOpacityReveal } from '../motion/WordOpacityReveal'
import { ImageReveal } from './ImageReveal'
import type { ImageFillImage } from './ImageFill'
import { Divider } from './Divider'
import { Icon } from './Icon'
import { useSiteBreakpoint } from '../motion/useSiteBreakpoint'
import './EventTestimonial.css'

export type EventTestimonialContent = {
  image?: ImageFillImage
  title?: string
  quote?: string | null
  name?: string
  role?: string
}
export type EventTestimonialProps = EventTestimonialContent & { id?: string; className?: string; style?: CSSProperties }
const source = motion.transitions.eventiEventiDesktopColorContainerTestimonialContentTextText1TextEffectStyleTransition.config
const transition = { type: source.type, duration: Number.parseFloat(source.duration), bounce: source.bounce, delay: Number.parseFloat(primitive.motionDelay.value0Point4s.value), restDelta: 0.001 }

/** One CMS testimonial. Presence is determined only by the main quote, as in Framer. */
export function EventTestimonial({ image, title = '', quote, name = '', role = '', id, className, style }: EventTestimonialProps) {
  const desktop = useSiteBreakpoint() !== 'phone'
  const reduced = useReducedMotionPreference()
  const readable = reduced || typeof IntersectionObserver === 'undefined'
  if (quote == null || quote === '') return null
  return <LazyMotion features={domAnimation} strict>
    <section id={id} style={style} className={['loruni-event-testimonial', className].filter(Boolean).join(' ')}>
      {desktop && <><div className="loruni-event-testimonial__media"><ImageReveal image={image} backgroundColor="var(--color-neutral-950)" /></div>
      <div className="loruni-event-testimonial__spacer" aria-hidden="true" /></>}
      <div className="loruni-event-testimonial__content">
        <div className="loruni-event-testimonial__title-group">
          <WordOpacityReveal key={title} as="h2" text={title} className="loruni-event-testimonial__title text-headline-76" />
          <Divider color="var(--color-brand-accent)" />
        </div>
        <div className="loruni-event-testimonial__text-slot"><div className="loruni-event-testimonial__text">
          <m.p key={quote} className="text-text-32-p" dir="auto" initial={readable ? false : { opacity: 0.001 }} animate={readable ? { opacity: 1 } : undefined} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0 }} transition={readable ? { duration: 0 } : transition}>{quote}</m.p>
        </div></div>
        <div className="loruni-event-testimonial__footer">
          <Icon name="quote" className="loruni-event-testimonial__quote" />
          <div className="loruni-event-testimonial__name-group">
            <h3 className="text-headline-16" dir="auto">{name}</h3>
            <h3 className="loruni-event-testimonial__role text-headline-16" dir="auto">{role}</h3>
          </div>
        </div>
      </div>
    </section>
  </LazyMotion>
}
