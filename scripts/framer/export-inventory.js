/* Execute through the Framer CLI VM, not node. Read-only Framer APIs. */
/* global framer, state, require */
const crypto = require('crypto');
const capture = {
  schemaVersion: 1,
  capturedAt: new Date().toISOString(),
  sourceProjectId: 'F3868vuk7YeE7pDEgpP6',
  sourceUrl: 'https://framer.com/projects/Loruni--F3868vuk7YeE7pDEgpP6',
  readOnly: true,
  pages: [], templates: [], components: [], colorStyles: [], textStyles: [],
  collections: [], codeFiles: [], errors: [],
};

async function read(label, callback) {
  try { return await callback(); }
  catch (error) {
    capture.errors.push({ scope: label, message: String(error.message ?? error) });
    return null;
  }
}

async function tree(id, pagePath, label) {
  const options = pagePath ? { pagePath } : undefined;
  const full = await read(label, () => framer.agent.serialize({ id, depth: 30 }, options));
  if (full) return { status: 'captured', tree: full };
  const partial = await read(`${label}:shallow`, () => framer.agent.serialize({ id, depth: 1 }, options));
  return { status: partial ? 'partial' : 'unavailable', tree: partial };
}

const project = await read('project', () => framer.getProjectInfo());
if (project?.name) capture.projectName = project.name;
const pages = await read('pages:list', () => framer.agent.getNodesOfTypes({ types: ['WebPageNode'] }));
for (const page of pages ?? []) {
  const pagePath = page.attributes?.path;
  const result = await tree(page.id, pagePath, `page:${pagePath}`);
  capture.pages.push({ id: page.id, name: page.name, path: pagePath, ...result });
}
const templates = await read('templates:list', () => framer.agent.getNodesOfTypes({ types: ['LayoutTemplateNode'] }));
for (const template of templates ?? []) {
  capture.templates.push({ id: template.id, name: template.name, ...await tree(template.id, undefined, `template:${template.id}`) });
}

const colors = await read('colors:list', () => framer.getColorStyles());
capture.colorStyles = (colors ?? []).map(style => ({ id: style.id, path: style.path, light: style.light, dark: style.dark }));
const texts = await read('text-styles:list', () => framer.getTextStyles());
function color(value) { return typeof value === 'string' ? value : value ? { id: value.id, light: value.light, dark: value.dark } : null; }
function font(value) { return value ? { family: value.family, style: value.style, weight: value.weight } : null; }
capture.textStyles = (texts ?? []).map(style => ({
  id: style.id, path: style.path, font: font(style.font), boldFont: font(style.boldFont),
  italicFont: font(style.italicFont), fontSize: style.fontSize, lineHeight: style.lineHeight,
  letterSpacing: style.letterSpacing, paragraphSpacing: style.paragraphSpacing,
  tag: style.tag, alignment: style.alignment, color: color(style.color),
  transform: style.transform, minWidth: style.minWidth, breakpoints: style.breakpoints,
}));

const catalog = await read('components:catalog', () => framer.agent.listComponents());
if (catalog) {
  capture.componentCatalog = { project: catalog.project, external: catalog.external };
  for (const component of catalog.project?.canvas ?? []) {
    capture.components.push({ id: component.id, name: component.displayName, ...await tree(component.id, undefined, `component:${component.id}`) });
  }
}

const collections = await read('cms:list', () => framer.getCollections());
function fieldInfo(field) {
  return { id: field.id, name: field.name, type: field.type, required: field.required,
    collectionId: field.collectionId, fields: field.fields?.map(fieldInfo) };
}
for (const collection of collections ?? []) {
  const fields = await read(`cms:${collection.id}:fields`, () => collection.getFields());
  const items = await read(`cms:${collection.id}:count`, () => collection.getItems());
  capture.collections.push({ id: collection.id, name: collection.name,
    fields: fields?.map(fieldInfo) ?? null, itemCount: items?.length ?? null,
    contentStatus: 'not-exported', destination: 'open_decision' });
}

const codeFiles = await read('code:list', () => framer.getCodeFiles());
for (const file of codeFiles ?? []) {
  const source = file.content;
  capture.codeFiles.push({ id: file.id, name: file.name, path: file.path,
    exports: file.exports, lineCount: typeof source === 'string' ? source.split('\n').length : null,
    sourceDigest: typeof source === 'string' ? crypto.createHash('sha256').update(source).digest('hex') : null,
    sourceStatus: typeof source === 'string' ? 'read-not-copied' : 'unavailable',
    imports: typeof source === 'string' ? [...source.matchAll(/(?:from\s+|import\s*)["']([^"']+)["']/g)].map(match => match[1]) : [],
  });
}

capture.finishedAt = new Date().toISOString();
state.migrationInventory = capture;
// The CLI VM has its own cwd. Export through stdout; the local wrapper saves JSON.
console.log(JSON.stringify(capture, null, 2));
