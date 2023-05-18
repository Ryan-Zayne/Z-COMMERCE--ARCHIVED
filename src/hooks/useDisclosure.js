import { useCallback, useState } from 'react';
import { scrollbarWidth } from '../utils/globalVariables';

const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = useCallback(() => {
		setIsOpen(true);
		document.body.style.setProperty('--scrollbar-padding', `${scrollbarWidth}rem`);
		document.body.classList.add('overflow-hidden');
	}, []);

	const onClose = useCallback(() => {
		setIsOpen(false);
		document.body.style.setProperty('--scrollbar-padding', '');
		document.body.classList.remove('overflow-hidden');
	}, []);

	const onToggle = useCallback(() => {
		if (isOpen) {
			onOpen();
			document.body.style.setProperty('--scrollbar-padding', `${scrollbarWidth}rem`);
			document.body.classList.add('overflow-hidden');
		} else {
			onClose();
			document.body.style.setProperty('--scrollbar-padding', '');
			document.body.classList.remove('overflow-hidden');
		}
	}, [isOpen, onClose, onOpen]);

	return { isOpen, onOpen, onClose, onToggle };
};
export default useDisclosure;
