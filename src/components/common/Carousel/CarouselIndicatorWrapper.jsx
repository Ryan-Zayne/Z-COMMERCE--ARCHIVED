import { twMerge } from 'tailwind-merge';

const CarouselIndicatorWrapper = ({ children, className = '' }) => {
	return (
		<span
			id="Carousel Indicators"
			className={twMerge(
				`absolute bottom-[2.5rem] z-[2] inline-flex w-full items-center justify-center gap-[1.5rem] ${className}`
			)}
		>
			{children}
		</span>
	);
};

export default CarouselIndicatorWrapper;
