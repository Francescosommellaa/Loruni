/* Generated from token-source.json and token-policy.json. Run pnpm tokens:generate. */
export const colorValues = {
  "neutral950": "rgb(26, 25, 23)",
  "neutral50": "rgb(244, 240, 232)",
  "neutral600": "rgb(98, 94, 87)",
  "brandPrimary": "rgb(255, 85, 56)",
  "neutralOverlay30": "rgba(26, 25, 23, 0.3)",
  "neutral800": "rgb(53, 51, 47)",
  "neutral900": "rgb(38, 37, 34)",
  "neutral700": "rgb(74, 71, 66)",
  "neutral500": "rgb(125, 119, 110)",
  "neutral400": "rgb(154, 147, 136)",
  "neutral300": "rgb(182, 175, 163)",
  "neutral200": "rgb(208, 201, 190)",
  "neutral100": "rgb(227, 222, 212)",
  "brandAccent": "rgb(200, 242, 74)",
  "neutralBoneOverlay10": "rgba(244, 240, 232, 0.1)",
  "neutralBoneBorder8": "rgba(244, 240, 232, 0.08)",
  "neutralBoneText60": "rgba(244, 240, 232, 0.6)"
} as const

export const colors = {
  neutral950: { path: "/Neutral/950", cssVariable: "--color-neutral-950", light: colorValues.neutral950, dark: null },
  neutral50: { path: "/Neutral/50", cssVariable: "--color-neutral-50", light: colorValues.neutral50, dark: null },
  neutral600: { path: "/Neutral/600", cssVariable: "--color-neutral-600", light: colorValues.neutral600, dark: null },
  brandPrimary: { path: "/Brand/Primary", cssVariable: "--color-brand-primary", light: colorValues.brandPrimary, dark: null },
  neutralOverlay30: { path: "/Neutral/Overlay 30%", cssVariable: "--color-neutral-overlay-30", light: colorValues.neutralOverlay30, dark: null },
  neutralBoneHighlight: { path: "/Neutral/Bone Highlight", cssVariable: "--color-neutral-bone-highlight", light: colorValues.neutral50, dark: null },
  neutral800: { path: "/Neutral/800", cssVariable: "--color-neutral-800", light: colorValues.neutral800, dark: null },
  neutralDarkDetail: { path: "/Neutral/Dark Detail", cssVariable: "--color-neutral-dark-detail", light: colorValues.neutral950, dark: null },
  neutral900: { path: "/Neutral/900", cssVariable: "--color-neutral-900", light: colorValues.neutral900, dark: null },
  neutral700: { path: "/Neutral/700", cssVariable: "--color-neutral-700", light: colorValues.neutral700, dark: null },
  neutral500: { path: "/Neutral/500", cssVariable: "--color-neutral-500", light: colorValues.neutral500, dark: null },
  neutral400: { path: "/Neutral/400", cssVariable: "--color-neutral-400", light: colorValues.neutral400, dark: null },
  neutral300: { path: "/Neutral/300", cssVariable: "--color-neutral-300", light: colorValues.neutral300, dark: null },
  neutral200: { path: "/Neutral/200", cssVariable: "--color-neutral-200", light: colorValues.neutral200, dark: null },
  neutral100: { path: "/Neutral/100", cssVariable: "--color-neutral-100", light: colorValues.neutral100, dark: null },
  brandAccent: { path: "/Brand/Accent", cssVariable: "--color-brand-accent", light: colorValues.brandAccent, dark: null },
  neutralBoneOverlay10: { path: "/Neutral/Bone Overlay 10%", cssVariable: "--color-neutral-bone-overlay-10", light: colorValues.neutralBoneOverlay10, dark: null },
  neutralBoneBorder8: { path: "/Neutral/Bone Border 8%", cssVariable: "--color-neutral-bone-border-8", light: colorValues.neutralBoneBorder8, dark: null },
  neutralBoneText60: { path: "/Neutral/Bone Text 60%", cssVariable: "--color-neutral-bone-text-60", light: colorValues.neutralBoneText60, dark: null },
} as const
export const typography = {
  "headline180": {
    "path": "/Headline/180",
    "className": "text-headline-180",
    "cssPrefix": "--text-headline-180",
    "tag": "h2",
    "font": {
      "family": "Funnel Display",
      "weight": 600,
      "style": "normal"
    },
    "boldFont": null,
    "italicFont": null,
    "boldItalicFont": null,
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "small",
        "minWidth": 0,
        "fontSize": "64px",
        "lineHeight": "1em",
        "letterSpacing": "-0.06em",
        "paragraphSpacing": "0px"
      },
      {
        "label": "medium",
        "minWidth": 810,
        "fontSize": "84px",
        "lineHeight": "1em",
        "letterSpacing": "-0.06em",
        "paragraphSpacing": "0px"
      },
      {
        "label": "default",
        "minWidth": 1200,
        "fontSize": "128px",
        "lineHeight": "1em",
        "letterSpacing": "-0.06em",
        "paragraphSpacing": "0px"
      }
    ]
  },
  "headline108": {
    "path": "/Headline/108",
    "className": "text-headline-108",
    "cssPrefix": "--text-headline-108",
    "tag": "h2",
    "font": {
      "family": "Funnel Display",
      "weight": 600,
      "style": "normal"
    },
    "boldFont": {
      "family": "Funnel Display",
      "weight": 800,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "Funnel Sans",
      "weight": 800,
      "style": "italic"
    },
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "small",
        "minWidth": 0,
        "fontSize": "48px",
        "lineHeight": "1em",
        "letterSpacing": "-0.05em",
        "paragraphSpacing": "40px"
      },
      {
        "label": "medium",
        "minWidth": 810,
        "fontSize": "48px",
        "lineHeight": "1em",
        "letterSpacing": "-0.05em",
        "paragraphSpacing": "40px"
      },
      {
        "label": "default",
        "minWidth": 1200,
        "fontSize": "80px",
        "lineHeight": "1em",
        "letterSpacing": "-0.05em",
        "paragraphSpacing": "40px"
      }
    ]
  },
  "headline76": {
    "path": "/Headline/76",
    "className": "text-headline-76",
    "cssPrefix": "--text-headline-76",
    "tag": "h3",
    "font": {
      "family": "Funnel Display",
      "weight": 600,
      "style": "normal"
    },
    "boldFont": null,
    "italicFont": null,
    "boldItalicFont": null,
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "small",
        "minWidth": 0,
        "fontSize": "32px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.05em",
        "paragraphSpacing": "40px"
      },
      {
        "label": "medium",
        "minWidth": 810,
        "fontSize": "44px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.05em",
        "paragraphSpacing": "40px"
      },
      {
        "label": "default",
        "minWidth": 1200,
        "fontSize": "60px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.05em",
        "paragraphSpacing": "40px"
      }
    ]
  },
  "headline32": {
    "path": "/Headline/32",
    "className": "text-headline-32",
    "cssPrefix": "--text-headline-32",
    "tag": "h3",
    "font": {
      "family": "Funnel Display",
      "weight": 600,
      "style": "normal"
    },
    "boldFont": {
      "family": "Funnel Display",
      "weight": 800,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "Funnel Sans",
      "weight": 800,
      "style": "italic"
    },
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "default",
        "minWidth": 0,
        "fontSize": "32px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.04em",
        "paragraphSpacing": "40px"
      }
    ]
  },
  "headline16": {
    "path": "/Headline/16",
    "className": "text-headline-16",
    "cssPrefix": "--text-headline-16",
    "tag": "h3",
    "font": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "normal"
    },
    "boldFont": {
      "family": "Funnel Sans",
      "weight": 800,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "Funnel Sans",
      "weight": 800,
      "style": "italic"
    },
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "wrap",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "default",
        "minWidth": 0,
        "fontSize": "16px",
        "lineHeight": "1.1em",
        "letterSpacing": "0em",
        "paragraphSpacing": "40px"
      }
    ]
  },
  "headline28": {
    "path": "/Headline/28",
    "className": "text-headline-28",
    "cssPrefix": "--text-headline-28",
    "tag": "h3",
    "font": {
      "family": "Funnel Display",
      "weight": 600,
      "style": "normal"
    },
    "boldFont": null,
    "italicFont": null,
    "boldItalicFont": null,
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "small",
        "minWidth": 0,
        "fontSize": "20px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.04em",
        "paragraphSpacing": "0px"
      },
      {
        "label": "medium",
        "minWidth": 810,
        "fontSize": "24px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.04em",
        "paragraphSpacing": "0px"
      },
      {
        "label": "default",
        "minWidth": 1200,
        "fontSize": "28px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.04em",
        "paragraphSpacing": "0px"
      }
    ]
  },
  "text20": {
    "path": "/Text/20",
    "className": "text-text-20",
    "cssPrefix": "--text-text-20",
    "tag": "p",
    "font": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "normal"
    },
    "boldFont": {
      "family": "IBM Plex Sans",
      "weight": 600,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "IBM Plex Sans",
      "weight": 600,
      "style": "italic"
    },
    "color": "var(--color-neutral-300)",
    "alignment": "start",
    "transform": "none",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "default",
        "minWidth": 0,
        "fontSize": "20px",
        "lineHeight": "1.4em",
        "letterSpacing": "-0.01em",
        "paragraphSpacing": "20px"
      }
    ]
  },
  "text32P": {
    "path": "/Text/32 P",
    "className": "text-text-32-p",
    "cssPrefix": "--text-text-32-p",
    "tag": "p",
    "font": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "normal"
    },
    "boldFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "italic"
    },
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "none",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "small",
        "minWidth": 0,
        "fontSize": "20px",
        "lineHeight": "1.3em",
        "letterSpacing": "-0.02em",
        "paragraphSpacing": "20px"
      },
      {
        "label": "medium",
        "minWidth": 810,
        "fontSize": "28px",
        "lineHeight": "1.2em",
        "letterSpacing": "-0.02em",
        "paragraphSpacing": "20px"
      },
      {
        "label": "default",
        "minWidth": 1200,
        "fontSize": "32px",
        "lineHeight": "1.2em",
        "letterSpacing": "-0.02em",
        "paragraphSpacing": "20px"
      }
    ]
  },
  "functional28": {
    "path": "/Functional/28",
    "className": "text-functional-28",
    "cssPrefix": "--text-functional-28",
    "tag": "p",
    "font": {
      "family": "Funnel Sans",
      "weight": 600,
      "style": "normal"
    },
    "boldFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 600,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "italic"
    },
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "balance",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "small",
        "minWidth": 0,
        "fontSize": "20px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.04em",
        "paragraphSpacing": "0px"
      },
      {
        "label": "medium",
        "minWidth": 810,
        "fontSize": "18px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.04em",
        "paragraphSpacing": "0px"
      },
      {
        "label": "default",
        "minWidth": 1200,
        "fontSize": "28px",
        "lineHeight": "1.1em",
        "letterSpacing": "-0.04em",
        "paragraphSpacing": "0px"
      }
    ]
  },
  "functionalCompactLabel": {
    "path": "/Functional/Compact Label",
    "className": "text-functional-compact-label",
    "cssPrefix": "--text-functional-compact-label",
    "tag": "p",
    "font": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "normal"
    },
    "boldFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "italic"
    },
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "wrap",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "default",
        "minWidth": 0,
        "fontSize": "12px",
        "lineHeight": "1.1em",
        "letterSpacing": "0em",
        "paragraphSpacing": "40px"
      }
    ]
  },
  "functional16": {
    "path": "/Functional/16",
    "className": "text-functional-16",
    "cssPrefix": "--text-functional-16",
    "tag": "p",
    "font": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "normal"
    },
    "boldFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "normal"
    },
    "italicFont": {
      "family": "Funnel Sans",
      "weight": 400,
      "style": "italic"
    },
    "boldItalicFont": {
      "family": "Funnel Sans",
      "weight": 700,
      "style": "italic"
    },
    "color": "var(--color-neutral-50)",
    "alignment": "start",
    "transform": "uppercase",
    "wrap": "wrap",
    "features": {
      "blwf": "on",
      "cv03": "on",
      "cv04": "on",
      "cv09": "on",
      "cv11": "on"
    },
    "decoration": "none",
    "decorationColor": "currentcolor",
    "decorationThickness": "auto",
    "decorationStyle": "solid",
    "decorationSkipInk": "auto",
    "decorationOffset": "auto",
    "breakpoints": [
      {
        "label": "default",
        "minWidth": 0,
        "fontSize": "16px",
        "lineHeight": "1.1em",
        "letterSpacing": "0em",
        "paragraphSpacing": "40px"
      }
    ]
  }
} as const

export const links = {
  "link": {
    "path": "Link",
    "className": "link-link",
    "states": {
      "link": {
        "textColor": "var(--color-brand-primary)"
      }
    }
  }
} as const

export const fonts = {
  "funnelDisplay": {
    "family": "Funnel Display",
    "cssVariable": "--font-funnel-display",
    "faces": [
      {
        "weight": 600,
        "style": "normal",
        "src": "/fonts/funnel-display-600-normal.woff2"
      },
      {
        "weight": 800,
        "style": "normal",
        "src": "/fonts/funnel-display-800-normal.woff2"
      }
    ]
  },
  "funnelSans": {
    "family": "Funnel Sans",
    "cssVariable": "--font-funnel-sans",
    "faces": [
      {
        "weight": 400,
        "style": "normal",
        "src": "/fonts/funnel-sans-400-normal.woff2"
      },
      {
        "weight": 700,
        "style": "normal",
        "src": "/fonts/funnel-sans-700-normal.woff2"
      },
      {
        "weight": 400,
        "style": "italic",
        "src": "/fonts/funnel-sans-400-italic.woff2"
      },
      {
        "weight": 700,
        "style": "italic",
        "src": "/fonts/funnel-sans-700-italic.woff2"
      },
      {
        "weight": 600,
        "style": "normal",
        "src": "/fonts/funnel-sans-600-normal.woff2"
      },
      {
        "weight": 600,
        "style": "italic",
        "src": "/fonts/funnel-sans-600-italic.woff2"
      },
      {
        "weight": 800,
        "style": "italic",
        "src": "/fonts/funnel-sans-800-italic.woff2"
      },
      {
        "weight": 800,
        "style": "normal",
        "src": "/fonts/funnel-sans-800-normal.woff2"
      }
    ]
  },
  "ibmPlexSans": {
    "family": "IBM Plex Sans",
    "cssVariable": "--font-ibm-plex-sans",
    "faces": [
      {
        "weight": 600,
        "style": "normal",
        "src": "/fonts/ibm-plex-sans-600-normal.woff2"
      },
      {
        "weight": 600,
        "style": "italic",
        "src": "/fonts/ibm-plex-sans-600-italic.woff2"
      }
    ]
  }
} as const

export const breakpoints = {
  "desktop": "(min-width: 1200px)",
  "tablet": "(min-width: 810px) and (max-width: 1199.98px)",
  "phone": "(max-width: 809.98px)"
} as const

export type ColorToken = keyof typeof colors
export type TextToken = keyof typeof typography

/* Generated from geometry-source.json. Run pnpm tokens:generate. */
export const spacing = {
  "space0": {
    "value": "0px",
    "cssVariable": "--space-0",
    "sourceNodes": 77,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space2": {
    "value": "2px",
    "cssVariable": "--space-2",
    "sourceNodes": 4,
    "properties": [
      "gap"
    ]
  },
  "space4": {
    "value": "4px",
    "cssVariable": "--space-4",
    "sourceNodes": 19,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space8": {
    "value": "8px",
    "cssVariable": "--space-8",
    "sourceNodes": 47,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space10": {
    "value": "10px",
    "cssVariable": "--space-10",
    "sourceNodes": 13,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space12": {
    "value": "12px",
    "cssVariable": "--space-12",
    "sourceNodes": 35,
    "properties": [
      "padding",
      "gap"
    ]
  },
  "space16": {
    "value": "16px",
    "cssVariable": "--space-16",
    "sourceNodes": 17,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space20": {
    "value": "20px",
    "cssVariable": "--space-20",
    "sourceNodes": 22,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space24": {
    "value": "24px",
    "cssVariable": "--space-24",
    "sourceNodes": 19,
    "properties": [
      "padding",
      "gap"
    ]
  },
  "space32": {
    "value": "32px",
    "cssVariable": "--space-32",
    "sourceNodes": 6,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space36": {
    "value": "36px",
    "cssVariable": "--space-36",
    "sourceNodes": 3,
    "properties": [
      "padding",
      "gap"
    ]
  },
  "space40": {
    "value": "40px",
    "cssVariable": "--space-40",
    "sourceNodes": 28,
    "properties": [
      "padding",
      "gap"
    ]
  },
  "space52": {
    "value": "52px",
    "cssVariable": "--space-52",
    "sourceNodes": 4,
    "properties": [
      "gap"
    ]
  },
  "space56": {
    "value": "56px",
    "cssVariable": "--space-56",
    "sourceNodes": 2,
    "properties": [
      "gap"
    ]
  },
  "space60": {
    "value": "60px",
    "cssVariable": "--space-60",
    "sourceNodes": 14,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space64": {
    "value": "64px",
    "cssVariable": "--space-64",
    "sourceNodes": 4,
    "properties": [
      "padding"
    ]
  },
  "space80": {
    "value": "80px",
    "cssVariable": "--space-80",
    "sourceNodes": 79,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space92": {
    "value": "92px",
    "cssVariable": "--space-92",
    "sourceNodes": 2,
    "properties": [
      "gap"
    ]
  },
  "space96": {
    "value": "96px",
    "cssVariable": "--space-96",
    "sourceNodes": 2,
    "properties": [
      "gap"
    ]
  },
  "space100": {
    "value": "100px",
    "cssVariable": "--space-100",
    "sourceNodes": 23,
    "properties": [
      "padding",
      "gap"
    ]
  },
  "space120": {
    "value": "120px",
    "cssVariable": "--space-120",
    "sourceNodes": 10,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space140": {
    "value": "140px",
    "cssVariable": "--space-140",
    "sourceNodes": 3,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space160": {
    "value": "160px",
    "cssVariable": "--space-160",
    "sourceNodes": 2,
    "properties": [
      "gap",
      "padding"
    ]
  },
  "space200": {
    "value": "200px",
    "cssVariable": "--space-200",
    "sourceNodes": 17,
    "properties": [
      "padding",
      "gap"
    ]
  },
  "space320": {
    "value": "320px",
    "cssVariable": "--space-320",
    "sourceNodes": 3,
    "properties": [
      "padding"
    ]
  }
} as const

export const insets = {
  "pageInline": {
    "cssVariable": "--inset-page-inline",
    "value": "0px var(--layout-page-gutter)"
  },
  "section": {
    "cssVariable": "--inset-section",
    "value": "var(--layout-section-block) var(--layout-page-gutter)"
  }
} as const

