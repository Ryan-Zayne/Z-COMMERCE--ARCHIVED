import { desktopQuery } from './constants';

const verifyDesktopExists = () => {
	let isDesktop = desktopQuery.matches;

	const handleMediaQuery = () => {
		isDesktop = desktopQuery.matches;
		desktopQuery.removeEventListener('change', handleMediaQuery);
	};

	desktopQuery.addEventListener('change', handleMediaQuery);

	return isDesktop;
};

const noScrollOnOpen = ({ isOpen }: { isOpen: boolean }) => {
	if (!verifyDesktopExists()) return;

	if (!isOpen) {
		document.body.style.setProperty('--scrollbar-padding', '');
		document.body.style.setProperty('--overflow-y', '');
		return;
	}

	const scrollbarWidth = (window.innerWidth - document.documentElement.clientWidth) / 10;
	document.body.style.setProperty('--scrollbar-padding', `${scrollbarWidth}rem`);
	document.body.style.setProperty('--overflow-y', 'hidden');
};

export { noScrollOnOpen };
