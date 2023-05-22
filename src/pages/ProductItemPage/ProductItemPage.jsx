import { useParams } from 'react-router-dom';
import { useGetProductItem } from '../../store/react-query';
import ItemHeader from './ProductItem/ItemHeader';
import ItemDescription from './ProductItem/ItemDescription';
import ItemHero from './ProductItem/ItemHero';
import { CarouselContextProvider } from '../../components/Carousel';

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
			<div className="mt-[1.7rem] md:mt-[4rem] md:flex md:h-[45rem] md:justify-around md:gap-[4rem] md:px-[4rem] lg:h-[50rem] lg:gap-[9rem]">
				<CarouselContextProvider slideImages={productItem.images}>
					<ItemHero />
				</CarouselContextProvider>

				<ItemDescription productItem={productItem} />
			</div>
		</section>
	);
};

export default ProductItemPage;
