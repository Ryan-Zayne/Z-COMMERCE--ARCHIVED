import { useMediaQuery } from '@/hooks';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorElement from './pages/ErrorElement';
import GlobalLayout from './pages/GlobalLayout/GlobalLayout';
import Loader from './pages/GlobalLayout/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const AllProductsPage = lazy(() => import('./pages/AllProductsPage/AllProductsPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const ProductCategoryPage = lazy(() => import('./pages/ProductCategoryPage/ProductCategoryPage'));
const ProductItemPage = lazy(() => import('./pages/ProductItemPage/ProductItemPage'));
const Register = lazy(() => import('./pages/Register/Register'));

AOS.init();

function App() {
	useMediaQuery();

	const href = window.location.pathname;

	useEffect(() => {
		if (href !== '/') {
			const titleAddition = href[0] && href[0].toUpperCase() + href.slice(2);

			document.title = `DigitalGenie — ${titleAddition}`;
		}
	}, [href]);


	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" errorElement={<ErrorElement />} element={<GlobalLayout />}>
					<Route index={true} element={<Home />} />
					<Route path="all-products" element={<AllProductsPage />} />
					<Route path=":category" element={<ProductCategoryPage />} />
					<Route path=":category/:productId" element={<ProductItemPage />} />
				</Route>

				<Route path="/register" element={<Register />} />
				<Route path="*" element={<PageNotFound />} />
			</>
		)
	);

	return (
		<>
			<Suspense fallback={<Loader />}>
				<RouterProvider router={router} />
			</Suspense>

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
}

export default App;
