import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Mobilno",
    category: "Marketplace",
    description:
      "Service marketplace connecting customers with mobile professionals through a demand-to-offer platform.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    tags: ["Marketplace", "WordPress", "SEO"],
    color: "from-primary/40 via-primary/20 to-transparent",
    stats: { increase: "+180%", metric: "Organic Visibility" },
    slug: "mobilno-marketplace" as string | null,
  },
  {
    title: "Fintech Dashboard",
    category: "Web App",
    description: "A comprehensive financial management platform with real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["UI/UX", "SEO"],
    color: "from-primary/40 via-primary/20 to-transparent",
    stats: { increase: "+180%", metric: "Engagement" },
    slug: null as string | null,
  },
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    description: "High-converting WooCommerce store with seamless checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["WooCommerce", "PPC"],
    color: "from-secondary/40 via-secondary/20 to-transparent",
    stats: { increase: "+250%", metric: "Sales" },
    slug: null as string | null,
  },
  {
    title: "Health & Fitness App",
    category: "Mobile App",
    description: "Cross-platform fitness app with personalized workout plans.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["App Dev", "Branding"],
    color: "from-primary/40 via-primary/20 to-transparent",
    stats: { increase: "50K+", metric: "Users" },
    slug: null as string | null,
  },
  {
    title: "TechFlow SaaS",
    category: "SaaS",
    description: "Complete brand identity and marketing website for B2B startup.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["SEO", "Lead Gen"],
    color: "from-secondary/40 via-secondary/20 to-transparent",
    stats: { increase: "+320%", metric: "Traffic" },
    slug: "techflow-saas" as string | null,
  },
  {
    title: "Real Estate Portal",
    category: "Web Platform",
    description: "Property listing platform with advanced search and filters.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Web Dev", "Google Ads"],
    color: "from-primary/40 via-primary/20 to-transparent",
    stats: { increase: "+400%", metric: "Leads" },
    slug: null as string | null,
  },
  {
    title: "Flavor Bistro",
    category: "Restaurant",
    description: "WordPress website with online reservations and local SEO.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["WordPress", "SEO"],
    color: "from-secondary/40 via-secondary/20 to-transparent",
    stats: { increase: "+150%", metric: "Bookings" },
    slug: "flavor-bistro-wordpress" as string | null,
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.slug ? `/case-study/${project.slug}` : "#"}
              className={project.slug ? "" : "pointer-events-none"}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass rounded-3xl overflow-hidden cursor-pointer hover:border-primary/40 transition-all duration-500 h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 glass rounded-xl px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="text-lg font-display font-bold text-primary">{project.stats.increase}</div>
                    <div className="text-xs text-muted-foreground">{project.stats.metric}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 -mt-16 relative z-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Category & Title */}
                  <span className="text-secondary text-sm font-medium mb-2 block uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border border-primary/30 rounded-3xl" />
                  <div className="absolute -inset-1 bg-primary/5 rounded-3xl blur-xl" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <Button variant="glow" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
