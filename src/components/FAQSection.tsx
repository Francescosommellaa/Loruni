import { useCallback, useLayoutEffect, useRef, useState, type HTMLAttributes } from 'react'
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
  const rows = availableItems(items)
  const [openKey, setOpenKey] = useState<string | null>(null)
  const activeKey = rows.some(row => row.key === openKey) ? openKey : null
  const outer = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)

  // Adjust this component's state before children commit, without a second effect pass.
  // Reinsertion must not reopen a removed FAQ.
  if (openKey !== activeKey) setOpenKey(null)

  const synchronize = useCallback(() => {
    if (!content.current || !outer.current) return
    const height = `${content.current.getBoundingClientRect().height}px`
    if (outer.current.style.height !== height) outer.current.style.height = height
  }, [])

  // Row owns the only height animation. The reserve follows its rendered size.
  useLayoutEffect(() => {
    synchronize()
    const observer = new ResizeObserver(synchronize)
    if (content.current) observer.observe(content.current)
    return () => observer.disconnect()
  }, [synchronize])

  return <div {...props} ref={outer} className={['loruni-faq-section', className].filter(Boolean).join(' ')} style={style}>
    <div ref={content} className="loruni-faq-section__content">
      {rows.map(({ item, key }) => <div key={key} className="loruni-faq-section__item">
        <FAQRow title={item.question} text={item.answer} open={activeKey === key}
          onOpenChange={open => setOpenKey(previous => open ? key : previous === key ? null : previous)} />
      </div>)}
    </div>
  </div>
}
