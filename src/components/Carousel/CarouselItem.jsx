import { twMerge } from 'tailwind-merge';

const CarouselItem = ({ children, className = '' }) => {
	return <li className={twMerge(`inline-flex w-full shrink-0 ${className}`)}>{children}</li>;
};

export default CarouselItem;
