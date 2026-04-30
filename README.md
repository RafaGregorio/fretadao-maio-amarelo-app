# 🚌 Fretadão Na Pista — Maio Amarelo 2026

Blog institucional do Fretadão dedicado ao **Maio Amarelo 2026**, com foco em conscientização sobre segurança no trânsito para motoristas profissionais e colaboradores que usam o carro no dia a dia.

---

## 🧱 Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **React** — com hooks e Client Components onde necessário
- **Vercel** — deploy e hospedagem

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx                  # Home — Hero + Podcast + Footer
│   ├── missao/
│   │   └── page.tsx              # Página Missão Maio Amarelo (formulário)
│   ├── podcast/
│   │   └── page.tsx              # Página Podcast Na Pista
│   └── categoria/
│       ├── seguranca/
│       │   └── page.tsx          # Categoria: Segurança no Trânsito
│       ├── prevencao/
│       │   └── page.tsx          # Categoria: Prevenção de Acidentes
│       └── conscientizacao/
│           └── page.tsx          # Categoria: Conscientização
│
├── components/
│   ├── Navbar.tsx                # Barra de navegação com hide on scroll
│   ├── Hero.tsx                  # Seção principal com imagem de fundo
│   ├── PodcastSection.tsx        # Banner do Podcast Na Pista
│   ├── Footer.tsx                # Rodapé com links e redes sociais
│   ├── ThemeProvider.tsx         # Contexto de tema dark/light
│   ├── ThemeToggle.tsx           # Botão de alternar tema
│   └── ScrollToTop.tsx           # Botão flutuante de voltar ao topo
│
├── styles/
│   ├── globals.css               # Estilos globais
│   └── themes.css                # Variáveis CSS de tema dark/light
│
└── types/
    └── video.d.ts                # Declaração de tipos para arquivos .mp4

public/
├── imagem_fretadao.png           # Imagem de fundo do Hero
└── podcast_host.png              # Imagem do host do podcast
```

---

## 🎨 Design System

| Token            | Dark      | Light     |
| ---------------- | --------- | --------- |
| `--bg-primary`   | `#1a1a1a` | `#ffffff` |
| `--bg-secondary` | `#242424` | `#f3f4f6` |
| `--bg-hover`     | `#2e2e2e` | `#e5e7eb` |
| `--text-primary` | `#ffffff` | `#111111` |
| `--text-muted`   | `#9ca3af` | `#4b5563` |
| `--text-faint`   | `#6b7280` | `#9ca3af` |
| `--border`       | `#2a2a2a` | `#e5e7eb` |
| `--accent`       | `#22af9e` | `#22af9e` |

O tema é salvo no `localStorage` e aplicado via atributo `data-theme` no `<html>`.

---

## 📄 Páginas

### Home (`/`)

- **Navbar** com links de navegação, botão Missão Maio Amarelo e toggle de tema. Some ao rolar para baixo e reaparece ao rolar para cima.
- **Hero** com imagem de fundo, título com hover colorido, badge piscando e botão para a missão.
- **PodcastSection** com banner 25/75 — imagem do host à esquerda e CTA para o podcast à direita.
- **Footer** com logo, descrição, categorias, links da empresa e redes sociais.
- **ScrollToTop** — botão flutuante no canto inferior direito com animação suave.

### Missão Maio Amarelo (`/missao`)

- H1 animado alternando entre branco e amarelo com efeito de zoom.
- Formulário com 3 campos: Nome, E-mail e Área/Função.
- Validação de e-mail: apenas `@fretadao.com.br` é aceito.
- Botão "Entrar na Missão" desabilitado enquanto algum campo estiver vazio ou inválido.

### Categorias (`/categoria/seguranca`, `/categoria/prevencao`, `/categoria/conscientizacao`)

- Header com label, título, linha accent e descrição da categoria.
- Estado vazio padrão — artigos serão gerenciados via painel admin (a implementar).

### Podcast Na Pista (`/podcast`)

- A implementar.

---

## 🚧 Próximos Passos

- [ ] Painel admin para upload e gerenciamento de artigos
- [ ] Integração de áudio real no Podcast Na Pista
- [ ] Página individual de artigo (`/artigo/[slug]`)
- [ ] Página do Podcast (`/podcast`)
- [ ] Banco de dados para armazenar artigos e dados do formulário da Missão
- [ ] SEO — `next/og` para Open Graph dinâmico, `sitemap.xml` e RSS feed

---

## 🌐 Deploy

O projeto é hospedado na **Vercel** com deploy automático a partir da branch `main`.

---

_Iniciativa Fretadão · Maio Amarelo 2026 — No trânsito, toda escolha salva vidas._
