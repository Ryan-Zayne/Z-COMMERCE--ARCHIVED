import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createGlobalStateSlice } from './slices/globalStateSlice';
import { createMediaQuerySlice } from './slices/mediaQuerySlice';

const globalStoreObject = (...params) => ({
	...createGlobalStateSlice(...params),
	...createMediaQuerySlice(...params),
});

export const useGlobalStore = create(devtools(globalStoreObject));
export const useGlobalActions = () => useGlobalStore((state) => state.globalActions);
export const useMediaQueryActions = () => useGlobalStore((state) => state.mediaQueryActions);
