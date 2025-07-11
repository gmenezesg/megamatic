import { Star, Quote } from "lucide-react";

const ClientsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "TechBrasil Ltda",
      content: "A MegaMatic revolucionou nossos processos. Reduzimos 70% do tempo gasto em tarefas repetitivas e aumentamos nossa produtividade significativamente.",
      rating: 5
    },
    {
      name: "Ana Santos",
      position: "Diretora de Operações",
      company: "Inovação Digital",
      content: "O suporte da equipe MegaMatic é excepcional. Implementaram nossa solução em apenas 3 semanas, superando todas as expectativas.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      position: "CTO",
      company: "StartupSP",
      content: "As automações com IA da MegaMatic nos permitiram escalar nosso negócio sem aumentar proporcionalmente nossa equipe. ROI incrível!",
      rating: 5
    }
  ];

  const clientLogos = [
    "TechBrasil",
    "Inovação Digital", 
    "StartupSP",
    "Empresa Alpha",
    "Beta Solutions",
    "Gamma Corp"
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empresas de diversos setores confiam na MegaMatic para transformar seus processos 
            com inteligência artificial. Veja o que nossos clientes dizem sobre nós.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16 fade-in">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Empresas que confiam na MegaMatic
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="card-elegant text-center py-4 hover:scale-105 transition-transform"
              >
                <div className="text-sm font-semibold text-muted-foreground">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-elegant fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary opacity-60 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position} - {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 text-center fade-in">
          <h3 className="text-2xl font-bold mb-8">
            Resultados que <span className="gradient-text-accent">Comprovam</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card-elegant">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Satisfação dos Clientes</p>
            </div>
            <div className="card-elegant">
              <div className="text-3xl font-bold gradient-text-accent mb-2">80%</div>
              <p className="text-sm text-muted-foreground">Redução de Custos</p>
            </div>
            <div className="card-elegant">
              <div className="text-3xl font-bold gradient-text mb-2">300%</div>
              <p className="text-sm text-muted-foreground">Aumento de Produtividade</p>
            </div>
            <div className="card-elegant">
              <div className="text-3xl font-bold gradient-text-accent mb-2">6 meses</div>
              <p className="text-sm text-muted-foreground">ROI Médio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;