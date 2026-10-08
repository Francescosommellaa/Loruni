import type { ProjectCardProps } from '../../components/ProjectCard'

// Semantic fixture data from the current Eventi collection and21 source consumers.
export const projectEvents: readonly (ProjectCardProps & { slug: string })[] = [
  {
    "slug": "board-game-night",
    "title": "Board Game Night",
    "text": "Tu scegli il gioco. Qualcuno ha già scelto la rivincita.",
    "label1": "Giochi da tavolo",
    "label2": "Serate LORUNI",
    "label3": "Da annunciare",
    "year": "TBA",
    "image": {
      "src": "https://framerusercontent.com/images/3gRGZV4NOIeVF2Zi8OKqZdGPE.png?width=1536&height=1024",
      "srcSet": "https://framerusercontent.com/images/3gRGZV4NOIeVF2Zi8OKqZdGPE.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/3gRGZV4NOIeVF2Zi8OKqZdGPE.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/3gRGZV4NOIeVF2Zi8OKqZdGPE.png?width=1536&height=1024 1536w",
      "width": 1536,
      "height": 1024,
      "alt": ""
    }
  },
  {
    "slug": "musica-al-bar",
    "title": "Musica al bar",
    "text": "Quel pezzo lo conosci. Anche il tavolo accanto, a quanto pare.",
    "label1": "Musica",
    "label2": "Serate LORUNI",
    "label3": "Da annunciare",
    "year": "TBA",
    "image": {
      "src": "https://framerusercontent.com/images/QVyIBlSBXPK9XV72c21PsCPvqKs.png?width=1536&height=1024",
      "srcSet": "https://framerusercontent.com/images/QVyIBlSBXPK9XV72c21PsCPvqKs.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/QVyIBlSBXPK9XV72c21PsCPvqKs.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/QVyIBlSBXPK9XV72c21PsCPvqKs.png?width=1536&height=1024 1536w",
      "width": 1536,
      "height": 1024,
      "alt": ""
    }
  },
  {
    "slug": "community-night",
    "title": "Community Night",
    "text": "Arrivi con chi conosci. Il resto del tavolo, vediamo.",
    "label1": "Community",
    "label2": "Special Event",
    "label3": "Da annunciare",
    "year": "TBA",
    "image": {
      "src": "https://framerusercontent.com/images/9K4ZTL5EspKHdhOZGdoe6H9L98Y.png?width=1536&height=1024",
      "srcSet": "https://framerusercontent.com/images/9K4ZTL5EspKHdhOZGdoe6H9L98Y.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/9K4ZTL5EspKHdhOZGdoe6H9L98Y.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/9K4ZTL5EspKHdhOZGdoe6H9L98Y.png?width=1536&height=1024 1536w",
      "width": 1536,
      "height": 1024,
      "alt": ""
    }
  },
  {
    "slug": "carte-al-tavolo",
    "title": "Carte al tavolo",
    "text": "Si mescola, si distribuisce. Le scuse arrivano dopo.",
    "label1": "Carte",
    "label2": "Tornei",
    "label3": "Da annunciare",
    "year": "TBA",
    "image": {
      "src": "https://framerusercontent.com/images/V92sBOXAuNLbc24mr5RR3sJWEE.png?width=1536&height=1024",
      "srcSet": "https://framerusercontent.com/images/V92sBOXAuNLbc24mr5RR3sJWEE.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/V92sBOXAuNLbc24mr5RR3sJWEE.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/V92sBOXAuNLbc24mr5RR3sJWEE.png?width=1536&height=1024 1536w",
      "width": 1536,
      "height": 1024,
      "alt": ""
    }
  },
  {
    "slug": "digital-challenge",
    "title": "Digital Challenge",
    "text": "Il controller passa di mano. Il tifo non sta fermo.",
    "label1": "Gaming digitale",
    "label2": "Tornei",
    "label3": "Da annunciare",
    "year": "TBA",
    "image": {
      "src": "https://framerusercontent.com/images/0meFhOBKqOqbVZkWULteBPqDXk.png?width=1536&height=1024",
      "srcSet": "https://framerusercontent.com/images/0meFhOBKqOqbVZkWULteBPqDXk.png?scale-down-to=512&width=1536&height=1024 512w,https://framerusercontent.com/images/0meFhOBKqOqbVZkWULteBPqDXk.png?scale-down-to=1024&width=1536&height=1024 1024w,https://framerusercontent.com/images/0meFhOBKqOqbVZkWULteBPqDXk.png?width=1536&height=1024 1536w",
      "width": 1536,
      "height": 1024,
      "alt": ""
    }
  }
]

