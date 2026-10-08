import { useState, useSyncExternalStore } from 'react'
import { MotionConfig } from 'motion/react'
import { ServiceCard, type ServiceCardProps } from '../../components/ServiceCard'
import { breakpoints } from '../../styles/token'
import { serviceCardCases } from './ServiceCardExamples.data'
import './ServiceCardExamples.css'

function subscribe(listener: () => void) {
  const q = window.matchMedia(breakpoints.phone)
  q.addEventListener('change', listener)
  return () => q.removeEventListener('change', listener)
}
function snapshot() { return window.matchMedia(breakpoints.phone).matches }
function usePhone() { return useSyncExternalStore(subscribe, snapshot, () => false) }
function caseFor(index: number, phone: boolean) {
  return serviceCardCases.filter(c => c.kind === (phone ? 'mobile' : 'desktop') && !c.hiddenByParent)[index]!
}
const defaultLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4']

export function ServiceCardDefaultExample() {
  return <div className="ds-service-overflow"><div className="ds-service-allocation"><ServiceCard labels={defaultLabels} /></div></div>
}
export function ServiceCardSourceExample({ index }: { index: number }) {
  const phone = usePhone()
  const item = caseFor(index, phone)
  return <div className="ds-service-overflow"><div className="ds-service-allocation">
    <ServiceCard {...item.card} id={`service-example-${item.card.number}`} />
  </div></div>
}

export function ServiceCardControlsExample() {
  const phone = usePhone()
  const [index, setIndex] = useState(0)
  const [title, setTitle] = useState<string | null>(null)
  const [text, setText] = useState<string | null>(null)
  const [labelCount, setLabelCount] = useState(6)
  const [price, setPrice] = useState(true)
  const [width, setWidth] = useState(1912)
  const [height, setHeight] = useState('1013')
  const [offset, setOffset] = useState(0)
  const [mounted, setMounted] = useState(true)
  const [reduced, setReduced] = useState(false)
  const [descriptor, setDescriptor] = useState(false)
  const [imageValue, setImageValue] = useState<string | null>(null)
  const item = caseFor(index, phone).card
  const image = imageValue ?? item.image
  return <div className="ds-service-controls-example">
    <div className="ds-service-controls">
      <label>Contenuto service<select value={index} onChange={e => { setIndex(Number(e.target.value)); setTitle(null); setText(null); setImageValue(null) }}>{[0, 1, 2, 3].map(i => <option key={i} value={i}>{caseFor(i, phone).card.title}</option>)}</select></label>
      <label>Titolo service<input value={title ?? item.title} onChange={e => setTitle(e.target.value)} /></label>
      <label>Testo service<textarea value={text ?? item.text} onChange={e => setText(e.target.value)} /></label>
      <label>Numero labels<input type="number" min="0" max="6" value={labelCount} onChange={e => setLabelCount(Number(e.target.value))} /></label>
      <label>Larghezza parent service<input type="number" min="240" max="2400" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label>Altezza parent service<select value={height} onChange={e => setHeight(e.target.value)}><option value="1013">fill · 1013px</option><option value="700">fill · 700px</option><option value="auto">auto</option></select></label>
      <label>Offset parent service<input type="range" min="-1500" max="1200" value={offset} onChange={e => setOffset(Number(e.target.value))} /></label>
      <label>Immagine service<input value={image} onChange={e => setImageValue(e.target.value)} /></label>
      <label><input type="checkbox" checked={descriptor} onChange={e => setDescriptor(e.target.checked)} />Immagine descriptor</label>
      <label><input type="checkbox" checked={price} onChange={e => setPrice(e.target.checked)} />Price presente</label>
      <label><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} />Reduced motion service</label>
      <button type="button" onClick={() => setMounted(m => !m)}>{mounted ? 'Smonta service' : 'Monta service'}</button>
    </div>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div className="ds-service-overflow"><div className="ds-service-allocation" style={{ width: phone ? '100%' : width, height: phone ? 'auto' : height === 'auto' ? 'auto' : Number(height), transform: `translateX(${offset}px)` }}>
        {mounted && <ServiceCard {...item} title={title ?? item.title} text={text ?? item.text}
          labels={item.labels.slice(0, labelCount)} price={price ? item.price : ''}
          image={descriptor ? { src: image, alt: item.title } : image} id="service-playground" />}
      </div></div>
    </MotionConfig>
  </div>
}

/** Isolated parent geometry, not a port of the Services Section transport. */
export function ServiceCardComparison() {
  const phone = usePhone()
  const params = new URLSearchParams(window.location.search)
  const [index, setIndex] = useState(Number(params.get('service') ?? '-1'))
  const [width, setWidth] = useState(Number(params.get('width') ?? (phone ? 390 : 1912)))
  const [height, setHeight] = useState(params.get('height') ?? (phone ? 'auto' : '1013'))
  const [offset, setOffset] = useState(Number(params.get('offset') ?? '0'))
  const item: ServiceCardProps = index < 0 ? { labels: defaultLabels } : caseFor(index, phone).card
  return <main className="ds-service-comparison">
    <div className="ds-service-controls">
      <label>Service confronto<select value={index} onChange={e => setIndex(Number(e.target.value))}><option value="-1">Default sorgente</option>{[0, 1, 2, 3].map(i => <option key={i} value={i}>{caseFor(i, phone).card.title}</option>)}</select></label>
      <label>Larghezza service confronto<input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label>Altezza service confronto<input value={height} onChange={e => setHeight(e.target.value)} /></label>
      <label>Offset service confronto<input type="number" value={offset} onChange={e => setOffset(Number(e.target.value))} /></label>
    </div>
    <div className="ds-service-comparison-frame" style={{ width, height: height === 'auto' ? 'auto' : Number(height), transform: `translateX(${offset}px)` }}>
      <ServiceCard {...item} id={`service-comparison-${index + 1}`} />
    </div>
  </main>
}
