import { PlaceholderPage } from "@/components/placeholder-page";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("privacy");

export default function PrivacyPage() {
  return <PlaceholderPage routeKey="privacy" />;
}
