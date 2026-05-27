# ✈️ Portal Viagens

Portal de destinos turísticos desenvolvido com **Next.js 15**, **TypeScript** e **CSS Modules** como projeto de portfólio.

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## 📋 Funcionalidades

- Listagem de destinos turísticos com cards interativos
- Página de detalhes por destino com rota dinâmica (`/destinos/[id]`)
- Navegação entre páginas com `next/link`
- Otimização automática de imagens com `next/image`
- Metadados dinâmicos por página (SEO)
- Pré-renderização estática com `generateStaticParams`
- Layout reutilizável com Header e Footer em todas as páginas
- Página 404 automática para destinos inexistentes

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   ├── destinos/
│   │   ├── [id]/
│   │   │   ├── page.tsx        # Página de detalhes (rota dinâmica)
│   │   │   └── page.module.css
│   │   ├── page.tsx            # Listagem de destinos
│   │   └── page.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                # Home
│   └── page.module.css
├── components/
│   ├── CardDestino/
│   │   ├── index.tsx
│   │   └── CardDestino.module.css
│   ├── Header/
│   │   ├── index.tsx
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── index.tsx
│   │   └── Footer.module.css
│   └── Layout/
│       ├── index.tsx
│       └── Layout.module.css
├── data/
│   └── destinos.ts             # Dados simulados dos destinos
└── types/
    └── destino.ts              # Tipagem TypeScript
```

## 🌍 Destinos Incluídos

| Destino | País |
|---|---|
| Tóquio | Japão |
| Paris | França |
| Nova York | Estados Unidos |
| Machu Picchu | Peru |
| Santorini | Grécia |

## ▶️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/lucassloliveira/portal-viagens-nextjs.git

# Entre na pasta
cd portal-viagens-nextjs

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📚 Conceitos Aplicados

| Conceito | Onde foi aplicado |
|---|---|
| App Router | Estrutura de pastas em `src/app/` |
| Rotas dinâmicas | `app/destinos/[id]/page.tsx` |
| CSS Modules | Todos os componentes e páginas |
| Tipagem com TypeScript | `types/destino.ts` + Props dos componentes |
| `next/image` | Otimização de imagens nos cards e detalhes |
| `next/link` | Navegação no Header e cards |
| `generateStaticParams` | Pré-renderização das páginas de destino |
| `generateMetadata` | SEO dinâmico por página |
| Composição de componentes | `Layout` > `Header` + `main` + `Footer` |

---

Desenvolvido durante curso de Frontend na EBAC 🚀
