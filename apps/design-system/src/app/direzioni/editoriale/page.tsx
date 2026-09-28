import { DirectionView } from "@/components/direction-view";
import { directionById } from "@/data/directions";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("editorial");

export default function EditorialPage() {
  return <DirectionView direction={directionById("editorial")} />;
}
