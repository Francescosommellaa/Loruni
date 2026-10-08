import type { CSSProperties } from 'react'
import { typography } from '../styles/token'
import { CategoryLabel } from './CategoryLabel'
import { CategoryLabelGroup } from './CategoryLabelGroup'
import { CircularImage } from './CircularImage'
import './CommunityDetails.css'

export type CommunityDetailsProps = {
  signature?: string
  momentType?: string
  image?: string
  labels?: readonly [string?, string?, string?, string?]
  className?: string
  style?: CSSProperties
}
export function CommunityDetails({ signature, momentType, image, labels = [], className, style }: CommunityDetailsProps) {
  return <div className={['loruni-community-details', className].filter(Boolean).join(' ')} style={style}>
    {signature && <div className="loruni-community-details__person">
      {image && <CircularImage src={image} size={64} />}
      <div className="loruni-community-details__identity">
        <p className={typography.headline16.className}>{signature}</p>
        {momentType && <p className={`${typography.headline16.className} loruni-community-details__role`}>{momentType}</p>}
      </div>
    </div>}
    <CategoryLabelGroup wrap="phone">{labels.map((title, i) => title ? <CategoryLabel key={i} title={title} backgroundColor="var(--color-neutral-50)" textColor="var(--color-neutral-950)" /> : null)}</CategoryLabelGroup>
  </div>
}
