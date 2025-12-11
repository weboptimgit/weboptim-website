import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <TrustSection />
      <About />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;