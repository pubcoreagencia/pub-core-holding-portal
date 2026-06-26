export type Company = {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  products?: string[];
  children?: string[];
  revenueModels?: string[];
  connections?: string[];
};

export const companyCategories = [
  "Todas",
  "Tecnologia e inteligência",
  "Mídia e conteúdo",
  "Produtos e comércio",
  "Imóveis e ativos",
  "Monetização e escala",
  "Operações emergentes",
] as const;

export const companies: Company[] = [
  {
    id: "pub-ia",
    name: "PUB IA",
    category: "Tecnologia e inteligência",
    description: "Agentes, automações e inteligência aplicada para operações que precisam ganhar escala sem perder contexto.",
    role: "Transforma processos, dados e atendimento em sistemas inteligentes que trabalham junto das equipes.",
    products: ["Agentes de IA", "Funis inteligentes", "Automação de atendimento", "Pesquisa de mercado"],
    revenueModels: ["Implantação", "Recorrência", "Projetos sob medida"],
    connections: ["pub-media", "pub-lancamentos", "pub-ecom"],
  },
  {
    id: "pub-3d",
    name: "PUB 3D",
    category: "Produtos e comércio",
    description: "Modelagem, prototipagem e manufatura 3D para transformar ideias, memórias e marcas em objetos.",
    role: "Materializa produtos personalizados, protótipos, miniaturas e peças de alto valor percebido.",
    products: ["Prototipagem", "Miniaturas", "Produtos personalizados", "Esculturas"],
    children: ["Eternize Seu Pinscher"],
    revenueModels: ["Venda unitária", "B2B", "Coleções próprias"],
    connections: ["pub-films", "pub-ecom", "pub-media"],
  },
  {
    id: "pub-records",
    name: "PUB RECORDS",
    category: "Mídia e conteúdo",
    description: "Áudio, música, trilhas e propriedade intelectual sonora para marcas, artistas e experiências.",
    role: "Cria ativos sonoros que ampliam identidade, emoção e possibilidades de licenciamento.",
    products: ["Produção musical", "Sound design", "Branding sonoro", "Licenciamento"],
    children: ["XP Audio Lab", "Estúdio de Trilhas / Sound Design"],
    revenueModels: ["Produção", "Licenciamento", "Royalties"],
    connections: ["pub-films", "pub-media", "pub-lancamentos"],
  },
  {
    id: "pub-films",
    name: "PUB FILMS",
    category: "Mídia e conteúdo",
    description: "Narrativas audiovisuais, campanhas, drone e branded content que fazem marcas serem vistas e lembradas.",
    role: "Converte estratégia em imagem, atenção e biblioteca proprietária de conteúdo.",
    products: ["Campanhas", "Documentários", "Drone", "Conteúdo social"],
    children: ["Búzios de Cima"],
    revenueModels: ["Produção", "Publicidade local", "Conteúdo recorrente"],
    connections: ["pub-imoveis", "pub-media", "pub-records"],
  },
  {
    id: "pub-imoveis",
    name: "PUB IMÓVEIS",
    category: "Imóveis e ativos",
    description: "Captação, conteúdo, gestão e inteligência comercial para ativos imobiliários e hospitalidade.",
    role: "Liga mídia, demanda e operação para valorizar imóveis e construir ativos patrimoniais.",
    products: ["Venda e locação", "Gestão imobiliária", "Conteúdo e leads", "Hospedagem"],
    children: ["Pub BNB"],
    revenueModels: ["Comissão", "Gestão recorrente", "Operação de temporada"],
    connections: ["pub-films", "pub-ia", "pub-media"],
  },
  {
    id: "pubet",
    name: "PUBET",
    category: "Operações emergentes",
    description: "Gaming, conteúdo, tecnologia e parcerias reguladas no universo do entretenimento e iGaming.",
    role: "Desenvolve mídia e experiências responsáveis, sem promessas de ganhos ou incentivo a condutas de risco.",
    products: ["Conteúdo especializado", "Mídia", "Tecnologia", "Parcerias reguladas"],
    revenueModels: ["Publicidade", "Afiliados regulados", "Parcerias"],
    connections: ["pub-media", "pub-ia"],
  },
  {
    id: "pub-food",
    name: "PUB FOOD",
    category: "Produtos e comércio",
    description: "Marcas de alimentos, dark kitchens e experiências de consumo desenhadas para recorrência local.",
    role: "Testa produtos físicos e operações gastronômicas apoiadas por dados, conteúdo e distribuição.",
    products: ["Dark kitchen", "Delivery", "Marcas próprias", "Experiências"],
    revenueModels: ["Venda direta", "Delivery", "Parcerias locais"],
    connections: ["pub-media", "pub-trade", "pub-ia"],
  },
  {
    id: "pub-ecom",
    name: "PUB ECOM",
    category: "Produtos e comércio",
    description: "Infraestrutura comercial e hub que conecta lojas virtuais a fornecedores e oportunidades de catálogo.",
    role: "Reduz atrito entre produto, fornecedor e lojista para acelerar novas operações de e-commerce.",
    products: ["Hub de fornecedores", "Setup de loja", "Curadoria", "Mentoria de e-commerce"],
    revenueModels: ["Mensalidades", "Comissão por pedido", "Intermediação", "Setup"],
    connections: ["pub-trade", "pub-ia", "pub-media"],
  },
  {
    id: "pub-lancamentos",
    name: "PUB LANÇAMENTOS",
    category: "Monetização e escala",
    description: "Ofertas, infoprodutos, mentorias, webinars e comunidades operados de ponta a ponta.",
    role: "Transforma conhecimento e audiência em ofertas estruturadas, mensuráveis e continuamente otimizadas.",
    products: ["Infoprodutos", "Mentorias", "High ticket", "Comunidades"],
    revenueModels: ["Coprodução", "Fee de operação", "Participação em vendas"],
    connections: ["pub-media", "pub-ia", "pub-films"],
  },
  {
    id: "pub-media",
    name: "PUB MEDIA",
    category: "Mídia e conteúdo",
    description: "Portais, SEO, vídeo, newsletters e propriedades digitais que transformam conteúdo em audiência própria.",
    role: "Constrói distribuição proprietária e converte atenção em receita recorrente e inteligência de mercado.",
    products: ["Sites e portais", "SEO", "YouTube", "Newsletters"],
    revenueModels: ["Publicidade", "Afiliados", "Assinaturas", "Conteúdo monetizado"],
    connections: ["pub-lancamentos", "pub-ecom", "pub-films"],
  },
  {
    id: "pub-crypto",
    name: "PUB CRYPTO",
    category: "Imóveis e ativos",
    description: "Educação e inteligência de mercado para organizar sinais, riscos e contexto no universo cripto.",
    role: "Ajuda o usuário a encontrar sinais antecipados e tomar decisões com mais contexto — sem promessa de rentabilidade.",
    products: ["IA PubCrypto", "Análise de narrativas", "Leitura on-chain", "Educação"],
    revenueModels: ["Assinatura", "Relatórios", "Educação"],
    connections: ["pub-ia", "pub-media"],
  },
  {
    id: "pub-trade",
    name: "PUB TRADE",
    category: "Monetização e escala",
    description: "Compra, revenda, intermediação e arbitragem comercial de produtos, estoques e equipamentos.",
    role: "Converte oportunidades comerciais verificadas em liquidez e aprendizado rápido de mercado.",
    products: ["Intermediação", "Revenda", "Oportunidades de estoque", "Equipamentos"],
    revenueModels: ["Margem de revenda", "Comissão", "Intermediação"],
    connections: ["pub-ecom", "pub-media", "pub-food"],
  },
  {
    id: "pub-textil",
    name: "PUB TÊXTIL",
    category: "Produtos e comércio",
    description: "Moda, fabricação e desenvolvimento de marcas — do conceito, coleção e fornecedores até a venda.",
    role: "Usa o ecossistema completo para criar marcas desejáveis com operação comercial real.",
    products: ["PUB.CO", "Coleções", "Uniformes", "Merch"],
    revenueModels: ["Desenvolvimento de marca", "Produção", "Venda direta"],
    connections: ["pub-ecom", "pub-films", "pub-media"],
  },
];

export function getCompany(id: string) {
  return companies.find((company) => company.id === id);
}
