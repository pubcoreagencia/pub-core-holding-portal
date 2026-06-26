import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { EcosystemGrid } from "@/components/ecosystem-grid";
import { EcosystemVisual } from "@/components/ecosystem-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Ecossistema",
  description: "Conheça as empresas e operações conectadas pelo ecossistema Pub Core e pelo PubMachine.",
};

export default function EcosystemPage() {
  return (
    <main>
      <Header />
      <section className="subpage-hero"><div className="grid-noise" /><div className="glow" /><div className="container"><div className="breadcrumb"><Link href="/">Início</Link> &nbsp;/&nbsp; Ecossistema</div><h1 className="subpage-title">Muitas frentes.<br /><span className="gold">Um sistema.</span></h1><p className="subpage-lead">Tecnologia, mídia, comércio, ativos e operações especializadas compartilham inteligência e distribuição para transformar oportunidades em negócios consistentes.</p></div></section>
      <section className="section ecosystem-section"><div className="container"><EcosystemVisual /><EcosystemGrid /></div></section>
      <CTASection />
      <Footer />
    </main>
  );
}
