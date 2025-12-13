// src/contexts/LanguageServices.tsx
import { createContext, useContext, type ReactNode } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

/* ---------- TYPES ---------- */

type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

type ServiceItem = {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  stats?: { value: string; label: string }[];
};

type ServicesLang = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  services: {
    webDev: ServiceItem;
    ecommerce: ServiceItem;
    seo: ServiceItem;
    ppc: ServiceItem;
    digitalization: ServiceItem;
    graphic: ServiceItem;
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
};

/* ---------- TRANSLATIONS ---------- */

const translations: Record<Language, ServicesLang> = {
  EN: {
    hero: {
      badge: "What We Offer",
      title: "Our Services",
      subtitle: "Comprehensive digital solutions tailored to your business needs.",
    },
    services: {
      webDev: {
        badge: "Most Popular",
        title: "Web Development",
        subtitle: "From idea to launch in record time",
        description:
          "Custom WordPress websites built with Oxygen Builder. Fast, scalable and optimized for results.",
        features: [
          "WordPress & Oxygen Builder",
          "Hand-coded themes",
          "Performance optimized",
          "99.9% uptime guarantee",
        ],
        stats: [
          { value: "100+", label: "Projects Delivered" },
          { value: "<1s", label: "Load Time" },
          { value: "100%", label: "Mobile-First" },
        ],
      },
      ecommerce: {
        title: "E-Commerce",
        description: "Powerful WooCommerce stores with seamless checkout experiences.",
        features: [
          "WooCommerce & Shoptet",
          "Custom checkout flows",
          "Payment integrations",
          "Inventory management",
        ],
      },
      seo: {
        title: "SEO Services",
        description: "Boost your search rankings and drive organic traffic.",
        features: ["Keyword research", "Link building", "Local SEO", "Technical SEO audits"],
      },
      ppc: {
        title: "PPC & Advertising",
        description: "Strategic paid campaigns that deliver measurable results.",
        features: ["Google Ads", "Social Ads", "Remarketing", "ROI tracking"],
      },
      digitalization: {
        title: "Digitalization",
        description: "Automate your business with modern tools and workflows.",
        features: ["CRM implementation", "Workflow automation", "Cloud integrations", "Process optimization"],
      },
      graphic: {
        title: "Graphic Design",
        description: "Eye-catching digital and print design that strengthens your brand.",
        features: ["Corporate identity", "Print & digital graphics", "Marketing materials", "Packaging design"],
      },
    },
    process: {
      title: "Our Process",
      subtitle: "A proven approach to delivering exceptional results",
      steps: [
        { step: "01", title: "Discovery", desc: "Understanding your goals and needs" },
        { step: "02", title: "Strategy", desc: "Planning the perfect solution" },
        { step: "03", title: "Development", desc: "Building with precision and care" },
        { step: "04", title: "Launch", desc: "Deploying and optimizing for success" },
      ],
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Let's discuss your project and find the perfect solution.",
      button: "Contact Us",
    },
  },

  SK: {
    hero: {
      badge: "Čo ponúkame",
      title: "Naše služby",
      subtitle: "Komplexné digitálne riešenia prispôsobené potrebám vášho biznisu.",
    },
    services: {
      webDev: {
        badge: "Najobľúbenejšie",
        title: "Tvorba webových stránok",
        subtitle: "Od nápadu po spustenie v rekordnom čase",
        description: "Webové stránky na mieru postavené na WordPress a Oxygen Builderi.",
        features: [
          "WordPress & Oxygen Builder",
          "Ručne kódované riešenia",
          "Optimalizácia výkonu",
          "99,9 % dostupnosť",
        ],
        stats: [
          { value: "100+", label: "Realizovaných projektov" },
          { value: "<1s", label: "Rýchlosť načítania" },
          { value: "100%", label: "Mobile-first" },
        ],
      },
      ecommerce: {
        title: "E-shop riešenia",
        description: "Výkonné WooCommerce e-shopy s dôrazom na konverzie.",
        features: ["WooCommerce & Shoptet", "Úprava pokladne", "Platobné brány", "Správa produktov"],
      },
      seo: {
        title: "SEO služby",
        description: "Zvýšime vašu viditeľnosť vo vyhľadávačoch.",
        features: ["Analýza kľúčových slov", "Linkbuilding", "Lokálne SEO", "Technický audit"],
      },
      ppc: {
        title: "PPC reklama",
        description: "Platené kampane, ktoré prinášajú výsledky.",
        features: ["Google Ads", "Sociálne siete", "Remarketing", "Meranie ROI"],
      },
      digitalization: {
        title: "Digitalizácia",
        description: "Automatizácia procesov a nasadenie moderných nástrojov.",
        features: ["CRM systémy", "Automatizácia procesov", "Cloud riešenia", "Optimalizácia workflow"],
      },
      graphic: {
        title: "Grafický dizajn",
        description: "Vizuály, ktoré podporujú vašu značku.",
        features: ["Firemná identita", "Online & print dizajn", "Marketingové materiály", "Obalový dizajn"],
      },
    },
    process: {
      title: "Ako pracujeme",
      subtitle: "Overený proces vedúci k výsledkom",
      steps: [
        { step: "01", title: "Analýza", desc: "Pochopenie cieľov a potrieb" },
        { step: "02", title: "Stratégia", desc: "Návrh riešenia" },
        { step: "03", title: "Realizácia", desc: "Precízna implementácia" },
        { step: "04", title: "Spustenie", desc: "Optimalizácia a rast" },
      ],
    },
    cta: {
      title: "Pripravení začať?",
      subtitle: "Poďme sa porozprávať o vašom projekte.",
      button: "Kontaktujte nás",
    },
  },

  CZ: {
    hero: {
      badge: "Co nabízíme",
      title: "Naše služby",
      subtitle: "Komplexní digitální řešení přizpůsobená potřebám vašeho podnikání.",
    },
    services: {
      webDev: {
        badge: "Nejoblíbenější",
        title: "Tvorba webových stránek",
        subtitle: "Od nápadu po spuštění v rekordním čase",
        description: "Webové stránky na míru postavené na WordPressu a Oxygen Builderu.",
        features: [
          "WordPress & Oxygen Builder",
          "Ručně kódovaná řešení",
          "Optimalizace výkonu",
          "99,9 % dostupnost",
        ],
        stats: [
          { value: "100+", label: "Realizovaných projektů" },
          { value: "<1s", label: "Rychlost načítání" },
          { value: "100%", label: "Mobile-first" },
        ],
      },
      ecommerce: {
        title: "E-shop řešení",
        description: "Výkonné WooCommerce e-shopy se zaměřením na konverze.",
        features: ["WooCommerce & Shoptet", "Úprava pokladny", "Platební brány", "Správa produktů"],
      },
      seo: {
        title: "SEO služby",
        description: "Zvýšíme vaši viditelnost ve vyhledávačích.",
        features: ["Analýza klíčových slov", "Linkbuilding", "Lokální SEO", "Technický audit"],
      },
      ppc: {
        title: "PPC reklama",
        description: "Placené kampaně, které přinášejí měřitelné výsledky.",
        features: ["Google Ads", "Sociální sítě", "Remarketing", "Měření ROI"],
      },
      digitalization: {
        title: "Digitalizace",
        description: "Automatizace procesů a nasazení moderních nástrojů.",
        features: ["CRM systémy", "Automatizace procesů", "Cloud řešení", "Optimalizace workflow"],
      },
      graphic: {
        title: "Grafický design",
        description: "Vizuály, které posílí vaši značku.",
        features: ["Firemní identita", "Online & print design", "Marketingové materiály", "Obalový design"],
      },
    },
    process: {
      title: "Jak pracujeme",
      subtitle: "Ověřený proces vedoucí k výsledkům",
      steps: [
        { step: "01", title: "Analýza", desc: "Pochopení cílů a potřeb" },
        { step: "02", title: "Strategie", desc: "Návrh řešení" },
        { step: "03", title: "Realizace", desc: "Precizní implementace" },
        { step: "04", title: "Spuštění", desc: "Optimalizace a růst" },
      ],
    },
    cta: {
      title: "Jste připraveni začít?",
      subtitle: "Pojďme probrat váš projekt a najít nejlepší řešení.",
      button: "Kontaktujte nás",
    },
  },
};

/* ---------- CONTEXT ---------- */

const ServicesLanguageContext = createContext<ServicesLang | null>(null);

export const ServicesLanguageProvider = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();

  // fallback keby niečo nesedelo
  const value = translations[language] ?? translations.EN;

  return <ServicesLanguageContext.Provider value={value}>{children}</ServicesLanguageContext.Provider>;
};

export const useServicesLang = () => {
  const ctx = useContext(ServicesLanguageContext);
  if (!ctx) throw new Error("useServicesLang must be used inside ServicesLanguageProvider");
  return ctx;
};
