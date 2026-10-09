import { DemoControls } from './DemoControls'
import { useState, useSyncExternalStore } from 'react'
import { OurStoryCard, type OurStoryCardProps } from '../../components/OurStoryCard'
import { realCards } from './OurStoryCardExamples.data'
import './OurStoryCardExamples.css'



const desktopQuery = '(min-width: 810px)'
function subscribeViewport(listener: () => void) {
  const query = window.matchMedia(desktopQuery)
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
function desktopSnapshot() { return window.matchMedia(desktopQuery).matches }

/** Documentation consumer only: two real cards, not a port of Our Story Section. */
export function OurStoryRealCardsExample() {
  const desktop = useSyncExternalStore(subscribeViewport, desktopSnapshot, () => true)
  return <div className="ds-story-cards">
    {realCards.map(card => <OurStoryCard key={card.number} {...card} variant={desktop ? 'Desktop' : 'Mobile'} style={desktop ? undefined : { width: '100%' }} />)}
  </div>
}

export function OurStoryDefaultExample({ variant }: { variant: NonNullable<OurStoryCardProps['variant']> }) {
  return <div className="ds-story-cards"><OurStoryCard variant={variant} /></div>
}

export function OurStoryControlsExample() {
  const [variant, setVariant] = useState<NonNullable<OurStoryCardProps['variant']>>('Mobile')
  const [content, setContent] = useState<Required<Pick<OurStoryCardProps, 'cardTitle' | 'cardTextLeft' | 'cardTextRight' | 'number'>>>(realCards[0])
  return <div className="ds-story-controls">
    <DemoControls>
      <label className="ds-demo-field">Variante<select value={variant} onChange={event => setVariant(event.target.value as 'Desktop' | 'Mobile')}><option>Desktop</option><option>Mobile</option></select></label>
      <label className="ds-demo-field">Titolo<input value={content.cardTitle} onChange={event => setContent({ ...content, cardTitle: event.target.value })} /></label>
      <label className="ds-demo-field">Testo a sinistra<textarea value={content.cardTextLeft} onChange={event => setContent({ ...content, cardTextLeft: event.target.value })} /></label>
      <label className="ds-demo-field">Testo a destra<textarea value={content.cardTextRight} onChange={event => setContent({ ...content, cardTextRight: event.target.value })} /></label>
      <label className="ds-demo-field">Numero<input value={content.number} onChange={event => setContent({ ...content, number: event.target.value })} /></label>
      <button className="ds-demo-action" type="button" onClick={() => setContent(realCards[0])}>Al tavolo · Esperienza</button>
      <button className="ds-demo-action" type="button" onClick={() => setContent({ ...realCards[0], cardTitle: 'Sociologo · Traduzione italiana' })}>Default Our Story Section</button>
      <button className="ds-demo-action" type="button" onClick={() => setContent(realCards[1])}>Eventi · 03</button>
    </DemoControls>
    <div className="ds-story-cards"><OurStoryCard variant={variant} {...content} /></div>
  </div>
}
