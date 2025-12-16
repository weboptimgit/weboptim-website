import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { buildPath } from "@/config/domains";

interface Client {
  name: string;
  text?: string;
  image?: string;
  url?: string;
}

const clientsRow1: Client[] = [
  { name: "TechCorp", text: "TechCorp" },
  { name: "InnovateLab", text: "InnovateLab" },
  { name: "GrowthHub", text: "GrowthHub" },
  { name: "NextGen", text: "NextGen" },
  { name: "BlueWave", text: "BlueWave" },
  { name: "SkyLimit", text: "SkyLimit" },
  { name: "DataFlow", text: "DataFlow" },
  { name: "CloudNine", text: "CloudNine" },
  { name: "PixelPro", text: "PixelPro" },
  { name: "DuoStory.cz", image: "/img/duostorylogo-gradient-cele-300x54.png", url: "https://duostory.cz/" },
];

const clientsRow2: Client[] = [
  { name: "Quantum", text: "Quantum" },
  { name: "Apex", text: "Apex" },
  { name: "Zenith", text: "Zenith" },
  { name: "Elevate", text: "Elevate" },
  { name: "Fusion", text: "Fusion" },
  { name: "Spectrum", text: "Spectrum" },
  { name: "Catalyst", text: "Catalyst" },
  { name: "Pinnacle", text: "Pinnacle" },
  { name: "Horizon", text: "Horizon" },
  { name: "Vertex", text: "Vertex" },
];

const ClientCard = memo(({ client }: { client: Client }) => {
  const content = (
    <div className="flex-shrink-0 mx-3 glass rounded-xl px-8 py-6 flex items-center justify-center min-w-[180px] h-[80px] hover:border-primary/30 transition-all duration-300 group">
      {client.image ? (
        <img 
          src={client.image} 
          alt={client.name} 
          className="max-h-[48px] max-w-[140px] object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      ) : client.text ? (
        <span className="text-lg font-display font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
          {client.text}
        </span>
      ) : null}
    </div>
  );

  if (client.url) {
    return (
      <a 
        href={client.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return content;
});

ClientCard.displayName = "ClientCard";

const TrustSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Section Header (Blog-style motion) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
            <ClientCard key={index} client={client} />
          ))}
        </div>
      </div>

      {/* Carousel Row 2 - Right to Left */}
      <div className="relative mb-16 overflow-hidden">
        <div className="flex animate-scroll-right">
          {[...clientsRow2, ...clientsRow2].map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>
      </div>

      {/* CTA Button (Blog-style motion) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
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
