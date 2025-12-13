import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { buildPath } from "@/config/domains";

const clientsRow1 = [
  { name: "TechCorp", logo: "TechCorp" },
  { name: "InnovateLab", logo: "InnovateLab" },
  { name: "GrowthHub", logo: "GrowthHub" },
  { name: "NextGen", logo: "NextGen" },
  { name: "BlueWave", logo: "BlueWave" },
  { name: "SkyLimit", logo: "SkyLimit" },
  { name: "DataFlow", logo: "DataFlow" },
  { name: "CloudNine", logo: "CloudNine" },
  { name: "PixelPro", logo: "PixelPro" },
  { name: "VisionX", logo: "VisionX" },
];

const clientsRow2 = [
  { name: "Quantum", logo: "Quantum" },
  { name: "Apex", logo: "Apex" },
  { name: "Zenith", logo: "Zenith" },
  { name: "Elevate", logo: "Elevate" },
  { name: "Fusion", logo: "Fusion" },
  { name: "Spectrum", logo: "Spectrum" },
  { name: "Catalyst", logo: "Catalyst" },
  { name: "Pinnacle", logo: "Pinnacle" },
  { name: "Horizon", logo: "Horizon" },
  { name: "Vertex", logo: "Vertex" },
];

const TrustSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-foreground">{t("trust.title.before")} </span>
          <span className="text-gradient">{t("trust.title.highlight")}</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("trust.subtitle")}
        </p>
      </motion.div>

      {/* Carousel Row 1 - Left to Right */}
      <div className="relative mb-6 overflow-hidden">
        <div className="flex animate-scroll-left">
          {[...clientsRow1, ...clientsRow1].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 glass rounded-xl px-8 py-6 flex items-center justify-center min-w-[180px] hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="text-lg font-display font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Row 2 - Right to Left */}
      <div className="relative mb-16 overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...clientsRow2, ...clientsRow2].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3 glass rounded-xl px-8 py-6 flex items-center justify-center min-w-[180px] hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="text-lg font-display font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <Link to={buildPath(language, "contact")}>
          <Button variant="hero" size="xl" className="group">
            {t("trust.cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default TrustSection;
