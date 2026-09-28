import { PlaceholderPage } from "@/components/placeholder-page";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("eventi");

export default function EventiPage() {
  return <PlaceholderPage routeKey="eventi" />;
}
