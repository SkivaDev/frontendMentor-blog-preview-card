/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'yellow': 'hsl(47, 88%, 63%)',
				'grey': 'hsl(0, 0%, 50%)',
			},
			backgroundColor: {
				'yellow': 'hsl(47, 88%, 63%)',
				'grey': 'hsl(0, 0%, 50%)',
			}
		},
	},
	plugins: [],
}
