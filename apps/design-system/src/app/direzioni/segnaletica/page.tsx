import { DirectionView } from "@/components/direction-view";
import { directionById } from "@/data/directions";
import { metadataForRoute } from "@/lib/seo";

export const metadata = metadataForRoute("signal");

export default function SignalPage() {
  return <DirectionView direction={directionById("signal")} />;
}
