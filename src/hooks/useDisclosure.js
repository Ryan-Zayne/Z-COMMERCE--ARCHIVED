import { useCallback, useState } from 'react';
import { noScrollOnOpen } from '../utils/noScrollOnOpen';

const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = useCallback(() => {
		const newState = true;
		setIsOpen(newState);
		noScrollOnOpen(newState);
	}, []);

	const onClose = useCallback(() => {
		const newState = false;
		setIsOpen(newState);
		noScrollOnOpen(newState);
	}, []);

	const onToggle = useCallback(() => {
		if (isOpen) {
			onClose();
		} else {
			onOpen();
		}
	}, [isOpen, onClose, onOpen]);

	return { isOpen, onOpen, onClose, onToggle };
};
export default useDisclosure;
