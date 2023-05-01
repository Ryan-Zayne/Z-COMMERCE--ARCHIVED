/** @type {import('tailwindcss').Config} */

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
				'dark-ball': 'var(--dark-mode-ball)',
			},

			fontFamily: {
				roboto: ['"Roboto Slab"', 'Helvetica'],
				rubik: ['"Rubik"', 'Trebuchet MS'],
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
};
