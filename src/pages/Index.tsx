import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
