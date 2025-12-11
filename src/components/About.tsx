import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Users, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals passionate about innovation",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects delivered within agreed timelines",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Focused on achieving measurable outcomes",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              We're a team of <span className="text-gradient">innovators</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded in 2012, Nexus has grown from a small design studio to a full-service digital agency. We combine
              creativity with technical expertise to deliver solutions that make a real impact.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our mission is simple: help businesses thrive in the digital world by creating experiences that users love
              and that drive measurable results.
            </p>
            <Link to="/about">
              <Button size="lg">Learn More About Us</Button>
            </Link>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
