import { twMerge } from 'tailwind-merge';

const CarouselCaption = ({ children, className = '' }) => {
	return (
		<div id="Carousel Caption" className={twMerge(`absolute text-light ${className}`)}>
			{children}
		</div>
	);
};

export default CarouselCaption;
