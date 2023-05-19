import { noScrollOnOpen } from '../../../utils/noScrollOnOpen';

export const createGlobalStateSlice = (set, get) => ({
	isNavShow: false,
	isSearchShow: false,
	currentSlide: 0,

	globalActions: {
		toggleNavShow: () => {
			set((state) => ({ isNavShow: !state.isNavShow }));
			noScrollOnOpen(get().isNavShow);
		},

		toggleSearchShow: () => set((state) => ({ isSearchShow: !state.isSearchShow })),

		nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),

		previousSlide: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),

		goToSlide: (resetValue) => set({ currentSlide: resetValue }),
	},
});
