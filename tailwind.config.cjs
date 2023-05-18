/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1000px',
		},

		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				body: 'var(--color-body)',
				'carousel-btn': 'var(--carousel-btn)',
				'carousel-dot': 'var(--carousel-dot)',
				heading: 'var(--text-header)',
				dark: 'var(--text-dark)',
				light: 'var(--text-light)',
				placeholder: 'var(--text-placeholder)',
				navbar: 'var(--color-navbar)',
				'nav-text': 'var(--text-navbar)',
				'dark-ball': 'var(--dark-mode-ball)',
			},

			fontFamily: {
				roboto: ['"Roboto Slab"', 'Helvetica'],
				rubik: ['"Rubik"', 'Trebuchet MS'],
			},

			transitionTimingFunction: {
				'slide-in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
				'slide-out': 'cubic-bezier(0.33, 0.85, 0.56, 1.02)',
			},

			animation: {
				'fade-in-down': 'fade-in-down 1.3s',
				'fade-in-up': 'fade-in-up 1.7s ease-out',
				'fade-in-up-2': 'fade-in-up-2 1.3s ease-out',
			},

			keyframes: {
				'fade-in-down': {
					from: { opacity: '0', transform: 'translateY(-80%)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(100%)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up-2': {
					from: { opacity: '0', transform: 'translateY(150%)' },
					to: { opacity: '0.86', transform: 'translateY(0)' },
				},
			},
		},
	},

	plugins: [
		plugin(({ matchVariant, matchUtilities }) => {
			matchUtilities(
				{
					'ease-r': (value) => ({
						'box-shadow': value,
					}),
				},
				{
					values: {
						btn: '0 0 6.4rem var(--btn-shadow)',
						nav: '0 0.4rem 6.4rem var(--nav-shadow)',
						contact: '0 0 6.4rem var(--nav-shadow)',
					},
				}
			);

			matchVariant(
				'nth',

				(value) => {
					return `&:nth-child(${value})`;
				},
				{
					values: {
						1: '1',
						2: '2',
					},
				}
			);
		}),
	],
};
