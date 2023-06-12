import { useCallbackRef } from '@/hooks';
import { useStore } from 'zustand';
import { DrawerStore, DrawerStoreApi } from './drawer.types';
import { useContext } from './drawerStoreContext';

const useDrawerStore = <T>(callbackFn: (state: DrawerStore) => T) => {
	const store = useContext();
	const selector = useCallbackRef(callbackFn);

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return useStore<DrawerStoreApi, unknown>(store!, selector) as T;
};

export { useDrawerStore };
