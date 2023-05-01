import { useEffect, useState } from 'react';
import { BsChevronDoubleRight, BsMenuButtonFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useGlobalActions, useGlobalStore } from '../../zustand-store/globalStore';
import { useThemeStore } from '../../zustand-store/themeStore';

const NavigationLinks = ({ logo }) => {
	const location = useLocation();
	const [isCategoryShow, setIsCategoryShow] = useState(() => location.pathname === '/');
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const isDesktop = useGlobalStore((state) => state.isDesktop);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const { closeNavShow } = useGlobalActions();
	const handleCategoryShow = () => setIsCategoryShow(!isCategoryShow);

	// Close Category on Route Change that's not the HomePage
	useEffect(() => {
		if (location.pathname === '/') {
			setIsCategoryShow(true);
		} else {
			setIsCategoryShow(false);
		}
	}, [location.pathname]);

	const styles = {
		NAVLIST_CLASSES: twMerge(`
				flex gap-[12rem]
				${
					!isDesktop
						? 'z-[100] fixed text-[1.4rem] md:text-[1.6rem] text-[whitesmoke] flex-col w-0 gap-[3.2rem] bg-navbar pt-[7rem] [inset:0_0_0_auto] [transition:width_200ms_ease] [backdrop-filter:blur(2rem)_saturate(5)]'
						: ''
				}
				${isNavShow ? 'w-[min(21rem,_80%)] md:w-[24rem] [transition:width_500ms_ease]' : ''}
		`),

		CATEGORY_LIST_CLASSES: twMerge(`
				absolute w-full bg-body px-[2rem] font-[400] transition-[height,padding] duration-[400ms] ease-out overflow-hidden
				${
					isDarkMode
						? '[box-shadow:0_1px_3px_0.3px_var(--carousel-dot)]'
						: '[box-shadow:0_1px_3px_0.3px_var(--color-primary)]'
				}
				${isCategoryShow ? 'pt-[5rem] h-[41.4rem] lg:h-[45.9rem]' : 'h-0 [box-shadow:unset]'}
		`),
	};

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

	return (
		<article id="Navigation Links" className="w-full">
			<nav className="flex w-[100%] items-center justify-between font-[500] lg:pr-[2rem] ">
				{isDesktop && (
					<div id="Shop By Categories" className="relative z-50 ml-[0.5rem]">
						<button
							className="flex w-[28rem] items-center gap-[1rem] rounded-[0.5rem_0.5rem_0_0] bg-heading p-[1rem_1.5rem] font-[500] text-[var(--color-primary)]"
							onClick={handleCategoryShow}
						>
							<BsMenuButtonFill className="text-[2rem]" />
							Shop By Category
						</button>

						<ul id="Category List" className={styles.CATEGORY_LIST_CLASSES}>
							{renderedCategories}
						</ul>
					</div>
				)}

				{/* NAVIGATION LINKS */}
				<ul id="Navigation List" className={styles.NAVLIST_CLASSES}>
					{!isDesktop && (
						<img className="mb-[2rem] ml-[4rem] w-[13rem] md:w-[16rem]" src={logo} alt="" />
					)}
					<li className="max-lg:pl-[4rem]" onClick={closeNavShow}>
						<Link to="/">Home</Link>
					</li>
					{!isDesktop && <li className="max-lg:pl-[4rem]">Categories</li>}
					<li className="max-lg:pl-[4rem]" onClick={closeNavShow}>
						<Link to="/all-products">Products</Link>
					</li>
					<li className="max-lg:pl-[4rem]" onClick={closeNavShow}>
						<Link to="#">Contact</Link>
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
