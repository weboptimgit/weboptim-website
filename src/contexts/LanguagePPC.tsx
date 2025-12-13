// src/contexts/LanguagePPC.tsx
import React, { createContext, useContext } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

/* ---------- TYPES ---------- */

type FaqItem = { question: string; answer: string };

type CampaignType = {
  title: string;
  description: string;
  platforms: string[];
};

type WhyItem = { title: string; description: string };

type ProcessItem = {
  step: string;
  title: string;
  description: string;
  duration: string;
};

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  adSpend: string;
  features: string[];
  popular?: boolean;
};

export type PpcLang = {
  seo: { title: string; description: string };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  dashboard: {
    title: string;
    clicksTodayLabel: string;
    roasLabel: string;
    avgCpcLabel: string;
    conversionsLabel: string;
    performanceLabel: string;
  };

  campaignTypes: {
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    items: CampaignType[];
  };

  whyPpc: {
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    items: WhyItem[];
  };

  process: {
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    steps: ProcessItem[];
  };

  pricing: {
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    popularBadge: string;
    cta: string;
    plans: PricingPlan[];
  };

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

/* ---------- FAQ ITEMS (NO SELF-REFERENCE) ---------- */

const EN_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How quickly will I see results from PPC advertising?",
    answer:
      "PPC can deliver results quickly — often within hours of launch. Optimization for best ROI usually takes 2–4 weeks as we gather data and refine targeting.",
  },
  {
    question: "What is a good ROAS (Return on Ad Spend)?",
    answer:
      "ROAS varies by industry, but 3:1 to 4:1 is often a healthy benchmark. We optimize towards your profitability targets and funnel metrics.",
  },
  {
    question: "Which platforms do you advertise on?",
    answer:
      "We manage Google Ads (Search, Shopping, Display, YouTube), Meta Ads, LinkedIn, TikTok, and Microsoft Advertising (Bing). We recommend platforms based on your audience and goals.",
  },
  {
    question: "How much should I budget for PPC?",
    answer:
      "It depends on competition and goals. A common start is €1,000–2,000/month for meaningful data. Management fees are separate from ad spend paid to platforms.",
  },
  {
    question: "Do you provide reporting and analytics?",
    answer:
      "Yes — reports include impressions, clicks, conversions, CPA, ROAS and more. You’ll also get dashboards and regular strategy calls.",
  },
  {
    question: "Can you help with landing page optimization?",
    answer:
      "Yes. We provide landing page recommendations and can build optimized landing pages in Growth/Enterprise packages.",
  },
];

const CZ_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Za jak dlouho uvidím výsledky PPC?",
    answer:
      "PPC umí přinést výsledky velmi rychle — často během hodin od spuštění. Pro nejlepší ROI obvykle ladíme 2–4 týdny.",
  },
  {
    question: "Jaké ROAS je dobré?",
    answer:
      "Záleží na oboru, ale ROAS 3–4× bývá zdravý benchmark. Optimalizujeme podle vaší ziskovosti a funnelu.",
  },
  {
    question: "Na jakých platformách inzerujete?",
    answer:
      "Spravujeme Google Ads (Search, Shopping, Display, YouTube), Meta Ads, LinkedIn, TikTok i Microsoft Advertising (Bing).",
  },
  {
    question: "Jaký rozpočet je vhodný pro PPC?",
    answer:
      "Záleží na konkurenci a cílech. Často dává smysl start kolem 1 000–2 000 €/měs., aby bylo dost dat.",
  },
  {
    question: "Dostanu reporting a analytiku?",
    answer:
      "Ano — reporty obsahují imprese, kliky, konverze, CPA, ROAS a další. Plus pravidelné konzultace.",
  },
  {
    question: "Pomůžete i s landing page?",
    answer:
      "Ano. Doporučíme úpravy LP a ve vyšších balíčcích umíme landing pages i postavit.",
  },
];

