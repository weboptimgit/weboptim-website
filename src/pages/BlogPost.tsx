import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  "why-your-business-needs-modern-website-2024": {
    title: "Why Your Business Needs a Modern Website in 2024",
    excerpt:
      "Discover the key reasons why having an outdated website could be costing you customers and how a modern redesign can transform your online presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "Web Design",
    author: "Alex Johnson",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    content: [
      "In today's digital-first world, your website is often the first impression potential customers have of your business. A modern, well-designed website isn't just a nice-to-have—it's essential for survival in an increasingly competitive marketplace.",
      "## First Impressions Matter More Than Ever",
      "Studies show that users form an opinion about a website within 50 milliseconds. That's faster than the blink of an eye. If your website looks outdated, slow, or difficult to navigate, visitors will bounce before they even see what you have to offer.",
      "A modern website signals to visitors that your business is professional, trustworthy, and current with industry trends. It shows that you care about the user experience and, by extension, that you'll care about their experience as a customer.",
      "## Mobile-First Is No Longer Optional",
      "With over 60% of web traffic now coming from mobile devices, having a responsive, mobile-friendly website is crucial. Google's mobile-first indexing means that your mobile site is what determines your search rankings.",
      "If your website doesn't perform well on smartphones and tablets, you're not just losing mobile visitors—you're losing visibility in search results across all devices.",
      "## Speed Equals Revenue",
      "Page load speed directly impacts your bottom line. Research by Google shows that as page load time increases from 1 second to 3 seconds, the probability of bounce increases by 32%. At 5 seconds, that number jumps to 90%.",
      "Modern websites are built with performance in mind, utilizing techniques like lazy loading, optimized images, and efficient code to ensure lightning-fast load times.",
      "## Security and Trust",
      "With cyber threats on the rise, website security is more important than ever. Modern websites come with SSL certificates, secure hosting, and up-to-date security protocols that protect both your business and your customers.",
      "An outdated website running on old software is a prime target for hackers. Beyond the direct risks, visitors are increasingly aware of security indicators like HTTPS, and may leave your site if they don't see them.",
      "## The Bottom Line",
      "Investing in a modern website isn't an expense—it's an investment in your business's future. The cost of not updating your online presence is measured in lost customers, damaged reputation, and missed opportunities.",
      "Ready to transform your digital presence? Contact us today to discuss how we can help bring your website into 2024 and beyond.",
    ],
  },
  "ecommerce-trends-boost-sales": {
    title: "10 E-commerce Trends That Will Boost Your Sales",
    excerpt:
      "From AI-powered recommendations to seamless checkout experiences, learn about the latest trends shaping the future of online retail.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    category: "E-commerce",
    author: "Sarah Chen",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    content: [
      "The e-commerce landscape is constantly evolving, and staying ahead of the curve is essential for online retailers looking to maximize their sales. Here are the top 10 trends that are reshaping the industry in 2024.",
      "## 1. AI-Powered Personalization",
      "Artificial intelligence is revolutionizing how online stores interact with customers. From personalized product recommendations to dynamic pricing, AI helps create tailored shopping experiences that convert browsers into buyers.",
      "## 2. Social Commerce Integration",
      "Shopping directly through social media platforms is becoming increasingly popular. Instagram Shop, TikTok Shop, and Pinterest's shopping features are making it easier than ever for consumers to purchase products without leaving their favorite apps.",
      "## 3. Augmented Reality Try-On",
      "AR technology allows customers to virtually try on products before purchasing. Whether it's furniture in their living room or sunglasses on their face, AR reduces uncertainty and decreases return rates.",
      "## 4. Voice Commerce",
      "Smart speakers and voice assistants are changing how people shop. Optimizing your e-commerce store for voice search is becoming increasingly important as more consumers embrace hands-free shopping.",
      "## 5. Sustainable Shopping Options",
      "Consumers are increasingly conscious of their environmental impact. Offering eco-friendly products, sustainable packaging, and carbon-neutral shipping options can differentiate your brand and attract environmentally-minded shoppers.",
      "## 6. One-Click Checkout",
      "Reducing friction in the checkout process is crucial for conversion. One-click checkout options, saved payment methods, and streamlined forms help reduce cart abandonment and increase completed purchases.",
      "## 7. Subscription Models",
      "Subscription-based e-commerce continues to grow across all categories. From curated boxes to replenishment services, subscriptions provide predictable revenue and build long-term customer relationships.",
      "## 8. Live Shopping Events",
      "Live streaming commerce, popularized in Asia, is gaining traction globally. These interactive shopping experiences combine entertainment with instant purchasing opportunities.",
      "## 9. Headless Commerce Architecture",
      "Headless e-commerce separates the frontend presentation layer from the backend, enabling greater flexibility in delivering content across multiple channels and devices.",
      "## 10. Advanced Analytics and Insights",
      "Data-driven decision making is essential for e-commerce success. Advanced analytics tools provide deeper insights into customer behavior, helping retailers optimize everything from inventory to marketing spend.",
      "Implementing these trends can significantly boost your online sales and position your business for continued growth in the ever-evolving e-commerce landscape.",
    ],
  },
  "seo-strategies-small-business": {
    title: "SEO Strategies Every Small Business Should Know",
    excerpt:
      "Master the fundamentals of search engine optimization and learn how to outrank your competitors without breaking the bank.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=600&fit=crop",
    category: "Marketing",
    author: "Mike Peters",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    content: [
      "Search engine optimization doesn't have to be complicated or expensive. With the right strategies, small businesses can compete with larger competitors and capture valuable organic traffic.",
      "## Understanding the Basics",
      "SEO is the practice of optimizing your website to rank higher in search engine results pages (SERPs). Higher rankings mean more visibility, more traffic, and ultimately more customers.",
      "## Keyword Research: The Foundation",
      "Every successful SEO strategy starts with keyword research. Identify the terms and phrases your potential customers are searching for, and optimize your content around these keywords.",
      "Focus on long-tail keywords—longer, more specific phrases that are easier to rank for and often indicate higher purchase intent.",
      "## On-Page Optimization",
      "Ensure every page on your website is optimized for search engines. This includes using keywords in titles, headers, and meta descriptions, as well as ensuring your content is valuable and relevant to searchers.",
      "## Local SEO for Small Businesses",
      "If you serve a local market, local SEO is crucial. Claim and optimize your Google Business Profile, encourage customer reviews, and ensure your name, address, and phone number are consistent across all online directories.",
      "## Content Marketing",
      "Creating valuable, informative content helps establish your expertise and attracts organic links. Blog posts, guides, and how-to articles can drive significant traffic and improve your overall search rankings.",
      "## Technical SEO Fundamentals",
      "Ensure your website loads quickly, is mobile-friendly, and is easy for search engines to crawl and index. Fix broken links, create a clear site structure, and implement proper schema markup.",
      "## Building Quality Backlinks",
      "Links from other reputable websites signal to search engines that your site is trustworthy and authoritative. Focus on earning links through quality content, partnerships, and community involvement.",
      "## Measuring Success",
      "Use tools like Google Analytics and Google Search Console to track your SEO progress. Monitor rankings, organic traffic, and conversions to understand what's working and where to improve.",
      "With consistent effort and the right approach, SEO can be one of the most cost-effective marketing strategies for small businesses.",
    ],
  },
  "importance-mobile-first-design": {
    title: "The Importance of Mobile-First Design",
    excerpt:
      "With over 60% of web traffic coming from mobile devices, learn why designing for mobile first is no longer optional.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
    category: "Web Design",
    author: "Emma Wilson",
    date: "Nov 15, 2024",
    readTime: "4 min read",
    content: [
      "Mobile devices have fundamentally changed how people access the internet. If your website isn't designed with mobile users in mind, you're missing out on the majority of your potential audience.",
      "## What Is Mobile-First Design?",
      "Mobile-first design is an approach where you start by designing for the smallest screens first, then progressively enhance the experience for larger devices. This ensures that the mobile experience is never an afterthought.",
      "## The Mobile Traffic Reality",
      "Over 60% of global web traffic now comes from mobile devices. In some markets, that number is even higher. Ignoring mobile users means ignoring the majority of your potential customers.",
      "## Google's Mobile-First Indexing",
      "Google now primarily uses the mobile version of your website for indexing and ranking. If your mobile site is inferior to your desktop site, your search rankings will suffer across all devices.",
      "## Better User Experience",
      "Mobile-first design forces you to focus on what's truly important. With limited screen real estate, you must prioritize content and functionality, resulting in a cleaner, more focused experience for all users.",
      "## Faster Load Times",
      "Designing for mobile means optimizing for slower connections and less powerful devices. This focus on performance benefits all users, as the fastest-loading websites are often those built with mobile in mind.",
      "## Key Mobile-First Principles",
      "Touch-friendly interfaces, readable text without zooming, fast load times, and simplified navigation are all essential components of effective mobile-first design.",
      "## Responsive vs. Mobile-First",
      "While responsive design adapts a desktop site to mobile, mobile-first starts with mobile and expands to desktop. The mobile-first approach typically results in better mobile experiences and cleaner code.",
      "Embracing mobile-first design isn't just about keeping up with trends—it's about meeting your users where they are and providing them with the best possible experience.",
    ],
  },
  "wordpress-vs-custom-development": {
    title: "WordPress vs Custom Development: Which Is Right for You?",
    excerpt:
      "A comprehensive comparison to help you choose the best approach for your next web project based on your needs and budget.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    category: "Development",
    author: "Alex Johnson",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    content: [
      "Choosing between WordPress and custom development is one of the most important decisions you'll make for your web project. Both approaches have their merits, and the right choice depends on your specific needs, budget, and goals.",
      "## Understanding WordPress",
      "WordPress powers over 40% of all websites on the internet. It's a flexible content management system that can be customized through themes and plugins to suit a wide range of needs.",
      "## Benefits of WordPress",
      "WordPress offers a lower initial cost, faster time to launch, and a user-friendly interface for content management. With thousands of plugins available, you can add functionality without custom coding.",
      "## Limitations of WordPress",
      "Performance can be a concern with heavy plugin use. Security requires constant attention with regular updates. And while WordPress is flexible, truly unique functionality may require custom plugin development.",
      "## Understanding Custom Development",
      "Custom development means building your website from scratch, tailored precisely to your requirements. This approach offers maximum flexibility and control over every aspect of your site.",
      "## Benefits of Custom Development",
      "Custom sites can be optimized for peak performance. You have complete control over security implementations. And you can build exactly the features you need without the bloat of unnecessary functionality.",
      "## Limitations of Custom Development",
      "Higher initial costs, longer development timelines, and the need for technical expertise for ongoing maintenance are all considerations with custom development.",
      "## Making the Decision",
      "Choose WordPress if you need a content-focused site with standard functionality and want to minimize initial investment. Choose custom development if you need unique features, maximum performance, or plan to scale significantly.",
      "## The Hybrid Approach",
      "Many businesses find success with a hybrid approach—using WordPress for content management while incorporating custom-developed components for unique functionality.",
      "Ultimately, the best choice depends on your specific situation. Consider your budget, timeline, technical resources, and long-term goals when making this important decision.",
    ],
  },
  "building-brand-identity-online": {
    title: "Building a Strong Brand Identity Online",
    excerpt:
      "Learn how to create a cohesive brand presence across all digital touchpoints that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
    category: "Branding",
    author: "Sarah Chen",
    date: "Nov 5, 2024",
    readTime: "5 min read",
    content: [
      "Your brand identity is more than just a logo—it's the complete experience customers have with your business. In the digital age, building a strong, consistent brand identity across all online channels is essential for success.",
      "## What Is Brand Identity?",
      "Brand identity encompasses your visual elements (logo, colors, typography), your voice and messaging, and the overall experience you deliver. It's how your business presents itself to the world.",
      "## Why Online Brand Identity Matters",
      "With countless businesses competing for attention online, a strong brand identity helps you stand out. It builds recognition, establishes trust, and creates emotional connections with your audience.",
      "## Defining Your Brand Foundation",
      "Start by clearly defining your mission, values, and target audience. Understanding who you are and who you're trying to reach is the foundation of all branding decisions.",
      "## Visual Consistency",
      "Your logo, color palette, typography, and imagery should be consistent across your website, social media, email marketing, and all other digital touchpoints. This consistency builds recognition and trust.",
      "## Finding Your Voice",
      "Your brand voice is how you communicate with your audience. Whether professional, friendly, playful, or authoritative, your voice should be consistent and authentic to your brand values.",
      "## Creating Brand Guidelines",
      "Document your brand elements and how they should be used. Brand guidelines ensure consistency as your team grows and help maintain brand integrity across all channels.",
      "## Social Media Branding",
      "Your social media profiles should be instantly recognizable as part of your brand. Use consistent imagery, maintain your brand voice, and ensure your visual elements align with your overall identity.",
      "## Website as Brand Hub",
      "Your website is often the central hub of your online presence. It should be the clearest expression of your brand identity, setting the standard for all other digital touchpoints.",
      "A strong online brand identity doesn't happen by accident. It requires intentional effort and consistent execution, but the payoff in customer recognition and loyalty is well worth the investment.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="relative -mt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12"
          >
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>

            {/* Category */}
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss how we can help transform your digital presence.
              </p>
              <Link to="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
