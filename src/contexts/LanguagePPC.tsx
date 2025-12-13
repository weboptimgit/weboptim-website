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
  seo: {
    title: string;
    description: string;
  };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;

    dashboardTitle: string;
    dashboard: {
      clicksToday: string;
      roas: string;
      avgCpc: string;
      conversions: string;
      performance: string;
    };
  };

  campaignTypes: {
    title: string;
    subtitle: string;
    items: CampaignType[];
  };

  why: {
    title: string;
    subtitle: string;
    items: WhyItem[];
  };

  process: {
    title: string;
    subtitle: string;
    items: ProcessItem[];
  };

  pricing: {
    title: string;
    subtitle: string;
    popularBadge: string;
    cta: string;
    plans: PricingPlan[];
  };

  reviews: {
    title: string;
    subtitle: string;
  };

  faq: {
    serviceName: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };

  ctaBottom: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
};

/* ---------- SHARED DATA ---------- */

const EN_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How quickly will I see results from PPC advertising?",
    answer:
      "PPC can deliver results quickly — often within hours. Full optimization usually takes 2–4 weeks.",
  },
  {
    question: "What is a good ROAS?",
    answer:
      "ROAS depends on industry, but 3–4× is a healthy benchmark. We optimize for profitability.",
  },
  {
    question: "Which platforms do you advertise on?",
    answer:
      "Google Ads, Meta Ads, LinkedIn, TikTok and Microsoft Advertising (Bing).",
  },
  {
    question: "How much should I budget?",
    answer:
      "Most campaigns start at €1,000–2,000/month to collect meaningful data.",
  },
  {
    question: "Do you provide reports?",
    answer:
      "Yes. You get clear reports with clicks, conversions, CPA and ROAS.",
  },
  {
    question: "Can you help with landing pages?",
    answer:
      "Yes. We optimize landing pages or design new ones in higher plans.",
  },
];

/* ---------- EN ---------- */

