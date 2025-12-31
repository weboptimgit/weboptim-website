/**
 * Generate all routes for prerendering
 * Run with: npx tsx scripts/generate-routes.ts
 */

import { blogPostsData } from "../src/data/blog-posts";
import { caseStudiesData } from "../src/data/case-studies";
import { glossaryTermsData } from "../src/data/glossary-terms";
import * as fs from "fs";
import * as path from "path";

// Static routes
const staticRoutes = [
  "/",
  // Services - EN
  "/services", "/services/building-website", "/services/ecommerce-website",
  "/services/seo", "/services/ppc", "/services/digitalization-and-automation", "/services/graphic-design",
  // Services - CZ
  "/sluzby", "/sluzby/tvorba-webstranek", "/sluzby/tvorba-eshopu",
  "/sluzby/seo", "/sluzby/ppc", "/sluzby/digitalizace-a-automatizace-procesu", "/sluzby/grafika",
  // Services - SK
  "/sluzby/tvorba-webstranok", "/sluzby/digitalizacia-a-automatizacia-procesov",
  // Other pages - EN
  "/contact", "/about", "/work", "/faq", "/glossary", "/blog",
  "/privacy-policy", "/calculator", "/configurator",
  // Other pages - CZ
  "/kontakt", "/o-nas", "/nase-prace", "/caste-dotazy", "/slovnik",
  "/ochrana-osobnich-udaju", "/kalkulacka", "/konfigurator",
  // Other pages - SK
  "/caste-otazky", "/ochrana-osobnych-udajov",
];

// Generate blog routes
const blogRoutes: string[] = [];
blogPostsData.forEach((post) => {
  // EN
  blogRoutes.push(`/blog/${post.translations.EN.slug}`);
  // CZ
  blogRoutes.push(`/blog/${post.translations.CZ.slug}`);
  // SK
  blogRoutes.push(`/blog/${post.translations.SK.slug}`);
});

// Generate case study routes
const caseStudyRoutes: string[] = [];
Object.values(caseStudiesData).forEach((caseStudy) => {
  // EN
  if (caseStudy.translations.EN) {
    caseStudyRoutes.push(`/work/${caseStudy.translations.EN.slug}`);
  }
  // CZ
  if (caseStudy.translations.CZ) {
    caseStudyRoutes.push(`/nase-prace/${caseStudy.translations.CZ.slug}`);
  }
  // SK
  if (caseStudy.translations.SK) {
    caseStudyRoutes.push(`/nase-prace/${caseStudy.translations.SK.slug}`);
  }
});

// Generate glossary routes
const glossaryRoutes: string[] = [];
Object.values(glossaryTermsData).forEach((term) => {
  // EN
  glossaryRoutes.push(`/glossary/${term.slugs.EN}`);
  // CZ
  glossaryRoutes.push(`/slovnik/${term.slugs.CZ}`);
  // SK
  glossaryRoutes.push(`/slovnik/${term.slugs.SK}`);
});

// Combine and dedupe all routes
const allRoutes = [...new Set([
  ...staticRoutes,
  ...blogRoutes,
  ...caseStudyRoutes,
  ...glossaryRoutes,
])];

// Output as JSON
const outputPath = path.resolve(__dirname, "../src/data/prerender-routes.json");
fs.writeFileSync(outputPath, JSON.stringify(allRoutes, null, 2));

console.log(`Generated ${allRoutes.length} routes to ${outputPath}`);
console.log(`- Static: ${staticRoutes.length}`);
console.log(`- Blog: ${blogRoutes.length}`);
console.log(`- Case Studies: ${caseStudyRoutes.length}`);
console.log(`- Glossary: ${glossaryRoutes.length}`);
