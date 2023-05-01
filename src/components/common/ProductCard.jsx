import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useThemeStore } from '../../zustand-store/themeStore';
import Button from './Button';
import Card from './Card';
import StarRating from './StarRating';

const ProductCard = ({ to = '', image, title, price, description, rating }) => {
	const [isHearted, setIsHearted] = useState(false);
	const isDarkMode = useThemeStore((state) => state.isDarkMode);

	const handleHeartClick = (event) => {
		event.preventDefault();
		setIsHearted(!isHearted);
	};

	return (
		<Card
			as={'li'}
			className={twMerge(`
				group/card w-[min(100%,25rem)] rounded-[1.2rem] transition-all duration-[1000ms] ease-in-out hover:scale-[1.03] hover:[box-shadow:0_0_6px_0_hsl(60,_100%,_0%,_1)]
				${isHearted ? 'scale-[1.03] [box-shadow:0_0_6px_0_hsl(60,_100%,_0%,_1)]' : ''}
				${isHearted && isDarkMode ? 'scale-[1.03] bg-primary [box-shadow:0_0_6px_0px_var(--carousel-dot)]' : ''}
				${isDarkMode ? 'hover:bg-primary hover:[box-shadow:0_0_6px_0px_var(--carousel-dot)]' : ''}
				`)}
		>
			<Link className="inline-block w-full" to={to}>
				<Card.Header
					as="div"
					className="relative h-[18rem] w-[100%] overflow-hidden rounded-[0.8rem_0.8rem_0_0]"
				>
					<button
						id="Wishlist Icon"
						className={twMerge(
							`group/btn absolute bottom-[1.3rem] right-[1.3rem] z-[100] rounded-[50%] bg-primary p-[0.7rem] ${
								isHearted
									? 'opacity-100'
									: 'opacity-0 transition-opacity duration-[1s] group-hover/card:opacity-100'
							} `
						)}
						onClick={handleHeartClick}
					>
						{isHearted ? (
							<AiFillHeart className="scale-[1.16] text-[1.9rem] text-heading group-active/btn:scale-[1.23]" />
						) : (
							<AiOutlineHeart className="text-[1.9rem] text-carousel-dot group-hover/btn:text-heading group-active/btn:scale-[1.23]" />
						)}
					</button>
					<img
						className={twMerge(
							`h-full rounded-[0.8rem_0.8rem_0_0] object-cover brightness-[0.9] transition-all duration-[800ms] ease-in-out group-hover/card:scale-[1.17]
							${isHearted ? 'scale-[1.17]' : ''}`
						)}
						src={image}
						alt=""
					/>
				</Card.Header>

				<Card.Body className="px-[1.4rem] pt-[1rem]">
					<header className="flex min-h-[5rem] items-center justify-between font-[600]">
						<h3>{title}</h3>
						<span>
							<sup>$</sup>
							{price}
							<sup>.00</sup>
						</span>
					</header>
					<p className="mt-[0.5rem] min-h-[6rem] max-w-[30ch] text-[1rem]">{description}</p>
					<StarRating rating={rating} />
				</Card.Body>

				<Card.Footer className="p-[1.3rem_1rem_1rem]">
					<hr className="h-[1.8px] bg-carousel-dot opacity-0 group-hover/card:opacity-100" />
					<Button
						variant={'cart'}
						theme={'secondary'}
						text={'Add to Cart'}
						className={
							'mt-[1rem] p-[0.8rem_1.3rem] text-[1.3rem] font-[500] active:translate-y-[0.15rem]'
						}
						onClick={(e) => e.preventDefault()}
					/>
				</Card.Footer>
			</Link>
		</Card>
	);
};

export default ProductCard;
