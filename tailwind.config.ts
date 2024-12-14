import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          darkCyan: "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
        },
        neutral: {
          veryDarkBlue: "hsl(212, 21%, 14%)",
          darkGrayishBlue: "hsl(228, 12%, 48%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
