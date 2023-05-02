import { fetcher } from '../utils/fetcher';
import { useFetchMultiple } from './useFetch';

const useGetAllProducts = () => {
	const productQueries = [
		{ key: ['smartphones'], url: '/products/category/smartphones' },
		{ key: ['laptops'], url: '/products/category/laptops' },
		{ key: ['watches', 'male'], url: '/products/category/mens-watches' },
		{ key: ['watches', 'female'], url: '/products/category/womens-watches' },
		{ key: ['vehicles', 'automotives'], url: '/products/category/automotive' },
		{ key: ['vehicles', 'motorcycles'], url: '/products/category/motorcycle' },
		{ key: ['digital-lighting'], url: '/products/category/lighting' },
	];

	const allProducts = useFetchMultiple(
		productQueries.map((queryItem) => ({
			queryKey: [queryItem.key, queryItem.url],
			queryFn: () => fetcher(queryItem.url),
			staleTime: 5 * 60 * 1000,
		}))
	);

	const isLoading = allProducts.some((item) => item.isLoading === true);

	const isError = allProducts.some((item) => item.isError === true);

	const allProductsArray = allProducts
		.flatMap((item) => item.data?.products)
		// Removed 3rd product cuz it's faulty
		.filter((product) => product?.id !== 3);

	return { isLoading, isError, allProductsArray };
};
export default useGetAllProducts;
