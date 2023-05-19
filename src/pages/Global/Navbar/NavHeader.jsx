import { BiCartAlt, BiHeart, BiSearchAlt2, BiUser } from 'react-icons/bi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { twJoin, twMerge } from 'tailwind-merge';
import { Logo } from '../../../components';
import { useDisclosure } from '../../../hooks';
import { useGlobalActions, useGlobalStore } from '../../../store/zustand/globalStore';
import CartDrawer from './Cart/CartDrawer';
import SearchForm from './SearchForm';
import ThemeSwitchButton from './ThemeSwitchButton';

const NavHeader = () => {
	const isMobile = useGlobalStore((state) => state.isMobile);
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const isSearchShow = useGlobalStore((state) => state.isSearchShow);
	const { toggleSearchShow, toggleNavShow } = useGlobalActions();
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<div
			id="Nav Icons and Logo"
			className="relative flex w-full select-none justify-between gap-[1rem] px-[1rem] lg:pr-[4rem]"
		>
			<Link to="/">
				<Logo />
			</Link>

			<CartDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

			<SearchForm
				className={twJoin(
					[
						isMobile
							? 'absolute inset-x-0 top-[6.2rem] z-[10] flex h-0 w-[100%] items-center justify-center overflow-y-hidden rounded-[0_0_5px_5px] bg-body px-[2rem] transition-[height] duration-[400ms] ease-out'
							: 'w-[min(100%,_54vw)]',
					],
					[isSearchShow && 'h-[8.1rem] duration-[600ms] ease-[ease]']
				)}
			/>

			<div className="flex w-[clamp(19rem,_42vw,_22rem)] items-center justify-between text-[1.8rem]">
				{isMobile && (
					<button className="hover:text-heading active:scale-[1.25]" onClick={toggleSearchShow}>
						<BiSearchAlt2 />
					</button>
				)}

				<button className="hover:text-heading active:scale-[1.3] md:text-[2.3rem]">
					<BiHeart />
				</button>

				<button className="hover:text-heading active:scale-[1.3] md:text-[2.3rem]">
					<BiUser />
				</button>

				<button className="hover:text-heading active:scale-[1.3] md:text-[2.3rem]" onClick={onOpen}>
					<BiCartAlt />
				</button>

				<ThemeSwitchButton />

				{!isDesktop && (
					<>
						{/* HAMBURGER */}
						<button
							id="Hamburger"
							className={twMerge(`z-[120] w-[2.6rem]`, [
								isNavShow &&
									'fixed right-[1.9rem] animate-[bounce_1.5s_ease_infinite] text-rose-600',
							])}
							onClick={toggleNavShow}
						>
							{isNavShow ? <RiCloseFill className="text-[3rem]" /> : <RiMenu3Fill />}
						</button>

						{/* HAMBURGER OVERLAY */}
						<div
							onClick={toggleNavShow}
							className={twMerge(
								`fixed z-[80] w-0 bg-[hsl(0,0%,0%,0.6)] [inset:0_0_0_auto]`,
								isNavShow && 'w-screen'
							)}
						>
							{/* Background Overlay here */}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default NavHeader;
