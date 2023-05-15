import { scrollbarWidth } from '../../../utils/globalVariables';

export const createGlobalStateSlice = (set, get) => ({
	isNavShow: false,
	isSearchShow: false,
	currentSlide: 0,

	globalActions: {
		preventScroll: (event) => {
			event.preventDefault();
		},

		toggleNavShow: () => {
			set((state) => ({ isNavShow: !state.isNavShow }));

			if (get().isNavShow) {
				document.body.style.setProperty('--scrollbar-padding', ` ${scrollbarWidth}rem`);
				document.body.classList.add('overflow-hidden');
				document.body.addEventListener('wheel', get().globalActions.preventScroll, {
					passive: false,
				});
			} else {
				document.body.style.setProperty('--scrollbar-padding', '');
				document.body.classList.remove('overflow-hidden');
				document.body.removeEventListener('wheel', get().globalActions.preventScroll, {
					passive: false,
				});
			}
		},

		closeNavShow: () => {
			set({ isNavShow: false });
			document.body.style.setProperty('--scrollbar-padding', '');
			document.body.classList.remove('overflow-hidden');
			document.body.removeEventListener('wheel', get().globalActions.preventScroll, {
				passive: false,
			});
		},

		toggleSearchShow: () => set((state) => ({ isSearchShow: !state.isSearchShow })),

		nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),

		previousSlide: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),

		goToSlide: (resetValue) => set({ currentSlide: resetValue }),
	},
});
