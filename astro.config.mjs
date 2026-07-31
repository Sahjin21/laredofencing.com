import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  // Site URL — used by Astro's sitemap plugin and absolute-URL helpers
  // throughout the site. Override at build time with SITE_URL env var.
  // Default to the production hostname so local builds still produce
  // correct sitemap entries.
  site: process.env.SITE_URL ?? "https://laredofencing.com",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/provider-corrections"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
