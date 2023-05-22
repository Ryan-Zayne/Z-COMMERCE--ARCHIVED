import { useEffect, useRef } from 'react';
import { useCarouselStore } from '../components/Carousel';

const elements = [
	{ targetElement: 'heading', animationClass: 'animate-fade-in-down' },
	{ targetElement: 'button', animationClass: 'animate-fade-in-up' },
	{ targetElement: 'paragraph', animationClass: 'animate-fade-in-up-2' },
];

class ELementError extends Error {
	name = 'ELementError';

	constructor(value) {
		super(`"${value}" element does not exist`);
	}
}

const useAnimateRef = () => {
	const currentSlide = useCarouselStore((state) => state.currentSlide);
	const elementRef = useRef({});
	const fadeAnimationId = useRef(null);

	useEffect(() => {
		const addAnimationClasses = () => {
			for (const elem of elements) {
				if (!elementRef.current[elem.targetElement]) {
					throw new ELementError(elem.targetElement);
				}

				elementRef.current[elem.targetElement].classList.add(elem.animationClass);
			}
		};

		const removeAnimationClasses = () => {
			for (const elem of elements) {
				elementRef.current[elem.targetElement].classList.remove(elem.animationClass);
			}
		};

		addAnimationClasses();

		fadeAnimationId.current = setTimeout(removeAnimationClasses, 2000);

		return () => clearTimeout(fadeAnimationId.current);
	}, [currentSlide]);

	return { animatedElements: elementRef.current };
};

export { useAnimateRef };
