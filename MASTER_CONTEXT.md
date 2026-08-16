# PUB HOLDING — MASTER CONTEXT

**Documento:** Master Context Geral do Ecossistema PUB  
**Função:** contexto institucional, empresarial, técnico e arquitetural para agentes de IA, desenvolvedores e operadores.  
**Status:** vivo / evolutivo  
**Fonte de verdade:** código e configuração atuais > banco/migrations > Git > documentação > inferência.  
**Regra:** este documento contextualiza o ecossistema; cada repositório pode possuir seu próprio SSOT operacional.

---

## 0. MISSÃO DESTE DOCUMENTO

Este arquivo existe para impedir que novos desenvolvedores ou agentes reconstruam soluções que já existem, confundam projetos distintos, tratem ideias como produtos implementados ou assumam tecnologias sem evidência.

O ecossistema PUB deve ser compreendido como um conjunto de empresas, marcas, produtos, ativos digitais, aplicações, automações, dados e infraestrutura que podem compartilhar capacidades, mas **não devem ser considerados integrados automaticamente**.

Sempre distinguir:

- **CONFIRMADO PELO CÓDIGO** — implementação/configuração atual comprova.
- **DOCUMENTADO** — documentação explícita comprova, mas o código ainda não foi validado.
- **INFERÊNCIA** — hipótese baseada em evidência parcial.
- **NÃO IDENTIFICADO** — não há evidência suficiente.
- **CONFLITO** — fontes diferentes divergem.

Nunca transformar inferência em fato.

---

# 1. VISÃO EXECUTIVA DA PUB

A PUB é concebida como uma holding/ecossistema empresarial orientado a construir, operar, empacotar, vender e replicar negócios e produtos digitais.

A visão estratégica recorrente nos materiais existentes é:

```text
PUB HOLDING
    │
    ├── GOVERNANÇA / CAPITAL / ESTRATÉGIA
    │
    ├── CORE / PLATFORM
    │      ├── PUB CORE
    │      ├── PUB MACHINE
    │      └── PUB NEURAL OS
    │
    ├── GROWTH / ACQUISITION / INTELLIGENCE
    │      ├── PUB LEADS
    │      ├── PUB GROWTH AI
    │      └── PUB IA / AGENCY
    │
    └── VERTICAIS / MARCAS / ATIVOS
           ├── PUB FOOD
           ├── PUB 3D
           ├── PUB FILMS
           ├── PUB BEATS / RECORDS
           └── outros projetos e marcas
```

**Importante:** o diagrama acima representa a visão/ecossistema documentado e não implica que todos os módulos estejam tecnicamente integrados hoje.

---

# 2. PRINCÍPIO ARQUITETURAL CENTRAL

A PUB deve evitar construir cada marca como um silo quando uma capacidade pode ser compartilhada.

Capacidades potencialmente compartilháveis:

- identidade e autenticação;
- usuários e organizações;
- CRM e leads;
- billing/pagamentos;
- dados;
- IA;
- automação;
- analytics;
- comunicação;
- mídia;
- observabilidade;
- infraestrutura;
- agentes;
- memória institucional/RAG.

Porém, **compartilhamento deve ser comprovado ou explicitamente projetado**. Não criar dependências entre projetos apenas por semelhança de propósito.

---

# 3. REPOSITÓRIOS CONHECIDOS

Escopo atual informado para auditoria do ecossistema:

