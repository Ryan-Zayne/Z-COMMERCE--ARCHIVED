import { useEffect, useRef, useState } from 'react';

const useScrollObserver = (options = {}) => {
	const elementRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [scrollObserver] = useState(
		() =>
			new IntersectionObserver(([entry]) => {
				setIsScrolled(!entry.isIntersecting);
			}, options)
	);

	useEffect(() => {
		const scrollWatcher = document.createElement('span');
		scrollWatcher.setAttribute('data-scroll-watcher', '');

		if (elementRef.current) {
			elementRef.current.before(scrollWatcher);
		}

		scrollObserver.observe(scrollWatcher);

		return () => {
			scrollWatcher.remove();
			scrollObserver.disconnect();
		};
	}, [scrollObserver]);

	return { isScrolled, elementRef };
};

export { useScrollObserver };
