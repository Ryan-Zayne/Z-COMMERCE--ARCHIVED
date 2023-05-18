import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Store Object Initializtion
const drawerStoreObject = (set) => ({
	isOpen: false,
	onOpen: null,
	onClose: null,
	onToggle: null,

	drawerActions: {
		setIsOpen: (boolean) => set({ isOpen: boolean }),
		setOpenCallback: (callbackFn) => set({ onOpen: callbackFn }),
		setCloseCallback: (callbackFn) => set({ onClose: callbackFn }),
		setToggleCallback: (callbackFn) => set({ onToggle: callbackFn }),
	},
});

// Store hook Creation
export const useDrawerStore = create(devtools(drawerStoreObject));

// Actions hook
export const useDrawerActions = () => useDrawerStore((state) => state.drawerActions);
