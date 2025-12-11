import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Users, TrendingUp, CheckCircle, Globe, Code, Palette, Megaphone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const caseStudies = {
  "flavor-bistro-wordpress": {
    title: "Flavor Bistro",
    subtitle: "WordPress Website & Brand Identity",
    category: "Restaurant",
    client: "Flavor Bistro Group",
    duration: "6 Weeks",
    year: "2024",
    team: "4 Specialists",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
    overview: "Flavor Bistro, a growing restaurant chain, needed a complete digital transformation to attract more customers and streamline their online presence. We delivered a stunning WordPress website with online reservations, menu management, and local SEO optimization.",
    challenge: "The client was struggling with an outdated website that didn't reflect their brand quality. They were losing potential customers to competitors with better online presence and had no way to manage reservations or update their menu easily.",
    solution: "We built a custom WordPress theme with a focus on visual storytelling, integrating a seamless reservation system, dynamic menu management, and location-based SEO. The design emphasized mouth-watering food photography and the restaurant's warm ambiance.",
    services: [
      { icon: Code, label: "WordPress Development" },
      { icon: Palette, label: "Brand Identity" },
      { icon: Globe, label: "SEO Optimization" },
      { icon: Megaphone, label: "Local Marketing" },
    ],
    results: [
      { metric: "+150%", label: "Online Bookings", description: "Increase in reservations through the website" },
      { metric: "+280%", label: "Organic Traffic", description: "Growth in search engine visibility" },
      { metric: "4.9★", label: "Customer Rating", description: "Average review score post-launch" },
      { metric: "-60%", label: "Bounce Rate", description: "Reduction in visitors leaving immediately" },
    ],
    testimonial: {
      quote: "The new website has completely transformed our business. We're getting more reservations than ever, and our customers love how easy it is to browse our menu and book a table.",
      author: "Marco Rossi",
      role: "Owner, Flavor Bistro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    ],
    features: [
      "Custom WordPress theme with restaurant-focused design",
      "Online reservation system with real-time availability",
      "Dynamic menu management with allergen information",
      "Multi-location support with individual pages",
      "Google My Business integration",
      "Mobile-first responsive design",
      "Speed optimization for fast loading",
      "Schema markup for rich search results",
    ],
  },
  "techflow-saas": {
    title: "TechFlow SaaS",
    subtitle: "Marketing Website & Lead Generation",
    category: "SaaS",
    client: "TechFlow Inc.",
    duration: "8 Weeks",
    year: "2024",
    team: "5 Specialists",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    overview: "TechFlow, a B2B SaaS startup, needed a high-converting marketing website to launch their product. We created a modern, conversion-focused website with integrated lead capture and analytics.",
    challenge: "As a new entrant in a competitive market, TechFlow needed to establish credibility quickly while generating qualified leads. Their existing landing page had poor conversion rates and didn't effectively communicate their value proposition.",
    solution: "We designed a comprehensive marketing website with clear messaging, social proof elements, and strategically placed CTAs. The site includes interactive product demos, a resource center, and sophisticated lead nurturing workflows.",
    services: [
      { icon: Code, label: "Web Development" },
      { icon: Palette, label: "UI/UX Design" },
      { icon: Globe, label: "SEO Strategy" },
      { icon: Megaphone, label: "Conversion Optimization" },
    ],
    results: [
      { metric: "+320%", label: "Lead Generation", description: "Increase in qualified leads per month" },
      { metric: "+450%", label: "Organic Traffic", description: "Growth in search visibility" },
      { metric: "12%", label: "Conversion Rate", description: "Visitor to lead conversion" },
      { metric: "2.5x", label: "Demo Requests", description: "Increase in product demo bookings" },
    ],
    testimonial: {
      quote: "The team delivered exactly what we needed - a website that not only looks amazing but actually converts. Our lead generation has skyrocketed since launch.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
    ],
    features: [
      "Custom React-based marketing website",
      "Interactive product tour and demos",
      "Integrated CRM and lead tracking",
      "A/B testing framework",
      "Blog with SEO optimization",
      "Customer success stories section",
      "Pricing calculator tool",
      "Multi-language support",
    ],
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Case Study Not Found</h1>
          <Link to="/#work">
            <Button variant="glow">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AmbientBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/#work">Projects</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{study.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <Link to="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {study.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                {study.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {study.subtitle}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass rounded-xl p-4">
                  <Users className="w-5 h-5 text-primary mb-2" />
                  <div className="text-sm text-muted-foreground">Client</div>
                  <div className="font-medium text-foreground">{study.client}</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <Clock className="w-5 h-5 text-primary mb-2" />
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-medium text-foreground">{study.duration}</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <Calendar className="w-5 h-5 text-primary mb-2" />
                  <div className="text-sm text-muted-foreground">Year</div>
                  <div className="font-medium text-foreground">{study.year}</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <TrendingUp className="w-5 h-5 text-primary mb-2" />
                  <div className="text-sm text-muted-foreground">Team</div>
                  <div className="font-medium text-foreground">{study.team}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden glass p-2">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent rounded-2xl" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-display font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {study.overview}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-display font-bold mb-4 text-primary">The Challenge</h3>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-display font-bold mb-4 text-secondary">Our Solution</h3>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-display font-bold mb-6">Services Provided</h3>
              <div className="space-y-4">
                {study.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 glass rounded-xl p-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{service.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The <span className="text-gradient">Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable impact that drove real business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {result.metric}
                </div>
                <div className="text-lg font-medium text-foreground mb-2">{result.label}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Key Features Delivered</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {study.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-4 glass rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Project Gallery</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {study.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden p-2 group"
              >
                <img
                  src={image}
                  alt={`${study.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-5xl text-primary/30 mb-6">"</div>
              <p className="text-xl md:text-2xl text-foreground font-display mb-8 leading-relaxed">
                {study.testimonial.quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={study.testimonial.avatar}
                  alt={study.testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-display font-bold text-foreground">{study.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center glass rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Project</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can help transform your digital presence and achieve similar results for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="glow" size="xl" className="group">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/#work">
                <Button variant="outline" size="xl">
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
