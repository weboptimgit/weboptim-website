import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { getOrganizationSchema } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

import { useContactLang } from "@/contexts/LanguageContact";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const s = useContactLang();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // ✅ language-based email
  const emailByLang: Record<string, string> = {
    EN: "info@weboptim.eu",
    CZ: "info@weboptim.cz",
    SK: "info@weboptim.sk",
  };
  const contactEmail = emailByLang[language] ?? "info@weboptim.eu";

  // (kept as in your code – adjust if you later want phone/address per language)
  const contactPhone = s.schema.telephone;
  const contactLocation = "Příčná 1892/4, 110 00 Praha";

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      ...getOrganizationSchema(language),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contactPhone,
        email: contactEmail,
        contactType: s.schema.contactType,
        availableLanguage: s.schema.availableLanguage,
      },
    },
  };

  const WEB3FORMS_KEY = "7c718bbf-ee12-42ae-b1b8-7377e0dd088d";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const formDataToSend = new FormData();
  
      formDataToSend.append("access_key", WEB3FORMS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("message", formData.message);
  
      // voliteľné – pekný predmet mailu
      formDataToSend.append(
        "subject",
        `New contact from WebOptim (${language})`
      );
  
      // voliteľné – reply-to
      formDataToSend.append("replyto", formData.email);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast({
          title: s.form.toastTitle,
          description: s.form.toastDescription,
        });
  
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Form error");
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: s.contactInfo.emailLabel,
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: Phone,
      label: s.contactInfo.phoneLabel,
      value: "+420 776 292 799",
      href: "tel:+420776292799",
    },
    {
      icon: MapPin,
      label: s.contactInfo.locationLabel,
      value: contactLocation,
      href: null as string | null,
    },
  ];

  return (
    <>
      <SEO title={s.seo.title} description={s.seo.description} jsonLd={contactPageSchema} />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-52 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {s.hero.titleBefore} <span className="text-gradient">{s.hero.titleHighlight}</span>
                {s.hero.titleAfter ? ` ${s.hero.titleAfter}` : ""}
              </h1>
              <p className="text-lg text-muted-foreground">{s.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="glass p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">{s.form.title}</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="botcheck"
                          tabIndex={-1}
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {s.form.nameLabel}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={s.form.namePlaceholder}
                          required
                          className="bg-background/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {s.form.emailLabel}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={s.form.emailPlaceholder}
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        {s.form.companyLabel}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={s.form.companyPlaceholder}
                        className="bg-background/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {s.form.messageLabel}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={s.form.messagePlaceholder}
                        rows={5}
                        required
                        className="bg-background/50 resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        s.form.submitSending
                      ) : (
                        <>
                          {s.form.submitIdle} <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Google Badge */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="flex items-center justify-center gap-3 glass rounded-xl p-4">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>

                      <div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 font-semibold">5.0</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{s.googleBadge.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">{s.sidebar.title}</h2>
                  <p className="text-muted-foreground">{s.sidebar.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="glass p-4 rounded-xl flex items-center gap-4 hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Company */}
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{s.company.title}</h3>
                      <p className="font-medium">{s.company.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {s.company.icoLabel}: {s.company.icoValue}
                      </p>

                      <p className="text-sm text-muted-foreground mt-2">
                        {s.company.addressLines.map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                        {s.company.countryLine}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
