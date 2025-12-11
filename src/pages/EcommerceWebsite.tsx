import { motion } from "framer-motion";
import { ArrowRight, Check, CreditCard, Package, Search, Settings, ShoppingCart, Store, TrendingUp, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const platforms = [
  {
    name: "WooCommerce",
    description: "The most popular e-commerce solution, powering over 30% of online stores worldwide.",
    features: ["Open-source & flexible", "Huge plugin ecosystem", "Full customization", "Cost-effective"],
    recommended: true,
  },
  {
    name: "Shopify",
    description: "A hosted solution ideal for quick launches with minimal technical setup.",
    features: ["Easy to use", "Built-in hosting", "24/7 support", "App marketplace"],
    recommended: false,
  },
  {
    name: "Custom Solution",
    description: "Fully bespoke e-commerce platform built to your exact specifications.",
    features: ["Complete control", "Unique features", "Scalable architecture", "No limitations"],
    recommended: false,
  },
];

const wooFeatures = [
  {
    icon: ShoppingCart,
    title: "Product Management",
    description: "Easy-to-use interface for managing products, categories, and inventory."
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    description: "Support for all major payment methods including cards, PayPal, and more."
  },
  {
    icon: Truck,
    title: "Shipping Options",
    description: "Flexible shipping zones, rates, and integration with carriers."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in SEO features to help your products rank higher in search."
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reports",
    description: "Detailed insights into sales, customers, and store performance."
  },
  {
    icon: Settings,
    title: "Extensible",
    description: "Thousands of plugins and extensions to add any functionality."
  }
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your products, target market, and business goals." },
  { step: "02", title: "Platform Setup", description: "Installing and configuring WooCommerce with optimal settings." },
  { step: "03", title: "Design & Build", description: "Creating a beautiful, conversion-focused storefront design." },
  { step: "04", title: "Product Import", description: "Setting up your product catalog with descriptions and images." },
  { step: "05", title: "Payment & Shipping", description: "Configuring payment gateways and shipping methods." },
  { step: "06", title: "Launch & Support", description: "Going live with ongoing support and maintenance." }
];

const benefits = [
  "No monthly platform fees",
  "Full ownership of data",
  "Unlimited products",
  "Custom checkout flow",
  "Multi-currency support",
  "Inventory management",
  "Order tracking",
  "Customer accounts"
];

const EcommerceWebsite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              <Store className="w-4 h-4" />
              E-Commerce Solutions
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              E-Commerce{" "}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Website
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Launch your online store with WooCommerce – the world's most flexible e-commerce platform. We help you choose the right solution and build a shop that sells.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Choosing the Right Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We help you select the perfect e-commerce solution based on your needs, budget, and growth plans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  platform.recommended
                    ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                    : "bg-card/50 border-border/50 hover:border-border"
                }`}
              >
                {platform.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2 mt-2">{platform.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WooCommerce Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why WooCommerce?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The most popular e-commerce platform, trusted by millions of businesses worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wooFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How We Build Your E-Shop
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures your online store launches smoothly and starts generating sales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-5xl font-display font-bold text-secondary/10 absolute -top-2 -left-2">
                  {step.step}
                </span>
                <div className="relative pt-6 pl-4">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Everything You Need to Sell Online
              </h2>
              <p className="text-muted-foreground mb-8">
                WooCommerce gives you complete control over your online store. No monthly platform fees, no transaction cuts – just a powerful, flexible solution that grows with your business.
              </p>
              <Button variant="glow" size="lg" asChild>
                <Link to="/#contact">
                  Get a Free Quote
                  <Package className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/50"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>
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
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20" />
            <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Launch Your E-Shop?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's build an online store that converts visitors into customers and grows your business.
              </p>
              <Button variant="glow" size="xl" asChild>
                <Link to="/#contact">
                  Start Your E-Commerce Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceWebsite;
