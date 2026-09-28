import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  description: "La pagina richiesta non è disponibile.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Pagina non trovata</h1>
      <p>La pagina richiesta non è disponibile.</p>
      <Link href={routes.home.path} className="inline-block underline underline-offset-4">
        Torna alla home
      </Link>
    </div>
  );
}
