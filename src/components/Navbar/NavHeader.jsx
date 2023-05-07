import { BiCartAlt, BiHeart, BiSearchAlt2, BiUser } from 'react-icons/bi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useGlobalActions, useGlobalStore } from '../../store/zustand/globalStore';
import SearchForm from './SearchForm';
import ThemeSwitchButton from './ThemeSwitchButton';

const NavHeader = ({ logo }) => {
	const isMobile = useGlobalStore((state) => state.isMobile);
	const isTablet = useGlobalStore((state) => state.isTablet);
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	const { toggleSearchShow, toggleNavShow, handleNoScrollOnNavSHow, closeNavShow } = useGlobalActions();
	const isNavShow = useGlobalStore((state) => state.isNavShow);

	return (
		<article
			id="NavBar Icons and Logo"
			className="flex w-full select-none justify-between gap-[1rem] px-[1rem]"
		>
			<Link to="/">
				<img className="w-[13rem] md:w-[16rem]" src={logo} alt="" />
			</Link>

			{isTablet && <SearchForm buttonIcon={<BiSearchAlt2 />} />}

			<div className="flex w-[clamp(19rem,_42vw,_22rem)] items-center justify-between text-[1.8rem]">
				{isMobile && (
					<button className="hover:text-heading active:scale-[1.25]" onClick={toggleSearchShow}>
						<BiSearchAlt2 />
					</button>
				)}
				<button className="hover:text-heading active:scale-[1.3]">
					<BiHeart />
				</button>
				<button className="hover:text-heading active:scale-[1.3]">
					<BiUser />
				</button>
				<button className="hover:text-heading active:scale-[1.3]">
					<BiCartAlt />
				</button>
				<ThemeSwitchButton />

				{!isDesktop && (
					<>
						{/* HAMBURGER BUTTON */}
						<button
							id="Hamburger"
							className={twMerge(`z-[120] w-[2.6rem]`, [
								isNavShow &&
									'fixed right-[1.9rem] animate-[bounce_1.5s_ease_infinite] text-rose-600',
							])}
							onClick={() => {
								toggleNavShow();
								handleNoScrollOnNavSHow();
							}}
						>
							{isNavShow ? <RiCloseFill className="text-[3rem]" /> : <RiMenu3Fill />}
						</button>

						{/* HAMBURGER OVERLAY */}
						<div
							onClick={closeNavShow}
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
		</article>
	);
};

export default NavHeader;
