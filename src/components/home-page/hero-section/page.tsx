"use client";

import Link from "next/link";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "@/lib/data";
import FloatingIcons from "@/components/ui/floating-icons/page";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 md:pt-32"
    >
      <FloatingIcons />

      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[34rem] h-[34rem] rounded-full bg-accent/15 blur-[160px] pointer-events-none" />

      <div className="section-padding mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        {/* Left: copy */}
        <div className="relative animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] tracking-[0.25em] uppercase text-primary font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,110,199,0.9)] animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-text">Hi, I&apos;m</span>
            <span className="block mt-2 text-gradient-animated">
              Aqsa Batool
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-muted font-mono">
            {profile.role}{" "}
            <span className="text-muted/50 mx-1">·</span>{" "}
            {profile.location}
          </p>

          <p className="mt-7 max-w-lg text-base md:text-[17px] text-muted leading-relaxed">
            {profile.shortBio}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-background bg-neon-gradient shadow-neon glow-hover overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-text border border-border glass glow-hover"
            >
              <Download
                size={16}
                className="text-primary transition-transform group-hover:translate-y-0.5"
              />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em]">
              Find me
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-border" />
            <div className="flex items-center gap-2">
              {[
                { href: profile.github, Icon: Github, label: "GitHub" },
                { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-10 h-10 grid place-items-center rounded-full border border-border text-muted hover:text-text hover:border-primary/50 hover:shadow-[0_0_18px_rgba(255,110,199,0.25)] transition-all"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right: stylized terminal */}
        <div className="relative animate-fade-in-up [animation-delay:200ms]">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-neon-gradient opacity-20 blur-2xl" />
            <div className="relative glass-strong rounded-3xl border border-primary/15 overflow-hidden shadow-neon-lg">
              <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-surface/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <p className="font-mono text-xs text-muted">~/aqsa — zsh</p>
                <span className="w-10" />
              </div>

              <div className="p-6 md:p-7 font-mono text-sm leading-relaxed">
                <p>
                  <span className="text-primary">aqsa@dev</span>
                  <span className="text-muted"> ~ $ </span>
                  <span className="text-text">whoami</span>
                </p>
                <p className="text-muted mt-1">
                  → Full Stack Developer
                </p>

                <p className="mt-5">
                  <span className="text-primary">aqsa@dev</span>
                  <span className="text-muted"> ~ $ </span>
                  <span className="text-text">cat stack.json</span>
                </p>
                <pre className="mt-1 text-[13px] text-text/90 whitespace-pre-wrap">
{`{
  "frontend": ["Next.js", "React", "TS"],
  "backend":  ["Node.js", "PostgreSQL"],
  "loves":    ["clean UI", "DX"]
}`}
                </pre>

                <p className="mt-5 flex items-center">
                  <span className="text-primary">aqsa@dev</span>
                  <span className="text-muted"> ~ $ </span>
                  <span className="w-2 h-4 bg-primary ml-1 animate-blink shadow-[0_0_8px_rgba(255,110,199,0.8)]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
