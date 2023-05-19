import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useShopActions, useShopStore } from '../../../store/zustand/shopStore';

const ItemHeader = ({ productItem }) => {
	const wishList = useShopStore((state) => state.wishList);
	const { toggleAddToWishList } = useShopActions();
	const isProductInWishList = wishList.some((item) => item.id === productItem.id);
	const [isHearted, setIsHearted] = useState(() => isProductInWishList);
	const navigate = useNavigate();

	const handleHeartClick = () => {
		setIsHearted((prev) => !prev);
		toggleAddToWishList(productItem);
	};

	return (
		<>
			<button className={'text-[3rem]'} onClick={() => navigate(-1)}>
				<TiArrowBack />
			</button>

			<h1 className="text-center font-roboto text-[2.7rem] font-[600] lg:text-[3.4rem]">
				{productItem.title}
			</h1>

			<button className="rounded-[50%] bg-primary p-[0.7rem]" onClick={handleHeartClick}>
				{isHearted ? (
					<AiFillHeart className="scale-[1.16] text-[2.1rem] text-heading active:scale-[1.23]" />
				) : (
					<AiOutlineHeart className="text-[2.1rem] text-carousel-dot hover:text-heading active:scale-[1.23]" />
				)}
			</button>
		</>
	);
};
export default ItemHeader;
