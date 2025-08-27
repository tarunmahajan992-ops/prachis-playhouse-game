import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Zap,
  Heart,
  Send,
  Sparkles
} from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "text-foreground hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-foreground hover:text-secondary" },
    { icon: Twitter, label: "Twitter", href: "#", color: "text-foreground hover:text-accent" },
    { icon: Mail, label: "Email", href: "#", color: "text-foreground hover:text-primary" },
  ];

  const contactReasons = [
    { icon: Zap, label: "Game Development", desc: "Let's build something amazing together" },
    { icon: MessageCircle, label: "Collaboration", desc: "Partner on exciting projects" },
    { icon: Heart, label: "Feedback", desc: "Share your thoughts on my games" },
    { icon: Sparkles, label: "Job Opportunities", desc: "Open to new adventures" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-6 py-3 bg-gradient-accent rounded-full text-accent-foreground font-medium mb-6">
            Let's Connect
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">Start Your</span> Next Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, share feedback, or just talk games? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Reasons */}
          <div className="space-y-8 animate-slide-right">
            {/* Why Contact Me */}
            <Card className="p-8 bg-gradient-card border-neon shadow-card-elegant">
              <h3 className="text-2xl font-bold text-gradient-secondary mb-6">
                Why Get In Touch?
              </h3>
              <div className="grid gap-4">
                {contactReasons.map((reason, index) => (
                  <div 
                    key={reason.label} 
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors group"
                  >
                    <reason.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:animate-bounce" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {reason.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-gradient-card border-neon shadow-card-elegant">
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center gap-3 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-all duration-300 hover:scale-105 group ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 group-hover:animate-bounce" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Fun Fact */}
            <Card className="p-6 bg-glass border-neon">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Quick Response Promise
                  </h4>
                  <p className="text-muted-foreground">
                    I typically respond within 24 hours. Just like in my games, 
                    I believe in keeping the action moving! 🎮
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-gradient-card border-neon shadow-card-elegant">
              <h3 className="text-2xl font-bold text-gradient-secondary mb-6">
                Send Me a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input 
                      placeholder="Your awesome name" 
                      className="bg-muted/20 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-muted/20 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this adventure about?" 
                    className="bg-muted/20 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Interest Tags */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    I'm interested in...
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Game Development", "Collaboration", "Feedback", "Job Opportunity", "Just Saying Hi"].map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your next epic adventure idea..." 
                    rows={5}
                    className="bg-muted/20 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full group animate-glow-pulse"
                  type="submit"
                >
                  <Send className="w-5 h-5 group-hover:animate-bounce" />
                  Launch Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to turn your game ideas into reality?
          </p>
          <Button variant="glass" size="lg" className="group">
            <Sparkles className="w-5 h-5 group-hover:animate-bounce" />
            Let's Create Something Amazing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;