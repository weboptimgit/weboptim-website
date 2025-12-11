import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import mascotWorking from "@/assets/mascot-working.png";
const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites built with cutting-edge technologies. Fast, scalable, and secure solutions.",
    href: "/services/building-website",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement across all platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps that deliver seamless experiences on iOS and Android.",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Powerful online stores with seamless checkout experiences that maximize conversions.",
    href: "/services/ecommerce-website",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times and optimized performance for better SEO and user experience.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security measures to protect your business and customer data.",
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
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.img
            src={mascotWorking}
            alt="Working mascot"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-6 object-contain drop-shadow-xl"
          />
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Services that <span className="text-gradient">elevate</span> your brand
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive digital solutions tailored to your unique needs, 
            helping businesses thrive in the modern digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const CardContent = (
              <>
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(var(--cyan)/0.4)] transition-shadow duration-500">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </>
            );

            return service.href ? (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={service.href}
                  className="group glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer block h-full"
                >
                  {CardContent}
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;