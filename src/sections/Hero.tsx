"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { personalInfo, contactItems, resume } from "../data/userData";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "ajseven@outlook.in";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="w-full text-left pt-2 pb-6 space-y-6">
      {/* Editorial Identity Bar: Organic Avatar + Headline */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-5 sm:gap-6">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-400">
              {personalInfo.alias}
            </span>
          </div>

          <p className="text-sm sm:text-base font-medium text-zinc-400">
            {personalInfo.role}
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>{personalInfo.location}</span>
            <span>•</span>
            <span className="text-green-400 font-medium">{personalInfo.status}</span>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative shrink-0 self-start sm:self-auto">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-md">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Bio */}
      <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
        {personalInfo.aboutText}
      </p>

      {/* Editorial Direct Actions & Network Colophon */}
      <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-1 text-xs font-medium text-zinc-400">
        {/* Quiet Network Links */}
        <div className="flex items-center gap-4 flex-wrap">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={11} className="text-zinc-600" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;