// src/data/case-studies.ts
import { LucideIcon, Code, Palette, Globe, Megaphone } from "lucide-react";
import type { Language } from "@/contexts/LanguageContext";

export interface CaseStudyService {
  icon: LucideIcon;
  label: string;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface CaseStudyContent {
  slug: string;

  // Basic info
  title: string;
  subtitle: string;
  category: string;
  client: string;
  duration: string;
  year: string;
  team: string;
  projectUrl?: string;

  // Portfolio card fields
  description: string;
  tags: string[];
  image: string;
  statValue: string;
  statLabel: string;
  featured: boolean;

  // Detail page fields
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  services: CaseStudyService[];
  technologies: string[];
  results: CaseStudyResult[];
  testimonial: CaseStudyTestimonial;
  gallery: string[];
  features: string[];
}

export interface CaseStudyTranslations {
  EN: CaseStudyContent;
  CZ?: CaseStudyContent;
  SK?: CaseStudyContent;
}

export interface CaseStudyData {
  translations: CaseStudyTranslations;
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  mobilno: {
    translations: {
      EN: {
        slug: "mobilno",
        title: "Mobilno",
        subtitle: "Marketplace for Mobile Service Providers",
        category: "Marketplace",
        client: "Mobilno",
        duration: "Ongoing",
        year: "2024–2025",
        team: "2–4 Members",
        projectUrl: "https://www.mobilno.sk",

        description:
          "A marketplace where customers post a request and mobile professionals respond with offers — built for SEO, scale, and smooth onboarding.",
        tags: ["Marketplace", "WordPress", "Technical SEO"],
        image: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",
        statValue: "+180%",
        statLabel: "Organic Visibility",
        featured: true,

        heroImage: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",

        overview:
          "Mobilno connects people who need a service with mobile professionals (e.g., DJs, massage therapists, photographers, repairs). The platform is built to grow through SEO: structured listings, city-based landing pages, and clean internal linking between categories, services, and providers.",

        challenge:
          "We needed a content model that scales (providers, services, categories, specializations, locations) while keeping navigation simple. The key was making search and filtering feel instant, and making SEO work with city-based pages without duplicate or canonical issues.",

        solution:
          "We built a WordPress marketplace using custom post types, taxonomies, and advanced fields. We implemented SEO-friendly routing for category + city pages, optimized queries and caching, and shipped UX flows for provider onboarding, profile creation, and request → offer conversion.",

        services: [
          { icon: Code, label: "WordPress Development" },
          { icon: Palette, label: "UI/UX Design" },
          { icon: Globe, label: "Technical SEO" },
          { icon: Megaphone, label: "Conversion Optimization" },
        ],

        technologies: ["PHP", "WordPress", "ACF", "JavaScript", "MySQL", "HTML5", "CSS3", "REST API"],

        results: [
          { metric: "+3.2x", label: "Provider Onboarding", description: "More providers completed registration and published their profiles" },
          { metric: "+180%", label: "Indexed Landing Pages", description: "Growth of category + city pages discoverable via Google" },
          { metric: "-45%", label: "Faster Matching", description: "Shorter time from customer request to first provider response" },
          { metric: "+28%", label: "CTA Engagement", description: "Higher interaction with key actions (request, contact, signup)" },
        ],

        testimonial: {
          quote:
            "Mobilno now feels like a real product. The platform is structured, fast, and ready to scale — providers can onboard easily and customers find what they need without friction.",
          author: "Peter Gáborík",
          role: "Founder, Mobilno",
          avatar: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
        },

        gallery: [],

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
        slug: "mobilno",
        title: "Mobilno",
        subtitle: "Marketplace pro mobilní poskytovatele služeb",
        category: "Marketplace",
        client: "Mobilno",
        duration: "Průběžně",
        year: "2024–2025",
        team: "2–4 členové",
        projectUrl: "https://www.mobilno.sk",

        description:
          "Marketplace, kde zákazník zadá poptávku a mobilní profesionálové odpovídají nabídkami — postavené pro SEO, škálování a plynulý onboarding.",
        tags: ["Marketplace", "WordPress", "Technické SEO"],
        image: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",
        statValue: "+180%",
        statLabel: "Organická viditelnost",
        featured: true,

        heroImage: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",

        overview:
          "Mobilno propojuje lidi, kteří potřebují službu, s mobilními profesionály (např. DJové, maséři, fotografové, opravy). Platforma je postavená tak, aby rostla přes SEO: strukturované profily, landing pages podle měst a čisté interní prolinkování mezi kategoriemi, službami a poskytovateli.",

        challenge:
          "Potřebovali jsme obsahový model, který se dá škálovat (poskytovatelé, služby, kategorie, specializace, lokality), ale zároveň zůstane jednoduchý na používání. Klíčové bylo, aby vyhledávání a filtrování působilo okamžitě a aby SEO fungovalo i u stránek podle měst bez duplicit a canonical problémů.",

        solution:
          "Postavili jsme WordPress marketplace na custom post types, taxonomiích a pokročilých polích. Implementovali jsme SEO-friendly routing pro kategorie + města, optimalizovali dotazy a cache a dodali UX flow pro onboarding poskytovatelů, tvorbu profilu a konverzi poptávka → nabídka.",

        services: [
          { icon: Code, label: "Vývoj ve WordPressu" },
          { icon: Palette, label: "UI/UX design" },
          { icon: Globe, label: "Technické SEO" },
          { icon: Megaphone, label: "Optimalizace konverzí" },
        ],

        technologies: ["PHP", "WordPress", "ACF", "JavaScript", "MySQL", "HTML5", "CSS3", "REST API"],

        results: [
          { metric: "+3.2×", label: "Onboarding poskytovatelů", description: "Více poskytovatelů dokončilo registraci a publikovalo profil" },
          { metric: "+180%", label: "Indexované landing pages", description: "Růst stránek kategorie + město dohledatelných přes Google" },
          { metric: "-45%", label: "Rychlejší spárování", description: "Kratší čas od poptávky ke první reakci poskytovatele" },
          { metric: "+28%", label: "Interakce s CTA", description: "Vyšší aktivita u klíčových akcí (poptávka, kontakt, registrace)" },
        ],

        testimonial: {
          quote:
            "Mobilno teď působí jako skutečný produkt. Platforma je strukturovaná, rychlá a připravená škálovat — poskytovatelé se jednoduše onboardují a zákazníci najdou, co potřebují, bez zbytečného tření.",
          author: "Peter Gáborík",
          role: "Founder, Mobilno",
          avatar: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
        },

        gallery: [],

        features: [
          "Custom post types pro profily poskytovatelů a služby",
          "Taxonomie pro kategorie, specializace a typy problémů",
          "Landing pages podle měst se SEO-safe routingem a canonicaly",
          "Vyhledávání + filtrování optimalizované na relevanci (služba, město, klíčová slova)",
          "Konverzní onboarding poskytovatelů (připravené pro Free/Premium model)",
          "Výkonové optimalizace (lean dotazy, cache, méně duplicitních volání)",
          "Stránky připravené na structured data pro lepší vzhled ve vyhledávání",
          "Interní prolinkování mezi výpisy, městy a profily poskytovatelů",
        ],
      },

      SK: {
        slug: "mobilno",
        title: "Mobilno",
        subtitle: "Marketplace pre mobilných poskytovateľov služieb",
        category: "Marketplace",
        client: "Mobilno",
        duration: "Priebežne",
        year: "2024–2025",
        team: "2–4 členovia",
        projectUrl: "https://www.mobilno.sk",

        description:
          "Marketplace, kde zákazník zadá dopyt a mobilní profesionáli odpovedajú ponukami — postavené pre SEO, škálovanie a plynulý onboarding.",
        tags: ["Marketplace", "WordPress", "Technické SEO"],
        image: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",
        statValue: "+180%",
        statLabel: "Organická viditeľnosť",
        featured: true,

        heroImage: "https://www.mobilno.sk/wp-content/uploads/mobilno-mockup.webp",

        overview:
          "Mobilno spája ľudí, ktorí potrebujú službu, s mobilnými profesionálmi (napr. DJ, maséri, fotografi, opravy). Platforma je navrhnutá tak, aby rástla cez SEO: štruktúrované profily, landing pages podľa miest a čisté interné prelinkovanie medzi kategóriami, službami a poskytovateľmi.",

        challenge:
          "Potrebovali sme obsahový model, ktorý sa dá škálovať (poskytovatelia, služby, kategórie, špecializácie, lokality), ale zároveň ostane jednoduchý na používanie. Kľúčové bolo, aby vyhľadávanie a filtrovanie pôsobilo okamžite a aby SEO fungovalo aj pri stránkach podľa miest bez duplicitných/canonical problémov.",

        solution:
          "Postavili sme WordPress marketplace na custom post types, taxonómiách a pokročilých poliach. Implementovali sme SEO-friendly routing pre kategórie + mestá, optimalizovali dopyty a cache a dodali UX flow pre onboarding poskytovateľov, tvorbu profilu a konverziu dopyt → ponuka.",

        services: [
          { icon: Code, label: "WordPress vývoj" },
          { icon: Palette, label: "UI/UX dizajn" },
          { icon: Globe, label: "Technické SEO" },
          { icon: Megaphone, label: "Optimalizácia konverzií" },
        ],

        technologies: ["PHP", "WordPress", "ACF", "JavaScript", "MySQL", "HTML5", "CSS3", "REST API"],

        results: [
          { metric: "+3.2×", label: "Onboarding poskytovateľov", description: "Viac poskytovateľov dokončilo registráciu a publikovalo profil" },
          { metric: "+180%", label: "Indexované landing pages", description: "Rast stránok kategória + mesto dohľadateľných cez Google" },
          { metric: "-45%", label: "Rýchlejšie spárovanie", description: "Kratší čas od dopytu po prvú reakciu poskytovateľa" },
          { metric: "+28%", label: "Interakcie s CTA", description: "Vyššia aktivita pri kľúčových akciách (dopyt, kontakt, registrácia)" },
        ],

        testimonial: {
          quote:
            "Mobilno teraz pôsobí ako reálny produkt. Platforma je štruktúrovaná, rýchla a pripravená škálovať — poskytovatelia sa jednoducho onboardujú a zákazníci nájdu, čo potrebujú, bez zbytočného trenia.",
          author: "Peter Gáborík",
          role: "Founder, Mobilno",
          avatar: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
        },

        gallery: [],

        features: [
          "Custom post types pre profily poskytovateľov a služby",
          "Taxonómie pre kategórie, špecializácie a typy problémov",
          "Landing pages podľa miest so SEO-safe routingom a canonicalmi",
          "Vyhľadávanie + filtrovanie optimalizované na relevanciu (služba, mesto, kľúčové slová)",
          "Konverzný onboarding poskytovateľov (pripravené pre Free/Premium model)",
          "Výkonnostné optimalizácie (lean dopyty, cache, menej duplicitných volaní)",
          "Stránky pripravené na structured data pre lepší vzhľad vo vyhľadávaní",
          "Interné prelinkovanie medzi výpismi, mestami a profilmi poskytovateľov",
        ],
      },
    },
  },
  biodent: {
    translations: {
      EN: {
        slug: "biodent-dental-clinic",
        title: "Biodent",
        subtitle: "Dental Clinic Website & Patient Conversion",
        category: "Healthcare",
        client: "Biodent",
        duration: "2-4 Weeks",
        year: "2024",
        team: "2–3 Members",
        projectUrl: "https://biodent.sk/",
  
        description:
          "Modern dental clinic website focused on trust, clarity, and patient conversion — combining service presentation, doctor profiles, and local SEO.",
        tags: ["Healthcare", "WordPress", "Local SEO"],
        image: "/img/weboptim-biodent-mockup.jpg",
        statValue: "+60%",
        statLabel: "Inquiry Growth",
        featured: true,
  
        heroImage: "/img/weboptim-biodent-mockup.jpg",
  
        overview:
          "Biodent is a modern dental clinic offering comprehensive dental care — from preventive dentistry and hygiene to implantology and aesthetic treatments. The website is designed to build trust with new patients through clear service explanations, doctor profiles, and strong local SEO visibility.",
  
        challenge:
          "Dental websites must balance medical credibility with accessibility. The challenge was to clearly explain complex procedures, reduce hesitation for first-time patients, and support local search visibility while keeping the experience calm, professional, and conversion-focused.",
  
        solution:
          "We built a WordPress website structured around patient intent: services, doctors, pricing transparency, and contact paths. The site uses SEO-optimized service pages, local signals, and conversion-focused CTAs to guide visitors from information to appointment request with minimal friction.",
  
        services: [
          { icon: Code, label: "WordPress Development" },
          { icon: Palette, label: "UI/UX Design" },
          { icon: Globe, label: "Local & Medical SEO" },
          { icon: Megaphone, label: "Conversion Optimization" },
        ],
  
        technologies: ["PHP", "WordPress", "ACF", "JavaScript", "MySQL", "HTML5", "CSS3"],
  
        results: [
          { metric: "+60%", label: "Patient Inquiries", description: "More appointment requests via contact forms and CTAs" },
          { metric: "+40%", label: "Local Visibility", description: "Improved rankings for dental services in local search results" },
          { metric: "-35%", label: "Bounce Rate", description: "Better engagement through clearer structure and messaging" },
          { metric: "+25%", label: "CTA Interaction", description: "Higher engagement with booking and contact actions" },
        ],
  
        testimonial: {
          quote:
            "The cooperation with Mr. Gáborík and his team on the new website of our institution worked great, we clarified everything, set it up and the final price corresponded to the agreed one. After experience with the creation of various other websites, this is really not a given and I appreciate it very much.",
          author: "Martin Vokálek",
          role: "Executive Director",
          avatar: "/img/europeum-quote.png",
        },
  
        gallery: [],
  
        features: [
          "Clear service pages for individual dental treatments",
          "Doctor profiles to build trust and credibility",
          "Local SEO structure for city-based dental searches",
          "Conversion-focused CTAs for appointments and consultations",
          "Mobile-first design for patients on the go",
          "Fast-loading pages with optimized assets",
          "Structured content explaining procedures in a patient-friendly way",
          "Strong trust elements: expertise, equipment, and clinic environment",
        ],
      },
  
      CZ: {
        slug: "biodent-zubni-klinika",
        title: "Biodent",
        subtitle: "Web zubní kliniky & konverze pacientů",
        category: "Zdravotnictví",
        client: "Biodent",
        duration: "2-4 týdny",
        year: "2024",
        team: "2–3 členové",
        projectUrl: "https://biodent.sk/",
  
        description:
          "Moderní web zubní kliniky zaměřený na důvěru, přehlednost a získávání nových pacientů pomocí lokálního SEO.",
        tags: ["Zdravotnictví", "WordPress", "Lokální SEO"],
        image: "/img/weboptim-biodent-mockup.jpg",
        statValue: "+60%",
        statLabel: "Nárůst poptávek",
        featured: true,
  
        heroImage: "/img/weboptim-biodent-mockup.jpg",
  
        overview:
          "Biodent je moderní zubní klinika poskytující komplexní stomatologickou péči — od prevence a dentální hygieny až po implantologii a estetickou stomatologii. Web je navržen tak, aby budoval důvěru nových pacientů a zvyšoval viditelnost ve vyhledávání.",
  
        challenge:
          "Zubní web musí působit odborně, ale zároveň srozumitelně a uklidňujícím dojmem. Výzvou bylo vysvětlit složitější zákroky, snížit obavy nových pacientů a podpořit lokální dohledatelnost bez zahlcení informacemi.",
  
        solution:
          "Vytvořili jsme WordPress web strukturovaný podle potřeb pacientů: služby, lékaři, informace a snadná cesta ke kontaktu. Optimalizované servisní stránky, lokální SEO signály a jasné výzvy k akci pomáhají převádět návštěvníky na objednávky.",
  
        services: [
          { icon: Code, label: "Vývoj ve WordPressu" },
          { icon: Palette, label: "UI/UX design" },
          { icon: Globe, label: "Lokální & medicínské SEO" },
          { icon: Megaphone, label: "Optimalizace konverzí" },
        ],
  
        technologies: ["PHP", "WordPress", "ACF", "JavaScript", "MySQL", "HTML5", "CSS3"],
  
        results: [
          { metric: "+60%", label: "Poptávky pacientů", description: "Více objednávek přes kontaktní formuláře" },
          { metric: "+40%", label: "Lokální viditelnost", description: "Lepší pozice pro zubní služby v lokálním vyhledávání" },
          { metric: "-35%", label: "Míra opuštění", description: "Vyšší zapojení díky přehlednější struktuře" },
          { metric: "+25%", label: "Interakce s CTA", description: "Více kliknutí na objednání a kontakt" },
        ],
  
        testimonial: {
          quote:
            "Spolupráce s panem Gáboríkem a jeho týmem na novém webu naší instituce fungovala skvěle, vše jsme si vyjasnili, nastavili a finální cenu odpovídali té dohodnuté. Po zkušenostech s tvorbou různých webů toto opravdu není samozřejmost a moc si toho vážím.",
          author: "Martin Vokálek",
          role: "Výkonný ředitel",
          avatar: "/img/europeum-quote.png",
        },
  
        gallery: [],
  
        features: [
          "Přehledné stránky jednotlivých stomatologických služeb",
          "Profily lékařů pro budování důvěry",
          "Lokální SEO struktura pro vyhledávání podle města",
          "Konverzní výzvy k objednání a konzultaci",
          "Responzivní mobile-first design",
          "Rychlé načítání stránek",
          "Srozumitelné vysvětlení zákroků pro pacienty",
          "Silné prvky důvěry: odbornost, vybavení, prostředí kliniky",
        ],
      },
  
      SK: {
        slug: "biodent-zubna-klinika",
        title: "Biodent",
        subtitle: "Web zubnej kliniky & získavanie pacientov",
        category: "Zdravotníctvo",
        client: "Biodent",
        duration: "2-4 týždňov",
        year: "2024",
        team: "2–3 členovia",
        projectUrl: "https://biodent.sk/",
  
        description:
          "Moderná webová stránka zubnej kliniky zameraná na dôveru, prehľadnosť a konverziu pacientov pomocou lokálneho SEO.",
        tags: ["Zdravotníctvo", "WordPress", "Lokálne SEO"],
        image: "/img/weboptim-biodent-mockup.jpg",
        statValue: "+60%",
        statLabel: "Nárast dopytov",
        featured: true,
  
        heroImage: "/img/weboptim-biodent-mockup.jpg",
  
        overview:
          "Biodent je moderná zubná klinika poskytujúca komplexnú stomatologickú starostlivosť — od prevencie a dentálnej hygieny až po implantológiu a estetické zákroky. Web je navrhnutý tak, aby budoval dôveru nových pacientov a zvyšoval lokálnu viditeľnosť.",
  
        challenge:
          "Zubné weby musia pôsobiť odborne, no zároveň upokojujúco a zrozumiteľne. Výzvou bolo vysvetliť zložitejšie zákroky, znížiť obavy nových pacientov a podporiť lokálne vyhľadávanie bez preťaženia obsahom.",
  
        solution:
          "Vytvorili sme WordPress web postavený na potrebách pacientov: služby, lekári, informácie a jednoduchá cesta ku kontaktu. SEO-optimalizované servisné stránky, lokálne signály a konverzné CTA vedú návštevníkov od informácií k objednaniu.",
  
        services: [
          { icon: Code, label: "WordPress vývoj" },
          { icon: Palette, label: "UI/UX dizajn" },
          { icon: Globe, label: "Lokálne & medicínske SEO" },
          { icon: Megaphone, label: "Optimalizácia konverzií" },
        ],
  
        technologies: ["PHP", "WordPress", "ACF", "JavaScript", "MySQL", "HTML5", "CSS3"],
  
        results: [
          { metric: "+60%", label: "Dopyty pacientov", description: "Viac objednávok cez kontaktné formuláre" },
          { metric: "+40%", label: "Lokálna viditeľnosť", description: "Lepšie pozície pre zubné služby v lokálnom vyhľadávaní" },
          { metric: "-35%", label: "Miera odchodov", description: "Vyššia angažovanosť vďaka jasnej štruktúre" },
          { metric: "+25%", label: "Interakcie s CTA", description: "Viac kliknutí na objednanie a kontakt" },
        ],
  
        testimonial: {
          quote:
            "Spolupráca s pánom Gáboríkom a jeho tímom na novom webe našej inštitúcie fungovala skvele, všetko sme si vyjasnili, nastavili a finálna cena zodpovedala tej dohodnutej. Po skúsenostiach s tvorbou rôznych iných webov toto naozaj nie je samozrejmosť a veľmi si to vážim.",
          author: "Martin Vokálek",
          role: "Výkonný riaditeľ",
          avatar: "/img/europeum-quote.png",
        },
  
        gallery: [],
  
        features: [
          "Prehľadné stránky stomatologických služieb",
          "Profily lekárov na budovanie dôvery",
          "Lokálna SEO štruktúra pre vyhľadávanie podľa mesta",
          "Konverzné CTA pre objednanie a konzultáciu",
          "Mobile-first responzívny dizajn",
          "Rýchle načítanie stránok",
          "Zrozumiteľné vysvetlenie zákrokov pre pacientov",
          "Silné prvky dôvery: odbornosť, vybavenie, prostredie kliniky",
        ],
      },
    },
  },
  "europeum-platform": {
    translations: {
      EN: {
        slug: "europeum-platform",
        title: "EUROPEUM",
        subtitle: "Content Platform, Events & Advanced Filtering",
        category: "Non-profit / Think Tank",
        client: "EUROPEUM",
        duration: "4-6 weeks",
        year: "2024",
        team: "2–3 Members",
        projectUrl: "https://www.europeum.org/",

        description:
          "Large-scale content platform with events, publications, projects, and advanced filtering across dates, authors, categories, and languages.",
        tags: ["WordPress", "Content Platform", "Custom Filtering"],
        image: "/img/497731082_9657833254306742_4269654853684625963_n.jpg",
        statValue: "1000+",
        statLabel: "Content Items",
        featured: true,

        heroImage: "/img/497731082_9657833254306742_4269654853684625963_n.jpg",

        overview:
          "EUROPEUM is a multilingual think-tank platform publishing articles, events, analyses, policy papers, reports, and projects. The website serves as a central hub for public communication, expert content, and event promotion, requiring complex filtering and scalable content architecture.",

        challenge:
          "The platform needed to handle a large volume of content across multiple categories, authors, dates, and content types. Key challenges included advanced filtering (date ranges, authors, publication types), future-dated events, multilingual support, and maintaining performance with complex queries.",

        solution:
          "We built custom WordPress logic using advanced WP_Query configurations, GET-based filtering, and dynamic date queries. The platform supports past and future content, author-based filtering, publication type detection via search logic, and multilingual compatibility while keeping the UX intuitive and consistent.",

        services: [
          { icon: Code, label: "Custom WordPress Development" },
          { icon: Globe, label: "Content Architecture & Data Modeling" },
          { icon: Palette, label: "UI Logic for Large Content Sets" },
          { icon: Megaphone, label: "UX for Filtering & Discovery" },
        ],

        technologies: ["WordPress", "PHP", "WP_Query", "MySQL", "JavaScript", "HTML5", "CSS3"],

        results: [
          { metric: "✓", label: "Advanced Filtering", description: "Filtering by date ranges, authors, categories, and publication types" },
          { metric: "✓", label: "Future Content Support", description: "Events and projects displayed using future post logic" },
          { metric: "↑", label: "Content Discoverability", description: "Users can easily find relevant articles, events, and projects" },
          { metric: "✓", label: "Scalable Architecture", description: "Platform ready for long-term content growth" },
        ],

        testimonial: {
          quote:
            "The platform handles a large amount of content without losing clarity. Filtering, events, and publications work reliably and are easy to manage for our editorial team.",
          author: "EUROPEUM",
          role: "Institute Team",
          avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
        },

        gallery: [],
        features: [
          "Advanced GET-based filtering (dates, authors, categories)",
          "Support for past and future-dated content",
          "Custom publication type filtering via search logic",
          "Author-centric content views with dynamic counters",
          "Multilingual content handling",
          "Pagination optimized for large datasets",
          "Reusable filtering UI across events, articles, and projects",
          "Performance-aware WP_Query configurations",
        ],
      },
      SK: {
        slug: "europeum-platform",
        title: "EUROPEUM",
        subtitle: "Obsahová platforma, eventy & pokročilé filtrovanie",
        category: "Neziskový sektor / Think tank",
        client: "EUROPEUM",
        duration: "4–6 týždňov",
        year: "2024",
        team: "2–3 osoby",
        projectUrl: "https://www.europeum.org/",
      
        description:
          "Rozsiahla obsahová platforma s eventmi, publikáciami, projektmi a pokročilým filtrovaním podľa dátumov, autorov, kategórií a jazykov.",
        tags: ["WordPress", "Obsahová platforma", "Vlastné filtrovanie"],
        image: "/img/497731082_9657833254306742_4269654853684625963_n.jpg",
        statValue: "1000+",
        statLabel: "Obsahových položiek",
        featured: true,
      
        heroImage: "/img/497731082_9657833254306742_4269654853684625963_n.jpg",
      
        overview:
          "EUROPEUM je viacjazyčná think-tank platforma publikujúca články, eventy, analýzy, policy papers, správy a projekty. Web slúži ako centrálne miesto pre verejnú komunikáciu, odborný obsah a propagáciu podujatí, pričom vyžaduje komplexné filtrovanie a škálovateľnú obsahovú architektúru.",
      
        challenge:
          "Platforma musela zvládnuť veľký objem obsahu naprieč viacerými kategóriami, autormi, dátumami a typmi obsahu. Medzi hlavné výzvy patrilo pokročilé filtrovanie (časové rozsahy, autori, typy publikácií), práca s budúcimi eventmi, viacjazyčná podpora a zachovanie výkonu pri komplexných dotazoch.",
      
        solution:
          "Vytvorili sme vlastnú WordPress logiku postavenú na pokročilých konfiguráciách WP_Query, filtrovaní cez GET parametre a dynamických dátumových dotazoch. Platforma podporuje minulý aj budúci obsah, filtrovanie podľa autorov, rozpoznávanie typov publikácií pomocou vyhľadávacej logiky a viacjazyčnú kompatibilitu pri zachovaní prehľadného a konzistentného UX.",
      
        services: [
          { icon: Code, label: "Vlastný WordPress vývoj" },
          { icon: Globe, label: "Obsahová architektúra & dátové modelovanie" },
          { icon: Palette, label: "UI logika pre rozsiahly obsah" },
          { icon: Megaphone, label: "UX pre filtrovanie & objavovanie obsahu" },
        ],
      
        technologies: ["WordPress", "PHP", "WP_Query", "MySQL", "JavaScript", "HTML5", "CSS3"],
      
        results: [
          { metric: "✓", label: "Pokročilé filtrovanie", description: "Filtrovanie podľa dátumov, autorov, kategórií a typov publikácií" },
          { metric: "✓", label: "Podpora budúceho obsahu", description: "Eventy a projekty zobrazované pomocou logiky budúcich príspevkov" },
          { metric: "↑", label: "Lepšia nájditeľnosť obsahu", description: "Používatelia jednoducho nájdu relevantné články, eventy a projekty" },
          { metric: "✓", label: "Škálovateľná architektúra", description: "Platforma pripravená na dlhodobý rast obsahu" },
        ],
      
        testimonial: {
          quote:
            "Platforma zvláda veľké množstvo obsahu bez straty prehľadnosti. Filtrovanie, eventy aj publikácie fungujú spoľahlivo a sú jednoduché na správu pre náš redakčný tím.",
          author: "EUROPEUM",
          role: "Tím inštitútu",
          avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Pokročilé filtrovanie cez GET parametre (dátumy, autori, kategórie)",
          "Podpora minulého aj budúceho obsahu",
          "Vlastné filtrovanie typov publikácií pomocou vyhľadávacej logiky",
          "Autorské prehľady obsahu s dynamickými počítadlami",
          "Správa viacjazyčného obsahu",
          "Stránkovanie optimalizované pre veľké datasety",
          "Znovupoužiteľné UI filtrovania pre eventy, články a projekty",
          "Výkonovo optimalizované konfigurácie WP_Query",
        ],
      },
      CZ: {
        slug: "europeum-platform",
        title: "EUROPEUM",
        subtitle: "Obsahová platforma, eventy & pokročilé filtrování",
        category: "Neziskový sektor / Think tank",
        client: "EUROPEUM",
        duration: "4–6 týdnů",
        year: "2024",
        team: "2–3 osoby",
        projectUrl: "https://www.europeum.org/",
      
        description:
          "Rozsáhlá obsahová platforma s eventy, publikacemi, projekty a pokročilým filtrováním podle dat, autorů, kategorií a jazyků.",
        tags: ["WordPress", "Obsahová platforma", "Vlastní filtrování"],
        image: "/img/497731082_9657833254306742_4269654853684625963_n.jpg",
        statValue: "1000+",
        statLabel: "Obsahových položek",
        featured: true,
      
        heroImage: "/img/497731082_9657833254306742_4269654853684625963_n.jpg",
      
        overview:
          "EUROPEUM je vícejazyčná think-tank platforma publikující články, eventy, analýzy, policy papers, zprávy a projekty. Web slouží jako centrální hub pro veřejnou komunikaci, odborný obsah a propagaci akcí a vyžaduje komplexní filtrování a škálovatelnou obsahovou architekturu.",
      
        challenge:
          "Platforma musela zvládnout velké množství obsahu napříč různými kategoriemi, autory, daty a typy obsahu. Mezi hlavní výzvy patřilo pokročilé filtrování (časové rozsahy, autoři, typy publikací), práce s budoucími eventy, vícejazyčná podpora a udržení výkonu při komplexních dotazech.",
      
        solution:
          "Vyvinuli jsme vlastní WordPress logiku postavenou na pokročilých konfiguracích WP_Query, filtrování přes GET parametry a dynamických datových dotazech. Platforma podporuje minulý i budoucí obsah, filtrování podle autorů, rozpoznávání typů publikací pomocí vyhledávací logiky a vícejazyčnou kompatibilitu při zachování přehledného a konzistentního UX.",
      
        services: [
          { icon: Code, label: "Vlastní WordPress vývoj" },
          { icon: Globe, label: "Obsahová architektura & datové modelování" },
          { icon: Palette, label: "UI logika pro rozsáhlý obsah" },
          { icon: Megaphone, label: "UX pro filtrování & objevování obsahu" },
        ],
      
        technologies: ["WordPress", "PHP", "WP_Query", "MySQL", "JavaScript", "HTML5", "CSS3"],
      
        results: [
          { metric: "✓", label: "Pokročilé filtrování", description: "Filtrování podle dat, autorů, kategorií a typů publikací" },
          { metric: "✓", label: "Podpora budoucího obsahu", description: "Eventy a projekty zobrazované pomocí logiky budoucích příspěvků" },
          { metric: "↑", label: "Lepší dohledatelnost obsahu", description: "Uživatelé snadno najdou relevantní články, eventy a projekty" },
          { metric: "✓", label: "Škálovatelná architektura", description: "Platforma připravená na dlouhodobý růst obsahu" },
        ],
      
        testimonial: {
          quote:
            "Platforma zvládá velké množství obsahu bez ztráty přehlednosti. Filtrování, eventy i publikace fungují spolehlivě a jsou snadno spravovatelné pro náš redakční tým.",
          author: "EUROPEUM",
          role: "Tým institutu",
          avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Pokročilé filtrování přes GET parametry (data, autoři, kategorie)",
          "Podpora minulého i budoucího obsahu",
          "Vlastní filtrování typů publikací pomocí vyhledávací logiky",
          "Autorské přehledy obsahu s dynamickými počítadly",
          "Správa vícejazyčného obsahu",
          "Stránkování optimalizované pro velké datasety",
          "Znovupoužitelné UI filtrování pro eventy, články a projekty",
          "Výkonnostně optimalizované konfigurace WP_Query",
        ],
      },
    },
  },

