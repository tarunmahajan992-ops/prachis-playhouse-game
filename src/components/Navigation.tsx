import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Home, User, Code, Mail, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Code, label: "Games", href: "#games" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-neon backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Gamepad2 className="w-8 h-8 text-primary animate-glow-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">
                Prachi Tomar
              </h1>
              <Badge variant="outline" className="text-xs">
                Game Developer
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <item.icon className="w-4 h-4 group-hover:animate-bounce" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            
            <Button 
              variant="gaming" 
              size="sm" 
              className="group"
              onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Gamepad2 className="w-4 h-4 group-hover:animate-bounce" />
              Play Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="glass"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neon/20 animate-slide-up">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/20 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary group-hover:animate-bounce" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="gaming" 
                  className="w-full group"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Gamepad2 className="w-4 h-4 group-hover:animate-bounce" />
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;