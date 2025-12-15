import React, { createContext, useContext } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type FooterLink = {
  name: string;
  href: string;
};

type FooterLang = {
  services: {
    title: string;
    links: FooterLink[];
  };
  company: {
    title: string;
    links: FooterLink[];
  };
  resources: {
    title: string;
    links: FooterLink[];
  };
  brand: {
    description: string;
  };
  bottom: {
    copyright: string;
    tagline: string;
  };
};

const translations: Record<string, FooterLang> = {
  EN: {
    services: {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/building-website" },
        { name: "E-Commerce", href: "/services/ecommerce-website" },
        { name: "SEO Services", href: "/services/seo" },
        { name: "PPC & Advertising", href: "/services/ppc" },
        { name: "Digitalization", href: "/services/digitalization" },
        { name: "Graphic Design", href: "/services/graphic-design" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Work", href: "/work" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Glossary", href: "/glossary" },
        { name: "Price Calculator", href: "/calculator" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    brand: {
      description:
        "Crafting exceptional digital experiences that help businesses grow and succeed in the modern world.",
    },
    bottom: {
      copyright: "© 2024 WebOptim. All rights reserved.",
      tagline: "Built with passion and precision.",
    },
  },
  SK: {
    services: {
      title: "Služby",
      links: [
        { name: "Tvorba webstránok", href: "/sluzby/tvorba-webstranok" },
        { name: "E-shopy", href: "/sluzby/tvorba-eshopu" },
        { name: "SEO optimalizácia", href: "/sluzby/seo" },
        { name: "PPC reklama", href: "/sluzby/ppc" },
        { name: "Digitalizácia", href: "/sluzby/digitalizacia-a-automatizacia-procesov" },
        { name: "Grafický dizajn", href: "/sluzby/grafika" },
      ],
    },
    company: {
      title: "Spoločnosť",
      links: [
        { name: "O nás", href: "/o-nas" },
        { name: "Realizácie", href: "/nase-prace" },
        { name: "Blog", href: "/blog" },
        { name: "Kontakt", href: "/kontakt" },
      ],
    },
    resources: {
      title: "Zdroje",
      links: [
        { name: "Časté otázky", href: "/caste-otazky" },
        { name: "Slovník pojmov", href: "/slovnik" },
        { name: "Cenová kalkulačka", href: "/kalkulacka" },
        { name: "Ochrana súkromia", href: "/ochrana-osobnych-udajov" },
      ],
    },
    brand: {
      description:
        "Tvoríme výnimočné digitálne zážitky, ktoré pomáhajú firmám rásť a uspieť v modernom svete.",
    },
    bottom: {
      copyright: "© 2024 WebOptim. Všetky práva vyhradené.",
      tagline: "Tvorené s vášňou a precíznosťou.",
    },
  },
  CZ: {
    services: {
      title: "Služby",
      links: [
        { name: "Tvorba webových stránek", href: "/sluzby/tvorba-webstranek" },
        { name: "E-shopy", href: "/sluzby/tvorba-eshopu" },
        { name: "SEO optimalizace", href: "/sluzby/seo" },
        { name: "PPC reklama", href: "/sluzby/ppc" },
        { name: "Digitalizace", href: "/sluzby/digitalizace-a-automatizace-procesu" },
        { name: "Grafický design", href: "/sluzby/grafika" },
      ],
    },
    company: {
      title: "Společnost",
      links: [
        { name: "O nás", href: "/o-nas" },
        { name: "Realizace", href: "/nase-prace" },
        { name: "Blog", href: "/blog" },
        { name: "Kontakt", href: "/kontakt" },
      ],
    },
    resources: {
      title: "Zdroje",
      links: [
        { name: "Časté dotazy", href: "/caste-dotazy" },
        { name: "Slovník pojmů", href: "/slovnik" },
        { name: "Cenová kalkulačka", href: "/kalkulacka" },
        { name: "Ochrana soukromí", href: "/ochrana-osobnich-udaju" },
      ],
    },
    brand: {
      description:
        "Tvoříme výjimečné digitální zážitky, které pomáhají firmám růst a uspět v moderním světě.",
    },
    bottom: {
      copyright: "© 2024 WebOptim. Všechna práva vyhrazena.",
      tagline: "Tvořeno s vášní a precizností.",
    },
  },
};

const FooterContext = createContext<FooterLang | null>(null);

export const FooterLangProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { language } = useLanguage();
  const value = translations[language] ?? translations.EN;
  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
};

export const useFooterLang = (): FooterLang => {
  const ctx = useContext(FooterContext);
  if (!ctx) throw new Error("useFooterLang must be used within FooterLangProvider");
  return ctx;
};
