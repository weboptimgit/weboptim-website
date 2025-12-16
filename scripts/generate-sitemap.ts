import fs from "node:fs";
import path from "node:path";

import { blogPostsData } from "../src/data/blog-posts";
import { glossaryTermsData } from "../src/data/glossary-terms";
import { caseStudiesData } from "../src/data/case-studies";
import { staticPageSlugs, serviceDetailSlugs } from "../src/config/domains";

const domains = {
  EN: "https://test.weboptim.eu",
  CZ: "https://test.weboptim.cz",
  SK: "https://test.weboptim.sk",
} as const;

type Lang = keyof typeof domains;

// XML escape
const esc = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const normalize = (p: string) => {
  if (!p) return "/";
  let out = p.startsWith("/") ? p : `/${p}`;
  out = out.replace(/\/{2,}/g, "/");
  if (out === "/") return "/";
  out = out.replace(/\/+$/, "");
  return out;
};

/**
 * base="blog", slug="my-post" => "/blog/my-post"
 */
const joinPath = (base: string, slug: string) => {
  const b = (base ?? "").replace(/^\/+|\/+$/g, "");
  const s = (slug ?? "").replace(/^\/+|\/+$/g, "");
  return normalize(`/${b}/${s}`);
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

const wrapUrlset = (entries: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

const sitemapIndexXml = (sitemaps: { loc: string; lastmod?: string }[]) => `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (s) => `  <sitemap>
    <loc>${esc(s.loc)}</loc>${s.lastmod ? `\n    <lastmod>${esc(s.lastmod)}</lastmod>` : ""}
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>
`;

const today = new Date().toISOString().slice(0, 10);

/* --------------------------
   1) STATIC PAGES
--------------------------- */

const staticPages: Record<string, Record<Lang, string> | undefined> = {
  home: { EN: "/", CZ: "/", SK: "/" },

  about: staticPageSlugs.about,
  contact: staticPageSlugs.contact,
  services: staticPageSlugs.services,
  work: staticPageSlugs.work,
  blog: staticPageSlugs.blog,
  faq: staticPageSlugs.faq,
  glossary: staticPageSlugs.glossary,
  configurator: staticPageSlugs.configurator,
  privacy: staticPageSlugs.privacy,
};

const pagesEntries = Object.entries(staticPages)
  .map(([key, paths]) => {
    if (!paths?.EN || !paths?.CZ || !paths?.SK) {
      console.log(`⚠️ Missing staticPageSlugs mapping for: ${key}`);
      return null;
    }
    return urlEntry(paths);
  })
  .filter(Boolean) as string[];

/* --------------------------
   2) BLOG POSTS
--------------------------- */

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

/* --------------------------
   3) SERVICES (detail pages)
--------------------------- */

const servicesEntries =
  staticPageSlugs.services?.EN && staticPageSlugs.services?.CZ && staticPageSlugs.services?.SK
    ? (Object.keys(serviceDetailSlugs) as Array<keyof typeof serviceDetailSlugs>)
        .map((key) => {
          const enSlug = serviceDetailSlugs[key]?.EN;
          const czSlug = serviceDetailSlugs[key]?.CZ;
          const skSlug = serviceDetailSlugs[key]?.SK;

          if (!enSlug || !czSlug || !skSlug) {
            console.log(`⚠️ Missing serviceDetailSlugs mapping for: ${String(key)}`);
            return null;
          }

          return urlEntry({
            EN: joinPath(staticPageSlugs.services.EN, enSlug),
            CZ: joinPath(staticPageSlugs.services.CZ, czSlug),
            SK: joinPath(staticPageSlugs.services.SK, skSlug),
          });
        })
        .filter(Boolean) as string[]
    : (console.log("⚠️ staticPageSlugs.services is missing"), []);

/* --------------------------
   4) GLOSSARY TERMS
--------------------------- */

const glossaryEntries =
  staticPageSlugs.glossary?.EN && staticPageSlugs.glossary?.CZ && staticPageSlugs.glossary?.SK
    ? Object.values(glossaryTermsData)
        .map((term) => {
          const enSlug = term?.slugs?.EN;
          const czSlug = term?.slugs?.CZ;
          const skSlug = term?.slugs?.SK;

          if (!enSlug || !czSlug || !skSlug) return null;

          return urlEntry({
            EN: joinPath(staticPageSlugs.glossary.EN, enSlug),
            CZ: joinPath(staticPageSlugs.glossary.CZ, czSlug),
            SK: joinPath(staticPageSlugs.glossary.SK, skSlug),
          });
        })
        .filter(Boolean) as string[]
    : (console.log("⚠️ staticPageSlugs.glossary is missing"), []);

/* --------------------------
   5) CASE STUDIES (WORK/PORTFOLIO)
--------------------------- */

const caseStudiesEntries =
  staticPageSlugs.work?.EN && staticPageSlugs.work?.CZ && staticPageSlugs.work?.SK
    ? Object.values(caseStudiesData)
        .map((study) => {
          const enSlug = study?.translations?.EN?.slug;
          const czSlug = study?.translations?.CZ?.slug || study?.translations?.EN?.slug;
          const skSlug = study?.translations?.SK?.slug || study?.translations?.EN?.slug;

          if (!enSlug) return null;

          return urlEntry({
            EN: joinPath(staticPageSlugs.work.EN, enSlug),
            CZ: joinPath(staticPageSlugs.work.CZ, czSlug),
            SK: joinPath(staticPageSlugs.work.SK, skSlug),
          });
        })
        .filter(Boolean) as string[]
    : (console.log("⚠️ staticPageSlugs.work is missing"), []);

/* --------------------------
   WRITE FILES
--------------------------- */

const outDir = path.resolve(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });

const pagesPath = path.join(outDir, "sitemap-pages.xml");
const blogPath = path.join(outDir, "sitemap-blog.xml");
const servicesPath = path.join(outDir, "sitemap-services.xml");
const glossaryPath = path.join(outDir, "sitemap-glossary.xml");
const caseStudiesPath = path.join(outDir, "sitemap-case-studies.xml");
const indexPath = path.join(outDir, "sitemap.xml");

fs.writeFileSync(pagesPath, wrapUrlset(pagesEntries), "utf8");
fs.writeFileSync(blogPath, wrapUrlset(blogEntries), "utf8");
fs.writeFileSync(servicesPath, wrapUrlset(servicesEntries), "utf8");
fs.writeFileSync(glossaryPath, wrapUrlset(glossaryEntries), "utf8");
fs.writeFileSync(caseStudiesPath, wrapUrlset(caseStudiesEntries), "utf8");

// sitemap index
fs.writeFileSync(
  indexPath,
  sitemapIndexXml([
    { loc: `${domains.EN}/sitemap-pages.xml`, lastmod: today },
    { loc: `${domains.EN}/sitemap-blog.xml`, lastmod: today },
    { loc: `${domains.EN}/sitemap-services.xml`, lastmod: today },
    { loc: `${domains.EN}/sitemap-glossary.xml`, lastmod: today },
    { loc: `${domains.EN}/sitemap-case-studies.xml`, lastmod: today },
  ]),
  "utf8"
);

console.log(`✅ Sitemaps generated:`);
console.log(`   - sitemap-pages.xml (${pagesEntries.length} URLs)`);
console.log(`   - sitemap-blog.xml (${blogEntries.length} URLs)`);
console.log(`   - sitemap-services.xml (${servicesEntries.length} URLs)`);
console.log(`   - sitemap-glossary.xml (${glossaryEntries.length} URLs)`);
console.log(`   - sitemap-case-studies.xml (${caseStudiesEntries.length} URLs)`);
console.log(`   - sitemap.xml (index)`);
