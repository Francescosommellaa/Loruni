import type { CommunityCardProps } from '../../components/CommunityCard'

// Confirmed current Community CMS content; reference snapshots are never imported.
export const communityCardExamples = [
  { image: 'https://framerusercontent.com/images/WmXIk9QXsI5NZWLKbSRTmadXVvs.png', title: 'Il tavolo si allunga', subtitle: 'Una sedia si sposta. Il discorso passa al tavolo accanto.' },
  { image: 'https://framerusercontent.com/images/vhxBQUKe4EcpWrtnsQfrRLwrE.png', title: 'Un’altra, poi vediamo', subtitle: 'Chi perde vuole rifarla. Chi vince, di solito, anche.' },
  { image: 'https://framerusercontent.com/images/AEG6nP0BIFmtgcJIhJyVkYoCls.png', title: 'Quel pezzo lo conosci', subtitle: 'Il discorso si ferma un attimo. Poi riparte dal ritornello.' },
  { image: 'https://framerusercontent.com/images/AZDsREBLxvrKisXZuBrgmhaucg.png', title: 'Il drink può aspettare', subtitle: 'Prima finisci il discorso. Il bicchiere è ancora lì.' },
] as const satisfies readonly CommunityCardProps[]

