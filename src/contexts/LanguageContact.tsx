// src/contexts/LanguageContact.tsx
import React, { createContext, useContext } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

type ContactInfoItem = {
  label: string;
  value: string;
  href?: string | null;
};

type CompanyDetails = {
  title: string;
  name: string;
  icoLabel: string;
  icoValue: string;
  addressLines: string[];
  countryLine: string;
};

type ContactLang = {
  seo: {
    title: string;
    description: string;
  };

  hero: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
  };

  form: {
    title: string;
  
    nameLabel: string;
    namePlaceholder: string;
    nameHint: string;
  
    emailLabel: string;
    emailPlaceholder: string;
    emailHint: string;
  
    phoneLabel: string;
    phonePlaceholder: string;
    phoneHint: string;
    countryLabel: string;
  
    websiteLabel: string;
    websitePlaceholder: string;
    websiteHint: string;
  
    topicLabel: string;
    topicPlaceholder: string;
    topicWeb: string;
    topicSeo: string;
    topicPpc: string;
    topicConsulting: string;
    topicOther: string;
  
    messageLabel: string;
    messagePlaceholder: string;
    messageHint: string;
  
    consentText: string;
    consentError: string;
  
    submitIdle: string;
    submitSending: string;
  
    toastTitle: string;
    toastDescription: string;
  };

  sidebar: {
    title: string;
    subtitle: string;
  };

  contactInfo: {
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
  };

  company: CompanyDetails;

  googleBadge: {
    label: string;
  };

  schema: {
    contactType: string;
    availableLanguage: string[];
    telephone: string;
  };

  breadcrumb: {
    home: string;
    contact: string;
  };
};

