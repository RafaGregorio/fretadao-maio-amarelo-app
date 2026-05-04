import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const dicas = [
  {
    num: "01",
    titulo: "DISTÂNCIA LATERAL SEMPRE",
    texto:
      "A colisão lateral é a maior causa de acidentes (36%). Mantenha sempre distância segura dos veículos ao lado. Nunca dispute faixa. Se um veículo tentar se fechar, deixe passagem — sua segurança vale mais.",
  },
  {
    num: "02",
    titulo: "ATENÇÃO REDOBRADA TARDE E NOITE",
    texto:
      "62% dos acidentes acontecem entre 12h e 24h. Adote um ritual de atenção: hidrate-se, descanse nos intervalos, regule o ar-condicionado e evite qualquer distração durante esse período crítico.",
  },
  {
    num: "03",
    titulo: "CUIDADO NA MANOBRA DE RÉ",
    texto:
      "3 acidentes aconteceram em manobra de ré. Antes de dar ré, desça do veículo e verifique o entorno. Use os retrovisores e peça auxílio quando houver dúvida. Segundos de cuidado evitam muito prejuízo.",
  },
  {
    num: "04",
    titulo: "TERCEIRO ERRADO? VOCÊ AINDA PODE EVITAR",
    texto:
      "48% das ocorrências têm terceiros como responsáveis. A direção defensiva ensina: presuma o erro do outro. Antecipe movimentos perigosos e mantenha sempre uma saída de emergência disponível.",
  },
  {
    num: "05",
    titulo: "QUARTA E SEXTA SÃO OS DIAS MAIS CRÍTICOS",
    texto:
      "Quarta-feira lidera com 20% das ocorrências, seguida de sexta e sábado. Nesses dias, o trânsito costuma ser mais intenso ou o cansaço acumulado é maior. Redobre a atenção.",
  },
  {
    num: "06",
    titulo: "USE O BOTÃO SOS",
    texto:
      "Em caso de ocorrência, acione imediatamente o botão SOS. O protocolo exige comunicação ao cliente em até 30 minutos. Agilidade no acionamento pode fazer a diferença no socorro às vítimas.",
  },
  {
    num: "07",
    titulo: "VERIFIQUE O VEÍCULO ANTES DE PARTIR",
    texto:
      "Falhas mecânicas aparecem entre os tipos de acidente. Faça sempre a inspeção pré-viagem: pneus, freios, espelhos, luzes. Um veículo bem cuidado é um veículo mais seguro para você e seus passageiros.",
  },
  {
    num: "08",
    titulo: "PASSAGEIROS SÃO SUA RESPONSABILIDADE",
    texto:
      "A média de 11 passageiros por veículo mostra o peso da responsabilidade. Cada acidente afeta vidas reais. Lembre-se sempre: quem está no ônibus está confiando em você. Dirija como se alguém da sua família estivesse a bordo.",
  },
];

export default function PrevencaoPage() {
  return (
    <>
      <style>{`
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

        .dica-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          border-bottom: 3px solid transparent;
          padding: 32px;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .dica-card:hover {
          border-bottom-color: var(--accent);
          transform: translateY(-3px);
        }
        .dica-num {
          font-size: 4rem;
          font-weight: 900;
          color: var(--border);
          line-height: 1;
          margin-bottom: 4px;
        }
        .dica-titulo {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--accent);
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .dica-texto {
          font-size: 0.875rem;
          color: var(--text-primary);
          line-height: 1.7;
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
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ padding: "72px 24px 64px" }}>
            <span className="sec-label">07 — O Que Você Pode Fazer</span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                color: "var(--text-primary)",
                lineHeight: 1.05,
                marginBottom: "16px",
              }}
            >
              Prevenção de
              <br />
              <span style={{ color: "var(--accent)" }}>Acidentes</span>
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
                maxWidth: "560px",
                lineHeight: 1.7,
              }}
            >
              8 atitudes que todo motorista pode adotar agora. Baseadas nos
              dados reais de março e abril de 2026 — porque prevenir é sempre
              melhor que remediar.
            </p>
          </div>

          {/* Grid de dicas */}
          <div style={{ padding: "0 24px 80px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2px",
              }}
            >
              {dicas.map((d) => (
                <div key={d.num} className="dica-card">
                  <div className="dica-num">{d.num}</div>
                  <div className="dica-titulo">{d.titulo}</div>
                  <p className="dica-texto">{d.texto}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mensagem Final */}
          <div
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderTop: "1px solid var(--border)",
              padding: "80px 24px",
              textAlign: "center",
            }}
          >
            <span
              className="sec-label"
              style={{ justifyContent: "center", display: "block" }}
            >
              Mensagem Final
            </span>
            <h2 className="sec-titulo" style={{ textAlign: "center" }}>
              VOCÊ <em>FAZ A DIFERENÇA</em>
            </h2>

            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto 20px",
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              50 ocorrências em dois meses. Cada uma delas tem um rosto, uma
              família, um impacto real. A maior descoberta desses dados é que{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                a maioria poderia ter sido evitada
              </strong>
              . O fator humano domina — e isso significa que a solução também
              está nas nossas mãos.
            </p>

            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto 56px",
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              Dirija com atenção. Cuide dos seus passageiros. Volte para casa
              com segurança.
            </p>

            {/* Badge final */}
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#eab308",
                padding: "28px 48px",
                borderRadius: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "#1a1a1a",
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                }}
              >
                MAIO AMARELO
              </div>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "#1a1a1a",
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                }}
              >
                VIDA NO TRÂNSITO
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