  "duo-story-events": {
    translations: {
      EN: {
        slug: "duo-story-events",
        title: "Duo Story Reservation System",
        subtitle: "Event Booking & Reservation Management",
        category: "Events",
        client: "Duo Story",
        duration: "2-4 Weeks",
        year: "2024",
        team: "2–3 People",
        projectUrl: "https://www.duostory.cz",

        description:
          "Event booking system with capacity control (men/women), waitlist logic, automated emails, CSV export, and smart event filtering.",
        tags: ["WordPress", "FluentForms", "ACF", "Automation"],
        image: "/img/weboptim-duostory-mockup.jpg",
        statValue: "100%",
        statLabel: "Automated flow",
        featured: true,

        heroImage: "/img/weboptim-duostory-mockup.jpg",

        overview:
          "Duo Story needed a reliable event system for dating nights — from discovering upcoming events to handling paid registrations, capacity limits, and attendee management. We built a WordPress-based solution that automates the full lifecycle: filtering events, capturing payments, assigning attendee identifiers, sending emails, and supporting admins with export and moderation tools.",

        challenge:
          "The platform required precise logic: show only future events, filter by city/topic/age, manage separate capacities for men and women, and handle overbooking via a waitlist (náhradník). On top of that, admins needed safe tools to edit reservation states, export attendee lists, and keep availability counts accurate.",

        solution:
          "We implemented a custom reservation data layer (dedicated DB table) connected to ACF event fields and Fluent Forms payments. After successful payment, the system creates a reservation record, assigns an anonymized identifier (A–Z), updates available seats, and sends tailored confirmation emails. Admins can deactivate/delete reservations, restore capacity, export CSV lists, and attendees receive automated reminder emails via WP-Cron.",

        services: [
          { icon: Code, label: "WordPress Development" },
          { icon: Globe, label: "Data & Automations" },
          { icon: Palette, label: "UX Flow Design" },
          { icon: Megaphone, label: "Email & Messaging" },
        ],

        technologies: ["PHP", "WordPress", "FluentForms", "ACF", "MySQL", "JavaScript", "WP-Cron", "HTML5", "CSS3"],

        results: [
          { metric: "↓", label: "Less Manual Work", description: "Automated confirmations, reminders, and seat counting reduced admin workload" },
          { metric: "✓", label: "Accurate Capacity", description: "Seats update reliably per gender with waitlist (náhradník) fallback" },
          { metric: "CSV", label: "Faster Operations", description: "One-click export of attendees per event for on-site management" },
          { metric: "A–Z", label: "Anonymity Support", description: "Automatic letter assignment for smoother event check-in and privacy" },
        ],

        testimonial: {
          quote:
            "We finally have a system we can trust — registrations, availability, emails, and admin management are all automated and consistent for every event.",
          author: "Duo Story Team",
          role: "Operations",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        },

        gallery: [],
        features: [
          "Archive filtering: future events only, city/topic/date filters, sorting by date",
          "Age validation based on gender-specific limits (ACF fields)",
          "Separate seat capacity for men/women with automatic updates on payment",
          "Waitlist (náhradník) logic when capacity is full",
          "Custom DB table for reservations (faster, cleaner than post meta)",
          "Automatic attendee identifier assignment (A–Z) per gender per event",
          "Admin actions: deactivate/delete reservation + restore available seats",
          "One-click CSV export of reservations per event",
          "Automated email flows: confirmation vs waitlist + day-before reminder (WP-Cron)",
          "Google Calendar ‘Add to calendar’ link generation from ACF fields",
          "AJAX update for ‘sympatie’ field (post-event matching workflow)",
          "Ecomail subscription hook with opt-in handling",
        ],
      },
      SK: {
        slug: "duo-story-events",
        title: "Duo Story Rezervačný systém",
        subtitle: "Rezervácie eventov & správa účastníkov",
        category: "Eventy",
        client: "Duo Story",
        duration: "2–4 týždne",
        year: "2024",
        team: "2–3 osoby",
        projectUrl: "https://www.duostory.cz",
      
        description:
          "Rezervačný systém pre eventy s kontrolou kapacity (muži/ženy), logikou náhradníkov, automatickými e-mailmi, CSV exportom a inteligentným filtrovaním podujatí.",
        tags: ["WordPress", "FluentForms", "ACF", "Automatizácia"],
        image: "/img/weboptim-duostory-mockup.jpg",
        statValue: "100 %",
        statLabel: "Automatizovaný proces",
        featured: true,
      
        heroImage: "/img/weboptim-duostory-mockup.jpg",
      
        overview:
          "Duo Story potrebovalo spoľahlivý eventový systém pre zoznamovacie večery — od prehľadu nadchádzajúcich podujatí až po platené registrácie, kapacitné limity a správu účastníkov. Vytvorili sme WordPress riešenie, ktoré automatizuje celý životný cyklus: filtrovanie eventov, spracovanie platieb, prideľovanie identifikátorov účastníkom, odosielanie e-mailov a administráciu vrátane exportov.",
      
        challenge:
          "Platforma vyžadovala presnú logiku: zobrazovať len budúce eventy, filtrovať podľa mesta/témy/veku, spravovať samostatné kapacity pre mužov a ženy a riešiť preplnenie pomocou náhradníkov. Zároveň administrátori potrebovali bezpečné nástroje na úpravu stavov rezervácií, export zoznamov účastníkov a zachovanie presných kapacitných údajov.",
      
        solution:
          "Implementovali sme vlastnú dátovú vrstvu rezervácií (samostatná DB tabuľka) prepojenú s ACF poľami eventov a platbami cez Fluent Forms. Po úspešnej platbe systém vytvorí rezerváciu, priradí anonymizovaný identifikátor (A–Z), aktualizuje dostupné miesta a odošle personalizované potvrdzovacie e-maily. Administrátori môžu rezervácie deaktivovať alebo mazať, obnovovať kapacitu, exportovať CSV zoznamy a účastníkom sa automaticky odosielajú pripomienky cez WP-Cron.",
      
        services: [
          { icon: Code, label: "WordPress vývoj" },
          { icon: Globe, label: "Dáta & automatizácie" },
          { icon: Palette, label: "Návrh UX tokov" },
          { icon: Megaphone, label: "E-maily & komunikácia" },
        ],
      
        technologies: ["PHP", "WordPress", "FluentForms", "ACF", "MySQL", "JavaScript", "WP-Cron", "HTML5", "CSS3"],
      
        results: [
          { metric: "↓", label: "Menej manuálnej práce", description: "Automatické potvrdenia, pripomienky a počítanie miest znížili administratívu" },
          { metric: "✓", label: "Presná kapacita", description: "Spoľahlivá aktualizácia miest podľa pohlavia s podporou náhradníkov" },
          { metric: "CSV", label: "Rýchle operácie", description: "Export účastníkov na jedno kliknutie pre každý event" },
          { metric: "A–Z", label: "Podpora anonymity", description: "Automatické prideľovanie písmen pre jednoduchý check-in a ochranu súkromia" },
        ],
      
        testimonial: {
          quote:
            "Konečne máme systém, na ktorý sa môžeme spoľahnúť — registrácie, dostupnosť, e-maily aj administrácia sú plne automatizované a konzistentné pre každý event.",
          author: "Tím Duo Story",
          role: "Prevádzka",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Filtrovanie archívu: len budúce eventy, filtre podľa mesta/témy/dátumu, triedenie podľa dátumu",
          "Validácia veku na základe pohlavia (ACF polia)",
          "Samostatná kapacita miest pre mužov a ženy s automatickou aktualizáciou po platbe",
          "Logika náhradníkov pri naplnenej kapacite",
          "Vlastná DB tabuľka rezervácií (rýchlejšie a čistejšie než post meta)",
          "Automatické prideľovanie identifikátora účastníka (A–Z) podľa pohlavia a eventu",
          "Admin akcie: deaktivácia/odstránenie rezervácie + obnovenie kapacity",
          "CSV export rezervácií pre každý event jedným kliknutím",
          "Automatizované e-maily: potvrdenie vs. náhradník + pripomienka deň vopred (WP-Cron)",
          "Generovanie odkazu „Pridať do kalendára“ (Google Calendar) z ACF polí",
          "AJAX aktualizácia poľa „sympatie“ (workflow párovania po evente)",
          "Prepojenie na Ecomail s opt-in logikou",
        ],
      },
      CZ: {
        slug: "duo-story-events",
        title: "Duo Story Rezervační systém",
        subtitle: "Rezervace eventů & správa účastníků",
        category: "Eventy",
        client: "Duo Story",
        duration: "2–4 týdny",
        year: "2024",
        team: "2–3 osoby",
        projectUrl: "https://www.duostory.cz",
      
        description:
          "Rezervační systém pro eventy s kontrolou kapacity (muži/ženy), logikou náhradníků, automatickými e-maily, CSV exportem a chytrým filtrováním událostí.",
        tags: ["WordPress", "FluentForms", "ACF", "Automatizace"],
        image: "/img/weboptim-duostory-mockup.jpg",
        statValue: "100 %",
        statLabel: "Automatizovaný proces",
        featured: true,
      
        heroImage: "/img/weboptim-duostory-mockup.jpg",
      
        overview:
          "Duo Story potřebovalo spolehlivý eventový systém pro seznamovací večery — od přehledu nadcházejících akcí až po placené registrace, kapacitní limity a správu účastníků. Vytvořili jsme WordPress řešení, které automatizuje celý životní cyklus: filtrování eventů, zpracování plateb, přiřazování identifikátorů účastníkům, odesílání e-mailů a administraci včetně exportů.",
      
        challenge:
          "Platforma vyžadovala přesnou logiku: zobrazovat pouze budoucí eventy, filtrovat podle města/tématu/věku, spravovat oddělené kapacity pro muže a ženy a řešit přeplnění pomocí náhradníků. Zároveň administrátoři potřebovali bezpečné nástroje pro úpravu stavů rezervací, export seznamů účastníků a zachování přesných kapacit.",
      
        solution:
          "Implementovali jsme vlastní datovou vrstvu rezervací (samostatná DB tabulka) propojenou s ACF poli eventů a platbami přes Fluent Forms. Po úspěšné platbě systém vytvoří rezervaci, přiřadí anonymizovaný identifikátor (A–Z), aktualizuje dostupná místa a odešle personalizované potvrzovací e-maily. Administrátoři mohou rezervace deaktivovat nebo mazat, obnovovat kapacitu, exportovat CSV seznamy a účastníkům jsou automaticky zasílány připomínky přes WP-Cron.",
      
        services: [
          { icon: Code, label: "WordPress vývoj" },
          { icon: Globe, label: "Data & automatizace" },
          { icon: Palette, label: "Návrh UX toků" },
          { icon: Megaphone, label: "E-maily & komunikace" },
        ],
      
        technologies: ["PHP", "WordPress", "FluentForms", "ACF", "MySQL", "JavaScript", "WP-Cron", "HTML5", "CSS3"],
      
        results: [
          { metric: "↓", label: "Méně manuální práce", description: "Automatická potvrzení, připomínky a počítání míst snížily administrativu" },
          { metric: "✓", label: "Přesná kapacita", description: "Spolehlivá aktualizace míst podle pohlaví s podporou náhradníků" },
          { metric: "CSV", label: "Rychlejší provoz", description: "Export účastníků jedním kliknutím pro každý event" },
          { metric: "A–Z", label: "Podpora anonymity", description: "Automatické přiřazování písmen pro hladký check-in a ochranu soukromí" },
        ],
      
        testimonial: {
          quote:
            "Konečně máme systém, kterému můžeme důvěřovat — registrace, dostupnost, e-maily i administrace jsou plně automatizované a konzistentní pro každý event.",
          author: "Tým Duo Story",
          role: "Provoz",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Filtrování archivu: pouze budoucí eventy, filtry podle města/tématu/data, řazení podle data",
          "Validace věku na základě pohlaví (ACF pole)",
          "Oddělená kapacita míst pro muže a ženy s automatickou aktualizací po platbě",
          "Logika náhradníků při plné kapacitě",
          "Vlastní DB tabulka rezervací (rychlejší a čistší než post meta)",
          "Automatické přiřazování identifikátoru účastníka (A–Z) podle pohlaví a eventu",
          "Admin akce: deaktivace/odstranění rezervace + obnovení kapacity",
          "CSV export rezervací pro každý event jedním kliknutím",
          "Automatizované e-maily: potvrzení vs. náhradník + připomínka den předem (WP-Cron)",
          "Generování odkazu „Přidat do kalendáře“ (Google Calendar) z ACF polí",
          "AJAX aktualizace pole „sympatie“ (workflow párování po eventu)",
          "Napojení na Ecomail s opt-in logikou",
        ],
      },
    },
  },

