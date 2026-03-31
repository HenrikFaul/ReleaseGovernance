import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7ff",
          100: "#e8efff",
          200: "#ceddff",
          300: "#abc2ff",
          400: "#7a9dff",
          500: "#4f74ff",
          600: "#3558f4",
          700: "#2945d9",
          800: "#243bad",
          900: "#1f347f",
        },
        accent: {
          50: "#eefcf8",
          100: "#d7f8ef",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
      },
      boxShadow: {
        soft: "0 16px 45px rgba(15, 23, 42, 0.10)",
        panel: "0 24px 60px rgba(15, 23, 42, 0.12)",
        glow: "0 0 0 1px rgba(79, 116, 255, 0.14), 0 24px 50px rgba(79, 116, 255, 0.18)",
      },
      backgroundImage: {
        "mesh-brand": "radial-gradient(circle at top left, rgba(79,116,255,0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.14), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.88), rgba(248,250,252,0.96))",
        "dark-hero": "radial-gradient(circle at top left, rgba(92,126,255,0.34), transparent 35%), radial-gradient(circle at bottom right, rgba(16,185,129,0.22), transparent 30%), linear-gradient(145deg, #0f172a 0%, #111827 45%, #182134 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
