import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  Package,
  Rocket,
  Search,
  Server,
  Settings,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Truck,
  Home,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import SEO, { getServicePageSchema, getFAQSchema, mapFaqItems, getBreadcrumbSchema } from "@/components/SEO";
import { useEcomLang } from "@/contexts/LanguageEcommerce";
import { useLanguage } from "@/contexts/LanguageContext";
import { domainConfig, buildPath } from "@/config/domains";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const platforms = [
  {
    name: "WooCommerce",
    icon: "🛒",
    color: "from-purple-500 to-violet-600",
    highlight: true,
  },
  {
    name: "Shoptet",
    icon: "🏪",
    color: "from-green-400 to-emerald-500",
    highlight: false,
  },
  {
    name: "Upgates",
    icon: "🚀",
    color: "from-blue-400 to-cyan-500",
    highlight: false,
  },
  {
    name: "Shopify",
    icon: "💎",
    color: "from-lime-400 to-green-500",
    highlight: false,
  },
  {
    name: "Custom",
    icon: "⚡",
    color: "from-orange-400 to-red-500",
    highlight: false,
  },
];

const metricsMeta = [
  { icon: Store },
  { icon: TrendingUp },
  { icon: Server },
  { icon: Star },
];

const featuresMeta = [
  { icon: ShoppingCart, gradient: "from-purple-500 to-violet-500" },
  { icon: CreditCard, gradient: "from-cyan-500 to-blue-500" },
  { icon: Truck, gradient: "from-green-500 to-emerald-500" },
  { icon: Search, gradient: "from-orange-500 to-red-500" },
  { icon: TrendingUp, gradient: "from-pink-500 to-rose-500" },
  { icon: Shield, gradient: "from-indigo-500 to-purple-500" },
];

const processMeta = [
  { icon: Search },
  { icon: Settings },
  { icon: Sparkles },
  { icon: ShoppingBag },
  { icon: Package },
  { icon: Rocket },
];

