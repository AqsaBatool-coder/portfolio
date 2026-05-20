"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

interface SocialLinksProps {
  urlTitel?: string;
  url?: string;
  isDownload?: boolean;
  showButton?: boolean;
}

const SocialLinks = ({
  urlTitel,
  url = "",
  isDownload = false,
  showButton = true,
}: SocialLinksProps) => {
  return (
    <div className="flex items-center gap-3">
      {showButton && urlTitel && (
        <div className="inline-flex">
          {isDownload ? (
            <a
              href={url}
              target="_blank"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-background bg-neon-gradient shadow-neon glow-hover uppercase tracking-wide"
            >
              {urlTitel}
            </a>
          ) : (
            <Link
              href={url}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-background bg-neon-gradient shadow-neon glow-hover uppercase tracking-wide"
            >
              {urlTitel}
            </Link>
          )}
        </div>
      )}

      <div className="flex gap-2.5">
        <Link
          href={profile.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          className="w-11 h-11 grid place-items-center rounded-full glass border border-border text-muted hover:text-text glow-hover"
        >
          <Linkedin size={16} />
        </Link>
        <Link
          href={profile.github}
          target="_blank"
          aria-label="GitHub"
          className="w-11 h-11 grid place-items-center rounded-full glass border border-border text-muted hover:text-text glow-hover"
        >
          <Github size={16} />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
