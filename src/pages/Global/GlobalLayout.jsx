import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../../components';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

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
