import { useCallbackRef } from '@/hooks/useCallbackRef';
import { useStore } from 'zustand';
import { CarouselStore, CarouselStoreApi } from './carousel-types';
import { useContext } from './carouselStoreContext';

const useCarouselStore = <T>(callbackFn: (store: CarouselStore) => T) => {
	const store = useContext();
	const selector = useCallbackRef(callbackFn);

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return useStore<CarouselStoreApi, unknown>(store!, selector) as T;
};

export { useCarouselStore };
