# Portfolio – Hannah Zobel

Persönliche Portfolio-Website, gebaut mit [Astro](https://astro.build) (statische Seite, TypeScript, Plain CSS).

> **Status:** Grundgerüst. Alle Texte sind Platzhalter, das visuelle Design ist bewusst neutral und noch nicht festgelegt.

## Lokal starten

```bash
npm install      # einmalig: Abhängigkeiten installieren
npm run dev      # Entwicklungsserver auf http://localhost:4321
npm run build    # prüft den Code (astro check) und baut die Seite nach dist/
npm run preview  # gebaute Seite lokal ansehen
```

## Was liegt wo?

```
├── astro.config.mjs          Grundeinstellungen (u. a. die spätere Domain unter "site")
├── public/                   Dateien, die 1:1 übernommen werden (Favicon, später PDFs, Fonts)
└── src/
    ├── content.config.ts     Regeln (Schema) für die Case Studies
    ├── content/
    │   └── case-studies/     ← EINE Markdown-Datei pro Case Study
    ├── data/
    │   ├── site.ts           Name, Navigation, Kontakt-Links
    │   └── cv.ts             ← Lebenslauf-Daten (DE + EN)
    ├── layouts/
    │   └── BaseLayout.astro  Rahmen jeder Seite: <head>/SEO, Header, Footer
    ├── components/           Wiederverwendbare Bausteine (Header, Footer, Kachel, Hinweisbox)
    ├── pages/                Jede Datei = eine Seite (Dateiname = URL)
    │   ├── index.astro       /
    │   ├── arbeiten/         /arbeiten/ und /arbeiten/<case-study>/
    │   ├── ki.astro          /ki/
    │   ├── ueber-mich.astro  /ueber-mich/
    │   ├── lebenslauf.astro  /lebenslauf/
    │   ├── impressum.astro   /impressum/
    │   ├── datenschutz.astro /datenschutz/
    │   └── 404.astro         Fehlerseite
    └── styles/
        ├── tokens.css        ← Design-Tokens: Farben, Schrift, Abstände, Radien
        └── global.css        Basis-Styles, die nur Tokens verwenden
```

**Design ändern:** Fast alles lässt sich über `src/styles/tokens.css` steuern. Komponenten verwenden ausschließlich diese Variablen.

## Neue Case Study anlegen

1. Eine bestehende Datei in `src/content/case-studies/` kopieren, z. B. `musterdepot.md`.
2. Umbenennen. Der Dateiname wird zur URL: `mein-projekt.md` → `/arbeiten/mein-projekt/`
   (nur Kleinbuchstaben, Ziffern und Bindestriche, keine Umlaute).
3. Den Kopfbereich zwischen den `---` ausfüllen:

   | Feld               | Bedeutung                                              |
   | ------------------ | ------------------------------------------------------ |
   | `title`            | Titel                                                  |
   | `kurzbeschreibung` | 1–2 Sätze für Übersicht und Suchmaschinen              |
   | `firma`            | Unternehmen                                            |
   | `zeitraum`         | z. B. `2023 – 2024`                                    |
   | `rolle`            | Eigene Rolle                                           |
   | `team`             | Team-Zusammensetzung                                   |
   | `tags`             | Liste, z. B. `['Research', 'UI']`                      |
   | `cover`            | optional: Bild, Pfad relativ zur Datei (`./bild.jpg`)  |
   | `coverAlt`         | optional: Alternativtext zum Bild                      |
   | `reihenfolge`      | Zahl, kleiner = weiter oben                            |
   | `featured`         | `true` = erscheint auf der Startseite                  |

4. Die Abschnitte (TL;DR, Problem, Meine Rolle, Prozess, Lösung, Ergebnis/Impact, Learnings) ausfüllen.
   Die gelben Platzhalter-Kästen sind Markdown-Zitate (`> …`) und verschwinden, wenn man sie durch normalen Text ersetzt.
5. Für interaktive Inhalte kann die Datei auch `.mdx` heißen.

Fehlt ein Pflichtfeld, bricht `npm run build` mit einer verständlichen Fehlermeldung ab.

## Lebenslauf

Alle Daten stehen in **`src/data/cv.ts`**, jedes Textfeld mit deutscher (`de`) und englischer (`en`) Fassung.
Die Seite `/lebenslauf/` liest nur aus dieser Datei.

**Geplant:** Aus derselben Datei wird später ein text-basiertes PDF (DE und EN) erzeugt.
Auf der Lebenslauf-Seite ist dafür bereits ein verborgener Download-Link vorbereitet (`data-cv-download`),
der aktiviert wird, sobald die PDFs existieren. Eine PDF-Erzeugung gibt es noch nicht.

## Datenschutz & persönliche Daten

- Keine Analytics, keine Cookies, keine externen Schriftarten oder CDNs.
- Schriften werden später selbst gehostet (`public/fonts/`).
- **Keine Adresse oder Telefonnummer ins Repository committen.**
- `/impressum/` und `/datenschutz/` sind Platzhalter und **müssen vor dem Livegang ausgefüllt werden**.

## Deployment (später, Vercel)

1. Auf [vercel.com](https://vercel.com) (Hobby-Plan) das GitHub-Repo importieren.
2. Framework-Preset **Astro** wählen. Build-Befehl `npm run build`, Ausgabeordner `dist` (werden automatisch erkannt).
3. **Kein Adapter nötig**, da die Seite rein statisch ist.
4. Danach in `astro.config.mjs` unter `site` die echte Domain eintragen (für Canonical-URLs und Link-Vorschauen).

## Offene Platzhalter (Checkliste)

- [ ] Domain in `astro.config.mjs` (`site`)
- [ ] E-Mail und LinkedIn in `src/data/site.ts`
- [ ] Hero-Text auf der Startseite (`src/pages/index.astro`)
- [ ] Inhalte der vier Case Studies
- [ ] Seiten „KI“ und „Über mich“
- [ ] Lebenslauf-Daten in `src/data/cv.ts`, später PDF-Erzeugung
- [ ] Impressum und Datenschutzerklärung
- [ ] Open-Graph-Vorschaubild
- [ ] Visuelles Design (Tokens) und selbst gehostete Schriften
