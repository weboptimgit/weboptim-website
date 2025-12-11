import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Zap, Users, Clock, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

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
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "With over 15 years of experience in digital strategy, Alex leads our vision to transform businesses through innovative web solutions.",
    linkedin: "#",
    twitter: "#",
    email: "alex@nexus.com",
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Sarah brings brands to life with her exceptional eye for design and deep understanding of user experience principles.",
    linkedin: "#",
    twitter: "#",
    email: "sarah@nexus.com",
  },
  {
    name: "Mike Peters",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "A full-stack wizard with expertise in modern frameworks, Mike architects robust and scalable web applications.",
    linkedin: "#",
    twitter: "#",
    email: "mike@nexus.com",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Emma crafts data-driven marketing strategies that help our clients reach and engage their target audiences effectively.",
    linkedin: "#",
    twitter: "#",
    email: "emma@nexus.com",
  },
  {
    name: "David Kim",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "David creates intuitive and beautiful interfaces that delight users and drive conversions for our clients.",
    linkedin: "#",
    twitter: "#",
    email: "david@nexus.com",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Industry Awards" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("about.hero.title.before")} <span className="text-gradient">{t("about.hero.title.highlight")}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of designers, developers, and strategists dedicated to crafting exceptional
              digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2016, Nexus started with a simple mission: to help businesses succeed in the digital world
                  through beautiful, functional websites that drive real results.
                </p>
                <p>
                  What began as a small team of three has grown into a full-service digital agency, serving clients
                  across industries from startups to established enterprises.
                </p>
                <p>
                  We believe that great design is more than aesthetics—it's about solving problems, creating
                  connections, and delivering experiences that matter. Every project we take on is an opportunity to
                  push boundaries and exceed expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-muted-foreground">What sets us apart from the competition.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Quality",
                description: "We never compromise on quality. Every pixel, every line of code matters.",
              },
              {
                title: "Partnership",
                description: "We see ourselves as an extension of your team, invested in your success.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl text-center"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground">The talented people behind Nexus who make the magic happen.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground line-clamp-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
