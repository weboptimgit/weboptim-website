import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, TrendingUp, MousePointerClick, BarChart3, ShoppingBag, Users, Video, MapPin, Zap, DollarSign, Eye, Clock, ArrowRight, Check, Play, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PPCServices = () => {
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
                  PPC Advertising
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Turn Clicks Into
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Customers</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Drive instant, targeted traffic to your website with our data-driven PPC campaigns. 
                  We manage your ad spend like it's our own money.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="gap-2">
                      Get Free Audit
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="gap-2 border-border">
                    <Play className="w-4 h-4" />
                    See Case Studies
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
              {campaignTypes.map((campaign, index) => (
                <motion.div
                  key={campaign.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative glass-strong rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${campaign.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <campaign.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {campaign.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {campaign.platforms.map((platform) => (
                      <span key={platform} className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground">
                        {platform}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
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

        <Footer />
      </div>
    </>
  );
};

export default PPCServices;