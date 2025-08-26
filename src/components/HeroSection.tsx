import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";
import { ShieldCheck, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-miradouro-blue-dark">Conecte sua conta</span> e descubra seu 
                <span className="block text-miradouro-gold">verdadeiro perfil financeiro!</span>
              </h2>
              <p className="text-lg lg:text-xl text-miradouro-gray leading-relaxed max-w-2xl">
                Com segurança regulamentada pela CVM e ANBIMA, nossa análise inteligente reduz riscos e encontra as melhores oportunidades para você.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button 
                variant="accent"
                size="xl" 
                className="rounded-full px-8"
                onClick={() => {
                  alert('Conexão segura será implementada em breve!');
                }}
              >
                Conectar minha conta com segurança
                <ArrowRight className="ml-1" />
              </Button>
              <div className="text-xs sm:text-sm text-miradouro-blue-dark/80">
                🔒 Conexão 100% segura | CVM | ANBIMA
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-miradouro-gray">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-miradouro-gold" />
                <span>Segurança e conformidade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-miradouro-gold rounded-full"></div>
                <span>CVM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-miradouro-gold rounded-full"></div>
                <span>ANBIMA</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroPhone} 
                alt="Dashboard de investimentos" 
                className="max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-10 right-10 w-24 h-24 border-2 border-miradouro-gold/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-0 w-32 h-32 bg-miradouro-gold/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/5 rounded-lg rotate-45 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;