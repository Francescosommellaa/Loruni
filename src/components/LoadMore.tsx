import { type ButtonHTMLAttributes } from 'react'
import { colors, typography } from '../styles/token'
import { Icon } from './Icon'
import './LoadMore.css'

export type LoadMoreProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'dangerouslySetInnerHTML' | 'type' | 'disabled' | 'onClick' | 'aria-busy' | 'aria-label'> & {
  loading?: boolean
  hasMore: boolean
  onLoadMore: () => void
}

/** Controlled pagination UI. The list owner supplies availability and pending state. */
export function LoadMore({ loading = false, hasMore, onLoadMore, className, ...native }: LoadMoreProps) {
  if (!hasMore) return null
  return <button {...native} type="button" disabled={loading} aria-busy={loading} aria-label="MOSTRA ALTRO"
    className={['loruni-load-more', className].filter(Boolean).join(' ')} data-state={loading ? 'Loading' : 'Default'}
    onClick={() => { if (!loading && hasMore) onLoadMore() }}>
    {loading ? <Icon name="load-more-spinner" />
      : <span className={typography.functional16.className} style={{ color: `var(${colors.neutral950.cssVariable})` }}>MOSTRA ALTRO</span>}
  </button>
}
