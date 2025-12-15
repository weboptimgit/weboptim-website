export interface GlossaryResource {
  title: string;
  url: string;
}

export interface GlossaryTermContent {
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  examples: string[];
  whyItMatters: string;
}

export interface GlossaryTerm {
  slugs: {
    EN: string;
    CZ: string;
    SK: string;
  };
  category: string;
  relatedTerms: string[];
  resources?: GlossaryResource[];
  content: {
    EN: GlossaryTermContent;
    CZ: GlossaryTermContent;
    SK: GlossaryTermContent;
  };
}

export const glossaryTermsData: Record<string, GlossaryTerm> = {
  backend: {
    slugs: { EN: "backend", CZ: "backend", SK: "backend" },
    category: "Development",
    relatedTerms: ["Frontend", "API", "Database", "Server", "Authentication"],
    resources: [
      { title: "Server-side development (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side" },
      { title: "What is Backend Development?", url: "https://www.freecodecamp.org/news/what-is-backend-development/" },
      { title: "Web.dev – Backend Basics", url: "https://web.dev/learn/server-side/" }
    ],
    content: {
      EN: {
        term: "Backend",
        shortDefinition: "Server-side development",
        fullDefinition:
          "Backend is the “invisible” part of a website or application responsible for server-side logic, databases, and background operations. It handles everything that happens behind the scenes, such as processing forms, registrations, and orders, communicating with databases, managing APIs, and handling user accounts. Backend development ensures that data flows correctly, securely, and efficiently between the user interface and the server.",
        examples: [
          "Saving an e-commerce order into a database.",
          "Verifying user credentials during login.",
          "Sending emails through a website contact form.",
          "Automatically generating invoices."
        ],
        whyItMatters:
          "Without a backend, a website would be nothing more than a static visual interface. Backend development is responsible for security, performance, data management, and all critical processes that allow a website to function in real-world scenarios. A well-built backend ensures reliability, scalability, and safe handling of sensitive data."
      },
      CZ: {
        term: "Backend",
        shortDefinition: "Serverová logika aplikace",
        fullDefinition:
          "Backend je „neviditelná“ část webové stránky nebo aplikace, která zajišťuje logiku na straně serveru, práci s databázemi a procesy běžící na pozadí. Řeší zpracování formulářů, registrací a objednávek, komunikaci s databází, API propojení a správu uživatelských účtů. Backend zajišťuje, aby data proudila správně, bezpečně a efektivně mezi uživatelským rozhraním a serverem.",
        examples: [
          "Uložení objednávky z e-shopu do databáze.",
          "Ověření uživatele při přihlášení.",
          "Odesílání e-mailů přes kontaktní formulář.",
          "Automatické generování faktur."
        ],
        whyItMatters:
          "Bez backendu by web fungoval pouze jako statický obrázek bez skutečné funkcionality. Backend řeší bezpečnost, výkon, správu dat a všechny klíčové procesy, které umožňují webu fungovat v praxi. Kvalitní backend je základem stabilních a škálovatelných webových aplikací."
      },
      SK: {
        term: "Backend",
        shortDefinition: "Serverová logika a spracovanie dát",
        fullDefinition:
          "Backend je „neviditeľná“ časť webu alebo aplikácie, ktorá zabezpečuje serverovú logiku, prácu s databázami a operácie prebiehajúce na pozadí. Rieši spracovanie formulárov, registrácií a objednávok, komunikáciu s databázou, API prepojenia a správu používateľských účtov. Backend zabezpečuje, aby dáta prúdili správne, bezpečne a efektívne medzi rozhraním používateľa a serverom.",
        examples: [
          "Uloženie objednávky z e-shopu do databázy.",
          "Overenie používateľa pri prihlásení.",
          "Odosielanie e-mailov cez kontaktný formulár.",
          "Automatické generovanie faktúr."
        ],
        whyItMatters:
          "Bez backendu by web fungoval len ako statický vizuálny prvok bez reálnej funkcionality. Backend rieši bezpečnosť, výkon, správu dát a všetky kľúčové procesy, ktoré umožňujú webu fungovať v praxi. Kvalitne navrhnutý backend je základom spoľahlivých, škálovateľných a bezpečných webových aplikácií."
      }
    }
  },
  frontend: {
    slugs: { EN: "frontend", CZ: "frontend", SK: "frontend" },
    category: "Development",
    relatedTerms: ["Backend", "UI Design", "UX Design", "JavaScript", "HTML", "CSS"],
    resources: [
      { title: "Frontend Web Development (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" },
      { title: "What is Frontend Development?", url: "https://www.freecodecamp.org/news/what-is-front-end-development/" },
      { title: "Web.dev – User Experience", url: "https://web.dev/learn/design/" }
    ],
    content: {
      EN: {
        term: "Frontend",
        shortDefinition: "User interface development",
        fullDefinition:
          "Frontend is the part of a website or application that users directly see and interact with. It represents the visual and interactive layer of a project and defines how texts, images, buttons, forms, navigation, and other elements look and behave. Frontend development is primarily based on HTML, CSS, and JavaScript, which together define the structure, appearance, and interactivity of a website. A well-built frontend ensures that content is clearly structured, readable, and accessible across different devices, including mobiles and tablets. In practice, it is the first layer of user experience that strongly influences whether a visitor stays on the website or leaves.",
        examples: [
          "A navigation menu that automatically changes into a hamburger menu on mobile devices.",
          "An image slider on the homepage that responds to touch gestures.",
          "Form validation that alerts users to missing or incorrect input.",
          "Smooth animations triggered while scrolling the page.",
          "Color-coded buttons based on action type (primary vs. secondary CTA)."
        ],
        whyItMatters:
          "A high-quality frontend plays a crucial role in how quickly and intuitively users can perform desired actions, such as making a purchase or submitting a contact form. A professionally designed frontend increases brand credibility and creates a positive first impression. Clear navigation reduces user frustration and lowers bounce rates. Frontend also directly impacts page loading speed and mobile optimization, which affects SEO rankings. In modern web projects, frontend is one of the key pillars of overall user experience."
      },
      CZ: {
        term: "Frontend",
        shortDefinition: "Vývoj uživatelského rozhraní",
        fullDefinition:
          "Frontend je část webové stránky nebo aplikace, kterou uživatel přímo vidí a používá. Představuje vizuální a interaktivní vrstvu projektu a určuje, jak vypadají texty, obrázky, tlačítka, formuláře, navigace a další prvky. Je založen především na technologiích HTML, CSS a JavaScript, které definují strukturu, vzhled a chování webu. Kvalitní frontend zajišťuje přehledné uspořádání obsahu, snadnou čitelnost a dostupnost na různých zařízeních, včetně mobilů a tabletů. V praxi jde o první vrstvu uživatelského zážitku, která výrazně ovlivňuje, zda uživatel na webu zůstane.",
        examples: [
          "Menu, které se na mobilním zařízení automaticky změní na hamburger ikonu.",
          "Obrazový slider na hlavní stránce reagující na dotykové ovládání.",
          "Validace formuláře upozorňující na chybějící nebo nesprávné údaje.",
          "Moderní animace prvků při scrollování stránky.",
          "Barevné rozlišení tlačítek podle typu akce (primární vs. sekundární CTA)."
        ],
        whyItMatters:
          "Kvalitní frontend zásadně ovlivňuje rychlost a intuitivnost ovládání webu. Profesionální zpracování zvyšuje důvěryhodnost značky a vytváří pozitivní první dojem. Přehledné rozhraní snižuje frustraci uživatelů a míru okamžitého opuštění stránky. Frontend má také přímý vliv na rychlost načítání a optimalizaci pro mobilní zařízení, což se promítá do SEO. Proto je frontend klíčovým prvkem moderních webových projektů."
      },
      SK: {
        term: "Frontend",
        shortDefinition: "Vývoj používateľského rozhrania",
        fullDefinition:
          "Frontend je časť webstránky alebo aplikácie, ktorú priamo vidí a používa návštevník. Predstavuje vizuálnu a interaktívnu vrstvu projektu a definuje, ako vyzerajú texty, obrázky, tlačidlá, formuláre, navigácia a ďalšie prvky. Je postavený najmä na technológiách HTML, CSS a JavaScript, ktoré určujú štruktúru, vzhľad a správanie webu. Kvalitný frontend zabezpečuje prehľadné usporiadanie obsahu, dobrú čitateľnosť a dostupnosť na rôznych zariadeniach vrátane mobilov a tabletov. V praxi ide o prvú vrstvu používateľského zážitku, ktorá výrazne ovplyvňuje, či sa návštevník rozhodne na webe zostať.",
        examples: [
          "Menu, ktoré sa na mobilnom zariadení automaticky zmení na hamburger ikonu.",
          "Slider s obrázkami na hlavnej stránke reagujúci na dotykové ovládanie.",
          "Validácia formulára, ktorá upozorní používateľa na chýbajúce alebo nesprávne údaje.",
          "Moderné animácie prvkov pri scrollovaní stránky.",
          "Farebné odlíšenie tlačidiel podľa typu akcie (primárna vs. sekundárna CTA)."
        ],
        whyItMatters:
          "Kvalitný frontend zohráva kľúčovú úlohu v tom, ako rýchlo a intuitívne vie používateľ vykonať požadovanú akciu, napríklad nákup alebo odoslanie formulára. Profesionálne spracované rozhranie zvyšuje dôveryhodnosť značky a vytvára pozitívny prvý dojem. Dobrá orientácia znižuje frustráciu používateľov a mieru odchodov zo stránky. Frontend zároveň ovplyvňuje rýchlosť načítania a optimalizáciu pre mobilné zariadenia, čo má priamy dopad aj na SEO. Preto je frontend jedným z najdôležitejších pilierov moderných webových projektov."
      }
    }
  },
  api: {
    slugs: { EN: "api", CZ: "api", SK: "api" },
    category: "Development",
    relatedTerms: ["REST API", "GraphQL", "Endpoint", "Backend", "JSON"],
    resources: [
      { title: "What is an API? (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" },
      { title: "REST API Tutorial", url: "https://restfulapi.net/" }
    ],
    content: {
      EN: {
        term: "API",
        shortDefinition: "Application Programming Interface",
        fullDefinition: "An API (Application Programming Interface) is a set of protocols, routines, and tools that allows different software applications to communicate with each other. Think of it as a waiter in a restaurant – you (the application) tell the waiter (the API) what you want, and the waiter brings back your order from the kitchen (the server or database).",
        examples: [
          "When you use a weather app, it uses an API to fetch weather data from a remote server.",
          "Social media login buttons (\"Login with Google\") use APIs to authenticate users.",
          "Payment processing on e-commerce sites uses APIs like Stripe or PayPal.",
          "Maps embedded on websites use Google Maps API or similar services."
        ],
        whyItMatters: "APIs are the backbone of modern web development. They allow your website to integrate with third-party services, fetch real-time data, process payments, send emails, and much more. Without APIs, every application would need to build everything from scratch."
      },
      CZ: {
        term: "API",
        shortDefinition: "Aplikační programové rozhraní",
        fullDefinition: "API (Application Programming Interface) je sada protokolů, rutin a nástrojů, která umožňuje různým softwarovým aplikacím vzájemně komunikovat. Představte si to jako číšníka v restauraci – vy (aplikace) řeknete číšníkovi (API), co chcete, a číšník vám přinese objednávku z kuchyně (serveru nebo databáze).",
        examples: [
          "Když používáte aplikaci na počasí, využívá API k získání dat o počasí ze vzdáleného serveru.",
          "Tlačítka pro přihlášení přes sociální sítě (\"Přihlásit se přes Google\") používají API k ověření uživatelů.",
          "Zpracování plateb na e-shopech využívá API služeb jako Stripe nebo PayPal.",
          "Mapy vložené na webových stránkách používají Google Maps API nebo podobné služby."
        ],
        whyItMatters: "API jsou páteří moderního webového vývoje. Umožňují vašemu webu integrovat se s externími službami, získávat data v reálném čase, zpracovávat platby, odesílat e-maily a mnohem více. Bez API by každá aplikace musela vše vytvářet od nuly."
      },
      SK: {
        term: "API",
        shortDefinition: "Aplikačné programové rozhranie",
        fullDefinition: "API (Application Programming Interface) je sada protokolov, rutín a nástrojov, ktorá umožňuje rôznym softvérovým aplikáciám vzájomne komunikovať. Predstavte si to ako čašníka v reštaurácii – vy (aplikácia) poviete čašníkovi (API), čo chcete, a čašník vám prinesie objednávku z kuchyne (servera alebo databázy).",
        examples: [
          "Keď používate aplikáciu na počasie, využíva API na získanie údajov o počasí zo vzdialeného servera.",
          "Tlačidlá na prihlásenie cez sociálne siete (\"Prihlásiť sa cez Google\") používajú API na overenie používateľov.",
          "Spracovanie platieb na e-shopoch využíva API služieb ako Stripe alebo PayPal.",
          "Mapy vložené na webových stránkach používajú Google Maps API alebo podobné služby."
        ],
        whyItMatters: "API sú chrbticou moderného webového vývoja. Umožňujú vášmu webu integrovať sa s externými službami, získavať dáta v reálnom čase, spracovávať platby, odosielať e-maily a oveľa viac. Bez API by každá aplikácia musela všetko vytvárať od nuly."
      }
    }
  },
  cms: {
    slugs: { EN: "cms", CZ: "cms", SK: "cms" },
    category: "Development",
    relatedTerms: ["WordPress", "Headless CMS", "Backend", "Database", "WYSIWYG"],
    resources: [
      { title: "What is a CMS? (HubSpot)", url: "https://blog.hubspot.com/blog/tabid/6307/bid/7969/what-is-a-cms-and-why-should-you-care.aspx" },
      { title: "WordPress Official Site", url: "https://wordpress.org/" }
    ],
    content: {
      EN: {
        term: "CMS",
        shortDefinition: "Content Management System",
        fullDefinition: "A CMS (Content Management System) is software that allows users to create, manage, and modify digital content on a website without needing specialized technical knowledge. Think of it like a document editor for your website – you can add text, images, and pages without writing any code.",
        examples: [
          "WordPress powers over 40% of all websites, from blogs to e-commerce stores.",
          "Shopify is a CMS specifically designed for online stores and e-commerce.",
          "Webflow combines visual design tools with CMS capabilities for designers.",
          "Contentful and Sanity are headless CMS options for developers building custom frontends."
        ],
        whyItMatters: "A CMS empowers you to update your website content independently, without relying on developers for every small change. This saves time and money while keeping your content fresh and up-to-date. For businesses, it means faster content publishing and better control over your digital presence."
      },
      CZ: {
        term: "CMS",
        shortDefinition: "Systém pro správu obsahu",
        fullDefinition: "CMS (Content Management System) je software, který umožňuje uživatelům vytvářet, spravovat a upravovat digitální obsah na webových stránkách bez potřeby specializovaných technických znalostí. Představte si to jako textový editor pro váš web – můžete přidávat text, obrázky a stránky bez psaní kódu.",
        examples: [
          "WordPress pohání více než 40 % všech webových stránek, od blogů po e-shopy.",
          "Shopify je CMS speciálně navržený pro online obchody a e-commerce.",
          "Webflow kombinuje nástroje pro vizuální design s funkcemi CMS pro designéry.",
          "Contentful a Sanity jsou headless CMS možnosti pro vývojáře vytvářející vlastní frontendy."
        ],
        whyItMatters: "CMS vám umožňuje aktualizovat obsah webu nezávisle, bez spoléhání se na vývojáře při každé malé změně. To šetří čas i peníze a zároveň udržuje váš obsah čerstvý a aktuální. Pro firmy to znamená rychlejší publikování obsahu a lepší kontrolu nad digitální prezentací."
      },
      SK: {
        term: "CMS",
        shortDefinition: "Systém na správu obsahu",
        fullDefinition: "CMS (Content Management System) je softvér, ktorý umožňuje používateľom vytvárať, spravovať a upravovať digitálny obsah na webových stránkach bez potreby špecializovaných technických znalostí. Predstavte si to ako textový editor pre váš web – môžete pridávať text, obrázky a stránky bez písania kódu.",
        examples: [
          "WordPress poháňa viac ako 40 % všetkých webových stránok, od blogov po e-shopy.",
          "Shopify je CMS špeciálne navrhnutý pre online obchody a e-commerce.",
          "Webflow kombinuje nástroje pre vizuálny dizajn s funkciami CMS pre dizajnérov.",
          "Contentful a Sanity sú headless CMS možnosti pre vývojárov vytvárajúcich vlastné frontendy."
        ],
        whyItMatters: "CMS vám umožňuje aktualizovať obsah webu nezávisle, bez spoliehania sa na vývojárov pri každej malej zmene. To šetrí čas aj peniaze a zároveň udržiava váš obsah čerstvý a aktuálny. Pre firmy to znamená rýchlejšie publikovanie obsahu a lepšiu kontrolu nad digitálnou prezentáciou."
      }
    }
  }
};
