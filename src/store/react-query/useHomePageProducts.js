import { fetcher } from '../../utils/fetcher';
import { transformData } from '../../utils/transFormData';
import { useFetch, useFetchMultiple } from './useFetch';

const useHomePageProducts = () => {
	const hotSalesProducts = useFetch({
		key: ['laptops'],
		url: '/products/category/laptops',
	});

	const recentlyViewedProducts = useFetch({
		key: ['smartphones'],
		url: '/products/category/smartphones',
	});

	const similarProducts = useFetchMultiple([
		{
			queryKey: ['vehicles', 'motorcycles'],
			queryFn: () => fetcher('/products/category/motorcycle'),
			select: transformData,
		},
		{
			queryKey: ['watches', 'male'],
			queryFn: () => fetcher('/products/category/mens-watches'),
			select: transformData,
		},
	]);

	const similarProductsArray = similarProducts.flatMap((item) => item.data);

	return { recentlyViewedProducts, hotSalesProducts, similarProducts, similarProductsArray };
};
export default useHomePageProducts;
