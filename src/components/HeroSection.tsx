import { ArrowRight, Bot, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden hero-gradient flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Automation Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 float-animation">
        <Bot className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 float-animation" style={{ animationDelay: '1s' }}>
        <Zap className="w-6 h-6 text-accent opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 float-animation" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-10 h-10 text-secondary opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automações com{" "}
            <span className="gradient-text">IA</span>{" "}
            para o{" "}
            <span className="gradient-text-accent">Futuro</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A MegaMatic transforma processos empresariais com inteligência artificial avançada, 
            oferecendo soluções personalizadas para o mercado brasileiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up">
            <Button className="btn-primary group">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-border/50 hover:border-primary/50 hover:bg-primary/10">
              Conhecer Soluções
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up">
            <div className="card-elegant text-center">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <p className="text-muted-foreground">Processos Automatizados</p>
            </div>
            <div className="card-elegant text-center">
              <div className="text-3xl font-bold gradient-text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Redução de Erros</p>
            </div>
            <div className="card-elegant text-center">
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <p className="text-muted-foreground">Empresas Atendidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;