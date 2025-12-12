import { motion } from "framer-motion";
import { ArrowRight, Check, Image, Layers, Palette, PenTool, Printer, Sparkles, Star, Target, Users, FileImage, BookOpen, CreditCard, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import { useLanguage } from "@/contexts/LanguageContext";

const graphicFaqs = [
  { question: "What file formats do you deliver?", answer: "We deliver all industry-standard formats including AI, EPS, PDF, PNG, JPG, and SVG. For print projects, we provide press-ready files with proper bleed and color profiles." },
  { question: "How many revision rounds are included?", answer: "Our packages include 2-3 revision rounds depending on the project scope. We work closely with you to ensure the final design meets your vision." },
  { question: "Do you handle printing as well?", answer: "Yes, we can manage the entire print process from design to delivery. We work with trusted print partners to ensure quality and competitive pricing." },
  { question: "What's your typical turnaround time?", answer: "Simple projects like business cards take 3-5 business days. Complex projects like brand identity packages take 2-4 weeks. Rush delivery is available for urgent needs." },
];

const graphicServices = [
  { 
    name: "Corporate Identity", 
    icon: Layers, 
    description: "Logos & brand systems", 
    color: "from-purple-500 to-violet-500",
  },
  { 
    name: "Print Design", 
    icon: Printer, 
    description: "Brochures, flyers, cards", 
    color: "from-blue-500 to-cyan-500",
  },
  { 
    name: "Digital Graphics", 
    icon: Image, 
    description: "Social & web banners", 
    color: "from-pink-500 to-rose-500",
  },
  { 
    name: "Packaging", 
    icon: FileImage, 
    description: "Product packaging", 
    color: "from-orange-500 to-amber-500",
  },
  { 
    name: "Marketing Materials", 
    icon: Megaphone, 
    description: "Ads & presentations", 
    color: "from-green-500 to-emerald-500",
  },
  { 
    name: "Illustrations", 
    icon: PenTool, 
    description: "Custom artwork", 
    color: "from-indigo-500 to-blue-500",
  },
];

const metrics = [
  { value: "500+", label: "Designs Created", icon: Palette },
  { value: "100+", label: "Brand Identities", icon: Layers },
  { value: "150+", label: "Happy Clients", icon: Users },
  { value: "5.0", label: "Client Rating", icon: Star },
];

const features = [
  {
    icon: Layers,
    title: "Corporate Identity",
    description: "Complete brand systems including logos, color palettes, typography, and brand guidelines that define your visual identity",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Printer,
    title: "Print Design",
    description: "Professional print materials including business cards, brochures, posters, flyers, and promotional materials",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Image,
    title: "Digital Graphics",
    description: "Eye-catching social media graphics, web banners, email templates, and digital advertising assets",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: FileImage,
    title: "Packaging Design",
    description: "Standout product packaging that captures attention on shelves and reinforces your brand",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: BookOpen,
    title: "Publication Design",
    description: "Magazines, catalogs, annual reports, and multi-page documents with professional layouts",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: PenTool,
    title: "Custom Illustrations",
    description: "Unique illustrations and icons tailored to your brand that make your content stand out",
    gradient: "from-indigo-500/20 to-blue-500/20",
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "299",
    description: "Perfect for small projects",
    features: [
      "Business card design",
      "Social media graphics (5)",
      "2 revision rounds",
      "Digital files delivery",
      "3-5 day turnaround",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "799",
    description: "Complete branding package",
    features: [
      "Logo design (3 concepts)",
      "Business card & letterhead",
      "Social media kit",
      "Brand guidelines",
      "Print-ready files",
      "3 revision rounds",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "1,999",
    description: "Full brand identity system",
    features: [
      "Complete logo system",
      "Full stationery suite",
      "Marketing materials",
      "Packaging design",
      "Brand book (20+ pages)",
      "Unlimited revisions",
      "Priority support",
    ],
    popular: false,
  },
];

const GraphicServices = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Palette className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-medium text-sm">{t("graphic.badge")}</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                {t("graphic.title1")}
                <br />
                <span className="text-gradient">{t("graphic.title2")}</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                {t("graphic.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="hero">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  <Image className="w-4 h-4 mr-2" />
                  View Portfolio
                </Button>
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
                  <span className="text-sm text-muted-foreground ml-2">Design Services</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {graphicServices.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-white/5`}
                    >
                      <service.icon className="w-6 h-6 text-white mb-2" />
                      <div className="font-medium text-foreground text-sm">{service.name}</div>
                      <div className="text-xs text-muted-foreground">{service.description}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-border/30">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
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

      {/* Services Detail Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              What We Create
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Full-Service <span className="text-gradient">Graphic Design</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We pride ourselves on creating digital content that not only stands out but also demonstrably fulfils its purpose.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient.replace('/20', '')} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Animated ring blur */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient.replace('/20', '')} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`} />
                </div>
                
                <h3 className="relative text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="relative text-muted-foreground">{feature.description}</p>
                
                {/* Corner decoration */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.gradient.replace('/20', '')} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of our recent graphic design projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`aspect-square rounded-xl bg-gradient-to-br ${
                  index % 4 === 0 ? "from-purple-500/20 to-pink-500/20" :
                  index % 4 === 1 ? "from-blue-500/20 to-cyan-500/20" :
                  index % 4 === 2 ? "from-orange-500/20 to-amber-500/20" :
                  "from-green-500/20 to-emerald-500/20"
                } border border-white/5 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300`}
              >
                <Image className="w-10 h-10 text-white/30 group-hover:text-white/50 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/work">
              <Button variant="outline" size="lg">
                View Full Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose the package that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass rounded-2xl p-8 ${plan.popular ? "border-2 border-purple-500 scale-105" : "border border-border/50"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">starting</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "hero" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ServiceReviews />

      {/* FAQ */}
      <ServiceFAQ 
        faqs={graphicFaqs}
        serviceName="Graphic Design Services"
      />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Create Something <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and bring your vision to life with stunning visuals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="hero">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/work">
                <Button size="lg" variant="outline">
                  View Our Work
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