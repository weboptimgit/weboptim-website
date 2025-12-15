import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Code2, Lightbulb, ChevronRight, Home } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Button } from "@/components/ui/button";
import { glossaryTermsData } from "@/data/glossary-terms";
import SEO, { getDefinedTermSchema, getBreadcrumbSchema } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { domainConfig, staticPageSlugs } from "@/config/domains";
import { glossaryTranslations } from "@/contexts/LanguageGlossary";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const GlossaryTerm = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const t = glossaryTranslations[language];
  const termData = slug ? glossaryTermsData[slug.toLowerCase()] : null;
  
  const glossaryPath = `/${staticPageSlugs.glossary[language]}`;

  if (!termData) {
    return <Navigate to={glossaryPath} replace />;
  }

  // Get language-specific content
  const content = termData.content[language];
  const termSlug = termData.slugs[language];

  const jsonLd = [
    getDefinedTermSchema(
      {
        term: content.term,
        shortDefinition: content.shortDefinition,
        fullDefinition: content.fullDefinition,
        slug: termSlug,
      },
      language,
    ),
    getBreadcrumbSchema([
      { name: "Home", url: domainConfig[language] },
      { name: t.glossary, url: `${domainConfig[language]}${glossaryPath}` },
      { name: content.term, url: `${domainConfig[language]}${glossaryPath}/${termSlug}` },
    ]),
  ];

  return (
    <>
      <SEO
        title={`${content.term} - Definition | WebOptim Glossary`}
        description={content.shortDefinition}
        jsonLd={jsonLd}
      />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="pt-52 pb-12 relative">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Breadcrumb className="mb-8">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={glossaryPath}>{t.glossary}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{content.term}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                {termData.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                <span className="text-gradient">{content.term}</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">{content.shortDefinition}</p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl space-y-12">
              {/* Definition */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  {t.whatIs} {content.term}?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{content.fullDefinition}</p>
              </motion.div>

              {/* Why It Matters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                  </div>
                  {t.whyItMatters}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{content.whyItMatters}</p>
              </motion.div>

              {/* Examples */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-2xl p-8"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-green-500" />
                  </div>
                  {t.realWorldExamples}
                </h2>
                <ul className="space-y-4">
                  {content.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Related Terms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4">{t.relatedTerms}</h2>
                <div className="flex flex-wrap gap-2">
                  {termData.relatedTerms.map((term) => (
                    <span
                      key={term}
                      className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Resources */}
              {termData.resources && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-xl font-display font-bold text-foreground mb-4">{t.learnMoreResources}</h2>
                  <div className="space-y-3">
                    {termData.resources.map((resource) => (
                      <a
                        key={resource.title}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 glass rounded-xl hover:border-primary/40 transition-all group"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{t.needHelp} {content.term}?</h3>
                <p className="text-muted-foreground">{t.teamCanHelp}</p>
              </div>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  {t.getInTouch}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GlossaryTerm;
