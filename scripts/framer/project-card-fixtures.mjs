import fs from 'node:fs'

// Read-only source capture stays outside browser imports. No CMS backend is chosen.
const source = JSON.parse(fs.readFileSync('docs/framer/project-card-source.json', 'utf8'))
const fields = { title: 'G9SHamjSV', text: 'JHWOD5wUo', label1: 'Z26EvConW', label2: 'HT9u2zyOB', label3: 'qSK5WnWrW', year: 'fQ3rdAH5c' }
const events = source.eventItems.map(item => {
  const src = item.fieldData.jKfndinlJ.value.url
  // These three candidate sizes/parameters were observed for every live card image.
  const full = `${src}?width=1536&height=1024`
  return { slug: item.slug, ...Object.fromEntries(Object.entries(fields).map(([key, id]) => [key, item.fieldData[id].value])), image: {
    src: full,
    srcSet: `${src}?scale-down-to=512&width=1536&height=1024 512w,${src}?scale-down-to=1024&width=1536&height=1024 1024w,${full} 1536w`,
    width: 1536, height: 1024, alt: '',
  } }
})
const homeIndices = { IgLv96FWJ: 0, MrM9mHkXK: 1, LeUM1XH6q: 2, gn1Qopgqh: 3 }
const cases = source.instances.map(({ node, ancestorPath }) => {
  const page = ancestorPath[0].name === 'Home' ? 'home' : ancestorPath[0].name === '/eventi' ? 'events' : 'event-detail'
  const breakpoint = ancestorPath[1].name.toLowerCase()
  const variant = node.attributes.$control__variant
  const mode = variant.startsWith('Main') ? 'main' : 'inner'
  const original = node.$originalId ?? node.id
  const eventIndex = page === 'home' ? homeIndices[original] : mode === 'main' ? 0 : 1
  if (eventIndex == null) throw new Error(`Unmapped source instance ${node.id}`)
  const allocation = node.attributes.height === '100vh' ? 'viewport' : node.attributes.height === 'auto' ? 'auto' : 'fill'
  return { key: `${page}-${mode}-${eventIndex}-${breakpoint}`, page, breakpoint, mode, eventIndex, allocation }
})
if (cases.length !== 21) throw new Error('Expected all21 source instances')
fs.writeFileSync('src/pages/design-system/ProjectCardExamples.data.ts', `import type { ProjectCardProps } from '../../components/ProjectCard'\n\n// Semantic fixture data from the current Eventi collection and21 source consumers.\nexport const projectEvents: readonly (ProjectCardProps & { slug: string })[] = ${JSON.stringify(events, null, 2)}\n\nexport const projectCardCases = ${JSON.stringify(cases, null, 2)} as const\n`)
console.log('Generated21 parent allocations and5 current CMS card contents.')
