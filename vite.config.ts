import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

// Static routes for prerendering (main pages)
const prerenderRoutes = [
  "/",
  // Services - EN
  "/services", "/services/building-website", "/services/ecommerce-website",
  "/services/seo", "/services/ppc", "/services/digitalization-and-automation", "/services/graphic-design",
  // Services - CZ/SK
  "/sluzby", "/sluzby/tvorba-webstranok", "/sluzby/tvorba-webstranek", "/sluzby/tvorba-eshopu",
  "/sluzby/seo", "/sluzby/ppc", "/sluzby/digitalizacia-a-automatizacia-procesov",
  "/sluzby/digitalizace-a-automatizace-procesu", "/sluzby/grafika",
  // Other pages
  "/contact", "/kontakt", "/about", "/o-nas", "/work", "/nase-prace",
  "/faq", "/caste-dotazy", "/caste-otazky", "/glossary", "/slovnik", "/blog",
  "/privacy-policy", "/ochrana-osobnich-udaju", "/ochrana-osobnych-udajov",
  "/calculator", "/kalkulacka", "/configurator", "/konfigurator",
];

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