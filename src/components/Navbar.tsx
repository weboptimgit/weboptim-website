import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Code2, ShoppingCart, Search, Target, Cpu, Palette } from "lucide-react";
import logoWeboptim from "@/assets/logo-weboptim.svg";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { getLanguageSwitchUrl } from "@/config/domains";
import { useSlugMappings } from "@/hooks/useSlugMappings";
import { staticPageSlugs } from "@/config/domains";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const languages: { code: Language; label: string }[] = [
  { code: "EN", label: "English" },
  { code: "CZ", label: "Čeština" },
  { code: "SK", label: "Slovenčina" },
];

const sp = (key: keyof typeof staticPageSlugs) => staticPageSlugs[key][language];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { language, t } = useLanguage();
  const location = useLocation();
  const slugMappings = useSlugMappings();

  // Handle language switch - redirects to the corresponding domain
  const handleLanguageSwitch = (targetLanguage: Language) => {
    if (targetLanguage === language) return;
    
    const targetUrl = getLanguageSwitchUrl(targetLanguage, location.pathname, slugMappings);
    window.location.href = targetUrl;
  };

  const navLinks = [
    { name: t("nav.work"), href: sp("work") },
    { name: t("nav.about"), href: sp("about") },
    { name: t("nav.blog"), href: sp("blog") },
    { name: t("nav.faq"), href: sp("faq") },
    { name: t("nav.glossary"), href: sp("glossary") },
    { name: t("nav.contact"), href: sp("contact") },
  ];

  const services = [
    {
      icon: Code2,
      title: t("services.webDev"),
      description: t("services.webDevDesc"),
      href: "/services/building-website",
    },
    {
      icon: ShoppingCart,
      title: t("services.ecommerce"),
      description: t("services.ecommerceDesc"),
      href: "/services/ecommerce-website",
    },
    {
      icon: Search,
      title: t("services.seo"),
      description: t("services.seoDesc"),
      href: "/services/seo",
    },
    {
      icon: Target,
      title: t("services.ppc"),
      description: t("services.ppcDesc"),
      href: "/services/ppc",
    },
    {
      icon: Cpu,
      title: t("services.digitalization"),
      description: t("services.digitalizationDesc"),
      href: "/services/digitalization",
    },
    {
      icon: Palette,
      title: t("services.graphic"),
      description: t("services.graphicDesc"),
      href: "/services/graphic-design",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass-strong rounded-2xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoWeboptim} alt="WebOptim" className="w-10 h-10" />
            <span className="font-display font-bold text-xl text-foreground">WebOptim</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent font-medium p-0 h-auto">
                    {t("nav.services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4 bg-card border border-border rounded-xl shadow-xl">
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => (
                          <NavigationMenuLink key={index} asChild>
                            <Link
                              to={service.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                  {service.title}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link
                          to="/services"
                          className="flex items-center justify-center gap-2 py-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          {t("nav.viewAllServices")}
                          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side: Language + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language}</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageSwitch(lang.code)}
                    className={`cursor-pointer ${language === lang.code ? "text-primary" : ""}`}
                  >
                    <span className="font-medium mr-2">{lang.code}</span>
                    <span className="text-muted-foreground">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="hero" size="lg">
              {t("nav.startProject")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-strong rounded-2xl mt-2 p-6 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                  >
                    {t("nav.services")}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {services.map((service, index) => (
                            <Link
                              key={index}
                              to={service.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <service.icon className="w-4 h-4" />
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 py-2 border-t border-border/50 mt-2 pt-4">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSwitch(lang.code)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          language === lang.code
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="hero" size="lg" className="mt-2">
                  {t("nav.startProject")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
