# 🔥 DevRoast AI

Uma aplicação full-stack com IA que analisa trechos de código e retorna um feedback **direto, honesto e sem filtro (com um toque de sarcasmo 😈)**.

Desenvolvido com uma stack moderna e utilizando **workflows agênticos**, o projeto explora o uso de IA na construção de aplicações reais.

---

## 🚀 Tecnologias

### 💻 Front-end
- React
- Next.js (Server Components, Suspense)
- TailwindCSS
- tRPC

### ⚙️ Back-end
- Node.js
- PostgreSQL
- Drizzle ORM

### 🤖 IA
- Gemini (via AI SDK da Vercel)
- Sub-agents para automação de tarefas
- Workflows agênticos

### 🧪 Outros
- Playwright (testes automatizados)
- FakerJS (dados mockados)
- Takumi (Open Graph dinâmico)

---

## 🧠 Funcionalidades

- ✍️ Editor de código com syntax highlight  
- 🤖 Análise de código com IA  
- 😈 Feedback sarcástico e direto  
- 🏆 Shame Leaderboard (ranking dos piores códigos 😅)  
- 🔗 Compartilhamento com Open Graph dinâmico  
- ⚡ Performance com Server Components + cache por componente  
- 🧪 Testes automatizados com Playwright  

---

## 🧩 Arquitetura

- Comunicação full-stack com **tRPC**
- Separação clara de responsabilidades
- Uso de **Server Components** para otimização
- Cache inteligente por componente
- Estrutura baseada em **boas práticas de escala**

---

## ⚙️ Como rodar o projeto

### 1️⃣ Clone o repositório

git clone https://github.com/seu-usuario/devroast-ai.git
cd devroast-ai

2️⃣ Instale as dependências
npm install

3️⃣ Configure as variáveis de ambiente
.env
.env.local

DATABASE_URL = ""
GEMINI_API_KEY = ""

4️⃣ Rode o servidor de desenvolvimento
npm run dev