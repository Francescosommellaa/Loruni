import type { ComponentPropsWithRef } from 'react'
import { useSiteBreakpoint } from '../motion/useSiteBreakpoint'
import { Label } from './Label'
import { TextStagger } from './TextStagger'
import './LabelledStaggerHeadline.css'

export type LabelledStaggerHeadlineProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
  label: string
  text: string
  phoneText: string
}

/** Process intro only; copy, section allocation and Process rows stay in the consumer. */
export function LabelledStaggerHeadline({ label, text, phoneText, className, ...props }: LabelledStaggerHeadlineProps) {
  const breakpoint = useSiteBreakpoint()
  const phone = breakpoint === 'phone'
  const size = breakpoint === 'desktop' ? 56 : phone ? 28 : 48
  const leading = breakpoint === 'desktop' ? '1point2' : phone ? '1point3' : '1point15'
  return <div {...props} className={['loruni-labelled-stagger-headline', className].filter(Boolean).join(' ')}>
    <div className="loruni-labelled-stagger-headline__label"><Label title={label} color="var(--color-neutral-50)" /></div>
    <TextStagger className="loruni-labelled-stagger-headline__text" text={phone ? phoneText : text}
      color="var(--color-neutral-50)" delay={0.1} durPerLine={0.5} trigger="inView" variableWeight={false} halfOpacity={false}
      font={{ fontFamily: 'var(--font-funnel-sans)', fontWeight: 400, fontStyle: 'normal',
        fontSize: `var(--source-font-size-value${size}px)`, lineHeight: `var(--source-line-height-value${leading}em)`,
        letterSpacing: phone ? 'var(--source-letter-spacing-value-negative0point02em)' : 'var(--source-letter-spacing-value-negative0point04em)', textAlign: 'left' }} />
  </div>
}
