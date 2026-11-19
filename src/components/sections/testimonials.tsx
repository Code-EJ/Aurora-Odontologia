"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/clinic";
import { Reveal } from "@/components/ui/reveal";

/** Permite percorrer os relatos fictícios sem reprodução automática. */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const { quote, name, context } = testimonials[index];
  const count = testimonials.length;

  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <Reveal className="frame quote-layout">
        <div className="section-heading">
          <p className="eyebrow"><span /> DEPOIMENTOS ILUSTRATIVOS</p>
          <h2 id="testimonials-title">Histórias de <em>quem chega.</em></h2>
          <p>Relatos fictícios sobre a experiência imaginada para a Aurora.</p>
        </div>
        <div className="quote-card" role="group" aria-label="Carrossel de depoimentos">
          <Quote size={30} strokeWidth={1.3} aria-hidden="true" />
          <div className="quote-body" aria-live="polite" aria-atomic="true">
            <figure key={index}>
              <blockquote>“{quote}”</blockquote>
              <figcaption><strong>{name}</strong> <span>· {context}</span></figcaption>
            </figure>
          </div>
          <div className="quote-controls">
            <span aria-label={`Depoimento ${index + 1} de ${count}`}>{index + 1} / {count}</span>
            <button className="icon-button" type="button" aria-label="Depoimento anterior" onClick={() => setIndex((index + count - 1) % count)}><ChevronLeft size={19} aria-hidden="true" /></button>
            <button className="icon-button" type="button" aria-label="Próximo depoimento" onClick={() => setIndex((index + 1) % count)}><ChevronRight size={19} aria-hidden="true" /></button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
