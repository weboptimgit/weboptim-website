import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { glossaryTranslations } from "@/contexts/LanguageGlossary";
import { staticPageSlugs } from "@/config/domains";
import { glossaryTermsData } from "@/data/glossary-terms";

// Transform glossaryTermsData to display format based on language
const getGlossaryTerms = (language: Language) => {
  return Object.entries(glossaryTermsData).map(([key, data]) => ({
    term: data.content[language].term,
    definition: data.content[language].shortDefinition,
    category: data.category,
    hasPage: true,
    slug: data.slugs[language],
  }));
};

// Static terms without detail pages (displayed in current language)
const staticTerms = [
  {
    termKey: "Backend",
    definitions: {
      EN: "The server-side of a website or application that handles data processing, storage, and business logic. Users don't interact with it directly.",
      CZ: "Serverová strana webu nebo aplikace, která zajišťuje zpracování dat, ukládání a obchodní logiku. Uživatelé s ní přímo neinteragují.",
      SK: "Serverová strana webu alebo aplikácie, ktorá zabezpečuje spracovanie dát, ukladanie a obchodnú logiku. Používatelia s ňou priamo neinteragujú.",
    },
    category: "Development",
  },
  {
    termKey: "Conversion Rate",
    definitions: {
      EN: "The percentage of website visitors who complete a desired action, such as making a purchase, signing up for a newsletter, or filling out a form.",
      CZ: "Procento návštěvníků webu, kteří dokončí požadovanou akci, jako je nákup, přihlášení k newsletteru nebo vyplnění formuláře.",
      SK: "Percento návštevníkov webu, ktorí dokončia požadovanú akciu, ako je nákup, prihlásenie na newsletter alebo vyplnenie formulára.",
    },
    category: "Marketing",
  },
  {
    termKey: "CSS",
    definitions: {
      EN: "Cascading Style Sheets - a styling language used to describe how HTML elements should be displayed, including colors, layouts, and fonts.",
      CZ: "Kaskádové styly - stylovací jazyk používaný k popisu vzhledu HTML elementů včetně barev, rozvržení a písem.",
      SK: "Kaskádové štýly - štýlovací jazyk používaný na popis vzhľadu HTML elementov vrátane farieb, rozloženia a písiem.",
    },
    category: "Development",
  },
  {
    termKey: "Domain",
    definitions: {
      EN: "The address where your website can be found on the internet (e.g., www.example.com). It's the human-readable form of an IP address.",
      CZ: "Adresa, kde lze najít váš web na internetu (např. www.example.com). Je to čitelná forma IP adresy.",
      SK: "Adresa, kde možno nájsť váš web na internete (napr. www.example.com). Je to čitateľná forma IP adresy.",
    },
    category: "General",
  },
  {
    termKey: "E-commerce",
    definitions: {
      EN: "Electronic commerce - the buying and selling of goods or services over the internet, including online stores and digital marketplaces.",
      CZ: "Elektronický obchod - nákup a prodej zboží nebo služeb přes internet včetně online obchodů a digitálních tržišť.",
      SK: "Elektronický obchod - nákup a predaj tovaru alebo služieb cez internet vrátane online obchodov a digitálnych trhov.",
    },
    category: "Business",
  },
  {
    termKey: "Frontend",
    definitions: {
      EN: "The client-side of a website or application - everything users see and interact with directly, including layout, buttons, images, and text.",
      CZ: "Klientská strana webu nebo aplikace - vše, co uživatelé vidí a s čím přímo interagují, včetně rozvržení, tlačítek, obrázků a textu.",
      SK: "Klientska strana webu alebo aplikácie - všetko, čo používatelia vidia a s čím priamo interagujú, vrátane rozloženia, tlačidiel, obrázkov a textu.",
    },
    category: "Development",
  },
  {
    termKey: "Hosting",
    definitions: {
      EN: "A service that stores your website files on a server and makes them accessible on the internet. Without hosting, your website wouldn't be visible online.",
      CZ: "Služba, která ukládá soubory webu na server a zpřístupňuje je na internetu. Bez hostingu by váš web nebyl online viditelný.",
      SK: "Služba, ktorá ukladá súbory webu na server a sprístupňuje ich na internete. Bez hostingu by váš web nebol online viditeľný.",
    },
    category: "General",
  },
  {
    termKey: "HTML",
    definitions: {
      EN: "HyperText Markup Language - the standard language used to create and structure content on web pages, defining elements like headings, paragraphs, and links.",
      CZ: "Značkovací jazyk pro tvorbu webových stránek - standardní jazyk pro vytváření a strukturování obsahu na webových stránkách.",
      SK: "Značkovací jazyk pre tvorbu webových stránok - štandardný jazyk na vytváranie a štruktúrovanie obsahu na webových stránkach.",
    },
    category: "Development",
  },
  {
    termKey: "JavaScript",
    definitions: {
      EN: "A programming language that enables interactive and dynamic features on websites, such as animations, form validation, and real-time updates.",
      CZ: "Programovací jazyk, který umožňuje interaktivní a dynamické funkce na webech, jako jsou animace, validace formulářů a aktualizace v reálném čase.",
      SK: "Programovací jazyk, ktorý umožňuje interaktívne a dynamické funkcie na weboch, ako sú animácie, validácia formulárov a aktualizácie v reálnom čase.",
    },
    category: "Development",
  },
  {
    termKey: "Landing Page",
    definitions: {
      EN: "A standalone web page created specifically for a marketing campaign, designed to convert visitors into leads or customers through a focused call-to-action.",
      CZ: "Samostatná webová stránka vytvořená speciálně pro marketingovou kampaň, navržená k přeměně návštěvníků na leady nebo zákazníky.",
      SK: "Samostatná webová stránka vytvorená špeciálne pre marketingovú kampaň, navrhnutá na premenu návštevníkov na leady alebo zákazníkov.",
    },
    category: "Marketing",
  },
  {
    termKey: "Mobile-First",
    definitions: {
      EN: "A design approach that prioritizes the mobile user experience first, then scales up to larger screens. This ensures optimal performance on smartphones.",
      CZ: "Designový přístup, který upřednostňuje mobilní uživatelskou zkušenost a poté škáluje na větší obrazovky.",
      SK: "Dizajnový prístup, ktorý uprednostňuje mobilnú používateľskú skúsenosť a potom škáluje na väčšie obrazovky.",
    },
    category: "Design",
  },
  {
    termKey: "MVP",
    definitions: {
      EN: "Minimum Viable Product - the most basic version of a product with just enough features to satisfy early customers and gather feedback for future development.",
      CZ: "Minimální životaschopný produkt - nejzákladnější verze produktu s dostatkem funkcí pro uspokojení prvních zákazníků a sběr zpětné vazby.",
      SK: "Minimálny životaschopný produkt - najzákladnejšia verzia produktu s dostatkom funkcií na uspokojenie prvých zákazníkov a zber spätnej väzby.",
    },
    category: "Business",
  },
  {
    termKey: "React",
    definitions: {
      EN: "A popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components.",
      CZ: "Populární JavaScript knihovna pro vytváření uživatelských rozhraní, zejména jednostránkových aplikací. Umožňuje vytvářet znovupoužitelné UI komponenty.",
      SK: "Populárna JavaScript knižnica na vytváranie používateľských rozhraní, najmä jednostránkových aplikácií. Umožňuje vytvárať znovupoužiteľné UI komponenty.",
    },
    category: "Development",
  },
  {
    termKey: "Responsive Design",
    definitions: {
      EN: "An approach to web design that makes pages render well on all devices and screen sizes, automatically adjusting layout and content.",
      CZ: "Přístup k webdesignu, který zajišťuje správné zobrazení stránek na všech zařízeních a velikostech obrazovek.",
      SK: "Prístup k webdizajnu, ktorý zabezpečuje správne zobrazenie stránok na všetkých zariadeniach a veľkostiach obrazoviek.",
    },
    category: "Design",
  },
  {
    termKey: "SEO",
    definitions: {
      EN: "Search Engine Optimization - the practice of improving a website to increase its visibility in search engine results, driving more organic traffic.",
      CZ: "Optimalizace pro vyhledávače - praxe zlepšování webu pro zvýšení jeho viditelnosti ve výsledcích vyhledávání.",
      SK: "Optimalizácia pre vyhľadávače - prax zlepšovania webu na zvýšenie jeho viditeľnosti vo výsledkoch vyhľadávania.",
    },
    category: "Marketing",
  },
  {
    termKey: "SSL Certificate",
    definitions: {
      EN: "Secure Sockets Layer - a security protocol that encrypts data between a web server and browser, indicated by 'https' and a padlock icon in the address bar.",
      CZ: "Bezpečnostní protokol šifrující data mezi webovým serverem a prohlížečem, označený 'https' a ikonou zámku v adresním řádku.",
      SK: "Bezpečnostný protokol šifrujúci dáta medzi webovým serverom a prehliadačom, označený 'https' a ikonou zámku v adresnom riadku.",
    },
    category: "Security",
  },
  {
    termKey: "UI",
    definitions: {
      EN: "User Interface - the visual elements users interact with on a website or app, including buttons, icons, spacing, typography, and color schemes.",
      CZ: "Uživatelské rozhraní - vizuální prvky, se kterými uživatelé interagují na webu nebo v aplikaci.",
      SK: "Používateľské rozhranie - vizuálne prvky, s ktorými používatelia interagujú na webe alebo v aplikácii.",
    },
    category: "Design",
  },
  {
    termKey: "UX",
    definitions: {
      EN: "User Experience - the overall experience a user has when interacting with a product, focusing on ease of use, efficiency, and satisfaction.",
      CZ: "Uživatelská zkušenost - celková zkušenost uživatele při interakci s produktem, zaměřená na snadnost použití a spokojenost.",
      SK: "Používateľská skúsenosť - celková skúsenosť používateľa pri interakcii s produktom, zameraná na jednoduchosť použitia a spokojnosť.",
    },
    category: "Design",
  },
  {
    termKey: "Wireframe",
    definitions: {
      EN: "A basic visual guide showing the skeletal structure of a webpage, outlining layout and functionality before detailed design work begins.",
      CZ: "Základní vizuální průvodce ukazující kostru webové stránky, nastiňující rozvržení a funkčnost před detailním designem.",
      SK: "Základný vizuálny sprievodca ukazujúci kostru webovej stránky, naznačujúci rozloženie a funkčnosť pred detailným dizajnom.",
    },
    category: "Design",
  },
  {
    termKey: "WordPress",
    definitions: {
      EN: "The world's most popular content management system, powering over 40% of websites. It's known for its flexibility and extensive plugin ecosystem.",
      CZ: "Nejpopulárnější systém správy obsahu na světě, pohánějící přes 40 % webů. Je známý svou flexibilitou a rozsáhlým ekosystémem pluginů.",
      SK: "Najpopulárnejší systém správy obsahu na svete, poháňajúci viac ako 40 % webov. Je známy svojou flexibilitou a rozsiahlym ekosystémom pluginov.",
    },
    category: "Development",
  },
];

