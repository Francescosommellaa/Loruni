import type { Metadata, MetadataRoute } from 'next';
import { isPublicProduction, searchVerification } from './environment';
import { site, siteUrl } from './site';
export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: `${site.name} — socialità, cocktail e gaming a ${site.business.city}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: siteUrl() },
  robots: { index: isPublicProduction, follow: isPublicProduction },
  verification: { google: searchVerification.google, other: searchVerification.bing ? { 'msvalidate.01': searchVerification.bing } : undefined },
  openGraph: { type: 'website', title: site.name, description: site.description, siteName: site.name, locale: site.locale, url: siteUrl(), images: [{ url: siteUrl('/opengraph-image'), width: 1200, height: 630, alt: `Logo ufficiale ${site.name}` }] },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description, images: [{ url: siteUrl('/opengraph-image'), alt: `Logo ufficiale ${site.name}` }] },
};
export function robotsPolicy(): MetadataRoute.Robots {
  // Search is permitted; reviewed training/product tokens have separate rules.
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot', 'Google-Extended'], disallow: '/' },
      { userAgent: ['Googlebot', 'bingbot', 'OAI-SearchBot'], allow: '/' },
    ],
    sitemap: isPublicProduction ? siteUrl('/sitemap.xml') : undefined,
  };
}
export function websiteStructuredData() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': siteUrl('/#website'), url: siteUrl(), name: site.name, inLanguage: site.language };
}
// Only confirmed facts presented by the home; indicative hours stay out.
export function businessStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...websiteStructuredData(), publisher: { '@id': siteUrl('/#business') } },
      { '@type': 'LocalBusiness', '@id': siteUrl('/#business'), name: site.name, description: site.description, url: siteUrl(), logo: siteUrl('/brand/logo/logo-on-dark.png'), sameAs: [site.social.instagram], address: { '@type': 'PostalAddress', addressLocality: site.business.city } },
    ],
  };
}
