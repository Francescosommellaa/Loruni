import { PlaceholderPage } from "@/components/placeholder-page";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("home");

export default function HomePage() {
  return <PlaceholderPage routeKey="home" />;
}
