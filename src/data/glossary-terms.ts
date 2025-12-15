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
