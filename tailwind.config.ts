import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFBF2",
        noir: "#000000",
        rouge: "#6F0000",
        "rouge-light": "#8a0000",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "Helvetica Neue", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        widest: "0.3em",
        ultra: "0.5em",
      },
      lineHeight: {
        tighter: "0.9",
      },
    },
  },
  plugins: [],
};
export default config;
