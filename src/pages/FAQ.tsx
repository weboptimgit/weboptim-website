import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import SEO, { getFAQSchema } from "@/components/SEO";
import { FAQLanguageProvider, useFAQLang } from "@/contexts/LanguageFAQ";
import { useLanguage } from "@/contexts/LanguageContext";
import { staticPageSlugs } from "@/config/domains";

const FAQContent = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { seo, hero, cta, faqs } = useFAQLang();
  const { language } = useLanguage();

  // Flatten all FAQs for JSON-LD schema
  const allFaqs = useMemo(() => faqs.flatMap((category) => category.questions), [faqs]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const contactPath = staticPageSlugs.contact[language];

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        jsonLd={getFAQSchema(allFaqs)} 
      />
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
                {hero.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {hero.title} <span className="text-gradient">{hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const itemId = `${categoryIndex}-${index}`;
                    const isOpen = openItems.includes(itemId);

                    return (
                      <motion.div key={index} className="glass rounded-xl">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-medium text-foreground pr-4">{faq.q}</span>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                          >
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-muted-foreground">{faq.a}</div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{cta.title}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {cta.subtitle}
              </p>
              <Link to={contactPath}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-hero text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300"
                >
                  {cta.button}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const FAQ = () => {
  return (
    <FAQLanguageProvider>
      <FAQContent />
    </FAQLanguageProvider>
  );
};

export default FAQ;
