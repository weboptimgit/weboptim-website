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
    // Work (archive)
    "work.badge": "Our Portfolio",
    "work.title.before": "Case",
    "work.title.highlight": "Studies",
    "work.subtitle": "Explore our latest projects and see how we help businesses transform their digital presence",
    "work.cta.title": "Ready to Start Your Project?",
    "work.cta.subtitle": "Let's discuss how we can help transform your digital presence and achieve your business goals.",
    "work.cta.button": "Get in Touch",

    // Case Study
    "caseStudy.backToProjects": "Back to Projects",
    "caseStudy.notFound.title": "Case Study Not Found",
    "caseStudy.notFound.backToProjects": "Back to Projects",
    "caseStudy.breadcrumb.projects": "Projects",
    "caseStudy.visitProject": "Visit Project",
    
    "caseStudy.meta.client": "Client",
    "caseStudy.meta.duration": "Duration",
    "caseStudy.meta.year": "Year",
    "caseStudy.meta.team": "Team",
    
    "caseStudy.techStack": "Tech Stack",
    "caseStudy.projectOverview": "Project Overview",
    "caseStudy.challenge": "The Challenge",
    "caseStudy.solution": "Our Solution",
    "caseStudy.servicesProvided": "Services Provided",
    
    "caseStudy.results.title": "The Results",
    "caseStudy.results.subtitle": "Measurable impact that drove real business growth",
    
    "caseStudy.keyFeatures": "Key Features Delivered",
    "caseStudy.projectGallery": "Project Gallery",
    
    "caseStudy.readyTitle": "Ready to Start Your Project?",
    "caseStudy.readySubtitle":
      "Let's create something amazing together. Get in touch to discuss how we can help transform your digital presence.",
    "caseStudy.readyCta": "Get in Touch",

    // Blog
    "common.home": "Home",
    "common.blog": "Blog",
    "common.services": "Services",
    "blogPost.notFound.title": "Post Not Found",
    "blogPost.notFound.subtitle": "The blog post you're looking for doesn't exist.",
    "blogPost.notFound.backToBlog": "Back to Blog",    
    "blogPost.backToBlog": "Back to Blog",  
    "blogPost.share.label": "Share this article:",
    "blogPost.share.button": "Share",    
    "blogPost.resources.title": "Sources",
    "blogPost.author.writtenBy": "Written by",
    "blogPost.author.bio": "Content Writer & Digital Marketing Specialist with expertise in web development trends and SEO strategies.",    
    "blogPost.exploreMore": "Explore More Articles",
    "blogPost.toc.title": "Table of contents",

    // Blog List Page
    "blog.title": "Our Blog",
    "blog.subtitle": "Insights, tips, and trends from the world of web development and digital marketing.",
    "blog.tagsLabel": "Tags:",
    "blog.clearTag": "Clear",
    "blog.clearFilters": "Clear Filters",
    "blog.noPostsFound": "No posts found for the selected filters.",
    "blog.readMore": "Read more",

    // Blog Category Archive
    "blogCategory.badge": "Category",
    "blogCategory.seoTitle": "Blog Category",
    "blogCategory.seoDescription": "Browse all articles in category",
    "blogCategory.subtitle": "{count} articles in this category",
    "blogCategory.readMore": "Read more",
    "blogCategory.notFound.title": "Category Not Found",
    "blogCategory.notFound.subtitle": "The category you're looking for doesn't exist.",

    // Blog Author Archive
    "blogAuthor.badge": "Author",
    "blogAuthor.seoTitle": "Blog Author",
    "blogAuthor.seoDescription": "Browse all articles by",
    "blogAuthor.subtitle": "{count} articles by this author",
    "blogAuthor.readMore": "Read more",
    "blogAuthor.notFound.title": "Author Not Found",
    "blogAuthor.notFound.subtitle": "The author you're looking for doesn't exist.",

    // CTA
    "ctaSection.title.before": "Ready to start your",
    "ctaSection.title.highlight": "project",
    "ctaSection.subtitle":
      "Let's collaborate and create something extraordinary together. Get in touch and tell us about your vision.",
    "ctaSection.primary": "Get In Touch",
    "ctaSection.secondary": "Our Services",
    "ctaSection.email.before": "Or email us directly at",
    "ctaSection.email.domain": "info@weboptim.eu",

    "testimonials.title.before": "What Our",
    "testimonials.title.highlight": "Clients Say",
    "testimonials.subtitle": "Don't just take our word for it. Here's what our clients have to say about working with us.",
    "testimonials.googleLink": "View more reviews on Google",
    "testimonials.1.name": "Martin Vokálek",
    "testimonials.1.role": "",
    "testimonials.1.quote": "The collaboration with Mr. Gáborík and his team on the new website of our institution worked great, we clarified everything, set it up, and the final price corresponded to the agreed one. After experience with the creation of various other websites, this is really not a given and I appreciate it very much.",
    "testimonials.2.name": "Jitka Jakimeczková",
    "testimonials.2.role": "",
    "testimonials.2.quote": "Working with Weboptim was one of the best experiences I've had. Great communication from the beginning, understanding of my vision, and willingness to fine-tune every detail exactly according to my ideas. Not only did they do everything quickly, but also with complete precision and a sense of aesthetics. Thank you very much for your patience, ideas, and for that.",
    "testimonials.3.name": "Anna Šidlovská",
    "testimonials.3.role": "",
    "testimonials.3.quote": "We are very satisfied with the cooperation. Thank you for the fast and professional approach. Also for your patience with female indecision :) We highly recommend. Anatte :)",
    // Blog section
    "blogSection.title.before": "Latest from Our",
    "blogSection.title.highlight": "Blog",
    "blogSection.subtitle": "Insights, tips, and industry news to help you stay ahead in the digital world.",
    "blogSection.viewAll": "View All Articles",

    // Trust section
    "trust.title.before": "They",
    "trust.title.highlight": "Trust Us",
    "trust.subtitle": "For years, we have been helping to meet the marketing goals of our clients in various industries.",
    "trust.cta": "I Want to Become Your Client",

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
    "hero.excellentReviews": "Excellent Reviews",

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

    // About section
    "about.badge": "About Us",
    "about.heading.before": "We're a team of",
    "about.heading.highlight": "innovators",
    "about.p1":
    "We are a specialist digital agency that helps brands grow with powerful web solutions, e-commerce and data-driven SEO strategies.",
    "about.p2":
    "From technical SEO to modern websites and e-commerce - we focus on what really increases visibility, performance and business results. No shortcuts, no average solutions.",
    "about.cta": "Learn more about us",

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
    // Work (archive)
    "work.badge": "Naše portfolio",
    "work.title.before": "Případové",
    "work.title.highlight": "studie",
    "work.subtitle": "Prozkoumejte naše nejnovější projekty a podívejte se, jak pomáháme firmám posunout jejich online prezentaci",
    "work.cta.title": "Jste připraveni začít svůj projekt?",
    "work.cta.subtitle": "Pojďme probrat, jak vám můžeme pomoci zlepšit online prezentaci a dosáhnout vašich obchodních cílů.",
    "work.cta.button": "Kontaktujte nás",

    // Case Study
    "caseStudy.backToProjects": "Zpět na projekty",
    "caseStudy.notFound.title": "Případová studie nebyla nalezena",
    "caseStudy.notFound.backToProjects": "Zpět na projekty",
    "caseStudy.breadcrumb.projects": "Projekty",
    "caseStudy.visitProject": "Navštívit projekt",
    
    "caseStudy.meta.client": "Klient",
    "caseStudy.meta.duration": "Doba trvání",
    "caseStudy.meta.year": "Rok",
    "caseStudy.meta.team": "Tým",
    
    "caseStudy.techStack": "Technologie",
    "caseStudy.projectOverview": "Přehled projektu",
    "caseStudy.challenge": "Výzva",
    "caseStudy.solution": "Naše řešení",
    "caseStudy.servicesProvided": "Poskytnuté služby",
    
    "caseStudy.results.title": "Výsledky",
    "caseStudy.results.subtitle": "Měřitelný dopad, který přinesl reálný růst",
    
    "caseStudy.keyFeatures": "Dodané klíčové funkce",
    "caseStudy.projectGallery": "Galerie projektu",
    
    "caseStudy.readyTitle": "Chcete začít svůj projekt?",
    "caseStudy.readySubtitle":
      "Pojďme společně vytvořit něco skvělého. Ozvěte se a probereme, jak zlepšíme vaši digitální prezentaci.",
    "caseStudy.readyCta": "Kontaktujte nás",

    // Blog
    "common.home": "Domů",
    "common.blog": "Blog",
    "common.services": "Služby",
    "blogPost.notFound.title": "Článek nebyl nalezen",
    "blogPost.notFound.subtitle": "Článek, který hledáte, neexistuje.",
    "blogPost.notFound.backToBlog": "Zpět na blog",    
    "blogPost.backToBlog": "Zpět na blog",    
    "blogPost.share.label": "Sdílet článek:",
    "blogPost.share.button": "Sdílet",    
    "blogPost.resources.title": "Zdroje",    
    "blogPost.author.writtenBy": "Autor",
    "blogPost.author.bio": "Copywriter a specialista na digitální marketing se zaměřením na webové trendy a SEO strategie.",    
    "blogPost.exploreMore": "Prozkoumat další články",
    "blogPost.toc.title": "Obsah článku",

    // Blog List Page
    "blog.title": "Náš blog",
    "blog.subtitle": "Postřehy, tipy a trendy ze světa tvorby webů a digitálního marketingu.",
    "blog.tagsLabel": "Štítky:",
    "blog.clearTag": "Zrušit",
    "blog.clearFilters": "Zrušit filtry",
    "blog.noPostsFound": "Pro vybrané filtry nebyly nalezeny žádné příspěvky.",
    "blog.readMore": "Číst více",

    // Blog Category Archive
    "blogCategory.badge": "Kategorie",
    "blogCategory.seoTitle": "Kategorie blogu",
    "blogCategory.seoDescription": "Procházejte všechny články v kategorii",
    "blogCategory.subtitle": "{count} článků v této kategorii",
    "blogCategory.readMore": "Číst více",
    "blogCategory.notFound.title": "Kategorie nenalezena",
    "blogCategory.notFound.subtitle": "Kategorie, kterou hledáte, neexistuje.",

    // Blog Author Archive
    "blogAuthor.badge": "Autor",
    "blogAuthor.seoTitle": "Autor blogu",
    "blogAuthor.seoDescription": "Procházejte všechny články od",
    "blogAuthor.subtitle": "{count} článků od tohoto autora",
    "blogAuthor.readMore": "Číst více",
    "blogAuthor.notFound.title": "Autor nenalezen",
    "blogAuthor.notFound.subtitle": "Autor, kterého hledáte, neexistuje.",

    // CTA
    "ctaSection.title.before": "Připraveni začít váš",
    "ctaSection.title.highlight": "projekt",
    "ctaSection.subtitle":
      "Pojďme spolupracovat a vytvořit něco výjimečného. Ozvěte se nám a řekněte nám o své vizi.",
    "ctaSection.primary": "Kontaktujte nás",
    "ctaSection.secondary": "Naše služby",
    "ctaSection.email.before": "Nebo nám napište přímo na",
    "ctaSection.email.domain": "info@weboptim.cz",

    "testimonials.title.before": "Co říkají",
    "testimonials.title.highlight": "klienti",
    "testimonials.subtitle": "Neberte to jen od nás. Podívejte se, co říkají naši klienti o spolupráci s námi.",
    "testimonials.googleLink": "Zobrazit další recenze na Google",
    "testimonials.1.name": "Martin Vokálek",
    "testimonials.1.role": "",
    "testimonials.1.quote": "Spolupráce s panem Gáboríkem a jeho týmem na novém webu naší instituce fungovala skvěle, vše jsme si vyjasnili, nastavili a finální cena odpovídala té dohodnuté. Po zkušenostech s tvorbou různých jiných webů toto opravdu není samozřejmost a moc si toho vážím.",
    "testimonials.2.name": "Jitka Jakimeczková",
    "testimonials.2.role": "",
    "testimonials.2.quote": 
      "Spolupráce s Weboptim byla jedna z nejlepších zkušeností, co jsem měla. Od začátku skvělá komunikace, pochopení mé vize a ochota doladit každý detail přesně podle mých představ. Nejenže všechno zvládli rychle, ale i s naprostou precizností a citem pro estetiku. Moc děkuju za trpělivost, nápady a za to, že jste dokázali převést mou představu do reality.",
    "testimonials.3.name": "Anna Šidlovská",
    "testimonials.3.role": "",
    "testimonials.3.quote": "Jsme velmi spokojeni se spoluprací. Děkujeme za rychlý a profesionální přístup. I za trpělivost s ženskou nerozhodností :) Vřele doporučujeme. Anatte :)",

    // Blog section
    "blogSection.title.before": "To nejnovější z našeho",
    "blogSection.title.highlight": "blogu",
    "blogSection.subtitle": "Tipy, poznatky a novinky z oboru, které vám pomohou držet krok v digitálním světě.",
    "blogSection.viewAll": "Zobrazit všechny články",

    // Trust section
    "trust.title.before": "Důvěřují nám",
    "trust.title.highlight": "klienti",
    "trust.subtitle": "Už roky pomáháme klientům z různých odvětví plnit jejich marketingové cíle.",
    "trust.cta": "Chci se stát vaším klientem",

    // Navbar
    "nav.services": "Služby",
    "nav.work": "Portfolio",
    "nav.about": "O nás",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Slovník",
    "nav.contact": "Kontakt",
    "nav.startProject": "Nezávazná konzultace",
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
    "hero.cta1": "Nezávazně nás kontaktovat",
    "hero.cta2": "Naše služby",
    "hero.happyClients": "spokojených klientů",
    "hero.excellentReviews": "Výborné hodnocení",

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

    // About section
    "about.badge": "O nás",
    "about.heading.before": "Jsme tým",
    "about.heading.highlight": "inovátorů",
    "about.p1": 
    "Jsme specializovaná digitální agentura, která pomáhá značkám růst díky výkonným webovým řešením, e-shopům a SEO strategiím postaveným na datech.", 
    "about.p2": 
    "Od technického SEO po moderní weby a e-shopy - soustředíme se na to, co reálně zvyšuje viditelnost, výkon a obchodní výsledky. Bez zkratek, bez průměrných řešení.", 
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
    // Work (archive)
    "work.badge": "Naše portfólio",
    "work.title.before": "Case",
    "work.title.highlight": "studies",
    "work.subtitle": "Pozrite si naše najnovšie projekty a zistite, ako pomáhame firmám zlepšiť ich online prezentáciu",
    "work.cta.title": "Pripravení začať váš projekt?",
    "work.cta.subtitle": "Poďme sa porozprávať, ako vám môžeme pomôcť zlepšiť online prezentáciu a dosiahnuť vaše biznis ciele.",
    "work.cta.button": "Kontaktujte nás",

    // Case Study
    "caseStudy.backToProjects": "Späť na projekty",
    "caseStudy.notFound.title": "Case study sa nenašla",
    "caseStudy.notFound.backToProjects": "Späť na projekty",
    "caseStudy.breadcrumb.projects": "Projekty",
    "caseStudy.visitProject": "Navštíviť projekt",
    
    "caseStudy.meta.client": "Klient",
    "caseStudy.meta.duration": "Trvanie",
    "caseStudy.meta.year": "Rok",
    "caseStudy.meta.team": "Tím",
    
    "caseStudy.techStack": "Technológie",
    "caseStudy.projectOverview": "Prehľad projektu",
    "caseStudy.challenge": "Výzva",
    "caseStudy.solution": "Naše riešenie",
    "caseStudy.servicesProvided": "Poskytnuté služby",
    
    "caseStudy.results.title": "Výsledky",
    "caseStudy.results.subtitle": "Merateľný dopad, ktorý priniesol reálny rast",
    
    "caseStudy.keyFeatures": "Dodané kľúčové funkcie",
    "caseStudy.projectGallery": "Galéria projektu",
    
    "caseStudy.readyTitle": "Pripravení začať váš projekt?",
    "caseStudy.readySubtitle":
      "Poďme spolu vytvoriť niečo skvelé. Ozvite sa a preberieme, ako zlepšíme vašu digitálnu prezentáciu.",
    "caseStudy.readyCta": "Kontaktujte nás",

    // Blog
    "common.home": "Domov",
    "common.blog": "Blog",
    "common.services": "Služby",
    "blogPost.notFound.title": "Článok sa nenašiel",
    "blogPost.notFound.subtitle": "Článok, ktorý hľadáte, neexistuje.",
    "blogPost.notFound.backToBlog": "Späť na blog",  
    "blogPost.backToBlog": "Späť na blog",  
    "blogPost.share.label": "Zdieľať článok:",
    "blogPost.share.button": "Zdieľať",    
    "blogPost.resources.title": "Zdroje",    
    "blogPost.author.writtenBy": "Autor",
    "blogPost.author.bio": "Copywriter a špecialista na digitálny marketing so zameraním na webové trendy a SEO stratégie.",    
    "blogPost.exploreMore": "Pozrieť ďalšie články",
    "blogPost.toc.title": "Obsah článku",

    // Blog List Page
    "blog.title": "Náš blog",
    "blog.subtitle": "Postrehy, tipy a trendy zo sveta tvorby webov a digitálneho marketingu.",
    "blog.tagsLabel": "Štítky:",
    "blog.clearTag": "Zrušiť",
    "blog.clearFilters": "Zrušiť filtre",
    "blog.noPostsFound": "Pre vybrané filtre sa nenašli žiadne príspevky.",
    "blog.readMore": "Čítať viac",

    // Blog Category Archive
    "blogCategory.badge": "Kategória",
    "blogCategory.seoTitle": "Kategória blogu",
    "blogCategory.seoDescription": "Prehliadajte všetky články v kategórii",
    "blogCategory.subtitle": "{count} článkov v tejto kategórii",
    "blogCategory.readMore": "Čítať viac",
    "blogCategory.notFound.title": "Kategória sa nenašla",
    "blogCategory.notFound.subtitle": "Kategória, ktorú hľadáte, neexistuje.",

    // Blog Author Archive
    "blogAuthor.badge": "Autor",
    "blogAuthor.seoTitle": "Autor blogu",
    "blogAuthor.seoDescription": "Prehliadajte všetky články od",
    "blogAuthor.subtitle": "{count} článkov od tohto autora",
    "blogAuthor.readMore": "Čítať viac",
    "blogAuthor.notFound.title": "Autor sa nenašiel",
    "blogAuthor.notFound.subtitle": "Autor, ktorého hľadáte, neexistuje.",

    // CTA
    "ctaSection.title.before": "Pripravení začať váš",
    "ctaSection.title.highlight": "projekt",
    "ctaSection.subtitle":
      "Poďme spolupracovať a vytvoriť niečo výnimočné. Ozvite sa nám a povedzte nám o svojej vízii.",
    "ctaSection.primary": "Kontaktujte nás",
    "ctaSection.secondary": "Naše služby",
    "ctaSection.email.before": "Alebo nám napíšte priamo na",
    "ctaSection.email.domain": "info@weboptim.sk",

    "testimonials.title.before": "Čo hovoria",
    "testimonials.title.highlight": "klienti",
    "testimonials.subtitle": "Neberte to len od nás. Pozrite sa, čo hovoria naši klienti o spolupráci s nami.",
    "testimonials.googleLink": "Zobraziť ďalšie recenzie na Google",
    "testimonials.1.name": "Martin Vokálek",
    "testimonials.1.role": "",
    "testimonials.1.quote": "Spolupráca s pánom Gáboríkom a jeho tímom na novom webe našej inštitúcie fungovala skvele, všetko sme si vyjasnili, nastavili a finálna cena zodpovedala tej dohodnutej. Po skúsenostiach s tvorbou rôznych iných webov toto naozaj nie je samozrejmosť a veľmi si to vážim.",
    "testimonials.2.role": "",
    "testimonials.2.quote": 
      "Spolupráca s Weboptim bola jedna z najlepších skúseností, čo som mala. Od začiatku skvelá komunikácia, pochopenie mojej vízie a ochota doladiť každý detail presne podľa mojich predstáv. Nielenže všetko zvládli rýchlo, ale aj s úplnou precíznosťou a citom pre estetiku. Veľmi ďakujem za trpezlivosť, nápady a za to.",
    "testimonials.3.role": "",
    "testimonials.3.quote": "Sme veľmi spokojní so spoluprácou. Ďakujeme za rýchly a profesionálny prístup. Aj za trpezlivosť so ženskou nerozhodnosťou :) Vrelo odporúčame. Anatte :)",
    // Blog section
    "blogSection.title.before": "To najnovšie z nášho",
    "blogSection.title.highlight": "blogu",
    "blogSection.subtitle": "Tipy, poznatky a novinky z odvetvia, ktoré vám pomôžu byť v digitálnom svete o krok vpred.",
    "blogSection.viewAll": "Zobraziť všetky články",

    // Trust section
    "trust.title.before": "Dôverujú nám",
    "trust.title.highlight": "klienti",
    "trust.subtitle": "Už roky pomáhame klientom z rôznych odvetví napĺňať ich marketingové ciele.",
    "trust.cta": "Chcem sa stať vaším klientom",

    // Navbar
    "nav.services": "Služby",
    "nav.work": "Portfólio",
    "nav.about": "O nás",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.glossary": "Slovník",
    "nav.contact": "Kontakt",
    "nav.startProject": "Nezáväzná konzultácia",
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
    "hero.cta1": "Nezáväzne nás kontaktovať",
    "hero.cta2": "Naše služby",
    "hero.happyClients": "spokojných klientov",
    "hero.excellentReviews": "Výborné hodnotenie",

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

    // About section
    "about.badge": "O nás",
    "about.heading.before": "Sme tím",
    "about.heading.highlight": "inovátorov",
    "about.p1":
      "Sme špecializovaná digitálna agentúra, ktorá pomáha značkám rásť vďaka výkonným webovým riešeniam, e-shopom a SEO stratégiám postaveným na dátach.",
    "about.p2":
      "Od technického SEO po moderné weby a e-shopy – sústredíme sa na to, čo reálne zvyšuje viditeľnosť, výkon a obchodné výsledky. Bez skratiek, bez priemerných riešení.",
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
    return translations[language][key] ?? key;
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
