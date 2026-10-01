import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('packages/ui/fonts/', root);
await mkdir(output, { recursive: true });
for (const font of ['funnel-display', 'funnel-sans']) {
  const source = new URL(`node_modules/@fontsource-variable/${font}/`, root);
  const filename = `${font}-latin-wght-normal.woff2`;
  await copyFile(new URL(`files/${filename}`, source), new URL(filename, output));
  await copyFile(new URL('LICENSE', source), new URL(`${font}-LICENSE.txt`, output));
  console.log(`Font locale: ${fileURLToPath(new URL(filename, output))}`);
}
