"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, inView } from "motion";

/** Anima a entrada do bloco quando ele cruza a área visível da página. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const group = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = group.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let animation: ReturnType<typeof animate> | undefined;
    // O conteúdo permanece visível no HTML inicial e em movimento reduzido.
    const stop = inView(element, () => {
      animation = animate(element, { opacity: [0.72, 1], y: [12, 0] }, { duration: 0.5, ease: "easeOut" });
    }, { amount: "some" });
    return () => {
      stop();
      animation?.stop();
    };
  }, []);

  return <div ref={group} className={className}>{children}</div>;
}