const translations: Record<Language, ContactLang> = {
  EN: {
    seo: {
      title: "Contact | WebOptim",
      description: "Contact WebOptim. Tell us about your project and we’ll get back to you within 24 hours.",
    },
    hero: {
      titleBefore: "Let's Build Something",
      titleHighlight: "Amazing Together",
      titleAfter: "",
      subtitle: "Ready to transform your digital presence? Get in touch and let's discuss your project.",
    },
    form: {
      title: "Send us a message",
    
      nameLabel: "Your Name / Company Name",
      namePlaceholder: "John Doe / Acme s.r.o.",
      nameHint: "Enter your name or company name",
    
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      emailHint: "We'll reply to this email",
    
      phoneLabel: "Phone Number",
      phonePlaceholder: "+421 900 000 000",
      phoneHint: "Optional, for faster communication",
      countryLabel: "Country code",
    
      websiteLabel: "Your Website (Optional)",
      websitePlaceholder: "https://",
      websiteHint: "Your current website if you have one",
    
      topicLabel: "What do you need help with?",
      topicPlaceholder: "— Select —",
      topicWeb: "Website / Development",
      topicSeo: "SEO",
      topicPpc: "PPC / Ads",
      topicConsulting: "Consultation",
      topicOther: "Other",
    
      messageLabel: "Your Message",
      messagePlaceholder: "Tell us about your project...",
      messageHint: "Describe your project, goals, or questions",
    
      consentText: "I agree to the processing of personal data.",
      consentError: "Please agree to personal data processing to continue.",
    
      submitIdle: "Send Message",
      submitSending: "Sending...",
    
      toastTitle: "Message sent!",
      toastDescription: "We'll get back to you within 24 hours.",
    },
    sidebar: {
      title: "Get in Touch",
      subtitle:
        "Have a project in mind? We'd love to hear from you. Reach out using any method below, or fill out the form and we’ll respond within 24 hours.",
    },
    contactInfo: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
    },
    company: {
      title: "Company Details",
      name: "Smart Coach s.r.o.",
      icoLabel: "Company ID",
      icoValue: "14295628",
      addressLines: ["Příčná 1892/4", "110 00 Praha"],
      countryLine: "Czech Republic",
    },
    googleBadge: {
      label: "Google Reviews",
    },
    schema: {
      contactType: "customer service",
      availableLanguage: ["English", "Czech", "Slovak"],
      telephone: "+420 776 292 799",
    },
    breadcrumb: {
      home: "Home",
      contact: "Contact",
    },
  },

  CZ: {
    seo: {
      title: "Kontakt | WebOptim",
      description: "Kontaktujte WebOptim. Napište nám o projektu a ozveme se do 24 hodin.",
    },
    hero: {
      titleBefore: "Pojďme společně vytvořit",
      titleHighlight: "něco skvělého",
      titleAfter: "",
      subtitle: "Chcete posunout online prezentaci? Ozvěte se a probereme váš projekt.",
    },
    form: {
      title: "Napište nám zprávu",
    
      nameLabel: "Vaše jméno / Název společnosti",
      namePlaceholder: "Jan Novák / Firma s.r.o.",
      nameHint: "Zadejte své jméno nebo název firmy",
    
      emailLabel: "E-mail",
      emailPlaceholder: "jan@firma.cz",
      emailHint: "Na tento e-mail vám odpovíme",
    
      phoneLabel: "Telefonní číslo",
      phonePlaceholder: "+420 777 000 000",
      phoneHint: "Nepovinné, pro rychlejší komunikaci",
      countryLabel: "Předvolba",
    
      websiteLabel: "Vaše webová stránka (nepovinné)",
      websitePlaceholder: "https://",
      websiteHint: "Váš aktuální web, pokud máte",
    
      topicLabel: "S čím potřebujete pomoct?",
      topicPlaceholder: "— Vyberte —",
      topicWeb: "Web / Vývoj",
      topicSeo: "SEO",
      topicPpc: "PPC / Reklamy",
      topicConsulting: "Konzultace",
      topicOther: "Jiné",
    
      messageLabel: "Zpráva",
      messagePlaceholder: "Napište nám, co potřebujete…",
      messageHint: "Popište svůj projekt, cíle nebo otázky",
    
      consentText: "Souhlasím se zpracováním osobních údajů.",
      consentError: "Pro pokračování prosím potvrďte souhlas se zpracováním osobních údajů.",
    
      submitIdle: "Odeslat zprávu",
      submitSending: "Odesílám…",
    
      toastTitle: "Zpráva odeslána!",
      toastDescription: "Ozveme se vám do 24 hodin.",
    },
    sidebar: {
      title: "Kontakt",
      subtitle:
        "Máte projekt? Rádi si ho poslechneme. Napište nám nebo vyplňte formulář — ozveme se do 24 hodin.",
    },
    contactInfo: {
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      locationLabel: "Adresa",
    },
    company: {
      title: "Firemní údaje",
      name: "Smart Coach s.r.o.",
      icoLabel: "IČO",
      icoValue: "14295628",
      addressLines: ["Příčná 1892/4", "110 00 Praha"],
      countryLine: "Česká republika",
    },
    googleBadge: {
      label: "Google recenze",
    },
    schema: {
      contactType: "zákaznická podpora",
      availableLanguage: ["Czech", "Slovak", "English"],
      telephone: "+420 776 292 799",
    },
    breadcrumb: {
      home: "Domů",
      contact: "Kontakt",
    },
  },

  SK: {
    seo: {
      title: "Kontakt | WebOptim",
      description: "Kontaktujte WebOptim. Napíšte nám o projekte a ozveme sa do 24 hodín.",
    },
    hero: {
      titleBefore: "Poďme spolu vytvoriť",
      titleHighlight: "niečo skvelé",
      titleAfter: "",
      subtitle: "Chcete posunúť online prezentáciu? Ozvite sa a preberieme váš projekt.",
    },
    form: {
      title: "Napíšte nám správu",
    
      nameLabel: "Vaše meno / Názov spoločnosti",
      namePlaceholder: "Ján Novák / Firma s.r.o.",
      nameHint: "Zadajte svoje meno alebo názov firmy",
    
      emailLabel: "E-mail",
      emailPlaceholder: "jan@firma.sk",
      emailHint: "Na tento e-mail vám odpovieme",
    
      phoneLabel: "Telefónne číslo",
      phonePlaceholder: "+421 900 000 000",
      phoneHint: "Nepovinné, pre rýchlejšiu komunikáciu",
      countryLabel: "Predvoľba",
    
      websiteLabel: "Vaša webová stránka (nepovinné)",
      websitePlaceholder: "https://",
      websiteHint: "Váš aktuálny web, ak máte",
    
      topicLabel: "S čím potrebujete pomôcť?",
      topicPlaceholder: "— Vyberte —",
      topicWeb: "Web / Vývoj",
      topicSeo: "SEO",
      topicPpc: "PPC / Reklamy",
      topicConsulting: "Konzultácia",
      topicOther: "Iné",
    
      messageLabel: "Správa",
      messagePlaceholder: "Napíšte nám, čo potrebujete…",
      messageHint: "Opíšte váš projekt, ciele alebo otázky",
    
      consentText: "Súhlasím so spracovaním osobných údajov.",
      consentError: "Pre pokračovanie prosím potvrďte súhlas so spracovaním osobných údajov.",
    
      submitIdle: "Odoslať správu",
      submitSending: "Odosielam…",
    
      toastTitle: "Správa odoslaná!",
      toastDescription: "Ozveme sa vám do 24 hodín.",
    },
    sidebar: {
      title: "Kontakt",
      subtitle:
        "Máte projekt? Radi si ho vypočujeme. Napíšte nám alebo vyplňte formulár — ozveme sa do 24 hodín.",
    },
    contactInfo: {
      emailLabel: "E-mail",
      phoneLabel: "Telefón",
      locationLabel: "Adresa",
    },
    company: {
      title: "Firemné údaje",
      name: "Smart Coach s.r.o.",
      icoLabel: "IČO",
      icoValue: "14295628",
      addressLines: ["Příčná 1892/4", "110 00 Praha"],
      countryLine: "Česká republika",
    },
    googleBadge: {
      label: "Google recenzie",
    },
    schema: {
      contactType: "zákaznícka podpora",
      availableLanguage: ["Slovak", "Czech", "English"],
      telephone: "+420 776 292 799",
    },
    breadcrumb: {
      home: "Domov",
      contact: "Kontakt",
    },
  },
};

const ContactLanguageContext = createContext<ContactLang | null>(null);

export const ContactLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();
  const value = translations[language] ?? translations.EN;
  return <ContactLanguageContext.Provider value={value}>{children}</ContactLanguageContext.Provider>;
};

export const useContactLang = () => {
  const ctx = useContext(ContactLanguageContext);
  if (!ctx) throw new Error("useContactLang must be used inside ContactLanguageProvider");
  return ctx;
};
