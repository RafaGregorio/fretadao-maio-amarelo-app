"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PodcastPlayer from "@/components/PodcastPlayer";

const episodios = [
  {
    badge: "Ep. 01 · Maio Amarelo 2026",
    titulo: "Podcast Na Pista",
    descricao: "Ouça agora o podcast que preparamos especialmente para vocês!",
    src: "/audio/ep-01.mp3",
  },
  {
    badge: "Ep. 02 · Maio Amarelo 2026",
    titulo: "Segundo Episódio",
    descricao: "Mais um episódio especial sobre segurança no trânsito.",
    src: "/audio/ep-02.mp3",
  },
];

export default function PodcastPage() {
  return (
    <>
      <style>{`
        @keyframes mic-pulse {
          0%, 100% { transform: scale(1); color: var(--accent); }
          50% { transform: scale(1.18); color: #eab308; }
        }
        .mic-icon { animation: mic-pulse 2.5s ease-in-out infinite; display: inline-block; }
      `}</style>

      <Navbar />

      <main className="bg-[var(--bg-primary)] min-h-screen transition-colors duration-300">
        <div className="max-w-[860px] mx-auto px-6 py-16 md:py-20 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="mic-icon text-[var(--accent)]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </span>
            <h1
              className="text-[var(--text-primary)] font-black leading-none m-0"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
            >
              Fretadão Podcast
            </h1>
          </div>

          <p className="text-[var(--text-faint)] text-base leading-relaxed text-center max-w-[520px] mb-12">
            Conversas reais sobre segurança no trânsito, direção defensiva e a
            vida de quem move o Brasil todo dia.
          </p>

          <div className="w-full flex flex-col gap-6">
            {episodios.map((ep) => (
              <PodcastPlayer
                key={ep.src}
                badge={ep.badge}
                titulo={ep.titulo}
                descricao={ep.descricao}
                src={ep.src}
              />
            ))}
          </div>

          <div className="w-full mt-10">
            <p className="text-[var(--text-faint)] text-xs font-bold tracking-widest uppercase mb-4">
              Vídeo
            </p>
            <iframe
              className="w-full aspect-video rounded-2xl border border-[var(--border)]"
              src="https://www.youtube.com/embed/_ID"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
