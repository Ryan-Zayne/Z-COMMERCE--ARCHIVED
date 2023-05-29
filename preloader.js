import { noScrollOnOpen } from './src/utils/noScrollOnOpen';

// NOTE - Preventing flicker of wrong theme onLoad
const theme = JSON.parse(localStorage.getItem('colorScheme'))?.state?.theme;
document.documentElement.setAttribute('data-theme', theme);

// NOTE - Removing Loader after load
const loaderElement = document.querySelector('.loader-container');
noScrollOnOpen(true);

const handleLoaderRemoval = () => {
	loaderElement.style.opacity = '0';
	noScrollOnOpen(false);

	const loaderTimeout = setTimeout(() => {
		loaderElement.remove();
		window.removeEventListener('DOMContentLoaded', handleLoaderRemoval);
		clearTimeout(loaderTimeout);
	}, 1300);
};

window.addEventListener('DOMContentLoaded', handleLoaderRemoval);

window.history.scrollRestoration = 'manual';
