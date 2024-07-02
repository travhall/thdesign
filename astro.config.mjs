import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import lighthouse from "astro-lighthouse";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lighthouse(), icon()],
  site: "https://travhall.github.io",
  base: "/thdesign"
});