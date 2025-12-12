export interface PricingOption {
  id: string;
  label: string;
  labelCz?: string;
  labelSk?: string;
  price: number;
  monthlyPrice?: number;
  category?: string;
}

export interface PricingSection {
  id: string;
  title: string;
  titleCz?: string;
  titleSk?: string;
  type: 'radio' | 'checkbox' | 'number';
  required?: boolean;
  options?: PricingOption[];
  min?: number;
  max?: number;
  pricePerUnit?: number;
}

// EUR to CZK conversion rate
export const EUR_TO_CZK = 25.5;

export const designTypes: PricingOption[] = [
  { id: 'custom', label: 'Custom responsive design', labelCz: 'Vlastní responzivní design', labelSk: 'Vlastný responzívny dizajn', price: 800 },
  { id: 'figma', label: 'I already have a design (Figma/PSD/XD)', labelCz: 'Již mám design (Figma/PSD/XD)', labelSk: 'Už mám dizajn (Figma/PSD/XD)', price: 400 },
  { id: 'theme', label: 'I chose a theme/template (WordPress/Themeforest)', labelCz: 'Vybral jsem šablonu (WordPress/Themeforest)', labelSk: 'Vybral som šablónu (WordPress/Themeforest)', price: 200 },
  { id: 'builder', label: 'I chose a builder layout (Divi/Elementor)', labelCz: 'Vybral jsem layout builderu (Divi/Elementor)', labelSk: 'Vybral som layout builderu (Divi/Elementor)', price: 150 },
];

export const pageCountOptions: PricingOption[] = [
  { id: 'one', label: 'One Page', labelCz: 'Jedna stránka', labelSk: 'Jedna stránka', price: 0 },
  { id: 'up-to-5', label: 'Up to 5 pages', labelCz: 'Do 5 stránek', labelSk: 'Do 5 stránok', price: 200 },
  { id: '6-10', label: '6–10 pages', labelCz: '6–10 stránek', labelSk: '6–10 stránok', price: 400 },
  { id: '10-15', label: '10–15 pages', labelCz: '10–15 stránek', labelSk: '10–15 stránok', price: 600 },
];

