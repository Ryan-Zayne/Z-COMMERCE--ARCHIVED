import useGetAllProducts from './useGetAllProducts';

const useGetProductCategory = (productCategory = '') => {
	const { allProductsArray, isError, isLoading } = useGetAllProducts();

	//* This lookup table works by assigning the productCateogry parameter as dynamic key and to each one creates a property equal to the array coming from the filter function.
	//* But since vehicles and watches cateogory do not exist directly, I simple created their properties underneath the dynamic one so it overwrites it when necessary.

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
