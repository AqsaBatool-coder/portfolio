"use client";

import { Braces, Code2, GitBranch, Terminal } from "lucide-react";

const ICONS = [
  { Icon: Code2, top: "18%", left: "6%", delay: "0s", size: 22 },
  { Icon: Braces, top: "26%", left: "86%", delay: "1.4s", size: 20 },
  { Icon: Terminal, top: "74%", left: "10%", delay: "0.8s", size: 22 },
  { Icon: GitBranch, top: "80%", left: "88%", delay: "2s", size: 20 },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {ICONS.map(({ Icon, top, left, delay, size }, i) => (
        <div
          key={i}
          className="absolute text-primary/15 animate-float-slow"
          style={{ top, left, animationDelay: delay }}
        >
          <Icon size={size} strokeWidth={1.25} />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
