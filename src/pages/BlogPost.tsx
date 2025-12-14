import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Share2, Tag, BookOpen, ChevronUp, ExternalLink  } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { getBlogPost } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef } from "react";
import SEO, { getArticleSchema, getBreadcrumbSchema } from "@/components/SEO";
import { domainConfig } from "@/config/domains";
import {
  reviewsPlatformsRows,
  reviewsPlatformsTableMeta,
} from "@/data/blog-tables";

import ComparisonTable from "@/components/ComparisonTable";

const BlogPost = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
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

  // Generate JSON-LD for blog post
  const getJsonLd = () => {
    if (!post) return undefined;
    
    const articleSchema = getArticleSchema({
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      author: post.author,
      date: post.date,
      tags: post.tags,
      slug: post.slug,
    }, language);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: t("common.home"), url: domainConfig[language] },
    { name: t("common.blog"), url: `${domainConfig[language]}/blog` },
    { name: post.title, url: `${domainConfig[language]}/blog/${post.slug}` },
  ]);

    return [articleSchema, breadcrumbSchema];
  };

  if (!post) {
    return (
      <>
        <SEO titleKey="notFound" noindex />
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
            <h1 className="text-4xl font-bold mb-4">{t("blogPost.notFound.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("blogPost.notFound.subtitle")}</p>
            <Link to="/blog">
              <Button className="bg-gradient-hero hover:opacity-90">
                {t("blogPost.notFound.backToBlog")}
              </Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} | WebOptim Blog`}
        description={post.excerpt}
        image={post.image}
        article
        jsonLd={getJsonLd()}
      />
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
                {t("blogPost.backToBlog")}
              </Link>

              {/* Category Badge */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 mx-4 py-1.5 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold mb-4"
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
                className="flex flex-wrap items-center gap-2 text-foreground/70"
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
              <span className="text-sm text-muted-foreground">{t("blogPost.share.label")}</span>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-border/50 hover:border-primary hover:text-primary"
                onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
              >
                <Share2 className="w-4 h-4 mr-2" />
                {t("blogPost.share.button")}
              </Button>
            </motion.div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {(() => {
                const arr = post.content;
                const out: React.ReactNode[] = [];
                let i = 0;
            
                const isNumbered = (s: string) => /^\d+\.\s/.test(s);
                const isBullet = (s: string) => s.startsWith("- ");
                const isEmpty = (s: string) => !s || s.trim() === "";
            
                while (i < arr.length) {
                  const paragraph = arr[i];
            
                  // skip empty
                  if (isEmpty(paragraph)) {
                    i++;
                    continue;
                  }

                  // TABLE: Reviews platforms
                  if (paragraph === "!!TABLE_REVIEWS_PLATFORMS!!") {
                    out.push(
                      <motion.div
                        key={`table-reviews-${i}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-10"
                      >
                        <ComparisonTable
                          title={reviewsPlatformsTableMeta.title[language]}
                          headers={reviewsPlatformsTableMeta.headers[language]}
                          rows={reviewsPlatformsRows[language]}
                        />
                      </motion.div>
                    );
                  
                    i++;
                    continue;
                  }
                  
                  // code block
                  if (paragraph.startsWith("```")) {
                    const lines = paragraph.split("\n");
                    const firstLine = lines[0].replace("```", "").trim();
                    const hasLanguage =
                      firstLine.length > 0 && !firstLine.includes("<") && !firstLine.includes("{");
                    const language = hasLanguage ? firstLine : "code";
            
                    const codeLines = hasLanguage ? lines.slice(1) : lines;
                    const code = codeLines.join("\n").replace(/```\s*$/, "").trim();
            
                    out.push(
                      <motion.div
                        key={`code-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <CodeBlock code={code} language={language} />
                      </motion.div>
                    );
            
                    i++;
                    continue;
                  }

                  const renderBold = (text: string) => {
                      const parts = text.split(/(\*\*[^*]+\*\*)/g);
                  
                    return parts.map((part, i) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={i} className="font-semibold text-foreground">
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      return <span key={i}>{part}</span>;
                    });
                  };
              
                  // image ![alt](url)
                  if (paragraph.startsWith("![")) {
                    const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                    if (match) {
                      const [, alt, src] = match;
            
                      out.push(
                        <motion.figure
                          key={`img-${i}`}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="my-10"
                        >
                          <div className="overflow-hidden rounded-2xl border border-border/50 shadow-xl">
                            <img src={src} alt={alt} loading="lazy" className="w-full h-auto object-cover" />
                          </div>
            
                          {alt ? (
                            <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                              {alt}
                            </figcaption>
                          ) : null}
                        </motion.figure>
                      );
                    }
            
                    i++;
                    continue;
                  }
            
                  // H2
                  if (paragraph.startsWith("## ")) {
                    out.push(
                      <motion.h2
                        key={`h2-${i}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-hero before:rounded-full"
                      >
                        {paragraph.replace("## ", "")}
                      </motion.h2>
                    );
                    i++;
                    continue;
                  }
            
                  // H3
                  if (paragraph.startsWith("### ")) {
                    out.push(
                      <motion.h3
                        key={`h3-${i}`}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground relative pl-6 before:absolute before:left-0 before:top-2 before:w-1 before:h-4 before:bg-primary/60 before:rounded-full"
                      >
                        {paragraph.replace("### ", "")}
                      </motion.h3>
                    );
                    i++;
                    continue;
                  }
            
                  // ORDERED list with nested bullets
                  if (isNumbered(paragraph)) {
                    const items: { title: string; bullets: string[] }[] = [];
            
                    while (i < arr.length && isNumbered(arr[i])) {
                      const title = arr[i].replace(/^\d+\.\s/, "").trim();
                      i++;
            
                      const bullets: string[] = [];
                      while (i < arr.length && isBullet(arr[i])) {
                        bullets.push(arr[i].replace("- ", "").trim());
                        i++;
                      }
            
                      items.push({ title, bullets });
            
                      while (i < arr.length && isEmpty(arr[i])) i++; // optional spacing
                    }
            
                    out.push(
                      <motion.ol
                        key={`ol-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 space-y-6"
                      >
                        {items.map((it, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: itemIndex * 0.08 }}
                            className="text-muted-foreground leading-relaxed"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-1 w-6 h-6 rounded-full bg-gradient-hero text-xs flex items-center justify-center text-white font-semibold flex-shrink-0">
                                {itemIndex + 1}
                              </span>
                              <span className="font-semibold">
                                {renderBold(it.title)}
                              </span>
                            </div>
            
                            {it.bullets.length ? (
                              <ul className="mt-3 ml-9 space-y-2">
                                {it.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-3">
                                    <span className="mt-2 w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </motion.li>
                        ))}
                      </motion.ol>
                    );
            
                    continue; // i už je posunuté, nepokračuj ďalšími handler-mi
                  }
            
                  // STANDALONE bullet list (not after numbered item)
                  if (isBullet(paragraph)) {
                    const bullets: string[] = [];
                    while (i < arr.length && isBullet(arr[i])) {
                      bullets.push(arr[i].replace("- ", "").trim());
                      i++;
                    }
            
                    out.push(
                      <motion.ul
                        key={`ul-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 space-y-3"
                      >
                        {bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                            <span>{renderBold(b)}</span>
                          </li>
                        ))}
                      </motion.ul>
                    );
            
                    continue;
                  }
            
                  // paragraph
                  out.push(
                    <motion.p
                      key={`p-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="text-muted-foreground mb-6 leading-relaxed text-lg"
                    >
                      {renderBold(paragraph)}
                    </motion.p>
                  );
            
                  i++;
                }
            
                return out;
              })()}
            </div>
            
            {/* Resources */}
            {post.resources?.length ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4">
                  {t("blogPost.resources.title")}
                </h2>
                <div className="space-y-3">
                  {post.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 glass rounded-xl hover:border-primary/40 transition-all group"
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ) : null}

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
                  <p className="text-xs uppercase tracking-wider text-primary mb-1">
                    {t("blogPost.author.writtenBy")}
                  </p>
                  <p className="text-xl font-bold text-foreground mb-2">{post.author}</p>
                  <p className="text-muted-foreground">
                    {t("blogPost.author.bio")}
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
    </>
  );
};

export default BlogPost;
