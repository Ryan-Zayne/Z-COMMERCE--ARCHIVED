import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useMediaQuery } from './hooks';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import GlobalLayout from './pages/Global/GlobalLayout';
import Home from './pages/Home/Home';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage';

const App = () => {
	useMediaQuery();

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<GlobalLayout />}>
				<Route index element={<Home />} />
				<Route path="all-products" element={<AllProductsPage />} />
				<Route path="all-products/:productId" element={<ProductItemPage />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
