"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { personalInfo, contactItems, resume } from "../data/userData";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full pt-2 sm:pt-4 pb-2 text-left">
      {/* Profile Header Row: Avatar on Left + Name/Role on Right */}
      <div className="flex items-center gap-5 sm:gap-6 mb-6">
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#050505]" />
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
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
      </div>

      {/* Brief Profile Bio */}
      <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-6">
        {personalInfo.aboutText}
      </p>

      {/* Action Buttons & Direct Links Row */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all"
        >
          <Mail size={14} />
          Get in Touch
        </a>

        <a
          href={resume["full-stack-developer"]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs sm:text-sm hover:bg-white/10 transition-all"
        >
          Resume
          <ArrowUpRight size={14} />
        </a>

        <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              title={item.label}
            >
              <item.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;