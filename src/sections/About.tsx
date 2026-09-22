"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { personalInfo, facts, timeline } from "../data/userData";

const About = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const currentMilestone = timeline[activeYearIndex] || timeline[0];
  const points = currentMilestone.more
    ? currentMilestone.more
      .split(". ")
      .map((p) => p.trim())
      .filter(Boolean)
    : [];

  const handlePrev = () => {
    setActiveYearIndex((prev) => (prev > 0 ? prev - 1 : timeline.length - 1));
  };

  const handleNext = () => {
    setActiveYearIndex((prev) => (prev < timeline.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full text-left space-y-10">
      {/* Who Am I Section */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Who Am I
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          {personalInfo.aboutText1}
          <a
            href={personalInfo.collegeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 underline decoration-blue-500/40 underline-offset-4 transition-colors font-medium"
          >
            {personalInfo.college}
          </a>
          {personalInfo.aboutText2}
        </p>

        {/* Minimal Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {facts.map((fact, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-zinc-400"
            >
              {fact}
            </span>
          ))}
        </div>
      </div>

      {/* Journey & Milestones (Segmented Year Controls + Spotlight Card) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Journey & Milestones
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Select a chapter to explore engineering progression and key highlights.
            </p>
          </div>

          {/* Navigation Arrows for Quick Switching */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              title="Previous chapter"
              aria-label="Previous chapter"
            >
              <ChevronLeft size={15} />
            </button>
            <span className="text-[11px] font-mono text-zinc-500 px-1">
              {activeYearIndex + 1} / {timeline.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              title="Next chapter"
              aria-label="Next chapter"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Year Segmented Buttons Bar */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.02] border border-white/5 overflow-x-auto no-scrollbar">
          {timeline.map((item, idx) => {
            const isActive = idx === activeYearIndex;
            return (
              <button
                key={item.year}
                type="button"
                onClick={() => setActiveYearIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all shrink-0 ${isActive
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>

        {/* Active Milestone Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 space-y-4 transition-all duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs font-bold text-blue-400 tracking-wider">
                {currentMilestone.year}
              </span>
              <span className="text-xs text-zinc-500 font-medium">
                Chapter {timeline.length - activeYearIndex}
              </span>
            </div>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentMilestone.detail}
          </h4>

          {points.length > 0 && (
            <div className="pt-3 border-t border-white/5 space-y-2.5">
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Key Insights & Learnings
              </p>
              <ul className="space-y-2">
                {points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>{pt.endsWith(".") ? pt : `${pt}.`}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
