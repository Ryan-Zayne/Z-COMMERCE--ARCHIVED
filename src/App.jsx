import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from './hooks';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import GlobalLayout from './pages/Global/GlobalLayout';
import Home from './pages/Home/Home';
import ProductCategoryPage from './pages/ProductCategoryPage/ProductCategoryPage';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage';
import Register from './pages/Register/Register';

const App = () => {
	useMediaQuery();

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

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

	return (
		<>
			<RouterProvider router={router} />
			<Toaster
				toastOptions={{
					success: {
						style: {
							backgroundColor: 'hsl(153, 81%, 12%',
							color: 'hsl(140, 100%, 71%)',
							border: '2px solid hsl(145, 91%, 23%)',
							paddingBlock: '1.5rem',
						},
					},
				}}
			/>
		</>
	);
};

export default App;
