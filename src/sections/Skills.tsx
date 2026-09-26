"use client";

import { skills } from "../data/userData";

const Skills = () => {
  return (
    <div className="w-full text-left space-y-6">
      {/* Header */}
      <div className="border-b border-white/5 pb-4">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Tech Stack
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Technologies and tools, that I work with.
        </p>
      </div>

      {/* Editorial Domain Ledger (Zero Card Boxes) */}
      <div className="divide-y divide-white/5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
          >
            {/* Domain Label */}
            <div className="w-28 shrink-0 font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
              {group.category}
            </div>

            {/* Technologies Flow */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 flex-1">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-2 group cursor-default"
                >
                  <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`w-full h-full object-contain ${
                        item.invertDark ? "invert" : ""
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
