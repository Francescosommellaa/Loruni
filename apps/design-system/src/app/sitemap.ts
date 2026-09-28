import type { MetadataRoute } from "next";
import { isProduction } from "@/config/environment";
import { routes } from "@/config/routes";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return isProduction
    ? Object.values(routes).filter((route) => route.sitemap).map((route) => ({ url: absoluteUrl(route.path) }))
    : [];
}
