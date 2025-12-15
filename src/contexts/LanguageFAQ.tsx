import React, { createContext, useContext } from "react";
import { useLanguage, Language } from "./LanguageContext";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

interface FAQLang {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  faqs: FAQCategory[];
}

const translations: Record<Language, FAQLang> = {
  EN: {
    seo: {
      title: "FAQ | WebOptim - Frequently Asked Questions",
      description: "Find answers to common questions about WebOptim's web development, e-commerce, SEO, PPC advertising, digitalization, and graphic design services.",
    },
    hero: {
      badge: "Got Questions?",
      title: "Frequently Asked",
      titleHighlight: "Questions",
      subtitle: "Find answers to common questions about our services, process, and how WebOptim can help your business succeed online.",
    },
    cta: {
      title: "Still Have Questions?",
      subtitle: "Can't find the answer you're looking for? Our team is here to help.",
      button: "Contact Us",
    },
    faqs: [
      {
        category: "About WebOptim",
        questions: [
          {
            q: "What services does WebOptim offer?",
            a: "WebOptim offers comprehensive digital solutions: custom website development (WordPress, Oxygen Builder), e-commerce solutions (WooCommerce, Shoptet, Shopify), SEO optimization, PPC advertising (Google Ads, Meta Ads), business digitalization & automation (CRM systems, cloud solutions), and professional graphic design services.",
          },
          {
            q: "How long has WebOptim been in business?",
            a: "WebOptim has been helping businesses succeed online since 2018. We've completed hundreds of projects for clients across Czech Republic, Slovakia, and internationally, building a strong reputation for quality and reliability.",
          },
          {
            q: "Do you work with clients internationally?",
            a: "Yes! We work with clients across Europe and worldwide. Our team is experienced in remote collaboration and we communicate in Czech, Slovak, and English. We use modern tools to ensure seamless communication across different time zones.",
          },
        ],
      },
      {
        category: "Web Development",
        questions: [
          {
            q: "What technologies do you use for website development?",
            a: "We specialize in WordPress with Oxygen Builder for maximum performance and flexibility. Unlike page builders that slow down websites, our approach delivers clean, optimized code. We also work with custom solutions when needed.",
          },
          {
            q: "How long does it take to build a website?",
            a: "A simple presentation website typically takes 2-4 weeks. More complex projects with custom functionality can take 4-8 weeks. E-commerce stores usually require 4-6 weeks depending on the number of products and integrations needed.",
          },
          {
            q: "Will my website be mobile-friendly and fast?",
            a: "Absolutely! All our websites are fully responsive and optimized for all devices. We follow a mobile-first approach and focus on Core Web Vitals to ensure excellent performance scores. Speed optimization is included in every project.",
          },
          {
            q: "Can you redesign my existing website?",
            a: "Yes, we regularly help businesses modernize their online presence. We can redesign your website while preserving SEO value and existing content, or build a completely new site with improved functionality and design.",
          },
        ],
      },
      {
        category: "E-commerce Solutions",
        questions: [
          {
            q: "Which e-commerce platforms do you work with?",
            a: "We specialize in WooCommerce (WordPress), Shoptet, Upgates, and Shopify. We help you choose the best platform based on your needs, budget, and growth plans. Each platform has its strengths and we'll recommend the best fit.",
          },
          {
            q: "Can you integrate payment gateways and shipping providers?",
            a: "Yes, we integrate all major payment gateways (Stripe, PayPal, GoPay, Comgate) and shipping providers (PPL, DPD, Zásilkovna, Czech Post). We also set up automated inventory management and order processing systems.",
          },
          {
            q: "Do you provide e-commerce maintenance and support?",
            a: "We offer comprehensive e-commerce maintenance packages including security updates, plugin updates, performance monitoring, backup management, and technical support. We also help with product uploads and catalog management.",
          },
        ],
      },
      {
        category: "SEO & Marketing",
        questions: [
          {
            q: "What does your SEO service include?",
            a: "Our SEO service includes technical SEO audit, keyword research and analysis, on-page optimization, content strategy, link building, local SEO (Google Business Profile), and regular reporting. We focus on sustainable, long-term results.",
          },
          {
            q: "How long does it take to see SEO results?",
            a: "SEO is a long-term investment. Initial improvements are often visible within 2-3 months, but significant results typically appear after 4-6 months of consistent work. We provide monthly reports so you can track progress.",
          },
          {
            q: "Do you manage PPC advertising campaigns?",
            a: "Yes, we create and manage campaigns on Google Ads, Meta (Facebook & Instagram), LinkedIn, and other platforms. We handle everything from strategy and ad creation to optimization and reporting, maximizing your ROI.",
          },
          {
            q: "Can you help with social media marketing?",
            a: "We focus primarily on paid advertising (PPC) rather than organic social media management. However, we can create social media graphics and advise on strategy as part of our comprehensive marketing approach.",
          },
        ],
      },
      {
        category: "Digitalization & Automation",
        questions: [
          {
            q: "What is business digitalization?",
            a: "Business digitalization means transforming manual, paper-based processes into efficient digital workflows. This includes implementing CRM systems, cloud tools (Google Workspace, Microsoft 365), automated invoicing, and connected business applications.",
          },
          {
            q: "Which CRM systems do you implement?",
            a: "We primarily work with Pipedrive, HubSpot, and Raynet CRM. We help you choose the right system based on your team size, sales process, and budget, then handle complete setup, customization, and team training.",
          },
          {
            q: "Can you automate repetitive business tasks?",
            a: "Yes! Using tools like Make (Integromat) and Zapier, we can automate many repetitive tasks: lead processing, email sequences, invoice generation, data synchronization between apps, and custom workflows tailored to your needs.",
          },
        ],
      },
      {
        category: "Pricing & Process",
        questions: [
          {
            q: "How much does a website cost?",
            a: "Website prices vary based on complexity. A simple presentation site starts around €800-1,500, while e-commerce stores typically range from €1,500-4,000+. We provide detailed quotes after understanding your specific requirements.",
          },
          {
            q: "Do you offer payment plans?",
            a: "Yes, for larger projects we offer flexible payment options. Typically, we work with 50% upfront and 50% upon completion, but we can discuss arrangements that work for your situation.",
          },
          {
            q: "What do you need from me to start a project?",
            a: "We'll need your brand assets (logo, colors), content (texts, images), and a clear understanding of your goals. Don't worry if you don't have everything ready – we can guide you through the process and help create missing elements.",
          },
          {
            q: "Do you provide ongoing maintenance?",
            a: "Yes, we offer various maintenance packages including security updates, backups, performance monitoring, content updates, and technical support. Our Optim Bundle provides comprehensive care for a fixed monthly fee.",
          },
        ],
      },
      {
        category: "Technical & Support",
        questions: [
          {
            q: "Do you provide website hosting?",
            a: "We recommend and set up hosting solutions tailored to your needs. For WordPress sites, we work with premium managed hosting providers that ensure speed, security, and reliability. Hosting costs are separate from development.",
          },
          {
            q: "How do you ensure website security?",
            a: "Security is built into every project: SSL certificates, secure coding practices, regular updates, firewall protection, and malware scanning. For e-commerce, we ensure PCI compliance. Our maintenance packages include ongoing security monitoring.",
          },
          {
            q: "Can I update the website content myself?",
            a: "Absolutely! We build websites with user-friendly admin interfaces. We provide training on how to update content, add products, publish blog posts, and manage basic settings. For more complex changes, we're always here to help.",
          },
          {
            q: "What happens if something breaks on my website?",
            a: "If you have a maintenance package, contact us and we'll fix it as a priority. For other clients, we offer support on an hourly basis. We also maintain backups so we can quickly restore your site if needed.",
          },
        ],
      },
    ],
  },
  CZ: {
    seo: {
      title: "FAQ | WebOptim - Často kladené otázky",
      description: "Najděte odpovědi na časté otázky o službách WebOptim - tvorba webů, e-shopů, SEO optimalizace, PPC reklama, digitalizace a grafický design.",
    },
    hero: {
      badge: "Máte otázky?",
      title: "Často kladené",
      titleHighlight: "Otázky",
      subtitle: "Najděte odpovědi na časté otázky o našich službách, procesu a jak vám WebOptim může pomoci uspět online.",
    },
    cta: {
      title: "Stále máte otázky?",
      subtitle: "Nenašli jste odpověď? Náš tým vám rád pomůže.",
      button: "Kontaktujte nás",
    },
    faqs: [
      {
        category: "O WebOptim",
        questions: [
          {
            q: "Jaké služby WebOptim nabízí?",
            a: "WebOptim nabízí komplexní digitální služby: tvorba webových stránek na míru (WordPress, Oxygen Builder), e-shopová řešení (WooCommerce, Shoptet, Shopify), SEO optimalizace, PPC reklama (Google Ads, Meta Ads), digitalizace a automatizace podnikání (CRM systémy, cloudová řešení) a profesionální grafický design.",
          },
          {
            q: "Jak dlouho WebOptim působí na trhu?",
            a: "WebOptim pomáhá firmám uspět online od roku 2018. Dokončili jsme stovky projektů pro klienty v České republice, na Slovensku i v zahraničí a vybudovali si silnou reputaci díky kvalitě a spolehlivosti.",
          },
          {
            q: "Spolupracujete i s klienty ze zahraničí?",
            a: "Ano! Spolupracujeme s klienty po celé Evropě i ve světě. Náš tým má zkušenosti se vzdálenou spoluprací a komunikujeme v češtině, slovenštině a angličtině. Používáme moderní nástroje pro bezproblémovou komunikaci.",
          },
        ],
      },
      {
        category: "Tvorba webových stránek",
        questions: [
          {
            q: "Jaké technologie používáte pro tvorbu webů?",
            a: "Specializujeme se na WordPress s Oxygen Builderem pro maximální výkon a flexibilitu. Na rozdíl od běžných page builderů, které zpomalují weby, náš přístup zajišťuje čistý, optimalizovaný kód. Podle potřeby pracujeme i s vlastními řešeními.",
          },
          {
            q: "Jak dlouho trvá vytvoření webových stránek?",
            a: "Jednoduchý prezentační web obvykle trvá 2-4 týdny. Složitější projekty s vlastní funkcionalitou mohou trvat 4-8 týdnů. E-shopy obvykle vyžadují 4-6 týdnů v závislosti na počtu produktů a potřebných integracích.",
          },
          {
            q: "Bude můj web responzivní a rychlý?",
            a: "Rozhodně! Všechny naše weby jsou plně responzivní a optimalizované pro všechna zařízení. Dodržujeme mobile-first přístup a zaměřujeme se na Core Web Vitals pro vynikající skóre výkonu. Optimalizace rychlosti je součástí každého projektu.",
          },
          {
            q: "Můžete předělat můj stávající web?",
            a: "Ano, pravidelně pomáháme firmám modernizovat jejich online přítomnost. Můžeme redesignovat váš web při zachování SEO hodnoty a stávajícího obsahu, nebo vytvořit zcela nový web s vylepšenou funkcionalitou a designem.",
          },
        ],
      },
      {
        category: "E-shopová řešení",
        questions: [
          {
            q: "S jakými e-shopovými platformami pracujete?",
            a: "Specializujeme se na WooCommerce (WordPress), Shoptet, Upgates a Shopify. Pomůžeme vám vybrat nejlepší platformu na základě vašich potřeb, rozpočtu a plánů růstu. Každá platforma má své silné stránky a doporučíme tu nejvhodnější.",
          },
          {
            q: "Dokážete integrovat platební brány a dopravce?",
            a: "Ano, integrujeme všechny hlavní platební brány (Stripe, PayPal, GoPay, Comgate) a dopravce (PPL, DPD, Zásilkovna, Česká pošta). Nastavíme také automatizovanou správu skladu a systémy zpracování objednávek.",
          },
          {
            q: "Poskytujete údržbu a podporu e-shopů?",
            a: "Nabízíme komplexní balíčky údržby e-shopů zahrnující bezpečnostní aktualizace, aktualizace pluginů, monitoring výkonu, správu záloh a technickou podporu. Pomáháme také s nahráváním produktů a správou katalogu.",
          },
        ],
      },
      {
        category: "SEO a marketing",
        questions: [
          {
            q: "Co zahrnuje vaše SEO služba?",
            a: "Naše SEO služba zahrnuje technický SEO audit, výzkum a analýzu klíčových slov, on-page optimalizaci, obsahovou strategii, budování odkazů, lokální SEO (Google Firemní profil) a pravidelné reporty. Zaměřujeme se na udržitelné, dlouhodobé výsledky.",
          },
          {
            q: "Jak dlouho trvá, než uvidím výsledky SEO?",
            a: "SEO je dlouhodobá investice. Počáteční zlepšení jsou často viditelná během 2-3 měsíců, ale významné výsledky se typicky objevují po 4-6 měsících konzistentní práce. Poskytujeme měsíční reporty, abyste mohli sledovat pokrok.",
          },
          {
            q: "Spravujete PPC reklamní kampaně?",
            a: "Ano, vytváříme a spravujeme kampaně na Google Ads, Meta (Facebook a Instagram), LinkedIn a dalších platformách. Staráme se o vše od strategie a tvorby reklam po optimalizaci a reporting, maximalizujeme vaši návratnost investic.",
          },
          {
            q: "Pomůžete s marketingem na sociálních sítích?",
            a: "Zaměřujeme se primárně na placenou reklamu (PPC) spíše než na organickou správu sociálních sítí. Můžeme však vytvořit grafiku pro sociální sítě a poradit se strategií jako součást našeho komplexního marketingového přístupu.",
          },
        ],
      },
      {
        category: "Digitalizace a automatizace",
        questions: [
          {
            q: "Co je digitalizace podnikání?",
            a: "Digitalizace podnikání znamená transformaci manuálních, papírových procesů na efektivní digitální workflow. To zahrnuje implementaci CRM systémů, cloudových nástrojů (Google Workspace, Microsoft 365), automatizované fakturace a propojených firemních aplikací.",
          },
          {
            q: "Jaké CRM systémy implementujete?",
            a: "Primárně pracujeme s Pipedrive, HubSpot a Raynet CRM. Pomůžeme vám vybrat správný systém na základě velikosti týmu, prodejního procesu a rozpočtu, následně se postaráme o kompletní nastavení, přizpůsobení a školení týmu.",
          },
          {
            q: "Dokážete automatizovat opakující se úkoly?",
            a: "Ano! Pomocí nástrojů jako Make (Integromat) a Zapier můžeme automatizovat mnoho opakujících se úkolů: zpracování leadů, e-mailové sekvence, generování faktur, synchronizaci dat mezi aplikacemi a vlastní workflow podle vašich potřeb.",
          },
        ],
      },
      {
        category: "Ceník a proces",
        questions: [
          {
            q: "Kolik stojí webové stránky?",
            a: "Ceny webů se liší podle složitosti. Jednoduchý prezentační web začíná od cca 20 000 - 40 000 Kč, zatímco e-shopy se typicky pohybují od 40 000 - 100 000 Kč+. Detailní nabídku poskytujeme po pochopení vašich specifických požadavků.",
          },
          {
            q: "Nabízíte možnost splátek?",
            a: "Ano, u větších projektů nabízíme flexibilní platební možnosti. Typicky pracujeme se zálohou 50 % a 50 % při dokončení, ale můžeme diskutovat uspořádání, které vám vyhovuje.",
          },
          {
            q: "Co potřebujete k zahájení projektu?",
            a: "Budeme potřebovat vaše brandové materiály (logo, barvy), obsah (texty, obrázky) a jasnou představu o vašich cílech. Nemějte obavy, pokud nemáte vše připravené – provedeme vás procesem a pomůžeme vytvořit chybějící prvky.",
          },
          {
            q: "Poskytujete průběžnou údržbu?",
            a: "Ano, nabízíme různé balíčky údržby zahrnující bezpečnostní aktualizace, zálohy, monitoring výkonu, aktualizace obsahu a technickou podporu. Náš Optim Bundle poskytuje komplexní péči za pevný měsíční poplatek.",
          },
        ],
      },
      {
        category: "Technické otázky a podpora",
        questions: [
          {
            q: "Poskytujete webhosting?",
            a: "Doporučujeme a nastavujeme hostingová řešení přizpůsobená vašim potřebám. Pro WordPress weby pracujeme s prémiovými managed hosting poskytovateli, kteří zajišťují rychlost, bezpečnost a spolehlivost. Náklady na hosting jsou oddělené od vývoje.",
          },
          {
            q: "Jak zajišťujete bezpečnost webu?",
            a: "Bezpečnost je součástí každého projektu: SSL certifikáty, bezpečné programovací postupy, pravidelné aktualizace, firewall ochrana a skenování malwaru. U e-shopů zajišťujeme PCI compliance. Naše balíčky údržby zahrnují průběžný bezpečnostní monitoring.",
          },
          {
            q: "Mohu si aktualizovat obsah webu sám?",
            a: "Rozhodně! Vytváříme weby s uživatelsky přívětivým administračním rozhraním. Poskytneme školení, jak aktualizovat obsah, přidávat produkty, publikovat blogové příspěvky a spravovat základní nastavení. Pro složitější změny jsme vždy k dispozici.",
          },
          {
            q: "Co se stane, když se něco na webu rozbije?",
            a: "Pokud máte balíček údržby, kontaktujte nás a opravíme to prioritně. Ostatním klientům nabízíme podporu na hodinové bázi. Udržujeme také zálohy, takže můžeme váš web rychle obnovit, pokud je potřeba.",
          },
        ],
      },
    ],
  },
  SK: {
    seo: {
      title: "FAQ | WebOptim - Často kladené otázky",
      description: "Nájdite odpovede na časté otázky o službách WebOptim - tvorba webov, e-shopov, SEO optimalizácia, PPC reklama, digitalizácia a grafický dizajn.",
    },
    hero: {
      badge: "Máte otázky?",
      title: "Často kladené",
      titleHighlight: "Otázky",
      subtitle: "Nájdite odpovede na časté otázky o našich službách, procese a ako vám WebOptim môže pomôcť uspieť online.",
    },
    cta: {
      title: "Stále máte otázky?",
      subtitle: "Nenašli ste odpoveď? Náš tím vám rád pomôže.",
      button: "Kontaktujte nás",
    },
    faqs: [
      {
        category: "O WebOptim",
        questions: [
          {
            q: "Aké služby WebOptim ponúka?",
            a: "WebOptim ponúka komplexné digitálne služby: tvorba webových stránok na mieru (WordPress, Oxygen Builder), e-shopové riešenia (WooCommerce, Shoptet, Shopify), SEO optimalizácia, PPC reklama (Google Ads, Meta Ads), digitalizácia a automatizácia podnikania (CRM systémy, cloudové riešenia) a profesionálny grafický dizajn.",
          },
          {
            q: "Ako dlho WebOptim pôsobí na trhu?",
            a: "WebOptim pomáha firmám uspieť online od roku 2018. Dokončili sme stovky projektov pre klientov v Českej republike, na Slovensku aj v zahraničí a vybudovali si silnú reputáciu vďaka kvalite a spoľahlivosti.",
          },
          {
            q: "Spolupracujete aj s klientmi zo zahraničia?",
            a: "Áno! Spolupracujeme s klientmi po celej Európe aj vo svete. Náš tím má skúsenosti so vzdálenou spoluprácou a komunikujeme v češtine, slovenčine a angličtine. Používame moderné nástroje pre bezproblémovú komunikáciu.",
          },
        ],
      },
      {
        category: "Tvorba webových stránok",
        questions: [
          {
            q: "Aké technológie používate pre tvorbu webov?",
            a: "Špecializujeme sa na WordPress s Oxygen Builderom pre maximálny výkon a flexibilitu. Na rozdiel od bežných page builderov, ktoré spomaľujú weby, náš prístup zabezpečuje čistý, optimalizovaný kód. Podľa potreby pracujeme aj s vlastnými riešeniami.",
          },
          {
            q: "Ako dlho trvá vytvorenie webových stránok?",
            a: "Jednoduchý prezentačný web obvykle trvá 2-4 týždne. Zložitejšie projekty s vlastnou funkcionalitou môžu trvať 4-8 týždňov. E-shopy obvykle vyžadujú 4-6 týždňov v závislosti od počtu produktov a potrebných integrácií.",
          },
          {
            q: "Bude môj web responzívny a rýchly?",
            a: "Určite! Všetky naše weby sú plne responzívne a optimalizované pre všetky zariadenia. Dodržiavame mobile-first prístup a zameriavame sa na Core Web Vitals pre vynikajúce skóre výkonu. Optimalizácia rýchlosti je súčasťou každého projektu.",
          },
          {
            q: "Môžete prerobiť môj existujúci web?",
            a: "Áno, pravidelne pomáhame firmám modernizovať ich online prítomnosť. Môžeme redizajnovať váš web pri zachovaní SEO hodnoty a existujúceho obsahu, alebo vytvoriť úplne nový web s vylepšenou funkcionalitou a dizajnom.",
          },
        ],
      },
      {
        category: "E-shopové riešenia",
        questions: [
          {
            q: "S akými e-shopovými platformami pracujete?",
            a: "Špecializujeme sa na WooCommerce (WordPress), Shoptet, Upgates a Shopify. Pomôžeme vám vybrať najlepšiu platformu na základe vašich potrieb, rozpočtu a plánov rastu. Každá platforma má svoje silné stránky a odporučíme tú najvhodnejšiu.",
          },
          {
            q: "Dokážete integrovať platobné brány a dopravcov?",
            a: "Áno, integrujeme všetky hlavné platobné brány (Stripe, PayPal, GoPay, Comgate) a dopravcov (PPL, DPD, Zásielkovňa, Slovenská pošta). Nastavíme aj automatizovanú správu skladu a systémy spracovania objednávok.",
          },
          {
            q: "Poskytujete údržbu a podporu e-shopov?",
            a: "Ponúkame komplexné balíčky údržby e-shopov zahŕňajúce bezpečnostné aktualizácie, aktualizácie pluginov, monitoring výkonu, správu záloh a technickú podporu. Pomáhame aj s nahrávaním produktov a správou katalógu.",
          },
        ],
      },
      {
        category: "SEO a marketing",
        questions: [
          {
            q: "Čo zahŕňa vaša SEO služba?",
            a: "Naša SEO služba zahŕňa technický SEO audit, výskum a analýzu kľúčových slov, on-page optimalizáciu, obsahovú stratégiu, budovanie odkazov, lokálne SEO (Google Firemný profil) a pravidelné reporty. Zameriavame sa na udržateľné, dlhodobé výsledky.",
          },
          {
            q: "Ako dlho trvá, kým uvidím výsledky SEO?",
            a: "SEO je dlhodobá investícia. Počiatočné zlepšenia sú často viditeľné počas 2-3 mesiacov, ale významné výsledky sa typicky objavujú po 4-6 mesiacoch konzistentnej práce. Poskytujeme mesačné reporty, aby ste mohli sledovať pokrok.",
          },
          {
            q: "Spravujete PPC reklamné kampane?",
            a: "Áno, vytvárame a spravujeme kampane na Google Ads, Meta (Facebook a Instagram), LinkedIn a ďalších platformách. Staráme sa o všetko od stratégie a tvorby reklám po optimalizáciu a reporting, maximalizujeme vašu návratnosť investícií.",
          },
          {
            q: "Pomôžete s marketingom na sociálnych sieťach?",
            a: "Zameriavame sa primárne na platenú reklamu (PPC) skôr než na organickú správu sociálnych sietí. Môžeme však vytvoriť grafiku pre sociálne siete a poradiť so stratégiou ako súčasť nášho komplexného marketingového prístupu.",
          },
        ],
      },
      {
        category: "Digitalizácia a automatizácia",
        questions: [
          {
            q: "Čo je digitalizácia podnikania?",
            a: "Digitalizácia podnikania znamená transformáciu manuálnych, papierových procesov na efektívne digitálne workflow. To zahŕňa implementáciu CRM systémov, cloudových nástrojov (Google Workspace, Microsoft 365), automatizovanej fakturácie a prepojených firemných aplikácií.",
          },
          {
            q: "Aké CRM systémy implementujete?",
            a: "Primárne pracujeme s Pipedrive, HubSpot a Raynet CRM. Pomôžeme vám vybrať správny systém na základe veľkosti tímu, predajného procesu a rozpočtu, následne sa postaráme o kompletné nastavenie, prispôsobenie a školenie tímu.",
          },
          {
            q: "Dokážete automatizovať opakujúce sa úlohy?",
            a: "Áno! Pomocou nástrojov ako Make (Integromat) a Zapier môžeme automatizovať mnoho opakujúcich sa úloh: spracovanie leadov, e-mailové sekvencie, generovanie faktúr, synchronizáciu dát medzi aplikáciami a vlastné workflow podľa vašich potrieb.",
          },
        ],
      },
      {
        category: "Cenník a proces",
        questions: [
          {
            q: "Koľko stoja webové stránky?",
            a: "Ceny webov sa líšia podľa zložitosti. Jednoduchý prezentačný web začína od cca 800 - 1 500 €, zatiaľ čo e-shopy sa typicky pohybujú od 1 500 - 4 000 €+. Detailnú ponuku poskytujeme po pochopení vašich špecifických požiadaviek.",
          },
          {
            q: "Ponúkate možnosť splátok?",
            a: "Áno, pri väčších projektoch ponúkame flexibilné platobné možnosti. Typicky pracujeme so zálohou 50 % a 50 % pri dokončení, ale môžeme diskutovať usporiadanie, ktoré vám vyhovuje.",
          },
          {
            q: "Čo potrebujete na začatie projektu?",
            a: "Budeme potrebovať vaše brandové materiály (logo, farby), obsah (texty, obrázky) a jasnú predstavu o vašich cieľoch. Nemajte obavy, ak nemáte všetko pripravené – prevedieme vás procesom a pomôžeme vytvoriť chýbajúce prvky.",
          },
          {
            q: "Poskytujete priebežnú údržbu?",
            a: "Áno, ponúkame rôzne balíčky údržby zahŕňajúce bezpečnostné aktualizácie, zálohy, monitoring výkonu, aktualizácie obsahu a technickú podporu. Náš Optim Bundle poskytuje komplexnú starostlivosť za pevný mesačný poplatok.",
          },
        ],
      },
      {
        category: "Technické otázky a podpora",
        questions: [
          {
            q: "Poskytujete webhosting?",
            a: "Odporúčame a nastavujeme hostingové riešenia prispôsobené vašim potrebám. Pre WordPress weby pracujeme s prémiovými managed hosting poskytovateľmi, ktorí zabezpečujú rýchlosť, bezpečnosť a spoľahlivosť. Náklady na hosting sú oddelené od vývoja.",
          },
          {
            q: "Ako zabezpečujete bezpečnosť webu?",
            a: "Bezpečnosť je súčasťou každého projektu: SSL certifikáty, bezpečné programovacie postupy, pravidelné aktualizácie, firewall ochrana a skenovanie malwaru. Pri e-shopoch zabezpečujeme PCI compliance. Naše balíčky údržby zahŕňajú priebežný bezpečnostný monitoring.",
          },
          {
            q: "Môžem si aktualizovať obsah webu sám?",
            a: "Určite! Vytvárame weby s používateľsky prívetivým administračným rozhraním. Poskytneme školenie, ako aktualizovať obsah, pridávať produkty, publikovať blogové príspevky a spravovať základné nastavenia. Pre zložitejšie zmeny sme vždy k dispozícii.",
          },
          {
            q: "Čo sa stane, ak sa niečo na webe pokazí?",
            a: "Ak máte balíček údržby, kontaktujte nás a opravíme to prioritne. Ostatným klientom ponúkame podporu na hodinovej báze. Udržiavame aj zálohy, takže môžeme váš web rýchlo obnoviť, ak je potreba.",
          },
        ],
      },
    ],
  },
};

const FAQLanguageContext = createContext<FAQLang | null>(null);

export const FAQLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <FAQLanguageContext.Provider value={content}>
      {children}
    </FAQLanguageContext.Provider>
  );
};

export const useFAQLang = () => {
  const context = useContext(FAQLanguageContext);
  if (!context) {
    throw new Error("useFAQLang must be used within a FAQLanguageProvider");
  }
  return context;
};