| Repositório | Função/contexto atual | Estado de evidência |
|---|---|---|
| `pubcoreagencia/pubcore` | aplicação PUB Core / plataforma | CONFIRMADO como repo; arquitetura deve ser lida do código atual |
| `pubcoreagencia/pub-leads` | SaaS de prospecção, enriquecimento e CRM/pipeline | CONFIRMADO PELO CÓDIGO/DOCUMENTAÇÃO |
| `pubcoreagencia/pubgrowth-ai-evolution` | aplicação Growth/AI | CONFIRMADO como aplicação e documentação própria |
| `pubcoreagencia/pubfood-control-growth` | vertical PUB Food / controle e growth | CONFIRMADO como aplicação |
| `pubcoreagencia/pubgrowthai` | aplicação Growth AI | CONFIRMADO como aplicação; possível relação/duplicidade com evolution precisa ser validada |
| `pubcoreagencia/pub-core-holding-portal` | portal institucional/comercial da holding | CONFIRMADO PELO CÓDIGO |
| `pubcoreagencia/pub3d-landing` | presença digital PUB 3D | CONFIRMADO como repo; finalidade detalhada depende do código |
| `pubcoreagencia/PUB-BEATS` | projeto PUB Beats | CONFIRMADO como repo; conteúdo deve ser validado |
| `pubcoreagencia/pubcoreagencia.github.io` | presença web institucional | CONFIRMADO como repo |
| `pubcoreagencia/pub-agencia-landing` | presença digital da agência | CONFIRMADO como repo |
| `lofinnabis-collab/streammaster-pro` | projeto externo/relacionado informado pela organização | NÃO IDENTIFICADO até acesso ao conteúdo |
| `pubcoreagencia/neural-os` | PUB Neural OS | CONFIRMADO como repo privado TypeScript; arquitetura detalhada depende do código |
| `pubcoreagencia/pub-films-landing` | presença digital PUB Films | CONFIRMADO como repo |
| `pubcoreagencia/PUB-CORE` | repositório separado de `pubcore` | CONFIRMADO como repo; estado informado anteriormente: vazio |

Não assumir que `pubcore` e `PUB-CORE` são o mesmo sistema.

---

# 4. PUB CORE HOLDING PORTAL

Repositório:
`pubcoreagencia/pub-core-holding-portal`

O README atual descreve o projeto como portal institucional e comercial da Pub Core. A estrutura declarada inclui `app/`, `components/`, `data/companies.ts` e `data/audiencePaths.ts`. O formulário atual é demonstração frontend e está preparado para futura integração com CRM/e-mail/automação do PubMachine.

Stack confirmada pelo `package.json`:

- Next.js 15;
- React 19;
- TypeScript 5.7;
- Tailwind CSS 3;
- Framer Motion;
- Lucide React.

Não declarar Supabase, ORM, banco ou autenticação para este portal sem evidência atual.

Este repositório é o **local deste Master Context global**.

---

# 5. PUB LEADS — SSOT OPERACIONAL EXISTENTE

Repositório:
`pubcoreagencia/pub-leads`

O próprio repositório possui `MASTER_CONTEXT.md` declarado como Single Source of Truth para engenharia.

## Finalidade

Plataforma SaaS B2B de:

- prospecção;
- qualificação;
- enriquecimento;
- gestão de leads;
- CRM/pipeline;
- automação de abordagem.

## Arquitetura de dados confirmada/documentada

### Supabase / PostgreSQL

Responsabilidades:

- autenticação;
- `auth.users`;
- assinaturas;
- planos;
- billing;
- contexto de sessão/middleware.

### Turso / libSQL

Responsabilidades:

- dados volumosos/transacionais de prospecção;
- leads;
- notas;
- mensagens;
- logs;
- scraping;
- enriquecimento;
- funis;
- eventos.

Tabelas documentadas incluem:

- `leads`
- `lead_notes`
- `lead_messages`
- `search_logs`
- `apify_runs`
- `apify_sources`
- `scraping_sessions`
- `scraping_session_results`
- `cnpj_establishments`
- `message_funnels`
- `message_funnel_steps`
- `lead_funnel_states`
- `lead_message_events`

### Regra crítica de multi-tenant

Como Turso não fornece RLS nativo equivalente ao Supabase, queries precisam filtrar explicitamente por `user_id`.

```ts
// ERRADO
SELECT * FROM leads WHERE id = ?

// CORRETO
SELECT * FROM leads WHERE user_id = ? AND id = ?
```

### Pipeline

