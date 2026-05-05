"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .dot-pulse { animation: pulse-dot 1.4s ease-in-out infinite; }
      `}</style>

      <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center overflow-hidden bg-[#111111]">
        {/* Imagem de fundo */}
        <Image
          src="/heroImage.png"
          alt="Motorista Fretadão"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* Conteúdo */}
        <div className="relative z-[2] w-full max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          {/* Título */}
          <h1
            className="text-white font-extrabold leading-tight mb-6 transition-colors duration-300 cursor-default hover:text-[var(--accent)] max-w-[750px]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Dirigir é mais do que conduzir um veículo,{" "}
            <br className="hidden md:block" />é carregar vidas com
            responsabilidade.
          </h1>

          {/* Subtítulo */}
          <p
            className="text-white/55 leading-relaxed max-w-[680px]"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.125rem)" }}
          >
            Neste Maio Amarelo 2026, o Fretadão reforça: dirigir é um
            compromisso com a vida. Seja no fretado ou no carro próprio, cada
            atitude no trânsito faz a diferença. Atenção, prudência e empatia
            garantem que todos cheguem em casa com segurança.
          </p>

          {/* Botão missão */}
          <Link
            href="/missao"
            className="mt-9 inline-flex items-center gap-2 px-5 py-2.5 border border-[#eab308] rounded-full bg-[rgba(234,179,8,0.12)] text-[#eab308] text-xs font-bold tracking-widest uppercase no-underline transition-all duration-200 hover:bg-[rgba(234,179,8,0.28)] hover:text-[#fde047]"
          >
            <span className="dot-pulse w-[7px] h-[7px] rounded-full bg-[#eab308] shrink-0 inline-block" />
            Missão Maio Amarelo
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>

          {/* Data + ouvir */}
          <div className="flex flex-wrap items-center gap-4 mt-7">
            <span className="flex items-center gap-1.5 text-white/40 text-sm">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {new Date().toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <Link
              href="/categoria/podcast"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-semibold no-underline transition-colors hover:opacity-90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              Ouvir artigo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
