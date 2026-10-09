import type { ComponentPropsWithRef } from 'react'
import { typography } from '../styles/token'
import { useSiteBreakpoint } from '../motion/useSiteBreakpoint'
import { BrandTicker, type ConceptBrand } from './BrandTicker'
import { Label } from './Label'
import { TextStagger } from './TextStagger'
import './LogosAndIntro.css'

export type LogosAndIntroContent = {
  logosHeading: string
  brands: readonly ConceptBrand[]
  introLabel: string
  introText: { desktop: string; tablet: string; phone: string }
}
export type LogosAndIntroProps = Omit<ComponentPropsWithRef<'div'>, 'children' | 'content'> & { content: LogosAndIntroContent }

/** Experience composition only. Color container and subsequent blocks stay outside. */
export function LogosAndIntro({ content, className, ...props }: LogosAndIntroProps) {
  const breakpoint = useSiteBreakpoint()
  const phone = breakpoint === 'phone'
  const size = breakpoint === 'desktop' ? 80 : phone ? 36 : 64
  const leading = breakpoint === 'desktop' ? '1point16' : phone ? '1point2' : '1point15'
  return <div {...props} className={['loruni-logos-and-intro', className].filter(Boolean).join(' ')}>
    <section className="loruni-logos-and-intro__logos" aria-label={content.logosHeading}>
      <h3 className={typography.headline16.className}>{content.logosHeading}</h3>
      <BrandTicker brands={content.brands} />
    </section>
    <section className="loruni-logos-and-intro__intro" aria-label={content.introLabel}>
      <TextStagger text={content.introText[breakpoint]} color="var(--color-neutral-50)" delay={0.1} durPerLine={0.5} variableWeight={false} trigger="inView" halfOpacity={false}
        font={{ fontFamily: 'var(--font-funnel-sans)', fontWeight: 400, fontStyle: 'normal', fontSize: `var(--source-font-size-value${size}px)`, letterSpacing: phone ? 'var(--source-letter-spacing-value-negative0point02em)' : 'var(--source-letter-spacing-value-negative0point04em)', lineHeight: `var(--source-line-height-value${leading}em)`, textAlign: 'left' }} />
      <div className="loruni-logos-and-intro__label"><Label title={content.introLabel} color="var(--color-neutral-50)" /></div>
    </section>
  </div>
}
