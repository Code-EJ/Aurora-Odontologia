import { connection } from "next/server";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Treatments } from "@/components/sections/treatments";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { getDeliveryConfig, getWhatsAppUrl } from "@/lib/contact-config";

/** Compõe a landing page e fornece a configuração pública ao bloco de contato. */
export default async function Home() {
  // A configuração de contato deve ser lida no ambiente que recebe a requisição.
  const pages = process.env.NEXT_PUBLIC_PAGES_DEMO === "true";
  if (!pages) await connection();

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div id="inicio" />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Treatments />
        <About />
        <Experience />
        <Team />
        <Testimonials />
        <Faq />
        <Contact demo={pages || !getDeliveryConfig()} whatsapp={getWhatsAppUrl()} />
      </main>
      <Footer />
    </>
  );
}
