import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Share2, Tag, BookOpen, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { getBlogPost } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const post = slug ? getBlogPost(slug, language) : null;
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setReadingProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button className="bg-gradient-hero hover:opacity-90">Back to Blog</Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-hero z-50 origin-left"
        style={{ scaleX: readingProgress / 100 }}
      />

      <Navbar />

      {/* Hero Section with Parallax */}
      <div className="relative h-[50vh] min-h-[500px] overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div className="absolute inset-0" style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-primary/20 blur-3xl"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 left-[10%] w-48 h-48 rounded-full bg-secondary/20 blur-3xl"
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Back Button */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              {/* Category Badge */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold mb-4"
              >
                {post.category}
              </motion.span>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-foreground/70"
              >
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article ref={articleRef} className="py-16 relative">
        {/* Side Decorations */}
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden lg:block" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden lg:block" />

        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-sm border border-border/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12 pb-8 border-b border-border/50"
            >
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-border/50 hover:border-primary hover:text-primary"
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </motion.div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.map((paragraph, index, arr) => {
                // Handle code blocks - format: ```language\ncode\n``` or ```\ncode\n```
                if (paragraph.startsWith("```")) {
                  const lines = paragraph.split("\n");
                  const firstLine = lines[0].replace("```", "").trim();
                  const hasLanguage = firstLine.length > 0 && !firstLine.includes("<") && !firstLine.includes("{");
                  const language = hasLanguage ? firstLine : "code";

                  // Extract code (remove first and last lines with ```)
                  const codeLines = hasLanguage ? lines.slice(1) : lines;
                  const code = codeLines
                    .join("\n")
                    .replace(/```\s*$/, "")
                    .trim();

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <CodeBlock code={code} language={language} />
                    </motion.div>
                  );
                }

                // Handle headings
                if (paragraph.startsWith("## ")) {
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-hero before:rounded-full"
                    >
                      {paragraph.replace("## ", "")}
                    </motion.h2>
                  );
                }

                // Handle H3 headings
                if (paragraph.startsWith("### ")) {
                  return (
                    <motion.h3
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground relative pl-6 before:absolute before:left-0 before:top-2 before:w-1 before:h-4 before:bg-primary/60 before:rounded-full"
                    >
                      {paragraph.replace("### ", "")}
                    </motion.h3>
                  );
                }

                // Handle list items
                if (paragraph.startsWith("- ")) {
                  const isFirstInList = index === 0 || !arr[index - 1].startsWith("- ");

                  if (isFirstInList) {
                    const listItems: string[] = [];
                    let i = index;
                    while (i < arr.length && arr[i].startsWith("- ")) {
                      listItems.push(arr[i].replace("- ", ""));
                      i++;
                    }
                    return (
                      <motion.ul
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 space-y-3"
                      >
                        {listItems.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    );
                  }
                  return null;
                }

                // Handle numbered list items (e.g. "1. Something")
                if (/^\d+\.\s/.test(paragraph)) {
                  const isFirstInList = index === 0 || !/^\d+\.\s/.test(arr[index - 1]);

                  if (isFirstInList) {
                    const listItems: string[] = [];
                    let i = index;

                    while (i < arr.length && /^\d+\.\s/.test(arr[i])) {
                      listItems.push(arr[i].replace(/^\d+\.\s/, ""));
                      i++;
                    }

                    return (
                      <motion.ol
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 space-y-3"
                      >
                        {listItems.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                          >
                            {/* Číslovanie so štýlom ako bullet gradient */}
                            <span className="mt-1 w-6 h-6 rounded-full bg-gradient-hero text-xs flex items-center justify-center text-white font-semibold flex-shrink-0">
                              {itemIndex + 1}
                            </span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </motion.ol>
                    );
                  }

                  return null;
                }

                // Skip empty lines
                if (paragraph.trim() === "") {
                  return null;
                }

                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-muted-foreground mb-6 leading-relaxed text-lg"
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
            </div>

            {/* Author Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 rounded-2xl glass border border-border/50 relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-hero p-[2px] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs uppercase tracking-wider text-primary mb-1">Written by</p>
                  <p className="text-xl font-bold text-foreground mb-2">{post.author}</p>
                  <p className="text-muted-foreground">
                    Content Writer & Digital Marketing Specialist with expertise in web development trends and SEO
                    strategies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Related Articles CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link to="/blog">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity rounded-full px-8">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore More Articles
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-hero text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center z-40 hover:shadow-primary/50 transition-shadow"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      <Footer />
    </div>
  );
};

export default BlogPost;
