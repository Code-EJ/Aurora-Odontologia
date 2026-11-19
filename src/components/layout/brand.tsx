import { Sunrise } from "lucide-react";

/** Marca compartilhada que também serve de link para o início da página. */
export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Aurora Odontologia, início">
      <span className="brand-mark"><Sunrise size={24} strokeWidth={1.35} aria-hidden="true" /></span>
      <span><span className="brand-name">aurora</span>{" "}<span className="brand-caption">ODONTOLOGIA</span></span>
    </a>
  );
}
