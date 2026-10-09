import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { LogosAndIntro } from '../../components/LogosAndIntro'
import { BrandTicker } from '../../components/BrandTicker'
import { experienceLogosAndIntro } from '../../components/LogosAndIntro.data'
import './LogosAndIntroExamples.css'

export function LogosAndIntroExample({ comparison = false, tickerOnly = false }: { comparison?: boolean; tickerOnly?: boolean }) {
  const [reduced, setReduced] = useState(false)
  const [mounted, setMounted] = useState(true)
  const controls = <div className="ds-logos-intro-controls"><label><input type="checkbox" checked={reduced} onChange={e => setReduced(e.target.checked)} /> Riduci movimento</label><label><input type="checkbox" checked={mounted} onChange={e => setMounted(e.target.checked)} /> Monta composizione</label><p>Sei riferimenti di concept, non partner. Hover mantiene la velocità; nessun drag.</p></div>
  return <div className={comparison ? 'ds-logos-intro-comparison' : 'ds-logos-intro-example'}>
    {!comparison && controls}
    <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>{mounted && <div className="ds-logos-intro-parent">{tickerOnly ? <BrandTicker brands={experienceLogosAndIntro.brands} /> : <LogosAndIntro content={experienceLogosAndIntro} />}</div>}</MotionConfig>
    {comparison && controls}
  </div>
}

export function LogosAndIntroFrame() {
  const [width, setWidth] = useState(1200)
  return <div><label>Viewport Logos and Intro<input aria-label="Viewport Logos and Intro" type="range" min="320" max="2560" value={width} onChange={e => setWidth(Number(e.target.value))} /></label><output>{width}px</output><div className="ds-logos-intro-frame"><iframe title="Logos and Intro responsive" style={{ width }} src="/design-system?fixture=logos-and-intro" /></div></div>
}
