import { type CSSProperties, type MouseEventHandler } from 'react'
import { motion } from 'motion/react'
import { components, colors, motion as motionTokens } from '../styles/token'
import { RollingText } from './RollingText'
import { useReducedMotionPreference } from './useReducedMotionPreference'
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
export function NavItem({ variant = 'Desktop', text = 'NAV ITEM', color = `var(${colors.neutral950.cssVariable})`, link, onClick, newTab = false, className, style }: NavItemProps) {
  const reduced = useReducedMotionPreference()
  const config = components.navItem[variant === 'Desktop' ? 'desktop' : variant === 'Mobile' ? 'mobile' : 'compact']
  const tween = motionTokens.transitions.navItemDesktopRollingTextControlTransition.config
  const content = <RollingText text={text} color={color} font={{ fontFamily: 'var(--font-funnel-sans)', fontStyle: 'normal', fontWeight: 400, fontSize: config.rollingTextFontSize.value, letterSpacing: config.rollingTextLetterSpacing.value, lineHeight: config.rollingTextLineHeight.value }}
    padding={config.rollingTextPadding.value} stagger={Number(config.rollingTextStagger.value)} reverse={false} tag="p" textTransform="none"
    transition={{ type: 'tween', duration: Number.parseFloat(tween.duration), delay: Number.parseFloat(tween.delay), ease: [...tween.ease] }} />
  const shared = { className: ['loruni-nav-item', className].filter(Boolean).join(' '), style, onClick, 'aria-label': text, 'data-variant': variant, layout: !reduced, initial: false as const, transition: { type: 'spring' as const, duration: 0.4, bounce: 0.2 } }
  if (!link && onClick) return <motion.button {...shared} type="button">{content}</motion.button>
  return <motion.a {...shared} href={link} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener' : undefined}>{content}</motion.a>
}
