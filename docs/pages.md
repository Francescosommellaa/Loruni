# Gestione delle pagine

La registry descrive le pagine; il filesystem Next.js espone le route. Mantenere entrambe le fonti coerenti nell'app proprietaria.

## Contratto locale

```ts
type SiteRoute = {
  key: string
  path: string
  title: string
  description: string
  index: boolean
  sitemap: boolean
  navigation?: "header" | "footer"
}
```

`src/config/routes.ts` contiene la configurazione e deriva `RouteKey` dalle chiavi effettive. `src/lib/seo.ts` espone `metadataForRoute(key): Metadata` e `absoluteUrl(path)`. Non ampliare `RouteKey` a `string` e non duplicare URL, titoli o descrizioni nei componenti.

Ogni file pagina esporta esplicitamente i propri metadata:

```tsx
import { metadataForRoute } from "@/lib/seo"

// Usare la chiave della pagina presente nella registry locale.
export const metadata = metadataForRoute("home")
```

Le utility SEO non creano route. Le 404 e gli error boundary non sono pagine pubblicabili della registry.

## Aggiungere

1. Scegliere l'app proprietaria e aggiungere una voce alla sua registry con chiave e percorso univoci, titolo e descrizione confermati. I placeholder partono sempre con entrambi i flag SEO a `false`.
2. Creare il file `src/app/<percorso>/page.tsx` come Server Component e richiamare `metadataForRoute` con la nuova chiave. Usare un solo H1 e contenuti approvati.
3. Impostare `navigation` solo se il collegamento deve comparire in header o footer. La navigazione deve leggere la registry, senza un secondo elenco di URL.
4. Eseguire la verifica sotto e aggiornare la guida dell'app se cambia la sua struttura.

## Rinominare o spostare

Aggiornare insieme directory Next.js, `path`, eventuale `key`, richiami metadata e riferimenti alla pagina. Se cambia un URL già pubblicato, concordare e predisporre il redirect permanente nell'app proprietaria, evitando catene e duplicati. Non cambiare una canonical senza allineare il percorso reale.

## Eliminare

Rimuovere file pagina e voce registry, correggere riferimenti e contenuti che la citano. Se l'URL era pubblicato, definire una destinazione pertinente per il redirect oppure accettare esplicitamente la risposta 404; non reindirizzare automaticamente ogni pagina rimossa alla homepage. Eliminare gli asset rimasti inutilizzati nell'app, conservando sempre gli originali in `Logo/`.

## Checklist di verifica

- La route risponde correttamente e ha title, description, canonical, Open Graph e Twitter specifici e coerenti.
- `index` esprime una decisione approvata; `sitemap` controlla l'inclusione nella sitemap. Non includere pagine `noindex` nella sitemap: per una pubblicazione ordinaria approvata attivare entrambi i flag.
- La sitemap e la navigazione riflettono la registry senza URL duplicati; una 404 non eredita la canonical della homepage.
- Development e preview restano `noindex`; verificare anche il comportamento production descritto in [SEO](seo.md). Flag e ambiente richiedono una nuova build.
- Verificare tastiera, skip link, focus, landmark, H1 e layout mobile/desktop, oltre a lint, typecheck e build dell'app.

Non aggiungere framework o suite di test per un semplice placeholder. Le prove manuali devono osservare il comportamento reale, non soltanto la presenza del codice.
