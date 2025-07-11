import { Brain, Target, Users, Rocket } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avançada",
      description: "Utilizamos algoritmos de machine learning de última geração para criar soluções inteligentes e adaptáveis."
    },
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Cada automação é projetada para gerar impacto real no seu negócio, com métricas claras de ROI."
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      description: "Nossa equipe de especialistas brasileiros oferece suporte completo em português."
    },
    {
      icon: Rocket,
      title: "Implementação Rápida",
      description: "Deploy ágil com metodologia própria, garantindo resultados em semanas, não meses."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quem <span className="gradient-text">Somos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em transformação digital com foco em automação inteligente. 
            Nossa missão é democratizar o acesso à inteligência artificial para empresas brasileiras 
            de todos os portes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-elegant group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-3xl font-bold mb-6">
              Nossa <span className="gradient-text-accent">Visão</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Acreditamos que a inteligência artificial deve ser acessível e prática. 
              Por isso, desenvolvemos soluções que realmente se integram ao dia a dia das empresas brasileiras, 
              respeitando nossa cultura de negócios e necessidades específicas.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                Tecnologia nacional com padrões internacionais
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                Suporte em português com entendimento cultural
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                Preços justos para o mercado brasileiro
              </li>
            </ul>
          </div>

          <div className="fade-in-up">
            <div className="card-elegant bg-gradient-subtle border-primary/20">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-4">5+</div>
                <p className="text-lg font-semibold mb-2">Anos de Experiência</p>
                <p className="text-muted-foreground mb-6">
                  Especialização em automação e IA para empresas brasileiras
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <p className="text-muted-foreground">Monitoramento</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">100%</div>
                    <p className="text-muted-foreground">Uptime SLA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;