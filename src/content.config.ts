/**
 * Definition der Content Collections.
 * ---------------------------------------------------------------------------
 * "case-studies": jede Markdown-/MDX-Datei in src/content/case-studies/
 * wird zu einer Case Study. Der Dateiname wird zur URL:
 *   src/content/case-studies/musterdepot.md  →  /arbeiten/musterdepot/
 *
 * Das Schema unten prüft beim Build, ob alle Pflichtfelder im Kopfbereich
 * (Frontmatter) einer Datei vorhanden und korrekt sind.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      /** Titel der Case Study */
      title: z.string(),
      /** Ein bis zwei Sätze für Übersicht und Meta-Description */
      kurzbeschreibung: z.string(),
      firma: z.string(),
      /** Freitext, z. B. "2023 – 2024" */
      zeitraum: z.string(),
      /** Eigene Rolle im Projekt */
      rolle: z.string(),
      /** Team-Zusammensetzung, z. B. "1 PM, 3 Devs" */
      team: z.string(),
      tags: z.array(z.string()).default([]),
      /** Optionales Titelbild (Pfad relativ zur Markdown-Datei) */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Sortierung: kleinere Zahl = weiter oben */
      reihenfolge: z.number().int(),
      /** true = erscheint auf der Startseite */
      featured: z.boolean().default(false),
    }),
});

export const collections = { 'case-studies': caseStudies };
