import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-light": "#ffffff",
        "background-dark": "#1a202c",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "8rem", // Increase padding for large screens
          xl: "10rem", // Increase padding for extra-large screens
          "2xl": "12rem", // Increase padding for 2x-large screens
        },
      },
      keyframes: {
        "custom-animation": {
          "0%": { borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%" },
          "20%": { borderRadius: "55% 45% 45% 55% / 55% 45% 45% 55%" },
          "40%": { borderRadius: "60% 40% 40% 60% / 60% 40% 40% 60%" },
          "60%": { borderRadius: "60% 40% 40% 60% / 60% 40% 40% 60%" },
          "80%": { borderRadius: "55% 45% 45% 55% / 55% 45% 45% 55%" },
          "100%": { borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%" },
        },
        "rotate-gradient": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
    animation: {
      "custom-animation": "custom-animation 5s ease-in-out infinite",
      "rotate-gradient": "rotate-gradient 5s linear infinite",
      "border-spin": "border-spin 7s linear infinite",
      fadeIn: "fadeIn 5s ease-in-out",
    },

    plugins: [],
  },
};
export default config;
