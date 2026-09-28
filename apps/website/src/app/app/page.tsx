import { PlaceholderPage } from "@/components/placeholder-page";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("app");

export default function AppPage() {
  return <PlaceholderPage routeKey="app" />;
}
