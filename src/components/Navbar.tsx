"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Nossas Ocorrências", href: "/categoria/seguranca" },
  { label: "Prevenção de Acidentes", href: "/categoria/prevencao" },
  { label: "Fretadão Podcast", href: "/categoria/podcast" },
];

export default function Navbar() {
  const { theme } = useTheme();
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
    <nav
      style={{ top: visible ? 0 : "-90px" }}
      className="sticky z-50 w-full transition-all duration-300 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logoBranca.png"
            alt="Fretadão"
            width={160}
            height={40}
            style={{
              objectFit: "contain",
              filter: theme === "light" ? "invert(1)" : "none",
            }}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[var(--text-muted)] text-xs font-medium tracking-wide uppercase no-underline pb-1 transition-colors duration-200 hover:text-[var(--text-primary)] group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 right-1/2 h-[1.5px] bg-[var(--accent)] transition-all duration-300 group-hover:left-0 group-hover:right-0" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/missao"
            className="inline-flex items-center gap-1.5 bg-[#eab308] text-[#1a1a1a] text-xs font-bold tracking-wide uppercase px-4 py-2 rounded-md no-underline transition-all duration-200 hover:bg-[#fde047] hover:scale-105 hover:rounded-xl"
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
          <ThemeToggle />
        </div>

        {/* Mobile — Hambúrguer */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-transparent border-none cursor-pointer p-1"
            aria-label="Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-primary)"
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
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] border-t border-[var(--border)] px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[var(--text-muted)] text-sm font-medium tracking-wide uppercase no-underline py-3 border-b border-[var(--border)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/missao"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-1.5 bg-[#eab308] text-[#1a1a1a] text-xs font-bold tracking-wide uppercase px-4 py-2 rounded-md no-underline"
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
    </nav>
  );
}
