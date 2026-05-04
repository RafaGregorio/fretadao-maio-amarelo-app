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

  return (
    <>
      <style>{`
        @keyframes mic-pulse {
          0%, 100% { transform: scale(1); color: var(--accent); }
          50% { transform: scale(1.18); color: #eab308; }
        }
        .mic-icon { animation: mic-pulse 2.5s ease-in-out infinite; display: inline-block; }

        .progress-track {
          width: 100%;
          height: 5px;
          background-color: var(--bg-hover);
          border-radius: 999px;
          cursor: pointer;
          position: relative;
        }
        .progress-fill {
          height: 100%;
          background-color: var(--accent);
          border-radius: 999px;
          pointer-events: none;
          transition: width 0.1s linear;
        }

        .play-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 40px;
          border-radius: 10px;
          background-color: var(--accent);
          border: none;
          cursor: pointer;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }
        .play-btn:hover { background-color: #1a9080; transform: scale(1.03); }

        .vol-bar {
          -webkit-appearance: none;
          appearance: none;
          width: 90px;
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

        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        .wave-bar { width: 3px; border-radius: 999px; background-color: var(--accent); transform-origin: bottom; }
        .wave-bar.active { animation: wave 0.8s ease-in-out infinite; }
        .wave-bar:nth-child(2).active { animation-delay: 0.15s; }
        .wave-bar:nth-child(3).active { animation-delay: 0.3s; }
        .wave-bar:nth-child(4).active { animation-delay: 0.45s; }
        .wave-bar:nth-child(5).active { animation-delay: 0.6s; }

        .vol-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          padding: 0;
          transition: color 0.2s ease;
        }
        .vol-btn:hover { color: var(--text-primary); }
      `}</style>

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
            maxWidth: "860px",
            margin: "0 auto",
            padding: "80px 24px 96px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Título */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <span className="mic-icon">
              <svg
                width="36"
                height="36"
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
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: 1,
              }}
            >
              Fretadão Podcast
            </h1>
          </div>

          <p
            style={{
              color: "var(--text-faint)",
              fontSize: "1rem",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: "520px",
              marginBottom: "56px",
            }}
          >
            Conversas reais sobre segurança no trânsito, direção defensiva e a
            vida de quem move o Brasil todo dia.
          </p>

          {/* Card player */}
          <div
            style={{
              width: "100%",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "36px 40px",
            }}
          >
            {/* Info do episódio */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "12px",
                  backgroundColor: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="28"
                  height="28"
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

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "rgba(34,175,158,0.12)",
                    border: "1px solid rgba(34,175,158,0.25)",
                    color: "var(--accent)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    marginBottom: "8px",
                  }}
                >
                  Ep. 01 · Maio Amarelo 2026
                </div>
                <h2
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    margin: "0 0 4px 0",
                  }}
                >
                  Fretadão Podcast
                </h2>
                <p
                  style={{
                    color: "var(--text-faint)",
                    fontSize: "0.8rem",
                    margin: 0,
                  }}
                >
                  Ouça agora o podcast que preparamos especialmente para vocês!
                </p>
              </div>

              {/* Ondas */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "3px",
                  height: "28px",
                  flexShrink: 0,
                }}
              >
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
              className="progress-track"
              onClick={handleProgressClick}
            >
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Tempo */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "8px 0 28px",
              }}
            >
              <span
                style={{
                  color: "var(--text-faint)",
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                }}
              >
                {formatTime(currentTime)}
              </span>
              <span
                style={{
                  color: "var(--text-faint)",
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                }}
              >
                {formatTime(duration)}
              </span>
            </div>

            {/* Controles: play | volume */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "130px" }} />

              <button
                className="play-btn"
                onClick={togglePlay}
                aria-label={playing ? "Pausar" : "Reproduzir"}
              >
                {playing ? (
                  <>
                    <svg
                      width="16"
                      height="16"
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
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Reproduzir
                  </>
                )}
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "130px",
                  justifyContent: "flex-end",
                }}
              >
                <button className="vol-btn" onClick={toggleMute}>
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
                  style={
                    {
                      "--vol": `${(muted ? 0 : volume) * 100}%`,
                    } as React.CSSProperties
                  }
                />
              </div>
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
