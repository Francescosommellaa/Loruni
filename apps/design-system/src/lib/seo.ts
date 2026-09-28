import type { Metadata } from "next";
import { isProduction } from "@/config/environment";
import { routes, type RouteKey } from "@/config/routes";
import { site } from "@/config/site";

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

const socialImage = {
  url: absoluteUrl(site.socialImage.path),
  width: site.socialImage.width,
  height: site.socialImage.height,
  alt: site.socialImage.alt,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website", locale: site.locale, siteName: site.name,
    title: site.name, description: site.description, images: [socialImage],
  },
  twitter: {
    card: "summary_large_image", title: site.name,
    description: site.description, images: [socialImage],
  },
};

export function metadataForRoute(key: RouteKey): Metadata {
  const route = routes[key];
  const title = key === "home" ? site.name : `${route.title} | ${site.name}`;
  const url = absoluteUrl(route.path);

  return {
    title: key === "home" ? { absolute: title } : route.title,
    description: route.description,
    alternates: { canonical: url },
    robots: { index: isProduction && route.index, follow: isProduction && route.index },
    openGraph: {
      type: "website", locale: site.locale, siteName: site.name,
      title, description: route.description, url, images: [socialImage],
    },
    twitter: {
      card: "summary_large_image", title,
      description: route.description, images: [socialImage],
    },
  };
}
