import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import BuildingWebsite from "./pages/BuildingWebsite";
import EcommerceWebsite from "./pages/EcommerceWebsite";
import SEOServices from "./pages/SEOServices";
import PPCServices from "./pages/PPCServices";
import DigitalizationServices from "./pages/DigitalizationServices";
import GraphicServices from "./pages/GraphicServices";
import CaseStudy from "./pages/CaseStudy";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Glossary from "./pages/Glossary";
import GlossaryTerm from "./pages/GlossaryTerm";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PriceCalculator from "./pages/PriceCalculator";
import { ServicesLanguageProvider } from "@/contexts/LanguageServices";
import { BuildingWebsiteLanguageProvider } from "@/contexts/LanguageBuildingWebsite";
import { EcommerceLanguageProvider } from "@/contexts/LanguageEcommerce";
import { SeoLanguageProvider } from "@/contexts/LanguageSEO";
import { PpcLanguageProvider } from "@/contexts/LanguagePPC";
import { DigitalizationLanguageProvider } from "@/contexts/LanguageDigitalization";
import { GraphicLanguageProvider } from "@/contexts/LanguageGraphic";
import { ContactLanguageProvider } from "@/contexts/LanguageContact";
import { WorkCaseStudyProvider } from "@/contexts/WorkCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Services - EN, CZ, SK */}
            <Route path="/services" element={<ServicesLanguageProvider><Services /></ServicesLanguageProvider>} />
            <Route path="/sluzby" element={<ServicesLanguageProvider><Services /></ServicesLanguageProvider>} />
            <Route path="/services/building-website" element={<BuildingWebsiteLanguageProvider><BuildingWebsite /></BuildingWebsiteLanguageProvider>} />
            <Route path="/sluzby/tvorba-webstranok" element={<BuildingWebsiteLanguageProvider><BuildingWebsite /></BuildingWebsiteLanguageProvider>} />
            <Route path="/sluzby/tvorba-webstranek" element={<BuildingWebsiteLanguageProvider><BuildingWebsite /></BuildingWebsiteLanguageProvider>} />
            <Route path="/services/ecommerce-website" element={<EcommerceLanguageProvider><EcommerceWebsite /></EcommerceLanguageProvider>} /> 
            <Route path="/sluzby/tvorba-eshopu" element={<EcommerceLanguageProvider><EcommerceWebsite /></EcommerceLanguageProvider>} /> 
            <Route path="/services/seo" element={<SeoLanguageProvider><SEOServices /></SeoLanguageProvider>} />
            <Route path="/sluzby/seo" element={<SeoLanguageProvider><SEOServices /></SeoLanguageProvider>} />
            <Route path="/services/ppc" element={<PpcLanguageProvider><PPCServices /></PpcLanguageProvider>} /> 
            <Route path="/sluzby/ppc" element={<PpcLanguageProvider><PPCServices /></PpcLanguageProvider>} /> 
            <Route path="/services/digitalization-and-automation" element={<DigitalizationLanguageProvider><DigitalizationServices /></DigitalizationLanguageProvider>} /> 
            <Route path="/sluzby/digitalizacia-a-automatizacia-procesov" element={<DigitalizationLanguageProvider><DigitalizationServices /></DigitalizationLanguageProvider>} /> 
            <Route path="/sluzby/digitalizace-a-automatizace-procesu" element={<DigitalizationLanguageProvider><DigitalizationServices /></DigitalizationLanguageProvider>} /> 
            <Route path="/services/graphic-design" element={<GraphicLanguageProvider><GraphicServices /></GraphicLanguageProvider>} /> 
            <Route path="/sluzby/grafika" element={<GraphicLanguageProvider><GraphicServices /></GraphicLanguageProvider>} /> 
            
            {/* Work/Portfolio - EN, CZ, SK */}
            <Route path="/work" element={<Work />} />
            <Route path="/nase-prace" element={<Work />} />
            
            {/* Detail case study - via work base */}
            <Route path="/work/:slug" element={<WorkCaseStudyProvider> <CaseStudy /> </WorkCaseStudyProvider>} />
            <Route path="/nase-prace/:slug" element={<WorkCaseStudyProvider> <CaseStudy /> </WorkCaseStudyProvider>} />
            
            {/* Backward compatible old URLs */}
            <Route path="/portfolio" element={<Navigate to="/nase-prace" replace />} />
            <Route path="/case-study/:slug" element={<Navigate to="/nase-prace/:slug" replace />} />
            
            {/* Contact - EN, CZ, SK */}
            <Route path="/contact" element={<ContactLanguageProvider><Contact /></ContactLanguageProvider>} /> 
            <Route path="/kontakt" element={<ContactLanguageProvider><Contact /></ContactLanguageProvider>} /> 
            
            {/* Blog - same in all languages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* About - EN, CZ, SK */}
            <Route path="/about" element={<About />} />
            <Route path="/o-nas" element={<About />} />
            
            {/* FAQ - EN, CZ, SK */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/caste-dotazy" element={<FAQ />} />
            <Route path="/caste-otazky" element={<FAQ />} />
            
            {/* Glossary - EN, CZ, SK */}
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/slovnik" element={<Glossary />} />
            <Route path="/glossary/:slug" element={<GlossaryTerm />} />
            <Route path="/slovnik/:slug" element={<GlossaryTerm />} />
            
            {/* Price Calculator */}
            <Route path="/calculator" element={<PriceCalculator />} />
            <Route path="/kalkulacka" element={<PriceCalculator />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
