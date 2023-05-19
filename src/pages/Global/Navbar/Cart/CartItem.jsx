import { TbTrashXFilled } from 'react-icons/tb';
import { useThemeStore } from '../../../../store/zustand/themeStore';
import { useShopActions } from '../../../../store/zustand/shopStore';

const CartItem = ({ product }) => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const { removeProductFromCart } = useShopActions();

	const handleRemoveProduct = () => {
		removeProductFromCart(product);
	};
	return (
		<li
			className={`flex items-center rounded-[5px] p-[1.6rem] ${
				isDarkMode
					? 'box-shadow-[0_1px_10px_hsl(0,0%,0%,0.6)]'
					: 'box-shadow-[0_2px_6px_hsl(0,0%,0%,0.3)]'
			}`}
		>
			<img className="aspect-square w-[7rem] rounded-[50%]" src={product.thumbnail} alt="" />

			<div className="ml-[1.6rem] flex flex-col gap-[0.3rem] text-[1.5rem]">
				<h4 className="font-roboto font-[600] lg:text-[1.7rem]">{product.title}</h4>
				<p className="font-[500] text-[hsl(0,0%,40%,0.7)]">${product.price}</p>
				<p>
					Quantity: <span className="text-secondary">{product.quantity}</span>
				</p>
			</div>

			<button
				className="ml-auto text-[2.3rem] text-rose-500 hover:text-rose-400 active:scale-[1.1]"
				onClick={handleRemoveProduct}
			>
				<TbTrashXFilled />
			</button>
		</li>
	);
};
export default CartItem;
