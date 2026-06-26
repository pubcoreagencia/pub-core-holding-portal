# Pub Core Holding Portal

Portal institucional e comercial da Pub Core, desenvolvido em Next.js, React, TypeScript, Tailwind CSS, Framer Motion e Lucide React.

## Rodar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

- `app/`: rotas, layout, metadados e estilos globais
- `components/`: seções e componentes reutilizáveis
- `data/companies.ts`: empresas, produtos, modelos e conexões
- `data/audiencePaths.ts`: três caminhos comerciais de entrada

O formulário funciona como demonstração no frontend e está preparado para integração futura com CRM, e-mail ou automações do PubMachine.
