/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        imc: {
          tags: 'rgb(136, 19, 55, 0.7)',
          light: "#9f1239",
          DEFAULT: "#881337",
          dark: "#4c0519",
        },
        tna: {
					primary: '#3b0764',
					secondary: '#6b21a8',
					accent: '#f59e0b'
				},
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
