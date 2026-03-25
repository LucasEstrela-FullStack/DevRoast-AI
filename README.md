<img width="1354" height="650" alt="image" src="https://github.com/user-attachments/assets/9ee1bb10-bbcb-49ed-9e1c-4d01e57f0c99" />

<img width="1349" height="644" alt="image" src="https://github.com/user-attachments/assets/a0db7574-b168-47dc-9269-cdf11aede80f" />

<img width="1354" height="647" alt="image" src="https://github.com/user-attachments/assets/760801a9-7b2c-4920-a2df-19cfd4308151" />


# 🔥 DevRoast AI

> **"Seu código é ruim e a gente te explica o porquê (com muito sarcasmo)."**

O DevRoast é uma plataforma full-stack que utiliza Inteligência Artificial para analisar trechos de código e retornar um feedback técnico, honesto e — opcionalmente — brutalmente sarcástico através do **Roast Mode**.

Desenvolvido para demonstrar o poder das ferramentas agênticas e de uma stack de ponta, o projeto transforma a frustração do code review em entretenimento (ou trauma, dependendo da sua sensibilidade).

---

## 🚀 Stack Tecnológica

O projeto utiliza o que há de mais moderno no ecossistema Web:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React Compiler, Turbopack)
- **API Layer:** [tRPC v11](https://trpc.io/) + TanStack React Query v5
- **Banco de Dados:** [Drizzle ORM](https://orm.drizzle.team/) + PostgreSQL 16
- **IA:** [Vercel AI SDK](https://sdk.vercel.ai/) (Gemini-2.0-Flash)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com `@theme` variables
- **Componentes:** [@base-ui/react](https://base-ui.com/) e Radix Primitives
- **Imagens Dinâmicas:** [Takumi](https://github.com/takumi-rs/takumi) (OG Image generation com Rust core)
- **Tooling:** [Biome 2.4](https://biomejs.dev/) (Linter & Formatter) e TypeScript (Strict)

---

## 🧠 Principais Funcionalidades

- **✍️ Editor de Elite:** Syntax highlighting alimentado por [Shiki](https://shiki.style/) com tema Vesper.
- **😈 Roast Mode:** Alterne entre um review profissional construtivo ou uma "lavagem de roupa suja" sarcástica alimentada por IA.
- **🏆 Leaderboard do Horror:** Um ranking dinâmico dos códigos que receberam as piores notas.
- **🔗 OG Images Dinâmicas:** Ao compartilhar um roast em redes sociais (Discord, Twitter, WhatsApp), um card personalizado é gerado em tempo real com a pontuação e o veredito.
- **⚡ Performance Extrema:** Uso intensivo de Server Components, cache inteligente por componente e streaming com Suspense.

---

## ⚙️ Configuração e Execução

### Pré-requisitos
- Node.js 20+
- Docker Desktop (para o banco de dados)
- Uma API Key do [Google Gemini](https://aistudio.google.com/)

### 1. Preparar o Ambiente
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/seu-usuario/devroast.git
cd devroast
npm install
```

### 2. Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL="postgres://devroast:devroast@localhost:5432/devroast"
GEMINI_API_KEY="sua_chave_aqui"
```

### 3. Banco de Dados (Docker)
Suba o container do PostgreSQL:
```bash
docker compose up -d
```

Execute as migrações e o seed (opcional):
```bash
npm run db:push
npm run db:seed
```

### 4. Rodar o Desenvolvimento
```bash
npm run dev
```

---

## 📂 Estrutura do Projeto

- `app/`: Next.js App Router (Páginas e API tRPC).
- `components/`: UI Primitives e componentes de funcionalidade (use `tv()` para variantes).
- `db/`: Schema do Drizzle e configuração do cliente.
- `trpc/`: Routers e procedimentos tRPC (Type-safe API).
- `lib/`: Utilitários e prompts da IA.
- `specs/`: Definições de funcionalidades escritas antes da implementação.
