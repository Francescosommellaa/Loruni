import type { CSSProperties } from 'react';
export const brand = {
  name: 'Loruni',
  palette: { grafite: '#1A1917', avorio: '#F4F0E8', corallo: '#FF5538', lime: '#C8F24A' },
  assets: {
    logoLight: '/brand/logo/logo-light.svg', logoDark: '/brand/logo/logo-dark.svg',
    iconLight: '/brand/icon/icon-light.svg', iconDark: '/brand/icon/icon-dark.svg',
    watermarkLight: '/brand/watermark/watermark-light.svg', watermarkDark: '/brand/watermark/watermark-dark.svg',
    logoOnDark: '/brand/logo/logo-on-dark.png',
  },
} as const;
export const brandVariables: CSSProperties & Record<`--color-${string}`, string> = {
  '--color-grafite': brand.palette.grafite, '--color-avorio': brand.palette.avorio,
  '--color-corallo': brand.palette.corallo, '--color-lime': brand.palette.lime,
};
