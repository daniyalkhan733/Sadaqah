// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {

    extend: {
      colors: {
        'hotpink': '#D51051',
        'teal': '#37145A',
        'customblue': '#FEC80A',
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