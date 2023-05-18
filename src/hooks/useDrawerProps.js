import { useEffect } from 'react';
import { useDrawerActions } from '../store/zustand/drawerStore';

const useDrawerProps = ({ isOpen, onClose, onOpen, onToggle }) => {
	const { setOpenCallback, setCloseCallback, setIsOpen, setToggleCallback } = useDrawerActions();

	useEffect(() => {
		setIsOpen(isOpen);
		setCloseCallback(onClose);
		setOpenCallback(onOpen);
		setToggleCallback(onToggle);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, onClose, onOpen, onToggle]);
};

export default useDrawerProps;
