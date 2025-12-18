import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Search,
  Info,
  Mail,
  Phone,
  User,
  Building2,
  Globe,
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import SEO from "@/components/SEO";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

import {
  designTypes,
  pageCountOptions,
  functionalityOptions,
  functionalityCategories,
  languageOptions,
  maintenanceOptions,
  marketingOneTimeOptions,
  marketingMonthlyOptions,
  hostingOptions,
  ARTICLE_PRICE,
  EUR_TO_CZK,
  PricingOption,
} from "@/data/calculator-config";

type StepId = 1 | 2 | 3 | 4;

const stepTitles = {
  EN: ["Basics", "Features", "Contact", "Review"],
  CZ: ["Základy", "Funkce", "Kontakt", "Shrnutí"],
  SK: ["Základy", "Funkcie", "Kontakt", "Zhrnutie"],
};

const copy = {
  EN: {
    title: "Website configurator",
    subtitle: "Choose what you need — we’ll review it and send you a tailored proposal.",
    next: "Next",
    back: "Back",
    optional: "Optional",
    required: "Required",
    skipOptional: "Skip optional step",
    basicsHint: "Simple questions anyone can answer.",
    advancedHint: "Optional details — if you’re not sure, leave it blank.",
    contactHint: "So we can get back to you with a proposal.",
    reviewHint: "Check your configuration before sending.",
    send: "Send configuration",
    sending: "Sending…",
    sent: "Sent! We’ll get back to you soon.",
    error: "Something went wrong. Please try again.",
    hintText: "Please select website type and number of pages to continue.",
    consentText: "Please fill required contact fields and consent.",
    // fields
    designType: "Type of website / design",
    pageCount: "Number of pages",
    functionalities: "Functions & sections",
    searchPlaceholder: "Search functions…",
    languages: "Languages",
    maintenance: "Maintenance",
    marketingOneTime: "One-time marketing",
    marketingMonthly: "Monthly marketing",
    articles: "Articles / blog posts",
    hosting: "Hosting",
    notes: "Notes (optional)",
    contact: "Contact details",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    company: "Company (optional)",
    website: "Current website (optional)",
    gdpr: "I agree with personal data processing for contact purposes",
    summary: "Your configuration",
    selected: "selected",
  },
  CZ: {
    title: "Konfigurátor webu",
    subtitle: "Vyberte, co potřebujete — my to zhodnotíme a pošleme nabídku na míru.",
    next: "Další",
    back: "Zpět",
    optional: "Volitelné",
    required: "Povinné",
    skipOptional: "Přeskočit volitelné",
    basicsHint: "Jednoduché otázky, které zvládne každý.",
    advancedHint: "Volitelné detaily — když si nejste jistí, nechte prázdné.",
    contactHint: "Abychom vám mohli poslat návrh nabídky.",
    reviewHint: "Zkontrolujte konfiguraci před odesláním.",
    send: "Odeslat konfiguraci",
    sending: "Odesílám…",
    sent: "Odesláno! Brzy se ozveme.",
    error: "Něco se pokazilo. Zkuste to prosím znovu.",
    designType: "Typ webu / design",
    pageCount: "Počet stránek",
    functionalities: "Funkce & sekce",
    searchPlaceholder: "Hledat funkce…",
    languages: "Jazyky",
    maintenance: "Údržba",
    marketingOneTime: "Jednorázový marketing",
    marketingMonthly: "Měsíční marketing",
    articles: "Články / blog",
    hosting: "Hosting",
    notes: "Poznámka (volitelné)",
    contact: "Kontaktní údaje",
    name: "Jméno",
    email: "Email",
    phone: "Telefon (volitelné)",
    company: "Firma (volitelné)",
    website: "Současný web (volitelné)",
    gdpr: "Souhlasím se zpracováním osobních údajů za účelem kontaktování",
    summary: "Vaše konfigurace",
    hintText: "Pro pokračování prosím vyberte typ webu a počet stránek.",
    consentText: "Vyplňte prosím povinná kontaktní pole a souhlas.",
    selected: "vybraté",
  },
  SK: {
    title: "Konfigurátor webu",
    subtitle: "Vyklikaj, čo potrebuješ — my to vyhodnotíme a pošleme cenovú ponuku na mieru.",
    next: "Ďalej",
    back: "Späť",
    optional: "Voliteľné",
    required: "Povinné",
    skipOptional: "Preskočiť voliteľné",
    basicsHint: "Jednoduché otázky, ktoré zvládne aj laik.",
    advancedHint: "Voliteľné detaily — ak si nie si istý, nechaj prázdne.",
    contactHint: "Aby sme ti vedeli poslať návrh ponuky.",
    reviewHint: "Skontroluj konfiguráciu pred odoslaním.",
    send: "Odoslať konfiguráciu",
    sending: "Odosielam…",
    sent: "Odoslané! Čoskoro sa ozveme.",
    error: "Niečo sa pokazilo. Skús to prosím znova.",
    designType: "Typ webu / dizajn",
    pageCount: "Počet stránok",
    functionalities: "Funkcie & sekcie",
    searchPlaceholder: "Hľadať funkcie…",
    languages: "Jazyky",
    maintenance: "Údržba",
    marketingOneTime: "Jednorazový marketing",
    marketingMonthly: "Mesačný marketing",
    articles: "Články / blog",
    hosting: "Hosting",
    notes: "Poznámka (voliteľné)",
    contact: "Kontaktné údaje",
    name: "Meno",
    email: "Email",
    phone: "Telefón (voliteľné)",
    company: "Firma (voliteľné)",
    website: "Aktuálny web (voliteľné)",
    gdpr: "Súhlasím so spracovaním osobných údajov za účelom kontaktovania",
    summary: "Tvoja konfigurácia",
    hintText: "Pre pokračovanie vyberte typ webovej stránky a počet stránok.",
    consentText: "Vyplňte, prosím, požadované kontaktné polia a súhlas.",
    selected: "vybraté",
  },
} as const;

