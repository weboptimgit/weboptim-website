import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-cyan/20 to-purple/20",
  },
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "from-purple/20 to-cyan/20",
  },
  {
    title: "Health & Fitness App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    color: "from-cyan/30 to-background",
  },
  {
    title: "Brand Identity",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    color: "from-purple/30 to-background",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Featured <span className="text-gradient">projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0 text-lg">
            A selection of our recent work showcasing our expertise in design and development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-medium">View Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;