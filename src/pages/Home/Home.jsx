import { CarouselContextProvider } from '../../components/Carousel/carouselStoreContext';
import Hero from './Hero/Hero';
import HomeProductSection from './HomeProductSection/HomeProductSection';

const images = [
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/laptop1_dviwpy.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/laptop2_g9ld1b.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454293/Ecommerce/Carousel-images/phone1_tqjof2.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454294/Ecommerce/Carousel-images/phone2_ngnbzv.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454296/Ecommerce/Carousel-images/tablet2_yyzbfs.webp',
	'https://res.cloudinary.com/djvestif4/image/upload/v1680454295/Ecommerce/Carousel-images/tablet3_m2meyj.webp',
];

const HomePage = () => {
	return (
		<>
			<CarouselContextProvider slideImages={images}>
				<Hero />
			</CarouselContextProvider>
			<HomeProductSection />
		</>
	);
};

export default HomePage;
