import { useState } from 'react';
import { createStore, useStore } from 'zustand';
import { createContext, useContext } from '../../hooks/context-hook';
import { useCallbackRef } from '../../hooks/useCallbackRef';

const CarouselContext = createContext({
	name: 'CarouselStoreContext',
	strict: true,
	hookName: 'useCarouselStore',
	providerName: 'CarouselContextProvider',
});

const createCarouselStore = (stateInitProps = {}) =>
	createStore((set, get) => ({
		currentSlide: 0,
		slideImages: [],
		...stateInitProps,

		goToSlide: (resetValue) => set({ currentSlide: resetValue }),

		nextSlide: () => {
			const { currentSlide, slideImages, goToSlide } = get();
			const maxSlide = slideImages.length - 1;
			currentSlide !== maxSlide ? goToSlide(currentSlide + 1) : goToSlide(0);
		},

		previousSlide: () => {
			const { currentSlide, slideImages, goToSlide } = get();
			const maxSlide = slideImages.length - 1;
			currentSlide !== 0 ? goToSlide(currentSlide - 1) : goToSlide(maxSlide);
		},
	}));

const CarouselContextProvider = ({ children, slideImages }) => {
	const [carouselStore] = useState(() => createCarouselStore({ slideImages }));

	return <CarouselContext.Provider value={carouselStore}>{children}</CarouselContext.Provider>;
};

const useCarouselStore = (callbackFn) => {
	const store = useContext(CarouselContext);

	const selector = useCallbackRef(callbackFn);

	return useStore(store, selector);
};

export { CarouselContextProvider, useCarouselStore };
