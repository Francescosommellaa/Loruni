import Link from "next/link";
import { routes } from "@/config/routes";

export default function NotFound() {
  return (
    <div className="utility-page page-container">
      <h1>Pagina non trovata</h1>
      <Link href={routes.home.path}>Torna alle direzioni</Link>
    </div>
  );
}
