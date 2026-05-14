"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const categorias = [
  { label: "Prevenção de Acidentes", href: "/categoria/prevencao" },
  { label: "Fretadão Podcast", href: "/categoria/podcast" },
  { label: "Missão Maio Amarelo", href: "/missao" },
];

const linksEmpresa = [
  { label: "fretadao.com.br", href: "https://www.fretadao.com.br" },
  { label: "Entre em Contato", href: "https://www.fretadao.com.br/contato/" },
];

const sociais = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/fretadao",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fretadao",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/usefretadao/posts/?feedView=all",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Fretadão",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="var(--bg-primary)"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-[var(--bg-primary)] pt-16 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="inline-flex mb-5 no-underline">
              <Image
                src="/logoBranca.png"
                alt="Fretadão"
                width={140}
                height={40}
                style={{
                  objectFit: "contain",
                  filter: theme === "light" ? "invert(1)" : "none",
                }}
              />
            </Link>

            <p className="text-[var(--text-faint)] text-sm leading-relaxed mb-6 max-w-[300px]">
              Iniciativa realizada pelo Fretadão para a campanha Maio Amarelo
              2026.
            </p>

            <div className="flex gap-2.5 justify-center md:justify-start">
              {sociais.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[38px] h-[38px] rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] no-underline transition-all duration-200 hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-[var(--text-primary)] text-[0.7rem] font-bold tracking-[0.12em] uppercase mb-5">
              Categorias
            </p>
            {categorias.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="text-[var(--text-muted)] text-sm no-underline py-1.5 transition-colors hover:text-[var(--text-primary)]"
              >
                {c.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-[var(--text-primary)] text-[0.7rem] font-bold tracking-[0.12em] uppercase mb-5">
              Fretadão
            </p>
            {linksEmpresa.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] text-sm no-underline py-1.5 transition-colors hover:text-[var(--text-primary)]"
              >
                {l.label}
              </a>
            ))}
            <p className="text-[var(--text-faint)] text-sm leading-relaxed mt-5 max-w-[280px]">
              Fretados em todo o Brasil. Experiência que transforma a mobilidade
              corporativa.
            </p>
          </div>
        </div>

        <div className="h-px bg-[var(--border)] max-w-[1440px] mx-auto" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-5 pb-16 text-center">
          <span className="text-[var(--text-faint)] text-xs">
            © 2026 Fretadão. Todos os direitos reservados.
          </span>
          <span className="text-[var(--text-faint)] text-xs">
            Maio Amarelo 2026 · No trânsito, toda escolha salva vidas.
          </span>
        </div>
      </div>
    </footer>
  );
}
