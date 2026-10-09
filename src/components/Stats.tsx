import type { ComponentPropsWithRef } from 'react'
import { StatRow, type StatRowProps } from './StatRow'
import './Stats.css'

export type StatsItem = {
  id?: string
  value: string
  label: string
  labelStyle?: StatRowProps['caption']
}
export type StatsProps = Omit<ComponentPropsWithRef<'section'>, 'children'> & {
  items: readonly StatsItem[]
}

/** Static content: one canonical StatRow renderer, with page-owned data. */
export function Stats({ items, className, ...props }: StatsProps) {
  return <section {...props} className={['loruni-stats', className].filter(Boolean).join(' ')}>
    {items.map((item, index) => <StatRow key={item.id ?? `${index}:${item.value}:${item.label}`}
      number={item.value} text={item.label} caption={item.labelStyle} />)}
  </section>
}