const SK_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Ako rýchlo uvidím výsledky PPC reklamy?",
    answer:
      "PPC vie priniesť výsledky veľmi rýchlo — často do pár hodín od spustenia. Pre top ROI zvyčajne ladíme 2–4 týždne.",
  },
  {
    question: "Aké ROAS je dobré?",
    answer:
      "Záleží od odvetvia, ale ROAS 3–4× býva zdravý benchmark. Optimalizujeme podľa vašej ziskovosti a funnelu.",
  },
  {
    question: "Na akých platformách inzerujete?",
    answer:
      "Spravujeme Google Ads (Search, Shopping, Display, YouTube), Meta Ads, LinkedIn, TikTok aj Microsoft Advertising (Bing).",
  },
  {
    question: "Aký rozpočet je vhodný na PPC?",
    answer:
      "Závisí od konkurencie a cieľov. Často dáva zmysel začať okolo 1 000–2 000 €/mes., aby bolo dosť dát.",
  },
  {
    question: "Dostanem reporting a analytiku?",
    answer:
      "Áno — reporty obsahujú impresie, kliky, konverzie, CPA, ROAS a ďalšie metriky. Plus pravidelné konzultácie.",
  },
  {
    question: "Pomôžete aj s landing page?",
    answer:
      "Áno. Odporučíme úpravy LP a vo vyšších balíkoch vieme landing pages aj postaviť.",
  },
];

/* ---------- TRANSLATIONS (NO SPREADS) ---------- */

