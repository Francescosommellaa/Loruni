import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { deriveGeometry, renderGeometry } from './geometry.mjs'
import { deriveDesignAudit, renderDesignAudit } from './design-audit.mjs'
import { auditHardcodes } from './hardcodes.mjs'

const root = new URL('../../', import.meta.url)
const approvedPolicy = JSON.parse(await readFile(new URL('docs/framer/token-policy.json', root), 'utf8'))
export const slug = (path) => path.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const key = (path) => slug(path).replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase())
const banner = '/* Generated from token-source.json and token-policy.json. Run pnpm tokens:generate. */\n'

export function normalizeTokens(source, policy = approvedPolicy) {
  if (source.sourceProjectId !== 'F3868vuk7YeE7pDEgpP6' || source.readOnly !== true) throw new Error('Unexpected token source')
  const colors = Object.fromEntries(source.colorStyles.map((style) => [key(style.path), {
    path: style.path, cssVariable: `--color-${slug(style.path)}`, light: style.light, dark: style.dark,
  }]))
  const colorIds = new Set(source.colorStyles.map((style) => style.id))
  const colorVariables = new Map(source.colorStyles.map((style) => [style.id, `--color-${slug(style.path)}`]))
  const resolveColor = (value) => typeof value !== 'string' ? value : value.replace(/var\(--token-([^)]+)\)/g, (_, id) => {
    if (!colorVariables.has(id)) throw new Error(`Unknown color reference ${id}`)
    return `var(${colorVariables.get(id)})`
  })
  const typography = Object.fromEntries(source.textStyles.map((style) => {
    const node = source.styleTrees.find((candidate) => candidate.id === style.id)
    if (!node?.attributes?.breakpoint) throw new Error(`Missing responsive source for ${style.path}`)
    if (typeof style.color === 'object' && !colorIds.has(style.color.id)) throw new Error(`Unknown color in ${style.path}`)
    const attrs = node.attributes
    const desktop = attrs.breakpoint.default
    const breakpoints = Object.entries(attrs.breakpoint).map(([label, value]) => ({
      label, minWidth: Number.parseFloat(value.minWidth),
      ...Object.fromEntries(dimensions.map((name) => [name, value[name] ?? desktop[name]])),
    })).sort((a, b) => a.minWidth - b.minWidth)
    if (breakpoints[0]?.minWidth !== 0 || breakpoints.some((bp) => !Number.isFinite(bp.minWidth)) || new Set(breakpoints.map((bp) => bp.minWidth)).size !== breakpoints.length) {
      throw new Error(`Ambiguous responsive intervals for ${style.path}`)
    }
    const fontValue = (font) => {
      if (!font) return null
      const corrected = font.family === 'Inter' ? {
        family: font.style === 'italic' ? policy.interReplacement.italicFamily : style.font.family,
        weight: Math.min(font.weight, policy.interReplacement.maxWeight), style: font.style,
      } : { family: font.family, weight: font.weight, style: font.style }
      if (!policy.allowedFamilies.includes(corrected.family)) throw new Error(`Unapproved font family ${corrected.family}`)
      return corrected
    }
    const font = fontValue(style.font)
    const boldFont = fontValue(style.boldFont)
    const italicFont = fontValue(style.italicFont)
    const boldItalicFont = fontValue(style.boldItalicFont)
    return [key(style.path), {
      path: style.path, className: `text-${slug(style.path)}`, cssPrefix: `--text-${slug(style.path)}`,
      tag: style.tag, font, boldFont, italicFont, boldItalicFont,
      color: resolveColor(attrs.textColor), alignment: attrs.textAlignment ?? style.alignment,
      transform: attrs.textTransform ?? style.transform, wrap: attrs.textWrap ?? (style.balance ? 'balance' : 'wrap'),
      features: attrs.openTypeFontFeatures ?? {}, decoration: style.decoration, decorationColor: style.decorationColor,
      decorationThickness: style.decorationThickness, decorationStyle: style.decorationStyle,
      decorationSkipInk: style.decorationSkipInk, decorationOffset: style.decorationOffset,
      breakpoints,
    }]
  }))
  const links = Object.fromEntries(source.styleTrees.filter((n) => n.type === 'LinkStylePresetNode').map((style) => [key(style.name), {
    path: style.name, className: `link-${slug(style.name)}`,
    states: Object.fromEntries(Object.entries(style.attributes).map(([state, attrs]) => [state,
      Object.fromEntries(Object.entries(attrs).map(([name, value]) => [name, resolveColor(value)])),
    ])),
  }]))
  if (Object.keys(colors).length !== source.colorStyles.length || Object.keys(typography).length !== source.textStyles.length) {
    throw new Error('Token names collide')
  }
  const fontAssets = [...source.fontAssets.filter((font) => policy.allowedFamilies.includes(font.family)), ...policy.fontAssets]
  const fonts = Object.fromEntries([...new Set(fontAssets.map((f) => f.family))].map((name) => [key(name), {
    family: name, cssVariable: `--font-${slug(name)}`,
    faces: fontAssets.filter((f) => f.family === name).map((f) => ({ weight: f.weight, style: f.style, src: f.localUrl })),
  }]))
  for (const preset of Object.values(typography)) {
    for (const font of [preset.font, preset.boldFont, preset.italicFont, preset.boldItalicFont].filter(Boolean)) {
      const faces = fonts[key(font.family)]?.faces ?? []
      if (!faces.some((face) => face.weight === font.weight && face.style === font.style)) throw new Error(`Missing font face for ${preset.path}: ${font.family} ${font.weight} ${font.style}`)
    }
  }
  return { colors, typography, links, fonts }
}

