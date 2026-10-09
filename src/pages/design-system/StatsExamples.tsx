import { DemoControls } from './DemoControls'
import { useState } from 'react'
import { Stats } from '../../components/Stats'
import { experienceStats } from './StatsExamples.data'
import './StatsExamples.css'

export function StatsExample() { return <Stats items={experienceStats} /> }

export function StatsComparison() {
  return <main className="ds-stats-comparison"><Stats items={experienceStats} /></main>
}

export function StatsFrame() {
  const [width, setWidth] = useState(1200)
  return <div className="ds-stats-frame">
    <label className="ds-demo-field">Viewport Stats<select value={width} onChange={e => setWidth(Number(e.target.value))}>
      {[390, 809, 810, 1024, 1200, 1440].map(value => <option key={value} value={value}>{value}px</option>)}
    </select></label>
    <div className="ds-stats-frame__viewport"><iframe title="Stats · viewport reale" width={width} height={400} src="/design-system?fixture=stats" /></div>
  </div>
}

export function StatsControls() {
  const [value, setValue] = useState('∞')
  const [label, setLabel] = useState('Un’altra, poi vediamo')
  const [firstStyle, setFirstStyle] = useState<'compact' | 'display'>('compact')
  return <div className="ds-stats-controls">
    <DemoControls>
      <label className="ds-demo-field">Valore<input value={value} onChange={e => setValue(e.target.value)} /></label>
      <label className="ds-demo-field">Etichetta del quarto elemento<input value={label} onChange={e => setLabel(e.target.value)} /></label>
      <label className="ds-demo-field">Prima etichetta<select value={firstStyle} onChange={e => setFirstStyle(e.target.value as 'compact' | 'display')}><option>compact</option><option>display</option></select></label>
    </DemoControls>
    <Stats items={experienceStats.map((item, index) => ({ ...item, ...(index === 0 ? { labelStyle: firstStyle } : {}), ...(index === 3 ? { value, label } : {}) }))} />
  </div>
}
