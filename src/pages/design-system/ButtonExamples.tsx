import { useState } from 'react'
import { Button, type ButtonVariant } from '../../components/Button'

/** Documentation controls only; Button does not resolve CMS or pick breakpoints. */
export function ButtonControlsExample() {
  const [variant, setVariant] = useState<ButtonVariant>('Primary')
  const [text, setText] = useState('VEDI LE SERATE')
  const [link, setLink] = useState('/design-system#ds-component-button')
  const [newTab, setNewTab] = useState(false)
  return <div>
    <p><label>Variant <select value={variant} onChange={event => setVariant(event.target.value as ButtonVariant)}>
      <option>Primary</option><option>Secondary</option><option>Primary Mobile</option>
    </select></label></p>
    <p><label>Text <input value={text} onChange={event => setText(event.target.value)} /></label></p>
    <p><label>Link <input value={link} onChange={event => setLink(event.target.value)} /></label></p>
    <p><label><input type="checkbox" checked={newTab} onChange={event => setNewTab(event.target.checked)} /> New Tab</label></p>
    <div style={{ overflowX: 'auto', padding: '8px' }}><Button variant={variant} text={text} link={link || undefined} newTab={newTab} /></div>
  </div>
}

