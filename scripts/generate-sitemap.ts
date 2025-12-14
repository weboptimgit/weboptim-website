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

const urlEntry = (paths: Record<Lang, string>) => {
  const loc = `${domains.EN}${paths.EN}`;
  return `  <url>
    <loc>${esc(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${esc(domains.EN + paths.EN)}"/>
    <xhtml:link rel="alternate" hreflang="cs" href="${esc(domains.CZ + paths.CZ)}"/>
    <xhtml:link rel="alternate" hreflang="sk" href="${esc(domains.SK + paths.SK)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(domains.EN + paths.EN)}"/>
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

// vygeneruj statické
const staticEntries = Object.values(staticPages).map(urlEntry);

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
            EN: `${staticPageSlugs.blog.EN}/${enSlug}`,
            CZ: `${staticPageSlugs.blog.CZ}/${czSlug}`,
            SK: `${staticPageSlugs.blog.SK}/${skSlug}`,
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
