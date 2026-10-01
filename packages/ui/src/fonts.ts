import localFont from 'next/font/local';

export const funnelDisplay = localFont({
  src: '../fonts/funnel-display-latin-wght-normal.woff2',
  variable: '--font-display', weight: '300 800', display: 'swap',
});

export const funnelSans = localFont({
  src: '../fonts/funnel-sans-latin-wght-normal.woff2',
  variable: '--font-body', weight: '300 800', display: 'swap',
});
