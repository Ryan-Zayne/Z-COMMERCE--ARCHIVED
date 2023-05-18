import { scrollbarWidth } from '../../../utils/globalVariables';

export const createGlobalStateSlice = (set, get) => ({
	isNavShow: false,
	isSearchShow: false,
	currentSlide: 0,

	globalActions: {
		toggleNavShow: () => {
			set((state) => ({ isNavShow: !state.isNavShow }));

			if (get().isNavShow) {
				document.body.style.setProperty('--scrollbar-padding', ` ${scrollbarWidth}rem`);
				document.body.classList.add('overflow-hidden');
			} else {
				document.body.style.setProperty('--scrollbar-padding', '');
				document.body.classList.remove('overflow-hidden');
			}
		},

		toggleSearchShow: () => set((state) => ({ isSearchShow: !state.isSearchShow })),

		nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),

		previousSlide: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),

		goToSlide: (resetValue) => set({ currentSlide: resetValue }),
	},
});
