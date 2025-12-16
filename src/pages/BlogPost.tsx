import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, User, Share2, Tag, BookOpen, ChevronUp, ExternalLink, Home, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { getBlogPost, getCategorySlug, getAuthorSlug, getTranslatedCategorySlug, getCategoryNameFromSlug } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState, useRef, lazy, Suspense } from "react";
import SEO, { getArticleSchema, getBreadcrumbSchema } from "@/components/SEO";
import { domainConfig, staticPageSlugs } from "@/config/domains";
import {
  reviewsPlatformsRows,
  reviewsPlatformsTableMeta,
} from "@/data/blog-tables";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import ComparisonTable from "@/components/ComparisonTable";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3 | 4;
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const BlogPost = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const post = slug ? getBlogPost(slug, language) : null;
  
  // Check if slug is actually a category (since /blog/:slug now handles both)
  const isCategory = !post && slug ? getCategoryNameFromSlug(slug, language) !== null : false;
  const toc: TocItem[] = post
  ? post.content
      .filter(
        (p) =>
          p.startsWith("## ") ||
          p.startsWith("### ") ||
          p.startsWith("#### ")
      )
      .map((p) => {
        const level = p.startsWith("#### ")
          ? 4
          : p.startsWith("### ")
          ? 3
          : 2;

        const text = p.replace(/^#{2,4}\s/, "");
        return {
          id: slugify(text),
          text,
          level,
        };
      })
  : [];
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
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

  // Track active section for TOC highlighting
  useEffect(() => {
    if (toc.length === 0) return;

    const headingIds = toc.filter(item => item.level === 2).map(item => item.id);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

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

  // If this is a category slug, render BlogCategory instead
  if (isCategory) {
    // Dynamic import would be cleaner but for simplicity, redirect to category handling
    const BlogCategory = lazy(() => import("./BlogCategory"));
    return (
      <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
        <BlogCategory />
      </Suspense>
    );
  }

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
              {/* Breadcrumb */}
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/blog">{t("common.blog")}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/blog/${getTranslatedCategorySlug(getCategorySlug(post.category), language)}`}>
                        {post.category}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="max-w-[200px] truncate">{post.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <Link 
                  to={`/blog/${getTranslatedCategorySlug(getCategorySlug(post.category), language)}`}
                  className="inline-block px-4 py-1.5 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  {post.category}
                </Link>
              </motion.div>

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
                <Link 
                  to={`/${staticPageSlugs.blogAuthor[language]}/${getAuthorSlug(post.author)}`}
                  className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-medium">{post.author}</span>
                </Link>
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content - Left */}
            <div className="flex-1 max-w-3xl">
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
                className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-border/50"
              >
                <span className="text-sm text-muted-foreground mr-1">{t("blogPost.share.label")}</span>
                
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-all"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                
                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-foreground/10 hover:bg-foreground text-foreground hover:text-background flex items-center justify-center transition-all"
                  aria-label="Share on X"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white flex items-center justify-center transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                
                {/* Email */}
                <a
                  href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                  aria-label="Share via Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
                
                {/* Copy Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-border/50 hover:border-primary hover:text-primary h-9 px-4"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                      alert(language === 'CZ' ? 'Odkaz zkopírován!' : language === 'SK' ? 'Odkaz skopírovaný!' : 'Link copied!');
                    }).catch(() => {});
                  }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {t("blogPost.share.button")}
                </Button>
              </motion.div>

              {/* Mobile TOC */}
              {toc.length > 0 && (
                <motion.aside
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10 rounded-2xl overflow-hidden border border-border/30 bg-gradient-to-br from-muted/30 via-background to-muted/20 lg:hidden"
                >
                  <div className="px-5 py-3 border-b border-border/30 bg-muted/40">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      {t("blogPost.toc.title")}
                    </h3>
                  </div>
                  <nav className="p-4">
                    <ol className="space-y-1 text-sm">
                      {toc.filter(item => item.level === 2).map((item, index) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="group flex items-center gap-3 py-1.5 px-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                          >
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {index + 1}
                            </span>
                            <span className="line-clamp-1">{item.text}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </motion.aside>
              )}

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
                    const text = paragraph.replace("## ", "");
                    const id = slugify(text);
                  
                    out.push(
                      <motion.h2
                        id={id}
                        key={`h2-${i}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="scroll-mt-32 text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-hero before:rounded-full"
                      >
                        {text}
                      </motion.h2>
                    );
                    i++;
                    continue;
                  }
            
                  // H3
                  if (paragraph.startsWith("### ")) {
                    const text = paragraph.replace("### ", "");
                    const id = slugify(text);
                  
                    out.push(
                      <motion.h3
                        id={id}
                        key={`h3-${i}`}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="scroll-mt-32 text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground"
                      >
                        {text}
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
                  {t("blogPost.exploreMore")}
                </Button>
              </Link>
            </motion.div>
            </div>

            {/* Sticky TOC Sidebar - Right */}
            {toc.length > 0 && (
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="rounded-2xl overflow-hidden border border-border/30 bg-gradient-to-br from-muted/30 via-background to-muted/20"
                  >
                    <div className="px-5 py-3 border-b border-border/30 bg-muted/40">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        {t("blogPost.toc.title")}
                      </h3>
                    </div>
                    <nav className="p-4">
                      <ol className="space-y-1.5 text-sm">
                        {toc.filter(item => item.level === 2).map((item, index) => {
                          const isActive = activeSection === item.id;
                          return (
                            <li key={item.id}>
                              <a
                                href={`#${item.id}`}
                                className={`group flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 ${
                                  isActive 
                                    ? "bg-primary/10 text-primary border-l-2 border-primary" 
                                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                }`}
                              >
                                <span className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center transition-colors ${
                                  isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                                }`}>
                                  {index + 1}
                                </span>
                                <span className={`line-clamp-2 ${isActive ? "font-medium" : ""}`}>{item.text}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ol>
                    </nav>
                  </motion.div>
                </div>
              </aside>
            )}
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
