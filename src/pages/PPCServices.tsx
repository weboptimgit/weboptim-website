import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, TrendingUp, MousePointerClick, BarChart3, ShoppingBag, Users, Video, MapPin, Zap, DollarSign, Eye, Clock, ArrowRight, Check, Play, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import { useLanguage } from "@/contexts/LanguageContext";

const ppcFaqs = [
  {
    question: "How quickly will I see results from PPC advertising?",
    answer: "Unlike SEO, PPC delivers immediate results. You can start seeing traffic and leads within hours of launching your campaign. However, optimization for best ROI typically takes 2-4 weeks as we gather data and refine targeting.",
  },
  {
    question: "What is a good ROAS (Return on Ad Spend)?",
    answer: "A good ROAS varies by industry, but generally 3:1 to 4:1 is considered healthy for most businesses. This means for every €1 spent on ads, you generate €3-4 in revenue. We optimize campaigns to maximize your specific ROAS goals.",
  },
  {
    question: "Which platforms do you advertise on?",
    answer: "We manage campaigns across Google Ads (Search, Shopping, Display, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, TikTok Ads, and Microsoft Advertising (Bing). We recommend platforms based on your target audience and goals.",
  },
  {
    question: "How much should I budget for PPC?",
    answer: "Budget depends on your industry, competition, and goals. We recommend starting with at least €1,000-2,000/month for meaningful data collection. Our management fee is separate from your ad spend, which goes directly to the platforms.",
  },
  {
    question: "Do you provide reporting and analytics?",
    answer: "Yes, we provide detailed reports showing impressions, clicks, conversions, cost per acquisition, ROAS, and more. You get access to real-time dashboards and we schedule regular strategy calls to review performance.",
  },
  {
    question: "Can you help with landing page optimization?",
    answer: "Absolutely! Great ads need great landing pages to convert. We provide landing page recommendations and can create optimized landing pages as part of our Growth and Enterprise packages.",
  },
];

