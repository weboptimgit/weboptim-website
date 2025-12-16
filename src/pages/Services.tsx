import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Search,
  ShoppingCart,
  Megaphone,
  Workflow,
  Palette,
  CheckCircle,
  Sparkles,
  Rocket,
  Terminal,
  Braces,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useServicesLang } from "@/contexts/LanguageServices";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath, servicePath } from "@/config/domains";

const techStack = [
  {
    name: "WordPress",
    bgColor: "rgba(37, 99, 235, 0.2)",
    textColor: "#93c5fd",
    borderColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    name: "Oxygen Builder",
    bgColor: "rgba(6, 182, 212, 0.2)",
    textColor: "#22d3ee",
    borderColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    name: "WooCommerce",
    bgColor: "rgba(168, 85, 247, 0.2)",
    textColor: "#c084fc",
    borderColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    name: "PHP",
    bgColor: "rgba(99, 102, 241, 0.2)",
    textColor: "#a5b4fc",
    borderColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    name: "Clean Code",
    bgColor: "rgba(34, 197, 94, 0.2)",
    textColor: "#4ade80",
    borderColor: "rgba(34, 197, 94, 0.3)",
  },
  {
    name: "Tailwind",
    bgColor: "rgba(20, 184, 166, 0.2)",
    textColor: "#2dd4bf",
    borderColor: "rgba(20, 184, 166, 0.3)",
  },
];

const getServices = (language: "EN" | "CZ" | "SK") => [
  {
    icon: Code2,
    href: servicePath(language, "buildingWebsite"),
    features: [] as string[],
    color: "from-cyan-500 to-blue-500",
    isHighlighted: true,
    stats: [] as { value: string; label: string }[],
  },
  {
    icon: ShoppingCart,
    href: servicePath(language, "ecommerceWebsite"),
    features: [] as string[],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Search,
    href: servicePath(language, "seo"),
    features: [] as string[],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Megaphone,
    href: servicePath(language, "ppc"),
    features: [] as string[],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Workflow,
    href: servicePath(language, "digitalization"),
    features: [] as string[],
    color: "from-primary to-accent",
  },
  {
    icon: Palette,
    href: servicePath(language, "graphicDesign"),
    features: [] as string[],
    color: "from-pink-500 to-violet-500",
  },
];

// --- helpers ---
const highlightLastWord = (text: string) => {
  const parts = text.trim().split(/\s+/);
  if (parts.length <= 1) return { before: text, highlight: "" };
  return {
    before: parts.slice(0, -1).join(" "),
    highlight: parts[parts.length - 1],
  };
};

const uiLabels = (lang: "EN" | "SK" | "CZ") => {
  switch (lang) {
    case "SK":
      return {
        techStack: "Technológie",
        learnMore: "Zistiť viac",
        startProject: "Začať projekt",
      };
    case "CZ":
      return {
        techStack: "Technologie",
        learnMore: "Zjistit více",
        startProject: "Začít projekt",
      };
    default:
      return {
        techStack: "Tech Stack",
        learnMore: "Learn More",
        startProject: "Start Project",
      };
  }
};

// Highlighted Web Development Card Component
const WebDevCard = ({
  service,
  index,
  s,
  lang,
}: {
  service: ReturnType<typeof getServices>[0];
  index: number;
  s: ReturnType<typeof useServicesLang>;
  lang: "EN" | "SK" | "CZ";
}) => {
  const labels = uiLabels(lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="lg:col-span-2 group"
    >
      <div className="relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Braces className="w-16 h-16 text-primary" />
          </motion.div>
        </div>

        <div className="absolute bottom-4 right-20 opacity-10 group-hover:opacity-30 transition-opacity">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
            <Terminal className="w-12 h-12 text-cyan-400" />
          </motion.div>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(193 88% 61%), hsl(210 60% 55%))" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {s.services.webDev.badge ?? "Most Popular"}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground">
                    {s.services.webDev.title}
                  </h3>
                </div>
              </div>

              {s.services.webDev.subtitle && (
                <p className="text-lg text-primary font-medium mb-3">{s.services.webDev.subtitle}</p>
              )}

              <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                {s.services.webDev.description}
              </p>

              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  {labels.techStack}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border"
                      style={{
                        backgroundColor: tech.bgColor,
                        color: tech.textColor,
                        borderColor: tech.borderColor,
                      }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {s.services.webDev.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link to={service.href!}>
                <Button variant="hero" size="lg" className="gap-2">
                  <Rocket className="w-4 h-4" />
                  {labels.startProject}
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:w-64 flex lg:flex-col gap-4">
              {s.services.webDev.stats?.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex-1 glass rounded-xl p-4 text-center border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl lg:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({
  service,
  index,
  title,
  description,
  features,
  learnMoreLabel,
}: {
  service: ReturnType<typeof getServices>[0];
  index: number;
  title: string;
  description: string;
  features: string[];
  learnMoreLabel: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="glass rounded-2xl p-6 sm:p-8 h-full hover:border-primary/40 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{
            background:
              service.color === "from-purple-500 to-pink-500"
                ? "linear-gradient(135deg, hsl(270 60% 55%), hsl(320 70% 55%))"
                : service.color === "from-green-500 to-emerald-500"
                  ? "linear-gradient(135deg, hsl(142 70% 45%), hsl(160 80% 40%))"
                  : service.color === "from-orange-500 to-amber-500"
                    ? "linear-gradient(135deg, hsl(25 95% 55%), hsl(45 95% 50%))"
                    : service.color === "from-primary to-accent"
                      ? "linear-gradient(135deg, hsl(193 88% 61%), hsl(210 60% 55%))"
                      : service.color === "from-pink-500 to-violet-500"
                        ? "linear-gradient(135deg, hsl(320 70% 55%), hsl(270 60% 55%))"
                        : "linear-gradient(135deg, hsl(193 88% 61%), hsl(210 60% 55%))",
          }}
        >
          <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {service.href && (
              <Link to={service.href} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            )}
          </div>

          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {service.href && (
            <Link
              to={service.href}
              className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-3 transition-all"
            >
              {learnMoreLabel}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const s = useServicesLang();
  const { language } = useLanguage();
  const services = getServices(language);
  const labels = uiLabels(language);

  const webDevService = services[0];
  const otherServices = services.slice(1);

  const otherCards = [
    s.services.ecommerce,
    s.services.seo,
    s.services.ppc,
    s.services.digitalization,
    s.services.graphic,
  ];

  const heroTitle = highlightLastWord(s.hero.title);
  const processTitle = highlightLastWord(s.process.title);

  const contactPath = buildPath(language, "contact");

  return (
    <>
      <SEO titleKey="services" />
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
                {s.hero.badge}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {heroTitle.before}{" "}
                {heroTitle.highlight && <span className="text-gradient">{heroTitle.highlight}</span>}
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {s.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <WebDevCard service={webDevService} index={0} s={s} lang={language} />

              {otherServices.map((service, index) => {
                const copy = otherCards[index];
                return (
                  <ServiceCard
                    key={index}
                    service={service}
                    index={index + 1}
                    title={copy.title}
                    description={copy.description}
                    features={copy.features}
                    learnMoreLabel={labels.learnMore}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {processTitle.before}{" "}
                {processTitle.highlight && <span className="text-gradient">{processTitle.highlight}</span>}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {s.process.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {s.process.steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center relative group hover:border-primary/40 transition-all"
                >
                  <div className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.cta.title}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {s.cta.subtitle}
              </p>

              <Link to={contactPath}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300"
                >
                  {s.cta.button}
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

export default Services;
