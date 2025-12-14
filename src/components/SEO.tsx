import { useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { domainConfig, getLanguageSwitchUrl } from "@/config/domains";

interface SEOProps {
  titleKey?: string;
  descriptionKey?: string;
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  jsonLd?: object | object[];
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
      description:
        "Discover WebOptim’s story, values and team. We specialize in high-performance websites, e-commerce solutions and SEO strategies that deliver measurable results.",
    },
    CZ: {
      title: "O nás | WebOptim",
      description:
        "Poznejte příběh WebOptim, naše hodnoty a tým. Specializujeme se na výkonné weby, e-shopy a SEO řešení, která přinášejí měřitelné výsledky.",
    },
    SK: {
      title: "O nás | WebOptim ",
      description:
        "Spoznajte príbeh WebOptim, naše hodnoty a tím. Špecializujeme sa na výkonné weby, e-shopy a SEO riešenia, ktoré prinášajú merateľné výsledky.",
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

// Helper to generate Organization schema
export const getOrganizationSchema = (language: Language) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebOptim",
  legalName: "Smart Coach s.r.o.",
  url: domainConfig[language],
  logo: `${domainConfig[language]}/lovable-uploads/2af30195-bf84-46f5-b4a1-73a8df44bebb.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Příčná 1892/4",
    addressLocality: "Praha",
    postalCode: "110 00",
    addressCountry: "CZ",
  },
  sameAs: [],
});

// Helper to generate WebSite schema
export const getWebSiteSchema = (language: Language) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebOptim",
  url: domainConfig[language],
  inLanguage: language === "CZ" ? "cs" : language === "SK" ? "sk" : "en",
});

// Kontakt schema
export const getContactPageSchema = (args: {
  language: Language;
  canonicalUrl: string;
  telephone: string;
  email: string;
  contactType: string;
  availableLanguage: string[]; // napr ["en","cs","sk"]
}) => {
  const base = domainConfig[args.language];
  const org = getOrganizationSchema(args.language);

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${args.canonicalUrl}#contact`,
    url: args.canonicalUrl,
    mainEntity: {
      ...org,
      "@id": `${base}/#organization`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: args.telephone,
        email: args.email,
        contactType: args.contactType,
        availableLanguage: args.availableLanguage,
      },
    },
  };
};

// Case study detail schema
export const getCaseStudySchema = (args: {
  canonicalUrl: string;
  language: Language;
  title: string;
  description: string;
  image?: string;
  projectUrl?: string;
  technologies?: string[];
  client?: string;
  year?: string;
}) => {
  const base = domainConfig[args.language];

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${args.canonicalUrl}#case-study`,
    url: args.canonicalUrl,
    name: args.title,
    description: args.description,
    image: args.image ? [args.image] : undefined,
    inLanguage:
      args.language === "CZ"
        ? "cs"
        : args.language === "SK"
        ? "sk"
        : "en",
    creator: {
      "@type": "Organization",
      name: "WebOptim",
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: "WebOptim",
      url: base,
    },
    sameAs: args.projectUrl ? [args.projectUrl] : undefined,
    keywords: args.technologies?.join(", "),
    about: [
      args.client ? `Client: ${args.client}` : null,
      args.year ? `Year: ${args.year}` : null,
    ].filter(Boolean),
  };
};

// helper len pre About page
export const getAboutPageSchema = (language: Language, canonicalUrl: string) => {
  const base = domainConfig[language];

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonicalUrl}#about`,
    url: canonicalUrl,
    name: getSEOData("about", language)?.title || "O nás | WebOptim",
    description: getSEOData("about", language)?.description || "",
    about: {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: "WebOptim",
      legalName: "Smart Coach s.r.o.",
      url: base,
      logo: `${base}/lovable-uploads/2af30195-bf84-46f5-b4a1-73a8df44bebb.png`,
      knowsAbout: [
        "Webové stránky",
        "E-shopy",
        "SEO",
        "Technické SEO",
        "Digitalizácia"
      ]
    }
  };
};

export const getServicePageSchema = (args: {
  language: Language;
  canonicalUrl: string;
  serviceName: string;        // napr. "Tvorba webových stránok"
  serviceDescription: string; // krátky popis (z bw.seo.description)
  image?: string;             // voliteľne OG image
}) => {
  const base = domainConfig[args.language];
  const orgId = `${base}/#organization`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${args.canonicalUrl}#service`,
    name: args.serviceName,
    description: args.serviceDescription,
    url: args.canonicalUrl,
    provider: { "@id": orgId },
    areaServed: [
      {
        "@type": "Country",
        name: "Slovakia"
      },
      {
        "@type": "Country",
        name: "Czech Republic"
      },
      {
        "@type": "AdministrativeArea",
        name: "Europe"
      }
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: args.canonicalUrl,
      availableLanguage: [
        args.language === "CZ" ? "cs" : args.language === "SK" ? "sk" : "en"
      ]
    },
    image: args.image || `${base}/lovable-uploads/2af30195-bf84-46f5-b4a1-73a8df44bebb.png`
  };
};

