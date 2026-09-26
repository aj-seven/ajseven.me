"use client";

import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projectData } from "../data/userData";

interface Props {
  limit?: number;
}

const Projects = ({ limit }: Props) => {
  const categories = ["all", ...Array.from(new Set(projectData.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectData.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="w-full text-left space-y-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-white/5 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Software products, open source tools, and experiments.
          </p>
        </div>

        {/* Category Filters (Only on full page or when not limited) */}
        {!limit && categories.length > 2 && (
          <div className="flex items-center gap-3 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "text-white font-bold underline underline-offset-4 decoration-blue-400"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Projects Ledger (Clean Typographic Rows - Zero Generic Box Cards) */}
      <div className="divide-y divide-white/5">
        {displayProjects.map((project) => {
          const mainUrl = project.live || project.github;

          return (
            <div
              key={project.name}
              className="py-4 first:pt-1 last:pb-1 group transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6">
                {/* Project Identity & Story */}
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <a
                      href={mainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white group-hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{project.name}</span>
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl font-normal line-clamp-2">
                    {project.description || "Experimental digital product."}
                  </p>

                  {/* Inline Tech Stack */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-1 text-[11px] font-mono text-zinc-500">
                    {project.tech.map((t, tIdx) => (
                      <span key={t} className="flex items-center gap-2">
                        <span className="hover:text-zinc-300 transition-colors">{t}</span>
                        {tIdx < project.tech.length - 1 && (
                          <span className="text-zinc-700 font-sans">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0 self-start text-xs font-mono">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ArrowUpRight size={11} className="text-zinc-600" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-1"
                      title="View GitHub Repository"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github size={13} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Outbound Link to All Projects */}
      {limit && projectData.length > limit && (
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
