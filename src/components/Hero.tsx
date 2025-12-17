import { lazy, Suspense, memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Rocket, Heart, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildPath } from "@/config/domains";
import { Link } from "react-router-dom";

// Lazy load non-critical decorative component
const FloatingShapes = lazy(() => import("./FloatingShapes"));

// Memoized stat card with CSS animation
const StatCard = memo(
  ({
    stat,
    index,
  }: {
    stat: { value: string; label: string; icon: any; color: string };
    index: number;
  }) => {
    const Icon = stat.icon;

    return (
      <div 
        className="animate-fade-in-up"
        style={{ animationDelay: `${0.25 + index * 0.08}s` }}
      >
        <div className="group relative glass rounded-2xl p-5 md:p-6 text-center cursor-default overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />
          <div
            className={`mx-auto w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      </div>
    );
  }
);

StatCard.displayName = "StatCard";

const Hero = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: "50+", label: t("stats.projects"), icon: Rocket, color: "from-primary to-cyan" },
    { value: "98%", label: t("stats.satisfaction"), icon: Heart, color: "from-pink-500 to-rose-400" },
    { value: "8+", label: t("stats.experience"), icon: Clock, color: "from-amber-500 to-orange-400" },
    { value: "5+", label: t("stats.team"), icon: Users, color: "from-emerald-500 to-green-400" },
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=60",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=60",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=60",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=60",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12">
      <Suspense fallback={null}>
        <FloatingShapes />
      </Suspense>

      {/* Static gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 to-blue/20 blur-[100px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-blue/30 to-primary/15 blur-[120px] animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/15 blur-[100px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{t("hero.badge")}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[0.95] mb-6">
            <span className="block text-foreground">{t("hero.title1")}</span>
            <span className="block">
              <span className="text-gradient glow-text relative">
                {t("hero.title2")}
                <span className="absolute -right-2 -top-2 text-2xl">✦</span>
              </span>
            </span>
            <span className="block text-foreground">{t("hero.title3")}</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={buildPath(language, "contact")}>
              <Button variant="hero" size="xl" className="group">
                {t("hero.cta1")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to={buildPath(language, "services")}>
              <Button variant="glow" size="xl" className="group gap-2">
                {t("hero.cta2")}
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJzcbs0zaVC0cRcanhELRst6E"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-xl glass hover:border-primary/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0</span>
              <span className="text-sm text-muted-foreground">{t("hero.excellentReviews")}</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    loading="lazy"
                    decoding="async"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+</span> {t("hero.happyClients")}
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 pt-10 border-t border-border/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;