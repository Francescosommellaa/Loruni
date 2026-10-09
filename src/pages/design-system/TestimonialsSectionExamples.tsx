import { DemoControls } from './DemoControls'
import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { TestimonialsSection, type Testimonials } from '../../components/TestimonialsSection'
import { defaultTestimonials } from '../../components/TestimonialsSection.data'
import './TestimonialsSectionExamples.css'

const names = ['Ray Oldenburg', 'Bernard Suits', 'Sid Meier', 'Ray Oldenburg & Karen Christensen']
const roles = ['Sociologo · Traduzione italiana', 'Filosofo · Traduzione italiana', 'Game designer · Traduzione italiana', 'Traduzione italiana']
const sourceTestimonials: Testimonials = defaultTestimonials.map((item, index) => ({ ...item, id: `testimonial-${index + 1}`, name: names[index]!, role: roles[index]! }))

export function TestimonialsSourceExample({ sourceDefaults = false }: { sourceDefaults?: boolean }) {
  return <div className="ds-testimonials-source"><TestimonialsSection items={sourceDefaults ? defaultTestimonials : sourceTestimonials} /></div>
}

/** Catalog controls only; the product Section never owns page allocation. */
export function TestimonialsControlsExample({ comparison = false }: { comparison?: boolean }) {
  const params = new URLSearchParams(window.location.search)
  const [items, setItems] = useState(sourceTestimonials)
  const [width, setWidth] = useState(Number(params.get('width') ?? 1168))
  const [height, setHeight] = useState(Number(params.get('height') ?? 750))
  const [reduced, setReduced] = useState(false)
  const [mounted, setMounted] = useState(true)
  const controls = <DemoControls>
    <label className="ds-demo-field">Larghezza<input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
    <label className="ds-demo-field">Altezza<input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} /></label>
    <label className="ds-demo-field">Prima citazione<textarea value={items[0]?.quote ?? ''} onChange={e => setItems(v => v.map((item, i) => i === 0 ? { ...item, quote: e.target.value } : item))} /></label>
    <label className="ds-demo-field"><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} />Reduced motion Testimonials</label>
    <button className="ds-demo-action" type="button" onClick={() => setItems(v => [...v].reverse())}>Inverti testimonial</button>
    <button className="ds-demo-action" type="button" onClick={() => setItems(v => v.slice(0, -1))}>Rimuovi ultima testimonial</button>
    <button className="ds-demo-action" type="button" onClick={() => setItems([])}>Svuota testimonial</button>
    <button className="ds-demo-action" type="button" onClick={() => setItems(sourceTestimonials)}>Ripristina testimonial</button>
    <button className="ds-demo-action" type="button" onClick={() => setMounted(v => !v)}>{mounted ? 'Smonta Testimonials' : 'Monta Testimonials'}</button>
  </DemoControls>
  const specimen = <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
    <div className="ds-testimonials-allocation" style={{ width, height: height > 0 ? height : 'auto' }}>
      {mounted && <TestimonialsSection items={items} id="testimonials-playground" />}
    </div>
  </MotionConfig>
  return <main className={comparison ? 'ds-testimonials-comparison' : 'ds-testimonials-example'}>{comparison ? <>{specimen}{controls}</> : <>{controls}{specimen}</>}</main>
}

export function TestimonialsFrameComparison() {
  const [width, setWidth] = useState(1200)
  const [page, setPage] = useState('home')
  const [retainedSrc, setRetainedSrc] = useState<string | null>(null)
  const phone = width < 810
  // Observed runtime allocation: Esperienza Phone has different parent padding.
  const allocation = phone ? page === 'home' ? 351 : 335 : width === 810 ? 715 : 1025
  const height = phone ? 0 : page === 'home' && width === 1200 ? 630.765625 : 600
  const src = `/design-system?fixture=testimonials&width=${allocation}&height=${height}`
  return <main className="ds-testimonials-frame">
    <label className="ds-demo-field">Viewport Testimonials<select value={width} onChange={e => setWidth(Number(e.target.value))}><option value="1200">Desktop · 1200</option><option value="810">Tablet · 810</option><option value="390">Phone · 390</option></select></label>
    <label className="ds-demo-field">Consumer Testimonials<select value={page} onChange={e => setPage(e.target.value)}><option value="home">Home</option><option value="esperienza">Esperienza</option></select></label>
    <label className="ds-demo-field"><input type="checkbox" checked={retainedSrc !== null} onChange={e => setRetainedSrc(e.target.checked ? src : null)} />Resize senza remount</label>
    <iframe title="Testimonials · confronto responsive" width={width} height="900" src={retainedSrc ?? src} />
  </main>
}
