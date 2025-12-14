// src/pages/Work.tsx
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/config/domains";
import { getCaseStudiesList, getCaseStudy } from "@/data/case-studies";

// NOTE: projects robíme vo vnútri komponentu (kvôli language)

const Work = () => {
  const { language, t } = useLanguage();

  // 1) zoznam kariet (jazykovo)
  const list = getCaseStudiesList(language);

  // 2) doplníme 2 results (bez pádu) – vyťahujeme cez getCaseStudy(slug)
  const projects = list.map((item) => {
    const full = getCaseStudy(item.slug, language);
    const results = (full?.results ?? []).slice(0, 2).map((r) => `${r.metric} ${r.label}`);

    return {
      ...item,
      duration: full?.duration ?? "",
      results,
    };
  });

  return (
    <>
      <SEO titleKey="work" />
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
                {t("work.badge")}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {t("work.title.before")} <span className="text-gradient">{t("work.title.highlight")}</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("work.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={buildPath(language, "work", project.slug)} className="group block">
                    <ProjectCard project={project} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t("work.cta.title")}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {t("work.cta.subtitle")}
              </p>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300"
                >
                  {t("work.cta.button")}
                  <ArrowUpRight className="w-5 h-5" />
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

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  statValue: string;
  statLabel: string;
  featured: boolean;
  client: string;
  year: string;
  duration: string;
  results: string[];
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300">
    {/* Image */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full glass text-xs font-medium text-primary">{project.category}</span>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{project.subtitle}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(project.tags ?? []).map((tag, i) => (
          <span key={i} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {project.year}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {project.duration}
        </div>
      </div>

      {/* Results */}
      {project.results.length > 0 && (
        <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
          {project.results.map((result, i) => (
            <span key={i} className="text-xs font-semibold text-gradient">
              {result}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Work;
