import type { ComponentPropsWithRef } from 'react'
import { Label } from './Label'
import { ImageParallax, type ImageParallaxProps } from './ImageParallax'
import { OurStoryCard, type OurStoryCardProps } from './OurStoryCard'
import { TextStagger } from './TextStagger'
import type { TextFont } from './TextFont'
import { Icon } from './Icon'
import { colors, typography } from '../styles/token'
import './TheStoryTrack.css'

export type TheStoryTrackProps = Omit<ComponentPropsWithRef<'div'>, 'children' | 'title'> & {
  label: string
  title: string
  image: ImageParallaxProps['image']
  firstCard: Omit<OurStoryCardProps, 'variant' | 'className' | 'style'>
  quote: string
  secondCard: Omit<OurStoryCardProps, 'variant' | 'className' | 'style'>
}

const quoteFont: TextFont = {
  fontFamily: 'var(--font-funnel-sans)', fontWeight: 400, fontStyle: 'normal',
  fontSize: 64, textAlign: 'center', letterSpacing: '-0.04em', lineHeight: '1.16em',
}

/** Static Desktop content; the consumer owns breakpoint selection and scroll transport. */
export function TheStoryTrack({ label, title, image, firstCard, quote, secondCard, className, ...props }: TheStoryTrackProps) {
  return <div {...props} className={['loruni-the-story-track', className].filter(Boolean).join(' ')}>
    <div className="loruni-the-story-track__intro">
      <Label title={label} color={colors.neutral50.light} />
      <h2 className={typography.headline180.className} dir="auto">{title}</h2>
    </div>
    <div className="loruni-the-story-track__media">
      <ImageParallax image={image} parallaxX={-50} parallaxY={0} />
    </div>
    <OurStoryCard {...firstCard} variant="Desktop" />
    <div className="loruni-the-story-track__quote">
      <Icon name="quote" width={63} fill={colors.brandPrimary.light} />
      <TextStagger text={quote} font={quoteFont} color={colors.neutral50.light} delay={0.1} durPerLine={0.7} halfOpacity={false} />
      <Icon name="quote" width={63} fill={colors.brandPrimary.light} />
    </div>
    <OurStoryCard {...secondCard} variant="Desktop" />
  </div>
}
