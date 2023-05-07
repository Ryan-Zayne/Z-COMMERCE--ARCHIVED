import { useParams } from 'react-router-dom';
import ItemDescription from '../components/ProductItem/ItemDescription';
import ItemHeader from '../components/ProductItem/ItemHeader';
import ItemHero from '../components/ProductItem/ItemHero';
import useGetProductItem from '../store/react-query/useGetProductItem';

const ProductItemPage = () => {
	const { productId } = useParams();
	const { isLoading, productItem, isError } = useGetProductItem(productId);

	if (isLoading) {
		return null;
	}

	if (isError) {
		return (
			<h4 className="mt-[3rem] rounded-[2px_2px] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Product not found
			</h4>
		);
	}

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
