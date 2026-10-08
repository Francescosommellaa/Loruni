import type { CSSProperties } from 'react'
import { colors, typography } from '../styles/token'
import './Label.css'

export type LabelProps = {
  title?: string
  color?: CSSProperties['color']
  /** Parent layout integration; not a design variant. */
  className?: string
}

// Misc/Label has one native variant and only the title/color content controls.
// Its spring-duration 0.4s 0.2 0s is editor metadata: no runtime state changes.
export function Label({
  title = 'Intro',
  color = `var(${colors.neutral50.cssVariable})`,
  className,
}: LabelProps) {
  return (
    <div className={className ? `loruni-label ${className}` : 'loruni-label'}>
      <div className="loruni-label__container" aria-hidden="true">
        <div className="loruni-label__divider" />
      </div>
      <div className="loruni-label__text">
        <p className={typography.functionalCompactLabel.className} style={{ color }}>
          {title}
        </p>
      </div>
    </div>
  )
}
