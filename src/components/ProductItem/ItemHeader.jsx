import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const ItemHeader = ({ productItem }) => {
	const [isHearted, toggleIsHearted] = useReducer((state) => !state, false);
	const navigate = useNavigate();

	return (
		<>
			<button className={'text-[3rem]'} onClick={() => navigate(-1)}>
				<TiArrowBack />
			</button>

			<h1 className="text-center font-roboto text-[2.7rem] font-[600] lg:text-[3.4rem]">
				{productItem.title}
			</h1>

			<button className="rounded-[50%] bg-primary p-[0.7rem]" onClick={toggleIsHearted}>
				{isHearted ? (
					<AiFillHeart className="scale-[1.16] text-[2.1rem] text-heading group-active/btn:scale-[1.23]" />
				) : (
					<AiOutlineHeart className="text-[2.1rem] text-carousel-dot group-hover/btn:text-heading group-active/btn:scale-[1.23]" />
				)}
			</button>
		</>
	);
};
export default ItemHeader;
