import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://example.com",
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
