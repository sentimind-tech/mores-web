import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "tablet-min": "769px",
        "mobile-min": "500px",
      },
      fontSize: {
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        40: "2.5rem",
      },
      fontFamily: {
        inter: "Inter",
        supplymono: "SupplyMono",
        graphik: "Graphik",
      },
      colors: {
        white: {
          DEFAULT: "#ffffff",
          smoke: "#F5F5F5",
        },
        black: {
          DEFAULT: "#000000",
        },
        red: {
          DEFAULT: "#F84C41",
        },
        gray: {
          dark: "#383838",
          cloud: "#B6B6B6",
          medium: "#585858",
          silver: "#B6B6B6",
          light: "#F5F5F5",
          steel: "#A0A0A0",
          ash: "#989898",
        },
        blue: {
          pacific: "#00A2B6",
          teal: "#00899A",
        },
      },
      spacing: {
        4: "0.25rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        32: "2rem",
        40: "40px",
        48: "48px",
        50: "50px",
        56: "56px",
        64: "64px",
        72: "72px",
        100: "100px",
        120: "120px",
      },
    },
  },
  plugins: [],
};
export default config;
