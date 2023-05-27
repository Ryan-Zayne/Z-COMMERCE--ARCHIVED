import { CarouselContextProvider } from '../../components/Carousel/carouselStoreContext';
import { images } from './images';
import Hero from './Hero/Hero';
import HomeProductSection from './HomeProductSection/HomeProductSection';

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
