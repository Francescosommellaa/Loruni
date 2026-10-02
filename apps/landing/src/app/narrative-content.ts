// Minimal working copy for the static composition, not final editorial approval.
// IDs are shared by server landmarks and the progressively enhanced navigation.
export const narrative = {
  opening: { id: 'entra', label: 'Inizio', lines: ['La notte,', 'insieme.'] },
  social: { id: 'scopri', label: 'Atmosfera', lines: ['C’è posto', 'per te.'] },
  cocktail: { id: 'cocktail', label: 'Cocktail', lines: ['Un drink.', 'Ci sei.'] },
  table: { id: 'al-tavolo', label: 'Giochi da tavolo', lines: ['Al tavolo,', 'scegli tu.'] },
  digital: { id: 'gaming-digitale', label: 'Gaming digitale', lines: ['Altra stanza.', 'Stessa serata.'] },
  expansion: { id: 'oltre', label: 'App ed eventi', lines: ['La notte', 'va oltre.'] },
  connection: { id: 'connettiti', label: 'Tutto Loruni', lines: ['Tutto è', 'Loruni.'] },
  visit: { id: 'vieni', label: 'Vieni a trovarci' },
} as const;

export const journey = Object.values(narrative);
