import { Button } from "@/components/ui/button";
import miradouroLogo from "@/assets/miradouro-logo.png";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      {/* Mini-prova social */}
      <div className="w-full bg-miradouro-blue/5 text-miradouro-blue text-xs md:text-sm">
        <div className="container mx-auto px-6 py-2 text-center font-medium">
          +500 clientes já confiam na Miradouro Asset
        </div>
      </div>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={miradouroLogo} 
              alt="Miradouro Asset" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-miradouro-blue">
                Miradouro Asset
              </h1>
              <p className="text-xs text-miradouro-gray">
                Investimentos Inteligentes
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-miradouro-gray">
              <Phone className="h-4 w-4" />
              <span>(21) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-miradouro-gray">
              <Mail className="h-4 w-4" />
              <span>contato@miradouroasset.com.br</span>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://miradouroasset.com.br/', '_blank')}
            >
              Site Institucional
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;