// Helper to generate Article schema for blog posts
export const getArticleSchema = (post: {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
}, language: Language) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  author: {
    "@type": "Person",
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    name: "WebOptim",
    logo: {
      "@type": "ImageObject",
      url: `${domainConfig[language]}/lovable-uploads/2af30195-bf84-46f5-b4a1-73a8df44bebb.png`,
    },
  },
  datePublished: post.date,
  dateModified: post.date,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${domainConfig[language]}/blog/${post.slug}`,
  },
  keywords: post.tags.join(", "),
});

// Helper to generate FAQPage schema
export const getFAQSchema = (faqs: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
});

// Helper to map FAQ items from page contexts (question/answer → q/a)
export const mapFaqItems = (items: Array<{ question: string; answer: string }>) =>
  items.map((i) => ({ q: i.question, a: i.answer }));

// Helper to generate DefinedTerm schema for glossary
export const getDefinedTermSchema = (term: {
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  slug: string;
}, language: Language) => ({
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: term.term,
  description: term.fullDefinition,
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "WebOptim Glossary",
    url: `${domainConfig[language]}/glossary`,
  },
});

// Helper to generate BreadcrumbList schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

const SEO = ({ titleKey, descriptionKey, title, description, image, article = false, noindex = false, jsonLd }: SEOProps) => {
  const { language } = useLanguage();
  const seoData = titleKey ? getSEOData(titleKey, language) : null;
  const finalTitle = title || seoData?.title || "WebOptim";
  const finalDescription = description || seoData?.description || "";
  const currentDomain = domainConfig[language];
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const canonicalUrl = `${currentDomain}${currentPath}`;
  const defaultImage = `${currentDomain}/lovable-uploads/2af30195-bf84-46f5-b4a1-73a8df44bebb.png`;
  const finalImage = image || defaultImage;

  useEffect(() => {
    document.title = finalTitle;

    // <html lang="">
    const htmlLang = language === "CZ" ? "cs" : language === "SK" ? "sk" : "en";
    document.documentElement.setAttribute("lang", htmlLang);

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

    const setLink = (rel: string, href: string, additionalAttrs?: Record<string, string>) => {
      const selector = additionalAttrs
        ? `link[rel="${rel}"]${Object.entries(additionalAttrs).map(([k, v]) => `[${k}="${v}"]`).join("")}`
        : `link[rel="${rel}"]`;
      let link = document.querySelector(selector) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        if (additionalAttrs) {
          Object.entries(additionalAttrs).forEach(([key, value]) => link.setAttribute(key, value));
        }
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Basic meta
    setMeta("description", finalDescription);

    document.querySelectorAll('meta[name="robots"]').forEach(m => m.remove());
    document.querySelectorAll('meta[name="googlebot"]').forEach(m => m.remove());

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    const googlebot = document.createElement("meta");
    googlebot.name = "googlebot";
    googlebot.content = "noindex, nofollow";
    document.head.appendChild(googlebot);

    // Open Graph
    setMeta("og:title", finalTitle, true);
    setMeta("og:description", finalDescription, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", finalImage, true);
    setMeta("og:type", article ? "article" : "website", true);
    setMeta("og:site_name", "WebOptim", true);
    setMeta("og:locale", language === "CZ" ? "cs_CZ" : language === "SK" ? "sk_SK" : "en_US", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", finalTitle);
    setMeta("twitter:description", finalDescription);
    setMeta("twitter:image", finalImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const hrefEn = getLanguageSwitchUrl("EN", currentPath);
    const hrefCz = getLanguageSwitchUrl("CZ", currentPath);
    const hrefSk = getLanguageSwitchUrl("SK", currentPath);

    setLink("alternate", hrefEn, { hreflang: "en" });
    setLink("alternate", hrefCz, { hreflang: "cs" });
    setLink("alternate", hrefSk, { hreflang: "sk" });
    setLink("alternate", hrefEn, { hreflang: "x-default" });

    // JSON-LD
    document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => script.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => script.remove());
    };
  }, [finalTitle, finalDescription, canonicalUrl, finalImage, article, language, jsonLd, currentPath]);

  return null;
};

export default SEO;
