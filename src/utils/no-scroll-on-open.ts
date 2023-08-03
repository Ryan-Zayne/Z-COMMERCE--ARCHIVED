import { scrollbarWidth } from './constants';

const noScrollOnOpen = (isOpen: boolean) => {
	if (isOpen) {
		document.body.style.setProperty('--scrollbar-padding', ` ${scrollbarWidth}rem`);
		document.body.style.setProperty('--overflow-y', 'hidden');
	} else {
		document.body.style.setProperty('--scrollbar-padding', '');
		document.body.style.setProperty('--overflow-y', 'auto');
	}
};

export { noScrollOnOpen };
