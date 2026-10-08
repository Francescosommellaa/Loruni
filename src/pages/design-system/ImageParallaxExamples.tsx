import { useRef, useState, useSyncExternalStore, type CSSProperties } from 'react'
import { MotionConfig } from 'motion/react'
import { ImageParallax, type ImageParallaxProps } from '../../components/ImageParallax'
import { colors } from '../../styles/token'
import './ImageParallaxExamples.css'

const phoneQuery = '(max-width: 809.98px)'
function subscribe(listener: () => void) {
  const query = window.matchMedia(phoneQuery)
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}
const phoneSnapshot = () => window.matchMedia(phoneQuery).matches
const barImage = 'https://framerusercontent.com/images/GXDSjBUnxHYtD9KkH245SL839NY.png?width=1536&height=1024'
const storyImage = 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?width=1536&height=1024'
const serviceImage = 'https://framerusercontent.com/images/AZDsREBLxvrKisXZuBrgmhaucg.png?width=1024&height=1536'
export type ParallaxCase = 'experience' | 'contact' | 'service' | 'story' | 'story-horizontal' | 'controls'
const caseNames: Record<ParallaxCase, string> = { experience: '/esperienza · Y30 · 92vh', contact: '/vieni-a-trovarci · Y30 · 92vh', service: 'Service Card · X−50 / Y50 · fill', story: 'Our Story · Y50 · 640px', 'story-horizontal': 'Our Story · X−50 · 660px × fill', controls: 'Immagine dinamica / crop / X+Y / decorazioni' }

// Only this documentation parent chooses source breakpoints and frame dimensions.
export function ImageParallaxExample({ kind = 'controls' }: { kind?: ParallaxCase }) {
  const phone = useSyncExternalStore(subscribe, phoneSnapshot, () => true)
  const [reduced, setReduced] = useState(false)
  const [mounted, setMounted] = useState(true)
  const [image, setImage] = useState(0)
  const [empty, setEmpty] = useState(false)
  const [decorated, setDecorated] = useState(false)
  const [position, setPosition] = useState(0)
  const [cropped, setCropped] = useState(false)
  const [controlX, setControlX] = useState(-50)
  const [controlY, setControlY] = useState(50)
  const [parentHeight, setParentHeight] = useState(640)
  const x = kind === 'story-horizontal' || (kind === 'service' && !phone) ? -50 : kind === 'controls' ? controlX : 0
  const y = kind === 'controls' ? controlY : kind === 'experience' || kind === 'contact' ? 30 : x === 0 ? 50 : 0
  const images = kind === 'service' ? [serviceImage, storyImage, barImage] : [kind === 'experience' || kind === 'contact' ? barImage : storyImage, serviceImage, barImage]
  const src = images[image % images.length] ?? storyImage
  const props: ImageParallaxProps = {
    image: empty ? undefined : { src, alt: '', ...(cropped ? { positionX: '30%', positionY: '70%' } : {}), ...(kind === 'controls' && src === storyImage ? {
      srcSet: 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?scale-down-to=512&width=1536&height=1024 512w, https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?scale-down-to=1024&width=1536&height=1024 1024w, https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?width=1536&height=1024 1536w',
      sizes: '(max-width: 809.98px) 100vw, 100vw',
    } : {}) },
    parallaxX: x, parallaxY: y,
    border: decorated ? { borderWidth: 2, borderStyle: 'solid', borderColor: `var(${colors.brandPrimary.cssVariable})` } : null,
    radius: decorated ? 40 : 0, shadow: decorated ? ['0px 8px 24px 0px rgba(0, 0, 0, .3)'] : [],
  }
  const frame: CSSProperties = {
    width: kind === 'story-horizontal' ? 660 : kind === 'service' && !phone ? 600 : '100%',
    height: kind === 'controls' ? parentHeight : kind === 'experience' || kind === 'contact' ? '92vh' : kind === 'story-horizontal' ? 1080 : kind === 'service' && !phone ? 1013 : 640,
    transform: `translate3d(${x !== 0 ? position : 0}px, 0, 0)`,
  }
  return <div className="ds-parallax-example" data-parallax-case={kind}>
    <div className="ds-parallax-controls">
      <button type="button" onClick={() => setImage(value => value + 1)}>Cambia immagine parallax</button>
      <button type="button" aria-pressed={empty} onClick={() => setEmpty(value => !value)}>Immagine assente</button>
      <button type="button" aria-pressed={reduced} onClick={() => setReduced(value => !value)}>Reduced motion parallax</button>
      <button type="button" onClick={() => setMounted(value => !value)}>{mounted ? 'Smonta parallax' : 'Monta parallax'}</button>
      {kind === 'controls' && <>
        <label>Parallax X <input type="number" min="-100" max="100" step="5" value={controlX} onChange={event => setControlX(Number(event.target.value))} /></label>
        <label>Parallax Y <input type="number" min="-100" max="100" step="5" value={controlY} onChange={event => setControlY(Number(event.target.value))} /></label>
        <label>Altezza del parent (px) <input type="number" min="1" value={parentHeight} onChange={event => setParentHeight(Math.max(1, Number(event.target.value) || 1))} /></label>
        <button type="button" aria-pressed={decorated} onClick={() => setDecorated(value => !value)}>Border / radius / shadow</button>
        <button type="button" aria-pressed={cropped} onClick={() => setCropped(value => !value)}>Crop 30% / 70%</button>
      </>}
      {x !== 0 && <label>Posizione orizzontale del parent <input type="number" min="-1000" max="1000" step="0.5" value={position} onChange={event => setPosition(Number(event.target.value))} /></label>}
      <output>X {x} · Y {y} · {phone ? 'Phone' : 'Desktop / Tablet'}</output>
    </div>
    <div className="ds-parallax-stage">
      <div className="ds-parallax-frame" style={frame}>
        <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>{mounted && <ImageParallax {...props} />}</MotionConfig>
      </div>
    </div>
  </div>
}

/** Reuses the catalog examples in a full-width, scrollable comparison surface. */
export function ImageParallaxComparison() {
  const [kind, setKind] = useState<ParallaxCase>('experience')
  const [top, setTop] = useState(0)
  const content = useRef<HTMLDivElement>(null)
  function align() {
    const frame = content.current?.querySelector('.ds-parallax-frame')
    if (frame) window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top - top, behavior: 'instant' })
  }
  return <main className="ds-parallax-comparison">
    <header><a href="/design-system#ds-component-image-parallax">Catalogo</a><label>Consumer Image Parallax <select value={kind} onChange={event => setKind(event.target.value as ParallaxCase)}>{Object.entries(caseNames).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label>Top del media (px) <input type="number" value={top} onChange={event => setTop(Number(event.target.value))} /></label><button type="button" onClick={align}>Allinea media</button></header>
    <div aria-hidden="true" style={{ height: '100vh' }} />
    <div ref={content}><ImageParallaxExample key={kind} kind={kind} /></div>
    <div aria-hidden="true" style={{ height: '100vh' }} />
  </main>
}


