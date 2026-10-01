import type { Metadata } from 'next';
import { funnelDisplay, funnelSans } from '@loruni/ui/fonts';
import { brandVariables } from '@loruni/ui/brand';
import '@loruni/ui/styles.css';

export const metadata: Metadata = { title: 'Loruni — Playground', description: 'Campo di prova interno Loruni.', robots: { index: false, follow: false } };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="it" style={brandVariables} className={`${funnelDisplay.variable} ${funnelSans.variable}`}><body>
    <a className="skip-link" href="#main">Vai al contenuto</a>{children}
  </body></html>;
}
