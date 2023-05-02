import { useFetch } from '../../hooks';
import { ProductCard } from '../common';

const SimilarProducts = () => {
	const products1 = useFetch({
		key: ['similar-products', 'motorcycles'],
		url: '/products/category/motorcycle',
	});

	const products2 = useFetch({
		key: ['similar-products', 'mens-watches'],
		url: '/products/category/mens-watches',
	});

	if (products1.isLoading || products2.isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (products1.isError || products2.isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: {products1.error.message}
			</h4>
		);
	}

	const renderedProducts1 = products1.data.products.map((product) => (
		<ProductCard
			key={product.id}
			to={`all-products/${product.id}`}
			image={product.images[0]}
			title={product.title}
			price={product.price}
			description={product.description}
			rating={product.rating}
		/>
	));

	const renderedProducts2 = products2.data.products.map((product) => (
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
		<article id="Similar Products You Might Like" className="flex flex-col gap-[2rem] px-[3rem]">
			<h2 className="text-[2.5rem] font-[700] max-md:text-center lg:text-[3rem]">
				Similar Products You Might Like
			</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))] justify-items-center gap-[3rem_1.5rem]">
				{[...renderedProducts1, ...renderedProducts2]}
			</ul>
		</article>
	);
};
export default SimilarProducts;
