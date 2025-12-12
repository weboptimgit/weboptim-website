import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Code2, Layers, Palette, Rocket, Sparkles, Zap, Globe, Shield, Clock, Users, TrendingUp, Star, ChevronRight, Braces, Terminal, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";
import { useLanguage } from "@/contexts/LanguageContext";

const webDevFaqs = [
  { question: "How long does it take to build a website?", answer: "Depending on complexity, a standard website takes 2-4 weeks. Complex e-commerce or custom functionality may take 6-8 weeks. We provide a detailed timeline during our initial consultation." },
  { question: "What CMS do you use?", answer: "We primarily work with WordPress and Oxygen Builder for most projects. For simpler sites, we also offer hand-coded solutions. The choice depends on your specific needs and future maintenance requirements." },
  { question: "Do you provide hosting?", answer: "We can recommend reliable hosting providers and help with setup. We also offer managed hosting solutions for clients who prefer a hands-off approach." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely! All our websites are fully responsive and optimized for all devices - desktops, tablets, and smartphones." },
  { question: "Do you offer ongoing maintenance?", answer: "Yes, we offer various maintenance packages including updates, security monitoring, backups, and content changes." },
];

const techStack = [
  { name: "WordPress", icon: "W", description: "Powerful CMS", color: "from-blue-500 to-indigo-600" },
  { name: "Oxygen Builder", icon: "O₂", description: "Visual builder", color: "from-cyan-400 to-teal-500" },
  { name: "Clean Code", icon: "</>", description: "Hand-coded themes", color: "from-purple-400 to-pink-500" },
  { name: "WooCommerce", icon: "🛒", description: "E-commerce ready", color: "from-violet-400 to-purple-600" },
  { name: "PHP", icon: "🐘", description: "Custom functions", color: "from-indigo-400 to-blue-600" },
  { name: "Performance", icon: "⚡", description: "Speed optimized", color: "from-yellow-400 to-orange-500" },
];

const metrics = [
  { value: "99.9%", label: "Uptime", icon: Server },
  { value: "<1s", label: "Load Time", icon: Zap },
  { value: "100+", label: "Projects", icon: Globe },
  { value: "5.0", label: "Rating", icon: Star },
];

const features = [
  {
    icon: Palette,
    title: "Pixel-Perfect Design",
    description: "Every pixel matters. We craft stunning visuals that capture your brand essence and engage visitors.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Maintainable, scalable code that grows with your business. No technical debt, just solid foundations.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    description: "Sub-second load times, Core Web Vitals optimized. Your site will fly on any device.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Fort Knox Security",
    description: "SSL, secure headers, input validation, and regular audits. Your data stays protected.",
    gradient: "from-emerald-500 to-green-500",
  },
];

const processSteps = [
  { 
    step: "01", 
    title: "Discovery Call", 
    description: "We dive deep into your business goals, target audience, and competitive landscape.",
    duration: "1-2 days",
    icon: Users,
  },
  { 
    step: "02", 
    title: "Strategy & Wireframes", 
    description: "Information architecture, user flows, and wireframes that map out your success.",
    duration: "3-5 days",
    icon: Layers,
  },
  { 
    step: "03", 
    title: "Design & Prototype", 
    description: "High-fidelity mockups with interactive prototypes for your approval.",
    duration: "5-7 days",
    icon: Palette,
  },
  { 
    step: "04", 
    title: "Development Sprint", 
    description: "Agile development with weekly demos. Watch your site come to life.",
    duration: "2-4 weeks",
    icon: Code2,
  },
  { 
    step: "05", 
    title: "Testing & QA", 
    description: "Rigorous testing across devices, browsers, and performance benchmarks.",
    duration: "3-5 days",
    icon: Shield,
  },
  { 
    step: "06", 
    title: "Launch & Beyond", 
    description: "Deployment, training, and ongoing support to ensure your success.",
    duration: "Ongoing",
    icon: Rocket,
  },
];

const packages = [
  {
    name: "Starter",
    description: "Perfect for small businesses",
    price: "From €1,500",
    features: ["5-7 pages", "Mobile responsive", "Basic SEO", "Contact form", "1 month support"],
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "From €3,500",
    features: ["10-15 pages", "CMS integration", "Advanced SEO", "Analytics", "3 months support", "Blog setup"],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions",
    price: "Custom",
    features: ["Unlimited pages", "Custom features", "API integrations", "Priority support", "Performance SLA", "Dedicated team"],
    popular: false,
  },
];

// Animated code block component
const AnimatedCodeBlock = () => {
  const codeLines = [
    { text: "const", color: "text-purple-400" },
    { text: " website", color: "text-cyan-300" },
    { text: " = ", color: "text-white" },
    { text: "await", color: "text-purple-400" },
    { text: " createAmazing", color: "text-yellow-300" },
    { text: "({", color: "text-white" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
      <div className="relative glass rounded-xl p-6 font-mono text-sm overflow-hidden border border-primary/20">
        {/* Window controls */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        
        {/* Animated code */}
        <div className="space-y-2">
          <motion.div className="flex flex-wrap">
            {codeLines.map((part, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={part.color}
              >
                {part.text}
              </motion.span>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8 }}
            className="pl-4"
          >
            <span className="text-green-400">design</span>
            <span className="text-white">: </span>
            <span className="text-amber-300">"stunning"</span>
            <span className="text-white">,</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1 }}
            className="pl-4"
          >
            <span className="text-green-400">performance</span>
            <span className="text-white">: </span>
            <span className="text-amber-300">"blazing"</span>
            <span className="text-white">,</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2 }}
            className="pl-4"
          >
            <span className="text-green-400">seo</span>
            <span className="text-white">: </span>
            <span className="text-purple-400">true</span>
            <span className="text-white">,</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.4 }}
          >
            <span className="text-white">{"})"}</span>
            <span className="text-white">;</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1.6, duration: 1, repeat: Infinity }}
            className="mt-2"
          >
            <span className="text-muted-foreground">// Your success starts here_</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const BuildingWebsite = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [activeProcess, setActiveProcess] = useState(0);
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title="Web Development Services | WebOptim"
        description="Custom web development services. We build stunning, fast, SEO-optimized websites that convert visitors into customers."
      />
      <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  {t("webdev.badge")}
                </motion.span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  Websites that{" "}
                  <span className="relative">
                    <span className="text-gradient">convert</span>
                    <motion.span 
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                  <br />visitors into customers
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We don't just build websites – we engineer digital experiences that captivate, 
                  engage, and drive measurable business results. Lightning-fast, SEO-optimized, 
                  and built to scale.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <metric.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gradient">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/work">View Portfolio</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right - Animated Code Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <AnimatedCodeBlock />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-4 glass rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">Build Passed</div>
                      <div className="text-xs text-muted-foreground">2ms ago</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-8 glass rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-cyan-500" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">Performance</div>
                      <div className="text-xs text-green-500 font-bold">100/100</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-display font-bold mb-2">Powered by Modern Tech</h2>
              <p className="text-muted-foreground">We use the best tools for the job</p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative glass rounded-xl p-4 flex items-center gap-3 cursor-default border border-transparent hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon with gradient background */}
                  <div className="relative">
                    <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      {tech.icon}
                    </div>
                    {/* Animated ring blur */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`} />
                  </div>
                  
                  <div className="relative">
                    <div className="font-semibold group-hover:text-primary transition-colors">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.description}</div>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                What Makes Us <span className="text-gradient">Different</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We obsess over the details so you can focus on growing your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative glass rounded-2xl p-8 overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className="relative mb-6">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                        <feature.icon className="w-8 h-8 text-white" />
                        {/* Animated ring blur - match homepage services */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`} />
                      </div>
                      {/* Animated ring blur */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500`} />
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                From Idea to <span className="text-gradient">Launch</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our battle-tested process ensures predictable timelines and exceptional results.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveProcess(index)}
                  className={`relative glass rounded-2xl p-6 cursor-default transition-all duration-300 ${
                    activeProcess === index ? 'border-primary/50 bg-primary/5' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeProcess === index ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-primary font-bold">STEP {step.step}</span>
                        <span className="text-xs text-muted-foreground">{step.duration}</span>
                      </div>
                      <h3 className="text-lg font-display font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Transparent <span className="text-gradient">Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the package that fits your needs. All prices are starting points – we'll provide a custom quote based on your requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass rounded-2xl p-6 ${
                    pkg.popular ? 'border-primary/50 bg-primary/5' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6 pt-2">
                    <h3 className="text-xl font-display font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="text-3xl font-display font-bold text-gradient">{pkg.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={pkg.popular ? "hero" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative glass rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
            >
              {/* Background elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block mb-6"
                >
                  <Rocket className="w-16 h-16 text-primary" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Ready to launch your <span className="text-gradient">dream website</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's discuss your project and create something amazing together. 
                  Free consultation, no obligations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/work">See Our Work</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ServiceReviews title="What Our Clients Say" subtitle="See what businesses say about their new websites." />
        <ServiceFAQ faqs={webDevFaqs} serviceName="Web Development" title="Frequently Asked Questions" subtitle="Common questions about our web development services." />

        <Footer />
      </div>
    </>
  );
};

export default BuildingWebsite;
