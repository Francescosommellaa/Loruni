import { useSyncExternalStore, type CSSProperties } from 'react'
import { ImageParallax } from './ImageParallax'
import type { ImageFillImage } from './ImageFill'
import { CategoryLabel } from './CategoryLabel'
import { Divider } from './Divider'
import { breakpoints, colors, primitive, typography } from '../styles/token'
import './ServiceCard.css'

export type ServiceCardProps = {
  image?: ImageFillImage
  title?: string
  text?: string
  number?: string
  labels?: readonly (string | null | undefined)[]
  price?: string | null
  /** Parent-owned scroll target and allocation, without section orchestration. */
  id?: string
  className?: string
  style?: CSSProperties
}

function subscribePhone(listener: () => void) {
  const query = window.matchMedia(breakpoints.phone)
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
function phoneSnapshot() { return window.matchMedia(breakpoints.phone).matches }
function serverSnapshot() { return false }

export function ServiceCard({ image = 'https://framerusercontent.com/images/AZDsREBLxvrKisXZuBrgmhaucg.png',
  title = 'Al tavolo', text = 'Una sedia si sposta. Qualcuno chiede se può giocare. Il tavolo si allunga e il discorso continua tra un turno e l’altro.',
  number = '01', labels = [], price = 'Insieme', id, className, style }: ServiceCardProps) {
  const phone = useSyncExternalStore(subscribePhone, phoneSnapshot, serverSnapshot)
  // Six source slots: empty entries disappear without renumbering later slots.
  const visibleLabels = labels.slice(0, 6).filter((label): label is string => label != null && label !== '')
  const x = Number(primitive.controlParallaxX.serviceCardDeskopImageContainerImageParallax.value)
  const y = Number(primitive.controlParallaxY.serviceCardMobileImageContainerImageParallax.value)
  return <div id={id} className={['loruni-service-card', className].filter(Boolean).join(' ')} style={style}>
    <div className="loruni-service-card__media">
      <ImageParallax image={image} parallaxX={phone ? 0 : x} parallaxY={phone ? y : 0} />
    </div>
    <div className="loruni-service-card__content">
      <div className="loruni-service-card__headline">
        <h3 className={typography.headline76.className} dir="auto">{title}</h3>
        <Divider color={colors.brandPrimary.light} />
      </div>
      {visibleLabels.length > 0 && <div className="loruni-service-card__labels">
        {visibleLabels.map((label, index) => <CategoryLabel key={index} title={label}
          backgroundColor={colors.neutral50.light} textColor={colors.neutral950.light} />)}
      </div>}
      <div className="loruni-service-card__description"><p className={typography.text32P.className} dir="auto">{text}</p></div>
      <div className="loruni-service-card__bottom">
        {price != null && price !== '' && <div className="loruni-service-card__price">
          <h3 className={typography.headline16.className}>Da vivere</h3>
          <h3 className={typography.headline32.className} dir="auto">{price}</h3>
        </div>}
        <div className="loruni-service-card__number"><h2 className={typography.headline180.className} dir="auto">{number}</h2></div>
      </div>
    </div>
  </div>
}
