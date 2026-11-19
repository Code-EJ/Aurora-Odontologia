import Image from "next/image";
import { team } from "@/data/clinic";
import { Reveal } from "@/components/ui/reveal";

/** Exibe a equipe fictícia com retratos complementares ao texto dos cartões. */
export function Team() {
  return (
    <section id="equipe" className="section frame" aria-labelledby="team-title">
      <Reveal className="section-heading split-heading">
        <div><p className="eyebrow"><span /> EQUIPE CONCEITUAL</p><h2 id="team-title">Quem estaria <em>ao seu lado.</em></h2></div>
        <p>Profissionais fictícios e retratos ilustrativos criados para apresentar o conceito da clínica.</p>
      </Reveal>
      <Reveal className="team-grid">
        {team.map(({ name, area, image }) => <article key={name}>
          <div className="team-photo"><Image src={image} alt="" fill sizes="(max-width: 539px) 100vw, 33vw" /></div>
          <h3>{name}</h3>
          <p>{area}</p>
        </article>)}
      </Reveal>
    </section>
  );
}
