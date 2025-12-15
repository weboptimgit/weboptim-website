import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  TrendingUp,
  MousePointerClick,
  BarChart3,
  ShoppingBag,
  Users,
  Video,
  MapPin,
  Zap,
  DollarSign,
  Eye,
  Clock,
  ArrowRight,
  Check,
  Play,
  Search,
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
import { useLanguage } from "@/contexts/LanguageContext";
import { usePpcLang } from "@/contexts/LanguagePPC";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PPCServices = () => {
  const s = usePpcLang();
  const { language, t } = useLanguage();
  const canonicalUrl =
  typeof window !== "undefined"
    ? `${domainConfig[language]}${window.location.pathname}`
    : `${domainConfig[language]}${servicePath(language, "ppc")}`;

  // localized routes
  const contactUrl = buildPath(language, "contact");
  const workUrl = buildPath(language, "work");

  /* -------------------- STATIC VISUAL META (non-translated) -------------------- */

  const campaignMeta = [
    { icon: Search, gradient: "from-blue-500 to-cyan-500" },
    { icon: ShoppingBag, gradient: "from-green-500 to-emerald-500" },
    { icon: Users, gradient: "from-pink-500 to-rose-500" },
    { icon: Video, gradient: "from-red-500 to-orange-500" },
    { icon: Eye, gradient: "from-purple-500 to-violet-500" },
    { icon: MapPin, gradient: "from-amber-500 to-yellow-500" },
  ] as const;

  const whyMeta = [Zap, Target, DollarSign, BarChart3, TrendingUp, Clock] as const;

  const processMeta = [Target, Sparkles, Zap, TrendingUp] as const;

  return (
    <>
      <SEO
        title={s.seo.title}
        description={s.seo.description}
        jsonLd={[
          getServicePageSchema({
            language,
            canonicalUrl,
            serviceName: s.faq.serviceName || "PPC",
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
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

                  <Link to={workUrl}>
                    <Button variant="outline" size="lg" className="gap-2 border-border">
                      <Play className="w-4 h-4" />
                      {s.hero.ctaSecondary}
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Animated Ads Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-strong rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground ml-2">{s.dashboard.title}</span>
                  </div>

                  {/* Performance Metrics (demo numbers keep hard-coded) */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <MousePointerClick className="w-5 h-5 text-primary mb-2" />
                      <div className="text-2xl font-bold text-foreground">12,847</div>
                      <div className="text-xs text-muted-foreground">{s.dashboard.clicksTodayLabel}</div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <TrendingUp className="w-5 h-5 text-green-500 mb-2" />
                      <div className="text-2xl font-bold text-foreground">324%</div>
                      <div className="text-xs text-muted-foreground">{s.dashboard.roasLabel}</div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <DollarSign className="w-5 h-5 text-purple-500 mb-2" />
                      <div className="text-2xl font-bold text-foreground">€0.42</div>
                      <div className="text-xs text-muted-foreground">{s.dashboard.avgCpcLabel}</div>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Target className="w-5 h-5 text-orange-500 mb-2" />
                      <div className="text-2xl font-bold text-foreground">847</div>
                      <div className="text-xs text-muted-foreground">{s.dashboard.conversionsLabel}</div>
                    </motion.div>
                  </div>

                  {/* Campaign Performance Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{s.dashboard.performanceLabel}</span>
                      <span className="text-primary font-medium">92%</span>
                    </div>
                    <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.campaignTypes.titleBefore} <span className="text-primary">{s.campaignTypes.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.campaignTypes.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.campaignTypes.items.map((campaign, index) => {
                const meta = campaignMeta[index] ?? campaignMeta[0];
                const Icon = meta.icon as any;

                return (
                  <motion.div
                    key={campaign.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Icon with gradient background */}
                      <div className="relative mb-6">
                        <div
                          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                          {/* Animated ring blur */}
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
                          />
                        </div>
                      </div>

                      <h3 className="relative text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {campaign.title}
                      </h3>
                      <p className="relative text-muted-foreground leading-relaxed mb-4">{campaign.description}</p>
                      <div className="relative flex flex-wrap gap-2">
                        {campaign.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div
                      className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Invest in PPC */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.whyPpc.titleBefore} <span className="text-primary">{s.whyPpc.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.whyPpc.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.whyPpc.items.map((reason, index) => {
                const Icon = (whyMeta[index] ?? Zap) as any;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="relative mb-6">
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                          <Icon className="w-8 h-8 text-white" />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500" />
                        </div>
                      </div>

                      <h3 className="relative text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="relative text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>

                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.process.titleBefore} <span className="text-primary">{s.process.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.process.subtitle}</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

              <div className="space-y-8">
                {s.process.steps.map((item, index) => {
                  const Icon = (processMeta[index] ?? Target) as any;

                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="flex gap-6 items-start"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg relative z-10">
                        {item.step}
                      </div>

                      <div className="glass-strong rounded-xl p-6 flex-1 border border-border/50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-primary" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <span className="text-sm text-primary font-medium">{item.duration}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {s.pricing.titleBefore} <span className="text-primary">{s.pricing.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{s.pricing.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {s.pricing.plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass-strong rounded-2xl p-8 border ${
                    plan.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground text-sm font-medium">
                      {s.pricing.popularBadge}
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-4xl font-display font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground mb-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.adSpend}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={contactUrl} className="block">
                    <Button variant={plan.popular ? "hero" : "outline"} size="lg" className="w-full">
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

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-orange-400 mx-auto mb-6" />

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
    </>
  );
};

export default PPCServices;
