# 🚌 Fretadão Na Pista — Maio Amarelo 2026

Blog institucional do Fretadão dedicado ao **Maio Amarelo 2026**, com foco em conscientização sobre segurança no trânsito para motoristas profissionais e colaboradores que usam o carro no dia a dia.

---

## 🧱 Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **React** — com hooks e Client Components onde necessário
- **Neon (PostgreSQL)** — banco de dados via `@neondatabase/serverless`
- **Vercel** — deploy e hospedagem

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx                        # Home — Hero + PodcastSection + Footer
│   ├── layout.tsx                      # Layout global com ThemeProvider
│   ├── api/
│   │   └── ranking/
│   │       └── route.ts                # GET/POST — ranking de participantes
│   ├── missao/
│   │   └── page.tsx                    # Formulário de identificação + validação
│   ├── quiz/
│   │   ├── page.tsx                    # Suspense wrapper
│   │   └── QuizPage.tsx                # Quiz com cronômetro e pontuação
│   ├── ranking/
│   │   ├── page.tsx                    # Suspense wrapper
│   │   └── RankingPage.tsx             # Top 5 geral + resultado do participante
│                      # Página com players de podcast e vídeo
│   └── categoria/
|       ├── podcast/
│       └── page.tsx                    # Página do Podcast
│       ├── seguranca/
│       │   └── page.tsx                # Dados de segurança no trânsito
│
├── components/
│   ├── Navbar.tsx                      # Navbar responsiva com hide on scroll
│   ├── Hero.tsx                        # Hero com imagem, fade e badge animado
│   ├── PodcastSection.tsx              # Banner 25/75 com CTA para o podcast
│   ├── PodcastPlayer.tsx               # Player de áudio reutilizável
│   ├── Footer.tsx                      # Rodapé responsivo com redes sociais
│   ├── ThemeProvider.tsx               # Contexto de tema dark/light
│   ├── ThemeToggle.tsx                 # Botão de alternar tema
│   └── ScrollToTop.tsx                 # Botão flutuante com scroll suave
│
├── data/
│   └── perguntas.ts                    # 10 perguntas do quiz
│
├── lib/
│   └── db.ts                           # Conexão com Neon via serverless
│
├── store/
│   └── quizStore.ts                    # Store em memória (legado, substituído pela API)
│
└── styles/
    ├── input.css                       # Estilos globais + imports Tailwind
    └── themes.css                      # Variáveis CSS de tema dark/light

public/
├── logoBranca.png                      # Logo oficial Fretadão (branca)
├── heroImage.png                       # Imagem de fundo do Hero
├── podcastHost.png                     # Imagem do host do podcast
└── audio/
    ├── ep-01.mp3                       # Episódio 01 do podcast
    └── ep-02.mp3                       # Episódio 02 do podcast
```

---

## 🎨 Design System

| Token            | Dark      | Light     |
| ---------------- | --------- | --------- |
| `--bg-primary`   | `#00245b` | `#f9fafb` |
| `--bg-secondary` | `#003080` | `#f3f4f6` |
| `--bg-hover`     | `#2e2e2e` | `#e5e7eb` |
| `--text-primary` | `#9ca3af` | `#111111` |
| `--text-muted`   | `#ffffff` | `#4b5563` |
| `--text-faint`   | `#6b7280` | `#9ca3af` |
| `--border`       | `#2a2a2a` | `#4b5563` |
| `--accent`       | `#22af9e` | `#00245b` |
| `--accentH`      | `#1a9080` | `#003080` |

O tema é salvo no `localStorage` e aplicado via atributo `data-theme` no `<html>`.

---

## 📄 Páginas

### Home (`/`)

Hero com imagem de fundo, fade bottom, título animado no hover, badge piscando e botão para a missão. PodcastSection com banner clicável. Footer responsivo com logo, categorias, links e redes sociais.

### Missão Maio Amarelo (`/missao`)

Fundo `#f9fafb`, H1 animado alternando entre preto e amarelo. Formulário com nome, e-mail (validação de formato) e select com todas as empresas parceiras. Botão desabilitado até todos os campos estarem preenchidos e válidos. Redireciona para o quiz via query params.

### Quiz (`/quiz`)

10 perguntas com 30 segundos cada. Cronômetro circular que muda de verde → amarelo → vermelho. 500 pontos por acerto. Feedback imediato após cada resposta. Ao finalizar, salva o participante no banco via API e redireciona para o ranking.

### Ranking (`/ranking`)

Exibe o resultado do participante (pontos e acertos) e o top 5 geral buscado da API. Medalhas para os 3 primeiros. Botão para voltar à home.

### Podcast (`/podcast`)

Título animado com ícone de microfone. Múltiplos players usando o componente `PodcastPlayer` — barra de progresso clicável, play/pause, controle de volume. Suporte a embed de vídeo via iframe.

### Prevenção de Acidentes (`/categoria/prevencao`)

8 dicas práticas baseadas nos dados reais. Mensagem final com badge Maio Amarelo.

---

## 🗄️ Banco de Dados

**Neon (PostgreSQL)** via `@neondatabase/serverless`. Tabela `participantes` armazena nome, e-mail, empresa, pontos, acertos e data de cada participante do quiz.

```sql
CREATE TABLE participantes (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE,
  area TEXT NOT NULL,
  pontos INTEGER NOT NULL,
  acertos INTEGER NOT NULL,
  data TEXT NOT NULL,
  telefone TEXT
);
```

Variável de ambiente necessária:

```
DATABASE_URL=postgresql://...
```

---

## 🌐 Deploy

Hospedado na **Vercel** com deploy automático a partir da branch `main`. Variáveis de ambiente configuradas no painel da Vercel.

---

_Iniciativa Fretadão · Maio Amarelo 2026 — No trânsito, toda escolha salva vidas._