export const gaps = {
  "rows0Columns8": {
    "value": "var(--space-0) var(--space-8)",
    "cssVariable": "--gap-rows-0-columns-8",
    "sourceNodes": 6
  },
  "rows8Columns8": {
    "value": "var(--space-8) var(--space-8)",
    "cssVariable": "--gap-rows-8-columns-8",
    "sourceNodes": 6
  },
  "rows60Columns8": {
    "value": "var(--space-60) var(--space-8)",
    "cssVariable": "--gap-rows-60-columns-8",
    "sourceNodes": 5
  }
} as const

export const radii = {
  "none": {
    "value": "0px",
    "cssVariable": "--radius-none",
    "sourceNodes": 5
  },
  "subtle": {
    "value": "1px",
    "cssVariable": "--radius-subtle",
    "sourceNodes": 4
  },
  "avatar": {
    "value": "56px",
    "cssVariable": "--radius-avatar",
    "sourceNodes": 2
  }
} as const

export const borders = {
  "hairline": {
    "value": "1px",
    "cssVariable": "--border-width-hairline",
    "sourceNodes": 3
  },
  "separator": {
    "value": "1px solid var(--color-neutral-600)",
    "cssVariable": "--border-separator",
    "sourceNodes": 3
  },
  "formInput": {
    "value": "1px solid var(--color-neutral-950)",
    "cssVariable": "--border-form-input",
    "sourceNodes": 8
  }
} as const

export const shadows = {
  "formFocus": {
    "value": "2px 2px 0px 0px var(--color-neutral-950)",
    "cssVariable": "--shadow-form-focus",
    "sourceNodes": 8
  }
} as const

export const layout = {
  "pageGutter": {
    "cssVariable": "--layout-page-gutter",
    "breakpoints": {
      "phone": {
        "minWidth": 0,
        "value": "12px"
      },
      "tablet": {
        "minWidth": 810,
        "value": "40px"
      },
      "desktop": {
        "minWidth": 1200,
        "value": "80px"
      }
    }
  },
  "sectionBlock": {
    "cssVariable": "--layout-section-block",
    "breakpoints": {
      "phone": {
        "minWidth": 0,
        "value": "100px"
      },
      "tablet": {
        "minWidth": 810,
        "value": "200px"
      },
      "desktop": {
        "minWidth": 1200,
        "value": "200px"
      }
    }
  },
  "contentMeasure": {
    "value": "640px",
    "cssVariable": "--layout-content-measure",
    "sourceNodes": 6
  }
} as const

export type SpaceToken = keyof typeof spacing
export type RadiusToken = keyof typeof radii

