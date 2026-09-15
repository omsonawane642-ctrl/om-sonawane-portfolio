import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070d",
        ink: "#0a0e18",
        panel: "#0d1220",
        cyan: {
          glow: "#5ee1ff",
        },
        azure: "#3b82f6",
        ember: "#ff9a56",
        mist: "#c7d2e0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(94, 225, 255, 0.25)",
        "glow-lg": "0 0 80px rgba(94, 225, 255, 0.35)",
        ember: "0 0 40px rgba(255, 154, 86, 0.25)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,7,13,1) 90%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseglow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        pulseglow: "pulseglow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
