import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    slug: "why-your-business-needs-modern-website-2024",
    title: "Why Your Business Needs a Modern Website in 2024",
    excerpt:
      "Discover the key reasons why having an outdated website could be costing you customers and how a modern redesign can transform your online presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Web Design",
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
    author: "Sarah Chen",
    date: "Nov 5, 2024",
    readTime: "5 min read",
  },
];

const Blog = () => {
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
              Insights, tips, and trends from the world of web development and
              digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
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
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
