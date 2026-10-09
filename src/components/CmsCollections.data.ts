import type { ProjectCardProps } from './ProjectCard'
import type { CommunityCardProps } from './CommunityCard'
import type { EventTestimonialContent } from './EventTestimonial'

/** Normalized input boundary; Framer field identifiers belong only to source captures. */
export type EventRecord = Pick<ProjectCardProps, 'image' | 'title' | 'text' | 'label1' | 'label2' | 'label3' | 'year'> & { slug: string; draft?: boolean; compactLabel?: string | null; testimonial?: EventTestimonialContent }
export type CommunityRecord = Pick<CommunityCardProps, 'image' | 'title' | 'subtitle'> & { slug: string; draft?: boolean }
export type CollectionInput<T> = readonly (T | null | undefined)[]

export function collectionItems<T extends { slug: string; draft?: boolean }>(items: CollectionInput<T>, excludeSlug?: string): T[] {
  const seen = new Set<string>()
  return items.filter((item): item is T => {
    if (!item || item.draft || !item.slug || item.slug === excludeSlug || seen.has(item.slug)) return false
    seen.add(item.slug)
    return true
  })
}
export function eventHref(slug: string) { return `/eventi/${encodeURIComponent(slug)}` }
export function communityHref(slug: string) { return `/community/${encodeURIComponent(slug)}` }
