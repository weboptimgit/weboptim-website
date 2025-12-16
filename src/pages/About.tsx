// src/pages/About.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Zap,
  Users,
  Clock,
  Target,
  Rocket,
  Code,
  Palette,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO, { getAboutPageSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { AboutLanguageProvider, useAbout } from "@/contexts/LanguageAbout";
import { buildPath } from "@/config/domains";
import { domainConfig } from "@/config/domains";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AboutInner = () => {
  const { t } = useLanguage();
  const { language } = useLanguage();
  const [expandedBio, setExpandedBio] = useState<string | null>(null);
  const canonicalUrl =
  typeof window !== "undefined"
    ? `${domainConfig[language]}${window.location.pathname}`
    : `${domainConfig[language]}${buildPath(language, "about")}`;
  const contactUrl = buildPath(language, "contact");
  const workUrl = buildPath(language, "work");
  const { ta } = useAbout();
  
  const highlights = [
    { icon: Zap, title: ta("about.highlights.fast.title"), description: ta("about.highlights.fast.desc") },
    { icon: Users, title: ta("about.highlights.team.title"), description: ta("about.highlights.team.desc") },
    { icon: Clock, title: ta("about.highlights.ontime.title"), description: ta("about.highlights.ontime.desc") },
    { icon: Target, title: ta("about.highlights.results.title"), description: ta("about.highlights.results.desc") },
  ];

  const teamMembers = [
    {
      key: "peter",
      name: "Peter Gáborík",
      role: ta("about.team.peter.role"),
      image: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
      bio: ta("about.team.peter.bio"),
      linkedin: "https://www.linkedin.com/in/peter-gaborik/",
      email: "gaborik@weboptim.eu",
    },
    {
      key: "monika",
      name: "Monika Balogová",
      role: ta("about.team.monika.role"),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      bio: ta("about.team.monika.bio"),
      linkedin: "https://www.linkedin.com/in/monika-balogov%C3%A1-b9578bb4/",
      email: "info@weboptim.eu",
    },
    {
      key: "martin",
      name: "Martin Varga",
      role: ta("about.team.martin.role"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: ta("about.team.martin.bio"),
      linkedin: "#",
      email: "varga@weboptim.eu",
    },
    {
      key: "matej",
      name: "Matej Mikula",
      role: ta("about.team.matej.role"),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: ta("about.team.matej.bio"),
      linkedin: "#",
      email: "info@weboptim.eu",
    },
    {
      key: "milan",
      name: "Milan Strojný",
      role: ta("about.team.milan.role"),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: ta("about.team.milan.bio"),
      linkedin: "#",
      email: "info@weboptim.eu",
    },
  ];

  const stats = [
    { value: "50+", label: ta("about.stats.projectsCompleted") },
    { value: "30+", label: ta("about.stats.happyClients") },
    { value: "8+", label: ta("about.stats.yearsExperience") },
    { value: "5", label: ta("about.stats.awards") },
  ];

  const timeline = [
    { year: "2017", title: ta("about.timeline.2017.title"), description: ta("about.timeline.2017.desc"), icon: Rocket },
    { year: "2020", title: ta("about.timeline.2020.title"), description: ta("about.timeline.2020.desc"), icon: Target },
    { year: "2021", title: ta("about.timeline.2021.title"), description: ta("about.timeline.2021.desc"), icon: TrendingUp },
    { year: "2023", title: ta("about.timeline.2023.title"), description: ta("about.timeline.2023.desc"), icon: Zap },
    { year: "2025", title: ta("about.timeline.2025.title"), description: ta("about.timeline.2025.desc"), icon: Users },
  ];

  const values = [
    {
      title: ta("about.values.innovation.title"),
      description: ta("about.values.innovation.desc"),
      gradient: "from-primary/20 to-primary/5",
    },
    {
      title: ta("about.values.quality.title"),
      description: ta("about.values.quality.desc"),
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      title: ta("about.values.partnership.title"),
      description: ta("about.values.partnership.desc"),
      gradient: "from-primary/20 to-secondary/5",
    },
  ];

  return (
    <>
      <SEO
        titleKey="about"
        jsonLd={getAboutPageSchema(language, canonicalUrl)}
      />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="pt-52 pb-24 px-4 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {ta("about.hero.badge")}
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
                {t("about.title.before")} <span className="text-gradient">{t("about.title.highlight")}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {ta("about.hero.subtitle")}
              </p>

              {/* Animated Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.08,
                      ease: "easeOut",
                    }}
                    style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
                  >
                    {/* glass je obyčajný div */}
                    <div className="glass rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </section>

        {/* Story Section with Visual */}
        <section className="py-24 px-4 relative">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary font-medium text-sm mb-4">
                  {ta("about.story.badge")}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  {ta("about.story.title.before")} <span className="text-gradient">{ta("about.story.title.highlight")}</span>
                </h2>

                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>{ta("about.story.p1")}</p>
                  <p>{ta("about.story.p2")}</p>
                  <p>{ta("about.story.p3")}</p>
                </div>

                <Link to={contactUrl} className="inline-block mt-8">
                  <Button variant="glow" size="lg" className="group">
                    {ta("about.story.cta")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-[500px]">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-64 glass rounded-2xl p-6 z-10"
                  >
                    <Code className="w-10 h-10 text-primary mb-3" />
                    <h4 className="font-bold text-foreground mb-1">{ta("about.cards.code.title")}</h4>
                    <p className="text-sm text-muted-foreground">{ta("about.cards.code.desc")}</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-1/3 left-0 w-64 glass rounded-2xl p-6 z-20"
                  >
                    <Palette className="w-10 h-10 text-secondary mb-3" />
                    <h4 className="font-bold text-foreground mb-1">{ta("about.cards.design.title")}</h4>
                    <p className="text-sm text-muted-foreground">{ta("about.cards.design.desc")}</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 right-10 w-64 glass rounded-2xl p-6 z-10"
                  >
                    <TrendingUp className="w-10 h-10 text-primary mb-3" />
                    <h4 className="font-bold text-foreground mb-1">{ta("about.cards.growth.title")}</h4>
                    <p className="text-sm text-muted-foreground">{ta("about.cards.growth.desc")}</p>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary font-medium text-sm mb-4">
                {ta("about.timeline.badge")}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {ta("about.timeline.title.before")} <span className="text-gradient">{ta("about.timeline.title.highlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg">{ta("about.timeline.subtitle")}</p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      <span className="text-primary font-display font-bold text-xl">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-14 h-14 rounded-full glass items-center justify-center flex-shrink-0 z-10 bg-background border-2 border-primary/30">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary font-medium text-sm mb-4">
                {ta("about.why.badge")}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {ta("about.why.title.before")} <span className="text-gradient">{ta("about.why.title.highlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg">{ta("about.why.subtitle")}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary font-medium text-sm mb-4">
                {ta("about.values.badge")}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {ta("about.values.title.before")} <span className="text-gradient">{ta("about.values.title.highlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg">{ta("about.values.subtitle")}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl text-center relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-display font-bold text-gradient">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary font-medium text-sm mb-4">
                {ta("about.team.badge")}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {ta("about.team.title.before")} <span className="text-gradient">{ta("about.team.title.highlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg">{ta("about.team.subtitle")}</p>
            </motion.div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member, index) => {
                  const hasLinkedin = member.linkedin && member.linkedin !== "#";
                  const hasEmail = member.email && member.email !== "";
                  const hasSocials = hasLinkedin || hasEmail;
                  const isExpanded = expandedBio === member.key;

                  return (
                    <CarouselItem key={member.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl overflow-hidden group h-full"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {hasSocials && (
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                              <div className="flex gap-3">
                                {hasLinkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label={`${member.name} LinkedIn`}
                                  >
                                    <Linkedin className="w-4 h-4" />
                                  </a>
                                )}
                                {hasEmail && (
                                  <a
                                    href={`mailto:${member.email}`}
                                    className="w-9 h-9 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label={`Email ${member.name}`}
                                  >
                                    <Mail className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-5 text-center">
                          <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                          <p className="text-xs text-primary mb-2">{member.role}</p>
                          <AnimatePresence mode="wait">
                            {isExpanded ? (
                              <motion.div
                                key="expanded"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="cursor-pointer"
                                onClick={() => setExpandedBio(null)}
                              >
                                <p className="text-xs text-muted-foreground leading-relaxed mb-1">
                                  {member.bio}
                                </p>
                                <span className="text-xs text-primary font-medium">
                                  {language === "EN" ? "Show less" : "Skryť"}
                                </span>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="collapsed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="cursor-pointer group/bio"
                                onClick={() => setExpandedBio(member.key)}
                              >
                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-1 group-hover/bio:text-foreground transition-colors">
                                  {member.bio}
                                </p>
                                <span className="text-xs text-primary font-medium opacity-70 group-hover/bio:opacity-100 transition-opacity">
                                  {language === "EN" ? "Read more..." : "Viac..."}
                                </span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 glass hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="static translate-y-0 glass hover:bg-primary hover:text-primary-foreground" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-primary/90" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwSDI4VjBoNHYzNHptLTYgMGgtNFYwaDR2MzR6bS02IDBoLTJWMGgydjM0em0tNiAwSDhWMGg2djM0em0tOCAwSDBWMGg2djM0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />

              <div className="relative z-10 p-8 md:p-16 text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6"
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{ta("about.cta.title")}</h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">{ta("about.cta.subtitle")}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={contactUrl}>
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold group">
                      {ta("about.cta.primary")}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to={workUrl}>
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      {ta("about.cta.secondary")}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const About = () => {
  return (
    <AboutLanguageProvider>
      <AboutInner />
    </AboutLanguageProvider>
  );
};

export default About;
