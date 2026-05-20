import Link from "next/link";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading/page";
import { experiences, type Experience } from "@/lib/data";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 section-padding mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="04 — Experience"
        title="Where I&apos;ve **built things**"
        description="From Pakistan to Denmark and the US — collaborating with remote teams and shipping real products."
      />

      <div className="mt-16 relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <span
          aria-hidden="true"
          className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"
        />

        <ol className="space-y-10 md:space-y-12">
          {experiences.map((exp, idx) => (
            <li
              key={exp.company + exp.duration}
              className="relative pl-12 md:pl-20"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Dot with pulsing ring */}
              <span aria-hidden="true" className="absolute left-4 md:left-6 -translate-x-1/2 top-3">
                <span className="relative block w-4 h-4 rounded-full bg-neon-gradient shadow-[0_0_18px_rgba(255,110,199,0.9)] ring-4 ring-background" />
                <span className="absolute inset-0 -m-2 rounded-full border border-primary/40 animate-pulse-glow" />
              </span>

              <ExperienceCard exp={exp} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  return (
    <article className="group relative glass rounded-2xl border border-border p-6 md:p-7 glow-hover overflow-hidden">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
            <Briefcase size={12} />
            {exp.duration}
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-muted/50" />
          <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
            <MapPin size={12} /> {exp.location} · {exp.type}
          </span>
        </div>

        <h3 className="mt-3 text-xl md:text-2xl font-bold text-text leading-tight">
          {exp.role}{" "}
          <span className="text-muted/70 font-normal">at</span>{" "}
          <span className="text-gradient">{exp.company}</span>
        </h3>

        {exp.link && (
          <Link
            href={exp.link}
            target="_blank"
            className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:text-text transition-colors"
          >
            Visit company <ExternalLink size={12} />
          </Link>
        )}

        <ul className="mt-5 space-y-2.5 text-sm text-muted leading-relaxed">
          {exp.achievements.map((a, i) => (
            <li key={i} className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0 shadow-[0_0_8px_rgba(255,110,199,0.6)]"
              />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceSection;
