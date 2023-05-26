import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { ScrollToTopButton } from '../../components';
import Footer from './Footer/Footer';

const GlobalLayout = () => {
	return (
		<>
			<ScrollToTopButton />
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default GlobalLayout;
