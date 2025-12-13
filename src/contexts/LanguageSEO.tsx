// src/contexts/LanguageSEO.tsx
import { createContext, useContext } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

type FaqItem = { question: string; answer: string };

type MetricItem = { value: string; label: string };

type SeoServiceItem = {
  name: string;
  icon: string;
  description: string;
  // color necháme v page (vizuál)
};

type FeatureItem = { title: string; description: string };

type ProcessStep = { step: string; title: string; description: string; duration: string };

type PackageItem = { name: string; description: string; price: string; features: string[]; popular?: boolean };

export type SeoLang = {
  seo: { title: string; description: string };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  metrics: MetricItem[];

  animatedRankings: {
    title: string;
    liveBadge: string;
    columns: { keyword: string; pos: string; change: string; volume: string };
    rows: Array<{ keyword: string; position: number; change: string; volume: string }>;
    trafficBadge: string;
  };

  servicesShowcase: {
    title: string;
    subtitle: string;
    items: SeoServiceItem[];
  };

  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };

  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };

  pricing: {
    title: string;
    subtitle: string;
    popularBadge: string;
    cta: string;
    packages: PackageItem[];
  };

  reviews: { title: string; subtitle: string };

  faq: { serviceName: string; title: string; subtitle: string; items: FaqItem[] };

  ctaBottom: {
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
};