export const functionalityOptions: PricingOption[] = [
  // Basic Features
  { id: 'slider', label: 'Image Slider / Carousel', labelCz: 'Obrázkový slider', labelSk: 'Obrázkový slider', price: 50, category: 'basic' },
  { id: 'blog', label: 'Blog / News Section', labelCz: 'Blog / Novinky', labelSk: 'Blog / Novinky', price: 100, category: 'basic' },
  { id: 'gallery', label: 'Photo Gallery', labelCz: 'Fotogalerie', labelSk: 'Fotogaléria', price: 75, category: 'basic' },
  { id: 'breadcrumbs', label: 'Breadcrumbs Navigation', labelCz: 'Drobečková navigace', labelSk: 'Drobčeková navigácia', price: 25, category: 'basic' },
  { id: 'search', label: 'Site Search', labelCz: 'Vyhledávání', labelSk: 'Vyhľadávanie', price: 75, category: 'basic' },
  { id: 'faq', label: 'FAQ Section', labelCz: 'Často kladené dotazy', labelSk: 'Často kladené otázky', price: 50, category: 'basic' },
  { id: 'team', label: 'Team Members Section', labelCz: 'Sekce týmu', labelSk: 'Sekcia tímu', price: 50, category: 'basic' },
  { id: 'reviews', label: 'Reviews / Testimonials', labelCz: 'Recenze / Reference', labelSk: 'Recenzie / Referencie', price: 75, category: 'basic' },
  { id: 'tables', label: 'Data Tables', labelCz: 'Datové tabulky', labelSk: 'Dátové tabuľky', price: 50, category: 'basic' },
  { id: 'pricing-table', label: 'Pricing Table', labelCz: 'Cenová tabulka', labelSk: 'Cenová tabuľka', price: 75, category: 'basic' },
  { id: 'google-maps', label: 'Google Maps Integration', labelCz: 'Integrace Google Maps', labelSk: 'Integrácia Google Maps', price: 50, category: 'basic' },
  
  // Forms & Communication
  { id: 'contact-simple', label: 'Simple Contact Form', labelCz: 'Jednoduchý kontaktní formulář', labelSk: 'Jednoduchý kontaktný formulár', price: 50, category: 'forms' },
  { id: 'contact-complex', label: 'Complex Form (multi-step, conditional)', labelCz: 'Komplexní formulář (vícekrokový)', labelSk: 'Komplexný formulár (viackrokový)', price: 150, category: 'forms' },
  { id: 'newsletter', label: 'Newsletter Subscription', labelCz: 'Přihlášení k newsletteru', labelSk: 'Prihlásenie k newsletteru', price: 75, category: 'forms' },
  { id: 'comments', label: 'Comments System', labelCz: 'Systém komentářů', labelSk: 'Systém komentárov', price: 100, category: 'forms' },
  { id: 'live-chat', label: 'Live Chat Integration', labelCz: 'Integrace live chatu', labelSk: 'Integrácia live chatu', price: 75, category: 'forms' },
  
  // Social & Sharing
  { id: 'social-sharing', label: 'Social Sharing Buttons', labelCz: 'Tlačítka pro sdílení', labelSk: 'Tlačidlá na zdieľanie', price: 25, category: 'social' },
  { id: 'social-login', label: 'Social Login (Google, Facebook)', labelCz: 'Přihlášení přes sociální sítě', labelSk: 'Prihlásenie cez sociálne siete', price: 150, category: 'social' },
  { id: 'social-feed', label: 'Social Media Feed', labelCz: 'Feed sociálních sítí', labelSk: 'Feed sociálnych sietí', price: 100, category: 'social' },
  
  // Advanced Features
  { id: 'popups', label: 'Popups / Modals', labelCz: 'Vyskakovací okna', labelSk: 'Vyskakovacie okná', price: 75, category: 'advanced' },
  { id: 'cookies', label: 'Cookies Bar + Analytics Setup', labelCz: 'Cookies lišta + Analytics', labelSk: 'Cookies lišta + Analytics', price: 100, category: 'advanced' },
  { id: 'user-verification', label: 'User Registration & Verification', labelCz: 'Registrace a ověření uživatelů', labelSk: 'Registrácia a overenie používateľov', price: 200, category: 'advanced' },
  { id: 'mega-menu', label: 'Mega Menu Navigation', labelCz: 'Mega menu navigace', labelSk: 'Mega menu navigácia', price: 100, category: 'advanced' },
  { id: 'multilingual', label: 'Multilingual Support (WPML/Polylang)', labelCz: 'Vícejazyčná podpora', labelSk: 'Viacjazyčná podpora', price: 200, category: 'advanced' },
  { id: 'dynamic-content', label: 'Dynamic Content / CPT', labelCz: 'Dynamický obsah / CPT', labelSk: 'Dynamický obsah / CPT', price: 150, category: 'advanced' },
  { id: 'filters', label: 'Advanced Filters & Sorting', labelCz: 'Pokročilé filtry a řazení', labelSk: 'Pokročilé filtre a radenie', price: 150, category: 'advanced' },
  
  // E-commerce & Business
  { id: 'payments', label: 'Payment Gateway Integration', labelCz: 'Platební brána', labelSk: 'Platobná brána', price: 200, category: 'ecommerce' },
  { id: 'booking', label: 'Booking / Reservation System', labelCz: 'Rezervační systém', labelSk: 'Rezervačný systém', price: 300, category: 'ecommerce' },
  { id: 'crm', label: 'CRM Integration', labelCz: 'Integrace CRM', labelSk: 'Integrácia CRM', price: 250, category: 'ecommerce' },
  { id: 'lms', label: 'LMS / E-learning Platform', labelCz: 'LMS / E-learning platforma', labelSk: 'LMS / E-learning platforma', price: 500, category: 'ecommerce' },
  { id: 'woocommerce', label: 'WooCommerce E-shop', labelCz: 'WooCommerce E-shop', labelSk: 'WooCommerce E-shop', price: 400, category: 'ecommerce' },
  { id: 'memberships', label: 'Membership / Subscription', labelCz: 'Členství / Předplatné', labelSk: 'Členstvo / Predplatné', price: 300, category: 'ecommerce' },
];

