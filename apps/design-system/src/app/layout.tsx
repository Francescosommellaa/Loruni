import Link from "next/link";
import { Funnel_Display } from "next/font/google";
import { routes } from "@/config/routes";
import { defaultMetadata } from "@/lib/seo";
import "@/styles/globals.css";
import "@/styles/system-lab.css";

export const metadata = defaultMetadata;

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-funnel-display",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={funnelDisplay.variable}>
        <a href="#contenuto" className="skip-link">Vai al contenuto</a>
        <header className="site-header">
          <div className="site-bar-content page-container">
            <Link className="site-brand" href={routes.home.path}>Loruni <span>design system</span></Link>
            <span className="site-status">Esplorazioni · nessuna direzione approvata</span>
          </div>
        </header>
        <main id="contenuto" tabIndex={-1}>{children}</main>
        <footer className="site-footer">
          <div className="site-bar-content page-container">
            <span>Proposte visive da valutare insieme.</span>
            <Link href={routes.home.path}>Tutte le direzioni</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
