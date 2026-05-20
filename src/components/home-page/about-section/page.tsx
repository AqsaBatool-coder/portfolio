import {
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Code2,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading/page";
import { profile } from "@/lib/data";

const highlights = [
  {
    Icon: Code2,
    title: "Full-stack delivery",
    desc: "Comfortable across the whole stack — UI, APIs, and data — from concept to production.",
  },
  {
    Icon: Sparkles,
    title: "Design-minded engineering",
    desc: "Pixel-perfect, accessible interfaces with smooth micro-interactions and clean hierarchy.",
  },
  {
    Icon: ShieldCheck,
    title: "Security-aware",
    desc: "Coursework in cryptography, network security, and ethical hacking — I build with auth, authorization, and web security in mind.",
  },
  {
    Icon: HeartHandshake,
    title: "Collaborative",
    desc: "Pair programming, code reviews, mentoring juniors, and shipping in agile teams.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 section-padding mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="01 — About"
        title="A developer who **codes, designs and ships**."
        description="A short story of who I am, what I do, and how I like to build."
      />

      <div className="mt-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
        {/* Bio card */}
        <div className="relative glass rounded-3xl p-7 md:p-9 border border-border glow-hover">
          <div className="absolute -inset-px rounded-3xl pointer-events-none bg-neon-gradient opacity-[0.08]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-primary">
              <Sparkles size={14} /> who am i
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-text leading-snug">
              I build fast, accessible, and{" "}
              <span className="text-gradient">secure</span> web products.
            </h3>
            <p className="mt-4 text-muted leading-relaxed">
              {profile.bio}
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Currently working remotely with{" "}
              <span className="text-text">GrowthRune (US)</span>, where I build
              full-stack features in Next.js, Node.js, React Query, and
              PostgreSQL — and I previously shipped frontend &amp; admin
              experiences for clients across Denmark.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-surface/60 p-4">
                <div className="flex items-center gap-2 text-muted text-xs font-mono uppercase tracking-wider">
                  <Briefcase size={14} className="text-primary" /> Currently
                </div>
                <p className="mt-2 text-text font-semibold">
                  Full Stack Dev @ GrowthRune
                </p>
                <p className="text-xs text-muted">Remote · US</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface/60 p-4">
                <div className="flex items-center gap-2 text-muted text-xs font-mono uppercase tracking-wider">
                  <GraduationCap size={14} className="text-primary" /> Latest
                </div>
                <p className="mt-2 text-text font-semibold">MS Computer Science</p>
                <p className="text-xs text-muted">FAST NUCES, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-6 border border-border glow-hover overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-11 h-11 grid place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary shadow-neon-inner">
                  <Icon size={20} />
                </div>
                <h4 className="mt-4 text-base font-semibold text-text">
                  {title}
                </h4>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
