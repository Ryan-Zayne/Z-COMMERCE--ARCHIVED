import { createContext, useState } from 'react';
import { createStore } from 'zustand';

const DrawerContext = createContext({
	isOpen: false,
	onOpen: () => {},
	onClose: () => {},
	onToggle: () => {},
});

const createDrawerStore = (initializationProps) => {
	const storeObject = createStore(() => ({
		...initializationProps,
	}));

	return storeObject;
};

const DrawerContextProvider = ({ children, value }) => {
	const [storeObject] = useState(createDrawerStore(value));
	console.log(value);

	return <DrawerContext.Provider value={storeObject}>{children}</DrawerContext.Provider>;
};

export { DrawerContextProvider, DrawerContext };
