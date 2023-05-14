import { useEffect, useRef } from 'react';
import { useGlobalStore } from '../store/zustand/globalStore';

const elements = [
	{ targetElement: 'heading', animationClass: 'animate-fade-in-down' },
	{ targetElement: 'button', animationClass: 'animate-fade-in-up' },
	{ targetElement: 'paragraph', animationClass: 'animate-fade-in-up-2' },
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
		function addAnimationClasses() {
			for (const elem of elements) {
				if (!elementRef.current[elem.targetElement]) {
					throw new ELementError(elem.targetElement);
				}
				elementRef.current[elem.targetElement].classList.add(elem.animationClass);
			}
		}

		function removeAnimationClasses() {
			for (const elem of elements) {
				elementRef.current[elem.targetElement].classList.remove(elem.animationClass);
			}
		}

		addAnimationClasses();

		fadeAnimationId.current = setTimeout(removeAnimationClasses, 2000);

		return () => clearTimeout(fadeAnimationId.current);
	}, [currentSlide]);

	return { animatedElements: elementRef.current };
};

export default useAnimateRef;
