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
  configurator: {
    EN: "configurator",
    CZ: "konfigurator",
    SK: "konfigurator",
  },

  privacy: {
    EN: "privacy-policy",
    CZ: "ochrana-osobnich-udaju",
    SK: "ochrana-osobnych-udajov",
  },
  
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
    CZ: "nase-prace",
    SK: "nase-prace",
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

// Service detail slug translations
export const serviceDetailSlugs: Record<
  string,
  Record<Language, string>
> = {
  buildingWebsite: {
    EN: "building-website",
    CZ: "tvorba-webstranek",
    SK: "tvorba-webstranok",
  },
  ecommerceWebsite: {
    EN: "ecommerce-website",
    CZ: "tvorba-eshopu",
    SK: "tvorba-eshopu",
  },
  seo: {
    EN: "seo",
    CZ: "seo",
    SK: "seo",
  },
  ppc: {
    EN: "ppc",
    CZ: "ppc",
    SK: "ppc",
  },
  digitalization: {
    EN: "digitalization-and-automation",
    CZ: "digitalizace-a-automatizace-procesu",
    SK: "digitalizacia-a-automatizacia-procesov",
  },
  graphicDesign: {
    EN: "graphic-design",
    CZ: "grafika",
    SK: "grafika",
  },
};

export const routes = (language: Language) => ({
  contact: buildPath(language, "contact"),
  work: buildPath(language, "work"),
  services: buildPath(language, "services"),
});

// Reverse lookup: find the base route from any translated slug
export const getBaseRouteFromSlug = (slug: string): string | undefined => {
  for (const [baseRoute, translations] of Object.entries(staticPageSlugs)) {
    if (Object.values(translations).includes(slug)) {
      return baseRoute;
    }
  }
  return undefined;
};

// Helper na generovanie ciest
export const buildPath = (language: Language, baseRoute: keyof typeof staticPageSlugs, detailSlug?: string) => {
  const base = staticPageSlugs[baseRoute][language];
  return detailSlug ? `/${base}/${detailSlug}` : `/${base}`;
};

export const servicePath = (language: Language, serviceKey: keyof typeof serviceDetailSlugs) => {
  const detail = serviceDetailSlugs[serviceKey][language];
  return buildPath(language, "services", detail);
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
  slugMappings?: Record<Language, string>
): string => {
  const targetDomain = domainConfig[targetLanguage];
  
  const mapped = slugMappings?.[targetLanguage];
  if (mapped) {
    // mapped býva napr "blog/xxx" alebo "kontakt"
    return `${targetDomain}/${mapped.replace(/^\/+/, "")}`;
  }

  const path = currentPath.replace(/^\//, "");
  const [first, second, ...rest] = path.split("/");

  // 1) prelož top-level slug (services/about/faq/...)
  const baseRoute = getBaseRouteFromSlug(first);
  const translatedFirst =
    baseRoute && staticPageSlugs[baseRoute]
      ? staticPageSlugs[baseRoute][targetLanguage]
      : first;

  // 2) ak sme v /services/<detail>, prelož aj detail slug podľa mapy
  if (baseRoute === "services" && second) {
    const serviceKey = (Object.keys(serviceDetailSlugs) as Array<
      keyof typeof serviceDetailSlugs
    >).find((key) => Object.values(serviceDetailSlugs[key]).includes(second));

    if (serviceKey) {
      const translatedSecond = serviceDetailSlugs[serviceKey][targetLanguage];
      return `${targetDomain}/${[translatedFirst, translatedSecond, ...rest].join("/")}`;
    }
  }

  return `${targetDomain}/${[translatedFirst, second, ...rest].filter(Boolean).join("/")}`;
};
