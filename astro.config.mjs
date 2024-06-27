import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import typography from "@tailwindcss/typography";
// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  plugins: [typography],
});
