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
  { name: "Poslední věta", image: "/img/logo_posledni-veta_blue-300x37.png", url: "https://posledniveta.cz/" },
  { name: "Biodent", image: "/img/logo-biodent-copy-300x246.png", url: "https://www.biodent.sk/" },
  { name: "Anatte", image: "/img/ANATTE-logo.svg", url: "https://www.anatte.sk/" },
  { name: "Club420", image: "/img/c420-logo.png" },
  { name: "Casa Fortuna", image: "/img/casa-fortuna-logo.png", url: "https://casa-fortuna.ch/" },
  { name: "DataFeeder", image: "/img/DataFeeder_logo_w-300x77.png", url: "https://www.datafeeder.cz/" },
  { name: "Donotage", image: "/img/dna_high_black_SK-300x220.png", url: "https://www.donotage.sk/" },
  { name: "DuoStory.cz", image: "/img/duostorylogo-gradient-cele-300x54.png", url: "https://duostory.cz/" },
  { name: "Elmina", image: "/img/elmina-sk.png", url: "https://www.elmina.sk/" },
  { name: "Empik Foto", image: "/img/empikfoto_logo_-300x73.png", url: "https://www.empikfoto.sk/" },
  { name: "Europeum", image: "/img/EUROPEUM-white-AI-copy.svg", url: "https://europeum.org/" },
  { name: "Globus", image: "/img/Globus_logo_logotype.png", url: "https://www.globus.cz/" },
  { name: "Helmisiivous", image: "/img/helmisivus-logo-300x165.png", url: "https://helmisiivous.fi/" },
  { name: "Jansen Display", image: "/img/jansendisplay_logo.png", url: "https://www.jansen-display.sk/" },
  { name: "Kimbau", image: "/img/kimbau_logo.png", url: "https://www.kimbau.cz/" },
  { name: "Lindström", image: "/img/Lindstrom_logo_RGB-300x61.png", url: "https://www.lindstromgroup.com/sk/" },
  { name: "maxCBD", image: "/img/logo_gradient_darkgreen-300x134.png", url: "https://www.maxcbd.sk/" },
  { name: "Kristianna", image: "/img/logo_kristianna.webp"},
];

const clientsRow2: Client[] = [
  { name: "HorvathCannabis", image: "/img/logos1-9-t-300x193.png", url: "https://www.horvathcannabis.sk/" },
  { name: "Materasso", image: "/img/materasso_logo_-300x111", url: "https://materasso.cz/" },
  { name: "Modaco", image: "/img/modaco-logo.png", url: "https://www.modaco.cz/" },
  { name: "Odopro", image: "/img/odopro_logo_color-1-300x76.png", url: "https://www.odopro.cz/" },
  { name: "Odpružení.cz", image: "/img/odpruzeni_logo-300x37.png", url: "https://www.odpruzeni.cz/" },
  { name: "Penzión Snežná", image: "/img/penzionsnezna-favicon-300x300.png", url: "https://www.penzionsnezna.cz/" },
  { name: "Philips", image: "/img/philips-logo-wordmark-300x116.png", url: "https://www.philips.com/" },
  { name: "Škoda", image: "/img/skoda_logo-260x300.png", url: "https://www.skoda-auto.sk/" },
  { name: "Sunsystem", image: "/img/sunsystem-logo-300x31.png", url: "https://www.sunsystem.eu/" },
  { name: "Technorol", image: "/img/technorol_logo.svg", url: "https://www.technorol.sk/" },
  { name: "Tom’s Food", image: "/img/tomsfood-logo-w.webp"},
  { name: "Uzdrav Telo", image: "/img/uzdravtelo-sk-logo_gradient.png", url: "https://www.uzdravtelo.sk/" },
  { name: "Yogatree", image: "/img/yogatre2-300x243.png", url: "https://yogatree.cz/" },
  { name: "YourKush", image: "/img/yourkush-logo.png", url: "https://www.yourkush.cz/" },
  { name: "Bazény Magiline", image: "/img/logo_bazeny_magiline.png", url: "https://www.magilinebazeny.sk/" },
  { name: "C&A", image: "/img/Logo_CA-copy.png", url: "https://www.c-and-a.com/" },
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
