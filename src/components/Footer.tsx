import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoWeboptim from "@/assets/logo-weboptim.svg";
import { useFooterLang } from "@/contexts/LanguageFooter";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const t = useFooterLang();

  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoWeboptim} alt="WebOptim" className="w-10 h-10" />
              <span className="font-display font-bold text-xl text-foreground">WebOptim</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              {t.brand.description}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t.services.title}</h4>
            <ul className="space-y-3">
              {t.services.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t.company.title}</h4>
            <ul className="space-y-3">
              {t.company.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t.resources.title}</h4>
            <ul className="space-y-3">
              {t.resources.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {t.bottom.copyright}
          </p>
          <p className="text-muted-foreground text-sm">
            {t.bottom.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
