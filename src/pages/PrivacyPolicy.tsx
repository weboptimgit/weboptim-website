import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Cookie, SlidersHorizontal, Mail, CheckCircle2, XCircle, Save } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { getBreadcrumbSchema } from "@/components/SEO";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { useLanguage } from "@/contexts/LanguageContext";
import { domainConfig, buildPath } from "@/config/domains";

import { getConsent, setConsent, type CookieConsent } from "@/lib/cookie-consent";
import { usePrivacyLang } from "@/contexts/LanguagePrivacy";

const sectionIds = [
  "who",
  "data",
  "purposes",
  "cookies",
  "processors",
  "retention",
  "rights",
  "contact",
] as const;

type SectionId = (typeof sectionIds)[number];

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const p = usePrivacyLang();

  const base = domainConfig[language];
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  const canonicalUrl = `${base}${currentPath}`;

  // email podľa domény
  const emailByLang: Record<string, string> = {
    EN: "info@weboptim.eu",
    CZ: "info@weboptim.cz",
    SK: "info@weboptim.sk",
  };
  const contactEmail = emailByLang[language] ?? "info@weboptim.eu";

  // breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `${base}/` },
    {
      name: p.seo.title,
      url: canonicalUrl,
    },
  ]);

  // cookies state
  const existing = useMemo(() => {
    if (typeof window === "undefined") return null;
    return getConsent();
  }, []);

  const [analytics, setAnalytics] = useState<boolean>(existing?.analytics ?? false);
  const [marketing, setMarketing] = useState<boolean>(existing?.marketing ?? false);
  const [hasConsent, setHasConsent] = useState<boolean>(!!existing);
  const [savedAt, setSavedAt] = useState<number | null>(existing?.timestamp ?? null);

  useEffect(() => {
    const c = getConsent();
    setAnalytics(c?.analytics ?? false);
    setMarketing(c?.marketing ?? false);
    setHasConsent(!!c);
    setSavedAt(c?.timestamp ?? null);
  }, []);

  const saveConsent = (a: boolean, m: boolean) => {
    setConsent({
      necessary: true,
      analytics: a,
      marketing: m,
      version: 1,
    });
    setAnalytics(a);
    setMarketing(m);
    setHasConsent(true);
    setSavedAt(Date.now());
  };

  const openCookieBannerPrefs = () => {
    window.dispatchEvent(new CustomEvent("wo:open-cookie-settings"));
  };

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const formatDate = (ts: number) => {
    try {
      return new Intl.DateTimeFormat(language === "EN" ? "en-GB" : language === "CZ" ? "cs-CZ" : "sk-SK", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(ts));
    } catch {
      return new Date(ts).toLocaleString();
    }
  };

  // bezpečný link na privacy slug (ak chceš používať v iných miestach)
  const privacyPathSafe = (() => {
    try {
      return buildPath(language, "privacy" as any);
    } catch {
      return "/privacy-policy";
    }
  })();

  return (
    <>
      <SEO
        title={p.seo.title}
        description={p.seo.description}
        jsonLd={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-52 pb-14 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                {p.hero.title}
              </h1>

              <p className="text-lg text-muted-foreground">
                {p.hero.subtitle}
              </p>

              <div className="mt-6 text-sm text-muted-foreground">
                {p.lastUpdate}:{" "}
                <span className="text-foreground/80">
                  {savedAt ? formatDate(savedAt) : "—"}
                </span>
                {" · "}
                <a className="underline hover:text-foreground" href={privacyPathSafe}>
                  {privacyPathSafe}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start">
              {/* TOC */}
              <motion.aside
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="glass rounded-2xl border border-border/50 p-6 lg:sticky top-28 h-fit"
              >
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal className="w-4 h-4 text-primary" />
                  <h2 className="font-semibold">{p.tocTitle}</h2>
                </div>

                <nav className="space-y-2">
                  {sectionIds.map((id) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {p.sections[id].title}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-border/50">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={openCookieBannerPrefs}
                  >
                    <Cookie className="w-4 h-4 mr-2" />
                    {p.sections.cookies.manage}
                  </Button>
                </div>
              </motion.aside>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="space-y-10"
              >
                {/* WHO */}
                <div id="who" className="glass rounded-2xl border border-border/50 p-7">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto sm:mx-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-center sm:text-left w-full">
                      <h2 className="text-2xl font-bold mb-2">{p.sections.who.title}</h2>
                      <p className="text-muted-foreground">{p.sections.who.text}</p>
                    </div>
                  </div>
                </div>

                {/* DATA */}
                <div id="data" className="glass rounded-2xl border border-border/50 p-7">
                  <h2 className="text-2xl font-bold mb-4">{p.sections.data.title}</h2>
                  <ul className="space-y-2">
                    {p.sections.data.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PURPOSES */}
                <div id="purposes" className="glass rounded-2xl border border-border/50 p-7">
                  <h2 className="text-2xl font-bold mb-4">{p.sections.purposes.title}</h2>

                  <div className="space-y-4">
                    {p.sections.purposes.items.map((x) => (
                      <div key={x.title} className="rounded-xl border border-border/50 p-5 bg-background/40">
                        <h3 className="font-semibold mb-1">{x.title}</h3>
                        <p className="text-muted-foreground">{x.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* COOKIES + SETTINGS */}
                <div id="cookies" className="glass rounded-2xl border border-border/50 p-7">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto sm:mx-0">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>

                    <div className="text-center sm:text-left w-full">
                      <h2 className="text-2xl font-bold mb-2">{p.sections.cookies.title}</h2>
                      <p className="text-muted-foreground">{p.sections.cookies.intro}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Necessary */}
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-border/50 p-4">
                      <div>
                        <p className="font-medium text-sm">
                          {language === "EN" ? "Necessary" : language === "CZ" ? "Nutné" : "Nutné"}
                        </p>
                        <p className="text-xs text-muted-foreground">{p.sections.cookies.necessary}</p>
                      </div>
                      <Switch checked disabled />
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-border/50 p-4">
                      <div>
                        <p className="font-medium text-sm">
                          {language === "EN" ? "Analytics" : language === "CZ" ? "Analytické" : "Analytické"}
                        </p>
                        <p className="text-xs text-muted-foreground">{p.sections.cookies.analytics}</p>
                      </div>
                      <Switch checked={analytics} onCheckedChange={setAnalytics} />
                    </div>

                    {/* Marketing */}
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-border/50 p-4">
                      <div>
                        <p className="font-medium text-sm">
                          {language === "EN" ? "Marketing" : language === "CZ" ? "Marketingové" : "Marketingové"}
                        </p>
                        <p className="text-xs text-muted-foreground">{p.sections.cookies.marketing}</p>
                      </div>
                      <Switch checked={marketing} onCheckedChange={setMarketing} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:justify-end pt-2">
                      <Button
                        variant="outline"
                        onClick={() => saveConsent(false, false)}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        {language === "EN" ? "Reject all" : language === "CZ" ? "Odmítnout" : "Odmietnuť"}
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => saveConsent(true, true)}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        {language === "EN" ? "Accept all" : language === "CZ" ? "Přijmout vše" : "Prijať všetko"}
                      </Button>

                      <Button onClick={() => saveConsent(analytics, marketing)}>
                        <Save className="w-4 h-4 mr-2" />
                        {language === "EN" ? "Save selection" : language === "CZ" ? "Uložit výběr" : "Uložiť výber"}
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground pt-1">
                      {p.sections.cookies.tip}
                      {hasConsent ? (
                        <>
                          {" "}
                          <span className="text-foreground/70">
                            ({p.lastUpdate}: {savedAt ? formatDate(savedAt) : "—"})
                          </span>
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>

                {/* PROCESSORS */}
                <div id="processors" className="glass rounded-2xl border border-border/50 p-7">
                  <h2 className="text-2xl font-bold mb-2">{p.sections.processors.title}</h2>
                  <p className="text-muted-foreground mb-4">{p.sections.processors.intro}</p>

                  <ul className="space-y-2">
                    {p.sections.processors.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RETENTION */}
                <div id="retention" className="glass rounded-2xl border border-border/50 p-7">
                  <h2 className="text-2xl font-bold mb-4">{p.sections.retention.title}</h2>
                  <ul className="space-y-2">
                    {p.sections.retention.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHTS */}
                <div id="rights" className="glass rounded-2xl border border-border/50 p-7">
                  <h2 className="text-2xl font-bold mb-4">{p.sections.rights.title}</h2>
                  <ul className="space-y-2">
                    {p.sections.rights.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-muted-foreground">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gradient-hero flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CONTACT */}
                <div id="contact" className="glass rounded-2xl border border-border/50 p-7">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto sm:mx-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-center sm:text-left w-full">
                      <h2 className="text-2xl font-bold mb-2">{p.sections.contact.title}</h2>
                      <p className="text-muted-foreground">{p.sections.contact.text}</p>

                      <div className="mt-4">
                        <a
                          href={`mailto:${contactEmail}`}
                          className="inline-flex items-center gap-2 underline hover:text-primary transition-colors"
                        >
                          {contactEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom CTA */}
                <div className="text-center pt-2">
                  <Button variant="outline" onClick={() => scrollTo("cookies")}>
                    <Cookie className="w-4 h-4 mr-2" />
                    {p.sections.cookies.manage}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
