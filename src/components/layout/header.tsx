"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { navigation } from "@/data/clinic";
import { Brand } from "./brand";

/** Adapta a navegação à largura da tela e muda a aparência após rolar. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled} onKeyDown={(event) => {
      // Devolve o foco ao controle que abriu o menu antes de ocultar seus links.
      if (open && event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
      <div className="frame header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button header-cta" href="#contato"><CalendarDays size={16} aria-hidden="true" /> Agendar consulta</a>
        <button ref={toggle} type="button" className="icon-button menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="menu-mobile" className="mobile-nav frame" aria-label="Navegação móvel" hidden={!open}>
        {[...navigation, { label: "Agendar consulta", href: "#contato" }].map(({ label, href }) =>
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        )}
      </nav>
    </header>
  );
}
