import { DemoControls } from './DemoControls'
import { useState, useSyncExternalStore } from 'react'
import { MotionConfig } from 'motion/react'
import { ProjectCard, type ProjectCardProps } from '../../components/ProjectCard'
import { breakpoints } from '../../styles/token'
import { projectCardCases, projectEvents } from './ProjectCardExamples.data'
import './ProjectCardExamples.css'

function subscribeBreakpoint(listener: () => void) {
  const queries = [window.matchMedia(breakpoints.desktop), window.matchMedia(breakpoints.tablet)]
  queries.forEach(q => q.addEventListener('change', listener))
  return () => queries.forEach(q => q.removeEventListener('change', listener))
}
function breakpointSnapshot() { return window.matchMedia(breakpoints.desktop).matches ? 'desktop' : window.matchMedia(breakpoints.tablet).matches ? 'tablet' : 'phone' }
function useBreakpoint() { return useSyncExternalStore(subscribeBreakpoint, breakpointSnapshot, () => 'phone') }
type ConsumerCase = { key: string; mode: 'main' | 'inner'; eventIndex: number; allocation: 'auto' | 'fill' | 'viewport' }
function media(item: ProjectCardProps, sizes: string, loading?: 'lazy' | 'eager') {
  return typeof item.image === 'object' ? { ...item.image, sizes, loading } : item.image
}

// This documentary parent alone maps observed CMS bindings and allocations.
export function ProjectCardConsumerExample({ page }: { page: 'home' | 'events' | 'event-detail' }) {
  const breakpoint = useBreakpoint()
  const cases = projectCardCases.filter(c => c.page === page && c.breakpoint === breakpoint)
  const cards = cases.flatMap<ConsumerCase>(c => c.mode === 'inner' ? projectEvents.slice(1).map((_, i) => ({ ...c, key: `${c.key}-${i}`, eventIndex: i + 1 })) : [c])
  return <div className={`ds-project-consumer ds-project-consumer--${page}`}>
    {cards.map(c => <div key={c.key} className={`ds-project-allocation ds-project-allocation--${c.allocation}`}>
      <a href={`#project-${projectEvents[c.eventIndex]!.slug}`}>
        <ProjectCard {...projectEvents[c.eventIndex]} mode={c.mode}
          image={media(projectEvents[c.eventIndex]!, '100vw', c.mode === 'inner' ? 'lazy' : 'eager')}
          label1={breakpoint === 'desktop' ? projectEvents[c.eventIndex]!.label1 : 'Eventi'}
          style={c.allocation === 'auto' ? undefined : { height: '100%' }} />
      </a>
    </div>)}
  </div>
}
export function ProjectCardDefaultExample({ mode }: { mode: 'main' | 'inner' }) {
  return <div className={`ds-project-default ds-project-default--${mode}`}><ProjectCard mode={mode} label1="Eventi" label2="Community" label3="Da annunciare" /></div>
}

