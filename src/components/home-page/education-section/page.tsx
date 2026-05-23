import { GraduationCap, BookOpen, Layers, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading/page";
import Reveal from "@/components/ui/reveal/page";
import { education } from "@/lib/data";

const focusAreas = [
  "Cloud Computing",
  "Ethical Hacking",
  "Network Security",
  "Machine Learning",
  "Deep Learning",
  "Cryptography",
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 section-padding mx-auto max-w-7xl"
    >
      <Reveal>
        <SectionHeading
          eyebrow="05 — Education"
          title="Academic **foundations**"
          description="My path through computer science — from BS to MS."
        />
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="grid gap-5">
          {education.map((edu, idx) => (
            <Reveal
              key={edu.school}
              variant="left"
              delay={idx * 90}
              className="group relative glass rounded-2xl border border-border p-6 md:p-7 glow-hover overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 grid place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary shadow-neon-inner">
                    <GraduationCap size={20} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
                    <span>{edu.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-muted/50" />
                    <span className="inline-flex items-center gap-1 text-muted">
                      <MapPin size={11} /> {edu.location}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg md:text-xl font-bold text-text leading-snug">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{edu.degree}</p>

                  {edu.coursework && (
                    <div className="mt-4">
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted flex items-center gap-1.5">
                        <BookOpen size={11} className="text-primary" />{" "}
                        Coursework
                      </p>
                      <p className="mt-2 text-sm text-text/85 leading-relaxed">
                        {edu.coursework}
                      </p>
                    </div>
                  )}
                </div>

                <span
                  aria-hidden="true"
                  className="hidden md:flex absolute right-5 top-5 text-[11px] font-mono text-muted"
                >
                  #{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Focus areas card */}
        <Reveal variant="right" delay={120} className="relative glass rounded-2xl border border-border p-6 md:p-7 glow-hover overflow-hidden">
          <div className="absolute -inset-px rounded-2xl pointer-events-none bg-neon-gradient opacity-[0.08]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-primary">
              <Layers size={12} /> Relevant Coursework
            </div>
            <h3 className="mt-3 text-xl md:text-2xl font-bold text-text leading-snug">
              Building on{" "}
              <span className="text-gradient">Computer Science</span> fundamentals
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Explored systems and security from multiple angles — networks,
              cryptography, ML/DL — and apply that foundation when building
              fast, secure, well-architected products.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="px-3 py-1.5 text-xs font-mono rounded-full border border-border bg-surface/70 text-text/90 hover:border-primary/60 hover:shadow-[0_0_18px_rgba(255,110,199,0.25)] transition-all"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-surface/60 p-4 text-center">
                <p className="text-2xl font-bold text-gradient">MS</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted mt-1">
                  Comp. Science
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/60 p-4 text-center">
                <p className="text-2xl font-bold text-gradient">BS</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted mt-1">
                  Comp. Science
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EducationSection;
