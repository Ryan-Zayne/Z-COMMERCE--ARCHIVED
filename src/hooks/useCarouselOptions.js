import { useState } from 'react';
import { useCarouselStore } from '../components/Carousel/carouselStoreContext';
import { useGlobalStore } from '../store/zustand/globalStore';
import useAnimationInterval from './useAnimationInterval';

const useCarouselOptions = ({ isAutoSlide = false, autoSlideInterval = 10000 }) => {
	const [isPaused, setIsPaused] = useState(false);
	const isMobile = useGlobalStore((state) => state.isMobile);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const nextSlide = useCarouselStore((state) => state.nextSlide);

	// AutoSlide functionality for a given slideInterval
	useAnimationInterval(
		() => nextSlide(),
		isAutoSlide && !isPaused && !isNavShow && !isMobile ? autoSlideInterval : null
	);

	return { setIsPaused };
};

export default useCarouselOptions;
