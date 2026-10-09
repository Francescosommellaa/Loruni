import { useState } from 'react'
import { Button, type ButtonVariant } from '../../components/Button'
import { useSiteBreakpoint } from '../../motion/useSiteBreakpoint'
import { DemoControls } from './DemoControls'

/** Documentation controls only; Button does not resolve CMS or pick breakpoints. */
export function ButtonControlsExample() {
  const breakpoint = useSiteBreakpoint()
  const [variant, setVariant] = useState<ButtonVariant | 'auto'>('auto')
  const [text, setText] = useState('VEDI LE SERATE')
  const [link, setLink] = useState('/design-system#ds-component-button')
  const [newTab, setNewTab] = useState(false)
  return <div>
    <DemoControls>
    <label className="ds-demo-field">Variante <select value={variant} onChange={event => setVariant(event.target.value as ButtonVariant | 'auto')}>
      <option value="auto">Adatta alla finestra</option>
      <option>Primary</option><option>Secondary</option><option>Primary Mobile</option>
    </select></label>
    <label className="ds-demo-field">Testo <input value={text} onChange={event => setText(event.target.value)} /></label>
    <label className="ds-demo-field">Destinazione <input value={link} onChange={event => setLink(event.target.value)} /></label>
    <label className="ds-demo-field"><input type="checkbox" checked={newTab} onChange={event => setNewTab(event.target.checked)} /> Apri in una nuova scheda</label>
    </DemoControls>
    <div style={{ overflowX: 'auto', padding: '8px' }}><Button variant={variant === 'auto' ? breakpoint === 'phone' ? 'Primary Mobile' : 'Primary' : variant} text={text} link={link || undefined} newTab={newTab} /></div>
  </div>
}

