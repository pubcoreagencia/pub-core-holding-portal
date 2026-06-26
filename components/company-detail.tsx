import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Network } from "lucide-react";
import type { Company } from "@/data/companies";

export function CompanyDetail({ company }: { company: Company }) {
  return (
    <>
      <section className="subpage-hero">
        <div className="grid-noise" /><div className="glow" />
        <div className="container">
          <div className="breadcrumb"><Link href="/">Início</Link> &nbsp;/&nbsp; <Link href="/ecossistema">Ecossistema</Link> &nbsp;/&nbsp; {company.name}</div>
          <h1 className="subpage-title">{company.name}</h1>
          <p className="subpage-lead">{company.description}</p>
          <div className="detail-meta"><span>{company.category}</span><span>Conectada pelo PubMachine</span></div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <span className="eyebrow">Papel no ecossistema</span>
            <h2 style={{ marginTop: 22 }}>Especialização própria.<br /><span className="gold">Inteligência compartilhada.</span></h2>
            <p className="detail-role">{company.role}</p>
            <p className="section-copy">A frente opera conectada às demais empresas da holding, combinando competências, canais e dados consentidos para criar soluções mais completas e ciclos de aprendizado mais rápidos.</p>
            <Link href="/#contato" className="button button-primary" style={{ marginTop: 30 }}>Explorar uma oportunidade <ArrowRight size={14} /></Link>
          </div>
          <aside>
            {company.products && <div className="detail-list-box"><h3>Produtos e capacidades</h3><ul>{company.products.map(item => <li key={item}><Check size={11} style={{ marginRight: 9, color: "var(--champagne)" }} />{item}</li>)}</ul></div>}
            {company.children && <div className="detail-list-box"><h3>Marcas e produtos filhos</h3><ul>{company.children.map(item => <li key={item}>{item}</li>)}</ul></div>}
            {company.revenueModels && <div className="detail-list-box"><h3>Modelos de receita</h3><ul>{company.revenueModels.map(item => <li key={item}>{item}</li>)}</ul></div>}
            <div className="detail-list-box"><h3><Network size={12} style={{ marginRight: 7 }} />Conexão operacional</h3><p style={{ margin: 0, color: "#999ba2", fontSize: 12, lineHeight: 1.7 }}>PubMachine organiza diagnóstico, audiências, campanhas, funis, execução e indicadores desta frente.</p></div>
          </aside>
        </div>
      </section>
      <div className="container" style={{ paddingBottom: 70 }}><Link href="/ecossistema" className="text-link"><ArrowLeft size={14} /> Voltar ao ecossistema</Link></div>
    </>
  );
}