// Animated shopping cart component
const AnimatedCart = ({ e }: { e: ReturnType<typeof useEcomLang> }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl" />
      <div className="relative glass rounded-xl p-6 border border-primary/20 min-w-[280px]">
        {/* Cart Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="font-semibold">{e.animatedCart.title}</span>
          </div>
          <span className="text-xs text-muted-foreground">{e.animatedCart.itemsLabel}</span>
        </div>

        {/* Cart Items */}
        <div className="space-y-3 mb-4">
          {e.animatedCart.products.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 + 0.3 }}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {e.animatedCart.qtyLabel}: {item.qty}
                  </p>
                </div>
              </div>
              <span className="text-primary font-medium">{item.price}</span>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-3 border-t border-border/30"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold">{e.animatedCart.totalLabel}</span>
            <span className="text-xl font-bold text-primary">{e.animatedCart.totalValue}</span>
          </div>
          <div className="w-full py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-center text-sm font-medium text-primary-foreground">
            {e.animatedCart.checkout}
          </div>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-full bg-green-500/90 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg"
        >
          <Check className="w-3 h-3" />
          {e.animatedCart.secureBadge}
        </motion.div>
      </div>
    </div>
  );
};

      const EcommerceWebsite = () => {
        const e = useEcomLang();
        const { language, t } = useLanguage();
      
        const canonicalUrl =
          typeof window !== "undefined"
            ? `${domainConfig[language]}${window.location.pathname}`
            : "";
      
        const serviceSchema = getServicePageSchema({
          language,
          canonicalUrl,
          serviceName:
            language === "SK" ? "Tvorba e-shopu" :
            language === "CZ" ? "Tvorba e-shopu" :
            "E-commerce Website Development",
          serviceDescription: e.seo.description,
        });
      
        const faqSchema = getFAQSchema(mapFaqItems(e.faq.items));
      
        const breadcrumbSchema = getBreadcrumbSchema([
          { name: t("common.home"), url: `${domainConfig[language]}/` },
          { name: t("common.services"), url: `${domainConfig[language]}${buildPath(language, "services")}` },
          { name: e.seo.title.split(" | ")[0], url: canonicalUrl },
        ]);
      
        return (
          <div className="min-h-screen bg-background">
            <SEO
              title={e.seo.title}
              description={e.seo.description}
              jsonLd={[serviceSchema, faqSchema, breadcrumbSchema]}
            />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-52 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
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
                  <BreadcrumbPage>{e.seo.title.split(" | ")[0]}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                <Store className="w-4 h-4" />
                {e.hero.badge}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {e.hero.title1}{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  {e.hero.title2}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">{e.hero.subtitle}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {e.metrics.map((metric, i) => {
                  const Icon = metricsMeta[i]?.icon ?? metricsMeta[0].icon;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-center p-3 rounded-xl bg-card/30 border border-border/30"
                    >
                      <Icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <div className="text-xl font-bold">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="glow" size="xl" asChild>
                  <Link to="/#contact">
                    {e.hero.ctaPrimary}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/#portfolio">{e.hero.ctaSecondary}</Link>
                </Button>
              </div>
            </motion.div>

            {/* Animated Cart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <AnimatedCart e={e} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">{e.platforms.title}</h2>
            <p className="text-muted-foreground">{e.platforms.subtitle}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, i) => {
              const translated = e.platforms.items[i] ?? e.platforms.items[0];

              return (
              <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div
                    className={`group relative p-4 rounded-2xl border transition-all duration-500 min-w-[140px] cursor-pointer overflow-hidden ${
                      platform.highlight
                        ? "bg-gradient-to-br from-secondary/10 to-primary/10 border-primary/30"
                        : "bg-card/50 border-border/50 hover:border-primary/30"
                    }`}
                  >
                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {platform.highlight && (
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-medium rounded-full z-10">
                        {e.platforms.popularBadge}
                      </span>
                    )}

                    {/* Icon with gradient background */}
                    <div className="relative mb-2">
                      <div
                        className={`relative text-3xl w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                        style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                      >
                        {translated.icon}
                      </div>

                      {/* Animated ring blur */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
                        style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                      />
                    </div>

                    <h3 className="relative font-semibold group-hover:text-primary transition-colors">
                      {translated.name}
                    </h3>
                    <p className="relative text-xs text-muted-foreground">{translated.description}</p>

                    {/* Corner decoration */}
                    <div
                      className={`absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                      style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{e.features.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{e.features.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {e.features.items.map((feature, index) => {
              const meta = featuresMeta[index] ?? featuresMeta[0];
              const Icon = meta.icon;

              return (
                <motion.div
                  key={`${feature.title}-${index}`}
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
                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                          style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
                            style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
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
                      style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
                    />
                  </div>
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
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{e.process.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{e.process.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {e.process.steps.map((step, index) => {
              const meta = processMeta[index] ?? processMeta[0];
              const Icon = meta.icon;

              return (
                <motion.div
                  key={step.step}
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
                  <div className="relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
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
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{e.pricing.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{e.pricing.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {e.pricing.packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
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
                <div
                  className={`relative p-6 rounded-2xl border transition-all duration-300 h-full ${
                    pkg.popular
                      ? "bg-gradient-to-b from-primary/10 to-secondary/5 border-primary/30 scale-105"
                      : "bg-card/50 border-border/50 hover:border-primary/20"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-medium rounded-full">
                      {e.pricing.popularBadge}
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
                    <Link to="/#contact">{e.pricing.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceReviews title={e.reviews.title} subtitle={e.reviews.subtitle} />

      <ServiceFAQ
        faqs={e.faq.items}
        serviceName={e.faq.serviceName}
        title={e.faq.title}
        subtitle={e.faq.subtitle}
      />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {e.ctaBottom.titleBefore} <span className="text-gradient">{e.ctaBottom.titleHighlight}</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{e.ctaBottom.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="hero">
                  {e.ctaBottom.primary}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/work">
                <Button size="lg" variant="outline">
                  {e.ctaBottom.secondary}
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

export default EcommerceWebsite;
