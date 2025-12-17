import { memo, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Search,
  ShoppingCart,
  Megaphone,
  Workflow,
  Palette,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicePath, buildPath } from "@/config/domains";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

// Memoized service card for better performance
const ServiceCard = memo(({ service, index }: { service: any; index: number }) => {
  const { t } = useLanguage();

  const Card = (
    <Link
      to={service.href}
      className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer block h-full overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div
        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
      >
        <service.icon className="w-8 h-8 text-white" />
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`}
        />
      </div>

      <h3 className="relative text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>

      <p className="relative text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="relative flex items-center text-primary font-medium">
        <span className="text-sm">{t("servicesSection.learnMore")}</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </div>

      <div
        className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
      />
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {Card}
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

const Services = () => {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services = [
    {
      icon: Code2,
      title: t("services.card.webDev.title"),
      description: t("services.card.webDev.desc"),
      href: servicePath(language, "buildingWebsite"),
      gradient: "from-brandBlue to-brandCyan",
      accent: "blue",
    },
    {
      icon: ShoppingCart,
      title: t("services.card.ecom.title"),
      description: t("services.card.ecom.desc"),
      href: servicePath(language, "ecommerceWebsite"),
      gradient: "from-brandPurple to-pink-400",
      accent: "purple",
    },
    {
      icon: Search,
      title: t("services.card.seo.title"),
      description: t("services.card.seo.desc"),
      href: servicePath(language, "seo"),
      gradient: "from-emerald-500 to-teal-400",
      accent: "emerald",
    },
    {
      icon: Megaphone,
      title: t("services.card.ppc.title"),
      description: t("services.card.ppc.desc"),
      href: servicePath(language, "ppc"),
      gradient: "from-orange-500 to-amber-400",
      accent: "orange",
    },
    {
      icon: Workflow,
      title: t("services.card.digital.title"),
      description: t("services.card.digital.desc"),
      href: servicePath(language, "digitalization"),
      gradient: "from-primary to-accent",
      accent: "primary",
    },
    {
      icon: Palette,
      title: t("services.card.graphic.title"),
      description: t("services.card.graphic.desc"),
      href: servicePath(language, "graphicDesign"),
      gradient: "from-pink-500 to-violet-400",
      accent: "pink",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration - static for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Blog-style motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              {t("servicesSection.badge")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t("servicesSection.title")}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("servicesSection.subtitle")}
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="space-y-4">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-2 basis-[85%]">
                    <ServiceCard service={service} index={0} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        )}

        {/* CTA - Blog-style motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={buildPath(language, "services")}>
            <Button size="lg" variant="hero" className="group">
              {t("servicesSection.viewAll")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
