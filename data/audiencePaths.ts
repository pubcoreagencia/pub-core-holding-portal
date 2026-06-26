export type AudiencePath = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
};

export const audiencePaths: AudiencePath[] = [
  {
    id: "comecar",
    eyebrow: "01 · Construção",
    title: "Quero começar do zero",
    description: "Para transformar repertório, vontade e oportunidade em uma operação digital ou físico-digital com método e direção.",
    benefits: ["Validação de nicho e oferta", "Primeiro funil e fonte de receita", "PubMachine e playbooks", "Operação preparada para crescer"],
    cta: "Ver caminho para começar",
  },
  {
    id: "escalar",
    eyebrow: "02 · Expansão",
    title: "Já tenho uma empresa",
    description: "Para conectar tecnologia, mídia, dados consentidos e novos produtos a uma operação que já existe.",
    benefits: ["Diagnóstico do negócio", "Aquisição e automação com IA", "CRM, funis e novos produtos", "Integração com o ecossistema"],
    cta: "Ver caminho para escalar",
  },
  {
    id: "licenciar",
    eyebrow: "03 · Replicação",
    title: "Quero licenciar ou franquear",
    description: "Para implantar o modelo Pub Core em uma região, nicho, grupo empresarial ou estrutura própria.",
    benefits: ["Metodologia e PubMachine", "Playbooks e treinamento", "Modelo operacional replicável", "Suporte estratégico de implantação"],
    cta: "Ver modelo de licenciamento",
  },
];