const EN: PpcLang = {
  seo: {
    title: "PPC Advertising Services | WebOptim",
    description:
      "Data-driven PPC campaigns on Google and social media. More traffic, more conversions, better ROI.",
  },

  hero: {
    badge: "PPC Advertising",
    title1: "Scale Faster with",
    title2: "High-ROI PPC",
    subtitle:
      "Launch profitable campaigns across Google and social platforms with full tracking and optimization.",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "View Case Studies",

    dashboardTitle: "Campaign Dashboard",
    dashboard: {
      clicksToday: "Clicks Today",
      roas: "ROAS",
      avgCpc: "Avg. CPC",
      conversions: "Conversions",
      performance: "Performance",
    },
  },

  campaignTypes: {
    title: "PPC Campaign Types",
    subtitle:
      "We manage campaigns across all major advertising platforms.",
    items: [
      {
        title: "Search Ads",
        description: "Ads for users actively searching for your offer",
        platforms: ["Google Ads", "Bing Ads"],
      },
      {
        title: "Shopping Ads",
        description: "Product ads with price and image",
        platforms: ["Google Shopping", "Meta"],
      },
      {
        title: "Social Media Ads",
        description: "Reach audiences on social platforms",
        platforms: ["Facebook", "Instagram", "TikTok", "LinkedIn"],
      },
      {
        title: "Video Ads",
        description: "High-impact video campaigns",
        platforms: ["YouTube", "Reels"],
      },
      {
        title: "Remarketing",
        description: "Re-engage previous visitors",
        platforms: ["Google Display", "Meta"],
      },
    ],
  },

  why: {
    title: "Why PPC Advertising?",
    subtitle:
      "PPC gives you instant visibility and full control over spend.",
    items: [
      { title: "Instant Results", description: "Traffic immediately after launch" },
      { title: "Precise Targeting", description: "Target by intent and behavior" },
      { title: "Budget Control", description: "Pay only for results" },
      { title: "Measurable ROI", description: "Every click and conversion tracked" },
      { title: "Scalable Growth", description: "Scale what works" },
    ],
  },

  process: {
    title: "Our PPC Process",
    subtitle: "A proven system for consistent results.",
    items: [
      { step: "01", title: "Audit & Strategy", description: "Market and competitor analysis", duration: "Week 1" },
      { step: "02", title: "Setup", description: "Campaign and tracking setup", duration: "Week 2" },
      { step: "03", title: "Launch", description: "Go live and monitor", duration: "Week 3" },
      { step: "04", title: "Optimize", description: "Improve and scale", duration: "Ongoing" },
    ],
  },

  pricing: {
    title: "PPC Pricing",
    subtitle: "Transparent monthly pricing.",
    popularBadge: "Most Popular",
    cta: "Get Started",
    plans: [
      {
        name: "Starter",
        price: "€499",
        period: "/month",
        adSpend: "Up to €2,000",
        features: [
          "1 platform",
          "Campaign setup",
          "Weekly optimization",
          "Monthly report",
        ],
      },
      {
        name: "Growth",
        price: "€999",
        period: "/month",
        adSpend: "Up to €10,000",
        popular: true,
        features: [
          "Up to 3 platforms",
          "Daily optimization",
          "A/B testing",
          "Conversion tracking",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        adSpend: "€10,000+",
        features: [
          "Unlimited platforms",
          "Dedicated manager",
          "Advanced reporting",
          "Weekly strategy calls",
        ],
      },
    ],
  },

  reviews: {
    title: "What Clients Say",
    subtitle: "Real results from real businesses.",
  },

  faq: {
    serviceName: "PPC Advertising",
    title: "Frequently Asked Questions",
    subtitle: "Common PPC questions answered.",
    items: EN_FAQ_ITEMS,
  },

  ctaBottom: {
    titleBefore: "Ready to Scale Your",
    titleHighlight: "Business",
    titleAfter: "?",
    subtitle: "Get a free PPC audit today.",
    primary: "Free PPC Audit",
    secondary: "View Case Studies",
  },
};

/* ---------- TRANSLATIONS ---------- */

const translations: Record<Language, PpcLang> = {
  EN,

  CZ: {
    ...EN,
    seo: {
      title: "PPC reklama | WebOptim",
      description:
        "Výkonné PPC kampaně na Google a sociálních sítích zaměřené na ROI.",
    },
    hero: {
      ...EN.hero,
      badge: "PPC reklama",
      title1: "Rychlejší růst díky",
      title2: "PPC s ROI",
      ctaPrimary: "Konzultace zdarma",
      ctaSecondary: "Případové studie",
    },
    faq: {
      serviceName: "PPC reklama",
      title: "Časté dotazy",
      subtitle: "Nejčastější otázky k PPC.",
      items: EN_FAQ_ITEMS,
    },
  },

  SK: {
    ...EN,
    seo: {
      title: "PPC reklama | WebOptim",
      description:
        "Výkonné PPC kampane na Google a sociálnych sieťach zamerané na ROI.",
    },
    hero: {
      ...EN.hero,
      badge: "PPC reklama",
      title1: "Rýchlejší rast vďaka",
      title2: "PPC s ROI",
      ctaPrimary: "Konzultácia zdarma",
      ctaSecondary: "Case studies",
    },
    faq: {
      serviceName: "PPC reklama",
      title: "Časté otázky",
      subtitle: "Najčastejšie otázky k PPC.",
      items: EN_FAQ_ITEMS,
    },
  },
};

/* ---------- CONTEXT ---------- */

const PpcLanguageContext = createContext<PpcLang | null>(null);

export const PpcLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  const value = translations[language] ?? translations.EN;

  return (
    <PpcLanguageContext.Provider value={value}>
      {children}
    </PpcLanguageContext.Provider>
  );
};

export const usePpcLang = () => {
  const ctx = useContext(PpcLanguageContext);
  if (!ctx) throw new Error("usePpcLang must be used inside PpcLanguageProvider");
  return ctx;
};
