import { DemoControls } from './DemoControls'
import { useState, useSyncExternalStore, type CSSProperties } from 'react'
import { MotionConfig } from 'motion/react'
import { TextFitWidth } from '../../components/TextFitWidth'
import { TextStagger, type TextStaggerProps } from '../../components/TextStagger'
import { textFitCases, textStaggerCases, eventTexts } from './TextUtilityExamples.data'
import { breakpoints } from '../../styles/token'
import './TextUtilityExamples.css'

const families = ['var(--font-funnel-display)', 'var(--font-funnel-sans)', 'var(--font-ibm-plex-sans)']
function subscribeBreakpoint(listener: () => void) {
  const queries = [window.matchMedia(breakpoints.desktop), window.matchMedia(breakpoints.tablet)]
  queries.forEach(q => q.addEventListener('change', listener))
  return () => queries.forEach(q => q.removeEventListener('change', listener))
}
function breakpointSnapshot() { return window.matchMedia(breakpoints.desktop).matches ? 'desktop' : window.matchMedia(breakpoints.tablet).matches ? 'tablet' : 'phone' }

/** Documentation parent alone selects page controls and source frame allocation. */
export function TextResponsiveExample({ page = 'home' }: { page?: 'home' | 'experience' }) {
  const breakpoint = useSyncExternalStore(subscribeBreakpoint, breakpointSnapshot, () => 'phone')
  const fit = textFitCases.find(c => c.key === `${page}-fit-${breakpoint}`)!
  const main = textStaggerCases.find(c => c.key === `${page === 'home' ? 'home-quote' : 'experience-intro'}-${breakpoint}`)!
  const process = textStaggerCases.find(c => c.key === `home-process-${breakpoint}`)!
  return <div className={`ds-text-responsive ds-text-responsive--${page}`}>
    <div className="ds-text-responsive-fit"><div><TextFitWidth {...fit.props} /></div></div>
    <div className="ds-text-responsive-main"><TextStagger {...main.props} /></div>
    {page === 'home' && <div className="ds-text-responsive-process"><div><TextStagger {...process.props} /></div></div>}
  </div>
}
export function TextFitSourceExample({ caseKey }: { caseKey: string }) {
  const item = textFitCases.find(c => c.key === caseKey)!
  return <div className="ds-text-fit-source"><TextFitWidth {...item.props} /></div>
}
export function TextStaggerSourceExample({ caseKey }: { caseKey: string }) {
  const item = textStaggerCases.find(c => c.key === caseKey)!
  return <div className="ds-text-stagger-source"><TextStagger {...item.props} /></div>
}

