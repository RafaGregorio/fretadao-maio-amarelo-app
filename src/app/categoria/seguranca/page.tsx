"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function BarraProgresso({
  nome,
  valor,
  percentual,
  cor,
}: {
  nome: string;
  valor: string;
  percentual: number;
  cor: string;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = percentual + "%";
        }
      },
      { threshold: 0.3 },
    );
    if (barRef.current) observer.observe(barRef.current.parentElement!);
    return () => observer.disconnect();
  }, [percentual]);

  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            color: "var(--text-primary)",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          {nome}
        </span>
        <span
          style={{
            color: "var(--accent)",
            fontSize: "0.8rem",
            fontFamily: "monospace",
            fontWeight: 600,
          }}
        >
          {valor}
        </span>
      </div>
      <div
        style={{
          height: "6px",
          backgroundColor: "var(--bg-hover)",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          ref={barRef}
          style={{
            height: "100%",
            width: "0%",
            backgroundColor: cor,
            borderRadius: "3px",
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

function AlertaBox({
  titulo,
  texto,
  cor,
}: {
  titulo: string;
  texto: string;
  cor?: "accent" | "yellow" | "green";
}) {
  const borderColor =
    cor === "yellow"
      ? "#eab308"
      : cor === "green"
        ? "#00C851"
        : "var(--accent)";
  const bgColor =
    cor === "yellow"
      ? "rgba(234,179,8,0.08)"
      : cor === "green"
        ? "rgba(0,200,81,0.08)"
        : "rgba(34,175,158,0.08)";
  const titleColor =
    cor === "yellow"
      ? "#eab308"
      : cor === "green"
        ? "#00C851"
        : "var(--accent)";

  return (
    <div
      style={{
        background: bgColor,
        border: `1px solid ${borderColor}`,
        borderLeft: `5px solid ${borderColor}`,
        padding: "24px 28px",
        marginBottom: "16px",
        borderRadius: "4px",
      }}
    >
      <p
        style={{
          color: titleColor,
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
          marginBottom: "8px",
        }}
      >
        {titulo}
      </p>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.875rem",
          lineHeight: 1.7,
        }}
        dangerouslySetInnerHTML={{ __html: texto }}
      />
    </div>
  );
}

export default function SegurancaPage() {
  return (
    <>
      <style>{`
        .sec { padding: 72px 24px; border-top: 1px solid var(--border); }
        .sec-alt { background-color: var(--bg-secondary); }
        .sec-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
          display: block;
        }
        .sec-titulo {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 900;
          color: var(--text-primary);
          margin-bottom: 40px;
          line-height: 1.1;
        }
        .sec-titulo em { color: var(--accent); font-style: normal; }

        .stat-card {
          background-color: var(--bg-secondary);
          border-top: 3px solid var(--accent);
          padding: 24px 20px;
          transition: transform 0.2s ease;
        }
        .stat-card:hover { transform: translateY(-3px); }
        .stat-card.yellow { border-color: #eab308; }
        .stat-card.orange { border-color: #f97316; }
        .stat-card.green { border-color: #00C851; }

        .info-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          padding: 28px;
          transition: transform 0.2s ease;
          position: relative;
        }
        .info-card:hover { transform: translateY(-3px); }
        .info-card.yellow { border-left-color: #eab308; }
        .info-card.green { border-left-color: #00C851; }
        .info-card.orange { border-left-color: #f97316; }

        .hora-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 28px 20px;
          text-align: center;
          transition: transform 0.2s ease;
        }
        .hora-card:hover { transform: translateY(-3px); }
        .hora-card.destaque {
          background-color: #eab308;
          border-color: #eab308;
        }

        .empresa-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }

        .legenda-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
      `}</style>

      <Navbar />

      <main
        style={{
          backgroundColor: "var(--bg-primary)",
          transition: "background-color 0.3s ease",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* ── HERO ── */}
          <div style={{ padding: "72px 24px 64px" }}>
            <span className="sec-label">
              🟡 Maio Amarelo — Segurança no Trânsito 2026
            </span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                color: "var(--text-primary)",
                lineHeight: 1.05,
                marginBottom: "16px",
              }}
            >
              Segurança{" "}
              <span style={{ color: "var(--accent)" }}>no Trânsito</span>
            </h1>
            <div
              style={{
                width: "48px",
                height: "3px",
                backgroundColor: "var(--accent)",
                borderRadius: "999px",
                margin: "16px 0 20px",
              }}
            />
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1rem",
                maxWidth: "700px",
                lineHeight: 1.7,
                marginBottom: "48px",
              }}
            >
              Dados oficiais de março e abril de 2026. Conheça os números,
              entenda os riscos e adote uma postura mais segura no trânsito.
              Cada informação aqui pode salvar uma vida.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "2px",
                maxWidth: "680px",
              }}
            >
              {[
                { num: "50", label: "Total de ocorrências", cls: "" },
                { num: "40", label: "Acidentes", cls: "yellow" },
                { num: "10", label: "Incidentes", cls: "orange" },
                { num: "3", label: "Vítimas com ferimentos", cls: "" },
              ].map((s) => (
                <div key={s.label} className={`stat-card ${s.cls}`}>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-faint)",
                      marginTop: "6px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 01 VISÃO GERAL ── */}
          <section className="sec sec-alt">
            <span className="sec-label">01 — Visão Geral</span>
            <h2 className="sec-titulo">
              OS NÚMEROS <em>QUE IMPORTAM</em>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "2px",
              }}
            >
              {[
                {
                  icone: "📅",
                  titulo: "Por Mês",
                  valor: "25",
                  desc: "ocorrências em cada mês — distribuição equilibrada entre março e abril",
                  cls: "",
                },
                {
                  icone: "🚌",
                  titulo: "Passageiros em Risco",
                  valor: "~11",
                  desc: "média de passageiros por veículo nos momentos das ocorrências (máximo registrado: 49)",
                  cls: "yellow",
                },
                {
                  icone: "✅",
                  titulo: "Sem Vítimas",
                  valor: "92%",
                  desc: "46 de 50 ocorrências não resultaram em vítimas — um número positivo, mas que exige atenção",
                  cls: "green",
                },
                {
                  icone: "⚠️",
                  titulo: "Com Vítimas",
                  valor: "4",
                  desc: "3 vítimas com ferimentos leves, nenhuma grave ou fatal neste período",
                  cls: "orange",
                },
              ].map((c) => (
                <div key={c.titulo} className={`info-card ${c.cls}`}>
                  <div style={{ fontSize: "1.6rem", marginBottom: "12px" }}>
                    {c.icone}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "8px",
                    }}
                  >
                    {c.titulo}
                  </div>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {c.valor}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-faint)",
                      lineHeight: 1.6,
                    }}
                  >
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 02 TIPOS DE ACIDENTE ── */}
          <section className="sec">
            <span className="sec-label">02 — Tipos de Ocorrência</span>
            <h2 className="sec-titulo">
              COMO OS <em>ACIDENTES ACONTECEM</em>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
              }}
            >
              <div>
                <BarraProgresso
                  nome="🚗 Colisão Lateral"
                  valor="18 — 36%"
                  percentual={100}
                  cor="var(--accent)"
                />
                <BarraProgresso
                  nome="🚙 Colisão Traseira"
                  valor="7 — 14%"
                  percentual={39}
                  cor="var(--accent)"
                />
                <BarraProgresso
                  nome="🧱 Choque"
                  valor="5 — 10%"
                  percentual={28}
                  cor="#eab308"
                />
                <BarraProgresso
                  nome="🚧 Colisão com Objeto Fixo"
                  valor="4 — 8%"
                  percentual={22}
                  cor="#f97316"
                />
                <BarraProgresso
                  nome="🔄 Colisão Frontal"
                  valor="3 — 6%"
                  percentual={17}
                  cor="#f97316"
                />
                <BarraProgresso
                  nome="↩️ Colisão em Manobra de Ré"
                  valor="3 — 6%"
                  percentual={17}
                  cor="#9ca3af"
                />
                <BarraProgresso
                  nome="🔀 Colisão Transversal"
                  valor="2 — 4%"
                  percentual={11}
                  cor="#9ca3af"
                />
                <BarraProgresso
                  nome="🚨 Outros (incêndio, mecânico...)"
                  valor="8 — 16%"
                  percentual={44}
                  cor="#00C851"
                />
              </div>
              <div>
                <AlertaBox
                  titulo="⚠️ ALERTA: COLISÃO LATERAL É A MAIOR AMEAÇA"
                  texto="Com <strong>36% de todos os acidentes</strong>, a colisão lateral lidera com folga. Isso acontece quando veículos dividem a faixa ou quando terceiros fazem manobras abruptas. Manter distância lateral é essencial — nunca dispute espaço com outro veículo."
                />
                <AlertaBox
                  titulo="📍 ATENÇÃO AO FAZER RÉ"
                  texto="3 acidentes em manobra de ré revelam que este é um momento crítico. Use sempre os espelhos, desça do veículo para verificar quando necessário e nunca confie apenas nos retrovisores em locais com muros e obstáculos fixos."
                  cor="yellow"
                />
              </div>
            </div>
          </section>

          {/* ── 03 CAUSAS E RESPONSABILIDADE ── */}
          <section className="sec sec-alt">
            <span className="sec-label">03 — Causas e Responsabilidade</span>
            <h2 className="sec-titulo">
              QUEM É <em>RESPONSÁVEL</em>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
              }}
            >
              <div>
                <p className="sec-label" style={{ marginBottom: "20px" }}>
                  Fator Determinante
                </p>
                <BarraProgresso
                  nome="👤 Fator Humano"
                  valor="37 — 74%"
                  percentual={100}
                  cor="var(--accent)"
                />
                <BarraProgresso
                  nome="🛣️ Via / Meio Ambiente"
                  valor="9 — 18%"
                  percentual={24}
                  cor="#eab308"
                />
                <BarraProgresso
                  nome="🚌 Veículo"
                  valor="2 — 4%"
                  percentual={5}
                  cor="#00C851"
                />

                <p
                  className="sec-label"
                  style={{ marginBottom: "20px", marginTop: "32px" }}
                >
                  Responsabilidade
                </p>
                <BarraProgresso
                  nome="🚗 Terceiros (outros motoristas)"
                  valor="24 — 48%"
                  percentual={100}
                  cor="#f97316"
                />
                <BarraProgresso
                  nome="🧑 Motorista do Fretado"
                  valor="23 — 46%"
                  percentual={96}
                  cor="var(--accent)"
                />
              </div>
              <div>
                <AlertaBox
                  titulo="🚨 74% DOS ACIDENTES SÃO DE FATOR HUMANO"
                  texto="Imprudência, desatenção, excesso de velocidade e descumprimento das regras de trânsito lideram as causas. Mesmo que o terceiro seja o culpado, nossa postura pode evitar o acidente. <strong>Direção defensiva salva vidas.</strong>"
                />
                <AlertaBox
                  titulo="⚖️ 46% DE RESPONSABILIDADE DO MOTORISTA"
                  texto="Praticamente metade das ocorrências tem o motorista do fretado como responsável. Isso significa que uma parte significativa dos acidentes é evitável com mais atenção, planejamento e adoção de técnicas de direção defensiva."
                  cor="yellow"
                />
                <AlertaBox
                  titulo="✅ TERCEIRO RESPONSÁVEL NÃO É DESCULPA"
                  texto="Mesmo quando o terceiro é o responsável, um motorista treinado e atento pode se antecipar e evitar o acidente. É o princípio da <strong>direção defensiva</strong>: presuma o erro do outro e se proteja."
                  cor="green"
                />
              </div>
            </div>
          </section>

          {/* ── 04 HORÁRIOS ── */}
          <section className="sec">
            <span className="sec-label">04 — Quando Acontece</span>
            <h2 className="sec-titulo">
              OS HORÁRIOS <em>MAIS PERIGOSOS</em>
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "2px",
                marginBottom: "32px",
              }}
            >
              {[
                {
                  label: "🌙 Madrugada (00–6h)",
                  num: "8",
                  pct: "16% das ocorrências",
                  destaque: false,
                },
                {
                  label: "🌅 Manhã (06–12h)",
                  num: "11",
                  pct: "22% das ocorrências",
                  destaque: false,
                },
                {
                  label: "☀️ Tarde (12–18h)",
                  num: "16",
                  pct: "32% das ocorrências",
                  destaque: true,
                },
                {
                  label: "🌆 Noite (18–00h)",
                  num: "15",
                  pct: "30% das ocorrências",
                  destaque: false,
                },
              ].map((h) => (
                <div
                  key={h.label}
                  className={`hora-card ${h.destaque ? "destaque" : ""}`}
                >
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: h.destaque
                        ? "rgba(0,0,0,0.5)"
                        : "var(--text-faint)",
                      marginBottom: "12px",
                    }}
                  >
                    {h.label}
                  </div>
                  <div
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: 900,
                      color: h.destaque ? "#111" : "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {h.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: h.destaque
                        ? "rgba(0,0,0,0.45)"
                        : "var(--text-faint)",
                      marginTop: "6px",
                    }}
                  >
                    {h.pct}
                  </div>
                </div>
              ))}
            </div>

            <AlertaBox
              titulo="☀️ TARDE E NOITE CONCENTRAM 62% DOS ACIDENTES"
              texto="O período das 12h às 00h é o mais crítico. À tarde, o volume de tráfego é alto e o calor causa fadiga. À noite, a visibilidade reduz e a concentração cai. Dobre a atenção nesses períodos — reduza a velocidade, aumente o espaçamento e evite distrações."
            />

            <p
              className="sec-label"
              style={{ marginTop: "32px", marginBottom: "20px" }}
            >
              Dias da Semana
            </p>
            <BarraProgresso
              nome="Quarta-feira"
              valor="10 — 20%"
              percentual={100}
              cor="#F53B16"
            />
            <BarraProgresso
              nome="Sexta-feira"
              valor="8 — 16%"
              percentual={80}
              cor="#f97316"
            />
            <BarraProgresso
              nome="Sábado"
              valor="8 — 16%"
              percentual={80}
              cor="#f97316"
            />
            <BarraProgresso
              nome="Segunda-feira"
              valor="7 — 14%"
              percentual={70}
              cor="#eab308"
            />
            <BarraProgresso
              nome="Domingo"
              valor="6 — 12%"
              percentual={60}
              cor="#eab308"
            />
            <BarraProgresso
              nome="Quinta-feira"
              valor="6 — 12%"
              percentual={60}
              cor="#00C851"
            />
            <BarraProgresso
              nome="Terça-feira"
              valor="4 — 8%"
              percentual={40}
              cor="#00C851"
            />
          </section>

          {/* ── 05 GRAVIDADE ── */}
          <section className="sec sec-alt">
            <span className="sec-label">05 — Gravidade</span>
            <h2 className="sec-titulo">
              NÍVEL DE <em>GRAVIDADE</em>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                alignItems: "start",
              }}
            >
              {/* Donut */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg width="220" height="220" viewBox="0 0 220 220">
                  <circle
                    cx="110"
                    cy="110"
                    r="90"
                    fill="none"
                    stroke="var(--bg-hover)"
                    strokeWidth="28"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="90"
                    fill="none"
                    stroke="#00C851"
                    strokeWidth="28"
                    strokeDasharray="362 203"
                    strokeDashoffset="0"
                    transform="rotate(-90 110 110)"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="90"
                    fill="none"
                    stroke="#FFD000"
                    strokeWidth="28"
                    strokeDasharray="124 441"
                    strokeDashoffset="-362"
                    transform="rotate(-90 110 110)"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="90"
                    fill="none"
                    stroke="#FF6B00"
                    strokeWidth="28"
                    strokeDasharray="34 531"
                    strokeDashoffset="-486"
                    transform="rotate(-90 110 110)"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="90"
                    fill="none"
                    stroke="#E8002A"
                    strokeWidth="28"
                    strokeDasharray="45 520"
                    strokeDashoffset="-520"
                    transform="rotate(-90 110 110)"
                  />
                  <text
                    x="110"
                    y="104"
                    textAnchor="middle"
                    fontSize="36"
                    fontWeight="900"
                    fill="var(--text-primary)"
                  >
                    50
                  </text>
                  <text
                    x="110"
                    y="124"
                    textAnchor="middle"
                    fontSize="11"
                    fill="var(--text-faint)"
                    letterSpacing="1"
                  >
                    OCORRÊNCIAS
                  </text>
                </svg>
              </div>
              {/* Legenda */}
              <div>
                {[
                  {
                    cor: "#00C851",
                    nome: "Sem vítima — Potencial Baixo",
                    pct: "32 (64%)",
                  },
                  {
                    cor: "#FFD000",
                    nome: "Sem vítima — Potencial Médio",
                    pct: "11 (22%)",
                  },
                  {
                    cor: "#FF6B00",
                    nome: "Sem vítima — Potencial Alto",
                    pct: "3 (6%)",
                  },
                  {
                    cor: "#E8002A",
                    nome: "Com vítima — Ferimentos Leves",
                    pct: "4 (8%)",
                  },
                ].map((l) => (
                  <div key={l.nome} className="legenda-item">
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "3px",
                        backgroundColor: l.cor,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                        flex: 1,
                      }}
                    >
                      {l.nome}
                    </span>
                    <span
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: "monospace",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {l.pct}
                    </span>
                  </div>
                ))}
                <div style={{ marginTop: "24px" }}>
                  <AlertaBox
                    titulo="🟡 28% COM POTENCIAL MÉDIO OU ALTO"
                    texto="14 ocorrências classificadas como potencial médio ou alto mostram que, sem as devidas precauções, qualquer uma delas poderia ter resultado em vítimas graves. A gravidade não é garantida — é prevenida."
                    cor="yellow"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── 06 OPERAÇÕES ── */}
          <section className="sec">
            <span className="sec-label">06 — Operações</span>
            <h2 className="sec-titulo">
              ONDE MAIS <em>ACONTECE</em>
            </h2>
            <p className="sec-label" style={{ marginBottom: "20px" }}>
              Clientes com mais ocorrências
            </p>
            <div style={{ maxWidth: "600px" }}>
              {[
                { rank: "01", nome: "Mercado Livre — SP02", count: 11 },
                { rank: "02", nome: "Mercado Livre — SP04/14", count: 8 },
                { rank: "03", nome: "Mercado Livre — Sortation", count: 8 },
                { rank: "04", nome: "Mercado Livre — SP06", count: 7 },
                { rank: "05", nome: "Clarios — Sorocaba", count: 3 },
              ].map((e) => (
                <div key={e.rank} className="empresa-row">
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: "1.2rem",
                      color: "var(--accent)",
                      width: "40px",
                      flexShrink: 0,
                    }}
                  >
                    {e.rank}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    {e.nome}
                  </span>
                  <span
                    style={{
                      backgroundColor: "var(--bg-hover)",
                      color: "var(--text-primary)",
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {e.count}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
