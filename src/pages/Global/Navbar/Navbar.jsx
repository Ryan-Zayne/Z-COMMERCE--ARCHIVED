import { twMerge } from 'tailwind-merge';
import { logo } from '../../../assets/brand';
import { useGlobalStore } from '../../../store/zustand/globalStore';
import NavHeader from './NavHeader';
import NavigationLinks from './NavigationLinks';
import SearchForm from './SearchForm';

const Navbar = () => {
	const isSearchShow = useGlobalStore((state) => state.isSearchShow);
	const isMobile = useGlobalStore((state) => state.isMobile);

	return (
		<header
			id="Navbar"
			className="flex flex-wrap justify-center pt-[1rem] max-md:pb-[2rem] md:gap-[2rem]"
		>
			{/* Logo, Search Bar and Nav Icons */}
			<NavHeader logo={logo} />

			{/* Search Bar for Mobile */}
			{isMobile && (
				<SearchForm
					className={twMerge(
						`absolute top-[7.2rem] z-[10] flex h-0 w-[100%] items-center justify-center overflow-y-hidden rounded-[0_0_5px_5px] bg-body px-[2rem] transition-[height] duration-[600ms] ease-out`,
						[isSearchShow && 'h-[8.1rem] duration-500']
					)}
				/>
			)}

			{/* Navigation Links */}
			<NavigationLinks logo={logo} />
		</header>
	);
};

export default Navbar;
