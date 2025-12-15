import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { glossaryTranslations } from "@/contexts/LanguageGlossary";
import { staticPageSlugs } from "@/config/domains";

const glossaryTerms = [
  {
    term: "API",
    definition:
      "Application Programming Interface - a set of protocols and tools that allows different software applications to communicate with each other.",
    category: "Development",
    hasPage: true,
    slug: "api",
  },
  {
    term: "Backend",
    definition:
      "The server-side of a website or application that handles data processing, storage, and business logic. Users don't interact with it directly.",
    category: "Development",
  },
  {
    term: "CMS",
    definition:
      "Content Management System - software that allows users to create, manage, and modify digital content without needing specialized technical knowledge. Examples include WordPress and Shopify.",
    category: "Development",
    hasPage: true,
    slug: "cms",
  },
  {
    term: "Conversion Rate",
    definition:
      "The percentage of website visitors who complete a desired action, such as making a purchase, signing up for a newsletter, or filling out a form.",
    category: "Marketing",
  },
  {
    term: "CSS",
    definition:
      "Cascading Style Sheets - a styling language used to describe how HTML elements should be displayed, including colors, layouts, and fonts.",
    category: "Development",
  },
  {
    term: "Domain",
    definition:
      "The address where your website can be found on the internet (e.g., www.example.com). It's the human-readable form of an IP address.",
    category: "General",
  },
  {
    term: "E-commerce",
    definition:
      "Electronic commerce - the buying and selling of goods or services over the internet, including online stores and digital marketplaces.",
    category: "Business",
  },
  {
    term: "Frontend",
    definition:
      "The client-side of a website or application - everything users see and interact with directly, including layout, buttons, images, and text.",
    category: "Development",
  },
  {
    term: "Hosting",
    definition:
      "A service that stores your website files on a server and makes them accessible on the internet. Without hosting, your website wouldn't be visible online.",
    category: "General",
  },
  {
    term: "HTML",
    definition:
      "HyperText Markup Language - the standard language used to create and structure content on web pages, defining elements like headings, paragraphs, and links.",
    category: "Development",
  },
  {
    term: "JavaScript",
    definition:
      "A programming language that enables interactive and dynamic features on websites, such as animations, form validation, and real-time updates.",
    category: "Development",
  },
  {
    term: "Landing Page",
    definition:
      "A standalone web page created specifically for a marketing campaign, designed to convert visitors into leads or customers through a focused call-to-action.",
    category: "Marketing",
  },
  {
    term: "Mobile-First",
    definition:
      "A design approach that prioritizes the mobile user experience first, then scales up to larger screens. This ensures optimal performance on smartphones.",
    category: "Design",
  },
  {
    term: "MVP",
    definition:
      "Minimum Viable Product - the most basic version of a product with just enough features to satisfy early customers and gather feedback for future development.",
    category: "Business",
  },
  {
    term: "React",
    definition:
      "A popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components.",
    category: "Development",
  },
  {
    term: "Responsive Design",
    definition:
      "An approach to web design that makes pages render well on all devices and screen sizes, automatically adjusting layout and content.",
    category: "Design",
  },
  {
    term: "SEO",
    definition:
      "Search Engine Optimization - the practice of improving a website to increase its visibility in search engine results, driving more organic traffic.",
    category: "Marketing",
  },
  {
    term: "SSL Certificate",
    definition:
      "Secure Sockets Layer - a security protocol that encrypts data between a web server and browser, indicated by 'https' and a padlock icon in the address bar.",
    category: "Security",
  },
  {
    term: "UI",
    definition:
      "User Interface - the visual elements users interact with on a website or app, including buttons, icons, spacing, typography, and color schemes.",
    category: "Design",
  },
  {
    term: "UX",
    definition:
      "User Experience - the overall experience a user has when interacting with a product, focusing on ease of use, efficiency, and satisfaction.",
    category: "Design",
  },
  {
    term: "Wireframe",
    definition:
      "A basic visual guide showing the skeletal structure of a webpage, outlining layout and functionality before detailed design work begins.",
    category: "Design",
  },
  {
    term: "WordPress",
    definition:
      "The world's most popular content management system, powering over 40% of websites. It's known for its flexibility and extensive plugin ecosystem.",
    category: "Development",
  },
];

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

  const filteredTerms = useMemo(() => {
    return glossaryTerms
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
  }, [searchTerm, activeCategory, activeLetter]);

  const visibleTerms = filteredTerms.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTerms.length;

  const groupedTerms = visibleTerms.reduce(
    (acc, term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(term);
      return acc;
    },
    {} as Record<string, typeof glossaryTerms>,
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
