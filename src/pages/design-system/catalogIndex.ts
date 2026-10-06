import { borders, breakpoints, colors, component, controlDefaults, fonts, gaps, insets, layout, links, motion, primitive, radii, shadows, spacing, typography } from '../../styles/token'
import { componentExamples } from './componentExamples'

// Documentation anchors only; these names are not product tokens.
export const catalogId = (group: string, name: string) => `ds-${group}-${name.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`
type CatalogEntry = { name: string; value: string; category: string; target: string }
const recipes: Readonly<Record<string, Readonly<Record<string, Readonly<Record<string, { readonly value: string | number; readonly cssVariable: string }>>>>>> = component
const entry = (name: string, value: unknown, category: string, target: string): CatalogEntry => ({ name, value: String(value), category, target })
const geometry = [
  { tokens: spacing, section: 'spaziature' }, { tokens: { ...insets, ...gaps }, section: 'spaziature' },
  { tokens: { ...radii, ...borders, ...shadows }, section: 'forme' },
]

export const catalogIndex: readonly CatalogEntry[] = [
  ...Object.values(colors).map(token => entry(`${token.path} ${token.cssVariable}`, token.light, 'Colori', catalogId('color', token.cssVariable))),
  ...Object.values(typography).map(token => entry(`${token.path} ${token.className}`, `${token.font.family} · ${token.font.weight}`, 'Tipografia', catalogId('type', token.className))),
  ...Object.values(fonts).map(token => entry(`${token.family} ${token.cssVariable}`, `${token.faces.length} varianti`, 'Font', catalogId('font', token.cssVariable))),
  ...Object.values(links).map(token => entry(token.className, token.states.link.textColor, 'Link', 'link')),
  ...Object.entries(breakpoints).map(([name, value]) => entry(name, value, 'Responsive', 'responsive')),
  ...geometry.flatMap(({ tokens, section }) => Object.values(tokens).map(token => entry(token.cssVariable, token.value, section === 'forme' ? 'Raggi e bordi' : 'Spaziature', catalogId('geometry', token.cssVariable)))),
  ...Object.values(layout).map(token => entry(token.cssVariable, 'breakpoints' in token ? Object.entries(token.breakpoints).map(([name, bp]) => `${name}: ${bp.value}`).join(' · ') : token.value, 'Layout', catalogId('geometry', token.cssVariable))),
  ...Object.entries(primitive).flatMap(([category, group]) => Object.values(group).map(token => entry(token.cssVariable, token.value, `Fonte / ${category}`, catalogId('source', token.cssVariable)))),
  ...Object.entries(motion.transitions).map(([name, token]) => entry(`${name} ${token.cssVariable}`, token.raw, 'Motion', catalogId('motion', name))),
  ...Object.entries(recipes).flatMap(([name, variants]) => Object.entries(variants).flatMap(([variant, properties]) => Object.values(properties).map(token => entry(token.cssVariable, token.value, `Componenti / ${name} / ${variant}`, catalogId('recipe', token.cssVariable))))),
  ...Object.entries(controlDefaults).flatMap(([name, properties]) => Object.entries(properties).map(([property, token]) => entry(`${name} ${property}`, token.value, 'Default dei controlli', catalogId('default', `${name}-${property}`)))),
  ...componentExamples.map(token => entry(token.name, `${token.examples.length} esempi React`, 'Componenti React', catalogId('component', token.name))),
]

export function revealCatalogTarget(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  let ancestor: HTMLElement | null = target
  while (ancestor) {
    if (ancestor instanceof HTMLDetailsElement) ancestor.open = true
    ancestor = ancestor.parentElement
  }
}
