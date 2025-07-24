import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";
import { ArrowRight, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-white py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Gestão de patrimônio  
                <span className="text-miradouro-gold block">
                  personalizada e inteligente
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Soluções personalizadas em investimentos com expertise 
                e estratégias desenvolvidas sob medida para seu perfil.
              </p>
            </div>
            
            <Button 
              variant="accent" 
              size="xl" 
              className="group"
              onClick={() => {
                // Aqui seria implementada a integração com o sistema de análise
                alert('Funcionalidade de análise será implementada em breve!');
              }}
            >
              Conhecer nossas soluções
              <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-miradouro-gold rounded-full"></div>
                <span>CVM Regulamentada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-miradouro-gold rounded-full"></div>
                <span>Certificação ANBIMA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-miradouro-gold rounded-full"></div>
                <span>Expertise comprovada</span>
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