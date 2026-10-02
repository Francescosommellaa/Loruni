import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { brand } from '@loruni/ui/brand';
export const alt = `Logo ufficiale ${brand.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public', brand.assets.logoOnDark), 'base64');
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', background: brand.palette.grafite }}>
      {/* Official PNG, unchanged. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${logo}`} width={440} height={280} alt={brand.name} />
    </div>, size,
  );
}
