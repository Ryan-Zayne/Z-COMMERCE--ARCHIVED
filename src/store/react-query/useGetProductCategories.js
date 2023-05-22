import { useFetch } from './useFetch';

const useGetProductCategory = (productCategory) => {
	const {
		data: products,
		isLoading,
		isError,
	} = useFetch({
		key: [productCategory],
		url: `/products/category/${productCategory}`,
	});

	const femaleWatches = useFetch({
		key: ['womens-watches'],
		url: '/products/category/womens-watches',
		staleTime: 2 * 60 * 1000,
	});

	const maleWatches = useFetch({
		key: ['mens-watches'],
		url: '/products/category/mens-watches',
		staleTime: 2 * 60 * 1000,
	});

	let productsArray;
	switch (productCategory) {
		case 'smartphones':
			productsArray = products?.filter((product) => product.id !== 3);
			break;

		case 'watches':
			productsArray = !femaleWatches.isLoading &&
				!maleWatches.isLoading && [...femaleWatches.data, ...maleWatches.data];
			break;

		default:
			productsArray = products;
			break;
	}

	return { isLoading, isError, productsArray };
};

export default useGetProductCategory;
