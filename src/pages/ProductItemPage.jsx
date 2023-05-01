import { TiArrowBack } from 'react-icons/ti';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useGetAllProducts } from '../hooks';
import ItemHero from '../components/ProductItem/ItemHero';
import ItemDescription from '../components/ProductItem/ItemDescription';

const ProductItemPage = () => {
	const { allProducts, allProductsArray } = useGetAllProducts();
	const { productId } = useParams();
	const [isHearted, setIsHearted] = useState(false);
	const navigate = useNavigate();

	const handleHeartClick = (event) => {
		event.preventDefault();
		setIsHearted(!isHearted);
	};

	if (allProducts.some((item) => item.isLoading === true)) {
		return <h4 className="mt-[3rem] text-center text-[3rem] font-bold">Loading...</h4>;
	}

	if (allProducts.some((item) => item.isError === true)) {
		return (
			<h4 className="mt-[3rem] text-center font-roboto text-[3rem] font-medium text-rose-500">
				Error: Product not found
			</h4>
		);
	}

	const productItem = allProductsArray.find((item) => item.id === Number(productId));

	return (
		<section className="p-[1rem_2rem_5rem] lg:pt-[2rem]">
			<header className="flex items-center justify-between px-[2rem]">
				<button className="text-[3rem]" onClick={() => navigate(-1)}>
					<TiArrowBack />
				</button>

				<h1 className="font-roboto text-[2.7rem] font-[600] lg:text-[3.4rem]">
					{productItem.title}
				</h1>

				<button className="rounded-[50%] bg-primary p-[0.7rem]" onClick={handleHeartClick}>
					{isHearted ? (
						<AiFillHeart className="scale-[1.16] text-[2.1rem] text-heading group-active/btn:scale-[1.23]" />
					) : (
						<AiOutlineHeart className="text-[2.1rem] text-carousel-dot group-hover/btn:text-heading group-active/btn:scale-[1.23]" />
					)}
				</button>
			</header>

			<div className="mt-[1.4rem] md:flex md:justify-around md:gap-[4rem] md:px-[4rem] lg:mt-[4rem] lg:gap-[9rem]">
				<ItemHero productItem={productItem} />
				<ItemDescription productItem={productItem} />
			</div>
		</section>
	);
};

export default ProductItemPage;
