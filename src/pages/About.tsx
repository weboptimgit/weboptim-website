import { motion } from "framer-motion";
import { Linkedin, Mail, Zap, Users, Clock, Target, Rocket, Code, Palette, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const highlights = [
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

const teamMembers = [
  {
    name: "Peter Gáborík",
    role: "Founder & Lead Developer",
    image: "https://www.weboptim.eu/wp-content/uploads/2022/06/IMG_0631.jpg",
    bio: "Web development specialist with expertise in WordPress, Oxygen Builder, and modern web technologies.",
    linkedin: "https://www.linkedin.com/in/peter-gaborik/",
    email: "info@weboptim.eu",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Industry Awards" },
];

const timeline = [
  {
    year: "2016",
    title: "The Beginning",
    description: "Started as a freelance developer, helping local businesses establish their online presence.",
    icon: Rocket,
  },
  {
    year: "2018",
    title: "Expanding Services",
    description: "Added SEO, PPC advertising, and graphic design to offer complete digital solutions.",
    icon: TrendingUp,
  },
  {
    year: "2020",
    title: "WordPress Mastery",
    description: "Became experts in WordPress and Oxygen Builder, delivering high-performance websites.",
    icon: Code,
  },
  {
    year: "2023",
    title: "Full-Service Agency",
    description: "Grew into a comprehensive digital agency serving clients across Europe.",
    icon: Palette,
  },
];

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Quality",
    description: "We never compromise on quality. Every pixel, every line of code matters.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Partnership",
    description: "We see ourselves as an extension of your team, invested in your success.",
    gradient: "from-primary/20 to-secondary/5",
  },
];

const About = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEO titleKey="about" />
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
                About WebOptim
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
                {t("about.title.before")} <span className="text-gradient">{t("about.title.highlight")}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                We're a passionate team of designers, developers, and strategists dedicated to crafting exceptional
                digital experiences that drive real business results.
              </p>

              {/* Animated Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mt-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
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
                  Our Story
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Building Digital <span className="text-gradient">Excellence</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Founded in 2016, WebOptim started with a simple mission: to help businesses succeed in the digital
                    world through beautiful, functional websites that drive real results.
                  </p>
                  <p>
                    What began as a small operation has grown into a full-service digital agency, serving clients
                    across industries from startups to established enterprises throughout Europe.
                  </p>
                  <p>
                    We believe that great design is more than aesthetics—it's about solving problems, creating
                    connections, and delivering experiences that matter.
                  </p>
                </div>
                
                <Link to="/contact" className="inline-block mt-8">
                  <Button variant="glow" size="lg" className="group">
                    Work With Us
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
                {/* Visual element - floating cards */}
                <div className="relative h-[500px]">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-64 glass rounded-2xl p-6 z-10"
                  >
                    <Code className="w-10 h-10 text-primary mb-3" />
                    <h4 className="font-bold text-foreground mb-1">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">Performance-optimized solutions</p>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-1/3 left-0 w-64 glass rounded-2xl p-6 z-20"
                  >
                    <Palette className="w-10 h-10 text-secondary mb-3" />
                    <h4 className="font-bold text-foreground mb-1">Creative Design</h4>
                    <p className="text-sm text-muted-foreground">Stunning visual experiences</p>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 right-10 w-64 glass rounded-2xl p-6 z-10"
                  >
                    <TrendingUp className="w-10 h-10 text-primary mb-3" />
                    <h4 className="font-bold text-foreground mb-1">Growth Focus</h4>
                    <p className="text-sm text-muted-foreground">Results that matter</p>
                  </motion.div>
                  
                  {/* Background glow */}
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
                Our Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Years of <span className="text-gradient">Growth</span>
              </h2>
              <p className="text-muted-foreground text-lg">From humble beginnings to a full-service digital agency.</p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden md:block" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      <span className="text-primary font-display font-bold text-xl">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
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
                Why Us
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                What Sets Us <span className="text-gradient">Apart</span>
              </h2>
              <p className="text-muted-foreground text-lg">The difference that makes us your ideal digital partner.</p>
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
                Core Values
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Our <span className="text-gradient">Principles</span>
              </h2>
              <p className="text-muted-foreground text-lg">The foundation of everything we do.</p>
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
                Our Team
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Meet the <span className="text-gradient">Founder</span>
              </h2>
              <p className="text-muted-foreground text-lg">The driving force behind WebOptim's success.</p>
            </motion.div>
            
            <div className="max-w-lg mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-3xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="p-8 text-center relative -mt-16">
                    <div className="glass rounded-2xl p-6">
                      <h3 className="text-2xl font-display font-bold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground mb-6">{member.bio}</p>
                      <div className="flex justify-center gap-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                  Let's create something amazing together. Get in touch to discuss how we can help transform your digital presence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      View Our Work
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

export default About;
