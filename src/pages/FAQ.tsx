import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What services does Nexus offer?",
        a: "We offer comprehensive digital solutions including web development, UI/UX design, mobile app development, e-commerce solutions, performance optimization, and security services. Our team specializes in creating custom, scalable solutions tailored to your business needs."
      },
      {
        q: "How long does a typical project take?",
        a: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
      },
      {
        q: "Do you work with clients internationally?",
        a: "Yes! We work with clients worldwide. Our team is experienced in remote collaboration and we use modern tools to ensure seamless communication across different time zones."
      },
    ]
  },
  {
    category: "Process & Pricing",
    questions: [
      {
        q: "What is your development process?",
        a: "Our process follows four key phases: Discovery (understanding your goals), Strategy (planning the solution), Development (building with precision), and Launch (deploying and optimizing). We maintain transparent communication throughout each phase."
      },
      {
        q: "How do you handle project pricing?",
        a: "We offer flexible pricing models including fixed-price projects and hourly rates. After understanding your requirements, we provide a detailed proposal with transparent pricing. We also offer payment plans for larger projects."
      },
      {
        q: "Do you offer ongoing maintenance and support?",
        a: "Absolutely! We offer various maintenance packages to keep your website secure, updated, and performing optimally. Our support includes regular updates, security patches, performance monitoring, and content updates."
      },
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What technologies do you use?",
        a: "We work with modern technologies including React, Next.js, TypeScript, Node.js, and various CMS platforms like WordPress. For e-commerce, we specialize in Shopify, WooCommerce, and custom solutions. We choose the best tech stack based on your project requirements."
      },
      {
        q: "Will my website be mobile-friendly?",
        a: "Yes, all our websites are fully responsive and optimized for all devices. We follow a mobile-first approach to ensure excellent user experience on smartphones, tablets, and desktops."
      },
      {
        q: "Do you provide hosting services?",
        a: "We can recommend and set up hosting solutions tailored to your needs. We work with premium hosting providers like Vercel, AWS, and others to ensure your website is fast, secure, and reliable."
      },
      {
        q: "How do you ensure website security?",
        a: "Security is a priority in all our projects. We implement SSL certificates, secure coding practices, regular security audits, and protection against common vulnerabilities. For e-commerce sites, we ensure PCI compliance."
      },
    ]
  },
  {
    category: "Working Together",
    questions: [
      {
        q: "How do we get started?",
        a: "Simply reach out through our contact form or schedule a free consultation. We'll discuss your project, understand your goals, and provide recommendations on how we can help you achieve them."
      },
      {
        q: "What do you need from me to start a project?",
        a: "We'll need your brand assets (logo, colors, fonts), content (text, images), and a clear understanding of your goals and target audience. Don't worry if you don't have everything ready – we can guide you through the process."
      },
      {
        q: "Can I see progress during development?",
        a: "Absolutely! We provide regular updates and access to a staging environment where you can review progress and provide feedback. We believe in transparent, collaborative development."
      },
    ]
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AmbientBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Got Questions?
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const itemId = `${categoryIndex}-${index}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <motion.div
                      key={index}
                      className="card-shimmer-border rounded-xl border border-border/50"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="font-medium text-foreground pr-4">
                          {faq.q}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-muted-foreground">
                          {faq.a}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-hero text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
