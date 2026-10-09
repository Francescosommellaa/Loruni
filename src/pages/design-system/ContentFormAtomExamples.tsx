import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { FormField } from '../../components/FormField'
import { contactFields } from '../../components/FormField.data'
import { NavItem } from '../../components/NavItem'
import { ContentHeadline } from '../../components/ContentHeadline'
import { SplitContent } from '../../components/SplitContent'
import { StatRow } from '../../components/StatRow'
import { experienceStats } from './StatsExamples.data'
import { CategoryLabelGroup } from '../../components/CategoryLabelGroup'
import { CategoryLabel } from '../../components/CategoryLabel'
import { CommunityDetails } from '../../components/CommunityDetails'
import { ImageFill } from '../../components/ImageFill'
import { eventAtomExamples, communityDetailExamples } from './ContentFormAtomExamples.data'
import './ContentFormAtomExamples.css'

export function FormFieldsExample({ fixed = false }: { fixed?: boolean }) {
  return <div className="ds-content-atoms ds-content-atoms__fields">{contactFields.map(field => <FormField key={field.name} {...field} {...(field.type === 'textarea' ? { height: fixed ? 100 : 'auto' } as const : {})} />)}</div>
}
export function NavItemsExample() {
  const [clicks, setClicks] = useState(0)
  const [variant, setVariant] = useState<'Desktop' | 'Mobile' | 'Compact'>('Desktop')
  const [reduced, setReduced] = useState(false)
  return <MotionConfig reducedMotion={reduced ? 'always' : 'user'}><div className="ds-content-atoms">
    <div className="ds-content-atoms__controls"><label>Variant<select value={variant} onChange={event => setVariant(event.target.value as typeof variant)}><option>Desktop</option><option>Mobile</option><option>Compact</option></select></label></div>
    <label><input type="checkbox" checked={reduced} onChange={event => setReduced(event.target.checked)} /> Riduci movimento</label>
    <NavItem variant={variant} text="EVENTI" color="var(--color-neutral-950)" link="#ds-component-nav-item" onClick={() => setClicks(v => v + 1)} />
    <NavItem variant="Mobile" text="COMMUNITY" color="var(--color-neutral-950)" onClick={() => setClicks(v => v + 1)} />
    <NavItem variant="Compact" text="VIENI A TROVARCI" color="var(--color-neutral-950)" link="#ds-component-nav-item" newTab />
    <div className="ds-content-atoms__dark"><NavItem text="ESPERIENZA" color="var(--color-neutral-50)" link="#ds-component-nav-item" /></div>
    <div className="ds-content-atoms__dark"><NavItem /></div><output aria-live="polite">Click: {clicks}</output>
  </div></MotionConfig>
}
export function HeadlinesExample() {
  return <div className="ds-content-atoms">
    <ContentHeadline variant="labelled" label="Dentro LORUNI" title="Ci vediamo da LORUNI" color="var(--color-neutral-950)" />
    <ContentHeadline variant="labelled" label="Community" labelColor="var(--color-neutral-50)" title="Momenti da LORUNI" />
    <ContentHeadline variant="centered-large" title="Vita da LORUNI" />
    <ContentHeadline variant="centered" title="E le altre sere?" />
    <ContentHeadline variant="centered" title="Il diario continua" />
    <ContentHeadline variant="contact" title="Ci vediamo da LORUNI?" />
  </div>
}
export function SplitContentsExample() {
  const [index, setIndex] = useState(0)
  const event = eventAtomExamples[index] ?? eventAtomExamples[0]
  return <div className="ds-content-atoms"><label>Contenuto reale<select value={index} onChange={e => setIndex(Number(e.target.value))}>{eventAtomExamples.map((item, i) => <option key={item.slug} value={i}>{item.slug}</option>)}</select></label>{event.content.map(item => <SplitContent key={item.title} {...item} />)}</div>
}
export function StatRowsExample() {
  return <div className="ds-content-atoms ds-content-atoms__stats">{experienceStats.map(item => <StatRow key={item.id} number={item.value} text={item.label} caption={'labelStyle' in item ? item.labelStyle : undefined} />)}</div>
}
export function CategoryLabelsExample() {
  return <div className="ds-content-atoms"><CategoryLabelGroup>{eventAtomExamples[0].labels.map(title => <CategoryLabel key={title} title={title} backgroundColor="var(--color-neutral-bone-highlight)" textColor="var(--color-neutral-950)" />)}</CategoryLabelGroup></div>
}
export function CommunityDetailsExample() {
  const [index, setIndex] = useState(0)
  const [signature, setSignature] = useState(true)
  const [image, setImage] = useState(true)
  const [labels, setLabels] = useState(true)
  const detail = communityDetailExamples[index] ?? communityDetailExamples[0]
  return <div className="ds-content-atoms"><div className="ds-content-atoms__controls">
    <label>Contenuto<select value={index} onChange={e => setIndex(Number(e.target.value))}>{communityDetailExamples.map((item, i) => <option key={item.slug} value={i}>{item.slug}</option>)}</select></label>
    <label><input type="checkbox" checked={signature} onChange={e => setSignature(e.target.checked)} /> Firma valorizzata</label>
    <label><input type="checkbox" checked={image} onChange={e => setImage(e.target.checked)} /> Immagine valorizzata</label>
    <label><input type="checkbox" checked={labels} onChange={e => setLabels(e.target.checked)} /> Etichette valorizzate</label>
  </div><CommunityDetails {...detail} signature={signature ? detail.signature : undefined} image={image ? detail.image : undefined} labels={labels ? detail.labels : []} /></div>
}
export function ImageFillsExample() {
  return <div className="ds-content-atoms"><div className="ds-content-atoms__home-media"><ImageFill clip image="https://framerusercontent.com/images/GXDSjBUnxHYtD9KkH245SL839NY.png" /></div><div className="ds-content-atoms__experience-media"><ImageFill fit="contain" image="https://framerusercontent.com/images/f0ddKmNcyU2rlazLETFx8vM69U.svg" /></div></div>
}