const getStaticTerms = (language: Language) => {
  return staticTerms.map((item) => ({
    term: item.termKey,
    definition: item.definitions[language],
    category: item.category,
    hasPage: false,
    slug: undefined,
  }));
};

const getAllTerms = (language: Language) => {
  const dynamicTerms = getGlossaryTerms(language);
  const staticList = getStaticTerms(language);
  return [...dynamicTerms, ...staticList];
};

const categories = ["All", "Development", "Design", "Marketing", "Business", "Security", "General"];
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const ITEMS_PER_PAGE = 12;

const Glossary = () => {
  const { language } = useLanguage();
  const t = glossaryTranslations[language];
  const glossaryPath = `/${staticPageSlugs.glossary[language]}`;
  
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const allTerms = useMemo(() => getAllTerms(language), [language]);

  const filteredTerms = useMemo(() => {
    return allTerms
      .filter((item) => {
        const matchesSearch =
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        
        let matchesLetter = true;
        if (activeLetter) {
          matchesLetter = item.term.toUpperCase().startsWith(activeLetter);
        }
        
        return matchesSearch && matchesCategory && matchesLetter;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [allTerms, searchTerm, activeCategory, activeLetter]);

  const visibleTerms = filteredTerms.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTerms.length;

  type TermItem = { term: string; definition: string; category: string; hasPage: boolean; slug?: string };
  
  const groupedTerms = visibleTerms.reduce(
    (acc, term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(term);
      return acc;
    },
    {} as Record<string, TermItem[]>,
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleLetterClick = (letter: string) => {
    setActiveLetter(activeLetter === letter ? null : letter);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const getCategoryLabel = (category: string) => {
    return t.categories[category as keyof typeof t.categories] || category;
  };

  return (
    <>
      <SEO titleKey="glossary" />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="pt-52 pb-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {t.title} <span className="text-gradient">{t.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleCount(ITEMS_PER_PAGE);
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* A-Z Letter Filter */}
              <div className="flex flex-wrap gap-0.5 justify-center">
                <button
                  onClick={() => handleLetterClick("")}
                  className={`px-2 h-7 rounded text-xs font-medium transition-all ${
                    !activeLetter
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {t.allLetters}
                </button>
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleLetterClick(letter)}
                    className={`w-6 h-7 rounded text-xs font-medium transition-all ${
                      activeLetter === letter
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {getCategoryLabel(category)}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {Object.keys(groupedTerms).length > 0 ? (
              <>
                {Object.entries(groupedTerms).map(([letter, terms], letterIndex) => (
                  <motion.div
                    key={letter}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: letterIndex * 0.05 }}
                    className="mb-10"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                        {letter}
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="space-y-4 pl-16">
                      {terms.map((item, index) => (
                        <motion.div
                          key={item.term}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="glass rounded-xl p-6"
                        >
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-lg font-display font-semibold text-foreground">{item.term}</h3>
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium flex-shrink-0">
                              {getCategoryLabel(item.category)}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">{item.definition}</p>
                          {item.hasPage && item.slug && (
                            <Link to={`${glossaryPath}/${item.slug}`}>
                              <Button variant="outline" size="sm" className="group">
                                {t.learnMore}
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Load More / Counter */}
                <div className="text-center mt-12 space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {t.showingOf
                      .replace("{shown}", String(visibleTerms.length))
                      .replace("{total}", String(filteredTerms.length))}
                  </p>
                  {hasMore && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleLoadMore}
                      className="group"
                    >
                      {t.loadMore}
                      <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <p className="text-muted-foreground text-lg">{t.noResults}</p>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Glossary;
