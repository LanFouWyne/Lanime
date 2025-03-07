// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://Lanime.github.io',
  
  env: {
    schema: {
      API_URL: envField.string({
        access: "public",
        context: "server",
        default: "https://wajik-anime-api.vercel.app/"
      }),
    },
  },

  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [tailwind()],

  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
