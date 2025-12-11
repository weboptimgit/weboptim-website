import { createContext, useContext, useState, ReactNode } from "react";

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
    "services.uiux": "UI/UX Design",
    "services.uiuxDesc": "Beautiful, intuitive interfaces",
    "services.mobile": "Mobile Apps",
    "services.mobileDesc": "Native and cross-platform apps",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Powerful online stores",
    "services.performance": "Performance",
    "services.performanceDesc": "Lightning-fast optimization",
    "services.security": "Security",
    "services.securityDesc": "Enterprise-grade protection",
    
    // Hero
    "hero.badge": "Crafting Digital Excellence",
    "hero.title1": "We build",
    "hero.title2": "websites",
    "hero.title3": "that convert",
    "hero.subtitle": "Transform your vision into stunning digital experiences. We design and develop websites that captivate users and drive real business results.",
    "hero.cta1": "Start Your Project",
    "hero.cta2": "Watch Showreel",
    "hero.happyClients": "happy clients",
    
    // Stats
    "stats.projects": "Projects Delivered",
    "stats.satisfaction": "Client Satisfaction",
    "stats.experience": "Years Experience",
    "stats.team": "Team Members",
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
    "services.uiux": "UI/UX Design",
    "services.uiuxDesc": "Krásná a intuitivní rozhraní",
    "services.mobile": "Mobilní aplikace",
    "services.mobileDesc": "Nativní a multiplatformní aplikace",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Výkonné e-shopy",
    "services.performance": "Výkon",
    "services.performanceDesc": "Bleskurychlá optimalizace",
    "services.security": "Bezpečnost",
    "services.securityDesc": "Podniková ochrana",
    
    // Hero
    "hero.badge": "Tvoříme digitální dokonalost",
    "hero.title1": "Tvoříme",
    "hero.title2": "weby",
    "hero.title3": "které prodávají",
    "hero.subtitle": "Proměňte svou vizi v úžasné digitální zážitky. Navrhujeme a vyvíjíme weby, které zaujmou uživatele a přinášejí skutečné obchodní výsledky.",
    "hero.cta1": "Zahájit projekt",
    "hero.cta2": "Přehrát ukázku",
    "hero.happyClients": "spokojených klientů",
    
    // Stats
    "stats.projects": "Dokončených projektů",
    "stats.satisfaction": "Spokojenost klientů",
    "stats.experience": "Let zkušeností",
    "stats.team": "Členů týmu",
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
    "services.uiux": "UI/UX Dizajn",
    "services.uiuxDesc": "Krásne a intuitívne rozhrania",
    "services.mobile": "Mobilné aplikácie",
    "services.mobileDesc": "Natívne a multiplatformové aplikácie",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Výkonné e-shopy",
    "services.performance": "Výkon",
    "services.performanceDesc": "Bleskurýchla optimalizácia",
    "services.security": "Bezpečnosť",
    "services.securityDesc": "Podniková ochrana",
    
    // Hero
    "hero.badge": "Tvoríme digitálnu dokonalosť",
    "hero.title1": "Tvoríme",
    "hero.title2": "weby",
    "hero.title3": "ktoré predávajú",
    "hero.subtitle": "Premeňte svoju víziu na úžasné digitálne zážitky. Navrhujeme a vyvíjame weby, ktoré zaujmú používateľov a prinášajú skutočné obchodné výsledky.",
    "hero.cta1": "Začať projekt",
    "hero.cta2": "Prehrať ukážku",
    "hero.happyClients": "spokojných klientov",
    
    // Stats
    "stats.projects": "Dokončených projektov",
    "stats.satisfaction": "Spokojnosť klientov",
    "stats.experience": "Rokov skúseností",
    "stats.team": "Členov tímu",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("EN");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
