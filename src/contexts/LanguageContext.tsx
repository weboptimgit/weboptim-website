import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getLanguageFromDomain } from "@/config/domains";

export type Language = "EN" | "CZ" | "SK";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Glossary",
    "nav.contact": "Contact",
    "nav.startProject": "Start Project",
    "nav.viewAllServices": "View All Services",

    // Services dropdown
    "services.webDev": "Web Development",
    "services.webDevDesc": "Custom websites with cutting-edge tech",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Powerful online stores",
    "services.seo": "SEO Services",
    "services.seoDesc": "Keyword research & link building",
    "services.ppc": "PPC Advertising",
    "services.ppcDesc": "Google & social media ads",
    "services.digitalization": "Digitalization",
    "services.digitalizationDesc": "Business process automation",
    "services.graphic": "Graphic Design",
    "services.graphicDesc": "Digital and print graphics",

    // Hero
    "hero.badge": "Crafting Digital Excellence",
    "hero.title1": "We build",
    "hero.title2": "websites",
    "hero.title3": "that convert",
    "hero.subtitle":
      "Transform your vision into stunning digital experiences. We design and develop websites that captivate users and drive real business results.",
    "hero.cta1": "Start Your Project",
    "hero.cta2": "Watch Showreel",
    "hero.happyClients": "happy clients",

    // Stats
    "stats.projects": "Projects Delivered",
    "stats.satisfaction": "Client Satisfaction",
    "stats.experience": "Years Experience",
    "stats.team": "Team Members",

    //About us
    "about.title.before": "About",
    "about.title.highlight": "WebOptim",
  },
  CZ: {
    // Navbar
    "nav.services": "Služby",
    "nav.work": "Portfolio",
    "nav.about": "O nás",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Slovník",
    "nav.contact": "Kontakt",
    "nav.startProject": "Zahájit projekt",
    "nav.viewAllServices": "Zobrazit všechny služby",

    // Services dropdown
    "services.webDev": "Tvorba webu",
    "services.webDevDesc": "Weby na míru s nejnovějšími technologiemi",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Výkonné e-shopy",
    "services.seo": "SEO Služby",
    "services.seoDesc": "Analýza klíčových slov a linkbuilding",
    "services.ppc": "PPC Reklama",
    "services.ppcDesc": "Google a sociální reklamy",
    "services.digitalization": "Digitalizace",
    "services.digitalizationDesc": "Automatizace firemních procesů",
    "services.graphic": "Grafické práce",
    "services.graphicDesc": "Digitální a tištěná grafika",

    // Hero
    "hero.badge": "Tvoříme digitální dokonalost",
    "hero.title1": "Tvoříme",
    "hero.title2": "weby",
    "hero.title3": "které prodávají",
    "hero.subtitle":
      "Proměňte svou vizi v úžasné digitální zážitky. Navrhujeme a vyvíjíme weby, které zaujmou uživatele a přinášejí skutečné obchodní výsledky.",
    "hero.cta1": "Zahájit projekt",
    "hero.cta2": "Přehrát ukázku",
    "hero.happyClients": "spokojených klientů",

    // Stats
    "stats.projects": "Dokončených projektů",
    "stats.satisfaction": "Spokojenost klientů",
    "stats.experience": "Let zkušeností",
    "stats.team": "Členů týmu",

    //About us
    "about.title.before": "O",
    "about.title.highlight": "WebOptim",
  },
  SK: {
    // Navbar
    "nav.services": "Služby",
    "nav.work": "Portfólio",
    "nav.about": "O nás",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Slovník",
    "nav.contact": "Kontakt",
    "nav.startProject": "Začať projekt",
    "nav.viewAllServices": "Zobraziť všetky služby",

    // Services dropdown
    "services.webDev": "Tvorba webu",
    "services.webDevDesc": "Weby na mieru s najnovšími technológiami",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Výkonné e-shopy",
    "services.seo": "SEO Služby",
    "services.seoDesc": "Analýza kľúčových slov a linkbuilding",
    "services.ppc": "PPC Reklama",
    "services.ppcDesc": "Google a sociálne reklamy",
    "services.digitalization": "Digitalizácia",
    "services.digitalizationDesc": "Automatizácia firemných procesov",
    "services.graphic": "Grafické práce",
    "services.graphicDesc": "Digitálna a tlačená grafika",

    // Hero
    "hero.badge": "Tvoríme digitálnu dokonalosť",
    "hero.title1": "Tvoríme",
    "hero.title2": "weby",
    "hero.title3": "ktoré predávajú",
    "hero.subtitle":
      "Premeňte svoju víziu na úžasné digitálne zážitky. Navrhujeme a vyvíjame weby, ktoré zaujmú používateľov a prinášajú skutočné obchodné výsledky.",
    "hero.cta1": "Začať projekt",
    "hero.cta2": "Prehrať ukážku",
    "hero.happyClients": "spokojných klientov",

    // Stats
    "stats.projects": "Dokončených projektov",
    "stats.satisfaction": "Spokojnosť klientov",
    "stats.experience": "Rokov skúseností",
    "stats.team": "Členov tímu",

    //About us
    "about.title.before": "O",
    "about.title.highlight": "WebOptim",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from domain on first load
    return getLanguageFromDomain();
  });

  // Update language if domain changes (e.g., navigation)
  useEffect(() => {
    const detectedLanguage = getLanguageFromDomain();
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
