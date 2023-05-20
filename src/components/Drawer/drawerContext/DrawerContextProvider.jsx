import { createContext } from 'react';

const DrawerContext = createContext({
	isOpen: false,
	onOpen: () => {},
	onClose: () => {},
	onToggle: () => {},
});

const DrawerContextProvider = ({ children, value = {} }) => {
	return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};

export { DrawerContextProvider, DrawerContext };