  "penzion-snezna-website": {
    translations: {
      EN: {
        slug: "penzion-snezna-website",
        title: "Penzion Sněžná",
        subtitle: "Accommodation Website & Conversion Flows",
        category: "Hospitality",
        client: "Penzion Sněžná",
        duration: "2–3 Weeks",
        year: "2023",
        team: "1–2 Members",
        projectUrl: "https://www.penzionsnezna.cz/",

        description:
          "Accommodation website focused on clear presentation, seasonal offers, and conversion through forms, popups, and inquiries.",
        tags: ["Hospitality", "WordPress", "Lead Generation"],
        image: "/img/weboptim-penzion_1600-min.jpg",
        statValue: "✓",
        statLabel: "Inquiry Ready",
        featured: false,

        heroImage: "/img/weboptim-penzion_1600-min.jpg",

        overview:
          "Penzion Sněžná is a family accommodation website designed to clearly present rooms, location, and surrounding activities while guiding visitors toward direct inquiries. The site balances informative content with conversion-focused elements such as contact forms, popups, and clear calls-to-action.",

        challenge:
          "The main challenge was to turn a static accommodation website into a conversion-oriented experience. Visitors needed to quickly understand availability, location, and benefits, while the owner needed a simple way to receive inquiries without complex booking systems.",

        solution:
          "We built a WordPress website with a clean content structure, optimized forms, and contextual popups that support user intent. Inquiry flows are placed strategically across the site to capture interest at the right moment, while keeping the experience simple and distraction-free.",

        services: [
          { icon: Code, label: "WordPress Development" },
          { icon: Palette, label: "UI/UX & Content Architecture" },
          { icon: Globe, label: "Technical & Local SEO" },
          { icon: Megaphone, label: "Conversion Strategy (Forms & Popups)" },
        ],

        technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],

        results: [
          { metric: "↑", label: "Local Visibility", description: "Improved rankings for accommodation-related local searches" },
          { metric: "✓", label: "Direct Inquiries", description: "More leads without third-party booking fees" },
          { metric: "↓", label: "Bounce Rate", description: "Clear structure and fast load times improved engagement" },
          { metric: "✓", label: "SEO Scalability", description: "Content and structure ready for seasonal expansion" },
        ],

        testimonial: {
          quote:
            "The website is clear, easy to use, and brings us direct inquiries without unnecessary complexity. Everything important is easy to update and works reliably.",
          author: "Penzion Sněžná",
          role: "Owner",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        },

        gallery: [],
        features: [
          "Local SEO–oriented page structure for accommodation queries",
          "Optimized headings, internal linking, and content hierarchy",
          "Inquiry forms embedded across key pages",
          "Contextual popups supporting seasonal offers",
          "Mobile-first responsive layout",
          "Fast-loading pages with optimized assets",
          "Easy content editing for non-technical users",
          "Prepared structure for future booking integrations",
        ],
      },
      SK: {
        slug: "penzion-snezna-website",
        title: "Penzión Sněžná",
        subtitle: "Webová stránka ubytovania & konverzné procesy",
        category: "Ubytovanie",
        client: "Penzion Sněžná",
        duration: "2–3 týždne",
        year: "2023",
        team: "1–2 osoby",
        projectUrl: "https://www.penzionsnezna.cz/",
      
        description:
          "Webová stránka ubytovania zameraná na prehľadnú prezentáciu, sezónne ponuky a získavanie dopytov prostredníctvom formulárov, popupov a výziev k akcii.",
        tags: ["Ubytovanie", "WordPress", "Získavanie dopytov"],
        image: "/img/weboptim-penzion_1600-min.jpg",
        statValue: "✓",
        statLabel: "Pripravené na dopyty",
        featured: false,
      
        heroImage: "/img/weboptim-penzion_1600-min.jpg",
      
        overview:
          "Penzión Sněžná je rodinný ubytovací web navrhnutý tak, aby prehľadne prezentoval izby, lokalitu a možnosti v okolí a zároveň návštevníkov prirodzene viedol k priamemu dopytu. Web kombinuje informatívny obsah s konverznými prvkami, ako sú kontaktné formuláre, popupy a jasné výzvy k akcii.",
      
        challenge:
          "Hlavnou výzvou bolo premeniť statický ubytovací web na konverzne orientovaný zážitok. Návštevníci potrebovali rýchlo pochopiť dostupnosť, polohu a výhody ubytovania, zatiaľ čo majiteľ potreboval jednoduchý spôsob prijímania dopytov bez zložitého rezervačného systému.",
      
        solution:
          "Vytvorili sme WordPress web s čistou obsahovou štruktúrou, optimalizovanými formulármi a kontextovými popupmi, ktoré reagujú na zámer používateľa. Dopytové toky sú strategicky umiestnené naprieč webom tak, aby zachytili záujem v správnom momente, pričom celkový zážitok zostáva jednoduchý a nerušivý.",
      
        services: [
          { icon: Code, label: "WordPress vývoj" },
          { icon: Palette, label: "UI/UX & obsahová architektúra" },
          { icon: Globe, label: "Technické & lokálne SEO" },
          { icon: Megaphone, label: "Konverzná stratégia (formuláre & popupy)" },
        ],
      
        technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
      
        results: [
          { metric: "↑", label: "Lokálna viditeľnosť", description: "Zlepšené pozície pre lokálne vyhľadávania ubytovania" },
          { metric: "✓", label: "Priame dopyty", description: "Viac leadov bez poplatkov za rezervačné portály" },
          { metric: "↓", label: "Miera odchodov", description: "Prehľadná štruktúra a rýchle načítanie zvýšili angažovanosť" },
          { metric: "✓", label: "SEO škálovateľnosť", description: "Obsah a štruktúra pripravené na sezónne rozšírenia" },
        ],
      
        testimonial: {
          quote:
            "Web je prehľadný, jednoducho sa používa a prináša nám priame dopyty bez zbytočnej zložitosti. Všetko dôležité sa dá ľahko upravovať a spoľahlivo funguje.",
          author: "Penzión Sněžná",
          role: "Majiteľ",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Štruktúra stránok orientovaná na lokálne SEO pre ubytovanie",
          "Optimalizované nadpisy, interné prelinkovanie a obsahová hierarchia",
          "Dopytové formuláre vložené na kľúčových stránkach",
          "Kontextové popupy podporujúce sezónne ponuky",
          "Responzívny dizajn s mobile-first prístupom",
          "Rýchle načítanie stránok s optimalizovanými médiami",
          "Jednoduchá správa obsahu pre netechnických používateľov",
          "Pripravená štruktúra pre budúce rezervačné integrácie",
        ],
      },
      CZ: {
        slug: "penzion-snezna-website",
        title: "Penzion Sněžná",
        subtitle: "Webová prezentace ubytování & konverzní procesy",
        category: "Ubytování",
        client: "Penzion Sněžná",
        duration: "2–3 týdny",
        year: "2023",
        team: "1–2 osoby",
        projectUrl: "https://www.penzionsnezna.cz/",
      
        description:
          "Webová prezentace ubytování zaměřená na přehlednou prezentaci, sezónní nabídky a získávání poptávek prostřednictvím formulářů, popupů a výzev k akci.",
        tags: ["Ubytování", "WordPress", "Získávání poptávek"],
        image: "/img/weboptim-penzion_1600-min.jpg",
        statValue: "✓",
        statLabel: "Připraveno na poptávky",
        featured: false,
      
        heroImage: "/img/weboptim-penzion_1600-min.jpg",
      
        overview:
          "Penzion Sněžná je rodinný ubytovací web navržený tak, aby přehledně prezentoval pokoje, lokalitu a aktivity v okolí a zároveň návštěvníky přirozeně vedl k přímým poptávkám. Web kombinuje informační obsah s konverzně orientovanými prvky, jako jsou kontaktní formuláře, popupy a jasné výzvy k akci.",
      
        challenge:
          "Hlavní výzvou bylo proměnit statický ubytovací web v konverzně orientovaný zážitek. Návštěvníci potřebovali rychle pochopit dostupnost, polohu a výhody ubytování, zatímco majitel potřeboval jednoduchý způsob přijímání poptávek bez složitého rezervačního systému.",
      
        solution:
          "Vytvořili jsme WordPress web s čistou obsahovou strukturou, optimalizovanými formuláři a kontextovými popupy, které reagují na záměr uživatele. Poptávkové toky jsou strategicky umístěny napříč webem tak, aby zachytily zájem ve správný moment, přičemž celý zážitek zůstává jednoduchý a nerušivý.",
      
        services: [
          { icon: Code, label: "WordPress vývoj" },
          { icon: Palette, label: "UI/UX & obsahová architektura" },
          { icon: Globe, label: "Technické & lokální SEO" },
          { icon: Megaphone, label: "Konverzní strategie (formuláře & popupy)" },
        ],
      
        technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
      
        results: [
          { metric: "↑", label: "Lokální viditelnost", description: "Zlepšené pozice pro lokální vyhledávání ubytování" },
          { metric: "✓", label: "Přímé poptávky", description: "Více leadů bez poplatků rezervačním portálům" },
          { metric: "↓", label: "Míra okamžitého opuštění", description: "Přehledná struktura a rychlé načítání zlepšily zapojení" },
          { metric: "✓", label: "SEO škálovatelnost", description: "Obsah a struktura připravené na sezónní rozšiřování" },
        ],
      
        testimonial: {
          quote:
            "Web je přehledný, snadno se používá a přináší nám přímé poptávky bez zbytečné složitosti. Vše důležité lze jednoduše upravovat a spolehlivě funguje.",
          author: "Penzion Sněžná",
          role: "Majitel",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Struktura stránek orientovaná na lokální SEO pro ubytování",
          "Optimalizované nadpisy, interní prolinkování a obsahová hierarchie",
          "Poptávkové formuláře vložené na klíčových stránkách",
          "Kontextové popupy podporující sezónní nabídky",
          "Responzivní design s mobile-first přístupem",
          "Rychlé načítání stránek s optimalizovanými médii",
          "Snadná správa obsahu pro netechnické uživatele",
          "Připravená struktura pro budoucí integrace rezervačních systémů",
        ],
      },
    },
  },

