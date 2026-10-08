import { useState, type MouseEventHandler } from 'react'
import { Icon } from './Icon'
import './FaqIcon.css'

export type FaqIconProps = {
  variant?: 'Plus' | 'Minus'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  /** The consumer may supply the action's accessible name. */
  'aria-label'?: string
  /** Passive composition inside a larger native control; preserves the same glyph. */
  decorative?: boolean
}

export function FaqIcon({ variant = 'Plus', onClick, className, 'aria-label': label, decorative = false }: FaqIconProps) {
  // The native SVG retains its last Minus target when Plus has no rotate override.
  // Current Motion resets omitted targets, so preserve that source behavior explicitly.
  const [hasEnteredMinus, setHasEnteredMinus] = useState(variant === 'Minus')
  if (!decorative && variant === 'Minus' && !hasEnteredMinus) setHasEnteredMinus(true)

  if (decorative) return <span className={className ? `loruni-faq-icon ${className}` : 'loruni-faq-icon'}
    data-variant={variant} aria-hidden="true">
    {/* Current embedded source resets to Plus when the FAQ row closes. */}
    <Icon name="faq" className="loruni-faq-icon__frame" barRotation={variant === 'Minus' ? 90 : 0} />
  </span>

  return (
    <button
      type="button"
      className={className ? `loruni-faq-icon ${className}` : 'loruni-faq-icon'}
      data-variant={variant}
      aria-label={label ?? variant}
      onClick={onClick}
    >
      <Icon name="faq" className="loruni-faq-icon__frame" barRotation={hasEnteredMinus ? 90 : 0} />
    </button>
  )
}
