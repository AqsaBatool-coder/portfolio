import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Folder } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading/page";
import { projects } from "@/lib/data";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 section-padding mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="03 — Projects"
        title="A few things I&apos;ve **shipped**"
        description="A selection of products and platforms I&apos;ve helped design, build, and scale — across fintech, e-commerce, and SaaS."
      />

      <div className="mt-14 grid gap-6 md:gap-8">
        {projects.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={project.title}
              className={`group relative glass rounded-3xl border border-border overflow-hidden glow-hover grid lg:grid-cols-[0.9fr_1.1fr] ${
                isReversed ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Visual side */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px] overflow-hidden bg-surface/60 [direction:ltr]">
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
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass-strong text-[10px] font-mono uppercase tracking-[0.25em] text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,110,199,0.9)]" />
                  Project {String(index + 1).padStart(2, "0")}
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

                <p className="mt-3 text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-border bg-surface/70 text-text/85 hover:border-primary/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={project.repo ?? "#"}
                    target="_blank"
                    aria-label="View source on GitHub"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-border glass text-text hover:border-primary/50 transition-colors"
                  >
                    <Github size={14} className="text-primary" />
                    GitHub
                  </Link>
                  <Link
                    href={project.href ?? "#"}
                    target="_blank"
                    aria-label="Open live demo"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-neon-gradient text-background shadow-neon glow-hover"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </Link>
                </div>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_40px_rgba(255,110,199,0.15)_inset]" />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
