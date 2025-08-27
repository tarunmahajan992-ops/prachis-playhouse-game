import { Button } from "@/components/ui/button";
import { Play, Gamepad2, Code, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Gamepad2 className="w-16 h-16 text-primary/60" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Code className="w-12 h-12 text-secondary/60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-14 h-14 text-accent/60" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 animate-slide-up">
        <div className="mb-6">
          <span className="inline-block px-6 py-3 bg-glass rounded-full text-primary font-medium mb-6 animate-bounce-in">
            🎮 Action-Adventure Game Developer
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="text-gradient-primary">Run, Jump,</span>
          <br />
          <span className="text-gradient-secondary">Create</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground/90 mb-4 font-light">
          <span className="text-gradient-primary font-bold">Prachi Tomar</span>
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting immersive action-adventure experiences that get your heart racing. 
          From endless runners to epic adventures, every game is a new journey waiting to be explored.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="xl" className="group animate-glow-pulse">
            <Play className="w-6 h-6 group-hover:animate-bounce" />
            Play Now
          </Button>
          
          <Button variant="gaming" size="xl" className="group">
            <Gamepad2 className="w-6 h-6 group-hover:animate-bounce" />
            View Games
          </Button>
          
          <Button variant="glass" size="xl" className="group">
            <Code className="w-6 h-6 group-hover:animate-bounce" />
            Contact Me
          </Button>
        </div>
        
        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-gradient-primary mb-2">10+</div>
            <div className="text-muted-foreground">Games Created</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-gradient-secondary mb-2">50K+</div>
            <div className="text-muted-foreground">Players</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-gradient-accent mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;