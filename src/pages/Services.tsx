import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Smartphone, Globe, Zap, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technologies. Fast, scalable, and secure solutions that grow with your business.",
    href: "/services/building-website",
    features: [
      "Custom React & Next.js development",
      "WordPress & CMS solutions",
      "API integrations",
      "Performance optimization",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement across all platforms.",
    href: null,
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design systems",
      "Responsive design",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps that deliver seamless experiences on iOS and Android.",
    href: null,
    features: [
      "React Native development",
      "iOS & Android native",
      "App Store optimization",
      "Push notifications",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Powerful online stores with seamless checkout experiences that maximize conversions.",
    href: "/services/ecommerce-website",
    features: [
      "Shopify & WooCommerce",
      "Custom checkout flows",
      "Payment integrations",
      "Inventory management",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times and optimized performance for better SEO and user experience.",
    href: null,
    features: [
      "Core Web Vitals optimization",
      "Image & asset optimization",
      "CDN configuration",
      "Caching strategies",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security measures to protect your business and customer data.",
    href: null,
    features: [
      "SSL & HTTPS setup",
      "Security audits",
      "GDPR compliance",
      "Data encryption",
    ],
    color: "from-red-500 to-rose-500",
  },
];

const Services = () => {
  return (
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        {service.href && (
                          <Link
                            to={service.href}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                          </Link>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {service.href && (
                        <Link
                          to={service.href}
                          className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-3 transition-all"
                        >
                          Learn More
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
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
  );
};

export default Services;
