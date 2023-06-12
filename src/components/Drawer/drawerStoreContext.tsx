import { createContext } from '@/hooks/context-hook';
import { useEffect, useState } from 'react';
import { createStore } from 'zustand';
import { DrawerProviderProps, DrawerStore, DrawerStoreApi } from './drawer.types';

const createDrawerStore = () =>
	createStore<DrawerStore>(() => ({
		isOpen: false,
		onOpen: () => {},
		onClose: () => {},
		onToggle: () => {},
	}));

const [Provider, useContext] = createContext<DrawerStoreApi | null>({
	name: 'DrawerStoreContext',
	hookName: 'useDrawerStore',
	strict: true,
	providerName: 'DrawerContextProvider',
	defaultValue: null,
});

function DrawerContextProvider({ children, storeValues }: DrawerProviderProps) {
	const [drawerStore] = useState(() => createDrawerStore());

	useEffect(() => {
		drawerStore.setState(storeValues);
	}, [drawerStore, storeValues]);

	return <Provider value={drawerStore}>{children}</Provider>;
}

export { DrawerContextProvider, useContext };
