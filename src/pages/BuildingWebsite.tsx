import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Layers,
  Palette,
  Rocket,
  Sparkles,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Star,
  ChevronRight,
  Server,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";

// ✅ language contexts
import { useLanguage } from "@/contexts/LanguageContext";
import { useBuildingWebsiteLang } from "@/contexts/LanguageBuildingWebsite";

// ✅ localized routes
import { buildPath } from "@/config/domains";

/* -------------------- STATIC VISUAL DATA (non-translated) -------------------- */

const metricsMeta = [
  { icon: Server },
  { icon: Zap },
  { icon: Globe },
  { icon: Star },
];

// Keep brand names as-is; translate descriptions via bw.tech.descriptions.*
const techStack = [
  { key: "wordpress", name: "WordPress", icon: "W", color: "from-blue-500 to-indigo-600" },
  { key: "oxygen", name: "Oxygen Builder", icon: "O₂", color: "from-cyan-400 to-teal-500" },
  { key: "woocommerce", name: "WooCommerce", icon: "🛒", color: "from-violet-400 to-purple-600" },
  { key: "php", name: "PHP", icon: "🐘", color: "from-indigo-400 to-blue-600" },
  { key: "performance", name: "Performance", icon: "⚡", color: "from-yellow-400 to-orange-500" },
] as const;

const featureMeta = [
  { icon: Palette, gradient: "from-pink-500 to-rose-500" },
  { icon: Code2, gradient: "from-cyan-500 to-blue-500" },
  { icon: Zap, gradient: "from-amber-500 to-orange-500" },
  { icon: Shield, gradient: "from-emerald-500 to-green-500" },
];

const processMeta = [
  { icon: UsersIcon },
  { icon: Layers },
  { icon: Palette },
  { icon: Code2 },
  { icon: Shield },
  { icon: Rocket },
];

function UsersIcon(props: any) {
  // lucide Users is in your imports originally; keeping a small helper in case
  // but you can replace with "Users" import if you prefer.
  return <svg {...props} />;
}

