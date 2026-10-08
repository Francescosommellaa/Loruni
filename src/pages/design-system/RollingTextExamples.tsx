import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { RollingText, type RollingTextProps, type RollingTextTransform } from '../../components/RollingText'
import { Icon } from '../../components/Icon'
import { rollingTextConfigurations, rollingTextConfiguration } from './RollingTextExamples.data'

/** Catalog owns the controls and preview frame; the product utility stays parametric. */
export function RollingTextControlsExample() {
  const [configuration, setConfiguration] = useState(0)
  const [text, setText] = useState('LORUNI ci vediamo qui')
  const [tag, setTag] = useState<NonNullable<RollingTextProps['tag']>>('p')
  const [transform, setTransform] = useState<RollingTextTransform>('none')
  const [reverse, setReverse] = useState(false)
  const [stagger, setStagger] = useState(60)
  const [padding, setPadding] = useState('0px')
  const [reduced, setReduced] = useState(false)
  return <div>
    <div style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
      <label>Configurazione Rolling <select value={configuration} onChange={e => setConfiguration(Number(e.target.value))}>{rollingTextConfigurations.map((item, index) => <option key={item.name} value={index}>{item.name}</option>)}</select></label>
      <label>Testo Rolling <input value={text} onChange={e => setText(e.target.value)} /></label>
      <label>Tag Rolling <select value={tag} onChange={e => setTag(e.target.value as typeof tag)}>{(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(value => <option key={value}>{value}</option>)}</select></label>
      <label>Transform Rolling <select value={transform} onChange={e => setTransform(e.target.value as typeof transform)}>{(['none', 'uppercase', 'lowercase', 'capitalize'] as const).map(value => <option key={value}>{value}</option>)}</select></label>
      <label>Stagger Rolling <input type="number" min="0" max="100" value={stagger} onChange={e => setStagger(Number(e.target.value))} /></label>
      <label>Padding Rolling <input value={padding} onChange={e => setPadding(e.target.value)} /></label>
      <label><input type="checkbox" checked={reverse} onChange={e => setReverse(e.target.checked)} /> Reverse Rolling</label>
      <label><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} /> Reduced motion Rolling</label>
    </div>
    <div style={{ width: '100%', height: 96, border: '1px solid currentColor' }}>
      <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
        <RollingText {...rollingTextConfiguration(configuration)} text={text} tag={tag} transform={transform} reverse={reverse} stagger={stagger} padding={padding} />
      </MotionConfig>
    </div>
  </div>
}

export function ExistingArrowGlyphFillExample() {
  const [fill, setFill] = useState('var(--color-brand-primary)')
  return <div>
    <label>Fill testimonial-arrow <input value={fill} onChange={e => setFill(e.target.value)} /></label>
    <Icon name="testimonial-arrow" fill={fill} />
  </div>
}
