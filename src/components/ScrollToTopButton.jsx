import { FaArrowUp } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { useScrollObserver } from '../hooks';

const ScrollToTopButton = () => {
	const { isScrolled, elementRef } = useScrollObserver({ rootMargin: '600px 0px 0px' });

	return (
		<a ref={elementRef} href="#root" className="fixed bottom-[3rem] right-[3rem] z-[500]">
			<button
				className={twMerge(
					`flex aspect-square w-[4.5rem] items-center justify-center rounded-[62%_38%_46%_54%/60%_63%_37%_40%] bg-secondary text-[1.8rem] font-[500] text-dark transition-[translate,scale] delay-[0.3s,0.7s] duration-[1.2s] ease-in-out`,
					isScrolled ? '[scale:1] [translate:0_0] ' : '[scale:0] [translate:0_-3000%]'
				)}
			>
				<FaArrowUp />
			</button>
		</a>
	);
};

export default ScrollToTopButton;
