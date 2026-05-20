import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div
      className={`flex flex-col gap-3 max-w-2xl ${
        align === "center" ? "mx-auto text-center items-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] tracking-[0.25em] uppercase text-primary font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,110,199,0.9)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text">
        {title.split("**").map((chunk, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-gradient-animated">
              {chunk}
            </span>
          ) : (
            <span key={i}>{chunk}</span>
          )
        )}
      </h2>
      {description && (
        <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
