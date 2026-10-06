const slug = value => String(value).replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const key = value => slug(value).replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())
const valueKey = value => {
  if (typeof value === 'number' || /^-?\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|deg|s)?$/.test(value)) {
    return `value${String(value).replace('-', 'Negative').replace('.', 'Point').replace('%', 'Percent')}`
  }
  return key(value)
}
const scalarProperties = new Set(['fill', 'textColor', 'formInputIconColor', 'formInputPlaceholderColor', 'borderColor', 'border', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight', 'borderStyle', 'radius', 'opacity', 'zIndex', 'width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight', 'aspectRatio', 'fontSize', 'fontWeight', 'fontStyle', 'fontName', 'lineHeight', 'letterSpacing', 'paragraphSpacing', 'textTransform', 'textAlignment', 'textWrap', 'textDecorationStyle', 'rotation', 'scale', 'blur', 'backdropBlur', 'grayscale', 'invert', 'gridColumnCount', 'gridRowCount', 'gridColumnMinWidth', 'gridColumnWidth', 'gridRowHeight', 'gridItemColumnSpan', 'gridItemRowSpan'])
const structural = new Set(['left', 'right', 'top', 'bottom', 'centerAnchorX', 'centerAnchorY', 'position', 'layout', 'stackDirection', 'stackDistribution', 'stackAlignment', 'stackWrapEnabled', 'overflow', 'overflowX', 'overflowY', 'visible', 'pointerEvents', 'userSelect', 'constraintsLocked', 'gridAlignment', 'gridRowHeightType', 'gridItemHorizontalAlignment', 'gridItemVerticalAlignment'])
const controlDesign = /color|fill|background|padding|radius|shadow|border|font|opacity|transition|stagger|parallax|speed|intensity|resolution|cursor|power|distortion|delay|duration|align|transform/i

export function deriveDesignAudit(source, named) {
  if (source.sourceProjectId !== 'F3868vuk7YeE7pDEgpP6' || !source.readOnly) throw new Error('Unexpected design audit source')
  const nodes = new Map(source.scopes.flatMap(scope => scope.nodes.map(n => [n.id, n])))
  const variables = new Map([...nodes.values()].flatMap(n => n.variables.map(v => [v.id, v.initialValue])))
  const colors = new Map(named.colorStyles.map(c => [c.id, `--color-${slug(c.path)}`]))
  const resolve = (raw, visited = new Set()) => {
    if (typeof raw !== 'string') return raw
    return raw.replace(/var\(--variable-([^),]+)\)/g, (match, id) => {
      if (!variables.has(id) || visited.has(id)) return match
      const initial = variables.get(id)
      if (typeof initial !== 'number' && typeof initial !== 'string') return match
      return resolve(initial, new Set([...visited, id]))
    }).replace(/var\(--token-([^),]+)(?:,\s*([^)]*\([^)]*\)|[^)]*))?\)/g, (match, id) => colors.has(id) ? `var(${colors.get(id)})` : match).replace(/\s*\/\*.*?\*\//g, '')
  }
  const canonical = node => {
    if (node.api) return null
    const seen = new Set()
    while (node.originalId && nodes.has(node.originalId)) {
      if (seen.has(node.id)) throw new Error('Cyclic source replica')
      seen.add(node.id); node = nodes.get(node.originalId)
    }
    return node.originalId ?? node.id
  }
  const primitive = {}, component = {}, occurrences = [], recipes = [], transitions = new Map()
  const add = (category, value, use, suggested) => {
    if (value == null || value === 'null' || value === '' || typeof value === 'boolean') return null
    const resolved = resolve(value)
    if (typeof resolved !== 'string' && typeof resolved !== 'number') return null
    if (['true', 'false'].includes(resolved)) {
      occurrences.push({ ...use, raw: value, classification: 'C', reason: 'Discrete control state; not a style scalar' }); return null
    }
    if (/^(https?:|data:)|^\[object Object\]$|^undefined$/.test(String(resolved))) {
      occurrences.push({ ...use, raw: value, value: resolved, classification: 'B', reason: 'Media asset or serializer artifact; not a design scalar' }); return null
    }
    if (/--(?:variable|token)-/.test(String(resolved))) {
      occurrences.push({ ...use, raw: value, value: resolved, classification: 'B', reason: 'Unresolved source binding; not emitted' }); return null
    }
    const group = primitive[category] ??= {}
    const existing = Object.entries(group).find(([, token]) => token.value === resolved)
    let name = existing?.[0] ?? suggested ?? valueKey(resolved)
    if (group[name] && group[name].value !== resolved) name = valueKey(resolved)
    if (!name) throw new Error(`Unnamed token ${category}`)
    if (group[name] && group[name].value !== resolved) throw new Error(`Token collision ${category}/${name}`)
    group[name] ??= { value: resolved, cssVariable: `--source-${slug(category)}-${slug(name)}` }
    const path = `primitive.${category}.${name}`
    occurrences.push({ ...use, raw: value, value: resolved, token: path, classification: 'A' })
    return { token: path, value: resolved, cssVariable: group[name].cssVariable }
  }
  const transition = (raw, use) => {
    if (typeof raw !== 'string') return
    let config, parsed
    if (raw.startsWith('{')) {
      try { parsed = JSON.parse(raw) } catch { return }
      config = parsed
    } else {
      const parts = raw.split(' ')
      if (parts[0] === 'tween') config = { type: 'tween', ease: parts[1].split(',').map(Number), duration: parts[2], delay: parts[3] }
      else if (parts[0] === 'spring-physics') config = { type: 'spring', stiffness: Number(parts[1]), damping: Number(parts[2]), mass: Number(parts[3]), delay: parts[4] }
      else if (parts[0] === 'spring-duration') config = { type: 'spring', duration: parts[1], bounce: Number(parts[2]), delay: parts[3] }
      else if (raw === 'instant') config = { type: 'instant' }
      else { occurrences.push({ ...use, raw, classification: 'B', reason: 'Unknown Framer transition grammar' }); return }
    }
    const id = key(`${use.context}-${use.property}`) || 'transition'
    const existing = [...transitions].find(([, item]) => item.raw === raw)
    let name = existing?.[0] ?? id
    if (transitions.has(name) && transitions.get(name).raw !== raw) name = `${name}${key(raw.replace(/([\s,])-([\d])/g, '$1negative$2'))}`
    if (!transitions.has(name)) {
      const fields = {}
      for (const [property, value] of Object.entries(config)) {
        if (property === 'ease' && Array.isArray(value)) {
          fields[property] = add('easing', `cubic-bezier(${value.join(',')})`, { ...use, property: `${use.property}.ease` }, `curve${value.map(v => String(v).replace('-', 'Negative').replace('.', 'Point')).join('And')}`)
        } else if (typeof value === 'number' || /s$/.test(String(value))) fields[property] = add(`motion${property[0].toUpperCase()}${property.slice(1)}`, value, { ...use, property: `${use.property}.${property}` })
      }
      transitions.set(name, { raw, config, fields, cssVariable: `--source-transition-${slug(name)}` })
    }
    occurrences.push({ ...use, raw, value: config, token: `motion.transitions.${name}`, classification: 'A' })
  }
  const nested = (value, use, context) => {
    if (!value || typeof value !== 'object') return
    for (const [prop, v] of Object.entries(value)) {
      const sourceName = nodes.get(prop)?.name ?? prop
      const child = { ...use, property: `${use.property}.${sourceName}` }
      if (['target', 'fromVariant', 'toVariant', 'id', 'overlay', 'variant'].includes(prop)) continue
      if (prop === 'transition' || (prop === 'enter' || prop === 'exit') && typeof v === 'string') transition(v, child)
      else if (prop === 'delay' || prop === 'stagger' || prop === 'repeatDelay') add(`motion${prop[0].toUpperCase()}${prop.slice(1)}`, v, child)
      else if (['opacity', 'blur', 'scale', 'rotate', 'rotateX', 'rotateY', 'skewX', 'skewY', 'x', 'y', 'velocity', 'hoverModifier', 'speed', 'threshold'].includes(prop)) add(`effect${prop[0].toUpperCase()}${prop.slice(1)}`, v, child)
      else if (['mask', 'fill', 'color', 'backgroundColor'].includes(prop) && typeof v === 'string') add(prop === 'mask' ? 'mask' : 'color', v, child, key(context))
      else if (typeof v === 'object') nested(v, child, context)
    }
  }
  for (const scope of source.scopes) for (const node of scope.nodes) {
    const context = [scope.name, ...node.ancestry.slice(1).map(a => a.name), node.name].filter(Boolean).join('/')
    const local = {}
    for (const [property, raw] of Object.entries(node.attributes)) {
      const use = { scope: scope.name, kind: scope.kind, nodeId: node.id, canonicalId: canonical(node), nodeName: node.name, context, property }
      if (structural.has(property) || ['auto', '1fr', '100%', 'fit-content'].includes(raw)) {
        occurrences.push({ ...use, raw, classification: 'C', reason: 'Structural layout, positioning or visibility; consumer-owned' }); continue
      }
      if (property === 'transition' || property === '$control__transition') { transition(raw, use); continue }
      if (/Effect$/.test(property) || ['backdrop', 'masks', 'textSelection', 'onAppear', 'openTypeFontFeatures'].includes(property)) { nested(raw, use, context); continue }
      if (property === '$control__font') {
        let font
        try { font = JSON.parse(raw) } catch { continue }
        for (const [field, v] of Object.entries(font)) {
          if (field === 'fontSelector') continue
          const unitValue = Array.isArray(v) && typeof v[0] === 'number' && typeof v[1] === 'string' ? `${v[0]}${v[1]}` : v
          local[field] = add(field, unitValue, { ...use, property: `${property}.${field}` })
        }
        continue
      }
      if (['padding', 'gap', 'margin'].includes(property)) {
        local[property] = add(property, raw, use, key(context))
        if (typeof raw === 'string') for (const value of raw.split(/\s+/)) if (/^-?\d+(\.\d+)?px$/.test(value)) add('space', value, use)
      } else if (scalarProperties.has(property)) {
        if (typeof raw === 'number' && /^(min|max)?(Width|Height)$|^(width|height)$/.test(property)) { occurrences.push({ ...use, raw, classification: 'B', reason: 'Unit unspecified by serialized source' }); continue }
        local[property] = add(property, raw, use, /gradient|var\(/.test(String(raw)) ? key(context) : undefined)
      } else if (property.startsWith('$control__') && controlDesign.test(property)) {
        local[property] = add(`control${property.slice(10)[0]?.toUpperCase() ?? ''}${property.slice(11)}`, raw, use, key(context))
      } else if (/shadow/i.test(property) && Array.isArray(raw)) {
        local[property] = add('shadow', raw.join(', '), use, key(context))
      }
    }
    // Variant roots and named immediate parts retain source roles; deeper/unnamed geometry stays primitive.
    if (scope.kind === 'component' && node.ancestry.length >= 1 && node.ancestry.length <= 2 && node.name && Object.values(local).some(Boolean)) {
      const ground = node.ancestry.length === 1 ? node : nodes.get(node.ancestry[1].id)
      if (!ground || ground.type !== 'FrameNode') continue
      const group = component[key(scope.name)] ??= {}
      const name = key(`${ground.name}${ground.gesture ? `-${ground.gesture}` : ''}`)
      const target = group[name] ??= {}
      for (const [property, ref] of Object.entries(local).filter(([, v]) => v)) {
        const field = node.ancestry.length === 1 ? property : key(`${node.name}-${property.replace('$control__', '')}`)
        if (target[field] && target[field].token !== ref.token) {
          occurrences.push({ scope: scope.name, nodeId: node.id, raw: ref.value, classification: 'B', reason: 'Ambiguous named component part; primitive retained' }); continue
        }
        target[field] = ref
      }
      recipes.push({ path: `component.${key(scope.name)}.${name}`, nodeId: node.id, context })
    }
  }
  const controlDefaults = {}
  for (const [id, entry] of Object.entries(source.controls)) {
    const name = source.controlNames[id]
    if (!name) continue
    const properties = {}
    for (const [property, control] of Object.entries(entry[id]?.controls ?? {})) {
      if (!controlDesign.test(property) || control.defaultValue == null) continue
      const use = { scope: name, kind: 'control-default', nodeId: id, canonicalId: id, context: name, property }
      const ref = add(`control${property.slice(10)[0]?.toUpperCase() ?? ''}${property.slice(11)}`, control.defaultValue, use, key(name))
      if (ref) properties[property.slice(10)] = ref
    }
    if (Object.keys(properties).length) controlDefaults[key(name)] = properties
  }
  for (const literal of source.code) {
    const use = { scope: literal.file, kind: 'code', nodeId: null, canonicalId: `${literal.file}:${literal.line}`, nodeName: literal.context.join('/'), context: literal.context.join('/'), property: literal.property, line: literal.line }
    if (literal.property === 'defaultValue') {
      const role = literal.context.at(-1)
      if (['color', 'textColor', 'backgroundColor'].includes(role)) add('color', literal.value, use, key(`${literal.file}-${role}`))
      else if (['delay', 'duration'].includes(role)) add(`motion${role[0].toUpperCase()}${role.slice(1)}`, literal.value, use)
      else occurrences.push({ ...use, raw: literal.value, classification: 'B', reason: 'Control content/options, not a shared design token' })
    } else if (literal.property === 'ease' && Array.isArray(literal.value)) add('easing', `cubic-bezier(${literal.value.join(',')})`, use, 'textStagger')
    else if (['color', 'backgroundColor', 'fontVariationSettings'].includes(literal.property) || typeof literal.value === 'number' || /^-?\d/.test(String(literal.value))) add(literal.property, literal.value, use)
  }
  const inventory = Object.fromEntries(Object.entries(primitive).map(([category, group]) => [category, Object.fromEntries(Object.entries(group).map(([name, t]) => {
    const uses = occurrences.filter(u => u.token === `primitive.${category}.${name}`)
    return [name, { ...t, occurrences: uses.length, independentNodes: new Set(uses.map(u => u.canonicalId)).size, properties: [...new Set(uses.map(u => u.property))], uses }]
  }))]))
  // Isolated spaces are retained inside their exact padding/gap recipe, never added to a shared scale.
  for (const [name, token] of Object.entries(inventory.space ?? {})) if (token.independentNodes < 2) {
    delete primitive.space[name]
    for (const use of occurrences.filter(u => u.token === `primitive.space.${name}`)) { delete use.token; use.classification = 'B'; use.reason = 'Isolated spacing; exact local recipe retained' }
  }
  return { primitive, component, controlDefaults, motion: { transitions: Object.fromEntries(transitions) }, audit: {
    capturedAt: source.capturedAt, lastVerifiedAt: named.lastVerifiedAt, coverage: source.scopes.map(s => ({ kind: s.kind, name: s.name, status: s.status, nodeCount: s.nodes.length })),
    methodology: 'Explicit serialized attributes only; measured $rect and absolute coordinates excluded. Exact values and units; replica IDs resolved for counts. Roles remain source property names. Variant roots are component recipes. CSS spring fields are data, not a CSS animation substitute.',
    inventory, recipes, occurrences, errors: source.errors, limits: source.limits,
    namedTokens: named.colorStyles.map(c => ({ token: `semantic.colors.${key(c.path)}`, sourceId: c.id, sourcePath: c.path, light: c.light, dark: c.dark })).concat(named.textStyles.map(t => ({ token: `semantic.typography.${key(t.path)}`, sourceId: t.id, sourcePath: t.path }))),
  } }
}

