/* Run through Framer CLI VM. Read-only layout audit; no CMS/content/code capture. */
/* global framer, state */
const capture = {
  schemaVersion: 1, sourceProjectId: 'F3868vuk7YeE7pDEgpP6', readOnly: true,
  capturedAt: new Date().toISOString(), scopes: [], errors: [],
}
const geometryProperty = /^(padding|margin|gap|radius|border.*|boxShadow|shadow|maxWidth|minWidth|maxHeight|minHeight|layout|stackDirection|stackWrapEnabled|grid.*|formInputFocusedBoxShadow|\$control__(padding|radius|border|shadow))$/
async function inspect(kind, scope, pagePath) {
  try {
    const tree = await framer.agent.serialize({ id: scope.id, depth: 30 }, pagePath ? { pagePath } : undefined)
    const nodes = []
    function walk(node, ancestry = []) {
      if (!node) return
      const attributes = Object.fromEntries(Object.entries(node.attributes ?? {}).filter(([name]) => geometryProperty.test(name)))
      nodes.push({ id: node.id, name: node.name ?? null, type: node.type, originalId: node.$originalId ?? null,
        replica: node.$isReplica ?? false, truncated: node.$truncated ?? false,
        parentId: ancestry.at(-1)?.id ?? null, ancestry, attributes,
        variables: node.variables?.filter(variable => /padding|gap|margin|radius|border|shadow|max.?width/i.test(variable.name ?? variable.key ?? '')),
      })
      for (const child of node.children ?? []) walk(child, [...ancestry, { id: node.id, name: node.name ?? null }])
    }
    walk(tree)
    capture.scopes.push({ kind, id: scope.id, name: scope.name, path: pagePath ?? null,
      variants: tree.$breakpoints ?? tree.$variants ?? null,
      status: nodes.some(n => n.truncated) ? 'partial' : 'captured', nodes })
  } catch (error) {
    capture.scopes.push({ kind, id: scope.id, name: scope.name, path: pagePath ?? null, status: 'unavailable', nodes: [] })
    capture.errors.push({ kind, name: scope.name, message: String(error.message ?? error) })
  }
}
const pages = await framer.agent.getNodesOfTypes({ types: ['WebPageNode'] })
for (const page of pages) await inspect('page', page, page.attributes?.path)
const templates = await framer.agent.getNodesOfTypes({ types: ['LayoutTemplateNode'] })
for (const template of templates) await inspect('template', template)
const catalog = await framer.agent.listComponents()
for (const component of catalog.project?.canvas ?? []) await inspect('component', { id: component.id, name: component.displayName })
state.geometryCapture = capture
console.log(JSON.stringify(capture))
