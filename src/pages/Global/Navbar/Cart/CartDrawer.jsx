import { IoMdCart } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Button, Drawer } from '../../../../components';
import Logo from '../../../../components/Logo';
import { useShopStore } from '../../../../store/zustand/shopStore';
import { useThemeStore } from '../../../../store/zustand/themeStore';
import CartItem from './CartItem';

const CartDrawer = ({ isOpen, onClose, onOpen }) => {
	const cart = useShopStore((state) => state.cart);
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const totalPrice = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const CartItems =
		cart?.length !== 0 ? (
			cart?.map((item) => <CartItem key={item.id} product={item} />)
		) : (
			<div className="text-center italic">
				<h4 className="text-[2.8rem] font-[500]">Why here go dey empty?!</h4>
				<p className="mt-[0.7rem] text-[1.6rem]">
					Shey na window shopping you come do or abi wetin?😐
				</p>
			</div>
		);

	return (
		<Drawer {...{ isOpen, onClose, onOpen }}>
			<Drawer.Overlay />

			<Drawer.Content
				placement={'right'}
				className="w-[min(100%,28rem)] pb-[1.6rem] lg:min-w-[40rem]"
			>
				<Drawer.CloseButton
					className={
						'right-[2rem] top-[2rem] rounded-[4px] bg-heading p-[0.2rem] text-[2.6rem] text-primary'
					}
				>
					<RiCloseFill />
				</Drawer.CloseButton>

				<Drawer.Header
					className={
						'mx-[1.3rem] flex items-center gap-[2rem] border-b-[1px] border-b-dark p-[7rem_0_2rem_2rem] lg:pl-[4.5rem]'
					}
				>
					<Logo />
					<IoMdCart
						className={`text-[4.5rem] ${isDarkMode ? 'text-carousel-dot' : 'text-primary'} `}
					/>
				</Drawer.Header>

				<Drawer.Body className="px-[1.3rem] pt-[4rem] lg:px-[2rem]">
					<ul className="flex flex-col gap-[1rem]">{CartItems}</ul>

					<div className="mt-[4rem] px-[1rem] lg:px-[2.6rem]">
						<p className="flex justify-between text-[1.8rem] font-[600]">
							Total:
							<span className="text-[2rem]">
								<sup>$</sup>
								{totalPrice}
								<sup>.00</sup>
							</span>
						</p>
					</div>
				</Drawer.Body>

				<Drawer.Footer className="px-[1.3rem] pt-[3rem] lg:px-[2rem]">
					<Link>
						<Button
							theme={'secondary'}
							className={
								'w-full text-[1.7rem] font-[600] [transition:box-shadow_300ms_ease] hover:box-shadow-[0_4px_20px_rgb(51,62,72,0.4)]'
							}
						>
							Checkout
						</Button>
					</Link>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer>
	);
};

export default CartDrawer;
