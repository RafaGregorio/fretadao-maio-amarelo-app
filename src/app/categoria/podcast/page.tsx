"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const TOTAL = 276;

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function PodcastPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(TOTAL);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => {
      if (audio.duration) setDuration(audio.duration);
    };
    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("durationchange", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("durationchange", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressBarRef.current;
    if (!audio || !bar) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = pct * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const val = Number(e.target.value);
    if (!audio) return;
    audio.volume = val;
    setVolume(val);
    setMuted(val === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const progress = (currentTime / duration) * 100;
  const volPct = `${(muted ? 0 : volume) * 100}%`;

  return (
    <>
      <style>{`
        @keyframes mic-pulse {
          0%, 100% { transform: scale(1); color: var(--accent); }
          50% { transform: scale(1.18); color: #eab308; }
        }
        .mic-icon { animation: mic-pulse 2.5s ease-in-out infinite; display: inline-block; }

        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .wave-bar {
          width: 3px;
          border-radius: 999px;
          background-color: var(--accent);
          transform-origin: bottom;
        }
        .wave-bar.active { animation: wave 0.8s ease-in-out infinite; }
        .wave-bar:nth-child(2).active { animation-delay: 0.15s; }
        .wave-bar:nth-child(3).active { animation-delay: 0.3s; }
        .wave-bar:nth-child(4).active { animation-delay: 0.45s; }
        .wave-bar:nth-child(5).active { animation-delay: 0.6s; }

        .vol-bar {
          -webkit-appearance: none;
          appearance: none;
          width: 80px;
          height: 3px;
          border-radius: 999px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(
            to right,
            var(--text-muted) 0%,
            var(--text-muted) var(--vol, 100%),
            var(--bg-hover) var(--vol, 100%),
            var(--bg-hover) 100%
          );
        }
        .vol-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-primary);
          cursor: pointer;
        }

        @media (max-width: 480px) {
          .vol-bar { width: 60px; }
        }
      `}</style>

      <Navbar />

      <main className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-16 sm:py-20 pb-20 sm:pb-24 flex flex-col items-center">
          {/* Título */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="mic-icon text-[var(--accent)]">
              <svg
                width="28"
                height="28"
                className="sm:w-9 sm:h-9"
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
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] leading-none">
              Fretadão Podcast
            </h1>
          </div>

          <p className="text-[var(--text-faint)] text-sm sm:text-base leading-relaxed text-center max-w-[520px] mb-12 sm:mb-14 px-2">
            Conversas reais sobre segurança no trânsito, direção defensiva e a
            vida de quem move o Brasil todo dia.
          </p>

          {/* Card player */}
          <div className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-5 sm:p-8 md:p-10">
            {/* Info do episódio */}
            <div className="flex items-start gap-4 mb-8">
              {/* Ícone do episódio */}
              <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-xl bg-[var(--accent)] flex items-center justify-center shrink-0">
                <svg
                  width="22"
                  height="22"
                  className="sm:w-7 sm:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 bg-[rgba(34,175,158,0.12)] border border-[rgba(34,175,158,0.25)] text-[var(--accent)] text-[0.6rem] sm:text-[0.65rem] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2">
                  Ep. 01 · Maio Amarelo 2026
                </div>
                <h2 className="text-[var(--text-primary)] text-base sm:text-lg font-bold mb-1">
                  Fretadão Podcast
                </h2>
                <p className="text-[var(--text-faint)] text-xs sm:text-sm leading-snug">
                  Ouça agora o podcast que preparamos especialmente para vocês!
                </p>
              </div>

              <div className="hidden xs:flex sm:flex items-end gap-[3px] h-7 shrink-0">
                {[18, 24, 20, 28, 16].map((h, i) => (
                  <div
                    key={i}
                    className={`wave-bar ${playing ? "active" : ""}`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <div
              ref={progressBarRef}
              className="w-full h-[5px] bg-[var(--bg-hover)] rounded-full cursor-pointer relative"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-[var(--accent)] rounded-full pointer-events-none transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between mt-2 mb-6 sm:mb-7">
              <span className="text-[var(--text-faint)] text-xs font-mono">
                {formatTime(currentTime)}
              </span>
              <span className="text-[var(--text-faint)] text-xs font-mono">
                {formatTime(duration)}
              </span>
            </div>

            {/* Controles: volume | play  */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-[110px] sm:w-[130px]">
                <button
                  onClick={toggleMute}
                  className="bg-transparent border-none cursor-pointer text-[var(--text-muted)] flex items-center p-0 transition-colors duration-200 hover:text-[var(--text-primary)]"
                  aria-label={muted ? "Desmutar" : "Mutar"}
                >
                  {muted || volume === 0 ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  className="vol-bar"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                  style={{ "--vol": volPct } as React.CSSProperties}
                />
              </div>

              <button
                onClick={togglePlay}
                aria-label={playing ? "Pausar" : "Reproduzir"}
                className="flex items-center justify-center gap-2 px-7 py-3 sm:px-10 sm:py-3.5 rounded-[10px] bg-[var(--accent)] border-none cursor-pointer text-white text-[0.8rem] sm:text-[0.85rem] font-bold tracking-[0.06em] uppercase transition-all duration-200 hover:bg-[#1a9080] hover:scale-[1.03] active:scale-95"
              >
                {playing ? (
                  <>
                    <svg
                      width="14"
                      height="14"
                      className="sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                    Pausar
                  </>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      className="sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Reproduzir
                  </>
                )}
              </button>

              <div className="w-[110px] sm:w-[130px]" />
            </div>
          </div>

          <audio ref={audioRef} src="/audio/episodio-01.mp3" preload="auto" />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
