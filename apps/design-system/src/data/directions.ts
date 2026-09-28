import { routes } from "@/config/routes";

export type Direction = {
  id: "editorial" | "signal" | "night";
  name: string;
  shortType: string;
  path: string;
  sampleTitle: string;
  summary: string;
  premise: string;
  strength: string;
  tradeoff: string;
};

export const directions: Direction[] = [
  {
    id: "editorial",
    name: "Editoriale",
    shortType: "Calma · materica",
    path: routes.editorial.path,
    sampleTitle: "Uno spazio per incontrarsi.",
    summary: "Carta calda, caratteri con personalità e un ritmo ampio. La lettura guida l'esperienza.",
    premise: "Un linguaggio che lascia respirare le parole e dà rilievo alle storie.",
    strength: "Adatta a pagine narrative, contenuti fotografici e lettura prolungata.",
    tradeoff: "Per schermate ricche di azioni richiede una gerarchia più compatta.",
  },
  {
    id: "signal",
    name: "Segnaletica",
    shortType: "Nitida · diretta",
    path: routes.signal.path,
    sampleTitle: "Trova il tuo posto.",
    summary: "Blocchi chiari, etichette esplicite e un colore che orienta. Ogni scelta è subito leggibile.",
    premise: "Un'interfaccia che aiuta a trovare il prossimo passo in pochi istanti.",
    strength: "Adatta a navigazione, programmi e informazioni da scorrere rapidamente.",
    tradeoff: "La precisione grafica lascia meno spazio a toni intimi o narrativi.",
  },
  {
    id: "night",
    name: "Notturna",
    shortType: "Sociale · raccolta",
    path: routes.night.path,
    sampleTitle: "La serata comincia qui.",
    summary: "Toni profondi, tipografia morbida e contrasti luminosi. Una presenza più serale e conviviale.",
    premise: "Una scena digitale raccolta, costruita per invogliare a esplorare insieme.",
    strength: "Adatta a momenti sociali, inviti e contenuti visivi su fondo scuro.",
    tradeoff: "Richiede molta cura per testi lunghi e leggibilità in piena luce.",
  },
];

export function directionById(id: Direction["id"]): Direction {
  return directions.find((direction) => direction.id === id)!;
}
