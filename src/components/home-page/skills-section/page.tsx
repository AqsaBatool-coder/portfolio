import {
  Sparkles,
  Server,
  Database,
  FlaskConical,
  Cloud,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading/page";
import Reveal from "@/components/ui/reveal/page";
import { skills } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Server,
  Database,
  FlaskConical,
  Cloud,
  Wrench,
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 section-padding mx-auto max-w-7xl"
    >
      <Reveal>
        <SectionHeading
          eyebrow="02 — Skills"
          title="The **tools** I reach for"
          description="A curated, opinionated stack — the libraries, platforms, and practices I use to ship reliable products."
        />
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((category, idx) => {
          const Icon = ICONS[category.icon] ?? Sparkles;
          return (
            <Reveal
              key={category.title}
              delay={Math.min(idx * 70, 350)}
              className="group relative glass rounded-2xl p-6 border border-border glow-hover overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 grid place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary shadow-neon-inner">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-text">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="group/pill relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full border border-border bg-surface/70 text-text/90 transition-all duration-300 hover:border-primary/60 hover:text-text hover:shadow-[0_0_18px_rgba(255,110,199,0.25)] hover:-translate-y-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover/pill:bg-primary group-hover/pill:shadow-[0_0_8px_rgba(255,110,199,0.9)] transition-colors" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
