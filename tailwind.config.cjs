/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
			colors: {
				primary: {
					DEFAULT: '#873467',
					light: '#a76f9d',
					dark: '#512B51',
				},
			}
		},
	},
	plugins: [],
}
