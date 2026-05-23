"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

const SECTION_IDS = navLinks.map((n) => n.href.replace("#", ""));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="section-padding mx-auto max-w-7xl flex items-center justify-between">
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Aqsa Batool — home"
        >
          <Image
            src="/ab-logo-reversed.png"
            alt="Aqsa Batool logo"
            width={40}
            height={40}
            priority
            className="w-10 h-10 rounded-xl object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide text-text leading-none">
              {profile.name}
            </p>
            <p className="text-[11px] font-mono text-muted leading-none mt-1">
              {profile.role}
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full bg-neon-gradient transition-all duration-300 ${
                    isActive ? "w-6 opacity-100 shadow-[0_0_10px_rgba(255,110,199,0.8)]" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-text border border-border glass glow-hover"
          >
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,110,199,0.9)] animate-pulse" />
            Let&apos;s talk
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg glass text-text"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-4 rounded-2xl glass-strong p-4 shadow-neon">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-text bg-primary/10 border border-primary/30"
                      : "text-muted hover:text-text hover:bg-white/[0.03]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-primary/70">
                    {String(navLinks.indexOf(link) + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-background bg-neon-gradient shadow-neon"
            >
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
