import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import { CalendarDays, MapPin } from "lucide-react";

/** Apresenta a marca, as chamadas para ação e a imagem prioritária da página. */
export function Hero() {
  return (
    <section className="hero frame" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span /> ODONTOLOGIA CONTEMPORÂNEA</p>
        <h1 id="hero-title">Um novo olhar<br /> para o seu <em>sorriso.</em></h1>
        <p className="hero-intro">Odontologia personalizada, com tempo para ouvir, explicar e cuidar de cada detalhe do seu sorriso.</p>
        <div className="actions">
          <a className="button" href="#contato"><CalendarDays size={18} aria-hidden="true" /> Agendar consulta</a>
          <a className="text-link" href="#tratamentos">Conhecer tratamentos</a>
        </div>
      </div>
      <figure className="hero-figure">
        <div className="hero-image">
          <Image src={publicAsset("/images/consultorio.webp")} alt="Consultório odontológico com cadeira clínica, parede de pedra e ampla janela para o jardim" fill loading="eager" fetchPriority="high" sizes="(max-width: 539px) calc(100vw - 40px), (max-width: 850px) calc(100vw - 64px), (max-width: 1300px) 48vw, 635px" />
        </div>
        <figcaption><MapPin size={14} aria-hidden="true" /> Conceito de clínica · São Paulo, SP</figcaption>
      </figure>
    </section>
  );
}
