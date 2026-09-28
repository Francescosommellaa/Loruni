import type { MetadataRoute } from "next";
import { isProduction } from "@/config/environment";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(isProduction ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
