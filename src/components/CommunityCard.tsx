import type { CSSProperties } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { motion as motionTokens, primitive, typography } from '../styles/token'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import './CommunityCard.css'

export type CommunityCardImage = string | { src: string; srcSet?: string; alt?: string }
export type CommunityCardProps = {
  image?: CommunityCardImage
  title?: string
  subtitle?: string
  h3?: boolean
  /** Parent sizing/integration, not an additional visual variant. */
  className?: string
  style?: CSSProperties
}

// Exact source equivalence; no dependency on Project Card content or behavior.
const sourceTransition = motionTokens.transitions.projectCardMainPageDesktopTransition.config
const transition = {
  type: sourceTransition.type,
  duration: Number.parseFloat(sourceTransition.duration),
  delay: Number.parseFloat(sourceTransition.delay),
  ease: [...sourceTransition.ease] as [number, number, number, number],
}

export function CommunityCard({ image, title = 'Una serata da LORUNI',
  subtitle = 'Il tavolo, le carte, un discorso lasciato a metà. Le foto vere arriveranno nel diario.',
  h3 = true, className, style }: CommunityCardProps) {
  const reduced = useReducedMotionPreference()
  const Heading = h3 ? 'h3' : 'h2'
  const media = typeof image === 'string' ? { src: image } : image
  return <LazyMotion features={domAnimation} strict>
    <m.div className={['loruni-community-card', className].filter(Boolean).join(' ')} style={style}
      initial={false} animate="rest" whileHover="hover">
      <div className="loruni-community-card__image-container">
        <m.div className="loruni-community-card__image" initial={false}
          variants={{ rest: { scale: primitive.effectScale.value1.value }, hover: { scale: reduced ? primitive.effectScale.value1.value : Number(primitive.scale.value1Point1.value) } }}
          transition={reduced ? { duration: 0 } : transition}>
          {media?.src ? <img {...media} alt={media.alt ?? ''} decoding="async" /> : <div className="loruni-community-card__empty-image" aria-hidden="true" />}
        </m.div>
      </div>
      <div className="loruni-community-card__text">
        <div className="loruni-community-card__title"><Heading className={typography.headline28.className} dir="auto">{title}</Heading></div>
        <div className="loruni-community-card__subtitle"><p className={typography.text20.className} dir="auto">{subtitle}</p></div>
      </div>
    </m.div>
  </LazyMotion>
}
