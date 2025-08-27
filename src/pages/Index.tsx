import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedGamesSection from "@/components/FeaturedGamesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="games">
        <FeaturedGamesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
