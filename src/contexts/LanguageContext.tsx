import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getLanguageFromDomain } from "@/config/domains";

export type Language = "EN" | "CZ" | "SK";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Glossary",
    "nav.contact": "Contact",
    "nav.startProject": "Start Project",
    "nav.viewAllServices": "View All Services",

    // Services dropdown
    "services.webDev": "Web Development",
    "services.webDevDesc": "Custom websites with cutting-edge tech",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Powerful online stores",
    "services.seo": "SEO Services",
    "services.seoDesc": "Keyword research & link building",
    "services.ppc": "PPC Advertising",
    "services.ppcDesc": "Google & social media ads",
    "services.digitalization": "Digitalization",
    "services.digitalizationDesc": "Business process automation",
    "services.graphic": "Graphic Design",
    "services.graphicDesc": "Digital and print graphics",

    // Hero
    "hero.badge": "Crafting Digital Excellence",
    "hero.title1": "We build",
    "hero.title2": "websites",
    "hero.title3": "that convert",
    "hero.subtitle":
      "Transform your vision into stunning digital experiences. We design and develop websites that captivate users and drive real business results.",
    "hero.cta1": "Start Your Project",
    "hero.cta2": "Our Services",
    "hero.happyClients": "happy clients",

    // Stats
    "stats.projects": "Projects Delivered",
    "stats.satisfaction": "Client Satisfaction",
    "stats.experience": "Years Experience",
    "stats.team": "Team Members",

    // About us
    "about.title.before": "About",
    "about.title.highlight": "WebOptim",

    // Common CTAs
    "cta.freeConsultation": "Free Consultation",
    "cta.getQuote": "Get a Quote",
    "cta.viewPortfolio": "View Portfolio",
    "cta.learnMore": "Learn More",
    "cta.contactUs": "Contact Us",
    "cta.startProject": "Start Your Project",

    // PPC Services Page
    "ppc.badge": "PPC & Advertising",
    "ppc.title1": "Drive Results with",
    "ppc.title2": "Paid Advertising",
    "ppc.subtitle":
      "Strategic campaigns on Google, Meta, and more. Get qualified leads and measurable ROI from day one.",
    "ppc.campaignTypes": "Campaign Types",
    "ppc.campaignTypesDesc": "We manage all types of paid advertising campaigns",
    "ppc.whyChoose": "Why Choose Our PPC Services",
    "ppc.pricing": "Transparent Pricing",
    "ppc.pricingDesc": "Choose the package that fits your goals",

    // SEO Services Page
    "seo.badge": "SEO Services",
    "seo.title1": "Dominate Search with",
    "seo.title2": "Expert SEO",
    "seo.subtitle":
      "Boost your rankings with proven strategies. Keyword research, link building, and technical optimization.",
    "seo.services": "Our SEO Services",
    "seo.servicesDesc": "Comprehensive strategies to improve your search visibility",
    "seo.whyChoose": "Why Invest in SEO",
    "seo.pricing": "SEO Packages",
    "seo.pricingDesc": "Flexible plans for businesses of all sizes",

    // E-commerce Page
    "ecom.badge": "E-Commerce Solutions",
    "ecom.title1": "Build Your",
    "ecom.title2": "Online Store",
    "ecom.subtitle":
      "Powerful WooCommerce stores with seamless checkout experiences that maximize conversions and sales.",
    "ecom.features": "E-Commerce Features",
    "ecom.featuresDesc": "Everything you need to sell online successfully",
    "ecom.platforms": "Platforms We Work With",
    "ecom.pricing": "E-Commerce Packages",
    "ecom.pricingDesc": "Start selling online with our solutions",

    // Web Development Page
    "webdev.badge": "Web Development",
    "webdev.title1": "Custom Websites",
    "webdev.title2": "That Perform",
    "webdev.subtitle":
      "Modern WordPress websites built with Oxygen Builder. Fast, scalable, and optimized for results.",
    "webdev.services": "Our Web Development Services",
    "webdev.servicesDesc": "From simple landing pages to complex web applications",
    "webdev.technologies": "Technologies We Use",
    "webdev.pricing": "Web Development Packages",
    "webdev.pricingDesc": "Solutions for every budget and need",

    // Digitalization Page
    "digital.badge": "Digitalization & Automation",
    "digital.title1": "Automate Your",
    "digital.title2": "Business",
    "digital.subtitle":
      "Transform manual processes into efficient digital workflows. We implement tools that save time, reduce errors, and scale with your growth.",
    "digital.services": "Our Digitalization Services",
    "digital.servicesDesc": "Streamline your business with modern tools",
    "digital.technologies": "Technologies We Use",
    "digital.pricing": "Digitalization Packages",
    "digital.pricingDesc": "Solutions to modernize your business",

    // Graphic Design Page
    "graphic.badge": "Graphic Design",
    "graphic.title1": "Designs That",
    "graphic.title2": "Stand Out",
    "graphic.subtitle":
      "From flyers and posters to business cards and banner ads, we create eye-catching graphics across all platforms.",
    "graphic.services": "Full-Service Graphic Design",
    "graphic.servicesDesc":
      "We pride ourselves on creating digital content that not only stands out but also fulfils its purpose.",
    "graphic.portfolio": "Our Work",
    "graphic.portfolioDesc": "A selection of our recent graphic design projects",
    "graphic.pricing": "Transparent Pricing",
    "graphic.pricingDesc": "Choose the package that fits your needs",

    // About section
    "about.badge": "About Us",
    "about.heading.before": "We're a team of",
    "about.heading.highlight": "innovators",
    "about.p1":
      "We’re a full-service digital agency helping brands grow through smart marketing, performance-driven advertising, and scalable web solutions.",
    "about.p2":
      "From PPC and SEO to modern websites, we focus on what actually moves your business forward — no shortcuts, no average results.",
    "about.cta": "Learn More About Us",

    // About features
    "about.features.fast.title": "Fast Delivery",
    "about.features.fast.desc": "Quick turnaround without compromising quality",
    "about.features.team.title": "Expert Team",
    "about.features.team.desc": "Skilled professionals passionate about innovation",
    "about.features.ontime.title": "On-Time Delivery",
    "about.features.ontime.desc": "Projects delivered within agreed timelines",
    "about.features.results.title": "Results Driven",
    "about.features.results.desc": "Focused on achieving measurable outcomes",

    // Services section (homepage)
    "servicesSection.badge": "What We Do",
    "servicesSection.title": "Services that elevate your brand",
    "servicesSection.subtitle":
    "We offer comprehensive digital solutions tailored to your unique needs, helping businesses thrive in the modern digital landscape.",
    "servicesSection.learnMore": "Learn More",
    "servicesSection.viewAll": "View All Services",
    
    // Services cards
    "services.card.webDev.title": "Web Development",
    "services.card.webDev.desc":
    "Custom WordPress websites with Oxygen Builder. Fast, scalable, and optimized for performance.",
    "services.card.ecom.title": "E-Commerce",
    "services.card.ecom.desc":
    "Powerful WooCommerce stores with seamless checkout experiences that maximize conversions.",
    "services.card.seo.title": "SEO Services",
    "services.card.seo.desc":
    "Boost your rankings with keyword research, link building, and local SEO strategies.",
    "services.card.ppc.title": "PPC & Advertising",
    "services.card.ppc.desc":
    "Strategic paid campaigns on Google and social media that drive qualified traffic and leads.",
    "services.card.digital.title": "Digitalization",
    "services.card.digital.desc":
    "Automate your business with CRM, cloud tools, and workflow automation solutions.",
    "services.card.graphic.title": "Graphic Design",
    "services.card.graphic.desc":
    "Eye-catching digital and print graphics from logos to brochures and marketing materials.",
    
    // Portfolio section
    "portfolio.badge": "Our Work",
    "portfolio.title": "Featured Projects",
    "portfolio.subtitle": "Explore our recent work and see how we've helped businesses achieve their digital goals.",
    "portfolio.viewCaseStudy": "View Case Study",
    "portfolio.viewAll": "View All Projects",

  },
  CZ: {
    // Navbar
    "nav.services": "Služby",
    "nav.work": "Portfolio",
    "nav.about": "O nás",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Slovník",
    "nav.contact": "Kontakt",
    "nav.startProject": "Zahájit projekt",
    "nav.viewAllServices": "Zobrazit všechny služby",

    // Services dropdown
    "services.webDev": "Tvorba webu",
    "services.webDevDesc": "Weby na míru s nejnovějšími technologiemi",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Výkonné e-shopy",
    "services.seo": "SEO Služby",
    "services.seoDesc": "Analýza klíčových slov a linkbuilding",
    "services.ppc": "PPC Reklama",
    "services.ppcDesc": "Google a sociální reklamy",
    "services.digitalization": "Digitalizace",
    "services.digitalizationDesc": "Automatizace firemních procesů",
    "services.graphic": "Grafické práce",
    "services.graphicDesc": "Digitální a tištěná grafika",

    // Hero
    "hero.badge": "Tvoříme digitální dokonalost",
    "hero.title1": "Tvoříme",
    "hero.title2": "weby",
    "hero.title3": "které prodávají",
    "hero.subtitle":
      "Proměňte svou vizi v úžasné digitální zážitky. Navrhujeme a vyvíjíme weby, které zaujmou uživatele a přinášejí skutečné obchodní výsledky.",
    "hero.cta1": "Zahájit projekt",
    "hero.cta2": "Přehrát ukázku",
    "hero.happyClients": "spokojených klientů",

    // Stats
    "stats.projects": "Dokončených projektů",
    "stats.satisfaction": "Spokojenost klientů",
    "stats.experience": "Let zkušeností",
    "stats.team": "Členů týmu",

    // About us
    "about.title.before": "O",
    "about.title.highlight": "WebOptim",

    // Common CTAs
    "cta.freeConsultation": "Bezplatná konzultace",
    "cta.getQuote": "Získat nabídku",
    "cta.viewPortfolio": "Zobrazit portfolio",
    "cta.learnMore": "Zjistit více",
    "cta.contactUs": "Kontaktujte nás",
    "cta.startProject": "Zahájit projekt",

    // PPC Services Page
    "ppc.badge": "PPC & Reklama",
    "ppc.title1": "Dosáhněte výsledků s",
    "ppc.title2": "Placenou reklamou",
    "ppc.subtitle":
      "Strategické kampaně na Google, Meta a dalších platformách. Získejte kvalifikované kontakty a měřitelnou návratnost od prvního dne.",
    "ppc.campaignTypes": "Typy kampaní",
    "ppc.campaignTypesDesc": "Spravujeme všechny typy placených reklamních kampaní",
    "ppc.whyChoose": "Proč zvolit naše PPC služby",
    "ppc.pricing": "Transparentní ceny",
    "ppc.pricingDesc": "Vyberte si balíček podle svých cílů",

    // SEO Services Page
    "seo.badge": "SEO Služby",
    "seo.title1": "Dominujte ve vyhledávání s",
    "seo.title2": "Expertním SEO",
    "seo.subtitle":
      "Zlepšete své pozice s osvědčenými strategiemi. Analýza klíčových slov, linkbuilding a technická optimalizace.",
    "seo.services": "Naše SEO služby",
    "seo.servicesDesc": "Komplexní strategie pro zlepšení viditelnosti ve vyhledávačích",
    "seo.whyChoose": "Proč investovat do SEO",
    "seo.pricing": "SEO balíčky",
    "seo.pricingDesc": "Flexibilní plány pro firmy všech velikostí",

    // E-commerce Page
    "ecom.badge": "E-Commerce řešení",
    "ecom.title1": "Vytvořte svůj",
    "ecom.title2": "Online obchod",
    "ecom.subtitle": "Výkonné WooCommerce e-shopy s plynulým nákupním procesem, které maximalizují konverze a prodeje.",
    "ecom.features": "Funkce e-shopu",
    "ecom.featuresDesc": "Vše, co potřebujete k úspěšnému online prodeji",
    "ecom.platforms": "Platformy, se kterými pracujeme",
    "ecom.pricing": "E-Commerce balíčky",
    "ecom.pricingDesc": "Začněte prodávat online s našimi řešeními",

    // Web Development Page
    "webdev.badge": "Tvorba webu",
    "webdev.title1": "Weby na míru",
    "webdev.title2": "Které fungují",
    "webdev.subtitle":
      "Moderní WordPress weby vytvořené s Oxygen Builderem. Rychlé, škálovatelné a optimalizované pro výsledky.",
    "webdev.services": "Naše služby tvorby webu",
    "webdev.servicesDesc": "Od jednoduchých landing pages po komplexní webové aplikace",
    "webdev.technologies": "Technologie, které používáme",
    "webdev.pricing": "Balíčky tvorby webu",
    "webdev.pricingDesc": "Řešení pro každý rozpočet a potřebu",

    // Digitalization Page
    "digital.badge": "Digitalizace & Automatizace",
    "digital.title1": "Automatizujte své",
    "digital.title2": "Podnikání",
    "digital.subtitle":
      "Proměňte manuální procesy v efektivní digitální workflow. Implementujeme nástroje, které šetří čas, snižují chyby a rostou s vámi.",
    "digital.services": "Naše služby digitalizace",
    "digital.servicesDesc": "Zefektivněte své podnikání moderními nástroji",
    "digital.technologies": "Technologie, které používáme",
    "digital.pricing": "Balíčky digitalizace",
    "digital.pricingDesc": "Řešení pro modernizaci vašeho podnikání",

    // Graphic Design Page
    "graphic.badge": "Grafický design",
    "graphic.title1": "Designy, které",
    "graphic.title2": "Vyniknou",
    "graphic.subtitle": "Od letáků a plakátů po vizitky a bannery – tvoříme poutavou grafiku pro všechny platformy.",
    "graphic.services": "Kompletní grafické služby",
    "graphic.servicesDesc": "Tvoříme obsah, který nejen vynikne, ale také prokazatelně plní svůj účel.",
    "graphic.portfolio": "Naše práce",
    "graphic.portfolioDesc": "Výběr z našich nedávných grafických projektů",
    "graphic.pricing": "Transparentní ceny",
    "graphic.pricingDesc": "Vyberte si balíček podle svých potřeb",

    // About section
    "about.badge": "O nás",
    "about.heading.before": "Jsme tým",
    "about.heading.highlight": "inovátorů",
    "about.p1":
      "Jsme full-service digitální agentura, která pomáhá značkám růst díky chytrému marketingu, výkonnostní reklamě a škálovatelným webovým řešením.",
    "about.p2":
      "Od PPC a SEO po moderní weby – soustředíme se na to, co skutečně posouvá váš byznys vpřed. Bez zkratek, bez průměrných výsledků.",
    "about.cta": "Zjistit více o nás",

    // About features
    "about.features.fast.title": "Rychlé dodání",
    "about.features.fast.desc": "Rychlý turnaround bez kompromisů v kvalitě",
    "about.features.team.title": "Zkušený tým",
    "about.features.team.desc": "Profesionálové, kteří mají rádi inovace",
    "about.features.ontime.title": "Včasné termíny",
    "about.features.ontime.desc": "Dodáváme v domluvených termínech",
    "about.features.results.title": "Na výsledky",
    "about.features.results.desc": "Zaměřeno na měřitelné dopady",

    // Services section (homepage)
    "servicesSection.badge": "Co děláme",
    "servicesSection.title": "Služby, které posunou vaši značku",
    "servicesSection.subtitle":
    "Nabízíme komplexní digitální řešení na míru vašim potřebám, aby vaše podnikání uspělo v moderním online prostředí.",
    "servicesSection.learnMore": "Zjistit více",
    "servicesSection.viewAll": "Zobrazit všechny služby",
    
    // Services cards
    "services.card.webDev.title": "Tvorba webu",
    "services.card.webDev.desc":
    "WordPress weby na míru s Oxygen Builderem. Rychlé, škálovatelné a optimalizované pro výkon.",
    "services.card.ecom.title": "E-Commerce",
    "services.card.ecom.desc":
    "Výkonné WooCommerce e-shopy s plynulým nákupním procesem, které maximalizují konverze.",
    "services.card.seo.title": "SEO služby",
    "services.card.seo.desc":
    "Zvyšte pozice díky analýze klíčových slov, linkbuildingu a lokálním SEO strategiím.",
    "services.card.ppc.title": "PPC & reklama",
    "services.card.ppc.desc":
    "Strategické placené kampaně na Googlu a sociálních sítích, které přivádějí relevantní návštěvnost a poptávky.",
    "services.card.digital.title": "Digitalizace",
    "services.card.digital.desc":
    "Automatizujte byznys pomocí CRM, cloudových nástrojů a automatizace procesů.",
    "services.card.graphic.title": "Grafický design",
    "services.card.graphic.desc":
    "Poutavá digitální i tisková grafika — od log po brožury a marketingové materiály.",

    // Portfolio section
    "portfolio.badge": "Naše práce",
    "portfolio.title": "Vybrané projekty",
    "portfolio.subtitle": "Prohlédněte si naši poslední práci a podívejte se, jak jsme firmám pomohli dosáhnout jejich digitálních cílů.",
    "portfolio.viewCaseStudy": "Zobrazit případovou studii",
    "portfolio.viewAll": "Zobrazit všechny projekty",

  },
  SK: {
    // Navbar
    "nav.services": "Služby",
    "nav.work": "Portfólio",
    "nav.about": "O nás",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Slovník",
    "nav.contact": "Kontakt",
    "nav.startProject": "Začať projekt",
    "nav.viewAllServices": "Zobraziť všetky služby",

    // Services dropdown
    "services.webDev": "Tvorba webu",
    "services.webDevDesc": "Weby na mieru s najnovšími technológiami",
    "services.ecommerce": "E-Commerce",
    "services.ecommerceDesc": "Výkonné e-shopy",
    "services.seo": "SEO Služby",
    "services.seoDesc": "Analýza kľúčových slov a linkbuilding",
    "services.ppc": "PPC Reklama",
    "services.ppcDesc": "Google a sociálne reklamy",
    "services.digitalization": "Digitalizácia",
    "services.digitalizationDesc": "Automatizácia firemných procesov",
    "services.graphic": "Grafické práce",
    "services.graphicDesc": "Digitálna a tlačená grafika",

    // Hero
    "hero.badge": "Tvoríme digitálnu dokonalosť",
    "hero.title1": "Tvoríme",
    "hero.title2": "weby",
    "hero.title3": "ktoré predávajú",
    "hero.subtitle":
      "Premeňte svoju víziu na úžasné digitálne zážitky. Navrhujeme a vyvíjame weby, ktoré zaujmú používateľov a prinášajú skutočné obchodné výsledky.",
    "hero.cta1": "Začať projekt",
    "hero.cta2": "Prehrať ukážku",
    "hero.happyClients": "spokojných klientov",

    // Stats
    "stats.projects": "Dokončených projektov",
    "stats.satisfaction": "Spokojnosť klientov",
    "stats.experience": "Rokov skúseností",
    "stats.team": "Členov tímu",

    // About us
    "about.title.before": "O",
    "about.title.highlight": "WebOptim",

    // Common CTAs
    "cta.freeConsultation": "Bezplatná konzultácia",
    "cta.getQuote": "Získať ponuku",
    "cta.viewPortfolio": "Zobraziť portfólio",
    "cta.learnMore": "Zistiť viac",
    "cta.contactUs": "Kontaktujte nás",
    "cta.startProject": "Začať projekt",

    // PPC Services Page
    "ppc.badge": "PPC & Reklama",
    "ppc.title1": "Dosiahnite výsledky s",
    "ppc.title2": "Platenou reklamou",
    "ppc.subtitle":
      "Strategické kampane na Google, Meta a ďalších platformách. Získajte kvalifikované kontakty a merateľnú návratnosť od prvého dňa.",
    "ppc.campaignTypes": "Typy kampaní",
    "ppc.campaignTypesDesc": "Spravujeme všetky typy platených reklamných kampaní",
    "ppc.whyChoose": "Prečo zvoliť naše PPC služby",
    "ppc.pricing": "Transparentné ceny",
    "ppc.pricingDesc": "Vyberte si balíček podľa svojich cieľov",

    // SEO Services Page
    "seo.badge": "SEO Služby",
    "seo.title1": "Dominujte vo vyhľadávaní s",
    "seo.title2": "Expertným SEO",
    "seo.subtitle":
      "Zlepšite svoje pozície s osvedčenými stratégiami. Analýza kľúčových slov, linkbuilding a technická optimalizácia.",
    "seo.services": "Naše SEO služby",
    "seo.servicesDesc": "Komplexné stratégie pre zlepšenie viditeľnosti vo vyhľadávačoch",
    "seo.whyChoose": "Prečo investovať do SEO",
    "seo.pricing": "SEO balíčky",
    "seo.pricingDesc": "Flexibilné plány pre firmy všetkých veľkostí",

    // E-commerce Page
    "ecom.badge": "E-Commerce riešenia",
    "ecom.title1": "Vytvorte si svoj",
    "ecom.title2": "Online obchod",
    "ecom.subtitle":
      "Výkonné WooCommerce e-shopy s plynulým nákupným procesom, ktoré maximalizujú konverzie a predaje.",
    "ecom.features": "Funkcie e-shopu",
    "ecom.featuresDesc": "Všetko, čo potrebujete k úspešnému online predaju",
    "ecom.platforms": "Platformy, s ktorými pracujeme",
    "ecom.pricing": "E-Commerce balíčky",
    "ecom.pricingDesc": "Začnite predávať online s našimi riešeniami",

    // Web Development Page
    "webdev.badge": "Tvorba webu",
    "webdev.title1": "Weby na mieru",
    "webdev.title2": "Ktoré fungujú",
    "webdev.subtitle":
      "Moderné WordPress weby vytvorené s Oxygen Builderom. Rýchle, škálovateľné a optimalizované pre výsledky.",
    "webdev.services": "Naše služby tvorby webu",
    "webdev.servicesDesc": "Od jednoduchých landing pages po komplexné webové aplikácie",
    "webdev.technologies": "Technológie, ktoré používame",
    "webdev.pricing": "Balíčky tvorby webu",
    "webdev.pricingDesc": "Riešenia pre každý rozpočet a potrebu",

    // Digitalization Page
    "digital.badge": "Digitalizácia & Automatizácia",
    "digital.title1": "Automatizujte svoje",
    "digital.title2": "Podnikanie",
    "digital.subtitle":
      "Premeňte manuálne procesy na efektívne digitálne workflow. Implementujeme nástroje, ktoré šetria čas, znižujú chyby a rastú s vami.",
    "digital.services": "Naše služby digitalizácie",
    "digital.servicesDesc": "Zefektívnite svoje podnikanie modernými nástrojmi",
    "digital.technologies": "Technológie, ktoré používame",
    "digital.pricing": "Balíčky digitalizácie",
    "digital.pricingDesc": "Riešenia pre modernizáciu vášho podnikania",

    // Graphic Design Page
    "graphic.badge": "Grafický dizajn",
    "graphic.title1": "Dizajny, ktoré",
    "graphic.title2": "Vyniknú",
    "graphic.subtitle": "Od letákov a plagátov po vizitky a bannery – tvoríme pútavú grafiku pre všetky platformy.",
    "graphic.services": "Kompletné grafické služby",
    "graphic.servicesDesc": "Tvoríme obsah, ktorý nielen vynikne, ale aj preukázateľne plní svoj účel.",
    "graphic.portfolio": "Naša práca",
    "graphic.portfolioDesc": "Výber z našich nedávnych grafických projektov",
    "graphic.pricing": "Transparentné ceny",
    "graphic.pricingDesc": "Vyberte si balíček podľa svojich potrieb",

    // About section
    "about.badge": "O nás",
    "about.heading.before": "Sme tím",
    "about.heading.highlight": "inovátorov",
    "about.p1":
      "Sme full-service digitálna agentúra, ktorá pomáha značkám rásť vďaka smart marketingu, výkonnostnej reklame a škálovateľným webovým riešeniam.",
    "about.p2":
      "Od PPC a SEO po moderné weby – sústredíme sa na to, čo reálne posúva váš biznis vpred. Bez skratiek, bez priemerných výsledkov.",
    "about.cta": "Zistiť viac o nás",

    // About features
    "about.features.fast.title": "Rýchle dodanie",
    "about.features.fast.desc": "Rýchly turnaround bez kompromisov v kvalite",
    "about.features.team.title": "Skúsený tím",
    "about.features.team.desc": "Profesionáli, ktorých bavia inovácie",
    "about.features.ontime.title": "Dodanie načas",
    "about.features.ontime.desc": "Projekty dodávame v dohodnutých termínoch",
    "about.features.results.title": "Zamerané na výsledky",
    "about.features.results.desc": "Fokus na merateľné výstupy",

    // Services section (homepage)
    "servicesSection.badge": "Čo robíme",
    "servicesSection.title": "Služby, ktoré posunú vašu značku",
    "servicesSection.subtitle":
    "Ponúkame komplexné digitálne riešenia na mieru vašim potrebám, aby váš biznis uspel v modernom online prostredí.",
    "servicesSection.learnMore": "Zistiť viac",
    "servicesSection.viewAll": "Zobraziť všetky služby",
    
    // Services cards
    "services.card.webDev.title": "Tvorba webu",
    "services.card.webDev.desc":
    "WordPress weby na mieru s Oxygen Builderom. Rýchle, škálovateľné a optimalizované pre výkon.",
    "services.card.ecom.title": "E-Commerce",
    "services.card.ecom.desc":
    "Výkonné WooCommerce e-shopy s plynulým nákupným procesom, ktoré maximalizujú konverzie.",
    "services.card.seo.title": "SEO služby",
    "services.card.seo.desc":
    "Zlepšite pozície vďaka analýze kľúčových slov, linkbuildingu a lokálnym SEO stratégiám.",
    "services.card.ppc.title": "PPC & reklama",
    "services.card.ppc.desc":
    "Strategické platené kampane na Google a sociálnych sieťach, ktoré privádzajú relevantnú návštevnosť a dopyty.",
    "services.card.digital.title": "Digitalizácia",
    "services.card.digital.desc":
    "Automatizujte biznis pomocou CRM, cloud nástrojov a automatizácie procesov.",
    "services.card.graphic.title": "Grafický dizajn",
    "services.card.graphic.desc":
    "Pútavá digitálna aj tlačená grafika — od log po brožúry a marketingové materiály.",

    // Portfolio section
    "portfolio.badge": "Naše práce",
    "portfolio.title": "Vybrané projekty",
    "portfolio.subtitle": "Pozrite si našu poslednú prácu a zistite, ako sme firmám pomohli dosiahnuť ich digitálne ciele.",
    "portfolio.viewCaseStudy": "Zobraziť case study",
    "portfolio.viewAll": "Zobraziť všetky projekty",

  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from domain on first load
    return getLanguageFromDomain();
  });

  // Update language if domain changes (e.g., navigation)
  useEffect(() => {
    const detectedLanguage = getLanguageFromDomain();
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
