import { typography } from '../styles/token'
import { DesignSystemPage } from '../pages/design-system/DesignSystemPage'
import { ImageParallaxComparison } from '../pages/design-system/ImageParallaxExamples'
import { GrainHeroExample } from '../pages/design-system/GrainExamples'
import './App.css'

export function App() {
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'grain') return <GrainHeroExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'image-parallax') return <ImageParallaxComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system') return <DesignSystemPage />
  return (
    <main className="development-status">
      <h1 className={typography.headline32.className}>Loruni</h1>
      <p className={typography.text20.className}>Token e stili di base Framer importati.</p>
      <p className={typography.text20.className}>La conversione delle pagine non è ancora iniziata.</p>
      <a className="development-catalog-link" href="/design-system">Apri il design system</a>
    </main>
  )
}
