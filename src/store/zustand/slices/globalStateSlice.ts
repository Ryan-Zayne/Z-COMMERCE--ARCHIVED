import { StateCreator } from 'zustand';
import { noScrollOnOpen } from '../../../utils/noScrollOnOpen';
import { GlobalSlice, GlobalStore } from '../zustand-store.types';

export const createGlobalStateSlice: StateCreator<GlobalStore, [], [], GlobalSlice> = (set, get) => ({
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
