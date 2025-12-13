// src/contexts/LanguageDigitalization.tsx
import React, { createContext, useContext } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

/* ---------- TYPES ---------- */

type TechnologyItem = { name: string; category: string };

type BenefitItem = { title: string; description: string };

type ServiceItem = { title: string; description: string; features: string[] };

type PricingPlan = {
  name: string;
  price: string;
  gradient: string; // stays as original string
  technologies: string[];
  features: string[];
  popular?: boolean;
  // key used to show "Selection of the Right Technologies" special block
  techHighlightKey: string;
};

type ProcessItem = { step: string; title: string; description: string; duration: string };

type FaqItem = { question: string; answer: string };

export type DigitalizationLang = {
  seo: { title: string; description: string };

  schema: {
    name: string;
    description: string;
    serviceType: string[];
    areaServed: string[];
    priceCurrency: string;
  };

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
    stats: {
      timeSaved: string;
      integrations: string;
      automation: string;
    };
  };

  sections: {
    technologies: { title: string; highlight: string; subtitle: string };
    benefits: { title: string; highlight: string; subtitle: string };
    services: { title: string; highlight: string; subtitle: string };
    pricing: { title: string; highlight: string; subtitle: string; cta: string };
    process: { title: string; highlight: string; subtitle: string };
    reviews: { title: string; subtitle: string };
    faq: { serviceName: string; title: string; subtitle: string };
    ctaBottom: { titleBefore: string; titleHighlight: string; titleAfter: string; subtitle: string; primary: string; secondary: string };
  };

  technologies: TechnologyItem[];

  benefits: BenefitItem[];

  services: ServiceItem[];

  pricing: PricingPlan[];

  process: ProcessItem[];

  faqs: FaqItem[];
};

/* ---------- CONSTANT (used in pricing special line) ---------- */
// MUST match exactly what the page checks for
const TECH_HIGHLIGHT_EN = "Selection of the Right Technologies";
const TECH_HIGHLIGHT_CZ = "Výběr správných technologií";
const TECH_HIGHLIGHT_SK = "Výber správnych technológií";

/* ---------- TRANSLATIONS ---------- */

