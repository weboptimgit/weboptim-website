import fs from "node:fs";
import path from "node:path";

import { blogPostsData } from "../src/data/blog-posts";
import { staticPageSlugs } from "../src/config/domains";

const domains = {
  EN: "https://test.weboptim.eu",
  CZ: "https://test.weboptim.cz",
  SK: "https://test.weboptim.sk",
} as const;

type Lang = keyof typeof domains; // "EN" | "CZ" | "SK"

// XML escape
const esc = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

/**
 * Normalizuj URL PATH:
 * - vždy začne /
 * - root je presne "/"
 * - žiadny trailing slash na konci (okrem "/")
 * - odstráni duplicitné //
 */
const normalize = (p: string) => {
  if (!p) return "/";
  let out = p.startsWith("/") ? p : `/${p}`;

  // zjednoť // -> /
  out = out.replace(/\/{2,}/g, "/");

  // root nechaj
  if (out === "/") return "/";

  // odstráň trailing slash
  out = out.replace(/\/+$/, "");

  return out;
};

const urlEntry = (paths: Record<Lang, string>) => {
  const enPath = normalize(paths.EN);
  const czPath = normalize(paths.CZ);
  const skPath = normalize(paths.SK);

  const loc = `${domains.EN}${enPath}`;

  return `  <url>
    <loc>${esc(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${esc(domains.EN + enPath)}"/>
    <xhtml:link rel="alternate" hreflang="cs" href="${esc(domains.CZ + czPath)}"/>
    <xhtml:link rel="alternate" hreflang="sk" href="${esc(domains.SK + skPath)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(domains.EN + enPath)}"/>
  </url>`;
};

// --- STATIC PAGES ---
const staticPages: Record<string, Record<Lang, string> | undefined> = {
  home: { EN: "/", CZ: "/", SK: "/" },

  about: staticPageSlugs.about,
  contact: staticPageSlugs.contact,
  services: staticPageSlugs.services,
  work: staticPageSlugs.work,
  blog: staticPageSlugs.blog,
  faq: staticPageSlugs.faq,
  glossary: staticPageSlugs.glossary,
  calculator: staticPageSlugs.calculator,
};

// vygeneruj statické (len tie, čo existujú)
const staticEntries = Object.entries(staticPages)
  .map(([key, paths]) => {
    if (!paths?.EN || !paths?.CZ || !paths?.SK) {
      console.log(`⚠️ Missing staticPageSlugs mapping for: ${key}`);
      return null;
    }
    return urlEntry(paths);
  })
  .filter(Boolean) as string[];

/**
 * Spoj base + slug do jednej path bez trailing slash:
 * base="blog", slug="my-post" => "/blog/my-post"
 */
const joinPath = (base: string, slug: string) => {
  const b = (base ?? "").replace(/^\/+|\/+$/g, "");
  const s = (slug ?? "").replace(/^\/+|\/+$/g, "");
  return normalize(`/${b}/${s}`);
};

// --- BLOG POSTS ---
const blogEntries =
  staticPageSlugs.blog?.EN && staticPageSlugs.blog?.CZ && staticPageSlugs.blog?.SK
    ? blogPostsData
        .map((post) => {
          const enSlug = post?.translations?.EN?.slug;
          const czSlug = post?.translations?.CZ?.slug;
          const skSlug = post?.translations?.SK?.slug;

          if (!enSlug || !czSlug || !skSlug) return null;

          return urlEntry({
            EN: joinPath(staticPageSlugs.blog.EN, enSlug),
            CZ: joinPath(staticPageSlugs.blog.CZ, czSlug),
            SK: joinPath(staticPageSlugs.blog.SK, skSlug),
          });
        })
        .filter(Boolean) as string[]
    : (console.log("⚠️ staticPageSlugs.blog is missing"), []);

// FINAL XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticEntries.join("\n")}
${blogEntries.length ? "\n" + blogEntries.join("\n") : ""}
</urlset>
`;

const outPath = path.resolve(process.cwd(), "public/sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");

console.log(`✅ sitemap.xml generated: ${outPath}`);
console.log(`   static: ${staticEntries.length}`);
console.log(`   blog: ${blogEntries.length}`);