export const projectCardCases = [
  {
    "key": "home-main-0-desktop",
    "page": "home",
    "breakpoint": "desktop",
    "mode": "main",
    "eventIndex": 0,
    "allocation": "fill"
  },
  {
    "key": "home-main-1-desktop",
    "page": "home",
    "breakpoint": "desktop",
    "mode": "main",
    "eventIndex": 1,
    "allocation": "viewport"
  },
  {
    "key": "home-main-2-desktop",
    "page": "home",
    "breakpoint": "desktop",
    "mode": "main",
    "eventIndex": 2,
    "allocation": "viewport"
  },
  {
    "key": "home-main-3-desktop",
    "page": "home",
    "breakpoint": "desktop",
    "mode": "main",
    "eventIndex": 3,
    "allocation": "viewport"
  },
  {
    "key": "home-main-0-tablet",
    "page": "home",
    "breakpoint": "tablet",
    "mode": "main",
    "eventIndex": 0,
    "allocation": "fill"
  },
  {
    "key": "home-main-1-tablet",
    "page": "home",
    "breakpoint": "tablet",
    "mode": "main",
    "eventIndex": 1,
    "allocation": "viewport"
  },
  {
    "key": "home-main-2-tablet",
    "page": "home",
    "breakpoint": "tablet",
    "mode": "main",
    "eventIndex": 2,
    "allocation": "viewport"
  },
  {
    "key": "home-main-3-tablet",
    "page": "home",
    "breakpoint": "tablet",
    "mode": "main",
    "eventIndex": 3,
    "allocation": "viewport"
  },
  {
    "key": "home-main-0-phone",
    "page": "home",
    "breakpoint": "phone",
    "mode": "main",
    "eventIndex": 0,
    "allocation": "fill"
  },
  {
    "key": "home-main-1-phone",
    "page": "home",
    "breakpoint": "phone",
    "mode": "main",
    "eventIndex": 1,
    "allocation": "viewport"
  },
  {
    "key": "home-main-2-phone",
    "page": "home",
    "breakpoint": "phone",
    "mode": "main",
    "eventIndex": 2,
    "allocation": "viewport"
  },
  {
    "key": "home-main-3-phone",
    "page": "home",
    "breakpoint": "phone",
    "mode": "main",
    "eventIndex": 3,
    "allocation": "viewport"
  },
  {
    "key": "event-detail-inner-1-desktop",
    "page": "event-detail",
    "breakpoint": "desktop",
    "mode": "inner",
    "eventIndex": 1,
    "allocation": "auto"
  },
  {
    "key": "event-detail-inner-1-tablet",
    "page": "event-detail",
    "breakpoint": "tablet",
    "mode": "inner",
    "eventIndex": 1,
    "allocation": "auto"
  },
  {
    "key": "event-detail-inner-1-phone",
    "page": "event-detail",
    "breakpoint": "phone",
    "mode": "inner",
    "eventIndex": 1,
    "allocation": "auto"
  },
  {
    "key": "events-main-0-desktop",
    "page": "events",
    "breakpoint": "desktop",
    "mode": "main",
    "eventIndex": 0,
    "allocation": "fill"
  },
  {
    "key": "events-inner-1-desktop",
    "page": "events",
    "breakpoint": "desktop",
    "mode": "inner",
    "eventIndex": 1,
    "allocation": "auto"
  },
  {
    "key": "events-main-0-tablet",
    "page": "events",
    "breakpoint": "tablet",
    "mode": "main",
    "eventIndex": 0,
    "allocation": "fill"
  },
  {
    "key": "events-inner-1-tablet",
    "page": "events",
    "breakpoint": "tablet",
    "mode": "inner",
    "eventIndex": 1,
    "allocation": "auto"
  },
  {
    "key": "events-main-0-phone",
    "page": "events",
    "breakpoint": "phone",
    "mode": "main",
    "eventIndex": 0,
    "allocation": "fill"
  },
  {
    "key": "events-inner-1-phone",
    "page": "events",
    "breakpoint": "phone",
    "mode": "inner",
    "eventIndex": 1,
    "allocation": "auto"
  }
] as const
