import { createContext, useContext } from '../../hooks/hook-context';

const DrawerContext = createContext({
	name: 'DrawerContext',
	hookName: 'useDrawerContext',
	providerName: '<Drawer/>',
	isOpen: false,
	onOpen: () => {},
	onClose: () => {},
	onToggle: () => {},
});

const DrawerContextProvider = ({ children, value = {} }) => {
	return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};

const useDrawerContext = () => useContext(DrawerContext);

export { DrawerContextProvider, useDrawerContext };
