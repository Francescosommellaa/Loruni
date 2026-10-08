import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { domAnimation, LazyMotion, m } from 'motion/react'
import { inView } from 'motion'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import { useTextMeasurement } from '../motion/useTextMeasurement'
import type { TextFont } from './TextFont'

export type TextStaggerProps = {
  text?: string
  delay?: number
  durPerLine?: number
  color?: string
  font?: TextFont
  variableWeight?: boolean
  trigger?: 'inView' | 'hover' | 'click'
  halfOpacity?: boolean
  className?: string
  style?: CSSProperties
}
const defaultFont: TextFont = { fontSize: 40, lineHeight: '1em', letterSpacing: '-0.02em', textAlign: 'left' }

/** Prefix Range bounds reproduce the source's visual-line detection (UTF16, 2px). */
function visualLines(element: HTMLElement, text: string) {
  const node = element.firstChild
  if (!node || node.nodeType !== Node.TEXT_NODE) return [text]
  const range = element.ownerDocument.createRange()
  const lines: string[] = []
  let line = '', lastBottom = -1
  for (let i = 0; i < text.length; i++) {
    range.setStart(node, 0)
    range.setEnd(node, i + 1)
    const bottom = range.getBoundingClientRect().bottom
    if (lastBottom === -1) lastBottom = bottom
    if (bottom > lastBottom + 2) {
      lines.push(line)
      line = text[i] ?? ''
      lastBottom = bottom
    } else line += text[i]
  }
  if (line) lines.push(line)
  return lines.length ? lines : [text]
}

function lineStarts(lines: readonly string[]) {
  const starts = [0]
  for (let i = 0; i < lines.length; i++) starts.push((starts[i] ?? 0) + lines[i]!.length)
  return starts
}

export function TextStagger({ text = 'Editable\nStaggered\nText', delay = 0.08, durPerLine = 0.5, color = '#1A1917', font = defaultFont, variableWeight = false, trigger = 'inView', halfOpacity = false, className, style }: TextStaggerProps) {
  const root = useRef<HTMLDivElement>(null)
  const measure = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[]>([text])
  const [revealed, setRevealed] = useState(false)
  const reduced = useReducedMotionPreference()
  const fontFamily = font.fontFamily || 'var(--font-funnel-sans)'
  useTextMeasurement(root, () => {
    if (!measure.current || measure.current.clientWidth <= 0) return
    const next = visualLines(measure.current, text)
    setLines(previous => previous.length === next.length && previous.every((line, i) => line === next[i]) ? previous : next)
  }, JSON.stringify([text, font, style]), measure)
  useEffect(() => {
    if (trigger !== 'inView' || !root.current) return
    // Same default any-intersection threshold; the source's hasAnimated guard is one-shot.
    return inView(root.current, () => { setRevealed(true) }, { amount: 'some' })
  }, [trigger])
  const starts = lineStarts(lines)
  return <LazyMotion features={domAnimation}>
    <div ref={root} className={className ? `loruni-text-stagger ${className}` : 'loruni-text-stagger'} style={{ width: '100%', ...style, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', color, ...font, fontFamily }}
      role={trigger === 'click' ? 'button' : undefined} tabIndex={trigger === 'click' || trigger === 'hover' ? 0 : undefined}
      onMouseEnter={trigger === 'hover' ? () => setRevealed(true) : undefined}
      onFocus={trigger === 'hover' ? () => setRevealed(true) : undefined}
      onClick={trigger === 'click' ? () => setRevealed(true) : undefined}
      onKeyDown={trigger === 'click' ? event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setRevealed(true) } } : undefined}>
      <div ref={measure} aria-hidden="true" data-text-stagger-measure style={{ position: 'absolute', top: 0, visibility: 'hidden', pointerEvents: 'none', whiteSpace: 'pre-wrap', ...font, fontFamily, width: '100%' }}>{text}</div>
      {lines.map((line, i) => {
        const opacity = halfOpacity && starts[i]! >= text.length / 2 ? 0.5 : 1
        return <span key={i} data-text-stagger-line style={{ display: 'block', overflow: 'hidden', width: '100%', marginBottom: 0, lineHeight: font.lineHeight || 1.2 }}>
          <m.span initial={{ y: reduced || revealed ? 0 : 70 }} animate={{ y: reduced || revealed ? 0 : 70 }}
            transition={{ delay: reduced ? 0 : i * delay, duration: reduced ? 0 : durPerLine, ease: [0.44, 0, 0.34, 0.98] }}
            style={{ display: 'inline-block', whiteSpace: 'pre-wrap', ...font, fontFamily, color, opacity, fontVariationSettings: variableWeight ? '"wght" 700' : '"wght" 500', fontWeight: variableWeight ? 700 : 500, WebkitClipPath: 'inset(0 0 0 0)', clipPath: 'inset(0 0 0 0)', lineHeight: font.lineHeight || 1.2 }}>{line || ' '}</m.span>
        </span>
      })}
    </div>
  </LazyMotion>
}
