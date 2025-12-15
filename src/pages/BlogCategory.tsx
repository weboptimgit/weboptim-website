import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Home, ChevronRight, Folder, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostsByCategory, getCategoryNameFromSlug, getAllCategories } from "@/data/blog-posts";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogCategory = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  
  const categoryName = slug ? getCategoryNameFromSlug(slug, language) : null;
  const posts = slug ? getPostsByCategory(slug, language) : [];
  const allCategories = getAllCategories(language);

  if (!categoryName || posts.length === 0) {
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
                <Folder className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4">{t("blogCategory.notFound.title")}</h1>
              <p className="text-muted-foreground mb-8">{t("blogCategory.notFound.subtitle")}</p>
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
        title={`${categoryName} | ${t("blogCategory.seoTitle")}`}
        description={`${t("blogCategory.seoDescription")} ${categoryName}`}
      />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-52 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center">
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
                  <BreadcrumbPage>{categoryName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Folder className="w-4 h-4" />
                {t("blogCategory.badge")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {categoryName}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("blogCategory.subtitle").replace("{count}", posts.length.toString())}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="px-4 pb-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {allCategories.map((cat) => (
                <Link key={cat.slug} to={`/blog/category/${cat.slug}`}>
                  <Button
                    variant={cat.slug === slug ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {cat.name} ({cat.count})
                  </Button>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
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
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{post.author}</span>
                        <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                          {t("blogCategory.readMore")} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("blogPost.backToBlog")}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogCategory;