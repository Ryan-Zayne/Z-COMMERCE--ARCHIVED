import { twMerge } from 'tailwind-merge';
import { useGlobalActions, useGlobalStore } from '../../store/zustand/globalStore';

const CarouselIndicator = ({ className = '', onActiveClassName, index }) => {
	const currentSlide = useGlobalStore((state) => state.currentSlide);
	const { goToSlide } = useGlobalActions();
	return (
		<span
			onClick={() => goToSlide(index)}
			className={twMerge(`
				inline-block h-[0.6rem] w-[0.6rem] shrink-0 cursor-pointer rounded-[50%] bg-carousel-btn ease-in-out hover:bg-carousel-dot hover:[box-shadow:0_0_5px_var(--carousel-dot)] ${className}
				${index === currentSlide ? `w-[3.5rem] rounded-[0.5rem] bg-carousel-dot ${onActiveClassName}` : ''}
			`)}
		/>
	);
};

export default CarouselIndicator;
