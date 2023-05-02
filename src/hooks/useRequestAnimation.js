import { useEffect, useRef, useCallback } from 'react';

const useRequestAnimation = (callback, delay) => {
	const savedCallback = useRef(callback);
	const startTimestamp = useRef(0);
	const animationFrameId = useRef(null);

	/*	useEffect hook to save the latest callback function to be executed
	   on component rerender */
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	const playAnimation = useCallback(
		(timestamp) => {
			if (!startTimestamp.current) {
				startTimestamp.current = timestamp;
			}

			const elapsed = timestamp - startTimestamp.current;

			if (elapsed > delay) {
				savedCallback.current();
				startTimestamp.current = timestamp;
			}

			animationFrameId.current = requestAnimationFrame(playAnimation);
		},
		[delay]
	);

	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (delay !== null) {
			animationFrameId.current = requestAnimationFrame(playAnimation);
			return () => cancelAnimationFrame(animationFrameId.current);
		}
	}, [delay, playAnimation]);

	return animationFrameId.current;
};

export default useRequestAnimation;
