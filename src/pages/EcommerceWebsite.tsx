import { motion } from "framer-motion";
import { ArrowRight, Check, CreditCard, Globe, Package, Rocket, Search, Server, Settings, Shield, ShoppingBag, ShoppingCart, Sparkles, Star, Store, TrendingUp, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import { useLanguage } from "@/contexts/LanguageContext";

const ecommerceFaqs = [
  { question: "Which e-commerce platform is best for me?", answer: "It depends on your needs. WooCommerce is great for WordPress users wanting flexibility. Shopify is ideal for quick setup. Shoptet and Upgates are popular in Czech/Slovak markets. We help you choose the right platform during consultation." },
  { question: "Can you migrate my existing e-shop?", answer: "Yes, we handle complete migrations including products, customers, orders, and SEO. We ensure minimal downtime and preserve your search rankings." },
  { question: "Do you integrate payment gateways?", answer: "We integrate all major payment providers including Stripe, PayPal, GoPay, Comgate, and local bank transfers. We also set up invoice generation." },
  { question: "How do you handle shipping integration?", answer: "We integrate with carriers like Zásilkovna, PPL, DPD, Česká pošta, and more. Including real-time shipping rates and tracking." },
  { question: "What about inventory management?", answer: "We set up inventory tracking, low-stock alerts, and can integrate with ERP systems like Pohoda, Money S3, or custom solutions." },
];

const platforms = [
  { 
    name: "WooCommerce", 
    icon: "🛒", 
    description: "WordPress power", 
    color: "from-purple-500 to-violet-600",
    highlight: true 
  },
  { 
    name: "Shoptet", 
    icon: "🏪", 
    description: "Czech favorite", 
    color: "from-green-400 to-emerald-500",
    highlight: false 
  },
  { 
    name: "Upgates", 
    icon: "🚀", 
    description: "Modern SaaS", 
    color: "from-blue-400 to-cyan-500",
    highlight: false 
  },
  { 
    name: "Shopify", 
    icon: "💎", 
    description: "Global leader", 
    color: "from-lime-400 to-green-500",
    highlight: false 
  },
  { 
    name: "Custom", 
    icon: "⚡", 
    description: "Built for you", 
    color: "from-orange-400 to-red-500",
    highlight: false 
  },
];

const metrics = [
  { value: "500+", label: "E-shops Launched", icon: Store },
  { value: "€2M+", label: "Revenue Generated", icon: TrendingUp },
  { value: "99.9%", label: "Uptime", icon: Server },
  { value: "4.9", label: "Client Rating", icon: Star },
];

const features = [
  {
    icon: ShoppingCart,
    title: "Product Catalog",
    description: "Unlimited products with variants, categories & smart filters",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    description: "Cards, PayPal, Apple Pay, Google Pay & local methods",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Truck,
    title: "Smart Shipping",
    description: "Real-time rates, tracking & carrier integrations",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Built-in SEO, email marketing & social integrations",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    description: "Real-time insights, conversion tracking & reports",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Shield,
    title: "Security",
    description: "SSL, PCI compliance & fraud protection",
    gradient: "from-indigo-500/20 to-purple-500/20",
  }
];

const processSteps = [
  { 
    step: "01", 
    title: "Discovery", 
    description: "Understanding your products, market & goals",
    icon: Search,
    duration: "1-2 days"
  },
  { 
    step: "02", 
    title: "Platform Selection", 
    description: "Choosing the perfect e-commerce solution",
    icon: Settings,
    duration: "1 day"
  },
  { 
    step: "03", 
    title: "Design & UX", 
    description: "Creating a conversion-focused storefront",
    icon: Sparkles,
    duration: "1-2 weeks"
  },
  { 
    step: "04", 
    title: "Development", 
    description: "Building your custom online store",
    icon: ShoppingBag,
    duration: "2-4 weeks"
  },
  { 
    step: "05", 
    title: "Product Setup", 
    description: "Importing catalog & configuring inventory",
    icon: Package,
    duration: "3-5 days"
  },
  { 
    step: "06", 
    title: "Launch", 
    description: "Going live with ongoing support",
    icon: Rocket,
    duration: "Ongoing"
  }
];

const packages = [
  {
    name: "Starter Shop",
    description: "Perfect for new businesses",
    price: "From €2,000",
    features: ["Up to 100 products", "Basic design", "Payment setup", "Shipping config", "1 month support"],
    popular: false,
  },
  {
    name: "Growth Shop",
    description: "For scaling businesses",
    price: "From €5,000",
    features: ["Unlimited products", "Custom design", "Multi-payment", "Marketing tools", "Analytics", "3 months support"],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale solution",
    price: "Custom",
    features: ["Custom features", "API integrations", "Multi-currency", "Priority support", "Performance SLA", "Dedicated team"],
    popular: false,
  },
];

// Animated shopping cart component
const AnimatedCart = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl" />
      <div className="relative glass rounded-xl p-6 border border-primary/20 min-w-[280px]">
        {/* Cart Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="font-semibold">Your Cart</span>
          </div>
          <span className="text-xs text-muted-foreground">3 items</span>
        </div>
        
        {/* Cart Items */}
        <div className="space-y-3 mb-4">
          {[
            { name: "Premium Widget", price: "€49.99", qty: 2 },
            { name: "Pro Gadget", price: "€129.00", qty: 1 },
          ].map((item, i) => (
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
                  <p className="text-xs text-muted-foreground">Qty: {item.qty}</p>
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
            <span className="font-semibold">Total</span>
            <span className="text-xl font-bold text-primary">€228.98</span>
          </div>
          <div className="w-full py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-center text-sm font-medium text-primary-foreground">
            Checkout →
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
          Secure Checkout
        </motion.div>
      </div>
    </div>
  );
};

const EcommerceWebsite = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                <Store className="w-4 h-4" />
                {t("ecom.badge")}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {t("ecom.title1")}{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  {t("ecom.title2")}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t("ecom.subtitle")}
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
                    Start Selling Online
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/#portfolio">View E-Shop Projects</Link>
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
              <AnimatedCart />
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
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Multi-Platform Expertise
            </h2>
            <p className="text-muted-foreground">
              We work with the platforms that fit your business best
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative p-4 rounded-2xl border cursor-pointer transition-all duration-300 min-w-[140px] ${
                  platform.highlight
                    ? "bg-gradient-to-br from-secondary/10 to-primary/10 border-primary/30"
                    : "bg-card/50 border-border/50 hover:border-primary/30"
                }`}
              >
                {platform.highlight && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-medium rounded-full">
                    Popular
                  </span>
                )}
                <div className={`text-3xl mb-2 w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                  {platform.icon}
                </div>
                <h3 className="font-semibold">{platform.name}</h3>
                <p className="text-xs text-muted-foreground">{platform.description}</p>
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
              Everything Your Store Needs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete e-commerce solutions with all the features to run a successful online business
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
              From Idea to Sales
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven process gets your online store up and running fast
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
              E-Shop Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for every business size
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
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20" />
            <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6"
              >
                <ShoppingBag className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Start Selling?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's build an online store that converts visitors into customers and grows your business.
              </p>
              <Button variant="glow" size="xl" asChild>
                <Link to="/#contact">
                  Launch Your E-Shop
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceReviews title="What Our Clients Say" subtitle="See what e-commerce businesses say about their online stores." />
      <ServiceFAQ faqs={ecommerceFaqs} serviceName="E-Commerce" title="Frequently Asked Questions" subtitle="Common questions about our e-commerce services." />

      <Footer />
    </div>
  );
};

export default EcommerceWebsite;
