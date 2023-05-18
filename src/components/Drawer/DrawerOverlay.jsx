import { twMerge } from 'tailwind-merge';
import { useDrawerContext } from './context';

const DrawerOverlay = () => {
	const { isOpen, onClose } = useDrawerContext();

	return (
		<div
			id="Drawer Overlay"
			onClick={onClose}
			className={twMerge(
				`fixed z-[200] w-0 bg-[hsl(0,0%,0%,0.5)] [inset:0_0_0_auto]`,
				isOpen && 'w-screen'
			)}
		/>
	);
};

export default DrawerOverlay;
