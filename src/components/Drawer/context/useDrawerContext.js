import { useContext } from 'react';
import { useStore } from 'zustand';
import { DrawerContext } from './DrawerContextProvider';

const useDrawerContext = (selector, equalityFn) => {
	const store = useContext(DrawerContext);

	if (store == null) throw new Error('You forgot to wrap Drawer components with <Drawer/>');

	return useStore(store, selector, equalityFn);
};

export default useDrawerContext;
