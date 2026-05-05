"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show ? (
    <button
      onClick={() => {
        const start = window.scrollY;
        const duration = 800; // ms
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const ease = 1 - Math.pow(1 - progress, 4);
          window.scrollTo(0, start * (1 - ease));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 99,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        backgroundColor: "var(--accent)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        transition: "transform 0.2s ease, background-color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label="Voltar ao topo"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  ) : null;
}
