import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { ImageReveal } from '../../components/ImageReveal'
import { defaultTestimonials } from '../../components/TestimonialsSection.data'
import { colors } from '../../styles/token'

/** These controls belong to the catalog, never to the media utility. */
export function ImageRevealExample({ event = false, empty = false, intrinsic = false }: { event?: boolean; empty?: boolean; intrinsic?: boolean }) {
  const [mount, setMount] = useState(0)
  const [image, setImage] = useState(event ? 2 : 0)
  const [visible, setVisible] = useState(true)
  const [retainedHidden, setRetainedHidden] = useState(false)
  const [reduced, setReduced] = useState(false)
  const item = (defaultTestimonials[image] ?? defaultTestimonials[0]).image
  const media = typeof item === 'string' ? { src: item, alt: '' } : item
  // Captured Framer candidates; this fixed-width example owns its sizes hint.
  const responsiveMedia = intrinsic && image === 0 ? {
    ...media,
    srcSet: 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png?width=1536&height=1024 1536w',
    sizes: '260px',
  } : media
  const backgroundColor = `var(${(event ? colors.neutral950 : colors.neutral50).cssVariable})`
  return <div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
      <button type="button" onClick={() => setMount(value => value + 1)}>Rimonta reveal</button>
      <button type="button" onClick={() => setImage(value => (value + 1) % 4)}>Cambia immagine senza remount</button>
      <button type="button" onClick={() => setVisible(value => !value)}>{visible ? 'Smonta immagine' : 'Monta immagine'}</button>
      <button type="button" onClick={() => setRetainedHidden(value => !value)}>{retainedHidden ? 'Mostra istanza conservata' : 'Nascondi istanza conservata'}</button>
      <button type="button" aria-pressed={reduced} onClick={() => setReduced(value => !value)}>Reduced motion</button>
    </div>
    <div style={{ width: intrinsic ? 260 : '100%', maxWidth: '100%', height: 256, backgroundColor }}>
      <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
        {visible && <div hidden={retainedHidden} style={{ width: '100%', height: '100%' }}>
          <ImageReveal key={mount} image={empty ? undefined : responsiveMedia} backgroundColor={backgroundColor} />
        </div>}
      </MotionConfig>
    </div>
  </div>
}
