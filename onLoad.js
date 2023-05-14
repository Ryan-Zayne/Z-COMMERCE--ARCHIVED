// NOTE - Preventing flicker of wrong theme onLoad
const theme =
	JSON.parse(localStorage.getItem('colorScheme'))?.state?.theme ??
	window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';

document.documentElement.setAttribute('data-theme', theme);

const handleLoaderRemoval = () => {
	const loaderElement = document.querySelector('.loader-container');
	loaderElement.style.opacity = '0';

	const loaderTimeout = setTimeout(() => {
		loaderElement.remove();
		window.removeEventListener('DOMContentLoaded', handleLoaderRemoval);

		clearTimeout(loaderTimeout);
	}, 1000);
};

window.addEventListener('DOMContentLoaded', handleLoaderRemoval);

// NOTE - Turned on auto browser scroll restoration for moxilla
window.history.scrollRestoration = 'auto';