export const primitive = {
"controlNavColor": {
"homeHome": { value: "var(--color-neutral-50)", cssVariable: "--source-control-nav-color-home-home" },
"esperienzaEsperienza": { value: "var(--color-neutral-bone-highlight)", cssVariable: "--source-control-nav-color-esperienza-esperienza" },
"vieniATrovarciVieniATrovarci": { value: "var(--color-neutral-950)", cssVariable: "--source-control-nav-color-vieni-atrovarci-vieni-atrovarci" },
},
"width": {
"value1200px": { value: "1200px", cssVariable: "--source-width-value1200px" },
"value960px": { value: "960px", cssVariable: "--source-width-value960px" },
"value108px": { value: "108px", cssVariable: "--source-width-value108px" },
"value85px": { value: "85px", cssVariable: "--source-width-value85px" },
"value95px": { value: "95px", cssVariable: "--source-width-value95px" },
"value134px": { value: "134px", cssVariable: "--source-width-value134px" },
"value88px": { value: "88px", cssVariable: "--source-width-value88px" },
"value136px": { value: "136px", cssVariable: "--source-width-value136px" },
"value105px": { value: "105px", cssVariable: "--source-width-value105px" },
"value64px": { value: "64px", cssVariable: "--source-width-value64px" },
"value63px": { value: "63px", cssVariable: "--source-width-value63px" },
"value1px": { value: "1px", cssVariable: "--source-width-value1px" },
"value32Percent": { value: "32%", cssVariable: "--source-width-value32percent" },
"value810px": { value: "810px", cssVariable: "--source-width-value810px" },
"value770px": { value: "770px", cssVariable: "--source-width-value770px" },
"value390px": { value: "390px", cssVariable: "--source-width-value390px" },
"value169Percent": { value: "169%", cssVariable: "--source-width-value169percent" },
"value56px": { value: "56px", cssVariable: "--source-width-value56px" },
"value55px": { value: "55px", cssVariable: "--source-width-value55px" },
"value1040px": { value: "1040px", cssVariable: "--source-width-value1040px" },
"value70Percent": { value: "70%", cssVariable: "--source-width-value70percent" },
"value122px": { value: "122px", cssVariable: "--source-width-value122px" },
"value738px": { value: "738px", cssVariable: "--source-width-value738px" },
"value1003px": { value: "1003px", cssVariable: "--source-width-value1003px" },
"value366px": { value: "366px", cssVariable: "--source-width-value366px" },
"value302px": { value: "302px", cssVariable: "--source-width-value302px" },
"value818px": { value: "818px", cssVariable: "--source-width-value818px" },
"value80px": { value: "80px", cssVariable: "--source-width-value80px" },
"2fr": { value: "2fr", cssVariable: "--source-width-2fr" },
"value28Point000000000000004Percent": { value: "28.000000000000004%", cssVariable: "--source-width-value28point000000000000004percent" },
"value778px": { value: "778px", cssVariable: "--source-width-value778px" },
"value40px": { value: "40px", cssVariable: "--source-width-value40px" },
"value555px": { value: "555px", cssVariable: "--source-width-value555px" },
"value531px": { value: "531px", cssVariable: "--source-width-value531px" },
"value28px": { value: "28px", cssVariable: "--source-width-value28px" },
"value4px": { value: "4px", cssVariable: "--source-width-value4px" },
"value1912px": { value: "1912px", cssVariable: "--source-width-value1912px" },
"value600px": { value: "600px", cssVariable: "--source-width-value600px" },
"value320px": { value: "320px", cssVariable: "--source-width-value320px" },
"value18Percent": { value: "18%", cssVariable: "--source-width-value18percent" },
"value54Percent": { value: "54%", cssVariable: "--source-width-value54percent" },
"value733Point5px": { value: "733.5px", cssVariable: "--source-width-value733point5px" },
"value550px": { value: "550px", cssVariable: "--source-width-value550px" },
"value548px": { value: "548px", cssVariable: "--source-width-value548px" },
"value24px": { value: "24px", cssVariable: "--source-width-value24px" },
"value198px": { value: "198px", cssVariable: "--source-width-value198px" },
"value20px": { value: "20px", cssVariable: "--source-width-value20px" },
"value2px": { value: "2px", cssVariable: "--source-width-value2px" },
"value195px": { value: "195px", cssVariable: "--source-width-value195px" },
"value26px": { value: "26px", cssVariable: "--source-width-value26px" },
"value1168px": { value: "1168px", cssVariable: "--source-width-value1168px" },
"value121px": { value: "121px", cssVariable: "--source-width-value121px" },
"value50px": { value: "50px", cssVariable: "--source-width-value50px" },
"value260px": { value: "260px", cssVariable: "--source-width-value260px" },
"value800px": { value: "800px", cssVariable: "--source-width-value800px" },
"value352px": { value: "352px", cssVariable: "--source-width-value352px" },
"value740px": { value: "740px", cssVariable: "--source-width-value740px" },
"value660px": { value: "660px", cssVariable: "--source-width-value660px" },
"value1440px": { value: "1440px", cssVariable: "--source-width-value1440px" },
"value82px": { value: "82px", cssVariable: "--source-width-value82px" },
"value173px": { value: "173px", cssVariable: "--source-width-value173px" },
"value516px": { value: "516px", cssVariable: "--source-width-value516px" },
"value20Percent": { value: "20%", cssVariable: "--source-width-value20percent" },
},
"motionStiffness": {
"value500": { value: 500, cssVariable: "--source-motion-stiffness-value500" },
},
"motionDamping": {
"value60": { value: 60, cssVariable: "--source-motion-damping-value60" },
},
"motionMass": {
"value1": { value: 1, cssVariable: "--source-motion-mass-value1" },
},
"motionDelay": {
"value0s": { value: "0s", cssVariable: "--source-motion-delay-value0s" },
"value1s": { value: "1s", cssVariable: "--source-motion-delay-value1s" },
"value0Point17s": { value: "0.17s", cssVariable: "--source-motion-delay-value0point17s" },
"value0Point06s": { value: "0.06s", cssVariable: "--source-motion-delay-value0point06s" },
"value0Point4s": { value: "0.4s", cssVariable: "--source-motion-delay-value0point4s" },
"value0Point1s": { value: "0.1s", cssVariable: "--source-motion-delay-value0point1s" },
"value0Point05s": { value: "0.05s", cssVariable: "--source-motion-delay-value0point05s" },
"value0": { value: 0, cssVariable: "--source-motion-delay-value0" },
"value0Point2s": { value: "0.2s", cssVariable: "--source-motion-delay-value0point2s" },
"value0Point6s": { value: "0.6s", cssVariable: "--source-motion-delay-value0point6s" },
"value0Point15s": { value: "0.15s", cssVariable: "--source-motion-delay-value0point15s" },
"value0Point08": { value: 0.08, cssVariable: "--source-motion-delay-value0point08" },
},
"controlFill": {
"homeDesktopPreLoader": { value: "var(--color-brand-primary)", cssVariable: "--source-control-fill-home-desktop-pre-loader" },
"homeDesktopColorContainerLogosAndQuoteLogosRedBullBrandAffineNonPartner": { value: "#000000", cssVariable: "--source-control-fill-home-desktop-color-container-logos-and-quote-logos-red-bull-brand-affine-non-partner" },
"templateDesktopMobileNav": { value: "var(--color-neutral-50)", cssVariable: "--source-control-fill-template-desktop-mobile-nav" },
"redBull": { value: "rgb(0, 0, 0)", cssVariable: "--source-control-fill-red-bull" },
},
"effectThreshold": {
"value0Point5": { value: 0.5, cssVariable: "--source-effect-threshold-value0point5" },
"value0": { value: 0, cssVariable: "--source-effect-threshold-value0" },
},
"height": {
"value100vh": { value: "100vh", cssVariable: "--source-height-value100vh" },
"value800px": { value: "800px", cssVariable: "--source-height-value800px" },
"value420px": { value: "420px", cssVariable: "--source-height-value420px" },
"value27px": { value: "27px", cssVariable: "--source-height-value27px" },
"value33px": { value: "33px", cssVariable: "--source-height-value33px" },
"value24px": { value: "24px", cssVariable: "--source-height-value24px" },
"value21px": { value: "21px", cssVariable: "--source-height-value21px" },
"value64px": { value: "64px", cssVariable: "--source-height-value64px" },
"value56px": { value: "56px", cssVariable: "--source-height-value56px" },
"value1Percent": { value: "1%", cssVariable: "--source-height-value1percent" },
"value10000Percent": { value: "10000%", cssVariable: "--source-height-value10000percent" },
"value640px": { value: "640px", cssVariable: "--source-height-value640px" },
"value600px": { value: "600px", cssVariable: "--source-height-value600px" },
"value60px": { value: "60px", cssVariable: "--source-height-value60px" },
"value52Point5px": { value: "52.5px", cssVariable: "--source-height-value52point5px" },
"value848px": { value: "848px", cssVariable: "--source-height-value848px" },
"value92vh": { value: "92vh", cssVariable: "--source-height-value92vh" },
"value84vh": { value: "84vh", cssVariable: "--source-height-value84vh" },
"fitImage": { value: "fit-image", cssVariable: "--source-height-fit-image" },
"value350px": { value: "350px", cssVariable: "--source-height-value350px" },
"value750px": { value: "750px", cssVariable: "--source-height-value750px" },
"value724px": { value: "724px", cssVariable: "--source-height-value724px" },
"value749Point5px": { value: "749.5px", cssVariable: "--source-height-value749point5px" },
"value6px": { value: "6px", cssVariable: "--source-height-value6px" },
"value1080px": { value: "1080px", cssVariable: "--source-height-value1080px" },
"value48px": { value: "48px", cssVariable: "--source-height-value48px" },
"value2000px": { value: "2000px", cssVariable: "--source-height-value2000px" },
"value100px": { value: "100px", cssVariable: "--source-height-value100px" },
"value2500px": { value: "2500px", cssVariable: "--source-height-value2500px" },
"value585px": { value: "585px", cssVariable: "--source-height-value585px" },
"value40px": { value: "40px", cssVariable: "--source-height-value40px" },
"value28px": { value: "28px", cssVariable: "--source-height-value28px" },
"value760px": { value: "760px", cssVariable: "--source-height-value760px" },
"value16px": { value: "16px", cssVariable: "--source-height-value16px" },
"value1013px": { value: "1013px", cssVariable: "--source-height-value1013px" },
"value20px": { value: "20px", cssVariable: "--source-height-value20px" },
"value2px": { value: "2px", cssVariable: "--source-height-value2px" },
"value54px": { value: "54px", cssVariable: "--source-height-value54px" },
"value36px": { value: "36px", cssVariable: "--source-height-value36px" },
"value12px": { value: "12px", cssVariable: "--source-height-value12px" },
"value242px": { value: "242px", cssVariable: "--source-height-value242px" },
"value140px": { value: "140px", cssVariable: "--source-height-value140px" },
"value320px": { value: "320px", cssVariable: "--source-height-value320px" },
"value45Point5px": { value: "45.5px", cssVariable: "--source-height-value45point5px" },
"value256px": { value: "256px", cssVariable: "--source-height-value256px" },
"value260px": { value: "260px", cssVariable: "--source-height-value260px" },
"value11px": { value: "11px", cssVariable: "--source-height-value11px" },
"value440px": { value: "440px", cssVariable: "--source-height-value440px" },
"value834px": { value: "834px", cssVariable: "--source-height-value834px" },
"value1px": { value: "1px", cssVariable: "--source-height-value1px" },
},
"zIndex": {
"value10": { value: "10", cssVariable: "--source-z-index-value10" },
"value2": { value: "2", cssVariable: "--source-z-index-value2" },
"value1": { value: "1", cssVariable: "--source-z-index-value1" },
"value4": { value: "4", cssVariable: "--source-z-index-value4" },
"value6": { value: "6", cssVariable: "--source-z-index-value6" },
"value3": { value: "3", cssVariable: "--source-z-index-value3" },
"value0": { value: "0", cssVariable: "--source-z-index-value0" },
},
"fill": {
"homeDesktopHero": { value: "var(--color-neutral-dark-detail)", cssVariable: "--source-fill-home-desktop-hero" },
"homeDesktopColorContainer": { value: "var(--color-neutral-950)", cssVariable: "--source-fill-home-desktop-color-container" },
"homeDesktopColorContainerLogosAndQuote": { value: "var(--color-neutral-50)", cssVariable: "--source-fill-home-desktop-color-container-logos-and-quote" },
"000000": { value: "#000000", cssVariable: "--source-fill-000000" },
"homeDesktopColorContainerProcess": { value: "var(--color-neutral-800)", cssVariable: "--source-fill-home-desktop-color-container-process" },
"esperienzaDesktopColorContainerStats": { value: "var(--color-brand-accent)", cssVariable: "--source-fill-esperienza-desktop-color-container-stats" },
"eventiEventiDesktopColorContainerTestimonialContentNameAndTitle": { value: "var(--color-brand-primary)", cssVariable: "--source-fill-eventi-eventi-desktop-color-container-testimonial-content-name-and-title" },
"mainFormButtonDefaultSpinnerConic": { value: "conic-gradient(from 0deg at 50% 50%, var(--color-neutral-50) 7.208614864864882deg, var(--color-neutral-950) 342deg)", cssVariable: "--source-fill-main-form-button-default-spinner-conic" },
"testimonialsArrowVariant1": { value: "var(--color-neutral-700)", cssVariable: "--source-fill-testimonials-arrow-variant1" },
"loadMoreDefaultSpinnerConic": { value: "conic-gradient(from 0deg at 50% 50%, var(--color-neutral-overlay-30) 0deg, var(--color-neutral-950) 342deg)", cssVariable: "--source-fill-load-more-default-spinner-conic" },
},
"gap": {
"homeDesktopHero": { value: "80px", cssVariable: "--source-gap-home-desktop-hero" },
"homeDesktopColorContainer": { value: "0px", cssVariable: "--source-gap-home-desktop-color-container" },
"homeDesktopColorContainerLogosAndQuote": { value: "140px", cssVariable: "--source-gap-home-desktop-color-container-logos-and-quote" },
"homeDesktopColorContainerLogosAndQuoteLogos": { value: "92px", cssVariable: "--source-gap-home-desktop-color-container-logos-and-quote-logos" },
"value120px": { value: "120px", cssVariable: "--source-gap-value120px" },
"homeDesktopColorContainerLogosAndQuoteQuote": { value: "24px", cssVariable: "--source-gap-home-desktop-color-container-logos-and-quote-quote" },
"homeDesktopColorContainerLogosAndQuoteQuoteText": { value: "4px", cssVariable: "--source-gap-home-desktop-color-container-logos-and-quote-quote-text" },
"homeDesktopColorContainerLogosAndQuoteQuoteProfileDetails": { value: "85px", cssVariable: "--source-gap-home-desktop-color-container-logos-and-quote-quote-profile-details" },
"homeDesktopColorContainerLogosAndQuoteQuoteProfileDetailsImageAndName": { value: "16px", cssVariable: "--source-gap-home-desktop-color-container-logos-and-quote-quote-profile-details-image-and-name" },
"homeDesktopColorContainerRecentProjectsHeadlineAnd1stProject": { value: "20px", cssVariable: "--source-gap-home-desktop-color-container-recent-projects-headline-and1st-project" },
"value10px": { value: "10px", cssVariable: "--source-gap-value10px" },
"homeDesktopColorContainerProcess": { value: "200px", cssVariable: "--source-gap-home-desktop-color-container-process" },
"homeDesktopColorContainerProcessHeadline": { value: "520px", cssVariable: "--source-gap-home-desktop-color-container-process-headline" },
"homeDesktopColorContainerProcessContent": { value: "160px", cssVariable: "--source-gap-home-desktop-color-container-process-content" },
"homeDesktopColorContainerTestimonials": { value: "96px", cssVariable: "--source-gap-home-desktop-color-container-testimonials" },
"homeDesktopColorContainerTestimonialsHeadline": { value: "0px 8px", cssVariable: "--source-gap-home-desktop-color-container-testimonials-headline" },
"homePhoneColorContainerLogosAndQuote": { value: "60px", cssVariable: "--source-gap-home-phone-color-container-logos-and-quote" },
"homePhoneColorContainerProcess": { value: "100px", cssVariable: "--source-gap-home-phone-color-container-process" },
"esperienzaDesktopColorContainerStats": { value: "354px", cssVariable: "--source-gap-esperienza-desktop-color-container-stats" },
"esperienzaDesktopColorContainerStatsStatRow": { value: "8px", cssVariable: "--source-gap-esperienza-desktop-color-container-stats-stat-row" },
"esperienzaDesktopColorContainerBlog": { value: "60px 8px", cssVariable: "--source-gap-esperienza-desktop-color-container-blog" },
"eventiEventiDesktopHeroContentLabelContainer": { value: "2px", cssVariable: "--source-gap-eventi-eventi-desktop-hero-content-label-container" },
"eventiEventiDesktopColorContainerIntroTextTechnicalDetails": { value: "40px", cssVariable: "--source-gap-eventi-eventi-desktop-color-container-intro-text-technical-details" },
"eventiEventiDesktopColorContainerSection1HeadlineHeadline": { value: "12px", cssVariable: "--source-gap-eventi-eventi-desktop-color-container-section1headline-headline" },
"eventiEventiDesktopColorContainerSection1": { value: "8px 8px", cssVariable: "--source-gap-eventi-eventi-desktop-color-container-section1" },
"eventiEventiDesktopColorContainerTestimonialContent": { value: "56px", cssVariable: "--source-gap-eventi-eventi-desktop-color-container-testimonial-content" },
"eventiEventiPhoneColorContainerIntroText": { value: "52px", cssVariable: "--source-gap-eventi-eventi-phone-color-container-intro-text" },
"communityCommunityDesktopMainHero": { value: "32px", cssVariable: "--source-gap-community-community-desktop-main-hero" },
"projectCardMainPageDesktopContentContentTop": { value: "1486px", cssVariable: "--source-gap-project-card-main-page-desktop-content-content-top" },
"projectCardMainPageDesktopContentContentBottom": { value: "1000px", cssVariable: "--source-gap-project-card-main-page-desktop-content-content-bottom" },
"serviceCardDeskopContentHeadline": { value: "36px", cssVariable: "--source-gap-service-card-deskop-content-headline" },
"processRowDesktop": { value: "1129px", cssVariable: "--source-gap-process-row-desktop" },
"servicesSectionDesktopHeadline": { value: "549px", cssVariable: "--source-gap-services-section-desktop-headline" },
},
"space": {
"value80px": { value: spacing["space80"].value, cssVariable: "--source-space-value80px" },
"value0px": { value: spacing["space0"].value, cssVariable: "--source-space-value0px" },
"value200px": { value: spacing["space200"].value, cssVariable: "--source-space-value200px" },
"value140px": { value: spacing["space140"].value, cssVariable: "--source-space-value140px" },
"value100px": { value: spacing["space100"].value, cssVariable: "--source-space-value100px" },
"value92px": { value: spacing["space92"].value, cssVariable: "--source-space-value92px" },
"value24px": { value: spacing["space24"].value, cssVariable: "--source-space-value24px" },
"value120px": { value: spacing["space120"].value, cssVariable: "--source-space-value120px" },
"value4px": { value: spacing["space4"].value, cssVariable: "--source-space-value4px" },
"value64px": { value: spacing["space64"].value, cssVariable: "--source-space-value64px" },
"value16px": { value: spacing["space16"].value, cssVariable: "--source-space-value16px" },
"value20px": { value: spacing["space20"].value, cssVariable: "--source-space-value20px" },
"value10px": { value: spacing["space10"].value, cssVariable: "--source-space-value10px" },
"value160px": { value: spacing["space160"].value, cssVariable: "--source-space-value160px" },
"value96px": { value: spacing["space96"].value, cssVariable: "--source-space-value96px" },
"value8px": { value: spacing["space8"].value, cssVariable: "--source-space-value8px" },
"value40px": { value: spacing["space40"].value, cssVariable: "--source-space-value40px" },
"value12px": { value: spacing["space12"].value, cssVariable: "--source-space-value12px" },
"value60px": { value: spacing["space60"].value, cssVariable: "--source-space-value60px" },
"value2px": { value: spacing["space2"].value, cssVariable: "--source-space-value2px" },
"value56px": { value: spacing["space56"].value, cssVariable: "--source-space-value56px" },
"value52px": { value: spacing["space52"].value, cssVariable: "--source-space-value52px" },
"value320px": { value: spacing["space320"].value, cssVariable: "--source-space-value320px" },
"value36px": { value: spacing["space36"].value, cssVariable: "--source-space-value36px" },
"value32px": { value: spacing["space32"].value, cssVariable: "--source-space-value32px" },
},
"effectSpeed": {
"value60": { value: 60, cssVariable: "--source-effect-speed-value60" },
},
"effectOpacity": {
"value0": { value: 0, cssVariable: "--source-effect-opacity-value0" },
"value1": { value: 1, cssVariable: "--source-effect-opacity-value1" },
},
"effectX": {
"value0": { value: 0, cssVariable: "--source-effect-x-value0" },
"valueNegative2000px": { value: "-2000px", cssVariable: "--source-effect-x-value-negative2000px" },
"value0px": { value: "0px", cssVariable: "--source-effect-x-value0px" },
"value2000px": { value: "2000px", cssVariable: "--source-effect-x-value2000px" },
"value390": { value: 390, cssVariable: "--source-effect-x-value390" },
},
"effectY": {
"value60": { value: 60, cssVariable: "--source-effect-y-value60" },
"value0px": { value: "0px", cssVariable: "--source-effect-y-value0px" },
"valueNegative120px": { value: "-120px", cssVariable: "--source-effect-y-value-negative120px" },
"value0": { value: 0, cssVariable: "--source-effect-y-value0" },
"valueNegative300px": { value: "-300px", cssVariable: "--source-effect-y-value-negative300px" },
"valueNegative100px": { value: "-100px", cssVariable: "--source-effect-y-value-negative100px" },
"value40px": { value: "40px", cssVariable: "--source-effect-y-value40px" },
},
"effectScale": {
"value1": { value: 1, cssVariable: "--source-effect-scale-value1" },
"value0Point7": { value: 0.7, cssVariable: "--source-effect-scale-value0point7" },
"value0": { value: 0, cssVariable: "--source-effect-scale-value0" },
"value0Point5": { value: 0.5, cssVariable: "--source-effect-scale-value0point5" },
},
"effectRotate": {
"value0": { value: 0, cssVariable: "--source-effect-rotate-value0" },
"value0deg": { value: "0deg", cssVariable: "--source-effect-rotate-value0deg" },
"value360": { value: 360, cssVariable: "--source-effect-rotate-value360" },
},
"effectRotateX": {
"value0": { value: 0, cssVariable: "--source-effect-rotate-x-value0" },
},
"effectRotateY": {
"value0": { value: 0, cssVariable: "--source-effect-rotate-y-value0" },
},
"effectSkewX": {
"value0": { value: 0, cssVariable: "--source-effect-skew-x-value0" },
"value0deg": { value: "0deg", cssVariable: "--source-effect-skew-x-value0deg" },
},
"effectSkewY": {
"value0": { value: 0, cssVariable: "--source-effect-skew-y-value0" },
"value0deg": { value: "0deg", cssVariable: "--source-effect-skew-y-value0deg" },
},
"easing": {
"curve0Point44And0And0Point56And1": { value: "cubic-bezier(0.44,0,0.56,1)", cssVariable: "--source-easing-curve0point44and0and0point56and1" },
"curve0Point5And0And0Point88And0Point77": { value: "cubic-bezier(0.5,0,0.88,0.77)", cssVariable: "--source-easing-curve0point5and0and0point88and0point77" },
"curve0Point12And0Point23And0Point5And1": { value: "cubic-bezier(0.12,0.23,0.5,1)", cssVariable: "--source-easing-curve0point12and0point23and0point5and1" },
"curve0Point94And0Point02And0Point24And0Point97": { value: "cubic-bezier(0.94,0.02,0.24,0.97)", cssVariable: "--source-easing-curve0point94and0point02and0point24and0point97" },
"curve0Point85And0Point05And0Point26And0Point96": { value: "cubic-bezier(0.85,0.05,0.26,0.96)", cssVariable: "--source-easing-curve0point85and0point05and0point26and0point96" },
"curve0Point82And0Point14And0Point29And0Point91": { value: "cubic-bezier(0.82,0.14,0.29,0.91)", cssVariable: "--source-easing-curve0point82and0point14and0point29and0point91" },
"curve0And0And1And1": { value: "cubic-bezier(0,0,1,1)", cssVariable: "--source-easing-curve0and0and1and1" },
"curve0Point82And0Point18And0Point23And0Point74": { value: "cubic-bezier(0.82,0.18,0.23,0.74)", cssVariable: "--source-easing-curve0point82and0point18and0point23and0point74" },
"curve0Point96AndNegative0Point02And0Point38And1Point01": { value: "cubic-bezier(0.96,-0.02,0.38,1.01)", cssVariable: "--source-easing-curve0point96and-negative0point02and0point38and1point01" },
"textStagger": { value: "cubic-bezier(0.44,0,0.34,0.98)", cssVariable: "--source-easing-text-stagger" },
},
"motionDuration": {
"value0Point3s": { value: "0.3s", cssVariable: "--source-motion-duration-value0point3s" },
"value0Point9s": { value: "0.9s", cssVariable: "--source-motion-duration-value0point9s" },
"value0Point4s": { value: "0.4s", cssVariable: "--source-motion-duration-value0point4s" },
"value0Point5s": { value: "0.5s", cssVariable: "--source-motion-duration-value0point5s" },
"value0s": { value: "0s", cssVariable: "--source-motion-duration-value0s" },
"value0Point2s": { value: "0.2s", cssVariable: "--source-motion-duration-value0point2s" },
"value0Point6s": { value: "0.6s", cssVariable: "--source-motion-duration-value0point6s" },
"value0Point3": { value: 0.3, cssVariable: "--source-motion-duration-value0point3" },
"value1s": { value: "1s", cssVariable: "--source-motion-duration-value1s" },
"value0Point5": { value: 0.5, cssVariable: "--source-motion-duration-value0point5" },
},
"motionStagger": {
"value0s": { value: "0s", cssVariable: "--source-motion-stagger-value0s" },
"value0": { value: 0, cssVariable: "--source-motion-stagger-value0" },
},
"controlResolution": {
"homeDesktopHeroDesktopImage": { value: "3", cssVariable: "--source-control-resolution-home-desktop-hero-desktop-image" },
"liquidHover": { value: 4, cssVariable: "--source-control-resolution-liquid-hover" },
},
"controlCursor": {
"homeDesktopHeroDesktopImage": { value: "0.5", cssVariable: "--source-control-cursor-home-desktop-hero-desktop-image" },
"liquidHover": { value: 0.5, cssVariable: "--source-control-cursor-liquid-hover" },
},
"controlPower": {
"homeDesktopHeroDesktopImage": { value: "0.3", cssVariable: "--source-control-power-home-desktop-hero-desktop-image" },
"liquidHover": { value: 0.6, cssVariable: "--source-control-power-liquid-hover" },
},
"controlDistortion": {
"homeDesktopHeroDesktopImage": { value: "0.45", cssVariable: "--source-control-distortion-home-desktop-hero-desktop-image" },
"liquidHover": { value: 0.5, cssVariable: "--source-control-distortion-liquid-hover" },
},
"controlOpacity": {
"homeDesktopHeroGrain": { value: "1", cssVariable: "--source-control-opacity-home-desktop-hero-grain" },
"grain": { value: 0.5, cssVariable: "--source-control-opacity-grain" },
},
"mask": {
"homeDesktopHeroGrain": { value: "radial-gradient(50% 34% at 33.800000000000004% 38.5%, rgba(0, 0, 0, 0) 39%, rgb(0, 0, 0) 57.00000000000001%, rgba(0, 0, 0, 0) 73%)", cssVariable: "--source-mask-home-desktop-hero-grain" },
"homeTabletHeroGrain": { value: "radial-gradient(50% 34% at 55.50000000000001% 35.6%, rgba(0, 0, 0, 0) 39%, rgb(0, 0, 0) 57.00000000000001%, rgba(0, 0, 0, 0) 73%)", cssVariable: "--source-mask-home-tablet-hero-grain" },
"homePhoneHeroGrain": { value: "radial-gradient(50% 36% at 33.800000000000004% 38.5%, rgba(0, 0, 0, 0) 39%, rgb(0, 0, 0) 55.00000000000001%, rgba(0, 0, 0, 0) 73%)", cssVariable: "--source-mask-home-phone-hero-grain" },
},
"opacity": {
"value0Point1": { value: "0.1", cssVariable: "--source-opacity-value0point1" },
"value0Point7": { value: "0.7", cssVariable: "--source-opacity-value0point7" },
"value0Point3": { value: "0.3", cssVariable: "--source-opacity-value0point3" },
"value0": { value: "0", cssVariable: "--source-opacity-value0" },
"value0Point8": { value: "0.8", cssVariable: "--source-opacity-value0point8" },
"value1": { value: 1, cssVariable: "--source-opacity-value1" },
},
"maxWidth": {
"value1500px": { value: "1500px", cssVariable: "--source-max-width-value1500px" },
"value292px": { value: "292px", cssVariable: "--source-max-width-value292px" },
"value480px": { value: "480px", cssVariable: "--source-max-width-value480px" },
"value640px": { value: "640px", cssVariable: "--source-max-width-value640px" },
"value593px": { value: "593px", cssVariable: "--source-max-width-value593px" },
"value610px": { value: "610px", cssVariable: "--source-max-width-value610px" },
"value698px": { value: "698px", cssVariable: "--source-max-width-value698px" },
"value666px": { value: "666px", cssVariable: "--source-max-width-value666px" },
"value500px": { value: "500px", cssVariable: "--source-max-width-value500px" },
"value320px": { value: "320px", cssVariable: "--source-max-width-value320px" },
"value708px": { value: "708px", cssVariable: "--source-max-width-value708px" },
"value672px": { value: "672px", cssVariable: "--source-max-width-value672px" },
"value680px": { value: "680px", cssVariable: "--source-max-width-value680px" },
"value548px": { value: "548px", cssVariable: "--source-max-width-value548px" },
"value340px": { value: "340px", cssVariable: "--source-max-width-value340px" },
"value516px": { value: "516px", cssVariable: "--source-max-width-value516px" },
},
"fontSize": {
"value16px": { value: "16px", cssVariable: "--source-font-size-value16px" },
"value80px": { value: "80px", cssVariable: "--source-font-size-value80px" },
"value56px": { value: "56px", cssVariable: "--source-font-size-value56px" },
"value64px": { value: "64px", cssVariable: "--source-font-size-value64px" },
"value48px": { value: "48px", cssVariable: "--source-font-size-value48px" },
"value36px": { value: "36px", cssVariable: "--source-font-size-value36px" },
"value28px": { value: "28px", cssVariable: "--source-font-size-value28px" },
"value12px": { value: "12px", cssVariable: "--source-font-size-value12px" },
"value18px": { value: "18px", cssVariable: "--source-font-size-value18px" },
"autoFit65": { value: "auto-fit(65%)", cssVariable: "--source-font-size-auto-fit65" },
"value22px": { value: "22px", cssVariable: "--source-font-size-value22px" },
"autoFit100": { value: "auto-fit(100%)", cssVariable: "--source-font-size-auto-fit100" },
"value20px": { value: "20px", cssVariable: "--source-font-size-value20px" },
"value40": { value: 40, cssVariable: "--source-font-size-value40" },
},
"letterSpacing": {
"valueNegative0Point07em": { value: "-0.07em", cssVariable: "--source-letter-spacing-value-negative0point07em" },
"valueNegative0Point04em": { value: "-0.04em", cssVariable: "--source-letter-spacing-value-negative0point04em" },
"valueNegative0Point03em": { value: "-0.03em", cssVariable: "--source-letter-spacing-value-negative0point03em" },
"valueNegative0Point02em": { value: "-0.02em", cssVariable: "--source-letter-spacing-value-negative0point02em" },
"valueNegative0Point05em": { value: "-0.05em", cssVariable: "--source-letter-spacing-value-negative0point05em" },
"value0em": { value: "0em", cssVariable: "--source-letter-spacing-value0em" },
"valueNegative0Point06em": { value: "-0.06em", cssVariable: "--source-letter-spacing-value-negative0point06em" },
},
"lineHeight": {
"value0Point9em": { value: "0.9em", cssVariable: "--source-line-height-value0point9em" },
"value1Point16em": { value: "1.16em", cssVariable: "--source-line-height-value1point16em" },
"value1Point2em": { value: "1.2em", cssVariable: "--source-line-height-value1point2em" },
"value1Point15em": { value: "1.15em", cssVariable: "--source-line-height-value1point15em" },
"value1em": { value: "1em", cssVariable: "--source-line-height-value1em" },
"value1Point3em": { value: "1.3em", cssVariable: "--source-line-height-value1point3em" },
"value48px": { value: "48px", cssVariable: "--source-line-height-value48px" },
"value18px": { value: "18px", cssVariable: "--source-line-height-value18px" },
"value1Point1em": { value: "1.1em", cssVariable: "--source-line-height-value1point1em" },
},
"controlBackground": {
"homeDesktopHeroHeadlineMaxWidthContainerTextFitWidth": { value: "transparent", cssVariable: "--source-control-background-home-desktop-hero-headline-max-width-container-text-fit-width" },
},
"controlAlign": {
"homeDesktopHeroHeadlineMaxWidthContainerTextFitWidth": { value: "Left", cssVariable: "--source-control-align-home-desktop-hero-headline-max-width-container-text-fit-width" },
},
"padding": {
"homeDesktopColorContainer": { value: "0px 0px 200px 0px", cssVariable: "--source-padding-home-desktop-color-container" },
"homeDesktopColorContainerLogosAndQuote": { value: "0px 0px 100px 0px", cssVariable: "--source-padding-home-desktop-color-container-logos-and-quote" },
"homeDesktopColorContainerLogosAndQuoteLogos": { value: "24px 0px 24px 80px", cssVariable: "--source-padding-home-desktop-color-container-logos-and-quote-logos" },
"homeDesktopColorContainerLogosAndQuoteQuote": { value: "0px 80px 0px 80px", cssVariable: "--source-padding-home-desktop-color-container-logos-and-quote-quote" },
"homeDesktopColorContainerLogosAndQuoteQuoteText": { value: "0px 0px 64px 0px", cssVariable: "--source-padding-home-desktop-color-container-logos-and-quote-quote-text" },
"homeDesktopColorContainerRecentProjects": { value: "200px 0px 0px 0px", cssVariable: "--source-padding-home-desktop-color-container-recent-projects" },
"homeDesktopColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanier": { value: "0px 100px 0px 0px", cssVariable: "--source-padding-home-desktop-color-container-recent-projects-headline-and1st-project-heading-contanier" },
"0px0px0px100px": { value: "0px 0px 0px 100px", cssVariable: "--source-padding-0px0px0px100px" },
"homeDesktopColorContainerProcess": { value: "200px 80px 200px 80px", cssVariable: "--source-padding-home-desktop-color-container-process" },
"homeTabletColorContainerLogosAndQuoteLogos": { value: "24px 0px 24px 40px", cssVariable: "--source-padding-home-tablet-color-container-logos-and-quote-logos" },
"homeTabletColorContainerLogosAndQuoteQuote": { value: "0px 40px 0px 40px", cssVariable: "--source-padding-home-tablet-color-container-logos-and-quote-quote" },
"homeTabletColorContainerProcess": { value: "200px 40px 200px 40px", cssVariable: "--source-padding-home-tablet-color-container-process" },
"homePhoneHero": { value: "0px 12px 80px 12px", cssVariable: "--source-padding-home-phone-hero" },
"homePhoneColorContainerLogosAndQuoteLogos": { value: "24px 0px 24px 20px", cssVariable: "--source-padding-home-phone-color-container-logos-and-quote-logos" },
"homePhoneColorContainerLogosAndQuoteQuote": { value: "0px 12px 0px 12px", cssVariable: "--source-padding-home-phone-color-container-logos-and-quote-quote" },
"homePhoneColorContainerLogosAndQuoteQuoteText": { value: "0px 0px 60px 0px", cssVariable: "--source-padding-home-phone-color-container-logos-and-quote-quote-text" },
"homePhoneColorContainerRecentProjects": { value: "100px 0px 100px 0px", cssVariable: "--source-padding-home-phone-color-container-recent-projects" },
"homePhoneColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanier": { value: "0px 60px 0px 0px", cssVariable: "--source-padding-home-phone-color-container-recent-projects-headline-and1st-project-heading-contanier" },
"0px0px0px20px": { value: "0px 0px 0px 20px", cssVariable: "--source-padding-0px0px0px20px" },
"homePhoneColorContainerProcess": { value: "100px 12px 100px 12px", cssVariable: "--source-padding-home-phone-color-container-process" },
"esperienzaDesktopColorContainerLogosAndIntroIntro": { value: "0px 80px 200px 80px", cssVariable: "--source-padding-esperienza-desktop-color-container-logos-and-intro-intro" },
"esperienzaDesktopColorContainerStats": { value: "24px 80px 24px 80px", cssVariable: "--source-padding-esperienza-desktop-color-container-stats" },
"esperienzaDesktopColorContainerBlog": { value: "200px 80px 0px 80px", cssVariable: "--source-padding-esperienza-desktop-color-container-blog" },
"esperienzaTabletColorContainerLogosAndIntroIntro": { value: "0px 40px 200px 40px", cssVariable: "--source-padding-esperienza-tablet-color-container-logos-and-intro-intro" },
"esperienzaTabletColorContainerBlog": { value: "200px 40px 0px 40px", cssVariable: "--source-padding-esperienza-tablet-color-container-blog" },
"esperienzaPhoneColorContainerLogosAndIntroIntro": { value: "0px 12px 100px 12px", cssVariable: "--source-padding-esperienza-phone-color-container-logos-and-intro-intro" },
"esperienzaPhoneColorContainerStats": { value: "60px 12px 60px 12px", cssVariable: "--source-padding-esperienza-phone-color-container-stats" },
"esperienzaPhoneColorContainerTestimonials": { value: "100px 20px 100px 20px", cssVariable: "--source-padding-esperienza-phone-color-container-testimonials" },
"eventiEventiDesktopHeroContent": { value: "0px 80px 40px 80px", cssVariable: "--source-padding-eventi-eventi-desktop-hero-content" },
"eventiEventiDesktopColorContainer": { value: "120px 80px 200px 80px", cssVariable: "--source-padding-eventi-eventi-desktop-color-container" },
"eventiEventiDesktopColorContainerIntroTextTechnicalDetails": { value: "16px 0px 0px 0px", cssVariable: "--source-padding-eventi-eventi-desktop-color-container-intro-text-technical-details" },
"eventiEventiTabletColorContainer": { value: "120px 40px 200px 40px", cssVariable: "--source-padding-eventi-eventi-tablet-color-container" },
"eventiEventiPhoneColorContainer": { value: "80px 12px 200px 12px", cssVariable: "--source-padding-eventi-eventi-phone-color-container" },
"eventiDesktopMainRecentProjectsHeadlineAnd1stProjectHeadingContanier": { value: "0px 120px 0px 0px", cssVariable: "--source-padding-eventi-desktop-main-recent-projects-headline-and1st-project-heading-contanier" },
"eventiPhoneMain": { value: "0px 12px 140px 12px", cssVariable: "--source-padding-eventi-phone-main" },
"vieniATrovarciDesktopMainContact": { value: "320px 80px 200px 80px", cssVariable: "--source-padding-vieni-atrovarci-desktop-main-contact" },
"vieniATrovarciDesktopMainContactFormContainerContentContainerContent": { value: "12px", cssVariable: "--source-padding-vieni-atrovarci-desktop-main-contact-form-container-content-container-content" },
"vieniATrovarciDesktopMainContactFormContainerContentContainerContentContainer": { value: "36px 0px 0px 0px", cssVariable: "--source-padding-vieni-atrovarci-desktop-main-contact-form-container-content-container-content-container" },
"vieniATrovarciTabletMainContact": { value: "320px 40px 200px 40px", cssVariable: "--source-padding-vieni-atrovarci-tablet-main-contact" },
"404DesktopMain": { value: "200px 12px 200px 12px", cssVariable: "--source-padding-404desktop-main" },
"communityCommunityDesktopMainHero": { value: "0px 0px 120px 0px", cssVariable: "--source-padding-community-community-desktop-main-hero" },
"communityCommunityDesktopMainContentImageContainer": { value: "0px 0px 160px 0px", cssVariable: "--source-padding-community-community-desktop-main-content-image-container" },
"communityCommunityDesktopMainMoreContent": { value: "120px 0px 0px 0px", cssVariable: "--source-padding-community-community-desktop-main-more-content" },
"templateDesktopContactFrom": { value: "0px 80px 80px 80px", cssVariable: "--source-padding-template-desktop-contact-from" },
"templateDesktopContactFromContentContainer": { value: "80px", cssVariable: "--source-padding-template-desktop-contact-from-content-container" },
"templateTabletContactFrom": { value: "0px 32px 32px 32px", cssVariable: "--source-padding-template-tablet-contact-from" },
"templateTabletContactFromContentContainer": { value: "80px 40px 80px 40px", cssVariable: "--source-padding-template-tablet-contact-from-content-container" },
"templatePhoneContactFrom": { value: "0px 12px 12px 12px", cssVariable: "--source-padding-template-phone-contact-from" },
"templatePhoneContactFromContentContainer": { value: "80px 20px 80px 20px", cssVariable: "--source-padding-template-phone-contact-from-content-container" },
"projectCardMainPageDesktop": { value: "40px 0px 40px 0px", cssVariable: "--source-padding-project-card-main-page-desktop" },
"projectCardMainPageDesktopContentContent": { value: "40px", cssVariable: "--source-padding-project-card-main-page-desktop-content-content" },
"projectCardMainPageDesktopContentContentBottomTextContainer": { value: "8px 0px 0px 0px", cssVariable: "--source-padding-project-card-main-page-desktop-content-content-bottom-text-container" },
"projectCardInnerPageDesktopContentContent": { value: "24px", cssVariable: "--source-padding-project-card-inner-page-desktop-content-content" },
"projectCardMainMobile": { value: "64px 0px 40px 0px", cssVariable: "--source-padding-project-card-main-mobile" },
"projectCardMainMobileContentContent": { value: "20px", cssVariable: "--source-padding-project-card-main-mobile-content-content" },
"labelVariant1Container": { value: "1px 0px 0px 0px", cssVariable: "--source-padding-label-variant1container" },
"serviceCardDeskopContent": { value: "64px 128px 64px 128px", cssVariable: "--source-padding-service-card-deskop-content" },
"processRowDesktop": { value: "0px", cssVariable: "--source-padding-process-row-desktop" },
"headerDesktop": { value: "32px 48px 0px 48px", cssVariable: "--source-padding-header-desktop" },
"headerTablet": { value: "32px 20px 0px 20px", cssVariable: "--source-padding-header-tablet" },
"headerMobile": { value: "16px", cssVariable: "--source-padding-header-mobile" },
"footerDesktop": { value: "32px 80px 20px 80px", cssVariable: "--source-padding-footer-desktop" },
"footerTablet": { value: "32px 40px 20px 40px", cssVariable: "--source-padding-footer-tablet" },
"footerMobile": { value: "32px 20px 20px 20px", cssVariable: "--source-padding-footer-mobile" },
"categoryLabelVariant1": { value: "5px 16px 8px 16px", cssVariable: "--source-padding-category-label-variant1" },
"faqRowOpenedQuestion": { value: "20px 0px 20px 0px", cssVariable: "--source-padding-faq-row-opened-question" },
"faqRowOpenedAnswer": { value: "0px 0px 24px 0px", cssVariable: "--source-padding-faq-row-opened-answer" },
"faqIconPlus": { value: "4px", cssVariable: "--source-padding-faq-icon-plus" },
"mainFormButtonDefault": { value: "10px 0px 13px 0px", cssVariable: "--source-padding-main-form-button-default" },
"servicesSectionDesktopHeadline": { value: "40px 0px 40px 80px", cssVariable: "--source-padding-services-section-desktop-headline" },
"ourStorySectionDesktopTheStoryQuote": { value: "64px 12px 64px 12px", cssVariable: "--source-padding-our-story-section-desktop-the-story-quote" },
"ourStorySectionTheStory": { value: "0px 200px 0px 0px", cssVariable: "--source-padding-our-story-section-the-story" },
"ourStorySectionTheStoryQuote": { value: "80px 120px 80px 120px", cssVariable: "--source-padding-our-story-section-the-story-quote" },
"ourStoryCardDesktop": { value: "80px 0px 80px 0px", cssVariable: "--source-padding-our-story-card-desktop" },
},
"borderStyle": {
"solid": { value: "solid", cssVariable: "--source-border-style-solid" },
},
"borderColor": {
"homeDesktopColorContainerLogosAndQuoteLogos": { value: "var(--color-neutral-600)", cssVariable: "--source-border-color-home-desktop-color-container-logos-and-quote-logos" },
},
"borderTop": {
"value1px": { value: "1px", cssVariable: "--source-border-top-value1px" },
},
"borderBottom": {
"value1px": { value: "1px", cssVariable: "--source-border-bottom-value1px" },
},
"textAlignment": {
"start": { value: "start", cssVariable: "--source-text-alignment-start" },
"left": { value: "left", cssVariable: "--source-text-alignment-left" },
"right": { value: "right", cssVariable: "--source-text-alignment-right" },
"center": { value: "center", cssVariable: "--source-text-alignment-center" },
},
"textColor": {
"homeDesktopColorContainerLogosAndQuoteLogosProudlyWrokedWith": { value: "var(--color-neutral-950)", cssVariable: "--source-text-color-home-desktop-color-container-logos-and-quote-logos-proudly-wroked-with" },
"homeDesktopColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanier": { value: "var(--color-neutral-50)", cssVariable: "--source-text-color-home-desktop-color-container-recent-projects-headline-and1st-project-heading-contanier" },
"esperienzaDesktopHeroContent": { value: "var(--color-neutral-bone-highlight)", cssVariable: "--source-text-color-esperienza-desktop-hero-content" },
},
"effectVelocity": {
"value80": { value: 80, cssVariable: "--source-effect-velocity-value80" },
},
"effectHoverModifier": {
"value100": { value: 100, cssVariable: "--source-effect-hover-modifier-value100" },
},
"controlColor": {
"homeDesktopColorContainerLogosAndQuoteQuoteTextLabel": { value: "var(--color-neutral-950)", cssVariable: "--source-control-color-home-desktop-color-container-logos-and-quote-quote-text-label" },
"homeDesktopColorContainerProcessHeadlineLabel": { value: "var(--color-neutral-50)", cssVariable: "--source-control-color-home-desktop-color-container-process-headline-label" },
"buttonPrimaryRollingText": { value: "var(--color-brand-primary)", cssVariable: "--source-control-color-button-primary-rolling-text" },
"rollingText": { value: "#808080", cssVariable: "--source-control-color-rolling-text" },
},
"controlDelay": {
"homeDesktopColorContainerLogosAndQuoteQuoteTextTextStagger": { value: "0.1", cssVariable: "--source-control-delay-home-desktop-color-container-logos-and-quote-quote-text-text-stagger" },
},
"radius": {
"value56px": { value: radii["avatar"].value, cssVariable: "--source-radius-value56px" },
"value1px": { value: radii["subtle"].value, cssVariable: "--source-radius-value1px" },
},
"aspectRatio": {
"value1": { value: 1, cssVariable: "--source-aspect-ratio-value1" },
"value1Point63": { value: 1.63, cssVariable: "--source-aspect-ratio-value1point63" },
"value1Point02": { value: 1.02, cssVariable: "--source-aspect-ratio-value1point02" },
"value1Point78": { value: 1.78, cssVariable: "--source-aspect-ratio-value1point78" },
"value1Point13": { value: 1.13, cssVariable: "--source-aspect-ratio-value1point13" },
"value1Point17": { value: 1.17, cssVariable: "--source-aspect-ratio-value1point17" },
},
"effectBlur": {
"value0px": { value: "0px", cssVariable: "--source-effect-blur-value0px" },
},
"motionBounce": {
"value0": { value: 0, cssVariable: "--source-motion-bounce-value0" },
"value0Point2": { value: 0.2, cssVariable: "--source-motion-bounce-value0point2" },
},
"controlPadding": {
"homeDesktopColorContainerProcessContentProcessRow": { value: "0px", cssVariable: "--source-control-padding-home-desktop-color-container-process-content-process-row" },
"0px0px0px160px": { value: "0px 0px 0px 160px", cssVariable: "--source-control-padding-0px0px0px160px" },
"0px0px0px320px": { value: "0px 0px 0px 320px", cssVariable: "--source-control-padding-0px0px0px320px" },
"0px0px0px480px": { value: "0px 0px 0px 480px", cssVariable: "--source-control-padding-0px0px0px480px" },
"homeTabletColorContainerProcessContentProcessRow": { value: "0px 0px 0px 80px", cssVariable: "--source-control-padding-home-tablet-color-container-process-content-process-row" },
"0px0px0px240px": { value: "0px 0px 0px 240px", cssVariable: "--source-control-padding-0px0px0px240px" },
},
"gridColumnCount": {
"value3": { value: 3, cssVariable: "--source-grid-column-count-value3" },
"value2": { value: 2, cssVariable: "--source-grid-column-count-value2" },
"value1": { value: 1, cssVariable: "--source-grid-column-count-value1" },
"value12": { value: 12, cssVariable: "--source-grid-column-count-value12" },
},
"gridColumnMinWidth": {
"value50px": { value: "50px", cssVariable: "--source-grid-column-min-width-value50px" },
"value0px": { value: "0px", cssVariable: "--source-grid-column-min-width-value0px" },
},
"gridRowCount": {
"value1": { value: 1, cssVariable: "--source-grid-row-count-value1" },
"value2": { value: 2, cssVariable: "--source-grid-row-count-value2" },
},
"gridRowHeight": {
"value200px": { value: "200px", cssVariable: "--source-grid-row-height-value200px" },
},
"gridItemColumnSpan": {
"value2": { value: "2", cssVariable: "--source-grid-item-column-span-value2" },
"value4": { value: "4", cssVariable: "--source-grid-item-column-span-value4" },
"value7": { value: "7", cssVariable: "--source-grid-item-column-span-value7" },
"value3": { value: "3", cssVariable: "--source-grid-item-column-span-value3" },
},
"maxHeight": {
"value856px": { value: "856px", cssVariable: "--source-max-height-value856px" },
"value960px": { value: "960px", cssVariable: "--source-max-height-value960px" },
"value640px": { value: "640px", cssVariable: "--source-max-height-value640px" },
},
"fontName": {
"funnelDisplay": { value: "Funnel Display", cssVariable: "--source-font-name-funnel-display" },
"funnelSans": { value: "Funnel Sans", cssVariable: "--source-font-name-funnel-sans" },
},
"fontStyle": {
"normal": { value: "normal", cssVariable: "--source-font-style-normal" },
},
"fontWeight": {
"value600": { value: 600, cssVariable: "--source-font-weight-value600" },
"value400": { value: 400, cssVariable: "--source-font-weight-value400" },
"value700": { value: 700, cssVariable: "--source-font-weight-value700" },
"value500": { value: 500, cssVariable: "--source-font-weight-value500" },
},
"textTransform": {
"uppercase": { value: "uppercase", cssVariable: "--source-text-transform-uppercase" },
},
"textDecorationStyle": {
"solid": { value: "solid", cssVariable: "--source-text-decoration-style-solid" },
},
"controlParallaxY": {
"esperienzaDesktopColorContainerImageParallax": { value: "30", cssVariable: "--source-control-parallax-y-esperienza-desktop-color-container-image-parallax" },
"serviceCardDeskopImageContainerImageParallax": { value: "0", cssVariable: "--source-control-parallax-y-service-card-deskop-image-container-image-parallax" },
"serviceCardMobileImageContainerImageParallax": { value: "50", cssVariable: "--source-control-parallax-y-service-card-mobile-image-container-image-parallax" },
"imageParallax": { value: 30, cssVariable: "--source-control-parallax-y-image-parallax" },
},
"controlParallaxX": {
"esperienzaDesktopColorContainerImageParallax": { value: "0", cssVariable: "--source-control-parallax-x-esperienza-desktop-color-container-image-parallax" },
"serviceCardDeskopImageContainerImageParallax": { value: "-50", cssVariable: "--source-control-parallax-x-service-card-deskop-image-container-image-parallax" },
"imageParallax": { value: 0, cssVariable: "--source-control-parallax-x-image-parallax" },
},
"controlRadius": {
"esperienzaDesktopColorContainerImageParallax": { value: "0px", cssVariable: "--source-control-radius-esperienza-desktop-color-container-image-parallax" },
},
"gridItemRowSpan": {
"value1": { value: "1", cssVariable: "--source-grid-item-row-span-value1" },
},
"minHeight": {
"value600px": { value: "600px", cssVariable: "--source-min-height-value600px" },
},
"controlBGColor": {
"eventiEventiDesktopHeroContentLabelContainerCategoryLabel": { value: "var(--color-neutral-bone-highlight)", cssVariable: "--source-control-bgcolor-eventi-eventi-desktop-hero-content-label-container-category-label" },
"communityCommunityDesktopMainHeroTechDetailsLabelContainerCategoryLabel": { value: "var(--color-neutral-50)", cssVariable: "--source-control-bgcolor-community-community-desktop-main-hero-tech-details-label-container-category-label" },
},
"controlTextColor": {
"eventiEventiDesktopHeroContentLabelContainerCategoryLabel": { value: "var(--color-neutral-950)", cssVariable: "--source-control-text-color-eventi-eventi-desktop-hero-content-label-container-category-label" },
},
"controlBackgroundColor": {
"eventiEventiDesktopColorContainerTestimonialImageContainerTestimonialsImageReveal": { value: "var(--color-neutral-950)", cssVariable: "--source-control-background-color-eventi-eventi-desktop-color-container-testimonial-image-container-testimonials-image-reveal" },
"testimonialsSectionDesktop1ImageContainerTestimonialsImageReveal": { value: "var(--color-neutral-50)", cssVariable: "--source-control-background-color-testimonials-section-desktop1image-container-testimonials-image-reveal" },
},
"border": {
"vieniATrovarciDesktopMainContactFormContainerContentContainerContent": { value: "1px solid var(--color-neutral-950)", cssVariable: "--source-border-vieni-atrovarci-desktop-main-contact-form-container-content-container-content" },
},
"shadow": {
"vieniATrovarciDesktopMainContactFormContainerContentContainerContent": { value: shadows["formFocus"].value, cssVariable: "--source-shadow-vieni-atrovarci-desktop-main-contact-form-container-content-container-content" },
},
"formInputIconColor": {
"vieniATrovarciDesktopMainContactFormContainerContentContainerContent": { value: "var(--color-neutral-400)", cssVariable: "--source-form-input-icon-color-vieni-atrovarci-desktop-main-contact-form-container-content-container-content" },
},
"formInputPlaceholderColor": {
"vieniATrovarciDesktopMainContactFormContainerContentContainerContent": { value: "var(--color-neutral-950)", cssVariable: "--source-form-input-placeholder-color-vieni-atrovarci-desktop-main-contact-form-container-content-container-content" },
},
"paragraphSpacing": {
"value32": { value: 32, cssVariable: "--source-paragraph-spacing-value32" },
},
"color": {
"templateDesktop": { value: "var(--color-brand-primary)", cssVariable: "--source-color-template-desktop" },
"varColorNeutral950": { value: "var(--color-neutral-950)", cssVariable: "--source-color-var-color-neutral950" },
"templateDesktopMobileNav": { value: "var(--color-neutral-overlay-30)", cssVariable: "--source-color-template-desktop-mobile-nav" },
"textFitTsxTextColor": { value: "#1A1917", cssVariable: "--source-color-text-fit-tsx-text-color" },
"textFitTsxBackgroundColor": { value: "transparent", cssVariable: "--source-color-text-fit-tsx-background-color" },
},
"controlIntensity": {
"templateDesktopLenis": { value: "12", cssVariable: "--source-control-intensity-template-desktop-lenis" },
"lenis": { value: 12, cssVariable: "--source-control-intensity-lenis" },
},
"rotation": {
"valueNegative45deg": { value: "-45deg", cssVariable: "--source-rotation-value-negative45deg" },
"valueNegative90deg": { value: "-90deg", cssVariable: "--source-rotation-value-negative90deg" },
"value90deg": { value: "90deg", cssVariable: "--source-rotation-value90deg" },
"value135deg": { value: "135deg", cssVariable: "--source-rotation-value135deg" },
"value45deg": { value: "45deg", cssVariable: "--source-rotation-value45deg" },
"value0": { value: 0, cssVariable: "--source-rotation-value0" },
},
"scale": {
"value1Point1": { value: "1.1", cssVariable: "--source-scale-value1point1" },
},
"controlStagger": {
"navItemDesktopRollingText": { value: "60", cssVariable: "--source-control-stagger-nav-item-desktop-rolling-text" },
"rollingText": { value: 35, cssVariable: "--source-control-stagger-rolling-text" },
},
"controlTransform": {
"navItemDesktopRollingText": { value: "None", cssVariable: "--source-control-transform-nav-item-desktop-rolling-text" },
"rollingText": { value: "none", cssVariable: "--source-control-transform-rolling-text" },
},
"motionRepeatDelay": {
"value0s": { value: "0s", cssVariable: "--source-motion-repeat-delay-value0s" },
},
"controlSpeed": {
"servicesSectionDekstopLenisHorizontalSection": { value: "100", cssVariable: "--source-control-speed-services-section-dekstop-lenis-horizontal-section" },
"lenisHorizontalSection": { value: 100, cssVariable: "--source-control-speed-lenis-horizontal-section" },
},
"y": {
"value0": { value: 0, cssVariable: "--source-y-value0" },
"value70": { value: 70, cssVariable: "--source-y-value70" },
},
"fontVariationSettings": {
"wght700": { value: "\"wght\" 700", cssVariable: "--source-font-variation-settings-wght700" },
"wght500": { value: "\"wght\" 500", cssVariable: "--source-font-variation-settings-wght500" },
},
} as const

