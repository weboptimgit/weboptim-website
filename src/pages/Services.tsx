import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Search, ShoppingCart, Megaphone, Workflow, Palette, CheckCircle, Sparkles, Rocket, Terminal, Braces } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const techStack = [
  { name: "WordPress", bgColor: "rgba(37, 99, 235, 0.2)", textColor: "#93c5fd", borderColor: "rgba(59, 130, 246, 0.3)" },
  { name: "Oxygen Builder", bgColor: "rgba(6, 182, 212, 0.2)", textColor: "#22d3ee", borderColor: "rgba(6, 182, 212, 0.3)" },
  { name: "WooCommerce", bgColor: "rgba(168, 85, 247, 0.2)", textColor: "#c084fc", borderColor: "rgba(168, 85, 247, 0.3)" },
  { name: "PHP", bgColor: "rgba(99, 102, 241, 0.2)", textColor: "#a5b4fc", borderColor: "rgba(99, 102, 241, 0.3)" },
  { name: "Clean Code", bgColor: "rgba(34, 197, 94, 0.2)", textColor: "#4ade80", borderColor: "rgba(34, 197, 94, 0.3)" },
  { name: "Tailwind", bgColor: "rgba(20, 184, 166, 0.2)", textColor: "#2dd4bf", borderColor: "rgba(20, 184, 166, 0.3)" },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    subtitle: "From idea to launch in record time",
    description: "Custom WordPress websites built with Oxygen Builder. Fast, scalable, and optimized for results.",
    href: "/services/building-website",
    features: [
      "WordPress & Oxygen Builder",
      "Hand-coded themes",
      "Performance optimized",
      "99.9% uptime guarantee",
    ],
    color: "from-cyan-500 to-blue-500",
    isHighlighted: true,
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "<1s", label: "Load Time" },
      { value: "100%", label: "Mobile-First" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Powerful WooCommerce stores with seamless checkout experiences that maximize conversions.",
    href: "/services/ecommerce-website",
    features: [
      "WooCommerce & Shoptet",
      "Custom checkout flows",
      "Payment integrations",
      "Inventory management",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your search rankings and drive organic traffic with proven SEO strategies.",
    href: "/services/seo",
    features: [
      "Keyword research & analysis",
      "Link building campaigns",
      "Local SEO optimization",
      "Technical SEO audits",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Megaphone,
    title: "PPC & Advertising",
    description: "Strategic paid campaigns on Google and social media that drive qualified traffic and leads.",
    href: "/services/ppc",
    features: [
      "Google Ads management",
      "Meta & social ads",
      "Remarketing campaigns",
      "ROI tracking & reports",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Workflow,
    title: "Digitalization",
    description: "Automate your business with CRM, cloud tools, and workflow automation solutions.",
    href: "/services/digitalization",
    features: [
      "CRM implementation",
      "Workflow automation",
      "Cloud integrations",
      "Process optimization",
    ],
    color: "from-primary to-accent",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching digital and print graphics from logos to brochures and marketing materials.",
    href: "/services/graphic-design",
    features: [
      "Corporate identity",
      "Print & digital graphics",
      "Marketing materials",
      "Packaging design",
    ],
    color: "from-pink-500 to-violet-500",
  },
];

// Highlighted Web Development Card Component
const WebDevCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="lg:col-span-2 group"
  >
    <div className="relative glass rounded-3xl p-8 lg:p-10 overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating code elements */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Braces className="w-16 h-16 text-primary" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 right-20 opacity-10 group-hover:opacity-30 transition-opacity">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <Terminal className="w-12 h-12 text-cyan-400" />
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left side */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, hsl(193 88% 61%), hsl(210 60% 55%))' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Most Popular</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-lg text-primary font-medium mb-3">{service.subtitle}</p>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {service.description}
            </p>

            {/* Tech Stack Badges */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{
                      backgroundColor: tech.bgColor,
                      color: tech.textColor,
                      borderColor: tech.borderColor,
                    }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {service.features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link to={service.href!}>
              <Button variant="hero" size="lg" className="gap-2">
                <Rocket className="w-4 h-4" />
                Start Your Project
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Right side - Stats */}
          <div className="lg:w-64 flex lg:flex-col gap-4">
            {service.stats?.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex-1 glass rounded-xl p-4 text-center border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="text-2xl lg:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Regular Service Card Component
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="glass rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{ 
            background: service.color === 'from-purple-500 to-pink-500' ? 'linear-gradient(135deg, hsl(270 60% 55%), hsl(320 70% 55%))' :
                        service.color === 'from-green-500 to-emerald-500' ? 'linear-gradient(135deg, hsl(142 70% 45%), hsl(160 80% 40%))' :
                        service.color === 'from-orange-500 to-amber-500' ? 'linear-gradient(135deg, hsl(25 95% 55%), hsl(45 95% 50%))' :
                        service.color === 'from-primary to-accent' ? 'linear-gradient(135deg, hsl(193 88% 61%), hsl(210 60% 55%))' :
                        service.color === 'from-pink-500 to-violet-500' ? 'linear-gradient(135deg, hsl(320 70% 55%), hsl(270 60% 55%))' :
                        'linear-gradient(135deg, hsl(193 88% 61%), hsl(210 60% 55%))'
          }}
        >
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            {service.href && (
              <Link to={service.href} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </Link>
            )}
          </div>
          <p className="text-muted-foreground mb-6">{service.description}</p>
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
          {service.href && (
            <Link to={service.href} className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-3 transition-all">
              Learn More
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const { t } = useLanguage();
  const webDevService = services[0]; // First service is Web Development
  const otherServices = services.slice(1);

  return (
    <>
      <SEO titleKey="services" />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                What We Offer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your unique needs, helping businesses thrive in the modern digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Highlighted Web Development Card */}
              <WebDevCard service={webDevService} index={0} />
              
              {/* Other Services */}
              {otherServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index + 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven approach to delivering exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
                { step: "02", title: "Strategy", desc: "Planning the perfect solution" },
                { step: "03", title: "Development", desc: "Building with precision and care" },
                { step: "04", title: "Launch", desc: "Deploying and optimizing for success" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center relative group hover:border-primary/40 transition-all"
                >
                  <div className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300"
                >
                  Contact Us
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
