import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { faq } from "@/data/clinic";

/** Organiza as perguntas num accordion que mantém uma resposta aberta por vez. */
export function Faq() {
  return (
    <section id="duvidas" className="section frame" aria-labelledby="faq-title">
      <Reveal className="faq-layout">
        <div><p className="eyebrow"><span /> PERGUNTAS FREQUENTES</p><h2 id="faq-title">Antes da <em>primeira visita.</em></h2></div>
        <Accordion type="single" collapsible>
          {faq.map(({ question, answer }) => <AccordionItem key={question} value={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>)}
        </Accordion>
      </Reveal>
    </section>
  );
}
