import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { caseStudiesData } from "@/data/case-studies";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudiesData[slug] : null;

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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass rounded-3xl p-8 md:p-12 relative">
              <div className="text-6xl text-primary/20 font-serif absolute top-6 left-8">"</div>
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 relative z-10">
                {study.testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={study.testimonial.avatar}
                  alt={study.testimonial.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-display font-bold text-foreground">{study.testimonial.author}</div>
                  <div className="text-muted-foreground">{study.testimonial.role}</div>
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
            className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch to discuss how we can help transform your digital presence.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get in Touch
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
