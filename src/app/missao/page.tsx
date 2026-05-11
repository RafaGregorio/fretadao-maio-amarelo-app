"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const empresas = [
  "3 G Transporte Executivo",
  "Aguia Turismo",
  "Amanhecer",
  "As Service",
  "Bortolotto Fretamento",
  "Bpf Mobilidade Corporativa",
  "Branca De Neve",
  "Capellini",
  "Carvalhos Tur",
  "Cconttur Transportes Ltda",
  "Dinatur",
  "Exclusiva Turismo",
  "Expresso Biagini",
  "Famatur",
  "Fretadão",
  "Gatti",
  "Gold Turismo",
  "Gtz Turismo",
  "Jc Fretamento",
  "Karoline E Juliano Transportes",
  "Loca Trans",
  "Long Log",
  "Lopes",
  "Mac Turismo & Locação Ltda.",
  "Maia Tur",
  "Maranatha",
  "Master Bus",
  "Max Tour Atibaia",
  "Max Tour Bragança Extrema",
  "Max Tour Poços",
  "Melhorim Vale Ouro",
  "New Transpontual",
  "Pakatur",
  "Pantur",
  "Pavao Turismo",
  "Piccolotur",
  "Piracicabana / Breda",
  "Qualitat",
  "Rapido Campinas",
  "Realce Viagens",
  "Ribeiro Tur",
  "Rio Negro Turismo (Rn)",
  "Stelman Tour",
  "Sussantur",
  "Tamboré",
  "Tel Turismo",
  "Tinga Turismo",
  "Transcolita Turismo",
  "Transguerra",
  "Translocave",
  "Transmimo Jundiai",
  "Transmimo Valinhos",
  "Universal Tour Locadora De Veiculos Ltda",
  "Venetur Turismo",
  "Viação Jacareí",
  "Viacao Mimo São José",
  "Vls Viação Litoral Sul",
];

export default function MissaoPage() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validarEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const formValido =
    nome.trim() !== "" && email.trim() !== "" && !emailError && area !== "";

  return (
    <>
      <style>{`
        @keyframes color-loop {
          0%, 100% { color: #111111; transform: scale(1); }
          50% { color: #eab308; transform: scale(1.06); }
        }
        .maio-title {
          animation: color-loop 2.5s ease-in-out infinite;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          text-align: center;
          margin: 0 0 48px 0;
        }
        .missao-select {
          width: 100%;
          background-color: #ffffff;
          border: 1.5px solid #4b5563;
          border-radius: 10px;
          padding: 14px 40px 14px 16px;
          color: #111111;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
        .missao-select:focus { border-color: #22af9e; }
        .missao-select option { background-color: #ffffff; color: #111111; }
      `}</style>

      <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-[#f9fafb]">
        <h1 className="maio-title">Maio Amarelo</h1>

        <div className="w-full max-w-[480px] bg-white rounded-2xl border border-[#4b5563] shadow-sm p-8 md:p-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-gray-400 text-sm no-underline transition-colors hover:text-gray-700 mb-8"
          >
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

          <span className="block text-[#eab308] text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-3">
            Identificação
          </span>

          <h2
            className="text-gray-900 font-extrabold leading-tight mb-2"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
          >
            Quem está
            <br />
            atrás do volante?
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Seu nome e empresa entram no ranking interno Fretadão.
          </p>

          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-700 text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2">
                Nome
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-white border border-[#4b5563] rounded-xl px-4 py-3.5 text-gray-900 text-[0.95rem] outline-none transition-colors placeholder:text-gray-400 focus:border-[#22af9e]"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="voce@email.com.br"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(!validarEmail(e.target.value));
                }}
                className={`w-full bg-white border rounded-xl px-4 py-3.5 text-gray-900 text-[0.95rem] outline-none transition-colors placeholder:text-gray-400 focus:border-[#22af9e] ${emailError ? "border-red-400" : "border-[#4b5563]"}`}
              />
              {emailError && (
                <span className="block text-red-500 text-xs mt-1.5">
                  Digite um e-mail válido. Ex: nome@email.com
                </span>
              )}
            </div>

            <div>
              <label className="block text-gray-700 text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2">
                Empresa
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="missao-select"
              >
                <option value="">Selecione sua empresa...</option>
                {empresas.map((emp) => (
                  <option key={emp} value={emp}>
                    {emp}
                  </option>
                ))}
              </select>
            </div>

            <button
              disabled={!formValido}
              onClick={() =>
                router.push(
                  `/quiz?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&area=${encodeURIComponent(area)}`,
                )
              }
              className="w-full py-4 bg-[#22af9e] text-white text-xs font-bold tracking-widest uppercase rounded-xl border-none cursor-pointer transition-all duration-200 hover:bg-[#1a9080] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Entrar na Missão →
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