function getLabel(language: string, option: PricingOption) {
  if (language === "CZ" && option.labelCz) return option.labelCz;
  if (language === "SK" && option.labelSk) return option.labelSk;
  return option.label;
}

function toggleArrayItem(arr: string[], id: string) {
  return arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
}

function formatMoney(eur: number) {
  return {
    eur: `€${eur.toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
    czk: `${Math.round(eur * EUR_TO_CZK).toLocaleString("cs-CZ")} Kč`,
  };
}

const WebsiteConfigurator = () => {
  const { language } = useLanguage();
  const t = copy[language as keyof typeof copy] ?? copy.EN;

  // steps
  const [step, setStep] = useState<StepId>(1);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // config state (reuse your calculator structure)
  const [designType, setDesignType] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [selectedFunctionalities, setSelectedFunctionalities] = useState<string[]>([]);
  const [functionalitySearch, setFunctionalitySearch] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [maintenance, setMaintenance] = useState<string>("none");
  const [selectedMarketingOneTime, setSelectedMarketingOneTime] = useState<string[]>([]);
  const [selectedMarketingMonthly, setSelectedMarketingMonthly] = useState<string[]>([]);
  const [articleCount, setArticleCount] = useState<number>(0);
  const [hosting, setHosting] = useState<string>("have");

  // contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");
  const [gdpr, setGdpr] = useState(false);

  // Filter functionalities
  const filteredFunctionalities = useMemo(() => {
    if (!functionalitySearch) return functionalityOptions;
    const q = functionalitySearch.toLowerCase();
    return functionalityOptions.filter(
      (f) =>
        f.label.toLowerCase().includes(q) ||
        f.labelCz?.toLowerCase().includes(q) ||
        f.labelSk?.toLowerCase().includes(q),
    );
  }, [functionalitySearch]);

  // Group functionalities by category
  const groupedFunctionalities = useMemo(() => {
    return functionalityCategories
      .map((cat) => ({
        ...cat,
        options: filteredFunctionalities.filter((f) => f.category === cat.id),
      }))
      .filter((cat) => cat.options.length > 0);
  }, [filteredFunctionalities]);

  // --- internal pricing (NOT shown to user) ---
  const calculations = useMemo(() => {
    let oneTimeTotal = 0;
    let monthlyTotal = 0;

    const designOption = designTypes.find((d) => d.id === designType);
    if (designOption) oneTimeTotal += designOption.price;

    const pageOption = pageCountOptions.find((p) => p.id === pageCount);
    if (pageOption) oneTimeTotal += pageOption.price;

    selectedFunctionalities.forEach((id) => {
      const func = functionalityOptions.find((f) => f.id === id);
      if (func) oneTimeTotal += func.price;
    });

    if (selectedLanguages.length > 1) {
      selectedLanguages.slice(1).forEach((id) => {
        const lang = languageOptions.find((l) => l.id === id);
        if (lang) oneTimeTotal += lang.price;
      });
    }

    const maintenanceOption = maintenanceOptions.find((m) => m.id === maintenance);
    if (maintenanceOption?.monthlyPrice) monthlyTotal += maintenanceOption.monthlyPrice;

    selectedMarketingOneTime.forEach((id) => {
      const s = marketingOneTimeOptions.find((x) => x.id === id);
      if (s) oneTimeTotal += s.price;
    });

    selectedMarketingMonthly.forEach((id) => {
      const s = marketingMonthlyOptions.find((x) => x.id === id);
      if (s?.monthlyPrice) monthlyTotal += s.monthlyPrice;
    });

    oneTimeTotal += articleCount * ARTICLE_PRICE;

    const hostingOption = hostingOptions.find((h) => h.id === hosting);
    if (hostingOption?.monthlyPrice) monthlyTotal += hostingOption.monthlyPrice;

    return { oneTimeTotal, monthlyTotal };
  }, [
    designType,
    pageCount,
    selectedFunctionalities,
    selectedLanguages,
    maintenance,
    selectedMarketingOneTime,
    selectedMarketingMonthly,
    articleCount,
    hosting,
  ]);

  const stepsLabel = stepTitles[language as keyof typeof stepTitles] ?? stepTitles.EN;

  const canGoNext = useMemo(() => {
    if (step === 1) return !!designType && !!pageCount; // basics required
    if (step === 3) return !!name.trim() && !!email.trim() && gdpr; // contact required
    return true;
  }, [step, designType, pageCount, name, email, gdpr]);

  const buildPayload = () => {
    const designOption = designTypes.find((d) => d.id === designType);
    const pageOption = pageCountOptions.find((p) => p.id === pageCount);

    const funcLabels = selectedFunctionalities
      .map((id) => functionalityOptions.find((f) => f.id === id))
      .filter(Boolean)
      .map((f) => ({
        id: f!.id,
        label: getLabel(language, f!),
        price: f!.price,
      }));

    const langLabels = selectedLanguages
      .map((id) => languageOptions.find((l) => l.id === id))
      .filter(Boolean)
      .map((l) => ({ id: l!.id, label: l!.label, price: l!.price }));

    const maint = maintenanceOptions.find((m) => m.id === maintenance);
    const host = hostingOptions.find((h) => h.id === hosting);

    const mkt1 = selectedMarketingOneTime
      .map((id) => marketingOneTimeOptions.find((x) => x.id === id))
      .filter(Boolean)
      .map((x) => ({ id: x!.id, label: getLabel(language, x!), price: x!.price }));

    const mkt2 = selectedMarketingMonthly
      .map((id) => marketingMonthlyOptions.find((x) => x.id === id))
      .filter(Boolean)
      .map((x) => ({
        id: x!.id,
        label: getLabel(language, x!),
        monthlyPrice: x!.monthlyPrice ?? 0,
      }));

    return {
      meta: {
        source: "weboptim-configurator",
        language,
        url: typeof window !== "undefined" ? window.location.href : "",
        createdAt: new Date().toISOString(),
        userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "",
      },
      contact: { name, email, phone, company, website, notes },
      selection: {
        designType: designOption
          ? { id: designOption.id, label: getLabel(language, designOption), price: designOption.price }
          : null,
        pageCount: pageOption
          ? { id: pageOption.id, label: getLabel(language, pageOption), price: pageOption.price }
          : null,
        functionalities: funcLabels,
        languages: langLabels,
        maintenance: maint
          ? { id: maint.id, label: getLabel(language, maint), monthlyPrice: maint.monthlyPrice ?? 0 }
          : null,
        marketingOneTime: mkt1,
        marketingMonthly: mkt2,
        articles: { count: articleCount, unitPrice: ARTICLE_PRICE, total: articleCount * ARTICLE_PRICE },
        hosting: host ? { id: host.id, label: getLabel(language, host), monthlyPrice: host.monthlyPrice ?? 0 } : null,
      },
      totals: {
        oneTime: calculations.oneTimeTotal,
        monthly: calculations.monthlyTotal,
        oneTimeFormatted: formatMoney(calculations.oneTimeTotal),
        monthlyFormatted: formatMoney(calculations.monthlyTotal),
      },
    };
  };

  // IMPORTANT: tu si nastavíš endpoint (nižšie vysvetlím)
  const SUBMIT_URL = "https://hook.eu1.make.com/l27ltqsj3p4rz427srx2feoj3l3deq08";

  const onSubmit = async () => {
    setSubmitting(true);
    try {
      const payload = buildPayload();

      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Bad response");

      setShowSuccessDialog(true);
      // reset form
      setStep(1);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setWebsite("");
      setNotes("");
      setGdpr(false);
    } catch (e) {
      toast({ title: t.error, variant: "destructive" as any });
    } finally {
      setSubmitting(false);
    }
  };

  const StepPill = ({
    index,
    title,
    active,
    done,
  }: {
    index: number;
    title: string;
    active: boolean;
    done: boolean;
  }) => (
    <div
      className={[
        "flex items-center gap-2 px-3 py-2 rounded-full border text-sm",
        active ? "border-primary/40 bg-primary/10" : "border-border/60 bg-muted/20",
      ].join(" ")}
    >
      <div
        className={[
          "w-6 h-6 rounded-full flex items-center justify-center text-xs border",
          done ? "border-primary/40 bg-primary/10" : "border-border/60",
        ].join(" ")}
      >
        {done ? <Check className="w-3 h-3 text-primary" /> : index}
      </div>
      <span className={active ? "text-foreground font-medium" : "text-muted-foreground"}>{title}</span>
    </div>
  );

  return (
    <>
      <SEO title={t.title} description={t.subtitle} />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <AmbientBackground />
        <Navbar />

        <main className="pt-52 pb-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>{t.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">{t.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
            </motion.div>

            {/* Steps */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              <StepPill index={1} title={stepsLabel[0]} active={step === 1} done={step > 1} />
              <StepPill index={2} title={stepsLabel[1]} active={step === 2} done={step > 2} />
              <StepPill index={3} title={stepsLabel[2]} active={step === 3} done={step > 3} />
              <StepPill index={4} title={stepsLabel[3]} active={step === 4} done={false} />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* STEP 1: Basics */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold">{stepsLabel[0]}</h2>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{t.required}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{t.basicsHint}</p>

                  {/* Design Type */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-semibold">{t.designType}</h3>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{t.required}</span>
                    </div>
                    <RadioGroup value={designType} onValueChange={setDesignType} className="space-y-2">
                      {designTypes.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`design-${option.id}`}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            designType === option.id
                              ? "border-primary/50 bg-primary/10"
                              : "border-border/50 hover:bg-muted/30"
                          }`}
                        >
                          <RadioGroupItem value={option.id} id={`design-${option.id}`} />
                          <span>{getLabel(language, option)}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Page Count */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-semibold">{t.pageCount}</h3>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{t.required}</span>
                    </div>
                    <RadioGroup value={pageCount} onValueChange={setPageCount} className="grid sm:grid-cols-2 gap-2">
                      {pageCountOptions.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`pages-${option.id}`}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            pageCount === option.id
                              ? "border-primary/50 bg-primary/10"
                              : "border-border/50 hover:bg-muted/30"
                          }`}
                        >
                          <RadioGroupItem value={option.id} id={`pages-${option.id}`} />
                          <span>{getLabel(language, option)}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Features (optional) */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold">{stepsLabel[1]}</h2>
                    <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">{t.optional}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{t.advancedHint}</p>

                  {/* Functionalities */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-semibold">{t.functionalities}</h3>
                      <span className="text-sm text-muted-foreground">
                        {selectedFunctionalities.length} {t.selected}
                      </span>
                    </div>

                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder={t.searchPlaceholder}
                        value={functionalitySearch}
                        onChange={(e) => setFunctionalitySearch(e.target.value)}
                        className="pl-10"
                      />
                    </div>

                    <Accordion type="multiple" className="space-y-2">
                      {groupedFunctionalities.map((category) => (
                        <AccordionItem
                          key={category.id}
                          value={category.id}
                          className="border border-border/50 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/30">
                            <span className="text-sm font-medium">
                              {language === "CZ"
                                ? category.labelCz
                                : language === "SK"
                                  ? category.labelSk
                                  : category.label}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="space-y-2">
                              {category.options.map((option) => (
                                <label
                                  key={option.id}
                                  htmlFor={`func-${option.id}`}
                                  className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
                                    selectedFunctionalities.includes(option.id) ? "bg-primary/10" : "hover:bg-muted/30"
                                  }`}
                                >
                                  <Checkbox
                                    id={`func-${option.id}`}
                                    checked={selectedFunctionalities.includes(option.id)}
                                    onCheckedChange={() =>
                                      setSelectedFunctionalities((a) => toggleArrayItem(a, option.id))
                                    }
                                  />
                                  <span className="text-sm">{getLabel(language, option)}</span>
                                </label>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  {/* Languages */}
                  <div className="mb-8">
                    <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {t.languages}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {languageOptions.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`lang-${option.id}`}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedLanguages.includes(option.id)
                              ? "border-primary/50 bg-primary/10"
                              : "border-border/50 hover:bg-muted/30"
                          }`}
                        >
                          <Checkbox
                            id={`lang-${option.id}`}
                            checked={selectedLanguages.includes(option.id)}
                            onCheckedChange={() => setSelectedLanguages((a) => toggleArrayItem(a, option.id))}
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <Info className="w-3 h-3 inline mr-1" />
                      (Internal pricing will be calculated automatically)
                    </p>
                  </div>

                  {/* Maintenance */}
                  <div className="mb-8">
                    <h3 className="text-base font-semibold mb-3">{t.maintenance}</h3>
                    <RadioGroup value={maintenance} onValueChange={setMaintenance} className="space-y-2">
                      {maintenanceOptions.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`maint-${option.id}`}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            maintenance === option.id
                              ? "border-primary/50 bg-primary/10"
                              : "border-border/50 hover:bg-muted/30"
                          }`}
                        >
                          <RadioGroupItem value={option.id} id={`maint-${option.id}`} />
                          <span>{getLabel(language, option)}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Marketing one-time */}
                  <div className="mb-8">
                    <h3 className="text-base font-semibold mb-3">{t.marketingOneTime}</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {marketingOneTimeOptions.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`mkt1-${option.id}`}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedMarketingOneTime.includes(option.id)
                              ? "border-primary/50 bg-primary/10"
                              : "border-border/50 hover:bg-muted/30"
                          }`}
                        >
                          <Checkbox
                            id={`mkt1-${option.id}`}
                            checked={selectedMarketingOneTime.includes(option.id)}
                            onCheckedChange={() => setSelectedMarketingOneTime((a) => toggleArrayItem(a, option.id))}
                          />
                          <span className="text-sm">{getLabel(language, option)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Marketing monthly */}
                  <div className="mb-8">
                    <h3 className="text-base font-semibold mb-3">{t.marketingMonthly}</h3>
                    <div className="space-y-2">
                      {marketingMonthlyOptions.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`mkt2-${option.id}`}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedMarketingMonthly.includes(option.id)
                              ? "border-primary/50 bg-primary/10"
                              : "border-border/50 hover:bg-muted/30"
                          }`}
                        >
                          <Checkbox
                            id={`mkt2-${option.id}`}
                            checked={selectedMarketingMonthly.includes(option.id)}
                            onCheckedChange={() => setSelectedMarketingMonthly((a) => toggleArrayItem(a, option.id))}
                          />
                          <span className="text-sm">{getLabel(language, option)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Articles */}
                  <div className="mb-8">
                    <h3 className="text-base font-semibold mb-3">{t.articles}</h3>
                    <div className="flex items-center gap-4">
                      <Input
                        type="number"
                        min={0}
                        max={100}
                        value={articleCount}
                        onChange={(e) => setArticleCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-32"
                      />
                      <span className="text-sm text-muted-foreground">× {ARTICLE_PRICE} (internal)</span>
                    </div>
                  </div>

                  {/* Hosting */}
                  <div>
                    <h3 className="text-base font-semibold mb-3">{t.hosting}</h3>
                    <RadioGroup value={hosting} onValueChange={setHosting} className="space-y-2">
                      {hostingOptions.map((option) => (
                        <label
                          key={option.id}
                          htmlFor={`host-${option.id}`}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            hosting === option.id
                              ? "border-primary/50 bg-primary/10"
                              : "border-border/50 hover:bg-muted/30"
                          }`}
                        >
                          <RadioGroupItem value={option.id} id={`host-${option.id}`} />
                          <span>{getLabel(language, option)}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Contact */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold">{stepsLabel[2]}</h2>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{t.required}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{t.contactHint}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {t.name} *
                      </Label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                      <Label className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {t.email} *
                      </Label>
                      <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    </div>

                    <div>
                      <Label className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {t.phone}
                      </Label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div>
                      <Label className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {t.company}
                      </Label>
                      <Input value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>

                    <div className="sm:col-span-2">
                      <Label>{t.website}</Label>
                      <Input value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </div>

                    <div className="sm:col-span-2">
                      <Label>{t.notes}</Label>
                      <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={5} />
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-3 p-4 rounded-xl border border-border/60 bg-muted/20">
                    <Checkbox id="gdpr" checked={gdpr} onCheckedChange={(v) => setGdpr(!!v)} className="mt-0.5" />
                    <label htmlFor="gdpr" className="cursor-pointer text-sm leading-relaxed">
                      {language === "EN" ? (
                        <>
                          I agree with the processing of personal data for contact purposes according to the{" "}
                          <a href="/privacy-policy" className="text-primary hover:underline">
                            privacy policy
                          </a>
                          .
                        </>
                      ) : language === "CZ" ? (
                        <>
                          Souhlasím se zpracováním osobních údajů za účelem kontaktování dle{" "}
                          <a href="/ochrana-osobnich-udaju" className="text-primary hover:underline">
                            zásad ochrany osobních údajů
                          </a>
                          .
                        </>
                      ) : (
                        <>
                          Súhlasím so spracovaním osobných údajov za účelom kontaktovania podľa{" "}
                          <a href="/ochrana-osobnych-udajov" className="text-primary hover:underline">
                            zásad ochrany osobných údajov
                          </a>
                          .
                        </>
                      )}
                      <span className="text-destructive ml-1">*</span>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Review */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold">{stepsLabel[3]}</h2>
                    <span className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">{t.reviewHint}</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="p-4 rounded-xl border border-border/60 bg-muted/20">
                      <h3 className="font-semibold mb-2">{t.summary}</h3>

                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          <span className="text-foreground font-medium">{t.designType}:</span>{" "}
                          {designType ? getLabel(language, designTypes.find((d) => d.id === designType)!) : "—"}
                        </li>
                        <li>
                          <span className="text-foreground font-medium">{t.pageCount}:</span>{" "}
                          {pageCount ? getLabel(language, pageCountOptions.find((p) => p.id === pageCount)!) : "—"}
                        </li>
                        <li>
                          <span className="text-foreground font-medium">{t.functionalities}:</span>{" "}
                          {selectedFunctionalities.length ? selectedFunctionalities.length : "—"}
                        </li>
                        <li>
                          <span className="text-foreground font-medium">{t.languages}:</span>{" "}
                          {selectedLanguages.length ? selectedLanguages.join(", ") : "—"}
                        </li>
                        <li>
                          <span className="text-foreground font-medium">{t.maintenance}:</span> {maintenance}
                        </li>
                        <li>
                          <span className="text-foreground font-medium">{t.hosting}:</span> {hosting}
                        </li>
                        <li>
                          <span className="text-foreground font-medium">{t.articles}:</span> {articleCount}
                        </li>
                        <li>
                          <span className="text-foreground font-medium">{t.contact}:</span> {name} · {email}
                        </li>
                      </ul>

                      <p className="text-xs text-muted-foreground mt-3">
                        <Info className="w-3 h-3 inline mr-1" />
                        Prices are calculated internally and will be included in the message we receive (not shown to
                        you).
                      </p>
                    </div>

                    {/* Internal totals preview for YOU (still hidden from users on production) */}
                    {/* TIP: nechaj to zakomentované, alebo zobraz len adminom */}
                    {/* <pre className="text-xs opacity-60">{JSON.stringify(buildPayload().totals, null, 2)}</pre> */}
                  </div>
                </motion.div>
              )}

              {/* Footer nav */}
              <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => setStep((s) => (s > 1 ? ((s - 1) as StepId) : s))}
                  disabled={step === 1 || submitting}
                  className="w-full sm:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.back}
                </Button>

                <div className="flex gap-3 w-full sm:w-auto">
                  {step === 2 && (
                    <Button
                      variant="ghost"
                      onClick={() => setStep(3)}
                      disabled={submitting}
                      className="w-full sm:w-auto"
                    >
                      {t.skipOptional}
                    </Button>
                  )}

                  {step < 4 && (
                    <Button
                      onClick={() => setStep((s) => (s + 1) as StepId)}
                      disabled={!canGoNext || submitting}
                      className="w-full sm:w-auto"
                    >
                      {t.next}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}

                  {step === 4 && (
                    <Button onClick={onSubmit} disabled={!canGoNext || submitting} className="w-full sm:w-auto">
                      {submitting ? t.sending : t.send}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Basic validation hints */}
              {step === 1 && (!designType || !pageCount) && (
                <p className="text-xs text-muted-foreground text-center">
                  <Info className="w-3 h-3 inline mr-1" />
                  {t.hintText}
                </p>
              )}
              {step === 3 && (!gdpr || !name.trim() || !email.trim()) && (
                <p className="text-xs text-muted-foreground text-center">
                  <Info className="w-3 h-3 inline mr-1" />
                  {t.consentText}
                </p>
              )}
            </div>
          </div>
        </main>

        <Footer />

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <DialogTitle className="text-center text-xl">
                {language === "EN"
                  ? "Configuration sent!"
                  : language === "CZ"
                    ? "Konfigurace odeslána!"
                    : "Konfigurácia odoslaná!"}
              </DialogTitle>
              <DialogDescription className="text-center">
                {language === "EN"
                  ? "Thank you for your request. We will review your configuration and get back to you with a tailored proposal soon."
                  : language === "CZ"
                    ? "Děkujeme za váš zájem. Vaši konfiguraci vyhodnotíme a brzy se vám ozveme s nabídkou na míru."
                    : "Ďakujeme za váš záujem. Vašu konfiguráciu vyhodnotíme a čoskoro sa vám ozveme s ponukou na mieru."}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button onClick={() => setShowSuccessDialog(false)}>
                {language === "EN" ? "Close" : language === "CZ" ? "Zavřít" : "Zavrieť"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default WebsiteConfigurator;
