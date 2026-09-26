"use client";

import { useState } from "react";
import { contactItems, resume } from "../data/userData";
import { ArrowUpRight, Copy, Check } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ajseven@outlook.in";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full text-left space-y-8 pt-4 pb-2">
      {/* Header */}
      <div className="space-y-2 border-b border-white/5 pb-4">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Connect
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
          Always open to interesting engineering challenges, product collaborations, or discussing new ideas.
        </p>
      </div>

      {/* Direct Communication Line (Zero Outer Box Container) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Direct Mail
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-blue-400 font-mono transition-colors"
              >
                {email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 font-mono transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-white hover:text-blue-400 transition-colors self-start sm:self-auto"
          >
            <span>Compose message</span>
            <ArrowUpRight size={12} className="text-zinc-500" />
          </a>
        </div>

        {/* Network Channels Strip */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-400">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mr-2">
            Network
          </span>
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={11} className="text-zinc-600" />
            </a>
          ))}
        </div>
      </div>

      {/* Editorial Colophon / Footer */}
      <footer className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
        <p>© {new Date().getFullYear()} Abdul Jaber.</p>
        <div className="flex items-center gap-4">
          <a
            href={resume["full-stack-developer"]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Resume ↗
          </a>
          <span>•</span>
          <a href="/blog" className="hover:text-zinc-300 transition-colors">
            Writings ↗
          </a>
          <span>•</span>
          <a
            href="https://github.com/aj-seven/aj-seven.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Source ↗
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;