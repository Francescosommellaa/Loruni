import type { Metadata } from 'next';
import { funnelDisplay, funnelSans } from '@loruni/ui/fonts';
import { brandVariables } from '@loruni/ui/brand';
import { site } from '../config/site';
import '@loruni/ui/styles.css';
import { metadata as siteMetadata } from '../config/seo';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang={site.language} style={brandVariables} className={`${funnelDisplay.variable} ${funnelSans.variable}`}><body>
    <a className="skip-link" href="#main">Vai al contenuto</a>{children}
  </body></html>;
}
