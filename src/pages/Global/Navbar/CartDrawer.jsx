import { RiCloseFill } from 'react-icons/ri';
import {
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from '../../../components/Drawer';
import Logo from '../../../components/Logo';

const CartDrawer = ({ isOpen, onClose, onOpen }) => {
	return (
		<Drawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
			<DrawerOverlay />
			<DrawerContent placement={'right'} className="w-[min(100%,25rem)] max-w-[30rem]">
				<DrawerCloseButton
					className={
						'right-[2rem] top-[2rem] rounded-[4px] bg-heading p-[0.2rem] text-[2.6rem] text-primary'
					}
				>
					<RiCloseFill />
				</DrawerCloseButton>

				<DrawerHeader className={'mx-[2rem] border-b-[1px] border-b-dark p-[7rem_3rem_2rem]'}>
					<Logo />
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	);
};

export default CartDrawer;
