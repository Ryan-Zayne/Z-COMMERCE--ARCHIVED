import { ProductCard } from '../../../components';
import { useHomePageProducts } from '../../../store/react-query';

const HotSalesProducts = () => {
	const { hotSalesProducts } = useHomePageProducts();

	if (hotSalesProducts.isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (hotSalesProducts.isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: {hotSalesProducts.error.message}
			</h4>
		);
	}

	const ProductCards = hotSalesProducts.data.map((product) => (
		<ProductCard
			key={product.id}
			to={`/${product.category}/${product.id}`}
			image={product.images[0]}
			product={product}
		/>
	));

	return (
		<article id="Hot Sales" className="flex flex-col gap-[3rem] px-[3rem]">
			<h2 className="text-[2.5rem] font-[700] max-md:text-center lg:text-[3rem]">Hot Sales</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))] justify-items-center gap-[3rem_1.5rem]">
				{ProductCards}
			</ul>
		</article>
	);
};
export default HotSalesProducts;
