"use client";

import { skills } from "../data/userData";

const Skills = () => {
  return (
    <div className="w-full text-left space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Tech Stack
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Technologies and tools, that I work with.
        </p>
      </div>

      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.category} className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-200 group cursor-default"
                >
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={`w-full h-full object-contain ${item.invertDark ? "invert" : ""}`}
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

