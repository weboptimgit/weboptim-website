import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SEO, { getOrganizationSchema, getWebSiteSchema } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

// Lazy load below-the-fold components for better initial performance
const Services = lazy(() => import("@/components/Services"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const About = lazy(() => import("@/components/About"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));
const AmbientBackground = lazy(() => import("@/components/AmbientBackground"));
import ConfiguratorPopup from "@/components/ConfiguratorPopup";
import { buildPath } from "@/config/domains";
import { configuratorCtaText } from "@/data/configuratorCta";

// Minimal section loader
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const { language } = useLanguage();
  const t = configuratorCtaText[language];
  const configuratorUrl = buildPath(language, "configurator");
  
  const jsonLd = [
    getOrganizationSchema(language),
    getWebSiteSchema(language),
  ];
  

  return (
    <>
      <SEO titleKey="home" jsonLd={jsonLd} />
      <main className="min-h-screen bg-background overflow-x-hidden relative">
        {/* Lazy load background for better initial paint */}
        <Suspense fallback={null}>
          <AmbientBackground />
        </Suspense>
        
        <div className="relative z-10">
          {/* Critical above-the-fold content - load immediately */}
          <Navbar />
          <Hero />
          
          {/* Below-the-fold content - lazy loaded */}
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Portfolio />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <TrustSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <BlogSection />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <CTA />
          </Suspense>
          
          {t && (
            <ConfiguratorPopup
              badge={t.badge}
              title={t.title}
              subtitle={t.subtitle}
              cta={t.cta}
              href={configuratorUrl}
              showAfterPx={100}
              reappearAfterHours={24}
              offerText={t.offerText}
            />
          )}
 
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Index;
