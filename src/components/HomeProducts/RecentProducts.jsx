import { useFetch } from '../../hooks';
import { ProductCard } from '../common';

const RecentProducts = () => {
	const products = useFetch({
		key: ['recently-viewed'],
		url: '/products/category/smartphones',
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

	const renderedProducts = products.data.products
		.filter((product) => product.id !== 3)
		.map((product) => (
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
		<article id="Recently Viewed" className="flex flex-col gap-[2rem] px-[3rem]">
			<h2 className="text-[2.5rem] font-[700] max-md:text-center lg:text-[3rem]">Recently Viewed</h2>
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(23rem,1fr))] justify-items-center gap-[3rem_1.5rem]">
				{renderedProducts}
			</ul>
		</article>
	);
};
export default RecentProducts;
