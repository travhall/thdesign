import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import lighthouse from "astro-lighthouse";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), lighthouse(), mdx()],
  site: "https://travhall.github.io",
  base: "/thdesign",
});
