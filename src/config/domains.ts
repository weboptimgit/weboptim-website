import { Language } from "@/contexts/LanguageContext";

// Domain configuration for multi-language support
export const domainConfig: Record<Language, string> = {
  EN: "https://weboptim.eu",
  CZ: "https://weboptim.cz",
  SK: "https://weboptim.sk",
};

// Reverse mapping: domain -> language
export const domainToLanguage: Record<string, Language> = {
  "weboptim.eu": "EN",
  "weboptim.cz": "CZ",
  "weboptim.sk": "SK",
  // Development fallbacks
  "localhost": "EN",
  "127.0.0.1": "EN",
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
  
  // If we have slug mappings (for blog posts, case studies, etc.)
  if (slugMappings) {
    const translatedSlug = slugMappings[targetLanguage];
    if (translatedSlug) {
      // Extract the base path (e.g., /blog/ from /blog/some-slug)
      const pathParts = currentPath.split("/").filter(Boolean);
      if (pathParts.length >= 2) {
        const basePath = pathParts[0]; // e.g., "blog"
        return `${targetDomain}/${basePath}/${translatedSlug}`;
      }
    }
  }
  
  // For pages without slug translations, just use the same path
  return `${targetDomain}${currentPath}`;
};