const translations: Record<Language, DigitalizationLang> = {
  EN: {
    seo: {
      title: "Digitalization & Automation Services | WebOptim",
      description:
        "Transform your business with digital workflows, process automation, and CRM implementation. Google Workspace, Pipedrive, Make, and more.",
    },

    schema: {
      name: "Digitalization & Automation Services",
      description: "Transform your business with digital workflows, automation, and CRM implementation",
      serviceType: ["Business Digitalization", "Process Automation", "CRM Implementation"],
      areaServed: ["Czech Republic", "Slovakia", "Europe"],
      priceCurrency: "CZK",
    },

    hero: {
      badge: "Digitalization & Automation",
      title1: "Automate Your",
      title2: "Business",
      subtitle:
        "Transform manual work into efficient systems. Digital workflows, automation, and CRM — built for scale.",
      ctaPrimary: "Free Consultation",
      ctaSecondary: "Learn More",
    },

    dashboard: {
      title: "Automation Dashboard",
      stats: {
        timeSaved: "Time Saved",
        integrations: "Integrations",
        automation: "Automation",
      },
    },

    sections: {
      technologies: {
        title: "Technologies",
        highlight: "We Use",
        subtitle: "We work with leading platforms to create the perfect tech stack for your business.",
      },
      benefits: {
        title: "Why",
        highlight: "Digitalize?",
        subtitle: "Discover the transformative benefits of digital workflows and automation.",
      },
      services: {
        title: "Our",
        highlight: "Services",
        subtitle: "Comprehensive digitalization solutions tailored to your business needs.",
      },
      pricing: {
        title: "Transparent",
        highlight: "Pricing",
        subtitle: "Clear pricing for our digitalization and automation services.",
        cta: "Free Consultation",
      },
      process: {
        title: "Our",
        highlight: "Process",
        subtitle: "A structured approach to ensure successful implementation.",
      },
      reviews: {
        title: "What Our Clients Say",
        subtitle: "See what businesses say about their digital transformation journey with us.",
      },
      faq: {
        serviceName: "Digitalization & Automation",
        title: "Frequently Asked Questions",
        subtitle: "Common questions about our digitalization services.",
      },
      ctaBottom: {
        titleBefore: "Ready to",
        titleHighlight: "Digitalize",
        titleAfter: "?",
        subtitle: "Get a free consultation and discover how automation can transform your business.",
        primary: "Free Consultation",
        secondary: "View Our Work",
      },
    },

    technologies: [
      { name: "Google Workspace", category: "Productivity" },
      { name: "Microsoft 365", category: "Productivity" },
      { name: "Pipedrive", category: "CRM" },
      { name: "Salesforce", category: "CRM" },
      { name: "HubSpot", category: "CRM" },
      { name: "Make", category: "Automation" },
      { name: "Zapier", category: "Automation" },
      { name: "n8n", category: "Automation" },
      { name: "Airtable", category: "Database" },
      { name: "Notion", category: "Productivity" },
      { name: "Monday.com", category: "Project Management" },
      { name: "Slack", category: "Communication" },
      { name: "Trello", category: "Project Management" },
      { name: "Asana", category: "Project Management" },
      { name: "Fakturoid", category: "Finance" },
      { name: "Digitoo", category: "Documents" },
      { name: "Signi", category: "E-signatures" },
      { name: "Odoo", category: "ERP" },
      { name: "AWS", category: "Cloud" },
      { name: "Google Cloud", category: "Cloud" },
    ],

    benefits: [
      { title: "Save Time", description: "Automate repetitive tasks and free up hours for strategic work" },
      { title: "Increase Efficiency", description: "Streamline workflows and eliminate manual errors" },
      { title: "Better Insights", description: "Real-time dashboards and data-driven decision making" },
      { title: "Team Collaboration", description: "Centralized tools for seamless team communication" },
      { title: "Scalability", description: "Systems that grow with your business needs" },
      { title: "Cloud Access", description: "Work from anywhere with secure cloud solutions" },
    ],

    services: [
      {
        title: "Business Process Digitalization",
        description: "Transform paper-based and manual processes into efficient digital workflows",
        features: [
          "Document digitization & management",
          "Electronic signatures & approvals",
          "Cloud storage & file sharing",
          "Digital communication channels",
        ],
      },
      {
        title: "Workflow Automation",
        description: "Connect your tools and automate repetitive tasks across platforms",
        features: [
          "Integration between applications",
          "Automated data synchronization",
          "Trigger-based actions",
          "Custom automation scenarios",
        ],
      },
      {
        title: "CRM Implementation",
        description: "Deploy and customize CRM systems to manage customer relationships",
        features: [
          "CRM selection & setup",
          "Data migration & import",
          "Custom fields & pipelines",
          "Team training & onboarding",
        ],
      },
    ],

    pricing: [
      {
        name: "Digitalization of Business Processes",
        price: "from 7 990 Kč",
        gradient: "from-blue-500 to-cyan-500",
        technologies: ["Google Workspace", "Microsoft 365", "Fakturoid", "Digitoo", "Odoo", "Signi"],
        techHighlightKey: TECH_HIGHLIGHT_EN,
        features: [
          "Analysis of the Current State",
          TECH_HIGHLIGHT_EN,
          "Comprehensive Implementation",
          "Pilot Projects and Testing",
          "Employee Training",
          "Monitoring and Optimization",
          "Updates",
        ],
      },
      {
        name: "Automation of Business Processes",
        price: "from 8 990 Kč",
        gradient: "from-purple-500 to-pink-500",
        technologies: ["Make", "IFTTT", "Zapier", "Odoo", "n8n"],
        techHighlightKey: TECH_HIGHLIGHT_EN,
        features: [
          "Analysis of the Current State",
          TECH_HIGHLIGHT_EN,
          "Comprehensive Implementation",
          "Pilot Projects and Testing",
          "Employee Training",
          "Monitoring and Optimization",
          "Updates",
        ],
        popular: true,
      },
      {
        name: "Implementation of CRM Systems",
        price: "from 9 990 Kč",
        gradient: "from-orange-500 to-amber-500",
        technologies: ["Pipedrive", "Tabidoo", "AirTable", "SalesForce", "HubSpot"],
        techHighlightKey: TECH_HIGHLIGHT_EN,
        features: [
          "Analysis of the Current State",
          TECH_HIGHLIGHT_EN,
          "Comprehensive Implementation",
          "Pilot Projects and Testing",
          "Employee Training",
          "Monitoring and Optimization",
          "Updates",
        ],
      },
    ],

    process: [
      { step: "01", title: "Discovery & Analysis", description: "We analyze your current processes and identify opportunities for improvement", duration: "Week 1" },
      { step: "02", title: "Technology Selection", description: "Recommend the best tools and platforms for your specific needs", duration: "Week 1–2" },
      { step: "03", title: "Implementation", description: "Configure and deploy the selected solutions with custom integrations", duration: "Week 2–4" },
      { step: "04", title: "Testing & Training", description: "Thorough testing and comprehensive training for your team", duration: "Week 4–5" },
      { step: "05", title: "Optimization", description: "Continuous monitoring and optimization based on real-world usage", duration: "Ongoing" },
    ],

    faqs: [
      {
        question: "What is business digitalization?",
        answer:
          "Business digitalization transforms paper-based and manual processes into digital workflows. This includes cloud tools, document management, automation, and integrated systems that improve efficiency and reduce errors.",
      },
      {
        question: "How long does a typical implementation take?",
        answer:
          "Timelines vary based on complexity. Simple projects can take 2–4 weeks, while comprehensive automation and CRM implementations may take 4–8 weeks. We provide timelines during the initial consultation.",
      },
      {
        question: "Do you provide training for our team?",
        answer:
          "Yes. Training is included in all packages. We provide hands-on sessions, documentation, and support to ensure your team can use the new systems effectively.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Absolutely. We build seamless integrations between platforms. Whether you use an existing CRM, accounting software, or custom tools — we can connect everything into one workflow.",
      },
      {
        question: "What ongoing support do you offer?",
        answer:
          "We offer monitoring, optimization, and updates. Our team can troubleshoot issues, add new features, and keep your systems performing at their best.",
      },
      {
        question: "How do you ensure data security during migration?",
        answer:
          "Security is a top priority. We use secure transfers, backups, and best practices for migration. Implementations follow GDPR and relevant standards.",
      },
    ],
  },

  CZ: {
    seo: {
      title: "Digitalizace a automatizace | WebOptim",
      description:
        "Digitalizace procesů, automatizace a zavedení CRM. Zefektivněte firmu pomocí Google Workspace, Pipedrive, Make a dalších nástrojů.",
    },

    schema: {
      name: "Služby digitalizace a automatizace",
      description: "Změňte firmu díky digitalizovaným workflow, automatizaci a implementaci CRM",
      serviceType: ["Digitalizace procesů", "Automatizace procesů", "Implementace CRM"],
      areaServed: ["Česká republika", "Slovensko", "Evropa"],
      priceCurrency: "CZK",
    },

    hero: {
      badge: "Digitalizace a automatizace",
      title1: "Automatizujte",
      title2: "firmu",
      subtitle:
        "Změňte ruční práci na systém. Digitalizace, automatizace a CRM — připravené škálovat.",
      ctaPrimary: "Konzultace zdarma",
      ctaSecondary: "Zjistit více",
    },

    dashboard: {
      title: "Automation dashboard",
      stats: {
        timeSaved: "Ušetřený čas",
        integrations: "Integrace",
        automation: "Automatizace",
      },
    },

    sections: {
      technologies: {
        title: "Technologie",
        highlight: "používáme",
        subtitle: "Pracujeme s ověřenými platformami a skládáme stack podle vašich potřeb.",
      },
      benefits: {
        title: "Proč",
        highlight: "digitalizovat?",
        subtitle: "Uvidíte reálné benefity digitalizace a automatizace v praxi.",
      },
      services: {
        title: "Naše",
        highlight: "služby",
        subtitle: "Komplexní řešení digitalizace přizpůsobené vašemu byznysu.",
      },
      pricing: {
        title: "Transparentní",
        highlight: "ceny",
        subtitle: "Jasné ceny digitalizace, automatizace a CRM.",
        cta: "Konzultace zdarma",
      },
      process: {
        title: "Náš",
        highlight: "proces",
        subtitle: "Strukturovaný postup pro bezpečnou implementaci.",
      },
      reviews: {
        title: "Co říkají klienti",
        subtitle: "Zkušenosti firem s digitalizací a automatizací s námi.",
      },
      faq: {
        serviceName: "Digitalizace a automatizace",
        title: "Časté dotazy",
        subtitle: "Nejčastější otázky k digitalizaci procesů.",
      },
      ctaBottom: {
        titleBefore: "Připraveni",
        titleHighlight: "digitalizovat",
        titleAfter: "?",
        subtitle: "Domluvte si konzultaci zdarma a zjistěte, kde vám automatizace ušetří čas i peníze.",
        primary: "Konzultace zdarma",
        secondary: "Naše práce",
      },
    },

    technologies: [
      { name: "Google Workspace", category: "Produktivita" },
      { name: "Microsoft 365", category: "Produktivita" },
      { name: "Pipedrive", category: "CRM" },
      { name: "Salesforce", category: "CRM" },
      { name: "HubSpot", category: "CRM" },
      { name: "Make", category: "Automatizace" },
      { name: "Zapier", category: "Automatizace" },
      { name: "n8n", category: "Automatizace" },
      { name: "Airtable", category: "Databáze" },
      { name: "Notion", category: "Produktivita" },
      { name: "Monday.com", category: "Projektové řízení" },
      { name: "Slack", category: "Komunikace" },
      { name: "Trello", category: "Projektové řízení" },
      { name: "Asana", category: "Projektové řízení" },
      { name: "Fakturoid", category: "Finance" },
      { name: "Digitoo", category: "Dokumenty" },
      { name: "Signi", category: "E-podpisy" },
      { name: "Odoo", category: "ERP" },
      { name: "AWS", category: "Cloud" },
      { name: "Google Cloud", category: "Cloud" },
    ],

    benefits: [
      { title: "Ušetříte čas", description: "Automatizace opakovaných úkolů uvolní hodiny týdně" },
      { title: "Vyšší efektivita", description: "Workflow bez zbytečné manuální práce a chyb" },
      { title: "Lepší přehled", description: "Dashboardy a rozhodování na základě dat" },
      { title: "Spolupráce týmu", description: "Nástroje a komunikace na jednom místě" },
      { title: "Škálovatelnost", description: "Systémy, které porostou s vaší firmou" },
      { title: "Cloud přístup", description: "Bezpečná práce odkudkoliv" },
    ],

    services: [
      {
        title: "Digitalizace firemních procesů",
        description: "Převedeme papírové a manuální procesy do efektivního digitálního workflow",
        features: ["Digitalizace a správa dokumentů", "E-podpisy a schvalování", "Cloud úložiště a sdílení", "Digitální komunikační kanály"],
      },
      {
        title: "Automatizace workflow",
        description: "Propojíme nástroje a automatizujeme rutiny napříč platformami",
        features: ["Integrace aplikací", "Automatická synchronizace dat", "Spouštěče a akce", "Automatizační scénáře na míru"],
      },
      {
        title: "Implementace CRM",
        description: "Nasadíme a upravíme CRM systém pro řízení vztahů se zákazníky",
        features: ["Výběr a nastavení CRM", "Migrace a import dat", "Vlastní pole a pipeline", "Školení a onboarding týmu"],
      },
    ],

    pricing: [
      {
        name: "Digitalizace firemních procesů",
        price: "od 7 990 Kč",
        gradient: "from-blue-500 to-cyan-500",
        technologies: ["Google Workspace", "Microsoft 365", "Fakturoid", "Digitoo", "Odoo", "Signi"],
        techHighlightKey: TECH_HIGHLIGHT_CZ,
        features: [
          "Analýza současného stavu",
          TECH_HIGHLIGHT_CZ,
          "Komplexní implementace",
          "Pilotní projekty a testování",
          "Školení zaměstnanců",
          "Monitoring a optimalizace",
          "Aktualizace",
        ],
      },
      {
        name: "Automatizace procesů",
        price: "od 8 990 Kč",
        gradient: "from-purple-500 to-pink-500",
        technologies: ["Make", "IFTTT", "Zapier", "Odoo", "n8n"],
        techHighlightKey: TECH_HIGHLIGHT_CZ,
        features: [
          "Analýza současného stavu",
          TECH_HIGHLIGHT_CZ,
          "Komplexní implementace",
          "Pilotní projekty a testování",
          "Školení zaměstnanců",
          "Monitoring a optimalizace",
          "Aktualizace",
        ],
        popular: true,
      },
      {
        name: "Implementace CRM systémů",
        price: "od 9 990 Kč",
        gradient: "from-orange-500 to-amber-500",
        technologies: ["Pipedrive", "Tabidoo", "AirTable", "SalesForce", "HubSpot"],
        techHighlightKey: TECH_HIGHLIGHT_CZ,
        features: [
          "Analýza současného stavu",
          TECH_HIGHLIGHT_CZ,
          "Komplexní implementace",
          "Pilotní projekty a testování",
          "Školení zaměstnanců",
          "Monitoring a optimalizace",
          "Aktualizace",
        ],
      },
    ],

    process: [
      { step: "01", title: "Analýza", description: "Zmapujeme procesy a nájdeme najväčšie príležitosti", duration: "Týden 1" },
      { step: "02", title: "Výběr technologií", description: "Doporučíme nástroje a platformy podle cíle", duration: "Týden 1–2" },
      { step: "03", title: "Implementace", description: "Nasadíme řešení a integrace na míru", duration: "Týden 2–4" },
      { step: "04", title: "Testování & školení", description: "Testy a školení pro tým + dokumentace", duration: "Týden 4–5" },
      { step: "05", title: "Optimalizace", description: "Monitoring a vylepšování podle reálného využití", duration: "Průběžně" },
    ],

    faqs: [
      {
        question: "Co je digitalizace firmy?",
        answer:
          "Digitalizace je převod manuálních a papírových procesů do digitální podoby. Zahrnuje cloud nástroje, správu dokumentů, automatizace a integrace, které zvýší efektivitu a sníží chybovost.",
      },
      {
        question: "Jak dlouho trvá implementace?",
        answer:
          "Záleží na složitosti. Jednodušší projekty mohou trvat 2–4 týdny, komplexní automatizace a CRM obvykle 4–8 týdnů. Časový plán upřesníme na konzultaci.",
      },
      {
        question: "Zajistíte školení pro tým?",
        answer:
          "Ano. Školení je součástí všech balíčků. Dostanete praktické školení, dokumentaci a podporu, aby tým zvládl nový systém bez stresu.",
      },
      {
        question: "Umíte napojit naše současné nástroje?",
        answer:
          "Ano. Propojíme CRM, účetnictví i interní nástroje tak, aby data tekla automaticky a vše fungovalo jako jeden systém.",
      },
      {
        question: "Jakou podporu nabízíte po spuštění?",
        answer:
          "Monitoring, optimalizace a aktualizace. Pomůžeme s řešením problémů, úpravami a dalším rozšiřováním automatizací.",
      },
      {
        question: "Jak řešíte bezpečnost dat při migraci?",
        answer:
          "Používáme bezpečné přenosy, zálohy a best practices. Řešení nastavujeme v souladu s GDPR a bezpečnostními standardy.",
      },
    ],
  },

  SK: {
    seo: {
      title: "Digitalizácia a automatizácia | WebOptim",
      description:
        "Digitalizácia procesov, automatizácia a zavedenie CRM. Zefektívnite firmu pomocou Google Workspace, Pipedrive, Make a ďalších nástrojov.",
    },

    schema: {
      name: "Služby digitalizácie a automatizácie",
      description: "Transformujte firmu vďaka digitálnym workflow, automatizácii a implementácii CRM",
      serviceType: ["Digitalizácia procesov", "Automatizácia procesov", "Implementácia CRM"],
      areaServed: ["Slovensko", "Česká republika", "Európa"],
      priceCurrency: "CZK",
    },

    hero: {
      badge: "Digitalizácia a automatizácia",
      title1: "Automatizujte",
      title2: "biznis",
      subtitle:
        "Zmeňte ručnú prácu na systém. Digitalizácia, automatizácia a CRM — pripravené škálovať.",
      ctaPrimary: "Konzultácia zdarma",
      ctaSecondary: "Zistiť viac",
    },

    dashboard: {
      title: "Automation dashboard",
      stats: {
        timeSaved: "Ušetrený čas",
        integrations: "Integrácie",
        automation: "Automatizácia",
      },
    },

    sections: {
      technologies: {
        title: "Technológie",
        highlight: "používame",
        subtitle: "Pracujeme s overenými platformami a skladáme stack podľa vašich potrieb.",
      },
      benefits: {
        title: "Prečo",
        highlight: "digitalizovať?",
        subtitle: "Uvidíte reálne benefity digitalizácie a automatizácie v praxi.",
      },
      services: {
        title: "Naše",
        highlight: "služby",
        subtitle: "Komplexné riešenia digitalizácie prispôsobené vášmu biznisu.",
      },
      pricing: {
        title: "Transparentné",
        highlight: "ceny",
        subtitle: "Jasné ceny digitalizácie, automatizácie a CRM.",
        cta: "Konzultácia zdarma",
      },
      process: {
        title: "Náš",
        highlight: "proces",
        subtitle: "Struktúrovaný postup pre bezpečnú implementáciu.",
      },
      reviews: {
        title: "Čo hovoria klienti",
        subtitle: "Skúsenosti firiem s digitalizáciou a automatizáciou s nami.",
      },
      faq: {
        serviceName: "Digitalizácia a automatizácia",
        title: "Časté otázky",
        subtitle: "Najčastejšie otázky k digitalizácii procesov.",
      },
      ctaBottom: {
        titleBefore: "Pripravení",
        titleHighlight: "digitalizovať",
        titleAfter: "?",
        subtitle: "Dohodnite si konzultáciu zdarma a zistite, kde vám automatizácia ušetrí čas aj peniaze.",
        primary: "Konzultácia zdarma",
        secondary: "Naše práce",
      },
    },

    technologies: [
      { name: "Google Workspace", category: "Produktivita" },
      { name: "Microsoft 365", category: "Produktivita" },
      { name: "Pipedrive", category: "CRM" },
      { name: "Salesforce", category: "CRM" },
      { name: "HubSpot", category: "CRM" },
      { name: "Make", category: "Automatizácia" },
      { name: "Zapier", category: "Automatizácia" },
      { name: "n8n", category: "Automatizácia" },
      { name: "Airtable", category: "Databáza" },
      { name: "Notion", category: "Produktivita" },
      { name: "Monday.com", category: "Projektové riadenie" },
      { name: "Slack", category: "Komunikácia" },
      { name: "Trello", category: "Projektové riadenie" },
      { name: "Asana", category: "Projektové riadenie" },
      { name: "Fakturoid", category: "Financie" },
      { name: "Digitoo", category: "Dokumenty" },
      { name: "Signi", category: "E-podpisy" },
      { name: "Odoo", category: "ERP" },
      { name: "AWS", category: "Cloud" },
      { name: "Google Cloud", category: "Cloud" },
    ],

    benefits: [
      { title: "Ušetríte čas", description: "Automatizácia rutín uvoľní hodiny týždenne" },
      { title: "Vyššia efektivita", description: "Workflow bez zbytočnej manuálnej práce a chýb" },
      { title: "Lepší prehľad", description: "Dashboardy a rozhodovanie na základe dát" },
      { title: "Spolupráca tímu", description: "Nástroje a komunikácia na jednom mieste" },
      { title: "Škálovateľnosť", description: "Systémy, ktoré porastú s vašou firmou" },
      { title: "Cloud prístup", description: "Bezpečná práca odkiaľkoľvek" },
    ],

    services: [
      {
        title: "Digitalizácia firemných procesov",
        description: "Prevedieme papierové a manuálne procesy do efektívneho digitálneho workflow",
        features: ["Digitalizácia a správa dokumentov", "E-podpisy a schvaľovanie", "Cloud úložisko a zdieľanie", "Digitálne komunikačné kanály"],
      },
      {
        title: "Automatizácia workflow",
        description: "Prepojíme nástroje a zautomatizujeme rutiny naprieč platformami",
        features: ["Integrácie aplikácií", "Automatická synchronizácia dát", "Spúšťače a akcie", "Automatizačné scenáre na mieru"],
      },
      {
        title: "Implementácia CRM",
        description: "Nasadíme a upravíme CRM systém pre riadenie vzťahov so zákazníkmi",
        features: ["Výber a nastavenie CRM", "Migrácia a import dát", "Vlastné polia a pipeline", "Školenie a onboarding tímu"],
      },
    ],

    pricing: [
      {
        name: "Digitalizácia firemných procesov",
        price: "od 7 990 Kč",
        gradient: "from-blue-500 to-cyan-500",
        technologies: ["Google Workspace", "Microsoft 365", "Fakturoid", "Digitoo", "Odoo", "Signi"],
        techHighlightKey: TECH_HIGHLIGHT_SK,
        features: [
          "Analýza aktuálneho stavu",
          TECH_HIGHLIGHT_SK,
          "Komplexná implementácia",
          "Pilotné projekty a testovanie",
          "Školenie zamestnancov",
          "Monitoring a optimalizácia",
          "Aktualizácie",
        ],
      },
      {
        name: "Automatizácia procesov",
        price: "od 8 990 Kč",
        gradient: "from-purple-500 to-pink-500",
        technologies: ["Make", "IFTTT", "Zapier", "Odoo", "n8n"],
        techHighlightKey: TECH_HIGHLIGHT_SK,
        features: [
          "Analýza aktuálneho stavu",
          TECH_HIGHLIGHT_SK,
          "Komplexná implementácia",
          "Pilotné projekty a testovanie",
          "Školenie zamestnancov",
          "Monitoring a optimalizácia",
          "Aktualizácie",
        ],
        popular: true,
      },
      {
        name: "Implementácia CRM systémov",
        price: "od 9 990 Kč",
        gradient: "from-orange-500 to-amber-500",
        technologies: ["Pipedrive", "Tabidoo", "AirTable", "SalesForce", "HubSpot"],
        techHighlightKey: TECH_HIGHLIGHT_SK,
        features: [
          "Analýza aktuálneho stavu",
          TECH_HIGHLIGHT_SK,
          "Komplexná implementácia",
          "Pilotné projekty a testovanie",
          "Školenie zamestnancov",
          "Monitoring a optimalizácia",
          "Aktualizácie",
        ],
      },
    ],

    process: [
      { step: "01", title: "Analýza", description: "Zmapujeme procesy a nájdeme najväčšie príležitosti", duration: "Týždeň 1" },
      { step: "02", title: "Výber technológií", description: "Odporučíme nástroje a platformy podľa cieľa", duration: "Týždeň 1–2" },
      { step: "03", title: "Implementácia", description: "Nasadíme riešenie a integrácie na mieru", duration: "Týždeň 2–4" },
      { step: "04", title: "Testovanie & školenie", description: "Testy a školenie pre tím + dokumentácia", duration: "Týždeň 4–5" },
      { step: "05", title: "Optimalizácia", description: "Monitoring a vylepšovanie podľa reálneho využitia", duration: "Priebežne" },
    ],

    faqs: [
      {
        question: "Čo je digitalizácia firmy?",
        answer:
          "Digitalizácia je prevod manuálnych a papierových procesov do digitálnej podoby. Zahŕňa cloud nástroje, správu dokumentov, automatizácie a integrácie, ktoré zvýšia efektivitu a znížia chybovosť.",
      },
      {
        question: "Ako dlho trvá implementácia?",
        answer:
          "Záleží od zložitosti. Jednoduchšie projekty môžu trvať 2–4 týždne, komplexná automatizácia a CRM zvyčajne 4–8 týždňov. Časový plán upresníme na konzultácii.",
      },
      {
        question: "Zabezpečíte školenie pre tím?",
        answer:
          "Áno. Školenie je súčasťou všetkých balíkov. Dostanete praktické školenie, dokumentáciu a podporu, aby tím zvládol nový systém bez stresu.",
      },
      {
        question: "Viete napojiť naše aktuálne nástroje?",
        answer:
          "Áno. Prepojíme CRM, účtovníctvo aj interné nástroje tak, aby dáta tiekli automaticky a všetko fungovalo ako jeden systém.",
      },
      {
        question: "Akú podporu ponúkate po spustení?",
        answer:
          "Monitoring, optimalizácie a aktualizácie. Pomôžeme s riešením problémov, úpravami a ďalším rozširovaním automatizácií.",
      },
      {
        question: "Ako riešite bezpečnosť dát pri migrácii?",
        answer:
          "Používame bezpečné prenosy, zálohy a best practices. Riešenia nastavujeme v súlade s GDPR a bezpečnostnými štandardmi.",
      },
    ],
  },
};

/* ---------- CONTEXT ---------- */

const DigitalizationLanguageContext = createContext<DigitalizationLang | null>(null);

export const DigitalizationLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  const value = translations[language] ?? translations.EN;

  return (
    <DigitalizationLanguageContext.Provider value={value}>
      {children}
    </DigitalizationLanguageContext.Provider>
  );
};

export const useDigitalizationLang = () => {
  const ctx = useContext(DigitalizationLanguageContext);
  if (!ctx) throw new Error("useDigitalizationLang must be used inside DigitalizationLanguageProvider");
  return ctx;
};