const family = (font) => `var(--font-${slug(font.family)})`
const declarations = (pairs) => pairs.filter(([, value]) => value != null).map(([prop, value]) => `  ${prop}: ${value};`).join('\n')
const dimensions = ['fontSize', 'lineHeight', 'letterSpacing', 'paragraphSpacing']
const cssDimension = { fontSize: 'font-size', lineHeight: 'line-height', letterSpacing: 'letter-spacing', paragraphSpacing: 'paragraph-spacing' }

export function renderTokens(source) {
  const tokens = normalizeTokens(source)
  const uniqueColors = new Map()
  const colorDeclarations = Object.values(tokens.colors).map(c => {
    const previous = uniqueColors.get(c.light)
    uniqueColors.set(c.light, previous ?? c.cssVariable)
    return [c.cssVariable, previous ? `var(${previous})` : c.light]
  })
  const css = [banner, ':root {', declarations(colorDeclarations), declarations(Object.values(tokens.fonts).map((f) => [f.cssVariable, `${JSON.stringify(f.family)}, sans-serif`])), '}']
  const darkColors = Object.values(tokens.colors).filter((c) => c.dark != null)
  if (darkColors.length) css.push('[data-color-theme="dark"] {', declarations(darkColors.map((c) => [c.cssVariable, c.dark])), '}')
  for (const style of Object.values(tokens.typography)) {
    const [narrowest, ...wider] = style.breakpoints
    const variables = (bp) => declarations(dimensions.map((name) => [`${style.cssPrefix}-${cssDimension[name]}`, bp[name]]))
    css.push(':root {', variables(narrowest), '}')
    for (const bp of wider) css.push(`@media (min-width: ${bp.minWidth}px) {`, '  :root {', variables(bp), '  }', '}')
    const selector = `.${style.className}, [data-text-style=${JSON.stringify(style.path)}]`
    css.push(`${selector} {`, declarations([
      ['font-family', family(style.font)], ['font-weight', style.font.weight], ['font-style', style.font.style],
      ['font-size', `var(${style.cssPrefix}-font-size)`], ['line-height', `var(${style.cssPrefix}-line-height)`],
      ['letter-spacing', `var(${style.cssPrefix}-letter-spacing)`], ['color', style.color],
      ['text-align', style.alignment], ['text-transform', style.transform], ['text-wrap', style.wrap],
      ['font-feature-settings', Object.entries(style.features).map(([name, value]) => `${JSON.stringify(name)} ${value === 'on' ? 1 : 0}`).join(', ') || 'normal'],
      ['text-decoration-line', style.decoration], ['text-decoration-color', style.decorationColor],
      ['text-decoration-thickness', style.decorationThickness], ['text-decoration-style', style.decorationStyle],
      ['text-decoration-skip-ink', style.decorationSkipInk], ['text-underline-offset', style.decorationOffset],
    ]), '}')
    css.push(`:is(.${style.className}, [data-text-style=${JSON.stringify(style.path)}]) > p + p {`, `  margin-block-start: var(${style.cssPrefix}-paragraph-spacing);`, '}')
    for (const [tag, font] of [[':is(strong, b)', style.boldFont], [':is(em, i)', style.italicFont], [':is(strong, b) :is(em, i), :is(em, i) :is(strong, b)', style.boldItalicFont]]) {
      if (!font) continue
      const scope = `:is(.${style.className}, [data-text-style=${JSON.stringify(style.path)}])`
      // Both nesting orders must resolve to the explicit boldItalic font.
      const rule = tag.startsWith(':is(strong, b) :is')
        ? `${scope} :is(strong, b) :is(em, i), ${scope} :is(em, i) :is(strong, b)`
        : `${scope} ${tag}`
      css.push(`${rule} {`, declarations([['font-family', family(font)], ['font-weight', font.weight], ['font-style', font.style]]), '}')
    }
  }
  for (const link of Object.values(tokens.links)) {
    for (const [state, attrs] of Object.entries(link.states)) {
      const suffix = { link: '', hover: ':hover', visited: ':visited', active: ':active' }[state]
      if (suffix === undefined) throw new Error(`Unknown link state: ${state}`)
      const properties = { textColor: 'color', textDecoration: 'text-decoration', textDecorationColor: 'text-decoration-color' }
      const pairs = Object.entries(attrs).map(([prop, value]) => {
        if (!properties[prop]) throw new Error(`Unmapped link property ${prop}`)
        return [properties[prop], value]
      })
      css.push(`.${link.className}${suffix} {`, declarations(pairs), '}')
    }
  }
  const fonts = [banner, ...Object.values(tokens.fonts).flatMap((font) => font.faces.map((face) => `@font-face {\n${declarations([
    ['font-family', JSON.stringify(font.family)], ['font-style', face.style], ['font-weight', face.weight],
    ['font-display', 'swap'], ['src', `url(${JSON.stringify(face.src)}) format("woff2")`],
  ])}\n}`))]
  const breakpoints = Object.fromEntries(source.pageBreakpoints.map((bp) => [bp.name.toLowerCase(), bp.mediaQueryRange]))
  const colorValues = Object.fromEntries([...uniqueColors].map(([value, cssVariable]) => [key(cssVariable.replace('--color-', '')), value]))
  const valueNames = new Map(Object.entries(colorValues).map(([name, value]) => [value, name]))
  const colorTS = `export const colorValues = ${JSON.stringify(colorValues, null, 2)} as const\n\nexport const colors = {\n${Object.entries(tokens.colors).map(([name, c]) => `  ${name}: { path: ${JSON.stringify(c.path)}, cssVariable: ${JSON.stringify(c.cssVariable)}, light: colorValues.${valueNames.get(c.light)}, dark: ${JSON.stringify(c.dark)} },`).join('\n')}\n} as const\n`
  const ts = banner + colorTS + ['typography', 'links', 'fonts'].map((name) => `export const ${name} = ${JSON.stringify(tokens[name], null, 2)} as const\n`).join('\n') +
    `\nexport const breakpoints = ${JSON.stringify(breakpoints, null, 2)} as const\n\nexport type ColorToken = keyof typeof colors\nexport type TextToken = keyof typeof typography\n`
  return { 'src/styles/tokens.ts': ts, 'src/styles/tokens.css': css.join('\n') + '\n', 'src/styles/fonts.css': fonts.join('\n\n') + '\n' }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const source = JSON.parse(await readFile(new URL('docs/framer/token-source.json', root), 'utf8'))
  const geometrySource = JSON.parse(await readFile(new URL('docs/framer/geometry-source.json', root), 'utf8'))
  const geometry = deriveGeometry(geometrySource, source.colorStyles)
  const designSource = JSON.parse(await readFile(new URL('docs/framer/design-source.json', root), 'utf8'))
  const design = deriveDesignAudit(designSource, source)
  const namedOutputs = renderTokens(source)
  const geometryOutputs = renderGeometry(geometry.tokens)
  const expanded = renderDesignAudit(design, geometry.tokens)
  const canonicalTS = namedOutputs['src/styles/tokens.ts'] + '\n' + geometryOutputs['src/styles/geometry.ts'] + '\n' + expanded.ts + '\nexport const semantic = { colors, typography, links, fonts, breakpoints, spacing, insets, gaps, radii, borders, shadows, layout } as const\nexport const tokens = { primitive: { namedColor: colorValues, ...primitive }, semantic, component, controlDefaults, motion } as const\nexport type DesignTokens = typeof tokens\n'
  const canonicalCSS = namedOutputs['src/styles/tokens.css'] + '\n' + geometryOutputs['src/styles/geometry.css'] + '\n' + expanded.css
  const declared = new Set([...canonicalCSS.matchAll(/(--[\w-]+)\s*:/g)].map(match => match[1]))
  for (const match of canonicalCSS.matchAll(/var\((--[\w-]+)/g)) if (!declared.has(match[1])) throw new Error(`Missing CSS token dependency ${match[1]}`)
  if (/--(?:token|variable)-|\[object Object\]|undefined/.test(canonicalCSS)) throw new Error('Unresolved source data in token CSS')
  const outputs = {
    'src/styles/token.ts': canonicalTS, 'src/styles/token.css': canonicalCSS,
    'src/styles/tokens.ts': "export * from './token'\n", 'src/styles/tokens.css': "@import './token.css';\n",
    'src/styles/geometry.ts': "export { spacing, insets, gaps, radii, borders, shadows, layout } from './token'\nexport type { SpaceToken, RadiusToken } from './token'\n",
    'src/styles/geometry.css': "@import './token.css';\n",
    'src/styles/fonts.css': namedOutputs['src/styles/fonts.css'],
    'docs/framer/geometry-audit.json': JSON.stringify(geometry.audit, null, 2) + '\n',
    'docs/framer/design-audit.json': JSON.stringify(design.audit, null, 2) + '\n',
    'docs/framer/hardcoded-audit.json': JSON.stringify(await auditHardcodes(root, design, geometry.tokens), null, 2) + '\n',
  }
  for (const [path, content] of Object.entries(outputs)) {
    const url = new URL(path, root)
    if (process.argv.includes('--check')) {
      if (await readFile(url, 'utf8') !== content) throw new Error(`Generated tokens are stale: ${path}`)
    } else await writeFile(url, content)
  }
  console.log(process.argv.includes('--check') ? 'Token outputs match source.' : 'TypeScript tokens, CSS tokens and font faces generated.')
}
