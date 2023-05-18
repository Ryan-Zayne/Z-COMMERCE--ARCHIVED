import { twMerge } from 'tailwind-merge';
import { useDrawerContext } from './context';

const DrawerCloseButton = ({ children, className, icon }) => {
	const { onClose } = useDrawerContext();

	return (
		<button className={twMerge(`absolute`, [className])} onClick={onClose}>
			{children ?? icon}
		</button>
	);
};

export default DrawerCloseButton;