```text
PROSPECÇÃO
   ↓
APIFY / GOOGLE MAPS / PLACES / OSM / CNPJ
   ↓
ENRIQUECIMENTO WEB
   ↓
WhatsApp + Instagram + Email + Website
   ↓
QUALIFICAÇÃO
   ↓
DEDUPLICAÇÃO
   ↓
TURSO
   ↓
CRM / FUNIL
   ↓
WHATSAPP / AUTOMAÇÃO
```

A documentação do próprio repo registra integração Evolution API/WhatsApp para criação de instâncias, QR Code, status e envio de mensagens.

Roadmap documentado inclui validação ativa de WhatsApp, disparo em lote com delays, webhooks de resposta e paginação por cursor.

**Não reimplementar essas capacidades sem primeiro verificar o código existente.**

---

# 6. PUB GROWTH AI

Existem pelo menos dois repositórios relacionados ao conceito Growth AI:

- `pubgrowthai`
- `pubgrowth-ai-evolution`

Ambos possuem características de aplicações modernas em React/TanStack/Vite e documentação própria foi identificada no repositório `pubgrowth-ai-evolution`.

Isso deve ser tratado como:

**POSSÍVEL DUPLICIDADE / EVOLUÇÃO / FORK — NECESSITA COMPARAÇÃO DE CÓDIGO E GIT.**

Nunca escolher um deles como "o atual" apenas pelo nome.

A análise deve comparar:

- commits;
- funcionalidades;
- banco;
- autenticação;
- rotas;
- componentes;
- integrações;
- documentação;
- deployment;
- atividade recente.

---

# 7. PUB FOOD

Repositório:
`pubcoreagencia/pubfood-control-growth`

Representa uma aplicação/vertical associada à PUB Food.

Stack observada inclui:

- TanStack Start;
- React;
- TypeScript;
- Vite;
- TanStack Router;
- TanStack Query;
- Tailwind;
- Radix;
- React Hook Form;
- Recharts.

O repositório contém ativos visuais e componentes específicos de Food.

A relação com sistemas compartilhados da PUB deve ser validada antes de qualquer integração.

---

# 8. PUB NEURAL OS

Repositório:
`pubcoreagencia/neural-os`

Repo privado, TypeScript, branch principal `main`, identificado como projeto recente.

O conceito Neural OS aparece na estratégia PUB como camada de inteligência/orquestração/agentes.

Até que o código confirme suas responsabilidades, tratar como:

**CONFIRMADO: existe o repositório.**

**NÃO ASSUMIR: arquitetura, integrações ou grau de produção.**

---

# 9. PUB MACHINE

PubMachine é um conceito/produto central do ecossistema PUB descrito nos materiais existentes como camada operacional/comercial para campanhas, CRM, analytics, checkout/orçamento e gestão de mídia.

Funções previstas/documentadas incluem:

- campanhas;
- orçamento;
- carteira/wallet;
- contingência/reserva;
- acompanhamento de impressões;
- visualizações;
- conversões;
- analytics;
- CRM;
- integração com dados sociais/Meta/Instagram.

**Estado técnico deve ser confirmado pelo repositório correspondente.** Não assumir que toda funcionalidade conceitual já está implementada.

---

# 10. PUB IA / AGENCY

A estratégia PUB inclui uma camada de IA/agência responsável por automação, agentes, geração, atendimento, conteúdo, marketing e operações.

Materiais anteriores descrevem modelos comerciais com setup + recorrência e utilização de IA como infraestrutura operacional.

Não confundir:

- PUB IA como marca/serviço;
- Growth AI como produto/software;
- Neural OS como camada de orquestração;
- modelos locais/LLMs como infraestrutura de IA.

A relação técnica entre eles precisa ser comprovada pelo código.

---

# 11. OUTRAS MARCAS / ATIVOS DO ECOSSISTEMA

Marcas e projetos mencionados no contexto empresarial PUB incluem, entre outros:

