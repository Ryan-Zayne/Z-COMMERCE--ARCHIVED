import useGetAllProducts from './useGetAllProducts';

const useGetProductItem = (productId) => {
	const { isError, isLoading, allProductsArray } = useGetAllProducts();

	const productItem = allProductsArray.find((item) => item?.id === Number(productId));

	return { isError, isLoading, productItem };
};

export default useGetProductItem;
