import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useMediaQuery } from './hooks';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import GlobalLayout from './pages/Global/GlobalLayout';
import Home from './pages/Home/Home';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage';
import ProductCategoryPage from './pages/ProductCategoryPage/ProductCategoryPage';
import Register from './pages/Register/Register';

const App = () => {
	useMediaQuery();

	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<GlobalLayout />}>
					<Route index={true} element={<Home />} />
					<Route path="all-products" element={<AllProductsPage />} />
					<Route path=":category" element={<ProductCategoryPage />} />
					<Route path=":category/:productId" element={<ProductItemPage />} />
				</Route>

				<Route path="/register" element={<Register />} />
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
