import useGetAllProducts from './useGetAllProducts';

const useGetProductCategory = (productCategory) => {
	const { allProductsArray, isError, isLoading } = useGetAllProducts();
	const possibleCategories = ['smartphones', 'laptops', 'watches', 'vehicles', 'lighting'];

	if (!possibleCategories.includes(productCategory)) {
		throw Error('category not found');
	}

	const PRODUCTS_LOOKUP = {
		[productCategory]: allProductsArray.filter((item) => item?.category === productCategory),

		vehicles: [
			...allProductsArray.filter((item) => item?.category === 'motorcycle'),
			...allProductsArray.filter((item) => item?.category === 'automotive'),
		],

		watches: [
			...allProductsArray.filter((item) => item?.category === 'mens-watches'),
			...allProductsArray.filter((item) => item?.category === 'womens-watches'),
		],
	};

	return { isLoading, isError, productsArray: PRODUCTS_LOOKUP[productCategory] };
};

export default useGetProductCategory;
