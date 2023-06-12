import { StoreApi } from 'zustand';

export type CarouselStore = {
	currentSlide: number;
	slideImages:
		| string[]
		| Array<{
				src: string;
				blurSrc?: string;
		  }>;
	goToSlide: (resetValue: number) => void;
	nextSlide: () => void;
	previousSlide: () => void;
};

export type CarouselProviderProps = {
	children: React.ReactNode;
	slideImages: CarouselStore['slideImages'];
};

export type CarouselStoreApi = StoreApi<CarouselStore>;
