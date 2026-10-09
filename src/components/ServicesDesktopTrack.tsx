import type { ComponentPropsWithRef } from 'react'
import { Label } from './Label'
import { ServiceCard, type ServiceCardProps } from './ServiceCard'
import { colors, typography } from '../styles/token'
import './ServicesDesktopTrack.css'

export type ServicesDesktopTrackItem = Omit<ServiceCardProps, 'id' | 'className' | 'style'> & {
  /** Consumer-owned, unique DOM scroll target and stable React key. */
  id: string
  active?: boolean
}

export type ServicesDesktopTrackProps = Omit<ComponentPropsWithRef<'div'>, 'children' | 'title'> & {
  label: string
  title: string
  items: readonly (ServicesDesktopTrackItem | null | undefined)[]
}

/** Static Desktop/Tablet content. The parent selects breakpoints and owns transport/clipping. */
export function ServicesDesktopTrack({ label, title, items, className, ...props }: ServicesDesktopTrackProps) {
  return <div {...props} className={['loruni-services-desktop-track', className].filter(Boolean).join(' ')}>
    <div className="loruni-services-desktop-track__intro">
      <Label title={label} color={colors.neutral50.light} />
      <h2 className={typography.headline180.className} dir="auto">{title}</h2>
    </div>
    {items.map(item => {
      if (item == null || item.active === false) return null
      const { active: _active, ...card } = item
      return <ServiceCard key={card.id} {...card} />
    })}
  </div>
}
