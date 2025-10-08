/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	corePlugins: {
		preflight: false,
	},
	important: true,
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				text: 'var(--color-text)',
				slider: 'var(--color-slider)',
				sliderActive: 'var(--color-slider-active)',
				card: 'var(--card-background)',
			},
		},
	},
	plugins: [],
};
