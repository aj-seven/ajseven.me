"use client";

import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { projectData } from "../data/userData";

const categories = ["all", ...Array.from(new Set(projectData.map((p) => p.category)))];

const Projects = ({ limit }: { limit?: number }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full text-left space-y-6">
      {/* Header & Category Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Software products, open source tools, and experiments.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex items-center gap-1.5 bg-white/[0.02] p-1 rounded-xl border border-white/5 self-start sm:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-white text-black font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Compact Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {displayProjects.map((project) => {
          const mainUrl = project.live || project.github;

          return (
            <div
              key={project.name}
              onClick={() => handleCardClick(mainUrl)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(mainUrl);
                }
              }}
              className="group cursor-pointer rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Title + GitHub Action */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                      {project.name}
                    </h3>
                    {project.live && (
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                      />
                    )}
                  </div>

                  {/* GitHub Action Only */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg border border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex-shrink-0"
                      title="View GitHub Repository"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description || "Experimental digital product."}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/5 text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Projects Link */}
      {limit && filteredProjects.length > limit && (
        <div className="pt-2">
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
          >
            View all {projectData.length} projects <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
