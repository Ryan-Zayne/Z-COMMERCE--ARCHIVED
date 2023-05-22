import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { ScrollToTopButton } from '../../components';

const GlobalLayout = () => {
	return (
		<>
			<ScrollToTopButton />
			<Navbar />
			<Outlet />
		</>
	);
};

export default GlobalLayout;
