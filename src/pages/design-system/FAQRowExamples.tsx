import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { FAQRow } from '../../components/FAQRow'
import { faqRowSlots } from './FAQRowExamples.data'
import './FAQRowExamples.css'

/** Catalog parent, with explicit controlled state and no production FAQ Section. */
export function FAQRowExample({ slot = 0, initialOpen = false }: { slot?: number; initialOpen?: boolean }) {
  const item = faqRowSlots[slot] ?? faqRowSlots[0]
  const [open, setOpen] = useState(initialOpen)
  const [clicks, setClicks] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [width, setWidth] = useState('fluid')
  if (!item.title) return <p>Slot {slot + 1} · title isSet=false · il consumer non rende la Row.</p>
  return <div data-example="faq-row-controlled">
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
      <button type="button" onClick={() => setOpen(true)}>Parent · apri</button>
      <button type="button" onClick={() => setOpen(false)}>Parent · chiudi</button>
      <button type="button" aria-pressed={reduced} onClick={() => setReduced(value => !value)}>Reduced motion</button>
      <label>Larghezza di verifica <select value={width} onChange={event => setWidth(event.target.value)}>
        <option value="fluid">Fluida</option>
        <option value="550">Sorgente · 550px</option>
        <option value="472.5">Istanza Desktop · 472.5px</option>
        <option value="353.5">Istanza Tablet · 353.5px</option>
        <option value="351">Istanza Phone · 351px</option>
      </select></label>
      <output>Click: {clicks}</output>
    </div>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div style={{ maxWidth: 'var(--component-faq-row-opened-width)', width: width === 'fluid' ? '100%' : `${width}px`, background: 'var(--color-neutral-50)' }}>
        <FAQRow {...item} open={open} onOpenChange={setOpen} onClick={() => setClicks(value => value + 1)} />
      </div>
    </MotionConfig>
  </div>
}
