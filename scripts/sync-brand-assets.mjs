import { copyFile, mkdir } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const apps = process.argv[2] ? [process.argv[2]] : ['landing', 'playground'];
const assets = [
  ...['logo', 'icon', 'watermark'].flatMap((kind) => ['light', 'dark'].map((variant) => ({
    source: `packages/ui/brand/${kind}-${variant}.svg`, target: `${kind}/${kind}-${variant}.svg`,
  }))),
  { source: 'Logo/PNG/Type=logo, background=Dark, Corner=Default, Text=Light.png', target: 'logo/logo-on-dark.png' },
];
for (const app of apps) {
  if (!['landing', 'playground'].includes(app)) throw new Error('Unknown app.');
  for (const asset of assets) {
    const destination = new URL(`apps/${app}/public/brand/${asset.target}`, root);
    await mkdir(new URL('./', destination), { recursive: true });
    await copyFile(new URL(asset.source, root), destination);
  }
  console.log(`Brand assets ready: ${app}`);
}
