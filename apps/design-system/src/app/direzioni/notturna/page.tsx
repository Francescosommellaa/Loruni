import { DirectionView } from "@/components/direction-view";
import { directionById } from "@/data/directions";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("night");

export default function NightPage() {
  return <DirectionView direction={directionById("night")} />;
}