- PUB Core;
- PUB 3D;
- PUB Leads;
- PUB IA / Agência PUB IA;
- PUB Records;
- PUB Films;
- PUB Food;
- PUB Beats;
- PUB Ecom;
- PUB Trade;
- PUB BNB;
- PUB Textil;
- PUB Launches;
- PUB Academy;
- PUB Games Studio;
- PUB Crypto;
- PUB Media;
- PUB Start;
- PUB Machine;
- PUB Neural OS / Orchestrator.

A lista acima é **contexto empresarial**, não prova de que todos possuam software ou repositório ativo.

Para cada marca futura, criar uma classificação:

```text
MARCA
├── Empresa
├── Produto
├── Software
├── Landing
├── Operação
├── Projeto no papel
├── Ativo
└── Estado desconhecido
```

---

# 12. MODELO DE NEGÓCIO

A tese recorrente do ecossistema é construir estruturas replicáveis, modelos de negócio e produtos que possam ser vendidos, operados, licenciados ou transformados em franquias/business-in-a-box.

Fontes potenciais de valor:

- setup;
- recorrência;
- software/SaaS;
- serviços;
- operação;
- franquias;
- participação societária;
- licenciamento;
- mídia;
- dados;
- automação;
- produtos verticais.

O software deve ser tratado como ativo estratégico da holding quando efetivamente desenvolvido/proprietário, mas propriedade intelectual e titularidade jurídica não devem ser inferidas apenas pela existência do GitHub.

---

# 13. INFRAESTRUTURA CONHECIDA

Tecnologias/serviços encontrados ou recorrentes no ecossistema:

- GitHub;
- Vercel;
- Cloudflare;
- Supabase;
- PostgreSQL;
- Turso/libSQL;
- Evolution API;
- Apify;
- Meta/Instagram;
- APIs de pagamento;
- OpenRouter;
- Ollama;
- modelos locais;
- Docker;
- GitHub Actions.

**Regra:** presença em documentação não significa utilização atual. Confirmar no repo antes de alterar ou criar integrações.

---

# 14. IA E AUTOMAÇÃO

A estratégia técnica PUB inclui utilização de:

- agentes;
- LLMs;
- OpenClaw;
- modelos locais;
- automações;
- cron/jobs;
- RAG;
- memória institucional;
- WhatsApp;
- Instagram;
- prospecção automática;
- qualificação;
- geração de conteúdo.

Configurações locais já consideradas em contexto incluem máquinas com AMD Ryzen 5 5500, 16 GB RAM, RX 6600 e SSD 1 TB, além de outras máquinas mais fortes.

O ambiente de automação local não deve ser confundido com infraestrutura de produção dos SaaS.

---

# 15. MEMÓRIA INSTITUCIONAL / RAG

A PUB possui uma visão de memória institucional que pode consolidar:

```text
GitHub
   +
Documentos
   +
CRM
   +
Banco interno
   +
WhatsApp
   +
Instagram
   +
Logs
   +
Conhecimento operacional
   ↓
MEMÓRIA PUB
   ↓
AGENTES / RAG / AUTOMAÇÃO
```

O objetivo é permitir que agentes entendam contexto empresarial e técnico sem depender de um único prompt gigantesco.

O Master Context global deve ser o índice/contexto de alto nível; detalhes operacionais devem permanecer próximos do projeto que os implementa.

---

# 16. REGRAS DE DESENVOLVIMENTO

## Antes de codar

1. Identificar o repositório correto.
2. Ler README e documentos de contexto.
3. Inspecionar `package.json` e lockfile.
4. Entender arquitetura existente.
5. Identificar banco e migrations.
6. Identificar autenticação.
7. Identificar integrações.
8. Verificar Git e branch.
9. Procurar funcionalidade já existente.
10. Só então planejar implementação.

## Nunca

- reconstruir algo que já existe sem verificar;
- criar segunda implementação de uma função existente;
- trocar banco por preferência pessoal;
- introduzir framework novo sem necessidade;
- remover dependência sem análise;
- alterar migrations sem entender produção;
- assumir que documentação está atualizada;
- assumir que dois projetos com nomes semelhantes são o mesmo produto.

