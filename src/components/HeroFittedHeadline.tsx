import type { ComponentPropsWithRef } from 'react'
import { useSiteBreakpoint } from '../motion/useSiteBreakpoint'
import { TextFitWidth } from './TextFitWidth'
import './HeroFittedHeadline.css'

export type HeroFittedHeadlineProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
  text: string
  phoneText: string
}

/** Home's headline slot. The positioned Hero owns its height, siblings and motion. */
export function HeroFittedHeadline({ text, phoneText, className, ...props }: HeroFittedHeadlineProps) {
  const phone = useSiteBreakpoint() === 'phone'
  return <div {...props} className={['loruni-hero-fitted-headline', className].filter(Boolean).join(' ')}>
    <div className="loruni-hero-fitted-headline__measure">
      <TextFitWidth text={phone ? phoneText : text} text1="var(--color-brand-primary)" align="left" font={{
        fontFamily: 'var(--font-funnel-display)', fontWeight: 600, fontStyle: 'normal',
        fontSize: 'var(--source-font-size-value16px)',
        letterSpacing: phone ? 'var(--source-letter-spacing-value-negative0point03em)' : 'var(--source-letter-spacing-value-negative0point07em)',
        lineHeight: phone ? 'var(--source-line-height-value1em)' : 'var(--source-line-height-value0point9em)',
      }} />
    </div>
  </div>
}
