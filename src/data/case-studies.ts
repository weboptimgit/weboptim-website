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
        image: "https://www.europeum.org/wp-content/uploads/2021/10/europeum-logo.png",
        statValue: "1000+",
        statLabel: "Content Items",
        featured: true,

        heroImage: "https://www.europeum.org/wp-content/uploads/2021/10/europeum-logo.png",

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
        projectUrl: "https://www.duo-story.cz",

        description:
          "Event booking system with capacity control (men/women), waitlist logic, automated emails, CSV export, and smart event filtering.",
        tags: ["WordPress", "FluentForms", "ACF", "Automation"],
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
        statValue: "100%",
        statLabel: "Automated flow",
        featured: true,

        heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",

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
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
        statValue: "✓",
        statLabel: "Inquiry Ready",
        featured: false,

        heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=800&fit=crop",

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
        image: "https://images.unsplash.com/photo-1581091870621-cbc95fc2e758?w=800&h=600&fit=crop",
        statValue: "30+ yrs",
        statLabel: "Experience",
        featured: true,

        heroImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop",

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
        duration: "Ongoing",
        year: "2024–2025",
        team: "1–3 People",

        description:
          "Health and coaching platform combining nutrition consulting, diagnostics, courses, payments, and digital vouchers.",
        tags: ["Nutrition", "Life Coaching", "WordPress", "Stripe"],
        image: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=800&h=600&fit=crop",
        statValue: "5.0★",
        statLabel: "Google Reviews",
        featured: true,

        heroImage: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1200&h=800&fit=crop",

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
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
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
    },
  },

  "yogatree-yoga-massage": {
    translations: {
      EN: {
        slug: "yogatree-yoga-massage",
        title: "YogaTree",
        subtitle: "Yoga & Massage Services",
        category: "Wellness",
        client: "YogaTree.cz",
        duration: "2–3 Weeks",
        year: "2024",
        team: "1–2 People",
        projectUrl: "https://yogatree.cz",

        description:
          "Responsive informational site promoting Yoga and Massage services focused on balance, relaxation, and body–mind harmony.",
        tags: ["Yoga", "Massage", "Responsive Web"],
        image: "https://esttt3x94jo.exactdn.com/wp-content/uploads/2024/06/DSC_5422.jpg?strip=all",
        statValue: "5.0★",
        statLabel: "Client Reviews",
        featured: false,

        heroImage: "https://esttt3x94jo.exactdn.com/wp-content/uploads/2024/06/DSC_5422.jpg?strip=all",

        overview:
          "YogaTree.cz is a calm and inviting wellness site for yoga classes and massage services based in Prague-Braník. The goal of the site was to provide clear information about offerings, build trust through testimonials, and streamline contact and reservations for clients seeking body and mind relaxation and balance.",

        challenge:
          "The original need was to present YogaTree’s services — yoga practice, meditation, and massage — in a simple, friendly format that resonates with both newcomers and returning clients. It was important to communicate professionalism, experience in bodywork and mindfulness, and make it easy for visitors to get in touch.",

        solution:
          "We designed a clean, tranquil site structure highlighting core services (Yoga, Masáže), clear contact info, and strong testimonials. The layout emphasizes benefits like improved flexibility, deeper relaxation, and balanced energy, and guides users toward reservation or contact easily.",

        services: [
          { icon: Palette, label: "UI/UX Layout Design" },
          { icon: Globe, label: "Responsive Website Build" },
          { icon: Megaphone, label: "Copy & Messaging" },
          { icon: Code, label: "Contact/Reservation Integration" },
        ],

        technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "Responsive Design"],

        results: [
          { metric: "↑ 3×", label: "Inquiry Rate", description: "More direct contact submissions via the website." },
          { metric: "5.0★", label: "Ratings", description: "Consistently high visitor reviews and testimonials." },
          { metric: "↓ 20%", label: "Bounce Rate", description: "Improved engagement due to clear layout and service info." },
          { metric: "↑ 25%", label: "Search Visibility", description: "Better discoverability for local yoga & massage queries." },
        ],

        testimonial: {
          quote:
            "YogaTree’s new website reflects exactly what I wanted — clarity, calm, and a welcoming presence online. Clients can easily see my services and contact me for sessions.",
          author: "Barbora Holoubková",
          role: "Founder & Instructor",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        },

        gallery: [],
        features: [
          "Clean landing structure for Yoga and Massage service descriptions",
          "Strong testimonials section to build trust",
          "Simple contact and reservation call-to-action",
          "Responsive layout for mobile & desktop",
          "SEO optimized content for local wellness keywords",
          "Highlighting benefits for body & mind harmony",
          "Easy navigation with service, about, blog, and contact",
          "Integration of clear contact details and inquiry form",
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
