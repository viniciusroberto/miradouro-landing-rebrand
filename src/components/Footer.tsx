import { Button } from "@/components/ui/button";
import miradouroLogo from "@/assets/miradouro-logo.png";
import { Phone, Mail, Globe, Shield, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-miradouro-blue-dark text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={miradouroLogo} 
                alt="Miradouro Asset" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h4 className="text-xl font-bold">Miradouro Asset</h4>
                <p className="text-miradouro-gold text-sm">
                  Investimentos Inteligentes, Resultados Consistentes
                </p>
              </div>
            </div>
            
            <p className="text-blue-200 leading-relaxed max-w-lg">
              Gestora de investimentos especializada em Family Office, fundos de investimento
              e gestão patrimonial personalizada, desenvolvida sob medida para cada cliente
              com foco em resultados consistentes e sustentáveis.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-miradouro-gold" />
                <span className="text-sm">CVM Regulamentada</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-miradouro-gold" />
                <span className="text-sm">Certificação ANBIMA</span>
              </div>
            </div>
          </div>
          
          {/* Contato */}
          <div className="space-y-6">
            <h5 className="text-lg font-semibold text-miradouro-gold">
              Contato
            </h5>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-miradouro-gold" />
                <span>(21) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-miradouro-gold" />
                <span>contato@miradouroasset.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-miradouro-gold" />
                <span>miradouroasset.com.br</span>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="space-y-6">
            <h5 className="text-lg font-semibold text-miradouro-gold">
              Comece agora
            </h5>
            
            <p className="text-blue-200 text-sm">
              Conheça nossas soluções personalizadas de investimento
            </p>
            
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full"
              onClick={() => {
                alert('Funcionalidade de análise será implementada em breve!');
              }}
            >
              Fale com especialista
            </Button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-miradouro-blue/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-sm">
              © 2024 Miradouro Asset. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-blue-300">
              <a href="#" className="hover:text-miradouro-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-miradouro-gold transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-miradouro-gold transition-colors">
                Regulamentos
              </a>
            </div>
          </div>
          <p className="text-center text-blue-300 text-xs mt-6">
            Powered by <span className="text-white">Pluggy</span> | Tecnologia em Open Finance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;