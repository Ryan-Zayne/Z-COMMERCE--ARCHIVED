import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useMediaQuery } from './hooks';
import AllProductsPage from './pages/AllProductsPage';
import HomePage from './pages/HomePage';
import ProductItem from './pages/ProductItemPage';
import GlobalLayout from './components/GlobalLayout';

// NOTE - Turned on auto browser scroll restoration for moxilla
window.history.scrollRestoration = 'auto';

const handleLoaderRemoval = () => {
	const loaderElement = document.querySelector('.loader-container');
	loaderElement.style.opacity = '0';

	const loaderTimeout = setTimeout(() => {
		loaderElement.remove();
		window.removeEventListener('DOMContentLoaded', handleLoaderRemoval);

		clearTimeout(loaderTimeout);
	}, 1000);
};

window.addEventListener('DOMContentLoaded', handleLoaderRemoval);

const App = () => {
	useMediaQuery();

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<GlobalLayout />}>
				<Route index element={<HomePage />} />
				<Route path="all-products" element={<AllProductsPage />} />
				<Route path="all-products/:productId" element={<ProductItem />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
