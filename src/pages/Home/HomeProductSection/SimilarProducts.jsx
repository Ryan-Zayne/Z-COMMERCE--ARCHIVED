import useHomePageProducts from '../../../store/react-query/useHomePageProducts';
import ProductCard from '../../../components/ProductCard';

const SimilarProducts = () => {
	const { similarProducts, similarProductsArray } = useHomePageProducts();

	if (similarProducts.some((item) => item.isLoading === true)) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (similarProducts.some((item) => item.isError === true)) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Something went wrong
			</h4>
		);
	}

	const renderedProducts = similarProductsArray.map((product) => (
		<ProductCard
			key={product.id}
			to={`all-products/${product.id}`}
			image={product.images[1]}
			title={product.title}
			price={product.price}
			description={product.description}
			rating={product.rating}
		/>
	));

	return (
		<article id="Similar Products You Might Like" className="flex flex-col gap-[3rem] px-[3rem]">
			<h2 className="text-[2.5rem] font-[700] max-md:text-center lg:text-[3rem]">
				Similar Products You Might Like
			</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))] justify-items-center gap-[3rem_1.5rem]">
				{renderedProducts}
			</ul>
		</article>
	);
};
export default SimilarProducts;
