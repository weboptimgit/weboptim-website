import type { Language } from "@/contexts/LanguageContext";

/* =========================
   TYPES
========================= */

export type ReviewsPlatformRow = {
  platform: string;
  audience: string;
  businessType: string;
  trust: string;
  conversion: string;
  seo: string;
  locality: string;
};

/* =========================
   TABLE META (TITLE + HEADERS)
========================= */

export const reviewsPlatformsTableMeta = {
  title: {
    EN: "Comparison of Review Platforms",
    CZ: "Porovnání platforem pro recenze",
    SK: "Porovnanie platforiem na recenzie",
  },
  headers: {
    EN: [
      "Platform",
      "Target audience",
      "Business type",
      "Review trust",
      "Impact on conversions",
      "SEO / visibility impact",
      "Locality",
    ],
    CZ: [
      "Platforma",
      "Cílová skupina",
      "Typ podnikání",
      "Důvěryhodnost recenzí",
      "Vliv na konverze",
      "Vliv na SEO / viditelnost",
      "Lokalita použití",
    ],
    SK: [
      "Platforma",
      "Cieľová skupina",
      "Typ podnikania",
      "Dôveryhodnosť recenzií",
      "Vplyv na konverzie",
      "Vplyv na SEO / viditeľnosť",
      "Lokalita použitia",
    ],
  },
};

/* =========================
   TRANSLATED TABLE DATA
========================= */

export const reviewsPlatformsRows: Record<Language, ReviewsPlatformRow[]> = {
  EN: [
    {
      platform: "Google Business Profile",
      audience: "General public, local customers",
      businessType: "All local businesses",
      trust: "High",
      conversion: "Very strong",
      seo: "Very strong (local SEO)",
      locality: "Worldwide",
    },
    {
      platform: "Facebook",
      audience: "Community and followers",
      businessType: "Local businesses, services",
      trust: "Medium",
      conversion: "Medium",
      seo: "Low",
      locality: "Worldwide",
    },
    {
      platform: "TripAdvisor",
      audience: "Travelers, tourists",
      businessType: "Restaurants, hotels, attractions",
      trust: "High",
      conversion: "Strong",
      seo: "Medium",
      locality: "Worldwide",
    },
    {
      platform: "Mapy.cz / Firmy.cz",
      audience: "Czech users",
      businessType: "Local businesses in CZ",
      trust: "Medium to high",
      conversion: "Medium",
      seo: "Medium",
      locality: "Czech Republic",
    },
    {
      platform: "Apple Maps",
      audience: "Apple device users",
      businessType: "Local businesses",
      trust: "Medium",
      conversion: "Medium",
      seo: "Low to medium",
      locality: "Mainly Apple ecosystem",
    },
    {
      platform: "Booking.com",
      audience: "Tourists, travelers",
      businessType: "Hotels, guesthouses, accommodation",
      trust: "Very high (verified stays)",
      conversion: "Very strong",
      seo: "None (SEO stays within Booking)",
      locality: "Worldwide",
    },
    {
      platform: "Heureka",
      audience: "Online shoppers",
      businessType: "E-shops, retailers",
      trust: "High (verified purchases)",
      conversion: "Strong",
      seo: "Low",
      locality: "Slovakia & Czech Republic",
    },
  ],

  CZ: [
    {
      platform: "Google Business Profile",
      audience: "Široká veřejnost, lokální zákazníci",
      businessType: "Všechny lokální firmy",
      trust: "Vysoká",
      conversion: "Velmi silný",
      seo: "Velmi silný (lokální SEO)",
      locality: "Celosvětově",
    },
    {
      platform: "Facebook",
      audience: "Komunita a sledující",
      businessType: "Lokální firmy, služby",
      trust: "Střední",
      conversion: "Střední",
      seo: "Nízký",
      locality: "Celosvětově",
    },
    {
      platform: "TripAdvisor",
      audience: "Cestovatelé, turisté",
      businessType: "Restaurace, hotely, atrakce",
      trust: "Vysoká",
      conversion: "Silný",
      seo: "Střední",
      locality: "Celosvětově",
    },
    {
      platform: "Mapy.cz / Firmy.cz",
      audience: "Čeští uživatelé",
      businessType: "Lokální firmy v ČR",
      trust: "Střední až vysoká",
      conversion: "Střední",
      seo: "Střední",
      locality: "Česká republika",
    },
    {
      platform: "Apple Maps",
      audience: "Uživatelé zařízení Apple",
      businessType: "Lokální firmy",
      trust: "Střední",
      conversion: "Střední",
      seo: "Nízký až střední",
      locality: "Převážně Apple ekosystém",
    },
    {
      platform: "Booking.com",
      audience: "Turisté, cestující",
      businessType: "Hotely, penziony, ubytování",
      trust: "Velmi vysoká (ověřené pobyty)",
      conversion: "Velmi silný",
      seo: "Žádný (SEO zůstává v Bookingu)",
      locality: "Celosvětově",
    },
    {
      platform: "Heureka.cz",
      audience: "Online zákazníci",
      businessType: "E-shopy, prodejci",
      trust: "Vysoká (ověřené nákupy)",
      conversion: "Silný",
      seo: "Nízký",
      locality: "Česká republika",
    },
  ],

  SK: [
    {
      platform: "Google Business Profile",
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
      seo: "Stredný",
      locality: "Celosvetovo",
    },
    {
      platform: "Mapy.cz / Firmy.cz",
      audience: "Českí používatelia",
      businessType: "Lokálne firmy v ČR",
      trust: "Stredná až vysoká",
      conversion: "Stredná",
      seo: "Stredný",
      locality: "Česká republika",
    },
    {
      platform: "Apple Maps",
      audience: "Používatelia Apple zariadení",
      businessType: "Lokálne firmy",
      trust: "Stredná",
      conversion: "Stredná",
      seo: "Nízky až stredný",
      locality: "Najmä Apple ekosystém",
    },
    {
      platform: "Booking.com",
      audience: "Turisti, cestujúci",
      businessType: "Hotely, penzióny, ubytovanie",
      trust: "Veľmi vysoká (overené pobyty)",
      conversion: "Veľmi silný",
      seo: "Žiadny (SEO zostáva v Bookingu)",
      locality: "Celosvetovo",
    },
    {
      platform: "Heureka.sk",
      audience: "Online zákazníci",
      businessType: "E-shopy, predajcovia",
      trust: "Vysoká (overené nákupy)",
      conversion: "Silný",
      seo: "Nízky",
      locality: "Slovensko",
    },
  ],
};
