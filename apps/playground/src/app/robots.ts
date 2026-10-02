import type { MetadataRoute } from 'next';

// Crawlers must read noindex metadata/header; access protection belongs to hosting.
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' } }; }
