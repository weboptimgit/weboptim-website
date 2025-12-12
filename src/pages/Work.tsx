import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import SEO from "@/components/SEO";

const projects = [
  {
    title: "Flavor Bistro",
    subtitle: "WordPress Website & Brand Identity",
    category: "Restaurant",
    client: "Flavor Bistro Group",
    duration: "6 Weeks",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    slug: "flavor-bistro-wordpress",
    tags: ["WordPress", "Branding", "SEO"],
    results: ["+150% Bookings", "+280% Traffic"],
  },
  {
    title: "TechFlow SaaS",
    subtitle: "Marketing Website & Lead Generation",
    category: "SaaS",
    client: "TechFlow Inc.",
    duration: "8 Weeks",
    year: "2024",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    slug: "techflow-saas",
    tags: ["React", "UI/UX", "Conversion"],
    results: ["+320% Leads", "12% Conversion"],
  },
  {
    title: "Urban Fitness",
    subtitle: "Membership Platform & Mobile App",
    category: "Fitness",
    client: "Urban Fitness Chain",
    duration: "10 Weeks",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    slug: null,
    tags: ["Web App", "Mobile", "Payments"],
    results: ["+200% Signups", "4.8★ Rating"],
  },
  {
    title: "Artisan Coffee Co.",
    subtitle: "E-commerce & Subscription Service",
    category: "E-commerce",
    client: "Artisan Coffee Co.",
    duration: "8 Weeks",
    year: "2024",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    slug: null,
    tags: ["Shopify", "Subscriptions", "Branding"],
    results: ["+180% Sales", "3x AOV"],
  },
  {
    title: "Legal Partners LLP",
    subtitle: "Corporate Website & Client Portal",
    category: "Legal",
    client: "Legal Partners LLP",
    duration: "6 Weeks",
    year: "2023",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    slug: null,
    tags: ["WordPress", "Portal", "Security"],
    results: ["+90% Inquiries", "-40% Bounce"],
  },
  {
    title: "GreenTech Solutions",
    subtitle: "Product Launch & Marketing Campaign",
    category: "Technology",
    client: "GreenTech Solutions",
    duration: "12 Weeks",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    slug: null,
    tags: ["React", "Marketing", "SEO"],
    results: ["$2M Raised", "50K Users"],
  },
];

const Work = () => {
  return (
    <>
      <SEO titleKey="work" />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />

        {/* Hero Section */}
        <section className="pt-52 pb-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Case <span className="text-gradient">Studies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our latest projects and see how we help businesses transform their digital presence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {project.slug ? (
                    <Link to={`/case-study/${project.slug}`} className="group block">
                      <ProjectCard project={project} />
                    </Link>
                  ) : (
                    <div className="group">
                      <ProjectCard project={project} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help transform your digital presence and achieve your business goals.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300"
                >
                  Get in Touch
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300">
    {/* Image */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full glass text-xs font-medium text-primary">{project.category}</span>
      </div>
      {project.slug && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{project.subtitle}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {project.year}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {project.duration}
        </div>
      </div>

      {/* Results */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
        {project.results.map((result, i) => (
          <span key={i} className="text-xs font-semibold text-gradient">
            {result}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Work;
