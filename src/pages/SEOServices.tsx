import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  LineChart,
  Link2,
  MapPin,
  Search,
  Settings,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import SEO, { getServicePageSchema, getFAQSchema, mapFaqItems } from "@/components/SEO";
import { domainConfig } from "@/config/domains";
import { useSeoLang } from "@/contexts/LanguageSEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/config/domains";

// vizuálne farby nechávame v page (nemá sa prekladať)
const seoServicesColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-violet-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-blue-500",
];

const featuresMeta = [
  { icon: Search, gradient: "from-blue-500 to-cyan-500" },
  { icon: Link2, gradient: "from-purple-500 to-violet-500" },
  { icon: MapPin, gradient: "from-green-500 to-emerald-500" },
  { icon: Settings, gradient: "from-orange-500 to-red-500" },
  { icon: BarChart3, gradient: "from-pink-500 to-rose-500" },
  { icon: LineChart, gradient: "from-indigo-500 to-blue-500" },
];

const processMeta = [Search, Target, Settings, Zap, Link2, TrendingUp];

const AnimatedRankings = () => {
  const s = useSeoLang();

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
      <div className="relative glass rounded-xl p-6 border border-primary/20 min-w-[320px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="font-semibold">{s.animatedRankings.title}</span>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">
            {s.animatedRankings.liveBadge}
          </span>
        </div>

        {/* Rankings Table */}
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground pb-2">
            <span>{s.animatedRankings.columns.keyword}</span>
            <span className="text-center">{s.animatedRankings.columns.pos}</span>
            <span className="text-center">{s.animatedRankings.columns.change}</span>
            <span className="text-right">{s.animatedRankings.columns.volume}</span>
          </div>

          {s.animatedRankings.rows.map((item, i) => (
            <motion.div
              key={item.keyword}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 + 0.3 }}
              className="grid grid-cols-4 gap-2 items-center text-sm"
            >
              <span className="truncate font-medium">{item.keyword}</span>
              <div className="flex justify-center">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                    item.position === 1 ? "bg-yellow-500/20 text-yellow-500" : "bg-primary/20 text-primary"
                  }`}
                >
                  {item.position}
                </span>
              </div>
              <span className="text-center text-green-500 font-medium">{item.change}</span>
              <span className="text-right text-muted-foreground">{item.volume}</span>
            </motion.div>
          ))}
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg"
        >
          <TrendingUp className="w-3 h-3" />
          {s.animatedRankings.trafficBadge}
        </motion.div>
      </div>
    </div>
  );
};

const SEOServices = () => {
  const s = useSeoLang();
  const { language } = useLanguage();
  const contactUrl = buildPath(language, "contact");
  const workUrl = buildPath(language, "work");
  const canonicalUrl =
    typeof window !== "undefined"
      ? `${domainConfig[language]}${window.location.pathname}`
      : `${domainConfig[language]}${buildPath(language, "seo-services")}`;

  
  const metrics = [
    { value: s.metrics[0].value, label: s.metrics[0].label, icon: TrendingUp },
    { value: s.metrics[1].value, label: s.metrics[1].label, icon: Target },
    { value: s.metrics[2].value, label: s.metrics[2].label, icon: Users },
    { value: s.metrics[3].value, label: s.metrics[3].label, icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
          title={s.seo.title}
          description={s.seo.description}
          jsonLd={[
            getServicePageSchema({
              language,
              canonicalUrl,
              serviceName: s.faq.serviceName || "SEO",
              serviceDescription: s.seo.description,
            }),
            getFAQSchema(mapFaqItems(s.faq.items)),
          ]}
        />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-52 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Search className="w-4 h-4" />
                {s.hero.badge}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {s.hero.title1}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {s.hero.title2}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">{s.hero.subtitle}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center p-3 rounded-xl bg-card/30 border border-border/30"
                  >
                    <metric.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                    <div className="text-xl font-bold">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glow" size="xl" asChild>
                  <Link to={contactUrl}>
                    {s.hero.ctaPrimary}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to={workUrl}>{s.hero.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>

            {/* Animated Rankings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <AnimatedRankings />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">{s.servicesShowcase.title}</h2>
            <p className="text-muted-foreground">{s.servicesShowcase.subtitle}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {s.servicesShowcase.items.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass rounded-2xl px-6 py-4 hover:border-primary/30 transition-all duration-500 min-w-[160px] cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${seoServicesColors[i % seoServicesColors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${seoServicesColors[i % seoServicesColors.length]} flex items-center justify-center text-white text-2xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                    >
                      {service.icon}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${seoServicesColors[i % seoServicesColors.length]} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${seoServicesColors[i % seoServicesColors.length]} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{s.features.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{s.features.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.features.items.map((feature, index) => {
              const meta = featuresMeta[index] ?? featuresMeta[0];
              const Icon = meta.icon as any;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

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

                    <h3 className="relative text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="relative text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  <div
                    className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{s.process.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{s.process.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.process.steps.map((step, index) => {
              const Icon = (processMeta[index] ?? Search) as any;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="block text-4xl font-display font-bold bg-gradient-to-br from-primary/20 to-secondary/20 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{step.duration}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{s.pricing.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{s.pricing.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {s.pricing.packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-b from-primary/10 to-secondary/5 border-primary/30 scale-105"
                    : "bg-card/50 border-border/50 hover:border-primary/20"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-medium rounded-full">
                    {s.pricing.popularBadge}
                  </span>
                )}
                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "glow" : "outline"} className="w-full" asChild>
                  <Link to={contactUrl}>{s.pricing.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceReviews title={s.reviews.title} subtitle={s.reviews.subtitle} />
      <ServiceFAQ faqs={s.faq.items} serviceName={s.faq.serviceName} title={s.faq.title} subtitle={s.faq.subtitle} />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {s.ctaBottom.titleBefore} <span className="text-gradient">{s.ctaBottom.titleHighlight}</span>?
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

export default SEOServices;
