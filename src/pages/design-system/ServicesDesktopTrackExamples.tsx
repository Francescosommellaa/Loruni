import { useId, useState } from 'react'
import { ServicesDesktopTrack, type ServicesDesktopTrackItem } from '../../components/ServicesDesktopTrack'
import { serviceCardCases } from './ServiceCardExamples.data'
import './ServicesDesktopTrackExamples.css'

// One existing current Home dataset; targets belong to this documentation consumer.
const services = serviceCardCases.filter(item => item.kind === 'desktop' && !item.hiddenByParent).map((item, index) => ({
  ...item.card, id: String(index + 1),
}))

export function ServicesDesktopTrackExample({ optional = false }: { optional?: boolean }) {
  const prefix = useId()
  const items = services.map((item, index) => ({ ...item, id: `${prefix}-service-${item.id}`, active: !optional || index !== 1 }))
  return <div className="ds-services-track-viewport" tabIndex={0} role="region" aria-label="Contenuto Services Desktop, scorrimento orizzontale manuale">
    <ServicesDesktopTrack label="Al bar" title="Un’altra, poi vediamo." items={items} />
  </div>
}

export function ServicesDesktopTrackControls({ comparison = false }: { comparison?: boolean }) {
  const prefix = useId()
  const params = new URLSearchParams(window.location.search)
  const [count, setCount] = useState(4)
  const [hideSecond, setHideSecond] = useState(false)
  const [title, setTitle] = useState('Un’altra, poi vediamo.')
  const [long, setLong] = useState(false)
  const [height, setHeight] = useState(1013)
  const [width, setWidth] = useState(Number(params.get('width') ?? 1200))
  const [viewport, setViewport] = useState(true)
  const [sourceDefaults, setSourceDefaults] = useState(params.get('content') === 'canvas')
  const items: (ServicesDesktopTrackItem | null)[] = Array.from({ length: count }, (_, index) => {
    const base = services[index % services.length]!
    return { ...base, id: comparison ? String(index + 1) : `${prefix}-service-${index + 1}`,
      active: !(hideSecond && index === 1),
      ...(sourceDefaults && index === 0 ? { title: 'Sociologo · Traduzione italiana', labels: ['persone', 'conversazioni', 'nuovi gruppi', 'tavoli condivisi', 'due chiacchiere', 'community'] } : {}),
      ...(long && index === 0 ? { title: 'Una sedia in più al tavolo', text: `${base.text}\n${base.text}` } : {}),
    }
  })
  // Explicit missing slots, equivalent to absent Framer parent content, do not render.
  items.push(null)
  const content = <div className="ds-services-track-demo">
    <div className="ds-services-track-controls">
      <label>Numero service<input type="number" min="0" max="8" value={count} onChange={e => setCount(Math.max(0, Math.min(8, Number(e.target.value))))} /></label>
      <label>Titolo intro<input value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label>Altezza track<input type="number" min="600" value={height} onChange={e => setHeight(Number(e.target.value))} /></label>
      <label>Viewport Desktop/Tablet<input type="number" min="810" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label><input type="checkbox" checked={hideSecond} onChange={e => setHideSecond(e.target.checked)} />Disattiva card 2</label>
      <label><input type="checkbox" checked={long} onChange={e => setLong(e.target.checked)} />Contenuto lungo</label>
      <label><input type="checkbox" checked={sourceDefaults} onChange={e => setSourceDefaults(e.target.checked)} />Default canvas sorgente</label>
      <label><input type="checkbox" checked={viewport} onChange={e => setViewport(e.target.checked)} />Viewport overflow esterno</label>
    </div>
    <div className={viewport ? 'ds-services-track-viewport' : 'ds-services-track-standalone'}
      style={{ width }} tabIndex={viewport ? 0 : undefined} role={viewport ? 'region' : undefined}
      aria-label={viewport ? 'Viewport della track, scorrimento manuale' : undefined}>
      <ServicesDesktopTrack label="Al bar" title={title} items={items} style={{ height }} />
    </div>
  </div>
  return comparison ? <main className="ds-services-track-comparison">{content}</main> : content
}

/** Document-only real viewport sandbox; product track has no responsive selection. */
export function ServicesDesktopTrackFrame() {
  const [width, setWidth] = useState(1200)
  return <div>
    <label>Browser Desktop/Tablet<input type="range" min="810" max="1440" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
    <output>{width}px</output>
    <div className="ds-services-track-frame-scroll"><iframe title="Services Desktop Track · viewport reale" width={width} height={1200}
      src="/design-system?fixture=services-track&width=1440" /></div>
  </div>
}
