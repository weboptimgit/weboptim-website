import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_hsl(var(--cyan)/0.3)]">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to start your <span className="text-gradient">project</span>?
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let's collaborate and create something extraordinary together. Get in touch and tell us about your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact/">
              <Button variant="hero" size="xl" className="group">
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button variant="glow" size="xl">
              Schedule a Call
            </Button>
          </div>

          {/* Email */}
          <p className="mt-8 text-muted-foreground">
            Or email us directly at{" "}
            <a href="mailto:hello@nexus.agency" className="text-primary hover:underline">
              hello@nexus.agency
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
