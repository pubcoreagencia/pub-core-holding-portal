import Link from "next/link";

export default function NotFound() {
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 30 }}><div><span className="eyebrow">404</span><h1 className="section-title">Essa operação ainda<br /><span className="gold">não existe.</span></h1><p className="section-copy" style={{ marginInline: "auto" }}>Volte ao ecossistema para encontrar uma frente ativa da Pub Core.</p><Link href="/" className="button button-primary" style={{ marginTop: 28 }}>Voltar ao início</Link></div></main>;
}
