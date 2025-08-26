import { Button } from "@/components/ui/button";
import { Quote, Star, Shield, Award } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, hsl(var(--miradouro-blue-dark)), hsl(var(--miradouro-blue)))' }}>
      <div className="container mx-auto text-center text-white">
        <div className="max-w-5xl mx-auto">
          <Quote className="h-12 w-12 text-miradouro-gold mx-auto mb-8 opacity-80" />

          <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Expertise em gestão patrimonial para quem busca resultados consistentes.
          </h3>

          <p className="text-blue-100/90 mb-8">
            Com mais de X anos de mercado, a Miradouro Asset atua com Family Office, fundos exclusivos e gestão patrimonial personalizada.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-miradouro-gold" />
              <span>CVM</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-miradouro-gold" />
              <span>ANBIMA</span>
            </div>
            <div className="flex items-center gap-2">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-miradouro-gold text-miradouro-gold" />
              ))}
              <span className="font-semibold">5.0</span>
              <span>de acordo com nossos clientes</span>
            </div>
          </div>

          <Button 
            variant="premium" 
            size="lg"
            onClick={() => {
              alert('Vamos conectar sua conta em breve.');
            }}
          >
            Quero conectar minha conta agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;