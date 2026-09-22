"use client";

import { useState, useEffect } from "react";
import { Terminal, Sun, Moon, Menu, X } from "lucide-react";
import { useStore } from "@nanostores/react";
import { themeMode, type ThemeMode } from "../store";

type Props = {
  terminalMode: boolean;
  setTerminalMode: (v: boolean) => void;
  uiType?: "landing" | "modular";
  setUiType?: (v: "landing" | "modular") => void;
};

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Stack", href: "/#skills" },
  { name: "Writings", href: "/#blog" },
  { name: "Connect", href: "/#contact" },
];

const AJCalligraphy = ({
  terminalMode,
  isLight,
}: {
  terminalMode: boolean;
  isLight: boolean;
}) => {
  const gradId = "aj-calligraphy-grad";

  return (
    <div className="flex items-center group cursor-pointer select-none py-1">
      <div className="relative w-10 h-8 sm:w-11 sm:h-8.5 flex items-center justify-center">
        {/* Soft Ambient Glow */}
        <div
          className={`absolute -inset-1 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full ${
            terminalMode
              ? "bg-green-500/25"
              : isLight
              ? "bg-blue-500/15"
              : "bg-sky-500/25"
          }`}
        />

        <svg
          viewBox="0 0 46 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor={
                  terminalMode
                    ? "#22c55e"
                    : isLight
                    ? "#2563eb"
                    : "#38bdf8"
                }
              />
              <stop
                offset="100%"
                stopColor={
                  terminalMode
                    ? "#4ade80"
                    : isLight
                    ? "#1d4ed8"
                    : "#818cf8"
                }
              />
            </linearGradient>
          </defs>

          {/* Stroke 1: Calligraphy 'A' Up & Downstroke */}
          <path
            d="M 5 24 C 7.5 15, 12 5.5, 15 5 C 17.5 5.5, 21.5 15, 24 24"
            stroke={`url(#${gradId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="aj-stroke-1"
          />

          {/* Stroke 2: Crossbar looping smoothly into 'J' Descender & Hook */}
          <path
            d="M 9 16.5 C 15 14.5, 22 14, 28 13.5 C 33.5 12, 34 5.5, 34 5.5 V 21.5 C 34 27, 27.5 28, 24.5 24.5"
            stroke={`url(#${gradId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="aj-stroke-2"
          />

          {/* Stroke 3: Dynamic Underline Swoosh */}
          <path
            d="M 5 30 C 15 28, 28 28, 41 31"
            stroke={`url(#${gradId})`}
            strokeWidth="1.6"
            strokeLinecap="round"
            className="aj-stroke-3"
          />

          {/* Calligraphy Accent Flourish Dot */}
          <circle
            cx="39"
            cy="10"
            r="1.6"
            fill={
              terminalMode
                ? "#22c55e"
                : isLight
                ? "#2563eb"
                : "#38bdf8"
            }
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </svg>
      </div>
    </div>
  );
};


const Navbar = ({ terminalMode, setTerminalMode }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentTheme = useStore(themeMode);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme: ThemeMode = currentTheme === "dark" ? "light" : "dark";

    const isViewTransitionSupported =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isViewTransitionSupported) {
      themeMode.set(nextTheme);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (document as any).startViewTransition(() => {
      themeMode.set(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        terminalMode
          ? "bg-black text-green-400 border-b border-green-500/30 py-2"
          : scrolled
          ? "bg-[#050505]/85 dark:bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.06] py-2 sm:py-2.5"
          : "bg-transparent py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-4 flex items-center justify-between">
        {/* Animated Calligraphy AJ Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (terminalMode) {
              e.preventDefault();
            }
          }}
          className="flex items-center"
        >
          <AJCalligraphy
            terminalMode={terminalMode}
            isLight={currentTheme === "light"}
          />
        </a>



        {/* Desktop Nav Links (Centered) */}
        {!terminalMode && (
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Theme Toggle Button with Circular Reveal */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            title={currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark/light theme"
          >
            {currentTheme === "dark" ? (
              <Sun size={16} className="text-amber-300" />
            ) : (
              <Moon size={16} className="text-blue-500" />
            )}
          </button>

          {/* Terminal Toggle Button */}
          <button
            onClick={() => setTerminalMode(!terminalMode)}
            className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border transition-all duration-300 ${
              terminalMode
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
            title="Toggle Terminal"
          >
            <Terminal size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          {!terminalMode && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-xl border border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              title="Toggle Navigation Menu"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && !terminalMode && (
        <div className="md:hidden max-w-4xl mx-auto px-4 mt-2">
          <div className="p-2.5 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

