import { useId, type CSSProperties, type MouseEvent } from 'react'
import { domMax, LazyMotion, m } from 'motion/react'
import { motion as motionTokens, typography } from '../styles/token'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { FaqIcon } from './FaqIcon'
import './FAQRow.css'

export type FAQRowProps = {
  title: string
  text: string
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Original Click event, emitted before the requested state change. */
  onClick?: () => void
  className?: string
  style?: CSSProperties
}

// Exact source tween already present in the canonical motion exports.
const source = motionTokens.transitions.faqSectionDefaultTransition.config
const tween = { type: source.type, duration: Number.parseFloat(source.duration), delay: Number.parseFloat(source.delay), ease: [...source.ease] as [number, number, number, number] }

/** One controlled row. Availability and sibling orchestration belong to its parent. */
export function FAQRow({ title, text, open, onOpenChange, onClick, className, style }: FAQRowProps) {
  const identity = useId()
  const triggerId = `${identity}-question`
  const answerId = `${identity}-answer`
  const reduced = useReducedMotionPreference()
  const transition = reduced ? { ...tween, duration: 0 } : tween
  function activate(event: MouseEvent<HTMLDivElement>) {
    // The source icon's separate DISMISS_OVERLAY action consumes its pointer click.
    // Current consumers have no overlay; retain that area without inventing an action.
    if (event.target instanceof Element && event.target.closest('.loruni-faq-icon')) return
    onClick?.()
    onOpenChange(!open)
  }
  return <LazyMotion features={domMax} strict>
    {/* Delegation extends the native trigger's pointer area to the answer, as in Framer. */}
    <m.div className={['loruni-faq-row', className].filter(Boolean).join(' ')} style={style}
      data-state={open ? 'Opened' : 'Closed'} initial={false} layout={reduced ? false : 'size'}
      transition={transition} onClick={activate}>
      <m.h3 className="loruni-faq-row__question" layout={reduced ? false : 'position'} transition={transition}>
        <button type="button" id={triggerId} className="loruni-faq-row__trigger"
          aria-expanded={open} aria-controls={answerId}>
          <span className={`${typography.headline28.className} loruni-faq-row__title`}>{title}</span>
          <FaqIcon variant={open ? 'Minus' : 'Plus'} decorative />
        </button>
      </m.h3>
      <m.div id={answerId} role="region" aria-labelledby={triggerId} aria-hidden={!open} inert={!open}
        className="loruni-faq-row__answer" initial={false} layout={reduced ? false : 'position'}
        animate={{ opacity: open ? 1 : 0 }} transition={transition}>
        <p className={`${typography.text20.className} loruni-faq-row__text`}>{text}</p>
      </m.div>
    </m.div>
  </LazyMotion>
}
