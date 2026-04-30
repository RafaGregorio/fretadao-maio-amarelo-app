import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function SegurancaPage() {
  return (
    <>
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
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "64px 24px 96px",
          }}
        >
          {/* Header da categoria */}
          <div style={{ marginBottom: "48px" }}>
            {/* Label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Destaques
              </span>
            </div>

            {/* Título */}
            <h1
              style={{
                color: "var(--text-primary)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                margin: "0 0 8px 0",
                lineHeight: 1.1,
              }}
            >
              Conscientização
            </h1>

            {/* Linha accent */}
            <div
              style={{
                width: "48px",
                height: "3px",
                backgroundColor: "var(--accent)",
                borderRadius: "999px",
                margin: "12px 0 16px",
              }}
            />

            {/* Descrição */}
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1rem",
                maxWidth: "1000px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Maio Amarelo é todo dia. Campanhas, dados e histórias que fazem a
              gente pensar sobre o trânsito.
            </p>
          </div>

          {/* Estado vazio */}
          <div
            style={{
              backgroundColor: "#242424",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "48px 32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "var(--text-faint)",
                fontSize: "0.9rem",
                margin: 0,
              }}
            >
              Nenhum artigo nesta categoria ainda.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
