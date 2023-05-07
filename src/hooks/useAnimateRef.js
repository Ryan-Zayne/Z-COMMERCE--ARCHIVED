import { useEffect, useRef } from 'react';
import { useGlobalStore } from '../store/zustand/globalStore';

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
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const elementRef = useRef({});
	const fadeAnimationId = useRef(null);

	useEffect(() => {
		const addAnimationClasses = () => {
			elements.forEach((elem) => {
				if (!elementRef.current[elem.target]) throw new ELementError(elem.target);

				elementRef.current[elem.target].classList.add(elem.animationClass);
			});
		};

		const removeAnimationClasses = () => {
			elements.forEach((elem) => {
				elementRef.current[elem.target].classList.remove(elem.animationClass);
			});
		};

		addAnimationClasses();

		fadeAnimationId.current = setTimeout(removeAnimationClasses, 2000);

		return () => clearTimeout(fadeAnimationId.current);
	}, [currentSlide]);

	return { animatedElements: elementRef.current };
};

export default useAnimateRef;
