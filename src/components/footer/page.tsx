import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons/page";
import { profile, navLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="relative mt-24 md:mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="section-padding mx-auto max-w-7xl py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neon-gradient grid place-items-center font-bold text-background shadow-neon">
                AB
              </div>
              <div>
                <p className="text-base font-semibold text-text leading-none">
                  {profile.name}
                </p>
                <p className="text-xs font-mono text-muted leading-none mt-1">
                  {profile.role}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted max-w-sm leading-relaxed">
              Building thoughtful, performant interfaces and resilient backends.
              Always shipping, always learning.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
              Reach out
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href={`mailto:${profile.email}`}
                  className="text-muted hover:text-text transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={14} className="text-primary" /> {profile.email}
                </Link>
              </li>
              <li className="text-muted inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                {profile.location}
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {[
                { href: profile.github, Icon: GithubIcon, label: "GitHub" },
                { href: profile.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="group w-10 h-10 grid place-items-center rounded-xl glass border border-border glow-hover text-muted hover:text-text"
                >
                  <Icon size={16} className="transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted font-mono inline-flex items-center gap-2">
            Designed &amp; Developed by{" "}
            <span className="text-gradient font-semibold">Aqsa Batool</span>
            <ArrowUpRight size={12} className="text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
