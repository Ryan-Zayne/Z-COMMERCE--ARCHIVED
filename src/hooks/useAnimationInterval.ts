/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from './useCallbackRef';

type AnimationOptions<TCallback> = {
	callbackFn: TCallback;
	intervalDuration: number;
};

const useAnimationInterval = <TCallback extends () => void>(options: AnimationOptions<TCallback>) => {
	const { callbackFn, intervalDuration } = options;

	const startTimeStampRef = useRef<number | null>(null);
	const animationFrameId = useRef(0);

	const savedCallback = useCallbackRef(callbackFn);

	/**
	 * @param timeStamp - The timestamp of the current animation frame (automatically passed by requestAnimationFrame API).
	 */

	// prettier-ignore
	const smoothAnimation = useCallback((timeStamp: DOMHighResTimeStamp) => {
			//* If the start time has not been set yet, set it to the current timestamp.
			if (startTimeStampRef.current === null) {
				startTimeStampRef.current = timeStamp;
			}

			//* Calculate the elapsed time since the animation started.
			const elapsedTime = timeStamp - startTimeStampRef.current;

			//* Call the callback function and reset the start timestamp when the interval duration elapses.
			if (intervalDuration && elapsedTime >= intervalDuration) {
				savedCallback();
				startTimeStampRef.current = timeStamp;
			}

			//* Continue the animation by recursively requesting the next animation frame until the interval duration has elapses again.
			animationFrameId.current = requestAnimationFrame(smoothAnimation);
		},
		[intervalDuration, savedCallback]
	);

	const onAnimationStart = useCallback(
		() => (animationFrameId.current = requestAnimationFrame(smoothAnimation)),
		[smoothAnimation]
	);

	const onAnimationStop = useCallback(() => cancelAnimationFrame(animationFrameId.current), []);

	useEffect(() => {
		if (intervalDuration !== null) {
			onAnimationStart();

			return () => onAnimationStop();
		}
	}, [intervalDuration, onAnimationStart, onAnimationStop]);

	return { onAnimationStop };
};

export { useAnimationInterval };
