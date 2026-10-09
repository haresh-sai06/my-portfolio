import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, formatProjectDate } from "@/lib/projects";
import ProjectArtwork from "@/components/ProjectArtwork";

const detailProjects = PROJECTS.filter((project) =>
  project.href.startsWith("/projects/"),
);
export const dynamicParams = false;
export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.id }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = detailProjects.find((item) => item.id === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: project.href },
    openGraph: {
      title: `${project.name} · Haresh Sainaath`,
      description: project.summary,
      url: project.href,
      ...(project.thumbnail
        ? {
            images: [
              { url: project.thumbnail, alt: `${project.name} project cover` },
            ],
          }
        : {}),
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = detailProjects.find((item) => item.id === params.slug);
  if (!project) notFound();
  const related = detailProjects
    .filter(
      (item) => item.id !== project.id && item.category === project.category,
    )
    .slice(0, 2);
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 pb-24 pt-8 sm:px-8">
      <nav className="mb-20 flex items-center justify-between border-b border-white/10 pb-6 text-xs text-white/65">
        <Link href="/" className="font-mono uppercase tracking-wider">
          Haresh Sainaath
        </Link>
        <Link href="/#projects" className="hover:text-white">
          ← All projects
        </Link>
      </nav>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow mb-5" style={{ color: project.color }}>
            {project.category} · {project.status}
          </p>
          <h1 className="font-display text-5xl uppercase leading-tight tracking-tight sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-5 rounded-full bg-[rgb(168,255,96)] px-6 py-3 text-sm font-medium text-black"
            >
              Explore repository <span aria-hidden>↗</span>
            </a>
          )}
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-white/10">
          <ProjectArtwork project={project} />
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={`${project.name} project cover`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
      <section className="mt-20 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-3xl uppercase">The project</h2>
        <div>
          <p className="text-base leading-loose text-white/65">
            {project.overview}
          </p>
          {project.updatedAt && (
            <p className="mt-6 font-mono text-xs text-white/40">
              Repository activity ·{" "}
              <time dateTime={project.updatedAt}>
                {formatProjectDate(project.updatedAt)}
              </time>
            </p>
          )}
        </div>
      </section>
      <section className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-3xl uppercase">Inside the build</h2>
        <ul className="space-y-4">
          {project.highlights?.map((highlight, index) => (
            <li
              key={highlight}
              className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span
                className="font-mono text-xs"
                style={{ color: project.color }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-white/75">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </section>
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 font-display text-3xl uppercase">Explore more</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-2xl border border-white/10 p-6 hover:border-white/30"
              >
                <h3 className="text-lg font-semibold">
                  {item.name} <span aria-hidden>↗</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
      <footer className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/60">
        <Link href="/#projects">← Back to work</Link>
        <a
          href={`mailto:shareshsainaath@gmail.com?subject=${encodeURIComponent(`${project.name} project enquiry`)}`}
        >
          Discuss this project ↗
        </a>
      </footer>
    </main>
  );
}
