import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Gamepad2, Zap, Heart, Star, Trophy } from "lucide-react";
import gameCharacter from "@/assets/game-character.jpg";

const AboutSection = () => {
  const skills = [
    { name: "Unity", level: 95, icon: Code2 },
    { name: "C#", level: 90, icon: Code2 },
    { name: "JavaScript", level: 85, icon: Code2 },
    { name: "HTML5", level: 88, icon: Code2 },
    { name: "Unreal Engine", level: 75, icon: Gamepad2 },
    { name: "Game Design", level: 92, icon: Star },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-6 py-3 bg-gradient-primary rounded-full text-primary-foreground font-medium mb-6">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-secondary">Passionate</span> Game Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turning ideas into interactive adventures that captivate players worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-right">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                My Journey in Game Development
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ever since I picked up my first controller, I knew I wanted to create the magic 
                that brings virtual worlds to life. What started as a childhood fascination 
                has evolved into a 5+ year journey of crafting action-packed adventures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating fast-paced, adrenaline-pumping games that keep players 
                on the edge of their seats. From endless runners to epic adventure quests, 
                every project is a new challenge to push the boundaries of interactive entertainment.
              </p>
            </div>

            {/* Inspiration Box */}
            <Card className="p-6 bg-gradient-card border-neon shadow-card-elegant">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">My Inspiration</h4>
                  <p className="text-muted-foreground">
                    "Every pixel has a purpose, every jump has meaning, and every adventure 
                    tells a story. I believe games are more than entertainment – they're 
                    experiences that connect us to our inner child."
                  </p>
                </div>
              </div>
            </Card>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-glass border-neon">
                <Trophy className="w-8 h-8 text-accent mb-2" />
                <div className="text-2xl font-bold text-gradient-accent">Best Mobile Game</div>
                <div className="text-sm text-muted-foreground">Indie Awards 2023</div>
              </Card>
              <Card className="p-4 bg-glass border-neon">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <div className="text-2xl font-bold text-gradient-primary">1M+ Downloads</div>
                <div className="text-sm text-muted-foreground">Across all platforms</div>
              </Card>
            </div>

            <Button variant="action" size="lg" className="group">
              <Gamepad2 className="w-5 h-5 group-hover:animate-bounce" />
              View My Games
            </Button>
          </div>

          {/* Skills & Image */}
          <div className="space-y-8 animate-slide-up">
            {/* Character Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 animate-glow-pulse"></div>
              <img 
                src={gameCharacter} 
                alt="Game Character" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-neon-glow border-neon"
              />
            </div>

            {/* Skills */}
            <Card className="p-8 bg-gradient-card border-neon shadow-card-elegant">
              <h4 className="text-2xl font-bold text-gradient-primary mb-6">
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;