import { useState, type MouseEventHandler } from 'react'
import { Icon } from './Icon'
import './FaqIcon.css'

export type FaqIconProps = {
  variant?: 'Plus' | 'Minus'
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  /** The consumer may supply the action's accessible name. */
  'aria-label'?: string
}

export function FaqIcon({ variant = 'Plus', onClick, className, 'aria-label': label }: FaqIconProps) {
  // The native SVG retains its last Minus target when Plus has no rotate override.
  // Current Motion resets omitted targets, so preserve that source behavior explicitly.
  const [hasEnteredMinus, setHasEnteredMinus] = useState(variant === 'Minus')
  if (variant === 'Minus' && !hasEnteredMinus) setHasEnteredMinus(true)

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
