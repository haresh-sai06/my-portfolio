"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CATEGORIES,
  PROJECTS,
  Project,
  formatProjectDate,
} from "@/lib/projects";
import ProjectArtwork from "@/components/ProjectArtwork";

const RECENT_PROJECT_COUNT = 9;

function cardLayout(position: number, count: number) {
  const tablet = count % 2 === 1 && position === count - 1
    ? "sm:col-span-2"
    : "sm:col-span-1";
  const desktop = count % 3 === 1 && position === count - 1
    ? "lg:col-span-6"
    : count % 3 === 2 && position >= count - 2
      ? "lg:col-span-3"
      : "lg:col-span-2";
  return `${tablet} ${desktop}`;
}

function ProjectCard({ project, index, layoutClass }: { project: Project; index: number; layoutClass: string }) {
  const external = project.href.startsWith("https://");
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0b] transition-colors hover:border-white/25 ${layoutClass}`}>
      <Link
        href={project.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={`${project.isPrivate ? "Enquire about" : "Explore"} ${project.name}`}
        data-cursor={project.isPrivate ? "ASK" : "VIEW"}
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[rgb(168,255,96)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
          <ProjectArtwork project={project} />
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={`${project.name} project artwork`}
              fill
              sizes={`(max-width: 639px) 100vw, (max-width: 1023px) ${layoutClass.includes("sm:col-span-2") ? "100vw" : "50vw"}, ${layoutClass.includes("lg:col-span-6") ? "100vw" : layoutClass.includes("lg:col-span-3") ? "50vw" : "33vw"}`}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80">
            {project.status}
          </span>
          <span className="absolute right-4 top-4 font-mono text-xs text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-white/45">
            <span style={{ color: project.color }}>{project.category}</span>
            {project.updatedAt && (
              <time dateTime={project.updatedAt}>
                {formatProjectDate(project.updatedAt)}
              </time>
            )}
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {project.name}
          </h3>
          <p className="mb-6 mt-3 text-sm leading-relaxed text-white/60">
            {project.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/75">
            <span>
              {project.isPrivate
                ? "Enquire about this project"
                : external
                  ? "Explore source code"
                  : "Explore project"}
            </span>
            <span
              aria-hidden
              className="text-lg transition-transform group-hover:translate-x-1"
            >
              ↗
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function ProjectsGallery() {
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const matches = PROJECTS.filter(
    (project) =>
      (category === "All work" || project.category === category) &&
      `${project.name} ${project.summary} ${project.tags.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const visible =
    expanded || category !== "All work" || query.trim()
      ? matches
      : matches.slice(0, RECENT_PROJECT_COUNT);
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 bg-[#050505] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">
              Selected work · {PROJECTS.length} projects
            </p>
            <h2 className="font-display text-5xl font-medium uppercase leading-none tracking-tight text-white md:text-7xl">
              Ideas into
              <br />
              <span className="text-[rgb(168,255,96)]">working systems.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-white/60">
              From study tools and household workflows to spatial calling and
              applied ML. Recent work first, with the context and source behind it.
            </p>
            <a
              href="https://github.com/haresh-sai06?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex gap-3 text-xs text-white/80 underline decoration-white/25 underline-offset-4"
            >
              Browse public repositories <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
        <div className="mb-8 flex flex-col justify-between gap-5 border-y border-white/10 py-5 lg:flex-row lg:items-center">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item);
                  setExpanded(false);
                }}
                className={`rounded-full border px-4 py-2 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${category === item ? "border-[rgb(168,255,96)] bg-[rgb(168,255,96)] text-black" : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5 text-white/50 focus-within:border-[rgb(168,255,96)] focus-within:ring-1 focus-within:ring-[rgb(168,255,96)]">
            <span aria-hidden>⌕</span>
            <span className="sr-only">Search projects or technologies</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech"
              className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/40 lg:w-44"
            />
          </label>
        </div>
        <p
          role="status"
          aria-live="polite"
          className="mb-5 font-mono text-[10px] uppercase tracking-widest text-white/45"
        >
          Showing {visible.length} of {matches.length} projects
        </p>
        {visible.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {visible.map((project, position) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={PROJECTS.indexOf(project)}
                layoutClass={cardLayout(position, visible.length)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 p-10 text-center">
            <h3 className="text-xl text-white">No matching projects</h3>
            <p className="mt-3 text-sm text-white/60">
              Try another name or technology, or return to the full collection.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All work");
              }}
              className="mt-6 rounded-full bg-[rgb(168,255,96)] px-5 py-3 text-sm text-black"
            >
              Show all work
            </button>
          </div>
        )}
        {category === "All work" && !query.trim() && matches.length > RECENT_PROJECT_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded(!expanded)}
              className="rounded-full border border-white/20 px-7 py-3 text-sm text-white/80 hover:bg-white/5"
            >
              {expanded
                ? "Show recent work"
                : `Explore all ${PROJECTS.length} projects`}{" "}
              <span aria-hidden>{expanded ? "↑" : "↓"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
