import { Clock3, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "./contact-form";

/** Apresenta os canais de contato e ajusta as instruções ao modo atual. */
export function Contact({ demo, whatsapp }: { demo: boolean; whatsapp: string | null }) {
  return (
    <section id="contato" className="section contact" aria-labelledby="contact-title">
      <Reveal className="frame contact-layout">
        <div>
          <p className="eyebrow"><span /> CONTATO</p>
          <h2 id="contact-title">Vamos conversar <em>sobre seu sorriso?</em></h2>
          <p>{demo ? "Explore como seria solicitar uma avaliação na Aurora. Este formulário está em modo demonstração." : "Conte o que você procura e deixe seu contato para conversar com a equipe."}</p>
          <div className="contact-details">
            <p><MapPin size={18} aria-hidden="true" /> São Paulo, SP · localização fictícia</p>
            <p><Clock3 size={18} aria-hidden="true" /> Seg. a sex., 9h–18h · horário ilustrativo</p>
            {whatsapp
              ? <a className="button whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /> Conversar pelo WhatsApp <span className="sr-only">(abre em nova aba)</span></a>
              : <p><MessageCircle size={18} aria-hidden="true" /> WhatsApp · canal demonstrativo</p>}
          </div>
        </div>
        <ContactForm demo={demo} />
      </Reveal>
    </section>
  );
}
