"use client";

import { useState } from "react";
import { contactItems, resume } from "../data/userData";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";

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
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Connect
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
          Always open to interesting engineering challenges, product collaborations, or discussing new ideas.
        </p>
      </div>

      {/* Main Contact Action Box */}
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[11px] font-mono text-zinc-500 font-semibold uppercase tracking-wider">
                Direct Email
              </p>
              <p className="text-sm font-bold text-white font-mono">{email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-all shadow-sm"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-3 py-2.5 rounded-xl border border-white/5 bg-white/[0.015] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                  <item.icon size={13} className="text-zinc-300 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-semibold text-zinc-300 group-hover:text-white truncate transition-colors">
                  {item.label}
                </span>
              </div>
              <ArrowUpRight
                size={12}
                className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Website Footer Info */}
      <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} Abdul Jaber. All rights reserved.</p>
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
            Writings
          </a>
          <span>•</span>
          <a
            href="https://github.com/aj-seven/aj-seven.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;