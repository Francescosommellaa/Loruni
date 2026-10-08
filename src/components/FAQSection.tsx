import { useCallback, useId, useLayoutEffect, useRef, useState, type HTMLAttributes } from 'react'
import { cancelFrame, frame } from 'motion'
import { domMax, LayoutGroup, LazyMotion, m } from 'motion/react'
import { motion as motionTokens } from '../styles/token'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { FAQRow } from './FAQRow'
import './FAQSection.css'

export type FAQItem = {
  /** Unique persistent consumer identity; recommended for changing/CMS collections. */
  id?: string
  question: string
  answer: string
}

export type FAQSectionProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  items: readonly FAQItem[]
}

const source = motionTokens.transitions.faqSectionDefaultTransition.config
const tween = { type: source.type, duration: Number.parseFloat(source.duration), delay: Number.parseFloat(source.delay), ease: [...source.ease] as [number, number, number, number] }

function availableItems(items: readonly FAQItem[]) {
  const occurrences = new Map<string, number>()
  return items.filter(item => typeof item.question === 'string' && item.question !== '').map(item => {
    // Source isSet does not trim whitespace. Answer alone cannot create a row.
    const identity = JSON.stringify(item.id === undefined ? ['question', item.question] : ['id', item.id])
    const occurrence = occurrences.get(identity) ?? 0
    occurrences.set(identity, occurrence + 1)
    return { item, key: JSON.stringify([identity, occurrence]) }
  })
}

/** Accordion orchestration; all row visual, reveal, icon and trigger behaviour stays in FAQRow. */
export function FAQSection({ items, className, style, ...props }: FAQSectionProps) {
  const identity = useId()
  const rows = availableItems(items)
  const [openKey, setOpenKey] = useState<string | null>(null)
  const activeKey = rows.some(row => row.key === openKey) ? openKey : null
  const reduced = useReducedMotionPreference()
  const outer = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const projecting = useRef(false)

  // Adjust this component's state before children commit, without a second effect pass.
  // Reinsertion must not reopen a removed FAQ.
  if (openKey !== activeKey) setOpenKey(null)

  const synchronize = useCallback(() => {
    if (!content.current || !outer.current) return
    const height = `${content.current.getBoundingClientRect().height}px`
    if (outer.current.style.height !== height) outer.current.style.height = height
  }, [])

  useLayoutEffect(() => {
    projecting.current = false
    synchronize()
    frame.postRender(synchronize)
    const observer = new ResizeObserver(() => {
      if (!projecting.current) frame.postRender(synchronize)
    })
    if (content.current) observer.observe(content.current)
    return () => {
      observer.disconnect()
      cancelFrame(synchronize)
      projecting.current = false
    }
  }, [reduced, synchronize])

  function startProjection() {
    projecting.current = true
    // Source preventer follows the rendered projection, not the final DOM height.
    // Existing Motion scheduler is active only for this discrete layout transition.
    frame.postRender(synchronize, true)
  }
  function finishProjection() {
    projecting.current = false
    cancelFrame(synchronize)
    frame.postRender(synchronize)
  }

  return <div {...props} ref={outer} className={['loruni-faq-section', className].filter(Boolean).join(' ')} style={style}>
    <LazyMotion features={domMax} strict>
      <LayoutGroup id={identity}>
        <m.div ref={content} className="loruni-faq-section__content" initial={false}
          layout={reduced ? false : 'size'} transition={reduced ? { ...tween, duration: 0 } : tween}
          onLayoutAnimationStart={startProjection} onLayoutAnimationComplete={finishProjection}>
          {rows.map(({ item, key }) => <m.div key={key} className="loruni-faq-section__item"
            initial={false} layout={reduced ? false : 'position'} transition={reduced ? { ...tween, duration: 0 } : tween}>
            <FAQRow title={item.question} text={item.answer} open={activeKey === key}
              onOpenChange={open => setOpenKey(previous => open ? key : previous === key ? null : previous)} />
          </m.div>)}
        </m.div>
      </LayoutGroup>
    </LazyMotion>
  </div>
}
