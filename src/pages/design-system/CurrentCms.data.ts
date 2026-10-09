import type { EventRecord, CommunityRecord } from '../../components/CmsCollections.data'
import { projectEvents } from './ProjectCardExamples.data'

// Current read-only CMS capture 2026-10-09. Semantic fixture input; no source IDs in browser imports.
const eventTestimonials = [
  {
    "title": "Di chi è il turno?",
    "quote": "      Giocare è il tentativo volontario di superare ostacoli non necessari.",
    "name": "Bernard Suits",
    "role": "Traduzione italiana",
    "image": {
    "height": 1536,
    "loading": "lazy",
    "sizes": "max(calc(max((100vw - 288px) / 12, 50px) * 4 + 24px), 1px)",
    "src": "https://framerusercontent.com/images/vhxBQUKe4EcpWrtnsQfrRLwrE.png?width=1024&height=1536",
    "srcSet": "https://framerusercontent.com/images/vhxBQUKe4EcpWrtnsQfrRLwrE.png?scale-down-to=1024&width=1024&height=1536 682w,https://framerusercontent.com/images/vhxBQUKe4EcpWrtnsQfrRLwrE.png?width=1024&height=1536 1024w",
    "width": 1024
}
  },
  {
    "title": "Fuori casa",
    "quote": "      Abbiamo bisogno di vedere amici e vicini. E di stare anche tra persone che non conosciamo.",
    "name": "Ray Oldenburg & Karen Christensen",
    "role": "Traduzione italiana",
    "image": "https://framerusercontent.com/images/AEG6nP0BIFmtgcJIhJyVkYoCls.png"
  },
  {
    "title": "Una sedia in più",
    "quote": "      I terzi luoghi non sono altro che luoghi pubblici informali di incontro.",
    "name": "Ray Oldenburg",
    "role": "Traduzione italiana",
    "image": "https://framerusercontent.com/images/DNw1LVgfe6vA5TOajXNwumUqIY.png"
  },
  {
    "title": "Un’altra mano",
    "quote": "      Giocare è il tentativo volontario di superare ostacoli non necessari.",
    "name": "Bernard Suits",
    "role": "Traduzione italiana",
    "image": "https://framerusercontent.com/images/nMZri2VBVNNdwVJdOC1EQzR9Jv4.png"
  },
  {
    "title": "La prossima mossa",
    "quote": "      Un buon gioco è una serie di scelte interessanti.",
    "name": "Sid Meier",
    "role": "Traduzione italiana",
    "image": "https://framerusercontent.com/images/0meFhOBKqOqbVZkWULteBPqDXk.png"
  }
] as const
export const currentEvents: readonly EventRecord[] = projectEvents.map((event, index) => ({ ...event, compactLabel: 'Eventi', testimonial: { ...eventTestimonials[index]!, image: typeof eventTestimonials[index]!.image === 'string' ? { src: eventTestimonials[index]!.image, loading: 'lazy' } : eventTestimonials[index]!.image } }))
export const currentCommunity = [
  {
    "slug": "persone-intorno-a-un-tavolo",
    "image": "https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png",
    "title": "Il tavolo si allunga",
    "subtitle": "Una sedia si sposta. Il discorso passa al tavolo accanto."
  },
  {
    "slug": "una-partita-che-avvicina",
    "image": "https://framerusercontent.com/images/vhxBQUKe4EcpWrtnsQfrRLwrE.png",
    "title": "Un’altra, poi vediamo",
    "subtitle": "Chi perde vuole rifarla. Chi vince, di solito, anche."
  },
  {
    "slug": "il-ritmo-della-serata",
    "image": "https://framerusercontent.com/images/AEG6nP0BIFmtgcJIhJyVkYoCls.png",
    "title": "Quel pezzo lo conosci",
    "subtitle": "Il discorso si ferma un attimo. Poi riparte dal ritornello."
  },
  {
    "slug": "tra-un-drink-e-una-storia",
    "image": "https://framerusercontent.com/images/AZDsREBLxvrKisXZuBrgmhaucg.png",
    "title": "Il drink può aspettare",
    "subtitle": "Prima finisci il discorso. Il bicchiere è ancora lì."
  }
] as const satisfies readonly CommunityRecord[]
