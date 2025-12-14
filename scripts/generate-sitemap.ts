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

/**
 * base="blog", slug="my-post" => "/blog/my-post"
 */
const joinPath = (base: string, slug: string) => {
  const b = (base ?? "").replace(/^\/+|\/+$/g, "");
  const s = (slug ?? "").replace(/^\/+|\/+$/g, "");
  return normalize(`/${b}/${s}`);
};

/**
 * One URL entry, but <loc> is host-specific (EN/CZ/SK)
 * while alternates always point to their own domains.
 */
const urlEntryForHost = (host: Lang, paths: Record<Lang, string>) => {
  const enPath = normalize(paths.EN);
  const czPath = normalize(paths.CZ);
  const skPath = normalize(paths.SK);

  const hostPath = normalize(paths[host]);
  const loc = `${domains[host]}${hostPath}`;

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

// --------------------------
// 1) STATIC PAGES definitions
// --------------------------
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

// --------------------------
// Build entries per host
// --------------------------
const buildPagesEntries = (host: Lang) =>
  Object.entries(staticPages)
    .map(([key, paths]) => {
      if (!paths?.EN || !paths?.CZ || !paths?.SK) {
        console.log(`⚠️ Missing staticPageSlugs mapping for: ${key}`);
        return null;
      }
      return urlEntryForHost(host, paths);
    })
    .filter(Boolean) as string[];

const buildBlogEntries = (host: Lang) =>
  staticPageSlugs.blog?.EN && staticPageSlugs.blog?.CZ && staticPageSlugs.blog?.SK
    ? (blogPostsData
        .map((post) => {
          const enSlug = post?.translations?.EN?.slug;
          const czSlug = post?.translations?.CZ?.slug;
          const skSlug = post?.translations?.SK?.slug;
          if (!enSlug || !czSlug || !skSlug) return null;

          return urlEntryForHost(host, {
            EN: joinPath(staticPageSlugs.blog.EN, enSlug),
            CZ: joinPath(staticPageSlugs.blog.CZ, czSlug),
            SK: joinPath(staticPageSlugs.blog.SK, skSlug),
          });
        })
        .filter(Boolean) as string[])
    : (console.log("⚠️ staticPageSlugs.blog is missing"), []);

const buildServicesEntries = (host: Lang) =>
  staticPageSlugs.services?.EN && staticPageSlugs.services?.CZ && staticPageSlugs.services?.SK
    ? ((Object.keys(serviceDetailSlugs) as Array<keyof typeof serviceDetailSlugs>)
        .map((key) => {
          const enSlug = serviceDetailSlugs[key]?.EN;
          const czSlug = serviceDetailSlugs[key]?.CZ;
          const skSlug = serviceDetailSlugs[key]?.SK;

          if (!enSlug || !czSlug || !skSlug) {
            console.log(`⚠️ Missing serviceDetailSlugs mapping for: ${String(key)}`);
            return null;
          }

          return urlEntryForHost(host, {
            EN: joinPath(staticPageSlugs.services.EN, enSlug),
            CZ: joinPath(staticPageSlugs.services.CZ, czSlug),
            SK: joinPath(staticPageSlugs.services.SK, skSlug),
          });
        })
        .filter(Boolean) as string[])
    : (console.log("⚠️ staticPageSlugs.services is missing"), []);

// --------------------------
// WRITE FILES (same /public for all domains)
// --------------------------
const outDir = path.resolve(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });

const writeForHost = (host: Lang) => {
  const suffix = host.toLowerCase(); // en/cz/sk

  const pagesFile = `sitemap-pages-${suffix}.xml`;
  const blogFile = `sitemap-blog-${suffix}.xml`;
  const servicesFile = `sitemap-services-${suffix}.xml`;
  const indexFile = `sitemap-${suffix}.xml`;

  const pagesEntries = buildPagesEntries(host);
  const blogEntries = buildBlogEntries(host);
  const servicesEntries = buildServicesEntries(host);

  fs.writeFileSync(path.join(outDir, pagesFile), wrapUrlset(pagesEntries), "utf8");
  fs.writeFileSync(path.join(outDir, blogFile), wrapUrlset(blogEntries), "utf8");
  fs.writeFileSync(path.join(outDir, servicesFile), wrapUrlset(servicesEntries), "utf8");

  // Index must point to correct host, but filenames are same on FTP
  fs.writeFileSync(
    path.join(outDir, indexFile),
    sitemapIndexXml([
      { loc: `${domains[host]}/${pagesFile}`, lastmod: today },
      { loc: `${domains[host]}/${blogFile}`, lastmod: today },
      { loc: `${domains[host]}/${servicesFile}`, lastmod: today },
    ]),
    "utf8"
  );
};

writeForHost("EN");
writeForHost("CZ");
writeForHost("SK");
