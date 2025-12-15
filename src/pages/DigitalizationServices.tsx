import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDigitalizationLang } from "@/contexts/LanguageDigitalization";

import {
  Cpu,
  ArrowRight,
  Check,
  Workflow,
  Database,
  Cloud,
  Zap,
  BarChart3,
  Clock,
  Users,
  Settings,
  RefreshCcw,
  Building2,
  Layers,
  Bot,
  FileCheck,
  Sparkles,
  Home,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { getServicePageSchema, getFAQSchema, mapFaqItems, getBreadcrumbSchema } from "@/components/SEO";
import { buildPath, servicePath, domainConfig } from "@/config/domains";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DigitalizationServices = () => {
  const s = useDigitalizationLang();
  const { language, t } = useLanguage();
  const canonicalUrl =
  typeof window !== "undefined"
    ? `${domainConfig[language]}${window.location.pathname}`
    : `${domainConfig[language]}${servicePath(language, "digitalization")}`;

  const contactUrl = buildPath(language, "contact");
  const workUrl = buildPath(language, "work");

  // visuals stay static (icons + colors)
  const benefitsMeta = [Clock, Zap, BarChart3, Users, RefreshCcw, Cloud] as const;
  const servicesMeta = [Building2, Bot, Layers] as const;
  
  return (
    <>
      <SEO
        title={s.seo.title}
        description={s.seo.description}
        jsonLd={[
          getServicePageSchema({
            language,
            canonicalUrl,
            serviceName: s.sections?.faq?.serviceName || "Digitalization & Automation",
            serviceDescription: s.seo.description,
          }),
          getFAQSchema(mapFaqItems(s.faqs)),
          getBreadcrumbSchema([
            { name: t("common.home"), url: `${domainConfig[language]}/` },
            { name: t("common.services"), url: `${domainConfig[language]}${buildPath(language, "services")}` },
            { name: s.seo.title.split(" | ")[0], url: canonicalUrl },
          ]),
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-52 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center">
                        <Home className="w-4 h-4" />
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={buildPath(language, "services")}>{t("common.services")}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{s.seo.title.split(" | ")[0]}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Cpu className="w-4 h-4" />
                  {s.hero.badge}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  {s.hero.title1}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {" "}
                    {s.hero.title2}
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{s.hero.subtitle}</p>

                <div className="flex flex-wrap gap-4">
                  <Link to={contactUrl}>
                    <Button variant="hero" size="lg" className="gap-2">
                      {s.hero.ctaPrimary}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <Button variant="outline" size="lg" className="gap-2 border-border">
                    <Workflow className="w-4 h-4" />
                    {s.hero.ctaSecondary}
                  </Button>
                </div>
              </motion.div>

              {/* Animated Workflow Diagram */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="glass-strong rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground ml-2">{s.dashboard.title}</span>
                  </div>

                  <div className="relative h-64 flex items-center justify-center">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 400 256"
                      preserveAspectRatio="none"
                      style={{ zIndex: 0 }}
                    >
                      <motion.line x1="40" y1="40" x2="200" y2="128" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 6" strokeOpacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.5 }} />
                      <motion.line x1="360" y1="40" x2="200" y2="128" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 6" strokeOpacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.5 }} />
                      <motion.line x1="40" y1="216" x2="200" y2="128" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 6" strokeOpacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0, duration: 0.5 }} />
                      <motion.line x1="360" y1="216" x2="200" y2="128" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8 6" strokeOpacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 0.5 }} />
                    </svg>

                    <motion.div className="absolute top-2 left-2 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex flex-col items-center justify-center z-10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
                      <Database className="w-5 h-5 text-blue-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">CRM</span>
                    </motion.div>

                    <motion.div className="absolute top-2 right-2 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex flex-col items-center justify-center z-10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
                      <FileCheck className="w-5 h-5 text-purple-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">Invoices</span>
                    </motion.div>

                    <motion.div className="absolute bottom-2 left-2 w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex flex-col items-center justify-center z-10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}>
                      <Cloud className="w-5 h-5 text-green-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">Cloud</span>
                    </motion.div>

                    <motion.div className="absolute bottom-2 right-2 w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex flex-col items-center justify-center z-10" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}>
                      <Settings className="w-5 h-5 text-orange-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">Automation</span>
                    </motion.div>

                    <motion.div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10 shadow-lg shadow-primary/30" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}>
                      <Workflow className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">85%</div>
                      <div className="text-xs text-muted-foreground">{s.dashboard.stats.timeSaved}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <div className="text-xs text-muted-foreground">{s.dashboard.stats.integrations}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">24/7</div>
                      <div className="text-xs text-muted-foreground">{s.dashboard.stats.automation}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.sections.technologies.title} <span className="text-primary">{s.sections.technologies.highlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.sections.technologies.subtitle}</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {s.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.03, duration: 0.5, ease: "easeOut" }}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="px-4 py-2 rounded-full glass-strong border border-border/50 hover:border-primary/30 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                    <span className="font-medium text-sm">{tech.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">• {tech.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.sections.benefits.title} <span className="text-primary">{s.sections.benefits.highlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.sections.benefits.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.benefits.map((benefit, index) => {
                const Icon = (benefitsMeta[index] ?? Zap) as any;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    style={{
                      willChange: "transform, opacity",
                      transform: "translate3d(0,0,0)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="relative mb-6">
                          <div
                            className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500"
                            style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                          >
                            <Icon className="w-8 h-8 text-white" />
                            <div
                              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500"
                              style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                            />
                          </div>
                        </div>

                        <h3 className="relative text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="relative text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>

                      <div
                        className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500"
                        style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.sections.services.title} <span className="text-primary">{s.sections.services.highlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.sections.services.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {s.services.map((service, index) => {
                const Icon = (servicesMeta[index] ?? Layers) as any;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                    style={{
                      willChange: "transform, opacity",
                      transform: "translate3d(0,0,0)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="group relative glass-strong rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                      <div className="relative mb-6">
                        <div
                          className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500"
                          style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                        >
                          <Icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div
                          className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500"
                          style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                        />
                      </div>

                      <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="relative text-muted-foreground text-sm mb-6">{service.description}</p>

                      <ul className="relative space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500"
                        style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.sections.pricing.title} <span className="text-primary">{s.sections.pricing.highlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.sections.pricing.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {s.pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass-strong rounded-2xl overflow-hidden border ${
                    plan.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border/50"
                  }`}
                >
                  <div className={`bg-gradient-to-r ${plan.gradient} p-6 text-center`}>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  </div>

                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-display font-bold text-foreground">{plan.price}</div>
                    </div>

                    <ol className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={`${plan.name}-${feature}-${i}`} className="flex items-start gap-3 text-sm">
                          <span className="font-bold text-primary">{i + 1}.</span>
                          <span className="text-muted-foreground">
                            {feature === plan.techHighlightKey ? (
                              <>
                                <strong className="text-foreground">{feature}:</strong>
                                <br />
                                <span className="text-xs">{plan.technologies.join(", ")}, etc.</span>
                              </>
                            ) : (
                              feature
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <Link to={contactUrl} className="block">
                      <Button variant="hero" size="lg" className="w-full">
                        {s.sections.pricing.cta}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.sections.process.title} <span className="text-primary">{s.sections.process.highlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.sections.process.subtitle}</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />
              <div className="space-y-8">
                {s.process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg relative z-10">
                      {item.step}
                    </div>
                    <div className="glass-strong rounded-xl p-6 flex-1 border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-sm text-primary font-medium">{item.duration}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ServiceReviews title={s.sections.reviews.title} subtitle={s.sections.reviews.subtitle} />

        {/* FAQ */}
        <ServiceFAQ
          faqs={s.faqs}
          serviceName={s.sections.faq.serviceName}
          title={s.sections.faq.title}
          subtitle={s.sections.faq.subtitle}
        />

        {/* Bottom CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="text-center max-w-3xl mx-auto">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {s.sections.ctaBottom.titleBefore} <span className="text-gradient">{s.sections.ctaBottom.titleHighlight}</span>
                {s.sections.ctaBottom.titleAfter}
              </h2>

              <p className="text-lg text-muted-foreground mb-8">{s.sections.ctaBottom.subtitle}</p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to={contactUrl}>
                  <Button size="lg" variant="hero">
                    {s.sections.ctaBottom.primary}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link to={workUrl}>
                  <Button size="lg" variant="outline">
                    {s.sections.ctaBottom.secondary}
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

export default DigitalizationServices;
