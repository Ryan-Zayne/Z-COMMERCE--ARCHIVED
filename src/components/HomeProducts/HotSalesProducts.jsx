import { useFetch } from '../../hooks';
import { ProductCard } from '../common';

const HotSalesProducts = () => {
	const products = useFetch({
		key: ['hot-sales'],
		url: '/products?limit=4&skip=4',
	});

	if (products.isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (products.isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: {products.error.message}
			</h4>
		);
	}

	const renderedProducts = products.data.products.map((product) => (
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
	return (
		<article id="Hot Sales" className="flex flex-col gap-[3rem] px-[3rem]">
			<h2 className="text-[2.5rem] font-[700] lg:text-[3rem]">Hot Sales</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))] justify-items-center gap-[3rem_1.5rem]">
				{renderedProducts}
			</ul>
		</article>
	);
};
export default HotSalesProducts;
