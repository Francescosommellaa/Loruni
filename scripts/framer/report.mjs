import { readFile, writeFile } from 'node:fs/promises'
import { deriveInventory, renderInventory } from './model.mjs'

const directory = new URL('../../docs/framer/', import.meta.url)
const source = JSON.parse(await readFile(new URL('source-inventory.json', directory), 'utf8'))
const inventory = deriveInventory(source)
await writeFile(new URL('migration-inventory.json', directory), JSON.stringify(inventory, null, 2) + '\n')
await writeFile(new URL('INVENTORY.md', directory), renderInventory(source, inventory))
console.log(`Inventory: ${inventory.pages.length} pages, ${inventory.components.length} local components, ${inventory.media.length} media URLs, ${inventory.errors.length} read errors.`)
