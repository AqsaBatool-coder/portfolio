import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons/page";
import SectionHeading from "@/components/ui/section-heading/page";
import { projects, type Project } from "@/lib/data";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 section-padding mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="03 — Projects"
        title="A few things I&apos;ve **shipped**"
        description="A selection of products I&apos;ve helped design, build, and scale across fintech, e-commerce, AI, and B2B."
      />

      <div className="mt-14 grid gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isReversed = index % 2 === 1;
  const cardLink = project.href ?? project.repo;
  const isClickable = Boolean(cardLink);

  return (
    <article
      className={`group relative glass rounded-3xl border border-border overflow-hidden glow-hover grid lg:grid-cols-[0.95fr_1.05fr] ${
        isReversed ? "lg:[direction:rtl]" : ""
      } ${isClickable ? "cursor-pointer" : ""}`}
    >
      {/* Stretched link — makes the whole card a click target */}
      {isClickable && (
        <Link
          href={cardLink!}
          target="_blank"
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl"
        />
      )}

      {/* Visual side */}
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden bg-surface/60 [direction:ltr]">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center group-hover:object-contain transition-transform duration-700 group-hover:scale-[0.8]"
            />
            {/* Subtle vignette only on edges so detail stays visible */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/35 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-40" />
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/25 blur-[100px]" />
            <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent/25 blur-[100px]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-neon-gradient opacity-30 blur-2xl animate-pulse-glow" />
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-neon-gradient grid place-items-center shadow-neon-lg">
                  <Folder
                    size={40}
                    className="text-background"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-[10px] font-mono uppercase tracking-[0.25em] text-primary pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,110,199,0.9)]" />
          Project {String(index + 1).padStart(2, "0")}
        </div>
        <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-strong text-[10px] font-mono uppercase tracking-[0.2em] text-text/80 pointer-events-none">
          @ {project.company}
        </div>
      </div>

      {/* Content side */}
      <div className="p-7 md:p-9 [direction:ltr] flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-text leading-tight">
          {project.title}
          <span className="inline-block ml-2 align-middle text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            <ArrowUpRight size={22} />
          </span>
        </h3>

        <p className="mt-3 text-muted leading-relaxed">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-border bg-surface/70 text-text/85 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons sit above the stretched link */}
        <div className="relative z-20 mt-6 flex items-center gap-3">
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              aria-label="View source on GitHub"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-border glass text-text hover:border-primary/50 transition-colors"
            >
              <GithubIcon size={14} className="text-primary" />
              GitHub
            </Link>
          )}
          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              aria-label="Open live demo"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-neon-gradient text-background shadow-neon glow-hover"
            >
              <ExternalLink size={14} />
              Live Demo
            </Link>
          )}
          {!project.repo && !project.href && (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-border/60 text-muted">
              Private project
            </span>
          )}
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_40px_rgba(255,110,199,0.15)_inset]" />
    </article>
  );
};

export default ProjectsSection;
