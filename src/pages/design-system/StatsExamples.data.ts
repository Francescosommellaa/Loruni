import type { StatsItem } from '../../components/Stats'

/** Current Esperienza content; historic source layer names are not copy. */
export const experienceStats = [
  { id: 'table', value: '01', label: 'Al tavolo', labelStyle: 'compact' },
  { id: 'play', value: '02', label: 'Gioco' },
  { id: 'events', value: '03', label: 'Eventi' },
  { id: 'another', value: '∞', label: 'Un’altra, poi vediamo' },
] as const satisfies readonly StatsItem[]
