"use client";

import { useState } from "react";
import Link from "next/link";
// import Navbar from "@/components/Navbar";

export default function MissaoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailValido =
    email.endsWith("@fretadao.com") && email.length > "@fretadao.com".length;
  const formValido = nome.trim() !== "" && emailValido && area.trim() !== "";

  const handleEmailBlur = () => {
    if (email && !emailValido) {
      setEmailError("Apenas e-mails @fretadao.com são permitidos.");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  return (
    <>
      <style>{`
        @keyframes color-loop {
          0%, 100% { 
          color: #ffffff;
          transform: scale(1);
        }
        50% { 
          color: #eab308;
          transform: scale(1.06);
          }
        }

        .maio-title {
          animation: color-loop 2.5s ease-in-out infinite;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          text-align: center;
          margin: 0 0 48px 0;
        }

        .missao-input {
          width: 100%;
          background-color: #1e1e1e;
          border: 1.5px solid #2e2e2e;
          border-radius: 10px;
          padding: 14px 16px;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }

        .missao-input::placeholder {
          color: #4b5563;
        }

        .missao-input:focus {
          border-color: #22af9e;
        }

        .missao-input.error {
          border-color: #ef4444;
        }

        .missao-label {
          color: #ffffff;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .btn-missao-submit {
          width: 100%;
          padding: 16px;
          background-color: #22af9e;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.2s ease, opacity 0.2s ease;
        }

        .btn-missao-submit:hover:not(:disabled) {
          background-color: #1a9080;
        }

        .btn-missao-submit:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .voltar-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
          margin-bottom: 40px;
        }

        .voltar-link:hover {
          color: #ffffff;
        }

        .error-msg {
          color: #ef4444;
          font-size: 0.78rem;
          margin-top: 6px;
          display: block;
        }
      `}</style>

      <main
        style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "64px 24px",
        }}
      >
        {/* H1 animado */}
        <h1 className="maio-title">Maio Amarelo</h1>

        {/* Card do formulário */}
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
          }}
        >
          {/* Voltar */}
          <Link href="/" className="voltar-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Voltar
          </Link>

          {/* Label identificação */}
          <span
            style={{
              color: "#eab308",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px",
            }}
          >
            Identificação
          </span>

          {/* Título */}
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.6rem, 3vw, 2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px 0",
            }}
          >
            Quem está
            <br />
            atrás do volante?
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "0.875rem",
              margin: "0 0 32px 0",
            }}
          >
            Seu nome e área entram no ranking interno Fretadão.
          </p>

          {/* Campos */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Nome */}
            <div>
              <label className="missao-label">Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="missao-input"
              />
            </div>

            {/* Email */}
            <div>
              <label className="missao-label">E-mail Corporativo</label>
              <input
                type="email"
                placeholder="voce@fretadao.com.br"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={`missao-input ${emailError ? "error" : ""}`}
              />
              {emailError && <span className="error-msg">{emailError}</span>}
            </div>

            {/* Área */}
            <div>
              <label className="missao-label">Área / Função</label>
              <input
                type="text"
                placeholder="Motorista · Técnico · Administrativo · Comercial..."
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="missao-input"
              />
            </div>

            {/* Botão */}
            <button className="btn-missao-submit" disabled={!formValido}>
              Entrar na Missão →
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
