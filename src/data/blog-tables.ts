export type ReviewsPlatformRow = {
  platform: string;
  audience: string;
  businessType: string;
  trust: string;
  conversion: string;
  seo: string;
  locality: string;
};

export const reviewsPlatformsRows: ReviewsPlatformRow[] = [
  {
    platform: "Google Business",
    audience: "Široká verejnosť, lokálni zákazníci",
    businessType: "Všetky lokálne firmy",
    trust: "Vysoká",
    conversion: "Veľmi silný",
    seo: "Veľmi silný (lokálne SEO)",
    locality: "Celosvetovo",
  },
  {
    platform: "Facebook",
    audience: "Komunita a sledovatelia",
    businessType: "Lokálne firmy, služby",
    trust: "Stredná",
    conversion: "Stredná",
    seo: "Nízky",
    locality: "Celosvetovo",
  },
  {
    platform: "TripAdvisor",
    audience: "Cestovatelia, turisti",
    businessType: "Reštaurácie, hotely, atrakcie",
    trust: "Vysoká",
    conversion: "Silný",
    seo: "Stredná",
    locality: "Celosvetovo",
  },
  {
    platform: "Mapy.cz / Firmy.cz",
    audience: "Českí užívatelia",
    businessType: "Lokálne firmy v ČR",
    trust: "Stredná až vysoká",
    conversion: "Stredná",
    seo: "Stredná",
    locality: "Česká republika",
  },
  {
    platform: "Apple Maps",
    audience: "Používatelia Apple zariadení",
    businessType: "Lokálne firmy",
    trust: "Stredná",
    conversion: "Stredná",
    seo: "Low to medium",
    locality: "Hlavne v Apple ekosystéme",
  },
  {
    platform: "Booking.com",
    audience: "Turisti, cestujúci",
    businessType: "Hotely, penzióny, ubytovanie",
    trust: "Veľmi vysoká (verifikované)",
    conversion: "Veľmi silný",
    seo: "Žiadny (SEO mimo Booking)",
    locality: "Celosvetovo",
  },
  {
    platform: "Heureka.sk / Heureka.cz",
    audience: "Online zákazníci",
    businessType: "E-shopy, predajcovia",
    trust: "Vysoká (overené nákupy)",
    conversion: "Silný",
    seo: "Nízky",
    locality: "Slovensko a Česká republika",
  },
];
