import { useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { domainConfig } from "@/config/domains";

interface SEOProps {
  titleKey?: string;
  descriptionKey?: string;
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
}

// SEO translations for all pages
const seoTranslations: Record<string, Record<Language, { title: string; description: string }>> = {
  home: {
    EN: {
      title: "WebOptim | Web Development & Digital Marketing Agency",
      description: "Transform your digital presence with WebOptim. We create stunning websites, boost SEO rankings, and deliver results-driven digital marketing solutions.",
    },
    CZ: {
      title: "WebOptim | Tvorba webů a digitální marketing",
      description: "Transformujte svou digitální přítomnost s WebOptim. Tvoříme úžasné weby, zlepšujeme SEO pozice a dodáváme výsledky v digitálním marketingu.",
    },
    SK: {
      title: "WebOptim | Tvorba webov a digitálny marketing",
      description: "Transformujte svoju digitálnu prítomnosť s WebOptim. Tvoríme úžasné weby, zlepšujeme SEO pozície a dodávame výsledky v digitálnom marketingu.",
    },
  },
  contact: {
    EN: {
      title: "Contact Us | WebOptim",
      description: "Get in touch with WebOptim. Let's discuss your project and transform your digital presence together.",
    },
    CZ: {
      title: "Kontakt | WebOptim",
      description: "Kontaktujte WebOptim. Pojďme společně probrat váš projekt a transformovat vaši digitální přítomnost.",
    },
    SK: {
      title: "Kontakt | WebOptim",
      description: "Kontaktujte WebOptim. Poďme spoločne prebrať váš projekt a transformovať vašu digitálnu prítomnosť.",
    },
  },
  about: {
    EN: {
      title: "About Us | WebOptim",
      description: "Learn about WebOptim - our story, values, and the team behind your digital success.",
    },
    CZ: {
      title: "O nás | WebOptim",
      description: "Poznejte WebOptim - náš příběh, hodnoty a tým, který stojí za vaším digitálním úspěchem.",
    },
    SK: {
      title: "O nás | WebOptim",
      description: "Spoznajte WebOptim - náš príbeh, hodnoty a tím, ktorý stojí za vaším digitálnym úspechom.",
    },
  },
  services: {
    EN: {
      title: "Our Services | WebOptim",
      description: "Explore our web development, SEO, and digital marketing services. Custom solutions for your business growth.",
    },
    CZ: {
      title: "Naše služby | WebOptim",
      description: "Prozkoumejte naše služby tvorby webů, SEO a digitálního marketingu. Řešení na míru pro růst vašeho podnikání.",
    },
    SK: {
      title: "Naše služby | WebOptim",
      description: "Preskúmajte naše služby tvorby webov, SEO a digitálneho marketingu. Riešenia na mieru pre rast vášho podnikania.",
    },
  },
  work: {
    EN: {
      title: "Our Work | WebOptim",
      description: "Browse our portfolio of successful projects. See how we've helped businesses achieve digital excellence.",
    },
    CZ: {
      title: "Portfolio | WebOptim",
      description: "Prohlédněte si naše portfolio úspěšných projektů. Podívejte se, jak jsme pomohli firmám dosáhnout digitální excelence.",
    },
    SK: {
      title: "Portfólio | WebOptim",
      description: "Prezrite si naše portfólio úspešných projektov. Pozrite sa, ako sme pomohli firmám dosiahnuť digitálnu excelenciu.",
    },
  },
  blog: {
    EN: {
      title: "Blog | WebOptim",
      description: "Read our latest articles on web development, SEO tips, and digital marketing insights.",
    },
    CZ: {
      title: "Blog | WebOptim",
      description: "Čtěte naše nejnovější články o tvorbě webů, SEO tipech a poznatcích z digitálního marketingu.",
    },
    SK: {
      title: "Blog | WebOptim",
      description: "Čítajte naše najnovšie články o tvorbe webov, SEO tipoch a poznatkoch z digitálneho marketingu.",
    },
  },
  faq: {
    EN: {
      title: "FAQ | WebOptim",
      description: "Find answers to frequently asked questions about our web development and digital marketing services.",
    },
    CZ: {
      title: "Časté dotazy | WebOptim",
      description: "Najděte odpovědi na často kladené otázky o našich službách tvorby webů a digitálního marketingu.",
    },
    SK: {
      title: "Časté otázky | WebOptim",
      description: "Nájdite odpovede na často kladené otázky o našich službách tvorby webov a digitálneho marketingu.",
    },
  },
  glossary: {
    EN: {
      title: "Glossary | WebOptim",
      description: "Learn key web development and digital marketing terms in our comprehensive glossary.",
    },
    CZ: {
      title: "Slovník | WebOptim",
      description: "Naučte se klíčové pojmy z tvorby webů a digitálního marketingu v našem komplexním slovníku.",
    },
    SK: {
      title: "Slovník | WebOptim",
      description: "Naučte sa kľúčové pojmy z tvorby webov a digitálneho marketingu v našom komplexnom slovníku.",
    },
  },
  notFound: {
    EN: {
      title: "Page Not Found | WebOptim",
      description: "The page you're looking for doesn't exist. Return to the homepage.",
    },
    CZ: {
      title: "Stránka nenalezena | WebOptim",
      description: "Stránka, kterou hledáte, neexistuje. Vraťte se na domovskou stránku.",
    },
    SK: {
      title: "Stránka nenájdená | WebOptim",
      description: "Stránka, ktorú hľadáte, neexistuje. Vráťte sa na domovskú stránku.",
    },
  },
};

export const getSEOData = (key: string, language: Language) => {
  return seoTranslations[key]?.[language] || seoTranslations[key]?.EN;
};

const SEO = ({ titleKey, descriptionKey, title, description, image, article = false, noindex = false }: SEOProps) => {
  const { language } = useLanguage();
  
  const seoData = titleKey ? getSEOData(titleKey, language) : null;
  const finalTitle = title || seoData?.title || "WebOptim";
  const finalDescription = description || seoData?.description || "";
  const currentDomain = domainConfig[language];
  const currentUrl = typeof window !== "undefined" ? window.location.href : currentDomain;
  const defaultImage = `${currentDomain}/lovable-uploads/2af30195-bf84-46f5-b4a1-73a8df44bebb.png`;
  const finalImage = image || defaultImage;

  useEffect(() => {
    // Set document title
    document.title = finalTitle;

    // Helper to set or create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    setMeta("description", finalDescription);
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph tags
    setMeta("og:title", finalTitle, true);
    setMeta("og:description", finalDescription, true);
    setMeta("og:url", currentUrl, true);
    setMeta("og:image", finalImage, true);
    setMeta("og:type", article ? "article" : "website", true);
    setMeta("og:site_name", "WebOptim", true);
    setMeta("og:locale", language === "CZ" ? "cs_CZ" : language === "SK" ? "sk_SK" : "en_US", true);

    // Twitter Card tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", finalTitle);
    setMeta("twitter:description", finalDescription);
    setMeta("twitter:image", finalImage);

    // Set canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    // Cleanup function is not strictly necessary as we're updating, not removing
  }, [finalTitle, finalDescription, currentUrl, finalImage, article, noindex, language]);

  return null;
};

export default SEO;
