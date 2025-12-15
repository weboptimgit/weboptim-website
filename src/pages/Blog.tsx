import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostsList, getCategories, getCategorySlug, getAuthorSlug } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";

const Blog = () => {
  const { language } = useLanguage();
  const blogPosts = getBlogPostsList(language);
  const categories = getCategories(language);

  // Get "All" in current language for comparison
  const allCategory = categories[0];

  const [activeCategory, setActiveCategory] = useState(allCategory);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  // Filter posts by category and tag
  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = activeCategory === allCategory || post.category === activeCategory;
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
    <>
      <SEO titleKey="blog" />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-52 pb-16 px-4 relative overflow-hidden">
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
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="block glass rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Link 
                              to={`/blog/category/${getCategorySlug(post.category)}`}
                              className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full hover:bg-primary transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {post.category}
                            </Link>
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
                            <Link 
                              to={`/blog/author/${getAuthorSlug(post.author)}`}
                              className="text-sm font-medium hover:text-primary transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {post.author}
                            </Link>
                            <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                              Read more <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
