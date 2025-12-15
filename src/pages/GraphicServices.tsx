import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Image as ImageIcon,
  Layers,
  Palette,
  PenTool,
  Printer,
  Sparkles,
  Star,
  Users,
  FileImage,
  BookOpen,
  Megaphone,
  Home,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGraphicLang } from "@/contexts/LanguageGraphic";
import SEO, { getServicePageSchema, getFAQSchema, mapFaqItems, getBreadcrumbSchema } from "@/components/SEO";
import { buildPath, servicePath, domainConfig } from "@/config/domains";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const GraphicServices = () => {
  const s = useGraphicLang();
  const { language, t } = useLanguage();

  const contactUrl = buildPath(language, "contact");
  const workUrl = buildPath(language, "work");
  const canonicalUrl =
    typeof window !== "undefined"
      ? `${domainConfig[language]}${window.location.pathname}`
      : `${domainConfig[language]}${servicePath(language, "graphicDesign")}`;

  // icon meta stays static (matching your original meaning)
  const tileIcons = [Layers, Printer, ImageIcon, FileImage, Megaphone, PenTool] as const;
  const metricIcons = [Palette, Layers, Users, Star] as const;
  const featureIcons = [Layers, Printer, ImageIcon, FileImage, BookOpen, PenTool] as const;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={s.seo.title}
        description={s.seo.description}
        jsonLd={[
          getServicePageSchema({
            language,
            canonicalUrl,
            serviceName: s.faq.serviceName,
            serviceDescription: s.seo.description,
          }),
          getFAQSchema(mapFaqItems(s.faq.items)),
          getBreadcrumbSchema([
            { name: t("common.home"), url: `${domainConfig[language]}/` },
            { name: t("common.services"), url: `${domainConfig[language]}${buildPath(language, "services")}` },
            { name: s.seo.title.split(" | ")[0], url: canonicalUrl },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-52 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
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
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Palette className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-medium text-sm">{s.hero.badge}</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                {s.hero.title1}
                <br />
                <span className="text-gradient">{s.hero.title2}</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">{s.hero.subtitle}</p>

              <div className="flex flex-wrap gap-4">
                <Link to={contactUrl}>
                  <Button size="lg" variant="hero">
                    {s.hero.ctaPrimary}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <Link to={workUrl}>
                  <Button size="lg" variant="outline">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    {s.hero.ctaSecondary}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right - Service Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="glass-strong rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm text-muted-foreground ml-2">{s.hero.dashboardTitle}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {s.tiles.map((service, index) => {
                    const Icon = (tileIcons[index] ?? Layers) as any;
                    return (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className={`p-4 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-white/5`}
                      >
                        <Icon className="w-6 h-6 text-white mb-2" />
                        <div className="font-medium text-foreground text-sm">{service.name}</div>
                        <div className="text-xs text-muted-foreground">{service.description}</div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-border/30">
                  {s.metrics.map((metric, index) => (
                    <div key={`${metric.label}-${index}`} className="text-center">
                      <div className="text-xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              {s.sectionCreate.eyebrow}
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {s.sectionCreate.titleBefore} <span className="text-gradient">{s.sectionCreate.titleHighlight}</span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{s.sectionCreate.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.features.map((feature, index) => {
              const Icon = (featureIcons[index] ?? Layers) as any;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="relative">
                      <div
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
                    </div>
                  </div>

                  <div
                    className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {s.pricing.titleBefore} <span className="text-gradient">{s.pricing.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{s.pricing.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {s.plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass rounded-2xl p-8 ${
                  plan.popular ? "border-2 border-purple-500 scale-105" : "border border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium text-white">
                    {s.pricing.popularBadge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">
                      {s.pricing.pricePrefix}
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{s.pricing.priceSuffix}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={`${plan.name}-${i}`} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={contactUrl}>
                  <Button className="w-full" variant={plan.popular ? "hero" : "outline"}>
                    {s.pricing.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ServiceReviews title={s.reviews.title} subtitle={s.reviews.subtitle} />

      {/* FAQ */}
      <ServiceFAQ
        faqs={s.faq.items}
        serviceName={s.faq.serviceName}
        title={s.faq.title}
        subtitle={s.faq.subtitle}
      />

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {s.ctaBottom.titleBefore} <span className="text-gradient">{s.ctaBottom.titleHighlight}</span>
              {s.ctaBottom.titleAfter}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{s.ctaBottom.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to={contactUrl}>
                <Button size="lg" variant="hero">
                  {s.ctaBottom.primary}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to={workUrl}>
                <Button size="lg" variant="outline">
                  {s.ctaBottom.secondary}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicServices;
