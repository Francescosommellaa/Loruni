const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const pxValues = (value) => /^\d+(?:\.\d+)?px(?:\s+\d+(?:\.\d+)?px)*$/.test(value ?? '') ? value.split(/\s+/).map(Number.parseFloat) : []

export function deriveGeometry(source, colorStyles) {
  if (source.sourceProjectId !== 'F3868vuk7YeE7pDEgpP6' || source.readOnly !== true) throw new Error('Unexpected geometry source')
  const nodes = new Map(source.scopes.flatMap(scope => scope.nodes.map(node => [node.id, { ...node, scope }])))
  const variables = new Map([...nodes.values()].flatMap(node => (node.variables ?? []).map(v => [v.id, v.initialValue])))
  const colorVariables = new Map(colorStyles.map(color => [color.id, `--color-${slug(color.path)}`]))
  const resolve = (value) => typeof value === 'string' ? value.replace(/var\(--variable-([^)]+)\)/g, (_, id) => {
    const resolved = variables.get(id)
    if (typeof resolved !== 'string' || resolved.includes('--variable-')) throw new Error(`Unresolved geometry variable ${id}`)
    return resolved
  }).replace(/var\(--token-([^)]+)\)/g, (_, id) => {
    if (!colorVariables.has(id)) throw new Error(`Unresolved geometry color ${id}`)
    return `var(${colorVariables.get(id)})`
  }) : value
  const canonical = (node) => {
    const visited = new Set()
    while (node.originalId && nodes.has(node.originalId)) {
      if (visited.has(node.id)) throw new Error('Cyclic replica')
      visited.add(node.id); node = nodes.get(node.originalId)
    }
    return node.originalId ?? node.id
  }
  const occurrences = []
  for (const node of nodes.values()) for (const [property, raw] of Object.entries(node.attributes)) {
    if (!/^(padding|gap|margin|radius|maxWidth|border|borderTop|borderBottom|formInputFocusedBoxShadow|\$control__radius)$/.test(property)) continue
    const values = Array.isArray(raw) ? raw.map(resolve) : resolve(raw)
    occurrences.push({ scope: node.scope.name, kind: node.scope.kind, nodeId: node.id, canonicalId: canonical(node), name: node.name,
      property, raw, value: values, layout: node.attributes.layout ?? null })
  }
  const spaceUses = new Map()
  for (const use of occurrences.filter(use => ['padding', 'gap', 'margin'].includes(use.property))) {
    for (const value of new Set(pxValues(use.value))) {
      const uses = spaceUses.get(value) ?? []; uses.push(use); spaceUses.set(value, uses)
    }
  }
  const shared = [...spaceUses].filter(([, uses]) => new Set(uses.map(u => u.canonicalId)).size >= 2).sort(([a], [b]) => a - b)
  const spacing = Object.fromEntries(shared.map(([value, uses]) => [`space${value}`, {
    value: `${value}px`, cssVariable: `--space-${value}`, sourceNodes: new Set(uses.map(u => u.canonicalId)).size,
    properties: [...new Set(uses.map(u => u.property))],
  }]))
  const singleToken = (cssVariable, value, predicate) => {
    const uses = occurrences.filter(predicate)
    if (!uses.length) throw new Error(`Missing source for ${cssVariable}`)
    return { value, cssVariable, sourceNodes: new Set(uses.map(u => u.canonicalId)).size }
  }
  const radii = {
    none: singleToken('--radius-none', '0px', u => u.property === '$control__radius' && u.value === '0px'),
    subtle: singleToken('--radius-subtle', '1px', u => u.property === 'radius' && u.value === '1px'),
    avatar: singleToken('--radius-avatar', '56px', u => u.property === 'radius' && u.value === '56px'),
  }
  const borders = {
    hairline: singleToken('--border-width-hairline', '1px', u => ['borderTop', 'borderBottom'].includes(u.property) && u.value === '1px'),
    separator: singleToken('--border-separator', '1px solid var(--color-neutral-600)', u => ['borderTop', 'borderBottom'].includes(u.property) && u.value === '1px' && nodes.get(u.nodeId).attributes.borderStyle === 'solid' && resolve(nodes.get(u.nodeId).attributes.borderColor) === 'var(--color-neutral-600)'),
    formInput: singleToken('--border-form-input', '1px solid var(--color-neutral-950)', u => u.property === 'border' && u.value === '1px solid var(--color-neutral-950)'),
  }
  const shadows = {
    formFocus: singleToken('--shadow-form-focus', '2px 2px 0px 0px var(--color-neutral-950)', u => u.property === 'formInputFocusedBoxShadow' && u.value?.[0] === '2px 2px 0px 0px var(--color-neutral-950)'),
  }
  const related = (scopePath, name) => [...nodes.values()].filter(node => node.scope.path === scopePath && node.name === name)
  const quote = related('/', 'Quote')
  const process = related('/', 'Process')
  const responsive = (name, candidates, readValue) => {
    const slots = { phone: 0, tablet: 810, desktop: 1200 }
    const result = {}
    for (const [label, minWidth] of Object.entries(slots)) {
      const node = candidates.find(candidate => candidate.ancestry.some(a => a.name === ({ phone: 'Phone', tablet: 'Tablet', desktop: 'Desktop' })[label]))
      if (!node) throw new Error(`Missing responsive geometry ${name}/${label}`)
      const value = readValue(node)
      if (!/^\d+(?:\.\d+)?px$/.test(value)) throw new Error(`Invalid responsive geometry ${name}/${label}`)
      result[label] = { minWidth, value }
    }
    return { cssVariable: `--layout-${name}`, breakpoints: result }
  }
  const layout = {
    pageGutter: responsive('page-gutter', quote, n => `${pxValues(n.attributes.padding)[1]}px`),
    sectionBlock: responsive('section-block', process, n => `${pxValues(n.attributes.padding)[0]}px`),
    contentMeasure: singleToken('--layout-content-measure', '640px', u => u.property === 'maxWidth' && u.value === '640px'),
  }
  const insets = {
    pageInline: { cssVariable: '--inset-page-inline', value: '0px var(--layout-page-gutter)' },
    section: { cssVariable: '--inset-section', value: 'var(--layout-section-block) var(--layout-page-gutter)' },
  }
  const gaps = Object.fromEntries(['0px 8px', '8px 8px', '60px 8px'].filter(value => occurrences.some(u => u.property === 'gap' && u.layout === 'grid' && u.value === value)).map(value => {
    const [row, column] = pxValues(value)
    return [`rows${row}Columns${column}`, singleToken(`--gap-rows-${row}-columns-${column}`, `var(--space-${row}) var(--space-${column})`, u => u.property === 'gap' && u.layout === 'grid' && u.value === value)]
  }))
  const tokens = { spacing, insets, gaps, radii, borders, shadows, layout }
  return { tokens, audit: {
    capturedAt: source.capturedAt, methodology: 'Explicit serialized properties; replica source IDs deduplicated per numeric value. Shared spacing appears on at least two independent source nodes. Not Framer named global styles.',
    coverage: source.scopes.map(({ kind, name, path, status, nodes }) => ({ kind, name, path, status, nodeCount: nodes.length })),
    variables: [...variables].map(([id, value]) => ({ id, value })),
    spacingUses: Object.fromEntries([...spaceUses].sort(([a], [b]) => a - b).map(([value, uses]) => [`${value}px`, { shared: new Set(uses.map(u => u.canonicalId)).size >= 2, independentNodes: new Set(uses.map(u => u.canonicalId)).size, uses }])),
    marginProperties: occurrences.filter(u => u.property === 'margin').length,
    occurrences, errors: source.errors,
  } }
}

export function renderGeometry(tokens) {
  const banner = '/* Generated from geometry-source.json. Run pnpm tokens:generate. */\n'
  const scalar = Object.values(tokens).flatMap(group => Object.values(group)).filter(token => 'value' in token)
  const css = [banner, ':root {', ...scalar.map(token => `  ${token.cssVariable}: ${token.value};`), '}']
  for (const token of Object.values(tokens.layout).filter(token => 'breakpoints' in token)) {
    for (const bp of Object.values(token.breakpoints)) {
      const rule = `  ${token.cssVariable}: ${bp.value};`
      css.push(bp.minWidth === 0 ? `:root {\n${rule}\n}` : `@media (min-width: ${bp.minWidth}px) {\n  :root {\n  ${rule}\n  }\n}`)
    }
  }
  const ts = banner + Object.entries(tokens).map(([name, group]) => `export const ${name} = ${JSON.stringify(group, null, 2)} as const\n`).join('\n') + '\nexport type SpaceToken = keyof typeof spacing\nexport type RadiusToken = keyof typeof radii\n'
  return { 'src/styles/geometry.ts': ts, 'src/styles/geometry.css': css.join('\n') + '\n' }
}
