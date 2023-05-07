/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

/**
 * Custom hook that implements a requestAnimationFrame loop with a delay.
 * @param {function} callbackFn - The function to be called on each animation frame.
 * @param {number} intervalDuration - The delay duration in milliseconds between each animation frame.
 * @returns {object}(optional) - An object containing the ID of the current animation frame.
 */

const useAnimationInterval = (callbackFn, intervalDuration) => {
	// Refs to hold the latest callback function, the start time, and the current animation frame ID.
	const savedCallbackRef = useRef(callbackFn);
	const startTimeStampRef = useRef(null);
	const animationFrameId = useRef(null);

	// useEffect hook to save the latest callback function to the ref
	useEffect(() => {
		savedCallbackRef.current = callbackFn;
	}, [callbackFn]);

	useEffect(() => {
		/**
		 * A function that plays the animation and calls the saved callback function when the interval duration has elapsed.
		 * @param {DOMHighResTimeStamp} timeStamp - The timestamp of the current animation frame (automatically passed by requestAnimationFrame).
		 */

		const playAnimation = (timeStamp) => {
			// If the start time has not been set yet, set it to the current timestamp.
			if (startTimeStampRef.current == null) {
				startTimeStampRef.current = timeStamp;
			}

			// Calculate the elapsed time since the animation started.
			const elapsedTime = timeStamp - startTimeStampRef.current;

			// Call the callback function and reset the start timestamp if the interval duration has elapsed.
			if (elapsedTime >= intervalDuration) {
				savedCallbackRef.current();
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
	}, [intervalDuration]);

	return animationFrameId;
};

export default useAnimationInterval;