export const functionalityCategories = [
  { id: 'basic', label: 'Basic Features', labelCz: 'Základní funkce', labelSk: 'Základné funkcie' },
  { id: 'forms', label: 'Forms & Communication', labelCz: 'Formuláře a komunikace', labelSk: 'Formuláre a komunikácia' },
  { id: 'social', label: 'Social & Sharing', labelCz: 'Sociální sítě', labelSk: 'Sociálne siete' },
  { id: 'advanced', label: 'Advanced Features', labelCz: 'Pokročilé funkce', labelSk: 'Pokročilé funkcie' },
  { id: 'ecommerce', label: 'E-commerce & Business', labelCz: 'E-commerce a business', labelSk: 'E-commerce a business' },
];

export const languageOptions: PricingOption[] = [
  { id: 'en', label: 'English (EN)', price: 0 },
  { id: 'cz', label: 'Czech (CZ)', price: 0 },
  { id: 'sk', label: 'Slovak (SK)', price: 0 },
  { id: 'de', label: 'German (DE)', price: 100 },
  { id: 'hu', label: 'Hungarian (HU)', price: 100 },
  { id: 'ru', label: 'Russian (RU)', price: 100 },
  { id: 'pl', label: 'Polish (PL)', price: 100 },
  { id: 'es', label: 'Spanish (ES)', price: 100 },
  { id: 'other', label: 'Other', labelCz: 'Jiný', labelSk: 'Iný', price: 100 },
];

export const maintenanceOptions: PricingOption[] = [
  { id: 'none', label: 'No maintenance', labelCz: 'Bez údržby', labelSk: 'Bez údržby', price: 0, monthlyPrice: 0 },
  { id: 'standard', label: 'Standard Package (security, updates, backups)', labelCz: 'Standardní balíček (bezpečnost, aktualizace, zálohy)', labelSk: 'Štandardný balíček (bezpečnosť, aktualizácie, zálohy)', price: 0, monthlyPrice: 50 },
  { id: 'optim', label: 'Optim Package (all + optimization + monitoring)', labelCz: 'Optim balíček (vše + optimalizace + monitoring)', labelSk: 'Optim balíček (všetko + optimalizácia + monitoring)', price: 0, monthlyPrice: 100 },
];

export const marketingOneTimeOptions: PricingOption[] = [
  { id: 'seo-audit', label: 'SEO Audit', labelCz: 'SEO audit', labelSk: 'SEO audit', price: 200 },
  { id: 'onpage-seo', label: 'On-page SEO Optimization', labelCz: 'On-page SEO optimalizace', labelSk: 'On-page SEO optimalizácia', price: 300 },
  { id: 'technical-seo', label: 'Technical SEO', labelCz: 'Technické SEO', labelSk: 'Technické SEO', price: 250 },
  { id: 'competitor-analysis', label: 'Competitor Analysis', labelCz: 'Analýza konkurence', labelSk: 'Analýza konkurencie', price: 200 },
  { id: 'keyword-research', label: 'Keyword Research', labelCz: 'Výzkum klíčových slov', labelSk: 'Výskum kľúčových slov', price: 150 },
  { id: 'ppc-setup', label: 'PPC Campaign Setup', labelCz: 'Nastavení PPC kampaní', labelSk: 'Nastavenie PPC kampaní', price: 300 },
  { id: 'speed-optimization', label: 'Speed Optimization', labelCz: 'Optimalizace rychlosti', labelSk: 'Optimalizácia rýchlosti', price: 200 },
  { id: 'security-setup', label: 'Security Hardening', labelCz: 'Zabezpečení webu', labelSk: 'Zabezpečenie webu', price: 150 },
  { id: 'analytics-setup', label: 'Analytics & Tracking Setup', labelCz: 'Nastavení analytiky', labelSk: 'Nastavenie analytiky', price: 100 },
  { id: 'gmb-listing', label: 'Google Maps / GMB Listing', labelCz: 'Google Maps / GMB', labelSk: 'Google Maps / GMB', price: 100 },
  { id: 'reporting-setup', label: 'Reporting Dashboard Setup', labelCz: 'Nastavení reportingu', labelSk: 'Nastavenie reportingu', price: 150 },
];

