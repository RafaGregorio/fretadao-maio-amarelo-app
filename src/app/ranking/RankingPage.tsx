"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Participante = {
  id: number;
  nome: string;
  email: string;
  area: string;
  pontos: number;
  acertos: number;
  data: string;
};

export default function RankingPage() {
  const params = useSearchParams();
  const pontos = Number(params.get("pontos") ?? 0);
  const acertos = Number(params.get("acertos") ?? 0);
  const nome = params.get("nome") ?? "";

  const [ranking, setRanking] = useState<Participante[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/ranking")
      .then((r) => r.json())
      .then((data) => {
        setRanking(data);
        setLoading(false);
      });
  }, []);

  const medalhas = ["🥇", "🥈", "🥉", "4º", "5º"];
  const medalhaColors = [
    "#FFD700",
    "#C0C0C0",
    "#CD7F32",
    "var(--text-faint)",
    "var(--text-faint)",
  ];

  return (
    <>
      <style>{`
        .ranking-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 28px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: transform 0.2s ease;
          margin-bottom: 10px;
        }
        .ranking-card:first-child {
          border-color: #FFD700;
          background-color: rgba(255,215,0,0.06);
        }
        .ranking-card:hover { transform: translateX(4px); }
        .result-badge {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px 32px;
          margin-bottom: 56px;
          text-align: center;
        }
      `}</style>

      <Navbar />

      <main
        style={{
          backgroundColor: "var(--bg-primary)",
          minHeight: "100vh",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "72px 24px 96px",
          }}
        >
          {/* Resultado */}
          {nome && (
            <div className="result-badge">
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Seu resultado
              </span>
              <h2
                style={{
                  color: "var(--text-primary)",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  margin: "0 0 4px",
                }}
              >
                {nome}
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "32px",
                  marginTop: "20px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {pontos}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "4px",
                    }}
                  >
                    pontos
                  </div>
                </div>
                <div
                  style={{ width: "1px", backgroundColor: "var(--border)" }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {acertos}/8
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "4px",
                    }}
                  >
                    acertos
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ranking */}
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              display: "block",
              marginBottom: "20px",
            }}
          >
            🏆 Top 5
          </span>

          <h1
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              margin: "0 0 32px",
            }}
          >
            Ranking Geral
          </h1>

          {loading ? (
            <div
              style={{
                textAlign: "center",
                color: "var(--text-faint)",
                padding: "48px 0",
              }}
            >
              Carregando ranking...
            </div>
          ) : ranking.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "var(--text-faint)",
                padding: "48px 0",
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "12px",
                border: "1px solid var(--border)",
              }}
            >
              Nenhum participante ainda.
            </div>
          ) : (
            ranking.map((p, i) => (
              <div key={p.id} className="ranking-card">
                <span
                  style={{
                    fontSize: i < 3 ? "2rem" : "1.2rem",
                    fontWeight: 900,
                    color: medalhaColors[i],
                    width: "40px",
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  {medalhas[i]}
                </span>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {p.nome}
                  </div>
                  <div
                    style={{
                      color: "var(--text-faint)",
                      fontSize: "0.78rem",
                      marginTop: "2px",
                    }}
                  >
                    {p.area} · {p.acertos}/10 acertos
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      color: "var(--accent)",
                      fontWeight: 900,
                      fontSize: "1.3rem",
                    }}
                  >
                    {p.pontos}
                  </div>
                  <div
                    style={{ color: "var(--text-faint)", fontSize: "0.7rem" }}
                  >
                    pts
                  </div>
                </div>
              </div>
            ))
          )}

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                backgroundColor: "var(--accent)",
                color: "#ffffff",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.85rem",
                transition: "background-color 0.2s ease",
              }}
            >
              Voltar para o início
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
