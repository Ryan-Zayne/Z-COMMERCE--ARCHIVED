import { useEffect, useState } from 'react';
import { createStore, useStore } from 'zustand';
import { createContext, useContext } from '../../hooks/context-hook';
import { useCallbackRef } from '../../hooks/useCallbackRef';

const DrawerContext = createContext({
	name: 'DrawerStoreContext',
	hookName: 'useDrawerStore',
	strict: true,
	providerName: 'DrawerContextProvider',
});

const createDrawerStore = () =>
	createStore(() => ({
		isOpen: false,
		onOpen: () => {},
		onClose: () => {},
		onToggle: () => {},
	}));

const useDrawerStore = (callbackFn) => {
	const store = useContext(DrawerContext);
	const selector = useCallbackRef(callbackFn);

	return useStore(store, selector);
};

const DrawerContextProvider = ({ children, storeValues }) => {
	const [drawerStore] = useState(() => createDrawerStore());

	useEffect(() => {
		drawerStore.setState(storeValues);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [storeValues]);

	return <DrawerContext.Provider value={drawerStore}>{children}</DrawerContext.Provider>;
};

export { DrawerContextProvider, useDrawerStore };
