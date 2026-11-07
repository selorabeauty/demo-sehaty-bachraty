import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#0B1F3A", ice: "#E0F7FA", icy: "#B8E6EE", silver: "#C9D1D9", mist: "#F4FAFC" },
      fontFamily: {
        display: ["'IBM Plex Sans Arabic'", "Tajawal", "serif"],
        body: ["'Noto Kufi Arabic'", "Tajawal", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
