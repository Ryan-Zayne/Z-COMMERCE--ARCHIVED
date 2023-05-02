import { useRef, useEffect, useCallback } from 'react';
import { useGlobalStore } from '../zustand-store/globalStore';

const elements = [
	{ target: 'heading', animationClass: 'animate-fade-in-down' },
	{ target: 'button', animationClass: 'animate-fade-in-up' },
	{ target: 'paragraph', animationClass: 'animate-fade-in-up-2' },
];

class ELementError extends Error {
	name = 'ELementError';

	constructor(value) {
		super(`"${value}" does not Exist`);
	}
}

const useAnimateRef = () => {
	const elementRef = useRef({});
	const currentSlide = useGlobalStore((state) => state.currentSlide);

	const addAnimationClasses = useCallback(() => {
		elements.forEach((elem) => {
			if (!elementRef.current[elem.target]) throw new ELementError(elem.target);
			elementRef.current[elem.target].classList.add(elem.animationClass);
		});
	}, []);

	const removeAnimationClasses = useCallback(() => {
		elements.forEach((elem) => {
			elementRef.current[elem.target].classList.remove(elem.animationClass);
		});
	}, []);

	useEffect(() => {
		addAnimationClasses();

		const fadeAnimationId = setTimeout(removeAnimationClasses, 2000);

		return () => clearTimeout(fadeAnimationId);
	}, [currentSlide, addAnimationClasses, removeAnimationClasses]);

	return { animatedElements: elementRef.current };
};

export default useAnimateRef;
