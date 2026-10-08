import type { CSSProperties } from 'react'
import { controlDefaults, typography } from '../styles/token'
import './CategoryLabel.css'

export type CategoryLabelProps = {
  title?: string
  backgroundColor?: CSSProperties['backgroundColor']
  textColor?: CSSProperties['color']
  /** Parent layout integration; not a design variant. */
  className?: string
}

// The original Black/White control references resolve to the current named colors.
// The single variant's spring metadata has no observable runtime transition.
export function CategoryLabel({
  title = 'Label',
  backgroundColor = controlDefaults.categoryLabel.bGColor.value,
  textColor = controlDefaults.categoryLabel.textColor.value,
  className,
}: CategoryLabelProps) {
  return (
    <div
      className={className ? `loruni-category-label ${className}` : 'loruni-category-label'}
      style={{ backgroundColor }}
    >
      <div className="loruni-category-label__text">
        <p
          className={typography.functionalCompactLabel.className}
          style={{ color: textColor }}
          dir="auto"
        >
          {title}
        </p>
      </div>
    </div>
  )
}
