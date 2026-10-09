import { DemoControls } from './DemoControls'
import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { HeroFittedHeadline } from '../../components/HeroFittedHeadline'
import { LabelledStaggerHeadline } from '../../components/LabelledStaggerHeadline'
import { ContentHeadline } from '../../components/ContentHeadline'
import { SplitContent } from '../../components/SplitContent'
import { Button } from '../../components/Button'
import { useSiteBreakpoint } from '../../motion/useSiteBreakpoint'
import { eventAtomExamples } from './ContentFormAtomExamples.data'
import './HeadlineSectionsExamples.css'

// Consumer copy from the current source. Whitespace is content, not formatting.
const homeHero = { text: 'CI VEDIAMO\n      DA LORUNI', phoneText: 'CI\nVEDIAMO\n  DA\n     LORUNI' }
const homeProcess = {
  label: 'La serata',
  text: '      Avevi detto un drink e via. Poi qualcuno tira fuori le carte. Al tavolo accanto manca un giocatore. Ti siedi, chiedi le regole, sbagli la prima mano. Intanto parte un pezzo che conosci. Guardi l’ora. Non era quella che pensavi.',
  phoneText: '               Avevi detto un drink e via. Poi spuntano le carte. Al tavolo accanto manca un giocatore. Ti siedi. Sbagli la prima mano. Guardi l’ora. Non era quella che pensavi.',
}
const cases = [
  ['hero', 'Home · Hero'], ['process', 'Home · La serata'], ['home-section', 'Home · Dentro LORUNI'],
  ['experience-section', 'Esperienza · Dentro LORUNI'], ['community-section', 'Esperienza · Community'],
  ['event-first', 'Evento · Section 1'], ['event-second', 'Evento · Section 2'],
  ['event-related', 'Evento · E le altre sere?'], ['community-page', 'Community · Vita da LORUNI'],
  ['community-related', 'Community dettaglio · Il diario continua'], ['contact', 'Template live · contatto'],
] as const
type HeadlineCase = typeof cases[number][0]

/** Documentary consumers reproduce allocation only; product pages remain separate. */
export function HeadlineSectionsExample({ initial = 'hero', comparison = false }: { initial?: HeadlineCase; comparison?: boolean }) {
  const query = new URLSearchParams(window.location.search)
  const [selected, setSelected] = useState<HeadlineCase>((comparison ? query.get('case') as HeadlineCase : undefined) ?? initial)
  const [eventIndex, setEventIndex] = useState(0)
  const [long, setLong] = useState(false)
  const [availabilityOverride, setAvailable] = useState<boolean>()
  const [overrideTitle, setTitle] = useState<string>()
  const [overrideText, setText] = useState<string>()
  const [reduced, setReduced] = useState(false)
  const breakpoint = useSiteBreakpoint()
  const event = eventAtomExamples[eventIndex] ?? eventAtomExamples[0]
  const content = event.content[selected === 'event-second' ? 1 : 0]
  const available = availabilityOverride ?? event.sectionEnabled[selected === 'event-second' ? 1 : 0]
  const title = overrideTitle ?? (long ? Array(4).fill(content.title).join(' ') : content.title)
  const text = overrideText ?? (long ? Array(4).fill(content.text).join(' ') : content.text)
  const controls = <DemoControls>
    <label className="ds-demo-field">Composizione<select value={selected} onChange={e => { setSelected(e.target.value as HeadlineCase); setTitle(undefined); setText(undefined); setAvailable(undefined) }}>{cases.map(([key, name]) => <option value={key} key={key}>{name}</option>)}</select></label>
    <label className="ds-demo-field">Evento<select value={eventIndex} onChange={e => { setEventIndex(Number(e.target.value)); setTitle(undefined); setText(undefined); setAvailable(undefined) }}>{eventAtomExamples.map((item, i) => <option value={i} key={item.slug}>{item.slug}</option>)}</select></label>
    <label className="ds-demo-field"><input type="checkbox" checked={long} onChange={e => setLong(e.target.checked)} /> Testo lungo</label>
    <label className="ds-demo-field"><input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} /> Mostra sezione</label>
    <label className="ds-demo-field"><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} /> Riduci movimento</label>
    <label className="ds-demo-field">Titolo<textarea value={title} onChange={e => setTitle(e.target.value)} /></label>
    <label className="ds-demo-field">Testo<textarea value={text} onChange={e => setText(e.target.value)} /></label>
  </DemoControls>
  let specimen
  if (selected === 'hero') specimen = <div className="ds-headline-hero">
    <HeroFittedHeadline {...homeHero} />
    <Button className="ds-headline-hero__button" variant={breakpoint === 'phone' ? 'Primary Mobile' : 'Primary'} text="VEDI LE SERATE" link="/eventi" />
  </div>
  else if (selected === 'process') specimen = <div className="ds-headline-section ds-headline-process"><LabelledStaggerHeadline {...homeProcess} /></div>
  else if (selected === 'home-section' || selected === 'experience-section') specimen = <div className={`ds-headline-section ds-headline-light ${selected === 'experience-section' ? 'ds-headline-experience' : ''}`}><ContentHeadline variant="labelled" label="Dentro LORUNI" title="Ci vediamo da LORUNI" color={comparison ? 'var(--color-neutral-950)' : 'var(--color-neutral-50)'} /></div>
  else if (selected === 'community-section') specimen = <div className="ds-headline-section"><ContentHeadline variant="labelled" label="Community" labelColor="var(--color-neutral-50)" title="Momenti da LORUNI" /></div>
  else if (selected === 'event-first' || selected === 'event-second') specimen = <div className="ds-headline-event-allocation">{available && <SplitContent title={title} text={text} titleMaxWidth={content.titleMaxWidth} />}</div>
  else if (selected === 'contact') specimen = <div className="ds-headline-contact"><div className="ds-headline-contact__content"><ContentHeadline variant="contact" title="Ci vediamo da LORUNI?" /><div className="ds-headline-contact__sibling" aria-hidden="true" /></div></div>
  else specimen = <div className={selected === 'community-page' ? 'ds-headline-page' : selected === 'event-related' ? 'ds-headline-event-allocation' : 'ds-headline-community-allocation'}><ContentHeadline variant={selected === 'community-page' ? 'centered-large' : 'centered'} title={selected === 'community-page' ? 'Vita da LORUNI' : selected === 'event-related' ? 'E le altre sere?' : 'Il diario continua'} /></div>
  return <div className={comparison ? 'ds-headline-comparison' : 'ds-headline-example'}>
    {!comparison && controls}
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}><div data-headline-case={selected}>{specimen}</div></MotionConfig>
    {comparison && controls}
  </div>
}

/** A real iframe viewport exercises composition breakpoints during continuous drag. */
export function HeadlineSectionsFrame() {
  const [width, setWidth] = useState(1200)
  const [selected, setSelected] = useState<HeadlineCase>('hero')
  return <div>
    <DemoControls><label className="ds-demo-field">Viewport headline<input aria-label="Viewport headline" type="range" min="320" max="1600" value={width} onChange={e => setWidth(Number(e.target.value))} /></label><output>{width}px</output><label className="ds-demo-field">Headline nel frame<select value={selected} onChange={e => setSelected(e.target.value as HeadlineCase)}>{cases.map(([key, name]) => <option value={key} key={key}>{name}</option>)}</select></label></DemoControls>
    <div className="ds-headline-frame"><iframe title="Headline responsive" style={{ width }} src={`/design-system?fixture=headline-sections&case=${selected}`} /></div>
  </div>
}
