import type { Metadata } from 'next';
import { funnelDisplay, funnelSans } from '@loruni/ui/fonts';
import { brandVariables } from '@loruni/ui/brand';
import { site } from '../config/site';
import '@loruni/ui/styles.css';
import { metadata as siteMetadata } from '../config/seo';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang={site.language} style={brandVariables} className={`${funnelDisplay.variable} ${funnelSans.variable}`}><body>
    <script id="loruni-direction" type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      THESIS: 'Una notte sociale, cinematic/editorial. Photographic posters, no SaaS stack.',
      'OWN-WORLD': 'Grafite/avorio, rare coral/lime, Funnel, real brand watermark, sharp photographic crops.',
      STORY: 'Enter, meet, drink, choose table or distinct gaming room, converge, visit. Native vertical scroll.',
      'FIRST VIEWPORT': 'Off-axis enormous two-line claim, partial social photograph, photo-filled brand watermark, Napoli microcopy, modest logo. First visit CTA after opening.',
      FORM: 'Inherited world extended from the explicit Phase03 brief; seed phase03-user-brief. Static composition, no approved generated page comp; photographic assets only.',
      FINISH: 'unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md',
    }) }} />
    <a className="skip-link" href="#main">Vai al contenuto</a>{children}
  </body></html>;
}
