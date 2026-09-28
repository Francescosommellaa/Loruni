import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/config/routes";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: site.titleTemplate },
  description: site.description,
  robots: { index: false, follow: false },
};

const headerRoutes = Object.values(routes).filter(
  (route) => route.navigation === "header" && route.key !== "home",
);
const footerRoutes = Object.values(routes).filter(
  (route) => route.navigation === "footer",
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="flex min-h-dvh flex-col bg-white font-sans text-neutral-950">
        <a
          href="#contenuto"
          className="sr-only z-10 bg-white p-3 focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
        >
          Vai al contenuto
        </a>
        <header className="border-b border-neutral-200">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-4">
            <Link href={routes.home.path} aria-label="Loruni — Home">
              <Image
                src="/brand/logo.png"
                width={110}
                height={70}
                alt="Loruni"
              />
            </Link>
            <nav aria-label="Navigazione principale">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {headerRoutes.map((route) => (
                  <li key={route.key}>
                    <Link href={route.path} className="underline underline-offset-4">
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main
          id="contenuto"
          tabIndex={-1}
          className="mx-auto w-full max-w-6xl flex-1 px-6 py-16"
        >
          {children}
        </main>
        <footer className="border-t border-neutral-200">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-4 px-6 py-6">
            <p>Loruni — Sito in preparazione.</p>
            <nav aria-label="Informazioni legali">
              <ul className="flex flex-wrap gap-6">
                {footerRoutes.map((route) => (
                  <li key={route.key}>
                    <Link href={route.path} className="underline underline-offset-4">
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
