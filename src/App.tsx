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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Services - EN, CZ, SK */}
            <Route path="/services" element={<Services />} />
            <Route path="/sluzby" element={<Services />} />
            <Route path="/services/building-website" element={<BuildingWebsite />} />
            <Route path="/sluzby/tvorba-webu" element={<BuildingWebsite />} />
            <Route path="/services/ecommerce-website" element={<EcommerceWebsite />} />
            <Route path="/sluzby/eshop" element={<EcommerceWebsite />} />
            <Route path="/services/seo" element={<SEOServices />} />
            <Route path="/sluzby/seo" element={<SEOServices />} />
            <Route path="/services/ppc" element={<PPCServices />} />
            <Route path="/sluzby/ppc" element={<PPCServices />} />
            
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
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
