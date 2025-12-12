import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, ExternalLink, Globe, LineChart, Link2, MapPin, MousePointerClick, Rocket, Search, Settings, Sparkles, Star, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import { useLanguage } from "@/contexts/LanguageContext";

const seoFaqs = [
  { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results in 6-12 months depending on competition and your starting point." },
  { question: "What's included in your SEO packages?", answer: "Our packages include keyword research, on-page optimization, technical SEO audits, link building, content strategy, and monthly reporting. Higher tiers include more keywords and additional services." },
  { question: "Do you guarantee rankings?", answer: "No ethical SEO agency can guarantee specific rankings as search algorithms change constantly. We focus on sustainable growth and proven strategies that deliver long-term results." },
  { question: "How do you measure SEO success?", answer: "We track keyword rankings, organic traffic, conversions, and ROI. You receive detailed monthly reports with all key metrics and actionable insights." },
];

const seoServices = [
  { 
    name: "Keyword Research", 
    icon: "🔍", 
    description: "Find winning keywords", 
    color: "from-blue-500 to-cyan-500",
  },
  { 
    name: "Link Building", 
    icon: "🔗", 
    description: "Quality backlinks", 
    color: "from-purple-500 to-violet-500",
  },
  { 
    name: "Local SEO", 
    icon: "📍", 
    description: "Dominate local search", 
    color: "from-green-500 to-emerald-500",
  },
  { 
    name: "Technical SEO", 
    icon: "⚙️", 
    description: "Site optimization", 
    color: "from-orange-500 to-red-500",
  },
  { 
    name: "Content Strategy", 
    icon: "📝", 
    description: "Rank-worthy content", 
    color: "from-pink-500 to-rose-500",
  },
  { 
    name: "Analytics", 
    icon: "📊", 
    description: "Data-driven results", 
    color: "from-indigo-500 to-blue-500",
  },
];

const metrics = [
  { value: "300%", label: "Avg. Traffic Increase", icon: TrendingUp },
  { value: "Top 10", label: "Keyword Rankings", icon: Target },
  { value: "150+", label: "Happy Clients", icon: Users },
  { value: "5.0", label: "Client Rating", icon: Star },
];

const features = [
  {
    icon: Search,
    title: "Keyword Research & Analysis",
    description: "Deep dive into search intent, competition analysis, and identifying high-value keywords that drive qualified traffic",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Link2,
    title: "Link Building Campaigns",
    description: "White-hat strategies to earn quality backlinks from authoritative domains that boost your rankings",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: MapPin,
    title: "Local SEO Optimization",
    description: "Google Business Profile, local citations, and geo-targeted strategies to dominate local search results",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Settings,
    title: "Technical SEO Audits",
    description: "Core Web Vitals, site speed, crawlability, schema markup, and fixing issues that hurt rankings",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: BarChart3,
    title: "Content Strategy",
    description: "Data-driven content planning, optimization, and creation that ranks and converts",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    description: "Transparent monthly reports with rankings, traffic, conversions, and ROI tracking",
    gradient: "from-indigo-500/20 to-blue-500/20",
  }
];

const processSteps = [
  { 
    step: "01", 
    title: "SEO Audit", 
    description: "Complete analysis of your current SEO health",
    icon: Search,
    duration: "1-2 days"
  },
  { 
    step: "02", 
    title: "Strategy", 
    description: "Custom roadmap based on your goals",
    icon: Target,
    duration: "2-3 days"
  },
  { 
    step: "03", 
    title: "On-Page SEO", 
    description: "Optimizing content, meta tags & structure",
    icon: Settings,
    duration: "1-2 weeks"
  },
  { 
    step: "04", 
    title: "Technical Fixes", 
    description: "Speed, mobile, Core Web Vitals",
    icon: Zap,
    duration: "1-2 weeks"
  },
  { 
    step: "05", 
    title: "Link Building", 
    description: "Earning quality backlinks",
    icon: Link2,
    duration: "Ongoing"
  },
  { 
    step: "06", 
    title: "Monitor & Grow", 
    description: "Track rankings & refine strategy",
    icon: TrendingUp,
    duration: "Monthly"
  }
];

const packages = [
  {
    name: "SEO Starter",
    description: "For small businesses",
    price: "€500/mo",
    features: ["5 keywords tracked", "Monthly report", "On-page optimization", "Technical audit", "Email support"],
    popular: false,
  },
  {
    name: "SEO Growth",
    description: "For growing businesses",
    price: "€1,200/mo",
    features: ["20 keywords tracked", "Bi-weekly reports", "Link building", "Content strategy", "Local SEO", "Priority support"],
    popular: true,
  },
  {
    name: "SEO Enterprise",
    description: "Full-scale SEO",
    price: "Custom",
    features: ["Unlimited keywords", "Weekly reports", "Dedicated manager", "Content creation", "Competitor analysis", "API access"],
    popular: false,
  },
];

// Animated rankings component
const AnimatedRankings = () => {
  const rankings = [
    { keyword: "web design agency", position: 3, change: "+5", volume: "2.4K" },
    { keyword: "wordpress developer", position: 1, change: "+12", volume: "1.8K" },
    { keyword: "ecommerce website", position: 4, change: "+8", volume: "3.1K" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
      <div className="relative glass rounded-xl p-6 border border-primary/20 min-w-[320px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="font-semibold">Keyword Rankings</span>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">Live</span>
        </div>
        
        {/* Rankings Table */}
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground pb-2">
            <span>Keyword</span>
            <span className="text-center">Pos.</span>
            <span className="text-center">Change</span>
            <span className="text-right">Volume</span>
          </div>
          {rankings.map((item, i) => (
            <motion.div
              key={item.keyword}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 + 0.3 }}
              className="grid grid-cols-4 gap-2 items-center text-sm"
            >
              <span className="truncate font-medium">{item.keyword}</span>
              <div className="flex justify-center">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                  item.position === 1 ? "bg-yellow-500/20 text-yellow-500" : "bg-primary/20 text-primary"
                }`}>
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
          +156% Traffic
        </motion.div>
      </div>
    </div>
  );
};

const SEOServices = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Search className="w-4 h-4" />
                {t("seo.badge")}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {t("seo.title1")}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t("seo.title2")}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t("seo.subtitle")}
              </p>
              
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
                  <Link to="/#contact">
                    Get Free SEO Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/#portfolio">View Case Studies</Link>
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Complete SEO Solutions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to dominate search results
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {seoServices.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 min-w-[140px] cursor-pointer overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with gradient background */}
                <div className="relative mb-2">
                  <div className={`relative text-3xl w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    {service.icon}
                  </div>
                  {/* Animated ring blur */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`} />
                </div>
                
                <h3 className="relative font-semibold group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="relative text-xs text-muted-foreground">{service.description}</p>
                
                {/* Corner decoration */}
                <div className={`absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What's Included
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SEO services to improve every aspect of your search visibility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-border/30 hover:border-primary/30 transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-card/80 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our SEO Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
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
                      <step.icon className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              SEO Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible plans that grow with your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
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
                    Most Popular
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
                <Button 
                  variant={pkg.popular ? "glow" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link to="/#contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />
            <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6"
              >
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Dominate Search?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a free SEO audit and discover how we can boost your rankings and drive more organic traffic.
              </p>
              <Button variant="glow" size="xl" asChild>
                <Link to="/#contact">
                  Get Free SEO Audit
                  <Search className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

        <ServiceReviews title="What Our Clients Say" subtitle="See what businesses say about their SEO results." />
        <ServiceFAQ faqs={seoFaqs} serviceName="SEO" title="Frequently Asked Questions" subtitle="Common questions about our SEO services." />

        <Footer />
    </div>
  );
};

export default SEOServices;
