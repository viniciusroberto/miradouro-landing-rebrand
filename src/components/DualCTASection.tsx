import { Button } from "@/components/ui/button";

const DualCTASection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="hero"
            size="xl"
            className="rounded-full px-8"
            onClick={() => alert('Conexão segura em breve!')}
          >
            Quero conectar minha conta agora
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="rounded-full px-8 border-miradouro-gold text-miradouro-gold hover:bg-miradouro-gold hover:text-miradouro-blue"
            onClick={() => alert('Em breve, atendimento com especialista!')}
          >
            Prefiro falar com um especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DualCTASection;

