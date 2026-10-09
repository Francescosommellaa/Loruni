import { useState, type CSSProperties, type ComponentPropsWithRef } from 'react'
import { ProjectCard } from './ProjectCard'
import { CommunityCard } from './CommunityCard'
import { LoadMore } from './LoadMore'
import { collectionItems, eventHref, communityHref, type CollectionInput, type EventRecord, type CommunityRecord } from './CmsCollections.data'
import { useSiteBreakpoint } from '../motion/useSiteBreakpoint'
import './CmsCollections.css'

export type CollectionPagination = { loading: boolean; hasMore: boolean; onLoadMore: () => void }
type CollectionLayout = Pick<ComponentPropsWithRef<'div'>, 'id' | 'className' | 'style' | 'ref'>
type ListProps<T> = CollectionLayout & { items: CollectionInput<T>; pagination?: CollectionPagination }
export type EventCardSlotProps = CollectionLayout & { items: CollectionInput<EventRecord>; offset?: number; cardStyle?: CSSProperties }

/** Native wrapper/ref is available to the future Home scene; this adapter writes no transforms. */
export function EventCardSlot({ items, offset = 0, cardStyle, className, ...native }: EventCardSlotProps) {
  const breakpoint = useSiteBreakpoint()
  const item = collectionItems(items)[Math.max(0, Math.trunc(offset) || 0)]
  if (!item) return null
  return <div {...native} className={['loruni-event-slot', className].filter(Boolean).join(' ')}>
    <a className="loruni-cms-card-link" href={eventHref(item.slug)}><ProjectCard image={item.image ?? ''} title={item.title ?? ''} text={item.text ?? ''} label1={breakpoint !== 'desktop' && item.compactLabel !== undefined ? item.compactLabel : item.label1} label2={item.label2} label3={item.label3} year={item.year ?? ''} mode="main" style={cardStyle} /></a>
  </div>
}

function usePagination<T extends { slug: string }>(items: T[], external?: CollectionPagination) {
  const [count, setCount] = useState(12)
  // Reset pagination on collection identity/order changes, not unrelated parent renders.
  const signature = items.map(item => item.slug).join('\u0000')
  const [previous, setPrevious] = useState(signature)
  const visibleCount = previous === signature ? count : 12
  if (previous !== signature) { setPrevious(signature); setCount(12) }
  return { shown: external ? items : items.slice(0, visibleCount), controls: external ?? { loading: false, hasMore: items.length > visibleCount, onLoadMore: () => setCount(value => value + 12) } }
}

export type EventCollectionProps = ListProps<EventRecord> & { mode: 'remaining' | 'related'; currentSlug?: string }
export function EventCollection({ items, mode, currentSlug, pagination, className, ...native }: EventCollectionProps) {
  const breakpoint = useSiteBreakpoint()
  const selected = collectionItems(items, mode === 'related' ? currentSlug : undefined).slice(mode === 'remaining' ? 1 : 0)
  const paginated = usePagination(selected, pagination)
  const shown = mode === 'related' ? selected.slice(0, breakpoint === 'phone' ? 4 : 6) : paginated.shown
  if (!shown.length) return null
  return <div {...native} className={['loruni-cms-list', 'loruni-cms-events', className].filter(Boolean).join(' ')} data-mode={mode}>
    <div className="loruni-cms-list__grid">{shown.map(item => <a key={item.slug} className="loruni-cms-card-link" href={eventHref(item.slug)}><ProjectCard image={item.image ?? ''} title={item.title ?? ''} text={item.text ?? ''} label1={breakpoint !== 'desktop' && item.compactLabel !== undefined ? item.compactLabel : item.label1} label2={item.label2} label3={item.label3} year={item.year ?? ''} mode="inner" /></a>)}</div>
    {mode === 'remaining' && <LoadMore {...paginated.controls} className="loruni-cms-list__more" />}
  </div>
}

export type CommunityCollectionProps = ListProps<CommunityRecord> & { mode: 'preview' | 'all' | 'related'; currentSlug?: string }
export function CommunityCollection({ items, mode, currentSlug, pagination, className, ...native }: CommunityCollectionProps) {
  const breakpoint = useSiteBreakpoint()
  const selected = collectionItems(items, mode === 'related' ? currentSlug : undefined)
  const paginated = usePagination(selected, pagination)
  const shown = mode === 'all' ? paginated.shown : selected.slice(0, mode === 'preview' && breakpoint === 'phone' ? 3 : 4)
  if (!shown.length) return null
  return <div {...native} className={['loruni-cms-list', 'loruni-cms-community', className].filter(Boolean).join(' ')} data-mode={mode} data-has-more={mode === 'all' ? paginated.controls.hasMore : undefined}>
    <div className="loruni-cms-list__grid">{shown.map(item => <a key={item.slug} className="loruni-cms-card-link" href={communityHref(item.slug)}><CommunityCard image={item.image} title={item.title ?? ''} subtitle={item.subtitle ?? ''} h3={mode !== 'all'} /></a>)}</div>
    {mode === 'all' && <LoadMore {...paginated.controls} className="loruni-cms-list__more" />}
  </div>
}
