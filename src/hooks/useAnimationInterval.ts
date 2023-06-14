/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';
import { useCallbackRef } from './useCallbackRef';

const useAnimationInterval = (callbackFn: () => void, intervalDuration: number | null) => {
	// Refs to hold the start time and the current animation frame ID.
	const startTimeStampRef = useRef<number | null>(null);
	const animationFrameId = useRef<number>(0);

	// Saved callback function with useCallbackRef hook.
	const savedCallback = useCallbackRef(callbackFn);

	useEffect(() => {
		/**
		 * This is a function that plays the animation and calls the saved callback function when the interval duration has elapsed.
		 * @param timeStamp - The timestamp of the current animation frame (automatically passed by requestAnimationFrame).
		 */

		const playAnimation = (timeStamp: DOMHighResTimeStamp) => {
			// If the start time has not been set yet, set it to the current timestamp.
			if (startTimeStampRef.current === null) {
				startTimeStampRef.current = timeStamp;
			}

			// Calculate the elapsed time since the animation started.
			const elapsedTime = timeStamp - startTimeStampRef.current;

			// Call the callback function and reset the start timestamp if the interval duration has elapsed

			if (intervalDuration && elapsedTime >= intervalDuration) {
				savedCallback();
				startTimeStampRef.current = timeStamp;
			}

			// Continue the animation by requesting the next animation frame until the interval duration has elapsed again.
			animationFrameId.current = requestAnimationFrame(playAnimation);
		};

		// If the delay duration is not null, start the animation frame loop.
		if (intervalDuration !== null) {
			animationFrameId.current = requestAnimationFrame(playAnimation);

			// Return a function to cancel the animation frame on unmount.
			return () => cancelAnimationFrame(animationFrameId.current);
		}
	}, [intervalDuration, savedCallback]);

	// return animationFrameId.current;
};

export { useAnimationInterval };
