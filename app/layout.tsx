import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pubcore.com.br"),
  title: {
    default: "Pub Core — Holding de Tecnologia, Mídia, Produtos e Ativos",
    template: "%s — Pub Core",
  },
  description:
    "A Pub Core é uma holding que conecta tecnologia, mídia, produtos, dados e ativos para criar máquinas de receita através do PubMachine e de um ecossistema de empresas digitais e físicas.",
  keywords: [
    "Pub Core", "PubMachine", "holding digital", "venture studio", "tecnologia", "mídia",
    "produtos digitais", "ativos", "IA", "e-commerce", "cripto", "imóveis", "lançamentos",
    "licenciamento", "franquia", "mentoria", "ecossistema digital",
  ],
  openGraph: {
    title: "Pub Core — Ideias viram operações. Operações viram ativos.",
    description: "Um ecossistema criado para plantar audiência, colher receita e semear ativos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
