import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const GlobalLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};
export default GlobalLayout;
