import { useState } from 'react'
import { CommunityCard } from '../../components/CommunityCard'
import './CommunityCardExamples.css'

import { communityCardExamples } from './CommunityCardExamples.data'

export function CommunityCardRealExamples({ h3 }: { h3: boolean }) {
  return <div className="ds-community-cards">{communityCardExamples.map(card => <CommunityCard key={card.title} {...card} h3={h3} />)}</div>
}

export function CommunityCardControlsExample() {
  const [title, setTitle] = useState<string>(communityCardExamples[0].title)
  const [subtitle, setSubtitle] = useState<string>(communityCardExamples[0].subtitle)
  const [image, setImage] = useState(communityCardExamples[0].image as string)
  const [h3, setH3] = useState(true)
  return <div className="ds-community-controls">
    <div className="ds-community-controls__fields">
      <label>Titolo<input value={title} onChange={event => setTitle(event.target.value)} /></label>
      <label>Sottotitolo<textarea value={subtitle} onChange={event => setSubtitle(event.target.value)} /></label>
      <label>Immagine<input value={image} onChange={event => setImage(event.target.value)} /></label>
      <label><input type="checkbox" checked={h3} onChange={event => setH3(event.target.checked)} />Titolo H3 (disattivato: H2)</label>
    </div>
    <div className="ds-community-card-intrinsic"><CommunityCard title={title} subtitle={subtitle} image={image || undefined} h3={h3} /></div>
  </div>
}

export function CommunityCardDefaultExample() {
  return <div className="ds-community-card-intrinsic"><CommunityCard /></div>
}
