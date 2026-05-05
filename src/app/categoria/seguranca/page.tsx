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
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-[var(--text-primary)] text-sm font-medium">
          {nome}
        </span>
        <span className="text-[var(--accent)] text-[0.8rem] font-semibold font-mono">
          {valor}
        </span>
      </div>
      <div className="h-[6px] bg-[var(--bg-hover)] rounded-[3px] overflow-hidden">
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
      className="rounded-[4px] mb-4 p-5 sm:p-6"
      style={{
        background: bgColor,
        border: `1px solid ${borderColor}`,
        borderLeft: `5px solid ${borderColor}`,
      }}
    >
      <p
        className="font-bold text-[0.85rem] sm:text-[0.9rem] tracking-[0.05em] mb-2"
        style={{ color: titleColor }}
      >
        {titulo}
      </p>
      <p
        className="text-[var(--text-muted)] text-[0.875rem] leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: texto }}
      />
    </div>
  );
}

export default function SegurancaPage() {
  return (
    <>
      <style>{`
        .stat-card {
          background-color: var(--bg-secondary);
          border-top: 3px solid var(--accent);
          transition: transform 0.2s ease;
        }
        .stat-card:hover { transform: translateY(-3px); }
        .stat-card.yellow { border-color: #eab308; }
        .stat-card.orange { border-color: #f97316; }
        .stat-card.green  { border-color: #00C851; }

        .info-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          border-left: 4px solid var(--accent);
          transition: transform 0.2s ease;
          position: relative;
        }
        .info-card:hover { transform: translateY(-3px); }
        .info-card.yellow { border-left-color: #eab308; }
        .info-card.green  { border-left-color: #00C851; }
        .info-card.orange { border-left-color: #f97316; }

        .hora-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          text-align: center;
          transition: transform 0.2s ease;
        }
        .hora-card:hover { transform: translateY(-3px); }
        .hora-card.destaque {
          background-color: #eab308;
          border-color: #eab308;
        }
      `}</style>

      <Navbar />

      <main className="bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto">
          <div className="px-4 sm:px-6 pt-14 sm:pt-16 pb-12 sm:pb-16">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              🟡 Maio Amarelo — Segurança no Trânsito 2026
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[clamp(2.5rem,6vw,4.5rem)] font-black text-[var(--text-primary)] leading-[1.05] mb-4">
              Nossas <span className="text-[var(--accent)]">Ocorrências</span>
            </h1>
            <div className="w-12 h-[3px] bg-[var(--accent)] rounded-full my-4" />
            <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-[700px] leading-[1.7] mb-10 sm:mb-12">
              Dados oficiais de março e abril de 2026. Conheça os números,
              entenda os riscos e adote uma postura mais segura no trânsito.
              Cada informação aqui pode salvar uma vida.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2px] max-w-[680px]">
              {[
                { num: "50", label: "Total de ocorrências", cls: "" },
                { num: "40", label: "Acidentes", cls: "yellow" },
                { num: "10", label: "Incidentes", cls: "orange" },
                { num: "3", label: "Vítimas com ferimentos", cls: "" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={
                    `stat-card p-5 sm:p-6` + (s.cls ? ` ${s.cls}` : "")
                  }
                >
                  <div className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] leading-none">
                    {s.num}
                  </div>
                  <div className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.1em] text-[var(--text-faint)] mt-1.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="px-4 sm:px-6 py-14 sm:py-16 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              01 — Visão Geral
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(1.8rem,4vw,3rem)] font-black text-[var(--text-primary)] leading-[1.1] mb-8 sm:mb-10">
              OS NÚMEROS{" "}
              <em className="text-[var(--accent)] not-italic">QUE IMPORTAM</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[2px]">
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
                <div
                  key={c.titulo}
                  className={`info-card p-6 sm:p-7${c.cls ? ` ${c.cls}` : ""}`}
                >
                  <div className="text-2xl sm:text-[1.6rem] mb-3">
                    {c.icone}
                  </div>
                  <div className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--text-muted)] mb-2">
                    {c.titulo}
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] leading-none mb-2">
                    {c.valor}
                  </div>
                  <div className="text-[0.78rem] sm:text-[0.8rem] text-[var(--text-faint)] leading-[1.6]">
                    {c.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="px-4 sm:px-6 py-14 sm:py-16 border-t border-[var(--border)]">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              02 — Tipos de Ocorrência
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(1.8rem,4vw,3rem)] font-black text-[var(--text-primary)] leading-[1.1] mb-8 sm:mb-10">
              COMO OS{" "}
              <em className="text-[var(--accent)] not-italic">
                ACIDENTES ACONTECEM
              </em>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
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

          <section className="px-4 sm:px-6 py-14 sm:py-16 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              03 — Causas e Responsabilidade
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(1.8rem,4vw,3rem)] font-black text-[var(--text-primary)] leading-[1.1] mb-8 sm:mb-10">
              QUEM É{" "}
              <em className="text-[var(--accent)] not-italic">RESPONSÁVEL</em>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-5">
                  Fator Determinante
                </span>
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

                <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mt-8 mb-5">
                  Responsabilidade
                </span>
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

          <section className="px-4 sm:px-6 py-14 sm:py-16 border-t border-[var(--border)]">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              04 — Quando Acontece
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(1.8rem,4vw,3rem)] font-black text-[var(--text-primary)] leading-[1.1] mb-8 sm:mb-10">
              OS HORÁRIOS{" "}
              <em className="text-[var(--accent)] not-italic">
                MAIS PERIGOSOS
              </em>
            </h2>

            {/* Cards de horário */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2px] mb-8">
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
                  className={`hora-card px-3 sm:px-5 py-6 sm:py-7${h.destaque ? " destaque" : ""}`}
                >
                  <div
                    className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.12em] uppercase mb-3"
                    style={{
                      color: h.destaque
                        ? "rgba(0,0,0,0.5)"
                        : "var(--text-faint)",
                    }}
                  >
                    {h.label}
                  </div>
                  <div
                    className="text-5xl sm:text-[3.5rem] font-black leading-none"
                    style={{
                      color: h.destaque ? "#111" : "var(--text-primary)",
                    }}
                  >
                    {h.num}
                  </div>
                  <div
                    className="text-xs sm:text-[0.75rem] mt-1.5"
                    style={{
                      color: h.destaque
                        ? "rgba(0,0,0,0.45)"
                        : "var(--text-faint)",
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

            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mt-8 mb-5">
              Dias da Semana
            </span>
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

          <section className="px-4 sm:px-6 py-14 sm:py-16 border-t border-[var(--border)] bg-[var(--bg-secondary)]">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              05 — Gravidade
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(1.8rem,4vw,3rem)] font-black text-[var(--text-primary)] leading-[1.1] mb-8 sm:mb-10">
              NÍVEL DE{" "}
              <em className="text-[var(--accent)] not-italic">GRAVIDADE</em>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
              {/* Donut */}
              <div className="flex justify-center">
                <svg
                  width="220"
                  height="220"
                  viewBox="0 0 220 220"
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]"
                >
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
                  <div key={l.nome} className="flex items-center gap-3 mb-4">
                    <div
                      className="w-4 h-4 rounded-[3px] shrink-0"
                      style={{ backgroundColor: l.cor }}
                    />
                    <span className="text-[var(--text-muted)] text-[0.875rem] flex-1">
                      {l.nome}
                    </span>
                    <span className="text-[var(--text-primary)] font-mono text-[0.875rem] font-semibold">
                      {l.pct}
                    </span>
                  </div>
                ))}
                <div className="mt-6">
                  <AlertaBox
                    titulo="🟡 28% COM POTENCIAL MÉDIO OU ALTO"
                    texto="14 ocorrências classificadas como potencial médio ou alto mostram que, sem as devidas precauções, qualquer uma delas poderia ter resultado em vítimas graves. A gravidade não é garantida — é prevenida."
                    cor="yellow"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 sm:px-6 py-14 sm:py-16 border-t border-[var(--border)]">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              06 — Operações
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(1.8rem,4vw,3rem)] font-black text-[var(--text-primary)] leading-[1.1] mb-6 sm:mb-8">
              PRINCIPAIS{" "}
              <em className="text-[var(--accent)] not-italic">CLIENTES</em>
            </h2>
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-5">
              Clientes com mais ocorrências
            </span>
            <div className="max-w-[600px]">
              {[
                { rank: "01", nome: "Mercado Livre — SP02", count: 11 },
                { rank: "02", nome: "Mercado Livre — SP04/14", count: 8 },
                { rank: "03", nome: "Mercado Livre — Sortation", count: 8 },
                { rank: "04", nome: "Mercado Livre — SP06", count: 7 },
                { rank: "05", nome: "Clarios — Sorocaba", count: 3 },
              ].map((e) => (
                <div
                  key={e.rank}
                  className="flex items-center gap-4 py-3.5 border-b border-[var(--border)]"
                >
                  <span className="font-black text-lg sm:text-[1.2rem] text-[var(--accent)] w-10 shrink-0">
                    {e.rank}
                  </span>
                  <span className="flex-1 text-[var(--text-primary)] text-sm sm:text-[0.9rem] font-medium">
                    {e.nome}
                  </span>
                  <span className="bg-[var(--bg-hover)] text-[var(--text-primary)] font-mono text-[0.75rem] sm:text-[0.8rem] px-2.5 py-1 rounded-[4px]">
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
