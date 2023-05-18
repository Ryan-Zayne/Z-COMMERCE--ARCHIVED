import { createPortal } from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import Logo from '../../../components/Logo';

const CartDrawer1 = ({ isDrawerShow, toggleDrawerShow }) => {
	const Drawer = (
		<aside id="CartDrawer Portal" className="min-h-full">
			<div
				id="CartDrawer Overlay"
				onClick={toggleDrawerShow}
				className={twMerge(
					`fixed z-[200] w-0 bg-[hsl(0,0%,0%,0.6)] [inset:0_0_0_auto]`,
					isDrawerShow && 'w-screen'
				)}
			/>
			<header>
				<button
					className="ml-auto mr-[3rem] rounded-[4px] bg-heading p-[0.2rem] text-[2.6rem] text-primary"
					onClick={toggleDrawerShow}
				>
					<RiCloseFill />
				</button>
			</header>

			<main
				id="Cart Content Container"
				className={twMerge(
					`fixed right-0 top-0 z-[400] flex w-[min(100%,30rem)] flex-col gap-[3rem] overflow-x-hidden bg-body pt-[3rem] text-[1.4rem] transition-transform duration-[250ms] ease-slide-out`,
					[
						isDrawerShow
							? 'translate-x-0 transition-transform duration-[500ms] ease-slide-in'
							: 'translate-x-full',
					]
				)}
			>
				<div className="mx-[3rem] mb-[3rem] ">
					<Logo />
				</div>
			</main>
		</aside>
	);

	return createPortal(Drawer, document.body);
};

export default CartDrawer1;
