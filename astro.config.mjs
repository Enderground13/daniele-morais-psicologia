import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://psicologadanielemorais.com.br",
  trailingSlash: "never",
  integrations: [sitemap()]
});
