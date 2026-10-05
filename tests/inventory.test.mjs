import assert from 'node:assert/strict'
import test from 'node:test'
import { collectMedia, deriveInventory, inspectCoverage, renderInventory, walkTree } from '../scripts/framer/model.mjs'

const source = () => ({ schemaVersion: 1, sourceProjectId: 'F3868vuk7YeE7pDEgpP6', readOnly: true,
  capturedAt: '2026-10-05T00:00:00Z', sourceUrl: 'https://framer.com/', pages: [], templates: [],
  components: [], colorStyles: [], textStyles: [], collections: [], codeFiles: [], errors: [],
})

test('coverage keeps unreadable and truncated trees distinct from complete reads', () => {
  assert.equal(inspectCoverage({ status: 'unavailable', tree: null }).status, 'unavailable')
  const tree = { id: 'root', children: [{ id: 'nested', $truncated: true }] }
  assert.deepEqual(inspectCoverage({ status: 'captured', tree }), { status: 'partial', nodeCount: 2, truncated: ['nested'] })
  assert.equal(inspectCoverage({ status: 'partial', tree: { id: 'root' } }).status, 'partial')
})

test('tree traversal retains ancestry through replica branches and tolerates null', () => {
  assert.deepEqual([...walkTree(null)], [])
  const nodes = [...walkTree({ id: 'page', children: [{ id: 'phone', children: [{ id: 'label' }] }] })]
  assert.deepEqual(nodes[2].ancestry, ['page', 'phone'])
})

test('media collection reads nested asset props without treating navigation URLs as images', () => {
  assert.deepEqual(collectMedia({ image: { src: 'https://framerusercontent.com/images/photo.png' }, link: 'https://example.com/contact' }), [
    { url: 'https://framerusercontent.com/images/photo.png', propertyPath: 'image.src' },
  ])
  assert.equal(collectMedia(null).length, 0)
})

test('inventory deduplicates assets but preserves all component and token uses', () => {
  const data = source()
  data.colorStyles = [{ id: 'color1', path: '/Brand/Primary', light: 'red' }]
  data.components = [{ id: 'card', name: 'Card', status: 'captured', tree: { id: 'card' } }]
  data.pages = [{ id: 'home', path: '/', status: 'captured', tree: { id: 'home', children: [1, 2].map(i => ({
    id: `card${i}`, type: 'ComponentInstanceNode', component: 'card', attributes: {
      fill: 'var(--token-color1)', $control__image: 'https://framerusercontent.com/images/photo.png',
      appearEffect: { enter: { opacity: 0 } },
    },
  })) } }]
  const result = deriveInventory(data)
  assert.equal(result.media.length, 1)
  assert.equal(result.media[0].uses.length, 2)
  assert.equal(result.components[0].directPageOrTemplateCount, 2)
  assert.equal(result.colorStyles[0].uses.length, 2)
  assert.equal(result.effects.length, 2)
  assert.equal(result.effects[0].observedInPreview, false)
  assert.equal(result.acceptance.visual, 'not_run')
})

test('wrong project capture is rejected and read failures remain visible in the report', () => {
  assert.throws(() => deriveInventory({ ...source(), sourceProjectId: 'another-project' }), /identity/)
  const data = source()
  data.errors = [{ scope: 'component:arrow', message: 'Icon unavailable' }]
  data.components = [{ id: 'arrow', name: 'Arrow', status: 'unavailable', tree: null }]
  const inventory = deriveInventory(data)
  const markdown = renderInventory(data, inventory)
  assert.equal(inventory.components[0].status, 'unavailable')
  assert.ok(markdown.includes('component:arrow: Icon unavailable'))
})
