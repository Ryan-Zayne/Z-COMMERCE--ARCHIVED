import { scrollbarWidth } from './constants';

export const noScrollOnOpen = (isOpen) => {
	if (isOpen) {
		document.body.style.setProperty('--scrollbar-padding', ` ${scrollbarWidth}rem`);
		document.body.classList.add('overflow-hidden');
	} else {
		document.body.style.setProperty('--scrollbar-padding', '');
		document.body.classList.remove('overflow-hidden');
	}
};
