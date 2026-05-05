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
        .dica-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          border-bottom: 3px solid transparent;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .dica-card:hover {
          border-bottom-color: var(--accent);
          transform: translateY(-3px);
        }
      `}</style>

      <Navbar />

      <main className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto">

          {/* Header */}
          <div className="px-4 sm:px-6 pt-14 sm:pt-16 pb-12 sm:pb-16">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              07 — O Que Você Pode Fazer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[clamp(2.5rem,6vw,4.5rem)] font-black text-[var(--text-primary)] leading-[1.05] mb-4">
              Prevenção de
              <br />
              <span className="text-[var(--accent)]">Acidentes</span>
            </h1>
            <div className="w-12 h-[3px] bg-[var(--accent)] rounded-full my-4" />
            <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-[560px] leading-relaxed">
              8 atitudes que todo motorista pode adotar agora. Baseadas nos
              dados reais de março e abril de 2026 — porque prevenir é sempre
              melhor que remediar.
            </p>
          </div>

          {/* Grid de dicas */}
          <div className="px-4 sm:px-6 pb-16 sm:pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2px]">
              {dicas.map((d) => (
                <div key={d.num} className="dica-card p-6 sm:p-8">
                  <div className="text-5xl sm:text-6xl font-black text-[var(--border)] leading-none mb-1">
                    {d.num}
                  </div>
                  <div className="text-[0.8rem] sm:text-[0.85rem] font-extrabold tracking-[0.06em] text-[var(--accent)] uppercase mb-3">
                    {d.titulo}
                  </div>
                  <p className="text-[0.875rem] text-[var(--text-primary)] leading-relaxed">
                    {d.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mensagem Final */}
          <div className="bg-[var(--bg-secondary)] border-t border-[var(--border)] px-4 sm:px-6 py-16 sm:py-20 text-center">
            <span className="block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--accent)] mb-3">
              Mensagem Final
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[clamp(1.8rem,4vw,3rem)] font-black text-[var(--text-primary)] leading-[1.1] mb-8 sm:mb-10">
              VOCÊ{" "}
              <em className="text-[var(--accent)] not-italic">FAZ A DIFERENÇA</em>
            </h2>

            <p className="max-w-[600px] mx-auto mb-5 text-sm sm:text-base text-[var(--text-muted)] leading-[1.8]">
              50 ocorrências em dois meses. Cada uma delas tem um rosto, uma
              família, um impacto real. A maior descoberta desses dados é que{" "}
              <strong className="text-[var(--text-primary)]">
                a maioria poderia ter sido evitada
              </strong>
              . O fator humano domina — e isso significa que a solução também
              está nas nossas mãos.
            </p>

            <p className="max-w-[600px] mx-auto mb-12 sm:mb-14 text-sm sm:text-base text-[var(--text-muted)] leading-[1.8]">
              Dirija com atenção. Cuide dos seus passageiros. Volte para casa
              com segurança.
            </p>

            {/* Badge final */}
            <div className="inline-block bg-[#eab308] px-8 sm:px-12 py-6 sm:py-7 rounded-[4px]">
              <div className="text-3xl sm:text-4xl md:text-[clamp(2rem,4vw,3rem)] font-black text-[#1a1a1a] leading-[1.1] tracking-[0.04em]">
                MAIO AMARELO
              </div>
              <div className="text-3xl sm:text-4xl md:text-[clamp(2rem,4vw,3rem)] font-black text-[#1a1a1a] leading-[1.1] tracking-[0.04em]">
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