---

# 17. REGRAS DE BANCO

Antes de modificar dados ou schema:

- identificar banco real;
- ler schema;
- ler migrations;
- identificar foreign keys;
- identificar RLS/policies;
- entender tenancy;
- verificar ambiente local/staging/produção;
- verificar scripts de migração.

No PubLeads, a regra `user_id` no Turso é crítica.

Nunca introduzir query sem escopo de tenant quando a arquitetura exigir isolamento manual.

---

# 18. SEGURANÇA

Nunca expor:

- API keys;
- tokens;
- senhas;
- secrets;
- private keys;
- credenciais;
- cookies;
- certificados.

Ao documentar `.env`, registrar somente nomes das variáveis e presença/ausência.

Exemplo:

```text
SUPABASE_URL: PRESENTE
SUPABASE_SERVICE_ROLE_KEY: PRESENTE — VALOR OMITIDO
```

---

# 19. GIT / WORKFLOW

Git é fonte importante de contexto.

Antes de alterar um projeto:

```bash
git status
git branch
git log -n 10 --oneline
git remote -v
git log --oneline --decorate --graph -n 20
```

Nunca executar automaticamente:

- reset;
- checkout destrutivo;
- force push;
- merge;
- rebase destrutivo;
- limpeza de arquivos;
- remoção de código.

Mudanças devem ser pequenas, rastreáveis e coerentes com a arquitetura do repo.

---

# 20. ESTADOS DE PROJETO

Usar somente estas classificações:

- ATIVO
- EM DESENVOLVIMENTO
- EXPERIMENTAL
- LEGADO
- ABANDONADO
- INDETERMINADO

A classificação deve considerar atividade Git, código, deploy, documentação e uso aparente.

---

# 21. DUPLICIDADES E CONFLITOS

Sempre procurar por:

- duas aplicações fazendo a mesma coisa;
- duas versões do mesmo produto;
- dois bancos para o mesmo domínio;
- duas autenticações;
- APIs duplicadas;
- componentes duplicados;
- documentos conflitantes;
- versões antigas ainda publicadas.

Não corrigir automaticamente.

Registrar:

```text
POSSÍVEL DUPLICIDADE
```

ou

```text
CONFLITO ENCONTRADO
```

---

# 22. HIERARQUIA DE VERDADE

Quando fontes divergirem:

```text
1. CÓDIGO ATUAL
2. CONFIGURAÇÃO ATUAL
3. BANCO / MIGRATIONS
4. GIT
5. DOCUMENTAÇÃO
6. INFERÊNCIA
```

Exemplo:

```text
Documento diz X.
Código implementa Y.

Resultado:
CONFLITO ENCONTRADO.

Não assumir X.
Não alterar Y sem diretriz.
```

---

# 23. MASTER MAP DO ECOSSISTEMA

```text
                         PUB HOLDING
                              │
              ┌───────────────┼────────────────┐
              │               │                │
              ▼               ▼                ▼
          GOVERNANÇA        CORE            VERTICAIS
              │               │                │
              │        ┌──────┼──────┐         ├── FOOD
              │        │      │      │         ├── 3D
              │        ▼      ▼      ▼         ├── FILMS
              │     PUBCORE MACHINE NEURAL     ├── BEATS
              │               OS               └── OUTROS
              │
              ▼
          GROWTH / AI
              │
       ┌──────┼────────┐
       ▼      ▼        ▼
    LEADS   GROWTH    PUB IA
              AI
       │
       ▼
  PROSPECÇÃO / CRM
       │
       ├── APIFY
       ├── ENRICHMENT
       ├── CNPJ
       ├── WHATSAPP
       ├── INSTAGRAM
       └── EMAIL
```

Este mapa é conceitual. Relações técnicas só devem ser adicionadas ao mapa como **CONFIRMADO PELO CÓDIGO** após evidência.

