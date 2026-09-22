const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // important!
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      animation: {
        blink: "blink 1s step-start infinite",
        typing: "typing 0.8s steps(40, end)",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        pan: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-20px, -20px)" },
        },
        star: {
          "0%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        typing: "typing 0.8s steps(40, end)",
        slowPan: "pan 4s linear infinite",
        starGlow: "starGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
