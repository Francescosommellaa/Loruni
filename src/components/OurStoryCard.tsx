import { useId, type CSSProperties } from 'react'
import { domMax, LazyMotion, LayoutGroup, m } from 'motion/react'
import { colors, motion as motionTokens, typography } from '../styles/token'
import { Divider } from './Divider'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import './OurStoryCard.css'

export type OurStoryCardProps = {
  variant?: 'Desktop' | 'Mobile'
  cardTitle?: string
  cardTextLeft?: string
  cardTextRight?: string
  number?: string
  className?: string
  style?: CSSProperties
}

// Exact transition equivalence; this does not make the card an Eventi consumer.
const sourceTransition = motionTokens.transitions.eventiEventiDesktopTransition.config
const transition = {
  type: sourceTransition.type,
  duration: Number.parseFloat(sourceTransition.duration),
  bounce: sourceTransition.bounce,
  delay: Number.parseFloat(sourceTransition.delay),
}

export function OurStoryCard({
  variant = 'Desktop', cardTitle = 'Al tavolo',
  cardTextLeft = 'Qualcuno si aggiunge, una sedia si sposta. Il tavolo si allunga e il discorso continua tra una mano e l’altra.',
  cardTextRight = 'Puoi restare al bancone, guardare una partita o chiedere di entrare. Non serve avere già deciso tutta la sera.',
  number = '01', className, style,
}: OurStoryCardProps) {
  const layoutId = useId()
  const reduced = useReducedMotionPreference()
  const projection = { layout: true, layoutDependency: variant, transition: reduced ? { duration: 0 } : transition, initial: false as const }
  return <LazyMotion features={domMax} strict><LayoutGroup id={layoutId}>
    <m.div {...projection} className={['loruni-our-story-card', className].filter(Boolean).join(' ')} data-variant={variant} style={style}>
      <m.div {...projection} className="loruni-our-story-card__content">
        <m.div {...projection} className="loruni-our-story-card__headline">
          <m.div {...projection} className="loruni-our-story-card__title">
            <h3 className={typography.headline76.className} dir="auto">{cardTitle}</h3>
          </m.div>
          <m.div {...projection} className="loruni-our-story-card__divider"><Divider width={82} color={`var(${colors.brandPrimary.cssVariable})`} /></m.div>
        </m.div>
        <m.div {...projection} className="loruni-our-story-card__texts">
          <m.div {...projection} className="loruni-our-story-card__text"><p className={typography.text32P.className} dir="auto">{cardTextLeft}</p></m.div>
          <m.div {...projection} className="loruni-our-story-card__text"><p className={typography.text32P.className} dir="auto">{cardTextRight}</p></m.div>
        </m.div>
      </m.div>
      <m.div {...projection} className="loruni-our-story-card__number"><p className={typography.headline180.className} dir="auto">{number}</p></m.div>
    </m.div>
  </LayoutGroup></LazyMotion>
}
