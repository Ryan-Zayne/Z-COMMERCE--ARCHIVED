import { useCarouselStore } from '@/components/Carousel/carouselStoreContext';
import { useEffect, useRef } from 'react';

type ElementRefObject = {
	heading: HTMLHeadingElement | null;
	button: HTMLButtonElement | HTMLDivElement | null;
	paragraph: HTMLParagraphElement | null;
};

class ELementError extends Error {
	name = 'ELementError';

	constructor(value: string) {
		super(`"${value}" element does not exist`);
	}
}

const possibleElements = [
	{ targetElement: 'heading', animationClass: 'animate-fade-in-down' },
	{ targetElement: 'button', animationClass: 'animate-fade-in-up' },
	{ targetElement: 'paragraph', animationClass: 'animate-fade-in-up-2' },
] as const;

const useAnimateRef = () => {
	const currentSlide = useCarouselStore((state) => state.currentSlide);

	const elementRef = useRef<ElementRefObject>({
		heading: null,
		button: null,
		paragraph: null,
	});

	const fadeAnimationId = useRef<NodeJS.Timeout>();

	useEffect(() => {
		const addAnimationClasses = () => {
			for (const element of possibleElements) {
				if (!elementRef.current[element.targetElement]) {
					throw new ELementError(element.targetElement);
				}

				elementRef.current[element.targetElement]?.classList.add(element.animationClass);
			}
		};

		const removeAnimationClasses = () => {
			for (const element of possibleElements) {
				elementRef.current[element.targetElement]?.classList.remove(element.animationClass);
			}
		};

		addAnimationClasses();

		fadeAnimationId.current = setTimeout(removeAnimationClasses, 2000);

		return () => clearTimeout(fadeAnimationId.current);
	}, [currentSlide]);

	return { animatedElements: elementRef.current };
};

export { useAnimateRef };
