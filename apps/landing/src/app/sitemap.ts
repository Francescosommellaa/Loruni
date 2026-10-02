import type { MetadataRoute } from 'next';
import { isPublicProduction } from '../config/environment';
import { site, siteUrl } from '../config/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return isPublicProduction ? site.navigation.map(({ href }) => ({ url: siteUrl(href) })) : [];
}