const translations: Record<Language, PpcLang> = {
  EN: {
    seo: {
      title: "PPC Advertising Services | WebOptim",
      description:
        "Drive instant traffic and conversions with data-driven PPC campaigns. Google Ads, Meta Ads, and multi-platform strategies built for ROI.",
    },

    hero: {
      badge: "PPC Advertising",
      title1: "Scale Faster with",
      title2: "High-ROI PPC",
      subtitle:
        "Launch profitable campaigns across Google, Meta, and more — with full tracking, testing, and optimization.",
      ctaPrimary: "Get Free Consultation",
      ctaSecondary: "View Case Studies",
    },

    dashboard: {
      title: "Campaign Dashboard",
      clicksTodayLabel: "Clicks Today",
      roasLabel: "ROAS",
      avgCpcLabel: "Avg. CPC",
      conversionsLabel: "Conversions",
      performanceLabel: "Campaign Performance",
    },

    campaignTypes: {
      titleBefore: "Types of",
      titleHighlight: "PPC Campaigns",
      subtitle:
        "We create and manage campaigns across major advertising platforms to maximize reach and ROI.",
      items: [
        { title: "Search Ads", description: "Target users actively searching for your offer", platforms: ["Google Ads", "Bing Ads"] },
        { title: "Shopping Ads", description: "Product ads with image, price and direct link", platforms: ["Google Shopping", "Meta Shops"] },
        { title: "Social Media Ads", description: "Reach audiences on social platforms", platforms: ["Meta Ads", "LinkedIn", "TikTok"] },
        { title: "Video Ads", description: "High-impact video campaigns", platforms: ["YouTube Ads", "Reels Ads"] },
        { title: "Display & Remarketing", description: "Banners + retargeting past visitors", platforms: ["Google Display", "Remarketing"] },
        { title: "Local Ads", description: "Geo-targeted campaigns for local demand", platforms: ["Local Services", "Maps Ads"] },
      ],
    },

    whyPpc: {
      titleBefore: "Why invest in",
      titleHighlight: "PPC?",
      subtitle:
        "Unlike organic marketing, PPC gives you immediate visibility and full control over your budget.",
      items: [
        { title: "Instant results", description: "Traffic and leads right after launch" },
        { title: "Precise targeting", description: "Target by intent, interests and demographics" },
        { title: "Budget control", description: "Daily budgets, pause anytime, pay for performance" },
        { title: "Measurable ROI", description: "Track every conversion and real return on ad spend" },
        { title: "Scalable growth", description: "Increase budget on winners and scale what works" },
        { title: "Time flexibility", description: "Show ads when users are most likely to convert" },
      ],
    },

    process: {
      titleBefore: "Our PPC",
      titleHighlight: "Process",
      subtitle: "A proven methodology to launch and optimize high-performing campaigns.",
      steps: [
        { step: "01", title: "Audit & Strategy", description: "We analyze your business, competitors, and market", duration: "Week 1" },
        { step: "02", title: "Campaign Setup", description: "Build campaigns, ad groups, creatives and tracking", duration: "Week 2" },
        { step: "03", title: "Launch & Monitor", description: "Go live and monitor performance", duration: "Week 3" },
        { step: "04", title: "Optimize & Scale", description: "Data-driven improvements to maximize ROI", duration: "Ongoing" },
      ],
    },

    pricing: {
      titleBefore: "PPC Management",
      titleHighlight: "Pricing",
      subtitle: "Transparent pricing based on ad spend and complexity.",
      popularBadge: "Most Popular",
      cta: "Get Started",
      plans: [
        {
          name: "Starter",
          price: "€499",
          period: "/month",
          adSpend: "Up to €2,000 ad spend",
          features: ["1 advertising platform", "Setup & management", "Weekly optimization", "Monthly report", "Basic remarketing", "Email support"],
        },
        {
          name: "Growth",
          price: "€999",
          period: "/month",
          adSpend: "Up to €10,000 ad spend",
          popular: true,
          features: ["Up to 3 platforms", "Advanced structure", "Daily optimization", "Bi-weekly calls", "A/B testing", "Conversion tracking", "LP recommendations", "Priority support"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          adSpend: "€10,000+ ad spend",
          features: ["Unlimited platforms", "Dedicated manager", "Real-time reporting", "Weekly strategy", "Creative support", "Attribution", "Competitor monitoring", "24/7 support"],
        },
      ],
    },

    reviews: { title: "What Our Clients Say", subtitle: "Real feedback and results from our PPC clients." },

    faq: { serviceName: "PPC Advertising", title: "Frequently Asked Questions", subtitle: "Common questions about PPC.", items: EN_FAQ_ITEMS },

    ctaBottom: {
      titleBefore: "Ready to Scale Your",
      titleHighlight: "Business",
      titleAfter: "?",
      subtitle: "Get a free PPC audit and discover how much revenue you’re leaving on the table.",
      primary: "Get Free PPC Audit",
      secondary: "View Case Studies",
    },
  },

  CZ: {
    seo: {
      title: "PPC reklama | WebOptim",
      description:
        "Okamžitá návštěvnost a konverze díky PPC kampaním. Google Ads, Meta Ads i multi-platform strategie zaměřené na ROI.",
    },

    hero: {
      badge: "PPC reklama",
      title1: "Rychlejší růst díky",
      title2: "PPC s ROI",
      subtitle:
        "Ziskové kampaně na Google a sociálních sítích — tracking, testování a průběžná optimalizace.",
      ctaPrimary: "Konzultace zdarma",
      ctaSecondary: "Případové studie",
    },

    dashboard: {
      title: "Přehled kampaní",
      clicksTodayLabel: "Kliknutí dnes",
      roasLabel: "ROAS",
      avgCpcLabel: "Prům. CPC",
      conversionsLabel: "Konverze",
      performanceLabel: "Výkon kampaně",
    },

    campaignTypes: {
      titleBefore: "Typy",
      titleHighlight: "PPC kampaní",
      subtitle:
        "Spravujeme kampaně napříč hlavními platformami pro maximální dosah a návratnost.",
      items: [
        { title: "Vyhledávací reklamy", description: "Cílí na lidi, kteří aktivně hledají váš produkt/službu", platforms: ["Google Ads", "Bing Ads"] },
        { title: "Shopping reklamy", description: "Produktové reklamy s cenou a obrázkem", platforms: ["Google Shopping", "Meta Shops"] },
        { title: "Sociální sítě", description: "Reklamy na Facebooku, Instagramu, LinkedInu i TikToku", platforms: ["Meta Ads", "LinkedIn", "TikTok"] },
        { title: "Video reklamy", description: "Video kampaně na YouTube a social platformách", platforms: ["YouTube Ads", "Reels Ads"] },
        { title: "Display & remarketing", description: "Bannery + retargeting návštěvníků", platforms: ["Google Display", "Remarketing"] },
        { title: "Lokální reklamy", description: "Geo-targeting pro lokální poptávky a pobočky", platforms: ["Local Services", "Maps Ads"] },
      ],
    },

    whyPpc: {
      titleBefore: "Proč investovat do",
      titleHighlight: "PPC?",
      subtitle: "PPC přináší okamžitou viditelnost a plnou kontrolu nad rozpočtem.",
      items: [
        { title: "Okamžité výsledky", description: "Návštěvnost a leady hned po spuštění" },
        { title: "Přesné cílení", description: "Publika podle záměru, zájmů a demografie" },
        { title: "Kontrola rozpočtu", description: "Denní limity, pauza kdykoliv, platíte za výkon" },
        { title: "Měřitelná návratnost", description: "Sledujeme konverze, CPA a ROAS" },
        { title: "Škálovatelný růst", description: "Navýšení rozpočtu na vítězné kampaně" },
        { title: "Časová flexibilita", description: "Reklamy ve chvíli, kdy lidé konvertují" },
      ],
    },

    process: {
      titleBefore: "Náš PPC",
      titleHighlight: "proces",
      subtitle: "Ověřený postup pro spuštění a optimalizaci výkonných kampaní.",
      steps: [
        { step: "01", title: "Audit & strategie", description: "Analýza byznysu, konkurence a trhu", duration: "Týden 1" },
        { step: "02", title: "Nastavení kampaní", description: "Struktura, reklamy, kreativy a měření", duration: "Týden 2" },
        { step: "03", title: "Spuštění & monitoring", description: "Start + průběžné sledování a úpravy", duration: "Týden 3" },
        { step: "04", title: "Optimalizace & škálování", description: "Zlepšování ROI a škálování vítězů", duration: "Průběžně" },
      ],
    },

    pricing: {
      titleBefore: "Správa",
      titleHighlight: "PPC",
      subtitle: "Transparentní ceny podle spendu a složitosti kampaní.",
      popularBadge: "Nejoblíbenější",
      cta: "Začít",
      plans: [
        { name: "Starter", price: "499 €", period: "/ měs.", adSpend: "Do 2 000 € spend", features: ["1 platforma", "Nastavení + správa", "Týdenní optimalizace", "Měsíční report", "Základní remarketing", "E-mail podpora"] },
        { name: "Growth", price: "999 €", period: "/ měs.", adSpend: "Do 10 000 € spend", popular: true, features: ["Až 3 platformy", "Pokročilá struktura", "Denní optimalizace", "Call 2× měsíčně", "A/B testy", "Nastavení měření konverzí", "Doporučení LP", "Prioritní podpora"] },
        { name: "Enterprise", price: "Na míru", period: "", adSpend: "10 000 €+ spend", features: ["Neomezeně platforem", "Account manager", "Reporting v reálném čase", "Týdenní strategie", "Kreativa", "Attribution", "Monitoring konkurence", "24/7 podpora"] },
      ],
    },

    reviews: { title: "Co říkají klienti", subtitle: "Zkušenosti firem s našimi PPC kampaněmi." },

    faq: { serviceName: "PPC reklama", title: "Časté dotazy", subtitle: "Nejčastější otázky k PPC.", items: CZ_FAQ_ITEMS },

    ctaBottom: {
      titleBefore: "Připraveni škálovat",
      titleHighlight: "byznys",
      titleAfter: "?",
      subtitle: "Získejte PPC audit zdarma a zjistěte, kolik peněz vám utíká.",
      primary: "PPC audit zdarma",
      secondary: "Případové studie",
    },
  },

  SK: {
    seo: {
      title: "PPC reklama | WebOptim",
      description:
        "Okamžitá návštevnosť a konverzie vďaka PPC kampaniam. Google Ads, Meta Ads a multi-platform stratégie zamerané na ROI.",
    },

    hero: {
      badge: "PPC reklama",
      title1: "Rýchlejší rast vďaka",
      title2: "PPC s ROI",
      subtitle:
        "Ziskové kampane na Google a sociálnych sieťach — tracking, testovanie a priebežná optimalizácia.",
      ctaPrimary: "Konzultácia zdarma",
      ctaSecondary: "Case studies",
    },

    dashboard: {
      title: "Prehľad kampaní",
      clicksTodayLabel: "Kliky dnes",
      roasLabel: "ROAS",
      avgCpcLabel: "Priem. CPC",
      conversionsLabel: "Konverzie",
      performanceLabel: "Výkon kampane",
    },

    campaignTypes: {
      titleBefore: "Typy",
      titleHighlight: "PPC kampaní",
      subtitle:
        "Spravujeme kampane naprieč hlavnými platformami pre maximálny dosah a návratnosť.",
      items: [
        { title: "Vyhľadávacie reklamy", description: "Cielenie na ľudí, ktorí aktívne hľadajú vaše služby/produkty", platforms: ["Google Ads", "Bing Ads"] },
        { title: "Shopping reklamy", description: "Produktové reklamy s cenou a obrázkom", platforms: ["Google Shopping", "Meta Shops"] },
        { title: "Sociálne siete", description: "Reklamy na Facebooku, Instagrame, LinkedIne a TikToku", platforms: ["Meta Ads", "LinkedIn", "TikTok"] },
        { title: "Video reklamy", description: "Video kampane na YouTube a social platformách", platforms: ["YouTube Ads", "Reels Ads"] },
        { title: "Display & remarketing", description: "Bannery + retargeting návštevníkov", platforms: ["Google Display", "Remarketing"] },
        { title: "Lokálne reklamy", description: "Geo-targeting pre lokálne dopyty a prevádzky", platforms: ["Local Services", "Maps Ads"] },
      ],
    },

    whyPpc: {
      titleBefore: "Prečo investovať do",
      titleHighlight: "PPC?",
      subtitle: "PPC prináša okamžitú viditeľnosť a plnú kontrolu nad rozpočtom.",
      items: [
        { title: "Okamžité výsledky", description: "Návštevnosť a leady hneď po spustení" },
        { title: "Presné cielenie", description: "Publiká podľa zámeru, záujmov a demografie" },
        { title: "Kontrola rozpočtu", description: "Denné limity, pauza kedykoľvek, platíte za výkon" },
        { title: "Merateľná návratnosť", description: "Sledujeme konverzie, CPA a ROAS" },
        { title: "Škálovateľný rast", description: "Navýšenie rozpočtu na víťazné kampane" },
        { title: "Časová flexibilita", description: "Reklamy v čase, keď ľudia konvertujú" },
      ],
    },

    process: {
      titleBefore: "Náš PPC",
      titleHighlight: "proces",
      subtitle: "Overený postup pre spustenie a optimalizáciu výkonných kampaní.",
      steps: [
        { step: "01", title: "Audit & stratégia", description: "Analýza biznisu, konkurencie a trhu", duration: "Týždeň 1" },
        { step: "02", title: "Nastavenie kampaní", description: "Štruktúra, reklamy, kreatívy a meranie", duration: "Týždeň 2" },
        { step: "03", title: "Spustenie & monitoring", description: "Štart + priebežné sledovanie a úpravy", duration: "Týždeň 3" },
        { step: "04", title: "Optimalizácia & škálovanie", description: "Zlepšovanie ROI a škálovanie víťazov", duration: "Priebežne" },
      ],
    },

    pricing: {
      titleBefore: "Správa",
      titleHighlight: "PPC",
      subtitle: "Transparentné ceny podľa spendu a zložitosti kampaní.",
      popularBadge: "Najobľúbenejší",
      cta: "Začať",
      plans: [
        { name: "Starter", price: "499 €", period: "/ mes.", adSpend: "Do 2 000 € spend", features: ["1 platforma", "Nastavenie + správa", "Týždenná optimalizácia", "Mesačný report", "Základný remarketing", "E-mail podpora"] },
        { name: "Growth", price: "999 €", period: "/ mes.", adSpend: "Do 10 000 € spend", popular: true, features: ["Až 3 platformy", "Pokročilá štruktúra", "Denná optimalizácia", "Call 2× mesačne", "A/B testy", "Nastavenie merania konverzií", "Odporúčania pre LP", "Prioritná podpora"] },
        { name: "Enterprise", price: "Na mieru", period: "", adSpend: "10 000 €+ spend", features: ["Neobmedzene platforiem", "Account manager", "Reporting v reálnom čase", "Týždenné stratégie", "Kreatíva", "Attribution", "Monitoring konkurencie", "24/7 podpora"] },
      ],
    },

    reviews: { title: "Čo hovoria klienti", subtitle: "Skúsenosti firiem s našimi PPC kampaňami." },

    faq: { serviceName: "PPC reklama", title: "Časté otázky", subtitle: "Najčastejšie otázky k PPC.", items: SK_FAQ_ITEMS },

    ctaBottom: {
      titleBefore: "Pripravení škálovať",
      titleHighlight: "biznis",
      titleAfter: "?",
      subtitle: "Získajte PPC audit zdarma a zistite, koľko peňazí vám uniká.",
      primary: "PPC audit zdarma",
      secondary: "Case studies",
    },
  },
};

/* ---------- CONTEXT ---------- */

const PpcLanguageContext = createContext<PpcLang | null>(null);

export const PpcLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  const value = translations[language] ?? translations.EN;

  return <PpcLanguageContext.Provider value={value}>{children}</PpcLanguageContext.Provider>;
};

export const usePpcLang = () => {
  const ctx = useContext(PpcLanguageContext);
  if (!ctx) throw new Error("usePpcLang must be used inside PpcLanguageProvider");
  return ctx;
};
