import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, StarRating } from '../../../components';
import { useShopActions, useShopStore } from '../../../store/zustand/shopStore';

const ItemDescription = ({ productItem }) => {
	const cart = useShopStore((state) => state.cart);
	const productItemInCart = cart.find((item) => item.id === productItem.id);
	const [productQuantityChosen, setProductQuantityChosen] = useState(
		() => productItemInCart?.quantity ?? 0
	);
	const quantityLeftInStock = productItem.stock - productQuantityChosen;
	const { addToCart, decreaseProductQuantity } = useShopActions();

	//* I did this below to avoid using useEffect to synchronize the quantity in the cart with the quantity in the state onClick of addToCart Button.
	//* Another way to solve this is by updating the quantityState in the addToCart btn click handler, i.e setProductQuantityChosen((prev) => prev + 1).
	//*  But I chose to leave it this way so as to teach myself stuff about eliminating useless effects in the future.

	if (productItemInCart?.quantity != null && productQuantityChosen !== productItemInCart?.quantity) {
		setProductQuantityChosen((prev) => productItemInCart?.quantity ?? prev);
	}

	// TODO - Add a toast on click of this, to alert user what is being done
	// TODO - Add a modal when this is clicked up to five times and ask user if he want to add many at once, all according to this medium post: https://medium.com/@viktoriadobrodenchuk/how-to-add-to-cart-properly-fcf279bb73fd
	const handlePlus = () => {
		if (productQuantityChosen !== productItem.stock) {
			setProductQuantityChosen((prev) => prev + 1);
			addToCart(productItem);
		}
	};

	// TODO - Add a toast on click of this, to alert user what is being done
	const handleMinus = () => {
		if (productQuantityChosen !== 0) {
			setProductQuantityChosen((prev) => prev - 1);
			decreaseProductQuantity(productItem);
		}
	};

	// TODO - Add a toast on click of this, to alert user what is being done
	const handleAddToCart = () => {
		addToCart(productItem);
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

					<p className="font-roboto">{productQuantityChosen}</p>

					<button className="active:scale-[1.2]" onClick={handlePlus}>
						<AiFillPlusCircle />
					</button>
				</div>
				<div className="whitespace-nowrap text-[1.4rem] tracking-wide md:text-[1.6rem]">
					<p>
						Only
						<span className="inline-block min-w-[3rem] text-center text-[1.6rem] font-[500] text-[hsl(43,67%,50%)]">
							{quantityLeftInStock}
						</span>
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
					onClick={handleAddToCart}
				>
					<AiOutlineShoppingCart className="mr-[1rem] text-[2rem]" />
					<p>Add to Cart</p>
				</Button>
			</div>
		</article>
	);
};
export default ItemDescription;
