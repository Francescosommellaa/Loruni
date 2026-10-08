import type { CSSProperties, ReactNode } from 'react'
import './CategoryLabelGroup.css'

export type CategoryLabelGroupProps = { children: ReactNode; wrap?: true | 'phone'; className?: string; style?: CSSProperties }
export function CategoryLabelGroup({ children, wrap = true, className, style }: CategoryLabelGroupProps) {
  return <div className={['loruni-category-label-group', className].filter(Boolean).join(' ')} data-wrap={wrap === true ? 'always' : 'phone'} style={style}>{children}</div>
}
