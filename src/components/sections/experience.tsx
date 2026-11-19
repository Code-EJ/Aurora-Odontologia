import { CalendarDays, ClipboardList, HeartHandshake, ScanLine } from "lucide-react";
import { journey } from "@/data/clinic";
import { Reveal } from "@/components/ui/reveal";

// A ordem acompanha as etapas de src/data/clinic.ts.
const icons = [CalendarDays, ScanLine, ClipboardList, HeartHandshake];

/** Apresenta em ordem a jornada proposta para o paciente. */
export function Experience() {
  return (
    <section className="section experience" aria-labelledby="experience-title">
      <div className="frame">
        <Reveal className="section-heading">
          <p className="eyebrow"><span /> EXPERIÊNCIA DO PACIENTE</p>
          <h2 id="experience-title">Do primeiro olá <em>ao retorno.</em></h2>
        </Reveal>
        <Reveal>
          <ol className="journey-grid">
            {journey.map(({ title, text }, index) => {
              const Icon = icons[index];
              return <li key={title}>
                <span className="journey-step"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /> Etapa {index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>;
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
