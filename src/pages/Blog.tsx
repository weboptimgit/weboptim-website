import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Web Design", "E-commerce", "Marketing", "Development", "Branding"];

const blogPosts = [
  {
    slug: "why-structured-data-is-essential-for-your-seo",
    title: "Why Structured Data Is Essential for Your SEO",
    excerpt:
      "Structured data isn’t just a “nice to have” - it’s metadata that tells search engines (and other services) exactly what’s on your page.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "Web Design",
    tags: ["UX Design", "Business", "Trends"],
    author: "Peter Gáborík",
    date: "Dec 12, 2025",
    readTime: "5 min read",
  },
  {
    slug: "why-your-business-needs-modern-website-2024",
    title: "Why Your Business Needs a Modern Website in 2024",
    excerpt:
      "Discover the key reasons why having an outdated website could be costing you customers and how a modern redesign can transform your online presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Web Design",
    tags: ["UX Design", "Business", "Trends"],
    author: "Alex Johnson",
    date: "Dec 5, 2024",
    readTime: "5 min read",
  },
  {
    slug: "ecommerce-trends-boost-sales",
    title: "10 E-commerce Trends That Will Boost Your Sales",
    excerpt:
      "From AI-powered recommendations to seamless checkout experiences, learn about the latest trends shaping the future of online retail.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "E-commerce",
    tags: ["Online Store", "Sales", "AI"],
    author: "Sarah Chen",
    date: "Nov 28, 2024",
    readTime: "7 min read",
  },
  {
    slug: "seo-strategies-small-business",
    title: "SEO Strategies Every Small Business Should Know",
    excerpt:
      "Master the fundamentals of search engine optimization and learn how to outrank your competitors without breaking the bank.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop",
    category: "Marketing",
    tags: ["SEO", "Small Business", "Google"],
    author: "Mike Peters",
    date: "Nov 20, 2024",
    readTime: "6 min read",
  },
  {
    slug: "importance-mobile-first-design",
    title: "The Importance of Mobile-First Design",
    excerpt:
      "With over 60% of web traffic coming from mobile devices, learn why designing for mobile first is no longer optional.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    category: "Web Design",
    tags: ["Mobile", "Responsive", "UX Design"],
    author: "Emma Wilson",
    date: "Nov 15, 2024",
    readTime: "4 min read",
  },
  {
    slug: "wordpress-vs-custom-development",
    title: "WordPress vs Custom Development: Which Is Right for You?",
    excerpt:
      "A comprehensive comparison to help you choose the best approach for your next web project based on your needs and budget.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
    category: "Development",
    tags: ["WordPress", "Coding", "CMS"],
    author: "Alex Johnson",
    date: "Nov 10, 2024",
    readTime: "8 min read",
  },
  {
    slug: "building-brand-identity-online",
    title: "Building a Strong Brand Identity Online",
    excerpt:
      "Learn how to create a cohesive brand presence across all digital touchpoints that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
    category: "Branding",
    tags: ["Identity", "Strategy", "Visual Design"],
    author: "Sarah Chen",
    date: "Nov 5, 2024",
    readTime: "5 min read",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  // Filter posts by category and tag
  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = activeCategory === "All" || post.category === activeCategory;
    const tagMatch = !activeTag || post.tags.includes(activeTag);
    return categoryMatch && tagMatch;
  });

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveTag(null); // Reset tag when changing category
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

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
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, tips, and trends from the world of web development and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 pb-8">
        <div className="container mx-auto">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryClick(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <span className="flex items-center gap-1 text-sm text-muted-foreground mr-2">
              <Tag className="w-4 h-4" /> Tags:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
                  activeTag === tag
                    ? "bg-secondary text-secondary-foreground border-secondary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                key="no-posts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground text-lg">No posts found for the selected filters.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveTag(null);
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${activeTag}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{post.author}</span>
                          <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                            Read more <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
