import fs from "node:fs";
import path from "node:path";

import { blogPostsData } from "../src/data/blog-posts";
import { staticPageSlugs } from "../src/config/domains";

const domains = {
  EN: "https://www.weboptim.eu",
  CZ: "https://www.weboptim.cz",
  SK: "https://www.weboptim.sk",
} as const;

type Lang = keyof typeof domains;

const siteInfo = {
  EN: {
    title: "WebOptim Blog",
    description: "Latest articles about web development, SEO, e-commerce, and digital marketing",
    language: "en",
  },
  CZ: {
    title: "WebOptim Blog",
    description: "Nejnovější články o tvorbě webů, SEO, e-commerce a digitálním marketingu",
    language: "cs",
  },
  SK: {
    title: "WebOptim Blog",
    description: "Najnovšie články o tvorbe webov, SEO, e-commerce a digitálnom marketingu",
    language: "sk",
  },
};

// XML escape
const esc = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

// Convert date string to RFC 822 format
const toRFC822 = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toUTCString();
};

const generateRssFeed = (lang: Lang): string => {
  const domain = domains[lang];
  const info = siteInfo[lang];
  const blogBase = staticPageSlugs.blog?.[lang] || "blog";

  const items = blogPostsData
    .map((post) => {
      const translation = post.translations[lang];
      if (!translation?.slug) return null;

      const link = `${domain}/${blogBase}/${translation.slug}`;
      const pubDate = toRFC822(translation.date);

      return `    <item>
      <title>${esc(translation.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <description>${esc(translation.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>info@weboptim.eu (${esc(post.author)})</author>
      <category>${esc(translation.category)}</category>
      ${post.image ? `<enclosure url="${esc(post.image)}" type="image/jpeg" />` : ""}
    </item>`;
    })
    .filter(Boolean)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(info.title)}</title>
    <link>${domain}</link>
    <description>${esc(info.description)}</description>
    <language>${info.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${domain}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${domain}/favicon.svg</url>
      <title>${esc(info.title)}</title>
      <link>${domain}</link>
    </image>
${items}
  </channel>
</rss>`;
};

/* --------------------------
   WRITE FILES
--------------------------- */

const outDir = path.resolve(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });

// Generate RSS for each language
const languages: Lang[] = ["EN", "CZ", "SK"];

languages.forEach((lang) => {
  const filename = lang === "EN" ? "rss.xml" : `rss-${lang.toLowerCase()}.xml`;
  const rssPath = path.join(outDir, filename);
  const feed = generateRssFeed(lang);
  fs.writeFileSync(rssPath, feed, "utf8");
  console.log(`✅ RSS feed generated: ${filename}`);
});

// Also create feed.xml as alias for EN
fs.writeFileSync(path.join(outDir, "feed.xml"), generateRssFeed("EN"), "utf8");
console.log(`✅ RSS feed generated: feed.xml (EN alias)`);