export function ProjectCardControlsExample() {
  const [content, setContent] = useState<ProjectCardProps>({ ...projectEvents[0] })
  const [mode, setMode] = useState<'main' | 'inner'>('inner')
  const [width, setWidth] = useState(555)
  const [allocation, setAllocation] = useState('auto')
  const [reduced, setReduced] = useState(false)
  const [mounted, setMounted] = useState(true)
  const [responsiveImage, setResponsiveImage] = useState(true)
  const update = (key: keyof ProjectCardProps, value: string) => setContent(c => ({ ...c, [key]: value }))
  const image = typeof content.image === 'string' ? content.image : content.image?.src ?? ''
  return <div className="ds-project-playground">
    <DemoControls>
      <label className="ds-demo-field">Modalità card<select value={mode} onChange={e => setMode(e.target.value as typeof mode)}><option>main</option><option>inner</option></select></label>
      <label className="ds-demo-field">Contenuto card CMS<select defaultValue="0" onChange={e => setContent({ ...projectEvents[Number(e.target.value)] })}>{projectEvents.map((item, i) => <option key={item.slug} value={i}>{item.title}</option>)}</select></label>
      {(['title', 'text', 'label1', 'label2', 'label3', 'year'] as const).map(key => <label key={key}>{key}<input value={content[key] ?? ''} onChange={e => update(key, e.target.value)} /></label>)}
      <label className="ds-demo-field">Immagine card<input value={image} onChange={e => update('image', e.target.value)} /></label>
      <label className="ds-demo-field"><input type="checkbox" checked={responsiveImage} onChange={e => setResponsiveImage(e.target.checked)} />Descriptor responsive / asset statico</label>
      <label className="ds-demo-field">Larghezza card<input type="range" min="240" max="1200" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Altezza parent<select value={allocation} onChange={e => setAllocation(e.target.value)}><option value="auto">auto</option><option value="fill">fill · 585px</option><option value="viewport">100vh</option></select></label>
      <label className="ds-demo-field"><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} />Reduced motion card</label>
      <button className="ds-demo-action" type="button" onClick={() => setContent(c => ({ ...c, label1: undefined, label2: '', label3: null }))}>Rimuovi labels</button>
      <button className="ds-demo-action" type="button" onClick={() => setMounted(v => !v)}>{mounted ? 'Smonta card' : 'Monta card'}</button>
    </DemoControls>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div className={`ds-project-allocation ds-project-allocation--${allocation}`} style={{ width, maxWidth: '100%' }}>
        <a href="#project-card-parent-link">{mounted && <ProjectCard {...content} mode={mode} image={responsiveImage ? media(content, `${width}px`) : image} style={allocation === 'auto' ? undefined : { height: '100%' }} />}</a>
      </div>
    </MotionConfig>
  </div>
}

/** A comparison fixture, not a product page or CMS/routing implementation. */
export function ProjectCardComparison() {
  const query = new URLSearchParams(window.location.search)
  const [eventIndex, setEvent] = useState(Number(query.get('event')) || 0)
  const [mode, setMode] = useState<'main' | 'inner'>(query.get('mode') === 'inner' ? 'inner' : 'main')
  const [width, setWidth] = useState(Number(query.get('width')) || 1040)
  const [height, setHeight] = useState(query.get('height') ?? (mode === 'inner' ? 'auto' : '585'))
  const breakpoint = useBreakpoint()
  const content: ProjectCardProps = eventIndex === -1 ? { image: projectEvents[0]?.image, label1: 'Eventi', label2: 'Community', label3: 'Da annunciare' } : projectEvents[eventIndex] ?? {}
  return <main className="ds-project-comparison">
    <DemoControls>
      <label className="ds-demo-field">Modalità confronto<select value={mode} onChange={e => setMode(e.target.value as typeof mode)}><option>main</option><option>inner</option></select></label>
      <label className="ds-demo-field">Evento confronto<select value={eventIndex} onChange={e => setEvent(Number(e.target.value))}><option value="-1">Default sorgente</option>{projectEvents.map((item, i) => <option key={item.slug} value={i}>{item.title}</option>)}</select></label>
      <label className="ds-demo-field">Larghezza confronto<input type="number" step="0.5" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Altezza confronto<input value={height} onChange={e => setHeight(e.target.value)} /></label>
    </DemoControls>
    <a href="#comparison-parent-link" style={{ display: 'block', width, maxWidth: '100%' }}>
      <ProjectCard {...content} mode={mode}
        image={media(content, `${width}px`, mode === 'inner' ? 'lazy' : 'eager')}
        label1={eventIndex === -1 || breakpoint === 'desktop' ? content.label1 : 'Eventi'}
        style={height === 'auto' ? undefined : { height: height === '100vh' ? height : Number(height) }} />
    </a>
    <details><summary>21 allocazioni sorgente</summary><ul>{projectCardCases.map(c => <li key={c.key}>{c.key} · {c.allocation}</li>)}</ul></details>
  </main>
}
