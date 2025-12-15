import type { Language } from "@/contexts/LanguageContext";

export const configuratorCtaText: Record<
  Language,
  { badge: string; title: string; subtitle: string; cta: string }
> = {
  EN: {
    badge: "New",
    title: "Website configurator",
    subtitle: "Answer a few questions and we’ll prepare a clear proposal.",
    cta: "Open configurator",
  },
  CZ: {
    badge: "Novinka",
    title: "Konfigurátor webu",
    subtitle: "Odpovězte na pár otázek a připravíme vám jasný návrh.",
    cta: "Otevřít konfigurátor",
  },
  SK: {
    badge: "Novinka",
    title: "Konfigurátor webu",
    subtitle: "Odpovedzte na pár otázok a pripravíme vám jasný návrh.",
    cta: "Otvoriť konfigurátor",
  },
};