// Animated code block component
const AnimatedCodeBlock = () => {
  const codeLines = [
    { text: "const", color: "text-purple-400" },
    { text: " website", color: "text-cyan-300" },
    { text: " = ", color: "text-white" },
    { text: "await", color: "text-purple-400" },
    { text: " createAmazing", color: "text-yellow-300" },
    { text: "({", color: "text-white" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
      <div className="relative glass rounded-xl p-6 font-mono text-sm overflow-hidden border border-primary/20">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        <div className="space-y-2">
          <motion.div className="flex flex-wrap">
            {codeLines.map((part, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={part.color}
              >
                {part.text}
              </motion.span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pl-4">
            <span className="text-green-400">design</span>
            <span className="text-white">: </span>
            <span className="text-amber-300">"stunning"</span>
            <span className="text-white">,</span>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="pl-4">
            <span className="text-green-400">performance</span>
            <span className="text-white">: </span>
            <span className="text-amber-300">"blazing"</span>
            <span className="text-white">,</span>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="pl-4">
            <span className="text-green-400">seo</span>
            <span className="text-white">: </span>
            <span className="text-purple-400">true</span>
            <span className="text-white">,</span>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
            <span className="text-white">{"})"}</span>
            <span className="text-white">;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1.6, duration: 1, repeat: Infinity }}
            className="mt-2"
          >
            <span className="text-muted-foreground">// Your success starts here_</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const BuildingWebsite = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [activeProcess, setActiveProcess] = useState(0);

  const bw = useBuildingWebsiteLang();
  const { language } = useLanguage();

  // localized routes
  const contactUrl = buildPath(language, "contact");
  const workUrl = buildPath(language, "work");

  return (
    <>
      <SEO title={bw.seo.title} description={bw.seo.description} />

      <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-52 pb-24 px-4 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  {bw.hero.badge}
                </motion.span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  {bw.hero.titleBefore}{" "}
                  <span className="relative">
                    <span className="text-gradient">{bw.hero.titleHighlight}</span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                  <br />
                  {bw.hero.titleAfter1}
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{bw.hero.subtitle}</p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {bw.metrics.map((metric, i) => {
                    const Icon = metricsMeta[i]?.icon ?? Globe;
                    return (
                      <motion.div
                        key={`${metric.label}-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gradient">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to={contactUrl}>
                      {bw.hero.ctaPrimary}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>

                  <Button variant="outline" size="lg" asChild>
                    <Link to={workUrl}>{bw.hero.ctaSecondary}</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right - Animated Code Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
                style={{ y }}
              >
                <AnimatedCodeBlock />

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-4 glass rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">{bw.hero.statsBuildPassedTitle}</div>
                      <div className="text-xs text-muted-foreground">{bw.hero.statsBuildPassedTime}</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-8 glass rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-cyan-500" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">{bw.hero.statsPerformanceTitle}</div>
                      <div className="text-xs text-green-500 font-bold">{bw.hero.statsPerformanceScore}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-display font-bold mb-2">{bw.tech.title}</h2>
              <p className="text-muted-foreground">{bw.tech.subtitle}</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, i) => {
                const desc =
                  tech.key === "wordpress"
                    ? bw.tech.descriptions.wordpress
                    : tech.key === "oxygen"
                      ? bw.tech.descriptions.oxygen
                      : tech.key === "woocommerce"
                        ? bw.tech.descriptions.woocommerce
                        : tech.key === "php"
                          ? bw.tech.descriptions.php
                          : bw.tech.descriptions.performance;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative glass rounded-2xl px-6 py-4 flex items-center gap-4 cursor-default hover:border-primary/30 transition-all duration-500 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative z-10 flex items-center gap-4">
                      <div className="relative">
                        <div
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                        >
                          {tech.icon}
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
                          />
                        </div>
                      </div>

                      <div className="text-left">
                        <div className="font-semibold group-hover:text-primary transition-colors">{tech.name}</div>
                        <div className="text-xs text-muted-foreground">{desc}</div>
                      </div>
                    </div>

                    <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {bw.features.titleBefore} <span className="text-gradient">{bw.features.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{bw.features.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {bw.features.items.map((feature, index) => {
                const meta = featureMeta[index] ?? featureMeta[0];
                const Icon = meta.icon;
                return (
                  <motion.div
                    key={`${feature.title}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative glass rounded-2xl p-8 overflow-hidden hover:border-primary/30 transition-all duration-500"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
                          />
                        </div>
                      </div>

                      <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>

                    <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {bw.process.titleBefore} <span className="text-gradient">{bw.process.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{bw.process.subtitle}</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {bw.process.steps.map((step, index) => {
                const meta = processMeta[index] ?? processMeta[0];
                const Icon = meta.icon as any;

                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setActiveProcess(index)}
                    className={`relative glass rounded-2xl p-6 cursor-default transition-all duration-300 ${
                      activeProcess === index ? "border-primary/50 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          activeProcess === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-primary font-bold">
                            {bw.process.stepLabel} {step.step}
                          </span>
                          <span className="text-xs text-muted-foreground">{step.duration}</span>
                        </div>

                        <h3 className="text-lg font-display font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {bw.pricing.titleBefore} <span className="text-gradient">{bw.pricing.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{bw.pricing.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {bw.packages.map((pkg, index) => (
                <motion.div
                  key={`${pkg.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass rounded-2xl p-6 ${pkg.popular ? "border-primary/50 bg-primary/5" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold">
                        {bw.pricing.popularBadge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6 pt-2">
                    <h3 className="text-xl font-display font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="text-3xl font-display font-bold text-gradient">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full" asChild>
                    <Link to={contactUrl}>
                      {bw.pricing.cta}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews + FAQ */}
        <ServiceReviews title={bw.reviews.title} subtitle={bw.reviews.subtitle} />

        <ServiceFAQ
          faqs={bw.faq.items}
          serviceName={bw.faq.serviceName}
          title={bw.faq.title}
          subtitle={bw.faq.subtitle}
        />

        {/* Bottom CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {bw.bottomCta.titleBefore} <span className="text-gradient">{bw.bottomCta.titleHighlight}</span>
                {bw.bottomCta.titleAfter}
              </h2>

              <p className="text-lg text-muted-foreground mb-8">{bw.bottomCta.subtitle}</p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to={contactUrl}>
                  <Button size="lg" variant="hero">
                    {bw.bottomCta.primary}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to={workUrl}>
                  <Button size="lg" variant="outline">
                    {bw.bottomCta.secondary}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BuildingWebsite;
