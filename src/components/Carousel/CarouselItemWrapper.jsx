import { twMerge } from 'tailwind-merge';
import { useGlobalStore } from '../../store/zustand/globalStore';

const CarouselItemWrapper = ({ children, className = '' }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	return (
		<ul
			id="Carousel Image Wrapper"
			className={twMerge(
				`flex w-full shrink-0 transition-transform duration-[1000ms] ease-in-out ${className}`
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
