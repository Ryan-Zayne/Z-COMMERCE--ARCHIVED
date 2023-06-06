import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Portal from '../Portal';
import { DrawerContextProvider, useDrawerStore } from './drawerStoreContext';

const Drawer = ({ children, isOpen, onClose, onOpen }) => {
	const values = useMemo(() => ({ isOpen, onClose, onOpen }), [isOpen, onClose, onOpen]);

	return (
		<DrawerContextProvider storeValues={values}>
			<Portal>
				<aside id="CartDrawer Portal">{children}</aside>
			</Portal>
		</DrawerContextProvider>
	);
};

const DrawerOverlay = () => {
	const isOpen = useDrawerStore((state) => state.isOpen);
	const onClose = useDrawerStore((state) => state.onClose);

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

const DrawerContent = ({ className = '', children, placement = 'right' }) => {
	const isOpen = useDrawerStore((state) => state.isOpen);

	const placementObject = {
		right: 'right-0 translate-x-full',
		left: 'left-0 translate-x-[-100%]',
	};

	return (
		<main
			id="Drawer Content Container"
			className={twMerge(
				`custom-scrollbar fixed bottom-0 top-0 z-[500] flex flex-col overflow-y-auto bg-body transition-transform duration-[250ms] ease-slide-out ${placementObject[placement]} ${className}`,
				[isOpen && 'translate-x-0 duration-[650ms] ease-slide-in']
			)}
		>
			{children}
		</main>
	);
};

const DrawerCloseButton = ({ children, className = '', icon }) => {
	const onClose = useDrawerStore((state) => state.onClose);

	return (
		<button className={twMerge(`absolute ${className}`)} onClick={onClose}>
			{children ?? icon}
		</button>
	);
};

const DrawerHeader = ({ children, className = '' }) => {
	return (
		<header id="Drawer Header" className={className}>
			{children}
		</header>
	);
};

const DrawerBody = ({ children, className = '' }) => {
	return (
		<div id="Drawer Body" className={className}>
			{children}
		</div>
	);
};

const DrawerFooter = ({ children, className = '' }) => {
	return (
		<footer id="Drawer Footer" className={className}>
			{children}
		</footer>
	);
};

Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;

export default Drawer;
