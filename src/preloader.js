// NOTE - Preventing flicker of wrong theme onLoad
const theme = JSON.parse(localStorage.getItem('colorScheme'))?.state?.theme;
document.documentElement.setAttribute('data-theme', theme);

// NOTE - Removing Loader after load
const loaderElement = document.querySelector('.loader-container');
const handleLoaderRemoval = () => {
	loaderElement.classList.add('opacity-[0]');

	const loaderTimeout = setTimeout(() => {
		loaderElement.remove();
		window.removeEventListener('DOMContentLoaded', handleLoaderRemoval);
		clearTimeout(loaderTimeout);
	}, 1300);
};

window.addEventListener('DOMContentLoaded', handleLoaderRemoval);

// NOTE - Turned on auto browser scroll restoration for moxilla
window.history.scrollRestoration = 'auto';
