import { assertDefined } from '@/global-helpers.types';
import { useCallbackRef } from '@/hooks';
import { useStore } from 'zustand';
import { DrawerStore, DrawerStoreApi } from './drawer.types';
import { useContext } from './drawerStoreContext';

const useDrawerStore = <T>(callbackFn: (state: DrawerStore) => T) => {
	const store = useContext();
	const selector = useCallbackRef(callbackFn);

	return useStore<DrawerStoreApi, unknown>(assertDefined(store), selector) as T;
};

export { useDrawerStore };
