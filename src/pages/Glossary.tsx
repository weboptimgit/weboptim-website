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
    slug: data.slugs[language],
  }));
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

  const allTerms = useMemo(() => getGlossaryTerms(language), [language]);

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

  type TermItem = { term: string; definition: string; category: string; slug: string };
  
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
                          {item.slug && (
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
