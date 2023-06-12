import { createContext } from '@/hooks/context-hook';
import { useState } from 'react';
import { createStore } from 'zustand';
import { CarouselProviderProps, CarouselStore, CarouselStoreApi } from './carousel.types';

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

const [Provider, useContext] = createContext<CarouselStoreApi | null>({
	name: 'CarouselStoreContext',
	strict: true,
	hookName: 'useCarouselStore',
	providerName: 'CarouselContextProvider',
	defaultValue: null,
});

const CarouselContextProvider = ({ children, slideImages }: CarouselProviderProps) => {
	const [carouselStore] = useState(() => createCarouselStore(slideImages));

	return <Provider value={carouselStore}>{children}</Provider>;
};

export { CarouselContextProvider, useContext };
