export interface BlogPostContent {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  content: string[];
}

export interface BlogPostBase {
  image: string;
  author: string;
}

export interface BlogPostTranslations {
  EN: BlogPostContent;
  CZ: BlogPostContent;
  SK: BlogPostContent;
}

export interface BlogPostData extends BlogPostBase {
  translations: BlogPostTranslations;
}

// Legacy interface for backward compatibility
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  content: string[];
}

// Translated categories for filtering
export const categoriesTranslations = {
  EN: ["All", "Web Design", "E-commerce", "Marketing", "Development", "Branding"],
  CZ: ["Vše", "Webový design", "E-shop", "Marketing", "Vývoj", "Branding"],
  SK: ["Všetko", "Webový dizajn", "E-shop", "Marketing", "Vývoj", "Branding"],
};

// ========================================
// ADD NEW BLOG POSTS HERE - ONE PLACE ONLY!
// ========================================

export const blogPostsData: BlogPostData[] = [
  {
    image:
      "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Peter Gáborík",
    translations: {
      EN: {
        slug: "7-reasons-why-you-should-choose-a-wordpress-based-website",
        title: "7 Reasons Why You Should Choose a WordPress-Based Website",
        excerpt:
          "WordPress is an ideal tool for businesses and companies to showcase their products and services and attract new customers.",
        category: "Web Design",
        tags: ["UX Design", "Business", "Trends"],
        date: "Dec 12, 2025",
        readTime: "5 min read",
        content: [
          "Technically speaking, it is a content management system (CMS) for managing your website's content. The best thing about WordPress is that it is easy to use and flexible enough to create various types of websites.",
          "## WordPress in numbers",
          "- item 1",
          "- item 2",
        ],
      },
      CZ: {
        slug: "7-duvodu-proc-zvolit-web-postaveny-na-wordpress",
        title: "7 důvodů, proč zvolit web postavený na WordPress",
        excerpt:
          "WordPress je ideální nástroj pro firmy a společnosti k prezentaci jejich produktů a služeb a získání nových zákazníků.",
        category: "Webový design",
        tags: ["UX Design", "Podnikání", "Trendy"],
        date: "12. prosince 2025",
        readTime: "5 min čtení",
        content: [
          "Technicky vzato je to systém pro správu obsahu (CMS) pro správu obsahu vaší webové stránky.",
          "## WordPress v číslech",
          "- položka 1",
          "- položka 2",
        ],
      },
      SK: {
        slug: "7-dovodov-preco-zvolit-web-postaveny-na-wordpress",
        title: "7 dôvodov, prečo zvoliť web postavený na WordPress",
        excerpt:
          "WordPress je ideálny nástroj pre firmy a spoločnosti na prezentáciu ich produktov a služieb a získanie nových zákazníkov.",
        category: "Webový dizajn",
        tags: ["UX Design", "Podnikanie", "Trendy"],
        date: "12. decembra 2025",
        readTime: "5 min čítania",
        content: [
          "Technicky vzaté je to systém na správu obsahu (CMS) na správu obsahu vašej webovej stránky.",
          "## WordPress v číslach",
          "- položka 1",
          "- položka 2",
        ],
      },
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Peter Gáborík",
    translations: {
      EN: {
        slug: "why-structured-data-is-essential-for-your-seo",
        title: "Why Structured Data Is Essential for Your SEO",
        excerpt:
          "Structured data isn’t just a “nice to have” - it’s metadata that tells search engines (and other services) exactly what’s on your page. With structured data, Google and other engines can show rich results - enhanced search results (stars, images, price, FAQ, events, etc.) that significantly increase visibility and the likelihood of clicks. Implementation usually doesn’t require major design or content changes - just the right code.",
        category: "Web Design",
        tags: ["UX Design", "Business", "Trends"],
        date: "Dec 12, 2025",
        readTime: "5 min read",
        content: [
          "## What is schema.org and why use it",
          "Schema.org is a standardized vocabulary of types and properties (for example Product, Recipe, Event, FAQ) maintained by search engines and the community to describe page content. When you mark up your content with schema.org, you make it much easier for machines to process and understand it.",
          "## JSON-LD vs. Microdata vs. RDFa - which to choose",
          "Google and many other sources recommend JSON-LD whenever possible - it’s the simplest, less error-prone, and easier to maintain. Microdata and RDFa insert markup directly into HTML and can be useful in some situations, but are usually harder to manage.",
          "## Main benefits of using structured data",
          "- Better chance of appearing as rich results (i.e., more prominent search listings).",
          "- Higher CTR - users click results more often when they include ratings, images, or extra info.",
          "- Faster indexing and improved understanding of your content by search engines.",
          "- Control over how your brand appears - highlight FAQs, reviews, opening hours and other helpful content.",
          "- Combine multiple schema types on a single page (e.g., Product + Review + BreadcrumbList).",
          "## Example: Product Schema with JSON-LD",
          "Here's a practical example of how to implement structured data for a product page:",
          "```html\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org/\",\n  \"@type\": \"Product\",\n  \"name\": \"Massage Gun X\",\n  \"image\": \"https://example.com/images/gun.jpg\",\n  \"description\": \"A powerful massage gun for muscle recovery.\",\n  \"sku\": \"MG-X-001\",\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"url\": \"https://example.com/product/massage-gun-x\",\n    \"priceCurrency\": \"EUR\",\n    \"price\": \"129.00\",\n    \"availability\": \"https://schema.org/InStock\"\n  },\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"4.7\",\n    \"reviewCount\": \"214\"\n  }\n}\n</script>\n```"
          "## Key schema types (quick overview)",
        ],
      },
      CZ: {
        slug: "proc-jsou-strukturovana-data-nezbytna-pro-vase-seo",
        title: "Proč jsou strukturovaná data nezbytná pro vaše SEO",
        excerpt:
          'Strukturovaná data nejsou jen "nice to have" - jsou to metadata, která říkají vyhledávačům (a dalším službám) přesně, co je na vaší stránce.',
        category: "Webový design",
        tags: ["UX Design", "Podnikání", "Trendy"],
        date: "12. prosince 2025",
        readTime: "5 min čtení",
        content: [
          "## Co je schema.org a proč ho používat",
          "Schema.org je standardizovaný slovník typů a vlastností (například Produkt, Recept, Událost, Často kladené otázky) spravovaný vyhledávači a komunitou k popisu obsahu stránky. Když svůj obsah označíte pomocí schema.org, výrazně usnadníte strojům jeho zpracování a pochopení.",
          "## JSON-LD vs. Mikrodata vs. RDFa - který zvolit",
          "Google a mnoho dalších zdrojů doporučuje JSON-LD, kdykoli je to možné - je to nejjednodušší, méně náchylné k chybám a snadněji se udržuje. Mikrodata a RDFa vkládají značky přímo do HTML a mohou být v některých situacích užitečné, ale obvykle se s nimi hůře pracuje.",
          "## Hlavní výhody používání strukturovaných dat",
          "- Větší šance na zobrazení jako bohaté výsledky (tj. výraznější záznamy ve vyhledávání).",
          "- Vyšší míra prokliku - uživatelé klikají na výsledky častěji, když obsahují hodnocení, obrázky nebo další informace.",
          "- Rychlejší indexování a lepší pochopení vašeho obsahu vyhledávači.",
          "- Kontrola nad tím, jak se vaše značka zobrazuje - zvýrazněte časté dotazy, recenze, otevírací dobu a další užitečný obsah.",
          "- Kombinujte více typů schémat na jedné stránce (např. Produkt + Recenze + Seznam s navigací).",
          "## Klíčové typy schémat (rychlý přehled)",
        ],
      },
      SK: {
        slug: "preco-su-strukturovane-data-nevyhnutne-pre-vase-seo",
        title: "Prečo sú štruktúrované dáta nevyhnutné pre vaše SEO",
        excerpt:
          'Štruktúrované dáta nie sú len "nice to have" - sú to metadáta, ktoré hovoria vyhľadávačom (a ďalším službám) presne, čo je na vašej stránke.',
        category: "Webový dizajn",
        tags: ["UX Design", "Podnikanie", "Trendy"],
        date: "12. decembra 2025",
        readTime: "5 min čítania",
        content: [
          "V dnešnom digitálnom svete je vaša webová stránka často prvým dojmom, ktorý potenciálni zákazníci o vašom podnikaní majú.",
          "## Čo je schema.org a prečo ho používať",
          "Schema.org je štandardizovaný slovník typov a vlastností (napríklad Product, Recipe, Event, FAQ) udržiavaný vyhľadávačmi a komunitou pre popis obsahu stránok.",
          "## Mobile-First už nie je voliteľné",
          "S viac ako 60 % webového prenosu z mobilných zariadení je responzívna, mobilne prívetivá webová stránka kľúčová.",
          "## Rýchlosť sa rovná príjmom",
          "Rýchlosť načítania stránky priamo ovplyvňuje váš zisk. Výskum Google ukazuje, že s rastúcou dobou načítania rastie pravdepodobnosť odchodu.",
          "## Bezpečnosť a dôvera",
          "S rastúcimi kybernetickými hrozbami je bezpečnosť webových stránok dôležitejšia než kedykoľvek predtým.",
          "## Záver",
          "Investícia do modernej webovej stránky nie je výdavok—je to investícia do budúcnosti vášho podnikania.",
        ],
      },
    },
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    author: "Alex Johnson",
    translations: {
      EN: {
        slug: "why-your-business-needs-modern-website-2024",
        title: "Why Your Business Needs a Modern Website in 2024",
        excerpt:
          "Discover the key reasons why having an outdated website could be costing you customers and how a modern redesign can transform your online presence.",
        category: "Web Design",
        tags: ["UX Design", "Business", "Trends"],
        date: "Dec 5, 2024",
        readTime: "5 min read",
        content: [
          "In today's digital-first world, your website is often the first impression potential customers have of your business. A modern, well-designed website isn't just a nice-to-have—it's essential for survival in an increasingly competitive marketplace.",
          "## First Impressions Matter More Than Ever",
          "Studies show that users form an opinion about a website within 50 milliseconds. That's faster than the blink of an eye. If your website looks outdated, slow, or difficult to navigate, visitors will bounce before they even see what you have to offer.",
          "A modern website signals to visitors that your business is professional, trustworthy, and current with industry trends. It shows that you care about the user experience and, by extension, that you'll care about their experience as a customer.",
          "## Mobile-First Is No Longer Optional",
          "With over 60% of web traffic now coming from mobile devices, having a responsive, mobile-friendly website is crucial. Google's mobile-first indexing means that your mobile site is what determines your search rankings.",
          "If your website doesn't perform well on smartphones and tablets, you're not just losing mobile visitors—you're losing visibility in search results across all devices.",
          "## Speed Equals Revenue",
          "Page load speed directly impacts your bottom line. Research by Google shows that as page load time increases from 1 second to 3 seconds, the probability of bounce increases by 32%. At 5 seconds, that number jumps to 90%.",
          "Modern websites are built with performance in mind, utilizing techniques like lazy loading, optimized images, and efficient code to ensure lightning-fast load times.",
          "## Security and Trust",
          "With cyber threats on the rise, website security is more important than ever. Modern websites come with SSL certificates, secure hosting, and up-to-date security protocols that protect both your business and your customers.",
          "An outdated website running on old software is a prime target for hackers. Beyond the direct risks, visitors are increasingly aware of security indicators like HTTPS, and may leave your site if they don't see them.",
          "## The Bottom Line",
          "Investing in a modern website isn't an expense—it's an investment in your business's future. The cost of not updating your online presence is measured in lost customers, damaged reputation, and missed opportunities.",
          "Ready to transform your digital presence? Contact us today to discuss how we can help bring your website into 2024 and beyond.",
        ],
      },
      CZ: {
        slug: "proc-vase-firma-potrebuje-moderni-web-2024",
        title: "Proč vaše firma potřebuje moderní web v roce 2024",
        excerpt:
          "Objevte klíčové důvody, proč vás zastaralý web může stát zákazníky a jak moderní redesign může transformovat vaši online přítomnost.",
        category: "Webový design",
        tags: ["UX Design", "Podnikání", "Trendy"],
        date: "5. prosince 2024",
        readTime: "5 min čtení",
        content: [
          "V dnešním digitálním světě je vaše webová stránka často prvním dojmem, který potenciální zákazníci o vašem podnikání mají. Moderní, dobře navržená webová stránka není jen příjemný doplněk—je nezbytná pro přežití na stále konkurenčnějším trhu.",
          "## První dojmy jsou důležitější než kdy jindy",
          "Studie ukazují, že uživatelé si vytvoří názor na webovou stránku během 50 milisekund. To je rychlejší než mrknutí oka.",
          "## Mobile-First již není volitelné",
          "S více než 60 % webového provozu z mobilních zařízení je responzivní, mobilně přívětivá webová stránka klíčová.",
          "## Rychlost se rovná příjmům",
          "Rychlost načítání stránky přímo ovlivňuje váš zisk.",
          "## Zabezpečení a důvěra",
          "S rostoucími kybernetickými hrozbami je bezpečnost webových stránek důležitější než kdy jindy.",
          "## Závěr",
          "Investice do moderní webové stránky není výdaj—je to investice do budoucnosti vašeho podnikání.",
        ],
      },
      SK: {
        slug: "preco-vasa-firma-potrebuje-moderny-web-2024",
        title: "Prečo vaša firma potrebuje moderný web v roku 2024",
        excerpt:
          "Objavte kľúčové dôvody, prečo vás zastaraný web môže stáť zákazníkov a ako moderný redizajn môže transformovať vašu online prítomnosť.",
        category: "Webový dizajn",
        tags: ["UX Design", "Podnikanie", "Trendy"],
        date: "5. decembra 2024",
        readTime: "5 min čítania",
        content: [
          "V dnešnom digitálnom svete je vaša webová stránka často prvým dojmom, ktorý potenciálni zákazníci o vašom podnikaní majú. Moderná, dobre navrhnutá webová stránka nie je len príjemný doplnok—je nevyhnutná pre prežitie na stále konkurenčnejšom trhu.",
          "## Prvé dojmy sú dôležitejšie než kedykoľvek predtým",
          "Štúdie ukazujú, že používatelia si vytvoria názor na webovú stránku počas 50 milisekúnd. To je rýchlejšie ako žmurknutie oka.",
          "## Mobile-First už nie je voliteľné",
          "S viac ako 60 % webového prenosu z mobilných zariadení je responzívna, mobilne prívetivá webová stránka kľúčová.",
          "## Rýchlosť sa rovná príjmom",
          "Rýchlosť načítania stránky priamo ovplyvňuje váš zisk.",
          "## Bezpečnosť a dôvera",
          "S rastúcimi kybernetickými hrozbami je bezpečnosť webových stránok dôležitejšia než kedykoľvek predtým.",
          "## Záver",
          "Investícia do modernej webovej stránky nie je výdavok—je to investícia do budúcnosti vášho podnikania.",
        ],
      },
    },
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    author: "Sarah Chen",
    translations: {
      EN: {
        slug: "ecommerce-trends-boost-sales",
        title: "10 E-commerce Trends That Will Boost Your Sales",
        excerpt:
          "From AI-powered recommendations to seamless checkout experiences, learn about the latest trends shaping the future of online retail.",
        category: "E-commerce",
        tags: ["Online Store", "Sales", "AI"],
        date: "Nov 28, 2024",
        readTime: "7 min read",
        content: [
          "The e-commerce landscape is constantly evolving, and staying ahead of the curve is essential for online retailers looking to maximize their sales. Here are the top 10 trends that are reshaping the industry in 2024.",
          "## 1. AI-Powered Personalization",
          "Artificial intelligence is revolutionizing how online stores interact with customers. From personalized product recommendations to dynamic pricing, AI helps create tailored shopping experiences that convert browsers into buyers.",
          "## 2. Social Commerce Integration",
          "Shopping directly through social media platforms is becoming increasingly popular. Instagram Shop, TikTok Shop, and Pinterest's shopping features are making it easier than ever for consumers to purchase products without leaving their favorite apps.",
          "## 3. Augmented Reality Try-On",
          "AR technology allows customers to virtually try on products before purchasing. Whether it's furniture in their living room or sunglasses on their face, AR reduces uncertainty and decreases return rates.",
          "## 4. Voice Commerce",
          "Smart speakers and voice assistants are changing how people shop. Optimizing your e-commerce store for voice search is becoming increasingly important as more consumers embrace hands-free shopping.",
          "## 5. Sustainable Shopping Options",
          "Consumers are increasingly conscious of their environmental impact. Offering eco-friendly products, sustainable packaging, and carbon-neutral shipping options can differentiate your brand and attract environmentally-minded shoppers.",
          "## 6. One-Click Checkout",
          "Reducing friction in the checkout process is crucial for conversion. One-click checkout options, saved payment methods, and streamlined forms help reduce cart abandonment and increase completed purchases.",
          "## 7. Subscription Models",
          "Subscription-based e-commerce continues to grow across all categories. From curated boxes to replenishment services, subscriptions provide predictable revenue and build long-term customer relationships.",
          "## 8. Live Shopping Events",
          "Live streaming commerce, popularized in Asia, is gaining traction globally. These interactive shopping experiences combine entertainment with instant purchasing opportunities.",
          "## 9. Headless Commerce Architecture",
          "Headless e-commerce separates the frontend presentation layer from the backend, enabling greater flexibility in delivering content across multiple channels and devices.",
          "## 10. Advanced Analytics and Insights",
          "Data-driven decision making is essential for e-commerce success. Advanced analytics tools provide deeper insights into customer behavior, helping retailers optimize everything from inventory to marketing spend.",
          "Implementing these trends can significantly boost your online sales and position your business for continued growth in the ever-evolving e-commerce landscape.",
        ],
      },
      CZ: {
        slug: "trendy-ecommerce-zvysi-prodeje",
        title: "10 trendů e-commerce, které zvýší vaše prodeje",
        excerpt:
          "Od AI doporučení po bezproblémové platby - zjistěte nejnovější trendy formující budoucnost online prodeje.",
        category: "E-shop",
        tags: ["Online obchod", "Prodeje", "AI"],
        date: "28. listopadu 2024",
        readTime: "7 min čtení",
        content: [
          "Prostředí e-commerce se neustále vyvíjí a zůstat napřed je nezbytné pro online prodejce, kteří chtějí maximalizovat své prodeje.",
          "## 1. AI personalizace",
          "Umělá inteligence revolucionizuje způsob, jakým online obchody komunikují se zákazníky.",
          "## 2. Integrace sociálního obchodování",
          "Nakupování přímo prostřednictvím sociálních sítí je stále populárnější.",
          "## 3. Rozšířená realita",
          "Technologie AR umožňuje zákazníkům virtuálně vyzkoušet produkty před nákupem.",
          "## 4. Hlasový obchod",
          "Chytré reproduktory a hlasoví asistenti mění způsob, jakým lidé nakupují.",
          "## 5. Udržitelné možnosti nakupování",
          "Spotřebitelé jsou stále více vědomí svého dopadu na životní prostředí.",
        ],
      },
      SK: {
        slug: "trendy-ecommerce-zvysi-predaje",
        title: "10 trendov e-commerce, ktoré zvýšia vaše predaje",
        excerpt:
          "Od AI odporúčaní po bezproblémové platby - zistite najnovšie trendy formujúce budúcnosť online predaja.",
        category: "E-shop",
        tags: ["Online obchod", "Predaje", "AI"],
        date: "28. novembra 2024",
        readTime: "7 min čítania",
        content: [
          "Prostredie e-commerce sa neustále vyvíja a zostať vpredu je nevyhnutné pre online predajcov, ktorí chcú maximalizovať svoje predaje.",
          "## 1. AI personalizácia",
          "Umelá inteligencia revolucionizuje spôsob, akým online obchody komunikujú so zákazníkmi.",
          "## 2. Integrácia sociálneho obchodovania",
          "Nakupovanie priamo prostredníctvom sociálnych sietí je stále populárnejšie.",
          "## 3. Rozšírená realita",
          "Technológia AR umožňuje zákazníkom virtuálne vyskúšať produkty pred nákupom.",
          "## 4. Hlasový obchod",
          "Inteligentné reproduktory a hlasoví asistenti menia spôsob, akým ľudia nakupujú.",
          "## 5. Udržateľné možnosti nakupovania",
          "Spotrebitelia sú stále viac uvedomelí o svojom dopade na životné prostredie.",
        ],
      },
    },
  },
  {
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=600&fit=crop",
    author: "Mike Peters",
    translations: {
      EN: {
        slug: "seo-strategies-small-business",
        title: "SEO Strategies Every Small Business Should Know",
        excerpt:
          "Master the fundamentals of search engine optimization and learn how to outrank your competitors without breaking the bank.",
        category: "Marketing",
        tags: ["SEO", "Small Business", "Google"],
        date: "Nov 20, 2024",
        readTime: "6 min read",
        content: [
          "Search engine optimization doesn't have to be complicated or expensive. With the right strategies, small businesses can compete with larger competitors and capture valuable organic traffic.",
          "## Understanding the Basics",
          "SEO is the practice of optimizing your website to rank higher in search engine results pages (SERPs). Higher rankings mean more visibility, more traffic, and ultimately more customers.",
          "## Keyword Research: The Foundation",
          "Every successful SEO strategy starts with keyword research. Identify the terms and phrases your potential customers are searching for, and optimize your content around these keywords.",
          "Focus on long-tail keywords—longer, more specific phrases that are easier to rank for and often indicate higher purchase intent.",
          "## On-Page Optimization",
          "Ensure every page on your website is optimized for search engines. This includes using keywords in titles, headers, and meta descriptions, as well as ensuring your content is valuable and relevant to searchers.",
          "## Local SEO for Small Businesses",
          "If you serve a local market, local SEO is crucial. Claim and optimize your Google Business Profile, encourage customer reviews, and ensure your name, address, and phone number are consistent across all online directories.",
          "## Content Marketing",
          "Creating valuable, informative content helps establish your expertise and attracts organic links. Blog posts, guides, and how-to articles can drive significant traffic and improve your overall search rankings.",
          "## Technical SEO Fundamentals",
          "Ensure your website loads quickly, is mobile-friendly, and is easy for search engines to crawl and index. Fix broken links, create a clear site structure, and implement proper schema markup.",
          "## Building Quality Backlinks",
          "Links from other reputable websites signal to search engines that your site is trustworthy and authoritative. Focus on earning links through quality content, partnerships, and community involvement.",
          "## Measuring Success",
          "Use tools like Google Analytics and Google Search Console to track your SEO progress. Monitor rankings, organic traffic, and conversions to understand what's working and where to improve.",
          "With consistent effort and the right approach, SEO can be one of the most cost-effective marketing strategies for small businesses.",
        ],
      },
      CZ: {
        slug: "seo-strategie-pro-male-podniky",
        title: "SEO strategie, které by měl znát každý malý podnik",
        excerpt: "Zvládněte základy optimalizace pro vyhledávače a naučte se překonat konkurenci bez velkých nákladů.",
        category: "Marketing",
        tags: ["SEO", "Malé podniky", "Google"],
        date: "20. listopadu 2024",
        readTime: "6 min čtení",
        content: [
          "Optimalizace pro vyhledávače nemusí být složitá ani drahá. Se správnými strategiemi mohou malé podniky konkurovat větším konkurentům.",
          "## Pochopení základů",
          "SEO je praxe optimalizace vašeho webu pro vyšší pozice ve výsledcích vyhledávání.",
          "## Výzkum klíčových slov: Základ",
          "Každá úspěšná SEO strategie začíná výzkumem klíčových slov.",
          "## On-Page optimalizace",
          "Zajistěte, aby každá stránka vašeho webu byla optimalizována pro vyhledávače.",
          "## Lokální SEO pro malé podniky",
          "Pokud obsluhujete místní trh, lokální SEO je klíčové.",
        ],
      },
      SK: {
        slug: "seo-strategie-pre-male-podniky",
        title: "SEO stratégie, ktoré by mal poznať každý malý podnik",
        excerpt:
          "Zvládnite základy optimalizácie pre vyhľadávače a naučte sa prekonať konkurenciu bez veľkých nákladov.",
        category: "Marketing",
        tags: ["SEO", "Malé podniky", "Google"],
        date: "20. novembra 2024",
        readTime: "6 min čítania",
        content: [
          "Optimalizácia pre vyhľadávače nemusí byť zložitá ani drahá. So správnymi stratégiami môžu malé podniky konkurovať väčším konkurentom.",
          "## Pochopenie základov",
          "SEO je prax optimalizácie vášho webu pre vyššie pozície vo výsledkoch vyhľadávania.",
          "## Výskum kľúčových slov: Základ",
          "Každá úspešná SEO stratégia začína výskumom kľúčových slov.",
          "## On-Page optimalizácia",
          "Zaistite, aby každá stránka vášho webu bola optimalizovaná pre vyhľadávače.",
          "## Lokálne SEO pre malé podniky",
          "Ak obsluhujete miestny trh, lokálne SEO je kľúčové.",
        ],
      },
    },
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    author: "Emma Wilson",
    translations: {
      EN: {
        slug: "importance-mobile-first-design",
        title: "The Importance of Mobile-First Design",
        excerpt:
          "With over 60% of web traffic coming from mobile devices, learn why designing for mobile first is no longer optional.",
        category: "Web Design",
        tags: ["Mobile", "Responsive", "UX Design"],
        date: "Nov 15, 2024",
        readTime: "4 min read",
        content: [
          "Mobile devices have fundamentally changed how people access the internet. If your website isn't designed with mobile users in mind, you're missing out on the majority of your potential audience.",
          "## What Is Mobile-First Design?",
          "Mobile-first design is an approach where you start by designing for the smallest screens first, then progressively enhance the experience for larger devices. This ensures that the mobile experience is never an afterthought.",
          "## The Mobile Traffic Reality",
          "Over 60% of global web traffic now comes from mobile devices. In some markets, that number is even higher. Ignoring mobile users means ignoring the majority of your potential customers.",
          "## Google's Mobile-First Indexing",
          "Google now primarily uses the mobile version of your website for indexing and ranking. If your mobile site is inferior to your desktop site, your search rankings will suffer across all devices.",
          "## Better User Experience",
          "Mobile-first design forces you to focus on what's truly important. With limited screen real estate, you must prioritize content and functionality, resulting in a cleaner, more focused experience for all users.",
          "## Faster Load Times",
          "Designing for mobile means optimizing for slower connections and less powerful devices. This focus on performance benefits all users, as the fastest-loading websites are often those built with mobile in mind.",
          "## Key Mobile-First Principles",
          "Touch-friendly interfaces, readable text without zooming, fast load times, and simplified navigation are all essential components of effective mobile-first design.",
          "## Responsive vs. Mobile-First",
          "While responsive design adapts a desktop site to mobile, mobile-first starts with mobile and expands to desktop. The mobile-first approach typically results in better mobile experiences and cleaner code.",
          "Embracing mobile-first design isn't just about keeping up with trends—it's about meeting your users where they are and providing them with the best possible experience.",
        ],
      },
      CZ: {
        slug: "dulezitost-mobile-first-designu",
        title: "Důležitost Mobile-First designu",
        excerpt: "S více než 60 % webového provozu z mobilních zařízení zjistěte, proč je design pro mobily nezbytný.",
        category: "Webový design",
        tags: ["Mobil", "Responzivní", "UX Design"],
        date: "15. listopadu 2024",
        readTime: "4 min čtení",
        content: [
          "Mobilní zařízení zásadně změnila způsob, jakým lidé přistupují k internetu.",
          "## Co je Mobile-First design?",
          "Mobile-first design je přístup, kdy začínáte navrhovat pro nejmenší obrazovky.",
          "## Realita mobilního provozu",
          "Více než 60 % globálního webového provozu nyní pochází z mobilních zařízení.",
          "## Mobilní indexování Google",
          "Google nyní primárně používá mobilní verzi vašeho webu pro indexování a hodnocení.",
          "## Lepší uživatelský zážitek",
          "Mobile-first design vás nutí soustředit se na to, co je skutečně důležité.",
        ],
      },
      SK: {
        slug: "dolezitost-mobile-first-dizajnu",
        title: "Dôležitosť Mobile-First dizajnu",
        excerpt:
          "S viac ako 60 % webového prenosu z mobilných zariadení zistite, prečo je dizajn pre mobily nevyhnutný.",
        category: "Webový dizajn",
        tags: ["Mobil", "Responzívny", "UX Design"],
        date: "15. novembra 2024",
        readTime: "4 min čítania",
        content: [
          "Mobilné zariadenia zásadne zmenili spôsob, akým ľudia pristupujú k internetu.",
          "## Čo je Mobile-First dizajn?",
          "Mobile-first dizajn je prístup, kedy začínate navrhovať pre najmenšie obrazovky.",
          "## Realita mobilného prenosu",
          "Viac ako 60 % globálneho webového prenosu teraz pochádza z mobilných zariadení.",
          "## Mobilné indexovanie Google",
          "Google teraz primárne používa mobilnú verziu vášho webu pre indexovanie a hodnotenie.",
          "## Lepší používateľský zážitok",
          "Mobile-first dizajn vás núti sústrediť sa na to, čo je skutočne dôležité.",
        ],
      },
    },
  },
  {
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    author: "Alex Johnson",
    translations: {
      EN: {
        slug: "wordpress-vs-custom-development",
        title: "WordPress vs Custom Development: Which Is Right for You?",
        excerpt:
          "A comprehensive comparison to help you choose the best approach for your next web project based on your needs and budget.",
        category: "Development",
        tags: ["WordPress", "Coding", "CMS"],
        date: "Nov 10, 2024",
        readTime: "8 min read",
        content: [
          "Choosing between WordPress and custom development is one of the most important decisions you'll make for your web project. Both approaches have their merits, and the right choice depends on your specific needs, budget, and goals.",
          "## Understanding WordPress",
          "WordPress powers over 40% of all websites on the internet. It's a flexible content management system that can be customized through themes and plugins to suit a wide range of needs.",
          "## Benefits of WordPress",
          "WordPress offers a lower initial cost, faster time to launch, and a user-friendly interface for content management. With thousands of plugins available, you can add functionality without custom coding.",
          "## Limitations of WordPress",
          "Performance can be a concern with heavy plugin use. Security requires constant attention with regular updates. And while WordPress is flexible, truly unique functionality may require custom plugin development.",
          "## Understanding Custom Development",
          "Custom development means building your website from scratch, tailored precisely to your requirements. This approach offers maximum flexibility and control over every aspect of your site.",
          "## Benefits of Custom Development",
          "Custom sites can be optimized for peak performance. You have complete control over security implementations. And you can build exactly the features you need without the bloat of unnecessary functionality.",
          "## Limitations of Custom Development",
          "Higher initial costs, longer development timelines, and the need for technical expertise for ongoing maintenance are all considerations with custom development.",
          "## Making the Decision",
          "Choose WordPress if you need a content-focused site with standard functionality and want to minimize initial investment. Choose custom development if you need unique features, maximum performance, or plan to scale significantly.",
          "## The Hybrid Approach",
          "Many businesses find success with a hybrid approach—using WordPress for content management while incorporating custom-developed components for unique functionality.",
          "Ultimately, the best choice depends on your specific situation. Consider your budget, timeline, technical resources, and long-term goals when making this important decision.",
        ],
      },
      CZ: {
        slug: "wordpress-vs-vlastni-vyvoj",
        title: "WordPress vs vlastní vývoj: Co je pro vás správné?",
        excerpt: "Komplexní srovnání, které vám pomůže vybrat nejlepší přístup pro váš webový projekt.",
        category: "Vývoj",
        tags: ["WordPress", "Kódování", "CMS"],
        date: "10. listopadu 2024",
        readTime: "8 min čtení",
        content: [
          "Volba mezi WordPress a vlastním vývojem je jedním z nejdůležitějších rozhodnutí pro váš webový projekt.",
          "## Pochopení WordPress",
          "WordPress pohání více než 40 % všech webových stránek na internetu.",
          "## Výhody WordPress",
          "WordPress nabízí nižší počáteční náklady, rychlejší spuštění a uživatelsky přívětivé rozhraní.",
          "## Omezení WordPress",
          "Výkon může být problémem při intenzivním používání pluginů.",
          "## Pochopení vlastního vývoje",
          "Vlastní vývoj znamená budování vašeho webu od základů, přesně podle vašich požadavků.",
          "## Výhody vlastního vývoje",
          "Vlastní weby mohou být optimalizovány pro špičkový výkon.",
        ],
      },
      SK: {
        slug: "wordpress-vs-vlastny-vyvoj",
        title: "WordPress vs vlastný vývoj: Čo je pre vás správne?",
        excerpt: "Komplexné porovnanie, ktoré vám pomôže vybrať najlepší prístup pre váš webový projekt.",
        category: "Vývoj",
        tags: ["WordPress", "Kódovanie", "CMS"],
        date: "10. novembra 2024",
        readTime: "8 min čítania",
        content: [
          "Voľba medzi WordPress a vlastným vývojom je jedným z najdôležitejších rozhodnutí pre váš webový projekt.",
          "## Pochopenie WordPress",
          "WordPress poháňa viac ako 40 % všetkých webových stránok na internete.",
          "## Výhody WordPress",
          "WordPress ponúka nižšie počiatočné náklady, rýchlejšie spustenie a používateľsky prívetivé rozhranie.",
          "## Obmedzenia WordPress",
          "Výkon môže byť problémom pri intenzívnom používaní pluginov.",
          "## Pochopenie vlastného vývoja",
          "Vlastný vývoj znamená budovanie vášho webu od základov, presne podľa vašich požiadaviek.",
          "## Výhody vlastného vývoja",
          "Vlastné weby môžu byť optimalizované pre špičkový výkon.",
        ],
      },
    },
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
    author: "Sarah Chen",
    translations: {
      EN: {
        slug: "building-brand-identity-online",
        title: "Building a Strong Brand Identity Online",
        excerpt:
          "Learn how to create a cohesive brand presence across all digital touchpoints that resonates with your target audience.",
        category: "Branding",
        tags: ["Identity", "Strategy", "Visual Design"],
        date: "Nov 5, 2024",
        readTime: "5 min read",
        content: [
          "In the crowded digital marketplace, a strong brand identity is what sets you apart from competitors. It's more than just a logo—it's the complete experience customers have with your business online.",
          "## What Is Brand Identity?",
          "Brand identity encompasses all the visual and messaging elements that represent your business. This includes your logo, color palette, typography, imagery style, tone of voice, and the overall personality you project online.",
          "## Why Brand Identity Matters Online",
          "In the physical world, customers can experience your brand through store design, product packaging, and personal interactions. Online, your brand identity must work harder to convey who you are and what you stand for.",
          "## Consistency Across Channels",
          "Your brand should be instantly recognizable whether someone encounters you on your website, social media, email, or online advertising. Consistency builds trust and reinforces brand recall.",
          "## Defining Your Brand Values",
          "Before designing any visual elements, clearly define what your brand stands for. What are your core values? What makes you different from competitors? What emotional connection do you want to create?",
          "## Visual Identity Elements",
          "Your logo, color scheme, and typography should work together to create a cohesive visual language. These elements should be versatile enough to work across all digital platforms while remaining distinctive and memorable.",
          "## Voice and Messaging",
          "How you communicate is just as important as how you look. Develop a consistent tone of voice that reflects your brand personality and resonates with your target audience.",
          "## Brand Guidelines",
          "Create comprehensive brand guidelines that document all aspects of your brand identity. This ensures consistency across all team members and external partners who create content for your brand.",
          "Building a strong brand identity takes time and intention, but the payoff is immense—increased recognition, customer loyalty, and the ability to command premium pricing in your market.",
        ],
      },
      CZ: {
        slug: "budovani-silne-znackove-identity-online",
        title: "Budování silné značkové identity online",
        excerpt: "Naučte se vytvořit soudržnou přítomnost značky napříč všemi digitálními kanály.",
        category: "Branding",
        tags: ["Identita", "Strategie", "Vizuální design"],
        date: "5. listopadu 2024",
        readTime: "5 min čtení",
        content: [
          "Na přeplněném digitálním trhu je silná značková identita to, co vás odlišuje od konkurence.",
          "## Co je značková identita?",
          "Značková identita zahrnuje všechny vizuální a komunikační prvky, které reprezentují vaše podnikání.",
          "## Proč záleží na značkové identitě online",
          "Ve fyzickém světě mohou zákazníci zažít vaši značku prostřednictvím designu obchodu a osobních interakcí.",
          "## Konzistence napříč kanály",
          "Vaše značka by měla být okamžitě rozpoznatelná, ať už někdo narazí na váš web, sociální sítě nebo reklamu.",
        ],
      },
      SK: {
        slug: "budovanie-silnej-znackovej-identity-online",
        title: "Budovanie silnej značkovej identity online",
        excerpt: "Naučte sa vytvoriť súdržnú prítomnosť značky naprieč všetkými digitálnymi kanálmi.",
        category: "Branding",
        tags: ["Identita", "Stratégia", "Vizuálny dizajn"],
        date: "5. novembra 2024",
        readTime: "5 min čítania",
        content: [
          "Na preplnenom digitálnom trhu je silná značková identita to, čo vás odlišuje od konkurencie.",
          "## Čo je značková identita?",
          "Značková identita zahŕňa všetky vizuálne a komunikačné prvky, ktoré reprezentujú vaše podnikanie.",
          "## Prečo záleží na značkovej identite online",
          "Vo fyzickom svete môžu zákazníci zažiť vašu značku prostredníctvom dizajnu obchodu a osobných interakcií.",
          "## Konzistencia naprieč kanálmi",
          "Vaša značka by mala byť okamžite rozpoznateľná, či už niekto narazí na váš web, sociálne siete alebo reklamu.",
        ],
      },
    },
  },
];

// Helper function to get blog post by slug for a specific language
export const getBlogPost = (slug: string, language: "EN" | "CZ" | "SK" = "EN"): BlogPost | undefined => {
  // Find post by matching slug in the specific language
  const post = blogPostsData.find((p) => p.translations[language].slug === slug);
  if (!post) return undefined;

  const translation = post.translations[language];
  return {
    slug: translation.slug,
    title: translation.title,
    excerpt: translation.excerpt,
    image: post.image,
    category: translation.category,
    tags: translation.tags,
    author: post.author,
    date: translation.date,
    readTime: translation.readTime,
    content: translation.content,
  };
};

// Helper function to get all blog posts for listing (with language support)
export const getBlogPostsList = (language: "EN" | "CZ" | "SK" = "EN") => {
  return blogPostsData.map((post) => ({
    slug: post.translations[language].slug,
    title: post.translations[language].title,
    excerpt: post.translations[language].excerpt,
    image: post.image,
    category: post.translations[language].category,
    tags: post.translations[language].tags,
    author: post.author,
    date: post.translations[language].date,
    readTime: post.translations[language].readTime,
  }));
};

// Get translated categories for filter buttons
export const getCategories = (language: "EN" | "CZ" | "SK" = "EN") => {
  return categoriesTranslations[language];
};