export const component = {
"projectCard": {
"mainPageDesktop": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-project-card-main-page-desktop-gap" },
"padding": { value: primitive["padding"]["projectCardMainPageDesktop"].value, cssVariable: "--component-project-card-main-page-desktop-padding" },
"width": { value: primitive["width"]["value1040px"].value, cssVariable: "--component-project-card-main-page-desktop-width" },
"height": { value: primitive["height"]["value585px"].value, cssVariable: "--component-project-card-main-page-desktop-height" },
"contentGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-project-card-main-page-desktop-content-gap" },
},
"innerPageDesktop": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-project-card-inner-page-desktop-gap" },
"width": { value: primitive["width"]["value555px"].value, cssVariable: "--component-project-card-inner-page-desktop-width" },
"contentGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-project-card-inner-page-desktop-content-gap" },
"contentHeight": { value: primitive["height"]["value585px"].value, cssVariable: "--component-project-card-inner-page-desktop-content-height" },
"contentAspectRatio": { value: primitive["aspectRatio"]["value1Point78"].value, cssVariable: "--component-project-card-inner-page-desktop-content-aspect-ratio" },
},
"mainMobile": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-project-card-main-mobile-gap" },
"padding": { value: primitive["padding"]["projectCardMainMobile"].value, cssVariable: "--component-project-card-main-mobile-padding" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-project-card-main-mobile-width" },
"height": { value: primitive["height"]["value760px"].value, cssVariable: "--component-project-card-main-mobile-height" },
"contentGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-project-card-main-mobile-content-gap" },
},
"innerPageMobile": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-project-card-inner-page-mobile-gap" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-project-card-inner-page-mobile-width" },
"height": { value: primitive["height"]["value760px"].value, cssVariable: "--component-project-card-inner-page-mobile-height" },
"contentGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-project-card-inner-page-mobile-content-gap" },
},
"mainPageDesktopHover": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-project-card-main-page-desktop-hover-gap" },
"padding": { value: primitive["padding"]["projectCardMainPageDesktop"].value, cssVariable: "--component-project-card-main-page-desktop-hover-padding" },
"width": { value: primitive["width"]["value1040px"].value, cssVariable: "--component-project-card-main-page-desktop-hover-width" },
"height": { value: primitive["height"]["value585px"].value, cssVariable: "--component-project-card-main-page-desktop-hover-height" },
"contentGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-project-card-main-page-desktop-hover-content-gap" },
},
"innerPageDesktopHover": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-project-card-inner-page-desktop-hover-gap" },
"width": { value: primitive["width"]["value555px"].value, cssVariable: "--component-project-card-inner-page-desktop-hover-width" },
"contentGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-project-card-inner-page-desktop-hover-content-gap" },
"contentHeight": { value: primitive["height"]["value585px"].value, cssVariable: "--component-project-card-inner-page-desktop-hover-content-height" },
"contentAspectRatio": { value: primitive["aspectRatio"]["value1Point78"].value, cssVariable: "--component-project-card-inner-page-desktop-hover-content-aspect-ratio" },
},
},
"label": {
"variant1": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuoteText"].value, cssVariable: "--component-label-variant1-gap" },
"containerGap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuoteText"].value, cssVariable: "--component-label-variant1-container-gap" },
"containerPadding": { value: primitive["padding"]["labelVariant1Container"].value, cssVariable: "--component-label-variant1-container-padding" },
"containerHeight": { value: primitive["height"]["value16px"].value, cssVariable: "--component-label-variant1-container-height" },
"introTextAlignment": { value: primitive["textAlignment"]["start"].value, cssVariable: "--component-label-variant1-intro-text-alignment" },
"introTextColor": { value: primitive["textColor"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanier"].value, cssVariable: "--component-label-variant1-intro-text-color" },
},
},
"serviceCard": {
"deskop": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-service-card-deskop-gap" },
"width": { value: primitive["width"]["value1912px"].value, cssVariable: "--component-service-card-deskop-width" },
"height": { value: primitive["height"]["value1013px"].value, cssVariable: "--component-service-card-deskop-height" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-service-card-deskop-image-container-gap" },
"imageContainerWidth": { value: primitive["width"]["value600px"].value, cssVariable: "--component-service-card-deskop-image-container-width" },
"contentFill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-service-card-deskop-content-fill" },
"contentGap": { value: primitive["gap"]["eventiEventiPhoneColorContainerIntroText"].value, cssVariable: "--component-service-card-deskop-content-gap" },
"contentPadding": { value: primitive["padding"]["serviceCardDeskopContent"].value, cssVariable: "--component-service-card-deskop-content-padding" },
},
"mobile": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-service-card-mobile-gap" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-service-card-mobile-width" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-service-card-mobile-image-container-gap" },
"imageContainerHeight": { value: primitive["height"]["value640px"].value, cssVariable: "--component-service-card-mobile-image-container-height" },
"contentFill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-service-card-mobile-content-fill" },
"contentGap": { value: primitive["gap"]["communityCommunityDesktopMainHero"].value, cssVariable: "--component-service-card-mobile-content-gap" },
"contentPadding": { value: primitive["padding"]["vieniATrovarciDesktopMainContactFormContainerContentContainerContent"].value, cssVariable: "--component-service-card-mobile-content-padding" },
},
},
"processRow": {
"desktop": {
"gap": { value: primitive["gap"]["processRowDesktop"].value, cssVariable: "--component-process-row-desktop-gap" },
"padding": { value: primitive["padding"]["processRowDesktop"].value, cssVariable: "--component-process-row-desktop-padding" },
"width": { value: primitive["width"]["value1040px"].value, cssVariable: "--component-process-row-desktop-width" },
"contentGap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-process-row-desktop-content-gap" },
"01TextAlignment": { value: primitive["textAlignment"]["start"].value, cssVariable: "--component-process-row-desktop-01text-alignment" },
"01TextColor": { value: primitive["textColor"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanier"].value, cssVariable: "--component-process-row-desktop-01text-color" },
},
},
"header": {
"desktop": {
"gap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-header-desktop-gap" },
"padding": { value: primitive["padding"]["headerDesktop"].value, cssVariable: "--component-header-desktop-padding" },
"width": { value: primitive["width"]["value1200px"].value, cssVariable: "--component-header-desktop-width" },
"logoContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-header-desktop-logo-container-gap" },
"logoContainerWidth": { value: primitive["width"]["value18Percent"].value, cssVariable: "--component-header-desktop-logo-container-width" },
"containerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-header-desktop-container-gap" },
"containerWidth": { value: primitive["width"]["2fr"].value, cssVariable: "--component-header-desktop-container-width" },
"navContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-header-desktop-nav-container-gap" },
"yearGap": { value: primitive["gap"]["eventiEventiDesktopHeroContentLabelContainer"].value, cssVariable: "--component-header-desktop-year-gap" },
},
"tablet": {
"gap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-header-tablet-gap" },
"padding": { value: primitive["padding"]["headerTablet"].value, cssVariable: "--component-header-tablet-padding" },
"width": { value: primitive["width"]["value810px"].value, cssVariable: "--component-header-tablet-width" },
"logoContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-header-tablet-logo-container-gap" },
"logoContainerWidth": { value: primitive["width"]["value18Percent"].value, cssVariable: "--component-header-tablet-logo-container-width" },
"containerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-header-tablet-container-gap" },
"navContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-header-tablet-nav-container-gap" },
"yearGap": { value: primitive["gap"]["eventiEventiDesktopHeroContentLabelContainer"].value, cssVariable: "--component-header-tablet-year-gap" },
},
"mobile": {
"fill": { value: primitive["fill"]["eventiEventiDesktopColorContainerTestimonialContentNameAndTitle"].value, cssVariable: "--component-header-mobile-fill" },
"gap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-header-mobile-gap" },
"padding": { value: primitive["padding"]["headerMobile"].value, cssVariable: "--component-header-mobile-padding" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-header-mobile-width" },
"logoContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-header-mobile-logo-container-gap" },
"logoContainerWidth": { value: primitive["width"]["value18Percent"].value, cssVariable: "--component-header-mobile-logo-container-width" },
"containerGap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-header-mobile-container-gap" },
"navContainerGap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuoteText"].value, cssVariable: "--component-header-mobile-nav-container-gap" },
"yearGap": { value: primitive["gap"]["eventiEventiDesktopHeroContentLabelContainer"].value, cssVariable: "--component-header-mobile-year-gap" },
},
},
"navItem": {
"desktop": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-nav-item-desktop-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value22px"].value, cssVariable: "--component-nav-item-desktop-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-nav-item-desktop-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-nav-item-desktop-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-nav-item-desktop-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-nav-item-desktop-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-nav-item-desktop-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-nav-item-desktop-rolling-text-transform" },
},
"mobile": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-nav-item-mobile-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value28px"].value, cssVariable: "--component-nav-item-mobile-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-nav-item-mobile-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-nav-item-mobile-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-nav-item-mobile-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-nav-item-mobile-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-nav-item-mobile-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-nav-item-mobile-rolling-text-transform" },
},
"compact": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-nav-item-compact-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value16px"].value, cssVariable: "--component-nav-item-compact-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-nav-item-compact-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-nav-item-compact-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-nav-item-compact-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-nav-item-compact-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-nav-item-compact-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-nav-item-compact-rolling-text-transform" },
},
},
"footer": {
"desktop": {
"fill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-footer-desktop-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainerProcess"].value, cssVariable: "--component-footer-desktop-gap" },
"padding": { value: primitive["padding"]["footerDesktop"].value, cssVariable: "--component-footer-desktop-padding" },
"width": { value: primitive["width"]["value1200px"].value, cssVariable: "--component-footer-desktop-width" },
"topGridColumnCount": { value: primitive["gridColumnCount"]["value12"].value, cssVariable: "--component-footer-desktop-top-grid-column-count" },
"topGridColumnMinWidth": { value: primitive["gridColumnMinWidth"]["value50px"].value, cssVariable: "--component-footer-desktop-top-grid-column-min-width" },
"topGridRowCount": { value: primitive["gridRowCount"]["value1"].value, cssVariable: "--component-footer-desktop-top-grid-row-count" },
"topGridRowHeight": { value: primitive["gridRowHeight"]["value200px"].value, cssVariable: "--component-footer-desktop-top-grid-row-height" },
"topGap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-footer-desktop-top-gap" },
"tommyJacobsonFontName": { value: primitive["fontName"]["funnelDisplay"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-font-name" },
"tommyJacobsonFontStyle": { value: primitive["fontStyle"]["normal"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-font-style" },
"tommyJacobsonFontWeight": { value: primitive["fontWeight"]["value600"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-font-weight" },
"tommyJacobsonFontSize": { value: primitive["fontSize"]["autoFit100"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-font-size" },
"tommyJacobsonLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point07em"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-letter-spacing" },
"tommyJacobsonLineHeight": { value: primitive["lineHeight"]["value1Point2em"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-line-height" },
"tommyJacobsonTextAlignment": { value: primitive["textAlignment"]["start"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-text-alignment" },
"tommyJacobsonTextDecorationStyle": { value: primitive["textDecorationStyle"]["solid"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-text-decoration-style" },
"tommyJacobsonTextColor": { value: primitive["textColor"]["homeDesktopColorContainerLogosAndQuoteLogosProudlyWrokedWith"].value, cssVariable: "--component-footer-desktop-tommy-jacobson-text-color" },
},
"tablet": {
"fill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-footer-tablet-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainerProcess"].value, cssVariable: "--component-footer-tablet-gap" },
"padding": { value: primitive["padding"]["footerTablet"].value, cssVariable: "--component-footer-tablet-padding" },
"width": { value: primitive["width"]["value1200px"].value, cssVariable: "--component-footer-tablet-width" },
"topGridColumnCount": { value: primitive["gridColumnCount"]["value12"].value, cssVariable: "--component-footer-tablet-top-grid-column-count" },
"topGridColumnMinWidth": { value: primitive["gridColumnMinWidth"]["value50px"].value, cssVariable: "--component-footer-tablet-top-grid-column-min-width" },
"topGridRowCount": { value: primitive["gridRowCount"]["value1"].value, cssVariable: "--component-footer-tablet-top-grid-row-count" },
"topGridRowHeight": { value: primitive["gridRowHeight"]["value200px"].value, cssVariable: "--component-footer-tablet-top-grid-row-height" },
"topGap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-footer-tablet-top-gap" },
"tommyJacobsonFontName": { value: primitive["fontName"]["funnelDisplay"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-font-name" },
"tommyJacobsonFontStyle": { value: primitive["fontStyle"]["normal"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-font-style" },
"tommyJacobsonFontWeight": { value: primitive["fontWeight"]["value600"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-font-weight" },
"tommyJacobsonFontSize": { value: primitive["fontSize"]["autoFit100"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-font-size" },
"tommyJacobsonLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point07em"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-letter-spacing" },
"tommyJacobsonLineHeight": { value: primitive["lineHeight"]["value1Point2em"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-line-height" },
"tommyJacobsonTextAlignment": { value: primitive["textAlignment"]["start"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-text-alignment" },
"tommyJacobsonTextDecorationStyle": { value: primitive["textDecorationStyle"]["solid"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-text-decoration-style" },
"tommyJacobsonTextColor": { value: primitive["textColor"]["homeDesktopColorContainerLogosAndQuoteLogosProudlyWrokedWith"].value, cssVariable: "--component-footer-tablet-tommy-jacobson-text-color" },
},
"mobile": {
"fill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-footer-mobile-fill" },
"gap": { value: primitive["gap"]["homePhoneColorContainerProcess"].value, cssVariable: "--component-footer-mobile-gap" },
"padding": { value: primitive["padding"]["footerMobile"].value, cssVariable: "--component-footer-mobile-padding" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-footer-mobile-width" },
"topGap": { value: primitive["gap"]["eventiEventiPhoneColorContainerIntroText"].value, cssVariable: "--component-footer-mobile-top-gap" },
"tommyJacobsonFontName": { value: primitive["fontName"]["funnelDisplay"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-font-name" },
"tommyJacobsonFontStyle": { value: primitive["fontStyle"]["normal"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-font-style" },
"tommyJacobsonFontWeight": { value: primitive["fontWeight"]["value600"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-font-weight" },
"tommyJacobsonFontSize": { value: primitive["fontSize"]["autoFit100"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-font-size" },
"tommyJacobsonLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point07em"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-letter-spacing" },
"tommyJacobsonLineHeight": { value: primitive["lineHeight"]["value1Point2em"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-line-height" },
"tommyJacobsonTextAlignment": { value: primitive["textAlignment"]["start"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-text-alignment" },
"tommyJacobsonTextDecorationStyle": { value: primitive["textDecorationStyle"]["solid"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-text-decoration-style" },
"tommyJacobsonTextColor": { value: primitive["textColor"]["homeDesktopColorContainerLogosAndQuoteLogosProudlyWrokedWith"].value, cssVariable: "--component-footer-mobile-tommy-jacobson-text-color" },
},
},
"categoryLabel": {
"variant1": {
"fill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-category-label-variant1-fill" },
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-category-label-variant1-gap" },
"padding": { value: primitive["padding"]["categoryLabelVariant1"].value, cssVariable: "--component-category-label-variant1-padding" },
},
},
"faqSection": {
"default": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-faq-section-default-gap" },
"width": { value: primitive["width"]["value733Point5px"].value, cssVariable: "--component-faq-section-default-width" },
},
},
"faqRow": {
"opened": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-faq-row-opened-gap" },
"width": { value: primitive["width"]["value550px"].value, cssVariable: "--component-faq-row-opened-width" },
"questionGap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-faq-row-opened-question-gap" },
"questionPadding": { value: primitive["padding"]["faqRowOpenedQuestion"].value, cssVariable: "--component-faq-row-opened-question-padding" },
"questionZIndex": { value: primitive["zIndex"]["value1"].value, cssVariable: "--component-faq-row-opened-question-zindex" },
"answerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-faq-row-opened-answer-gap" },
"answerPadding": { value: primitive["padding"]["faqRowOpenedAnswer"].value, cssVariable: "--component-faq-row-opened-answer-padding" },
"answerZIndex": { value: primitive["zIndex"]["value1"].value, cssVariable: "--component-faq-row-opened-answer-zindex" },
},
"closed": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-faq-row-closed-gap" },
"width": { value: primitive["width"]["value550px"].value, cssVariable: "--component-faq-row-closed-width" },
"questionGap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-faq-row-closed-question-gap" },
"questionPadding": { value: primitive["padding"]["faqRowOpenedQuestion"].value, cssVariable: "--component-faq-row-closed-question-padding" },
"questionZIndex": { value: primitive["zIndex"]["value1"].value, cssVariable: "--component-faq-row-closed-question-zindex" },
"answerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-faq-row-closed-answer-gap" },
"answerOpacity": { value: primitive["opacity"]["value0"].value, cssVariable: "--component-faq-row-closed-answer-opacity" },
"answerPadding": { value: primitive["padding"]["faqRowOpenedAnswer"].value, cssVariable: "--component-faq-row-closed-answer-padding" },
"answerWidth": { value: primitive["width"]["value548px"].value, cssVariable: "--component-faq-row-closed-answer-width" },
},
},
"faqIcon": {
"plus": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-faq-icon-plus-gap" },
"padding": { value: primitive["padding"]["faqIconPlus"].value, cssVariable: "--component-faq-icon-plus-padding" },
"iconRotation": { value: primitive["rotation"]["valueNegative90deg"].value, cssVariable: "--component-faq-icon-plus-icon-rotation" },
"iconWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-faq-icon-plus-icon-width" },
"iconHeight": { value: primitive["height"]["value24px"].value, cssVariable: "--component-faq-icon-plus-icon-height" },
},
"minus": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-faq-icon-minus-gap" },
"padding": { value: primitive["padding"]["faqIconPlus"].value, cssVariable: "--component-faq-icon-minus-padding" },
"iconRotation": { value: primitive["rotation"]["valueNegative90deg"].value, cssVariable: "--component-faq-icon-minus-icon-rotation" },
"iconWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-faq-icon-minus-icon-width" },
"iconHeight": { value: primitive["height"]["value24px"].value, cssVariable: "--component-faq-icon-minus-icon-height" },
},
},
"mainFormButton": {
"default": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-default-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-default-gap" },
"padding": { value: primitive["padding"]["mainFormButtonDefault"].value, cssVariable: "--component-main-form-button-default-padding" },
"width": { value: primitive["width"]["value198px"].value, cssVariable: "--component-main-form-button-default-width" },
"spinnerWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-main-form-button-default-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-main-form-button-default-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-main-form-button-default-spinner-aspect-ratio" },
"rollingTextFontSize": { value: primitive["fontSize"]["value20px"].value, cssVariable: "--component-main-form-button-default-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-main-form-button-default-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-main-form-button-default-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-main-form-button-default-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-default-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-main-form-button-default-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-default-rolling-text-transform" },
},
"defaultHover": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-default-hover-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-default-hover-gap" },
"padding": { value: primitive["padding"]["mainFormButtonDefault"].value, cssVariable: "--component-main-form-button-default-hover-padding" },
"width": { value: primitive["width"]["value198px"].value, cssVariable: "--component-main-form-button-default-hover-width" },
"spinnerWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-main-form-button-default-hover-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-main-form-button-default-hover-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-main-form-button-default-hover-spinner-aspect-ratio" },
"rollingTextFontSize": { value: primitive["fontSize"]["value20px"].value, cssVariable: "--component-main-form-button-default-hover-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-main-form-button-default-hover-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-main-form-button-default-hover-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-main-form-button-default-hover-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-default-hover-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-main-form-button-default-hover-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-default-hover-rolling-text-transform" },
},
"loading": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-loading-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-loading-gap" },
"padding": { value: primitive["padding"]["mainFormButtonDefault"].value, cssVariable: "--component-main-form-button-loading-padding" },
"width": { value: primitive["width"]["value198px"].value, cssVariable: "--component-main-form-button-loading-width" },
"spinnerWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-main-form-button-loading-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-main-form-button-loading-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-main-form-button-loading-spinner-aspect-ratio" },
"rollingTextFontSize": { value: primitive["fontSize"]["value20px"].value, cssVariable: "--component-main-form-button-loading-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-main-form-button-loading-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-main-form-button-loading-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-main-form-button-loading-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-loading-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-main-form-button-loading-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-loading-rolling-text-transform" },
},
"disabled": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-disabled-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-disabled-gap" },
"padding": { value: primitive["padding"]["mainFormButtonDefault"].value, cssVariable: "--component-main-form-button-disabled-padding" },
"width": { value: primitive["width"]["value198px"].value, cssVariable: "--component-main-form-button-disabled-width" },
"spinnerWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-main-form-button-disabled-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-main-form-button-disabled-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-main-form-button-disabled-spinner-aspect-ratio" },
"rollingTextFontSize": { value: primitive["fontSize"]["value20px"].value, cssVariable: "--component-main-form-button-disabled-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-main-form-button-disabled-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-main-form-button-disabled-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-main-form-button-disabled-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-disabled-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-main-form-button-disabled-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-disabled-rolling-text-transform" },
},
"success": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-success-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-success-gap" },
"padding": { value: primitive["padding"]["mainFormButtonDefault"].value, cssVariable: "--component-main-form-button-success-padding" },
"width": { value: primitive["width"]["value198px"].value, cssVariable: "--component-main-form-button-success-width" },
"spinnerWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-main-form-button-success-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-main-form-button-success-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-main-form-button-success-spinner-aspect-ratio" },
"rollingTextFontSize": { value: primitive["fontSize"]["value20px"].value, cssVariable: "--component-main-form-button-success-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-main-form-button-success-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-main-form-button-success-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-main-form-button-success-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-success-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-main-form-button-success-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-success-rolling-text-transform" },
},
"error": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-error-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-main-form-button-error-gap" },
"padding": { value: primitive["padding"]["mainFormButtonDefault"].value, cssVariable: "--component-main-form-button-error-padding" },
"width": { value: primitive["width"]["value195px"].value, cssVariable: "--component-main-form-button-error-width" },
"height": { value: primitive["height"]["value54px"].value, cssVariable: "--component-main-form-button-error-height" },
"spinnerWidth": { value: primitive["width"]["value24px"].value, cssVariable: "--component-main-form-button-error-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-main-form-button-error-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-main-form-button-error-spinner-aspect-ratio" },
"rollingTextFontSize": { value: primitive["fontSize"]["value20px"].value, cssVariable: "--component-main-form-button-error-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-main-form-button-error-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1em"].value, cssVariable: "--component-main-form-button-error-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-main-form-button-error-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-error-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-main-form-button-error-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-main-form-button-error-rolling-text-transform" },
},
},
"button": {
"primary": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-button-primary-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value48px"].value, cssVariable: "--component-button-primary-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-button-primary-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1Point1em"].value, cssVariable: "--component-button-primary-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["buttonPrimaryRollingText"].value, cssVariable: "--component-button-primary-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-primary-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-button-primary-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-primary-rolling-text-transform" },
"arrowWidth": { value: primitive["width"]["value26px"].value, cssVariable: "--component-button-primary-arrow-width" },
"arrowHeight": { value: primitive["height"]["value36px"].value, cssVariable: "--component-button-primary-arrow-height" },
},
"primaryHover": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-button-primary-hover-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value48px"].value, cssVariable: "--component-button-primary-hover-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-button-primary-hover-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1Point1em"].value, cssVariable: "--component-button-primary-hover-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["buttonPrimaryRollingText"].value, cssVariable: "--component-button-primary-hover-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-primary-hover-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-button-primary-hover-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-primary-hover-rolling-text-transform" },
"arrowWidth": { value: primitive["width"]["value26px"].value, cssVariable: "--component-button-primary-hover-arrow-width" },
"arrowHeight": { value: primitive["height"]["value36px"].value, cssVariable: "--component-button-primary-hover-arrow-height" },
},
"secondary": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuoteText"].value, cssVariable: "--component-button-secondary-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value16px"].value, cssVariable: "--component-button-secondary-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-button-secondary-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1Point1em"].value, cssVariable: "--component-button-secondary-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-button-secondary-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-secondary-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-button-secondary-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-secondary-rolling-text-transform" },
"arrowGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-button-secondary-arrow-gap" },
"arrowHeight": { value: primitive["height"]["value12px"].value, cssVariable: "--component-button-secondary-arrow-height" },
},
"secondaryHover": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuoteText"].value, cssVariable: "--component-button-secondary-hover-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value16px"].value, cssVariable: "--component-button-secondary-hover-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-button-secondary-hover-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1Point1em"].value, cssVariable: "--component-button-secondary-hover-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-button-secondary-hover-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-secondary-hover-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-button-secondary-hover-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-secondary-hover-rolling-text-transform" },
"arrowGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-button-secondary-hover-arrow-gap" },
"arrowHeight": { value: primitive["height"]["value12px"].value, cssVariable: "--component-button-secondary-hover-arrow-height" },
},
"primaryMobile": {
"gap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-button-primary-mobile-gap" },
"rollingTextFontSize": { value: primitive["fontSize"]["value28px"].value, cssVariable: "--component-button-primary-mobile-rolling-text-font-size" },
"rollingTextLetterSpacing": { value: primitive["letterSpacing"]["valueNegative0Point04em"].value, cssVariable: "--component-button-primary-mobile-rolling-text-letter-spacing" },
"rollingTextLineHeight": { value: primitive["lineHeight"]["value1Point1em"].value, cssVariable: "--component-button-primary-mobile-rolling-text-line-height" },
"rollingTextColor": { value: primitive["controlColor"]["buttonPrimaryRollingText"].value, cssVariable: "--component-button-primary-mobile-rolling-text-color" },
"rollingTextStagger": { value: primitive["controlStagger"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-primary-mobile-rolling-text-stagger" },
"rollingTextPadding": { value: primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"].value, cssVariable: "--component-button-primary-mobile-rolling-text-padding" },
"rollingTextTransform": { value: primitive["controlTransform"]["navItemDesktopRollingText"].value, cssVariable: "--component-button-primary-mobile-rolling-text-transform" },
"arrowWidth": { value: primitive["width"]["value26px"].value, cssVariable: "--component-button-primary-mobile-arrow-width" },
"arrowHeight": { value: primitive["height"]["value21px"].value, cssVariable: "--component-button-primary-mobile-arrow-height" },
},
},
"testimonialsSection": {
"desktop1": {
"gridColumnCount": { value: primitive["gridColumnCount"]["value12"].value, cssVariable: "--component-testimonials-section-desktop1-grid-column-count" },
"gridColumnMinWidth": { value: primitive["gridColumnMinWidth"]["value50px"].value, cssVariable: "--component-testimonials-section-desktop1-grid-column-min-width" },
"gridRowCount": { value: primitive["gridRowCount"]["value1"].value, cssVariable: "--component-testimonials-section-desktop1-grid-row-count" },
"gridRowHeight": { value: primitive["gridRowHeight"]["value200px"].value, cssVariable: "--component-testimonials-section-desktop1-grid-row-height" },
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-desktop1-gap" },
"width": { value: primitive["width"]["value1168px"].value, cssVariable: "--component-testimonials-section-desktop1-width" },
"height": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop1-height" },
"imageContainerGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value4"].value, cssVariable: "--component-testimonials-section-desktop1-image-container-grid-item-column-span" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-desktop1-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-desktop1-image-container-padding" },
"imageContainerHeight": { value: primitive["height"]["value724px"].value, cssVariable: "--component-testimonials-section-desktop1-image-container-height" },
"contentGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value7"].value, cssVariable: "--component-testimonials-section-desktop1-content-grid-item-column-span" },
"contentGap": { value: primitive["gap"]["eventiEventiDesktopColorContainerTestimonialContent"].value, cssVariable: "--component-testimonials-section-desktop1-content-gap" },
"contentHeight": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop1-content-height" },
},
"desktop2": {
"gridColumnCount": { value: primitive["gridColumnCount"]["value12"].value, cssVariable: "--component-testimonials-section-desktop2-grid-column-count" },
"gridColumnMinWidth": { value: primitive["gridColumnMinWidth"]["value50px"].value, cssVariable: "--component-testimonials-section-desktop2-grid-column-min-width" },
"gridRowCount": { value: primitive["gridRowCount"]["value1"].value, cssVariable: "--component-testimonials-section-desktop2-grid-row-count" },
"gridRowHeight": { value: primitive["gridRowHeight"]["value200px"].value, cssVariable: "--component-testimonials-section-desktop2-grid-row-height" },
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-desktop2-gap" },
"width": { value: primitive["width"]["value1168px"].value, cssVariable: "--component-testimonials-section-desktop2-width" },
"height": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop2-height" },
"imageContainerGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value4"].value, cssVariable: "--component-testimonials-section-desktop2-image-container-grid-item-column-span" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-desktop2-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-desktop2-image-container-padding" },
"imageContainerHeight": { value: primitive["height"]["value724px"].value, cssVariable: "--component-testimonials-section-desktop2-image-container-height" },
"contentGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value7"].value, cssVariable: "--component-testimonials-section-desktop2-content-grid-item-column-span" },
"contentGap": { value: primitive["gap"]["eventiEventiDesktopColorContainerTestimonialContent"].value, cssVariable: "--component-testimonials-section-desktop2-content-gap" },
"contentHeight": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop2-content-height" },
},
"desktop3": {
"gridColumnCount": { value: primitive["gridColumnCount"]["value12"].value, cssVariable: "--component-testimonials-section-desktop3-grid-column-count" },
"gridColumnMinWidth": { value: primitive["gridColumnMinWidth"]["value50px"].value, cssVariable: "--component-testimonials-section-desktop3-grid-column-min-width" },
"gridRowCount": { value: primitive["gridRowCount"]["value1"].value, cssVariable: "--component-testimonials-section-desktop3-grid-row-count" },
"gridRowHeight": { value: primitive["gridRowHeight"]["value200px"].value, cssVariable: "--component-testimonials-section-desktop3-grid-row-height" },
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-desktop3-gap" },
"width": { value: primitive["width"]["value1168px"].value, cssVariable: "--component-testimonials-section-desktop3-width" },
"height": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop3-height" },
"imageContainerGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value4"].value, cssVariable: "--component-testimonials-section-desktop3-image-container-grid-item-column-span" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-desktop3-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-desktop3-image-container-padding" },
"imageContainerHeight": { value: primitive["height"]["value724px"].value, cssVariable: "--component-testimonials-section-desktop3-image-container-height" },
"contentGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value7"].value, cssVariable: "--component-testimonials-section-desktop3-content-grid-item-column-span" },
"contentGap": { value: primitive["gap"]["eventiEventiDesktopColorContainerTestimonialContent"].value, cssVariable: "--component-testimonials-section-desktop3-content-gap" },
"contentHeight": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop3-content-height" },
},
"desktop4": {
"gridColumnCount": { value: primitive["gridColumnCount"]["value12"].value, cssVariable: "--component-testimonials-section-desktop4-grid-column-count" },
"gridColumnMinWidth": { value: primitive["gridColumnMinWidth"]["value50px"].value, cssVariable: "--component-testimonials-section-desktop4-grid-column-min-width" },
"gridRowCount": { value: primitive["gridRowCount"]["value1"].value, cssVariable: "--component-testimonials-section-desktop4-grid-row-count" },
"gridRowHeight": { value: primitive["gridRowHeight"]["value200px"].value, cssVariable: "--component-testimonials-section-desktop4-grid-row-height" },
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-desktop4-gap" },
"width": { value: primitive["width"]["value1168px"].value, cssVariable: "--component-testimonials-section-desktop4-width" },
"height": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop4-height" },
"imageContainerGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value4"].value, cssVariable: "--component-testimonials-section-desktop4-image-container-grid-item-column-span" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-desktop4-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-desktop4-image-container-padding" },
"imageContainerHeight": { value: primitive["height"]["value724px"].value, cssVariable: "--component-testimonials-section-desktop4-image-container-height" },
"contentGridItemColumnSpan": { value: primitive["gridItemColumnSpan"]["value7"].value, cssVariable: "--component-testimonials-section-desktop4-content-grid-item-column-span" },
"contentGap": { value: primitive["gap"]["eventiEventiDesktopColorContainerTestimonialContent"].value, cssVariable: "--component-testimonials-section-desktop4-content-gap" },
"contentHeight": { value: primitive["height"]["value749Point5px"].value, cssVariable: "--component-testimonials-section-desktop4-content-height" },
},
"mobile1": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-mobile1-gap" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-testimonials-section-mobile1-width" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-mobile1-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-mobile1-image-container-padding" },
"imageContainerWidth": { value: primitive["width"]["value121px"].value, cssVariable: "--component-testimonials-section-mobile1-image-container-width" },
"imageContainerHeight": { value: primitive["height"]["value242px"].value, cssVariable: "--component-testimonials-section-mobile1-image-container-height" },
"contentGap": { value: primitive["gap"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProject"].value, cssVariable: "--component-testimonials-section-mobile1-content-gap" },
},
"mobile2": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-mobile2-gap" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-testimonials-section-mobile2-width" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-mobile2-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-mobile2-image-container-padding" },
"imageContainerWidth": { value: primitive["width"]["value121px"].value, cssVariable: "--component-testimonials-section-mobile2-image-container-width" },
"imageContainerHeight": { value: primitive["height"]["value242px"].value, cssVariable: "--component-testimonials-section-mobile2-image-container-height" },
"contentGap": { value: primitive["gap"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProject"].value, cssVariable: "--component-testimonials-section-mobile2-content-gap" },
},
"mobile3": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-mobile3-gap" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-testimonials-section-mobile3-width" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-mobile3-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-mobile3-image-container-padding" },
"imageContainerWidth": { value: primitive["width"]["value121px"].value, cssVariable: "--component-testimonials-section-mobile3-image-container-width" },
"imageContainerHeight": { value: primitive["height"]["value242px"].value, cssVariable: "--component-testimonials-section-mobile3-image-container-height" },
"contentGap": { value: primitive["gap"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProject"].value, cssVariable: "--component-testimonials-section-mobile3-content-gap" },
},
"mobile4": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerTestimonialsHeadline"].value, cssVariable: "--component-testimonials-section-mobile4-gap" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-testimonials-section-mobile4-width" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-section-mobile4-image-container-gap" },
"imageContainerPadding": { value: primitive["padding"]["eventiEventiDesktopColorContainerIntroTextTechnicalDetails"].value, cssVariable: "--component-testimonials-section-mobile4-image-container-padding" },
"imageContainerWidth": { value: primitive["width"]["value121px"].value, cssVariable: "--component-testimonials-section-mobile4-image-container-width" },
"imageContainerHeight": { value: primitive["height"]["value242px"].value, cssVariable: "--component-testimonials-section-mobile4-image-container-height" },
"contentGap": { value: primitive["gap"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProject"].value, cssVariable: "--component-testimonials-section-mobile4-content-gap" },
},
},
"testimonialsImageReveal": {
"imageOffDefault": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-image-reveal-image-off-default-gap" },
"width": { value: primitive["width"]["value260px"].value, cssVariable: "--component-testimonials-image-reveal-image-off-default-width" },
"height": { value: primitive["height"]["value256px"].value, cssVariable: "--component-testimonials-image-reveal-image-off-default-height" },
"backgroundAnimationFill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-testimonials-image-reveal-image-off-default-background-animation-fill" },
"backgroundAnimationWidth": { value: primitive["width"]["value1px"].value, cssVariable: "--component-testimonials-image-reveal-image-off-default-background-animation-width" },
"backgroundAnimationHeight": { value: primitive["height"]["value800px"].value, cssVariable: "--component-testimonials-image-reveal-image-off-default-background-animation-height" },
"backgroundAnimationZIndex": { value: primitive["zIndex"]["value2"].value, cssVariable: "--component-testimonials-image-reveal-image-off-default-background-animation-zindex" },
},
"imageOn": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-image-reveal-image-on-gap" },
"width": { value: primitive["width"]["value260px"].value, cssVariable: "--component-testimonials-image-reveal-image-on-width" },
"height": { value: primitive["height"]["value256px"].value, cssVariable: "--component-testimonials-image-reveal-image-on-height" },
"backgroundAnimationFill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-testimonials-image-reveal-image-on-background-animation-fill" },
"backgroundAnimationWidth": { value: primitive["width"]["value1px"].value, cssVariable: "--component-testimonials-image-reveal-image-on-background-animation-width" },
"backgroundAnimationHeight": { value: primitive["height"]["value260px"].value, cssVariable: "--component-testimonials-image-reveal-image-on-background-animation-height" },
"backgroundAnimationZIndex": { value: primitive["zIndex"]["value2"].value, cssVariable: "--component-testimonials-image-reveal-image-on-background-animation-zindex" },
},
},
"servicesSection": {
"dekstop": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-services-section-dekstop-gap" },
"width": { value: primitive["width"]["value1200px"].value, cssVariable: "--component-services-section-dekstop-width" },
"lenisHorizontalSectionSpeed": { value: primitive["controlSpeed"]["servicesSectionDekstopLenisHorizontalSection"].value, cssVariable: "--component-services-section-dekstop-lenis-horizontal-section-speed" },
"lenisHorizontalSectionZIndex": { value: primitive["zIndex"]["value2"].value, cssVariable: "--component-services-section-dekstop-lenis-horizontal-section-zindex" },
"headlineGap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-services-section-dekstop-headline-gap" },
"headlinePadding": { value: primitive["padding"]["homePhoneColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-services-section-dekstop-headline-padding" },
},
"mobile": {
"gap": { value: primitive["gap"]["homePhoneColorContainerProcess"].value, cssVariable: "--component-services-section-mobile-gap" },
"padding": { value: primitive["padding"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-services-section-mobile-padding" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-services-section-mobile-width" },
"lenisHorizontalSectionSpeed": { value: primitive["controlSpeed"]["servicesSectionDekstopLenisHorizontalSection"].value, cssVariable: "--component-services-section-mobile-lenis-horizontal-section-speed" },
"lenisHorizontalSectionZIndex": { value: primitive["zIndex"]["value2"].value, cssVariable: "--component-services-section-mobile-lenis-horizontal-section-zindex" },
"headlineGap": { value: primitive["gap"]["esperienzaDesktopColorContainerStatsStatRow"].value, cssVariable: "--component-services-section-mobile-headline-gap" },
"headlinePadding": { value: primitive["padding"]["homePhoneColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-services-section-mobile-headline-padding" },
},
"desktop": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-services-section-desktop-gap" },
"height": { value: primitive["height"]["value1013px"].value, cssVariable: "--component-services-section-desktop-height" },
"headlineGap": { value: primitive["gap"]["servicesSectionDesktopHeadline"].value, cssVariable: "--component-services-section-desktop-headline-gap" },
"headlinePadding": { value: primitive["padding"]["servicesSectionDesktopHeadline"].value, cssVariable: "--component-services-section-desktop-headline-padding" },
"headlineWidth": { value: primitive["width"]["value800px"].value, cssVariable: "--component-services-section-desktop-headline-width" },
},
},
"mobileNav": {
"default": {
"gap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-mobile-nav-default-gap" },
"width": { value: primitive["width"]["value352px"].value, cssVariable: "--component-mobile-nav-default-width" },
"logoColor": { value: primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"].value, cssVariable: "--component-mobile-nav-default-logo-color" },
"logoContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-mobile-nav-default-logo-container-gap" },
},
},
"testimonialsArrow": {
"variant1": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-testimonials-arrow-variant1-fill" },
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-testimonials-arrow-variant1-gap" },
"width": { value: primitive["width"]["value40px"].value, cssVariable: "--component-testimonials-arrow-variant1-width" },
"height": { value: primitive["height"]["value40px"].value, cssVariable: "--component-testimonials-arrow-variant1-height" },
},
"variant1Hover": {
"fill": { value: primitive["fill"]["testimonialsArrowVariant1"].value, cssVariable: "--component-testimonials-arrow-variant1hover-fill" },
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-testimonials-arrow-variant1hover-gap" },
"width": { value: primitive["width"]["value40px"].value, cssVariable: "--component-testimonials-arrow-variant1hover-width" },
"height": { value: primitive["height"]["value40px"].value, cssVariable: "--component-testimonials-arrow-variant1hover-height" },
},
"variant1Pressed": {
"fill": { value: primitive["fill"]["testimonialsArrowVariant1"].value, cssVariable: "--component-testimonials-arrow-variant1pressed-fill" },
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-testimonials-arrow-variant1pressed-gap" },
"opacity": { value: primitive["opacity"]["value0Point8"].value, cssVariable: "--component-testimonials-arrow-variant1pressed-opacity" },
"width": { value: primitive["width"]["value40px"].value, cssVariable: "--component-testimonials-arrow-variant1pressed-width" },
"height": { value: primitive["height"]["value40px"].value, cssVariable: "--component-testimonials-arrow-variant1pressed-height" },
},
},
"ourStorySection": {
"desktop": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-our-story-section-desktop-gap" },
"width": { value: primitive["width"]["value1200px"].value, cssVariable: "--component-our-story-section-desktop-width" },
"projectPageLobbySpeed": { value: primitive["controlSpeed"]["servicesSectionDekstopLenisHorizontalSection"].value, cssVariable: "--component-our-story-section-desktop-project-page-lobby-speed" },
"projectPageLobbyZIndex": { value: primitive["zIndex"]["value2"].value, cssVariable: "--component-our-story-section-desktop-project-page-lobby-zindex" },
"theStoryFill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-our-story-section-desktop-the-story-fill" },
"theStoryGap": { value: primitive["gap"]["homePhoneColorContainerLogosAndQuote"].value, cssVariable: "--component-our-story-section-desktop-the-story-gap" },
},
"mobile": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-our-story-section-mobile-gap" },
"padding": { value: primitive["padding"]["homePhoneColorContainerRecentProjects"].value, cssVariable: "--component-our-story-section-mobile-padding" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-our-story-section-mobile-width" },
"projectPageLobbySpeed": { value: primitive["controlSpeed"]["servicesSectionDekstopLenisHorizontalSection"].value, cssVariable: "--component-our-story-section-mobile-project-page-lobby-speed" },
"projectPageLobbyZIndex": { value: primitive["zIndex"]["value2"].value, cssVariable: "--component-our-story-section-mobile-project-page-lobby-zindex" },
"theStoryFill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-our-story-section-mobile-the-story-fill" },
"theStoryGap": { value: primitive["gap"]["homePhoneColorContainerLogosAndQuote"].value, cssVariable: "--component-our-story-section-mobile-the-story-gap" },
},
"theStory": {
"fill": { value: primitive["fill"]["homeDesktopColorContainer"].value, cssVariable: "--component-our-story-section-the-story-fill" },
"gap": { value: primitive["gap"]["homeDesktopColorContainerProcess"].value, cssVariable: "--component-our-story-section-the-story-gap" },
"padding": { value: primitive["padding"]["ourStorySectionTheStory"].value, cssVariable: "--component-our-story-section-the-story-padding" },
"height": { value: primitive["height"]["value1080px"].value, cssVariable: "--component-our-story-section-the-story-height" },
"headlineGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-our-story-section-the-story-headline-gap" },
"headlinePadding": { value: primitive["padding"]["templateDesktopContactFromContentContainer"].value, cssVariable: "--component-our-story-section-the-story-headline-padding" },
"headlineWidth": { value: primitive["width"]["value740px"].value, cssVariable: "--component-our-story-section-the-story-headline-width" },
"imageParallaxParallaxY": { value: primitive["controlParallaxY"]["serviceCardDeskopImageContainerImageParallax"].value, cssVariable: "--component-our-story-section-the-story-image-parallax-parallax-y" },
"imageParallaxParallaxX": { value: primitive["controlParallaxX"]["serviceCardDeskopImageContainerImageParallax"].value, cssVariable: "--component-our-story-section-the-story-image-parallax-parallax-x" },
"imageParallaxRadius": { value: primitive["controlRadius"]["esperienzaDesktopColorContainerImageParallax"].value, cssVariable: "--component-our-story-section-the-story-image-parallax-radius" },
"imageParallaxWidth": { value: primitive["width"]["value660px"].value, cssVariable: "--component-our-story-section-the-story-image-parallax-width" },
"ourStoryCardWidth": { value: primitive["width"]["value960px"].value, cssVariable: "--component-our-story-section-the-story-our-story-card-width" },
"quoteFill": { value: primitive["fill"]["homeDesktopColorContainerProcess"].value, cssVariable: "--component-our-story-section-the-story-quote-fill" },
"quoteGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-our-story-section-the-story-quote-gap" },
"quotePadding": { value: primitive["padding"]["ourStorySectionTheStoryQuote"].value, cssVariable: "--component-our-story-section-the-story-quote-padding" },
"quoteWidth": { value: primitive["width"]["value1440px"].value, cssVariable: "--component-our-story-section-the-story-quote-width" },
},
},
"ourStoryCard": {
"desktop": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-our-story-card-desktop-gap" },
"padding": { value: primitive["padding"]["ourStoryCardDesktop"].value, cssVariable: "--component-our-story-card-desktop-padding" },
"width": { value: primitive["width"]["value960px"].value, cssVariable: "--component-our-story-card-desktop-width" },
"height": { value: primitive["height"]["value1080px"].value, cssVariable: "--component-our-story-card-desktop-height" },
"contentGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-our-story-card-desktop-content-gap" },
"01Opacity": { value: primitive["opacity"]["value0Point3"].value, cssVariable: "--component-our-story-card-desktop-01opacity" },
"01TextAlignment": { value: primitive["textAlignment"]["start"].value, cssVariable: "--component-our-story-card-desktop-01text-alignment" },
"01TextColor": { value: primitive["textColor"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanier"].value, cssVariable: "--component-our-story-card-desktop-01text-color" },
},
"mobile": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-our-story-card-mobile-gap" },
"padding": { value: primitive["padding"]["homePhoneColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-our-story-card-mobile-padding" },
"width": { value: primitive["width"]["value390px"].value, cssVariable: "--component-our-story-card-mobile-width" },
"contentGap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-our-story-card-mobile-content-gap" },
"01Opacity": { value: primitive["opacity"]["value0Point3"].value, cssVariable: "--component-our-story-card-mobile-01opacity" },
"01TextAlignment": { value: primitive["textAlignment"]["start"].value, cssVariable: "--component-our-story-card-mobile-01text-alignment" },
"01TextColor": { value: primitive["textColor"]["homeDesktopColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanier"].value, cssVariable: "--component-our-story-card-mobile-01text-color" },
},
},
"loadMore": {
"default": {
"fill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-load-more-default-fill" },
"gap": { value: primitive["gap"]["value10px"].value, cssVariable: "--component-load-more-default-gap" },
"width": { value: primitive["width"]["value173px"].value, cssVariable: "--component-load-more-default-width" },
"height": { value: primitive["height"]["value40px"].value, cssVariable: "--component-load-more-default-height" },
"spinnerWidth": { value: primitive["width"]["value20px"].value, cssVariable: "--component-load-more-default-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-load-more-default-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-load-more-default-spinner-aspect-ratio" },
},
"loading": {
"fill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-load-more-loading-fill" },
"gap": { value: primitive["gap"]["value10px"].value, cssVariable: "--component-load-more-loading-gap" },
"width": { value: primitive["width"]["value173px"].value, cssVariable: "--component-load-more-loading-width" },
"height": { value: primitive["height"]["value40px"].value, cssVariable: "--component-load-more-loading-height" },
"spinnerWidth": { value: primitive["width"]["value20px"].value, cssVariable: "--component-load-more-loading-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-load-more-loading-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-load-more-loading-spinner-aspect-ratio" },
},
"hidden": {
"fill": { value: primitive["fill"]["homeDesktopColorContainerLogosAndQuote"].value, cssVariable: "--component-load-more-hidden-fill" },
"gap": { value: primitive["gap"]["value10px"].value, cssVariable: "--component-load-more-hidden-gap" },
"width": { value: primitive["width"]["value173px"].value, cssVariable: "--component-load-more-hidden-width" },
"height": { value: primitive["height"]["value40px"].value, cssVariable: "--component-load-more-hidden-height" },
"spinnerWidth": { value: primitive["width"]["value20px"].value, cssVariable: "--component-load-more-hidden-spinner-width" },
"spinnerHeight": { value: primitive["height"]["value20px"].value, cssVariable: "--component-load-more-hidden-spinner-height" },
"spinnerAspectRatio": { value: primitive["aspectRatio"]["value1"].value, cssVariable: "--component-load-more-hidden-spinner-aspect-ratio" },
},
},
"blogCard": {
"variant1": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-blog-card-variant1-gap" },
"width": { value: primitive["width"]["value516px"].value, cssVariable: "--component-blog-card-variant1-width" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-blog-card-variant1-image-container-gap" },
"imageContainerHeight": { value: primitive["height"]["value440px"].value, cssVariable: "--component-blog-card-variant1-image-container-height" },
"imageContainerAspectRatio": { value: primitive["aspectRatio"]["value1Point17"].value, cssVariable: "--component-blog-card-variant1-image-container-aspect-ratio" },
"textGap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuoteProfileDetailsImageAndName"].value, cssVariable: "--component-blog-card-variant1-text-gap" },
},
"variant1Hover": {
"gap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuote"].value, cssVariable: "--component-blog-card-variant1hover-gap" },
"width": { value: primitive["width"]["value516px"].value, cssVariable: "--component-blog-card-variant1hover-width" },
"imageContainerGap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-blog-card-variant1hover-image-container-gap" },
"imageContainerHeight": { value: primitive["height"]["value440px"].value, cssVariable: "--component-blog-card-variant1hover-image-container-height" },
"imageContainerAspectRatio": { value: primitive["aspectRatio"]["value1Point17"].value, cssVariable: "--component-blog-card-variant1hover-image-container-aspect-ratio" },
"textGap": { value: primitive["gap"]["homeDesktopColorContainerLogosAndQuoteQuoteProfileDetailsImageAndName"].value, cssVariable: "--component-blog-card-variant1hover-text-gap" },
},
},
"preLoader": {
"1": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-pre-loader-1-gap" },
"width": { value: primitive["width"]["value1440px"].value, cssVariable: "--component-pre-loader-1-width" },
"height": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-1-height" },
"bgGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-pre-loader-1-bg-gap" },
"bgHeight": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-1-bg-height" },
"bgZIndex": { value: primitive["zIndex"]["value0"].value, cssVariable: "--component-pre-loader-1-bg-zindex" },
},
"2": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-pre-loader-2-gap" },
"width": { value: primitive["width"]["value1440px"].value, cssVariable: "--component-pre-loader-2-width" },
"height": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-2-height" },
"bgGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-pre-loader-2-bg-gap" },
"bgHeight": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-2-bg-height" },
"bgZIndex": { value: primitive["zIndex"]["value0"].value, cssVariable: "--component-pre-loader-2-bg-zindex" },
},
"3": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-pre-loader-3-gap" },
"width": { value: primitive["width"]["value1440px"].value, cssVariable: "--component-pre-loader-3-width" },
"height": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-3-height" },
"bgGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-pre-loader-3-bg-gap" },
"bgHeight": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-3-bg-height" },
"bgZIndex": { value: primitive["zIndex"]["value0"].value, cssVariable: "--component-pre-loader-3-bg-zindex" },
},
"4": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-pre-loader-4-gap" },
"width": { value: primitive["width"]["value1440px"].value, cssVariable: "--component-pre-loader-4-width" },
"height": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-4-height" },
"bgGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-pre-loader-4-bg-gap" },
"bgHeight": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-4-bg-height" },
"bgZIndex": { value: primitive["zIndex"]["value0"].value, cssVariable: "--component-pre-loader-4-bg-zindex" },
},
"5": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-pre-loader-5-gap" },
"width": { value: primitive["width"]["value1440px"].value, cssVariable: "--component-pre-loader-5-width" },
"height": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-5-height" },
"bgGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-pre-loader-5-bg-gap" },
"bgHeight": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-5-bg-height" },
"bgZIndex": { value: primitive["zIndex"]["value0"].value, cssVariable: "--component-pre-loader-5-bg-zindex" },
},
"6": {
"gap": { value: primitive["gap"]["eventiEventiDesktopColorContainerSection1HeadlineHeadline"].value, cssVariable: "--component-pre-loader-6-gap" },
"width": { value: primitive["width"]["value1440px"].value, cssVariable: "--component-pre-loader-6-width" },
"height": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-6-height" },
"bgGap": { value: primitive["gap"]["homeDesktopColorContainer"].value, cssVariable: "--component-pre-loader-6-bg-gap" },
"bgHeight": { value: primitive["height"]["value834px"].value, cssVariable: "--component-pre-loader-6-bg-height" },
"bgZIndex": { value: primitive["zIndex"]["value0"].value, cssVariable: "--component-pre-loader-6-bg-zindex" },
},
},
"logo": {
"big": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-logo-big-gap" },
},
"small": {
"gap": { value: primitive["gap"]["homeDesktopHero"].value, cssVariable: "--component-logo-small-gap" },
},
},
} as const

