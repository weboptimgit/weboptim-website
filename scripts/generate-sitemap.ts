import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { blogPostsData, categorySlugTranslations, getAuthorSlug } from "../src/data/blog-posts";
import { glossaryTermsData } from "../src/data/glossary-terms";
import { caseStudiesData } from "../src/data/case-studies";
import { staticPageSlugs, serviceDetailSlugs } from "../src/config/domains";

const domains = {
  EN: "https://www.weboptim.eu",
  CZ: "https://www.weboptim.cz",
  SK: "https://www.weboptim.sk",
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

const urlEntry = (paths: Record<Lang, string>, primaryLang: Lang = "EN") => {
  const enPath = normalize(paths.EN);
  const czPath = normalize(paths.CZ);
  const skPath = normalize(paths.SK);

  const pathMap: Record<Lang, string> = { EN: enPath, CZ: czPath, SK: skPath };
  const loc = `${domains[primaryLang]}${pathMap[primaryLang]}`;

  return `  <url>
    <loc>${esc(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${esc(domains.EN + enPath)}" />
    <xhtml:link rel="alternate" hreflang="cs" href="${esc(domains.CZ + czPath)}" />
    <xhtml:link rel="alternate" hreflang="sk" href="${esc(domains.SK + skPath)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(domains.EN + enPath)}" />
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
   2b) BLOG CATEGORIES
--------------------------- */

// Get unique base category slugs (only the primary keys, not the reverse mappings)
const baseCategorySlugs = ["online-marketing", "webs-and-e-shops", "ai-artificial-intelligence"];

const blogCategoryEntries =
  staticPageSlugs.blog?.EN && staticPageSlugs.blog?.CZ && staticPageSlugs.blog?.SK
    ? baseCategorySlugs
        .map((baseSlug) => {
          const mapping = categorySlugTranslations[baseSlug];
          if (!mapping?.EN || !mapping?.CZ || !mapping?.SK) {
            console.log(`⚠️ Missing categorySlugTranslations for: ${baseSlug}`);
            return null;
          }

          return urlEntry({
            EN: joinPath(staticPageSlugs.blog.EN, mapping.EN),
            CZ: joinPath(staticPageSlugs.blog.CZ, mapping.CZ),
            SK: joinPath(staticPageSlugs.blog.SK, mapping.SK),
          });
        })
        .filter(Boolean) as string[]
    : (console.log("⚠️ staticPageSlugs.blog is missing for categories"), []);

/* --------------------------
   2c) BLOG AUTHORS
--------------------------- */

// Get unique authors from blog posts
const uniqueAuthors = [...new Set(blogPostsData.map((post) => post.author))];

const blogAuthorEntries =
  staticPageSlugs.blog?.EN && staticPageSlugs.blog?.CZ && staticPageSlugs.blog?.SK
    ? uniqueAuthors
        .map((author) => {
          const authorSlug = getAuthorSlug(author);
          if (!authorSlug) return null;

          // Author pages: EN uses "author", CZ/SK use "autor"
          return urlEntry({
            EN: joinPath(staticPageSlugs.blog.EN, `author/${authorSlug}`),
            CZ: joinPath(staticPageSlugs.blog.CZ, `autor/${authorSlug}`),
            SK: joinPath(staticPageSlugs.blog.SK, `autor/${authorSlug}`),
          });
        })
        .filter(Boolean) as string[]
    : (console.log("⚠️ staticPageSlugs.blog is missing for authors"), []);


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
   WRITE FILES (per domain)
--------------------------- */

export type GenerateSitemapsOptions = {
  /**
   * Directory where sitemap XML files should be written.
   *
   * Default: <projectRoot>/public
   */
  outDir?: string;
  /** Disable console output. */
  quiet?: boolean;
};

export function generateSitemaps(options: GenerateSitemapsOptions = {}) {
  const outDir = options.outDir ?? path.resolve(process.cwd(), "public");
  fs.mkdirSync(outDir, { recursive: true });

  // Generate sitemaps for each language/domain
  const languages: Lang[] = ["EN", "CZ", "SK"];
  const domainSuffixes: Record<Lang, string> = { EN: "eu", CZ: "cz", SK: "sk" };

  for (const lang of languages) {
    const suffix = domainSuffixes[lang];

    // Rebuild entries for this language as primary
    const langPagesEntries = Object.entries(staticPages)
      .map(([_, paths]) => {
        if (!paths?.EN || !paths?.CZ || !paths?.SK) return null;
        return urlEntry(paths, lang);
      })
      .filter(Boolean) as string[];

    const langBlogEntries =
      staticPageSlugs.blog?.EN && staticPageSlugs.blog?.CZ && staticPageSlugs.blog?.SK
        ? blogPostsData
            .map((post) => {
              const enSlug = post?.translations?.EN?.slug;
              const czSlug = post?.translations?.CZ?.slug;
              const skSlug = post?.translations?.SK?.slug;
              if (!enSlug || !czSlug || !skSlug) return null;
              return urlEntry(
                {
                  EN: joinPath(staticPageSlugs.blog.EN, enSlug),
                  CZ: joinPath(staticPageSlugs.blog.CZ, czSlug),
                  SK: joinPath(staticPageSlugs.blog.SK, skSlug),
                },
                lang
              );
            })
            .filter(Boolean) as string[]
        : [];

    const langCategoryEntries =
      staticPageSlugs.blog?.EN && staticPageSlugs.blog?.CZ && staticPageSlugs.blog?.SK
        ? baseCategorySlugs
            .map((baseSlug) => {
              const mapping = categorySlugTranslations[baseSlug];
              if (!mapping?.EN || !mapping?.CZ || !mapping?.SK) return null;
              return urlEntry(
                {
                  EN: joinPath(staticPageSlugs.blog.EN, mapping.EN),
                  CZ: joinPath(staticPageSlugs.blog.CZ, mapping.CZ),
                  SK: joinPath(staticPageSlugs.blog.SK, mapping.SK),
                },
                lang
              );
            })
            .filter(Boolean) as string[]
        : [];

    const langAuthorEntries =
      staticPageSlugs.blog?.EN && staticPageSlugs.blog?.CZ && staticPageSlugs.blog?.SK
        ? uniqueAuthors
            .map((author) => {
              const authorSlug = getAuthorSlug(author);
              if (!authorSlug) return null;
              return urlEntry(
                {
                  EN: joinPath(staticPageSlugs.blog.EN, `author/${authorSlug}`),
                  CZ: joinPath(staticPageSlugs.blog.CZ, `autor/${authorSlug}`),
                  SK: joinPath(staticPageSlugs.blog.SK, `autor/${authorSlug}`),
                },
                lang
              );
            })
            .filter(Boolean) as string[]
        : [];

    const langServicesEntries =
      staticPageSlugs.services?.EN && staticPageSlugs.services?.CZ && staticPageSlugs.services?.SK
        ? (Object.keys(serviceDetailSlugs) as Array<keyof typeof serviceDetailSlugs>)
            .map((key) => {
              const enSlug = serviceDetailSlugs[key]?.EN;
              const czSlug = serviceDetailSlugs[key]?.CZ;
              const skSlug = serviceDetailSlugs[key]?.SK;
              if (!enSlug || !czSlug || !skSlug) return null;
              return urlEntry(
                {
                  EN: joinPath(staticPageSlugs.services.EN, enSlug),
                  CZ: joinPath(staticPageSlugs.services.CZ, czSlug),
                  SK: joinPath(staticPageSlugs.services.SK, skSlug),
                },
                lang
              );
            })
            .filter(Boolean) as string[]
        : [];

    const langGlossaryEntries =
      staticPageSlugs.glossary?.EN && staticPageSlugs.glossary?.CZ && staticPageSlugs.glossary?.SK
        ? Object.values(glossaryTermsData)
            .map((term) => {
              const enSlug = term?.slugs?.EN;
              const czSlug = term?.slugs?.CZ;
              const skSlug = term?.slugs?.SK;
              if (!enSlug || !czSlug || !skSlug) return null;
              return urlEntry(
                {
                  EN: joinPath(staticPageSlugs.glossary.EN, enSlug),
                  CZ: joinPath(staticPageSlugs.glossary.CZ, czSlug),
                  SK: joinPath(staticPageSlugs.glossary.SK, skSlug),
                },
                lang
              );
            })
            .filter(Boolean) as string[]
        : [];

    const langCaseStudiesEntries =
      staticPageSlugs.work?.EN && staticPageSlugs.work?.CZ && staticPageSlugs.work?.SK
        ? Object.values(caseStudiesData)
            .map((study) => {
              const enSlug = study?.translations?.EN?.slug;
              const czSlug = study?.translations?.CZ?.slug || study?.translations?.EN?.slug;
              const skSlug = study?.translations?.SK?.slug || study?.translations?.EN?.slug;
              if (!enSlug) return null;
              return urlEntry(
                {
                  EN: joinPath(staticPageSlugs.work.EN, enSlug),
                  CZ: joinPath(staticPageSlugs.work.CZ, czSlug),
                  SK: joinPath(staticPageSlugs.work.SK, skSlug),
                },
                lang
              );
            })
            .filter(Boolean) as string[]
        : [];

    // Write domain-specific sitemaps
    const pagesPath = path.join(outDir, `sitemap-pages-${suffix}.xml`);
    const blogPath = path.join(outDir, `sitemap-blog-${suffix}.xml`);
    const servicesPath = path.join(outDir, `sitemap-services-${suffix}.xml`);
    const glossaryPath = path.join(outDir, `sitemap-glossary-${suffix}.xml`);
    const caseStudiesPath = path.join(outDir, `sitemap-case-studies-${suffix}.xml`);
    const indexPath = path.join(outDir, `sitemap-${suffix}.xml`);

    fs.writeFileSync(pagesPath, wrapUrlset(langPagesEntries), "utf8");
    fs.writeFileSync(blogPath, wrapUrlset([...langCategoryEntries, ...langAuthorEntries, ...langBlogEntries]), "utf8");
    fs.writeFileSync(servicesPath, wrapUrlset(langServicesEntries), "utf8");
    fs.writeFileSync(glossaryPath, wrapUrlset(langGlossaryEntries), "utf8");
    fs.writeFileSync(caseStudiesPath, wrapUrlset(langCaseStudiesEntries), "utf8");

    const today = new Date().toISOString().slice(0, 10);
    fs.writeFileSync(
      indexPath,
      sitemapIndexXml([
        { loc: `${domains[lang]}/sitemap-pages-${suffix}.xml`, lastmod: today },
        { loc: `${domains[lang]}/sitemap-blog-${suffix}.xml`, lastmod: today },
        { loc: `${domains[lang]}/sitemap-services-${suffix}.xml`, lastmod: today },
        { loc: `${domains[lang]}/sitemap-glossary-${suffix}.xml`, lastmod: today },
        { loc: `${domains[lang]}/sitemap-case-studies-${suffix}.xml`, lastmod: today },
      ]),
      "utf8"
    );

    if (!options.quiet) console.log(`✅ Sitemaps for ${domains[lang]} generated`);
  }

  // Also create sitemap.xml as default (points to EU)
  const defaultIndexPath = path.join(outDir, "sitemap.xml");
  const today = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(
    defaultIndexPath,
    sitemapIndexXml([
      { loc: `${domains.EN}/sitemap-pages-eu.xml`, lastmod: today },
      { loc: `${domains.EN}/sitemap-blog-eu.xml`, lastmod: today },
      { loc: `${domains.EN}/sitemap-services-eu.xml`, lastmod: today },
      { loc: `${domains.EN}/sitemap-glossary-eu.xml`, lastmod: today },
      { loc: `${domains.EN}/sitemap-case-studies-eu.xml`, lastmod: today },
    ]),
    "utf8"
  );

  if (!options.quiet) {
    console.log(`✅ Default sitemap.xml created`);
    console.log(`\n📁 Generated files:`);
    console.log(`   - sitemap-eu.xml, sitemap-cz.xml, sitemap-sk.xml (indexes)`);
    console.log(`   - sitemap-pages-{eu,cz,sk}.xml`);
    console.log(`   - sitemap-blog-{eu,cz,sk}.xml`);
    console.log(`   - sitemap-services-{eu,cz,sk}.xml`);
    console.log(`   - sitemap-glossary-{eu,cz,sk}.xml`);
    console.log(`   - sitemap-case-studies-{eu,cz,sk}.xml`);
  }
}

const isDirectRun = (() => {
  try {
    const thisFile = fileURLToPath(import.meta.url);
    const argvFile = process.argv[1] ? path.resolve(process.argv[1]) : "";
    return thisFile === argvFile;
  } catch {
    return false;
  }
})();

if (isDirectRun) {
  generateSitemaps();
}