const PPCServices = () => {
  const { t } = useLanguage();
  const campaignTypes = [
    {
      icon: Search,
      title: "Search Ads",
      description: "Target users actively searching for your products or services on Google",
      platforms: ["Google Ads", "Bing Ads"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: "Shopping Ads",
      description: "Showcase your products with images, prices, and direct purchase links",
      platforms: ["Google Shopping", "Meta Shops"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Social Media Ads",
      description: "Reach your audience on Facebook, Instagram, LinkedIn, and TikTok",
      platforms: ["Meta Ads", "LinkedIn", "TikTok"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Video,
      title: "Video Ads",
      description: "Engage users with compelling video content on YouTube and social platforms",
      platforms: ["YouTube Ads", "Reels Ads"],
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Eye,
      title: "Display & Remarketing",
      description: "Visual banner ads across millions of websites and retarget past visitors",
      platforms: ["Google Display", "Remarketing"],
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: MapPin,
      title: "Local Ads",
      description: "Drive foot traffic to your physical locations with geo-targeted campaigns",
      platforms: ["Local Services", "Maps Ads"],
      gradient: "from-amber-500 to-yellow-500",
    },
  ];

  const whyPPC = [
    {
      icon: Zap,
      title: "Instant Results",
      description: "Start getting traffic and leads immediately after campaign launch",
    },
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Reach exact audiences based on demographics, interests, and intent",
    },
    {
      icon: DollarSign,
      title: "Budget Control",
      description: "Set daily budgets, pause anytime, and pay only for actual clicks",
    },
    {
      icon: BarChart3,
      title: "Measurable ROI",
      description: "Track every conversion, sale, and return on your ad spend",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Increase budget on winning campaigns to scale your success",
    },
    {
      icon: Clock,
      title: "Time Flexibility",
      description: "Show ads when your customers are most likely to convert",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Strategy",
      description: "We analyze your business, competitors, and market to create a winning PPC strategy",
      duration: "Week 1",
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Creating optimized campaigns, ad groups, and compelling ad creatives",
      duration: "Week 2",
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "Going live with continuous monitoring and quick optimizations",
      duration: "Week 3",
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Data-driven improvements to maximize ROI and scale successful campaigns",
      duration: "Ongoing",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "€499",
      period: "/month",
      adSpend: "Up to €2,000 ad spend",
      features: [
        "1 advertising platform",
        "Campaign setup & management",
        "Weekly optimization",
        "Monthly performance reports",
        "Basic remarketing",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "€999",
      period: "/month",
      adSpend: "Up to €10,000 ad spend",
      features: [
        "Up to 3 platforms",
        "Advanced campaign structure",
        "Daily optimization",
        "Bi-weekly strategy calls",
        "A/B testing",
        "Conversion tracking setup",
        "Landing page recommendations",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      adSpend: "€10,000+ ad spend",
      features: [
        "Unlimited platforms",
        "Dedicated account manager",
        "Real-time dashboard access",
        "Weekly strategy sessions",
        "Creative development",
        "Attribution modeling",
        "Competitor monitoring",
        "24/7 premium support",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <SEO 
        title="PPC Advertising Services | WebOptim"
        description="Drive instant traffic and conversions with our data-driven PPC advertising campaigns. Google Ads, Meta Ads, and multi-platform strategies."
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  {t("ppc.badge")}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  {t("ppc.title1")}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> {t("ppc.title2")}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t("ppc.subtitle")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="gap-2">
                      {t("cta.freeConsultation")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="gap-2 border-border">
                    <Play className="w-4 h-4" />
                    {t("cta.viewPortfolio")}
                  </Button>
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
                    <span className="text-sm text-muted-foreground ml-2">Campaign Dashboard</span>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <MousePointerClick className="w-5 h-5 text-primary mb-2" />
                      <div className="text-2xl font-bold text-foreground">12,847</div>
                      <div className="text-xs text-muted-foreground">Clicks Today</div>
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <TrendingUp className="w-5 h-5 text-green-500 mb-2" />
                      <div className="text-2xl font-bold text-foreground">324%</div>
                      <div className="text-xs text-muted-foreground">ROAS</div>
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <DollarSign className="w-5 h-5 text-purple-500 mb-2" />
                      <div className="text-2xl font-bold text-foreground">€0.42</div>
                      <div className="text-xs text-muted-foreground">Avg. CPC</div>
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-xl p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Target className="w-5 h-5 text-orange-500 mb-2" />
                      <div className="text-2xl font-bold text-foreground">847</div>
                      <div className="text-xs text-muted-foreground">Conversions</div>
                    </motion.div>
                  </div>

                  {/* Campaign Performance Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Campaign Performance</span>
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
                Types of <span className="text-primary">PPC Campaigns</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We create and manage campaigns across all major advertising platforms to maximize your reach and ROI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaignTypes.map((campaign, index) => {
                const gradientStyles: Record<string, string> = {
                  'from-blue-500 to-cyan-500': 'linear-gradient(135deg, hsl(210 80% 55%), hsl(190 90% 50%))',
                  'from-green-500 to-emerald-500': 'linear-gradient(135deg, hsl(142 70% 45%), hsl(160 80% 40%))',
                  'from-pink-500 to-rose-500': 'linear-gradient(135deg, hsl(330 80% 60%), hsl(350 80% 55%))',
                  'from-red-500 to-orange-500': 'linear-gradient(135deg, hsl(0 75% 55%), hsl(25 95% 55%))',
                  'from-purple-500 to-violet-500': 'linear-gradient(135deg, hsl(270 60% 55%), hsl(260 70% 55%))',
                  'from-amber-500 to-yellow-500': 'linear-gradient(135deg, hsl(38 90% 50%), hsl(48 95% 50%))',
                };
                const glowColors: Record<string, string> = {
                  'from-blue-500 to-cyan-500': '0 0 30px hsla(200, 85%, 55%, 0.4)',
                  'from-green-500 to-emerald-500': '0 0 30px hsla(150, 75%, 45%, 0.4)',
                  'from-pink-500 to-rose-500': '0 0 30px hsla(340, 80%, 58%, 0.4)',
                  'from-red-500 to-orange-500': '0 0 30px hsla(15, 85%, 55%, 0.4)',
                  'from-purple-500 to-violet-500': '0 0 30px hsla(265, 65%, 55%, 0.4)',
                  'from-amber-500 to-yellow-500': '0 0 30px hsla(43, 92%, 50%, 0.4)',
                };
                return (
                  <motion.div
                    key={campaign.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative"
                  >
                    {/* Gradient border glow */}
                    <div 
                      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: gradientStyles[campaign.gradient],
                        filter: 'blur(1px)',
                      }}
                    />
                    
                    {/* Card content */}
                    <div className="relative glass-strong rounded-2xl p-6 border border-border/50 group-hover:border-transparent transition-all duration-300 h-full"
                      style={{ 
                        boxShadow: 'none',
                        transition: 'box-shadow 0.3s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = glowColors[campaign.gradient]}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                    >
                      {/* Shine sweep effect */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      </div>
                      
                      <div 
                        className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: gradientStyles[campaign.gradient] }}
                      >
                        <campaign.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="relative z-10 text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {campaign.title}
                      </h3>
                      <p className="relative z-10 text-muted-foreground text-sm mb-4">
                        {campaign.description}
                      </p>
                      <div className="relative z-10 flex flex-wrap gap-2">
                        {campaign.platforms.map((platform) => (
                          <span key={platform} className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
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
                Why Invest in <span className="text-primary">PPC Advertising?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unlike organic marketing, PPC gives you immediate visibility and complete control over your advertising budget.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyPPC.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
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
                Our PPC <span className="text-primary">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven methodology to launch and optimize high-performing campaigns.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />
              
              <div className="space-y-8">
                {process.map((item, index) => (
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
                PPC Management <span className="text-primary">Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing based on your ad spend and campaign complexity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass-strong rounded-2xl p-8 border ${
                    plan.popular 
                      ? "border-primary shadow-lg shadow-primary/20" 
                      : "border-border/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground text-sm font-medium">
                      Most Popular
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
                  <Link to="/contact" className="block">
                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-12 text-center border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to <span className="text-primary">Scale Your Business?</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Get a free PPC audit and discover how much revenue you're leaving on the table. 
                  Our experts will analyze your current campaigns and opportunities.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="gap-2">
                    Get Free PPC Audit
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews */}
        <ServiceReviews 
          title="What Our Clients Say"
          subtitle="See what businesses say about their PPC campaign results with us."
        />

        {/* FAQ */}
        <ServiceFAQ 
          faqs={ppcFaqs}
          serviceName="PPC Advertising"
          title="Frequently Asked Questions"
          subtitle="Common questions about our PPC advertising services."
        />

        <Footer />
      </div>
    </>
  );
};

export default PPCServices;