import { DemoControls } from './DemoControls'
import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { FAQSection, type FAQItem } from '../../components/FAQSection'
import { colors } from '../../styles/token'
import { faqRowSlots } from './FAQRowExamples.data'
import './FAQSectionExamples.css'

const identities = ['playing', 'solo', 'games', 'events', 'contact', 'extra-six', 'extra-seven', 'extra-eight']
// Reuse the already verified source copy instead of maintaining a second FAQ content list.
const contactFAQItems: readonly FAQItem[] = faqRowSlots.map((slot, i) => ({ id: identities[i], question: slot.title, answer: slot.text }))

export function FAQSectionSourceExample() {
  return <div className="ds-faq-section-source"><FAQSection items={contactFAQItems} /></div>
}

export function FAQSectionEmptyExample() {
  return <FAQSection items={[{ id: 'answer-only', question: '', answer: 'Questa risposta senza domanda non crea una row.' }]} />
}

/** Documentation-only viewport: native media queries run inside the iframe. */
export function FAQSectionFrameComparison() {
  const [viewport, setViewport] = useState(1200)
  const allocation = viewport >= 1200 ? 472.5 : viewport >= 810 ? 353.5 : 351
  return <main className="ds-faq-section-frame">
    <label className="ds-demo-field">Viewport FAQ<select value={viewport} onChange={e => setViewport(Number(e.target.value))}>
      <option value="1200">Desktop · 1200</option><option value="810">Tablet · 810</option><option value="390">Phone · 390</option>
    </select></label>
    <iframe title="FAQ Section · confronto responsive" width={viewport} height="900"
      src={`/design-system?fixture=faq-section&width=${allocation}`} />
  </main>
}

export function FAQSectionControlsExample({ comparison = false }: { comparison?: boolean }) {
  const params = new URLSearchParams(window.location.search)
  const [items, setItems] = useState<readonly FAQItem[]>(contactFAQItems)
  const [width, setWidth] = useState(Number(params.get('width') ?? '734'))
  const [question, setQuestion] = useState(contactFAQItems[0]!.question)
  const [answer, setAnswer] = useState(contactFAQItems[0]!.answer)
  const [reduced, setReduced] = useState(false)
  const [mounted, setMounted] = useState(true)
  const [withoutIds, setWithoutIds] = useState(false)
  const top = comparison ? Number(params.get('top') ?? '0') : 0
  const shown = items.map(item => item.id === 'playing' ? { ...item, question, answer } : item)
  const effective = withoutIds ? shown.map(({ question: q, answer: a }) => ({ question: q, answer: a })) : shown
  const controls = <DemoControls>
    <label className="ds-demo-field">Larghezza<input type="number" min="200" max="1800" step="0.5" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
    <label className="ds-demo-field">Prima domanda<input value={question} onChange={e => setQuestion(e.target.value)} /></label>
    <label className="ds-demo-field">Prima risposta<textarea value={answer} onChange={e => setAnswer(e.target.value)} /></label>
    <label className="ds-demo-field"><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} />Reduced motion FAQ</label>
    <label className="ds-demo-field"><input type="checkbox" checked={withoutIds} onChange={e => setWithoutIds(e.target.checked)} />FAQ senza id</label>
    <button className="ds-demo-action" type="button" onClick={() => setItems(i => [...i].reverse())}>Inverti ordine FAQ</button>
    <button className="ds-demo-action" type="button" onClick={() => setItems(i => i.filter(item => item.id !== 'playing'))}>Rimuovi FAQ 1</button>
    <button className="ds-demo-action" type="button" onClick={() => setItems(i => i.slice(0, 2))}>Riduci FAQ a due slot</button>
    <button className="ds-demo-action" type="button" onClick={() => setItems(i => [...i, { id: `extra-${i.length}`, question: `Domanda aggiuntiva ${i.length + 1}`, answer: 'Contenuto dinamico oltre gli otto slot originali.' }])}>Aggiungi FAQ</button>
    <button className="ds-demo-action" type="button" onClick={() => { setItems(contactFAQItems); setQuestion(contactFAQItems[0]!.question); setAnswer(contactFAQItems[0]!.answer) }}>Ripristina contenuto FAQ</button>
    <button className="ds-demo-action" type="button" onClick={() => setMounted(m => !m)}>{mounted ? 'Smonta FAQ' : 'Monta FAQ'}</button>
  </DemoControls>
  const specimen = <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
    <div className="ds-faq-section-allocation" style={{ width }}>
      {mounted && <FAQSection items={effective} id="faq-playground" />}
      <p className="ds-faq-section-after">Contenuto successivo · riserva verticale della Section</p>
      <button className="ds-demo-action" type="button">Dopo le FAQ</button>
    </div>
  </MotionConfig>
  if (comparison) return <main className="ds-faq-section-comparison" style={{ backgroundColor: `var(${colors.brandPrimary.cssVariable})` }}>
    {top > 0 && <div style={{ height: top }} aria-hidden="true" />}
    {specimen}
    <div className="ds-faq-section-comparison-controls">{controls}</div>
  </main>
  return <div className="ds-faq-section-example">{controls}{specimen}</div>
}
