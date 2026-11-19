import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import { HeartHandshake, ScanLine, Sprout } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const details = [
  { icon: HeartHandshake, title: "Escuta em cada consulta", text: "Tempo para perguntas e decisões compartilhadas." },
  { icon: ScanLine, title: "Planejamento cuidadoso", text: "Tecnologia a serviço de escolhas bem explicadas." },
  { icon: Sprout, title: "Acolhimento desde a chegada", text: "Um espaço pensado para deixar a visita mais tranquila." },
];

/** Apresenta a história conceitual da clínica e os princípios de atendimento. */
export function About() {
  return (
    <section id="clinica" className="section frame" aria-labelledby="about-title">
      <Reveal className="about-grid">
        <figure className="about-image">
          <Image src={publicAsset("/images/recepcao.webp")} alt="Recepção conceitual com balcão de madeira, poltronas verdes e iluminação indireta" fill sizes="(max-width: 850px) 100vw, 48vw" />
        </figure>
        <div>
          <p className="eyebrow"><span /> A CLÍNICA</p>
          <h2 id="about-title">Cuidado que começa <em>pela escuta.</em></h2>
          <p>A Aurora nasceu como uma clínica-conceito para aproximar a odontologia de quem se senta na cadeira. Da primeira conversa ao acompanhamento, a proposta é que você entenda cada etapa e participe das decisões sobre o seu sorriso.</p>
          <ul className="detail-list">
            {details.map(({ icon: Icon, title, text }) => <li key={title}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><div><strong>{title}</strong><p>{text}</p></div></li>)}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
