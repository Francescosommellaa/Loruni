import type { CSSProperties } from 'react'

/** CSS representation of Framer's extended font control; no preset/family is imposed. */
export type TextFont = Pick<CSSProperties,
  'fontFamily' | 'fontSize' | 'fontWeight' | 'fontStyle' | 'fontStretch' |
  'lineHeight' | 'letterSpacing' | 'textAlign' | 'fontVariationSettings' |
  'fontFeatureSettings' | 'fontKerning' | 'fontVariant' | 'textTransform'>
