import fs from 'node:fs'

const source = JSON.parse(fs.readFileSync('docs/framer/service-card-source.json', 'utf8'))
const variables = Object.fromEntries(source.section.variables.map(v => [v.id, v]))
const home = source.consumers[0].attributes
function resolve(value) {
  const id = typeof value === 'string' ? value.match(/^var\(--variable-(.+)\)$/)?.[1] : undefined
  return id ? home[variables[id]?.key] ?? variables[id]?.initialValue ?? '' : value
}
const cases = source.instances.map((node, index) => {
  const a = node.attributes
  const kind = a.$control__variant === 'Mobile' ? 'mobile' : 'desktop'
  return { key: `${index < 4 ? 'hidden-' : ''}${kind}-${resolve(a.$control__number)}`, kind,
    hiddenByParent: a.visible === 'false',
    card: { image: resolve(a.$control__image), title: resolve(a.$control__title), text: resolve(a.$control__text),
      number: resolve(a.$control__number), price: resolve(a.$control__price),
      labels: Array.from({ length: 6 }, (_, i) => resolve(a[`$control__label${i + 1}`])) } }
})
const output = `// Generated from read-only source bindings; no Framer IDs in browser data.\nimport type { ServiceCardProps } from '../../components/ServiceCard'\n\nexport const serviceCardCases = ${JSON.stringify(cases, null, 2)} as const satisfies readonly { key: string; kind: 'desktop' | 'mobile'; hiddenByParent: boolean; card: ServiceCardProps }[]\n`
fs.writeFileSync('src/pages/design-system/ServiceCardExamples.data.ts', output)
console.log(`Resolved ${cases.length} Service Card configurations; ${cases.filter(c => c.kind === 'desktop').length} desktop, ${cases.filter(c => !c.hiddenByParent && c.kind === 'mobile').length} visible mobile.`)
