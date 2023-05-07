import { useEffect, useState } from 'react';
import { BsChevronDoubleRight, BsMenuButtonFill } from 'react-icons/bs';
import { Link, NavLink, useHref } from 'react-router-dom';
import { twJoin, twMerge } from 'tailwind-merge';
import { useGlobalActions, useGlobalStore } from '../../store/zustand/globalStore';
import { useThemeStore } from '../../store/zustand/themeStore';

const NavigationLinks = ({ logo }) => {
	const href = useHref();
	const [isCategoryShow, setIsCategoryShow] = useState(href === '/');
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const { closeNavShow } = useGlobalActions();

	// Close Category Menu on Route that's not the HomePage
	useEffect(() => {
		if (href === '/') {
			setIsCategoryShow(true);
		} else {
			setIsCategoryShow(false);
		}
	}, [href]);

	const renderedCategories = [
		{ title: 'All Products', path: '/all-products' },
		{ title: 'Smartphones', path: '/smartphones' },
		{ title: 'Laptops', path: '/laptops' },
		{ title: 'Watches', path: '/mens-watches' },
		{ title: 'Vehicles', path: '/vehicles' },
		{ title: 'Digital Lighting', path: '/digital-lighting' },
	].map((category) => (
		<li key={category.title}>
			<Link
				to={category.path}
				className="flex items-center justify-between py-[1rem] [border-bottom:1px_solid_var(--color-primary)]"
			>
				<p>{category.title}</p>
				<BsChevronDoubleRight />
			</Link>
		</li>
	));

	const toggleCategoryShow = () => setIsCategoryShow((state) => !state);
	const handleNavlinkClassName = ({ isActive }) => {
		return twJoin(`relative navlink-transition`, [isActive && 'text-[var(--brand-inverse)]']);
	};

	return (
		<article id="Navigation Links" className="w-full">
			<nav className="flex w-[100%] items-center justify-between font-[500] lg:pr-[2rem] ">
				{isDesktop && (
					<div id="Shop By Categories" className="relative z-50 ml-[0.5rem]">
						<button
							className="flex w-[28rem] items-center gap-[1rem] rounded-[0.5rem_0.5rem_0_0] bg-heading p-[1rem_1.5rem] font-[500] text-[var(--color-primary)]"
							onClick={toggleCategoryShow}
						>
							<BsMenuButtonFill className="text-[2rem]" />
							Shop By Category
						</button>

						{/* CATEGORY LINKS */}
						<ul
							id="Category List"
							className={twMerge(
								`absolute w-full overflow-hidden bg-body px-[2rem] font-[400] transition-[height,padding] duration-[400ms] ease-out`,
								[
									[
										isDarkMode
											? '[box-shadow:0_1px_3px_0.3px_var(--carousel-dot)]'
											: '[box-shadow:0_1px_3px_0.3px_var(--color-primary)]',
									],
									[
										isCategoryShow
											? 'h-[41.4rem] pt-[5rem] lg:h-[45.9rem]'
											: 'h-0 [box-shadow:revert]',
									],
								]
							)}
						>
							{renderedCategories}
						</ul>
					</div>
				)}

				{/* NAVIGATION LINKS */}
				<ul
					id="Navigation List"
					className={twMerge(`flex gap-[12rem]`, [
						[
							!isDesktop &&
								'fixed z-[100] w-0 flex-col gap-[3.2rem] bg-navbar pt-[7rem] text-[1.4rem] text-[whitesmoke] [backdrop-filter:blur(2rem)_saturate(5)] [inset:0_0_0_auto] [transition:width_200ms_ease] md:text-[1.6rem]',
						],
						[isNavShow && 'w-[min(21rem,_80%)] [transition:width_500ms_ease] md:w-[24rem]'],
					])}
				>
					{!isDesktop && (
						<img className="mb-[2rem] ml-[4rem] w-[13rem] md:w-[16rem]" src={logo} alt="" />
					)}
					<li className="max-lg:pl-[4rem]" onClick={closeNavShow}>
						<NavLink className={handleNavlinkClassName} to="/">
							Home
						</NavLink>
					</li>
					{!isDesktop && <li className="max-lg:pl-[4rem]">Categories</li>}
					<li className="max-lg:pl-[4rem]" onClick={closeNavShow}>
						<NavLink className={handleNavlinkClassName} to="/all-products">
							Products
						</NavLink>
					</li>
					<li className="max-lg:pl-[4rem]" onClick={closeNavShow}>
						<NavLink className={handleNavlinkClassName} to="/contact-us">
							Contact
						</NavLink>
					</li>
				</ul>

				{isDesktop && (
					<p>
						Free shipping on <span>Orders $50</span>
					</p>
				)}
			</nav>
		</article>
	);
};

export default NavigationLinks;
