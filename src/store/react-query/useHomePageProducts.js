import { fetcher } from '../../utils/fetcher';
import { transformData } from '../../utils/transFormData';
import { useFetch, useFetchMultiple } from './useFetch';

const useHomePageProducts = () => {
	const hotSalesProducts = useFetch({
		key: ['laptops'],
		url: '/products/category/laptops',
		staleTime: 2 * 60 * 1000,
	});

	const recentlyViewedProducts = useFetch({
		key: ['smartphones'],
		url: '/products/category/smartphones',
		staleTime: 2 * 60 * 1000,
	});

	const similarProducts = useFetchMultiple([
		{
			queryKey: ['motorcycles'],
			queryFn: () => fetcher('/products/category/motorcycle'),
			staleTime: 2 * 60 * 1000,
			select: transformData,
		},
		{
			queryKey: ['mens-watches'],
			queryFn: () => fetcher('/products/category/mens-watches'),
			staleTime: 2 * 60 * 1000,
			select: transformData,
		},
	]);

	const similarProductsArray = similarProducts.flatMap((item) => item.data);

	return { recentlyViewedProducts, hotSalesProducts, similarProducts, similarProductsArray };
};
export default useHomePageProducts;