export function renderDesignAudit(design, geometry) {
  const css = [':root {']
  const shared = { space: 'spacing', radius: 'radii', shadow: 'shadows' }
  const primitiveTS = Object.entries(design.primitive).map(([category, group]) => `${JSON.stringify(category)}: {\n${Object.entries(group).map(([name, token]) => {
    const sharedGroup = shared[category]
    const match = sharedGroup && Object.entries(geometry[sharedGroup]).find(([, t]) => t.value === token.value)
    css.push(`  ${token.cssVariable}: ${match ? `var(${match[1].cssVariable})` : token.value};`)
    const expression = match ? `${sharedGroup}[${JSON.stringify(match[0])}].value` : JSON.stringify(token.value)
    return `${JSON.stringify(name)}: { value: ${expression}, cssVariable: ${JSON.stringify(token.cssVariable)} },`
  }).join('\n')}\n},`).join('\n')
  for (const t of Object.values(design.motion.transitions)) {
    css.push(`  ${t.cssVariable}: ${t.raw};`)
    for (const [name, field] of Object.entries(t.fields)) if (field) css.push(`  ${t.cssVariable}-${slug(name)}: var(${field.cssVariable});`)
  }
  const renderRef = ref => {
    const path = ref.token.replace(/^primitive\./, 'primitive.')
    return path.split('.').reduce((acc, part) => `${acc}[${JSON.stringify(part)}]`, '').replace(/^\["primitive"\]/, 'primitive')
  }
  const componentTS = Object.entries(design.component).map(([name, variants]) => `${JSON.stringify(name)}: {\n${Object.entries(variants).map(([variant, props]) => `${JSON.stringify(variant)}: {\n${Object.entries(props).map(([prop, ref]) => {
    const variable = `--component-${slug(name)}-${slug(variant)}-${slug(prop.replace('$control__', ''))}`
    css.push(`  ${variable}: var(${ref.cssVariable});`)
    return `${JSON.stringify(prop)}: { value: ${renderRef(ref)}.value, cssVariable: ${JSON.stringify(variable)} },`
  }).join('\n')}\n},`).join('\n')}\n},`).join('\n')
  css.push('}')
  const defaultsTS = Object.entries(design.controlDefaults).map(([name, properties]) => `${JSON.stringify(name)}: { ${Object.entries(properties).map(([prop, ref]) => `${JSON.stringify(prop)}: ${renderRef(ref)}`).join(', ')} },`).join('\n')
  const ts = `export const primitive = {\n${primitiveTS}\n} as const\n\nexport const component = {\n${componentTS}\n} as const\n\nexport const controlDefaults = {\n${defaultsTS}\n} as const\n\nexport const motion = ${JSON.stringify(design.motion, null, 2)} as const\n`
  return { ts, css: css.join('\n') + '\n' }
}
