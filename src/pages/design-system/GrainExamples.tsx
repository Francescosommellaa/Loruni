import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { Grain } from '../../components/Grain'
import { LiquidHover } from '../../components/LiquidHover'
import { ImageFill } from '../../components/ImageFill'
import './GrainExamples.css'

const heroImage = 'https://framerusercontent.com/images/GXDSjBUnxHYtD9KkH245SL839NY.png?width=1536&height=1024'
const secondImage = 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?width=1536&height=1024'

/** Documentation consumer; source masks and mobile opt-in are not primitive policy. */
export function GrainHeroExample({ comparison = false }: { comparison?: boolean }) {
  const [internal, setInternal] = useState(1)
  const [layer, setLayer] = useState(.1)
  const [reduced, setReduced] = useState(false)
  const [mounted, setMounted] = useState(true)
  const [mobileLiquid, setMobileLiquid] = useState(false)
  const [dynamic, setDynamic] = useState(false)
  const [clicks, setClicks] = useState(0)
  return <div className={comparison ? 'ds-grain-comparison' : 'ds-grain-example'}>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
      <div className="ds-grain-hero" data-mobile-liquid={mobileLiquid}>
        <div className="ds-grain-liquid"><LiquidHover image={dynamic ? secondImage : heroImage} resolution={3} cursorSize={.5} cursorPower={.3} distortionPower={.45} /></div>
        <div className="ds-grain-static"><ImageFill image={dynamic ? secondImage : heroImage} /></div>
        {mounted && <div className="ds-grain-layer" style={{ opacity: layer }}><Grain opacity={internal} /></div>}
        <button className="ds-grain-hit" type="button" onClick={() => setClicks(value => value + 1)}>Verifica click sotto Grain · {clicks}</button>
      </div>
    </MotionConfig>
    <div className="ds-grain-controls">
      <label>Opacity interna <input type="number" min="0" max="1" step=".1" value={internal} onChange={event => setInternal(Number(event.target.value))} /></label>
      <label>Opacity layer <input type="number" min="0" max="1" step=".1" value={layer} onChange={event => setLayer(Number(event.target.value))} /></label>
      <button type="button" aria-pressed={reduced} onClick={() => setReduced(value => !value)}>Reduced motion Grain e Liquid</button>
      <button type="button" onClick={() => setMounted(value => !value)}>{mounted ? 'Smonta Grain' : 'Monta Grain'}</button>
      <button type="button" aria-pressed={mobileLiquid} onClick={() => setMobileLiquid(value => !value)}>Liquid touch su Tablet / Phone</button>
      <button type="button" onClick={() => setDynamic(value => !value)}>Cambia immagine Liquid</button>
      <a href="/design-system?fixture=grain">Confronto Hero media</a>
    </div>
    <p>La sorgente mostra Liquid Hover solo su Desktop. Il controllo mobile abilita l’estensione touch richiesta; Grain resta sempre passivo. Questa fixture confronta il media Hero, senza migrare headline, navigazione o pagina.</p>
  </div>
}

export function GrainDefaultExample() {
  return <div className="ds-grain-default"><Grain /><span>Default interno 0.5, senza mask/layer Hero.</span></div>
}

export function LiquidControlsExample() {
  const [resolution, setResolution] = useState(4)
  const [cursorSize, setCursorSize] = useState(.5)
  const [cursorPower, setCursorPower] = useState(.6)
  const [distortionPower, setDistortionPower] = useState(.5)
  const [mounted, setMounted] = useState(true)
  const [empty, setEmpty] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [touch, setTouch] = useState(true)
  return <div>
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}><div className="ds-liquid-control-frame">{mounted && <LiquidHover image={empty ? undefined : heroImage} resolution={resolution} cursorSize={cursorSize} cursorPower={cursorPower} distortionPower={distortionPower} touch={touch} />}</div></MotionConfig>
    <div className="ds-grain-controls">
      <label>Resolution <input type="number" min="1" max="10" step="1" value={resolution} onChange={e => setResolution(Number(e.target.value))} /></label>
      <label>Cursor <input type="number" min=".1" max="1" step=".1" value={cursorSize} onChange={e => setCursorSize(Number(e.target.value))} /></label>
      <label>Power <input type="number" min=".1" max="1" step=".1" value={cursorPower} onChange={e => setCursorPower(Number(e.target.value))} /></label>
      <label>Distortion <input type="number" min=".1" max="1" step=".05" value={distortionPower} onChange={e => setDistortionPower(Number(e.target.value))} /></label>
      <button type="button" onClick={() => setMounted(v => !v)}>{mounted ? 'Smonta Liquid' : 'Monta Liquid'}</button>
      <button type="button" onClick={() => setEmpty(v => !v)}>Immagine Liquid assente</button>
      <button type="button" aria-pressed={reduced} onClick={() => setReduced(v => !v)}>Reduced motion Liquid</button>
      <button type="button" aria-pressed={touch} onClick={() => setTouch(v => !v)}>Abilita touch Liquid</button>
    </div>
  </div>
}
