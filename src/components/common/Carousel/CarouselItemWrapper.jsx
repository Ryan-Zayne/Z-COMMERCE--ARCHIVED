import { twMerge } from 'tailwind-merge';
import { useGlobalStore } from '../../../zustand-store/globalStore';

const CarouselItemWrapper = ({ children, className = '' }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	return (
		<ul
			id="Carousel Image Wrapper"
			className={twMerge(
				`flex w-full shrink-0 transition-transform duration-[1000ms] ease-in-out will-change-transform ${className}`
			)}
			style={{
				transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
			}}
		>
			{children}
		</ul>
	);
};

export default CarouselItemWrapper;
