import type { MetadataRoute } from 'next';
import { brand } from '@loruni/ui/brand';
import { site } from '../config/site';
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/', name: site.name, short_name: site.name, description: site.description, lang: site.language,
    start_url: '/', display: 'browser', background_color: brand.palette.grafite, theme_color: brand.palette.grafite,
    icons: [{ src: brand.assets.iconLight, sizes: 'any', type: 'image/svg+xml', purpose: 'any' }],
  };
}
