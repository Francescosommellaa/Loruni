import { directions } from "@/data/directions";
import { systemProfiles, type SystemProfile } from "@/data/system-profiles";

const criteria: { key: keyof SystemProfile["comparison"]; label: string }[] = [
  { key: "communicates", label: "Cosa comunica" },
  { key: "perception", label: "Percezione di Loruni" },
  { key: "expressivity", label: "Espressività" },
  { key: "restraint", label: "Sobrietà" },
  { key: "flexibility", label: "Flessibilità" },
  { key: "pages", label: "Pagine più naturali" },
  { key: "maintenance", label: "Cosa richiede cura" },
  { key: "incoherence", label: "Rischio di incoerenza" },
  { key: "evolution", label: "Possibile evoluzione" },
];

export function DirectionComparison() {
  return (
    <section className="overview-comparison" aria-labelledby="comparison-title">
      <div className="comparison-intro">
        <span>Stessi criteri, tre risposte</span>
        <h2 id="comparison-title">Confronto ragionato</h2>
        <p>Queste sono ipotesi da mettere alla prova nelle pagine di dettaglio. Nessuna colonna rappresenta una preferenza o una decisione.</p>
      </div>
      <div className="comparison-scroll" role="region" aria-label="Tabella comparativa delle tre direzioni" tabIndex={0}>
        <table>
          <thead><tr><th scope="col">Criterio</th>{directions.map((direction) => <th scope="col" key={direction.id}>{direction.name}</th>)}</tr></thead>
          <tbody>{criteria.map(({ key, label }) => <tr key={key}><th scope="row">{label}</th>{directions.map((direction) => <td key={direction.id}>{systemProfiles[direction.id].comparison[key]}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p className="comparison-hint">Su schermi piccoli, scorri la tabella orizzontalmente per leggere tutte le direzioni.</p>
    </section>
  );
}
