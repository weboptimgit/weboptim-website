import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, Search, Info, ArrowRight, Sparkles } from "lucide-react";
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  calculatorTranslations,
  PricingOption,
} from "@/data/calculator-config";

const PriceCalculator = () => {
  const { language } = useLanguage();
  const t = calculatorTranslations[language as keyof typeof calculatorTranslations] || calculatorTranslations.en;

  // Form state
  const [designType, setDesignType] = useState<string>("");
  const [pageCount, setPageCount] = useState<string>("");
  const [selectedFunctionalities, setSelectedFunctionalities] = useState<string[]>([]);
  const [functionalitySearch, setFunctionalitySearch] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [maintenance, setMaintenance] = useState<string>("none");
  const [selectedMarketingOneTime, setSelectedMarketingOneTime] = useState<string[]>([]);
  const [selectedMarketingMonthly, setSelectedMarketingMonthly] = useState<string[]>([]);
  const [articleCount, setArticleCount] = useState<number>(0);
  const [hosting, setHosting] = useState<string>("have");
  const [discountPercent, setDiscountPercent] = useState<number>(0);

  // Helper to get label based on language
  const getLabel = (option: PricingOption) => {
    if (language === "CZ" && option.labelCz) return option.labelCz;
    if (language === "SK" && option.labelSk) return option.labelSk;
    return option.label;
  };

  // Filter functionalities based on search
  const filteredFunctionalities = useMemo(() => {
    if (!functionalitySearch) return functionalityOptions;
    const searchLower = functionalitySearch.toLowerCase();
    return functionalityOptions.filter(
      (f) =>
        f.label.toLowerCase().includes(searchLower) ||
        f.labelCz?.toLowerCase().includes(searchLower) ||
        f.labelSk?.toLowerCase().includes(searchLower),
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

  // Calculate prices
  const calculations = useMemo(() => {
    let oneTimeTotal = 0;
    let monthlyTotal = 0;

    // Design type
    const designOption = designTypes.find((d) => d.id === designType);
    if (designOption) oneTimeTotal += designOption.price;

    // Page count
    const pageOption = pageCountOptions.find((p) => p.id === pageCount);
    if (pageOption) oneTimeTotal += pageOption.price;

    // Functionalities
    selectedFunctionalities.forEach((id) => {
      const func = functionalityOptions.find((f) => f.id === id);
      if (func) oneTimeTotal += func.price;
    });

    // Languages (additional after first)
    if (selectedLanguages.length > 1) {
      selectedLanguages.slice(1).forEach((id) => {
        const lang = languageOptions.find((l) => l.id === id);
        if (lang) oneTimeTotal += lang.price;
      });
    }

    // Maintenance
    const maintenanceOption = maintenanceOptions.find((m) => m.id === maintenance);
    if (maintenanceOption?.monthlyPrice) monthlyTotal += maintenanceOption.monthlyPrice;

    // Marketing one-time
    selectedMarketingOneTime.forEach((id) => {
      const service = marketingOneTimeOptions.find((s) => s.id === id);
      if (service) oneTimeTotal += service.price;
    });

    // Marketing monthly
    selectedMarketingMonthly.forEach((id) => {
      const service = marketingMonthlyOptions.find((s) => s.id === id);
      if (service?.monthlyPrice) monthlyTotal += service.monthlyPrice;
    });

    // Articles
    oneTimeTotal += articleCount * ARTICLE_PRICE;

    // Hosting
    const hostingOption = hostingOptions.find((h) => h.id === hosting);
    if (hostingOption?.monthlyPrice) monthlyTotal += hostingOption.monthlyPrice;

    // Apply discount
    const discountMultiplier = 1 - discountPercent / 100;
    const oneTimeAfterDiscount = oneTimeTotal * discountMultiplier;

    return {
      oneTimeTotal,
      oneTimeAfterDiscount,
      monthlyTotal,
      discountAmount: oneTimeTotal - oneTimeAfterDiscount,
    };
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
    discountPercent,
  ]);

  const formatPrice = (eur: number) => ({
    eur: `€${eur.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`,
    czk: `${Math.round(eur * EUR_TO_CZK).toLocaleString("cs-CZ")} Kč`,
  });

  const toggleArrayItem = (arr: string[], setArr: React.Dispatch<React.SetStateAction<string[]>>, id: string) => {
    if (arr.includes(id)) {
      setArr(arr.filter((i) => i !== id));
    } else {
      setArr([...arr, id]);
    }
  };

  // Summary text helpers (labels)
const getCategoryLabel = (catId: string) => {
  const cat = functionalityCategories.find((c) => c.id === catId);
  if (!cat) return "";
  if (language === "CZ") return cat.labelCz || cat.label;
  if (language === "SK") return cat.labelSk || cat.label;
  return cat.label;
};

const selectedSummary = useMemo(() => {
  const design = designTypes.find((d) => d.id === designType);
  const pages = pageCountOptions.find((p) => p.id === pageCount);

  const funcs = selectedFunctionalities
    .map((id) => functionalityOptions.find((f) => f.id === id))
    .filter(Boolean) as PricingOption[];

  const funcsByCategory = funcs.reduce<Record<string, PricingOption[]>>((acc, f: any) => {
    const key = f.category || "other";
    acc[key] = acc[key] || [];
    acc[key].push(f);
    return acc;
  }, {});

  const langs = selectedLanguages
    .map((id) => languageOptions.find((l) => l.id === id))
    .filter(Boolean) as PricingOption[];

  const maintenanceOpt = maintenanceOptions.find((m) => m.id === maintenance);
  const hostOpt = hostingOptions.find((h) => h.id === hosting);

  const mktOne = selectedMarketingOneTime
    .map((id) => marketingOneTimeOptions.find((m) => m.id === id))
    .filter(Boolean) as PricingOption[];

  const mktMonthly = selectedMarketingMonthly
    .map((id) => marketingMonthlyOptions.find((m) => m.id === id))
    .filter(Boolean) as PricingOption[];

  return {
    design,
    pages,
    funcsByCategory,
    langs,
    maintenanceOpt,
    hostOpt,
    mktOne,
    mktMonthly,
    articleCount,
  };
}, [
  designType,
  pageCount,
  selectedFunctionalities,
  selectedLanguages,
  maintenance,
  hosting,
  selectedMarketingOneTime,
  selectedMarketingMonthly,
  articleCount,
  language,
]);

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                <span>{t.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">{t.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
            </motion.div>

            {/* Calculator Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2 space-y-6">
                {/* Design Type */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{t.designType}</h2>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{t.required}</span>
                  </div>
                  <RadioGroup value={designType} onValueChange={setDesignType} className="space-y-3">
                    {designTypes.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={`design-${option.id}`} />
                          <Label htmlFor={`design-${option.id}`} className="cursor-pointer">
                            {getLabel(option)}
                          </Label>
                        </div>
                        <span className="text-primary font-medium">+€{option.price}</span>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>

                {/* Page Count */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{t.pageCount}</h2>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{t.required}</span>
                  </div>
                  <RadioGroup value={pageCount} onValueChange={setPageCount} className="grid sm:grid-cols-2 gap-3">
                    {pageCountOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-border/50"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={`pages-${option.id}`} />
                          <Label htmlFor={`pages-${option.id}`} className="cursor-pointer">
                            {getLabel(option)}
                          </Label>
                        </div>
                        <span className="text-primary font-medium">{option.price > 0 ? `+€${option.price}` : "—"}</span>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>

                {/* Functionalities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{t.functionalities}</h2>
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
                              <div
                                key={option.id}
                                className="flex items-center justify-between p-2 rounded hover:bg-muted/30 transition-colors"
                              >
                                <div className="flex items-center space-x-3">
                                  <Checkbox
                                    id={`func-${option.id}`}
                                    checked={selectedFunctionalities.includes(option.id)}
                                    onCheckedChange={() =>
                                      toggleArrayItem(selectedFunctionalities, setSelectedFunctionalities, option.id)
                                    }
                                  />
                                  <Label htmlFor={`func-${option.id}`} className="cursor-pointer text-sm">
                                    {getLabel(option)}
                                  </Label>
                                </div>
                                <span className="text-primary text-sm font-medium">+€{option.price}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>

                {/* Languages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="glass rounded-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">{t.languages}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {languageOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`lang-${option.id}`}
                            checked={selectedLanguages.includes(option.id)}
                            onCheckedChange={() => toggleArrayItem(selectedLanguages, setSelectedLanguages, option.id)}
                          />
                          <Label htmlFor={`lang-${option.id}`} className="cursor-pointer text-sm">
                            {option.label}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    <Info className="w-3 h-3 inline mr-1" />
                    First language is free, additional languages +€100 each
                  </p>
                </motion.div>

                {/* Maintenance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass rounded-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">{t.maintenance}</h2>
                  <RadioGroup value={maintenance} onValueChange={setMaintenance} className="space-y-3">
                    {maintenanceOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-border/50"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={`maint-${option.id}`} />
                          <Label htmlFor={`maint-${option.id}`} className="cursor-pointer">
                            {getLabel(option)}
                          </Label>
                        </div>
                        <span className="text-primary font-medium">
                          {option.monthlyPrice ? `€${option.monthlyPrice}${t.perMonth}` : "—"}
                        </span>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>

                {/* Marketing One-time */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="glass rounded-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">{t.marketingOneTime}</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {marketingOneTimeOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`mkt1-${option.id}`}
                            checked={selectedMarketingOneTime.includes(option.id)}
                            onCheckedChange={() =>
                              toggleArrayItem(selectedMarketingOneTime, setSelectedMarketingOneTime, option.id)
                            }
                          />
                          <Label htmlFor={`mkt1-${option.id}`} className="cursor-pointer text-sm">
                            {getLabel(option)}
                          </Label>
                        </div>
                        <span className="text-primary text-sm font-medium">+€{option.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Marketing Monthly */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass rounded-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">{t.marketingMonthly}</h2>
                  <div className="space-y-2">
                    {marketingMonthlyOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`mkt2-${option.id}`}
                            checked={selectedMarketingMonthly.includes(option.id)}
                            onCheckedChange={() =>
                              toggleArrayItem(selectedMarketingMonthly, setSelectedMarketingMonthly, option.id)
                            }
                          />
                          <Label htmlFor={`mkt2-${option.id}`} className="cursor-pointer text-sm">
                            {getLabel(option)}
                          </Label>
                        </div>
                        <span className="text-primary text-sm font-medium">
                          €{option.monthlyPrice}
                          {t.perMonth}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Articles */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="glass rounded-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">{t.articles}</h2>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      value={articleCount}
                      onChange={(e) => setArticleCount(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-32"
                    />
                    <span className="text-sm text-muted-foreground">
                      × €{ARTICLE_PRICE} {t.perArticle}
                    </span>
                    <span className="text-primary font-medium ml-auto">= €{articleCount * ARTICLE_PRICE}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{t.articlesHelper}</p>
                </motion.div>

                {/* Hosting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{t.hosting}</h2>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{t.required}</span>
                  </div>
                  <RadioGroup value={hosting} onValueChange={setHosting} className="space-y-3">
                    {hostingOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-border/50"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={`host-${option.id}`} />
                          <Label htmlFor={`host-${option.id}`} className="cursor-pointer">
                            {getLabel(option)}
                          </Label>
                        </div>
                        <span className="text-primary font-medium">
                          {option.monthlyPrice ? `€${option.monthlyPrice}${t.perMonth}` : "—"}
                        </span>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>

                {/* Discount */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="glass rounded-2xl p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">{t.discount}</h2>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      value={discountPercent}
                      onChange={(e) => setDiscountPercent(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                      className="w-32"
                    />
                    <span className="text-lg">%</span>
                    {discountPercent > 0 && (
                      <span className="text-green-500 font-medium ml-auto">
                        -€{Math.round(calculations.discountAmount)}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{t.discountHelper}</p>
                </motion.div>
              </div>

              {/* Summary Sticky */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="lg:sticky lg:top-24"
                >
                  <div className="glass rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-center gap-2 mb-6">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">{t.summary}</h2>
                    </div>

                    <div className="space-y-4">
                      {/* Website Price */}
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">{t.websitePrice}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-foreground">
                            {formatPrice(calculations.oneTimeTotal).eur}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            / {formatPrice(calculations.oneTimeTotal).czk}
                          </span>
                        </div>
                      </div>

                      {/* After Discount */}
                      {discountPercent > 0 && (
                        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                          <p className="text-sm text-green-400 mb-1">{t.afterDiscount}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-green-400">
                              {formatPrice(calculations.oneTimeAfterDiscount).eur}
                            </span>
                            <span className="text-sm text-green-400/70">
                              / {formatPrice(calculations.oneTimeAfterDiscount).czk}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Monthly Fee */}
                      {calculations.monthlyTotal > 0 && (
                        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                          <p className="text-sm text-purple-400 mb-1">{t.monthlyFee}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-purple-400">
                              {formatPrice(calculations.monthlyTotal).eur}
                            </span>
                            <span className="text-sm text-purple-400/70">
                              / {formatPrice(calculations.monthlyTotal).czk}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Divider */}
                      <div className="border-t border-border/50 my-4" />

                      {/* Preliminary Total */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30">
                        <p className="text-sm text-primary mb-1">{t.preliminary}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-gradient">
                            {
                              formatPrice(
                                discountPercent > 0 ? calculations.oneTimeAfterDiscount : calculations.oneTimeTotal,
                              ).eur
                            }
                          </span>
                        </div>
                        {calculations.monthlyTotal > 0 && (
                          <p className="text-sm text-muted-foreground mt-1">
                            + {formatPrice(calculations.monthlyTotal).eur}
                            {t.perMonth}
                          </p>
                        )}
                      </div>

                      {/* Selections recap */}
                      <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm font-semibold">{t.yourSelections ?? "Your selections"}</p>
                          <span className="text-xs text-muted-foreground">
                            {(selectedFunctionalities.length +
                              selectedLanguages.length +
                              selectedMarketingOneTime.length +
                              selectedMarketingMonthly.length +
                              (designType ? 1 : 0) +
                              (pageCount ? 1 : 0) +
                              (maintenance !== "none" ? 1 : 0) +
                              (hosting ? 1 : 0) +
                              (articleCount > 0 ? 1 : 0)) || 0}{" "}
                            {t.items ?? "items"}
                          </span>
                        </div>
                      
                        <div className="space-y-3 text-sm">
                          {/* Design */}
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.designType}</span>
                            <span className="text-right">
                              {selectedSummary.design ? getLabel(selectedSummary.design as any) : <span className="opacity-60">—</span>}
                            </span>
                          </div>
                      
                          {/* Pages */}
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.pageCount}</span>
                            <span className="text-right">
                              {selectedSummary.pages ? getLabel(selectedSummary.pages as any) : <span className="opacity-60">—</span>}
                            </span>
                          </div>
                      
                          {/* Languages */}
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.languages}</span>
                            <span className="text-right">
                              {selectedSummary.langs.length > 0 ? (
                                <span className="inline-flex flex-wrap justify-end gap-1">
                                  {selectedSummary.langs.map((l) => (
                                    <span key={(l as any).id} className="px-2 py-0.5 rounded-full bg-muted/40 border border-border/40 text-xs">
                                      {(l as any).label}
                                    </span>
                                  ))}
                                </span>
                              ) : (
                                <span className="opacity-60">—</span>
                              )}
                            </span>
                          </div>
                      
                          {/* Functionalities */}
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.functionalities}</span>
                            <span className="text-right">
                              {selectedFunctionalities.length > 0 ? (
                                <span className="text-xs text-muted-foreground">
                                  {selectedFunctionalities.length} {t.selected}
                                </span>
                              ) : (
                                <span className="opacity-60">—</span>
                              )}
                            </span>
                          </div>
                      
                          {selectedFunctionalities.length > 0 && (
                            <div className="mt-2 space-y-2">
                              {Object.entries(selectedSummary.funcsByCategory).map(([catId, items]) => (
                                <div key={catId} className="rounded-lg bg-background/40 border border-border/40 p-3">
                                  <p className="text-xs font-semibold mb-2">
                                    {getCategoryLabel(catId) || (t.other ?? "Other")}
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {items.map((it: any) => (
                                      <span
                                        key={it.id}
                                        className="px-2 py-0.5 rounded-full bg-muted/40 border border-border/40 text-xs"
                                      >
                                        {getLabel(it)}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                      
                          {/* Maintenance */}
                          <div className="flex items-start justify-between gap-3 pt-2 border-t border-border/40">
                            <span className="text-muted-foreground">{t.maintenance}</span>
                            <span className="text-right">
                              {selectedSummary.maintenanceOpt && selectedSummary.maintenanceOpt.id !== "none" ? (
                                getLabel(selectedSummary.maintenanceOpt as any)
                              ) : (
                                <span className="opacity-60">—</span>
                              )}
                            </span>
                          </div>
                      
                          {/* Marketing */}
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.marketingOneTime}</span>
                            <span className="text-right">
                              {selectedSummary.mktOne.length > 0 ? (
                                <span className="text-xs text-muted-foreground">{selectedSummary.mktOne.length}×</span>
                              ) : (
                                <span className="opacity-60">—</span>
                              )}
                            </span>
                          </div>
                      
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.marketingMonthly}</span>
                            <span className="text-right">
                              {selectedSummary.mktMonthly.length > 0 ? (
                                <span className="text-xs text-muted-foreground">{selectedSummary.mktMonthly.length}×</span>
                              ) : (
                                <span className="opacity-60">—</span>
                              )}
                            </span>
                          </div>
                      
                          {/* Articles */}
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.articles}</span>
                            <span className="text-right">
                              {articleCount > 0 ? `${articleCount}×` : <span className="opacity-60">—</span>}
                            </span>
                          </div>
                      
                          {/* Hosting */}
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-muted-foreground">{t.hosting}</span>
                            <span className="text-right">
                              {selectedSummary.hostOpt ? getLabel(selectedSummary.hostOpt as any) : <span className="opacity-60">—</span>}
                            </span>
                          </div>
                      
                          {/* Discount */}
                          {discountPercent > 0 && (
                            <div className="flex items-start justify-between gap-3 pt-2 border-t border-border/40">
                              <span className="text-muted-foreground">{t.discount}</span>
                              <span className="text-right text-green-500 font-medium">
                                {discountPercent}% (−€{Math.round(calculations.discountAmount)})
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full group" size="lg">
                        {t.getQuote}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      {/* Disclaimer */}
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/30">
                        <Info className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{t.disclaimer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PriceCalculator;