  "kimbau-construction": {
    translations: {
      EN: {
        slug: "kimbau-construction",
        title: "Kimbau",
        subtitle: "Building & Renovation Services",
        category: "Construction",
        client: "Kimbau, s.r.o.",
        duration: "2-4 weeks",
        year: "2024",
        team: "2-4 People",
        projectUrl: "https://kimbau.cz",

        description:
          "Comprehensive construction and renovation services including full interior rebuilds, facades and energy-efficient upgrades for residential and commercial buildings.",
        tags: ["Construction", "Renovations", "Project Management"],
        image: "/img/weboptim-kimbau-mockup.jpg",
        statValue: "30+ yrs",
        statLabel: "Experience",
        featured: true,

        heroImage: "/img/weboptim-kimbau-mockup.jpg",

        overview:
          "Kimbau is a well-established construction firm operating since 1994, delivering high-quality reconstruction and construction services across Prague and surrounding regions. Their focus is on tailored solutions: from full apartment and family-home renovations to façade insulation and turnkey building projects.",

        challenge:
          "Clients faced fragmented contractors with inconsistent timelines, unclear cost structures and poorly integrated project communication. Kimbau needed a digital presence that clearly communicates their service scope, showcases completed work, and simplifies client outreach for new inquiries and consultations.",

        solution:
          "We designed a modern, yet professional website that highlights Kimbau’s decades of experience, service offerings, and project outcomes. The site structure includes dedicated sections for renovations, new builds, façades and thermal insulation, paired with an intuitive inquiry form and clear project stages. This helps clients understand the process from initial consultation through final delivery.",

        services: [
          { icon: Palette, label: "Brand & UI Design" },
          { icon: Globe, label: "Website Development" },
          { icon: Megaphone, label: "Copywriting & SEO" },
          { icon: Code, label: "Custom Visual Portfolio" },
        ],

        technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "Figma"],

        results: [
          { metric: "↑ 45%", label: "Lead Form Submissions", description: "Increase in new client inquiries via website contact forms" },
          { metric: "↓ 30%", label: "Bounce Rate", description: "Improvement in engagement through better navigation and messaging" },
          { metric: "↑ 20%", label: "Search Visibility", description: "Growth in organic impressions for targeted renovation keywords" },
          { metric: "4.8★", label: "Client Reviews", description: "Average positive rating across reference and social listings" },
        ],

        testimonial: {
          quote:
            "The new website finally reflects what we deliver in real life — clarity, professionalism and trust. Clients can easily find us and understand our services before reaching out.",
          author: "Ing. Bohumil Nesvačil",
          role: "Managing Director, Kimbau",
          avatar: "https://images.unsplash.com/photo-1506794778202-47a8e62ef2e4?w=100&h=100&fit=crop",
        },

        gallery: [],
        features: [
          "Clear service categories: Renovation, New Build, Façade Insulation, Energy Upgrades",
          "Responsive showcase of past projects and client testimonials",
          "SEO-optimized structure to rank for local construction queries",
          "Easy contact and quote request forms",
          "Mobile-first design for on-site contractor usage",
          "Clean portfolio visuals to communicate craftsmanship",
          "Structured content for renovation steps and deliverables",
          "Strong trust elements: experience since 1994, references, credibility blocks",
        ],
      },
      SK: {
        slug: "kimbau-construction",
        title: "Kimbau",
        subtitle: "Stavebné & rekonštrukčné služby",
        category: "Stavebníctvo",
        client: "Kimbau, s.r.o.",
        duration: "2–4 týždne",
        year: "2024",
        team: "2–4 osoby",
        projectUrl: "https://kimbau.cz",
      
        description:
          "Komplexné stavebné a rekonštrukčné služby vrátane kompletných rekonštrukcií interiérov, fasád a energeticky úsporných riešení pre rezidenčné aj komerčné objekty.",
        tags: ["Stavebníctvo", "Rekonštrukcie", "Projektový manažment"],
        image: "/img/weboptim-kimbau-mockup.jpg",
        statValue: "30+ r.",
        statLabel: "Skúseností",
        featured: true,
      
        heroImage: "/img/weboptim-kimbau-mockup.jpg",
      
        overview:
          "Kimbau je etablovaná stavebná spoločnosť pôsobiaca na trhu od roku 1994, poskytujúca kvalitné rekonštrukčné a stavebné služby v Prahe a okolí. Zameriava sa na riešenia na mieru — od kompletných rekonštrukcií bytov a rodinných domov až po zatepľovanie fasád a stavebné projekty na kľúč.",
      
        challenge:
          "Klienti sa často stretávali s roztrieštenými dodávateľmi, nejednotnými termínmi, neprehľadnými nákladmi a slabou komunikáciou počas realizácie projektu. Kimbau potrebovalo digitálnu prezentáciu, ktorá jasne komunikuje rozsah služieb, prezentuje realizované projekty a zjednodušuje kontakt pre nové dopyty a konzultácie.",
      
        solution:
          "Navrhli sme modernú, no zároveň profesionálnu webovú stránku, ktorá zvýrazňuje desaťročia skúseností spoločnosti Kimbau, ponuku služieb a výsledky projektov. Štruktúra webu obsahuje samostatné sekcie pre rekonštrukcie, novostavby, fasády a zatepľovanie, doplnené o prehľadný kontaktný formulár a jasne definované fázy projektu. Vďaka tomu klienti ľahko pochopia celý proces od úvodnej konzultácie až po finálne odovzdanie.",
      
        services: [
          { icon: Palette, label: "Branding & UI dizajn" },
          { icon: Globe, label: "Vývoj webovej stránky" },
          { icon: Megaphone, label: "Copywriting & SEO" },
          { icon: Code, label: "Vlastné vizuálne portfólio" },
        ],
      
        technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "Figma"],
      
        results: [
          { metric: "↑ 45 %", label: "Dopyty cez formuláre", description: "Nárast počtu nových dopytov cez webové kontaktné formuláre" },
          { metric: "↓ 30 %", label: "Miera odchodov", description: "Lepšia angažovanosť vďaka prehľadnej navigácii a komunikácii" },
          { metric: "↑ 20 %", label: "Viditeľnosť vo vyhľadávaní", description: "Rast organických zobrazení pre cielené rekonštrukčné kľúčové slová" },
          { metric: "4.8★", label: "Hodnotenia klientov", description: "Priemerné pozitívne hodnotenie naprieč referenciami a profilmi" },
        ],
      
        testimonial: {
          quote:
            "Nová webová stránka konečne vystihuje to, čo dodávame aj v realite — prehľadnosť, profesionalitu a dôveru. Klienti nás ľahko nájdu a ešte pred kontaktom pochopia naše služby.",
          author: "Ing. Bohumil Nesvačil",
          role: "Konateľ, Kimbau",
          avatar: "https://images.unsplash.com/photo-1506794778202-47a8e62ef2e4?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Jasné kategórie služieb: rekonštrukcie, novostavby, zatepľovanie fasád, energetické úpravy",
          "Responzívna prezentácia realizovaných projektov a referencií",
          "SEO optimalizovaná štruktúra pre lokálne stavebné vyhľadávania",
          "Jednoduché kontaktné a dopytové formuláre",
          "Mobile-first dizajn vhodný aj pre použitie priamo na stavbe",
          "Čisté portfóliové vizuály zdôrazňujúce remeselnú kvalitu",
          "Štruktúrovaný obsah vysvetľujúci jednotlivé kroky rekonštrukcie",
          "Silné prvky dôvery: pôsobenie od roku 1994, referencie, dôveryhodné bloky",
        ],
      },
      CZ: {
        slug: "kimbau-construction",
        title: "Kimbau",
        subtitle: "Stavební & rekonstrukční služby",
        category: "Stavebnictví",
        client: "Kimbau, s.r.o.",
        duration: "2–4 týdny",
        year: "2024",
        team: "2–4 osoby",
        projectUrl: "https://kimbau.cz",
      
        description:
          "Komplexní stavební a rekonstrukční služby včetně kompletních rekonstrukcí interiérů, fasád a energeticky úsporných řešení pro rezidenční i komerční objekty.",
        tags: ["Stavebnictví", "Rekonstrukce", "Projektový management"],
        image: "/img/weboptim-kimbau-mockup.jpg",
        statValue: "30+ let",
        statLabel: "Zkušeností",
        featured: true,
      
        heroImage: "/img/weboptim-kimbau-mockup.jpg",
      
        overview:
          "Kimbau je zavedená stavební společnost působící na trhu od roku 1994, která poskytuje kvalitní rekonstrukční a stavební služby v Praze a okolí. Zaměřuje se na řešení na míru — od kompletních rekonstrukcí bytů a rodinných domů až po zateplování fasád a stavební projekty na klíč.",
      
        challenge:
          "Klienti se často setkávali s roztříštěnými dodavateli, nejednotnými termíny, nejasnou cenovou strukturou a slabou komunikací v průběhu projektu. Kimbau potřebovalo digitální prezentaci, která jasně komunikuje rozsah služeb, ukazuje realizované projekty a zjednodušuje kontakt pro nové poptávky a konzultace.",
      
        solution:
          "Navrhli jsme moderní, ale zároveň profesionální webovou stránku, která zdůrazňuje desítky let zkušeností společnosti Kimbau, nabídku služeb a výsledky projektů. Struktura webu obsahuje samostatné sekce pro rekonstrukce, novostavby, fasády a zateplení, doplněné o přehledný poptávkový formulář a jasně definované fáze projektu. Díky tomu klienti snadno pochopí celý proces od úvodní konzultace až po finální předání.",
      
        services: [
          { icon: Palette, label: "Branding & UI design" },
          { icon: Globe, label: "Vývoj webových stránek" },
          { icon: Megaphone, label: "Copywriting & SEO" },
          { icon: Code, label: "Vlastní vizuální portfolio" },
        ],
      
        technologies: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "Figma"],
      
