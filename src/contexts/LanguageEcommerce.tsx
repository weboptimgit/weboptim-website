// src/contexts/LanguageEcommerce.tsx
import { createContext, useContext } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

type FaqItem = { question: string; answer: string };

type PlatformItem = {
  name: string;
  icon: string;
  description: string;
  highlight?: boolean;
  // color necháme v page (je vizuál), netreba preklad
};

type MetricItem = { value: string; label: string };

type FeatureItem = { title: string; description: string };

type ProcessStep = { step: string; title: string; description: string; duration: string };

type PackageItem = { name: string; description: string; price: string; features: string[]; popular?: boolean };

export type EcommerceLang = {
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
  animatedCart: {
    title: string;
    itemsLabel: string;
    qtyLabel: string;
    totalLabel: string;
    checkout: string;
    secureBadge: string;
    products: Array<{ name: string; price: string; qty: number }>;
    totalValue: string;
  };
  platforms: {
    title: string;
    subtitle: string;
    popularBadge: string;
    items: PlatformItem[];
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

const translations: Record<Language, EcommerceLang> = {
  EN: {
    seo: {
      title: "E-Commerce Website Development | WebOptim",
      description:
        "We build high-converting e-shops with WooCommerce, Shopify, Shoptet, or custom solutions. Payments, shipping, SEO, analytics and growth ready.",
    },
    hero: {
      badge: "E-Commerce Solutions",
      title1: "Build Your",
      title2: "Online Store",
      subtitle:
        "Powerful online stores with seamless checkout experiences that maximize conversions and sales.",
      ctaPrimary: "Start Selling Online",
      ctaSecondary: "View E-Shop Projects",
    },
    metrics: [
      { value: "500+", label: "E-shops Launched" },
      { value: "€2M+", label: "Revenue Generated" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.9", label: "Client Rating" },
    ],
    animatedCart: {
      title: "Your Cart",
      itemsLabel: "3 items",
      qtyLabel: "Qty",
      totalLabel: "Total",
      checkout: "Checkout →",
      secureBadge: "Secure Checkout",
      products: [
        { name: "Premium Widget", price: "€49.99", qty: 2 },
        { name: "Pro Gadget", price: "€129.00", qty: 1 },
      ],
      totalValue: "€228.98",
    },
    platforms: {
      title: "Multi-Platform Expertise",
      subtitle: "We work with the platforms that fit your business best",
      popularBadge: "Popular",
      items: [
        { name: "WooCommerce", icon: "🛒", description: "WordPress power", highlight: true },
        { name: "Shoptet", icon: "🏪", description: "Czech favorite" },
        { name: "Upgates", icon: "🚀", description: "Modern SaaS" },
        { name: "Shopify", icon: "💎", description: "Global leader" },
        { name: "Custom", icon: "⚡", description: "Built for you" },
      ],
    },
    features: {
      title: "Everything Your Store Needs",
      subtitle:
        "Complete e-commerce solutions with all the features to run a successful online business",
      items: [
        { title: "Product Catalog", description: "Unlimited products with variants, categories & smart filters" },
        { title: "Payment Gateways", description: "Cards, PayPal, Apple Pay, Google Pay & local methods" },
        { title: "Smart Shipping", description: "Real-time rates, tracking & carrier integrations" },
        { title: "SEO & Marketing", description: "Built-in SEO, email marketing & social integrations" },
        { title: "Analytics", description: "Real-time insights, conversion tracking & reports" },
        { title: "Security", description: "SSL, PCI compliance & fraud protection" },
      ],
    },
    process: {
      title: "From Idea to Sales",
      subtitle: "Our proven process gets your online store up and running fast",
      steps: [
        { step: "01", title: "Discovery", description: "Understanding your products, market & goals", duration: "1-2 days" },
        { step: "02", title: "Platform Selection", description: "Choosing the perfect e-commerce solution", duration: "1 day" },
        { step: "03", title: "Design & UX", description: "Creating a conversion-focused storefront", duration: "1-2 weeks" },
        { step: "04", title: "Development", description: "Building your custom online store", duration: "2-4 weeks" },
        { step: "05", title: "Product Setup", description: "Importing catalog & configuring inventory", duration: "3-5 days" },
        { step: "06", title: "Launch", description: "Going live with ongoing support", duration: "Ongoing" },
      ],
    },
    pricing: {
      title: "E-Shop Packages",
      subtitle: "Transparent pricing for every business size",
      popularBadge: "Most Popular",
      cta: "Get Started",
      packages: [
        {
          name: "Starter Shop",
          description: "Perfect for new businesses",
          price: "From €2,000",
          features: ["Up to 100 products", "Basic design", "Payment setup", "Shipping config", "1 month support"],
        },
        {
          name: "Growth Shop",
          description: "For scaling businesses",
          price: "From €5,000",
          popular: true,
          features: ["Unlimited products", "Custom design", "Multi-payment", "Marketing tools", "Analytics", "3 months support"],
        },
        {
          name: "Enterprise",
          description: "Full-scale solution",
          price: "Custom",
          features: ["Custom features", "API integrations", "Multi-currency", "Priority support", "Performance SLA", "Dedicated team"],
        },
      ],
    },
    reviews: {
      title: "What Our Clients Say",
      subtitle: "See what e-commerce businesses say about their online stores.",
    },
    faq: {
      serviceName: "E-Commerce",
      title: "Frequently Asked Questions",
      subtitle: "Common questions about our e-commerce services.",
      items: [
        {
          question: "Which e-commerce platform is best for me?",
          answer:
            "It depends on your needs. WooCommerce is great for WordPress users wanting flexibility. Shopify is ideal for quick setup. Shoptet and Upgates are popular in Czech/Slovak markets. We help you choose the right platform during consultation.",
        },
        {
          question: "Can you migrate my existing e-shop?",
          answer:
            "Yes, we handle complete migrations including products, customers, orders, and SEO. We ensure minimal downtime and preserve your search rankings.",
        },
        {
          question: "Do you integrate payment gateways?",
          answer:
            "We integrate all major payment providers including Stripe, PayPal, GoPay, Comgate, and local bank transfers. We also set up invoice generation.",
        },
        {
          question: "How do you handle shipping integration?",
          answer:
            "We integrate with carriers like Zásilkovna, PPL, DPD, Česká pošta, and more. Including real-time shipping rates and tracking.",
        },
        {
          question: "What about inventory management?",
          answer:
            "We set up inventory tracking, low-stock alerts, and can integrate with ERP systems like Pohoda, Money S3, or custom solutions.",
        },
      ],
    },
    ctaBottom: {
      titleBefore: "Ready to Start",
      titleHighlight: "Selling",
      subtitle: "Let's build an online store that converts visitors into customers and grows your business",
      primary: "Launch Your E-Shop",
      secondary: "View E-Shop Projects",
    },
  },

  CZ: {
    seo: {
      title: "Tvorba e-shopu | WebOptim",
      description:
        "Tvoříme e-shopy s vysokými konverzemi (WooCommerce, Shopify, Shoptet i řešení na míru). Platby, doprava, SEO, analytika a růst.",
    },
    hero: {
      badge: "E-Commerce řešení",
      title1: "Vytvořte svůj",
      title2: "E-shop",
      subtitle:
        "Výkonné e-shopy s plynulým nákupním procesem, které maximalizují konverze a prodeje.",
      ctaPrimary: "Začít prodávat online",
      ctaSecondary: "Projekty e-shopů",
    },
    metrics: [
      { value: "500+", label: "Spuštěných e-shopů" },
      { value: "€2M+", label: "Vygenerované tržby" },
      { value: "99.9%", label: "Dostupnost" },
      { value: "4.9", label: "Hodnocení klientů" },
    ],
    animatedCart: {
      title: "Košík",
      itemsLabel: "3 položky",
      qtyLabel: "Ks",
      totalLabel: "Celkem",
      checkout: "Pokračovat →",
      secureBadge: "Bezpečná platba",
      products: [
        { name: "Premium Widget", price: "€49.99", qty: 2 },
        { name: "Pro Gadget", price: "€129.00", qty: 1 },
      ],
      totalValue: "€228.98",
    },
    platforms: {
      title: "Zkušenosti s více platformami",
      subtitle: "Doporučíme platformu, která sedí vašemu byznysu nejlépe",
      popularBadge: "Nejčastěji",
      items: [
        { name: "WooCommerce", icon: "🛒", description: "Síla WordPressu", highlight: true },
        { name: "Shoptet", icon: "🏪", description: "Česká jednička" },
        { name: "Upgates", icon: "🚀", description: "Moderní SaaS" },
        { name: "Shopify", icon: "💎", description: "Globální lídr" },
        { name: "Custom", icon: "⚡", description: "Na míru" },
      ],
    },
    features: {
      title: "Vše, co e-shop potřebuje",
      subtitle: "Kompletní e-commerce řešení se všemi funkcemi pro úspěšný prodej",
      items: [
        { title: "Katalog produktů", description: "Neomezené produkty, varianty, kategorie i chytré filtry" },
        { title: "Platební brány", description: "Karty, PayPal, Apple Pay, Google Pay i lokální metody" },
        { title: "Chytrá doprava", description: "Aktuální ceny dopravy, tracking a integrace dopravců" },
        { title: "SEO & marketing", description: "SEO, e-mailing a propojení se sociálními sítěmi" },
        { title: "Analytika", description: "Měření konverzí, přehledy a reporting v reálném čase" },
        { title: "Bezpečnost", description: "SSL, PCI compliance a ochrana proti podvodům" },
      ],
    },
    process: {
      title: "Od nápadu k prodejům",
      subtitle: "Ověřený proces, díky kterému spustíme e-shop rychle a bez stresu",
      steps: [
        { step: "01", title: "Analýza", description: "Poznáme produkty, trh a cíle", duration: "1–2 dny" },
        { step: "02", title: "Volba platformy", description: "Vybereme ideální e-commerce řešení", duration: "1 den" },
        { step: "03", title: "Design & UX", description: "Návrh storefrontu zaměřeného na konverze", duration: "1–2 týdny" },
        { step: "04", title: "Vývoj", description: "Vývoj a implementace e-shopu", duration: "2–4 týdny" },
        { step: "05", title: "Nastavení produktů", description: "Import katalogu a nastavení skladu", duration: "3–5 dnů" },
        { step: "06", title: "Spuštění", description: "Spuštění + průběžná podpora", duration: "Dlouhodobě" },
      ],
    },
    pricing: {
      title: "Balíčky pro e-shop",
      subtitle: "Transparentní ceny pro každou velikost podnikání",
      popularBadge: "Nejoblíbenější",
      cta: "Začít",
      packages: [
        {
          name: "Starter Shop",
          description: "Ideální pro začátek",
          price: "Od 2 000 €",
          features: ["Do 100 produktů", "Základní design", "Nastavení plateb", "Nastavení dopravy", "1 měsíc podpory"],
        },
        {
          name: "Growth Shop",
          description: "Pro růstové firmy",
          price: "Od 5 000 €",
          popular: true,
          features: ["Neomezeně produktů", "Design na míru", "Více platebních metod", "Marketingové nástroje", "Analytika", "3 měsíce podpory"],
        },
        {
          name: "Enterprise",
          description: "Komplexní řešení",
          price: "Na míru",
          features: ["Funkce na míru", "API integrace", "Více měn", "Prioritní podpora", "Performance SLA", "Dedikovaný tým"],
        },
      ],
    },
    reviews: {
      title: "Co říkají klienti",
      subtitle: "Přečtěte si zkušenosti e-commerce klientů s jejich novým e-shopem.",
    },
    faq: {
      serviceName: "E-Commerce",
      title: "Časté dotazy",
      subtitle: "Nejčastější otázky k tvorbě e-shopu.",
      items: [
        {
          question: "Která platforma je pro mě nejlepší?",
          answer:
            "Záleží na potřebách. WooCommerce je skvělý pro WordPress a flexibilitu, Shopify pro rychlé spuštění. Shoptet a Upgates jsou populární v CZ/SK. S výběrem pomůžeme na konzultaci.",
        },
        {
          question: "Zvládnete migraci stávajícího e-shopu?",
          answer:
            "Ano. Migrujeme produkty, zákazníky, objednávky i SEO. Minimalizujeme výpadek a zachováme pozice ve vyhledávání.",
        },
        {
          question: "Integrujete platební brány?",
          answer:
            "Ano – Stripe, PayPal, GoPay, Comgate i bankovní převody. Nastavíme i fakturaci.",
        },
        {
          question: "Jak řešíte dopravu a dopravce?",
          answer:
            "Integrujeme dopravce jako Zásilkovna, PPL, DPD, Česká pošta a další včetně trackingu a cen dopravy.",
        },
        {
          question: "Co sklad a napojení na systémy?",
          answer:
            "Nastavíme sklad, upozornění na nízký stav a umíme napojit ERP (Pohoda, Money S3) nebo řešení na míru.",
        },
      ],
    },
    ctaBottom: {
      titleBefore: "Připraveni",
      titleHighlight: "prodávat",
      subtitle: "Postavíme e-shop, který mění návštěvníky na zákazníky a podporuje růst",
      primary: "Spustit e-shop",
      secondary: "Projekty e-shopů",
    },
  },

  SK: {
    seo: {
      title: "Tvorba e-shopu | WebOptim",
      description:
        "Tvoríme e-shopy s vysokými konverziami (WooCommerce, Shopify, Shoptet aj riešenia na mieru). Platby, doprava, SEO, analytika a rast.",
    },
    hero: {
      badge: "E-Commerce riešenia",
      title1: "Vytvorte si",
      title2: "E-shop",
      subtitle:
        "Výkonné WooCommerce e-shopy s plynulým nákupným procesom, ktoré maximalizujú konverzie a predaje.",
      ctaPrimary: "Začať predávať online",
      ctaSecondary: "Pozrieť e-shop projekty",
    },
    metrics: [
      { value: "500+", label: "Spustených e-shopov" },
      { value: "€2M+", label: "Vygenerované tržby" },
      { value: "99.9%", label: "Dostupnosť" },
      { value: "4.9", label: "Hodnotenie klientov" },
    ],
    animatedCart: {
      title: "Košík",
      itemsLabel: "3 položky",
      qtyLabel: "Ks",
      totalLabel: "Spolu",
      checkout: "Pokračovať →",
      secureBadge: "Bezpečná platba",
      products: [
        { name: "Premium Widget", price: "€49.99", qty: 2 },
        { name: "Pro Gadget", price: "€129.00", qty: 1 },
      ],
      totalValue: "€228.98",
    },
    platforms: {
      title: "Skúsenosti s viacerými platformami",
      subtitle: "Vyberieme platformu, ktorá najlepšie sedí vášmu biznisu",
      popularBadge: "Najčastejšie",
      items: [
        { name: "WooCommerce", icon: "🛒", description: "Sila WordPressu", highlight: true },
        { name: "Shoptet", icon: "🏪", description: "Obľúbené v CZ/SK" },
        { name: "Upgates", icon: "🚀", description: "Moderné SaaS" },
        { name: "Shopify", icon: "💎", description: "Globálny líder" },
        { name: "Custom", icon: "⚡", description: "Na mieru" },
      ],
    },
    features: {
      title: "Všetko, čo e-shop potrebuje",
      subtitle: "Kompletné riešenie so všetkými funkciami pre úspešný online predaj",
      items: [
        { title: "Katalóg produktov", description: "Neobmedzené produkty, varianty, kategórie a smart filtre" },
        { title: "Platobné brány", description: "Karty, PayPal, Apple Pay, Google Pay aj lokálne metódy" },
        { title: "Smart doprava", description: "Aktuálne ceny, tracking a integrácie dopravcov" },
        { title: "SEO & marketing", description: "SEO, e-mail marketing a prepojenie so sociálnymi sieťami" },
        { title: "Analytika", description: "Meranie konverzií, reporty a insighty v reálnom čase" },
        { title: "Bezpečnosť", description: "SSL, PCI compliance a ochrana proti podvodom" },
      ],
    },
    process: {
      title: "Od nápadu k predajom",
      subtitle: "Overený proces, vďaka ktorému spustíme e-shop rýchlo a bez stresu",
      steps: [
        { step: "01", title: "Analýza", description: "Pochopenie produktov, trhu a cieľov", duration: "1–2 dni" },
        { step: "02", title: "Výber platformy", description: "Zvolíme ideálne e-commerce riešenie", duration: "1 deň" },
        { step: "03", title: "Dizajn & UX", description: "Návrh storefrontu zameraného na konverzie", duration: "1–2 týždne" },
        { step: "04", title: "Vývoj", description: "Vývoj a implementácia e-shopu", duration: "2–4 týždne" },
        { step: "05", title: "Nastavenie produktov", description: "Import katalógu a nastavenie skladu", duration: "3–5 dní" },
        { step: "06", title: "Spustenie", description: "Spustenie + priebežná podpora", duration: "Dlhodobo" },
      ],
    },
    pricing: {
      title: "Balíčky pre e-shop",
      subtitle: "Transparentné ceny pre každú veľkosť podnikania",
      popularBadge: "Najobľúbenejší",
      cta: "Začať",
      packages: [
        {
          name: "Starter Shop",
          description: "Ideálne na štart",
          price: "Od 2 000 €",
          features: ["Do 100 produktov", "Základný dizajn", "Nastavenie platieb", "Nastavenie dopravy", "1 mesiac podpory"],
        },
        {
          name: "Growth Shop",
          description: "Pre rastúce firmy",
          price: "Od 5 000 €",
          popular: true,
          features: ["Neobmedzene produktov", "Dizajn na mieru", "Viac platobných metód", "Marketingové nástroje", "Analytika", "3 mesiace podpory"],
        },
        {
          name: "Enterprise",
          description: "Komplexné riešenie",
          price: "Na mieru",
          features: ["Funkcie na mieru", "API integrácie", "Multi-currency", "Prioritná podpora", "Performance SLA", "Dedikovaný tím"],
        },
      ],
    },
    reviews: {
      title: "Čo hovoria klienti",
      subtitle: "Pozrite si, čo hovoria e-commerce firmy o svojich nových e-shopoch.",
    },
    faq: {
      serviceName: "E-Commerce",
      title: "Časté otázky",
      subtitle: "Najčastejšie otázky k tvorbe e-shopu.",
      items: [
        {
          question: "Ktorá platforma je pre mňa najlepšia?",
          answer:
            "Záleží od potrieb. WooCommerce je skvelý pre WordPress a flexibilitu, Shopify pre rýchle spustenie. Shoptet a Upgates sú populárne v CZ/SK. S výberom pomôžeme na konzultácii.",
        },
        {
          question: "Viete migrovať existujúci e-shop?",
          answer:
            "Áno. Migrujeme produkty, zákazníkov, objednávky aj SEO. Minimalizujeme výpadok a zachováme pozície vo vyhľadávaní.",
        },
        {
          question: "Integrujete platobné brány?",
          answer:
            "Áno – Stripe, PayPal, GoPay, Comgate aj bankové prevody. Nastavíme aj fakturáciu.",
        },
        {
          question: "Ako riešite dopravu a dopravcov?",
          answer:
            "Integrujeme dopravcov ako Zásielkovňa, PPL, DPD, Česká pošta a ďalších vrátane trackingu a cien dopravy.",
        },
        {
          question: "Čo sklad a prepojenie na systémy?",
          answer:
            "Nastavíme sklad, upozornenia na nízky stav a vieme napojiť ERP (Pohoda, Money S3) alebo riešenie na mieru.",
        },
      ],
    },
    ctaBottom: {
      titleBefore: "Pripravení",
      titleHighlight: "predávať",
      subtitle: "Postavíme e-shop, ktorý mení návštevníkov na zákazníkov a podporuje rast",
      primary: "Spustiť e-shop",
      secondary: "Pozrieť e-shop projekty",
    },
  },
};

const EcommerceLanguageContext = createContext<EcommerceLang | null>(null);

export const EcommerceLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  return (
    <EcommerceLanguageContext.Provider value={translations[language]}>
      {children}
    </EcommerceLanguageContext.Provider>
  );
};

export const useEcomLang = () => {
  const ctx = useContext(EcommerceLanguageContext);
  if (!ctx) throw new Error("useEcomLang must be used inside EcommerceLanguageProvider");
  return ctx;
};
