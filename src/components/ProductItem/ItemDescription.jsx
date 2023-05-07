import { useRef, useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, StarRating } from '../common';

const ItemDescription = ({ productItem }) => {
	const [productCount, setProductCount] = useState(0);
	const stockCountRef = useRef(productItem.stock);

	const handlePlus = () => {
		if (productCount !== productItem.stock) {
			setProductCount((prev) => prev + 1);
			stockCountRef.current -= 1;
		}
	};

	const handleMinus = () => {
		if (productCount !== 0) {
			setProductCount((prev) => prev - 1);
			stockCountRef.current += 1;
		}
	};

	return (
		<article className="mt-[2.5rem] max-w-[50rem] md:mt-0">
			<div className="flex items-center justify-between lg:w-[90%]">
				<div>
					<h2 className="text-[2.5rem] font-[600] lg:text-[3rem]">{productItem.brand}</h2>
					<StarRating
						className="mt-[0.4rem] text-[1.6rem]"
						rating={productItem.rating}
						text={'reviews'}
					/>
				</div>
				<p className="text-[2.3rem] font-[500] lg:text-[3rem]">
					<sup>$</sup>
					{productItem.price}
					<sup>.00</sup>
				</p>
			</div>

			<div className="mt-[2rem] lg:mt-[3rem]">
				<h2 className="text-[2.5rem] font-[600] lg:text-[3rem]">Description</h2>
				<p className="mt-[0.4rem] text-[1.5rem] font-[300]">{productItem.description}</p>
			</div>

			<div className="mt-[3.5rem] flex items-center gap-[4rem] lg:gap-[6rem]">
				<div className="flex w-[14rem] items-center justify-between rounded-[4rem] bg-carousel-btn p-[0.6rem_1.1rem] text-[2.3rem] font-[600] md:w-[17rem] md:text-[2.6rem] ">
					<button className="active:scale-[1.2]" onClick={handleMinus}>
						<AiFillMinusCircle />
					</button>

					<p className="font-roboto">{productCount}</p>

					<button className="active:scale-[1.2]" onClick={handlePlus}>
						<AiFillPlusCircle />
					</button>
				</div>
				<div className="whitespace-nowrap text-[1.4rem] tracking-wide md:text-[1.6rem]">
					<p>
						Only{' '}
						<span className="inline-block w-[2.5rem] text-center text-[1.6rem] font-[500] text-[hsl(43,67%,50%)]">
							{stockCountRef.current}
						</span>{' '}
						Items Left
					</p>
					<span>{`Don't miss it`}!</span>
				</div>
			</div>

			<div className="mt-[4rem] flex gap-[3rem] font-[500] max-md:justify-center lg:mt-[6rem]">
				<Button
					theme={'secondary'}
					variant={'shop'}
					className={
						'w-[15rem] p-[1rem_0] transition-[transform] duration-[200ms] ease-in-out  [box-shadow:0_0_0_1.3px_var(--color-secondary)] hover:scale-[1.1] hover:bg-transparent hover:[box-shadow:0_0_0_1.3px_var(--color-primary)] active:scale-[1.1]'
					}
				>
					<p>Buy Now</p>
				</Button>

				<Button
					theme={'ghost'}
					variant={'shop'}
					className={
						'w-[15rem] p-[1rem_0] transition-[transform] duration-[200ms] ease-in-out [box-shadow:0_0_0_1.3px_var(--color-primary)] hover:scale-[1.1] hover:bg-secondary hover:[box-shadow:0_0_0_1.3px_var(--color-secondary)] active:scale-[1.17]'
					}
				>
					<AiOutlineShoppingCart className="mr-[1rem] text-[2rem]" />
					<p>Add to Cart</p>
				</Button>
			</div>
		</article>
	);
};
export default ItemDescription;
