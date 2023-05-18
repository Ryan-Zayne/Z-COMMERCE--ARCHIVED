import { twMerge } from 'tailwind-merge';
import { useDrawerContext } from './context';

const DrawerContent = ({ className = '', children, placement = 'right' }) => {
	const { isOpen } = useDrawerContext();

	const placementObject = {
		right: 'right-0 translate-x-full',
		left: 'left-0 translate-x-[-100%]',
	};

	return (
		<main
			id="Drawer Content Container"
			className={twMerge(
				`fixed top-0 z-[500] flex h-full flex-col bg-body text-[1.4rem] transition-transform duration-[250ms] ease-slide-out`,
				[placementObject[placement]],
				[isOpen && 'translate-x-0 duration-[500ms] ease-slide-in'],
				[className]
			)}
		>
			{children}
		</main>
	);
};

export default DrawerContent;