const translations: Record<Language, SeoLang> = {
  EN: {
    seo: {
      title: "SEO Services | WebOptim",
      description:
        "Grow organic traffic with proven SEO strategies: keyword research, technical SEO, content, link building, local SEO and transparent reporting.",
    },
    hero: {
      badge: "SEO Services",
      title1: "Dominate Search with",
      title2: "Expert SEO",
      subtitle:
        "Boost your rankings with proven strategies. Keyword research, link building, and technical optimization.",
      ctaPrimary: "Get Free SEO Audit",
      ctaSecondary: "View Case Studies",
    },
    metrics: [
      { value: "300%", label: "Avg. Traffic Increase" },
      { value: "Top 10", label: "Keyword Rankings" },
      { value: "150+", label: "Happy Clients" },
      { value: "5.0", label: "Client Rating" },
    ],
    animatedRankings: {
      title: "Keyword Rankings",
      liveBadge: "Live",
      columns: { keyword: "Keyword", pos: "Pos.", change: "Change", volume: "Volume" },
      rows: [
        { keyword: "web design agency", position: 3, change: "+5", volume: "2.4K" },
        { keyword: "wordpress developer", position: 1, change: "+12", volume: "1.8K" },
        { keyword: "ecommerce website", position: 4, change: "+8", volume: "3.1K" },
      ],
      trafficBadge: "+156% Traffic",
    },
    servicesShowcase: {
      title: "Complete SEO Solutions",
      subtitle: "Everything you need to dominate search results",
      items: [
        { name: "Keyword Research", icon: "🔍", description: "Find winning keywords" },
        { name: "Link Building", icon: "🔗", description: "Quality backlinks" },
        { name: "Local SEO", icon: "📍", description: "Dominate local search" },
        { name: "Technical SEO", icon: "⚙️", description: "Site optimization" },
        { name: "Analytics", icon: "📊", description: "Data-driven results" },
      ],
    },
    features: {
      title: "What's Included",
      subtitle: "Comprehensive SEO services to improve every aspect of your search visibility",
      items: [
        {
          title: "Keyword Research & Analysis",
          description:
            "Deep dive into search intent, competition analysis, and identifying high-value keywords that drive qualified traffic",
        },
        {
          title: "Link Building Campaigns",
          description:
            "White-hat strategies to earn quality backlinks from authoritative domains that boost your rankings",
        },
        {
          title: "Local SEO Optimization",
          description:
            "Google Business Profile, local citations, and geo-targeted strategies to dominate local search results",
        },
        {
          title: "Technical SEO Audits",
          description:
            "Core Web Vitals, site speed, crawlability, schema markup, and fixing issues that hurt rankings",
        },
        {
          title: "Content Strategy",
          description: "Data-driven content planning, optimization, and creation that ranks and converts",
        },
        {
          title: "Reporting & Analytics",
          description: "Transparent monthly reports with rankings, traffic, conversions, and ROI tracking",
        },
      ],
    },
    process: {
      title: "Our SEO Process",
      subtitle: "A proven methodology that delivers consistent results",
      steps: [
        { step: "01", title: "SEO Audit", description: "Complete analysis of your current SEO health", duration: "1-2 days" },
        { step: "02", title: "Strategy", description: "Custom roadmap based on your goals", duration: "2-3 days" },
        { step: "03", title: "On-Page SEO", description: "Optimizing content, meta tags & structure", duration: "1-2 weeks" },
        { step: "04", title: "Technical Fixes", description: "Speed, mobile, Core Web Vitals", duration: "1-2 weeks" },
        { step: "05", title: "Link Building", description: "Earning quality backlinks", duration: "Ongoing" },
        { step: "06", title: "Monitor & Grow", description: "Track rankings & refine strategy", duration: "Monthly" },
      ],
    },
    pricing: {
      title: "SEO Packages",
      subtitle: "Flexible plans that grow with your business",
      popularBadge: "Most Popular",
      cta: "Get Started",
      packages: [
        {
          name: "SEO Starter",
          description: "For small businesses",
          price: "€500/mo",
          features: ["5 keywords tracked", "Monthly report", "On-page optimization", "Technical audit", "Email support"],
        },
        {
          name: "SEO Growth",
          description: "For growing businesses",
          price: "€1,200/mo",
          popular: true,
          features: ["20 keywords tracked", "Bi-weekly reports", "Link building", "Content strategy", "Local SEO", "Priority support"],
        },
        {
          name: "SEO Enterprise",
          description: "Full-scale SEO",
          price: "Custom",
          features: ["Unlimited keywords", "Weekly reports", "Dedicated manager", "Content creation", "Competitor analysis", "API access"],
        },
      ],
    },
    reviews: {
      title: "What Our Clients Say",
      subtitle: "See what businesses say about their SEO results.",
    },
    faq: {
      serviceName: "SEO",
      title: "Frequently Asked Questions",
      subtitle: "Common questions about our SEO services.",
      items: [
        {
          question: "How long does SEO take to show results?",
          answer:
            "SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results in 6-12 months depending on competition and your starting point.",
        },
        {
          question: "What's included in your SEO packages?",
          answer:
            "Our packages include keyword research, on-page optimization, technical SEO audits, link building, content strategy, and monthly reporting. Higher tiers include more keywords and additional services.",
        },
        {
          question: "Do you guarantee rankings?",
          answer:
            "No ethical SEO agency can guarantee specific rankings as search algorithms change constantly. We focus on sustainable growth and proven strategies that deliver long-term results.",
        },
        {
          question: "How do you measure SEO success?",
          answer:
            "We track keyword rankings, organic traffic, conversions, and ROI. You receive detailed monthly reports with all key metrics and actionable insights.",
        },
      ],
    },
    ctaBottom: {
      titleBefore: "Ready to Dominate",
      titleHighlight: "Search Results",
      subtitle: "Get a free SEO audit and discover how we can boost your rankings and drive more organic traffic",
      primary: "Get Free SEO Audit",
      secondary: "View Case Studies",
    },
  },

  CZ: {
    seo: {
      title: "SEO služby | WebOptim",
      description:
        "Zvyšte organickou návštěvnost díky SEO: analýza klíčových slov, technické SEO, obsah, linkbuilding, lokální SEO a transparentní reporting.",
    },
    hero: {
      badge: "SEO služby",
      title1: "Ovládněte vyhledávání s",
      title2: "Expertním SEO",
      subtitle:
        "Zlepšete pozice pomocí ověřených strategií. Analýza klíčových slov, linkbuilding a technická optimalizace.",
      ctaPrimary: "SEO audit zdarma",
      ctaSecondary: "Případové studie",
    },
    metrics: [
      { value: "300%", label: "Prům. nárůst návštěvnosti" },
      { value: "Top 10", label: "Pozice klíčových slov" },
      { value: "150+", label: "Spokojených klientů" },
      { value: "5.0", label: "Hodnocení klientů" },
    ],
    animatedRankings: {
      title: "Pozice klíčových slov",
      liveBadge: "Live",
      columns: { keyword: "Klíčové slovo", pos: "Poz.", change: "Změna", volume: "Objem" },
      rows: [
        { keyword: "web design agentura", position: 3, change: "+5", volume: "2.4K" },
        { keyword: "wordpress vývojář", position: 1, change: "+12", volume: "1.8K" },
        { keyword: "tvorba e-shopu", position: 4, change: "+8", volume: "3.1K" },
      ],
      trafficBadge: "+156 % návštěvnost",
    },
    servicesShowcase: {
      title: "Kompletní SEO řešení",
      subtitle: "Vše, co potřebujete pro top pozice",
      items: [
        { name: "Analýza klíčových slov", icon: "🔍", description: "Najdeme výherní dotazy" },
        { name: "Linkbuilding", icon: "🔗", description: "Kvalitní odkazy" },
        { name: "Lokální SEO", icon: "📍", description: "Dominujte lokálně" },
        { name: "Technické SEO", icon: "⚙️", description: "Optimalizace webu" },
        { name: "Analytika", icon: "📊", description: "Data a výsledky" },
      ],
    },
    features: {
      title: "Co je v ceně",
      subtitle: "Komplexní SEO služby, které zlepší každý aspekt viditelnosti ve vyhledávání",
      items: [
        {
          title: "Analýza klíčových slov",
          description: "Search intent, konkurence a výběr klíčových slov, která přivádí relevantní návštěvnost",
        },
        {
          title: "Linkbuilding kampaně",
          description: "White-hat strategie pro získávání kvalitních odkazů z autoritativních domén",
        },
        {
          title: "Lokální SEO",
          description: "Google Business Profile, citace a geo strategie pro lepší lokální výsledky",
        },
        {
          title: "Technický SEO audit",
          description: "Core Web Vitals, rychlost, indexace, schema markup a opravy chyb brzdících růst",
        },
        {
          title: "Obsahová strategie",
          description: "Plánování, optimalizace a tvorba obsahu, který rankuje i konvertuje",
        },
        {
          title: "Reporting & analytika",
          description: "Měsíční reporty: pozice, návštěvnost, konverze a měření ROI",
        },
      ],
    },
    process: {
      title: "Náš SEO proces",
      subtitle: "Ověřená metodika, která přináší stabilní výsledky",
      steps: [
        { step: "01", title: "SEO audit", description: "Kompletní analýza aktuálního stavu", duration: "1–2 dny" },
        { step: "02", title: "Strategie", description: "Roadmapa dle cílů", duration: "2–3 dny" },
        { step: "03", title: "On-page SEO", description: "Optimalizace obsahu, meta tagů a struktury", duration: "1–2 týdny" },
        { step: "04", title: "Technické opravy", description: "Rychlost, mobil, Core Web Vitals", duration: "1–2 týdny" },
        { step: "05", title: "Linkbuilding", description: "Získávání kvalitních odkazů", duration: "Průběžně" },
        { step: "06", title: "Monitoring & růst", description: "Sledování pozic a ladění strategie", duration: "Měsíčně" },
      ],
    },
    pricing: {
      title: "SEO balíčky",
      subtitle: "Flexibilní plány, které porostou s vaším byznysem",
      popularBadge: "Nejoblíbenější",
      cta: "Začít",
      packages: [
        {
          name: "SEO Starter",
          description: "Pro malé firmy",
          price: "500 € / měs.",
          features: ["5 klíčových slov", "Měsíční report", "On-page optimalizace", "Technický audit", "E-mail podpora"],
        },
        {
          name: "SEO Growth",
          description: "Pro rostoucí firmy",
          price: "1 200 € / měs.",
          popular: true,
          features: ["20 klíčových slov", "Report 2× měsíčně", "Linkbuilding", "Obsahová strategie", "Lokální SEO", "Prioritní podpora"],
        },
        {
          name: "SEO Enterprise",
          description: "Komplexní SEO",
          price: "Na míru",
          features: ["Neomezeně klíčových slov", "Týdenní reporty", "Dedikovaný manažer", "Tvorba obsahu", "Analýza konkurence", "API přístup"],
        },
      ],
    },
    reviews: {
      title: "Co říkají klienti",
      subtitle: "Podívejte se, co firmy říkají na výsledky našeho SEO.",
    },
    faq: {
      serviceName: "SEO",
      title: "Časté dotazy",
      subtitle: "Nejčastější otázky k našim SEO službám.",
      items: [
        {
          question: "Za jak dlouho uvidím výsledky?",
          answer:
            "SEO je dlouhodobá strategie. První zlepšení bývá za 3–6 měsíců, výraznější výsledky za 6–12 měsíců dle konkurence a výchozího stavu.",
        },
        {
          question: "Co obsahují SEO balíčky?",
          answer:
            "Analýzu klíčových slov, on-page optimalizaci, technický audit, linkbuilding, obsahovou strategii a měsíční reporting. Vyšší balíčky zahrnují více klíčových slov a další služby.",
        },
        {
          question: "Garantujete pozice?",
          answer:
            "Ne. Seriózní SEO agentura nemůže garantovat konkrétní pozice, protože algoritmy se mění. Zaměřujeme se na udržitelný růst a ověřené postupy.",
        },
        {
          question: "Jak měříte úspěch?",
          answer:
            "Sledujeme pozice klíčových slov, organickou návštěvnost, konverze a ROI. Každý měsíc dostanete report se všemi metrikami i doporučeními.",
        },
      ],
    },
    ctaBottom: {
      titleBefore: "Připraveni ovládnout",
      titleHighlight: "vyhledávání",
      subtitle: "Získejte SEO audit zdarma a zjistěte, jak zvýšíme pozice a přivedeme více organické návštěvnosti",
      primary: "SEO audit zdarma",
      secondary: "Případové studie",
    },
  },

  SK: {
    seo: {
      title: "SEO služby | WebOptim",
      description:
        "Zvýšte organickú návštevnosť vďaka SEO: analýza kľúčových slov, technické SEO, obsah, linkbuilding, lokálne SEO a transparentný reporting.",
    },
    hero: {
      badge: "SEO služby",
      title1: "Dominujte vo vyhľadávaní s",
      title2: "Expertným SEO",
      subtitle:
        "Zlepšite pozície s osvedčenými stratégiami. Analýza kľúčových slov, linkbuilding a technická optimalizácia.",
      ctaPrimary: "SEO audit zdarma",
      ctaSecondary: "Case studies",
    },
    metrics: [
      { value: "300%", label: "Priem. nárast návštevnosti" },
      { value: "Top 10", label: "Pozície kľúčových slov" },
      { value: "150+", label: "Spokojných klientov" },
      { value: "5.0", label: "Hodnotenie klientov" },
    ],
    animatedRankings: {
      title: "Pozície kľúčových slov",
      liveBadge: "Live",
      columns: { keyword: "Kľúčové slovo", pos: "Poz.", change: "Zmena", volume: "Objem" },
      rows: [
        { keyword: "web dizajn agentúra", position: 3, change: "+5", volume: "2.4K" },
        { keyword: "wordpress developer", position: 1, change: "+12", volume: "1.8K" },
        { keyword: "tvorba e-shopu", position: 4, change: "+8", volume: "3.1K" },
      ],
      trafficBadge: "+156 % návštevnosť",
    },
    servicesShowcase: {
      title: "Kompletné SEO riešenia",
      subtitle: "Všetko, čo potrebujete na top pozície",
      items: [
        { name: "Analýza kľúčových slov", icon: "🔍", description: "Nájdeme výherné dopyty" },
        { name: "Linkbuilding", icon: "🔗", description: "Kvalitné odkazy" },
        { name: "Lokálne SEO", icon: "📍", description: "Dominujte lokálne" },
        { name: "Technické SEO", icon: "⚙️", description: "Optimalizácia webu" },
        { name: "Analytika", icon: "📊", description: "Dáta a výsledky" },
      ],
    },
    features: {
      title: "Čo je zahrnuté",
      subtitle: "Komplexné SEO služby, ktoré zlepšia každý aspekt viditeľnosti vo vyhľadávaní",
      items: [
        {
          title: "Analýza kľúčových slov",
          description: "Search intent, konkurencia a výber kľúčových slov, ktoré prinášajú kvalitnú návštevnosť",
        },
        {
          title: "Linkbuilding kampane",
          description: "White-hat stratégie na získanie kvalitných odkazov z autoritatívnych domén",
        },
        {
          title: "Lokálne SEO",
          description: "Google Business Profile, citácie a geo stratégie pre lepšie lokálne výsledky",
        },
        {
          title: "Technický SEO audit",
          description: "Core Web Vitals, rýchlosť, indexácia, schema markup a opravy chýb, ktoré brzdia rast",
        },
        {
          title: "Obsahová stratégia",
          description: "Plánovanie, optimalizácia a tvorba obsahu, ktorý rankuje aj konvertuje",
        },
        {
          title: "Reporting & analytika",
          description: "Mesačné reporty: pozície, návštevnosť, konverzie a meranie ROI",
        },
      ],
    },
    process: {
      title: "Náš SEO proces",
      subtitle: "Overená metodika, ktorá prináša stabilné výsledky",
      steps: [
        { step: "01", title: "SEO audit", description: "Kompletná analýza aktuálneho stavu", duration: "1–2 dni" },
        { step: "02", title: "Stratégia", description: "Roadmapa podľa cieľov", duration: "2–3 dni" },
        { step: "03", title: "On-page SEO", description: "Optimalizácia obsahu, meta tagov a štruktúry", duration: "1–2 týždne" },
        { step: "04", title: "Technické opravy", description: "Rýchlosť, mobil, Core Web Vitals", duration: "1–2 týždne" },
        { step: "05", title: "Linkbuilding", description: "Získavanie kvalitných odkazov", duration: "Priebežne" },
        { step: "06", title: "Monitoring & rast", description: "Sledovanie pozícií a ladenie stratégie", duration: "Mesačne" },
      ],
    },
    pricing: {
      title: "SEO balíčky",
      subtitle: "Flexibilné plány, ktoré rastú s vaším biznisom",
      popularBadge: "Najobľúbenejší",
      cta: "Začať",
      packages: [
        {
          name: "SEO Starter",
          description: "Pre malé firmy",
          price: "500 € / mes.",
          features: ["5 kľúčových slov", "Mesačný report", "On-page optimalizácia", "Technický audit", "E-mail podpora"],
        },
        {
          name: "SEO Growth",
          description: "Pre rastúce firmy",
          price: "1 200 € / mes.",
          popular: true,
          features: ["20 kľúčových slov", "Report 2× mesačne", "Linkbuilding", "Obsahová stratégia", "Lokálne SEO", "Prioritná podpora"],
        },
        {
          name: "SEO Enterprise",
          description: "Komplexné SEO",
          price: "Na mieru",
          features: ["Neobmedzene kľúčových slov", "Týždenné reporty", "Dedikovaný manažér", "Tvorba obsahu", "Analýza konkurencie", "API prístup"],
        },
      ],
    },
    reviews: {
      title: "Čo hovoria klienti",
      subtitle: "Pozrite si, čo hovoria firmy na výsledky nášho SEO.",
    },
    faq: {
      serviceName: "SEO",
      title: "Časté otázky",
      subtitle: "Najčastejšie otázky k našim SEO službám.",
      items: [
        {
          question: "Za ako dlho uvidím výsledky?",
          answer:
            "SEO je dlhodobá stratégia. Prvé zlepšenia bývajú za 3–6 mesiacov, výraznejšie výsledky za 6–12 mesiacov podľa konkurencie a východiskového stavu.",
        },
        {
          question: "Čo obsahujú SEO balíčky?",
          answer:
            "Analýzu kľúčových slov, on-page optimalizáciu, technický audit, linkbuilding, obsahovú stratégiu a mesačný reporting. Vyššie balíčky zahŕňajú viac kľúčových slov a ďalšie služby.",
        },
        {
          question: "Garantujete pozície?",
          answer:
            "Nie. Seriózna SEO agentúra nemôže garantovať konkrétne pozície, pretože algoritmy sa menia. Zameriavame sa na udržateľný rast a overené postupy.",
        },
        {
          question: "Ako meriate úspech?",
          answer:
            "Sledujeme pozície kľúčových slov, organickú návštevnosť, konverzie a ROI. Každý mesiac dostanete report s metrikami aj odporúčaniami.",
        },
      ],
    },
    ctaBottom: {
      titleBefore: "Pripravení dominovať",
      titleHighlight: "vo vyhľadávaní",
      subtitle: "Získajte SEO audit zdarma a zistite, ako zvýšime pozície a privedieme viac organickej návštevnosti",
      primary: "SEO audit zdarma",
      secondary: "Case studies",
    },
  },
};

const SeoLanguageContext = createContext<SeoLang | null>(null);

export const SeoLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  return <SeoLanguageContext.Provider value={translations[language]}>{children}</SeoLanguageContext.Provider>;
};

export const useSeoLang = () => {
  const ctx = useContext(SeoLanguageContext);
  if (!ctx) throw new Error("useSeoLang must be used inside SeoLanguageProvider");
  return ctx;
};
