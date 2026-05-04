"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { perguntas } from "@/data/perguntas";

const TEMPO_POR_PERGUNTA = 30;
const PONTOS_POR_ACERTO = 500;

export default function QuizPage() {
  const router = useRouter();
  const params = useSearchParams();
  const nome = params.get("nome") || "Participante";
  const email = params.get("email") || "";
  const area = params.get("area") || "";

  const [atual, setAtual] = useState(0);
  const [tempo, setTempo] = useState(TEMPO_POR_PERGUNTA);
  const [pontos, setPontos] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [respondida, setRespondida] = useState<number | null>(null);
  const [status, setStatus] = useState<
    "aguardando" | "correta" | "errada" | "tempo"
  >("aguardando");

  const pergunta = perguntas[atual];
  const progresso = (atual / perguntas.length) * 100;
  const circumference = 2 * Math.PI * 40;

  const avancar = useCallback(
    async (pontosFinais: number, acertosFinais: number) => {
      const isUltima = atual + 1 >= perguntas.length;

      if (isUltima) {
        await fetch("/api/ranking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome,
            email,
            area,
            pontos: pontosFinais,
            acertos: acertosFinais,
          }),
        });
        router.push(
          `/ranking?pontos=${pontosFinais}&acertos=${acertosFinais}&nome=${encodeURIComponent(nome)}`,
        );
      } else {
        setAtual((a) => a + 1);
        setTempo(TEMPO_POR_PERGUNTA);
        setRespondida(null);
        setStatus("aguardando");
      }
    },
    [atual, nome, email, area, router],
  );

  // Cronômetro
  useEffect(() => {
    if (respondida !== null) return;
    if (tempo === 0) {
      setStatus("tempo");
      setTimeout(() => avancar(pontos, acertos), 1500);
      return;
    }
    const t = setTimeout(() => setTempo((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [tempo, respondida, avancar, pontos, acertos]);

  const responder = (idx: number) => {
    if (respondida !== null) return;
    setRespondida(idx);
    const correta = idx === pergunta.correta;
    const novoStatus = correta ? "correta" : "errada";
    setStatus(novoStatus);

    const novosPontos = correta ? pontos + PONTOS_POR_ACERTO : pontos;
    const novosAcertos = correta ? acertos + 1 : acertos;

    if (correta) {
      setPontos(novosPontos);
      setAcertos(novosAcertos);
    }

    setTimeout(() => avancar(novosPontos, novosAcertos), 1800);
  };

  const timerColor =
    tempo > 15 ? "var(--accent)" : tempo > 7 ? "#eab308" : "#ef4444";
  const strokeOffset =
    circumference - (tempo / TEMPO_POR_PERGUNTA) * circumference;

  const btnColor = (idx: number) => {
    if (respondida === null) return "var(--bg-secondary)";
    if (idx === pergunta.correta) return "rgba(34,175,158,0.2)";
    if (idx === respondida) return "rgba(239,68,68,0.2)";
    return "var(--bg-secondary)";
  };

  const btnBorder = (idx: number) => {
    if (respondida === null) return "var(--border)";
    if (idx === pergunta.correta) return "var(--accent)";
    if (idx === respondida) return "#ef4444";
    return "var(--border)";
  };

  return (
    <>
      <style>{`
        .alt-btn {
          width: 100%;
          padding: 18px 24px;
          border-radius: 12px;
          border: 2px solid;
          text-align: left;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          transition: transform 0.15s ease, background-color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--text-primary);
        }
        .alt-btn:hover:not(:disabled) { transform: translateX(4px); }
        .alt-btn:disabled { cursor: default; }
        .letra {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
          flex-shrink: 0;
          background-color: var(--bg-hover);
          color: var(--text-muted);
        }
      `}</style>

      <main
        style={{
          backgroundColor: "var(--bg-primary)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          transition: "background-color 0.3s ease",
        }}
      >
        <div style={{ width: "100%", maxWidth: "680px" }}>
          {/* Barra de progresso */}
          <div style={{ marginBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "var(--text-faint)", fontSize: "0.75rem" }}>
                Pergunta {atual + 1} de {perguntas.length}
              </span>
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                {pontos} pts
              </span>
            </div>
            <div
              style={{
                height: "4px",
                backgroundColor: "var(--bg-hover)",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progresso}%`,
                  backgroundColor: "var(--accent)",
                  borderRadius: "999px",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
          </div>

          {/* Cronômetro circular */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "36px",
            }}
          >
            <div
              style={{ position: "relative", width: "100px", height: "100px" }}
            >
              <svg
                width="100"
                height="100"
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="var(--bg-hover)"
                  strokeWidth="6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={timerColor}
                  strokeWidth="6"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeOffset}
                  strokeLinecap="round"
                  style={{
                    transition: "stroke-dashoffset 1s linear, stroke 0.5s ease",
                  }}
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: timerColor,
                    lineHeight: 1,
                  }}
                >
                  {tempo}
                </span>
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--text-faint)",
                    letterSpacing: "0.1em",
                  }}
                >
                  SEG
                </span>
              </div>
            </div>
          </div>

          {/* Pergunta */}
          <h2
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "32px",
              lineHeight: 1.5,
            }}
          >
            {pergunta.texto}
          </h2>

          {/* Alternativas */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {pergunta.alternativas.map((alt, idx) => (
              <button
                key={idx}
                className="alt-btn"
                disabled={respondida !== null}
                onClick={() => responder(idx)}
                style={{
                  backgroundColor: btnColor(idx),
                  borderColor: btnBorder(idx),
                }}
              >
                <span className="letra">{["A", "B", "C", "D"][idx]}</span>
                {alt}
              </button>
            ))}
          </div>

          {/* Feedback */}
          {status !== "aguardando" && (
            <div
              style={{
                marginTop: "24px",
                padding: "14px 20px",
                borderRadius: "10px",
                textAlign: "center",
                backgroundColor:
                  status === "correta"
                    ? "rgba(34,175,158,0.12)"
                    : "rgba(239,68,68,0.12)",
                border: `1px solid ${status === "correta" ? "var(--accent)" : "#ef4444"}`,
                color: status === "correta" ? "var(--accent)" : "#ef4444",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}
            >
              {status === "correta" && "✅ Correto! +500 pontos"}
              {status === "errada" && "❌ Errado! Nenhum ponto"}
              {status === "tempo" && "⏰ Tempo esgotado! Nenhum ponto"}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
