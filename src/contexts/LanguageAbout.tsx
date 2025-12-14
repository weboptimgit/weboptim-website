// src/contexts/LanguageAbout.tsx
import React, { createContext, useContext, ReactNode } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

type Dict = Record<string, string>;

type AboutContextType = {
  ta: (key: string) => string;
  lang: Language;
};

const aboutTranslations: Record<Language, Dict> = {
  EN: {
    // Hero
    "about.hero.badge": "About WebOptim",
    "about.hero.subtitle":
      "We're a passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences that drive real business results.",

    // Stats
    "about.stats.projectsCompleted": "Projects Completed",
    "about.stats.happyClients": "Happy Clients",
    "about.stats.yearsExperience": "Years Experience",
    "about.stats.awards": "Average Rating",

    // Story
    "about.story.badge": "Our Story",
    "about.story.title.before": "Building Digital",
    "about.story.title.highlight": "Excellence",
    "about.story.p1":
      "Founded in 2016, WebOptim started with a simple mission: to help businesses succeed in the digital world through beautiful, functional websites that drive real results.",
    "about.story.p2":
      "What began as a small operation has grown into a full-service digital agency, serving clients across industries from startups to established enterprises throughout Europe.",
    "about.story.p3":
      "We believe that great design is more than aesthetics—it's about solving problems, creating connections, and delivering experiences that matter.",
    "about.story.cta": "Work With Us",

    // Floating cards
    "about.cards.code.title": "Clean Code",
    "about.cards.code.desc": "Performance-optimized solutions",
    "about.cards.design.title": "Creative Design",
    "about.cards.design.desc": "Stunning visual experiences",
    "about.cards.growth.title": "Growth Focus",
    "about.cards.growth.desc": "Results that matter",

    // Timeline
    "about.timeline.badge": "Our Journey",
    "about.timeline.title.before": "Years of",
    "about.timeline.title.highlight": "Growth",
    "about.timeline.subtitle": "From humble beginnings to a full-service digital agency.",

    "about.timeline.2017.title": "The Beginning",
    "about.timeline.2017.desc":
      "Started as a freelancer while working full-time in an SEO agency, gaining hands-on experience in online marketing.",
    "about.timeline.2020.title": "Founding the Company",
    "about.timeline.2020.desc":
      "Launched our own company and expanded into web design, websites, and e-shops fully optimized for search engines.",
    "about.timeline.2021.title": "Expanding Services",
    "about.timeline.2021.desc":
      "Added new services, especially PPC marketing, creating a more complete digital solution package.",
    "about.timeline.2023.title": "Automation & Digitalization",
    "about.timeline.2023.desc":
      "Began specializing in digitalization and automation of business processes, opening new collaboration opportunities.",
    "about.timeline.2025.title": "50+ Completed Projects",
    "about.timeline.2025.desc":
      "Reached the milestone of 50+ successful projects and significantly expanded our portfolio and client base.",

    // Highlights
    "about.why.badge": "Why Us",
    "about.why.title.before": "What Sets Us",
    "about.why.title.highlight": "Apart",
    "about.why.subtitle": "The difference that makes us your ideal digital partner.",

    "about.highlights.fast.title": "Fast Delivery",
    "about.highlights.fast.desc": "Quick turnaround without compromising quality",
    "about.highlights.team.title": "Expert Team",
    "about.highlights.team.desc": "Skilled professionals passionate about innovation",
    "about.highlights.ontime.title": "On-Time Delivery",
    "about.highlights.ontime.desc": "Projects delivered within agreed timelines",
    "about.highlights.results.title": "Results Driven",
    "about.highlights.results.desc": "Focused on achieving measurable outcomes",

    // Values
    "about.values.badge": "Core Values",
    "about.values.title.before": "Our",
    "about.values.title.highlight": "Principles",
    "about.values.subtitle": "The foundation of everything we do.",

    "about.values.innovation.title": "Innovation",
    "about.values.innovation.desc":
      "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
    "about.values.quality.title": "Quality",
    "about.values.quality.desc": "We never compromise on quality. Every pixel, every line of code matters.",
    "about.values.partnership.title": "Partnership",
    "about.values.partnership.desc": "We see ourselves as an extension of your team, invested in your success.",

    // Team
    "about.team.badge": "Our Team",
    "about.team.title.before": "Meet the",
    "about.team.title.highlight": "Team",
    "about.team.subtitle": "The talented people behind WebOptim's success.",

    "about.team.peter.role": "Founder & Lead Developer",
    "about.team.peter.bio":
      "Web development specialist with expertise in WordPress, Oxygen Builder, and modern web technologies.",
    "about.team.lucia.role": "Creative Director",
    "about.team.lucia.bio":
      "Award-winning designer bringing brands to life with stunning visuals and user-centered design principles.",
    "about.team.martin.role": "SEO & Marketing Lead",
    "about.team.martin.bio":
      "Data-driven marketer specializing in SEO strategies and PPC campaigns that deliver measurable results.",
    "about.team.jana.role": "UX/UI Designer",
    "about.team.jana.bio": "Creating intuitive interfaces and seamless user experiences that delight users and drive conversions.",
    "about.team.tomas.role": "Full-Stack Developer",
    "about.team.tomas.bio":
      "Expert in modern frameworks and scalable architecture, building robust web applications from the ground up.",

    // CTA
    "about.cta.title": "Ready to Start Your Journey?",
    "about.cta.subtitle":
      "Let's create something amazing together. Get in touch to discuss how we can help transform your digital presence.",
    "about.cta.primary": "Get Started",
    "about.cta.secondary": "View Our Work",
  },

  CZ: {
    // Hero
    "about.hero.badge": "O WebOptim",
    "about.hero.subtitle":
      "Jsme tým designérů, vývojářů a stratégů, kteří tvoří špičkové digitální zážitky a přinášejí měřitelné výsledky.",

    // Stats
    "about.stats.projectsCompleted": "Dokončených projektů",
    "about.stats.happyClients": "Spokojených klientů",
    "about.stats.yearsExperience": "Let zkušeností",
    "about.stats.awards": "Průměrné hodnocení",

    // Story
    "about.story.badge": "Náš příběh",
    "about.story.title.before": "Budujeme digitální",
    "about.story.title.highlight": "excelenci",
    "about.story.p1":
    "WebOptim began its journey in 2017 as a freelancer project, where the first websites were created and at the same time real experience in the field of SEO and online marketing was collected.",
    "about.story.p2":
    "Through gradual growth and founding its own company, WebOptim has emerged as a specialized digital agency focused on creating websites, e-shops and SEO solutions that have a clear business goal.",
    "about.story.p3":
    "We believe that a quality website is not just about design. It is about performance, visibility in search engines and solutions that bring measurable results in the long term.",
    "about.story.cta":"Let's work together",

    // Floating cards
    "about.cards.code.title": "Čistý kód",
    "about.cards.code.desc": "Výkonově optimalizovaná řešení",
    "about.cards.design.title": "Kreativní design",
    "about.cards.design.desc": "Působivé vizuální zážitky",
    "about.cards.growth.title": "Fokus na růst",
    "about.cards.growth.desc": "Výsledky, na kterých záleží",

    // Timeline
    "about.timeline.badge": "Naše cesta",
    "about.timeline.title.before": "Roky",
    "about.timeline.title.highlight": "růstu",
    "about.timeline.subtitle": "Od prvních kroků až po full-service digitální agenturu.",

    "about.timeline.2017.title": "Začátek",
    "about.timeline.2017.desc":
      "Start jako freelancer a současně nástup do SEO agentury na plný úvazek — první reálné zkušenosti s online marketingem.",
    "about.timeline.2020.title": "Založení firmy",
    "about.timeline.2020.desc":
      "Založení vlastní firmy a rozšíření o webdesign, tvorbu webů a e-shopů plně optimalizovaných pro vyhledávače.",
    "about.timeline.2021.title": "Rozšíření služeb",
    "about.timeline.2021.desc":
      "Přidání dalších služeb, zejména PPC marketingu — vznik komplexnějšího balíku digitálních řešení.",
    "about.timeline.2023.title": "Automatizace & digitalizace",
    "about.timeline.2023.desc":
      "Začátek specializace na digitalizaci a automatizaci firemních procesů, které otevřely nové možnosti spolupráce.",
    "about.timeline.2025.title": "50+ dokončených projektů",
    "about.timeline.2025.desc":
      "Překročení milníku 50+ úspěšných projektů a výrazné rozšíření portfolia i klientské základny.",

    // Highlights
    "about.why.badge": "Proč my",
    "about.why.title.before": "V čem jsme",
    "about.why.title.highlight": "jiní",
    "about.why.subtitle": "Rozdíl, díky kterému jsme váš ideální digitální partner.",

    "about.highlights.fast.title": "Rychlé dodání",
    "about.highlights.fast.desc": "Rychle bez kompromisů v kvalitě",
    "about.highlights.team.title": "Zkušený tým",
    "about.highlights.team.desc": "Profesionálové, které baví inovace",
    "about.highlights.ontime.title": "Dodání včas",
    "about.highlights.ontime.desc": "Projekty v dohodnutých termínech",
    "about.highlights.results.title": "Na výsledky",
    "about.highlights.results.desc": "Fokus na měřitelné výstupy",

    // Values
    "about.values.badge": "Hodnoty",
    "about.values.title.before": "Naše",
    "about.values.title.highlight": "principy",
    "about.values.subtitle": "Základ všeho, co děláme.",

    "about.values.innovation.title": "Inovace",
    "about.values.innovation.desc": "Sledujeme trendy a využíváme nové technologie, abychom dodávali moderní řešení.",
    "about.values.quality.title": "Kvalita",
    "about.values.quality.desc": "Na kvalitě nešetříme. Každý detail a každý řádek kódu se počítá.",
    "about.values.partnership.title": "Partnerství",
    "about.values.partnership.desc": "Jsme prodlouženou rukou vašeho týmu — záleží nám na vašem úspěchu.",

    // Team
    "about.team.badge": "Náš tým",
    "about.team.title.before": "Poznejte",
    "about.team.title.highlight": "tým",
    "about.team.subtitle": "Lidé, kteří stojí za úspěchem WebOptim.",

    "about.team.peter.role": "Zakladatel & Lead Developer",
    "about.team.peter.bio": "Specialista na vývoj webů se zaměřením na WordPress, Oxygen Builder a moderní technologie.",
    "about.team.lucia.role": "Creative Director",
    "about.team.lucia.bio": "Designérka, která oživuje značky silnou vizuální identitou a UX přístupem.",
    "about.team.martin.role": "SEO & Marketing Lead",
    "about.team.martin.bio": "Marketing postavený na datech — SEO strategie a PPC kampaně s měřitelným dopadem.",
    "about.team.jana.role": "UX/UI Designer",
    "about.team.jana.bio": "Navrhuje intuitivní rozhraní a zážitky, které zvyšují konverze a baví uživatele.",
    "about.team.tomas.role": "Full-Stack Developer",
    "about.team.tomas.bio": "Moderní frameworky a škálovatelná architektura — robustní aplikace od základu.",

    // CTA
    "about.cta.title": "Jdeme do toho spolu?",
    "about.cta.subtitle":
      "Vytvořme něco skvělého. Ozvěte se nám a probereme, jak posunout váš online projekt.",
    "about.cta.primary": "Začít",
    "about.cta.secondary": "Naše práce",
  },

  SK: {
    // Hero
    "about.hero.badge": "O WebOptim",
    "about.hero.subtitle":
      "Sme tím dizajnérov, vývojárov a stratégov, ktorí tvoria špičkové digitálne zážitky a prinášajú merateľné výsledky.",

    // Stats
    "about.stats.projectsCompleted": "Dokončených projektov",
    "about.stats.happyClients": "Spokojných klientov",
    "about.stats.yearsExperience": "Rokov skúseností",
    "about.stats.awards": "Priemerné hodnotenie",

    // Story
    "about.story.badge": "Náš príbeh",
    "about.story.title.before": "Budujeme digitálnu",
    "about.story.title.highlight": "excelenciu",
    "about.story.p1":
      "WebOptim začal svoju cestu v roku 2017 ako freelancer projekt, kde vznikali prvé weby a zároveň sa zbierali reálne skúsenosti z oblasti SEO a online marketingu.",
    "about.story.p2":
      "Postupným rastom a založením vlastnej firmy sa WebOptim vyprofiloval ako špecializovaná digitálna agentúra zameraná na tvorbu webových stránok, e-shopov a SEO riešení, ktoré majú jasný obchodný cieľ.",
    "about.story.p3":
      "Veríme, že kvalitný web nie je len o dizajne. Je o výkone, viditeľnosti vo vyhľadávačoch a riešeniach, ktoré dlhodobo prinášajú merateľné výsledky.",
    "about.story.cta":"Spolupracujme",

    // Floating cards
    "about.cards.code.title": "Čistý kód",
    "about.cards.code.desc": "Výkonovo optimalizované riešenia",
    "about.cards.design.title": "Kreatívny dizajn",
    "about.cards.design.desc": "Pôsobivé vizuálne zážitky",
    "about.cards.growth.title": "Fokus na rast",
    "about.cards.growth.desc": "Výsledky, na ktorých záleží",

    // Timeline
    "about.timeline.badge": "Naša cesta",
    "about.timeline.title.before": "Roky",
    "about.timeline.title.highlight": "rastu",
    "about.timeline.subtitle": "Od prvých krokov až po full-service digitálnu agentúru.",

    "about.timeline.2017.title": "Začiatok",
    "about.timeline.2017.desc":
      "Začiatky ako freelancer a zároveň práca v SEO agentúre na plný úväzok — prvé reálne skúsenosti s online marketingom.",
    "about.timeline.2020.title": "Založenie firmy",
    "about.timeline.2020.desc":
      "Založenie vlastnej firmy a rozšírenie o webdizajn, tvorbu webov a e-shopov plne optimalizovaných pre vyhľadávače.",
    "about.timeline.2021.title": "Rozšírenie služieb",
    "about.timeline.2021.desc":
      "Pridanie ďalších služieb, najmä PPC marketingu — vznik komplexnejšieho balíka digitálnych riešení.",
    "about.timeline.2023.title": "Automatizácia & digitalizácia",
    "about.timeline.2023.desc":
      "Začiatok špecializácie na digitalizáciu a automatizáciu firemných procesov, čo otvorilo nové možnosti spolupráce.",
    "about.timeline.2025.title": "50+ dokončených projektov",
    "about.timeline.2025.desc":
      "Prekročenie míľnika 50+ úspešných projektov a výrazné rozšírenie portfólia aj klientskej základne.",

    // Highlights
    "about.why.badge": "Prečo my",
    "about.why.title.before": "Čím sa",
    "about.why.title.highlight": "odlišujeme",
    "about.why.subtitle": "Rozdiel, vďaka ktorému sme váš ideálny digitálny partner.",

    "about.highlights.fast.title": "Rýchle dodanie",
    "about.highlights.fast.desc": "Rýchlo bez kompromisov v kvalite",
    "about.highlights.team.title": "Skúsený tím",
    "about.highlights.team.desc": "Profesionáli, ktorých bavia inovácie",
    "about.highlights.ontime.title": "Dodanie načas",
    "about.highlights.ontime.desc": "Projekty v dohodnutých termínoch",
    "about.highlights.results.title": "Na výsledky",
    "about.highlights.results.desc": "Fokus na merateľné výstupy",

    // Values
    "about.values.badge": "Hodnoty",
    "about.values.title.before": "Naše",
    "about.values.title.highlight": "princípy",
    "about.values.subtitle": "Základ všetkého, čo robíme.",

    "about.values.innovation.title": "Inovácia",
    "about.values.innovation.desc": "Sledujeme trendy a využívame nové technológie, aby sme dodávali moderné riešenia.",
    "about.values.quality.title": "Kvalita",
    "about.values.quality.desc": "Kvalitu nerobíme na kompromisy. Každý detail a každý riadok kódu sa počíta.",
    "about.values.partnership.title": "Partnerstvo",
    "about.values.partnership.desc": "Sme predĺženou rukou vášho tímu — záleží nám na vašom úspechu.",

    // Team
    "about.team.badge": "Náš tím",
    "about.team.title.before": "Spoznajte",
    "about.team.title.highlight": "tím",
    "about.team.subtitle": "Ľudia, ktorí stoja za úspechom WebOptim.",

    "about.team.peter.role": "Projektový manažér a SEO",
    "about.team.peter.bio": "Dlhoročné skúsenosti v oblasti marketingu ma priviedli k myšlienke zostaviť tím profesionálov, ktorí vás prevedú celou cestou online podnikania. Od jednoduchých webových stránok až po komplexné marketingové stratégie.",
    "about.team.monika.role": "PPC Marketing",
    "about.team.monika.bio": "Marketing riadim v kontexte. Spájam kreativitu, stratégiu a údaje. Prinášam nové prístupy, netradičné riešenia, kritický pohľad a veľmi individuálny prístup. Reflektujem skutočné potreby klienta. Darí sa mi tvoriť kreatívne stratégie.",
    "about.team.martin.role": "Grafika a vývoj front-endu",
    "about.team.martin.bio": "Pripravím vám grafiku na vizitku a komplexnú príručku značky. Sledujem nové trendy v odvetví a implementujem ich do každej svojej práce. Vytváram modernú, ľahko zapamätateľnú a údernú grafiku a webové stránky, ktoré sa vryjú hlboko do podvedomia. Všetko o HTML, CSS/SCSS, VueJS.",
    "about.team.matej.role": "Reels Maker",
    "about.team.matej.bio": "Každý deň vytváram príspevky v mojich sieťach alebo v sieťach mojich klientov. Milujem grafiku, vizuály a všetky druhy kreativity. Vyštudoval som marketing, takže ponúkam najinovatívnejšie postupy pre vaše podnikanie. Poďme spolu vytvoriť niečo epické.",
    "about.team.milan.role": "Copywriter a editor",
    "about.team.milan.bio": "V slovách je sila. Nájdem tie správne slová, ktoré posunú vaše podnikanie vpred. To je moja úloha. Mojím cieľom je tiež zbaviť ľudí stresu z tvorby obsahu, pretože tvorba obsahu by nemala byť stresujúca. Mala by byť radostná a zmysluplná.",

    // CTA
    "about.cta.title": "Ideme do toho spolu?",
    "about.cta.subtitle":
      "Vytvorme niečo skvelé. Ozvite sa nám a preberieme, ako posunúť váš online projekt.",
    "about.cta.primary": "Začať",
    "about.cta.secondary": "Naše práce",
  },
};

const AboutContext = createContext<AboutContextType | undefined>(undefined);

export const AboutLanguageProvider = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();

  const ta = (key: string) => aboutTranslations[language]?.[key] || aboutTranslations.EN[key] || key;

  return <AboutContext.Provider value={{ ta, lang: language }}>{children}</AboutContext.Provider>;
};

export const useAbout = () => {
  const ctx = useContext(AboutContext);
  if (!ctx) throw new Error("useAbout must be used within AboutLanguageProvider");
  return ctx;
};
