import { DemoControls } from './DemoControls'
import { useState } from 'react'
import { TheStoryTrack, type TheStoryTrackProps } from '../../components/TheStoryTrack'
import { realCards } from './OurStoryCardExamples.data'
import './TheStoryTrackExamples.css'

// The existing Esperienza cards stay the single catalog content dataset.
const story: Pick<TheStoryTrackProps, 'label' | 'title' | 'image' | 'firstCard' | 'quote' | 'secondCard'> = {
  label: 'Dentro il bar', title: 'Il tavolo si allunga.',
  image: 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?width=1536&height=1024',
  firstCard: realCards[0], secondCard: realCards[1],
  quote: '      Giocare è il tentativo volontario di superare ostacoli non necessari. — Bernard Suits · Traduzione italiana',
}

export function TheStoryTrackExample() {
  return <div className="ds-the-story-viewport" tabIndex={0} role="region" aria-label="The story, scorrimento orizzontale manuale">
    <TheStoryTrack {...story} />
  </div>
}

export function TheStoryTrackControls({ comparison = false }: { comparison?: boolean }) {
  const params = new URLSearchParams(window.location.search)
  const [title, setTitle] = useState(story.title)
  const [quote, setQuote] = useState(story.quote)
  const [content, setContent] = useState(params.get('content') === 'canvas' ? 'canvas' : 'esperienza')
  const [display, setDisplay] = useState('viewport')
  const [height, setHeight] = useState(1080)
  const [width, setWidth] = useState(1200)
  const firstCard = { ...story.firstCard, ...(content === 'canvas' ? { cardTitle: 'Sociologo · Traduzione italiana' } : {}),
    ...(content === 'long' ? { cardTitle: 'Una sedia in più al tavolo', cardTextLeft: `${realCards[0].cardTextLeft}\n${realCards[0].cardTextLeft}` } : {}) }
  const body = <div className="ds-the-story-demo">
    <DemoControls>
      <label className="ds-demo-field">Titolo<input value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label className="ds-demo-field">Citazione<textarea value={quote} onChange={e => setQuote(e.target.value)} /></label>
      <label className="ds-demo-field">Contenuto<select value={content} onChange={e => setContent(e.target.value)}><option value="esperienza">Esperienza</option><option value="canvas">Default canvas</option><option value="long">Testo lungo</option><option value="no-image">Immagine assente</option></select></label>
      <label className="ds-demo-field">Presentazione<select value={display} onChange={e => setDisplay(e.target.value)}><option value="viewport">Viewport overflow esterno</option><option value="standalone">Standalone</option></select></label>
      <label className="ds-demo-field">Altezza<input type="number" min="600" value={height} onChange={e => setHeight(Number(e.target.value))} /></label>
      <label className="ds-demo-field">Viewport<input type="number" min="810" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
    </DemoControls>
    <div className={display === 'viewport' ? 'ds-the-story-viewport' : 'ds-the-story-standalone'} style={{ width }}
      tabIndex={display === 'viewport' ? 0 : undefined} role={display === 'viewport' ? 'region' : undefined}
      aria-label={display === 'viewport' ? 'Viewport The story, scorrimento manuale' : undefined}>
      <TheStoryTrack {...story} title={title} quote={quote} firstCard={firstCard} image={content === 'no-image' ? undefined : story.image} style={{ height }} />
    </div>
  </div>
  return comparison ? <main className="ds-the-story-comparison">{body}</main> : body
}

/** Real viewport resize sandbox belongs exclusively to the documentation consumer. */
export function TheStoryTrackFrame() {
  const [width, setWidth] = useState(1200)
  return <div><label className="ds-demo-field">Browser Desktop/Tablet<input type="range" min="810" max="1440" value={width} onChange={e => setWidth(Number(e.target.value))} /></label>
    <output>{width}px</output><div className="ds-the-story-frame-scroll">
      <iframe title="The Story Track · viewport reale" width={width} height={1350} src="/design-system?fixture=the-story-track" />
    </div></div>
}
