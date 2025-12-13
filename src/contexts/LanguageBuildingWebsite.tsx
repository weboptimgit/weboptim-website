// src/contexts/LanguageBuildingWebsite.tsx
import React, { createContext, useContext } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/* ---------- TYPES ---------- */

type FAQItem = { question: string; answer: string };

type MetricItem = { value: string; label: string };

type FeatureItem = { title: string; description: string };

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  duration: string;
};

type PackageItem = {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
};

type BuildingWebsiteLang = {
  seo: {
    title: string;
    description: string;
  };

  hero: {
    badge: string;
    titleBefore: string;      // "Websites that"
    titleHighlight: string;   // "convert"
    titleAfter1: string;      // "visitors into customers"
    subtitle: string;

    ctaPrimary: string;
    ctaSecondary: string;

    statsBuildPassedTitle: string;
    statsBuildPassedTime: string;
    statsPerformanceTitle: string;
    statsPerformanceScore: string;
  };

  metrics: MetricItem[];

  tech: {
    title: string;
    subtitle: string;
    // názvy (WordPress, Oxygen...) necháme v stránke ako "brand", prekladíme len popisy
    descriptions: {
      wordpress: string;
      oxygen: string;
      woocommerce: string;
      php: string;
      performance: string;
    };
  };

  features: {
    titleBefore: string;      // "What Makes Us"
    titleHighlight: string;   // "Different"
    subtitle: string;
    items: FeatureItem[];
  };

  process: {
    titleBefore: string;      // "From Idea to"
    titleHighlight: string;   // "Launch"
    subtitle: string;
    stepLabel: string;        // "STEP"
    steps: ProcessStep[];
  };

  pricing: {
    titleBefore: string;      // "Transparent"
    titleHighlight: string;   // "Pricing"
    subtitle: string;
    popularBadge: string;     // "Most Popular"
    cta: string;              // "Get Started"
  };

  packages: PackageItem[];

  reviews: {
    title: string;
    subtitle: string;
  };

  faq: {
    title: string;
    subtitle: string;
    serviceName: string;
    items: FAQItem[];
  };

  bottomCta: {
    titleBefore: string;      // "Ready to Launch Your"
    titleHighlight: string;   // "Dream Website"
    titleAfter: string;       // "?"
    subtitle: string;
    primary: string;
    secondary: string;
  };
};

/* ---------- TRANSLATIONS ---------- */

