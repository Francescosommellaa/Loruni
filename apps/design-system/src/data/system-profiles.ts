import type { Direction } from "@/data/directions";
import type { CSSProperties } from "react";

export const ruleGroups = [
  { title: "Identità e contenuti", entries: [
    ["concept", "Concept"], ["personality", "Personalità"], ["palette", "Palette"],
    ["typography", "Tipografia"], ["iconography", "Iconografia"],
    ["imageTreatment", "Fotografia"], ["videoTreatment", "Video"],
    ["signatures", "Elementi distintivi"],
  ] },
  { title: "Struttura", entries: [
    ["spacing", "Spaziatura"], ["layout", "Layout"], ["containerGrid", "Container e griglia"],
    ["radius", "Raggi"], ["border", "Bordi"], ["elevation", "Superfici ed elevazione"],
    ["navigation", "Navigazione"], ["responsive", "Responsive"],
  ] },
  { title: "Linguaggio dei componenti", entries: [
    ["componentTreatment", "Componenti e varianti"], ["button", "Button"],
    ["input", "Input"], ["card", "Card"], ["accessibility", "Accessibilità"],
  ] },
  { title: "Movimento", entries: [
    ["motion", "Linguaggio motion"], ["microinteractions", "Microinterazioni"],
    ["motionUse", "Motion"], ["gsapUse", "GSAP"],
  ] },
  { title: "Applicazione e limiti", entries: [
    ["desktop", "Esempi desktop"], ["mobile", "Esempi mobile"],
    ["do", "DO"], ["dont", "DON’T"], ["risks", "Rischi"],
  ] },
] as const;

type RuleKey = (typeof ruleGroups)[number]["entries"][number][0];

export type SystemProfile = {
  rules: Record<RuleKey, string>;
  colorRoles: { role: string; value: string }[];
  comparison: {
    communicates: string;
    perception: string;
    expressivity: string;
    restraint: string;
    flexibility: string;
    pages: string;
    maintenance: string;
    incoherence: string;
    evolution: string;
  };
};

