import { motion } from "framer-motion";
import { Code2, Search, ShoppingCart, Megaphone, Workflow, Palette, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom WordPress websites with Oxygen Builder. Fast, scalable, and optimized for performance.",
    href: "/services/building-website",
    gradient: "from-blue-500 to-cyan-400",
    accent: "blue",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Powerful WooCommerce stores with seamless checkout experiences that maximize conversions.",
    href: "/services/ecommerce-website",
    gradient: "from-purple-500 to-pink-400",
    accent: "purple",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your rankings with keyword research, link building, and local SEO strategies.",
    href: "/services/seo",
    gradient: "from-emerald-500 to-teal-400",
    accent: "emerald",
  },
  {
    icon: Megaphone,
    title: "PPC & Advertising",
    description: "Strategic paid campaigns on Google and social media that drive qualified traffic and leads.",
    href: "/services/ppc",
    gradient: "from-orange-500 to-amber-400",
    accent: "orange",
  },
  {
    icon: Workflow,
    title: "Digitalization",
    description: "Automate your business with CRM, cloud tools, and workflow automation solutions.",
    href: "/services/digitalization",
    gradient: "from-primary to-accent",
    accent: "primary",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching digital and print graphics from logos to brochures and marketing materials.",
    href: "/services/graphic-design",
    gradient: "from-pink-500 to-violet-400",
    accent: "pink",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">What We Do</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Services that <span className="text-gradient">elevate</span> your brand
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions tailored to your unique needs, 
            helping businesses thrive in the modern digital landscape.
          </p>
        </motion.div>

        {/* Services Grid - Featured layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
            >
              <Link
                to={service.href}
                className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer block h-full overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                  {/* Animated ring */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`} />
                </div>

                <h3 className="relative text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="relative flex items-center text-primary font-medium">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Corner decoration */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" variant="outline" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;