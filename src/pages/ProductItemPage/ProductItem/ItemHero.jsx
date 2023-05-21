/* eslint-disable react/no-array-index-key */
import { BsChevronRight } from 'react-icons/bs';
import { useCarouselStore } from '../../../components/Carousel';
import {
	Carousel,
	CarouselIndicator,
	CarouselIndicatorWrapper,
	CarouselItem,
	CarouselItemWrapper,
} from '../../../components/Carousel/Carousel';
import { useThemeStore } from '../../../store/zustand/themeStore';

const ItemHero = () => {
	const isDarkMode = useThemeStore((state) => state.isDarkMode);
	const slideImages = useCarouselStore((state) => state.slideImages);

	const CarouselItems = slideImages.map((image, index) => (
		<CarouselItem key={index}>
			<img className="object-cover" src={image} alt="" />
		</CarouselItem>
	));

	const CarouselIndicators = slideImages.map((_, index) => (
		<CarouselIndicator
			key={index}
			index={index}
			className={
				'bg-[hsl(198,14%,14%)] hover:bg-[hsl(220,62%,31%)] hover:[box-shadow:0_0_5px_hsl(220,62%,31%)]'
			}
			onActiveClassName={'p-[0.4rem] w-[0.6rem] bg-[hsl(220,62%,31%)]'}
		/>
	));

	return (
		<article>
			<Carousel
				as="div"
				outerClassName={'md:w-[40rem] lg:w-[45rem] h-[30rem] md:h-[44rem]'}
				innerClassName={`rounded-[0.7rem] ${
					isDarkMode ? 'max-lg:[box-shadow:0_0_3px_0.1px_var(--carousel-dot)]' : ''
				}`}
				arrowIcon={<BsChevronRight />}
				leftBtnClasses={'p-[0.7rem_0.4rem] text-[1.7rem] md:text-[2rem] '}
				rightBtnClasses={'p-[0.7rem_0.4rem] text-[1.7rem] md:text-[2rem]'}
			>
				<CarouselItemWrapper className={'brightness-[0.65]'}>{CarouselItems}</CarouselItemWrapper>
				<CarouselIndicatorWrapper>{CarouselIndicators}</CarouselIndicatorWrapper>
			</Carousel>
		</article>
	);
};
export default ItemHero;
