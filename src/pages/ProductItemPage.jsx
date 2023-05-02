import { useParams } from 'react-router-dom';
import { useGetAllProducts } from '../hooks';
import ItemHero from '../components/ProductItem/ItemHero';
import ItemDescription from '../components/ProductItem/ItemDescription';
import ItemHeader from '../components/ProductItem/ItemHeader';

const ProductItemPage = () => {
	const { isLoading, isError, allProductsArray } = useGetAllProducts();
	const { productId } = useParams();

	if (isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Product not found
			</h4>
		);
	}

	const productItem = allProductsArray.find((item) => item.id === Number(productId));

	return (
		<section className="p-[1rem_2rem_3rem] lg:pt-[2rem]">
			<header className="mx-[0.5rem] flex items-center justify-between lg:mx-[3rem]">
				<ItemHeader productItem={productItem} />
			</header>

			<div className="mt-[1.7rem] md:flex md:justify-around md:gap-[4rem] md:px-[4rem] lg:mt-[4rem] lg:gap-[9rem]">
				<ItemHero productItem={productItem} />
				<ItemDescription productItem={productItem} />
			</div>
		</section>
	);
};

export default ProductItemPage;
