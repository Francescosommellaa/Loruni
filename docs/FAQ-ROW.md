# FAQ Row — CLOSED

Verificato 2026-10-07. Solo Row/FAQ Row; FAQ Section e le pagine prodotto non vengono migrate. Fonte corrente Framer letta in sola lettura: componente, controls, otto slot della Section e i tre consumer `/vieni-a-trovarci`; preview isolato e della pagina. Capture locale di riferimento in `docs/framer/faq-row-source.json`, fuori dal bundle.

```tsx
<FAQRow
  title={item.title}
  text={item.text}
  open={open}
  onOpenChange={setOpen}
  onClick={handleClick}
/>
```

`title`, `text`, `open` e `onOpenChange` sono obbligatori; `onClick` è l'evento Click opzionale, emesso prima della richiesta di toggle. `className`/`style` sono integrazione tecnica. Nessuno stato open interno: il parent può accettare, ignorare o orchestrare la richiesta, anche imponendo l'esclusività fra sibling. Disponibilità `title isSet`, dati e layout esterni appartengono al consumer.

## Visuale e motion

Un'unica Row fluida, stack verticale/gap0/height auto/overflow hidden. Il width550 della sorgente è una misura documentale, non un vincolo del componente. Question fill, gap12, padding20px0; titolo Headline/28 originale e Neutral950. Headline28 applica Funnel Display600, 28/24/20px ai breakpoint1200/810/Phone, tracking−.04em e line-height1.1. Answer fill, testo max548, padding-bottom24; Text/20 Funnel Sans400/20px/28px/tracking−.2px, Neutral950 e opacity.7.

Opened: Answer relativo nel flow/opacity1; Closed: Answer assoluto left/right0, bottom−80px osservato nel runtime e opacity0. Il serializer conserva−80.5px, distinto dal CSS runtime−80px. Il contenuto non viene smontato né nascosto con display:none. Motion possiede size projection della root, posizione dei figli e opacity; tween originale0.2s/ease[.44,0,.56,1]/delay0, già esportato come `faqSectionDefaultTransition` per deduplicazione della configurazione, senza dipendenza dalla logica della Section. Proiezione dei figli evita la deformazione del testo. Nessun RAF, scroll owner o nuovo effetto hover/pressed. Reduced motion usa la policy esistente e target immediati.

`FaqIcon` riusato con `decorative`: stessa geometria, CSS, Icon Engine, tween e memoria della rotazione; un solo trigger nativo, senza button annidati. Closed passa Plus, Opened passa Minus. La sorgente conserva la barra90 dopo Minus→Plus: il comportamento già migrato rimane identico, anche se la visuale finale è ancora una linea. Non viene corretta arbitrariamente la fonte.

## Interazione e accessibilità

Trigger `button type=button` dentro heading, Enter/Space nativi, aria-expanded, aria-controls e useId stabile; Answer region con aria-labelledby. Closed ha aria-hidden/inert e pointer-events:none, nessun tab stop nascosto. Focus globale2px conservato, offset−2 per renderlo visibile dentro il clip. Root delega click per estendere l'area alla risposta aperta: anche il testo dell'answer richiama Click e toggle. Nessuna logica delle altre FAQ.

Adattamenti accessibili espliciti: nel preview isolato Framer Enter funziona ma Space non apre; la versione nativa supporta entrambi. L'icona annidata sorgente ha DISMISS_OVERLAY e assorbe il click, senza overlay nei consumer attuali. La composizione passiva conserva quell'area: il click sull'icona non emette Click della Row né fa toggle; Enter/Space sul trigger nativo restano funzionanti. Nessuna azione globale overlay viene inventata.

Il preview corrente della Section e della pagina lascia aperte due righe dopo apertura consecutiva, diversamente dall'esclusività descritta nella richiesta. L'API controllata consente comunque al futuro parent di orchestrare l'esclusività; nessuna sibling policy viene implementata nella Row.

## Otto istanze e verifica

Cinque slot valorizzati: Devo per forza giocare?, Posso venire da solo?, A cosa si gioca?, Serve iscriversi agli eventi?, Dove trovo indirizzo e orari?. Gli slot6/7/8 hanno titolo e testo vuoti, esclusi dal consumer title-isSet. I dati esatti delle fixture sono separati in FAQRowExamples.data.ts. Undici esempi reali nel catalogo: controlled demo, Opened/Closed e tutti gli otto slot; parent controls, callback counter, reduced policy e selezione delle larghezze misurate sono solo documentali.

Fonte/locale confrontati a1200/810/390: tutte le cinque istanze valorizzate coincidono nei box finali Opened/Closed alle larghezze472.5/353.5/351px, compresi titoli su più linee, testo, padding, gap, icona32px e opacity. Default isolato550px coincide: Closed72, Opened152, Question72, testo548×56. Verificati toggle da Question/Answer, click icona assorbito come fonte, callback, Enter/Space, focus-visible, ID stabile, controlled parent, inert, ordine Tab, inversione rapida via doppio click e reduced-always. FaqIcon standalone rimane button32×32/Click/tastiera; glyph e font/token non duplicati.

Campioni locali durante il tween mostrano altezza105.61→125.89→141.73→148.85→152 e opacity.426→.681→.877→.960→1, poi transform:none. Nel preview sorgente i campioni disponibili erano già assestati; non si certifica una misura temporale sincronizzata frame-per-frame. La policy progetto Framer reducedMotion=true è preservata.

Typecheck/lint/build e digest finale nelle [prove](FAQ-ROW-VERIFICATION.json). Nessuna suite frontend aggiunta/eseguita. Limiti: nessun dispositivo touch fisico, held pointer-down, screen reader, cross-engine, toggle OS reale o raster pixel-diff esercitato. Capture sequenziali e file Framer locali ignorati non attestano una revisione immutabile. Nessun edit/publish Framer, backend, pagina o altro controllo portato.

FAQ ROW — CLOSED

Parent integration 2026-10-08: FAQSection is now ported with the explicitly requested exclusive policy. Live embedded source resets the rotating bar to0 in Closed; decorative FaqIcon now follows variant endpoints, superseding the earlier embedded-retention observation above. Standalone retention is unchanged. Row color selectors are scoped to resist later preset import order. Original row markup/keyboard/reveal remain reused. Current parent/scroll/dynamic proof: FAQ-SECTION-VERIFICATION.json.
