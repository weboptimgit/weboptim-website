import fs from "node:fs";
import path from "node:path";

import { blogPostsData } from "../src/data/blog-posts";
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

const joinPath = (base: string, slug: string) => {
  const b = (base ?? "").replace(/^\/+|\/+$/g, "");
  const s = (slug ?? "").replace(/^\/+|\/+$/g, "");
  return normalize(`/${b}/${s}`);
};

const urlEntry = (paths: Record<Lang, string>) => {
  const enPath = normalize(paths.EN);
  const czPath = normalize(paths.CZ);
  const skPath = normalize(paths.SK);

  // loc nechávame na EN doméne (tak ako doteraz)
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

const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

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

/* --------------------------
   1) STATIC PAGES (pages)
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
   2) BLOG POSTS (blog)
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
   3) SERVICES (services)
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
   WRITE FILES
--------------------------- */

const outDir = path.resolve(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });

const pagesPath = path.join(outDir, "sitemap-pages.xml");
const blogPath = path.join(outDir, "sitemap-blog.xml");
const servicesPath = path.join(outDir, "sitemap-services.xml");
const indexPath = path.join(outDir, "sitemap.xml");

fs.writeFileSync(pagesPath, wrapUrlset(pagesEntries), "utf8");
fs.writeFileSync(blogPath, wrapUrlset(blogEntries), "utf8");
fs.writeFileSync(servicesPath, wrapUrlset(servicesEntries), "utf8");

// index (odkazuje na EN doméne, lebo to tak už používaš aj v <loc> vyššie)
fs.writeFileSync(
  indexPath,
  sitemapIndexXml([
    { loc: `${domains.EN}/sitemap-pages.xml`, lastmod: today },
    { loc: `${domains.EN}/sitemap-blog.xml`, lastmod: today },
    { loc: `${domains.EN}/sitemap-services.xml`, lastmod: today },
  ]),
  "utf8"
);