export function TextFitControlsExample() {
  const [text, setText] = useState(textFitCases.find(c => c.key === 'home-fit-phone')!.props.text!)
  const [width, setWidth] = useState(390)
  const [fontFamily, setFamily] = useState(families[0]!)
  const [spacing, setSpacing] = useState(-0.03)
  const [height, setHeight] = useState(1)
  const [align, setAlign] = useState<'left' | 'center' | 'right'>('left')
  const [mounted, setMounted] = useState(true)
  return <div>
    <DemoControls>
      <label className="ds-demo-field">Testo fit<textarea value={text} onChange={e => setText(e.target.value)} /></label>
      <label className="ds-demo-field">Larghezza fit<input type="range" min="100" max="1200" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Font fit<select value={fontFamily} onChange={e => setFamily(e.target.value)}>{families.map((family, i) => <option key={family} value={family}>{['Funnel Display', 'Funnel Sans', 'IBM Plex Sans'][i]}</option>)}</select></label>
      <label className="ds-demo-field">Align fit<select value={align} onChange={e => setAlign(e.target.value as typeof align)}>{['left', 'center', 'right'].map(a => <option key={a}>{a}</option>)}</select></label>
      <label className="ds-demo-field">Letter spacing fit<input type="number" step="0.01" value={spacing} onChange={e => setSpacing(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Line height fit<input type="number" step="0.1" value={height} onChange={e => setHeight(Number(e.target.value))} /></label>
      <button className="ds-demo-action" type="button" onClick={() => setMounted(v => !v)}>{mounted ? 'Smonta fit' : 'Monta fit'}</button>
    </DemoControls>
    <div className="ds-text-fit-source" style={{ width, maxWidth: '100%' }}>{mounted && <TextFitWidth text={text} font={{ fontFamily, fontWeight: 600, letterSpacing: `${spacing}em`, lineHeight: `${height}em` }} align={align} text1="var(--color-brand-primary)" />}</div>
  </div>
}

export function TextStaggerControlsExample() {
  const [text, setText] = useState(eventTexts[0].text as string)
  const [width, setWidth] = useState(707)
  const [trigger, setTrigger] = useState<TextStaggerProps['trigger']>('click')
  const [size, setSize] = useState(36)
  const [delay, setDelay] = useState(0.1)
  const [duration, setDuration] = useState(0.7)
  const [weight, setWeight] = useState(false)
  const [half, setHalf] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [mounted, setMounted] = useState(true)
  const [generation, setGeneration] = useState(0)
  const [align, setAlign] = useState<'left' | 'center'>('left')
  return <div>
    <DemoControls>
      <label className="ds-demo-field">Testo stagger<textarea value={text} onChange={e => setText(e.target.value)} /></label>
      <label className="ds-demo-field">Contenuto CMS<select defaultValue="0" onChange={e => setText(eventTexts[Number(e.target.value)]!.text)}>{eventTexts.map((item, i) => <option key={item.slug} value={i}>{item.name}</option>)}</select></label>
      <label className="ds-demo-field">Larghezza stagger<input type="range" min="100" max="1200" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Trigger stagger<select value={trigger} onChange={e => { setTrigger(e.target.value as typeof trigger); setGeneration(v => v + 1) }}>{['inView', 'hover', 'click'].map(t => <option key={t}>{t}</option>)}</select></label>
      <label className="ds-demo-field">Font size stagger<input type="number" value={size} onChange={e => setSize(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Delay stagger<input type="number" step="0.01" value={delay} onChange={e => setDelay(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Durata per linea<input type="number" step="0.1" value={duration} onChange={e => setDuration(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Align stagger<select value={align} onChange={e => setAlign(e.target.value as typeof align)}><option>left</option><option>center</option></select></label>
      <label className="ds-demo-field"><input type="checkbox" checked={weight} onChange={e => setWeight(e.target.checked)} />Variable weight</label>
      <label className="ds-demo-field"><input type="checkbox" checked={half} onChange={e => setHalf(e.target.checked)} />Half opacity</label>
      <label className="ds-demo-field"><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} />Reduced motion</label>
      <button className="ds-demo-action" type="button" onClick={() => setGeneration(v => v + 1)}>Rimonta stagger</button>
      <button className="ds-demo-action" type="button" onClick={() => setMounted(v => !v)}>{mounted ? 'Smonta stagger' : 'Monta stagger'}</button>
    </DemoControls>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div className="ds-text-stagger-source" style={{ width, maxWidth: '100%' }}>{mounted && <TextStagger key={generation} text={text} trigger={trigger} font={{ fontFamily: families[1], fontSize: size, fontWeight: 400, lineHeight: '1.2em', letterSpacing: '-0.04em', textAlign: align }} delay={delay} durPerLine={duration} variableWeight={weight} halfOpacity={half} color="var(--color-neutral-50)" />}</div>
    </MotionConfig>
  </div>
}

/** Isolated utility consumer for matching the actual native browser frame width. */
export function TextUtilityComparison() {
  const query = new URLSearchParams(window.location.search)
  const [caseKey, setCase] = useState(query.get('case') ?? 'home-fit-desktop')
  const [width, setWidth] = useState(Number(query.get('width')) || 945)
  const fit = textFitCases.find(c => c.key === caseKey)
  const stagger = textStaggerCases.find(c => c.key === caseKey)
  const [reduced, setReduced] = useState(false)
  const [generation, setGeneration] = useState(0)
  const frameStyle: CSSProperties = { width, maxWidth: '100%' }
  if (caseKey === 'fit-controls') return <TextFitControlsExample />
  if (caseKey === 'stagger-controls') return <TextStaggerControlsExample />
  if (caseKey === 'home-responsive' || caseKey === 'experience-responsive') return <TextResponsiveExample page={caseKey === 'home-responsive' ? 'home' : 'experience'} />
  return <main className="ds-text-comparison">
    <DemoControls>
      <label className="ds-demo-field">Configurazione<select value={caseKey} onChange={e => setCase(e.target.value)}>{[...textFitCases, ...textStaggerCases].map(c => <option key={c.key}>{c.key}</option>)}</select></label>
      <label className="ds-demo-field">Larghezza frame<input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
      <label className="ds-demo-field"><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} />Reduced motion</label>
      <button className="ds-demo-action" type="button" onClick={() => setGeneration(v => v + 1)}>Rimonta</button>
    </DemoControls>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div className={fit ? 'ds-text-fit-source' : 'ds-text-stagger-source'} style={frameStyle}>
        {fit ? <TextFitWidth {...fit.props} /> : stagger ? <TextStagger key={`${caseKey}-${generation}`} {...stagger.props} /> : null}
      </div>
    </MotionConfig>
  </main>
}
