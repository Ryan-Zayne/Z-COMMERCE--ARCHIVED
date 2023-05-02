/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useGlobalActions, useGlobalStore } from '../zustand-store/globalStore';
import useRequestAnimation from './useRequestAnimation';

const useCarousel = ({ numberOfSlides, isAutoSlide = false, autoSlideInterval = 10000 }) => {
	const [isPaused, setIsPaused] = useState(false);
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const { nextSlide, previousSlide, goToSlide } = useGlobalActions();

	const maxSlide = numberOfSlides - 1;

	const nextSlideButton = useCallback(() => {
		currentSlide === maxSlide ? goToSlide(0) : nextSlide();
	}, [currentSlide, maxSlide]);

	const previousSlideButton = useCallback(() => {
		currentSlide === 0 ? goToSlide(maxSlide) : previousSlide();
	}, [currentSlide, maxSlide]);

	// AutoSlide functionality
	useRequestAnimation(
		() => nextSlideButton(),
		isAutoSlide && !isPaused && !isNavShow ? autoSlideInterval : null
	);

	// Resetting the currentSlide state on route change
	useEffect(() => goToSlide(0), []);

	return { previousSlideButton, nextSlideButton, setIsPaused };
};

export default useCarousel;
