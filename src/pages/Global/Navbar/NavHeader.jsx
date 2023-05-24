import { BiCartAlt, BiHeart, BiSearchAlt2, BiUser } from 'react-icons/bi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { twJoin, twMerge } from 'tailwind-merge';
import { DropDown, Logo, ThemeSwitchButton } from '../../../components';
import { useDisclosure } from '../../../hooks';
import { useGlobalActions, useGlobalStore } from '../../../store/zustand/globalStore';
import { useShopStore } from '../../../store/zustand/shopStore';
import CartDrawer from './Cart/CartDrawer';
import SearchForm from './SearchForm';

const NavHeader = () => {
	const isMobile = useGlobalStore((state) => state.isMobile);
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const isSearchShow = useGlobalStore((state) => state.isSearchShow);
	const cart = useShopStore((state) => state.cart);
	const { toggleSearchShow, toggleNavShow } = useGlobalActions();
	const cartDisclosure = useDisclosure({ scrollControl: true });
	const dropDownDisclosure = useDisclosure();

	return (
		<div
			id="Nav Icons and Logo"
			className="flex w-full select-none justify-between gap-[1rem] px-[1rem] lg:pr-[4rem] "
		>
			<Link to="/">
				<Logo />
			</Link>

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

			<div
				id="NavIcons Wrapper"
				className="flex w-[clamp(19rem,_42vw,_22rem)] items-center justify-between text-[1.8rem]"
			>
				{isMobile && (
					<button className="hover:text-heading active:scale-[1.25]" onClick={toggleSearchShow}>
						<BiSearchAlt2 />
					</button>
				)}

				{/* TODO - Create wishlist page that gets called on onclick */}
				<button className="hover:text-heading active:scale-[1.2] lg:text-[2.3rem]">
					<BiHeart />
				</button>

				<div className="relative flex items-center justify-center">
					<button
						className="[transition:transform_500ms] hover:text-heading hover:[transform:rotateY(360deg)] lg:text-[2.3rem]"
						onClick={dropDownDisclosure.onToggle}
					>
						<BiUser />
					</button>

					<DropDown
						className={'absolute top-[5.6rem] z-[100] w-[15rem]'}
						isOpen={dropDownDisclosure.isOpen}
					>
						<ul
							className={twJoin(
								`flex flex-col items-start gap-[1.5rem] overflow-y-hidden rounded-[5px] bg-body px-[2rem] text-[1.3rem] [transition:padding_500ms] [&_>_li:hover]:navlink-transition [&_>_li]:relative`,
								[dropDownDisclosure.isOpen && 'py-[1.5rem]']
							)}
						>
							<li>
								<Link to="/">My Account</Link>
							</li>
							<li>
								<Link to="/">Checkout</Link>
							</li>
							<li>
								<Link to="/register">User Login</Link>
							</li>
						</ul>
					</DropDown>
				</div>

				<div className="flex items-center">
					<button
						className="relative active:scale-[1.1] lg:text-[2.3rem]"
						onClick={cartDisclosure.onOpen}
					>
						<BiCartAlt className="hover:text-heading" />
						{cart?.length > 0 && (
							<span className="absolute right-[-1rem] top-[-0.6rem] inline-flex h-[1.7rem] w-[1.7rem] items-center justify-center rounded-[50%] bg-secondary text-[1.2rem] font-[500]">
								{cart?.length}
							</span>
						)}
					</button>

					<CartDrawer
						isOpen={cartDisclosure.isOpen}
						onOpen={cartDisclosure.onOpen}
						onClose={cartDisclosure.onClose}
					/>
				</div>

				<ThemeSwitchButton />

				{!isDesktop && (
					<>
						{/* HAMBURGER */}
						<button
							id="Hamburger"
							className={twMerge(
								`z-[120] w-[2.6rem]`,
								isNavShow &&
									'fixed right-[1.9rem] animate-[bounce_1.5s_ease_infinite] text-rose-600'
							)}
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
