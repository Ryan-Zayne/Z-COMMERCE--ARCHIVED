import { create } from 'zustand';

const shopStateObject = (set, get) => ({
	cart: [],
	totalItems: 0,
	totalPrice: 0,
	wishList: [],

	shopActions: {
		addToCart: (product) => {
			const { cart } = get();
			const isItemInCart = cart.some((item) => item.id === product.id);

			let updatedCart;
			if (!isItemInCart) {
				updatedCart = [...cart, { ...product, quantity: 1 }];
			} else {
				updatedCart = cart.map((item) => {
					if (item.id === product.id) {
						return { ...item, quantity: item.quantity + 1 };
					}
					return item;
				});
			}

			set((state) => ({
				cart: updatedCart,
				totalItems: state.totalItems + 1,
				totalPrice: state.totalPrice + product.price,
			}));
		},
	},
});

// Store hook Creation
export const useShopStore = create(shopStateObject);

// Actions hook
export const useShopActions = () => useShopStore((state) => state.shopActions);
