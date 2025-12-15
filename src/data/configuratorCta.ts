import { Language } from "@/contexts/LanguageContext";

export const configuratorCtaText: Record<
  Language,
  {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    offerText: string;
  }
> = {
  SK: {
    badge: "Novinka",
    title: "Vyskúšajte konfigurátor webu",
    subtitle: "Zodpovedzte pár otázok a my vám pripravíme riešenie na mieru.",
    cta: "Spustiť konfigurátor",
    offerText:
      'Vyplňte konfigurátor a pri vážnom záujme získajte <strong>10% zľavu.</strong>',
  },

  CZ: {
    badge: "Novinka",
    title: "Vyzkoušejte konfigurátor webu",
    subtitle: "Odpovězte na pár otázek a připravíme vám řešení na míru.",
    cta: "Spustit konfigurátor",
    offerText:
      'Vyplňte konfigurátor a při vážném zájmu získejte <strong>10% slevu.</strong>',
  },

  EN: {
    badge: "New",
    title: "Try the website configurator",
    subtitle: "Answer a few questions and we’ll prepare a tailored solution.",
    cta: "Start configurator",
    offerText:
      'Complete the configurator and receive a <strong>10% discount</strong> if you proceed with the project.',
  },
};
