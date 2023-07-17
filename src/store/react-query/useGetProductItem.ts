import { useGetAllProducts } from './useGetAllProducts';

const useGetProductItem = (productId: number | string | undefined) => {
	const { isError, isLoading, allProductsArray } = useGetAllProducts();

	const possibleProductIDs = [
		1, 2, 4, 5, 6, 7, 8, 9, 10, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 86, 87, 88, 89, 90, 91, 92, 93,
		94, 95, 96, 97, 98, 99, 100,
	];

	if (!possibleProductIDs.includes(Number(productId))) {
		throw new Error('Product not found!');
	}

	return {
		isError,
		isLoading,
		productItem: allProductsArray.find((item) => item?.id === Number(productId)),
	};
};

export { useGetProductItem };
