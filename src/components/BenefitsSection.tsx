import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Target, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Análise precisa do seu histórico financeiro",
    description: "Quando você conecta suas informações, conseguimos analisar seu perfil de investidor com muito mais precisão e personalização."
  },
  {
    icon: Target,
    title: "Estratégias personalizadas para seus objetivos",
    description: "Com base na sua análise financeira, desenvolvemos estratégias de investimento sob medida para seus objetivos específicos."
  },
  {
    icon: Shield,
    title: "Maior segurança nas suas decisões",
    description: "Por meio de uma análise inteligente, reduzimos os riscos e incertezas, proporcionando maior confiança nos seus investimentos."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-miradouro-blue mb-4">
            Confira os benefícios ao analisar seu perfil
          </h3>
          <p className="text-lg text-miradouro-gray max-w-2xl mx-auto">
            Descubra como nossa análise personalizada pode transformar sua estratégia de investimentos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-miradouro-blue mb-4">
                  {benefit.title}
                </h4>
                <p className="text-miradouro-gray leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;