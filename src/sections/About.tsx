"use client";

import { useState } from "react";
import { personalInfo, timeline } from "../data/userData";

const About = () => {
  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>({});

  const toggleYear = (year: string) => {
    setExpandedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <div className="w-full text-left space-y-8">
      {/* Section Headline */}
      <div className="space-y-4 border-b border-white/5 pb-6">
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
      </div>

      {/* Journey & Milestones: Linear Progression */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Journey & Milestones
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Engineering progression and key highlights across each phase.
          </p>
        </div>

        <div className="divide-y divide-white/5 pt-2">
          {timeline.map((item) => {
            const isExpanded = !!expandedYears[item.year];

            return (
              <div
                key={item.year}
                className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group"
              >
                {/* Year Marker */}
                <div className="w-20 shrink-0 font-mono text-xs font-semibold text-blue-400 sm:text-zinc-500 group-hover:text-blue-400 transition-colors">
                  {item.year}
                </div>

                {/* Content */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {item.detail}
                    </h4>

                    {/* Small <> button to toggle remaining info */}
                    {item.more && (
                      <button
                        type="button"
                        onClick={() => toggleYear(item.year)}
                        className={`inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[11px] font-mono shrink-0 transition-colors cursor-pointer select-none ${
                          isExpanded
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                        }`}
                        title={isExpanded ? "Hide remaining info" : "Show remaining info"}
                        aria-expanded={isExpanded}
                      >
                        &lt;&gt;
                      </button>
                    )}
                  </div>

                  {/* Remaining Info (Revealed on click) */}
                  {isExpanded && item.more && (
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal pt-0.5">
                      {item.more}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
