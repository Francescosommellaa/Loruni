import type { Metadata } from "next";
import { isProduction } from "@/config/environment";
import { routes, type RouteKey } from "@/config/routes";
import { site } from "@/config/site";

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export function metadataForRoute(key: RouteKey): Metadata {
  const route = routes[key];
  const title = key === "home" ? site.title : site.titleTemplate.replace("%s", route.title);
  const image = {
    url: absoluteUrl(site.socialImage.path),
    width: site.socialImage.width,
    height: site.socialImage.height,
    alt: site.socialImage.alt,
  };
  const indexable = isProduction && route.index;

  return {
    title: key === "home" ? { absolute: site.title } : route.title,
    description: route.description,
    alternates: { canonical: absoluteUrl(route.path) },
    robots: { index: indexable, follow: indexable },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title,
      description: route.description,
      url: absoluteUrl(route.path),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: route.description,
      images: [image],
    },
  };
}