export const marketingMonthlyOptions: PricingOption[] = [
  { id: 'ppc-basic', label: 'PPC Management - Basic', labelCz: 'Správa PPC - Basic', labelSk: 'Správa PPC - Basic', price: 0, monthlyPrice: 200 },
  { id: 'ppc-standard', label: 'PPC Management - Standard', labelCz: 'Správa PPC - Standard', labelSk: 'Správa PPC - Standard', price: 0, monthlyPrice: 400 },
  { id: 'ppc-premium', label: 'PPC Management - Premium', labelCz: 'Správa PPC - Premium', labelSk: 'Správa PPC - Premium', price: 0, monthlyPrice: 800 },
  { id: 'linkbuilding-basic', label: 'Linkbuilding - Basic (5 links/month)', labelCz: 'Linkbuilding - Basic (5 odkazů/měsíc)', labelSk: 'Linkbuilding - Basic (5 odkazov/mesiac)', price: 0, monthlyPrice: 150 },
  { id: 'linkbuilding-standard', label: 'Linkbuilding - Standard (10 links/month)', labelCz: 'Linkbuilding - Standard (10 odkazů/měsíc)', labelSk: 'Linkbuilding - Standard (10 odkazov/mesiac)', price: 0, monthlyPrice: 300 },
  { id: 'linkbuilding-premium', label: 'Linkbuilding - Premium (20 links/month)', labelCz: 'Linkbuilding - Premium (20 odkazů/měsíc)', labelSk: 'Linkbuilding - Premium (20 odkazov/mesiac)', price: 0, monthlyPrice: 500 },
  { id: 'content-monthly', label: 'Monthly Content Updates', labelCz: 'Měsíční aktualizace obsahu', labelSk: 'Mesačné aktualizácie obsahu', price: 0, monthlyPrice: 150 },
  { id: 'seo-monthly', label: 'Monthly SEO Optimization', labelCz: 'Měsíční SEO optimalizace', labelSk: 'Mesačná SEO optimalizácia', price: 0, monthlyPrice: 250 },
];

export const hostingOptions: PricingOption[] = [
  { id: 'have', label: 'I already have domain & hosting', labelCz: 'Již mám doménu a hosting', labelSk: 'Už mám doménu a hosting', price: 0, monthlyPrice: 0 },
  { id: 'basic', label: 'Basic Hosting (shared, 5GB)', labelCz: 'Basic hosting (sdílený, 5GB)', labelSk: 'Basic hosting (zdieľaný, 5GB)', price: 0, monthlyPrice: 10 },
  { id: 'standard', label: 'Standard Hosting (VPS, 20GB)', labelCz: 'Standard hosting (VPS, 20GB)', labelSk: 'Standard hosting (VPS, 20GB)', price: 0, monthlyPrice: 25 },
  { id: 'premium', label: 'Premium Hosting (dedicated, 50GB+)', labelCz: 'Premium hosting (dedikovaný, 50GB+)', labelSk: 'Premium hosting (dedikovaný, 50GB+)', price: 0, monthlyPrice: 50 },
];

export const ARTICLE_PRICE = 30; // EUR per article