export const controlDefaults = {
"label": { "color": primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"] },
"processRow": { "padding": primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"] },
"header": { "color": primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"] },
"navItem": { "color": primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"] },
"categoryLabel": { "bGColor": primitive["controlBGColor"]["communityCommunityDesktopMainHeroTechDetailsLabelContainerCategoryLabel"], "textColor": primitive["controlTextColor"]["eventiEventiDesktopHeroContentLabelContainerCategoryLabel"] },
"testimonialsImageReveal": { "backgroundColor": primitive["controlBackgroundColor"]["testimonialsSectionDesktop1ImageContainerTestimonialsImageReveal"] },
"mobileNav": { "fill": primitive["controlFill"]["templateDesktopMobileNav"] },
"preLoader": { "fill": primitive["controlFill"]["homeDesktopPreLoader"] },
"logo": { "color": primitive["controlColor"]["homeDesktopColorContainerProcessHeadlineLabel"] },
"lenis": { "intensity": primitive["controlIntensity"]["lenis"] },
"lenisHorizontalSection": { "speed": primitive["controlSpeed"]["lenisHorizontalSection"] },
"rollingText": { "color": primitive["controlColor"]["rollingText"], "stagger": primitive["controlStagger"]["rollingText"], "padding": primitive["controlPadding"]["homeDesktopColorContainerProcessContentProcessRow"], "transform": primitive["controlTransform"]["rollingText"] },
"liquidHover": { "resolution": primitive["controlResolution"]["liquidHover"], "cursor": primitive["controlCursor"]["liquidHover"], "power": primitive["controlPower"]["liquidHover"], "distortion": primitive["controlDistortion"]["liquidHover"] },
"imageParallax": { "parallaxY": primitive["controlParallaxY"]["imageParallax"], "parallaxX": primitive["controlParallaxX"]["imageParallax"] },
"grain": { "opacity": primitive["controlOpacity"]["grain"] },
"redBull": { "fill": primitive["controlFill"]["redBull"] },
} as const

export const motion = {
  "transitions": {
    "homeDesktopTransition": {
      "raw": "spring-physics 500 60 1 0s",
      "config": {
        "type": "spring",
        "stiffness": 500,
        "damping": 60,
        "mass": 1,
        "delay": "0s"
      },
      "fields": {
        "stiffness": {
          "token": "primitive.motionStiffness.value500",
          "value": 500,
          "cssVariable": "--source-motion-stiffness-value500"
        },
        "damping": {
          "token": "primitive.motionDamping.value60",
          "value": 60,
          "cssVariable": "--source-motion-damping-value60"
        },
        "mass": {
          "token": "primitive.motionMass.value1",
          "value": 1,
          "cssVariable": "--source-motion-mass-value1"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-home-desktop-transition"
    },
    "homeDesktopHeroDesktopImageAppearEffectEnterTransition": {
      "raw": "tween 0.44,0,0.56,1 0.3s 1s",
      "config": {
        "type": "tween",
        "ease": [
          0.44,
          0,
          0.56,
          1
        ],
        "duration": "0.3s",
        "delay": "1s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point44And0And0Point56And1",
          "value": "cubic-bezier(0.44,0,0.56,1)",
          "cssVariable": "--source-easing-curve0point44and0and0point56and1"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point3s",
          "value": "0.3s",
          "cssVariable": "--source-motion-duration-value0point3s"
        },
        "delay": {
          "token": "primitive.motionDelay.value1s",
          "value": "1s",
          "cssVariable": "--source-motion-delay-value1s"
        }
      },
      "cssVariable": "--source-transition-home-desktop-hero-desktop-image-appear-effect-enter-transition"
    },
    "homeDesktopColorContainerRecentProjectsHeadlineAnd1stProjectHeadingContanierTextEffectStyleTransition": {
      "raw": "spring-duration 0.9s 0 0.17s",
      "config": {
        "type": "spring",
        "duration": "0.9s",
        "bounce": 0,
        "delay": "0.17s"
      },
      "fields": {
        "duration": {
          "token": "primitive.motionDuration.value0Point9s",
          "value": "0.9s",
          "cssVariable": "--source-motion-duration-value0point9s"
        },
        "bounce": {
          "token": "primitive.motionBounce.value0",
          "value": 0,
          "cssVariable": "--source-motion-bounce-value0"
        },
        "delay": {
          "token": "primitive.motionDelay.value0Point17s",
          "value": "0.17s",
          "cssVariable": "--source-motion-delay-value0point17s"
        }
      },
      "cssVariable": "--source-transition-home-desktop-color-container-recent-projects-headline-and1st-project-heading-contanier-text-effect-style-transition"
    },
    "eventiEventiDesktopTransition": {
      "raw": "spring-duration 0.4s 0.2 0s",
      "config": {
        "type": "spring",
        "duration": "0.4s",
        "bounce": 0.2,
        "delay": "0s"
      },
      "fields": {
        "duration": {
          "token": "primitive.motionDuration.value0Point4s",
          "value": "0.4s",
          "cssVariable": "--source-motion-duration-value0point4s"
        },
        "bounce": {
          "token": "primitive.motionBounce.value0Point2",
          "value": 0.2,
          "cssVariable": "--source-motion-bounce-value0point2"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-eventi-eventi-desktop-transition"
    },
    "eventiEventiDesktopColorContainerTestimonialContentTitleTitle1TextEffectStyleTransition": {
      "raw": "spring-duration 0.5s 0 0.06s",
      "config": {
        "type": "spring",
        "duration": "0.5s",
        "bounce": 0,
        "delay": "0.06s"
      },
      "fields": {
        "duration": {
          "token": "primitive.motionDuration.value0Point5s",
          "value": "0.5s",
          "cssVariable": "--source-motion-duration-value0point5s"
        },
        "bounce": {
          "token": "primitive.motionBounce.value0",
          "value": 0,
          "cssVariable": "--source-motion-bounce-value0"
        },
        "delay": {
          "token": "primitive.motionDelay.value0Point06s",
          "value": "0.06s",
          "cssVariable": "--source-motion-delay-value0point06s"
        }
      },
      "cssVariable": "--source-transition-eventi-eventi-desktop-color-container-testimonial-content-title-title1text-effect-style-transition"
    },
    "eventiEventiDesktopColorContainerTestimonialContentTextText1TextEffectStyleTransition": {
      "raw": "spring-duration 0.4s 0 0s",
      "config": {
        "type": "spring",
        "duration": "0.4s",
        "bounce": 0,
        "delay": "0s"
      },
      "fields": {
        "duration": {
          "token": "primitive.motionDuration.value0Point4s",
          "value": "0.4s",
          "cssVariable": "--source-motion-duration-value0point4s"
        },
        "bounce": {
          "token": "primitive.motionBounce.value0",
          "value": 0,
          "cssVariable": "--source-motion-bounce-value0"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-eventi-eventi-desktop-color-container-testimonial-content-text-text1text-effect-style-transition"
    },
    "templateDesktopMobileNavBackdropEnter": {
      "raw": "tween 0.5,0,0.88,0.77 0s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.5,
          0,
          0.88,
          0.77
        ],
        "duration": "0s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point5And0And0Point88And0Point77",
          "value": "cubic-bezier(0.5,0,0.88,0.77)",
          "cssVariable": "--source-easing-curve0point5and0and0point88and0point77"
        },
        "duration": {
          "token": "primitive.motionDuration.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-duration-value0s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-template-desktop-mobile-nav-backdrop-enter"
    },
    "templateDesktopMobileNavBackdropExit": {
      "raw": "tween 0.12,0.23,0.5,1 0s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.12,
          0.23,
          0.5,
          1
        ],
        "duration": "0s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point12And0Point23And0Point5And1",
          "value": "cubic-bezier(0.12,0.23,0.5,1)",
          "cssVariable": "--source-easing-curve0point12and0point23and0point5and1"
        },
        "duration": {
          "token": "primitive.motionDuration.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-duration-value0s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-template-desktop-mobile-nav-backdrop-exit"
    },
    "templateDesktopMobileNavHeaderAppearEffectEnterTransition": {
      "raw": "tween 0.94,0.02,0.24,0.97 0.5s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.94,
          0.02,
          0.24,
          0.97
        ],
        "duration": "0.5s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point94And0Point02And0Point24And0Point97",
          "value": "cubic-bezier(0.94,0.02,0.24,0.97)",
          "cssVariable": "--source-easing-curve0point94and0point02and0point24and0point97"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point5s",
          "value": "0.5s",
          "cssVariable": "--source-motion-duration-value0point5s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-template-desktop-mobile-nav-header-appear-effect-enter-transition"
    },
    "templatePhoneMobileNavBackdropEnter": {
      "raw": "tween 0.5,0,0.88,0.77 0.2s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.5,
          0,
          0.88,
          0.77
        ],
        "duration": "0.2s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point5And0And0Point88And0Point77",
          "value": "cubic-bezier(0.5,0,0.88,0.77)",
          "cssVariable": "--source-easing-curve0point5and0and0point88and0point77"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point2s",
          "value": "0.2s",
          "cssVariable": "--source-motion-duration-value0point2s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-template-phone-mobile-nav-backdrop-enter"
    },
    "templatePhoneMobileNavBackdropExit": {
      "raw": "tween 0.12,0.23,0.5,1 0.2s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.12,
          0.23,
          0.5,
          1
        ],
        "duration": "0.2s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point12And0Point23And0Point5And1",
          "value": "cubic-bezier(0.12,0.23,0.5,1)",
          "cssVariable": "--source-easing-curve0point12and0point23and0point5and1"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point2s",
          "value": "0.2s",
          "cssVariable": "--source-motion-duration-value0point2s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-template-phone-mobile-nav-backdrop-exit"
    },
    "projectCardMainPageDesktopTransition": {
      "raw": "tween 0.85,0.05,0.26,0.96 0.5s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.85,
          0.05,
          0.26,
          0.96
        ],
        "duration": "0.5s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point85And0Point05And0Point26And0Point96",
          "value": "cubic-bezier(0.85,0.05,0.26,0.96)",
          "cssVariable": "--source-easing-curve0point85and0point05and0point26and0point96"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point5s",
          "value": "0.5s",
          "cssVariable": "--source-motion-duration-value0point5s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-project-card-main-page-desktop-transition"
    },
    "processRowDesktopContentDiscoveryTextEffectStyleTransition": {
      "raw": "spring-duration 0.6s 0 0.05s",
      "config": {
        "type": "spring",
        "duration": "0.6s",
        "bounce": 0,
        "delay": "0.05s"
      },
      "fields": {
        "duration": {
          "token": "primitive.motionDuration.value0Point6s",
          "value": "0.6s",
          "cssVariable": "--source-motion-duration-value0point6s"
        },
        "bounce": {
          "token": "primitive.motionBounce.value0",
          "value": 0,
          "cssVariable": "--source-motion-bounce-value0"
        },
        "delay": {
          "token": "primitive.motionDelay.value0Point05s",
          "value": "0.05s",
          "cssVariable": "--source-motion-delay-value0point05s"
        }
      },
      "cssVariable": "--source-transition-process-row-desktop-content-discovery-text-effect-style-transition"
    },
    "navItemDesktopRollingTextControlTransition": {
      "raw": "{\"type\":\"tween\",\"ease\":[0.82,0.14,0.29,0.91],\"duration\":0.3,\"delay\":0,\"stiffness\":500,\"damping\":60,\"mass\":1,\"stagger\":0,\"durationBasedSpring\":true,\"bounce\":0}",
      "config": {
        "type": "tween",
        "ease": [
          0.82,
          0.14,
          0.29,
          0.91
        ],
        "duration": 0.3,
        "delay": 0,
        "stiffness": 500,
        "damping": 60,
        "mass": 1,
        "stagger": 0,
        "durationBasedSpring": true,
        "bounce": 0
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point82And0Point14And0Point29And0Point91",
          "value": "cubic-bezier(0.82,0.14,0.29,0.91)",
          "cssVariable": "--source-easing-curve0point82and0point14and0point29and0point91"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point3",
          "value": 0.3,
          "cssVariable": "--source-motion-duration-value0point3"
        },
        "delay": {
          "token": "primitive.motionDelay.value0",
          "value": 0,
          "cssVariable": "--source-motion-delay-value0"
        },
        "stiffness": {
          "token": "primitive.motionStiffness.value500",
          "value": 500,
          "cssVariable": "--source-motion-stiffness-value500"
        },
        "damping": {
          "token": "primitive.motionDamping.value60",
          "value": 60,
          "cssVariable": "--source-motion-damping-value60"
        },
        "mass": {
          "token": "primitive.motionMass.value1",
          "value": 1,
          "cssVariable": "--source-motion-mass-value1"
        },
        "stagger": {
          "token": "primitive.motionStagger.value0",
          "value": 0,
          "cssVariable": "--source-motion-stagger-value0"
        },
        "bounce": {
          "token": "primitive.motionBounce.value0",
          "value": 0,
          "cssVariable": "--source-motion-bounce-value0"
        }
      },
      "cssVariable": "--source-transition-nav-item-desktop-rolling-text-control-transition"
    },
    "faqSectionDefaultTransition": {
      "raw": "tween 0.44,0,0.56,1 0.2s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.44,
          0,
          0.56,
          1
        ],
        "duration": "0.2s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point44And0And0Point56And1",
          "value": "cubic-bezier(0.44,0,0.56,1)",
          "cssVariable": "--source-easing-curve0point44and0and0point56and1"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point2s",
          "value": "0.2s",
          "cssVariable": "--source-motion-duration-value0point2s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-faq-section-default-transition"
    },
    "mainFormButtonDefaultSpinnerConicLoopEffectTransition": {
      "raw": "tween 0,0,1,1 1s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0,
          0,
          1,
          1
        ],
        "duration": "1s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0And0And1And1",
          "value": "cubic-bezier(0,0,1,1)",
          "cssVariable": "--source-easing-curve0and0and1and1"
        },
        "duration": {
          "token": "primitive.motionDuration.value1s",
          "value": "1s",
          "cssVariable": "--source-motion-duration-value1s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-main-form-button-default-spinner-conic-loop-effect-transition"
    },
    "buttonPrimaryTransition": {
      "raw": "tween 0.82,0.14,0.29,0.91 0.3s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.82,
          0.14,
          0.29,
          0.91
        ],
        "duration": "0.3s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point82And0Point14And0Point29And0Point91",
          "value": "cubic-bezier(0.82,0.14,0.29,0.91)",
          "cssVariable": "--source-easing-curve0point82and0point14and0point29and0point91"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point3s",
          "value": "0.3s",
          "cssVariable": "--source-motion-duration-value0point3s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-button-primary-transition"
    },
    "testimonialsSectionDesktop1Transition": {
      "raw": "tween 0.82,0.18,0.23,0.74 0.3s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.82,
          0.18,
          0.23,
          0.74
        ],
        "duration": "0.3s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point82And0Point18And0Point23And0Point74",
          "value": "cubic-bezier(0.82,0.18,0.23,0.74)",
          "cssVariable": "--source-easing-curve0point82and0point18and0point23and0point74"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point3s",
          "value": "0.3s",
          "cssVariable": "--source-motion-duration-value0point3s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-testimonials-section-desktop1transition"
    },
    "loadMoreDefaultTransition": {
      "raw": "instant",
      "config": {
        "type": "instant"
      },
      "fields": {},
      "cssVariable": "--source-transition-load-more-default-transition"
    },
    "loadMoreDefaultSpinnerAppearEffectEnterTransition": {
      "raw": "tween 0.44,0,0.56,1 0.3s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.44,
          0,
          0.56,
          1
        ],
        "duration": "0.3s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point44And0And0Point56And1",
          "value": "cubic-bezier(0.44,0,0.56,1)",
          "cssVariable": "--source-easing-curve0point44and0and0point56and1"
        },
        "duration": {
          "token": "primitive.motionDuration.value0Point3s",
          "value": "0.3s",
          "cssVariable": "--source-motion-duration-value0point3s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-load-more-default-spinner-appear-effect-enter-transition"
    },
    "preLoader1Transition": {
      "raw": "tween 0.96,-0.02,0.38,1.01 1s 0s",
      "config": {
        "type": "tween",
        "ease": [
          0.96,
          -0.02,
          0.38,
          1.01
        ],
        "duration": "1s",
        "delay": "0s"
      },
      "fields": {
        "ease": {
          "token": "primitive.easing.curve0Point96AndNegative0Point02And0Point38And1Point01",
          "value": "cubic-bezier(0.96,-0.02,0.38,1.01)",
          "cssVariable": "--source-easing-curve0point96and-negative0point02and0point38and1point01"
        },
        "duration": {
          "token": "primitive.motionDuration.value1s",
          "value": "1s",
          "cssVariable": "--source-motion-duration-value1s"
        },
        "delay": {
          "token": "primitive.motionDelay.value0s",
          "value": "0s",
          "cssVariable": "--source-motion-delay-value0s"
        }
      },
      "cssVariable": "--source-transition-pre-loader1transition"
    }
  }
} as const

export const semantic = { colors, typography, links, fonts, breakpoints, spacing, insets, gaps, radii, borders, shadows, layout } as const
export const tokens = { primitive: { namedColor: colorValues, ...primitive }, semantic, component, controlDefaults, motion } as const
export type DesignTokens = typeof tokens
