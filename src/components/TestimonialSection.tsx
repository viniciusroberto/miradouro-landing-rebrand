import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-primary text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <Quote className="h-12 w-12 text-miradouro-gold mx-auto mb-8 opacity-80" />
          
          <h3 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            Expertise em gestão patrimonial com soluções personalizadas para 
            investidores que buscam excelência, transparência e 
            resultados consistentes no longo prazo.
          </h3>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-miradouro-gold text-miradouro-gold" />
            ))}
            <span className="ml-2 text-lg font-semibold">5.0</span>
            <span className="text-blue-200">• Satisfação dos nossos investidores</span>
          </div>
          
          <Button 
            variant="accent" 
            size="xl"
            onClick={() => {
              alert('Funcionalidade de análise será implementada em breve!');
            }}
          >
            Fale com um especialista
          </Button>
          
          <p className="text-sm text-blue-200 mt-6">
            • Consulta gratuita • CVM Regulamentada • Certificação ANBIMA
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;