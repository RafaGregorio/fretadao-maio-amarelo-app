import Link from "next/link";

const categorias = [
  { label: "Segurança no Trânsito", href: "/categoria/seguranca" },
  { label: "Prevenção de Acidentes", href: "/categoria/prevencao" },
  { label: "Conscientização", href: "/categoria/conscientizacao" },
  { label: "Podcast Na Pista", href: "/categoria/podcast" },
  { label: "Missão Maio Amarelo", href: "/missao" },
];

const linksEmpresa = [
  { label: "fretadao.com.br", href: "https://www.fretadao.com.br" },
  {
    label: "Mobilidade Corporativa",
    href: "https://www.fretadao.com.br/mobilidade-corporativa",
  },
  {
    label: "Trabalhe Conosco",
    href: "https://www.fretadao.com.br/trabalhe-conosco",
  },
];

const sociais = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/fretadao",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fretadao",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="var(--bg-primary)"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          color: var(--text-muted);
          font-size: 0.9rem;
          text-decoration: none;
          display: block;
          padding: 5px 0;
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: var(--text-primary); }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .social-btn:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }
      `}</style>

      <footer
        style={{
          backgroundColor: "var(--bg-primary)",
          padding: "64px 24px 0",
          transition: "background-color 0.3s ease",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Grid 3 colunas */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "48px",
              paddingBottom: "48px",
            }}
          >
            {/* Coluna 1 — Logo + descrição + sociais */}
            <div>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  marginBottom: "20px",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--text-primary)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="M16 8h4l3 5v3h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Fretadão
                </span>
              </Link>

              <p
                style={{
                  color: "var(--text-faint)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  maxWidth: "300px",
                }}
              >
                Motoristas que transportam vidas — seja um ônibus cheio de
                colaboradores ou sua família. Iniciativa Fretadão pelo Maio
                Amarelo 2026.
              </p>

              <div style={{ display: "flex", gap: "10px" }}>
                {sociais.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="social-btn"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna 2 — Categorias */}
            <div>
              <p
                style={{
                  color: "var(--text-primary)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Categorias
              </p>
              {categorias.map((c) => (
                <Link key={c.href} href={c.href} className="footer-link">
                  {c.label}
                </Link>
              ))}
            </div>

            {/* Coluna 3 — Fretadão */}
            <div>
              <p
                style={{
                  color: "var(--text-primary)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Fretadão
              </p>
              {linksEmpresa.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {l.label}
                </a>
              ))}
              <p
                style={{
                  color: "var(--text-faint)",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  marginTop: "20px",
                }}
              >
                Fretados em todo o Brasil. Experiência que transforma a
                mobilidade corporativa.
              </p>
            </div>
          </div>

          {/* Linha divisória */}
          <div style={{ height: "1px", backgroundColor: "var(--border)" }} />

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 0 60px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span style={{ color: "var(--text-faint)", fontSize: "0.8rem" }}>
              © 2026 Fretadão Na Pista. Todos os direitos reservados.
            </span>
            <span style={{ color: "var(--text-faint)", fontSize: "0.8rem" }}>
              Maio Amarelo 2026 · No trânsito, toda escolha salva vidas.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
