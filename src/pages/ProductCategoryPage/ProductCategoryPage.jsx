import { useParams, Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { useGetProductCategory } from '../../store/react-query';
import { ProductCard } from '../../components';

const ProductCategoryPage = () => {
	const { category } = useParams();
	const { productsArray, isError, error, isLoading } = useGetProductCategory(category);

	if (isLoading) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (isError) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: {error.message}
			</h4>
		);
	}

	const ProductCategoryCards = productsArray.map((product) => (
		<ProductCard
			key={product.id}
			to={`/${product.category}/${product.id}`}
			image={product.images[1]}
			product={product}
		/>
	));

	return (
		<section className="mt-[3rem] lg:mt-[5rem]">
			<header className="flex flex-row-reverse items-center justify-center px-[3rem]">
				<h1 className="mx-auto text-[3rem] font-[700] capitalize lg:text-[4rem]">
					{category === 'lighting' ? 'Digital Lighting' : category}
				</h1>
				<button className="text-[3rem]">
					<Link to={'/'}>
						<TiArrowBack />
					</Link>
				</button>
			</header>
			<article className="mt-[4rem] px-[3rem]">
				<ul className="grid grid-cols-[repeat(auto-fit,_minmax(24rem,1fr))] justify-items-center gap-[5rem_2rem]">
					{ProductCategoryCards}
				</ul>
			</article>
		</section>
	);
};

export default ProductCategoryPage;
