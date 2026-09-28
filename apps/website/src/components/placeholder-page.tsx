import { routes, type RouteKey } from "@/config/routes";

export function PlaceholderPage({ routeKey }: { routeKey: RouteKey }) {
  const route = routes[routeKey];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{route.title}</h1>
      <p className="max-w-prose text-base leading-relaxed">{route.description}</p>
    </div>
  );
}
