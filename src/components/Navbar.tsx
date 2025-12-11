import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "CZ", label: "Čeština" },
  { code: "SK", label: "Slovenčina" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

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
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">N</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Nexus</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Right Side: Language + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLang}</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`cursor-pointer ${currentLang === lang.code ? "text-primary" : ""}`}
                  >
                    <span className="font-medium mr-2">{lang.code}</span>
                    <span className="text-muted-foreground">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="hero" size="lg">
              Start Project
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
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                )}
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 py-2 border-t border-border/50 mt-2 pt-4">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setCurrentLang(lang.code)}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                          currentLang === lang.code
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
                  Start Project
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