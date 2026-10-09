import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { EventTestimonial } from '../../components/EventTestimonial'
import { EventCardSlot, EventCollection, CommunityCollection } from '../../components/CmsCollections'
import { currentEvents, currentCommunity } from './CurrentCms.data'
import './SessionFinalExamples.css'

export function EventTestimonialExample({ comparison = false }: { comparison?: boolean }) {
  const [index, setIndex] = useState(0)
  const [empty, setEmpty] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [long, setLong] = useState(false)
  const item = currentEvents[index]!.testimonial!
  return <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
    <div className={comparison ? 'ds-event-testimonial-comparison' : 'ds-event-testimonial-example'}>
      <div className="ds-session-final-controls"><label>Evento<select value={index} onChange={e => setIndex(Number(e.target.value))}>{currentEvents.map((event, i) => <option key={event.slug} value={i}>{event.title}</option>)}</select></label>
        <label><input type="checkbox" checked={empty} onChange={e => setEmpty(e.target.checked)} />Quote vuota</label>
        <label><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} />Reduced motion</label>
        <label><input type="checkbox" checked={long} onChange={e => setLong(e.target.checked)} />Quote lunga · prova dinamica</label>
      </div>
      <div className="ds-event-testimonial-allocation"><EventTestimonial key={currentEvents[index]!.slug} {...item} quote={empty ? '' : long ? `${item.quote}\n${item.quote}\n${item.quote}` : item.quote} /></div>
    </div>
  </MotionConfig>
}

export function CmsCollectionsExample({ comparison = false, initial = 'events' }: { comparison?: boolean; initial?: string }) {
  const [scenario, setScenario] = useState(initial)
  const [empty, setEmpty] = useState(false)
  const [count, setCount] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [missing, setMissing] = useState(false)
  const events = empty ? [] : count ? Array.from({ length: 25 }, (_, i) => ({ ...currentEvents[i % 5]!, slug: `fixture-event-${i}` })) : missing ? [null, { ...currentEvents[0]!, image: undefined, compactLabel: undefined, label1: undefined, label2: undefined, label3: undefined }, undefined] : currentEvents
  const community = empty ? [] : count ? Array.from({ length: 25 }, (_, i) => ({ ...currentCommunity[i % 4], slug: `fixture-community-${i}` })) : missing ? [null, { ...currentCommunity[0], image: undefined }, undefined] : currentCommunity
  const external = loading ? { loading: !loaded, hasMore: !loaded, onLoadMore: () => setLoaded(true) } : undefined
  return <div className={comparison ? 'ds-cms-comparison' : 'ds-cms-example'}>
    <div className="ds-session-final-controls"><label>Consumer<select value={scenario} onChange={e => setScenario(e.target.value)}>
      <option value="home">Home · quattro target</option><option value="featured">Eventi · primo evento</option><option value="events">Eventi · lista restante</option><option value="related-events">Evento · correlati</option><option value="preview">Esperienza / visita · Community</option><option value="community">Community · lista</option><option value="related-community">Community · correlati</option>
    </select></label><label><input type="checkbox" checked={empty} onChange={e => setEmpty(e.target.checked)} />CMS vuoto</label>
    <label><input type="checkbox" checked={count} onChange={e => setCount(e.target.checked)} />25 item sintetici · pagination</label>
    <label><input type="checkbox" checked={loading} onChange={e => { setLoading(e.target.checked); setLoaded(false) }} />Loading esterno</label>
    <label><input type="checkbox" checked={missing} onChange={e => setMissing(e.target.checked)} />Un item · image e labels mancanti</label>
    {loading && <button type="button" onClick={() => setLoaded(true)}>Completa caricamento</button>}</div>
    <div className="ds-cms-allocation">
      {scenario === 'home' && [0, 1, 2, 3].map(offset => <EventCardSlot key={offset} items={events} offset={offset} id={offset ? `project-${offset + 1}` : undefined} cardStyle={{ height: '100vh' }} />)}
      {scenario === 'featured' && <EventCardSlot items={events} />}
      {scenario === 'events' && <EventCollection items={events} mode="remaining" pagination={external} />}
      {scenario === 'related-events' && <EventCollection items={events} mode="related" currentSlug={currentEvents[0]!.slug} />}
      {scenario === 'preview' && <CommunityCollection items={community} mode="preview" />}
      {scenario === 'community' && <CommunityCollection items={community} mode="all" pagination={external} />}
      {scenario === 'related-community' && <CommunityCollection items={community} mode="related" currentSlug={currentCommunity[0].slug} />}
    </div>
  </div>
}
