import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Download, ExternalLink } from "lucide-react";
import gameScreenshot from "@/assets/game-screenshot-1.jpg";

const FeaturedGamesSection = () => {
  const games = [
    {
      id: 1,
      title: "Cyber Runner",
      description: "An endless runner through neon-lit cyberpunk cityscapes. Dodge obstacles, collect power-ups, and run as far as you can!",
      image: gameScreenshot,
      genre: "Endless Runner",
      status: "Live",
      downloads: "25K+",
      rating: 4.8,
      features: ["Multiplayer", "Leaderboards", "Power-ups"],
      color: "primary"
    },
    {
      id: 2,
      title: "Adventure Quest",
      description: "Epic fantasy adventure with challenging puzzles and boss battles. Explore mystical worlds and uncover ancient secrets.",
      image: gameScreenshot,
      genre: "Action Adventure",
      status: "Coming Soon",
      downloads: "Pre-order",
      rating: null,
      features: ["Story Mode", "Boss Battles", "Collectibles"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Speed Dash",
      description: "High-speed action platformer with gravity-defying stunts. Master the art of parkour in futuristic environments.",
      image: gameScreenshot,
      genre: "Platformer",
      status: "Beta",
      downloads: "5K+",
      rating: 4.5,
      features: ["Parkour", "Time Trials", "Customization"],
      color: "accent"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-6 py-3 bg-gradient-secondary rounded-full text-secondary-foreground font-medium mb-6">
            Featured Games
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Epic</span> Adventures Await
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into immersive worlds filled with action, adventure, and endless possibilities
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <Card 
              key={game.id} 
              className="group relative overflow-hidden bg-gradient-card border-neon shadow-card-elegant hover:shadow-neon-glow transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Status Badge */}
                <Badge 
                  className={`absolute top-4 right-4 ${
                    game.status === 'Live' ? 'bg-gradient-primary' :
                    game.status === 'Beta' ? 'bg-gradient-accent' :
                    'bg-gradient-secondary'
                  } text-foreground font-bold border-neon`}
                >
                  {game.status}
                </Badge>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="glass" size="icon" className="rounded-full">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {game.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {game.genre}
                    </Badge>
                  </div>
                  {game.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm font-medium text-foreground">
                        {game.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {game.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {game.features.map((feature) => (
                    <Badge 
                      key={feature} 
                      variant="secondary" 
                      className="text-xs bg-muted/50"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {game.downloads}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {game.status === 'Live' ? (
                      <Button variant="gaming" size="sm">
                        <Play className="w-4 h-4" />
                        Play Now
                      </Button>
                    ) : game.status === 'Beta' ? (
                      <Button variant="action" size="sm">
                        <ExternalLink className="w-4 h-4" />
                        Join Beta
                      </Button>
                    ) : (
                      <Button variant="glass" size="sm">
                        <Star className="w-4 h-4" />
                        Wishlist
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <Card className="inline-block p-8 bg-gradient-card border-neon shadow-card-elegant">
            <h3 className="text-2xl font-bold text-gradient-secondary mb-4">
              Ready for More Adventures?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Explore my complete portfolio of games and discover your next favorite adventure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <ExternalLink className="w-5 h-5" />
                View All Games
              </Button>
              <Button variant="glass" size="lg">
                <Download className="w-5 h-5" />
                Download Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGamesSection;