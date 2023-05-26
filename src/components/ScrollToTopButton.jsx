import { BsChevronUp } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import { useScrollObserver } from '../hooks';

const ScrollToTopButton = () => {
	const { isScrolled, elementRef } = useScrollObserver({ rootMargin: '600px 0px 0px' });

	return (
		<a ref={elementRef} href="#root" className="fixed bottom-[3rem] right-[3rem] z-[500]">
			<button
				className={twMerge(
					`flex aspect-square w-[4rem] items-center justify-center rounded-[62%_38%_46%_54%/60%_63%_37%_40%] bg-secondary text-[2rem] text-dark transition-[translate,scale] duration-[400ms] [scale:0] [translate:0_-5000%]`,
					[isScrolled && 'duration-[1.2s] ease-in-out [scale:1] [translate:0_0]']
				)}
			>
				<BsChevronUp />
			</button>
		</a>
	);
};

export default ScrollToTopButton;
