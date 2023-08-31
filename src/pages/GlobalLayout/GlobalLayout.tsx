import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import ScrollToTopButton from './Navbar/ScrollToTopButton';
import useScrollRestoration from './useScrollRestoration';

function GlobalLayout() {
	useScrollRestoration();

	return (
		<>
			<ScrollToTopButton />
			<Navbar />
			<Outlet />d
			<Footer />
		</>
	);
}

export default GlobalLayout;
