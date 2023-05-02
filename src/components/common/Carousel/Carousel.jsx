import { twMerge } from 'tailwind-merge';
import { useCarousel } from '../../../hooks';
import SwipeDisabler from './SwipeDisabler';
import CarouselIndicator from './CarouselIndicator';
import CarouselIndicatorWrapper from './CarouselIndicatorWrapper';
import CarouselItem from './CarouselItem';
import CarouselItemWrapper from './CarouselItemWrapper';
import CarouselCaption from './CarouselCaption';

const Carousel = ({
	as: Element = 'article',
	children,
	outerClassName = '',
	innerClassName = '',
	images,
	arrowIcon,
	leftBtnClasses = '',
	rightBtnClasses = '',
	isAutoSlide = false,
	autoSlideInterval = 10000,
	pauseOnHover = false,
}) => {
	const { setIsPaused, nextSlideButton, previousSlideButton } = useCarousel({
		numberOfSlides: images.length,
		isAutoSlide,
		autoSlideInterval,
	});

	return (
		<Element
			id="Carousel"
			className={twMerge(`relative flex select-none ${outerClassName}`)}
			onMouseEnter={() => pauseOnHover && setIsPaused(true)}
			onMouseLeave={() => pauseOnHover && setIsPaused(false)}
		>
			<button className="absolute left-0 z-40 h-full w-[9rem]" onClick={previousSlideButton}>
				<span
					className={twMerge(
						`absolute left-[0.7rem] top-[45%] rotate-180 rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-transform active:scale-[1.11] ${leftBtnClasses}`
					)}
				>
					{arrowIcon}
				</span>
			</button>

			<div
				id="Carousel Inner"
				className={twMerge(
					`flex h-full overflow-x-scroll scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${innerClassName}`
				)}
			>
				{/* Disables Carousel Swipe on mobile (E get why...) */}
				<SwipeDisabler />
				{children}
			</div>

			<button className="absolute right-0 z-40 h-full w-[9rem]" onClick={nextSlideButton}>
				<span
					className={twMerge(
						`absolute right-[0.7rem] top-[45%] rounded-[5px] bg-carousel-btn p-[0.8rem_0.5rem] transition-transform active:scale-[1.11] ${rightBtnClasses}`
					)}
				>
					{arrowIcon}
				</span>
			</button>
		</Element>
	);
};

Carousel.Item = CarouselItem;
Carousel.ItemWrapper = CarouselItemWrapper;
Carousel.Caption = CarouselCaption;
Carousel.Indicator = CarouselIndicator;
Carousel.IndicatorWrapper = CarouselIndicatorWrapper;

export default Carousel;
