import { PlaceholderPage } from "@/components/placeholder-page";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("community");

export default function CommunityPage() {
  return <PlaceholderPage routeKey="community" />;
}
