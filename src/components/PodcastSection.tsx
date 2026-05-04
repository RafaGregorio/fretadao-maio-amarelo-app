import Image from "next/image";
import Link from "next/link";

export default function PodcastSection() {
  return (
    <>
      <style>{`
        .podcast-cta-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          flex: 1;
          height: 100%;
          padding: 40px 48px;
          background-color: var(--accent);
          text-decoration: none;
          transition: background-color 0.25s ease;
          gap: 8px;
        }
        .podcast-cta-btn:hover {
          background-color: #1a9080;
        }
        .podcast-cta-btn:hover .podcast-arrow {
          transform: translateX(6px);
        }
        .podcast-arrow {
          transition: transform 0.25s ease;
          display: inline-block;
        }
      `}</style>

      <section
        style={{
          backgroundColor: "var(--bg-primary)",
          padding: "64px 24px",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            height: "260px",
            border: "1px solid var(--border)",
          }}
        >
          {/* 25% — Imagem */}
          <div
            style={{
              width: "25%",
              position: "relative",
              backgroundColor: "#111111",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <Image
              src="/podcastHost.png"
              alt="Host do Podcast Na Pista"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>

          {/* 75% — Botão CTA */}
          <Link href="/categoria/podcast" className="podcast-cta-btn">
            <span
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Podcast Na Pista · Episódio de hoje
            </span>

            <span
              style={{
                color: "#ffffff",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                maxWidth: "600px",
              }}
            >
              Ouça agora o podcast de hoje
            </span>

            <span
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                marginTop: "4px",
              }}
            >
              Gil e Bia falam sobre segurança no trânsito — pra quem dirige a
              trabalho e pra quem usa o carro todo dia.
            </span>

            <span
              style={{
                marginTop: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#ffffff",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderBottom: "1.5px solid rgba(255,255,255,0.5)",
                paddingBottom: "2px",
              }}
            >
              Ver todos os episódios
              <span className="podcast-arrow">→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Divisor */}
      <div
        style={{
          height: "1px",
          backgroundColor: "var(--border)",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      />
    </>
  );
}
