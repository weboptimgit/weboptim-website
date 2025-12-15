import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

// Critical path - load immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load non-critical routes for better initial load
const BuildingWebsite = lazy(() => import("./pages/BuildingWebsite"));
const EcommerceWebsite = lazy(() => import("./pages/EcommerceWebsite"));
const SEOServices = lazy(() => import("./pages/SEOServices"));
const PPCServices = lazy(() => import("./pages/PPCServices"));
const DigitalizationServices = lazy(() => import("./pages/DigitalizationServices"));
const GraphicServices = lazy(() => import("./pages/GraphicServices"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Work = lazy(() => import("./pages/Work"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Glossary = lazy(() => import("./pages/Glossary"));
const GlossaryTerm = lazy(() => import("./pages/GlossaryTerm"));
const PriceCalculator = lazy(() => import("./pages/PriceCalculator"));
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { ServicesLanguageProvider } from "@/contexts/LanguageServices";
import { BuildingWebsiteLanguageProvider } from "@/contexts/LanguageBuildingWebsite";
import { EcommerceLanguageProvider } from "@/contexts/LanguageEcommerce";
import { SeoLanguageProvider } from "@/contexts/LanguageSEO";
import { PpcLanguageProvider } from "@/contexts/LanguagePPC";
import { DigitalizationLanguageProvider } from "@/contexts/LanguageDigitalization";
import { GraphicLanguageProvider } from "@/contexts/LanguageGraphic";
import { ContactLanguageProvider } from "@/contexts/LanguageContact";

import CookieBanner from "@/components/CookieBanner";
import { buildPath, domainConfig } from "@/config/domains";
import { getConsent } from "@/lib/cookie-consent";
import { loadGTM } from "@/lib/loadGTM";

const queryClient = new QueryClient();

// Minimal loading fallback to reduce layout shift
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

function AppShell() {
  const { language } = useLanguage();

  useEffect(() => {
    const apply = () => {
      const c = getConsent();
      // spustiť GTM len keď je povolené analytics alebo marketing
      if (c?.analytics || c?.marketing) loadGTM();
    };
  
    apply();
  
    const onChange = () => apply();
    window.addEventListener("wo:cookie-consent", onChange as any);
  
    return () => window.removeEventListener("wo:cookie-consent", onChange as any);
  }, []);

  const privacyPathSafe = (() => {
    try {
      return buildPath(language, "privacy" as any);
    } catch {
      return "/privacy";
    }
  })();

  const privacyUrl = `${domainConfig[language]}${privacyPathSafe}`;

  return (
    <>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Services - EN, CZ, SK */}
              <Route
                path="/services"
                element={
                  <ServicesLanguageProvider>
                    <Services />
                  </ServicesLanguageProvider>
                }
              />
              <Route
                path="/sluzby"
                element={
                  <ServicesLanguageProvider>
                    <Services />
                  </ServicesLanguageProvider>
                }
              />

              <Route
                path="/services/building-website"
                element={
                  <BuildingWebsiteLanguageProvider>
                    <BuildingWebsite />
                  </BuildingWebsiteLanguageProvider>
                }
              />
              <Route
                path="/sluzby/tvorba-webstranok"
                element={
                  <BuildingWebsiteLanguageProvider>
                    <BuildingWebsite />
                  </BuildingWebsiteLanguageProvider>
                }
              />
              <Route
                path="/sluzby/tvorba-webstranek"
                element={
                  <BuildingWebsiteLanguageProvider>
                    <BuildingWebsite />
                  </BuildingWebsiteLanguageProvider>
                }
              />

              <Route
                path="/services/ecommerce-website"
                element={
                  <EcommerceLanguageProvider>
                    <EcommerceWebsite />
                  </EcommerceLanguageProvider>
                }
              />
              <Route
                path="/sluzby/tvorba-eshopu"
                element={
                  <EcommerceLanguageProvider>
                    <EcommerceWebsite />
                  </EcommerceLanguageProvider>
                }
              />

              <Route
                path="/services/seo"
                element={
                  <SeoLanguageProvider>
                    <SEOServices />
                  </SeoLanguageProvider>
                }
              />
              <Route
                path="/sluzby/seo"
                element={
                  <SeoLanguageProvider>
                    <SEOServices />
                  </SeoLanguageProvider>
                }
              />

              <Route
                path="/services/ppc"
                element={
                  <PpcLanguageProvider>
                    <PPCServices />
                  </PpcLanguageProvider>
                }
              />
              <Route
                path="/sluzby/ppc"
                element={
                  <PpcLanguageProvider>
                    <PPCServices />
                  </PpcLanguageProvider>
                }
              />

              <Route
                path="/services/digitalization-and-automation"
                element={
                  <DigitalizationLanguageProvider>
                    <DigitalizationServices />
                  </DigitalizationLanguageProvider>
                }
              />
              <Route
                path="/sluzby/digitalizacia-a-automatizacia-procesov"
                element={
                  <DigitalizationLanguageProvider>
                    <DigitalizationServices />
                  </DigitalizationLanguageProvider>
                }
              />
              <Route
                path="/sluzby/digitalizace-a-automatizace-procesu"
                element={
                  <DigitalizationLanguageProvider>
                    <DigitalizationServices />
                  </DigitalizationLanguageProvider>
                }
              />

              <Route
                path="/services/graphic-design"
                element={
                  <GraphicLanguageProvider>
                    <GraphicServices />
                  </GraphicLanguageProvider>
                }
              />
              <Route
                path="/sluzby/grafika"
                element={
                  <GraphicLanguageProvider>
                    <GraphicServices />
                  </GraphicLanguageProvider>
                }
              />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ochrana-osobnich-udaju" element={<PrivacyPolicy />} />
              <Route path="/ochrana-osobnych-udajov" element={<PrivacyPolicy />} />

              {/* Work/Portfolio */}
              <Route path="/work" element={<Work />} />
              <Route path="/nase-prace" element={<Work />} />

              {/* Detail case study */}
              <Route path="/work/:slug" element={<CaseStudy />} />
              <Route path="/nase-prace/:slug" element={<CaseStudy />} />

              {/* Backward compatible old URLs */}
              <Route path="/portfolio" element={<Navigate to="/nase-prace" replace />} />
              <Route path="/case-study/:slug" element={<Navigate to="/nase-prace/:slug" replace />} />

              {/* Contact */}
              <Route
                path="/contact"
                element={
                  <ContactLanguageProvider>
                    <Contact />
                  </ContactLanguageProvider>
                }
              />
              <Route
                path="/kontakt"
                element={
                  <ContactLanguageProvider>
                    <Contact />
                  </ContactLanguageProvider>
                }
              />

              {/* Blog */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* About */}
              <Route path="/about" element={<About />} />
              <Route path="/o-nas" element={<About />} />

              {/* FAQ */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/caste-dotazy" element={<FAQ />} />
              <Route path="/caste-otazky" element={<FAQ />} />

              {/* Glossary */}
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/slovnik" element={<Glossary />} />
              <Route path="/glossary/:slug" element={<GlossaryTerm />} />
              <Route path="/slovnik/:slug" element={<GlossaryTerm />} />

              {/* Price Calculator */}
              <Route path="/calculator" element={<PriceCalculator />} />
              <Route path="/kalkulacka" element={<PriceCalculator />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <CookieBanner privacyUrl={privacyUrl} />
        </BrowserRouter>
      </TooltipProvider>
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AppShell />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
