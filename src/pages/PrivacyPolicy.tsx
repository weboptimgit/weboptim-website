import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cookie,
  Database,
  Mail,
  Scale,
  Clock,
  Share2,
  RefreshCcw,
  Settings2,
  FileText,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getConsent, clearConsent, type CookieConsent } from "@/lib/cookie-consent";
import { useLanguage } from "@/contexts/LanguageContext";
import { domainConfig } from "@/config/domains";

type Section = {
  id: string;
  icon: any;
  title: string;
  content: React.ReactNode;
};

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const base = domainConfig[language];
  const canonicalUrl = useMemo(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/privacy-policy";
    return `${base}${path}`;
  }, [base]);

  const [consent, setConsentState] = useState<CookieConsent | null>(null);

  useEffect(() => {
    setConsentState(getConsent());

    const onChange = (e: any) => setConsentState(e?.detail ?? getConsent());
    const onClear = () => setConsentState(null);

    window.addEventListener("wo:cookie-consent", onChange);
    window.addEventListener("wo:cookie-consent-cleared", onClear);

    return () => {
      window.removeEventListener("wo:cookie-consent", onChange);
      window.removeEventListener("wo:cookie-consent-cleared", onClear);
    };
  }, []);

  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent("wo:open-cookie-settings"));
  };

  const revokeConsent = () => {
    clearConsent();
    window.location.reload();
  };

  const statusPill = (label: string, ok: boolean) => (
    <span
      className={[
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        ok
          ? "bg-primary/10 text-primary border-primary/20"
          : "bg-muted/30 text-muted-foreground border-border/40",
      ].join(" ")}
    >
      {label}: {ok ? "povolené" : "zakázané"}
    </span>
  );

  const sections: Section[] = [
    {
      id: "who",
      icon: ShieldCheck,
      title: "Kto sme",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>
            Prevádzkovateľom webovej stránky je <strong className="text-foreground">WebOptim</strong>.
            Táto stránka vysvetľuje, aké údaje spracúvame, prečo ich spracúvame a aké máš práva.
          </p>
          <div className="rounded-xl border border-border/50 p-4 bg-background/40">
            <p className="text-sm">
              <strong className="text-foreground">Kontakt:</strong> info@weboptim.sk (alebo podľa domény),
              tel.: +420 776 292 799
            </p>
            <p className="text-sm mt-2">
              <strong className="text-foreground">Adresa:</strong> Příčná 1892/4, 110 00 Praha, Česká republika
            </p>
          </div>
          <p className="text-xs">
            *Doplň si prosím presný názov firmy/IČO podľa toho, čo máš aj v “Firemné údaje” boxe na kontakte.
          </p>
        </div>
      ),
    },
    {
      id: "data",
      icon: Database,
      title: "Aké údaje spracúvame",
      content: (
        <ul className="space-y-2 text-muted-foreground">
          <li>• Identifikačné a kontaktné údaje: meno/názov firmy, e-mail, telefón</li>
          <li>• Údaje z formulára: web, téma, správa</li>
          <li>• Technické údaje: IP adresa, typ zariadenia/prehliadača, cookies (podľa súhlasu)</li>
        </ul>
      ),
    },
    {
      id: "purposes",
      icon: FileText,
      title: "Na aké účely a právny základ",
      content: (
        <div className="space-y-4 text-muted-foreground">
          <div className="rounded-xl border border-border/50 p-4 bg-background/40">
            <p className="font-medium text-foreground">1) Kontaktovanie a vybavenie dopytu</p>
            <p className="text-sm mt-1">
              Účel: odpoveď na správu, príprava ponuky, komunikácia.
              Právny základ: oprávnený záujem / plnenie predzmluvných krokov.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 p-4 bg-background/40">
            <p className="font-medium text-foreground">2) Analytika návštevnosti (voliteľné)</p>
            <p className="text-sm mt-1">
              Účel: meranie návštevnosti a zlepšovanie webu. Právny základ: súhlas.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 p-4 bg-background/40">
            <p className="font-medium text-foreground">3) Marketing (voliteľné)</p>
            <p className="text-sm mt-1">
              Účel: meranie kampaní, remarketing. Právny základ: súhlas.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "Cookies a nastavenia súhlasu",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Cookies používame na základné fungovanie webu a (voliteľne) na analytiku a marketing.
            Nastavenia môžeš kedykoľvek zmeniť.
          </p>

          <div className="glass rounded-2xl border border-border/60 p-5 space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                Nutné: vždy aktívne
              </span>
              {statusPill("Analytické", !!consent?.analytics)}
              {statusPill("Marketingové", !!consent?.marketing)}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <Button onClick={openCookieSettings} className="rounded-full">
                <Settings2 className="w-4 h-4 mr-2" />
                Zmeniť nastavenia cookies
              </Button>
              <Button variant="outline" onClick={revokeConsent} className="rounded-full">
                <RefreshCcw className="w-4 h-4 mr-2" />
                Odvolať súhlas
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Tip: Ak si ešte nič nevybral, bannery sa zobrazia pri ďalšej návšteve.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "processors",
      icon: Share2,
      title: "Komu môžu byť údaje sprístupnené",
      content: (
        <div className="space-y-3 text-muted-foreground">
          <p>
            Údaje môžu byť spracúvané aj našimi sprostredkovateľmi (len v nevyhnutnom rozsahu):
          </p>
          <ul className="space-y-2">
            <li>• <strong className="text-foreground">Make (Integromat)</strong> – automatizácia spracovania formulára</li>
            <li>• <strong className="text-foreground">Airtable</strong> – evidencia dopytov</li>
            <li>• <strong className="text-foreground">MailerLite</strong> – e-mail marketing (ak je použitý)</li>
            <li>• <strong className="text-foreground">Google Tag Manager</strong> – len ak povolíš analytické/marketingové cookies</li>
          </ul>
          <p className="text-xs">
            *Sem si doplníš aj hosting/CDN (HostCreators, Cloudflare, atď.) ak ich používaš.
          </p>
        </div>
      ),
    },
    {
      id: "retention",
      icon: Clock,
      title: "Ako dlho údaje uchovávame",
      content: (
        <div className="space-y-3 text-muted-foreground">
          <p>• Dopyty z formulára: typicky 12–24 mesiacov (alebo podľa potreby komunikácie)</p>
          <p>• Analytické/marketingové cookies: podľa nastavení nástrojov a tvojho súhlasu</p>
          <p className="text-xs">*Uprav si podľa reality (ako dlho reálne držíš leady v Airtable).</p>
        </div>
      ),
    },
    {
      id: "rights",
      icon: Scale,
      title: "Tvoje práva",
      content: (
        <ul className="space-y-2 text-muted-foreground">
          <li>• Právo na prístup k údajom a ich opravu</li>
          <li>• Právo na vymazanie a obmedzenie spracúvania</li>
          <li>• Právo namietať spracúvanie</li>
          <li>• Právo na prenosnosť údajov</li>
          <li>• Právo odvolať súhlas (pri cookies)</li>
          <li>• Právo podať sťažnosť na dozorný orgán</li>
        </ul>
      ),
    },
    {
      id: "contact",
      icon: Mail,
      title: "Kontakt k ochrane súkromia",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>
            Ak máš otázky, napíš nám na <strong className="text-foreground">info@weboptim.sk</strong>
            (alebo podľa domény) a radi to vyriešime.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Zásady ochrany súkromia | WebOptim"
        description="Informácie o spracúvaní osobných údajov, cookies a možnostiach zmeny súhlasu."
        // ak chceš, môžeme dať aj jsonLd neskôr
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* HERO */}
        <section className="pt-52 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Zásady ochrany súkromia <span className="text-gradient">& cookies</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Transparentne a stručne: čo spracúvame, prečo, ako dlho a ako si zmeníš cookies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-[360px_1fr] gap-10">
              {/* TOC */}
              <aside className="lg:sticky lg:top-28 self-start">
                <div className="glass rounded-2xl border border-border/60 p-5">
                  <p className="text-sm font-semibold mb-3 text-foreground">Obsah</p>
                  <div className="space-y-2">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <s.icon className="w-4 h-4" />
                        {s.title}
                      </a>
                    ))}
                  </div>

                  <div className="mt-5 pt-5 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      Posledná aktualizácia: <span className="text-foreground">doplň dátum</span>
                    </p>
                  </div>
                </div>
              </aside>

              {/* SECTIONS */}
              <main className="space-y-8">
                {sections.map((sec, i) => (
                  <motion.div
                    key={sec.id}
                    id={sec.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                    className="glass rounded-2xl border border-border/60 p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <sec.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-full">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                          {sec.title}
                        </h2>
                        {sec.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </main>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
