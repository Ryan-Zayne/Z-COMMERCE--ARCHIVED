import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { useMediaQuery } from './hooks';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import ProductItem from './pages/ProductItemPage';
import GlobalLayout from './routes/GlobalLayout';

const App = () => {
	useMediaQuery();

	const routes = createRoutesFromElements(
		<Route path="/" element={<GlobalLayout />}>
			<Route index element={<HomePage />} />
			<Route path="all-products" element={<AllProductsPage />} />
			<Route path="all-products/:productId" element={<ProductItem />} />
		</Route>
	);

	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

export default App;
