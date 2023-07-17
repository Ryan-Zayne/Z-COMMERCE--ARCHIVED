import { WithChildren } from '@/global-helpers.types';
import { StoreApi } from 'zustand';

export type CarouselStore = {
	currentSlide: number;
	slideImages:
		| Array<{
				src: string;
				blurSrc?: string;
		  }>
		| string[];
	goToSlide: (resetValue: number) => void;
	nextSlide: () => void;
	previousSlide: () => void;
};

export type CarouselProviderProps = WithChildren<Pick<CarouselStore, 'slideImages'>>;

export type CarouselStoreApi = StoreApi<CarouselStore>;