export const calculatorTranslations: Record<string, Record<string, string>> = {
  en: {
    title: 'Website Price Calculator',
    subtitle: 'Get an instant estimate for your project',
    designType: 'Design Type',
    pageCount: 'Number of Pages',
    functionalities: 'Requested Functionalities',
    searchPlaceholder: 'Search functionalities...',
    languages: 'Language Versions',
    maintenance: 'Website Maintenance',
    marketingOneTime: 'Marketing Services (One-time)',
    marketingMonthly: 'Marketing Services (Monthly)',
    articles: 'Number of Articles',
    articlesHelper: 'Blog articles / content pages to create',
    hosting: 'Domain & Hosting',
    discount: 'Discount',
    discountHelper: 'Enter discount percentage',
    summary: 'Price Summary',
    websitePrice: 'Estimated Website Price',
    afterDiscount: 'Price After Discount',
    monthlyFee: 'Monthly Fee',
    preliminary: 'Preliminary Total',
    disclaimer: 'Price is only indicative and depends on complexity. Final price will not exceed the estimate by more than ~25%.',
    getQuote: 'Get Detailed Quote',
    required: 'Required',
    selected: 'selected',
    perArticle: 'per article',
    perMonth: '/month',
  },
  cz: {
    title: 'Kalkulačka ceny webu',
    subtitle: 'Získejte okamžitý odhad pro váš projekt',
    designType: 'Typ designu',
    pageCount: 'Počet stránek',
    functionalities: 'Požadované funkce',
    searchPlaceholder: 'Hledat funkce...',
    languages: 'Jazykové verze',
    maintenance: 'Údržba webu',
    marketingOneTime: 'Marketingové služby (jednorázově)',
    marketingMonthly: 'Marketingové služby (měsíčně)',
    articles: 'Počet článků',
    articlesHelper: 'Blogové články / obsahové stránky k vytvoření',
    hosting: 'Doména a hosting',
    discount: 'Sleva',
    discountHelper: 'Zadejte procento slevy',
    summary: 'Souhrn ceny',
    websitePrice: 'Odhadovaná cena webu',
    afterDiscount: 'Cena po slevě',
    monthlyFee: 'Měsíční poplatek',
    preliminary: 'Předběžný součet',
    disclaimer: 'Cena je pouze orientační a závisí na složitosti. Finální cena nepřekročí odhad o více než ~25%.',
    getQuote: 'Získat detailní nabídku',
    required: 'Povinné',
    selected: 'vybráno',
    perArticle: 'za článek',
    perMonth: '/měsíc',
  },
  sk: {
    title: 'Kalkulačka ceny webu',
    subtitle: 'Získajte okamžitý odhad pre váš projekt',
    designType: 'Typ dizajnu',
    pageCount: 'Počet stránok',
    functionalities: 'Požadované funkcie',
    searchPlaceholder: 'Hľadať funkcie...',
    languages: 'Jazykové verzie',
    maintenance: 'Údržba webu',
    marketingOneTime: 'Marketingové služby (jednorazovo)',
    marketingMonthly: 'Marketingové služby (mesačne)',
    articles: 'Počet článkov',
    articlesHelper: 'Blogové články / obsahové stránky na vytvorenie',
    hosting: 'Doména a hosting',
    discount: 'Zľava',
    discountHelper: 'Zadajte percento zľavy',
    summary: 'Súhrn ceny',
    websitePrice: 'Odhadovaná cena webu',
    afterDiscount: 'Cena po zľave',
    monthlyFee: 'Mesačný poplatok',
    preliminary: 'Predbežný súčet',
    disclaimer: 'Cena je len orientačná a závisí od zložitosti. Finálna cena neprekročí odhad o viac než ~25%.',
    getQuote: 'Získať detailnú ponuku',
    required: 'Povinné',
    selected: 'vybraných',
    perArticle: 'za článok',
    perMonth: '/mesiac',
  },
};
