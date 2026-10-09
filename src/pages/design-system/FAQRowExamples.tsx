import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { FAQRow } from '../../components/FAQRow'
import { faqRowSlots } from './FAQRowExamples.data'
import './FAQRowExamples.css'
import { DemoControls } from './DemoControls'

/** Catalog parent, with explicit controlled state and no production FAQ Section. */
export function FAQRowExample({ slot = 0, initialOpen = false }: { slot?: number; initialOpen?: boolean }) {
  const item = faqRowSlots[slot] ?? faqRowSlots[0]
  const [open, setOpen] = useState(initialOpen)
  const [clicks, setClicks] = useState(0)
  const [reduced, setReduced] = useState(false)
  const [width, setWidth] = useState('fluid')
  if (!item.title) return <p>Slot {slot + 1} · title isSet=false · il consumer non rende la Row.</p>
  return <div data-example="faq-row-controlled">
    <DemoControls>
      <button className="ds-demo-action" type="button" onClick={() => setOpen(true)}>Apri risposta</button>
      <button className="ds-demo-action" type="button" onClick={() => setOpen(false)}>Chiudi risposta</button>
      <button className="ds-demo-action" type="button" aria-pressed={reduced} onClick={() => setReduced(value => !value)}>Riduci movimento</button>
      <label className="ds-demo-field">Larghezza di verifica <select value={width} onChange={event => setWidth(event.target.value)}>
        <option value="fluid">Fluida</option>
        <option value="550">Sorgente · 550px</option>
        <option value="472.5">Istanza Desktop · 472.5px</option>
        <option value="353.5">Istanza Tablet · 353.5px</option>
        <option value="351">Istanza Phone · 351px</option>
      </select></label>
      <output>Click: {clicks}</output>
    </DemoControls>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div style={{ maxWidth: 'var(--component-faq-row-opened-width)', width: width === 'fluid' ? '100%' : `${width}px` }}>
        <FAQRow {...item} open={open} onOpenChange={setOpen} onClick={() => setClicks(value => value + 1)} />
      </div>
    </MotionConfig>
  </div>
}
