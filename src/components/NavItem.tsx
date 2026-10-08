import { type CSSProperties, type MouseEventHandler } from 'react'
import { domMax, LazyMotion, m } from 'motion/react'
import { component, controlDefaults, motion as motionTokens } from '../styles/token'
import { RollingText } from './RollingText'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import './NavItem.css'

export type NavItemProps = {
  variant?: 'Desktop' | 'Mobile' | 'Compact'
  text?: string
  color?: string
  link?: string
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  newTab?: boolean
  className?: string
  style?: CSSProperties
}
export function NavItem({ variant = 'Desktop', text = 'NAV ITEM', color = controlDefaults.navItem.color.value, link, onClick, newTab = false, className, style }: NavItemProps) {
  const reduced = useReducedMotionPreference()
  const config = component.navItem[variant === 'Desktop' ? 'desktop' : variant === 'Mobile' ? 'mobile' : 'compact']
  const tween = motionTokens.transitions.navItemDesktopRollingTextControlTransition.config
  const content = <RollingText text={text} color={color} font={{ fontFamily: 'var(--font-funnel-sans)', fontStyle: 'normal', fontWeight: 400, fontSize: config.rollingTextFontSize.value, letterSpacing: config.rollingTextLetterSpacing.value, lineHeight: config.rollingTextLineHeight.value }}
    padding={config.rollingTextPadding.value} stagger={Number(config.rollingTextStagger.value)} reverse={false} tag="p" transform="none"
    transition={{ type: 'tween', duration: tween.duration, delay: tween.delay, ease: [...tween.ease] }} />
  // Exact spring equivalence, independent of the token's original Eventi consumer.
  const spring = motionTokens.transitions.eventiEventiDesktopTransition.config
  const shared = { className: ['loruni-nav-item', className].filter(Boolean).join(' '), style, onClick, 'aria-label': text, 'data-variant': variant, layout: !reduced, layoutDependency: variant, initial: false as const, transition: { type: spring.type, duration: Number.parseFloat(spring.duration), bounce: spring.bounce, delay: Number.parseFloat(spring.delay) } }
  return <LazyMotion features={domMax} strict>{!link && onClick
    ? <m.button {...shared} type="button">{content}</m.button>
    : <m.a {...shared} href={link} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener' : undefined}>{content}</m.a>}
  </LazyMotion>
}
