import Link from "next/link";
import { ArrowRight, Check, Rocket, TrendingUp, Waypoints } from "lucide-react";
import { audiencePaths } from "@/data/audiencePaths";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = [Rocket, TrendingUp, Waypoints];

export function AudiencePathsSection() {
  return (
    <section className="section" id="para-quem">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Três pontos de partida" title={<>Onde você está <span className="gold">agora?</span></>} copy="O ecossistema se adapta ao seu momento — da primeira oferta à implantação de uma unidade completa." /></Reveal>
        <div className="paths-grid">
          {audiencePaths.map((path, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={path.id} delay={index * .1}>
                <article className="path-card">
                  <span className="path-watermark">{index + 1}</span>
                  <span className="path-number">{path.eyebrow}</span>
                  <div className="path-icon"><Icon size={21} /></div>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                  <ul className="benefits">{path.benefits.map(item => <li key={item}><Check size={13} />{item}</li>)}</ul>
                  <Link className="text-link" href={`#${path.id === "licenciar" ? "licenciamento" : "modelos"}`}>{path.cta} <ArrowRight size={14} /></Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
