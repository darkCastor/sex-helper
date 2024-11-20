// @ts-check
import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [AstroPWA({
    registerType: "autoUpdate",
    manifest: {
      name: "Your App Name",
      short_name: "App",
      description: "Your app description",
      theme_color: "#13151a",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
    },
    devOptions: {
      enabled: true,
      type: "module",
      navigateFallback: "/",
    },
  }), tailwind(), svelte()],
});