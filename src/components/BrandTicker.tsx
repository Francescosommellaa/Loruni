import { useEffect, useRef, type ComponentPropsWithoutRef, type CSSProperties } from 'react'
import { Icon } from './Icon'
import { iconRegistry } from './Icon.registry'
import { useReducedMotionPreference } from '../motion/useReducedMotionPreference'
import './BrandTicker.css'

export type ConceptBrand = {
  name: 'brand-aperol' | 'brand-red-bull' | 'brand-m2o' | 'brand-king-esport' | 'brand-asus-rog' | 'brand-nvidia-geforce'
  label: string
  width: number
  height: number
}
export type BrandTickerProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & { brands: readonly ConceptBrand[] }

function BrandMark({ brand, decorative }: { brand: ConceptBrand; decorative: boolean }) {
  const label = decorative ? undefined : brand.label
  if (brand.name === 'brand-red-bull') {
    return <span className="loruni-brand-ticker__mark" role={label ? 'img' : undefined} aria-label={label}
      aria-hidden={decorative || undefined} style={{ width: brand.width, height: brand.height }}>
      <Icon name="brand-red-bull" />
    </span>
  }
  if (brand.name === 'brand-nvidia-geforce') {
    const mask = `url('${iconRegistry[brand.name].url}') luminance no-repeat center / contain`
    return <span className="loruni-brand-ticker__mark" role={label ? 'img' : undefined} aria-label={label}
      aria-hidden={decorative || undefined} style={{ width: brand.width, height: brand.height, mask, WebkitMask: mask }}>
      <Icon name="brand-nvidia-geforce-image" />
    </span>
  }
  return <Icon name={brand.name} width={brand.width} height={brand.height} label={label} />
}

/** Linear source ticker: 80px/s left, hover100% unchanged, no pointer/drag state. */
export function BrandTicker({ brands, className, style, ...props }: BrandTickerProps) {
  const root = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const phase = useRef(0)
  const reduced = useReducedMotionPreference()
  useEffect(() => {
    const viewport = root.current, rail = track.current
    if (!viewport || !rail || reduced || !rail.animate || !window.ResizeObserver || !window.IntersectionObserver) return
    let animation: Animation | undefined
    let distance = 0
    let inViewport = false
    const syncPlayback = () => {
      if (!animation) return
      if (inViewport && !document.hidden) animation.play()
      else animation.pause()
    }
    const measure = () => {
      const group = rail.firstElementChild as HTMLElement | null
      const next = group?.getBoundingClientRect().width ?? 0
      if (!next || next === distance) return
      if (animation) phase.current = Number(animation.currentTime ?? 0) * 80 / 1000
      animation?.cancel()
      distance = next
      animation = rail.animate(
        [{ transform: 'translateX(0px)' }, { transform: `translateX(${-distance}px)` }],
        { duration: distance / 80 * 1000, iterations: Infinity, easing: 'linear' },
      )
      animation.currentTime = (phase.current % distance) / 80 * 1000
      syncPlayback()
    }
    viewport.dataset.animated = 'true'
    const resize = new ResizeObserver(measure)
    resize.observe(viewport)
    if (rail.firstElementChild) resize.observe(rail.firstElementChild)
    const intersection = new IntersectionObserver(entries => {
      inViewport = entries.some(entry => entry.isIntersecting)
      syncPlayback()
    }, { rootMargin: '100px' })
    intersection.observe(viewport)
    document.addEventListener('visibilitychange', syncPlayback)
    measure()
    return () => {
      phase.current = Number(animation?.currentTime ?? 0) * 80 / 1000
      animation?.cancel()
      resize.disconnect()
      intersection.disconnect()
      document.removeEventListener('visibilitychange', syncPlayback)
      delete viewport.dataset.animated
    }
  }, [reduced, brands])
  const dimensions = { '--brand-width-sum': `${brands.reduce((sum, brand) => sum + brand.width, 0)}px`, '--brand-gaps': Math.max(0, brands.length - 1) } as CSSProperties
  return <div {...props} ref={root} className={['loruni-brand-ticker', className].filter(Boolean).join(' ')} data-reduced={reduced || undefined} style={{ ...dimensions, ...style }}>
    <div ref={track} className="loruni-brand-ticker__track">
      {[false, true].map(decorative => <ul key={String(decorative)} className="loruni-brand-ticker__group" aria-hidden={decorative || undefined}>
        {brands.map(brand => <li key={brand.name}><BrandMark brand={brand} decorative={decorative} /></li>)}
      </ul>)}
    </div>
  </div>
}
