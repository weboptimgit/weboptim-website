import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "GrowthHub", logo: "GH" },
  { name: "NextGen", logo: "NG" },
  { name: "BlueWave", logo: "BW" },
  { name: "SkyLimit", logo: "SL" },
];

const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">They </span>
            <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For years, we have been helping to meet the marketing goals of our clients in various industries.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 flex items-center justify-center h-24 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-2xl font-display font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {client.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="xl" className="group">
            I Want to Become Your Client
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;