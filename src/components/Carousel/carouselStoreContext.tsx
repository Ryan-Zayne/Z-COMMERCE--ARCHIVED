import { assertDefined } from '@/global-helpers.types';
import { createContext } from '@/hooks/context-hook';
import { useCallbackRef } from '@/hooks/useCallbackRef';
import { useState } from 'react';
import { createStore, useStore } from 'zustand';
import { CarouselProviderProps, CarouselStore, CarouselStoreApi } from './carousel.types';

const [Provider, useContext] = createContext<CarouselStoreApi | null>({
	name: 'CarouselStoreContext',
	strict: true,
	hookName: 'useCarouselStore',
	providerName: 'CarouselContextProvider',
	defaultValue: null,
});

const createCarouselStore = (slideImages: CarouselStore['slideImages']) =>
	createStore<CarouselStore>((set, get) => ({
		currentSlide: 0,
		slideImages,

		goToSlide: (resetValue: number) => set({ currentSlide: resetValue }),

		nextSlide: () => {
			const { currentSlide, goToSlide } = get();
			const maxSlide = slideImages.length - 1;
			currentSlide !== maxSlide ? goToSlide(currentSlide + 1) : goToSlide(0);
		},

		previousSlide: () => {
			const { currentSlide, goToSlide } = get();
			const maxSlide = slideImages.length - 1;
			currentSlide !== 0 ? goToSlide(currentSlide - 1) : goToSlide(maxSlide);
		},
	}));

function CarouselContextProvider({ children, slideImages }: CarouselProviderProps) {
	const [carouselStore] = useState(() => createCarouselStore(slideImages));

	return <Provider value={carouselStore}>{children}</Provider>;
}

const useCarouselStore = <TState,>(callbackFn: (store: CarouselStore) => TState) => {
	const store = useContext();
	const selector = useCallbackRef(callbackFn);

	return useStore<CarouselStoreApi, TState>(assertDefined(store), selector);
};

export { CarouselContextProvider, useCarouselStore };
