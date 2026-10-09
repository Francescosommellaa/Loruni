import { useId, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { typography } from '../styles/token'
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

// User-requested refinement: animate the reveal without scaling the text.
const tween = { duration: 0.32, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }

/** One controlled row. Availability and sibling orchestration belong to its parent. */
export function FAQRow({ title, text, open, onOpenChange, onClick, className, style }: FAQRowProps) {
  const identity = useId()
  const triggerId = `${identity}-question`
  const answerId = `${identity}-answer`
  const reduced = useReducedMotionPreference()
  const transition = reduced ? { ...tween, duration: 0 } : tween
  function activate() {
    onClick?.()
    onOpenChange(!open)
  }
  return <LazyMotion features={domAnimation} strict>
    {/* Delegation extends the native trigger's pointer area to the answer, as in Framer. */}
    <div className={['loruni-faq-row', className].filter(Boolean).join(' ')} style={style}
      data-state={open ? 'Opened' : 'Closed'} onClick={activate}>
      <h3 className="loruni-faq-row__question">
        <button type="button" id={triggerId} className="loruni-faq-row__trigger"
          aria-expanded={open} aria-controls={answerId}>
          <span className={`${typography.headline28.className} loruni-faq-row__title`}>{title}</span>
          <FaqIcon variant={open ? 'Minus' : 'Plus'} decorative />
        </button>
      </h3>
      <m.div id={answerId} role="region" aria-labelledby={triggerId} aria-hidden={!open} inert={!open}
        className="loruni-faq-row__reveal" initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={transition}>
        <div className="loruni-faq-row__answer"><p className={`${typography.text20.className} loruni-faq-row__text`}>{text}</p></div>
      </m.div>
    </div>
  </LazyMotion>
}
