import { type MouseEventHandler } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { component, motion as motionTokens } from '../styles/token'
import { Icon } from './Icon'
import './TestimonialsArrow.css'

const icons = {
  'Arrow Right Alt': 'testimonial-arrow',
  'Arrow Back': 'testimonial-back',
  'Arrow Forward': 'testimonial-forward',
} as const

export type TestimonialsArrowProps = {
  icon?: keyof typeof icons
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  'aria-label'?: string
}

// Exact source configuration; the shared transition token is value-equivalent.
const sourceTransition = motionTokens.transitions.eventiEventiDesktopTransition.config
const transition = {
  type: sourceTransition.type,
  duration: Number.parseFloat(sourceTransition.duration),
  bounce: sourceTransition.bounce,
  delay: Number.parseFloat(sourceTransition.delay),
}
const source = component.testimonialsArrow
const defaultState = { backgroundColor: `var(${source.variant1.fill.cssVariable})`, opacity: 1 }
const hoverState = { backgroundColor: `var(${source.variant1Hover.fill.cssVariable})` }
const pressedState = { ...hoverState, opacity: Number(source.variant1Pressed.opacity.value) }

export function TestimonialsArrow({ icon = 'Arrow Right Alt', onClick, className, 'aria-label': label }: TestimonialsArrowProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.button
        type="button"
        className={className ? `loruni-testimonials-arrow ${className}` : 'loruni-testimonials-arrow'}
        aria-label={label ?? icon}
        data-icon={icon}
        initial={false}
        animate={defaultState}
        whileHover={hoverState}
        whileTap={pressedState}
        transition={transition}
        onClick={onClick}
      >
        <Icon name={icons[icon]} className="loruni-testimonials-arrow__icon" />
      </m.button>
    </LazyMotion>
  )
}
