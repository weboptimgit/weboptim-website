import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Users, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildPath } from "@/config/domains";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t("about.features.fast.title"),
      description: t("about.features.fast.desc"),
    },
    {
      icon: Users,
      title: t("about.features.team.title"),
      description: t("about.features.team.desc"),
    },
    {
      icon: Clock,
      title: t("about.features.ontime.title"),
      description: t("about.features.ontime.desc"),
    },
    {
      icon: Target,
      title: t("about.features.results.title"),
      description: t("about.features.results.desc"),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              {t("about.badge")}
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t("about.heading.before")}{" "}
              <span className="text-gradient">{t("about.heading.highlight")}</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("about.p1")}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("about.p2")}
            </p>

            <Link to={buildPath(language, "about")}>
              <Button size="lg">{t("about.cta")}</Button>
            </Link>
          </motion.div>

          {/* Features grid wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
            style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                // ✅ motion wrapper WITHOUT glass
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.12 + index * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
                >
                  {/* ✅ glass is STATIC div (prevents flicker) */}
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
