/* eslint-disable prefer-const */
import { useRef, useEffect } from 'react';
import { useGlobalStore } from '../zustand-store/globalStore';

const elements = [
	{ target: 'heading', animationClass: 'animate-fade-in-down' },
	{ target: 'button', animationClass: 'animate-fade-in-up' },
	{ target: 'paragraph', animationClass: 'animate-fade-in-up-2' },
];

class ELementError extends Error {
	constructor(value) {
		super(`"${value}" does not Exist`);
		this.name = 'ElementError';
	}
}

const useAnimateRef = () => {
	const elementRef = useRef({});
	const currentSlide = useGlobalStore((state) => state.currentSlide);

	useEffect(() => {
		elements.forEach((elem) => {
			if (!elementRef.current[elem.target]) {
				throw new ELementError(elem.target);
			}

			elementRef.current[elem.target].classList.add(elem.animationClass);
		});

		// Animation Timeout
		let fadeAnimationId;

		fadeAnimationId = setTimeout(() => {
			elements.forEach((elem) => {
				elementRef.current[elem.target].classList.remove(elem.animationClass);
			});
		}, 2000);

		return () => clearTimeout(fadeAnimationId);
	}, [currentSlide]);

	return { animatedElements: elementRef.current };
};

export default useAnimateRef;
