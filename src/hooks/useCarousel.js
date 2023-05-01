/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';
import { useGlobalActions, useGlobalStore } from '../zustand-store/globalStore';
import useRequestAnimation from './useRequestAnimation';

const useCarousel = ({ numberOfSlides, isAutoSlide = false, autoSlideInterval = 10000 }) => {
	const [isPaused, setIsPaused] = useState(false);
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const isNavShow = useGlobalStore((state) => state.isNavShow);
	const { nextSlide, previousSlide, goToSlide } = useGlobalActions();
	const href = useHref();

	const maxSlide = numberOfSlides - 1;

	const nextSlideButton = () => (currentSlide === maxSlide ? goToSlide(0) : nextSlide());

	const previousSlideButton = () => (currentSlide === 0 ? goToSlide(maxSlide) : previousSlide());

	// AutoSlide functionality
	useRequestAnimation(
		() => nextSlideButton(),
		isAutoSlide && !isPaused && !isNavShow ? autoSlideInterval : null
	);

	// Resetting the currentSlide state on route change
	useEffect(() => goToSlide(0), [href]);

	return { previousSlideButton, nextSlideButton, setIsPaused };
};

export default useCarousel;
