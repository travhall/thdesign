import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    mdx(),
    // swup({ theme: ["overlay", { direction: "to-top" }] }),
    swup(),
  ],
  site: "https://travhall.github.io",
  base: "/thdesign",
});
