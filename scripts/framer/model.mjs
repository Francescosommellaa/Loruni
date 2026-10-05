export function* walkTree(tree, ancestry = []) {
  if (!tree || typeof tree !== 'object') return
  if (Array.isArray(tree)) {
    for (const node of tree) yield* walkTree(node, ancestry)
    return
  }
  yield { node: tree, ancestry }
  for (const child of tree.children ?? []) {
    yield* walkTree(child, [...ancestry, tree.id ?? tree.name ?? tree.type])
  }
}

export function inspectCoverage(scope) {
  const nodes = [...walkTree(scope.tree)]
  const truncated = nodes.filter(({ node }) => node.$truncated).map(({ node }) => node.id)
  return {
    status: !scope.tree || scope.status === 'unavailable' ? 'unavailable'
      : scope.status === 'partial' || truncated.length ? 'partial' : 'captured',
    nodeCount: nodes.length,
    truncated,
  }
}

export function collectMedia(value, propertyPath = '') {
  const matches = []
  if (typeof value === 'string') {
    for (const [url] of value.matchAll(/https?:\/\/[^\s"'<>),]+/g)) {
      try {
        const parsed = new URL(url)
        if (parsed.hostname.endsWith('framerusercontent.com') || /\.(?:avif|webp|png|jpe?g|gif|svg|mp4|webm|woff2?)(?:$)/i.test(parsed.pathname)) {
          matches.push({ url, propertyPath })
        }
      } catch { /* An invalid string is not a verified media URL. */ }
    }
  } else if (value && typeof value === 'object') {
    for (const [key, nested] of Object.entries(value)) {
      matches.push(...collectMedia(nested, propertyPath ? `${propertyPath}.${key}` : key))
    }
  }
  return matches
}

export function deriveInventory(source) {
  if (source.schemaVersion !== 1 || source.sourceProjectId !== 'F3868vuk7YeE7pDEgpP6' || source.readOnly !== true) {
    throw new Error('Unexpected source identity/schema')
  }
  const media = new Map()
  const componentUses = new Map()
  const effects = [], copy = [], links = [], forms = [], tokenUses = new Map()
  const scopes = [...source.pages.map(p => ({ kind: 'page', ...p })),
    ...source.templates.map(t => ({ kind: 'template', ...t })),
    ...source.components.map(c => ({ kind: 'component', ...c }))]

  for (const scope of scopes) {
    const scopeName = `${scope.kind}:${scope.path ?? scope.id}`
    for (const { node, ancestry } of walkTree(scope.tree)) {
      const reference = { scope: scopeName, nodeId: node.id, nodeName: node.name ?? null, ancestry }
      const attributes = node.attributes ?? {}
      for (const match of collectMedia(attributes)) {
        const asset = media.get(match.url) ?? { url: match.url, provenance: 'Framer source reference', rights: 'not_verified', downloaded: false, uses: [] }
        asset.uses.push({ ...reference, property: match.propertyPath })
        media.set(match.url, asset)
      }
      if (node.type === 'ComponentInstanceNode') {
        const entry = componentUses.get(node.component) ?? { id: node.component, name: node.$componentDisplayName ?? null, uses: [] }
        entry.uses.push({ ...reference, sourceKind: scope.kind, variant: attributes.$control__variant ?? null })
        componentUses.set(node.component, entry)
      }
      for (const [property, value] of Object.entries(attributes)) {
        if (/Effect(?:s)?$/.test(property) || property === 'transition' || property === 'interactions') {
          effects.push({ ...reference, property, value, observedInPreview: false })
        }
        if ((property === 'text' || /^\$control__(?:.*text\d*|title|label|quote)$/i.test(property)) && typeof value === 'string' && value.trim()) {
          copy.push({ ...reference, property, value })
        }
        if (property === 'link' || /^\$control__.*link\d*$/i.test(property)) links.push({ ...reference, property, value })
        for (const match of JSON.stringify(value).matchAll(/var\(--token-([a-zA-Z0-9-]+)\)/g)) {
          const uses = tokenUses.get(match[1]) ?? []
          uses.push({ ...reference, property })
          tokenUses.set(match[1], uses)
        }
      }
      if (/Form/.test(node.type ?? '')) forms.push({ ...reference, type: node.type, attributes })
    }
  }

  return {
    schemaVersion: 1, sourceProjectId: source.sourceProjectId, capturedAt: source.capturedAt,
    pages: source.pages.map(page => ({ id: page.id, path: page.path, name: page.name,
      ...inspectCoverage(page), templateId: page.tree?.$layoutTemplateId ?? null,
      breakpoints: page.tree?.$breakpoints ?? [],
      sections: (page.tree?.children?.find(b => b.$isPrimary)?.children ?? []).map(node => ({
        id: node.id, name: node.name ?? node.$componentDisplayName ?? node.type,
        type: node.type, children: (node.children ?? []).map(child => ({ id: child.id, name: child.name ?? child.$componentDisplayName ?? child.type })),
      })),
    })),
    templates: source.templates.map(template => ({ id: template.id, name: template.name,
      ...inspectCoverage(template), breakpoints: template.tree?.$breakpoints ?? [] })),
    components: source.components.map(component => ({ id: component.id, name: component.name,
      ...inspectCoverage(component), variants: component.tree?.$variants ?? [],
      instanceCount: componentUses.get(component.id)?.uses.length ?? 0,
      directPageOrTemplateCount: componentUses.get(component.id)?.uses.filter(use => use.sourceKind !== 'component').length ?? 0,
    })),
    externalComponents: source.componentCatalog?.external ?? [],
    componentUses: [...componentUses.values()],
    colorStyles: source.colorStyles.map(style => ({ ...style, uses: tokenUses.get(style.id) ?? [] })),
    textStyles: source.textStyles, collections: source.collections, codeFiles: source.codeFiles,
    media: [...media.values()], effects, copy, links, forms, errors: source.errors,
    acceptance: { visual: 'not_run', interaction: 'not_run', timing: 'not_run', cmsContent: 'not_migrated', assetRights: 'not_verified' },
  }
}

const cell = value => String(value ?? 'unknown').replaceAll('|', '\\|').replaceAll('\n', ' ')
const table = (headers, rows) => [
  `| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`,
  ...rows.map(row => `| ${row.map(cell).join(' | ')} |`),
].join('\n')

export function renderInventory(source, inventory) {
  const lines = [
    '# Loruni — inventario Framer', '',
    `Snapshot: ${source.capturedAt}. Fonte: [progetto Framer](${source.sourceUrl}). Lettura API, nessuna modifica al progetto.`, '',
    'Questo è un inventario strutturale delle letture disponibili. Le eventuali strutture incomplete sono indicate sotto; gli interni dei componenti esterni non sono esportati. Non è una verifica visiva 1:1.', '',
    '## Copertura', '',
    table(['Categoria', 'Acquisizione'], [
      ['Pagine', `${inventory.pages.length}, con metadati dei breakpoint`],
      ['Template condivisi', inventory.templates.length],
      ['Componenti locali', `${inventory.components.filter(c => c.status === 'captured').length}/${inventory.components.length} alberi acquisiti`],
      ['Componenti esterni nel catalogo', inventory.externalComponents.length],
      ['Stili colore / testo', `${inventory.colorStyles.length} / ${inventory.textStyles.length}`],
      ['Collezioni CMS / file codice', `${inventory.collections.length} / ${inventory.codeFiles.length}`],
      ['URL media distinti nelle strutture acquisite', inventory.media.length],
      ['Riferimenti a effetti/transizioni', inventory.effects.length],
    ]), '',
    '## Pagine e breakpoint', '',
    table(['Route', 'ID', 'Stato', 'Nodi', 'Template', 'Breakpoint'], inventory.pages.map(p => [p.path, p.id, p.status, p.nodeCount, p.templateId, p.breakpoints.map(b => `${b.name}: ${b.mediaQueryRange}`).join('; ')])), '',
    'I valori sono metadati Framer, inclusa ereditarietà dei replica. Risolvere gli override prima del port; le larghezze dei frame non sostituiscono le media query.', '',
    '## Sezioni per pagina (breakpoint principale)', '',
  ]
  for (const page of inventory.pages) {
    lines.push(`### ${page.path}`, '', ...page.sections.map(section => `- ${section.name} (${section.id})${section.children.length ? ': ' + section.children.map(child => child.name).join(' → ') : ''}`), '')
  }
  lines.push('## Componenti locali', '',
    table(['Componente', 'ID', 'Varianti', 'Istanze dirette pagine/template', 'Copertura'], inventory.components.map(c => [c.name, c.id, c.variants.map(v => v.name).join(', '), c.directPageOrTemplateCount, c.status])), '',
    'Le istanze delle varianti responsive sono conteggiate separatamente. Una definizione in catalogo non implica che venga usata in una pagina.', '',
    '## Componenti esterni', '',
    table(['Componente', 'Riferimento'], inventory.externalComponents.map(c => [c.displayName ?? c.name, c.id])), '',
    'Per componenti esterni verificare controlli, preview, comportamento e diritti di riuso. Effetti shader/distorsione e sezioni scroll possono richiedere una ricostruzione specifica; la base non li implementa.', '',
    '## Stili colore osservati', '',
    table(['Stile Framer', 'Valore base', 'Valore dark', 'Usi rilevati'], inventory.colorStyles.map(c => [c.path, c.light, c.dark ?? 'nessuna variante', c.uses.length])), '',
    'Sono valori del progetto corrente, non un nuovo sistema approvato. I duplicati restano distinti finché non è verificata la loro semantica. Gli usi derivano soltanto dalle strutture acquisite.', '',
    '## Stili tipografici osservati', '',
    table(['Stile', 'Font', 'Peso', 'Dimensione base', 'Line height', 'Tracking', 'Override responsive'], inventory.textStyles.map(s => [s.path, s.font?.family, s.font?.weight, s.fontSize, s.lineHeight, s.letterSpacing, s.breakpoints?.map(b => `≥${b.minWidth}: ${b.fontSize}`).join('; ')])), '',
    'Font locali/download/licenze da verificare prima della migrazione. I nomi degli stili non sono misure: usare i valori e gli override osservati.', '',
    '## CMS', '',
    table(['Collezione', 'Record', 'Campi dati', 'Destinazione'], inventory.collections.map(c => [c.name, c.itemCount, c.fields?.filter(f => f.type !== 'divider').length, c.destination])), '',
    'Schema completo in source-inventory.json. I record sono stati letti per il conteggio e non esportati. Contenuti, slug e media dei record non sono ancora migrati; scegliere la destinazione CMS quando si implementano le route dinamiche.', '',
    '## File di codice', '',
    table(['File', 'Export', 'Import', 'Righe', 'Stato'], inventory.codeFiles.map(f => [f.path, f.exports.map(e => e.name).join(', '), [...new Set(f.imports)].join(', '), f.lineCount, f.sourceStatus])), '',
    'Digest sorgenti nella cattura. Codice letto per provenienza, non copiato; adattamento delle dipendenze Framer e diritti da verificare nella slice interessata.', '',
    '## Media, copy, link, form e motion', '',
    '`migration-inventory.json` conserva URL media deduplicati con node ID/proprietà/usi, copy e controlli testuali, link e binding, nodi form, istanze componenti ed effetti/transizioni originali. Il relativo albero completo è in `source-inventory.json`.', '',
    'Media non scaricati e diritti non verificati. Crop/maschere/dimensioni restano negli attributi sorgente. Gli effetti sono impostazioni osservate, non una misura del risultato: preview, timing, scroll, hover, menu, form e preferenza reduced-motion devono ancora essere esercitati.', '',
    '## Limiti di acquisizione', '',
    ...(inventory.errors.length ? inventory.errors.map(e => `- ${e.scope}: ${e.message}`) : ['- Nessun errore API registrato.']), '',
    '## Prossimi passi della conversione', '',
    '1. Catturare preview e stati alle stesse viewport; completare i componenti non leggibili e gli esterni effettivamente usati.',
    '2. Estrarre token TS/CSS e componenti condivisi dai consumer reali, conservando gli ID sorgente.',
    '3. Trasferire template, sezioni e responsive; definire destinazione CMS e strategia route/SEO.',
    '4. Ricostruire motion con GSAP per lo scroll e Motion per interazioni discrete, con proprietà separate.',
    '5. Confrontare screenshot e comportamento; registrare difetti, correzioni, digest e limiti.', '',
    'Nessuna pagina Framer è stata implementata in questa fase. Nessun publish, deploy o prova di equivalenza visiva è stato eseguito.', '',
  )
  return lines.join('\n')
}
