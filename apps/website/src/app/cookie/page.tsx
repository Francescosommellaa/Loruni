import { PlaceholderPage } from "@/components/placeholder-page";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("cookie");

export default function CookiePage() {
  return <PlaceholderPage routeKey="cookie" />;
}
