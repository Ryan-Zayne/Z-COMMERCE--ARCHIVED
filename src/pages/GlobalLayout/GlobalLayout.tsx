import { ScrollToTopButton } from '@/components';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function GlobalLayout() {
	const href = useLocation().pathname;

	/* Scrolls to top on route change within Global layout */
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			// behavior: 'instant',
		});
	}, [href]);

	return (
		<>
			<ScrollToTopButton />
			<Navbar />

			<Outlet />

			<Footer />
		</>
	);
}

export default GlobalLayout;
