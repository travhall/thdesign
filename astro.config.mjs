import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import lighthouse from "astro-lighthouse";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lighthouse()],
  site: "https://travhall.github.io",
  base: "/thdesign",
});
