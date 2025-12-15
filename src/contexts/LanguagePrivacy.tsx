import React, { createContext, useContext } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

type PrivacyLang = {
  seo: {
    title: string;
    description: string;
  };

  hero: {
    title: string;
    subtitle: string;
  };

  tocTitle: string;
  lastUpdate: string;

  sections: {
    who: {
      title: string;
      text: string;
    };
    data: {
      title: string;
      items: string[];
    };
    purposes: {
      title: string;
      items: {
        title: string;
        text: string;
      }[];
    };
    cookies: {
      title: string;
      intro: string;
      necessary: string;
      analytics: string;
      marketing: string;
      manage: string;
      revoke: string;
      tip: string;
    };
    processors: {
      title: string;
      intro: string;
      items: string[];
    };
    retention: {
      title: string;
      items: string[];
    };
    rights: {
      title: string;
      items: string[];
    };
    contact: {
      title: string;
      text: string;
    };
  };
};

const translations: Record<Language, PrivacyLang> = {
  SK: {
    seo: {
      title: "Zásady ochrany súkromia | WebOptim",
      description:
        "Informácie o spracúvaní osobných údajov, cookies a možnostiach zmeny súhlasu.",
    },
    hero: {
      title: "Zásady ochrany súkromia & cookies",
      subtitle:
        "Transparentne vysvetľujeme, aké údaje spracúvame, prečo a ako si môžete upraviť cookies.",
    },
    tocTitle: "Obsah",
    lastUpdate: "Posledná aktualizácia",
    sections: {
      who: {
        title: "Kto sme",
        text:
          "Prevádzkovateľom webovej stránky WebOptim je spoločnosť Smart Coach s.r.o., ktorá spracúva osobné údaje v súlade s platnou legislatívou.",
      },
      data: {
        title: "Aké údaje spracúvame",
        items: [
          "Identifikačné a kontaktné údaje (meno, e-mail, telefón)",
          "Údaje z kontaktného formulára",
          "Technické údaje (IP adresa, cookies, typ zariadenia)",
        ],
      },
      purposes: {
        title: "Účely spracovania a právny základ",
        items: [
          {
            title: "Kontaktovanie a vybavenie dopytu",
            text:
              "Odpoveď na správu, príprava ponuky a komunikácia. Právny základ: oprávnený záujem alebo predzmluvné vzťahy.",
          },
          {
            title: "Analytika návštevnosti",
            text:
              "Zlepšovanie webu pomocou analytických nástrojov. Právny základ: súhlas.",
          },
          {
            title: "Marketing",
            text:
              "Meranie kampaní a remarketing. Právny základ: súhlas.",
          },
        ],
      },
      cookies: {
        title: "Cookies",
        intro:
          "Cookies používame na zabezpečenie funkčnosti webu a na analytické a marketingové účely.",
        necessary: "Nutné cookies sú vždy aktívne.",
        analytics: "Analytické cookies – voliteľné.",
        marketing: "Marketingové cookies – voliteľné.",
        manage: "Zmeniť nastavenia cookies",
        revoke: "Odvolať súhlas",
        tip: "Nastavenia môžete kedykoľvek zmeniť.",
      },
      processors: {
        title: "Sprostredkovatelia",
        intro:
          "Vaše údaje môžu byť spracúvané aj prostredníctvom týchto nástrojov:",
        items: [
          "Make (Integromat) – automatizácia spracovania formulára",
          "Airtable – evidencia dopytov",
          "MailerLite – e-mail marketing",
          "Google Tag Manager – analytika a marketing (len po súhlase)",
          "HostCreators – webhosting",
        ],
      },
      retention: {
        title: "Doba uchovávania údajov",
        items: [
          "Údaje z formulára: max. 24 mesiacov",
          "Cookies: podľa typu a vášho súhlasu",
        ],
      },
      rights: {
        title: "Vaše práva",
        items: [
          "Právo na prístup k údajom",
          "Právo na opravu alebo vymazanie",
          "Právo odvolať súhlas",
          "Právo podať sťažnosť dozornému orgánu",
        ],
      },
      contact: {
        title: "Kontakt",
        text:
          "V prípade otázok nás kontaktujte e-mailom na info@weboptim.sk (podľa domény).",
      },
    },
  },

  CZ: {
    seo: {
      title: "Zásady ochrany osobních údajů | WebOptim",
      description:
        "Informace o zpracování osobních údajů, cookies a možnostech změny souhlasu.",
    },
    hero: {
      title: "Ochrana osobních údajů & cookies",
      subtitle:
        "Transparentně vysvětlujeme, jaké údaje zpracováváme a jak spravovat cookies.",
    },
    tocTitle: "Obsah",
    lastUpdate: "Poslední aktualizace",
    sections: {
      who: {
        title: "Kdo jsme",
        text:
          "Provozovatelem webu WebOptim je společnost Smart Coach s.r.o.",
      },
      data: {
        title: "Jaké údaje zpracováváme",
        items: [
          "Kontaktní údaje",
          "Údaje z formuláře",
          "Technické údaje a cookies",
        ],
      },
      purposes: {
        title: "Účely zpracování",
        items: [
          {
            title: "Kontakt a komunikace",
            text:
              "Odpověď na poptávky a komunikace. Právní základ: oprávněný zájem.",
          },
          {
            title: "Analytika",
            text:
              "Měření návštěvnosti webu. Právní základ: souhlas.",
          },
          {
            title: "Marketing",
            text:
              "Remarketing a kampaně. Právní základ: souhlas.",
          },
        ],
      },
      cookies: {
        title: "Cookies",
        intro:
          "Cookies používáme pro funkčnost webu a analytiku.",
        necessary: "Nutné cookies – vždy aktivní.",
        analytics: "Analytické cookies – volitelné.",
        marketing: "Marketingové cookies – volitelné.",
        manage: "Upravit nastavení cookies",
        revoke: "Odvolat souhlas",
        tip: "Nastavení lze kdykoliv změnit.",
      },
      processors: {
        title: "Zpracovatelé",
        intro:
          "Údaje mohou být zpracovány pomocí:",
        items: [
          "Make (Integromat)",
          "Airtable",
          "MailerLite",
          "Google Tag Manager",
          "HostCreators",
        ],
      },
      retention: {
        title: "Doba uchování",
        items: [
          "Formulářová data: max. 24 měsíců",
          "Cookies: dle typu",
        ],
      },
      rights: {
        title: "Vaše práva",
        items: [
          "Přístup k údajům",
          "Výmaz údajů",
          "Odvolání souhlasu",
        ],
      },
      contact: {
        title: "Kontakt",
        text:
          "Dotazy zasílejte na info@weboptim.cz.",
      },
    },
  },

  EN: {
    seo: {
      title: "Privacy Policy | WebOptim",
      description:
        "Information about personal data processing and cookies.",
    },
    hero: {
      title: "Privacy Policy & Cookies",
      subtitle:
        "Learn how we process data and manage cookies.",
    },
    tocTitle: "Contents",
    lastUpdate: "Last updated",
    sections: {
      who: {
        title: "Who we are",
        text:
          "The website WebOptim is operated by Smart Coach s.r.o.",
      },
      data: {
        title: "Data we process",
        items: [
          "Contact details",
          "Form submissions",
          "Technical data and cookies",
        ],
      },
      purposes: {
        title: "Processing purposes",
        items: [
          {
            title: "Communication",
            text:
              "Handling inquiries and communication.",
          },
          {
            title: "Analytics",
            text:
              "Website analytics. Legal basis: consent.",
          },
          {
            title: "Marketing",
            text:
              "Campaign tracking and remarketing.",
          },
        ],
      },
      cookies: {
        title: "Cookies",
        intro:
          "Cookies ensure website functionality and analytics.",
        necessary: "Necessary cookies are always enabled.",
        analytics: "Analytics cookies – optional.",
        marketing: "Marketing cookies – optional.",
        manage: "Manage cookie settings",
        revoke: "Withdraw consent",
        tip: "You can change settings anytime.",
      },
      processors: {
        title: "Processors",
        intro:
          "We use the following tools:",
        items: [
          "Make (Integromat)",
          "Airtable",
          "MailerLite",
          "Google Tag Manager",
          "HostCreators",
        ],
      },
      retention: {
        title: "Retention period",
        items: [
          "Contact data: up to 24 months",
          "Cookies: based on type",
        ],
      },
      rights: {
        title: "Your rights",
        items: [
          "Access",
          "Deletion",
          "Consent withdrawal",
        ],
      },
      contact: {
        title: "Contact",
        text:
          "For questions, contact info@weboptim.eu.",
      },
    },
  },
};

const PrivacyContext = createContext<PrivacyLang | null>(null);

export const PrivacyLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  return (
    <PrivacyContext.Provider value={translations[language]}>
      {children}
    </PrivacyContext.Provider>
  );
};

export const usePrivacyLang = () => {
  const ctx = useContext(PrivacyContext);
  if (!ctx) throw new Error("usePrivacyLang must be used inside PrivacyLanguageProvider");
  return ctx;
};
