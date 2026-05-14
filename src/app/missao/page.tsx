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
  const [area, setArea] = useState("");
  const [contato, setContato] = useState("");
  const [contatoError, setContatoError] = useState(false);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isTelefone = (v: string) => /^[\d\s\(\)\-\+]{8,}$/.test(v);
  const contatoValido = (v: string) => isEmail(v) || isTelefone(v);

  const formValido =
    nome.trim() !== "" &&
    area !== "" &&
    (contato.trim() === "" || contatoValido(contato));

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
          background-color: var(--bg-primary);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 14px 40px 14px 16px;
          color: -var(-text-primary);
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
        .missao-select option { background-color: var(--bg-primary); color: var( --text-primary); }
      `}</style>

      <main className="min-h-screen flex flex-col items-center px-6 py-16 bg-[--bg-primary]">
        <h1 className="maio-title">Maio Amarelo</h1>

        <div className="w-full max-w-[480px] bg-[--bg-secondary] rounded-2xl border border-[#4b5563] shadow-sm p-8 md:p-10">
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
            className="text-[--text-primary] font-extrabold leading-tight mb-2"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
          >
            Quem está
            <br />
            atrás do volante?
          </h2>

          <p className="text-[--text-primary] text-sm mb-8">
            Seu nome e empresa entram no ranking interno Fretadão.
          </p>

          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-[--text-muted] text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2">
                Nome
              </label>
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-[--bg-primary] border border-[--border] rounded-xl px-4 py-3.5 text-[--text-primary] text-[0.95rem] outline-none transition-colors placeholder:text-gray-400 focus:border-[#22af9e]"
              />
            </div>

            <div>
              <label className="...">
                E-mail ou Telefone{" "}
                <span className="text-gray-400 normal-case">(opcional)</span>
              </label>
              <input
                type="text"
                placeholder="voce@email.com ou (11) 99999-9999"
                value={contato}
                onChange={(e) => {
                  setContato(e.target.value);
                  if (e.target.value && !contatoValido(e.target.value)) {
                    setContatoError(true);
                  } else {
                    setContatoError(false);
                  }
                }}
                className={`w-full bg-white border rounded-xl px-4 py-3.5 text-gray-900 text-[0.95rem] outline-none transition-colors placeholder:text-gray-400 focus:border-[#22af9e] ${contatoError ? "border-red-400" : "border-[#4b5563]"}`}
              />
              {contatoError && (
                <span className="block text-red-500 text-xs mt-1.5">
                  Digite um e-mail ou telefone válido.
                </span>
              )}
            </div>

            <div>
              <label className="block text-[--text-muted] text-[0.65rem] font-bold tracking-[0.12em] uppercase mb-2">
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
              onClick={() => {
                const email = isEmail(contato) ? contato : "";
                const telefone = isTelefone(contato) ? contato : "";
                router.push(
                  `/quiz?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&telefone=${encodeURIComponent(telefone)}&area=${encodeURIComponent(area)}`,
                );
              }}
              className="w-full py-4 bg-[--accent] text-white text-xs font-bold tracking-widest uppercase rounded-xl border-none cursor-pointer transition-all duration-200 hover:bg-[--accentH] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Entrar na Missão →
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 mt-10">
            <p className="text-[var(--text-faint)] text-xs font-bold tracking-widest uppercase">
              Acesse pelo celular
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
