import { twMerge } from 'tailwind-merge';
import { useCarousel } from '../../hooks';
import { useGlobalActions, useGlobalStore } from '../../store/zustand/globalStore';
import SwipeDisabler from './SwipeDisabler';

const Carousel = ({
	as: Element = 'article',
	children,
	images = [],
	outerClassName = '',
	innerClassName = '',
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
	const isMobile = useGlobalStore((state) => state.isMobile);

	return (
		<Element
			id="Carousel"
			className={twMerge(`relative flex select-none ${outerClassName}`)}
			onMouseEnter={() => !isMobile && pauseOnHover && setIsPaused(true)}
			onMouseLeave={() => !isMobile && pauseOnHover && setIsPaused(false)}
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
				{isMobile && <SwipeDisabler />}
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

Carousel.Item = function CarouselItem({ children, className = '' }) {
	return <li className={twMerge(`inline-flex w-full shrink-0 ${className}`)}>{children}</li>;
};

Carousel.ItemWrapper = function CarouselItemWrapper({ children, className = '' }) {
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

Carousel.Caption = function CarouselCaption({ children, className = '' }) {
	return (
		<div id="Carousel Caption" className={twMerge(`absolute text-light ${className}`)}>
			{children}
		</div>
	);
};

Carousel.Indicator = function CarouselIndicator({ className = '', onActiveClassName, index }) {
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

Carousel.IndicatorWrapper = function CarouselIndicatorWrapper({ children, className = '' }) {
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

export default Carousel;
