/**
 * Allgemeine Angaben zur Website (Name, Navigation, Kontakt).
 * Hier zentral pflegen – Header, Footer und SEO lesen diese Werte.
 */

export const site = {
  name: 'Hannah Zobel',
  rolle: 'Product Designerin',
  /** Standard-Beschreibung für Suchmaschinen, falls eine Seite keine eigene hat. */
  beschreibung:
    'Portfolio von Hannah Zobel, Product Designerin. (Platzhalter – Text folgt.)',
  locale: 'de_DE',
} as const;

/** Hauptnavigation im Header. Reihenfolge = Anzeige-Reihenfolge. */
export const navigation = [
  { label: 'Arbeiten', href: '/arbeiten/' },
  { label: 'KI', href: '/ki/' },
  { label: 'Über mich', href: '/ueber-mich/' },
  { label: 'Lebenslauf', href: '/lebenslauf/' },
] as const;

/**
 * Kontakt-Platzhalter.
 * TODO: Echte E-Mail-Adresse und LinkedIn-URL eintragen.
 * Keine Adresse oder Telefonnummer hier ablegen!
 */
export const kontakt = {
  email: 'kontakt@example.com',
  linkedin: 'https://www.linkedin.com/in/platzhalter',
} as const;
