"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading/page";
import { profile } from "@/lib/data";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 section-padding mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="06 — Contact"
        title="Let&apos;s **build something** together"
        description="Have a role, project, or collaboration in mind? Drop a line — I read every message."
      />

      <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10 items-start">
        {/* Info card */}
        <aside className="relative glass rounded-3xl border border-border p-7 md:p-9 overflow-hidden">
          <div className="absolute -inset-px rounded-3xl pointer-events-none bg-neon-gradient opacity-[0.08]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,110,199,0.9)] animate-pulse" />
              Open to work
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-text leading-snug">
              Got an idea?{" "}
              <span className="text-gradient">Let&apos;s talk.</span>
            </h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              I usually reply within 24 hours. Best reached over email, but
              LinkedIn works too.
            </p>

            <ul className="mt-7 space-y-3">
              <ContactRow
                Icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                Icon={MapPin}
                label="Location"
                value={profile.location}
              />
            </ul>

            <div className="mt-7 pt-6 border-t border-border/60">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
                Find me online
              </p>
              <div className="mt-3 flex items-center gap-3">
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
                    className="w-11 h-11 grid place-items-center rounded-xl glass border border-border text-muted hover:text-text glow-hover"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative glass rounded-3xl border border-border p-7 md:p-9 glow-hover"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Your name"
              id="name"
              type="text"
              placeholder="Jane Doe"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              label="Email"
              id="email"
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              placeholder="Tell me a bit about the role, project, or idea…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full rounded-xl bg-surface/70 border border-border text-text placeholder:text-muted/60 px-4 py-3 text-sm leading-relaxed outline-none focus:border-primary/60 focus:shadow-[0_0_22px_rgba(255,110,199,0.18)] transition-all resize-none"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted font-mono">
              Or email me directly →{" "}
              <Link
                href={`mailto:${profile.email}`}
                className="text-primary hover:text-text"
              >
                {profile.email}
              </Link>
            </p>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-background bg-neon-gradient shadow-neon glow-hover overflow-hidden"
            >
              <span className="relative z-10">
                {submitted ? "Sent" : "Send Message"}
              </span>
              {submitted ? (
                <CheckCircle2 size={16} className="relative z-10" />
              ) : (
                <Send
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              )}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const ContactRow = ({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) => {
  const Inner = (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface/50 hover:border-primary/40 transition-colors">
      <div className="w-10 h-10 grid place-items-center rounded-lg bg-primary/10 border border-primary/30 text-primary shadow-neon-inner">
        <Icon size={16} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">
          {label}
        </p>
        <p className="text-sm text-text truncate">{value}</p>
      </div>
      {href && (
        <ArrowUpRight
          size={14}
          className="ml-auto text-muted group-hover:text-primary"
        />
      )}
    </div>
  );

  return href ? (
    <li>
      <Link href={href} className="group block">
        {Inner}
      </Link>
    </li>
  ) : (
    <li>{Inner}</li>
  );
};

const Field = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <label
      htmlFor={id}
      className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      required
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-2 w-full rounded-xl bg-surface/70 border border-border text-text placeholder:text-muted/60 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-[0_0_22px_rgba(255,110,199,0.18)] transition-all"
    />
  </div>
);

export default ContactSection;
