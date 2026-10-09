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
    <label>Viewport Stats<select value={width} onChange={e => setWidth(Number(e.target.value))}>
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
    <div className="ds-stats-controls__fields">
      <label>Value stringa<input value={value} onChange={e => setValue(e.target.value)} /></label>
      <label>Label quarto item<input value={label} onChange={e => setLabel(e.target.value)} /></label>
      <label>Primo label<select value={firstStyle} onChange={e => setFirstStyle(e.target.value as 'compact' | 'display')}><option>compact</option><option>display</option></select></label>
    </div>
    <Stats items={experienceStats.map((item, index) => ({ ...item, ...(index === 0 ? { labelStyle: firstStyle } : {}), ...(index === 3 ? { value, label } : {}) }))} />
  </div>
}
