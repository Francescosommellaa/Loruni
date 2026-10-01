// Provisional copy and media intentions for Phase 02, not final art direction.
// IDs are shared by server landmarks and the progressively enhanced navigation.
export const narrative = {
  opening: { id: 'entra', label: 'Inizio', lines: ['La notte,', 'insieme.'] },
  social: { id: 'scopri', label: 'Atmosfera', line: 'C’è spazio per la tua serata.', media: 'Persone, gesti e gruppi nello stesso ambiente.' },
  cocktail: { id: 'cocktail', label: 'Cocktail', line: 'Un drink. Ci sei.', media: 'Bancone, ghiaccio e mani. Il bicchiere entra nel racconto.' },
  table: { id: 'al-tavolo', label: 'Giochi da tavolo', line: 'Al tavolo, scegli tu se giocare.', media: 'Lo stesso bicchiere, il tavolo, le mani e le carte.' },
  digital: { id: 'gaming-digitale', label: 'Gaming digitale', line: 'Altra stanza. Stessa serata.', media: 'Gaming room distinta: persone insieme, postazioni e schermi.' },
  expansion: { id: 'oltre', label: 'App ed eventi', line: 'La serata continua a cambiare.', media: 'Spazio per poche schermate reali dell’app, ancora da fornire.' },
  connection: { id: 'connettiti', label: 'Tutto Loruni', line: 'Tutto è Loruni.', media: 'Persone, cocktail, giochi al tavolo e gaming digitale convergono.' },
  visit: { id: 'vieni', label: 'Vieni a trovarci' },
} as const;

export const journey = Object.values(narrative);
