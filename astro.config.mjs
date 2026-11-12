import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vercel.app',
  compressHTML: true,
  integrations: [sitemap()]
});
