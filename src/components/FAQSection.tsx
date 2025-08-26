import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-miradouro-blue/5">
      <div className="container mx-auto max-w-3xl">
        <h3 className="text-3xl font-bold text-miradouro-blue text-center mb-10">Perguntas frequentes</h3>
        <Accordion type="single" collapsible className="bg-white rounded-xl shadow-card divide-y">
          <AccordionItem value="item-1" className="px-6">
            <AccordionTrigger className="text-miradouro-blue py-5">É seguro conectar minha conta?</AccordionTrigger>
            <AccordionContent className="text-miradouro-gray">
              Sim. Utilizamos tecnologia de Open Finance e seguimos padrões de segurança, com conformidade CVM e ANBIMA.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="px-6">
            <AccordionTrigger className="text-miradouro-blue py-5">A Miradouro terá acesso às minhas movimentações?</AccordionTrigger>
            <AccordionContent className="text-miradouro-gray">
              Você controla o compartilhamento. A análise utiliza dados de forma segura e autorizada para oferecer melhores condições e oportunidades.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="px-6">
            <AccordionTrigger className="text-miradouro-blue py-5">Posso desconectar quando quiser?</AccordionTrigger>
            <AccordionContent className="text-miradouro-gray">
              Sim, você pode revogar o acesso a qualquer momento com total transparência e simplicidade.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

