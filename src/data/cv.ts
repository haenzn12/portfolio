/**
 * LEBENSLAUF – die EINE Datenquelle.
 * ---------------------------------------------------------------------------
 * Die Seite /lebenslauf liest ihre Inhalte ausschließlich aus dieser Datei.
 * Später soll aus denselben Daten auch ein text-basiertes PDF (Deutsch und
 * Englisch) erzeugt werden. Deshalb hat jedes Textfeld eine DE- und EN-Fassung.
 *
 * Aktuell stehen hier NUR Platzhalter. Keine Adresse, keine Telefonnummer!
 */

/** Ein Text in zwei Sprachen. */
export interface Zweisprachig {
  de: string;
  en: string;
}

export interface CvStation {
  /** Zeitraum, z. B. "2021 – heute" */
  zeitraum: Zweisprachig;
  titel: Zweisprachig;
  organisation: string;
  ort?: Zweisprachig;
  /** Stichpunkte zu Aufgaben oder Erfolgen */
  punkte: Zweisprachig[];
}

export interface CvSkillGruppe {
  titel: Zweisprachig;
  eintraege: Zweisprachig[];
}

export interface CvSprache {
  sprache: Zweisprachig;
  niveau: Zweisprachig;
}

export interface Cv {
  name: string;
  rolle: Zweisprachig;
  zusammenfassung: Zweisprachig;
  erfahrung: CvStation[];
  ausbildung: CvStation[];
  skills: CvSkillGruppe[];
  sprachen: CvSprache[];
}

const P = { de: 'Platzhalter', en: 'Placeholder' } satisfies Zweisprachig;

export const cv: Cv = {
  name: 'Hannah Zobel',
  rolle: { de: 'Product Designerin', en: 'Product Designer' },
  zusammenfassung: {
    de: 'Platzhalter: Kurzprofil in zwei bis drei Sätzen.',
    en: 'Placeholder: short profile in two to three sentences.',
  },
  erfahrung: [
    {
      zeitraum: { de: 'JJJJ – heute', en: 'YYYY – present' },
      titel: { de: 'Platzhalter-Position', en: 'Placeholder position' },
      organisation: 'Evergreen',
      punkte: [
        { de: 'Platzhalter: Aufgabe oder Ergebnis', en: 'Placeholder: responsibility or result' },
      ],
    },
    {
      zeitraum: { de: 'JJJJ – JJJJ', en: 'YYYY – YYYY' },
      titel: { de: 'Platzhalter-Position', en: 'Placeholder position' },
      organisation: 'flüge.de',
      punkte: [
        { de: 'Platzhalter: Aufgabe oder Ergebnis', en: 'Placeholder: responsibility or result' },
      ],
    },
  ],
  ausbildung: [
    {
      zeitraum: { de: 'JJJJ – JJJJ', en: 'YYYY – YYYY' },
      titel: { de: 'Platzhalter-Abschluss', en: 'Placeholder degree' },
      organisation: 'Platzhalter-Hochschule',
      punkte: [],
    },
  ],
  skills: [
    { titel: { de: 'Methoden', en: 'Methods' }, eintraege: [P, P] },
    { titel: { de: 'Tools', en: 'Tools' }, eintraege: [P, P] },
  ],
  sprachen: [
    { sprache: { de: 'Deutsch', en: 'German' }, niveau: P },
    { sprache: { de: 'Englisch', en: 'English' }, niveau: P },
  ],
};
