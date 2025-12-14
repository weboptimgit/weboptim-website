// src/contexts/WorkMobilno.tsx
import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { CaseStudy } from "@/data/case-studies";

type MobilnoOverride = Partial<CaseStudy>;

type CtxValue = {
  mobilno: MobilnoOverride;
};

const WorkMobilnoContext = createContext<CtxValue | null>(null);

const mobilnoTranslations: Record<Language, MobilnoOverride> = {
  EN: {
    title: "Mobilno",
    subtitle: "Marketplace for Mobile Service Providers",
    category: "Marketplace",
    client: "Mobilno",
    duration: "Ongoing",
    year: "2024–2025",
    team: "2–4 Members",

    description:
      "A marketplace where customers post a request and mobile professionals respond with offers — built for SEO, scale, and smooth onboarding.",

    tags: ["Marketplace", "WordPress", "Technical SEO"],

    statLabel: "Organic Visibility",

    overview:
      "Mobilno connects people who need a service with mobile professionals (e.g., DJs, massage therapists, photographers, repairs). The platform is built to grow through SEO: structured listings, city-based landing pages, and clean internal linking between categories, services, and providers.",

    challenge:
      "We needed a content model that scales (providers, services, categories, specializations, locations) while keeping navigation simple. The key was making search and filtering feel instant, and making SEO work with city-based pages without duplicate or canonical issues.",

    solution:
      "We built a WordPress marketplace using custom post types, taxonomies, and advanced fields. We implemented SEO-friendly routing for category + city pages, optimized queries and caching, and shipped UX flows for provider onboarding, profile creation, and request → offer conversion.",

    results: [
      {
        metric: "+3.2x",
        label: "Provider Onboarding",
        description: "More providers completed registration and published their profiles",
      },
      {
        metric: "+180%",
        label: "Indexed Landing Pages",
        description: "Growth of category + city pages discoverable via Google",
      },
      {
        metric: "-45%",
        label: "Faster Matching",
        description: "Shorter time from customer request to first provider response",
      },
      {
        metric: "+28%",
        label: "CTA Engagement",
        description: "Higher interaction with key actions (request, contact, signup)",
      },
    ],

    testimonial: {
      quote:
        "Mobilno now feels like a real product. The platform is structured, fast, and ready to scale — providers can onboard easily and customers find what they need without friction.",
      author: "Peter Gáborík",
      role: "Founder, Mobilno",
      avatar: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
    },

    features: [
      "Custom post types for provider profiles and services",
      "Taxonomy structure for categories, specializations, and problem types",
      "City-based landing pages with SEO-safe routing and canonicals",
      "Search + filtering optimized for relevance (service, city, keywords)",
      "Conversion-focused provider onboarding (Free/Premium-ready tiers)",
      "Performance improvements (lean queries, caching, reduced duplicate calls)",
      "Schema-ready structured pages to improve search appearance",
      "Internal linking strategy between listings, cities, and provider profiles",
    ],
  },

  CZ: {
    title: "Mobilno",
    subtitle: "Marketplace pro mobilní poskytovatele služeb",
    category: "Marketplace",
    client: "Mobilno",
    duration: "Průběžně",
    year: "2024–2025",
    team: "2–4 lidé",

    description:
      "Marketplace, kde zákazník zadá poptávku a mobilní profíci posílají nabídky — postaveno pro SEO, škálování a hladký onboarding.",

    tags: ["Marketplace", "WordPress", "Technické SEO"],

    statLabel: "Organická viditelnost",

    overview:
      "Mobilno propojuje lidi, kteří potřebují službu, s mobilními profesionály (např. DJ, masér, fotograf, opravy). Platforma je navržená tak, aby rostla přes SEO: strukturované profily, lokální landing pages podle měst a čisté interní prolinkování mezi kategoriemi, službami a poskytovateli.",

    challenge:
      "Potřebovali jsme datový model, který se dá škálovat (poskytovatelé, služby, kategorie, specializace, lokality) a zároveň udrží navigaci jednoduchou. Klíčové bylo, aby vyhledávání a filtrace působily okamžitě a aby SEO fungovalo u stránek typu kategorie + město bez duplicit a kanonických problémů.",

    solution:
      "Postavili jsme WordPress marketplace na vlastních post typech, taxonomiích a pokročilých polích. Implementovali jsme SEO-friendly routing pro stránky kategorie + město, optimalizovali dotazy a cache a dodali UX flow pro onboarding poskytovatelů, tvorbu profilu a konverzi poptávka → nabídky.",

    results: [
      {
        metric: "+3.2×",
        label: "Onboarding poskytovatelů",
        description: "Více poskytovatelů dokončilo registraci a publikovalo svůj profil",
      },
      {
        metric: "+180%",
        label: "Indexované landing pages",
        description: "Růst stránek kategorie + město dohledatelných přes Google",
      },
      {
        metric: "-45%",
        label: "Rychlejší párování",
        description: "Kratší čas od poptávky zákazníka k první reakci poskytovatele",
      },
      {
        metric: "+28%",
        label: "Zapojení do CTA",
        description: "Vyšší interakce s klíčovými akcemi (poptávka, kontakt, registrace)",
      },
    ],

    testimonial: {
      quote:
        "Mobilno konečně působí jako hotový produkt. Platforma je strukturovaná, rychlá a připravená škálovat — poskytovatelé se snadno zapojí a zákazníci rychle najdou, co potřebují.",
      author: "Peter Gáborík",
      role: "Founder, Mobilno",
      avatar: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
    },

    features: [
      "Vlastní post typy pro profily poskytovatelů a služby",
      "Taxonomie pro kategorie, specializace a typy problémů",
      "Lokální landing pages (města) se SEO-safe routingem a canonicaly",
      "Vyhledávání a filtrace optimalizované na relevanci (služba, město, klíčová slova)",
      "Konverzní onboarding poskytovatelů (připravené i pro Free/Premium model)",
      "Výkon: optimalizované dotazy, cache, omezení duplicitních volání",
      "Stránky připravené na schema pro lepší zobrazení ve vyhledávání",
      "Interní prolinkování mezi listingy, městy a profily poskytovatelů",
    ],
  },

  SK: {
    title: "Mobilno",
    subtitle: "Marketplace pre mobilných poskytovateľov služieb",
    category: "Marketplace",
    client: "Mobilno",
    duration: "Priebežne",
    year: "2024–2025",
    team: "2–4 ľudia",

    description:
      "Marketplace, kde zákazník zadá dopyt a mobilní profíci posielajú ponuky — postavené pre SEO, škálovanie a hladký onboarding.",

    tags: ["Marketplace", "WordPress", "Technické SEO"],

    statLabel: "Organická viditeľnosť",

    overview:
      "Mobilno prepája ľudí, ktorí potrebujú službu, s mobilnými profesionálmi (napr. DJ, masér, fotograf, opravy). Platforma je navrhnutá tak, aby rástla cez SEO: štruktúrované profily, lokálne landing pages podľa miest a čisté interné prelinkovanie medzi kategóriami, službami a poskytovateľmi.",

    challenge:
      "Potrebovali sme dátový model, ktorý sa dá škálovať (poskytovatelia, služby, kategórie, špecializácie, lokality) a zároveň udrží navigáciu jednoduchú. Kľúčové bolo, aby vyhľadávanie a filtrovanie pôsobilo okamžite a aby SEO fungovalo na stránkach typu kategória + mesto bez duplicit a canonical problémov.",

    solution:
      "Postavili sme WordPress marketplace na vlastných post type-och, taxonómiách a pokročilých poliach. Implementovali sme SEO-friendly routing pre stránky kategória + mesto, optimalizovali dotazy a cache a dodali UX flow pre onboarding poskytovateľov, tvorbu profilu a konverziu dopyt → ponuka.",

    results: [
      {
        metric: "+3.2×",
        label: "Onboarding poskytovateľov",
        description: "Viac poskytovateľov dokončilo registráciu a publikovalo svoj profil",
      },
      {
        metric: "+180%",
        label: "Indexované landing pages",
        description: "Rast stránok kategória + mesto dohľadateľných cez Google",
      },
      {
        metric: "-45%",
        label: "Rýchlejšie párovanie",
        description: "Kratší čas od dopytu zákazníka k prvej reakcii poskytovateľa",
      },
      {
        metric: "+28%",
        label: "Zapojenie do CTA",
        description: "Vyššia interakcia s kľúčovými akciami (dopyt, kontakt, registrácia)",
      },
    ],

    testimonial: {
      quote:
        "Mobilno konečne pôsobí ako hotový produkt. Platforma je štruktúrovaná, rýchla a pripravená škálovať — poskytovatelia sa ľahko zapoja a zákazníci rýchlo nájdu, čo potrebujú.",
      author: "Peter Gáborík",
      role: "Founder, Mobilno",
      avatar: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
    },

    features: [
      "Vlastné post type-y pre profily poskytovateľov a služby",
      "Taxonómie pre kategórie, špecializácie a typy problémov",
      "Lokálne landing pages (mestá) so SEO-safe routingom a canonicalmi",
      "Vyhľadávanie a filtrovanie optimalizované na relevanciu (služba, mesto, kľúčové slová)",
      "Konverzný onboarding poskytovateľov (pripravené aj pre Free/Premium model)",
      "Výkon: optimalizované dotazy, cache, obmedzenie duplicitných volaní",
      "Stránky pripravené na schema pre lepšie zobrazenie vo vyhľadávaní",
      "Interné prelinkovanie medzi listingami, mestami a profilmi poskytovateľov",
    ],
  },
};

export const WorkMobilnoProvider = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();

  const value = useMemo<CtxValue>(() => {
    return { mobilno: mobilnoTranslations[language] || mobilnoTranslations.EN };
  }, [language]);

  return <WorkMobilnoContext.Provider value={value}>{children}</WorkMobilnoContext.Provider>;
};

export const useWorkMobilno = () => {
  const ctx = useContext(WorkMobilnoContext);
  if (!ctx) throw new Error("useWorkMobilno must be used within WorkMobilnoProvider");
  return ctx;
};
