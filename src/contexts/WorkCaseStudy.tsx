import React, { createContext, useContext, useMemo } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

type MobilnoText = {
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  services: string[];
  results: { label: string; description: string }[];
  testimonial: {
    quote: string;
    role: string;
  };
  features: string[];
};

const MobilnoTranslations: Record<Language, MobilnoText> = {
  EN: {
    title: "Mobilno",
    subtitle: "Marketplace for Mobile Service Providers",
    description:
      "A marketplace where customers post a request and mobile professionals respond with offers — built for SEO, scale, and smooth onboarding.",
    overview:
      "Mobilno connects people who need a service with mobile professionals such as DJs, massage therapists, photographers, or repair specialists. The platform is designed to grow through SEO using structured listings, city-based landing pages, and clean internal linking.",
    challenge:
      "The main challenge was creating a scalable content model (providers, services, categories, specializations, locations) while keeping navigation intuitive. SEO had to work reliably on city-based pages without duplication or canonical conflicts.",
    solution:
      "We built a custom WordPress marketplace using custom post types, taxonomies, and advanced fields. SEO-friendly routing for category + city pages, optimized queries and caching, and conversion-focused UX flows for providers and customers were implemented.",
    services: [
      "WordPress Development",
      "UI/UX Design",
      "Technical SEO",
      "Conversion Optimization",
    ],
    results: [
      {
        label: "Provider Onboarding",
        description:
          "Significantly more providers successfully completed registration and published their profiles.",
      },
      {
        label: "Indexed Landing Pages",
        description:
          "Strong growth of category + city pages indexed and discoverable via Google.",
      },
      {
        label: "Faster Matching",
        description:
          "Reduced time between customer request and first provider response.",
      },
      {
        label: "CTA Engagement",
        description:
          "Higher interaction with key actions such as requests, contact, and signups.",
      },
    ],
    testimonial: {
      quote:
        "Mobilno now feels like a real product. The platform is structured, fast, and ready to scale — providers onboard easily and customers find what they need without friction.",
      role: "Founder, Mobilno",
    },
    features: [
      "Custom post types for provider profiles and services",
      "Taxonomy structure for categories, specializations, and problem types",
      "City-based landing pages with SEO-safe routing and canonicals",
      "Search and filtering optimized for relevance",
      "Conversion-focused provider onboarding",
      "Performance optimizations (queries, caching)",
      "Schema-ready structured pages",
      "Strong internal linking between listings, cities, and providers",
    ],
  },

  CZ: {
    title: "Mobilno",
    subtitle: "Tržiště mobilních poskytovatelů služeb",
    description:
      "Tržiště, kde zákazníci zadávají poptávky a poskytovatelé reagují nabídkami — navrženo pro SEO, škálování a snadný onboarding.",
    overview:
      "Mobilno propojuje lidi, kteří hledají službu, s mobilními profesionály jako DJové, maséři, fotografové nebo řemeslníci. Platforma je postavena pro růst skrze SEO, lokální stránky měst a přehledné interní prolinkování.",
    challenge:
      "Výzvou bylo vytvořit škálovatelný obsahový model (poskytovatelé, služby, kategorie, specializace, lokality) a zároveň zachovat jednoduchou navigaci. SEO muselo fungovat spolehlivě na městských stránkách bez duplicit.",
    solution:
      "Vytvořili jsme WordPress marketplace na míru pomocí vlastních CPT, taxonomií a pokročilých polí. Implementovali jsme SEO-friendly routing pro kategorie + města, optimalizovali výkon a navrhli konverzní UX flow.",
    services: [
      "Vývoj na WordPressu",
      "UI / UX design",
      "Technické SEO",
      "Optimalizace konverzí",
    ],
    results: [
      {
        label: "Registrace poskytovatelů",
        description:
          "Výrazně vyšší počet poskytovatelů dokončujících registraci.",
      },
      {
        label: "Indexované landing pages",
        description:
          "Růst počtu kategorií a městských stránek ve vyhledávačích.",
      },
      {
        label: "Rychlejší párování",
        description:
          "Kratší čas mezi poptávkou zákazníka a reakcí poskytovatele.",
      },
      {
        label: "Zapojení do CTA",
        description:
          "Vyšší míra interakce s klíčovými akcemi na webu.",
      },
    ],
    testimonial: {
      quote:
        "Mobilno dnes působí jako hotový produkt. Platforma je rychlá, přehledná a připravená na růst.",
      role: "Zakladatel, Mobilno",
    },
    features: [
      "Vlastní CPT pro profily a služby",
      "Taxonomie pro kategorie, specializace a typy problémů",
      "Lokální landing pages s bezpečným SEO routingem",
      "Pokročilé vyhledávání a filtrování",
      "Onboarding poskytovatelů zaměřený na konverze",
      "Optimalizace výkonu a databázových dotazů",
      "Strukturovaná data (schema)",
      "Silné interní prolinkování",
    ],
  },

  SK: {
    title: "Mobilno",
    subtitle: "Trhovisko mobilných poskytovateľov služieb",
    description:
      "Trhovisko, kde zákazníci zadávajú dopyty a poskytovatelia reagujú ponukami — navrhnuté pre SEO, škálovanie a jednoduchý onboarding.",
    overview:
      "Mobilno spája ľudí, ktorí hľadajú službu, s mobilnými profesionálmi ako DJ-i, maséri, fotografi či remeselníci. Platforma je navrhnutá pre rast pomocou SEO, lokálnych stránok miest a prehľadného interného prelinkovania.",
    challenge:
      "Výzvou bolo vytvoriť škálovateľný obsahový model (poskytovatelia, služby, kategórie, špecializácie, lokality) a zároveň zachovať jednoduchú orientáciu. SEO muselo fungovať spoľahlivo na lokálnych stránkach bez duplicit.",
    solution:
      "Vytvorili sme WordPress marketplace na mieru s vlastnými CPT, taxonómiami a pokročilými poľami. Implementovali sme SEO-friendly routing pre kategórie + mestá, optimalizovali výkon a navrhli konverzné UX flow.",
    services: [
      "WordPress vývoj",
      "UI / UX dizajn",
      "Technické SEO",
      "Optimalizácia konverzií",
    ],
    results: [
      {
        label: "Onboarding poskytovateľov",
        description:
          "Výrazne viac poskytovateľov úspešne dokončilo registráciu.",
      },
      {
        label: "Indexované landing pages",
        description:
          "Nárast počtu kategórií a mestských stránok vo vyhľadávaní.",
      },
      {
        label: "Rýchlejšie párovanie",
        description:
          "Kratší čas medzi dopytom zákazníka a odpoveďou poskytovateľa.",
      },
      {
        label: "Zapojenie do CTA",
        description:
          "Vyššia interakcia s kľúčovými akciami na webe.",
      },
    ],
    testimonial: {
      quote:
        "Mobilno dnes pôsobí ako hotový produkt. Platforma je rýchla, prehľadná a pripravená rásť.",
      role: "Zakladateľ, Mobilno",
    },
    features: [
      "Vlastné CPT pre profily a služby",
      "Taxonómie pre kategórie, špecializácie a typy problémov",
      "Lokálne landing pages s bezpečným SEO routingom",
      "Pokročilé vyhľadávanie a filtrovanie",
      "Konverzný onboarding poskytovateľov",
      "Optimalizácia výkonu a databázových dotazov",
      "Štruktúrované dáta (schema)",
      "Silné interné prelinkovanie",
    ],
  },
};

const WorkMobilnoContext = createContext<MobilnoText | null>(null);

export const WorkMobilnoProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();

  const value = useMemo(() => MobilnoTranslations[language], [language]);

  return (
    <WorkMobilnoContext.Provider value={value}>
      {children}
    </WorkMobilnoContext.Provider>
  );
};

export const useWorkMobilno = () => {
  const ctx = useContext(WorkMobilnoContext);
  if (!ctx) {
    throw new Error("useWorkMobilno must be used inside WorkMobilnoProvider");
  }
  return ctx;
};
