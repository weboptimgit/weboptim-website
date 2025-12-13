import { Language } from "@/contexts/LanguageContext";

// Domain configuration for multi-language support
export const domainConfig: Record<Language, string> = {
  EN: "https://test.weboptim.eu",
  CZ: "https://test.weboptim.cz",
  SK: "https://test.weboptim.sk",
};

// Reverse mapping: domain -> language
export const domainToLanguage: Record<string, Language> = {
  // TEST / STAGING
  "test.weboptim.eu": "EN",
  "test.weboptim.cz": "CZ",
  "test.weboptim.sk": "SK",

  // PRODUCTION (neskôr)
  "weboptim.eu": "EN",
  "www.weboptim.eu": "EN",
  "weboptim.cz": "CZ",
  "www.weboptim.cz": "CZ",
  "weboptim.sk": "SK",
  "www.weboptim.sk": "SK",

  // Local dev
  localhost: "EN",
  "127.0.0.1": "EN",
};

// Static page slug translations
// Key is the base route identifier, values are the translated slugs for each language
export const staticPageSlugs: Record<string, Record<Language, string>> = {
  contact: {
    EN: "contact",
    CZ: "kontakt",
    SK: "kontakt",
  },
  about: {
    EN: "about",
    CZ: "o-nas",
    SK: "o-nas",
  },
  services: {
    EN: "services",
    CZ: "sluzby",
    SK: "sluzby",
  },
  work: {
    EN: "work",
    CZ: "portfolio",
    SK: "portfolio",
  },
  blog: {
    EN: "blog",
    CZ: "blog",
    SK: "blog",
  },
  faq: {
    EN: "faq",
    CZ: "caste-dotazy",
    SK: "caste-otazky",
  },
  glossary: {
    EN: "glossary",
    CZ: "slovnik",
    SK: "slovnik",
  },
};

// Reverse lookup: find the base route from any translated slug
export const getBaseRouteFromSlug = (slug: string): string | undefined => {
  for (const [baseRoute, translations] of Object.entries(staticPageSlugs)) {
    if (Object.values(translations).includes(slug)) {
      return baseRoute;
    }
  }
  return undefined;
};

// Get language from current domain
export const getLanguageFromDomain = (): Language => {
  const hostname = window.location.hostname;

  // Check for exact match first
  if (domainToLanguage[hostname]) {
    return domainToLanguage[hostname];
  }

  // Check for subdomain match (e.g., www.weboptim.cz)
  for (const [domain, lang] of Object.entries(domainToLanguage)) {
    if (hostname.endsWith(domain) || hostname.includes(domain)) {
      return lang;
    }
  }

  // Default to English
  return "EN";
};

// Get the target URL for language switch with translated slug
export const getLanguageSwitchUrl = (
  targetLanguage: Language,
  currentPath: string,
  slugMappings?: Record<Language, string>,
): string => {
  const targetDomain = domainConfig[targetLanguage];

  // If we have slug mappings (for blog posts, case studies, etc.)
  if (slugMappings) {
    const translatedSlug = slugMappings[targetLanguage];
    if (translatedSlug) {
      return `${targetDomain}/${translatedSlug}`;
    }
  }

  // For pages without slug translations, just use the same path
  return `${targetDomain}${currentPath}`;
};
