import { Instagram, Mail, MapPin } from "lucide-react";
import { navigation, projectAuthor } from "@/data/clinic";
import { Brand } from "./brand";

/** Reúne caminhos de navegação, contatos conceituais e a autoria do projeto. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>Odontologia contemporânea.<br />Cuidado em cada detalhe.</p>
          </div>
          <nav aria-label="Links do rodapé">
            <h2>Explore</h2>
            {navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
            <a href="#contato">Contato</a>
          </nav>
          <div className="footer-contact">
            <h2>Contato demonstrativo</h2>
            <p><MapPin size={16} aria-hidden="true" /> São Paulo, SP · localização fictícia</p>
            <p><Mail size={16} aria-hidden="true" /> contato@aurora.example</p>
            <p><Instagram size={16} aria-hidden="true" /> Instagram · perfil ilustrativo</p>
          </div>
        </div>
        <div className="footer-base">
          <span>© Aurora Odontologia · Clínica fictícia</span>
          <span>Desenvolvido por <a className="footer-credit" href={projectAuthor.profileUrl}>{projectAuthor.name}</a></span>
        </div>
      </div>
    </footer>
  );
}