export const systemProfiles: Record<Direction["id"], SystemProfile> = {
  editorial: {
    rules: {
      concept: "Loruni come luogo da leggere e vivere: il contenuto prende spazio, mentre l'interfaccia accompagna senza interrompere. Il segno ufficiale entra come firma, non come decorazione ripetuta.",
      personality: "Raccolta, ospitale, misurata, narrativa. La voce si riconosce nell'ampiezza delle pause e nella gerarchia sobria.",
      palette: "Carta come fondo, inchiostro per il testo, argilla per l'azione. Le superfici secondarie cambiano temperatura, non luminosità in modo arbitrario. Successo, avviso ed errore hanno ruoli dedicati.",
      typography: "Funnel Display variabile nei titoli: 400 per display e H1, 500 per H2/H3. Corpo in Arial 400/700. Scala proposta in rem: 5.5 / 4.5 / 3 / 2 / 1.25 / 1 / .875; leading 1.05 titoli, 1.55 corpo; misura 68ch.",
      iconography: "Segno ufficiale pieno e icone UI a tratto semplice da 1.75px, dimensioni 20/24px, allineate otticamente al testo. Mai mescolare glyph emoji e librerie discordanti.",
      imageTreatment: "Foto reali di persone e momenti, luce naturale o calda, colore controllato. Rapporti 3:2 per racconti e 4:3 per liste; crop sul soggetto, senza overlay decorativi che ne riducano la leggibilità.",
      videoTreatment: "Video soltanto quando documenta un momento reale. Poster leggibile, controlli disponibili, audio non avviato automaticamente; 16:9 per racconto e 4:3 per anteprime. Nessun video necessario all'accesso alle informazioni.",
      signatures: "Titoli leggeri e molto leggibili; grandi margini di lettura; sottili regole orizzontali. Massimo tre segnali, ripetibili anche in app e nei materiali editoriali.",
      spacing: "Scala esplorativa 6, 12, 18, 30, 48, 72, 108px. La Section governa il distacco verticale; Stack e Grid governano i gap; i componenti possiedono solo il padding interno. Densità ariosa.",
      layout: "Flusso editoriale: una colonna per leggere, affiancamento testo/media solo quando aiuta la comprensione. Sezioni piene alternate a pause; CTA dopo il contesto, mai cinque azioni in competizione.",
      containerGrid: "Container lettura 68ch, largo 1180px, full bleed solo per media motivati. Gutter 20/32/64px fra mobile/tablet/desktop. Griglia 4/6/12 colonne con gap 18/24/30px.",
      radius: "2px per controlli e pannelli; pill solo per piccoli status. La quasi squadratura richiama carta e impaginazione, senza imitare una stampa in ogni componente.",
      border: "Regola da 1px nelle separazioni e nei campi; il bordo non circonda automaticamente ogni gruppo. Un accento da 4px è riservato a un richiamo editoriale, non ripetuto ovunque.",
      elevation: "Superfici carta e sabbia; nessuna ombra sulle card ordinarie. Un solo livello flottante con ombra morbida e offset per menu o dialog; overlay inchiostro trasparente senza blur decorativo.",
      navigation: "Header con logo, voci essenziali e stato attivo sottolineato. Su mobile menu nativo espandibile e target di almeno 44px. Footer a colonne di testo, separato da una regola sottile.",
      responsive: "Soglie operative 700 e 1080px: da 12 a 6 a 4 colonne. Il testo precede il media; le azioni si impilano quando serve. Titoli con clamp e righe controllate; la pagina mobile mantiene pause, non semplicemente dimensioni ridotte.",
      componentTreatment: "Poche varianti: primary argilla, secondary outline, tertiary link, danger solo per azioni distruttive. Badge testuali; accordion con divisori. Stati default, hover, pressed, focus, disabled, loading ed error seguono gli stessi ruoli semantici.",
      button: "Altezza 52px, padding 12×24px, raggio 2px, Funnel Display 600. Hover scurisce l'argilla, pressed riduce la profondità, focus con outline 3px, disabled resta leggibile ma non cliccabile; loading mantiene larghezza e nome dell'azione.",
      input: "Altezza 52px, padding 12×16px, label sopra a 12px, helper dopo il campo. Fondo carta chiara e bordo da 1px; focus usa outline argilla. Error richiede testo di recupero, non solo colore; disabled resta riconoscibile.",
      card: "Usarla solo per unità autonome come un evento. Padding 30px, raggio 2px, bordo o cambio superficie, mai entrambi con ombra. Media 4:3; titolo e metadata hanno gap controllati dal contenitore.",
      accessibility: "Corpo almeno 16px, secondari con contrasto verificabile, 68ch massimo, focus visibile e target 44px. Le informazioni restano disponibili senza hover, audio o motion. I media richiedono alt/poster appropriati.",
      motion: "Calma e continua: micro 140ms, componenti 220ms, sezioni 360ms, easing morbido in uscita. Distanza minima, mai contenuto nascosto di default; gerarchia prima, animazione dopo.",
      microinteractions: "Sottolineatura dei link, lieve sollevamento dei controlli, apertura del menu senza rimbalzo. Un accordion conserva il punto di lettura; gli errori compaiono vicino al campo.",
      motionUse: "Motion per cambi di stato React, presenza di menu/dialog e layout condivisi, se esiste un consumer reale. Non serve per questo catalogo statico; rispettare reduced motion.",
      gsapUse: "Solo per un futuro racconto editoriale con timeline o scroll realmente motivato. Nessun pin, parallax o reveal globale come firma automatica.",
      desktop: "Hero con testo e asset affiancati; pagina contenuto a misura 68ch; lista eventi in unità editoriali; dettaglio con metadata calmi e CTA unica.",
      mobile: "Menu espandibile, hero a una colonna, CTA a larghezza naturale o piena quando serve, lista eventi impilata; FAQ e form restano nel flusso di lettura.",
      do: "Dare priorità alla lettura e alle persone; usare spazi ampi per separare temi; impiegare il logo come firma e foto reali come prova.",
      dont: "Non bordare ogni contenuto, non affidare significato a texture decorative, non ridurre la densità fino a nascondere operazioni frequenti.",
      risks: "Su app, profili o liste dense può diventare troppo lenta da scansionare. La regola di eccezione è una modalità più compatta con la stessa scala e tipografia, non un secondo sistema.",
    },
    colorRoles: [
      { role: "background", value: "#f2eee5" }, { role: "surface-raised", value: "#fffaf1" }, { role: "surface-soft", value: "#e7e0d3" },
      { role: "text-primary", value: "#24251f" }, { role: "text-secondary", value: "#4c4b41" },
      { role: "text-muted", value: "#625f55" }, { role: "border-divider", value: "#b6aa97" },
      { role: "accent", value: "#a84831" }, { role: "interactive", value: "#8f3723" },
      { role: "interactive-hover", value: "#6f2b1b" }, { role: "interactive-active", value: "#542219" },
      { role: "focus", value: "#8f3723" }, { role: "success", value: "#246344" },
      { role: "warning", value: "#7c5100" }, { role: "error", value: "#9b2d27" },
      { role: "info", value: "#204d70" }, { role: "disabled", value: "#69645a" },
    ],
    comparison: {
      communicates: "Calore e tempo per incontrarsi.", perception: "Loruni più intimo e culturale.",
      expressivity: "Media, concentrata su parole e immagini.", restraint: "Alta.",
      flexibility: "Forte su informazione; richiede una modalità compatta per app dense.",
      pages: "Racconti, FAQ, pagine informative, dettagli evento.",
      maintenance: "Ritmo e qualità fotografica richiedono cura editoriale.",
      incoherence: "Card troppo ariose o finte texture rompono la logica.",
      evolution: "Può diventare una libreria di layout editoriali e schede compatte.",
    },
  },
  signal: {
    rules: {
      concept: "Loruni come luogo facile da attraversare: ogni informazione ha posto e priorità chiari. Il segno ufficiale resta la firma, mentre griglia e contrasto danno orientamento.",
      personality: "Diretta, nitida, accessibile, dinamica. L'energia nasce dall'ordine, non da effetti casuali.",
      palette: "Gesso e blu profondo costruiscono la lettura; arancio segnala l'azione, azzurro separa gruppi. I colori di stato hanno significato indipendente dall'accento e sono accompagnati da testo.",
      typography: "Funnel Display 800 per display/H1 e 600 per H2/H3; uppercase solo per titoli brevi ed etichette. Arial per body e UI. Scala rem 5.25 / 4.5 / 2.75 / 1.75 / 1.125 / 1 / .875; leading 1.04/1.5; misura 72ch.",
      iconography: "Icona ufficiale piena; icone UI geometriche a tratto 2px su griglia 24px. Direzione, stato e affordance sono riconoscibili anche senza colore; niente simboli ornamentali.",
      imageTreatment: "Foto documentarie dirette, soggetti riconoscibili e crop deciso ma non aggressivo. Rapporti 4:3 nelle liste e 16:9 nelle hero; colore naturale, overlay solo per testo necessario.",
      videoTreatment: "Clip informative con poster e controlli espliciti, mai indispensabili. 16:9 per eventi; autoplay soltanto mute e solo dove non disturba la scansione, con pausa accessibile.",
      signatures: "Titoli netti a blocchi; griglia visibile nei cambi di superficie; accento arancio riservato al passo principale. Tre elementi applicabili a marketing, app e poster.",
      spacing: "Scala 4, 8, 12, 16, 24, 32, 48, 64px. Parent Stack/Grid governa gap; sezioni hanno padding coerente; componenti solo interno. Densità bilanciata, con variante compatta documentata per liste.",
      layout: "Griglia informativa: il contenuto si scansiona per fasce e allineamenti. Hero e azione primaria immediati; pagine operative mostrano filtro, lista e stato senza cornici superflue.",
      containerGrid: "Lettura 72ch, largo 1320px, full bleed per segnaletica o media motivati. Gutter 16/24/48px. 4/6/12 colonne, gap 12/16/24px; componenti si allineano a colonne e baseline.",
      radius: "0px per button, input, card e pannelli; un eventuale pill è riservato a stato breve quando aiuta il riconoscimento. La squadratura è una regola, non una scorciatoia brutalista.",
      border: "Bordo 1px per campi e contenuti interattivi, divider 1px per righe, regola 4px solo per separazioni principali. Un blocco non somma bordo marcato e ombra.",
      elevation: "Quasi piatta: gesso, bianco e azzurro definiscono livelli. Dropdown/dialog hanno una sola ombra con offset discreto; overlay blu profondo semitrasparente, senza vetro o blur decorativo.",
      navigation: "Header compatto, categorie esplicite, stato attivo tramite underline o blocco. Mobile con menu espandibile e link da almeno 44px. Footer informativo a griglia, stessa gerarchia di label.",
      responsive: "Soglie 700/1080px, 12→6→4 colonne. Su mobile la gerarchia si ricompone: azione e informazioni essenziali prima, filtri e contenuti secondari dopo. CTA e campi restano comodi al touch.",
      componentTreatment: "Varianti primary arancio, secondary outline, ghost testuale, danger semantico; dimensioni 40/48/56px. Stato selected marcato da forma+testo; default/hover/active/focus/disabled/loading/error sono sistematici.",
      button: "Altezza 48px, padding 12×20px, raggio 0, Funnel Display 700. Hover usa arancio più profondo, pressed riduce la distanza, focus blu/arancio visibile, disabled chiaro ma leggibile; loading non cambia larghezza.",
      input: "Altezza 48px, padding 12×16px, label sopra a 8px, helper dopo 8px. Bordo blu 1px; focus outline 3px. Error in testo vicino e bordo semantico; disabled non somiglia a un campo vuoto attivo.",
      card: "Card solo quando un evento o un profilo è un'unità navigabile. Padding 24px, raggio 0, divider o superficie, non entrambi con shadow. Media 4:3, metadata allineati e CTA riconoscibile.",
      accessibility: "Contrasti alti, indicatori testuali per stato, focus 3px, touch 44px, testo 16px, misura 72ch. Uppercase evitato nei brani lunghi. Errori e caricamenti mantengono posizione e istruzioni.",
      motion: "Rapida e precisa: micro 100ms, componente 180ms, sezione 260ms; easing decelerato e spostamenti brevi. Un solo segnale per azione; contenuto sempre visibile senza animazione.",
      microinteractions: "Underline che appare sui link, stato pressed del button, cambio di riga attiva, menu che si apre senza rimbalzo; toast breve e collocato sempre nello stesso punto.",
      motionUse: "Motion per transizioni di stato React, menu, tab, filtro e feedback di selezione. Evitare layout animation su elenchi lunghi se interferisce con la scansione.",
      gsapUse: "Solo per una sequenza informativa complessa o una hero di campagna motivata. Niente parallax diffuso: il linguaggio principale resta rapido e funzionale.",
      desktop: "Hero leggibile a colpo d'occhio; pagina contenuto con indice; lista eventi strutturata per righe; dettaglio con fatti e CTA in zona stabile.",
      mobile: "Menu a tutta larghezza, filtri ordinati prima della lista, card impilate, CTA principali visibili; la stessa griglia governa FAQ e form, senza hover indispensabile.",
      do: "Dare un nome ai gruppi; allineare dati e azioni; riservare l'arancio ai passi principali; mantenere leggibili numeri e date tabulari.",
      dont: "Non trasformare ogni pannello in un cartello, non usare uppercase nei testi lunghi, non aggiungere regole spesse a ogni componente.",
      risks: "Può diventare impersonale o troppo densa se ogni sezione ha la stessa energia. Servono pause e immagini vere nei contenuti di racconto, rispettando la griglia.",
    },
    colorRoles: [
      { role: "background", value: "#f4f5f0" }, { role: "surface-raised", value: "#ffffff" }, { role: "surface-soft", value: "#cce5f5" },
      { role: "text-primary", value: "#101d33" }, { role: "text-secondary", value: "#33445d" },
      { role: "text-muted", value: "#4e5d6e" }, { role: "border-divider", value: "#8290a1" },
      { role: "accent", value: "#e25a2b" }, { role: "interactive", value: "#a53a17" },
      { role: "interactive-hover", value: "#842e12" }, { role: "interactive-active", value: "#63250f" },
      { role: "focus", value: "#a53a17" }, { role: "success", value: "#176044" },
      { role: "warning", value: "#7a4f00" }, { role: "error", value: "#9b3028" },
      { role: "info", value: "#224f80" }, { role: "disabled", value: "#687584" },
    ],
    comparison: {
      communicates: "Orientamento e immediatezza.", perception: "Loruni più attivo e semplice da usare.",
      expressivity: "Alta nei titoli, disciplinata nel resto.", restraint: "Media.",
      flexibility: "Forte su app, liste e contenuti ripetuti; richiede pause narrative.",
      pages: "Eventi, giochi, profili, form e navigazione.",
      maintenance: "La griglia e i livelli di enfasi vanno custoditi nei nuovi componenti.",
      incoherence: "Troppi blocchi e uppercase trasformano tutto in rumore.",
      evolution: "Può diventare una libreria di schede, dati e flussi compatti.",
    },
  },
  night: {
    rules: {
      concept: "Loruni come ritrovo serale: un ambiente digitale profondo ma leggibile, in cui le persone sono il soggetto e i segni ufficiali fanno da riferimento.",
      personality: "Conviviale, raccolta, contemporanea, morbida. Il buio serve il contesto serale, non una scenografia artificiale.",
      palette: "Ombra e superfici verde profondo danno struttura; avorio sostiene la lettura, menta le azioni, corallo gli avvisi. Ruoli di successo, errore e info restano separati e accompagnati da testo.",
      typography: "Funnel Display 700 per display/H1, 600 per H2/H3. Arial per body e UI. Scala rem 5.25 / 4.25 / 2.75 / 1.75 / 1.25 / 1 / .875; leading 1.08/1.55; misura 66ch, tracking solo nei label brevi.",
      iconography: "Icona ufficiale chiara su superficie scura; icone UI a tratto morbido 2px, griglia 24px e terminali coerenti. Nessuna icona essenziale affidata al solo colore.",
      imageTreatment: "Foto reali di incontri con luce ambiente leggibile, senza fingere un locale specifico. Rapporti 3:2 e 4:3; evitare neri chiusi che cancellano i volti, overlay solo se il testo lo richiede.",
      videoTreatment: "Poster e controlli chiari su fondo scuro. Clip brevi 16:9, mute se partono in automatico, pausa visibile e fallback statico; nessuna informazione dipende dal filmato.",
      signatures: "Superfici profonde senza glow; controlli morbidi ma solidi; menta per invitare all'azione. L'icona ufficiale ricorre come segno riconoscibile, non come pattern dappertutto.",
      spacing: "Scala 6, 12, 18, 24, 36, 54, 72, 96px. Section definisce i pieni/vuoti, Stack e Grid i gap; i componenti solo padding interno. Densità bilanciata, più raccolta su mobile.",
      layout: "Composizione a isole funzionali su fondo continuo: i gruppi di contenuto sono leggibili senza annidare card. Un momento immersivo può aprire la pagina, ma le operazioni restano lineari.",
      containerGrid: "Lettura 66ch, largo 1200px, full bleed limitato a media reali o eventi speciali. Gutter 18/30/54px. Griglia 4/6/12 colonne, gap 18/24/36px.",
      radius: "12px controlli, 18px pannelli/card, full solo chip e piccoli badge. I raggi esprimono accoglienza; non devono cambiare per pagina.",
      border: "1px su campi e divisori dove serve; le superfici si distinguono prima per tono. Nessun bordo luminoso decorativo, nessun doppio contorno con shadow.",
      elevation: "Tre piani: fondo ombra, superficie rialzata verde, overlay più profondo con ombra morbida e offset. Blur solo se migliora separazione e contrasto di un vero overlay, con fallback opaco.",
      navigation: "Header raccolto con logo chiaro, link leggibili e stato attivo menta. Mobile menu espandibile su superficie rialzata, target 44px; footer calmo con gruppi chiari e divider.",
      responsive: "Soglie 700/1080px, 12→6→4 colonne. Hero e media si impilano, azioni restano visibili; pannelli diventano una sola colonna e non duplicano superfici. Testo e focus mantengono contrasto.",
      componentTreatment: "Primary menta, secondary outline, tertiary link, danger corallo scuro/chiaro secondo superficie. Dimensioni 40/50/56px; stati default, hover, active, focus, disabled, loading ed error coerenti.",
      button: "Altezza 50px, padding 12×22px, raggio 12px, Funnel Display 600. Hover schiarisce la menta, pressed riduce il sollevamento, focus corallo 3px, disabled più opaco ma leggibile; loading conserva dimensione.",
      input: "Altezza 50px, padding 12×16px, raggio 12px, label sopra a 12px e helper dopo 6px. Fondo profondo e bordo visibile; focus corallo, errore con messaggio vicino, disabled distinto.",
      card: "Solo per unità autonome e azionabili. Padding 24/36px, raggio 18px, superficie rialzata senza bordo/ombra simultanei. Media 3:2; metadata e CTA in uno stack controllato.",
      accessibility: "Avorio/menta su scuro con contrasto verificato, testo secondario non troppo tenue, focus corallo, target 44px, corpo 16px, misura 66ch. L'interfaccia deve restare leggibile in piena luce e senza motion.",
      motion: "Morbida e breve: micro 160ms, componenti 240ms, sezione 380ms, ease-out. La profondità si mostra con piccoli cambi di posizione/superficie, mai con glow o opacità che nasconde contenuti.",
      microinteractions: "Leggera risposta press, cambio morbido di superficie su hover, menu e accordion che mantengono continuità, focus visibile. Su touch tutti gli stati importanti appaiono anche dopo il tap.",
      motionUse: "Motion per stati React, presenza di menu/dialog, gesture e transizioni di layout contenute. Evitare animazioni simultanee in liste e profili.",
      gsapUse: "Eventuale timeline di racconto per una campagna/evento con vero materiale visivo. Nessuna dipendenza da scroll-pin o video per le operazioni ordinarie.",
      desktop: "Hero raccolto con segni ufficiali; contenuto su misura 66ch; lista eventi su superfici alte; dettaglio con area informativa chiara e azione primaria menta.",
      mobile: "Menu su pannello dedicato, hero in colonna, azioni grandi, card e FAQ senza strati annidati; form con campi leggibili anche in luce esterna.",
      do: "Usare il contrasto per invitare, mostrare persone reali, lasciare pause tra gruppi e preservare la gerarchia su schermi piccoli.",
      dont: "Non aggiungere bagliori, gradienti o blur per simulare atmosfera; non mettere ogni testo in card; non sacrificare contrasto per la notte.",
      risks: "Il fondo scuro può appesantire letture lunghe e ambienti molto luminosi. Potrebbe servire una superficie di lettura più chiara, con ruoli semantici invariati, senza creare una quarta identità.",
    },
    colorRoles: [
      { role: "background", value: "#152b2c" }, { role: "surface-raised", value: "#254143" }, { role: "surface-soft", value: "#1c3637" },
      { role: "text-primary", value: "#f7f1df" }, { role: "text-secondary", value: "#dbe8d8" },
      { role: "text-muted", value: "#c2d1c3" }, { role: "border-divider", value: "#638280" },
      { role: "accent", value: "#bde5bd" }, { role: "interactive", value: "#bde5bd" },
      { role: "interactive-hover", value: "#d4f2cf" }, { role: "interactive-active", value: "#9cd3a2" },
      { role: "focus", value: "#f3a891" }, { role: "success", value: "#bde5bd" },
      { role: "warning", value: "#f4cf88" }, { role: "error", value: "#f3a891" },
      { role: "info", value: "#a8dbee" }, { role: "disabled", value: "#abc1b1" },
    ],
    comparison: {
      communicates: "Ritrovo e atmosfera serale.", perception: "Loruni più conviviale e immersivo.",
      expressivity: "Alta nelle superfici, controllata nei contenuti.", restraint: "Media.",
      flexibility: "Buona per social/eventi; richiede trattamento chiaro per letture lunghe.",
      pages: "Inviti, community, eventi e momenti immersivi.",
      maintenance: "Contrasto e fotografie serali richiedono verifica costante.",
      incoherence: "Glow, card annidate e testo attenuato rompono il sistema.",
      evolution: "Può crescere in superfici operative e una modalità lettura dedicata.",
    },
  },
};

export function colorForDirection(id: Direction["id"], role: string): string {
  const color = systemProfiles[id].colorRoles.find((entry) => entry.role === role);
  if (!color) throw new Error(`Ruolo colore sconosciuto: ${id}/${role}`);
  return color.value;
}

export function visualStyleForDirection(id: Direction["id"]): CSSProperties {
  const value = (role: string) => colorForDirection(id, role);
  return {
    "--paper": value("background"),
    "--ink": value("text-primary"),
    "--quiet": value("text-secondary"),
    "--accent": value("accent"),
    "--surface": value(id === "night" ? "surface-raised" : "surface-soft"),
    "--surface-soft": value("surface-soft"),
    "--line": value("border-divider"),
    "--inverse": value("background"),
    "--interactive": value("interactive"),
    "--interactive-hover": value("interactive-hover"),
    "--focus": value("focus"),
    "--success": value("success"),
    "--warning": value("warning"),
    "--error": value("error"),
    "--info": value("info"),
  } as CSSProperties;
}
