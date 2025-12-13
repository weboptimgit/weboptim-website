// src/contexts/LanguageGraphic.tsx
import React, { createContext, useContext } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

/* ---------- TYPES ---------- */

type FaqItem = { question: string; answer: string };

type ServiceTile = {
  name: string;
  description: string;
  color: string; // keep gradients
};

type MetricItem = {
  value: string;
  label: string;
};

type FeatureItem = {
  title: string;
  description: string;
  gradient: string;
};

type PricingPlan = {
  name: string;
  price: string; // string, you show "$"
  description: string;
  features: string[];
  popular?: boolean;
};

export type GraphicLang = {
  seo: { title: string; description: string };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    dashboardTitle: string;
  };

  tiles: ServiceTile[];
  metrics: MetricItem[];

  sectionCreate: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
  };

  features: FeatureItem[];

  pricing: {
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    popularBadge: string;
    pricePrefix: string; // e.g. "$"
    priceSuffix: string; // e.g. "starting"
    cta: string;
  };

  plans: PricingPlan[];

  reviews: { title: string; subtitle: string };

  faq: { serviceName: string; title: string; subtitle: string; items: FaqItem[] };

  ctaBottom: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
};

/* ---------- TRANSLATIONS ---------- */

const translations: Record<Language, GraphicLang> = {
  EN: {
    seo: {
      title: "Graphic Design Services | WebOptim",
      description:
        "Full-service graphic design: corporate identity, print design, digital graphics, packaging, marketing materials, and custom illustrations.",
    },

    hero: {
      badge: "Graphic Design",
      title1: "Design That",
      title2: "Stands Out",
      subtitle:
        "From brand identity to campaigns — we create visuals that look great and clearly support your business goals.",
      ctaPrimary: "Get a Quote",
      ctaSecondary: "View Portfolio",
      dashboardTitle: "Design Services",
    },

    tiles: [
      { name: "Corporate Identity", description: "Logos & brand systems", color: "from-purple-500 to-violet-500" },
      { name: "Print Design", description: "Brochures, flyers, cards", color: "from-blue-500 to-cyan-500" },
      { name: "Digital Graphics", description: "Social & web banners", color: "from-pink-500 to-rose-500" },
      { name: "Packaging", description: "Product packaging", color: "from-orange-500 to-amber-500" },
      { name: "Marketing Materials", description: "Ads & presentations", color: "from-green-500 to-emerald-500" },
      { name: "Illustrations", description: "Custom artwork", color: "from-indigo-500 to-blue-500" },
    ],

    metrics: [
      { value: "500+", label: "Designs Created" },
      { value: "100+", label: "Brand Identities" },
      { value: "150+", label: "Happy Clients" },
      { value: "5.0", label: "Client Rating" },
    ],

    sectionCreate: {
      eyebrow: "What We Create",
      titleBefore: "Full-Service",
      titleHighlight: "Graphic Design",
      subtitle:
        "We pride ourselves on creating design that not only stands out but also demonstrably fulfils its purpose.",
    },

    features: [
      {
        title: "Corporate Identity",
        description:
          "Complete brand systems including logos, color palettes, typography, and brand guidelines that define your visual identity",
        gradient: "from-purple-500 to-violet-500",
      },
      {
        title: "Print Design",
        description:
          "Professional print materials including business cards, brochures, posters, flyers, and promotional materials",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Digital Graphics",
        description: "Eye-catching social media graphics, web banners, email templates, and digital advertising assets",
        gradient: "from-pink-500 to-rose-500",
      },
      {
        title: "Packaging Design",
        description: "Standout product packaging that captures attention on shelves and reinforces your brand",
        gradient: "from-orange-500 to-amber-500",
      },
      {
        title: "Publication Design",
        description: "Magazines, catalogs, annual reports, and multi-page documents with professional layouts",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Custom Illustrations",
        description: "Unique illustrations and icons tailored to your brand that make your content stand out",
        gradient: "from-indigo-500 to-blue-500",
      },
    ],

    pricing: {
      titleBefore: "Transparent",
      titleHighlight: "Pricing",
      subtitle: "Choose the package that fits your needs",
      popularBadge: "Most Popular",
      pricePrefix: "$",
      priceSuffix: "starting",
      cta: "Get Started",
    },

    plans: [
      {
        name: "Starter",
        price: "299",
        description: "Perfect for small projects",
        features: ["Business card design", "Social media graphics (5)", "2 revision rounds", "Digital files delivery", "3-5 day turnaround"],
      },
      {
        name: "Professional",
        price: "799",
        description: "Complete branding package",
        popular: true,
        features: [
          "Logo design (3 concepts)",
          "Business card & letterhead",
          "Social media kit",
          "Brand guidelines",
          "Print-ready files",
          "3 revision rounds",
        ],
      },
      {
        name: "Enterprise",
        price: "1,999",
        description: "Full brand identity system",
        features: [
          "Complete logo system",
          "Full stationery suite",
          "Marketing materials",
          "Packaging design",
          "Brand book (20+ pages)",
          "Unlimited revisions",
          "Priority support",
        ],
      },
    ],

    reviews: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from clients who trusted us with their brand and visuals.",
    },

    faq: {
      serviceName: "Graphic Design Services",
      title: "Frequently Asked Questions",
      subtitle: "Common questions about our graphic design services.",
      items: [
        {
          question: "What file formats do you deliver?",
          answer:
            "We deliver all industry-standard formats including AI, EPS, PDF, PNG, JPG, and SVG. For print projects, we provide press-ready files with proper bleed and color profiles.",
        },
        {
          question: "How many revision rounds are included?",
          answer:
            "Our packages include 2–3 revision rounds depending on the project scope. We work closely with you to ensure the final design meets your vision.",
        },
        {
          question: "Do you handle printing as well?",
          answer:
            "Yes, we can manage the entire print process from design to delivery. We work with trusted print partners to ensure quality and competitive pricing.",
        },
        {
          question: "What's your typical turnaround time?",
          answer:
            "Simple projects like business cards take 3–5 business days. Complex projects like brand identity packages take 2–4 weeks. Rush delivery is available for urgent needs.",
        },
      ],
    },

    ctaBottom: {
      titleBefore: "Ready to Create Something",
      titleHighlight: "Amazing",
      titleAfter: "?",
      subtitle: "Let's discuss your project and bring your vision to life with stunning visuals.",
      primary: "Start Your Project",
      secondary: "View Our Work",
    },
  },

  CZ: {
    seo: {
      title: "Grafický design | WebOptim",
      description:
        "Kompletní grafické služby: firemní identita, tiskoviny, digitální grafika, obaly, marketingové materiály i ilustrace.",
    },

    hero: {
      badge: "Grafický design",
      title1: "Design, který",
      title2: "vynikne",
      subtitle:
        "Od brand identity po kampaně — tvoříme vizuály, které skvěle vypadají a zároveň podporují vaše cíle.",
      ctaPrimary: "Nezávazná nabídka",
      ctaSecondary: "Zobrazit portfolio",
      dashboardTitle: "Design služby",
    },

    tiles: [
      { name: "Firemní identita", description: "Loga & brand systém", color: "from-purple-500 to-violet-500" },
      { name: "Tiskoviny", description: "Brožury, letáky, vizitky", color: "from-blue-500 to-cyan-500" },
      { name: "Digitální grafika", description: "Sítě & bannery", color: "from-pink-500 to-rose-500" },
      { name: "Obaly", description: "Produktové balení", color: "from-orange-500 to-amber-500" },
      { name: "Marketing", description: "Reklamy & prezentace", color: "from-green-500 to-emerald-500" },
      { name: "Ilustrace", description: "Grafika na míru", color: "from-indigo-500 to-blue-500" },
    ],

    metrics: [
      { value: "500+", label: "Vytvořených návrhů" },
      { value: "100+", label: "Brand identit" },
      { value: "150+", label: "Spokojených klientů" },
      { value: "5.0", label: "Hodnocení klientů" },
    ],

    sectionCreate: {
      eyebrow: "Co tvoříme",
      titleBefore: "Kompletní",
      titleHighlight: "grafické služby",
      subtitle:
        "Tvoříme design, který nejen zaujme, ale hlavně plní svůj účel — podporuje značku i prodeje.",
    },

    features: [
      {
        title: "Firemní identita",
        description: "Logo, barvy, typografie a brand manuál — systém, který definuje vaši značku",
        gradient: "from-purple-500 to-violet-500",
      },
      {
        title: "Tiskový design",
        description: "Vizitky, brožury, plakáty, letáky a promo materiály připravené pro tisk",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Digitální grafika",
        description: "Grafika pro sociální sítě, web bannery, e-mail šablony a digitální reklamu",
        gradient: "from-pink-500 to-rose-500",
      },
      {
        title: "Design obalů",
        description: "Obaly, které zaujmou v regálu a posílí dojem z vaší značky",
        gradient: "from-orange-500 to-amber-500",
      },
      {
        title: "Publikace",
        description: "Katalogy, magazíny, výroční zprávy a vícestránkové dokumenty s profi sazbou",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Ilustrace na míru",
        description: "Originální ilustrace a ikonky, které sedí k vaší značce a odliší obsah",
        gradient: "from-indigo-500 to-blue-500",
      },
    ],

    pricing: {
      titleBefore: "Transparentní",
      titleHighlight: "ceny",
      subtitle: "Vyberte balíček, který vám sedí",
      popularBadge: "Nejoblíbenější",
      pricePrefix: "$",
      priceSuffix: "od",
      cta: "Začít",
    },

    plans: [
      {
        name: "Starter",
        price: "299",
        description: "Ideální pro menší projekty",
        features: ["Návrh vizitky", "Grafika na sítě (5)", "2 kola úprav", "Dodání digitálních souborů", "Dodání 3–5 dní"],
      },
      {
        name: "Professional",
        price: "799",
        description: "Kompletní branding balíček",
        popular: true,
        features: ["Logo (3 koncepty)", "Vizitka & hlavičkový papír", "Social media kit", "Brand guidelines", "Tisková data", "3 kola úprav"],
      },
      {
        name: "Enterprise",
        price: "1,999",
        description: "Celý systém vizuální identity",
        features: ["Kompletní logo systém", "Celá sada tiskovin", "Marketingové materiály", "Design obalu", "Brand book (20+ stran)", "Neomezené úpravy", "Prioritní podpora"],
      },
    ],

    reviews: {
      title: "Co říkají klienti",
      subtitle: "Reálné reference od klientů, kteří nám svěřili značku i vizuály.",
    },

    faq: {
      serviceName: "Grafický design",
      title: "Časté dotazy",
      subtitle: "Nejčastější otázky k našim grafickým službám.",
      items: [
        {
          question: "V jakých formátech dodáváte soubory?",
          answer:
            "Dodáváme standardní formáty: AI, EPS, PDF, PNG, JPG a SVG. U tisku vždy připravíme tisková data včetně spadávky a správných profilů.",
        },
        {
          question: "Kolik kol úprav je v ceně?",
          answer:
            "V balíčcích jsou 2–3 kola úprav podle rozsahu. Pracujeme s vámi tak, aby výsledek odpovídal vaší představě.",
        },
        {
          question: "Zajišťujete i tisk?",
          answer:
            "Ano. Umíme zařídit celý tisk od návrhu po dodání. Spolupracujeme s ověřenými tiskárnami pro kvalitu i dobrou cenu.",
        },
        {
          question: "Jak rychle to obvykle hotové?",
          answer:
            "Menší projekty (např. vizitky) obvykle 3–5 pracovních dnů. Branding balíčky 2–4 týdny. Expresní dodání je možné.",
        },
      ],
    },

    ctaBottom: {
      titleBefore: "Chcete vytvořit něco",
      titleHighlight: "skvělého",
      titleAfter: "?",
      subtitle: "Domluvme si projekt a přetvořme vaši vizi do výrazných vizuálů.",
      primary: "Začít projekt",
      secondary: "Naše práce",
    },
  },

  SK: {
    seo: {
      title: "Grafický dizajn | WebOptim",
      description:
        "Komplexné grafické služby: firemná identita, tlačoviny, digitálna grafika, obaly, marketingové materiály aj ilustrácie.",
    },

    hero: {
      badge: "Grafický dizajn",
      title1: "Dizajn, ktorý",
      title2: "vynikne",
      subtitle:
        "Od brand identity po kampane — tvoríme vizuály, ktoré vyzerajú skvelo a zároveň podporujú vaše ciele.",
      ctaPrimary: "Cenová ponuka",
      ctaSecondary: "Pozrieť portfólio",
      dashboardTitle: "Dizajn služby",
    },

    tiles: [
      { name: "Firemná identita", description: "Logá & brand systém", color: "from-purple-500 to-violet-500" },
      { name: "Tlačoviny", description: "Brožúry, letáky, vizitky", color: "from-blue-500 to-cyan-500" },
      { name: "Digitálna grafika", description: "Siete & bannery", color: "from-pink-500 to-rose-500" },
      { name: "Obaly", description: "Produktové balenie", color: "from-orange-500 to-amber-500" },
      { name: "Marketing", description: "Reklamy & prezentácie", color: "from-green-500 to-emerald-500" },
      { name: "Ilustrácie", description: "Grafika na mieru", color: "from-indigo-500 to-blue-500" },
    ],

    metrics: [
      { value: "500+", label: "Vytvorených návrhov" },
      { value: "100+", label: "Brand identít" },
      { value: "150+", label: "Spokojných klientov" },
      { value: "5.0", label: "Hodnotenie klientov" },
    ],

    sectionCreate: {
      eyebrow: "Čo tvoríme",
      titleBefore: "Komplexný",
      titleHighlight: "grafický dizajn",
      subtitle:
        "Tvoríme dizajn, ktorý nielen zaujme, ale hlavne plní svoj účel — podporuje značku aj predaje.",
    },

    features: [
      {
        title: "Firemná identita",
        description: "Logo, farby, typografia a brand manuál — systém, ktorý definuje vašu značku",
        gradient: "from-purple-500 to-violet-500",
      },
      {
        title: "Tlačový dizajn",
        description: "Vizitky, brožúry, plagáty, letáky a promo materiály pripravené na tlač",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Digitálna grafika",
        description: "Grafika pre sociálne siete, web bannery, e-mail šablóny a digitálnu reklamu",
        gradient: "from-pink-500 to-rose-500",
      },
      {
        title: "Dizajn obalov",
        description: "Obaly, ktoré zaujmú v regáli a posilnia dojem z vašej značky",
        gradient: "from-orange-500 to-amber-500",
      },
      {
        title: "Publikácie",
        description: "Katalógy, magazíny, výročné správy a viacstranové dokumenty s profi sadzbou",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Ilustrácie na mieru",
        description: "Originálne ilustrácie a ikony, ktoré sedia k značke a odlíšia váš obsah",
        gradient: "from-indigo-500 to-blue-500",
      },
    ],

    pricing: {
      titleBefore: "Transparentné",
      titleHighlight: "ceny",
      subtitle: "Vyberte si balík, ktorý vám sedí",
      popularBadge: "Najobľúbenejšie",
      pricePrefix: "$",
      priceSuffix: "od",
      cta: "Začať",
    },

    plans: [
      {
        name: "Starter",
        price: "299",
        description: "Ideálne pre menšie projekty",
        features: ["Návrh vizitky", "Grafika na siete (5)", "2 kolá úprav", "Dodanie digitálnych súborov", "Dodanie 3–5 dní"],
      },
      {
        name: "Professional",
        price: "799",
        description: "Kompletný branding balík",
        popular: true,
        features: ["Logo (3 koncepty)", "Vizitka & hlavičkový papier", "Social media kit", "Brand guidelines", "Tlačové dáta", "3 kolá úprav"],
      },
      {
        name: "Enterprise",
        price: "1,999",
        description: "Celý systém vizuálnej identity",
        features: ["Kompletný logo systém", "Celá sada tlačovín", "Marketingové materiály", "Dizajn obalu", "Brand book (20+ strán)", "Neobmedzené úpravy", "Prioritná podpora"],
      },
    ],

    reviews: {
      title: "Čo hovoria klienti",
      subtitle: "Reálne referencie od klientov, ktorí nám zverili značku aj vizuály.",
    },

    faq: {
      serviceName: "Grafický dizajn",
      title: "Časté otázky",
      subtitle: "Najčastejšie otázky k našim grafickým službám.",
      items: [
        {
          question: "V akých formátoch dodávate súbory?",
          answer:
            "Dodávame štandardné formáty: AI, EPS, PDF, PNG, JPG a SVG. Pri tlači vždy pripravíme tlačové dáta vrátane spadávky a správnych profilov.",
        },
        {
          question: "Koľko kôl úprav je v cene?",
          answer:
            "V balíkoch sú 2–3 kolá úprav podľa rozsahu. Spolupracujeme s vami tak, aby výsledok sedel vašej predstave.",
        },
        {
          question: "Viete zabezpečiť aj tlač?",
          answer:
            "Áno. Vieme zariadiť celý proces tlače od návrhu po dodanie. Spolupracujeme s overenými tlačiarňami pre kvalitu aj dobrú cenu.",
        },
        {
          question: "Aký je bežný čas dodania?",
          answer:
            "Menšie projekty (napr. vizitky) zvyčajne 3–5 pracovných dní. Branding balíky 2–4 týždne. Expresné dodanie je možné.",
        },
      ],
    },

    ctaBottom: {
      titleBefore: "Ste pripravení vytvoriť niečo",
      titleHighlight: "skvelé",
      titleAfter: "?",
      subtitle: "Poďme prebrať projekt a pretaviť vašu víziu do výrazných vizuálov.",
      primary: "Začať projekt",
      secondary: "Naše práce",
    },
  },
};

/* ---------- CONTEXT ---------- */

const GraphicLanguageContext = createContext<GraphicLang | null>(null);

export const GraphicLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  const value = translations[language] ?? translations.EN;

  return <GraphicLanguageContext.Provider value={value}>{children}</GraphicLanguageContext.Provider>;
};

export const useGraphicLang = () => {
  const ctx = useContext(GraphicLanguageContext);
  if (!ctx) throw new Error("useGraphicLang must be used inside GraphicLanguageProvider");
  return ctx;
};
