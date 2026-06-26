import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function CTASection() {
  return (
    <section className="cta-band section-border">
      <div className="container cta-band-inner">
        <Reveal><h2>Seu próximo negócio pode começar com uma conversa <span className="gold">bem feita.</span></h2></Reveal>
        <Reveal delay={.12}><Link className="button button-primary" href="#contato">Mapear possibilidades <ArrowRight size={15} /></Link></Reveal>
      </div>
    </section>
  );
}
