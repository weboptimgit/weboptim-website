import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="/services/building-website" element={<BuildingWebsite />} />
            <Route path="/sluzby/tvorba-webstranok" element={<BuildingWebsite />} />
            <Route path="/sluzby/tvorba-webstranek" element={<BuildingWebsite />} />
            <Route path="/services/ecommerce-website" element={<EcommerceWebsite />} />
            <Route path="/sluzby/tvorba-eshopu" element={<EcommerceWebsite />} />
            <Route path="/services/seo" element={<SEOServices />} />
            <Route path="/sluzby/seo" element={<SEOServices />} />
            <Route path="/services/ppc" element={<PPCServices />} />
            <Route path="/sluzby/ppc" element={<PPCServices />} />
            <Route path="/services/digitalization-and-automation" element={<DigitalizationServices />} />
            <Route path="/sluzby/digitalizacia-a-automatizacia-procesov" element={<DigitalizationServices />} />
            <Route path="/sluzby/digitalizace-a-automatizace-procesu" element={<DigitalizationServices />} />
            <Route path="/services/graphic-design" element={<GraphicServices />} />
            <Route path="/sluzby/grafika" element={<GraphicServices />} />
            
            {/* Work/Portfolio - EN, CZ, SK */}
            <Route path="/work" element={<Work />} />
            <Route path="/portfolio" element={<Work />} />
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            
            {/* Contact - EN, CZ, SK */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/kontakt" element={<Contact />} />
            
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