const translations: Record<string, BuildingWebsiteLang> = {
  EN: {
    seo: {
      title: "Web Development Services | WebOptim",
      description:
        "Custom web development services. We build stunning, fast, SEO-optimized websites that convert visitors into customers.",
    },

    hero: {
      badge: "Web Development",
      titleBefore: "Websites that",
      titleHighlight: "convert",
      titleAfter1: "visitors into customers",
      subtitle:
        "We don’t just build websites — we engineer digital experiences that captivate, engage, and drive measurable business results. Lightning-fast, SEO-optimized, and built to scale.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View Portfolio",
      statsBuildPassedTitle: "Build Passed",
      statsBuildPassedTime: "2ms ago",
      statsPerformanceTitle: "Performance",
      statsPerformanceScore: "100/100",
    },

    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "<1s", label: "Load Time" },
      { value: "100+", label: "Projects" },
      { value: "5.0", label: "Rating" },
    ],

    tech: {
      title: "Powered by Modern Tech",
      subtitle: "We use the best tools for the job",
      descriptions: {
        wordpress: "Powerful CMS",
        oxygen: "Visual builder",
        woocommerce: "E-commerce ready",
        php: "Custom functions",
        performance: "Speed optimized",
      },
    },

    features: {
      titleBefore: "What Makes Us",
      titleHighlight: "Different",
      subtitle: "We obsess over the details so you can focus on growing your business.",
      items: [
        {
          title: "Pixel-Perfect Design",
          description:
            "Every pixel matters. We craft stunning visuals that capture your brand essence and engage visitors.",
        },
        {
          title: "Clean Architecture",
          description:
            "Maintainable, scalable code that grows with your business. No technical debt — just solid foundations.",
        },
        {
          title: "Blazing Performance",
          description: "Sub-second load times, Core Web Vitals optimized. Your site will fly on any device.",
        },
        {
          title: "Fort Knox Security",
          description: "SSL, secure headers, input validation, and regular audits. Your data stays protected.",
        },
      ],
    },

    process: {
      titleBefore: "From Idea to",
      titleHighlight: "Launch",
      subtitle: "Our battle-tested process ensures predictable timelines and exceptional results.",
      stepLabel: "STEP",
      steps: [
        { step: "01", title: "Discovery Call", description: "We dive deep into your goals, audience, and competitors.", duration: "1–2 days" },
        { step: "02", title: "Strategy & Wireframes", description: "Information architecture, user flows, and wireframes.", duration: "3–5 days" },
        { step: "03", title: "Design & Prototype", description: "High-fidelity mockups with interactive prototypes.", duration: "5–7 days" },
        { step: "04", title: "Development Sprint", description: "Agile development with weekly demos.", duration: "2–4 weeks" },
        { step: "05", title: "Testing & QA", description: "Testing across devices, browsers, and performance benchmarks.", duration: "3–5 days" },
        { step: "06", title: "Launch & Beyond", description: "Deployment, training, and ongoing support.", duration: "Ongoing" },
      ],
    },

    pricing: {
      titleBefore: "Transparent",
      titleHighlight: "Pricing",
      subtitle:
        "Choose the package that fits your needs. Prices are starting points — we’ll provide a custom quote based on requirements.",
      popularBadge: "Most Popular",
      cta: "Get Started",
    },

    packages: [
      {
        name: "Starter",
        description: "One-page website for a strong online presence",
        price: "From €390",
        features: [
          "1 one-page website",
          "Modern responsive design",
          "Basic SEO setup",
          "Contact form or quick contact links",
          "Social media integration",
          "Basic speed optimization",
          "Deployment & technical setup",
        ],
      },
      {
        name: "Professional",
        description: "Complete website for growing businesses",
        price: "From €1,190",
        popular: true,
        features: [
          "Up to 6 pages",
          "Custom design",
          "Fully responsive (mobile, tablet, desktop)",
          "CMS integration",
          "Advanced SEO structure",
          "Analytics setup",
          "Contact forms & CTA sections",
          "1 month post-launch support",
        ],
      },
      {
        name: "Enterprise",
        description: "Tailored solution for complex projects",
        price: "Custom",
        features: [
          "Unlimited pages",
          "Custom functionality",
          "API integrations",
          "Priority support",
          "Performance SLA",
          "Dedicated team",
        ],
      },
    ],

    reviews: {
      title: "What Our Clients Say",
      subtitle: "See what businesses say about their new websites.",
    },

    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common questions about our web development services.",
      serviceName: "Web Development",
      items: [
        {
          question: "How long does it take to build a website?",
          answer:
            "A standard website usually takes 2–4 weeks. Complex e-commerce or custom features may take 6–8 weeks. We’ll confirm a timeline during the initial consultation.",
        },
        {
          question: "What CMS do you use?",
          answer:
            "We primarily work with WordPress and Oxygen Builder. For simpler websites, we can also build hand-coded solutions. The best choice depends on your needs and maintenance preferences.",
        },
        {
          question: "Do you provide hosting?",
          answer:
            "We can recommend reliable hosting providers and help with setup. We also offer managed hosting for clients who prefer a hands-off approach.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "Absolutely. Every website we deliver is fully responsive and optimized for desktops, tablets, and smartphones.",
        },
        {
          question: "Do you offer ongoing maintenance?",
          answer:
            "Yes. We offer maintenance packages covering updates, security monitoring, backups, and content changes.",
        },
      ],
    },

    bottomCta: {
      titleBefore: "Ready to Launch Your",
      titleHighlight: "Dream Website",
      titleAfter: "?",
      subtitle: "Let’s discuss your project and create something amazing together.",
      primary: "Get Free Consultation",
      secondary: "See Our Work",
    },
  },

  SK: {
    seo: {
      title: "Tvorba webstránok | WebOptim",
      description:
        "Webstránky na mieru. Tvoríme moderné, rýchle a SEO optimalizované weby, ktoré premieňajú návštevníkov na zákazníkov.",
    },

    hero: {
      badge: "Tvorba webstránok",
      titleBefore: "Weby, ktoré",
      titleHighlight: "konvertujú",
      titleAfter1: "návštevníkov na zákazníkov",
      subtitle:
        "Nerobíme len weby — navrhujeme digitálne zážitky, ktoré zaujmú, udržia pozornosť a prinesú merateľné výsledky. Rýchle, SEO-ready a pripravené rásť s biznisom.",
      ctaPrimary: "Začať projekt",
      ctaSecondary: "Pozrieť portfólio",
      statsBuildPassedTitle: "Build prešiel",
      statsBuildPassedTime: "pred 2 ms",
      statsPerformanceTitle: "Výkon",
      statsPerformanceScore: "100/100",
    },

    metrics: [
      { value: "99,9%", label: "Dostupnosť" },
      { value: "<1s", label: "Načítanie" },
      { value: "100+", label: "Projektov" },
      { value: "5,0", label: "Hodnotenie" },
    ],

    tech: {
      title: "Postavené na moderných technológiách",
      subtitle: "Používame najlepšie nástroje pre daný cieľ",
      descriptions: {
        wordpress: "Silné CMS",
        oxygen: "Vizuálny builder",
        woocommerce: "Pripravené na e-shop",
        php: "Custom funkcionality",
        performance: "Optimalizované na rýchlosť",
      },
    },

    features: {
      titleBefore: "Čím sme",
      titleHighlight: "iní",
      subtitle: "My riešime detaily — ty sa sústreď na rast biznisu.",
      items: [
        {
          title: "Pixel-perfect dizajn",
          description:
            "Každý pixel sa ráta. Vytvoríme vizuál, ktorý sedí tvojej značke a zaujme návštevníkov.",
        },
        {
          title: "Čistá architektúra",
          description:
            "Udržiavateľný a škálovateľný kód. Bez technického dlhu — len pevné základy.",
        },
        {
          title: "Extrémny výkon",
          description: "Načítanie pod 1 sekundu, optimalizované Core Web Vitals. Web bude rýchly na každom zariadení.",
        },
        {
          title: "Bezpečnosť na úrovni",
          description: "SSL, bezpečnostné hlavičky, validácia vstupov a pravidelné audity. Dáta sú chránené.",
        },
      ],
    },

    process: {
      titleBefore: "Od nápadu po",
      titleHighlight: "spustenie",
      subtitle: "Overený proces = predvídateľný termín a top výsledok.",
      stepLabel: "KROK",
      steps: [
        { step: "01", title: "Úvodný call", description: "Prejdeme ciele, cieľovku a konkurenciu.", duration: "1–2 dni" },
        { step: "02", title: "Stratégia & wireframy", description: "Štruktúra webu, user flow a wireframy.", duration: "3–5 dní" },
        { step: "03", title: "Dizajn & prototyp", description: "Návrhy + klikateľný prototyp na schválenie.", duration: "5–7 dní" },
        { step: "04", title: "Vývoj", description: "Agilný vývoj + pravidelné ukážky progresu.", duration: "2–4 týždne" },
        { step: "05", title: "Testovanie", description: "Testy na zariadeniach, prehliadačoch a výkon.", duration: "3–5 dní" },
        { step: "06", title: "Spustenie & podpora", description: "Nasadenie, zaškolenie a ďalšia podpora.", duration: "Priebežne" },
      ],
    },

    pricing: {
      titleBefore: "Transparentné",
      titleHighlight: "ceny",
      subtitle:
        "Vyber si balík, ktorý ti sedí. Ceny sú orientačné — finálnu ponuku pripravíme podľa rozsahu.",
      popularBadge: "Najobľúbenejšie",
      cta: "Chcem začať",
    },

    packages: [
      {
        name: "Starter",
        description: "Jednostránkový web pre silnú online prezentáciu",
        price: "Od 390 €",
        features: [
          "1 jednostránkový web",
          "Moderný responzívny dizajn",
          "Základné SEO nastavenie",
          "Kontaktný formulár alebo rýchle kontakty",
          "Prepojenie na sociálne siete",
          "Základná optimalizácia rýchlosti",
          "Nasadenie a technické nastavenie",
        ],
      },
      {
        name: "Professional",
        description: "Kompletný web pre rastúci biznis",
        price: "Od 1 190 €",
        popular: true,
        features: [
          "Do 6 podstránok",
          "Dizajn na mieru",
          "Plne responzívny (mobil, tablet, desktop)",
          "CMS – jednoduchá správa obsahu",
          "Pokročilá SEO štruktúra",
          "Nastavenie analytiky",
          "Kontaktné formuláre a CTA sekcie",
          "1 mesiac podpory po spustení",
        ],
      },
      {
        name: "Enterprise",
        description: "Riešenie na mieru pre komplexné projekty",
        price: "Individuálne",
        features: [
          "Neobmedzený počet stránok",
          "Vlastná funkcionalita",
          "API integrácie",
          "Prioritná podpora",
          "Výkonnostné SLA",
          "Dedikovaný tím",
        ],
      },
    ],

    reviews: {
      title: "Čo hovoria naši klienti",
      subtitle: "Pozri, ako firmy hodnotia svoje nové weby.",
    },

    faq: {
      title: "Často kladené otázky",
      subtitle: "Najčastejšie otázky k tvorbe webstránok.",
      serviceName: "Tvorba webstránok",
      items: [
        {
          question: "Ako dlho trvá vytvoriť webstránku?",
          answer:
            "Bežná webstránka trvá približne 2–4 týždne. Zložitejšie projekty môžu trvať 6–8 týždňov. Presný termín si potvrdíme na úvodnej konzultácii.",
        },
        {
          question: "Aký CMS používate?",
          answer:
            "Najčastejšie WordPress + Oxygen Builder. Pri jednoduchších weboch vieme spraviť aj ručne kódované riešenie. Záleží na potrebe správy a budúceho rozširovania.",
        },
        {
          question: "Zabezpečíte aj hosting?",
          answer:
            "Odporučíme vhodný hosting a pomôžeme s nastavením. Vieme ponúknuť aj spravovaný hosting, ak chceš mať všetko bez starostí.",
        },
        {
          question: "Bude web responzívny?",
          answer:
            "Áno — web je vždy optimalizovaný pre desktop, tablet aj mobil.",
        },
        {
          question: "Robíte aj údržbu?",
          answer:
            "Áno — ponúkame balíky údržby (aktualizácie, bezpečnosť, zálohy, obsahové úpravy).",
        },
      ],
    },

    bottomCta: {
      titleBefore: "Pripravený spustiť",
      titleHighlight: "web snov",
      titleAfter: "?",
      subtitle: "Poďme prebrať projekt a vytvoriť niečo fakt dobré.",
      primary: "Bezplatná konzultácia",
      secondary: "Pozrieť realizácie",
    },
  },

  CZ: {
    seo: {
      title: "Tvorba webů | WebOptim",
      description:
        "Weby na míru. Tvoříme moderní, rychlé a SEO optimalizované webové stránky, které mění návštěvníky v zákazníky.",
    },

    hero: {
      badge: "Tvorba webů",
      titleBefore: "Weby, které",
      titleHighlight: "konvertují",
      titleAfter1: "návštěvníky na zákazníky",
      subtitle:
        "Neděláme jen weby — stavíme digitální zážitky, které zaujmou, udrží pozornost a přinesou měřitelné výsledky. Rychlé, SEO-ready a připravené růst s vaším byznysem.",
      ctaPrimary: "Začít projekt",
      ctaSecondary: "Zobrazit portfolio",
      statsBuildPassedTitle: "Build prošel",
      statsBuildPassedTime: "před 2 ms",
      statsPerformanceTitle: "Výkon",
      statsPerformanceScore: "100/100",
    },

    metrics: [
      { value: "99,9%", label: "Dostupnost" },
      { value: "<1s", label: "Načtení" },
      { value: "100+", label: "Projektů" },
      { value: "5,0", label: "Hodnocení" },
    ],

    tech: {
      title: "Postaveno na moderních technologiích",
      subtitle: "Používáme nejlepší nástroje pro daný cíl",
      descriptions: {
        wordpress: "Silné CMS",
        oxygen: "Vizuální builder",
        woocommerce: "Připraveno na e-shop",
        php: "Custom funkce",
        performance: "Optimalizované na rychlost",
      },
    },

    features: {
      titleBefore: "Čím jsme",
      titleHighlight: "jiní",
      subtitle: "My řešíme detaily — vy se soustřeďte na růst byznysu.",
      items: [
        {
          title: "Pixel-perfect design",
          description:
            "Každý pixel se počítá. Vytvoříme vizuál, který sedí vaší značce a zaujme návštěvníky.",
        },
        {
          title: "Čistá architektura",
          description:
            "Udržovatelný a škálovatelný kód. Bez technického dluhu — jen pevné základy.",
        },
        {
          title: "Extrémní výkon",
          description: "Načtení pod 1 sekundu, optimalizované Core Web Vitals. Web bude rychlý na každém zařízení.",
        },
        {
          title: "Bezpečnost na úrovni",
          description: "SSL, bezpečnostní hlavičky, validace vstupů a pravidelné audity. Data jsou chráněná.",
        },
      ],
    },

    process: {
      titleBefore: "Od nápadu po",
      titleHighlight: "spuštění",
      subtitle: "Ověřený proces = předvídatelný termín a špičkový výsledek.",
      stepLabel: "KROK",
      steps: [
        { step: "01", title: "Úvodní call", description: "Projdeme cíle, cílovku a konkurenci.", duration: "1–2 dny" },
        { step: "02", title: "Strategie & wireframy", description: "Struktura webu, user flow a wireframy.", duration: "3–5 dnů" },
        { step: "03", title: "Design & prototyp", description: "Návrhy + klikací prototyp ke schválení.", duration: "5–7 dnů" },
        { step: "04", title: "Vývoj", description: "Agilní vývoj + pravidelné ukázky progresu.", duration: "2–4 týdny" },
        { step: "05", title: "Testování", description: "Testy na zařízeních, prohlížečích a výkon.", duration: "3–5 dnů" },
        { step: "06", title: "Spuštění & podpora", description: "Nasazení, zaškolení a další podpora.", duration: "Průběžně" },
      ],
    },

    pricing: {
      titleBefore: "Transparentní",
      titleHighlight: "ceny",
      subtitle:
        "Vyberte si balíček, který vám sedí. Ceny jsou orientační — finální nabídku připravíme podle rozsahu.",
      popularBadge: "Nejoblíbenější",
      cta: "Chci začít",
    },

    packages: [
      {
        name: "Starter",
        description: "Jednostránkový web pro silnou online prezentaci",
        price: "Od 9 900 Kč",
        features: [
          "1 jednostránkový web",
          "Moderní responzivní design",
          "Základní SEO nastavení",
          "Kontaktní formulář nebo rychlé kontakty",
          "Propojení se sociálními sítěmi",
          "Základní optimalizace rychlosti",
          "Nasazení a technické nastavení",
        ],
      },
      {
        name: "Professional",
        description: "Kompletní web pro rostoucí byznys",
        price: "Od 29 900 Kč",
        popular: true,
        features: [
          "Až 6 podstránek",
          "Design na míru",
          "Plně responzivní (mobil, tablet, desktop)",
          "CMS – jednoduchá správa obsahu",
          "Pokročilá SEO struktura",
          "Nastavení analytiky",
          "Kontaktní formuláře a CTA sekce",
          "1 měsíc podpory po spuštění",
        ],
      },
      {
        name: "Enterprise",
        description: "Řešení na míru pro komplexní projekty",
        price: "Individuálně",
        features: [
          "Neomezený počet stránek",
          "Vlastní funkcionalita",
          "API integrace",
          "Prioritní podpora",
          "Výkonnostní SLA",
          "Dedikovaný tým",
        ],
      },
    ],

    reviews: {
      title: "Co říkají naši klienti",
      subtitle: "Podívejte se, jak firmy hodnotí své nové weby.",
    },

    faq: {
      title: "Časté dotazy",
      subtitle: "Nejčastější otázky k tvorbě webových stránek.",
      serviceName: "Tvorba webů",
      items: [
        {
          question: "Jak dlouho trvá vytvořit web?",
          answer:
            "Běžný web obvykle trvá 2–4 týdny. Složitější projekty mohou trvat 6–8 týdnů. Přesný termín upřesníme na úvodní konzultaci.",
        },
        {
          question: "Jaký CMS používáte?",
          answer:
            "Nejčastěji WordPress + Oxygen Builder. U jednodušších webů umíme dodat i ručně kódované řešení. Záleží na potřebě správy a budoucího rozšiřování.",
        },
        {
          question: "Zajistíte i hosting?",
          answer:
            "Doporučíme vhodný hosting a pomůžeme s nastavením. Umíme nabídnout i spravovaný hosting, pokud chcete vše bez starostí.",
        },
        {
          question: "Bude web responzivní?",
          answer:
            "Ano — web je vždy optimalizovaný pro desktop, tablet i mobil.",
        },
        {
          question: "Děláte i údržbu?",
          answer:
            "Ano — nabízíme balíčky údržby (aktualizace, bezpečnost, zálohy, obsahové úpravy).",
        },
      ],
    },

    bottomCta: {
      titleBefore: "Připraveni spustit",
      titleHighlight: "web snů",
      titleAfter: "?",
      subtitle: "Pojďme probrat projekt a vytvořit něco fakt dobrého.",
      primary: "Bezplatná konzultace",
      secondary: "Zobrazit realizace",
    },
  },
};

/* ---------- CONTEXT ---------- */

const BuildingWebsiteLanguageContext = createContext<BuildingWebsiteLang | null>(null);

export const BuildingWebsiteLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  const value = translations[language] ?? translations.EN;

  return <BuildingWebsiteLanguageContext.Provider value={value}>{children}</BuildingWebsiteLanguageContext.Provider>;
};

export const useBuildingWebsiteLang = () => {
  const ctx = useContext(BuildingWebsiteLanguageContext);
  if (!ctx) throw new Error("useBuildingWebsiteLang must be used inside BuildingWebsiteLanguageProvider");
  return ctx;
};
