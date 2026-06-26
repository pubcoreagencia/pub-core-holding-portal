import { ShieldCheck } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section className="section section-border" id="contato">
      <div className="container contact-layout">
        <Reveal>
          <span className="eyebrow">Contato e aplicação</span>
          <h2 className="section-title">Vamos entender<br />o seu <span className="gold">momento.</span></h2>
          <p className="section-copy">Conte onde você está e aonde quer chegar. A conversa inicial serve para mapear aderência, possibilidades e o melhor próximo passo.</p>
          <div className="contact-note"><ShieldCheck size={18} /><span>Seus dados serão usados apenas para responder ao seu contato e poderão ser integrados a um CRM com consentimento.</span></div>
        </Reveal>
        <Reveal delay={.12}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
