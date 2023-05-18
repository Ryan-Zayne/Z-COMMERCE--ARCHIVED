import { useContext } from 'react';
import { DrawerContext } from './DrawerContextProvider';

const useDrawerContext = () => {
	const { isOpen, onOpen, onClose, onToggle } = useContext(DrawerContext);

	return { isOpen, onOpen, onClose, onToggle };
};

export default useDrawerContext;
