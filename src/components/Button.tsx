import { useId, useState, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { component, motion as motionTokens } from '../styles/token'
import { RollingText } from './RollingText'
import { Icon } from './Icon'
import './Button.css'

export type ButtonVariant = 'Primary' | 'Secondary' | 'Primary Mobile'
export type ButtonProps = {
  variant?: ButtonVariant
  text?: string
  /** Resolved URL supplied by the consumer, including dynamic/CMS destinations. */
  link?: string
  newTab?: boolean
  className?: string
  style?: CSSProperties
}

export function Button({ variant = 'Primary', text = 'VEDI LE SERATE', link, newTab = false, className, style }: ButtonProps) {
  const [hovered, setHovered] = useState(false)
  const newTabDescription = useId()
  const key = variant === 'Secondary' ? 'secondary' : variant === 'Primary Mobile' ? 'primaryMobile' : 'primary'
  const config = component.button[key]
  const tween = motionTokens.transitions.buttonPrimaryTransition.config
  const opensNewTab = Boolean(link && newTab)
  return <LazyMotion features={domAnimation} strict>
    <m.a className={['loruni-button', className].filter(Boolean).join(' ')} data-variant={variant}
      href={link} target={opensNewTab ? '_blank' : undefined} rel={opensNewTab ? 'noopener noreferrer' : undefined}
      aria-label={text} aria-describedby={opensNewTab ? newTabDescription : undefined}
      style={{ color: config.rollingTextColor.value, gap: config.gap.value, ...style }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}>
      <RollingText text={text} color={config.rollingTextColor.value}
        font={{ fontFamily: 'var(--font-funnel-sans)', fontWeight: 600, fontStyle: 'normal', fontSize: config.rollingTextFontSize.value, letterSpacing: config.rollingTextLetterSpacing.value, lineHeight: config.rollingTextLineHeight.value }}
        stagger={Number(config.rollingTextStagger.value)} padding={config.rollingTextPadding.value} reverse={false} transform="none" tag="p"
        transition={{ type: 'tween', duration: parseFloat(tween.duration), delay: parseFloat(tween.delay), ease: [...tween.ease] }} />
      <Icon name={variant === 'Secondary' ? 'button-arrow-secondary' : variant === 'Primary Mobile' ? 'button-arrow-mobile' : 'button-arrow'} hovered={hovered} />
      {opensNewTab && <span id={newTabDescription} className="visually-hidden">Si apre in una nuova scheda.</span>}
    </m.a>
  </LazyMotion>
}
