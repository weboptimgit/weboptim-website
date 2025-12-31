import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";
import fs from "fs";

// Load pregenerated routes (run `npx tsx scripts/generate-routes.ts` to update)
const prerenderRoutesPath = path.resolve(__dirname, "./src/data/prerender-routes.json");
const prerenderRoutes: string[] = JSON.parse(fs.readFileSync(prerenderRoutesPath, "utf-8"));

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes: prerenderRoutes,
      renderer: new vitePrerender.PuppeteerRenderer({
        renderAfterDocumentEvent: "prerender-ready",
        timeout: 30000,
      }),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs', '@radix-ui/react-accordion'],
        },
      },
    },
  },
}));