import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em até 24 horas.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@megamatic.com.br",
      link: "mailto:contato@megamatic.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar seu negócio com IA? Nossa equipe está preparada 
            para desenvolver a solução perfeita para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="fade-in">
            <div className="card-elegant">
              <h3 className="text-2xl font-bold mb-6">
                Solicite uma <span className="gradient-text-accent">Consultoria</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Corporativo *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary"
                      placeholder="seu@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium mb-2 block">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-muted/50 border-border/50 focus:border-primary"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">
                Como nos <span className="gradient-text">Encontrar</span>
              </h3>

              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="card-elegant block hover:scale-105 transition-transform group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </a>
              ))}

              <div className="card-elegant bg-gradient-subtle border-primary/20 mt-8">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">
                    Resposta Garantida
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Respondemos todos os contatos em até 24 horas úteis
                  </p>
                </div>
              </div>

              <div className="card-elegant">
                <h4 className="font-semibold mb-4 text-center">
                  Horário de <span className="gradient-text-accent">Atendimento</span>
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda - Sexta:</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="font-medium">9h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="font-medium">Fechado</span>
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

export default ContactSection;