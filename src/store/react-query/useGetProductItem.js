import useGetAllProducts from './useGetAllProducts';

const useGetProductItem = (productId) => {
	const { isError, isLoading, allProductsArray } = useGetAllProducts();

	const possibleProductIDs = allProductsArray.reduce(
		(accumulator, currentItem) => [...accumulator, currentItem?.id],
		[]
	);

	if (!isLoading && !possibleProductIDs.includes(Number(productId))) {
		throw new Error('Product does not exist');
	}

	return {
		isError,
		isLoading,
		productItem: allProductsArray.find((item) => item?.id === Number(productId)),
	};
};

export default useGetProductItem;