---

# 24. COMO UM NOVO DEV/AGENTE DEVE OPERAR

Ao receber uma nova tarefa:

### PASSO 1 — CONTEXTUALIZAR

Perguntar/descobrir:

- qual empresa?
- qual produto?
- qual repositório?
- qual ambiente?
- qual objetivo?

### PASSO 2 — INSPECIONAR

Localizar código e documentação existente.

### PASSO 3 — VALIDAR

Determinar se a funcionalidade já existe.

### PASSO 4 — PLANEJAR

Explicar arquivos, módulos, banco e integrações afetados.

### PASSO 5 — IMPLEMENTAR

Somente após autorização quando houver risco estrutural.

### PASSO 6 — VALIDAR

Executar testes/typecheck/build apropriados.

### PASSO 7 — DOCUMENTAR

Atualizar contexto específico do projeto quando necessário.

---

# 25. HERMES / AGENTES DE IA

Hermes deve funcionar como:

- engenheiro de automação;
- arquiteto de software;
- copiloto técnico;
- analista de infraestrutura;
- guardião de consistência arquitetural.

Antes de desenvolver, Hermes deve entrar em **DISCOVERY**.

No modo Discovery:

- somente leitura;
- sem alteração de arquivos;
- sem instalação;
- sem migrations;
- sem alteração de banco;
- sem deploy;
- sem commit/push.

O objetivo é produzir uma visão real do ambiente antes de implementar.

---

# 26. RELAÇÃO ENTRE MASTER CONTEXTS

Este arquivo é o **MASTER CONTEXT GLOBAL**.

Não substitui documentos específicos.

Estrutura recomendada:

```text
PUB HOLDING MASTER CONTEXT
        │
        ├── PUBCORE SSOT
        ├── PUBLEADS SSOT
        ├── GROWTH AI SSOT
        ├── PUB FOOD SSOT
        ├── NEURAL OS SSOT
        └── outros SSOTs
```

O agente deve consultar o contexto específico do repositório antes de modificar aquele sistema.

---

# 27. DOCUMENTAÇÃO FUTURA

Este documento deve evoluir conforme novos fatos forem confirmados.

Quando uma implementação mudar a arquitetura:

1. atualizar o SSOT específico;
2. atualizar este Master Context se a mudança afetar o ecossistema;
3. registrar a mudança no Git;
4. não apagar contexto histórico importante;
5. manter distinção entre planejado e implementado.

---

# 28. CHECKLIST DE SINCRONIZAÇÃO

Antes de considerar o ecossistema sincronizado:

- [ ] todos os repositórios acessíveis foram auditados;
- [ ] cada repo possui finalidade definida;
- [ ] stacks foram confirmadas;
- [ ] bancos foram confirmados;
- [ ] autenticação foi identificada;
- [ ] integrações foram identificadas;
- [ ] deploy foi identificado;
- [ ] duplicidades foram registradas;
- [ ] projetos Growth foram comparados;
- [ ] `pubcore` e `PUB-CORE` foram diferenciados;
- [ ] `streammaster-pro` foi revisado ou marcado como inacessível;
- [ ] documentação conflitante foi registrada;
- [ ] contexto empresarial foi separado de evidência técnica.

---

# 29. REGRA FINAL

A PUB possui uma visão grande, mas o código é a realidade operacional.

Não construir baseado apenas em nomes.

Não construir baseado apenas em ideias.

Não construir baseado apenas em documentação antiga.

**Descobrir → verificar → mapear → planejar → implementar → validar → documentar.**

O objetivo é preservar o patrimônio tecnológico existente, acelerar desenvolvimento e transformar os projetos PUB em um ecossistema coerente sem criar complexidade desnecessária.

---

**Última revisão:** 2026-08-16  
**Local:** `pubcoreagencia/pub-core-holding-portal/MASTER_CONTEXT.md`  
**Status:** versão inicial consolidada; deve continuar evoluindo com a auditoria dos repositórios.
