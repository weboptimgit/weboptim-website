import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO titleKey="home" />
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <AmbientBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <TrustSection />
        <About />
        <BlogSection />
        <CTA />
        <Footer />
      </div>
    </main>
    </>
  );
};

export default Index;