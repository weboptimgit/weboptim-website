import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, BookOpen, Code2, Lightbulb } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Button } from "@/components/ui/button";

const glossaryData: Record<string, {
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  category: string;
  examples: string[];
  relatedTerms: string[];
  whyItMatters: string;
  resources?: { title: string; url: string }[];
}> = {
  api: {
    term: "API",
    shortDefinition: "Application Programming Interface",
    fullDefinition: "An API (Application Programming Interface) is a set of protocols, routines, and tools that allows different software applications to communicate with each other. Think of it as a waiter in a restaurant – you (the application) tell the waiter (the API) what you want, and the waiter brings back your order from the kitchen (the server or database).",
    category: "Development",
    examples: [
      "When you use a weather app, it uses an API to fetch weather data from a remote server.",
      "Social media login buttons (\"Login with Google\") use APIs to authenticate users.",
      "Payment processing on e-commerce sites uses APIs like Stripe or PayPal.",
      "Maps embedded on websites use Google Maps API or similar services."
    ],
    relatedTerms: ["REST API", "GraphQL", "Endpoint", "Backend", "JSON"],
    whyItMatters: "APIs are the backbone of modern web development. They allow your website to integrate with third-party services, fetch real-time data, process payments, send emails, and much more. Without APIs, every application would need to build everything from scratch.",
    resources: [
      { title: "What is an API? (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" },
      { title: "REST API Tutorial", url: "https://restfulapi.net/" }
    ]
  },
  cms: {
    term: "CMS",
    shortDefinition: "Content Management System",
    fullDefinition: "A CMS (Content Management System) is software that allows users to create, manage, and modify digital content on a website without needing specialized technical knowledge. Think of it like a document editor for your website – you can add text, images, and pages without writing any code.",
    category: "Development",
    examples: [
      "WordPress powers over 40% of all websites, from blogs to e-commerce stores.",
      "Shopify is a CMS specifically designed for online stores and e-commerce.",
      "Webflow combines visual design tools with CMS capabilities for designers.",
      "Contentful and Sanity are headless CMS options for developers building custom frontends."
    ],
    relatedTerms: ["WordPress", "Headless CMS", "Backend", "Database", "WYSIWYG"],
    whyItMatters: "A CMS empowers you to update your website content independently, without relying on developers for every small change. This saves time and money while keeping your content fresh and up-to-date. For businesses, it means faster content publishing and better control over your digital presence.",
    resources: [
      { title: "What is a CMS? (HubSpot)", url: "https://blog.hubspot.com/blog/tabid/6307/bid/7969/what-is-a-cms-and-why-should-you-care.aspx" },
      { title: "WordPress Official Site", url: "https://wordpress.org/" }
    ]
  }
};

const GlossaryTerm = () => {
  const { slug } = useParams();
  const termData = slug ? glossaryData[slug.toLowerCase()] : null;

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
                Need help with API integration?
              </h3>
              <p className="text-muted-foreground">
                Our team can help you connect your website to any service.
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
