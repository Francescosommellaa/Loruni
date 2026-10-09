import { catalogId, catalogIndex } from './catalogIndex'
import { componentExamples } from './componentExamples'

export const catalogSections = [
  ['introduzione', 'Introduzione'], ['colori', 'Colori'], ['tipografia', 'Tipografia'], ['font', 'Font'],
  ['link', 'Link'], ['spaziature', 'Spaziature'], ['forme', 'Raggi e bordi'], ['layout', 'Layout'], ['responsive', 'Responsive'],
  ['componenti', 'Tutti i componenti'], ['base', 'Base HTML'],
  ['valori-fonte', 'Valori della fonte'], ['motion', 'Motion'], ['ricette', 'Token componenti'],
] as const

export const sortedComponents = componentExamples.toSorted((a, b) => a.name.localeCompare(b.name, 'it'))
export const navigationGroups = [
  { title: 'Fondamenti', items: catalogSections.slice(0, 9) },
  { title: 'Componenti', items: [catalogSections[9], ...sortedComponents.map(item => [catalogId('component', item.name), item.name] as const)] },
  { title: 'Riferimenti', items: catalogSections.slice(10) },
]
export const navigationItems = navigationGroups.flatMap(group => group.items)

const categorySections: Record<string, string> = {
  Colori: 'colori', Tipografia: 'tipografia', Font: 'font', Link: 'link', Responsive: 'responsive',
  Spaziature: 'spaziature', 'Raggi e bordi': 'forme', Layout: 'layout', Motion: 'motion',
  'Default dei controlli': 'ricette',
}

// Keep existing token anchors and external links while mounting one document at a time.
export function sectionForTarget(target: string): string | undefined {
  if (catalogSections.some(([id]) => id === target)) return target
  const entry = catalogIndex.find(item => item.target === target)
  if (!entry) return undefined
  if (entry.category === 'Componenti React') return 'componenti'
  if (entry.category.startsWith('Fonte /')) return 'valori-fonte'
  if (entry.category.startsWith('Componenti /')) return 'ricette'
  return categorySections[entry.category]
}

export function currentTarget() {
  try { return decodeURIComponent(window.location.hash.slice(1)) || 'introduzione' }
  catch { return 'introduzione' }
}
