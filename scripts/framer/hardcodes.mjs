import { readFile, readdir } from 'node:fs/promises'

export async function auditHardcodes(root, design, geometry) {
  const files = []
  async function walk(dir) {
    for (const entry of await readdir(new URL(dir, root), { withFileTypes: true })) {
      const path = `${dir}${entry.name}`
      if (entry.isDirectory()) await walk(`${path}/`)
      else if (/\.(css|tsx?|jsx?)$/.test(path) && !/src\/styles\/(token|tokens|geometry|fonts)\.(ts|css)$/.test(path)) files.push(path)
    }
  }
  await walk('src/')
  const available = [...Object.values(design.primitive).flatMap(Object.values), ...Object.values(geometry).flatMap(Object.values).filter(t => 'value' in t)]
  const occurrences = []
  for (const file of files) {
    const text = await readFile(new URL(file, root), 'utf8')
    const isDocs = file.includes('/pages/design-system/') || file.includes('/app/')
    const matches = text.matchAll(/#[0-9a-fA-F]{3,8}\b|(?:rgba?|hsla?)\([^)]*\)|(?<![\w-])-?\d*\.?\d+(?:px|rem|em|vh|vw|svh|s|ms|%)(?!\w)|\b(?:z-index|font-weight|line-height)\s*:\s*\d+(?:\.\d+)?/g)
    for (const match of matches) {
      const line = text.slice(0, match.index).split('\n').length
      const value = match[0]
      const candidates = available.filter(t => String(t.value) === value).map(t => t.cssVariable)
      const structural = /^(?:0|100)(?:%|vh|svh)$/.test(value) || /calc\(|clamp\(|repeat\(|minmax\(/.test(text.split('\n')[line - 1])
      occurrences.push({ file, line, value, classification: structural ? 'C' : 'B', reason: structural ? 'Relative/calculated layout or viewport sizing' : isDocs ? 'Documentation/development presentation, consumer-owned; not evidence for Framer roles' : 'HTML accessibility/reset/fallback behavior, consumer-owned', equivalentSourceVariables: candidates })
    }
  }
  return { files, methodology: 'Scan all authored src CSS/TS/TSX/JS/JSX. Generated tokens and font faces excluded; provenance snapshots audited separately. Exact unit/format matches only; matching values do not establish shared roles. No product pages are ported in this checkout.', occurrences }
}
