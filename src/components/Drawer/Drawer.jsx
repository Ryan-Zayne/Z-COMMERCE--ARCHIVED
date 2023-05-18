import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Portal from '../Portal';
import { DrawerContextProvider } from './context';
import DrawerOverlay from './DrawerOverlay';
import DrawerContent from './DrawerContent';
import DrawerCloseButton from './DrawerCloseButton';

const Drawer = ({ children, isOpen, onClose, onOpen, onToggle }) => {
	const context = useMemo(
		() => ({ isOpen, onOpen, onClose, onToggle }),
		[isOpen, onClose, onOpen, onToggle]
	);

	return (
		<DrawerContextProvider value={context}>
			<Portal>
				<aside id="CartDrawer Portal" className="min-h-screen">
					{children}
				</aside>
			</Portal>
		</DrawerContextProvider>
	);
};

const DrawerHeader = ({ children, className }) => {
	return <header className={twMerge([className])}>{children}</header>;
};

const DrawerBody = ({ children, className }) => {
	return <section className={twMerge([className])}>{children}</section>;
};

const DrawerFooter = ({ children, className }) => {
	return <footer className={twMerge([className])}>{children}</footer>;
};

export {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	DrawerCloseButton,
};
