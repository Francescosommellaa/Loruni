import { useState, useSyncExternalStore, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { breakpoints, motion as motionTokens, primitive, typography } from '../styles/token'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { ImageFill, type ImageFillImage } from './ImageFill'
import { ArrowForward } from './ArrowForward'
import './ProjectCard.css'

export type ProjectCardProps = {
  mode?: 'main' | 'inner'
  title?: string
  text?: string
  label1?: string | null
  label2?: string | null
  label3?: string | null
  year?: string
  image?: ImageFillImage
  /** Parent allocation; links, collections and scroll composition remain outside. */
  className?: string
  style?: CSSProperties
}

const source = motionTokens.transitions.projectCardMainPageDesktopTransition.config
const transition = {
  type: source.type,
  duration: Number.parseFloat(source.duration),
  delay: Number.parseFloat(source.delay),
  ease: [...source.ease] as [number, number, number, number],
}
function subscribePhone(listener: () => void) {
  const query = window.matchMedia(breakpoints.phone)
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
function phoneSnapshot() { return window.matchMedia(breakpoints.phone).matches }
function serverSnapshot() { return false }

export function ProjectCard({ mode = 'main', title = 'Serata LORUNI',
  text = 'Le regole nella scheda. La rivincita al tavolo.', label1, label2, label3,
  year = 'TBA', image = 'https://framerusercontent.com/images/3gRGZV4NOIeVF2Zi8OKqZdGPE.png',
  className, style }: ProjectCardProps) {
  const phone = useSyncExternalStore(subscribePhone, phoneSnapshot, serverSnapshot)
  const reduced = useReducedMotionPreference()
  const [gesture, setGesture] = useState({ phone, reduced, hovered: false })
  // A breakpoint/preference change ends the old gesture, including on return.
  if (gesture.phone !== phone || gesture.reduced !== reduced) setGesture({ phone, reduced, hovered: false })
  const hovered = !phone && !reduced && gesture.phone === phone && gesture.reduced === reduced && gesture.hovered
  const headline = mode === 'inner' && !phone ? typography.headline28 : typography.headline76
  const labels = [label1, label2, label3].filter((label): label is string => label != null && label !== '')
  return <LazyMotion features={domAnimation} strict>
    <m.div className={['loruni-project-card', className].filter(Boolean).join(' ')} data-mode={mode} style={style}
      onHoverStart={() => { if (!phone && !reduced) setGesture({ phone, reduced, hovered: true }) }}
      onHoverEnd={() => setGesture(previous => previous.hovered ? { phone, reduced, hovered: false } : previous)}>
      <div className="loruni-project-card__content">
        <m.div className="loruni-project-card__media" initial={false}
          animate={{ scale: mode === 'inner' && hovered ? Number(primitive.scale.value1Point1.value) : primitive.effectScale.value1.value }}
          transition={reduced ? { duration: 0 } : transition}>
          <ImageFill image={image} />
        </m.div>
        <div className="loruni-project-card__overlay">
          <div className="loruni-project-card__top">
            <div className="loruni-project-card__labels">
              {labels.map((label, index) => <h3 key={index} className={typography.headline16.className} dir="auto">{label}</h3>)}
            </div>
            <div className="loruni-project-card__year"><p className={headline.className} dir="auto">{year}</p></div>
          </div>
          <div className="loruni-project-card__bottom">
            <div className="loruni-project-card__text">
              <div className="loruni-project-card__title"><h3 className={headline.className} dir="auto">{title}</h3></div>
              {/* The source retains this slot (min-height 57px) in Inner Desktop. */}
              <div className="loruni-project-card__description">
                {(mode === 'main' || phone) && <p className={typography.text20.className} dir="auto">{text}</p>}
              </div>
            </div>
            {!phone && <ArrowForward size={mode === 'main' ? 40 : 28} rotation={hovered ? 0 : -45} />}
          </div>
        </div>
      </div>
    </m.div>
  </LazyMotion>
}
