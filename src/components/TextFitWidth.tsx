import { useMemo, useRef, useState, type CSSProperties } from 'react'
import type { TextFont } from './TextFont'
import { useTextMeasurement } from '../motion/useTextMeasurement'

export type TextFitWidthProps = {
  text?: string
  font?: TextFont
  text1?: string
  background?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  style?: CSSProperties
}

/** Original longest preformatted line fitting, including every intentional space. */
export function TextFitWidth({ text = 'SYSTEM FOR\nBRANDS TO GROW', font, text1 = '#1A1917', background = 'transparent', align = 'left', className, style }: TextFitWidthProps) {
  const root = useRef<HTMLDivElement>(null)
  const measure = useRef<HTMLDivElement>(null)
  const [fontSize, setFontSize] = useState(16)
  const lines = useMemo(() => text.split('\n'), [text])
  const fontStyle = { ...font, fontFamily: font?.fontFamily || 'var(--font-funnel-display)', lineHeight: font?.lineHeight ?? 1, textAlign: align }
  useTextMeasurement(root, () => {
    const width = root.current?.clientWidth ?? 0
    if (!measure.current || width <= 0) return
    let low = 1, high = 2000, best = 1
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      measure.current.style.fontSize = `${mid}px`
      if (measure.current.scrollWidth <= width - 2) { best = mid; low = mid + 1 }
      else high = mid - 1
    }
    setFontSize(previous => previous === best ? previous : best)
  }, JSON.stringify([text, font, align, style]))
  return <div ref={root} className={className ? `loruni-text-fit ${className}` : 'loruni-text-fit'} style={{ width: '100%', height: '100%', ...style, background, display: 'flex', alignItems: 'center', overflow: 'visible' }}>
    <div data-text-fit-content style={{ ...fontStyle, width: '100%', color: text1, fontSize, boxSizing: 'border-box', overflow: 'visible' }}>
      {lines.map((line, i) => <div key={i} style={{ width: '100%', whiteSpace: 'pre' }}>{line === '' ? '\u00a0' : line}</div>)}
    </div>
    <div ref={measure} aria-hidden="true" data-text-fit-measure style={{ ...fontStyle, position: 'absolute', left: -99999, top: 0, visibility: 'hidden', pointerEvents: 'none', display: 'inline-block', width: 'auto', boxSizing: 'border-box' }}>
      {lines.map((line, i) => <div key={i} style={{ whiteSpace: 'pre' }}>{line === '' ? '\u00a0' : line}</div>)}
    </div>
  </div>
}
