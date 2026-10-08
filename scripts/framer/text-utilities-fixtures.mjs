import fs from 'node:fs'

// Reference files never enter browser imports. Generate semantic, typed consumer data.
const base = 'docs/framer/text-utilities/'
const nodes = JSON.parse(fs.readFileSync(`${base}instances.json`, 'utf8'))
const parents = JSON.parse(fs.readFileSync(`${base}parents.json`, 'utf8'))
const scopes = JSON.parse(fs.readFileSync(`${base}scopes.json`, 'utf8'))
const events = JSON.parse(fs.readFileSync(`${base}event-content.json`, 'utf8'))
const tokens = JSON.parse(fs.readFileSync('docs/framer/token-source.json', 'utf8')).colorStyles
const palette = Object.fromEntries(tokens.map(t => [t.id, `var(--color-${t.path.replace(/^\//, '').replace(/\//g, '-').replace(/ /g, '-').replace(/%/g, '').toLowerCase()})`]))
palette['4f06e607-0ed8-485c-b2a0-d4779fa4ae51'] = 'var(--color-neutral-bone-highlight)'
const color = raw => raw.replace(/var\(--token-([^)]*)\)/g, (_, id) => palette[id] ?? (() => { throw new Error(`Unknown color ${id}`) })())
const families = { 'GF;Funnel Display-600': ['var(--font-funnel-display)', 600], 'GF;Funnel Sans-regular': ['var(--font-funnel-sans)', 400] }
function font(raw) {
  const f = JSON.parse(raw), face = families[f.fontSelector]
  if (!face) throw new Error(`Unknown font ${f.fontSelector}`)
  return { fontFamily: face[0], fontWeight: face[1], fontStyle: 'normal', fontSize: f.fontSize, letterSpacing: f.letterSpacing.join(''), lineHeight: f.lineHeight.join(''), textAlign: f.textAlignment ?? 'left' }
}
const quote = scopes.find(s => s.name === 'Section/Our Story Section').variables.find(v => v.name === 'Quote Text').initialValue
const groups = { PFr51brm3: 'home-fit', qLQzg5jBN: 'experience-fit', MS3ojtoBg: 'home-quote', HIvJ249D7: 'home-process', fcoIh1Ms4: 'experience-intro', EPARu6tAl: 'event-intro', ElF1_2QLV: 'story-quote', IoWqCDcLU: 'story-canvas' }
const fixtures = nodes.map(n => {
  const group = groups[n.$originalId ?? n.id]
  if (!group) throw new Error(`Unmapped instance ${n.id}`)
  const breakpoint = n.$mediaQuery?.name.toLowerCase() ?? (n.$groundNodeId === 'SW99Ur6M6' ? 'mobile' : group === 'story-canvas' ? 'canvas' : 'desktop')
  const inherited = parents.find(p => p.id === n.$parentId)?.children?.find(c => c.id === n.id)?.attributes ?? {}
  const a = { ...inherited, ...n.attributes }, fit = group.endsWith('-fit')
  const binding = a.$control__text
  const text = binding?.includes('GDPctnty6') ? events[0].text : binding?.includes('Nrt1Hw8M9') ? quote : binding
  if (typeof text !== 'string') throw new Error(`Unresolved text ${n.id}`)
  return { key: `${group}-${breakpoint}`, group, breakpoint, props: fit ? { text, font: font(a.$control__font), text1: color(a.$control__text1), background: a.$control__background, align: a.$control__align.toLowerCase() } : { text, font: font(a.$control__font), delay: Number(a.$control__delay), durPerLine: Number(a.$control__durPerLine), color: color(a.$control__color), variableWeight: a.$control__variableWeight === 'true', halfOpacity: a.$control__halfOpacity === 'true', trigger: 'inView' } }
})
if (fixtures.filter(f => f.group.endsWith('-fit')).length !== 6 || fixtures.length !== 21) throw new Error('Expected6Fit/15Stagger instances')
const out = `import type { TextFitWidthProps } from '../../components/TextFitWidth'\nimport type { TextStaggerProps } from '../../components/TextStagger'\n\n// Current source copy/font controls. References and bindings are documented outside runtime.\nexport const textFitCases: readonly { key: string; group: string; breakpoint: string; props: TextFitWidthProps }[] = ${JSON.stringify(fixtures.filter(f => f.group.endsWith('-fit')), null, 2)}\n\nexport const textStaggerCases: readonly { key: string; group: string; breakpoint: string; props: TextStaggerProps }[] = ${JSON.stringify(fixtures.filter(f => !f.group.endsWith('-fit')), null, 2)}\n\nexport const eventTexts = ${JSON.stringify(events, null, 2)} as const\n`
fs.writeFileSync('src/pages/design-system/TextUtilityExamples.data.ts', out)
console.log('Generated6Fit/15Stagger configurations and5current CMS contents; all bindings resolved.')
