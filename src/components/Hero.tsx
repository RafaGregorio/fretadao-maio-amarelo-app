"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin: 0 0 24px 0;
          transition: color 0.3s ease;
          cursor: default;
        }
        .hero-title:hover { color: var(--accent); }
        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          max-width: 540px;
          margin: 0;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .btn-missao-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 36px;
          padding: 10px 20px;
          border: 1.5px solid #eab308;
          border-radius: 999px;
          background-color: rgba(234,179,8,0.12);
          color: #eab308;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.25s ease, color 0.25s ease;
        }
        .btn-missao-hero:hover {
          background-color: rgba(234,179,8,0.28);
          color: #fde047;
        }
        .btn-missao-hero .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #eab308;
          animation: pulse-dot 1.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        .hero-date-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .hero-date {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.4);
          font-size: 0.8rem;
        }
        .btn-ouvir {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 999px;
          background-color: var(--accent);
          color: var(--text-primary);
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .btn-ouvir:hover { background-color: var(--accentH); }
      `}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#111111",
        }}
      >
        <Image
          src="/heroImage.png"
          alt="Motorista Fretadão"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.82) 50%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
          }}
        >
          <h1 className="hero-title" style={{ maxWidth: "750px" }}>
            Dirigir é mais do que conduzir um veículo, <br />é carregar vidas
            com responsabilidade.
          </h1>

          <p className="hero-subtitle" style={{ maxWidth: "750px " }}>
            Neste Maio Amarelo 2026, o Fretadão reforça: dirigir é um
            compromisso com a vida. Seja no fretado ou no carro próprio, cada
            atitude no trânsito faz a diferença. Atenção, prudência e empatia
            garantem que todos cheguem em casa com segurança.
          </p>

          <Link href="/missao" className="btn-missao-hero">
            <span className="dot" />
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

          <div className="hero-date-row">
            <span className="hero-date">
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
            <Link href="/podcast" className="btn-ouvir">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--text-primary)",
                  display: "inline-block",
                }}
              />
              Ouvir artigo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
