import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, BookOpen, Code2, Lightbulb } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Button } from "@/components/ui/button";
import { glossaryTermsData } from "@/data/glossary-terms";

const GlossaryTerm = () => {
  const { slug } = useParams();
  const termData = slug ? glossaryTermsData[slug.toLowerCase()] : null;

  if (!termData) {
    return <Navigate to="/glossary" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AmbientBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/glossary"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Glossary
            </Link>
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
              <span className="text-gradient">{termData.term}</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-medium">
              {termData.shortDefinition}
            </p>
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
                What is {termData.term}?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {termData.fullDefinition}
              </p>
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
                Why It Matters
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {termData.whyItMatters}
              </p>
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
                Real-World Examples
              </h2>
              <ul className="space-y-4">
                {termData.examples.map((example, index) => (
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
              <h2 className="text-xl font-display font-bold text-foreground mb-4">
                Related Terms
              </h2>
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
                <h2 className="text-xl font-display font-bold text-foreground mb-4">
                  Learn More
                </h2>
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
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Need help with {termData.term}?
              </h3>
              <p className="text-muted-foreground">
                Our team can help you integrate this into your project.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlossaryTerm;
