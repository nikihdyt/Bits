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
        // Matching iOS app colors exactly
        peak: {
          light: "#9ACEC9",
          DEFAULT: "#73ADA6",
          dark: "#5A8B85",
        },
        steady: {
          light: "#858FA9",
          DEFAULT: "#6B7D97",
          dark: "#545F78",
        },
        attention: {
          light: "#D5C399",
          DEFAULT: "#C2A678",
          dark: "#9B8560",
        },
        recovery: {
          light: "#C89FA2",
          DEFAULT: "#B3858A",
          dark: "#8F6A6E",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
