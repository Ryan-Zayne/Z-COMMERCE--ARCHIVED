import { noScrollOnOpen } from '../../../utils/noScrollOnOpen';

export const createGlobalStateSlice = (set, get) => ({
	isNavShow: false,
	isSearchShow: false,

	globalActions: {
		toggleNavShow: () => {
			set((state) => ({ isNavShow: !state.isNavShow }));
			noScrollOnOpen(get().isNavShow);
		},

		toggleSearchShow: () => set((state) => ({ isSearchShow: !state.isSearchShow })),
	},
});