        results: [
          { metric: "↑ 45 %", label: "Poptávky z formulářů", description: "Nárůst počtu nových poptávek přes webové kontaktní formuláře" },
          { metric: "↓ 30 %", label: "Míra okamžitého opuštění", description: "Zlepšení zapojení díky lepší navigaci a komunikaci" },
          { metric: "↑ 20 %", label: "Viditelnost ve vyhledávání", description: "Růst organických zobrazení pro cílená rekonstrukční klíčová slova" },
          { metric: "4.8★", label: "Hodnocení klientů", description: "Průměrné pozitivní hodnocení napříč referencemi a profily" },
        ],
      
        testimonial: {
          quote:
            "Nový web konečně odráží to, co dodáváme i v praxi — přehlednost, profesionalitu a důvěru. Klienti nás snadno najdou a ještě před kontaktováním pochopí naše služby.",
          author: "Ing. Bohumil Nesvačil",
          role: "Jednatel, Kimbau",
          avatar: "https://images.unsplash.com/photo-1506794778202-47a8e62ef2e4?w=100&h=100&fit=crop",
        },
      
        gallery: [],
        features: [
          "Jasné kategorie služeb: rekonstrukce, novostavby, zateplení fasád, energetické úpravy",
          "Responzivní prezentace realizovaných projektů a referencí",
          "SEO optimalizovaná struktura pro lokální stavební vyhledávání",
          "Snadné kontaktní a poptávkové formuláře",
          "Mobile-first design vhodný i pro použití přímo na stavbě",
          "Čisté portfoliové vizuály zdůrazňující kvalitu řemesla",
          "Strukturovaný obsah vysvětlující jednotlivé kroky rekonstrukce",
          "Silné prvky důvěry: působení od roku 1994, reference, důvěryhodné bloky",
        ],
      },
    },
  },
  "uzdravtelo-nutrition-coaching-platform": {
    translations: {
      EN: {
        slug: "uzdravtelo-nutrition-coaching-platform",
        title: "UzdravTelo",
        subtitle: "Nutrition Consulting & Life Coaching Platform",
        category: "Health & Coaching",
        client: "UzdravTelo",
        duration: "2-4 weeks",
        year: "2023",
        team: "1–3 People",

        description:
          "Health and coaching platform combining nutrition consulting, diagnostics, courses, payments, and digital vouchers.",
        tags: ["Nutrition", "Life Coaching", "WordPress", "Stripe"],
        image: "/img/weboptim-uzdravtelo_1600-min.jpg",
        statValue: "5.0★",
        statLabel: "Google Reviews",
        featured: true,

        heroImage: "/img/weboptim-uzdravtelo_1600-min.jpg",

        overview:
          "UzdravTelo is a personal health and coaching platform led by Ing. Romana Nemcová, focused on nutrition consulting, lifestyle change, and long-term results. The website presents a structured approach built on four core pillars — nutrition, movement, regeneration, and mental wellbeing — supported by diagnostics, education, and paid programs.",

        challenge:
          "The challenge was to communicate a complex, long-term health approach in a clear and human way while also supporting real business needs: paid consultations, courses, and gift vouchers. The platform needed to build trust, showcase expertise, and automate payments and digital delivery without adding friction for clients.",

        solution:
          "We designed and developed a WordPress platform that combines content, education, and monetization into one system. Clients can book consultations, purchase courses, and buy digital vouchers through Fluent Forms with Stripe payments. Automated flows handle confirmations, voucher delivery, and course access, while the structure clearly explains the four-pillar methodology and the step-by-step process clients go through.",

        services: [
          { icon: Palette, label: "UI/UX & Content Structure" },
          { icon: Code, label: "WordPress Development" },
          { icon: Globe, label: "SK / CZ Localization" },
          { icon: Megaphone, label: "Payments & Automation" },
        ],

        technologies: ["WordPress", "PHP", "Stripe", "FluentForms", "JavaScript", "HTML5", "CSS3", "PDF Generation"],

        results: [
          { metric: "5.0★", label: "Client Trust", description: "Strong Google reviews reinforcing credibility and expertise" },
          { metric: "✓", label: "Online Payments", description: "Courses, consultations, and vouchers sold online" },
          { metric: "PDF", label: "Digital Vouchers", description: "Instant voucher generation and email delivery after payment" },
          { metric: "↓", label: "Manual Work", description: "Automated flows reduced admin overhead significantly" },
        ],

        testimonial: {
          quote:
            "The website finally reflects my approach to health and coaching. Clients understand the process, trust the system, and can easily book, pay, or purchase vouchers online.",
          author: "Ing. Romana Nemcová",
          role: "Nutrition Consultant & Life Coach",
          avatar: "/img/romana_nemcova_portret-1.jpeg",
        },

        gallery: [],
        features: [
          "Clear presentation of nutrition consulting and life coaching services",
          "Structured explanation of the 4 health pillars: nutrition, movement, regeneration, mental wellbeing",
          "Paid courses and programs handled via Fluent Forms",
          "Stripe integration for secure online payments",
          "Custom digital voucher system with PDF generation",
          "Seasonal voucher variants and preset/custom values",
          "Automated email confirmations and digital delivery",
          "Google reviews integration as trust and social proof",
          "Scalable structure for future programs and educational content",
        ],
      },
      SK: {
        slug: "uzdravtelo-nutrition-coaching-platform",
        title: "UzdravTelo",
        subtitle: "Platforma výživového poradenstva & life coachingu",
        category: "Zdravie & koučing",
        client: "UzdravTelo",
        duration: "2-4 týždne",
        year: "2023",
        team: "1–3 osoby",
      
        description:
          "Zdravotná a koučingová platforma kombinujúca výživové poradenstvo, diagnostiku, kurzy, platby a digitálne poukážky.",
        tags: ["Výživa", "Life koučing", "WordPress", "Stripe"],
        image: "/img/weboptim-uzdravtelo_1600-min.jpg",
        statValue: "5.0★",
        statLabel: "Google hodnotenia",
        featured: true,
      
        heroImage: "/img/weboptim-uzdravtelo_1600-min.jpg",
      
        overview:
          "UzdravTelo je osobná zdravotná a koučingová platforma vedená Ing. Romanou Nemcovou, zameraná na výživové poradenstvo, zmenu životného štýlu a dlhodobé výsledky. Web prezentuje systematický prístup postavený na štyroch hlavných pilieroch — výživa, pohyb, regenerácia a duševná pohoda — podporený diagnostikou, vzdelávaním a platenými programami.",
      
        challenge:
          "Výzvou bolo zrozumiteľne a ľudsky komunikovať komplexný, dlhodobý prístup k zdraviu a zároveň podporiť reálne biznisové potreby: platené konzultácie, kurzy a darčekové poukážky. Platforma musela budovať dôveru, prezentovať odbornosť a automatizovať platby a digitálne doručenie bez zbytočných prekážok pre klientov.",
      
        solution:
          "Navrhli sme a vyvinuli WordPress platformu, ktorá spája obsah, vzdelávanie a monetizáciu do jedného funkčného systému. Klienti si môžu rezervovať konzultácie, zakúpiť kurzy a kúpiť digitálne poukážky prostredníctvom Fluent Forms s platbami cez Stripe. Automatizované procesy riešia potvrdenia, doručenie poukážok a prístup ku kurzom, pričom štruktúra webu jasne vysvetľuje metodiku štyroch pilierov aj jednotlivé kroky, ktorými klient prechádza.",
      
        services: [
          { icon: Palette, label: "UI/UX & obsahová štruktúra" },
          { icon: Code, label: "WordPress vývoj" },
          { icon: Globe, label: "SK / CZ lokalizácia" },
          { icon: Megaphone, label: "Platby & automatizácia" },
        ],
      
        technologies: ["WordPress", "PHP", "Stripe", "FluentForms", "JavaScript", "HTML5", "CSS3", "Generovanie PDF"],
      
        results: [
          { metric: "5.0★", label: "Dôvera klientov", description: "Silné Google hodnotenia podporujúce dôveryhodnosť a odbornosť" },
          { metric: "✓", label: "Online platby", description: "Predaj kurzov, konzultácií a poukážok online" },
          { metric: "PDF", label: "Digitálne poukážky", description: "Okamžité generovanie poukážok a doručenie e-mailom po zaplatení" },
          { metric: "↓", label: "Manuálna práca", description: "Automatizované procesy výrazne znížili administratívnu záťaž" },
        ],
      
        testimonial: {
          quote:
            "Webová stránka konečne odráža môj prístup k zdraviu a koučingu. Klienti rozumejú procesu, dôverujú systému a môžu si jednoducho rezervovať termín, zaplatiť alebo zakúpiť poukážky online.",
          author: "Ing. Romana Nemcová",
          role: "Výživová poradkyňa & life koučka",
          avatar: "/img/romana_nemcova_portret-1.jpeg",
        },
      
        gallery: [],
        features: [
          "Prehľadná prezentácia výživového poradenstva a life coachingu",
          "Struktúrované vysvetlenie 4 pilierov zdravia: výživa, pohyb, regenerácia, duševná pohoda",
          "Platené kurzy a programy spravované cez Fluent Forms",
          "Integrácia Stripe pre bezpečné online platby",
          "Vlastný systém digitálnych poukážok s generovaním PDF",
          "Sezónne varianty poukážok a prednastavené alebo vlastné hodnoty",
          "Automatizované e-mailové potvrdenia a digitálne doručenie",
          "Integrácia Google hodnotení ako sociálneho dôkazu",
          "Škálovateľná štruktúra pre budúce programy a edukačný obsah",
        ],
      },
      CZ: {
        slug: "uzdravtelo-nutrition-coaching-platform",
        title: "UzdravTelo",
        subtitle: "Platforma výživového poradenství & life coachingu",
        category: "Zdraví & koučink",
        client: "UzdravTelo",
        duration: "2-4 týdny",
        year: "2023",
        team: "1–3 osoby",
      
        description:
          "Zdravotní a koučinková platforma kombinující výživové poradenství, diagnostiku, kurzy, platby a digitální poukazy.",
        tags: ["Výživa", "Life koučink", "WordPress", "Stripe"],
        image: "/img/weboptim-uzdravtelo_1600-min.jpg",
        statValue: "5.0★",
        statLabel: "Google hodnocení",
        featured: true,
      
        heroImage: "/img/weboptim-uzdravtelo_1600-min.jpg",
      
        overview:
          "UzdravTelo je osobní zdravotní a koučinková platforma vedená Ing. Romanou Nemcovou, zaměřená na výživové poradenství, změnu životního stylu a dlouhodobé výsledky. Web prezentuje systematický přístup postavený na čtyřech hlavních pilířích — výživa, pohyb, regenerace a duševní pohoda — podpořený diagnostikou, vzděláváním a placenými programy.",
      
        challenge:
          "Výzvou bylo srozumitelně a lidsky komunikovat komplexní, dlouhodobý přístup ke zdraví a zároveň podpořit reálné obchodní potřeby: placené konzultace, kurzy a dárkové poukazy. Platforma musela budovat důvěru, prezentovat odbornost a automatizovat platby a digitální doručení bez zbytečného tření pro klienty.",
      
        solution:
          "Navrhli jsme a vyvinuli WordPress platformu, která spojuje obsah, vzdělávání a monetizaci do jednoho funkčního systému. Klienti si mohou rezervovat konzultace, zakoupit kurzy a koupit digitální poukazy prostřednictvím Fluent Forms s platbami přes Stripe. Automatizované procesy řeší potvrzení, doručení poukazů a přístup ke kurzům, přičemž struktura webu jasně vysvětluje metodiku čtyř pilířů i jednotlivé kroky, kterými klient prochází.",
      
        services: [
          { icon: Palette, label: "UI/UX & obsahová struktura" },
          { icon: Code, label: "WordPress vývoj" },
          { icon: Globe, label: "SK / CZ lokalizace" },
          { icon: Megaphone, label: "Platby & automatizace" },
        ],
      
        technologies: ["WordPress", "PHP", "Stripe", "FluentForms", "JavaScript", "HTML5", "CSS3", "Generování PDF"],
      
        results: [
          { metric: "5.0★", label: "Důvěra klientů", description: "Silná Google hodnocení podporující důvěryhodnost a odbornost" },
          { metric: "✓", label: "Online platby", description: "Prodej kurzů, konzultací a poukazů online" },
          { metric: "PDF", label: "Digitální poukazy", description: "Okamžité generování poukazů a doručení e-mailem po zaplacení" },
          { metric: "↓", label: "Manuální práce", description: "Automatizované procesy výrazně snížily administrativní zátěž" },
        ],
      
        testimonial: {
          quote:
            "Webové stránky konečně odrážejí můj přístup ke zdraví a koučinku. Klienti rozumí procesu, důvěřují systému a mohou si snadno rezervovat termín, zaplatit nebo zakoupit poukazy online.",
          author: "Ing. Romana Nemcová",
          role: "Výživová poradkyně & life koučka",
          avatar: "/img/romana_nemcova_portret-1.jpeg",
        },
      
        gallery: [],
        features: [
          "Přehledná prezentace výživového poradenství a life coachingu",
          "Strukturované vysvětlení 4 pilířů zdraví: výživa, pohyb, regenerace, duševní pohoda",
          "Placené kurzy a programy spravované přes Fluent Forms",
          "Integrace Stripe pro bezpečné online platby",
          "Vlastní systém digitálních poukazů s generováním PDF",
          "Sezónní varianty poukazů a přednastavené nebo vlastní hodnoty",
          "Automatizované e-mailové potvrzení a digitální doručení",
          "Integrace Google hodnocení jako sociálního důkazu",
          "Škálovatelná struktura pro budoucí programy a edukační obsah",
        ],
      },
    },
  },
};

/**
 * Blog-like helper: get case study by slug for a language
 * - najprv skúsi nájsť slug v danom jazyku
 * - ak nemá preklad, spadne na EN
 */
export const getCaseStudy = (slug: string, language: Language = "EN") => {
  const entries = Object.values(caseStudiesData);

  let found = entries.find((cs) => cs.translations[language]?.slug === slug);
  if (!found) found = entries.find((cs) => cs.translations.EN.slug === slug);

  if (!found) return undefined;

  return found.translations[language] ?? found.translations.EN;
};

/**
 * Helper: list pre Work/Portfolio – jazykovo (cards)
 */
export const getCaseStudiesList = (language: Language = "EN") => {
  return Object.values(caseStudiesData).map((cs) => {
    const t = cs.translations[language] ?? cs.translations.EN;

    return {
      slug: t.slug,
      title: t.title,
      subtitle: t.subtitle,
      category: t.category,
      description: t.description,
      tags: t.tags,
      image: t.image,
      statValue: t.statValue,
      statLabel: t.statLabel,
      featured: t.featured,
      client: t.client,
      year: t.year,
    };
  });
};
