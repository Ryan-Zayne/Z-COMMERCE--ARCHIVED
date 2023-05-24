import { ProductCard } from '../../../components';
import { useHomePageProducts } from '../../../store/react-query';

const RecentProducts = () => {
	const { recentlyViewedProducts } = useHomePageProducts();

	if (recentlyViewedProducts.isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (recentlyViewedProducts.isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: {recentlyViewedProducts.error.message}
			</h4>
		);
	}

	const ProductCards = recentlyViewedProducts.data
		.filter((product) => product.id !== 3)
		.map((product) => (
			<ProductCard
				key={product.id}
				to={`/${product.category}/${product.id}`}
				image={product.images[0]}
				product={product}
			/>
		));

	return (
		<article id="Recently Viewed" className="flex flex-col gap-[3rem] px-[3rem]">
			<h2 className="text-[2.5rem] font-[700] max-md:text-center lg:text-[3rem]">Recently Viewed</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))] justify-items-center gap-[3rem_1.5rem]">
				{ProductCards}
			</ul>
		</article>
	);
};
export default RecentProducts;
