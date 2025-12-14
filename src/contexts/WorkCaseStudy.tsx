import React, { createContext, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { caseStudiesData } from "@/data/case-studies";

// typ len pre texty, ktoré chceš prekladať
export type CaseStudyText = {
  title?: string;
  subtitle?: string;
  description?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  features?: string[];
};

type WorkCaseStudyContextValue = {
  slug?: string;
  text: CaseStudyText; // preložené (ak existujú), inak prázdne
};

const WorkCaseStudyContext = createContext<WorkCaseStudyContextValue | null>(null);

// preklady len pre mobilno
const mobilnoTranslations: Record<Language, Required<CaseStudyText>> = {
  EN: {
    title: "Mobilno",
    subtitle: "Marketplace for Mobile Service Providers",
    description:
      "A marketplace where customers post a request and mobile professionals respond with offers — built for SEO, scale, and smooth onboarding.",
    overview:
      "Mobilno connects people who need a service with mobile professionals (e.g., DJs, massage therapists, photographers, repairs). The platform is built to grow through SEO: structured listings, city-based landing pages, and clean internal linking between categories, services, and providers.",
    challenge:
      "We needed a content model that scales (providers, services, categories, specializations, locations) while keeping navigation simple. The key was making search and filtering feel instant, and making SEO work with city-based pages without duplicate or canonical issues.",
    solution:
      "We built a WordPress marketplace using custom post types, taxonomies, and advanced fields. We implemented SEO-friendly routing for category + city pages, optimized queries and caching, and shipped UX flows for provider onboarding, profile creation, and request → offer conversion.",
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
    subtitle: "Tržiště mobilních poskytovatelů služeb",
    description:
      "Tržiště, kde zákazník zadá poptávku a profesionálové mu pošlou nabídky — postavené pro SEO, růst a snadný onboarding.",
    overview:
      "Mobilno propojuje lidi, kteří potřebují službu, s mobilními profesionály (např. DJ, masér, fotograf, opravy). Platforma je navržená tak, aby rostla přes SEO: strukturované profily, lokální landing pages a čisté interní prolinkování mezi kategoriemi, službami a poskytovateli.",
    challenge:
      "Potřebovali jsme škálovatelný obsahový model (poskytovatelé, služby, kategorie, specializace, lokality) a zároveň jednoduchou navigaci. Klíčové bylo, aby vyhledávání a filtrování působilo okamžitě a aby lokální SEO stránky neměly problémy s duplicitami a kanonikalizací.",
    solution:
      "Postavili jsme WordPress marketplace na míru pomocí vlastních CPT, taxonomií a pokročilých polí. Implementovali jsme SEO-friendly routing pro kategorie + města, optimalizovali dotazy a cache a dodali UX flow pro onboarding poskytovatelů, tvorbu profilu a konverzi poptávka → nabídka.",
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
  },
  SK: {
    title: "Mobilno",
    subtitle: "Trhovisko mobilných poskytovateľov služieb",
    description:
      "Trhovisko, kde zákazník zadá dopyt a profesionáli pošlú ponuky — postavené pre SEO, rast a jednoduchý onboarding.",
    overview:
      "Mobilno spája ľudí, ktorí potrebujú službu, s mobilnými profesionálmi (napr. DJ, masér, fotograf, opravy). Platforma je navrhnutá tak, aby rástla cez SEO: štruktúrované profily, lokálne landing pages a čisté interné prelinkovanie medzi kategóriami, službami a poskytovateľmi.",
    challenge:
      "Potrebovali sme škálovateľný obsahový model (poskytovatelia, služby, kategórie, špecializácie, lokality) a zároveň jednoduchú navigáciu. Kľúčové bolo, aby vyhľadávanie a filtrovanie pôsobilo okamžite a aby lokálne SEO stránky nemali problémy s duplicitami a canonical.",
    solution:
      "Postavili sme WordPress marketplace na mieru pomocou vlastných CPT, taxonómií a pokročilých polí. Implementovali sme SEO-friendly routing pre kategórie + mestá, optimalizovali dotazy a cache a dodali UX flow pre onboarding poskytovateľov, tvorbu profilu a konverziu dopyt → ponuka.",
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
  },
};

export const WorkCaseStudyProvider = ({ children }: { children: React.ReactNode }) => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const text = useMemo<CaseStudyText>(() => {
    if (!slug) return {};
    if (slug === "mobilno") return mobilnoTranslations[language];
    return {}; // ostatné zatiaľ bez prekladu
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
