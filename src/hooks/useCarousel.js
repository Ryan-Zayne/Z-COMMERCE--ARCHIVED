/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useGlobalActions, useGlobalStore } from '../store/zustand/globalStore';
import useAnimationInterval from './useAnimationInterval';

const useCarousel = ({ numberOfSlides, isAutoSlide = false, autoSlideInterval = 10000 }) => {
	const [isPaused, setIsPaused] = useState(false);
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const isMobile = useGlobalStore((state) => state.isMobile);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const { nextSlide, previousSlide, goToSlide } = useGlobalActions();

	// Resetting the global currentSlide state on route change (on mount of new component)
	useEffect(() => goToSlide(0), []);

	const maxSlide = numberOfSlides - 1;

	const nextSlideButton = useCallback(() => {
		currentSlide === maxSlide ? goToSlide(0) : nextSlide();
	}, [currentSlide, maxSlide]);

	const previousSlideButton = useCallback(() => {
		currentSlide === 0 ? goToSlide(maxSlide) : previousSlide();
	}, [currentSlide, maxSlide]);

	// AutoSlide functionality for a given slideInterval
	useAnimationInterval(
		() => nextSlideButton(),
		isAutoSlide && !isPaused && !isNavShow && !isMobile ? autoSlideInterval : null
	);

	return { previousSlideButton, nextSlideButton, setIsPaused };
};

export default useCarousel;
