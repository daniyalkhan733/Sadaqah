// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {

    extend: {
      colors: {
        'hotpink': '#EE0C6E',
        'teal': '#01A6A0',
        'customblue': '#0E173B',
        'customgray': '#5B5A59',
      },
      // Enhance scrolling experience with better animation defaults
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
}