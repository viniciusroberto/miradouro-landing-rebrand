import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, BadgeDollarSign, KeyRound, UserRound } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Análise precisa do seu histórico financeiro",
    description: "Nosso motor analítico avalia padrões de renda e despesas para um diagnóstico claro e confiável."
  },
  {
    icon: BadgeDollarSign,
    title: "Melhor taxa de crédito e investimento",
    description: "Com dados assertivos, negociamos melhores taxas e opções que fazem sentido para você."
  },
  {
    icon: KeyRound,
    title: "Mais acesso e oportunidades no mercado",
    description: "Reduzimos incertezas para ampliar seu acesso a crédito e produtos de investimento."
  },
  {
    icon: UserRound,
    title: "Gestão personalizada com especialistas Miradouro Asset",
    description: "Acompanhamento consultivo e estratégias sob medida para seu patrimônio."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-miradouro-blue/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-miradouro-blue mb-4">Benefícios imediatos para você</h3>
          <p className="text-lg text-miradouro-gray max-w-2xl mx-auto">Conecte com segurança e desbloqueie vantagens reais na sua vida financeira</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--miradouro-blue)), hsl(var(--miradouro-blue-light)))'
                  }}
                >
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