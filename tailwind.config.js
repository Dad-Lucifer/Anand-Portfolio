/** @type {import('tailwindcss').Config} */
module.exports = {
  ccontent: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // ...other paths
  ],
  theme: {
    extend: {
      colors: {
        // this will enable the `border-border` utility
        border: "hsl(var(--border) / <alpha-value>)",
        // (optional) add the other variables used by the template
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
}