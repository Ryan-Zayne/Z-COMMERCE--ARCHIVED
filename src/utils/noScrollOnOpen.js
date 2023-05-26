import { scrollbarWidth } from './constants';

export const noScrollOnOpen = (isOpen) => {
	if (isOpen) {
		document.body.style.setProperty('--scrollbar-padding', ` ${scrollbarWidth}rem`);
		document.body.style.setProperty('--overflow-y', 'hidden');
	} else {
		document.body.style.setProperty('--scrollbar-padding', '');
		document.body.style.setProperty('--overflow-y', 'auto');
	}
};
