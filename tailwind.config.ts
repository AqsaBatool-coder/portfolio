import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D14",
        surface: "#16161F",
        primary: "#FF6EC7",
        accent: "#C724B1",
        text: "#EDEDF0",
        muted: "#8E8E9A",
        border: "#2A2A35",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        display: ["var(--font-sora)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neon-gradient":
          "linear-gradient(135deg, #FF6EC7 0%, #C724B1 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,110,199,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,110,199,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        neon: "0 0 24px rgba(255, 110, 199, 0.25)",
        "neon-lg": "0 0 60px rgba(255, 110, 199, 0.35)",
        "neon-inner": "inset 0 0 20px rgba(255, 110, 199, 0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(8px,-12px) rotate(6deg)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255, 110, 199, 0.25)",
            opacity: "1",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(255, 110, 199, 0.55)",
            opacity: "0.85",
          },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out both",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        blink: "blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
