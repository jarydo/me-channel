import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  // base: "https://me-channel-jaryd-diamonds-projects.vercel.app/",
});
