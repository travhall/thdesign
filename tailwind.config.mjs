/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Nohemi", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
