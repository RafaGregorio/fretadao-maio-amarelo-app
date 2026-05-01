"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Segurança no Trânsito", href: "/categoria/seguranca" },
  { label: "Prevenção de Acidentes", href: "/categoria/prevencao" },
  { label: "Fretadão Podcast", href: "/categoria/podcast" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll.current || current < 10);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          color: var(--text-primary);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 4px;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          right: 50%;
          height: 1.5px;
          background-color: var(--accent);
          transition: left 0.3s ease, right 0.3s ease;
        }

        .nav-link:hover {
          color: var(--text-muted);
        }

        .nav-link:hover::after {
          left: 0;
          right: 0;
        }

        .btn-missao {
          background-color: #eab308;
          color: #1a1a1a;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background-color 0.25s ease, transform 0.25s ease, border-radius 0.25s ease;
          white-space: nowrap;
        }

        .btn-missao:hover {
          background-color: #fde047;
          transform: scale(1.06);
          border-radius: 12px;
        }

        .mobile-nav-link {
          color: #9ca3af;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 1px solid #2a2a2a;
          display: block;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #ffffff;
        }
      `}</style>

      <nav
        style={{
          backgroundColor: "var(--bg-primary)",
          borderBottom: "1px solid #2a2a2a",
          position: "sticky",
          top: visible ? 0 : "-80px",
          transition: "top 0.3s ease, background-color 0.3s ease",
          zIndex: 50,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "82px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
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

          {/* Links — desktop */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              flex: 1,
              justifyContent: "center",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Botão CTA */}
          <div style={{ flexShrink: 0 }} className="hidden-mobile">
            <Link href="/missao" className="btn-missao">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Missão Maio Amarelo
            </Link>
          </div>

          <ThemeToggle />

          {/* Hambúrguer — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "8px 24px 24px",
              borderTop: "1px solid #2a2a2a",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/missao"
              className="btn-missao"
              style={{ marginTop: "16px", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Missão Maio Amarelo
            </Link>
          </div>
        )}

        {/* Responsividade inline */}
        <style>{`
          @media (max-width: 900px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
          @media (min-width: 901px) {
            .show-mobile { display: none !important; }
          }
        `}</style>
      </nav>
    </>
  );
}
