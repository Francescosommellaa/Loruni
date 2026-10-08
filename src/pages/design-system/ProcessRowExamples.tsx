import { useState } from 'react'
import { ProcessRow, type ProcessRowProps } from '../../components/ProcessRow'
import './ProcessRowExamples.css'

const processHomeRows: readonly ProcessRowProps[] = [
  { title: 'Entra', text: 'Arrivi con gli amici, da solo o dopo cena. Per cominciare, basta passare dalla porta.', number: '01', padding: { phone: 0, tablet: 0, desktop: 0 } },
  { title: 'Siediti', text: 'C’è chi parla al bancone e chi sposta una sedia. Il tavolo non era così lungo, prima.', number: '02', padding: { phone: 0, tablet: '0 0 0 var(--space-80)', desktop: '0 0 0 var(--space-160)' } },
  { title: 'Gioca', text: 'Carte, tabellone o controller. Qualcuno spiega le regole. Qualcun altro le discute già.', number: '03', padding: { phone: 0, tablet: '0 0 0 var(--space-160)', desktop: '0 0 0 var(--space-320)' } },
  // Isolated consumer paddings240/480 are kept local rather than inventing shared spacing tokens.
  { title: 'Resta', text: 'La partita è finita. La conversazione no. Un’ultima mano, poi vediamo.', number: '04', padding: { phone: 0, tablet: '0 0 0 240px', desktop: '0 0 0 480px' } },
]

export function ProcessHomeExample() {
  return <section className="ds-process-home" aria-label="Process Row · quattro configurazioni Home">
    {processHomeRows.map(row => <ProcessRow key={row.number} {...row} />)}
  </section>
}

export function ProcessRowControlsExample() {
  const [title, setTitle] = useState('Entra')
  const [text, setText] = useState(processHomeRows[0]!.text!)
  const [number, setNumber] = useState('01')
  const [padding, setPadding] = useState('0px')
  const [showText, setShowText] = useState(true)
  const [replay, setReplay] = useState(0)
  return <section className="ds-process-controls" aria-label="Process Row · controlli sorgente">
    <div className="ds-process-controls__fields">
      <label>Title<input value={title} onChange={event => setTitle(event.target.value)} /></label>
      <label>Text<textarea value={text} onChange={event => setText(event.target.value)} /></label>
      <label>Number<input value={number} onChange={event => setNumber(event.target.value)} /></label>
      <label>Padding<input value={padding} onChange={event => setPadding(event.target.value)} /></label>
      <label><input type="checkbox" checked={showText} onChange={event => setShowText(event.target.checked)} /> Text valorizzato</label>
      <button type="button" onClick={() => setReplay(value => value + 1)}>Riproduci title reveal</button>
    </div>
    <div className="ds-process-controls__preview"><ProcessRow key={replay} title={title} text={showText ? text : undefined} number={number} padding={padding} /></div>
  </section>
}
