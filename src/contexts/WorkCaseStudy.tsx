import React, { createContext, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export type CaseStudyText = {
  title?: string;
  subtitle?: string;
  description?: string;
  overview?: string;
  challenge?: string;
  solution?: string;

  // UI labels (voliteľné, ak chceš prekladať aj statické texty v CaseStudy page)
  labels?: {
    home?: string;
    projects?: string;
    backToProjects?: string;
    visitProject?: string;
    client?: string;
    duration?: string;
    year?: string;
    team?: string;
    techStack?: string;
    projectOverview?: string;
    theChallenge?: string;
    ourSolution?: string;
    servicesProvided?: string;
    resultsTitle?: string;
    resultsSubtitle?: string;
    keyFeaturesDelivered?: string;
    projectGallery?: string;
    readyToStart?: string;
    ctaText?: string;
    getInTouch?: string;
  };

  // obsahy
  features?: string[];
  services?: string[]; // len labely (ak chceš prepísať)
  results?: Array<{ label?: string; description?: string }>; // preloží len texty
};

type Ctx = {
  slug?: string;
  text: CaseStudyText;
};

const WorkCaseStudyContext = createContext<Ctx | null>(null);

/**
 * MOBILNO translations only
 * slug must be "mobilno"
 */
const mobilnoTranslations: Record<Language, Required<CaseStudyText>> = {
  EN: {
    title: "Mobilno",
    subtitle: "Marketplace for Service Providers",
    description:
      "A marketplace where customers post a request and verified providers respond with offers — built for SEO, scale, and smooth onboarding.",
    overview:
      "Mobilno connects customers with local service providers across multiple categories. The platform is designed to scale through SEO using city-based landing pages, structured provider profiles, and strong internal linking between categories, services, and locations.",
    challenge:
      "We needed a scalable content model (providers, services, categories, specializations, and locations) while keeping navigation simple. The key was fast search/filtering and SEO-safe routing for local pages without duplicate or canonical conflicts.",
    solution:
      "We built a custom WordPress marketplace using custom post types, taxonomies, and advanced fields. We implemented SEO-friendly routing for category + city pages, optimized queries/caching, and delivered UX flows for provider onboarding and request → offer conversion.",
    labels: {
      home: "Home",
      projects: "Projects",
      backToProjects: "Back to Projects",
      visitProject: "Visit Project",
      client: "Client",
      duration: "Duration",
      year: "Year",
      team: "Team",
      techStack: "Tech Stack",
      projectOverview: "Project Overview",
      theChallenge: "The Challenge",
      ourSolution: "Our Solution",
      servicesProvided: "Services Provided",
      resultsTitle: "The Results",
      resultsSubtitle: "Measurable impact that drove real business growth",
      keyFeaturesDelivered: "Key Features Delivered",
      projectGallery: "Project Gallery",
      readyToStart: "Ready to Start Your Project?",
      ctaText:
        "Let's create something amazing together. Get in touch to discuss how we can help transform your digital presence.",
      getInTouch: "Get in Touch",
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
    services: [],
    results: [],
  },

  CZ: {
    title: "Mobilno",
    subtitle: "Tržiště poskytovatelů služeb",
    description:
      "Tržiště, kde zákazník zadá poptávku a ověření poskytovatelé posílají nabídky — postavené pro SEO, růst a snadný onboarding.",
    overview:
      "Mobilno propojuje zákazníky s lokálními poskytovateli služeb napříč kategoriemi. Platforma je navržena pro růst přes SEO díky lokálním landing pages, strukturovaným profilům a silnému internímu prolinkování mezi kategoriemi, službami a lokalitami.",
    challenge:
      "Potřebovali jsme škálovatelný obsahový model (poskytovatelé, služby, kategorie, specializace, lokality) a zároveň jednoduchou navigaci. Klíčové bylo rychlé vyhledávání/filtrování a SEO-safe routing pro lokální stránky bez duplicit a problémů s canonical.",
    solution:
      "Postavili jsme WordPress marketplace na míru pomocí vlastních CPT, taxonomií a pokročilých polí. Implementovali jsme SEO-friendly routing pro kategorie + města, optimalizovali dotazy a cache a dodali UX flow pro onboarding poskytovatelů a konverzi poptávka → nabídka.",
    labels: {
      home: "Domů",
      projects: "Projekty",
      backToProjects: "Zpět na projekty",
      visitProject: "Navštívit projekt",
      client: "Klient",
      duration: "Trvání",
      year: "Rok",
      team: "Tým",
      techStack: "Technologie",
      projectOverview: "Přehled projektu",
      theChallenge: "Výzva",
      ourSolution: "Řešení",
      servicesProvided: "Dodané služby",
      resultsTitle: "Výsledky",
      resultsSubtitle: "Měřitelný dopad, který přinesl reálný růst",
      keyFeaturesDelivered: "Klíčové dodané funkce",
      projectGallery: "Galerie projektu",
      readyToStart: "Jdeme na váš projekt?",
      ctaText:
        "Pojďme spolu vytvořit něco skvělého. Ozvěte se a probereme, jak posunout vaši digitální prezentaci.",
      getInTouch: "Kontaktovat",
    },
    features: [
      "Vlastní CPT pro profily poskytovatelů a služby",
      "Taxonomie pro kategorie, specializace a typy problémů",
      "Lokální landing pages s bezpečným routingem a canonical",
      "Vyhledávání + filtrování optimalizované na relevanci (služba, město, klíčová slova)",
      "Konverzní onboarding poskytovatelů (připravené pro Free/Premium model)",
      "Výkonové optimalizace (lean dotazy, cache, méně duplicitních volání)",
      "Stránky připravené na schema pro lepší výsledky ve vyhledávání",
      "Interní prolinkování mezi listingy, městy a profily",
    ],
    services: [],
    results: [],
  },

  SK: {
    title: "Mobilno",
    subtitle: "Trhovisko poskytovateľov služieb",
    description:
      "Trhovisko, kde zákazník zadá dopyt a overení poskytovatelia posielajú ponuky — postavené pre SEO, rast a jednoduchý onboarding.",
    overview:
      "Mobilno spája zákazníkov s lokálnymi poskytovateľmi služieb naprieč kategóriami. Platforma je navrhnutá pre rast cez SEO vďaka lokálnym landing pages, štruktúrovaným profilom a silnému internému prelinkovaniu medzi kategóriami, službami a lokalitami.",
    challenge:
      "Potrebovali sme škálovateľný obsahový model (poskytovatelia, služby, kategórie, špecializácie, lokality) a zároveň jednoduchú navigáciu. Kľúčové bolo rýchle vyhľadávanie/filtrovanie a SEO-safe routing pre lokálne stránky bez duplicit a problémov s canonical.",
    solution:
      "Postavili sme WordPress marketplace na mieru pomocou vlastných CPT, taxonómií a pokročilých polí. Implementovali sme SEO-friendly routing pre kategórie + mestá, optimalizovali dotazy a cache a dodali UX flow pre onboarding poskytovateľov a konverziu dopyt → ponuka.",
    labels: {
      home: "Domov",
      projects: "Projekty",
      backToProjects: "Späť na projekty",
      visitProject: "Navštíviť projekt",
      client: "Klient",
      duration: "Trvanie",
      year: "Rok",
      team: "Tím",
      techStack: "Technológie",
      projectOverview: "Prehľad projektu",
      theChallenge: "Výzva",
      ourSolution: "Riešenie",
      servicesProvided: "Dodané služby",
      resultsTitle: "Výsledky",
      resultsSubtitle: "Merateľný dopad, ktorý priniesol reálny rast",
      keyFeaturesDelivered: "Kľúčové dodané funkcie",
      projectGallery: "Galéria projektu",
      readyToStart: "Ideme na váš projekt?",
      ctaText:
        "Poďme spolu vytvoriť niečo skvelé. Ozvite sa a preberieme, ako posunúť vašu digitálnu prezentáciu.",
      getInTouch: "Kontaktovať",
    },
    features: [
      "Vlastné CPT pre profily poskytovateľov a služby",
      "Taxonómie pre kategórie, špecializácie a typy problémov",
      "Lokálne landing pages s bezpečným routingom a canonical",
      "Vyhľadávanie + filtrovanie optimalizované na relevanciu (služba, mesto, kľúčové slová)",
      "Konverzný onboarding poskytovateľov (pripravené pre Free/Premium model)",
      "Výkonové optimalizácie (lean dotazy, cache, menej duplicitných volaní)",
      "Stránky pripravené na schema pre lepšie výsledky vo vyhľadávaní",
      "Interné prelinkovanie medzi listingami, mestami a profilmi",
    ],
    services: [],
    results: [],
  },
};

export const WorkCaseStudyProvider = ({ children }: { children: React.ReactNode }) => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const text = useMemo<CaseStudyText>(() => {
    if (slug === "mobilno") return mobilnoTranslations[language];
    return {};
  }, [slug, language]);

  return (
    <WorkCaseStudyContext.Provider value={{ slug, text }}>
      {children}
    </WorkCaseStudyContext.Provider>
  );
};

export const useWorkCaseStudy = () => {
  const ctx = useContext(WorkCaseStudyContext);
  if (!ctx) throw new Error("useWorkCaseStudy must be used inside WorkCaseStudyProvider");
  return ctx;
};
