// @ts-check
// Zentrale Astro-Konfiguration.
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // TODO: Durch die echte Domain ersetzen, sobald sie feststeht.
  // Wird für Canonical-URLs und Open-Graph-Links verwendet.
  site: 'https://www.example.com',
  // Rein statische Seite – kein Server, kein Adapter nötig.
  output: 'static',
  integrations: [mdx()],
});
