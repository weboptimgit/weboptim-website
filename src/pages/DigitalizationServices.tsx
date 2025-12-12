import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Cpu, 
  ArrowRight, 
  Check, 
  Workflow, 
  Database, 
  Cloud, 
  Zap, 
  BarChart3, 
  Clock, 
  Users, 
  Settings, 
  RefreshCcw,
  Building2,
  Layers,
  Bot,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ServiceReviews from "@/components/ServiceReviews";
import ServiceFAQ from "@/components/ServiceFAQ";

const DigitalizationServices = () => {
  const technologies = [
    { name: "Google Workspace", category: "Productivity" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Pipedrive", category: "CRM" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Make", category: "Automation" },
    { name: "Zapier", category: "Automation" },
    { name: "n8n", category: "Automation" },
    { name: "Airtable", category: "Database" },
    { name: "Notion", category: "Productivity" },
    { name: "Monday.com", category: "Project Management" },
    { name: "Slack", category: "Communication" },
    { name: "Trello", category: "Project Management" },
    { name: "Asana", category: "Project Management" },
    { name: "Fakturoid", category: "Finance" },
    { name: "Digitoo", category: "Documents" },
    { name: "Signi", category: "E-signatures" },
    { name: "Odoo", category: "ERP" },
    { name: "AWS", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and free up hours for strategic work",
    },
    {
      icon: Zap,
      title: "Increase Efficiency",
      description: "Streamline workflows and eliminate manual errors",
    },
    {
      icon: BarChart3,
      title: "Better Insights",
      description: "Real-time dashboards and data-driven decision making",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Centralized tools for seamless team communication",
    },
    {
      icon: RefreshCcw,
      title: "Scalability",
      description: "Systems that grow with your business needs",
    },
    {
      icon: Cloud,
      title: "Cloud Access",
      description: "Work from anywhere with secure cloud solutions",
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Business Process Digitalization",
      description: "Transform paper-based and manual processes into efficient digital workflows",
      features: [
        "Document digitization & management",
        "Electronic signatures & approvals",
        "Cloud storage & file sharing",
        "Digital communication channels",
      ],
    },
    {
      icon: Bot,
      title: "Workflow Automation",
      description: "Connect your tools and automate repetitive tasks across platforms",
      features: [
        "Integration between applications",
        "Automated data synchronization",
        "Trigger-based actions",
        "Custom automation scenarios",
      ],
    },
    {
      icon: Layers,
      title: "CRM Implementation",
      description: "Deploy and customize CRM systems to manage customer relationships",
      features: [
        "CRM selection & setup",
        "Data migration & import",
        "Custom fields & pipelines",
        "Team training & onboarding",
      ],
    },
  ];

  const pricing = [
    {
      name: "Digitalization of Business Processes",
      price: "from 7 990 Kč",
      gradient: "from-blue-500 to-cyan-500",
      technologies: ["Google Workspace", "Microsoft 365", "Fakturoid", "Digitoo", "Odoo", "Signi"],
      features: [
        "Analysis of the Current State",
        "Selection of the Right Technologies",
        "Comprehensive Implementation",
        "Pilot Projects and Testing",
        "Employee Training",
        "Monitoring and Optimization",
        "Updates",
      ],
    },
    {
      name: "Automation of Business Processes",
      price: "from 8 990 Kč",
      gradient: "from-purple-500 to-pink-500",
      technologies: ["Make", "IFTTT", "Zapier", "Odoo", "n8n"],
      features: [
        "Analysis of the Current State",
        "Selection of the Right Technologies",
        "Comprehensive Implementation",
        "Pilot Projects and Testing",
        "Employee Training",
        "Monitoring and Optimization",
        "Updates",
      ],
      popular: true,
    },
    {
      name: "Implementation of CRM Systems",
      price: "from 9 990 Kč",
      gradient: "from-orange-500 to-amber-500",
      technologies: ["Pipedrive", "Tabidoo", "AirTable", "SalesForce", "HubSpot"],
      features: [
        "Analysis of the Current State",
        "Selection of the Right Technologies",
        "Comprehensive Implementation",
        "Pilot Projects and Testing",
        "Employee Training",
        "Monitoring and Optimization",
        "Updates",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current processes and identify opportunities for improvement",
      duration: "Week 1",
    },
    {
      step: "02",
      title: "Technology Selection",
      description: "Recommend the best tools and platforms for your specific needs",
      duration: "Week 1-2",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Configure and deploy the selected solutions with custom integrations",
      duration: "Week 2-4",
    },
    {
      step: "04",
      title: "Testing & Training",
      description: "Thorough testing and comprehensive training for your team",
      duration: "Week 4-5",
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous monitoring and optimization based on real-world usage",
      duration: "Ongoing",
    },
  ];

  const faqs = [
    {
      question: "What is business digitalization?",
      answer: "Business digitalization is the process of transforming traditional paper-based and manual business processes into digital workflows. This includes implementing cloud-based tools, electronic document management, automated workflows, and integrated systems that improve efficiency and reduce errors.",
    },
    {
      question: "How long does a typical implementation take?",
      answer: "Implementation timelines vary based on complexity. Simple digitalization projects can take 2-4 weeks, while comprehensive automation and CRM implementations may take 4-8 weeks. We provide detailed timelines during the initial consultation.",
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, comprehensive employee training is included in all our packages. We provide hands-on training sessions, documentation, and ongoing support to ensure your team can effectively use the new systems.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Absolutely! We specialize in creating seamless integrations between various platforms. Whether you use existing CRM, accounting software, or custom tools, we can connect them to create unified workflows.",
    },
    {
      question: "What ongoing support do you offer?",
      answer: "We offer various support packages including monitoring, optimization, and updates. Our team is available for troubleshooting, adding new features, and ensuring your systems continue to perform optimally.",
    },
    {
      question: "How do you ensure data security during migration?",
      answer: "Data security is our top priority. We use encrypted transfers, secure backup procedures, and follow best practices for data migration. All implementations comply with GDPR and other relevant regulations.",
    },
  ];

  const { t } = useLanguage();

  // JSON-LD Schema for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digitalization & Automation Services",
    "provider": {
      "@type": "Organization",
      "name": "WebOptim",
      "url": "https://weboptim.eu"
    },
    "description": "Transform your business with digital workflows, automation, and CRM implementation",
    "serviceType": ["Business Digitalization", "Process Automation", "CRM Implementation"],
    "areaServed": ["Czech Republic", "Slovakia", "Europe"],
    "offers": pricing.map(p => ({
      "@type": "Offer",
      "name": p.name,
      "price": p.price.replace(/[^0-9]/g, ''),
      "priceCurrency": "CZK"
    }))
  };

  return (
    <>
      <SEO 
        title="Digitalization & Automation Services | WebOptim"
        description="Transform your business with digital workflows, process automation, and CRM implementation. Google Workspace, Pipedrive, Make, and more."
      />
      <div className="min-h-screen bg-background">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Cpu className="w-4 h-4" />
                  {t("digital.badge")}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  {t("digital.title1")}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> {t("digital.title2")}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {t("digital.subtitle")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="gap-2">
                      {t("cta.freeConsultation")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="gap-2 border-border">
                    <Workflow className="w-4 h-4" />
                    {t("cta.learnMore")}
                  </Button>
                </div>
              </motion.div>

              {/* Animated Workflow Diagram */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="glass-strong rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground ml-2">Automation Dashboard</span>
                  </div>

                  {/* Workflow Animation - Clean Grid Layout */}
                  <div className="relative h-64 flex items-center justify-center">
                    {/* SVG Connection Lines with viewBox for proper scaling */}
                    <svg 
                      className="absolute inset-0 w-full h-full pointer-events-none" 
                      viewBox="0 0 400 256" 
                      preserveAspectRatio="none"
                      style={{ zIndex: 0 }}
                    >
                      {/* Top-left to center */}
                      <motion.line
                        x1="40" y1="40" x2="200" y2="128"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="8 6"
                        strokeOpacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      />
                      {/* Top-right to center */}
                      <motion.line
                        x1="360" y1="40" x2="200" y2="128"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="8 6"
                        strokeOpacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                      />
                      {/* Bottom-left to center */}
                      <motion.line
                        x1="40" y1="216" x2="200" y2="128"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="8 6"
                        strokeOpacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                      />
                      {/* Bottom-right to center */}
                      <motion.line
                        x1="360" y1="216" x2="200" y2="128"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="8 6"
                        strokeOpacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      />
                    </svg>

                    {/* Corner Nodes */}
                    <motion.div 
                      className="absolute top-2 left-2 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex flex-col items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Database className="w-5 h-5 text-blue-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">CRM</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-2 right-2 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex flex-col items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <FileCheck className="w-5 h-5 text-purple-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">Invoices</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-2 left-2 w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex flex-col items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Cloud className="w-5 h-5 text-green-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">Cloud</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-2 right-2 w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex flex-col items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Settings className="w-5 h-5 text-orange-500 mb-0.5" />
                      <span className="text-[10px] text-muted-foreground">Automation</span>
                    </motion.div>

                    {/* Center Hub */}
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center z-10 shadow-lg shadow-primary/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                    >
                      <Workflow className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">85%</div>
                      <div className="text-xs text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <div className="text-xs text-muted-foreground">Integrations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">24/7</div>
                      <div className="text-xs text-muted-foreground">Automation</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Technologies <span className="text-primary">We Use</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We work with leading platforms to create the perfect tech stack for your business.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full glass-strong border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  <span className="font-medium text-sm">{tech.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">• {tech.category}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-8"
            >
              Upload your technology logos and we will add them here
            </motion.p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why <span className="text-primary">Digitalize?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the transformative benefits of digital workflows and automation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon with gradient background - match homepage services */}
                    <div className="relative mb-6">
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                        <benefit.icon className="w-8 h-8 text-white" />
                        {/* Animated ring blur */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500" />
                      </div>
                    </div>
                    
                    <h3 className="relative text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                    <p className="relative text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digitalization solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative glass-strong rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    {/* Animated ring blur */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-40 group-hover:scale-150 blur-xl transition-all duration-500" />
                  </div>
                  
                  <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="relative text-muted-foreground text-sm mb-6">{service.description}</p>
                  <ul className="relative space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Corner decoration */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Transparent <span className="text-primary">Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Clear pricing for our digitalization and automation services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass-strong rounded-2xl overflow-hidden border ${
                    plan.popular 
                      ? "border-primary shadow-lg shadow-primary/20" 
                      : "border-border/50"
                  }`}
                >
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${plan.gradient} p-6 text-center`}>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  </div>

                  <div className="p-8">
                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="text-3xl font-display font-bold text-foreground">{plan.price}</div>
                    </div>

                    {/* Features */}
                    <ol className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <span className="font-bold text-primary">{i + 1}.</span>
                          <span className="text-muted-foreground">
                            {feature === "Selection of the Right Technologies" ? (
                              <>
                                <strong className="text-foreground">{feature}:</strong>
                                <br />
                                <span className="text-xs">{plan.technologies.join(", ")}, etc.</span>
                              </>
                            ) : (
                              feature
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <Link to="/contact" className="block">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                      >
                        Free Consultation
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to ensure successful implementation.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />
              
              <div className="space-y-8">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-lg relative z-10">
                      {item.step}
                    </div>
                    <div className="glass-strong rounded-xl p-6 flex-1 border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-sm text-primary font-medium">{item.duration}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ServiceReviews 
          title="What Our Clients Say"
          subtitle="See what businesses say about their digital transformation journey with us."
        />

        {/* FAQ */}
        <ServiceFAQ 
          faqs={faqs}
          serviceName="Digitalization & Automation"
          title="Frequently Asked Questions"
          subtitle="Common questions about our digitalization services."
        />

        {/* CTA */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-12 text-center border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative">
                <Cpu className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to <span className="text-primary">Digitalize?</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Get a free consultation and discover how automation can transform your business. 
                  Our experts will analyze your processes and recommend the best solutions.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="gap-2">
                    Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DigitalizationServices;