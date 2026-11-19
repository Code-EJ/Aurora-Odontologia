import { AlignCenter, Layers, Smile, Sparkles } from "lucide-react";
import { treatments } from "@/data/clinic";
import { Reveal } from "@/components/ui/reveal";

const icons = { alignment: AlignCenter, sparkles: Sparkles, layers: Layers, smile: Smile };

/** Exibe tratamentos e leva o nome escolhido ao formulário pela URL. */
export function Treatments() {
  return (
    <section id="tratamentos" className="section treatments" aria-labelledby="treatments-title">
      <div className="frame">
        <Reveal className="section-heading split-heading">
          <div><p className="eyebrow"><span /> TRATAMENTOS</p><h2 id="treatments-title">Cuidado feito <em>para você.</em></h2></div>
          <p>Da saúde à estética, cada plano começa com uma avaliação e uma conversa sobre o que importa para você.</p>
        </Reveal>
        <Reveal className="treatment-grid">
          {treatments.map(({ name, icon, description }) => {
            const Icon = icons[icon];
            return <article className="treatment-card" key={name}>
              <span className="treatment-icon"><Icon size={25} strokeWidth={1.45} aria-hidden="true" /></span>
              <h3>{name}</h3>
              <p>{description}</p>
              <a className="text-link" href={`?interesse=${encodeURIComponent(name)}#contato`} aria-label={`Tenho interesse em ${name}`}>Tenho interesse</a>
            </article>;
          })}
        </Reveal>
      </div>
    </section>
  );
}
